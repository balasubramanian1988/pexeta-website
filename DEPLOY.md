# Pexeta website — multi-page, deploy notes

## Structure
```
index.html                          Main page (offer, speciality, how, growth proof,
                                     revenue-share billing, why us, services, contact)
services/index.html                 Services overview
services/advertising.html           Advertising Management
services/listing-optimization.html  Listing Optimization
services/catalog-operations.html    Catalog & Operations
services/product-launch.html        Product Launch & Ranking
services/market-intelligence.html   Market Intelligence
services/amazon-global.html         Launch Amazon Global
favicon.ico + png icons             Browser / mobile icons
```
All pages share nav, footer, branding, and a WhatsApp button. Fully interlinked for SEO.

## Before you go live — replace these placeholders (every page)

1. **Google Analytics** — `G-XXXXXXXXXX` (twice per page)
2. **Meta Pixel** — `YOUR_PIXEL_ID` (three times per page)
3. **Microsoft Clarity** — `YOUR_CLARITY_ID` (once per page)
4. **Formspree** — `YOUR_FORM_ID` in the contact form action (index.html only)

Fastest way: find-and-replace across the whole folder. On Mac/Linux:
```
cd pexeta-full
grep -rl 'G-XXXXXXXXXX' . | xargs sed -i '' 's/G-XXXXXXXXXX/G-YOURREALID/g'
```
(Drop the '' after -i on Linux.) Repeat for each placeholder.

## Already wired
- WhatsApp button -> +91 8754579898, pre-filled message. On mobile it collapses
  to a compact icon. To change the number, search for `918754579898`.
- Contact email: hello@pexeta.in (search to change).
- Form posts via fetch with inline success message; fires GA `generate_lead` +
  Pixel `Lead` on submit. CTA clicks fire `cta_click`.

## Still to add later (clearly marked placeholders)
- **Growth charts** (index -> "Growth proof" section): revenue + ROAS charts.
  Currently a labelled placeholder. Send real anonymised data and they'll be built.
- Testimonials are NOT included on these pages yet (no fabricated proof).

## Deploy
Push the `pexeta-full` folder to a repo -> Vercel/Netlify, or drag-drop the folder.
Since it's static multi-page, any static host works. Point pexeta.in at it.
