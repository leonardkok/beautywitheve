# Beauty with EVE — Mobile Rules

> Rules and decisions governing the mobile behaviour of this site. All styles live in `assets/css/styles.css`.

---

## Breakpoints

| Breakpoint | Width | Purpose |
|---|---|---|
| Small phone | `max-width: 400px` | Single-column fabric grid, smaller swatches |
| Mobile / tablet | `max-width: 768px` | Primary responsive breakpoint — stacks all multi-column layouts, shows hamburger nav |
| Tablet mid | `min-width: 600px` and `max-width: 899px` | 2-column services grid (tablet middle step) |
| Desktop | `min-width: 900px` | 3-column services grid |
| Wide | `min-width: 768px` | 4-column why-drape grid |
| Large | `min-width: 1024px` | Extended grid overrides |

---

## Navigation

- Desktop nav (left links + logo + right links) — both link groups hide at `≤768px`
- Hamburger button appears at `≤768px` — `display: flex`
- Hamburger touch target: `padding: 0.75rem` → ~44×44px tap area
- Mobile overlay: `position: fixed; inset: 0` full-screen, `z-index: 1000`
- Hamburger button: `z-index: 1100` (above overlay)
- Body scroll locked while menu is open (JS)
- Escape key closes menu and returns focus to hamburger button

---

## Touch Targets

Minimum tap target size is **44×44px** (WCAG 2.5.5).

| Element | Padding | Notes |
|---|---|---|
| `.hero-drape__btn` | `0.8rem 2.5rem` | ~48px height ✓ |
| `.contact-input` | `1rem` | ~48px height ✓ |
| `.contact-preset` | `0.6rem 1.2rem` | ~40px height — acceptable for secondary pill actions |
| `.nav__hamburger` | `0.75rem` | ~44px square ✓ |
| `.event-readmore` | `0.45rem 1rem` | Small — secondary link, not primary action |

---

## Typography

All heading sizes use `clamp()` — no breakpoint jumps:

| Element | `clamp()` value |
|---|---|
| `.hero-drape__title` | `clamp(2.55rem, 5.1vw, 5.1rem)` |
| `.hero-drape__subtitle` | `clamp(1rem, 1.7vw, 1.9rem)` |
| `.service-package__title` | `clamp(1.5rem, 4vw, 2.5rem)` |
| `.services-block__title` | `clamp(1.8rem, 3vw, 2.5rem)` |
| Mobile nav links | `clamp(1.8rem, 5vw, 2.5rem)` |

**Rules:**
- Body text minimum: `1rem` (16px) — never go below this
- All `<input>` and `<textarea>` elements: `font-size: 1rem` minimum — prevents iOS Safari auto-zoom on focus
- Subheadings (`h2`, `h3`) always use `clamp()` with a minimum ≥ `1.3rem`

---

## Layout Collapse Rules (at `max-width: 768px`)

| Component | Desktop | Mobile |
|---|---|---|
| Hero | 2-column flex (left: copy, right: portrait + credentials) | `display: contents` on both columns; portrait first, credentials last |
| About hero | 2-column grid | 1 column |
| About philosophy | 2-column grid | 1 column |
| Contact hero | 2-column grid | 1 column |
| Audience cards | 2-column grid | 1 column |
| Client stories grid | 3-column grid | 1 column |
| Experience steps | 3-column grid | 1 column |
| Portfolio cases | 2-column flex | 1 column |
| Event detail | 2-column grid | 1 column |
| Services grid (3) | 3-column (≥900px) | 2-column (600–899px) → 1 column (<600px) |
| Fabric grid | 4-column | 2-column @768px → 1 column @400px |

**Rule:** No multi-column layout should remain on screens `≤768px` unless the content specifically fits (e.g. `why-drape__grid` uses 2 cols as its mobile default because each card is compact).

---

## Images

- Global reset: `img { max-width: 100%; height: auto; }` — prevents any image from overflowing its container
- All `<img>` tags must have explicit `width` and `height` attributes to prevent CLS
- All below-fold images: `loading="lazy"`
- Hero portrait: `fetchpriority="high"` — highest-priority LCP fetch
- Images inside flex/grid cells use `width: 100%; object-fit: cover` + explicit `aspect-ratio`

---

