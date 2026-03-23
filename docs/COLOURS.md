# Beauty with EVE — Colour Palette

> This is the colour reference for Evelynn Koo's personal branding site. "Beauty with EVE" is the website name; the parent company is deBeau. All colours apply to `assets/css/styles.css`.

## CSS Variables

| Variable | Value | Usage |
|---|---|---|
| `--bg` | `#FFEA99` | Primary background — body, hero sections, subpage heroes |
| `--bg-secondary` | `#FFCDCF` | Secondary background — Why Colour Analysis (home only) |
| `--bg-tertiary` | `#CCE6AC` | Tertiary background — Client Stories (home only) |
| `--surface` | `#e8e3d5` | Elevated surfaces (cards, panels) |
| `--border` | `rgba(61, 59, 47, 0.09)` | Subtle borders |
| `--text-primary` | `#3d3b2f` | Main body text |
| `--text-dark` | `#483c32` | Darker text variant |
| `--text-secondary` | `#6b6858` | Subdued / secondary text |
| `--text-muted` | `#a8a494` | Captions, labels, muted text |
| `--accent` | `#483C32` | Dark warm brown — eyebrow labels, active nav, decorative lines |
| `--accent-dark` | `#483C32` | Dark warm brown — logo "EVE", credentials (same as accent) |
| `--accent-amber` | `#dd8d22` | Bright amber — hero button hover |

---

## Background Palette

| Colour | Hex | Role | Used On |
|---|---|---|---|
| Yellow | `#FFEA99` | Primary | Body, all hero sections, all subpage content sections, FAQ |
| Pink / Blush | `#FFCDCF` | Secondary | Why Colour Analysis (home only) |
| Mint | `#CCE6AC` | Tertiary | Client Stories (home only) |
| Ivory white | `#FFFFF0` | Quaternary | Services (home), Contact form, Footer background + wave fill |

---

## Section-level Colour Map (Home Page)

| Section | Background |
|---|---|
| Hero | `#FFEA99` yellow |
| Why Colour Analysis (The Difference) | `#FFCDCF` pink |
| How Draping Works (The Process) | `#FFEA99` yellow |
| Real Results (Client Stories) | `#CCE6AC` mint |
| Services | `#FFFFF0` ivory white |
| FAQ | `#FFEA99` yellow |
| CTA (Ready to discover?) | `#3d3b2f` dark (floating card) |
| Footer | `#FFFFF0` ivory white |

---

## Component-level Colours

| Component | Colour | Hex |
|---|---|---|
| `why-drape__card` | Light pink | `#FFE8E9` |
| `story-card` | Light mint | `#E0F2CE` |
| `faq-drape__item` | Pale yellow | `#FFF7D6` |
| `faq-drape__item` hover | Deeper yellow | `#FFF0B3` |
| `story-highlight` (text marker) | Yellow | `#FFEA99` |
| `brand-link` default | Dark bg, yellow text | bg `#3d3b2f` / text `#FFEA99` |
| `brand-link` hover | Yellow bg, dark text | bg `#FFEA99` / text `#3d3b2f` |
| `hero-drape__credentials ul` | Frosted glass | `rgba(255,255,255,0.30)` + `blur(8px)` |
| `hero-drape__wheel` center | Yellow (matches hero bg) | `#FFEA99` |

---

## Contact Form Colours

| Element | State | Colour | Hex |
|---|---|---|---|
| `.contact-form` | — | Ivory white bg | `#FFFFF0` |
| `.contact-label` | — | Black text | `#000` |
| `.contact-input` | default | Transparent bg, black border | border `#000` (1px) |
| `.contact-input` | hover | White bg, black border + glow | bg `#fff`, border `#000` (2px), `box-shadow: 0 0 0 3px rgba(61,59,47,0.12)` |
| `.contact-input` | focus | White bg, black border | bg `#fff`, border `#000` (2px) |
| `.contact-preset` | default | Transparent bg, black border | border `#000`, text `#000` |
| `.contact-preset` | hover | Black bg, gold text | bg `#000`, text `#c6985a` |

---

## Service Package Colours

| Component | Variant | Colour | Hex |
|---|---|---|---|
| `.service-package` | default | Frosted glass | bg `rgba(255,255,255,0.4)` + `blur(12px)` |
| `.service-package--corporate` | bg | Dark near-black | `#2b2e35` |
| `.service-package--corporate` | type label | Light cream | `#e3dccf` |
| `.service-package--corporate` | title | Off-white | `#f2ede0` |
| `.service-package--corporate` | price / body | Muted light | `#c9c7c1` |
| `.service-package--corporate` | list items | Warm white | `#edebe4` |
| `.service-package--personal` | bg | Warm linen gradient | `linear-gradient(138deg, #f9f0e8 0%, #efceaa 100%)` |

---

## Typography Accent Colours

| Element | Colour | Hex |
|---|---|---|
| `drape-reveal__label` (eyebrow labels) | Warm orange | `#e5791f` |
| `page-cta__eyebrow` (subpage CTA labels) | Warm orange | `#e5791f` |
| `about-eyebrow` | Dark warm brown | `var(--accent)` = `#483C32` |
| `hero-drape__title em` ("true colours") | Rainbow animation | `#ff6b6b → #ffb347 → #ffe066 → #6bcb77 → #4d96ff → #c77dff → #ff6b9d` |
| `cta-drape__headline em` ("your colours?") | Rainbow animation | `#ff6b6b → #ffb347 → #ffe066 → #6bcb77 → #4d96ff → #c77dff → #ff6b9d` |
| `audience__card--corporate .audience__label` | Peach | `#ffdcbe` |
| `audience__card--corporate .audience__link` | Light cream | `#e3dccf` |

---

