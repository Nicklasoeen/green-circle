# Handoff: Green Circle Website

## Overview
A one-page marketing website for **Green Circle** — a product line of handmade cooling and heat pump units by Øen Kuldeteknikk (Hornindal, Norway). The site presents the product range, natural refrigerants, use cases, a customer reference, and a contact form.

## About the Design Files
The files in this bundle are **design references created in HTML** — high-fidelity prototypes showing intended look, content, and behavior. They are **not** production code to copy directly. The task is to recreate these designs in your target codebase (e.g. Next.js, Astro, React, Vue) using its established patterns, routing, and component libraries. If no environment exists yet, Next.js + Tailwind is a reasonable starting point.

## Fidelity
**High-fidelity.** Pixel-accurate colors, typography, spacing, animations, and interactions are all final. Recreate the UI as closely as possible, including hover states and scroll behavior.

---

## Design Tokens

### Colors
```
--lime:       #8BC53F   (primary accent — CTA buttons, highlights, active states)
--lime-ink:   #9ED44A   (lime hover / lighter variant)
--sage:       #6B8E6B   (secondary green — orbit ring, passive dots)
--sage-dark:  #7FA87F   (text on dark, borders)
--ink:        #E8EDE2   (primary text — light on dark bg)
--ink-60:     rgba(232,237,226,.6)  (secondary text)
--paper:      #0D1410   (page background — deep forest green-black)
--paper-2:    #141C10   (slightly lighter surface — app card hover bg)
--line:       rgba(232,237,226,.1)  (divider / border color)
```

### Typography
| Role | Family | Weight | Size |
|---|---|---|---|
| Display / headings | Archivo | 800 | clamp(48px, 7.2vw, 108px) for hero h1; clamp(36px, 4.8vw, 68px) for section titles |
| Section subtitle | Archivo | 700 | 22px |
| Body | Inter | 400 | 14–19px |
| Data / labels / code | JetBrains Mono | 400–500 | 11–13px |

Letter-spacing: `-0.02em` on all Archivo headings. `text-wrap: pretty` on body copy.

### Spacing
- Section padding: `120px 40px` (desktop), `80px 20px` (≤800px)
- Grid gap standard: `80px` (2-col layouts), `40px` (mobile)
- Border radius: `999px` (pills/buttons), `14px` (cards), `8px` (image corners), `4px` (app grid)

### Shadows
- Hero image: `0 40px 80px -20px rgba(15,23,18,.5)`
- Orbit tags: `0 8px 24px -12px rgba(0,0,0,.4)`
- Nav CTA hover: `translateY(-1px)`

---

## Sections / Views

### 1. Sticky Navigation
- Fixed to top, `backdrop-filter: blur(12px)`, background `rgba(13,20,16,.85)`
- On scroll: `border-bottom: 1px solid var(--line)` appears
- **Scroll progress bar**: lime-colored `2px` bar at the very bottom of the nav, width driven by `scrollY / (scrollHeight - innerHeight)`
- Logo mark: SVG circle (sage ring) with lime G-letterform inside, 44×44px
- Brand text: "GREEN CIRCLE" (Archivo 800, 15px) + "by Øen Kuldeteknikk" (Inter 11px, ink-60)
- Nav links: Archivo 500 14px; on hover: lime underline animates in via `scaleX(0→1)`
- CTA button: lime bg, `#0D1410` text, pill shape; hover → ink bg

### 2. Hero
**Layout:** 2-column grid (`1.1fr 0.9fr`), min-height `calc(100vh - 200px)`

**Left column:**
- Eyebrow: dot (lime, glowing ring) + uppercase mono label
- H1: three lines, Archivo 800, clamp 48–108px. Two color spans: `.green` (sage-dark `#7FA87F`) and `.lime` (lime-ink `#9ED44A`)
- Lead paragraph: Inter 19px, ink-60, max-width 520px
- Two CTAs: primary (lime pill) + ghost (transparent border pill)
- Stat strip (border-top): three stats with large Archivo numbers + mono labels

