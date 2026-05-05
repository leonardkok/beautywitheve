# Beauty with EVE — SEO & AI Scraping Optimization

---

## SEO Suggetions & Tracking

| # | Issue | Impact | Status |
|---|---|---|---|
| 1 | **Missing `<h1>` on 3 pages** — services.html, events.html, portfolio.html have no H1. The eyebrow `<div>` holds the page title but isn't semantic. | High | Resolved ✓ |
| 2 | **Footer is JavaScript-rendered** — Content was injected by `script.js`. Now moved to static HTML in each page for full crawler/AI visibility. | High | Resolved ✓ |
| 3 | **Sitemap URLs don't match actual page URLs** — Updated `sitemap.xml` to use clean URLs to match canonical tags. | High | Resolved ✓ |
| 4 | **Duplicate JSON-LD schemas on index.html** — Consolidated `LocalBusiness` and `WebSite` blocks into single comprehensive objects. | Medium | Resolved ✓ |
| 5 | **Same OG image across all pages** — Assigned unique, relevant Unsplash images for about, portfolio, and services pages. | Medium | Resolved ✓ |
| 6 | **No `<h1>` text for subpage heroes** — Hero titles converted to semantic `<h1>` tags. | Medium | Resolved ✓ |
| 7 | **Missing `<article>` on portfolio cases** — Portfolio items converted from generic `<div>` to semantic `<article>` tags. | Low | Resolved ✓ |
| 8 | **No internal linking from footer** — Footer links updated with real destinations (Instagram) and static content. | Low | Resolved ✓ |
| 9 | **Contact page form has no functional action** — Form action updated to `https://formspree.io/evelynnkoo@gmail.com`. | Low | Resolved ✓ |

---

## AI Scraping / LLM Optimization Tracking

| # | Issue | What to do | Status |
|---|---|---|---|
| 1 | **No `llms.txt` file** | Create `/llms.txt` to describe site, services, and location for AI crawlers. | Resolved ✓ |
| 2 | **Footer invisible to AI crawlers** | Move footer HTML into each page's HTML (done in SEO #2). | Resolved ✓ |
| 3 | **robots.txt has no AI bot rules** | Added explicit rules for AI crawlers (GPTBot, ClaudeBot, etc.). | Resolved ✓ |
| 4 | **No `llms-full.txt`** | Created `/llms-full.txt` with detailed services, pricing, and full FAQs in markdown. | Resolved ✓ |
| 5 | **Missing H1 tags** | Improved heading hierarchy across all subpages (done in SEO #1). | Resolved ✓ |
| 6 | **Missing `SpeakableSpecification`** | Added `speakable` property to JSON-LD schemas on Home and Services pages. | Resolved ✓ |
| 7 | **FAQ Distribution** | Added relevant FAQ schema blocks to the `services.html` page. | Resolved ✓ |

---

## Priority Action Plan (May 2026 Update)

### Completed
- [x] Fix Sitemap/Canonical Mismatch (Task #1)
- [x] Functional Contact Form (Task #2)
- [x] Merge Duplicate Schema (Task #3)
- [x] Unique Social Previews (Task #5)
- [x] Create `llms-full.txt` (Task #6)
- [x] Voice Search Optimization (Task #7)
- [x] Improve Article Semantics (Task #8)
- [x] FAQ Distribution (Task #9)
- [x] Documentation Cleanup (Task #10)

### Next Steps (Low Priority)
- [ ] Monitor search console for rich result validation.
- [ ] Add `SpeakableSpecification` to About page if voice traffic increases.
- [ ] Consider generating local `og:image` assets to replace Unsplash URLs for faster loading.
