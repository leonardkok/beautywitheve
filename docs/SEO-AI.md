# Beauty with EVE — SEO & AI Scraping Optimization

---

## SEO Suggestions

| # | Issue | Impact | Priority |
|---|---|---|---|
| 1 | **Missing `<h1>` on 3 pages** — services.html, events.html, portfolio.html have no H1. The eyebrow `<div>` holds the page title but isn't semantic. Google uses H1 as a primary ranking signal. | High — hurts keyword relevance for those pages | **Critical** |
| 2 | **Footer is JavaScript-rendered** — `<footer id="site-footer"></footer>` is empty in HTML; content injected by `script.js`. Googlebot does execute JS but with delay and lower priority. Other crawlers (Bing, Yandex) may miss it entirely. Footer contains nav links, social links, and business info. | High — internal links and business info invisible to some crawlers | **High** |
| 3 | **Sitemap URLs don't match actual page URLs** — sitemap lists `beautywitheve.com/services` but actual files are `services.html`. If server doesn't rewrite these, Google will get 404s from the sitemap. | High — sitemap becomes useless if URLs don't resolve | **High** |
| 4 | **Duplicate JSON-LD schemas on home.html** — two `WebSite` schemas (lines 23–35 and 67–69) and two `LocalBusiness` schemas (lines 36–55 and 114–142). Google may get confused or ignore duplicates. | Medium — can cause rich result issues | **Medium** |
| 5 | **Same OG image across all 6 pages** — every page uses the same Unsplash photo. Social sharing looks identical regardless of which page is shared. Each page should have a relevant preview image. | Medium — hurts social click-through rate | **Medium** |
| 6 | **No `<h1>` text for subpage heroes** — eyebrow text ("Workshops & Gatherings", "Draping & Consulting", "Client Gallery") acts as page title visually but uses a `<div>`. Should be or contain an `<h1>`. | Medium — missing primary heading signal | **Medium** |
| 7 | **Missing `<article>` on portfolio cases** — portfolio items are `<div class="portfolio-case">` but semantically they're individual pieces of content. `<article>` helps crawlers understand content boundaries. | Low — minor semantic improvement | **Low** |
| 8 | **No internal linking from footer** — footer links (Privacy, social) use `href="#"` placeholders. Real internal links in the footer would distribute page authority. | Low — missed internal link equity | **Low** |
| 9 | **Contact page form has no `action`** — `<form method="post">` with no `action` attribute. The form doesn't work — potential bounce rate impact. | Low — UX/conversion issue | **Low** |

---

## AI Scraping / LLM Optimization Suggestions

| # | Issue | What to do | Impact |
|---|---|---|---|
| 1 | **No `llms.txt` file** | Create `/llms.txt` — the emerging standard (like robots.txt for AI). Should describe your site, services, location, and key pages in plain text. AI crawlers (ChatGPT, Perplexity, Claude) look for this file. | **High** — helps AI understand and cite your site accurately |
| 2 | **Footer invisible to AI crawlers** | Move footer HTML into each page's HTML (not JS-injected). Most AI crawlers don't execute JavaScript — they parse raw HTML only. | **High** — AI crawlers miss your business name, location, social links |
| 3 | **robots.txt has no AI bot rules** | Add explicit rules for AI crawlers: `User-agent: GPTBot`, `User-agent: ClaudeBot`, `User-agent: PerplexityBot`, etc. Either `Allow` to be discoverable, or `Disallow` paths you want protected. | **High** — controls which AI systems can index your content |
| 4 | **No `llms-full.txt`** | Create `/llms-full.txt` with detailed business info: services, pricing, location, credentials, FAQs — all in clean markdown. This is what AI models ingest for deep understanding. | **High** — enables AI to give accurate, detailed answers about your business |
| 5 | **Missing H1 tags (same as SEO #1)** | AI crawlers use heading hierarchy to understand page structure and topic. Missing H1 means the crawler can't easily identify what the page is about. | **Medium** — AI may misclassify page topic |
| 6 | **Missing `SpeakableSpecification` in structured data** | Add `speakable` property to key JSON-LD schemas — tells AI voice assistants (Google Assistant, Alexa) which text sections are suitable for reading aloud. | **Medium** — enables voice search visibility |
| 7 | **No `/.well-known/ai-plugin.json`** | Not critical for a business site (mainly for API/tool sites), but a simple manifest can help AI systems discover your service type. | **Low** |
| 8 | **Image alt text** | Already descriptive, keyword-rich, and unique per image. No action needed. | Already done ✓ |
| 9 | **Structured data coverage** | FAQPage, LocalBusiness, BreadcrumbList, ContactPage, Service, Event schemas already present. These directly feed AI knowledge graphs. | Already done ✓ |

---

## Priority Action Plan

### Do first (biggest impact)
1. Add `<h1>` to services, events, portfolio pages
2. Create `llms.txt` and `llms-full.txt`
3. Move footer HTML from JS into each page's HTML
4. Add AI bot rules to `robots.txt`

### Do next
5. Fix sitemap URL mismatch (`.html` vs clean URLs)
6. Merge duplicate JSON-LD on home page
7. Use unique OG images per page