**Right column — hero visual:**
- Outer circle container, `aspect-ratio: 1`
- Two animated rings (`.r1`, `.r2`) rotate continuously:
  - `.r1`: 18s clockwise, has a lime dot marker at top (`::before`)
  - `.r2`: 12s counter-clockwise (dashed sage border), has sage dot marker
- `.r3`: `border-top` lime + `border-right` sage, no rotation (accent arc)
- Tick marks: 60 radial ticks evenly spaced around outer radius, lime at 20% opacity; every 5th tick is taller
- Center image: the open-unit photograph, clipped to a circle via `border-radius:50%` on `.hero-img-wrap` (inset 8%)
- 4 orbit tags positioned absolutely around the circle at `.t1`–`.t4` (see CSS for positions), each showing refrigerant code + GWP badge

### 3. Photo Strip (full-bleed)
- Full-width, `height: 52vw`, max `600px`, min `320px`
- Image: `assets/img-logo.jpg` (Green Circle logo on unit, moody dark shot), `object-position: center 55%`
- Gradient overlays top and bottom (dark-to-transparent-to-dark)
- Bottom-right label: mono 12px "HÅNDLAGD I HORNINDAL — LEVERT OVER HELE LANDET"

### 4. Pillars (Section 01)
- Section header: mono section number left, large title right (2-col grid)
- 4-column grid, divided by `border-right: 1px solid var(--line)` and `border-top/bottom`
- Each pillar: mono index, h3 (Archivo 700 22px), body copy (Inter 14px ink-60)

### 5. Refrigerant Selector (Section 02) — Interactive
- Full-width dark section `#080E07`
- **2-col layout**: left tab list (380px) + right content panel
- **Tab list** (`.ref-tab`): 4 buttons for R290, R600a, R744, R717
  - Each: code (Archivo 800 22px), name (12px), GWP chip
  - Active state: lime-tinted background + border, lime dot + glow
- **Content panel**: fades + slides in on tab change (`opacity 0→1`, `translateY 8px→0`, 300ms)
  - Giant refrigerant code (Archivo 800 84px, lime)
  - Refrigerant name (24px)
  - Alt name in mono (50% opacity)
  - Description paragraph (17px, 80% opacity)
  - 3-col stat strip: Kapasitet / Utgående temp. / GWP

**Refrigerant data:**
| Code | Name | Alt name | Capacity | Temp | GWP |
|---|---|---|---|---|---|
| R290 | Propan | Isvann- og varmepumpeanlegg | ≤ 500 kW | 60 °C | 3 |
| R600a | Isobutan | Høytemperatur varmepumper | ≤ 500 kW | 85 °C | 3 |
| R744 | Karbondioksid | Bygg og prosesser m/dual behov | ≤ 1000 kW | Dual bruk | 1 |
| R717 | Ammoniakk | Industrielle anlegg | Flere tusen kW | 80 °C | 0 |

### 6. Applications Grid (Section 03)
- 4-column grid (`1px` gap on `var(--line)` background — creates divider lines between cells)
- 15 application tiles + 1 empty padding tile (to complete a 4-wide row)
- Each tile: mono number top-left, Archivo 700 20px name bottom-left, diagonal arrow top-right (appears on hover, translates from offset)
- Hover: background darkens to `--paper-2`

**Application list (in order):**
Næringsbygg, Svømmehaller, Fjernvarmeanlegg, Fjernkjøleanlegg, Slakteri — kjøtt, Slakteri — fisk, Spekematproduksjon, Landbasert oppdrett, Frukt og grønnsaker, Datasentraler, Biogass, Hydrogenproduksjon, Industrielle prosesser, Legemiddelproduksjon, …og mer

### 7. Case Study (Section 04)
**2-col grid** (`1fr 1.1fr`)

**Left:** Photo of installed Green Circle units (`assets/img-installed.jpg`), `aspect-ratio: 4/5`, `border-radius: 8px`, `object-fit: cover`

