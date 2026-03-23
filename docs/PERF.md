# Beauty with EVE — Network Performance Optimization

## Current Asset Sizes

| File | Size |
|---|---|
| `styles.css` | 53.8 KB |
| `home.html` | 26.3 KB |
| `portfolio.html` | 12.3 KB |
| `services.html` | 10.1 KB |
| `events.html` | 10.0 KB |
| `contact.html` | 9.4 KB |
| `about.html` | 9.1 KB |
| `script.js` | 3.7 KB |
| **Total local** | **134.7 KB** |

## External Requests Per Page Load

- 1x Figma `capture.js` (dev tool, on every page)
- 1x Google Fonts CSS → triggers ~10–15 individual font file downloads
- 1–6x Unsplash images (varies by page)
- 1x Figma API image (home only)

---

## Suggestions (sorted by impact)

| # | Optimization | What it does | Estimated saving |
|---|---|---|---|
| 1 | **Remove Figma `capture.js`** from all 6 pages | Eliminates 1 DNS + TCP/TLS + script download + parse/execute on every page load. Dev-only tool, not needed in production. | **200–400ms** per page |
| 2 | **Async-load Google Fonts** (swap `<link rel="stylesheet">` for `<link rel="preload" as="style" onload>`) | Currently render-blocking — browser cannot paint until Fonts CSS finishes. Non-blocking lets text render in system fonts first, then swap. | **300–500ms** faster First Contentful Paint |
| 3 | **Trim unused font weights** — remove Playfair 800 (zero uses in CSS), trim Playfair 500, Inter 300 | Fewer font files for browser to download. Currently loading up to 15 weight/style combos. | **100–300ms** (2–3 fewer font files) |
| 4 | **Self-host the hero portrait** instead of Figma API URL | Figma's API is not a CDN — response times are unpredictable (100ms–2s). This is the LCP element on home. Moving to self-hosted or Unsplash gives consistent performance. | **200–800ms** on home LCP |
| 5 | **Add `&fm=webp` to all Unsplash URLs** | WebP is 25–30% smaller than JPEG at equivalent quality. Unsplash supports it natively via URL param. | **50–150ms per image** (~500ms total on portfolio with 6 images) |
| 6 | **Reduce Unsplash quality from `q=80` to `q=65`** | ~20–25% smaller files with near-identical visual quality on photos. | **30–80ms per image** |
| 7 | **Minify `styles.css`** | 53.8 KB → ~36 KB minified. With gzip: ~10–12 KB over the wire. | **50–100ms** |
| 8 | **Remove duplicate JSON-LD in `home.html`** | Two `WebSite` schemas (lines 23–35 and 67–69), two `LocalBusiness` schemas (lines 36–55 and 114–142). Merge into one of each. | ~2 KB reduction |
| 9 | **Upgrade `dns-prefetch` to `preconnect`** for Unsplash | `dns-prefetch` only resolves DNS. `preconnect` also opens TCP+TLS early so image requests start faster. | **100–150ms** on first image load |
| 10 | **Verify `loading="lazy"`** on all below-fold images | Events and portfolio images already lazy ✓. About page hero portrait should stay eager. | Already mostly done |

---

## Estimated Total Impact

| Scenario | Before (est.) | After all optimizations |
|---|---|---|
| **4G (10 Mbps, 50ms RTT)** | ~2.5–3.5s full load | ~1.5–2.0s (**~1–1.5s faster**) |
| **3G (1.5 Mbps, 100ms RTT)** | ~5–7s full load | ~3–4.5s (**~2–2.5s faster**) |
| **FCP (First Contentful Paint)** | ~1.2–1.8s | ~0.6–1.0s (**~500ms faster**) |
| **LCP (Largest Contentful Paint)** | ~2.5–4s | ~1.5–2.5s (**~1s faster**) |

## Quick Wins (highest ROI, easiest to do)

1. Remove `capture.js` — 1-line delete per page
2. Add `&fm=webp` to Unsplash URLs — find & replace
3. Async-load Google Fonts — small `<head>` change
