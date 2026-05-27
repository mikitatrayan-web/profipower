# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static HTML/CSS/JS website for **PROFIPOWER** — a Polish-based welding school and employment agency under Corporation Profi (founded 1991). The site has no build system, no package manager, and no framework — it is served directly as static files.

**Live preview**: Open any `.html` file directly in a browser, or use any static file server (e.g. `python3 -m http.server 8080`).

## Site Structure

Two distinct sub-sites share the repository:

### 1. PROFIPOWER (`/` root)
The main hub targeting Ukrainian workers seeking employment/training in Poland.

| File | Purpose |
|---|---|
| `index.html` | Hub landing page (entry point, links to all sub-pages) |
| `school.html` | Welding school — MIG/MAG, TIG, ISO 9606 |
| `painters.html` | Painters course |
| `locksmith-pl.html` | Locksmith course |
| `entry-control.html` | Factory entry-control preparation |
| `css/custom.css` | Shared stylesheet (tokens, layout, components) |
| `js/main.js` | JS for `school.html` and specialty sub-pages |
| `js/hub.js` | JS for `index.html` |
| `images/` | Hero imagery (`welder.jpg`, `factory.png`) |

### 2. Corporation Profi (`corp/`)
Separate sub-site for the Ukrainian parent company.

| File | Purpose |
|---|---|
| `corp/index.html` | Corp homepage |
| `corp/vyrobnytstvo.html` | Metal fabrication production page |
| `corp/trening.html` | Training center page |
| `corp/qualification.html` | Qualification center page |
| `corp/materials.html` | Materials page |
| `corp/css/corp.css` | Corp-specific stylesheet |
| `corp/js/corp.js` | Corp-specific JS (translations + behaviors) |

## Architecture Patterns

### i18n (Multilingual)
Every text-bearing element uses `data-i18n` attributes. Translations are defined as JS constants:
- `TRANSLATIONS` in `js/main.js` (for school/specialty pages)
- `HUB_TRANSLATIONS` in `js/hub.js` (for the hub page)
- Equivalent constant in `corp/js/corp.js`

Each constant has keys `ua`, `en`, `pl`. The active language is stored in `localStorage` under `profi-lang` and applied by calling `setLang(lang)`, which iterates all `[data-i18n]` elements.

**To add a new translatable string**: add the key to all three language objects in the relevant JS file, then add `data-i18n="your_key"` to the HTML element.

Input placeholders use `data-i18n-placeholder`; `<select><option>` elements use `data-i18n` directly on the `<option>`.

### Design Tokens (CSS custom properties)
Defined in `:root` inside `css/custom.css`:
```
--navy / --navy-2 / --steel / --card   — dark background scale
--blue / --blue-2                       — blue accent
--orange / --orange-2                   — primary brand orange (#f07820)
--green / --green-2                     — success states
--gray / --gray-2                       — muted text
--border                                — rgba(255,255,255,0.07)
--nav-h: 72px                           — navbar height
```

Typography: **Anton** (display/headings, `font-family: 'Anton', Impact, sans-serif`) + **Inter** (body), both loaded from Google Fonts.

### Page-Scoped Styles
Each HTML page has its own `<style>` block in `<head>` for page-specific CSS. Global/shared styles live only in `css/custom.css`.

### Common JS Behaviors (both sub-sites)
- **Scroll-triggered animations**: `IntersectionObserver` on `.fade-in` elements adds `.visible` class when entering viewport (threshold 0.1).
- **Sticky navbar**: `window.scroll` listener toggles `.scrolled` class on `#navbar` after 80px scroll.
- **Mobile hamburger menu**: `#menu-btn` toggles `.open` on `#mobile-menu`; any nav link click closes it.
- **Welding sparks**: Canvas particle system (`#sparks` canvas) in hero sections — see `initSparks()` in `js/main.js`.
- **FAQ accordion**: `<details>` elements; `toggle` event swaps `.faq-icon` between `+` / `−`.
- **Contact form**: `submit` event is intercepted (`preventDefault`), button text switches to translated "sent" string, resets after 4 seconds. **No actual backend submission is wired up.**

### Corp vs. ProfiPower CSS
The two sub-sites use separate stylesheets and do **not** share a CSS file. `corp/css/corp.css` has its own token set (blue-dominant theme vs. the orange-dominant PROFIPOWER theme).
