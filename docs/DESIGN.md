# Beauty with EVE — Design System

> "Beauty with EVE" is the website name — a personal branding site for **Evelynn Koo**, certified colour analyst. Parent company: deBeau. All styles live in `assets/css/styles.css`.

## Design Philosophy

Warm, luxurious, and personal. The site uses a soft spring colour palette (yellow, pink, mint, ivory) that mirrors the seasonal colour analysis service itself. Every design decision aims to feel approachable and feminine without being generic — the colours teach by example.

---

## Typography

| Role | Font | Weight | Notes |
|---|---|---|---|
| Logo, eyebrow labels | Cinzel | 400, 700 | All-caps, wide tracking |
| Hero title, section headings | Playfair Display | 400–700 | Italic `<em>` for expressive moments |
| Body, credentials, cards | Playfair Display | 400–600 | Warm editorial feel |
| UI (nav, buttons, pills) | Inter | 400–700 | Clean, functional |
| Subheadings | DM Serif Display | 400 | Italic variant for softness |

### Font weights in use
| Weight | Usage |
|---|---|
| 300 | Body default (`body { font-weight: 300 }`) |
| 400 | Headings, nav logo, body text, card text |
| 500 | Nav links, subtitles, credentials, FAQ questions, proof labels |
| 600 | Audience labels, about eyebrow, contact presets |
| 700 | Contact labels, story card type badges, credentials `<strong>` |

### Responsive sizing
All hero and heading font sizes use `clamp()` — e.g. `clamp(2.55rem, 5.1vw, 5.1rem)` — so they scale smoothly between mobile and desktop without breakpoint jumps.

---

## Layout System

### Page structure
Each page follows: **Nav → Hero → Sections (alternating bg) → Wave → Footer**

### Section rhythm
**Home page** — sections alternate background colours (yellow → pink → yellow → mint → ivory → yellow) creating visual breathing room without hard lines. Wave dividers bridge the transitions.

**Subpages** — all content sections use yellow (`#FFEA99`) only. Pink and mint are home-page-exclusive. Footer is always ivory (`#FFFFF0`).

### Hero (home page)
Two-column flex layout:
- **Left** — eyebrow + H1 + subtitle + CTA button + brand pill links
- **Right** — spring colour wheel visual + portrait + credentials card

---

## Wave Divider System

Waves are SVG paths inside a `<div class="wave-divider [modifier]">`.

**Rule:** CSS background of the wave div = colour of the section **above**. SVG `fill` = colour of the section **below**.

| CSS class | Background colour | Notes |
|---|---|---|
| `wave-divider--yellow` | `#FFEA99` | |
| `wave-divider--pink` | `#FFCDCF` | |
| `wave-divider--linen` | `var(--bg)` (yellow) | |
| `wave-divider--surface` | `var(--bg-tertiary)` (mint) | |
| `wave-divider--ivory` | `#FFFFF0` | |
| `wave-divider--bg` | `var(--bg)` (yellow) | |
| `wave-divider--hero` | `transparent` | Hero-specific: height 250px, `margin-top: -200px`, overlaps the hero section; SVG has pink drop-shadow glow (`rgba(255,205,207,0.8)`) |

---

## Hero Right Column — Credentials + Portrait

The hero right column (`.hero-drape__right`) contains two stacked layers:

### Structure (z-index order, back to front)
1. **`.hero-drape__visuals`** — flex container, `min-height: 600px`, holds the portrait
2. **`.hero-drape__portrait`** (z-index 2) — Evelynn's portrait image, absolutely positioned
3. **`.hero-drape__credentials`** (z-index 3) — 3-item credential card, absolutely positioned over the visuals

### Credentials card (`.hero-drape__credentials`)
- Positioned `top: 40%; left: 0%; transform: translateY(-50%)`, width `380px`, z-index 3
- Three `.credential-item` blocks separated by `.credential-divider` (100×1px rule, `#c4b8a0`)
- `.credential-title` — Playfair Display, `clamp(1.2rem, 1.6vw, 1.5rem)`, weight 600, colour `#8b5a6b`
- `.credential-desc` — `clamp(0.75rem, 0.85vw, 0.85rem)`, colour `#5c554b`, line-height 1.45
- Each `.credential-item` and `.credential-divider` carries `class="fade-in"` with staggered `transition-delay` (0.1s, 0.25s, 0.4s, 0.55s, 0.7s)
- Current three credentials: "Empowered Over 200 Individuals", "Certified Personal Colour Analyst", "Senior Corporate Consultant"

### Portrait (`.hero-drape__portrait`)
- `position: absolute; bottom: 0; left: 70%; transform: translateX(-50%)`
- `width: 100%; height: 120%` — overflows the container upward, no max constraints
- `object-fit: contain; object-position: bottom center`
- `drop-shadow(0 4px 12px rgba(61,59,47,0.15))`
- Source: `assets/images/common/portfolio.png`

