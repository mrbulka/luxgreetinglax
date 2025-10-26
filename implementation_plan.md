# Implementation Plan

[Overview]
Build a single-page luxury landing site for an LAX Meet & Assist service with a black/white + gold aesthetic, refined typography, and strong, consistent “Book Now” CTAs (skeleton-only for now).

This implementation replaces the Vite/Vue starter UI with a bespoke, high-end design inspired by boutique luxury brands (sharp colors, square borders, generous spacing, refined serif headings). The site will be a single-page landing with smooth in-page navigation and distinct sections: Hero, Services (Arrival, Departure, Transfer), Why Choose Us (pain points solved), Process, and Footer. Typography will combine Inter (body) with Cormorant Garamond (headings). The gold accent (#D4AF37) is used for highlights, borders, and CTAs.

The initial release ships without backend integration—“Book Now” will be a non-functional skeleton CTA consistent across sections. The plan includes well-structured components, reusable tokens, and clean copy derived from the provided draft, rewritten for clarity, grammar, and luxury tone, with LAX-localized messaging.

[Types]  
Use lightweight JSDoc typedefs to enforce shape in a JS project (no TypeScript migration in this phase).

/**
 * @typedef {'arrival'|'departure'|'transfer'} ServiceId
 */

/**
 * @typedef {Object} ServiceCard
 * @property {ServiceId} id                         - Unique key
 * @property {string} title                         - Short service title (e.g., "Arrival Meet & Assist")
 * @property {string} tagline                       - 1–2 sentence pitch
 * @property {string} copy                          - Short paragraph (<= 80 words)
 * @property {string} image                         - Path to hero/service image
 * @property {'primary'|'outline'|'link'} ctaStyle  - CTA visual style
 * @property {string} ctaLabel                      - Default: "Book Now"
 * @property {string} [href]                        - Optional anchor/hash (e.g., "#book")
 */

/**
 * @typedef {Object} NavItem
 * @property {string} label                         - Display label (e.g., "Services")
 * @property {string} href                          - Section anchor (e.g., "#services")
 */

/**
 * @typedef {Object} CTAConfig
 * @property {string} label                         - CTA label (default "Book Now")
 * @property {'primary'|'outline'} variant          - Visual variant
 * @property {boolean} disabled                     - true in this phase (skeleton)
 */

/**
 * @typedef {Object} SectionCopy
 * @property {string} heading                       - Section heading (Cormorant Garamond)
 * @property {string} subheading                    - Optional subheading
 * @property {string[]} bullets                     - Optional bullet list
 */

Validation rules and relationships:
- ServiceCard.id must be in {'arrival','departure','transfer'}; must be unique.
- All NavItem.href must map to existing section IDs.
- CTAConfig.disabled must be true in this phase; all “Book Now” use the shared CTAConfig for consistency.
- Image paths must resolve under public/ or src/assets/.
- SectionCopy.heading is required; subheading optional; bullets optional.
- All copy should remain within agreed tone and length to preserve layout (tight, luxury tone, minimal verbosity).

[Files]
Introduce new Vue components, assets, and global styles; replace template content; keep dependencies minimal.

New files to be created:
- src/styles/tokens.css
  - CSS Custom Properties for palette, spacing, radii, shadows, and typography (Inter + Cormorant Garamond), plus a minimal reset.
- src/utils/dom.js
  - Utility functions: scrollToId(id), trapFocus(el) [placeholder], no-op analytics tracker.
- src/copy/services.js
  - Exports array of ServiceCard objects for Arrival, Departure, Transfer with refined copy and labels.
- src/components/NavBar.vue
  - Top navigation with logo/brand text left, right-aligned nav items (Services, Why Us, Process, Contact) and a “Book Now” CTA. Sticky on scroll.
- src/components/Hero.vue
  - Full-bleed hero with luxury headline, subhead, primary CTA, and image/background. Uses square borders and subtle gold accents.
- src/components/ServiceCard.vue
  - Reusable card for each service (image, title, short copy, CTA). Sharp borders; gold hover states.
- src/sections/ServicesSection.vue
  - Grids three ServiceCard entries (Arrival, Departure, Transfer) pulled from src/copy/services.js.
- src/sections/WhyUsSection.vue
  - Pain-point-driven section (stress-free LAX navigation, privacy, multilingual assistance, time savings). Gold-accent list with iconography placeholders.
- src/sections/ProcessSection.vue
  - 3–4 step visual process with concise titles and one-liners (Book, Greet, Escort, Complete).
- src/components/FooterBar.vue
  - Footer with brand lockup, compact nav, social placeholders, and legal text.

Existing files to be modified:
- index.html
  - Title: "Luxury Greeting Service — LAX Meet & Assist"
  - Meta description: "Discreet, personalized meet and assist at Los Angeles International Airport (LAX). Arrival, departure, and transfer services with a luxury touch."
  - Preconnect to Google Fonts; load Inter and Cormorant Garamond
  - Replace favicon as needed (initially keep vite.svg if none provided)
- src/main.js
  - Import src/styles/tokens.css before style.css; no functional changes.
- src/style.css
  - Replace starter styles with minimal layout helpers only; defer colors/typography to tokens.css.
- src/App.vue
  - Replace starter content with page scaffold:
    - <NavBar />
    - <Hero />
    - <ServicesSection id="services" />
    - <WhyUsSection id="why-us" />
    - <ProcessSection id="process" />
    - Anchor target for “Book Now” id="book" (CTA skeleton area)
    - <FooterBar />
  - Remove HelloWorld and Vite/Vue logos.

Files to be deleted or moved:
- Delete: src/components/HelloWorld.vue
- Delete (or replace): src/assets/vue.svg (not used)
- Keep: public/vite.svg as temporary favicon until provided brand assets

Configuration updates:
- No change to Vite config or dependencies in this phase.
- Optional: add meta viewport tags already present; consider Open Graph/Twitter tags for share previews (placeholder if imagery not finalized).

[Functions]
Add small DOM helpers and CTA behavior (skeleton-only).

New functions:
- scrollToId(id: string): void (src/utils/dom.js)
  - Smoothly scroll to a section by element ID; used by NavBar links and any “Learn more” links.
- trackClick(eventName: string, payload?: object): void (src/utils/dom.js)
  - No-op placeholder for future analytics; logs to console in dev.
- getCTAConfig(): CTAConfig (src/utils/dom.js or inline export in a new src/config/cta.js)
  - Returns shared CTA configuration (label “Book Now”, variant “primary”, disabled: true).

Modified functions:
- N/A (template had none beyond component bootstrap).

Removed functions:
- N/A

[Classes]
No JavaScript/TypeScript classes are planned; the architecture is composition-first with Vue SFCs and functional utilities.

[Dependencies]
No new npm packages required; fonts are loaded via <link> tags.

- Keep: "vue", "@vitejs/plugin-vue", "vite"
- External via HTML:
  - Google Fonts: Inter and Cormorant Garamond
- Optional (not added in this phase): modern-normalize or reset via CDN (we’ll inline a minimal reset in tokens.css instead)

[Testing]
Focus on visual and interaction QA across devices; no automated tests required for this phase.

- Start dev server and verify:
  - All sections render in order with correct spacing, black/white base, gold accents (#D4AF37).
  - Headings use Cormorant Garamond; body uses Inter.
  - Nav links smooth-scroll to sections; sticky header behaves correctly.
  - All “Book Now” CTAs look identical and are disabled (skeleton).
  - Layout holds at 360px width and large desktop.
  - Lighthouse pass for basic performance/accessibility (expect good contrast).
- Content QA:
  - Grammar and luxury tone verified; LAX references are accurate.
- Technical QA:
  - No console errors; no dead anchors; images resolve.

[Implementation Order]
Implement from global foundation to components, then sections, then content wiring, minimizing churn.

1) Global foundation
   - Add src/styles/tokens.css (colors, typography, spacing, reset)
   - Update index.html (title, meta, fonts)
   - Adjust src/main.js to import tokens.css before style.css
   - Replace src/style.css with minimal layout helpers

2) App scaffold
   - Rewrite src/App.vue to import and place NavBar, sections, and FooterBar
   - Add #book anchor target for CTA skeleton

