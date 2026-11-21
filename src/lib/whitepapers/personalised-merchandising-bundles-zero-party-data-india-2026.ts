import type { WhitePaper } from "./types";

export const personalisedMerchandisingIndia2026: WhitePaper = {
  slug: "personalised-merchandising-bundles-zero-party-data-india-2026",
  title: "Personalised Merchandising for Indian D2C Brands: Generative Landing Pages, Margin-Aware Bundles and Zero-Party Data",
  subtitle:
    "What the evidence says personalisation is worth, how to personalise landing pages and bundles without hurting speed or margin, how to collect preference data customers give willingly, and the Indian consumer and privacy rules that apply",
  titleTag: "Personalised Merchandising, Bundles & Zero-Party Data (2026): A Guide for Indian D2C | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on personalised merchandising for Indian D2C brands: McKinsey's personalisation evidence, generative landing pages within Core Web Vitals, margin-aware bundle maths, zero-party data, India's dark patterns guidelines and DPDP timelines.",
  excerpt:
    "Most D2C sites still send every visitor, whatever ad they clicked, to the same product page. This paper sets out what personalisation is realistically worth, how to personalise pages and bundles while protecting speed and margin, and the Indian rules on dark patterns and consent that set the limits.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  readMinutes: 13,
  keywords: [
    "personalised landing pages india",
    "dynamic bundles d2c",
    "zero party data",
    "ecommerce personalisation india",
    "dark patterns guidelines 2023",
    "core web vitals lcp",
    "bundle pricing margin",
    "dpdp consent personalisation",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "Personalisation means showing each shopper the products, words and offers most relevant to them. Generative AI makes it cheaper to produce page variations, but it also makes it easier to slow pages down, discount away margin, or cross Indian consumer-protection lines. This paper covers what the evidence supports, how to build personalised pages and bundles safely, and how to collect preference data with consent.",
    },
    {
      kind: "ul",
      items: [
        "McKinsey's research finds **71%** of consumers expect personalised interactions and **76%** are frustrated when they don't get them. Personalisation typically lifts revenue **10–15%**, with company-specific results ranging from 5% to 25%.",
        "Speed is a hard constraint: Google's \"good\" Largest Contentful Paint threshold is **2.5 seconds or less** at the 75th percentile of page loads. Personalisation that pushes a page past that costs more than it earns.",
        "Bundles must be priced on **contribution margin**, not just AOV. A discount applied to a high-margin and a low-margin item together can quietly lower the blended margin.",
        "**Zero-party data** is what a customer intentionally and proactively shares, such as quiz answers and stated preferences (Forrester's definition).",
        "India's **Guidelines for Prevention and Regulation of Dark Patterns, 2023** list practices including false urgency, basket sneaking and drip pricing. The **DPDP Rules'** notice and consent obligations apply from **13 May 2027**.",
      ],
    },

    { kind: "h2", text: "1. What personalisation is worth" },
    {
      kind: "p",
      text: "The most widely cited evidence comes from McKinsey. Its research found that 71% of consumers expect personalised interactions and 76% get frustrated when this doesn't happen; that personalisation most often drives a 10–15% revenue lift, with company-specific lifts from 5% to 25% depending on sector and execution; and that faster-growing companies derive 40% more of their revenue from personalisation than slower-growing ones. McKinsey's explainer also says personalisation can cut acquisition costs by as much as 50% and raise marketing ROI by 10–30%.",
    },
    {
      kind: "p",
      text: "These are averages across companies and sectors, not a promise for any one brand. The only reliable way to know what personalisation is worth for your store is an A/B test: show some visitors the personalised experience and others the standard one, and compare revenue and margin per visitor.",
    },

    { kind: "h2", text: "2. Where generic pages lose" },
    {
      kind: "p",
      text: "A brand might run a Meta ad about a sunscreen's matte finish for oily skin, a Google ad for \"SPF 50 under ₹500\", and an influencer video about a no-white-cast formula. If all three send visitors to the same product page, two of them land on a page that doesn't open with the reason they clicked. Matching the page to the promise of the ad or search, known as message match, is the simplest personalisation and needs no customer data at all.",
    },
    {
      kind: "p",
      text: "Useful signals, from simplest to most sensitive:",
    },
    {
      kind: "table",
      headers: ["Signal", "Example", "Needs personal data?"],
      rows: [
        ["Ad or campaign (UTM)", "Visitor from the 'oily skin' ad sees the matte-finish benefit first", "No"],
        ["Search query", "Visitor who searched 'under ₹500' sees price-led messaging", "No"],
        ["Context", "Device, city or time of day (e.g. delivery promise for metro pin codes)", "Usually no"],
        ["Behaviour on site", "Products viewed this visit or earlier", "Yes, if linked to a person"],
        ["Zero-party data", "Quiz answers: skin type, concerns, budget", "Yes, shared knowingly"],
        ["Purchase history", "Replenishment reminders, complementary products", "Yes"],
      ],
    },

    { kind: "h2", text: "3. Generative landing pages without losing speed" },
    {
      kind: "p",
      text: "Generative AI can write headline and benefit variants, reorder page sections and assemble product images into new layouts. The safe pattern is to **generate ahead of time, review, then serve**, not to generate each page live for each visitor:",
    },
    {
      kind: "ol",
      items: [
        "**Define segments** from campaigns, search themes and quiz answers (for example: oily skin, sensitive skin, budget-first).",
        "**Generate variants** of headline, benefit order, hero image and FAQ for each segment.",
        "**Review every claim** against approved product claims before publishing (see section 6).",
        "**Pre-render and cache** each variant so it loads as fast as a normal page; choose the variant at the edge from the UTM or segment.",
        "**Keep a default page** for unknown visitors and for anything that fails.",
        "**A/B test** each segment's variant against the default on revenue and margin per visitor.",
      ],
    },
    {
      kind: "p",
      text: "Check speed with real-user data. Google's guidance is to aim for Largest Contentful Paint of 2.5 seconds or less, measured at the 75th percentile across mobile and desktop; above 4 seconds is classed as poor. The other Core Web Vitals are Interaction to Next Paint (good at 200 ms or less) and Cumulative Layout Shift (0.1 or less). Many Indian shoppers are on mid-range Android phones, so test on mobile first.",
    },

    { kind: "h2", text: "4. Margin-aware bundles" },
    {
      kind: "p",
      text: "Bundles raise average order value, but a discount on the whole bundle can cut margin more than it seems. Price bundles on contribution margin after discount, shipping and marketplace or payment fees.",
    },
    {
      kind: "p",
      text: "**Illustrative example** (before GST, shipping and fees): a cleanser at ₹399 with a 38% gross margin, and a serum at ₹899 with a 78% gross margin.",
    },
    {
      kind: "table",
      headers: ["", "Sold separately", "Bundle at 15% off"],
      rows: [
        ["Price", "₹1,298", "₹1,103.30"],
        ["Product cost (₹247.38 + ₹197.78)", "₹445.16", "₹445.16"],
        ["Gross profit", "₹852.84", "₹658.14"],
        ["Gross margin", "65.7%", "59.7%"],
      ],
    },
    {
      kind: "p",
      text: "The bundle gives up ₹194.70 of gross profit per order. It pays only if it brings extra orders, or extra items to orders that would otherwise have had one, worth more than that. Practical rules:",
    },
    {
      kind: "ul",
      items: [
        "**Set a margin floor** for every bundle after discount and fees; the system should refuse to create bundles below it.",
        "**Discount the high-margin item**, or offer a free sample or gift instead of a percentage off.",
        "**Check stock** before recommending: bundling a product that is about to run out wastes the slot. See our paper on [AI agents in retail operations](/whitepapers/ai-agents-retail-operations-pricing-inventory-india-2026).",
        "**Measure incrementally:** compare bundle-takers with a control group, not with all customers. Our [MMM and incrementality paper](/whitepapers/zero-click-attribution-mmm-incrementality-india-2026) covers test design.",
        "On marketplaces, follow each platform's bundle and combo listing rules.",
      ],
    },

    { kind: "h2", text: "5. Zero-party data" },
    {
      kind: "p",
      text: "Forrester coined the term zero-party data and defines it as data a customer intentionally and proactively shares with a brand, including preferences, purchase intentions and personal context. It is often more reliable than inferred data because it comes straight from the customer, although not everyone answers accurately.",
    },
    {
      kind: "ul",
      items: [
        "**Ways to collect it:** short product-finder quizzes (skin type, hair concern, fit), preference centres, post-purchase questions, and conversational assistants on the site.",
        "**Give value straight away:** show a tailored recommendation immediately after the quiz. If customers share preferences and see nothing change, they stop sharing.",
        "**Ask only what you use:** every question should change a recommendation, page or message.",
        "**Keep it separate from health claims:** a question like \"what's your skin concern?\" is fine for product matching; it must not lead to claims that a product treats a condition.",
      ],
    },

    { kind: "h2", text: "6. Indian rules that set the limits" },
    { kind: "h3", text: "6.1 Dark patterns" },
    {
      kind: "p",
      text: "The Central Consumer Protection Authority notified the Guidelines for Prevention and Regulation of Dark Patterns, 2023 on 30 November 2023. The specified dark patterns include false urgency, basket sneaking, confirm shaming, forced action, subscription traps, interface interference, bait and switch, and drip pricing. For personalisation this means:",
    },
    {
      kind: "ul",
      items: [
        "No invented scarcity or countdowns (\"only 2 left\" when stock is high).",
        "Never add a bundle item, sample with a charge, or protection plan to the cart without the shopper choosing it.",
        "Show the full price, including any charges, upfront rather than at checkout.",
        "Don't make declining an offer feel shameful (\"No thanks, I don't care about my skin\").",
      ],
    },
    { kind: "h3", text: "6.2 Consent under the DPDP Act" },
    {
      kind: "p",
      text: "The DPDP Rules were notified on 13 November 2025 with phased timelines. Consent manager provisions apply from November 2026, and the main obligations on businesses, including notice and consent requirements, apply from 13 May 2027. Brands building personalisation on personal data, including quiz answers linked to a phone number or email, should plan clear notices and consent flows now.",
    },
    { kind: "h3", text: "6.3 Product claims" },
    {
      kind: "p",
      text: "Generated copy must stay within the product's approved, substantiated claims. For cosmetics, supplements and anything health-adjacent, a human should approve every claim template before generation, and generated variants should only rearrange and rephrase approved claims, not invent new ones.",
    },

    { kind: "h2", text: "7. A practical rollout" },
    {
      kind: "table",
      headers: ["Stage", "What to do", "Data needed"],
      rows: [
        ["1. Message match", "One landing page variant per major ad or search theme", "UTMs only"],
        ["2. Quiz", "A short product finder with instant recommendations", "Zero-party data, with notice and consent"],
        ["3. Bundles", "Margin-floored bundles for top products, with stock checks", "Margin and inventory data"],
        ["4. Returning customers", "Replenishment and complementary product suggestions", "Purchase history, with consent"],
        ["5. Testing", "A/B test every stage on revenue and margin per visitor", "Analytics"],
      ],
    },
    {
      kind: "p",
      text: "Stage 1 needs no personal data and is usually the fastest to show results. Our [Agent Engine Optimization paper](/whitepapers/agent-engine-optimization-amazon-google-ai-mode) covers how product data should also be structured for AI shopping assistants.",
    },

    { kind: "h2", text: "8. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"Conversion up 28–44%\", \"AOV up 22–35%\", \"bounce rates over 65%\", benchmark table from \"40+ D2C brands\":** no primary source found, so not stated. The sourced range is McKinsey's 10–15% typical revenue lift (5–25% by company).",
        "**\"LCP under 1.2 seconds\":** Google's \"good\" threshold is 2.5 seconds or less at the 75th percentile; faster is better, but 1.2 s is not a standard.",
        "**\"Llama-3.3-8B\":** no such Meta model exists, so model names are left out; choose models on tested quality, cost and speed.",
        "**\"Sub-150 ms page assembly\", \"180 ms fallback\":** not verifiable; replaced with a pre-render and cache approach.",
        "**\"Photoshoots cost ₹5–20 lakh\":** no source found; removed.",
        "**Bundle example:** ₹399 + ₹899 at 15% off is ₹1,103.30, not ₹1,163.15, and the blended gross margin is about 59.7%, not 62%.",
        "**References to HBR (March 2026), Gartner, McKinsey \"Living Storefronts\", a Klaviyo 10,000-brand study and a Dynamic Yield index:** could not be located; replaced with the sources below.",
      ],
    },

    {
      kind: "faq",
      items: [
        { q: "How much does personalisation increase revenue?", a: "McKinsey's research finds personalisation most often drives a 10–15% revenue lift, with company-specific results from 5% to 25% depending on sector and execution. Test it on your own store before assuming a figure." },
        { q: "What is zero-party data?", a: "A term coined by Forrester for data a customer intentionally and proactively shares with a brand, such as quiz answers, stated preferences and purchase intentions." },
        { q: "Do personalised pages hurt site speed?", a: "They can if generated live. Pre-render and cache variants and check real-user Largest Contentful Paint against Google's 2.5-second 'good' threshold at the 75th percentile." },
        { q: "Which dark patterns are banned in India?", a: "The CCPA's 2023 guidelines specify patterns including false urgency, basket sneaking, confirm shaming, forced action, subscription traps, interface interference, bait and switch and drip pricing." },
        { q: "How should bundles be priced?", a: "On contribution margin after discount and fees, with a margin floor. A bundle discount should be covered by extra orders or items it actually adds." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "McKinsey: The value of getting personalization right—or wrong—is multiplying", url: "https://www.mckinsey.com/capabilities/growth-marketing-and-sales/our-insights/the-value-of-getting-personalization-right-or-wrong-is-multiplying", note: "71% expect, 76% frustrated; 10–15% revenue lift (5–25%); 40% more revenue for faster growers" },
        { title: "McKinsey Explainers: What is personalization? (May 2023)", url: "https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-personalization", note: "Up to 50% lower acquisition cost; 5–15% revenue; 10–30% marketing ROI" },
        { title: "web.dev: Largest Contentful Paint (LCP)", url: "https://web.dev/articles/lcp", note: "Good at 2.5 s or less, 75th percentile" },
        { title: "web.dev: How the Core Web Vitals thresholds were defined", url: "https://web.dev/articles/defining-core-web-vitals-thresholds", note: "LCP, INP ≤200 ms, CLS ≤0.1" },
        { title: "Salesforce: What is zero-party data?", url: "https://www.salesforce.com/marketing/personalization/zero-party-data/", note: "Forrester's definition" },
        { title: "SCC Online: CCPA notifies Guidelines for Prevention and Regulation of Dark Patterns, 2023", url: "https://www.scconline.com/blog/post/2023/12/04/ccpa-notifies-guidelines-for-prevention-and-regulation-of-dark-patterns-2023-legal-news/", note: "Notified 30 Nov 2023; specified dark patterns" },
        { title: "PIB: DPDP Rules, 2025 notified", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf", note: "Eighteen-month phased compliance" },
        { title: "Bar & Bench: MeitY notifies final DPDP Rules 2025", url: "https://www.barandbench.com/view-point/meity-notifies-final-digital-personal-data-protection-rules-2025", note: "Notice and consent obligations from 13 May 2027" },
      ],
    },
  ],
};
