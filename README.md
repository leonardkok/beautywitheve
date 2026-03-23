# Beauty with EVE — Website

## About This Site

**Beauty with EVE** is the name of this website — it is a **personal branding site for Evelynn Koo**, a certified personal colour analyst and image consultant based in Kuala Lumpur, Malaysia.

| | |
|---|---|
| **Website name** | Beauty with EVE |
| **Personal brand** | Evelynn Koo |
| **Company / group** | deBeau (déBeau Beauty Academy) |
| **Site purpose** | Personal branding — promoting Evelynn Koo as an individual practitioner |

> "Beauty with EVE" is the site identity, not a business entity or co-brand. Events, collaborations, and services on this site are Evelynn Koo's work. The parent company is deBeau.

---

Static 6-page HTML/CSS site promoting **Evelynn Koo's** personal colour draping and image consulting practice, based in Kuala Lumpur, Malaysia.

---

## Folder Structure

```
beautywitheve/
├── index.html            # Landing page (home)
├── about.html            # Founder profile
├── contact.html          # Enquiry form
├── events.html           # Past workshops
├── portfolio.html        # Client gallery
├── services.html         # Service packages & pricing
├── robots.txt            # Crawler directives (must stay at root)
├── sitemap.xml           # XML sitemap — 6 URLs (must stay at root)
├── README.md             # This file
│
├── assets/
│   ├── css/
│   │   └── styles.css    # Shared stylesheet (all pages)
│   ├── js/
│   │   └── script.js     # Shared JavaScript + footer component
│   └── images/           # Local/static images (favicon fallback, OG, etc.)
│
├── events/
│   └── _event-template.html  # Template for individual event pages
│
└── docs/
    ├── COLOURS.md        # Full colour palette reference (140+ swatches)
    ├── DESIGN.md         # Design system — typography, layout, components
    ├── PERF.md           # Performance optimisation roadmap
    └── SEO-AI.md         # SEO and AI-scraping audit notes
```

> **SEO note:** `robots.txt` and `sitemap.xml` must remain at the repository root. Servers and crawlers expect both at the domain root (`/robots.txt`, `/sitemap.xml`). HTML pages also stay at root to preserve clean URLs without redirects.

---

## Architecture

### DRY / KISS Principles

- **One stylesheet** (`assets/css/styles.css`) serves all 6 pages — no per-page `<style>` blocks except a single `:root { --bg: ... }` variable override where the page background colour differs.
- **One JS file** (`assets/js/script.js`) handles nav scroll state, mobile hamburger menu, fade-in scroll animations, and **footer rendering** for all pages.
- **Footer as a JS component** — `<footer id="site-footer"></footer>` is a single-line placeholder in every HTML file. `script.js` injects the full footer HTML (logo, social links with SVG icons, tagline, copyright) at runtime. Edit once in `script.js` to update all pages.
- **BEM class naming** throughout (`.block__element--modifier`).
- **Zero inline `style=""` attributes** in any HTML file — all visual state is in CSS classes.

### CSS Highlights

- CSS custom properties (`--bg`, `--accent`, `--font-serif`, etc.) for design tokens
- `clamp()` for fluid typography across a standardised scale (eyebrow → h1)
- CSS Grid for all multi-column layouts
- Glassmorphism nav pill: `backdrop-filter: blur()`, `rgba` background, smooth scroll transition
- Wave divider modifier classes (`.wave-divider--bg`, `--blush`, `--lavender`, `--linen`, `--surface`, `--pink`, `--yellow`) — background colour matches section above, SVG fill matches section below
- Portfolio alternating layout via `nth-child(even) { flex-direction: row-reverse }` — no extra classes needed
- CSS specificity discipline: modifier classes use double-class selectors (e.g. `.service-package.service-package--corporate`) to beat base class rules that appear later in the file

### Typography Scale