## Structural Colours

| Colour | Hex | Usage |
|---|---|---|
| Linen | `#e8e3d5` | Wave divider bottom layer (footer transition), `--surface` |
| Near-black | `#2b2e35` | Service package corporate card background |
| Dark brown | `#3d3b2f` | CTA floating card background |

---

## Wave Divider Map (Home Page)

| Wave position | CSS bg (section above) | SVG fill (section below) |
|---|---|---|
| Hero → Why Colour Analysis | `#FFEA99` yellow | `#FFCDCF` pink |
| Why Colour Analysis → The Process | `#FFCDCF` pink | `#FFEA99` yellow |
| The Process → Client Stories | `#FFEA99` yellow | `#CCE6AC` mint |
| Client Stories → Services | `#CCE6AC` mint | `#FFFFF0` ivory |
| Services → FAQ | `#FFFFF0` ivory | `#FFEA99` yellow |
| CTA → Footer | `#FFEA99` yellow | `#FFFFF0` ivory (single path) |

---

## CTA Swatch Dots

| Dot | Colour | Hex |
|---|---|---|
| 1 | Bright yellow | `#FFD966` |
| 2 | Bright green | `#7DCE78` |
| 3 | Bright coral | `#FF9A85` |
| 4 | Bright sky blue | `#94C5E8` |
| 5 | Bright pink | `#F09AB2` |
| 6 | Bright lavender | `#C4A0D8` |
| 7 | Bright orange | `#E8750A` |
| 8 | Bright amber | `#E8BE6A` |
| 9 | Bright red | `#E8395A` |
| 10 | Silver white | `#F5F5F5` |

---

## Seasonal Palette (Portfolio Only)

Content colours for the colour wheel and seasonal swatch demos — not part of the design system.

| Season | Colour | Hex |
|---|---|---|
| True Spring | Green | `#a8d5a2` |
| True Spring | Gold | `#f0c987` |
| Light Spring | Blush | `#ffcdcf` |
| Light Summer | Lilac | `#fbeafd` |
| Light Summer | Pale yellow | `#ffe4b5` |
| Soft Autumn | Wheat | `#f5e6c8` |
| True Autumn | Salmon | `#f7b7a3` |
| Soft Autumn | Mauve | `#d4a5b5` |
| Soft Summer | Lavender | `#c9b8d9` |
| Cool Summer | Teal-grey | `#c8d4e5` |
| Cool Summer | Dusty teal | `#a3c4cf` |
| Soft Winter | Dusty rose | `#e0c4d4` |
| Deep Autumn | Saddle brown | `#8b4513` |
| Deep Autumn | Sienna | `#b5651d` |
| Deep Autumn | Dark brown | `#5c4033` |
| Deep Autumn | Umber | `#704214` |
| Deep Autumn | Gold-brown | `#c9a96e` |
| Deep Winter | Crimson | `#c41e3a` |
| Deep Winter | Near-black blue | `#1a1a2e` |
| Deep Winter | Near-black | `#0d0d1a` |
| Deep Winter | Dark purple | `#2d0a31` |
| Deep Winter | Silver-white | `#e0e0e0` |

---

## Hero Colour Wheel (Spring Palette)

24 hard-edged segments × 15° — single ring with masked transparent centre. Aurora glow spots match each segment colour.

| Segment range | Colour | Hex |
|---|---|---|
| 0–15° | Coral red | `#FF6B6B` |
| 15–30° | Salmon | `#FF8070` |
| 30–45° | Peach coral | `#FF9878` |
| 45–60° | Peach | `#FFB088` |
| 60–75° | Warm peach | `#FFC090` |
| 75–90° | Apricot | `#FFCC80` |
| 90–105° | Warm yellow | `#FFD866` |
| 105–120° | Golden yellow | `#FFE070` |
| 120–135° | Pale yellow | `#FFEA88` |
| 135–150° | Cream yellow | `#FFF0A0` |
| 150–165° | Yellow-green | `#F0EE90` |
| 165–180° | Lime | `#D8E878` |
| 180–195° | Light lime | `#B8DC70` |
| 195–210° | Warm green | `#90D070` |
| 210–225° | Mint | `#78CC90` |
| 225–240° | Seafoam | `#68C8B0` |
| 240–255° | Turquoise | `#60C4C8` |
| 255–270° | Sky blue | `#70BCDC` |
| 270–285° | Cornflower | `#88B4EC` |
| 285–300° | Periwinkle | `#A8B0EC` |
| 300–315° | Lavender | `#D0A8EC` |
| 315–330° | Mauve pink | `#E8A0D0` |
| 330–345° | Pink | `#F898B8` |
| 345–360° | Warm pink | `#FF80A0` |

---

## Event Hero Meta Colours

Used in `.event-hero__location` and `.event-hero__date` on individual event detail pages.

| Element | Colour | Token |
|---|---|---|
| Label text ("Location:", "Date:") | Dark warm brown | `var(--text-primary)` = `#3d3b2f` |
| Value text (venue, city, date) | Subdued warm | `var(--text-secondary)` = `#6b6858` |

No new colour variables introduced — reuses existing tokens.

---

## Decorative Gold (Illustrations Only)

These gold tones appear only in fabric illustration gradients and decorative swatches — not used for text or UI.

| Colour | Hex | Usage |
|---|---|---|
| Muted gold | `#c4b06e` | Step-drape-3 fabric illustration gradient |
| Mid gold | `#c9a96e` | Deep Autumn palette swatch |
| Warm sand | `#c8b88a` | Step-drape-1 and step-drape-3 gradients |
| Soft apricot | `#E8C4A0` | First fabric swatch in home hero visual |
| Golden tan | `#c6985a` | Contact preset button hover text colour |
