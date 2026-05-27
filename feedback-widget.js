/*
 * feedback-widget (vanilla / static-HTML edition)
 * A self-injecting feedback button + modal for any static website.
 * Posts to a Vercel serverless function (default /api/feedback) which
 * files the report as a Trello card. Optional "Improve with AI".
 *
 * UI strings are in Ukrainian (ProfiPower's primary audience).
 *
 * Install: <script src="/feedback-widget.js" defer></script>
 * Config (data-* attrs on that script tag):
 *   data-endpoint="/api/feedback"   where to POST (default /api/feedback)
 *   data-accent="#111827"           button / accent color
 *   data-accent-fg="#ffffff"        text/icon color on the accent
 *   data-title="Залишити відгук"    modal header text
 *   data-ai="false"                 hide the "Improve with AI" button
 */
(function () {
  "use strict";

  var script =
    document.currentScript ||
    (function () {
      var s = document.getElementsByTagName("script");
      return s[s.length - 1];
    })();

  var cfg = {
    endpoint: (script && script.getAttribute("data-endpoint")) || "/api/feedback",
    accent: (script && script.getAttribute("data-accent")) || "#111827",
    accentFg: (script && script.getAttribute("data-accent-fg")) || "#ffffff",
    title: (script && script.getAttribute("data-title")) || "Залишити відгук",
    ai: !(script && script.getAttribute("data-ai") === "false"),
  };

  var CATEGORIES = [
    { key: "bug", emoji: "🐛", label: "Помилка" },
    { key: "idea", emoji: "💡", label: "Ідея" },
    { key: "question", emoji: "❓", label: "Питання" },
  ];

  // ---- state ----
  var open = false;
  var category = "idea";
  var screenshotFile = null;
  var previewUrl = null;
  var sending = false;
  var improving = false;
  var undoText = null;

  // ---- styles ----
  var css =
    ".fbw-root{--fbw-accent:" + cfg.accent + ";--fbw-accent-fg:" + cfg.accentFg + ";" +
    "font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;}" +
    ".fbw-fab{position:fixed;bottom:24px;right:24px;z-index:2147483000;width:48px;height:48px;border:none;" +
    "border-radius:9999px;background:var(--fbw-accent);color:var(--fbw-accent-fg);box-shadow:0 6px 20px rgba(0,0,0,.25);" +
    "cursor:pointer;display:flex;align-items:center;justify-content:center;transition:transform .12s ease,filter .12s ease;}" +
    ".fbw-fab:hover{filter:brightness(1.1);transform:translateY(-1px);}" +
    ".fbw-fab svg{width:22px;height:22px;}" +
    ".fbw-overlay{position:fixed;inset:0;z-index:2147483000;background:rgba(0,0,0,.3);}" +
    ".fbw-modal{position:fixed;bottom:24px;right:24px;z-index:2147483001;width:320px;max-width:calc(100vw - 32px);" +
    "background:#fff;color:#111827;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 20px 50px rgba(0,0,0,.3);" +
    "overflow:hidden;}" +
    ".fbw-drop{position:absolute;inset:8px;z-index:10;border:2px dashed var(--fbw-accent);border-radius:12px;" +
    "background:rgba(0,0,0,.03);display:flex;align-items:center;justify-content:center;pointer-events:none;}" +
    ".fbw-drop span{font-size:12px;font-weight:600;color:var(--fbw-accent);}" +
    ".fbw-head{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid #e5e7eb;}" +
    ".fbw-head span{font-size:14px;font-weight:600;}" +
    ".fbw-x{background:none;border:none;cursor:pointer;color:#6b7280;font-size:18px;line-height:1;padding:2px;}" +
    ".fbw-x:hover{color:#111827;}" +
    ".fbw-body{padding:16px;display:flex;flex-direction:column;gap:12px;}" +
    ".fbw-cats{display:flex;gap:6px;}" +
    ".fbw-cat{flex:1;font-size:12px;font-weight:500;padding:6px 0;border-radius:8px;border:none;cursor:pointer;" +
    "background:#f3f4f6;color:#6b7280;transition:background .12s ease;}" +
    ".fbw-cat:hover{background:#e5e7eb;}" +
    ".fbw-cat.fbw-active{background:var(--fbw-accent);color:var(--fbw-accent-fg);}" +
    ".fbw-text{width:100%;height:96px;padding:8px 12px;font-size:16px;border:1px solid #d1d5db;border-radius:8px;" +
    "resize:none;outline:none;box-sizing:border-box;font-family:inherit;color:#111827;background:#fff;}" +
    ".fbw-text:focus{border-color:var(--fbw-accent);box-shadow:0 0 0 1px var(--fbw-accent);}" +
    ".fbw-text:disabled{opacity:.6;}" +
    "@media(min-width:640px){.fbw-text{font-size:14px;}}" +
    ".fbw-row{display:flex;align-items:center;justify-content:space-between;gap:8px;}" +
    ".fbw-link{background:none;border:none;cursor:pointer;font-size:12px;display:inline-flex;align-items:center;gap:5px;padding:0;font-family:inherit;}" +
    ".fbw-attach{color:#6b7280;}.fbw-attach:hover{color:#111827;}" +
    ".fbw-improve{color:var(--fbw-accent);font-weight:600;}" +
    ".fbw-improve:disabled{opacity:.4;cursor:not-allowed;}" +
    ".fbw-undo{color:#6b7280;font-weight:600;}.fbw-undo:hover{color:#111827;}" +
    ".fbw-prev{position:relative;display:inline-block;}" +
    ".fbw-prev img{height:64px;border-radius:8px;border:1px solid #e5e7eb;object-fit:cover;display:block;}" +
    ".fbw-prev button{position:absolute;top:-6px;right:-6px;width:20px;height:20px;border:none;border-radius:9999px;" +
    "background:#ef4444;color:#fff;cursor:pointer;font-size:12px;line-height:1;}" +
    ".fbw-send{width:100%;padding:9px 0;border:none;border-radius:8px;background:var(--fbw-accent);color:var(--fbw-accent-fg);" +
    "font-size:14px;font-weight:500;cursor:pointer;transition:filter .12s ease;font-family:inherit;}" +
    ".fbw-send:hover{filter:brightness(1.1);}.fbw-send:disabled{opacity:.5;cursor:not-allowed;}" +
    ".fbw-toast{position:fixed;bottom:88px;right:24px;z-index:2147483002;max-width:280px;padding:10px 14px;border-radius:10px;" +
    "font-size:13px;color:#fff;box-shadow:0 8px 24px rgba(0,0,0,.25);opacity:0;transform:translateY(8px);" +
    "transition:opacity .2s ease,transform .2s ease;}" +
    ".fbw-toast.fbw-show{opacity:1;transform:translateY(0);}" +
    ".fbw-toast.fbw-ok{background:#16a34a;}.fbw-toast.fbw-err{background:#dc2626;}" +
    // lift the button/modal/toast above the site's sticky mobile CTA bar (~72px, <768px)
    "@media(max-width:768px){.fbw-fab{bottom:88px;}.fbw-modal{bottom:88px;}.fbw-toast{bottom:152px;}}";

  var styleEl = document.createElement("style");
  styleEl.textContent = css;
  document.head.appendChild(styleEl);

  // ---- root container ----
  var root = document.createElement("div");
  root.className = "fbw-root";
  document.body.appendChild(root);

  // ---- toast ----
  function toast(msg, kind) {
    var t = document.createElement("div");
    t.className = "fbw-toast " + (kind === "err" ? "fbw-err" : "fbw-ok");
    t.textContent = msg;
    root.appendChild(t);
    requestAnimationFrame(function () {
      t.classList.add("fbw-show");
    });
    setTimeout(function () {
      t.classList.remove("fbw-show");
      setTimeout(function () {
        if (t.parentNode) t.parentNode.removeChild(t);
      }, 250);
    }, 3200);
  }

  // ---- icons ----
  var ICON_CHAT =
    '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>';

  // ---- build FAB ----
  var fab = document.createElement("button");
  fab.className = "fbw-fab";
  fab.setAttribute("aria-label", "Залишити відгук");
  fab.innerHTML = ICON_CHAT;
  fab.addEventListener("click", openModal);
  root.appendChild(fab);

  // ---- modal refs (created on first open) ----
  var overlay, modal, textEl, fileEl, previewWrap, sendBtn, improveBtn, dropEl, catBtns;
  var built = false;

  function buildModal() {
    overlay = document.createElement("div");
    overlay.className = "fbw-overlay";
    overlay.addEventListener("click", closeModal);

    modal = document.createElement("div");
    modal.className = "fbw-modal";

    var catHtml = CATEGORIES.map(function (c) {
      return (
        '<button type="button" class="fbw-cat' +
        (c.key === category ? " fbw-active" : "") +
        '" data-cat="' +
        c.key +
        '">' +
        c.emoji +
        " " +
        c.label +
        "</button>"
      );
    }).join("");

    var improveHtml = cfg.ai
      ? '<button type="button" class="fbw-link fbw-improve" disabled>✨ Покращити з ШІ</button>'
      : "";

    modal.innerHTML =
      '<div class="fbw-drop" style="display:none"><span>Перетягніть фото сюди</span></div>' +
      '<div class="fbw-head"><span></span><button type="button" class="fbw-x">&times;</button></div>' +
      '<div class="fbw-body">' +
      '<div class="fbw-cats">' + catHtml + "</div>" +
      '<textarea class="fbw-text" placeholder="Розкажіть, що думаєте..."></textarea>' +
      '<div class="fbw-row">' +
      '<button type="button" class="fbw-link fbw-attach">📎 Додати фото</button>' +
      improveHtml +
      "</div>" +
      '<div class="fbw-prev-wrap"></div>' +
      '<button type="button" class="fbw-send">Надіслати</button>' +
      '<input type="file" accept="image/*" class="fbw-file" style="display:none">' +
      "</div>";

    // header title (set as text to avoid HTML injection from config)
    modal.querySelector(".fbw-head span").textContent = cfg.title;

    textEl = modal.querySelector(".fbw-text");
    fileEl = modal.querySelector(".fbw-file");
    previewWrap = modal.querySelector(".fbw-prev-wrap");
    sendBtn = modal.querySelector(".fbw-send");
    improveBtn = modal.querySelector(".fbw-improve");
    dropEl = modal.querySelector(".fbw-drop");
    catBtns = modal.querySelectorAll(".fbw-cat");

    // wire events
    modal.querySelector(".fbw-x").addEventListener("click", closeModal);
    modal.querySelector(".fbw-attach").addEventListener("click", function () {
      fileEl.click();
    });
    fileEl.addEventListener("change", function () {
      handleFile(fileEl.files && fileEl.files[0]);
    });
    sendBtn.addEventListener("click", submit);
    if (improveBtn) improveBtn.addEventListener("click", improve);

    for (var i = 0; i < catBtns.length; i++) {
      catBtns[i].addEventListener("click", function () {
        category = this.getAttribute("data-cat");
        for (var j = 0; j < catBtns.length; j++) {
          catBtns[j].classList.toggle(
            "fbw-active",
            catBtns[j].getAttribute("data-cat") === category
          );
        }
      });
    }

    textEl.addEventListener("input", function () {
      if (undoText !== null) {
        undoText = null;
        renderImproveBtn();
      }
      refreshButtons();
    });

    // drag + drop
    var dragDepth = 0;
    modal.addEventListener("dragenter", function (e) {
      e.preventDefault();
      dragDepth++;
      dropEl.style.display = "flex";
    });
    modal.addEventListener("dragover", function (e) {
      e.preventDefault();
    });
    modal.addEventListener("dragleave", function (e) {
      e.preventDefault();
      dragDepth--;
      if (dragDepth <= 0) {
        dragDepth = 0;
        dropEl.style.display = "none";
      }
    });
    modal.addEventListener("drop", function (e) {
      e.preventDefault();
      dragDepth = 0;
      dropEl.style.display = "none";
      var f = e.dataTransfer.files && e.dataTransfer.files[0];
      if (!f) return;
      if (f.type.indexOf("image/") !== 0) {
        toast("Лише зображення", "err");
        return;
      }
      handleFile(f);
    });

    root.appendChild(overlay);
    root.appendChild(modal);
    built = true;
  }

  // paste handler (only active while open)
  function onPaste(e) {
    if (!open) return;
    var items = e.clipboardData && e.clipboardData.items;
    if (!items) return;
    for (var i = 0; i < items.length; i++) {
      if (items[i].kind === "file" && items[i].type.indexOf("image/") === 0) {
        var f = items[i].getAsFile();
        if (f) {
          e.preventDefault();
          handleFile(f);
          return;
        }
      }
    }
  }
  window.addEventListener("paste", onPaste);

  function openModal() {
    open = true;
    fab.style.display = "none";
    if (!built) buildModal();
    overlay.style.display = "block";
    modal.style.display = "block";
    refreshButtons();
    renderImproveBtn();
    setTimeout(function () {
      textEl.focus();
    }, 0);
  }

  function closeModal() {
    open = false;
    if (built) {
      overlay.style.display = "none";
      modal.style.display = "none";
    }
    fab.style.display = "flex";
  }

  function handleFile(file) {
    if (!file) {
      clearScreenshot();
      return;
    }
    if (file.size > 4 * 1024 * 1024) {
      toast("Файл завеликий (макс. 4 МБ)", "err");
      return;
    }
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    screenshotFile = file;
    previewUrl = URL.createObjectURL(file);
    renderPreview();
  }

  function clearScreenshot() {
    if (previewUrl) URL.revokeObjectURL(previewUrl);
    screenshotFile = null;
    previewUrl = null;
    if (fileEl) fileEl.value = "";
    renderPreview();
  }

  function renderPreview() {
    if (!previewWrap) return;
    previewWrap.innerHTML = "";
    if (!previewUrl) return;
    var wrap = document.createElement("div");
    wrap.className = "fbw-prev";
    var img = document.createElement("img");
    img.src = previewUrl;
    img.alt = "Знімок екрана";
    var rm = document.createElement("button");
    rm.type = "button";
    rm.innerHTML = "&times;";
    rm.addEventListener("click", clearScreenshot);
    wrap.appendChild(img);
    wrap.appendChild(rm);
    previewWrap.appendChild(wrap);
  }

  function renderImproveBtn() {
    if (!improveBtn) return;
    var row = improveBtn.parentNode;
    var existingUndo = row.querySelector(".fbw-undo");
    if (undoText !== null) {
      improveBtn.style.display = "none";
      if (!existingUndo) {
        var u = document.createElement("button");
        u.type = "button";
        u.className = "fbw-link fbw-undo";
        u.innerHTML = "↩ Скасувати";
        u.addEventListener("click", function () {
          if (undoText === null) return;
          textEl.value = undoText;
          undoText = null;
          renderImproveBtn();
          refreshButtons();
        });
        row.appendChild(u);
      }
    } else {
      if (existingUndo) existingUndo.parentNode.removeChild(existingUndo);
      improveBtn.style.display = "inline-flex";
      refreshButtons();
    }
  }

  function refreshButtons() {
    if (sendBtn) sendBtn.disabled = sending || !textEl.value.trim();
    if (improveBtn)
      improveBtn.disabled = improving || textEl.value.trim().length < 10;
  }

  function fileToDataUrl(file) {
    return new Promise(function (resolve, reject) {
      var r = new FileReader();
      r.onload = function () {
        resolve(r.result);
      };
      r.onerror = reject;
      r.readAsDataURL(file);
    });
  }

  async function buildPayload(action) {
    var payload = {
      action: action,
      text: textEl.value.trim(),
      category: category,
      pageUrl: window.location.href,
      screenshot: null,
      screenshotName: null,
    };
    if (screenshotFile) {
      payload.screenshot = await fileToDataUrl(screenshotFile);
      payload.screenshotName = screenshotFile.name || "screenshot.png";
    }
    return payload;
  }

  async function improve() {
    if (improving || textEl.value.trim().length < 10) return;
    improving = true;
    improveBtn.textContent = "Покращую...";
    refreshButtons();
    var original = textEl.value;
    try {
      var payload = await buildPayload("improve");
      var res = await fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      var data = await res.json();
      if (!res.ok || data.error) {
        toast(data.error || "Не вдалося покращити", "err");
      } else {
        undoText = original;
        textEl.value = data.improved;
        toast("Покращено", "ok");
        renderImproveBtn();
      }
    } catch (err) {
      toast("Не вдалося покращити", "err");
    } finally {
      improving = false;
      improveBtn.textContent = "✨ Покращити з ШІ";
      refreshButtons();
    }
  }

  async function submit() {
    if (sending || !textEl.value.trim()) return;
    sending = true;
    sendBtn.textContent = "Надсилаю...";
    refreshButtons();
    try {
      var payload = await buildPayload("submit");
      var res = await fetch(cfg.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      var data = await res.json();
      if (!res.ok || data.error) {
        toast(data.error || "Не вдалося надіслати", "err");
      } else {
        toast("Дякуємо за відгук!", "ok");
        textEl.value = "";
        category = "idea";
        for (var j = 0; j < catBtns.length; j++) {
          catBtns[j].classList.toggle(
            "fbw-active",
            catBtns[j].getAttribute("data-cat") === "idea"
          );
        }
        undoText = null;
        clearScreenshot();
        renderImproveBtn();
        closeModal();
      }
    } catch (err) {
      toast("Не вдалося надіслати", "err");
    } finally {
      sending = false;
      sendBtn.textContent = "Надіслати";
      refreshButtons();
    }
  }
})();