| Level | Role | Size | Font |
|-------|------|------|------|
| Eyebrow | Section label | `0.8rem`, uppercase | Inter |
| H1 | Hero title | `clamp(3rem, 6vw, 6rem)` | Playfair Display |
| H2 | Section heading | `clamp(2.5rem, 4vw, 4rem)` | DM Serif Display |
| H3 | Card / step title | `clamp(1.3rem, 1.8vw, 1.6rem)` | DM Serif Display |
| Body | Main copy | `1.05rem`, line-height 1.75–1.85 | Inter |
| Small | List items, metadata | `0.875–0.95rem` | Inter |

---

## SEO

### Meta Tags (all pages)

- `<title>` — unique, keyword-rich, ≤60 chars
- `<meta name="description">` — unique, ≤160 chars on every page
- `<meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large">`
- `<link rel="canonical">` — absolute URL per page
- `<meta name="author" content="Evelynn Koo">`
- `<meta name="theme-color">`

### Open Graph + Twitter Cards (all pages)

- `og:type`, `og:url`, `og:title`, `og:description`, `og:image` (1200×630), `og:site_name`, `og:locale`
- `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image`

### Geo / Local SEO (all pages)

- `geo.region`, `geo.placename`, `geo.position`, `ICBM` — targets Kuala Lumpur (MY-14)
- `hreflang="en-MY"` + `hreflang="x-default"` alternate links

### Sitemap & Robots

- `sitemap.xml` — 6 URLs with `<lastmod>`, `<changefreq>`, `<priority>` (home: 1.0, services: 0.9, portfolio/about: 0.8, events/contact: 0.7)
- `robots.txt` — `Allow: /` + Sitemap pointer
- `<link rel="dns-prefetch" href="https://images.unsplash.com">` on all pages

### Multilingual SEO Note

The site is English-only. Client-side language switching (JS text swapping) is **not used** as it is invisible to search engines. If Chinese (ZH) and Malay (MS) versions are added in future, use subdirectories (`/zh/`, `/ms/`) with `hreflang` alternate tags for proper indexing.

---

## Structured Data (JSON-LD)

| Page | Schema types |
|------|-------------|
| index.html | `WebSite` (with `potentialAction: SearchAction`), `LocalBusiness` (address, email, priceRange, aggregateRating, 3× reviews), `FAQPage` (4 Q&A), `BreadcrumbList` *(note: duplicate WebSite + LocalBusiness schemas — known gap)* |
| about.html | `Person` (name, jobTitle, description, knowsAbout[], image, worksFor), `BreadcrumbList` |
| services.html | `Service` with `hasOfferCatalog` → 2× `Offer` (price, priceCurrency, availability), `BreadcrumbList` |
| portfolio.html | `CollectionPage`, `BreadcrumbList` |
| events.html | `ItemList` (numberOfItems: 2), `BreadcrumbList` |
| events/[slug].html | `Event` (name, startDate, location, organizer `Person`, description), `BreadcrumbList` (3 levels) |
| contact.html | `ContactPage` → `LocalBusiness` (email, address), `BreadcrumbList` |

---

## Performance

### Images

- All `<img>` tags have explicit `width` and `height` attributes — prevents Cumulative Layout Shift (CLS)
- All below-fold images use `loading="lazy"`
- Hero portrait uses `fetchpriority="high"` — signals highest-priority fetch (LCP)
- Unsplash URLs include explicit `w=` and `h=` parameters so images are cropped server-side to exact dimensions

### Fonts

- `<link rel="preconnect">` for `fonts.googleapis.com` and `fonts.gstatic.com`
- Google Fonts loaded with `display=swap` (no invisible text flash)

### JavaScript

- `assets/js/script.js` loaded with `defer` on all pages — non-blocking
- Scroll listener uses `requestAnimationFrame` + `ticking` flag — no layout thrash on every scroll event
- `{ passive: true }` on scroll event listener — no jank

### Hero Image

- `<link rel="dns-prefetch" href="https://www.figma.com">` in index.html
- `<link rel="preload" as="image">` for hero portrait — fetched in parallel with HTML parsing

---

## Accessibility

### Navigation

