import type { BlogPost } from "./types";

export const quickCommerceListingDocumentsCompliance: BlogPost = {
  slug: "quick-commerce-listing-documents-compliance",
  title: "Getting Listed on Quick Commerce: Documents and Compliance Checklist for Brands",
  titleTag: "Documents Needed to Sell on Blinkit, Zepto and Instamart: GST, FSSAI, Legal Metrology and Barcodes",
  metaDescription: "The registrations and compliance a brand needs before listing on Blinkit, Zepto, Instamart, Flipkart Minutes or Amazon Now: GST, FSSAI, Legal Metrology declarations, GS1 barcodes and the FSSAI shelf-life rule for online food sales.",
  excerpt: "Every quick commerce platform asks for the same core documents. Get them right once and onboarding goes faster everywhere. Here's the checklist, with the rules behind it.",
  category: "Quick Commerce",
  author: "Pexeta Team",
  datePublished: "2026-10-26",
  dateModified: "2026-10-26",
  readMinutes: 7,
  keywords: ["documents to sell on blinkit", "zepto seller registration documents", "fssai for quick commerce", "legal metrology e-commerce", "gs1 barcode blinkit"],
  verifyNote: "Legal Metrology Rule 4(10) per S.S. Rana (2017 article; effective 1 Jan 2018). FSSAI 30%/45-day shelf-life directive per Outlook Business (13 Nov 2024); source doesn't say which of the two applies, so both quoted as stated. GS1 per its own blog (2021), which says marketplaces 'generally ask' for GTIN, not that it's mandatory. Platform-specific document lists not given: they change.",
  body: [
    {"kind": "quote", "text": "**Quick links:** [Business registrations](#business-registrations) · [Food products](#for-food-and-beverage-brands) · [Packaging and labels](#packaging-and-label-declarations) · [Barcodes](#barcodes) · [Content](#product-content) · [FAQs](#faqs) · [Sources](#sources)"},
    {"kind": "p", "text": "Blinkit, Zepto, Instamart, Flipkart Minutes and Amazon Now each have their own onboarding process, but they ask for largely the same things. Get these right once and you can onboard on each platform faster. Here's the checklist, with the rules behind each item."},
    {"kind": "quote", "text": "This is general information, not legal advice. Requirements vary by product category; confirm with your compliance adviser and each platform."},

    {"kind": "h2", "text": "Business registrations"},
    {"kind": "ul", "items": [
      "**GST registration** in the states you'll supply from, and your company or firm documents.",
      "**A bank account** in the business name for settlements.",
      "**Trademark** application or registration for your brand name, where you have one; platforms may ask for proof of brand ownership or authorisation."
    ]},

    {"kind": "h2", "text": "For food and beverage brands"},
    {"kind": "ul", "items": [
      "**FSSAI licence or registration:** no food business operator may sell through an e-commerce platform without a valid FSSAI licence or registration (FSSAI directive, as reported by Outlook Business, November 2024).",
      "**Shelf life at delivery:** the same directive requires e-commerce food businesses to ensure a minimum shelf life of **30% or 45 days before expiry** at the time of delivery to customers. Plan your batch dates around it. See our [shelf-life guide](/blog/quick-commerce-shelf-life-rules-rejections).",
      "**Claims must match the label:** product claims online must match the label and FSSAI's labelling and display regulations."
    ]},

    {"kind": "h2", "text": "Packaging and label declarations"},
    {"kind": "p", "text": "Under **Rule 4(10) of the Legal Metrology (Packaged Commodities) Rules, 2011** (in force from 1 January 2018), the mandatory declarations on a package must also be shown on the e-commerce platform, except the month and year of packing (S.S. Rana). These include:"},
    {"kind": "ul", "items": [
      "Name and address of the manufacturer, packer or importer",
      "Common or generic name of the product",
      "Net quantity",
      "Retail sale price (MRP)",
      "Dimensions, where relevant",
      "Consumer care details"
    ]},
    {"kind": "p", "text": "Make sure your pack and your product listing say the same thing. Mismatches are a common reason listings are held back."},

    {"kind": "h2", "text": "Barcodes"},
    {"kind": "p", "text": "**GS1 India** is the only organisation authorised to issue barcodes starting with \"890\" in India. GS1 notes that marketplaces generally ask for a product's GTIN (the EAN-13 barcode number), which lets them pull in product details automatically. Get a unique barcode for every product and pack size."},

    {"kind": "h2", "text": "Product content"},
    {"kind": "ul", "items": [
      "Clear **pack shots** that show the front of pack, net quantity and key claims.",
      "**Titles** with brand, product, variant and size.",
      "Accurate **category** and **shelf-life** information for each product."
    ]},
    {"kind": "quote", "text": "Pexeta handles quick commerce onboarding, catalogue and compliance for brands. See our [quick commerce services](/services/quick-commerce)."},

    {"kind": "faq", "items": [
      {"q": "What documents do I need to sell on Blinkit or Zepto?", "a": "Typically GST registration and business documents, a bank account, brand ownership or authorisation proof, FSSAI licence for food, Legal Metrology-compliant packaging, GS1 barcodes, and product content. Each platform's list can vary."},
      {"q": "Is FSSAI required to sell food on quick commerce?", "a": "Yes. FSSAI has directed that no food business operator may sell on an e-commerce platform without a valid FSSAI licence or registration."},
      {"q": "What shelf life must food have when delivered by an e-commerce platform?", "a": "FSSAI's November 2024 directive requires a minimum shelf life of 30% or 45 days before expiry at the time of delivery to the customer."},
      {"q": "Do I need GS1 barcodes for quick commerce?", "a": "Marketplaces generally ask for a GTIN, and GS1 India is the authorised issuer of barcodes starting with 890 in India. Use a unique barcode for each product and pack size."}
    ]},
    {"kind": "sources", "items": [
      {"title": "Outlook Business: FSSAI directs online platforms to deliver food with minimum 45-day shelf life", "url": "https://www.outlookbusiness.com/news/fssai-directs-online-platforms-to-deliver-food-items-with-minimum-45-day-shelf-life", "note": "13 Nov 2024; licence, shelf life, claims"},
      {"title": "S.S. Rana: E-commerce websites now under the Legal Metrology Act", "url": "https://ssrana.in/articles/e-commerce-websites-now-come-under-the-purview-of-the-legal-metrology-act/", "note": "Rule 4(10); from 1 Jan 2018"},
      {"title": "GS1 India: EAN-13, the barcode number", "url": "https://www.gs1india.org/blog/ean-13-the-barcode-number/", "note": "Barcodes and marketplaces"}
    ]}
  ]
};