**Right:**
- Mono kicker: company type + location
- Pull-quote (Archivo 500, clamp 26–36px): real quote from Thomas Hovde
- Attribution: avatar initials circle (48px, sage bg) + name + role
- 3-col metric strip: `3 000 m²` / `25 år` / `R290`

### 8. Process Timeline (Section 05)
- 4-column grid
- Each step: `border-top: 2px solid var(--ink)`, lime dot `::before` at top-left
- Mono step number, h4 title (Archivo 700 22px), body copy

**Steps:** Behovsanalyse → Systemskjema → Håndbygging → Installasjon & drift

### 9. Contact / Footer (Section 06)
- Background `#0A1209`, slightly lighter than page bg
- **2-col grid**: left = large heading + lead copy; right = contact form

**Form fields:** Navn, E-post, Bruksområde (select), Kort om prosjektet (textarea)
- Form submit: show loading state ("Sender …"), then success state ("✓ Takk! Vi tar kontakt")
- Send button: lime bg, full-width pill

**Contact info strip** (4 cols): Selskap, Besøk, Ring, E-post
- Besøk: Ytrehornsvegen 58, 6763 Hornindal
- Ring: +47 57 87 84 00
- E-post: post@kuldeteknikk.com

**Footer bar**: copyright left, tagline right — "KVALITET SOM VIKTIGSTE SALGSFAKTOR"

---

## Interactions & Behavior

### Scroll reveal
All `.reveal` elements start at `opacity:0; transform:translateY(24px)` and transition to visible when they enter the viewport (IntersectionObserver, threshold 0.1).

### Smooth scroll
All anchor `<a href="#section">` links use `scrollIntoView({behavior:'smooth', block:'start'})` — do NOT use native browser smooth scroll on the element directly (use `window.scrollTo` with offset if needed in Next.js).

### Refrigerant tabs
On tab click: deactivate all tabs + panels, activate the clicked tab and corresponding panel. Panel transition: `opacity 0→1`, `translateY(8px→0)`, 300ms ease.

### Ring animation
Two rings rotate via CSS `@keyframes spin`. The `.r1` (outer, 18s clockwise) and `.r2` (inner dashed, 12s counter-clockwise) have absolute-positioned dot markers (`::before`) that orbit with them. The tick mark container also rotates (30s clockwise). Pause animations if reduced-motion is preferred.

### Nav progress bar
`width` = `scrollY / (scrollHeight - innerHeight) * 100%`, updated on scroll event.

---

## Assets

| File | Usage |
|---|---|
| `assets/logo.png` | Logo (PNG with transparency, 4950×1368) |
| `assets/img-open.jpg` | Hero visual — open aggregat unit |
| `assets/img-logo.jpg` | Full-bleed photo strip |
| `assets/img-installed.jpg` | Case study photo |

---

## Files in This Bundle

| File | Description |
|---|---|
| `index.html` | Complete single-page design reference |
| `assets/logo.png` | Brand logo |
| `assets/img-open.jpg` | Product photo — open unit |
| `assets/img-logo.jpg` | Product photo — logo close-up |
| `assets/img-installed.jpg` | Product photo — installed at site |
| `README.md` | This document |

---

## Responsive Breakpoints

| Breakpoint | Changes |
|---|---|
| ≤ 1000px | Refrigerant layout stacks vertically |
| ≤ 900px | Hero, case, contact, process → single column; app grid → 2 col |
| ≤ 800px | Nav links hidden; hero/section padding reduced; section-head stacks |
| ≤ 600px | Process grid → 1 col |
| ≤ 500px | App grid → 1 col |

---

## Notes for Developer

- Google Fonts used: `Archivo` (wght 400–900), `Inter` (wght 400–600), `JetBrains Mono` (wght 400–500)
- The design is dark-themed throughout (`color-scheme: dark`)
- The Tweaks panel (bottom-right corner) is a design tool, **not** a production feature — omit it
- All copy is in Norwegian (Bokmål)
- The contact form is a demo — wire up to a real backend (e.g. Resend, Formspree, or a Next.js API route)
