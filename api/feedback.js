/*
 * Vercel serverless function for the static-HTML feedback widget.
 * Zero npm dependencies — uses built-in fetch / FormData / Blob (Node 18+).
 *
 * Routes (POST JSON body, `action` field):
 *   action:"improve"  -> rewrites the feedback with Claude, returns { improved }
 *   action:"submit"   -> files a Trello card (+ screenshot), returns { ok:true }
 *
 * Environment variables (set in Vercel project settings):
 *   TRELLO_API_KEY            (required)
 *   TRELLO_TOKEN              (required)
 *   TRELLO_FEEDBACK_LIST_ID   (required) — the list new cards land in
 *   ANTHROPIC_API_KEY         (optional) — enables "Improve with AI" + smart titles
 */

import { waitUntil } from "@vercel/functions";

const IMPROVE_MODEL = "claude-haiku-4-5-20251001";
const TITLE_MODEL = "claude-haiku-4-5-20251001";
const ANTHROPIC_IMAGE_TYPES = ["image/jpeg", "image/png", "image/gif", "image/webp"];

function parseDataUrl(dataUrl) {
  if (typeof dataUrl !== "string") return null;
  const m = /^data:([^;]+);base64,(.+)$/.exec(dataUrl);
  if (!m) return null;
  return { mime: m[1], base64: m[2] };
}

function categoryLabel(category) {
  return category === "bug" ? "bug report" : category === "idea" ? "feature idea" : "question";
}

async function callAnthropic(body) {
  const key = process.env.ANTHROPIC_API_KEY;
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "x-api-key": key,
      "anthropic-version": "2023-06-01",
      "content-type": "application/json",
    },
    body: JSON.stringify(body),
  });
  return res;
}

async function improve({ text, category, pageUrl, image }) {
  if (!process.env.ANTHROPIC_API_KEY) {
    return { status: 400, json: { error: "AI not configured (missing key)" } };
  }

  const label = categoryLabel(category);
  const system =
    "You rewrite rough user feedback into a clear, well-structured " +
    label +
    ".\nRules:\n" +
    "- Write in the same language the user wrote in (default Ukrainian).\n" +
    "- Keep the user's voice — do not invent facts.\n" +
    "- Be concise: 2-4 short sentences. Max ~120 words.\n" +
    "- For bugs: what happened / what was expected (only if inferable).\n" +
    "- No preamble, no sign-off, no markdown headers. Just the rewritten text.";

  const content = [
    { type: "text", text: "Page: " + pageUrl + "\n\nOriginal feedback:\n" + text },
  ];
  if (image && ANTHROPIC_IMAGE_TYPES.indexOf(image.mime) !== -1) {
    content.push({
      type: "image",
      source: { type: "base64", media_type: image.mime, data: image.base64 },
    });
  }

  try {
    const res = await callAnthropic({
      model: IMPROVE_MODEL,
      max_tokens: 400,
      system,
      messages: [{ role: "user", content }],
    });
    if (!res.ok) {
      const b = await res.text();
      return { status: 502, json: { error: "AI " + res.status + ": " + b.slice(0, 120) } };
    }
    const data = await res.json();
    const out = ((data.content && data.content[0] && data.content[0].text) || "").trim();
    if (!out) return { status: 502, json: { error: "Empty AI response" } };
    return { status: 200, json: { improved: out } };
  } catch (err) {
    return { status: 502, json: { error: "AI improvement failed" } };
  }
}

async function generateTitle({ text, category }) {
  if (!process.env.ANTHROPIC_API_KEY) return null;
  const system =
    "Summarize a " +
    categoryLabel(category) +
    " into at most 6 words, in the same language as the feedback (default Ukrainian). No emoji, no quotes, no trailing punctuation. " +
    "Keep the user's intent. Output only the title — no preamble.";
  try {
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 3500);
    const res = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "x-api-key": process.env.ANTHROPIC_API_KEY,
        "anthropic-version": "2023-06-01",
        "content-type": "application/json",
      },
      body: JSON.stringify({
        model: TITLE_MODEL,
        max_tokens: 32,
        system,
        messages: [{ role: "user", content: text }],
      }),
      signal: ctrl.signal,
    });
    clearTimeout(timer);
    if (!res.ok) return null;
    const data = await res.json();
    let title = ((data.content && data.content[0] && data.content[0].text) || "").trim();
    title = title.replace(/^["'`]+|["'`]+$/g, "").replace(/[.!?,;:]+$/g, "").trim();
    title = title.split(/\s+/).slice(0, 6).join(" ");
    return title.length > 0 ? title : null;
  } catch (err) {
    return null;
  }
}

