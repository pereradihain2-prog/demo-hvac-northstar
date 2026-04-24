# CLAUDE.md — Agency Build Rules

You are helping build a website for a local service business. Every decision should serve ONE goal: make this website generate revenue for the client.

---

## The Core Principle

Every section, sentence, and pixel must do one of two things:
1. Build trust
2. Reduce friction

If it does neither, do not include it. This rule overrides everything else.

---

## Before You Build Anything

1. Read `PROJECT_NOTES.md` in this folder for project context.
2. Confirm the project's primary conversion goal (phone call, form fill, online booking).
3. If anything is ambiguous about the business, target customer, or brand, ASK ME before building. Do not guess.

---

## Copy Rules (Non-Negotiable)

### The mindset shift
Write for the CUSTOMER, not about the BUSINESS.
- Bad: "We are trusted experts with years of experience."
- Good: "Your furnace quit. We can be there in 90 minutes."

### The "so what" test
If a sentence describes what the business does, add "so what?" and answer it. The answer is the real copy.
- "We use premium equipment" → so what? → "...so your system runs quieter and lasts 5 years longer."

### Forbidden phrases (do not write these)
- "Welcome to..."
- "We are passionate about..."
- "Our trusted experts..."
- "Your one-stop shop..."
- "Quality service you can trust"
- "Contact us to learn more"
- "Submit" (as button text)
- "Learn More" (as button text)
- "Click here"

### Required copy patterns

**Hero headline:** Must answer in 2 seconds — WHAT you do + WHO it's for + a SPECIFIC outcome or promise. Not clever. Not abstract. Specific.

**Service descriptions:** Use the 4-line structure:
1. PAIN — acknowledge what the customer is dealing with
2. SOLUTION — what you do, in customer language
3. DIFFERENTIATOR — why you specifically
4. ACTION — what to do next

**CTA buttons:** Must describe the OUTCOME, not the action. Examples:
- "Get My Free Quote"
- "Book Same-Day Service"
- "See Pricing"
- "Start My Estimate →"

**Micro-copy under CTAs:** Always include a friction-reducing line below primary CTAs. Examples:
- "No credit card, no commitment"
- "We reply within 1 hour during business hours"
- "No high-pressure sales, just a real quote"

---

## Required Sections (in this order)

1. **Sticky header** — logo, nav, phone number (tap-to-call on mobile), primary CTA
2. **Hero** — outcome headline, subheadline with 3-4 specific promises, primary + secondary CTA, real photo
3. **Trust bar** — 4 specific stats (years, jobs completed, rating, availability)
4. **Services** — 3-6 cards using the 4-line structure
5. **Service area** — map or list of covered areas
6. **About / Why Choose Us** — short, differentiator-focused, NOT a biography
7. **Pricing or pricing ranges** — if at all possible
8. **Testimonials** — full names, locations, specific details. NO vague "great service!" reviews.
9. **Gallery** — real work, before/after when applicable
10. **Contact** — short form (5 fields max), phone, email, hours, "what happens next" line
11. **Footer** — nav, contact, licenses, certifications, BBB, copyright

---

## Friction Removers (Apply Everywhere)

- Phone number visible without scrolling on every page
- Phone number is tap-to-call on mobile (`tel:` links)
- Contact form: 5 fields maximum (Name, Phone, Email, Service, Message)
- After every form, a line like "We'll call within 1 hour during business hours"
- Pricing shown when possible — a range is better than nothing
- Service area clearly listed (specific cities/neighborhoods, not just "the area")
- Hours clearly visible, including emergency availability
- License, insurance, and certification numbers in the footer

---

## Design Guardrails (Anti-Generic)

### Colors
- NEVER use default Tailwind/Bootstrap colors (`#3B82F6`, `#4F46E5`, default blues/indigos)
- Use brand colors from `PROJECT_NOTES.md`. If not specified, derive a custom palette and ask me to approve.
- Always have a clear primary, secondary, and accent.

### Typography
- Never use one font for everything. Pair a display/heading font with a clean body sans.
- Large headings: tight letter-spacing (`-0.02em` to `-0.03em`)
- Body text: generous line-height (`1.6` to `1.7`)
- Don't use more than 2 font families total.

### Shadows
- Never use flat `shadow-md` style shadows.
- Use layered, color-tinted shadows with low opacity. Example for a navy brand:
  `box-shadow: 0 4px 12px rgba(30, 58, 95, 0.1), 0 2px 4px rgba(30, 58, 95, 0.06);`

### Spacing
- Use a consistent spacing scale (4, 8, 12, 16, 24, 32, 48, 64, 96).
- Don't pick random pixel values. Consistency creates polish.

### Interactive states
- Every clickable element MUST have distinct hover, focus-visible, and active states.
- Transitions: only animate `transform` and `opacity`. Never `transition: all`.

### Images
- Always use REAL photos from `images/` folder in this project.
- Do NOT use `picsum.photos`, `placehold.co`, or any random placeholder service unless I explicitly ask.
- If I haven't provided images yet, STOP and ask for them before building.
- Hero images should have a dark overlay (40-60%) for text readability.

---

## Technical Stack (Do Not Deviate)

- Vanilla HTML, CSS, and JavaScript. No frameworks unless I specify.
- Three separate files: `index.html`, `style.css`, `script.js`.
- Single-page websites unless I ask for multi-page.
- Mobile-first responsive CSS.
- Contact form: use Formspree placeholder (`action="https://formspree.io/f/YOUR_FORM_ID"`) — I will replace the ID later.
- Maps: embedded Google Maps iframe (no API key needed).
- Icons: Font Awesome via CDN or inline SVG.
- Host on Vercel — keep everything Vercel-compatible.

---

## File Organization

```
[project-folder]/
├── index.html
├── style.css
├── script.js
├── images/          (all photos go here, lowercase, hyphenated)
├── PROJECT_NOTES.md (ongoing project context)
└── CLAUDE.md        (this file)
```

- File names: lowercase, hyphens not spaces, no special characters
- Image names: `hero.jpg`, `about.jpg`, `gallery-1.jpg`, etc.

---

## When I Ask You to Build or Change Something

1. Before building, briefly explain your plan (3-5 bullet points).
2. Ask if I have questions before proceeding.
3. Build it.
4. Tell me which files you changed and what the changes do.
5. Tell me to refresh the browser to see results.

---

## When I Ask for Feedback or a Review

- Use the 25-point conversion audit:
  - Hero section (5 pts)
  - Trust elements (5 pts)
  - Copy quality (5 pts)
  - Friction removal (5 pts)
  - Technical (5 pts)
- Score honestly, including specific points lost and why.
- Give the top 3 highest-impact improvements to make first.

---

## When Something Goes Wrong

- Don't pretend it's fine. Point it out.
- Explain what you think the issue is before making changes.
- If you're unsure, ask instead of guessing.

---

## What You Should Never Do

- Never modify files outside this project folder.
- Never use stock-looking generic stock photos.
- Never write generic, fluff copy ("trusted experts", "passionate about", etc.).
- Never use vague CTA text.
- Never skip mobile responsiveness.
- Never leave broken image references.
- Never claim something is done before confirming it works.

---

## Session Opening Routine

At the start of every session in this folder, read:
1. `PROJECT_NOTES.md`
2. `index.html`
3. `style.css`
4. `script.js`

Then summarize the current state and wait for my direction.

---

## Update PROJECT_NOTES.md At End of Every Session

Before I close the session, update `PROJECT_NOTES.md` with:
- What was changed today
- Any design decisions worth remembering
- Current status and what's outstanding
- Known issues

This is your memory across sessions. Keep it current.