> **CSS legacy:** `@keyframes aurora-pulse`, `@keyframes aurora-drift`, `.aurora-spot`, and `.hero-drape__wheel` rules remain in `styles.css` but are not applied to any element in the current HTML. Safe to remove in a future cleanup pass.

---

## Card Styles

| Card type | Background | Border radius | Notes |
|---|---|---|---|
| `why-drape__card` | `#FFE8E9` light pink | `16px` | Flat, no border |
| `story-card` | `#E0F2CE` light mint | `16px` | Flat, subtle hover lift |
| `faq-drape__item` | `#FFF7D6` pale yellow | — | Hover: `#FFF0B3` + orange border |
| `hero-drape__credentials ul` | `rgba(255,255,255,0.30)` | `24px` | Frosted glass — `backdrop-filter: blur(8px)`, white border |
| `service-package` (default) | `rgba(255,255,255,0.4)` | `24px` | Frosted glass — `backdrop-filter: blur(12px)` |
| `service-package--corporate` | `#2b2e35` near-black | `24px` | Dark variant, custom text colours |
| `service-package--personal` | gradient `#f9f0e8 → #efceaa` | `24px` | Warm linen gradient |

---

## Button Styles

| Class | Style | Usage |
|---|---|---|
| `hero-drape__btn` | Dark fill `#3d3b2f`, yellow `#FFEA99` text; hover → amber `#dd8d22` | Primary CTA |
| `hero-drape__btn--secondary` | Transparent, light border, yellow text | Secondary CTA (dark bg) |
| `hero-drape__btn--outline-dark` | Transparent, dark `#3d3b2f` border; hover → dark fill, yellow text | Paired secondary (light bg) |
| `cta-drape__btn` | Yellow `#FFEA99` fill, dark text; hover → white fill | CTA section buttons |
| `cta-drape__btn--outline` | Transparent, light border, yellow text | CTA section secondary |
| `brand-link` | Dark fill, yellow text pill; inverts on hover | Brand name tags |
| `audience__link` | Pill — transparent with border, inverts on hover | Service links |
| `contact-preset` | Transparent, black border pill; hover → black fill, gold `#c6985a` text | Contact form presets |
| Footer / credentials social | `rgba(61,59,47,0.07)` pill, `border: 1px solid rgba(61,59,47,0.1)` | Ghost pill links |

---

## Contact Form

Layout: two-column inside `.contact-hero__inner` — info column left, form column right.

### Form container (`.contact-form`)
- Background: `#FFFFF0` ivory white
- `border-radius: 24px`, `padding: 4rem 3rem`
- Subtle shadow: `0 12px 40px rgba(61, 59, 47, 0.04)`
- `backdrop-filter: blur(12px)` for depth on yellow hero

### Input states (`.contact-input`)
- **Default** — transparent bg, `1px solid #000` border
- **Hover** — white bg, `2px solid #000` border, `box-shadow: 0 0 0 3px rgba(61,59,47,0.12)` glow ring
- **Focus** — white bg, `2px solid #000` border

### Labels (`.contact-label`)
- `font-weight: 700`, `font-size: 0.75rem`, uppercase, `letter-spacing: 0.1em`, `color: #000`

### Preset message pills (`.contact-preset`)
- 6 pills: "Signature Draping Session", "Retail Events", "Drape Party", "Team Workshop", "Corporate Consultation", "Other Enquiries"
- Click pre-fills the message textarea via JS using `data-msg` attribute; no persistent active state
- Hover: black fill, `#c6985a` gold text

### Honeypot
- Hidden `#contact-website` field (`aria-hidden`, `tabindex="-1"`) for bot spam protection

---

## About Page — Layered Panel System

The about hero uses three stacked decorative panels (`.about-panel`):

| Panel | Class | Style |
|---|---|---|
| Back | `.about-panel--back` | Linen gradient `#e8e3d5 → #ddd8c8 → #cdc7b5` at 155° |
| Mid | `.about-panel--mid` | Gold tint gradient `rgba(196,176,110,0.25) → rgba(200,184,138,0.15)` + `backdrop-filter: blur(8px)` |
| Front | `.about-panel--front` | Spring palette conic-gradient (same as hero wheel) |

Panels are absolutely positioned and rotated to create a layered fabric-like depth effect.

---

## Portfolio Page — Case Layout

`.portfolio-case` — alternating two-column layout (image + text):
- Odd items: image left, text right
- Even items: image right, text left (via `flex-direction: row-reverse`)
- Media block has hover zoom (`transform: scale(1.03)`)
- Season badge (`.portfolio-case__season`) + client name (`.portfolio-case__name`) above description
- Collapses to single column on mobile

---

## Events Page — Article Layout

