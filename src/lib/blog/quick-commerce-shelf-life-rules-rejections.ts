import type { BlogPost } from "./types";

export const quickCommerceShelfLifeRulesRejections: BlogPost = {
  slug: "quick-commerce-shelf-life-rules-rejections",
  title: "Shelf Life on Quick Commerce: The FSSAI Rule, Warehouse Rejections and How to Avoid Them",
  titleTag: "Quick Commerce Shelf Life Rules: FSSAI 30% or 45 Days, Inward Rejections and Expiry Write-offs",
  metaDescription: "Short-dated stock is one of the costliest problems for food brands on quick commerce. The FSSAI shelf-life rule for online food, what regulators have found in warehouses, and how to plan batches and deliveries to avoid rejections.",
  excerpt: "On quick commerce, a few weeks of shelf life can decide whether your stock is accepted or written off. Here's the regulatory rule and a practical plan.",
  category: "Quick Commerce",
  author: "Pexeta Team",
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  readMinutes: 7,
  keywords: ["quick commerce shelf life", "fssai 45 days shelf life", "blinkit inward rejection", "zepto grn rejection", "near expiry stock quick commerce"],
  verifyNote: "FSSAI directive per Outlook Business (13 Nov 2024). Zepto Dharavi case per MediaNama (Jun 2025), including revocation of suspension. Platform-specific inward shelf-life thresholds are contractual and not published, so none are stated. Worked timeline is illustrative arithmetic.",
  body: [
    {"kind": "quote", "text": "**Quick links:** [The FSSAI rule](#the-fssai-rule) · [Why it matters for brands](#why-shelf-life-decides-acceptance) · [Plan your batches](#planning-batches-and-deliveries) · [Avoiding rejections](#avoiding-rejections-at-the-warehouse) · [FAQs](#faqs) · [Sources](#sources)"},
    {"kind": "p", "text": "For food, beverage and personal care brands, shelf life is one of the biggest hidden costs of quick commerce. Stock moves from your factory to a distributor, then to a platform warehouse, then to dark stores, and then sits on a shelf until it sells. Every step uses up days. If too few are left, stock is rejected at the warehouse or written off later."},

    {"kind": "h2", "text": "The FSSAI rule"},
    {"kind": "p", "text": "In November 2024, FSSAI directed e-commerce food business operators to ensure a **minimum shelf life of 30% or 45 days before expiry at the time of delivery to customers** (Outlook Business). The same directive said:"},
    {"kind": "ul", "items": [
      "No food business may operate on an e-commerce platform without a valid FSSAI licence or registration.",
      "Food and non-food items should be delivered separately.",
      "Delivery staff must be trained in food safety and hygiene."
    ]},
    {"kind": "p", "text": "Separately, state food safety authorities were asked to step up surveillance of e-commerce warehouses (Outlook Business)."},
    {"kind": "p", "text": "Enforcement is real. In June 2025, Maharashtra's Food and Drug Administration suspended the food licence of a Zepto facility in Dharavi, Mumbai, citing findings including expired stock stored alongside fresh inventory and cold storage not at required temperatures. The suspension was revoked after re-inspection and a compliance report (MediaNama)."},

    {"kind": "h2", "text": "Why shelf life decides acceptance"},
    {"kind": "p", "text": "Because platforms must deliver with enough life left, they set their own minimum remaining shelf life for stock arriving at their warehouses. These thresholds are in your commercial terms or the platform's vendor guidelines, and can vary by category. Get them in writing: they decide which batches you can send."},
    {"kind": "p", "text": "Illustrative timeline for a product with a 180-day shelf life (your numbers will differ):"},
    {"kind": "table", "headers": ["Stage", "Days used", "Days left"], "rows": [
      ["Manufactured", "0", "180"],
      ["At your warehouse or distributor", "30", "150"],
      ["In transit and inward at platform warehouse", "7", "143"],
      ["Platform warehouse and dark store, until sold", "30", "113"],
      ["Delivered to customer", "", "113 days, about 63% of shelf life"]
    ]},
    {"kind": "p", "text": "With 180 days, the margin is comfortable. With a 60-day product, the same delays leave only a few weeks, which is why short-life products need much tighter planning."},

    {"kind": "h2", "text": "Planning batches and deliveries"},
    {"kind": "ul", "items": [
      "**Know each platform's inward threshold** for each product and keep it in your planning sheet.",
      "**Ship first-expiry-first-out** from your own warehouse, and reserve fresher batches for quick commerce if thresholds are tight.",
      "**Match production to purchase orders.** Smaller, more frequent batches for short-life products.",
      "**Track days of cover by city.** Overstocking a slow city turns into expiry.",
      "**Agree what happens to near-expiry stock** already at the platform: return, liquidation or write-off, and who pays."
    ]},

    {"kind": "h2", "text": "Avoiding rejections at the warehouse"},
    {"kind": "p", "text": "Before each delivery, check:"},
    {"kind": "ol", "items": [
      "Remaining shelf life meets the platform's threshold for every batch.",
      "Quantities match the purchase order exactly.",
      "Barcodes scan and match the listed product.",
      "Labels carry all mandatory declarations and match the listing. See our [compliance checklist](/blog/quick-commerce-listing-documents-compliance).",
      "Cartons are undamaged and correctly labelled.",
      "The delivery is in the booked slot, with the invoice and documents the warehouse requires."
    ]},
    {"kind": "quote", "text": "Pexeta tracks shelf life, purchase orders and rejections for quick commerce brands. See our [quick commerce services](/services/quick-commerce)."},

    {"kind": "faq", "items": [
      {"q": "What is the FSSAI shelf-life rule for e-commerce?", "a": "FSSAI's November 2024 directive requires e-commerce food businesses to ensure a minimum shelf life of 30% or 45 days before expiry at the time of delivery to customers."},
      {"q": "Why does Blinkit or Zepto reject stock at the warehouse?", "a": "Common reasons include insufficient remaining shelf life, quantity mismatches against the purchase order, barcode or label problems, and damaged packaging. Platform thresholds are in your terms or vendor guidelines."},
      {"q": "How much shelf life do quick commerce warehouses require at inward?", "a": "It varies by platform and category and is set in your commercial terms or vendor guidelines. Get the threshold for each product in writing."},
      {"q": "Who pays for expired stock on quick commerce?", "a": "It depends on your terms. Agree in writing how near-expiry and expired stock is handled and who bears the cost."}
    ]},
    {"kind": "sources", "items": [
      {"title": "Outlook Business: FSSAI directs online platforms to deliver food with minimum 45-day shelf life", "url": "https://www.outlookbusiness.com/news/fssai-directs-online-platforms-to-deliver-food-items-with-minimum-45-day-shelf-life", "note": "13 Nov 2024"},
      {"title": "MediaNama: Maharashtra FDA suspends Zepto's Dharavi food licence", "url": "https://www.medianama.com/2025/06/223-zeptos-food-license-mumbai-dharavi-poor-hygiene/", "note": "Jun 2025; later revoked"}
    ]}
  ]
};