## Spacing (Padding / Margins)

Large section padding is reduced at `≤768px`:

| Component | Desktop padding | Mobile padding |
|---|---|---|
| `.hero-drape` | `8rem 3rem 4rem` | `5rem 1.5rem 3rem` |
| `.subpage-hero` | default | `6rem 1.5rem` |
| `.about-hero-section` | default | `6rem 1.5rem 4rem` |
| `.contact-hero` | default | `6rem 1.5rem 5rem` |
| `.service-package` | `4rem 3rem` | `2rem 1.5rem` |
| `.page-cta` | default | `3rem 1.5rem` |
| `.drape-reveal` | default | `3rem 1.5rem` |
| `.experience` | default | `3rem 1.5rem` |
| `.footer-drape` | default | `2rem 1.5rem` |

**Rule:** Mobile horizontal padding is always `1.5rem`. Never reduce below `1rem` — text must not sit flush against screen edges.

---

## Forms (Contact Page)

- Two-column contact hero collapses to 1 column at `≤768px`
- `.contact-submit` becomes `width: 100%` at `≤768px` for easy thumb reach
- All inputs: `font-size: 1rem` (prevents iOS zoom), `padding: 1rem`
- Honeypot field: `position: absolute; left: -9999px` — never visible on mobile
- Preset pills: `flex-wrap: wrap` so they reflow gracefully on narrow screens

---

## Hero Mobile Layout

At `≤768px`, the hero switches from two-column flex to a single reordered column:

- `.hero-drape__left` and `.hero-drape__right` both become `display: contents` — their children are pulled into the parent flex flow and ordered explicitly
- Portrait (`.hero-drape__visuals`) → `order: 1` — appears first (top of hero), height 340px, `overflow: hidden`
- Eyebrow → `order: 2`, Title → `order: 3`, Subtitle → `order: 4`, CTA button → `order: 5`, Brands → `order: 6`
- Credentials (`.hero-drape__credentials`) → `order: 7` — appears last below the brands, reset from absolute to normal flow (`position: relative`, `top: auto`, `width: 100%`)
- Portrait: `max-width: 300px`, `height: 340px`, `left: 50%` (centred), `bottom: -40px`

> **CSS legacy:** `.hero-drape__wheel` and `.hero-drape__aurora` still have mobile overrides in `styles.css` but those elements are no longer present in the HTML — safe to remove in a future cleanup pass.

---

## Scroll Behaviour

- `scroll-behavior: smooth` on `html`
- `#main-content` has `scroll-margin-top: 80px` — accounts for the sticky nav height when the skip link or anchor jumps to main content
- Nav scroll state: background becomes `rgba(255,234,153,0.92)` + `backdrop-filter: blur(8px)` after first scroll (JS)

---

## Reduced Motion

`@media (prefers-reduced-motion: reduce)` disables:
- `.fade-in` transitions (shown immediately at full opacity)
- Portfolio image hover zoom
- Hamburger span animations
- Mobile nav transition
- Service card hover lift

**Rule:** Any new animation or transition added to the site must have a corresponding `prefers-reduced-motion` override that either removes or significantly reduces the motion.

---

## Hover Effects on Touch

CSS `:hover` is unreliable on touch devices (may fire on first tap or stick). Rules:
- Never hide essential information behind `:hover` alone
- Decorative hover effects (card lift, image zoom, colour inversion) are acceptable — they enhance but are not required
- `.fabric-card:hover` lift effect will not trigger on touch — acceptable since card content is always visible
- All interactive state (active nav link, open FAQ) must be set via class, not `:hover`

---

## Checklist for New Components

When adding any new section or component, verify:

- [ ] Multi-column layout has a 1-column `@media (max-width: 768px)` override
- [ ] All font sizes use `clamp()` or are ≥ `1rem`
- [ ] All interactive elements (buttons, links) have `padding` giving ≥ 44px tap area
- [ ] Images have `max-width: 100%`, explicit `width`/`height`, and `loading="lazy"` if below fold
- [ ] No hard-coded `px` widths on block-level containers
- [ ] Section padding reduced to `1.5rem` horizontal on mobile
- [ ] Any new CSS animation has a `prefers-reduced-motion` override
- [ ] Form inputs use `font-size: 1rem` minimum