async function submit({ text, category, pageUrl, image, screenshotName }) {
  const apiKey = process.env.TRELLO_API_KEY;
  const apiToken = process.env.TRELLO_TOKEN;
  const listId = process.env.TRELLO_FEEDBACK_LIST_ID;

  if (!apiKey || !apiToken) {
    return { status: 500, json: { error: "Not configured (missing TRELLO_API_KEY or TRELLO_TOKEN)" } };
  }
  if (!listId) {
    return { status: 500, json: { error: "Not configured (missing TRELLO_FEEDBACK_LIST_ID)" } };
  }

  const emoji = category === "bug" ? "🐛" : category === "idea" ? "💡" : "❓";
  // Create the card up front with a quick title so we can confirm success
  // to the user immediately. The nicer AI title and the (potentially large)
  // image upload happen in the background via waitUntil — they shouldn't keep
  // the user waiting on the "Send" button.
  const quickTitle = emoji + " " + text.slice(0, 60);

  const desc = [
    text,
    "",
    "---",
    "**Category:** " + category,
    "**Page:** " + pageUrl,
    "**Time:** " + new Date().toISOString(),
  ].join("\n");

  let res;
  try {
    res = await fetch("https://api.trello.com/1/cards", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        idList: listId,
        name: quickTitle,
        desc: desc,
        pos: "top",
        key: apiKey,
        token: apiToken,
      }),
    });
  } catch (err) {
    return { status: 502, json: { error: "Could not reach Trello" } };
  }

  if (!res.ok) {
    const b = await res.text();
    return { status: 502, json: { error: "Trello " + res.status + ": " + b.slice(0, 100) } };
  }

  const card = await res.json();

  if (card && card.id) {
    // Don't await: refine the title and attach the screenshot in the
    // background. waitUntil keeps the function alive until it settles.
    waitUntil(
      enhanceCard({ cardId: card.id, emoji, text, category, image, screenshotName, apiKey, apiToken })
    );
  }

  return { status: 200, json: { ok: true } };
}

// Background work after the card is created: swap the quick title for a
// concise AI-generated one, then upload the screenshot. Both are best-effort.
async function enhanceCard({ cardId, emoji, text, category, image, screenshotName, apiKey, apiToken }) {
  try {
    const aiTitle = await generateTitle({ text, category });
    if (aiTitle) {
      await fetch("https://api.trello.com/1/cards/" + cardId, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: emoji + " " + aiTitle, key: apiKey, token: apiToken }),
      });
    }
  } catch (err) {
    console.error("Trello title update error:", err);
  }

  if (image) {
    try {
      const buffer = Buffer.from(image.base64, "base64");
      const form = new FormData();
      form.append("file", new Blob([buffer], { type: image.mime }), screenshotName || "screenshot.png");
      form.append("key", apiKey);
      form.append("token", apiToken);
      await fetch("https://api.trello.com/1/cards/" + cardId + "/attachments", {
        method: "POST",
        body: form,
      });
    } catch (err) {
      // Non-fatal: the card was created; the attachment just failed.
      console.error("Trello attachment error:", err);
    }
  }
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  let body = req.body;
  if (typeof body === "string") {
    try {
      body = JSON.parse(body);
    } catch (err) {
      return res.status(400).json({ error: "Invalid JSON body" });
    }
  }
  body = body || {};

  const action = body.action;
  const text = (body.text || "").trim();
  const category = body.category || "idea";
  const pageUrl = body.pageUrl || "";
  const image = parseDataUrl(body.screenshot);
  const screenshotName = body.screenshotName || "screenshot.png";

  if (!text || text.length < 3) {
    return res.status(400).json({ error: "Feedback too short" });
  }
  if (text.length > 4000) {
    return res.status(400).json({ error: "Feedback too long" });
  }

  const result =
    action === "improve"
      ? await improve({ text, category, pageUrl, image })
      : await submit({ text, category, pageUrl, image, screenshotName });

  return res.status(result.status).json(result.json);
}
