# Beauty with EVE — Design System

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

| CSS class | Background colour |
|---|---|
| `wave-divider--yellow` | `#FFEA99` |
| `wave-divider--pink` | `#FFCDCF` |
| `wave-divider--linen` | `var(--bg)` (yellow) |
| `wave-divider--surface` | `var(--bg-tertiary)` (mint) |
| `wave-divider--ivory` | `#FFFFF0` |
| `wave-divider--bg` | `var(--bg)` (yellow) |

---

## Hero Visual — Spring Colour Wheel

The hero right column features a layered visual:

### Structure (z-index order, back to front)
1. **`.hero-drape__aurora`** (z-index 0) — container for 16 aurora glow spots
2. **`.hero-drape__portrait`** (z-index 2) — Evelynn's portrait, `object-fit: contain`
3. **`.hero-drape__wheel`** (z-index 3) — 380px spring colour wheel ring

### Colour wheel
- 24 hard-edged segments × 15° via `conic-gradient`
- Spring palette flowing: coral → peach → apricot → yellow → lime → green → mint → turquoise → sky blue → periwinkle → lavender → pink → coral
- Transparent centre cut via `mask: radial-gradient(circle at center, transparent 135px, black 136px)`
- Inner inward glow via `::before` pseudo-element with `box-shadow`

### Aurora glow spots
16 elongated ribbon ellipses (`145×48px`, `blur(26px)`) positioned around the ring at 22.5° intervals. Each:
- Matches the spring colour of the wheel segment it sits on
- Rotated tangentially to the ring (`--rot` CSS variable, θ + 90°)
- Pulses independently via two staggered animations: `aurora-pulse` (opacity) + `aurora-drift` (scale + translateY)
- Peak opacity: `0.85`, durations vary 2.1s–3.7s with staggered delays

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
- 4 pills: "Book a session", "Corporate workshop", "Learn more first", "Ask a question"
- Click pre-fills the message textarea via JS; no persistent active state
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

---

## Animation System

| Animation | Element | Behaviour |
|---|---|---|
| `rainbow-shift` (20s linear infinite) | `hero-drape__title em` ("true colours"), `cta-drape__headline em` ("your colours?") | Slow cycling rainbow gradient via `background-clip: text` |
| `aurora-pulse` (2.1–3.7s, staggered) | `.aurora-spot` | Opacity 0 → 0.85 → 0 |
| `aurora-drift` (4.1–6.1s, staggered) | `.aurora-spot` | Scale 1 → 1.12 + translateY -5px |
| `fade-in` | Section content | Scroll-triggered opacity + translateY via JS IntersectionObserver |
| FAQ accordion | `.faq-drape__item` | `max-height` expand, chevron rotate |
| Nav scroll | `.nav` | Background + shadow appear on scroll |

---

## Navigation

Centred logo, links split left/right. On scroll: background becomes semi-opaque `rgba(255,234,153,0.92)` with `backdrop-filter: blur(8px)`. Active page link uses `--accent` (`#483C32`) colour. Mobile hamburger collapses to a full-width dropdown.

---

## Footer

Injected via `script.js` into `<footer id="site-footer">`. Single wave above (`fill="#FFFFF0"`), `#FFFFF0` background. Contains: logo, nav links, social pill links (Instagram, LinkedIn, WhatsApp), copyright.

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
- `subpage-hero` class — shorter hero, no visual column, eyebrow + subtitle only
- All content sections use yellow (`#FFEA99`) — no pink or mint on subpages
- CTA band (`.page-cta`) — yellow background, eyebrow in `#e5791f` warm orange, heading in Playfair Display with italic `<em>`
- Same nav, footer, wave structure
- Footer wave: `wave-divider--bg` (yellow) → single path `fill="#FFFFF0"`
