# Northstar Heating & Cooling — Project Notes

## What This Site Is

Demo/portfolio site for a fictional HVAC contractor based in Edmonton, Alberta. Represents a family-owned business (founded 2008) offering residential and commercial heating, cooling, and air quality services across the Greater Edmonton region (Sherwood Park, St. Albert, Leduc, Spruce Grove, Fort Saskatchewan).

**Business Positioning:**
- 24/7 emergency service
- Upfront pricing, fully licensed and insured
- HRAI certified, Alberta Gas Code certified, WCB covered, BBB accredited
- 12 licensed technicians

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 (semantic, single-page) |
| Styles | Vanilla CSS3 with custom properties |
| Scripts | Vanilla JavaScript (ES6+, no frameworks) |
| Icons | Font Awesome 6.5.0 (CDN) |
| Fonts | Google Fonts (CDN) |
| Forms | Formspree (external, async submission) |
| Maps | Google Maps embed (no API key) |
| Build | None — static files, deploy as-is |

**No package.json, no bundler, no framework.** Files are:

```
demo-hvac-northstar/
├── index.html        (~1,200 lines)
├── style.css         (~1,968 lines)
├── script.js         (~335 lines)
└── images/
    ├── hero.jpg
    ├── about.jpg
    ├── gallery-1.jpg
    ├── gallery-2.jpg
    ├── gallery-3.jpg
    ├── gallery-4.jpg
    └── gallery-5.jpg
```

---

## Brand Colors

| Name | Hex | Usage |
|---|---|---|
| Navy (primary) | `#1a2744` | Headings, primary backgrounds |
| Navy Dark | `#0d1b2a` | Footer, dark sections |
| Navy Light | `#243660` | Hover states, accents |
| Orange (accent) | `#f47c20` | CTAs, highlights, heating theme |
| Orange Dark | `#d9650c` | Orange button hover |
| Orange Light | `#ffa04d` | Backgrounds, footer accents |
| Red Alert | `#c0392b` | Emergency banner |
| Off-white | `#f8f9fc` | Alternating section backgrounds |
| Text Dark | `#1a2027` | Primary body text |
| Text Gray | `#6c757d` | Secondary/muted text |

---

## Fonts

| Font | Weights | Role |
|---|---|---|
| Montserrat | 400, 600, 700, 800 | Headings — bold, modern |
| Open Sans | 400, 600 | Body text — clean, readable |

Typography uses `clamp()` for fluid scaling across viewport sizes.

---

## Current Status

**Stage:** Complete, production-ready. Not yet deployed.

**Before going live, these must be configured:**

1. **Formspree Form IDs (critical)** — both forms currently use `YOUR_FORM_ID`:
   - Hero booking form (`index.html` ~line 129)
   - Main contact form (`index.html` ~line 715)
   - Create a free Formspree account, create two forms, replace the placeholder IDs

2. **Placeholder contact info** — `780-555-0100` and `info@northstarhvac.ca` are demo values; replace with real data

3. **Social media links** — Footer icons (Facebook, Instagram, Google, YouTube) link to `#`

4. **Privacy Policy & Terms of Service** — Footer links point to `#`; need real pages or URLs

5. **Favicon** — Currently an inline SVG data URI; replace with real `.ico`/`.png` when logo is finalized

---

## Positioning

**Speed** is the core competitive angle. Every copy element should reinforce "we get there fast." The hero headline, service descriptions, and CTAs all lead with dispatch time and same-day availability.

## Known Issues

None blocking. Pre-deployment checklist items listed above under Current Status.

---

## Key JS Features

- Sticky header with scroll shadow
- Mobile hamburger nav (slide-in, 275px panel, Escape to close)
- Smooth scroll with offset for sticky header (68px hardcoded)
- Back-to-top button (appears after 400px scroll)
- IntersectionObserver-based fade-in-up scroll animations
- Async Formspree form submission with loading/success/error states

---

## Changelog

| Date | Change |
|---|---|
| 2026-04-23 | Technical fixes — contact form merged to 5 fields (Name/Email/Phone/Service/Message), gallery item 6 removed + 5-item centered grid layout, `transition: all` replaced with explicit properties, install/repair pricing strip added below maintenance plans |
| 2026-04-23 | Full copy overhaul — hero rewrite (speed positioning), all 6 service descriptions rewritten (4-line formula), all weak CTAs replaced site-wide, trust bar stat corrected |
| 2026-04-22 | Initial project build — full single-page static site complete (HTML, CSS, JS, images) |

---

*Update this file whenever significant changes are made to the site.*