- `<nav aria-label="Main navigation">` on every page
- `<a href="#main-content" class="skip-link">` skip link at top of every page
- Active page link has `class="active"` in both desktop and mobile nav
- Mobile menu button: `aria-expanded`, `aria-controls`, `aria-label`
- Mobile overlay: `aria-hidden` toggled on open/close
- Escape key closes mobile menu and returns focus to hamburger
- First link in overlay receives focus when menu opens

### Images

- All `<img>` have descriptive `alt` text with location and brand context
- Decorative SVG wave dividers have `aria-hidden="true"`
- Decorative swatch container has `aria-hidden="true"`
- Social icon SVGs in footer have `aria-hidden="true"` (links have `aria-label`)

### Semantics

- `<main id="main-content">` on every page
- `<address>` wraps studio location and contact info on contact.html
- `<time datetime="...">` on all event dates
- `<article>` for each event entry
- Heading hierarchy: one `<h1>` per page, `<h2>` for sections, `<h3>` for cards
- `<details>`/`<summary>` for FAQ accordion (native, no JS needed)

### Motion

- `@media (prefers-reduced-motion: reduce)` disables all transitions and transforms: fade-ins, portfolio hover, hamburger animation, service card lift

### Forms

- All inputs have `<label for="...">` associations
- `autocomplete` attributes on name and email fields
- Honeypot field (`.form-honeypot`) for bot protection — off-screen, `tabindex="-1"`, `aria-hidden="true"`

### Footer

- Footer nav wrapped in `<nav aria-label="Footer navigation">`
- Social links have descriptive `aria-label` attributes

---

## Mobile Navigation

Mobile hamburger menu (active on screens ≤768px):

- 3-span animated hamburger button — spans transform into × on open
- Full-screen overlay (`position: fixed; inset: 0`) with all 6 nav links
- Body scroll locked while menu is open
- Closes on: link click, hamburger click, Escape key
- Focus management: first link focused on open, hamburger focused on close

---

## Page Notes

### index.html (Home)

- Hero: animated colour swatches + founder portrait (Figma asset)
- Why Colour Analysis section: 4-card grid on pink background
- 3-step process section (Discover → Drape → Reveal) → links to about.html
- Client stories: 3 testimonial cards (Personal + Corporate)
- Dual audience section: dark Corporate card + warm gradient Personal card
- FAQ accordion (4 questions, with FAQPage schema)
- Full-bleed CTA section with seasonal palette swatch dots

### about.html

- Two-column hero: bio copy + founder photo with decorative frame
- déBeau Beauty Academy section
- CTA buttons: Services + Contact

### services.html

- Individual 1-on-1 package: Signature Draping Session
- Corporate packages: Retail Events, Drape Party, Team Workshop
- Cross-link CTA → portfolio and contact

### portfolio.html

- 6 alternating case study rows (image 16:9 left/right, description opposite)
- Seasons: True Autumn, Soft Summer, Clear Winter, Light Spring, Deep Autumn, True Summer
- Even rows reversed via `nth-child(even) { flex-direction: row-reverse }` — no extra classes
- CTA → services and contact

### events.html

- 2 events (newest first):
  - **JD Sports — Colour Analysis Event** · March 15, 2026 · Pavilion Kuala Lumpur
  - **Shu Uemura — Colour Analysis Event** · March 14, 2026 · Mid Valley Megamall, Kuala Lumpur
- `ItemList` JSON-LD schema — `numberOfItems` must match the article count
- CTA → contact (register interest) and services

### events/ (individual event pages)

Each event has its own page under `events/`. Structure:
- **Hero:** eyebrow (event type) + `<h1>` (partner/venue name) + Location row + Date row
- **Detail section:** two-column grid — photo left, text right (`event-detail__inner--two-col`)
- **CTA:** "Bring colour to your next event" → contact + back to Events
- Schema: `Event` with `startDate`, `location`, `organizer` (`Person`: Evelynn Koo)

Current event pages:
- `events/jd-sports-colour-analysis-mar-2026.html`
- `events/shu-uemura-retail-colour-analysis-mar-2026.html`

### contact.html