3) Utilities and copy
   - Add src/utils/dom.js with scrollToId, trackClick, getCTAConfig
   - Add src/copy/services.js with three service entries (Arrival, Departure, Transfer)

4) Components
   - Create NavBar.vue with sticky behavior and consistent CTA
   - Create Hero.vue with headline/subhead and primary CTA
   - Create ServiceCard.vue (reusable)
   - Create FooterBar.vue

5) Sections
   - Create ServicesSection.vue to render three ServiceCard entries
   - Create WhyUsSection.vue with pain-point bullets
   - Create ProcessSection.vue with 3–4 steps

6) Cleanup
   - Remove HelloWorld.vue and unused assets
   - Remove all Vite/Vue starter references (logos/links)

7) Visual QA
   - Cross-browser/device check, spacing polish, hover/focus states, Lighthouse

8) Handoff-ready
   - Confirm CTAs consistent and disabled; document future backend/API hookup points in comments

Appendix: Initial Refined Copy (to be placed in components/sections)
- Hero
  - Heading: “Where Elegance Meets Every Journey”
  - Subhead: “Discreet, personalized meet & assist at LAX—from arrival to departure, we handle the details with precision.”
  - Primary CTA: “Book Now” (disabled)
- Services
  - Arrival: “From gate to curb, our dedicated team ensures a seamless welcome and swift exit—effortless, elegant, unforgettable.”
  - Departure: “Travel begins the moment you arrive at LAX. We orchestrate a smooth, stress‑free departure so you can focus on what matters.”
  - Transfer: “Between flights, we make transit calm and efficient—guidance, comfort, and peace of mind, every step.”
- Why Us (Pain Points Resolved)
  - “Navigate LAX without stress” — We choreograph each step, minimizing wait and confusion.
  - “Discretion & privacy” — Professional, understated assistance from curb to gate.
  - “Multilingual service” — Clarity across languages and logistics.
  - “Time well managed” — Efficient routing and preparation that respects your schedule.
- Process (4 steps)
  1. Book — Share your itinerary and preferences.
  2. Greet — Meet your assistant at the agreed point.
  3. Escort — Glide through each step with expert guidance.
  4. Complete — Arrive relaxed, depart confident.
