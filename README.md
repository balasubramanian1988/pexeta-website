# Pexeta.in

Marketing website for Pexeta — built with Next.js 16 (App Router), Tailwind CSS v4, and Supabase for lead storage.

## What's built

- **Home** (`/`) — hero, stats bar, capability grid (Amazon-anchor featured), case study spotlight, channel badges, pricing teaser, lead capture form
- **Marketplace Growth** (`/services/marketplaces`) — Amazon engine detail + Flipkart/Myntra/FirstCry + process timeline
- **Quick Commerce** (`/services/quick-commerce`) — dark store ops, PO fulfillment, visibility bidding, regional hub strategy
- **Case Studies** (`/case-studies`) — the 3 spotlight results from the spec, expanded
- **Pricing** (`/pricing`) — Fixed Retainer / Revenue Share / Hybrid Enterprise cards + FAQ accordion
- **About** (`/about`)
- **Contact** (`/contact`) — lead form + contact details
- **Privacy Policy, Terms of Service, Refund & Cancellation Policy** — draft legal pages (have a lawyer review before launch, and check DPDP Act 2023 compliance)
- Floating WhatsApp CTA button (site-wide)
- Auto-generated `sitemap.xml` and `robots.txt`
- Custom 404 page
- Per-page SEO metadata (title/description/OG)

## Before you go live — fill these in

1. **`src/components/WhatsAppButton.tsx`** — replace `91XXXXXXXXXX` with your real WhatsApp Business number
2. **`src/app/contact/page.tsx`** — replace the placeholder phone and email
3. **Legal pages** — replace `[DATE — fill in before launch]` and have a lawyer review `/privacy-policy`, `/terms`, `/refund-policy`
4. **Analytics** — add GA4 / Meta Pixel / Microsoft Clarity snippets (see "Analytics" below)
5. **Case studies & about copy** — swap in your real founder bio/photo once ready

## Local development

```bash
npm install
cp .env.example .env.local   # fill in Supabase values (see below) — optional for local dev, the lead form works without them
npm run dev
```

## Setting up Supabase (lead storage)

1. In your Supabase project, open the SQL editor and run `supabase/schema.sql` — this creates the `leads` table.
2. Copy your project URL and **service role key** (Project Settings → API) into:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `SUPABASE_SERVICE_ROLE_KEY`
3. Add both as environment variables in Vercel (Project → Settings → Environment Variables) and redeploy.

The service role key is only ever used server-side in `src/app/api/lead/route.ts` — it's never exposed to the browser. Row Level Security is enabled on the `leads` table so the client can never read/write it directly; only the server route (via the service key) can insert.

Until these env vars are set, the lead form still works — submissions are just logged to the server console instead of stored, so nothing breaks in the meantime.

## Deploying (GitHub → Vercel)

```bash
git init
git add .
git commit -m "Initial Pexeta website"
gh repo create pexeta-website --private --source=. --push   # or push manually to a GitHub repo you create
```

Then in Vercel: **New Project → Import** the GitHub repo → it auto-detects Next.js → add the two Supabase env vars above → Deploy. Point `pexeta.in`'s DNS to Vercel afterward (Vercel's project settings will give you the exact records to add).

## Analytics (not yet wired in — add before launch)

Add these to `src/app/layout.tsx` (inside `<head>` via Next's `<Script>` component):
- Google Analytics 4
- Meta Pixel
- Microsoft Clarity (you already use this for Jumbo Realty — same setup pattern)
- Google Ads conversion tracking, firing on the lead form's success state in `src/components/LeadForm.tsx`

## Not yet built (flagged, not forgotten)

- TACoS calculator interactive tool (spec mentioned this as a CTA on the marketplaces page — currently a plain CTA link instead)
- Blog/Resources section (recommended for long-term organic SEO, intentionally out of this first build)
- CMS for non-technical content updates (case studies/testimonials currently hardcoded in the page files — fine for launch, worth adding a simple Supabase-backed admin later if you'll update these often)
- A real qcom case study — the Quick Commerce page currently says outright that this channel is newer to the practice, rather than implying proof that doesn't exist yet. Swap that section out once you have a real result to show.