- Two-column layout: contact details + enquiry form
- `<address>` with email contact
- Preset message buttons (Signature Session, Retail Events, Drape Party, Team Workshop, Other)
- Honeypot spam protection
- Native HTML5 form validation (`required` on all fields, `type="email"`)

---

## Adding a New Event Page

1. Copy `events/_event-template.html` → `events/your-event-slug.html`
2. Replace all `[SWAP]` placeholders: title, description, slug, date, location, image, body copy
3. Add a new `<article>` block to `events.html` (newest first)
4. Update `numberOfItems` in `events.html` JSON-LD `ItemList` schema
5. Add the new URL to `sitemap.xml` and bump `events` page `<lastmod>`

**Naming convention for events:** Use the partner/venue name only — do not append "Beauty with EVE" or "× Evelynn Koo" to event titles. The site name appears in `<title>` tags after the pipe (`|`) and as the nav logo — not as a co-brand in event names.

---

## Known Gaps

| Issue | File | Notes |
|-------|------|-------|
| JS-injected footer not visible to non-JS crawlers | `assets/js/script.js` | Consider making footer static HTML in each page for full AI/crawler visibility |
| Missing `<h1>` on services and portfolio hero sections | `services.html`, `portfolio.html` | Hero sections use eyebrow + subtitle but no `<h1>` |
| Duplicate `WebSite` + `LocalBusiness` JSON-LD | `index.html` | Two `WebSite` schemas and two `LocalBusiness` schemas — merge into one each |
| Sitemap lists clean URLs (`/services`) but files are `.html` | `sitemap.xml` | Requires server rewrite rules to serve `services.html` at `/services` |
| Stats section uses `<div>` instead of `<dl>/<dt>/<dd>` | `about.html` | Semantic improvement for screen readers |
| Footer social links use `href="#"` | `assets/js/script.js` | Placeholders — replace with real social media URLs |
| Contact form has no backend `action` | `contact.html` | Needs a form service (e.g. Formspree, Netlify Forms) |
| `.read-more` CSS class defined but unused | `assets/css/styles.css` | Dead code — safe to remove |

---

## Design Tokens (CSS Variables)

| Variable | Value | Usage |
|----------|-------|-------|
| `--bg` | `#fcebe0` (per-page override) | Page background |
| `--surface` | `#e8e3d5` | Section backgrounds, footer |
| `--accent` | `#c4b06e` | Eyebrow labels, highlights, borders |
| `--accent-amber` | `#dd8d22` | Bullets, strong text in hero |
| `--text-primary` | `#3d3b2f` | Headings |
| `--text-secondary` | `#6b6858` | Body copy |
| `--text-muted` | `#a8a494` | Labels, captions, footer |
| `--text-dark` | `#483c32` | Nav links, dark headings |
| `--font-serif` | DM Serif Display | Section headings (H2) |
| `--font-playfair` | Playfair Display | Hero titles, subtitles, buttons |
| `--font-cinzel` | Cinzel | Nav logo, eyebrow labels |
| `--font-sans` | Inter | Body copy, UI text |
| `--transition` | `0.4s cubic-bezier(0.16, 1, 0.3, 1)` | All hover/state transitions |

## Colour Palette (Section Backgrounds)

| Colour | Hex | Used for |
|--------|-----|---------|
| Yellow | `#FFF9D1` | Hero section (all pages) |
| Pink | `#ffcdcf` | Why / Services sections |
| Linen | `#f2ede0` | Process section background |
| Surface | `#e8e3d5` | Stories section, footer |
| Bg | `#fcebe0` | Portfolio, FAQ, page default |
| Sandy | `#e8c9b0` | Wave layer 1 (pre-footer) |

> Full palette reference with all 140+ named swatches: [`docs/COLOURS.md`](docs/COLOURS.md)
> Design system guide: [`docs/DESIGN.md`](docs/DESIGN.md)
> Performance roadmap: [`docs/PERF.md`](docs/PERF.md)
> SEO & AI-searchability audit: [`docs/SEO-AI.md`](docs/SEO-AI.md)