`.event-article` — stacked image + content cards:
- Image wrapper (`.event-img-wrap`) with fixed aspect ratio
- Content block (`.event-content`) with `<time datetime>` metadata, `<h2>` title, body text
- Uses `<article>` semantic element
- Images use `loading="lazy"`
- Ordered newest-first

---

## Individual Event Page Layout

### Hero (`subpage-hero`)

Three rows of metadata below the nav, no visual column:

```
[EYEBROW]          ← event type, e.g. "COLOUR ANALYSIS EVENT"
[H1]               ← partner/venue name only, e.g. "JD Sports"
Location: …        ← .event-hero__location  (strong label + venue, city, Malaysia)
Date: …            ← .event-hero__date      (strong label + <time datetime>)
```

- Eyebrow uses `.hero-drape__eyebrow` (Cinzel, uppercase)
- H1 uses `.hero-drape__title` (scaled down via `.subpage-hero` override)
- Location + Date sit in `.event-hero__meta` flex column, `gap: 0.35rem`
- **Naming rule:** H1 is the partner/venue name only — never append "Beauty with EVE" or "× Evelynn Koo"

### Detail section (`.event-detail`)

Two-column grid — photo left, text right:

```
[ Photo ]   [ Body copy paragraphs ]
```

- `.event-detail__inner--two-col` — `grid-template-columns: 1fr 1fr`, `gap: 3.5rem`, `max-width: 1200px`
- Photo in `.event-detail__media` → `.event-detail__img` (`aspect-ratio: 3/2`, `border-radius: 12px`)
- Text in `.event-detail__body` — `font-size: 1.05rem`, `line-height: 1.8`
- Collapses to single column on mobile (≤768px)

### CTA

Standard `.page-cta` band: "Bring colour to your next event" → contact + back to Events.

---

## Animation System

| Animation | Element | Behaviour |
|---|---|---|
| Credential stagger | `.credential-item`, `.credential-divider` | Each has `class="fade-in"` with `transition-delay` 0.1s → 0.7s; driven by JS IntersectionObserver |
| `fade-in` | Section content, credential items | Scroll-triggered opacity + translateY via JS IntersectionObserver |
| FAQ accordion | `.faq-drape__item` | `max-height` expand, chevron rotate |
| Nav scroll | `.nav` | Background + shadow appear on scroll |

> **CSS-defined but unused:** `@keyframes rainbow-shift`, `aurora-pulse`, and `aurora-drift` remain in `styles.css` but are not applied to any element in the current HTML.

---

## Navigation

Centred logo, links split left/right. On scroll: background becomes semi-opaque `rgba(255,234,153,0.92)` with `backdrop-filter: blur(8px)`. Active page link uses `--accent` (`#483C32`) colour. Mobile hamburger collapses to a full-width dropdown.

---

## Footer

Injected via `assets/js/script.js` into `<footer id="site-footer">`. Single wave above (`fill="#FFFFF0"`), `#FFFFF0` background. Contains: logo link to `index.html`, Instagram nav link, tagline, copyright.

> **Note for SEO:** Footer HTML is JS-injected and may not be indexed by all crawlers. See SEO-AI.md for remediation.

---

## Glassmorphism Usage

Used sparingly for elements floating on the hero background:
- **`.hero-drape__credentials ul`** — `rgba(255,255,255,0.30)` + `backdrop-filter: blur(8px)` + white border + `border-radius: 24px`
- **`.contact-form`** — `backdrop-filter: blur(12px)` on ivory `#FFFFF0` bg (subtle depth only)
- **`.service-package` default** — `rgba(255,255,255,0.4)` + `backdrop-filter: blur(12px)`

Avoid applying glassmorphism on coloured section backgrounds (pink/mint) — it only works on the yellow hero where the blur has enough colour depth to be visible.

---

## Subpage Pattern

All subpages (About, Services, Events, Portfolio, Contact) share:
- Inline `--bg: #FFEA99` override in `<style>` tag (overrides any inherited value)
- `theme-color` meta `#FFEA99`
- `subpage-hero` class — shorter hero, no visual column
- All content sections use yellow (`#FFEA99`) — no pink or mint on subpages
- CTA band (`.page-cta`) — yellow background, eyebrow in `#e5791f` warm orange, heading in Playfair Display with italic `<em>`
- Same nav, footer, wave structure
- Footer wave: `wave-divider--bg` (yellow) → single path `fill="#FFFFF0"`

### Subpage hero variants

| Page type | Hero content |
|---|---|
| About | Eyebrow + H1 + bio paragraph + CTA buttons |
| Services, Portfolio, Contact | Eyebrow + subtitle paragraph |
| Events (listing) | H1 (as eyebrow) + subtitle |
| **Event detail pages** | Eyebrow (type) + H1 (partner name) + Location row + Date row |
