import type { BlogPost } from "./types";

export const gstTcsReconciliationAmazonFlipkart: BlogPost = {
  slug: "gst-tcs-reconciliation-amazon-flipkart-sellers",
  title: "GST and TCS Reconciliation for Amazon and Flipkart Sellers: A Monthly Checklist",
  titleTag: "GST & TCS Reconciliation for Amazon and Flipkart Sellers (2026 Checklist)",
  metaDescription: "A monthly checklist for marketplace sellers in India: matching Amazon's Merchant Tax Reports to GSTR-1, claiming the 0.5% GST TCS and 0.1% income tax TDS, claiming input credit on marketplace fees, and handling stock transfers between states.",
  excerpt: "Marketplace sales create GST work every month: sales reports, TCS credit, TDS, fee invoices and stock transfers across states. Here's a checklist to keep it clean.",
  category: "Profitability",
  author: "Pexeta Team",
  datePublished: "2026-10-24",
  dateModified: "2026-10-24",
  readMinutes: 8,
  keywords: ["gst reconciliation amazon seller", "tcs on ecommerce sellers", "gstr 8 tcs credit", "194o tds amazon", "amazon mtr report gst", "gst for flipkart sellers"],
  verifyNote: "Checked Oct 2026: GST TCS 0.5% (0.25% CGST + 0.25% SGST, or 0.5% IGST) from 10 Jul 2024, Notification 15/2024-Central Tax; GSTR-8 by 10th of next month; credit visible in GSTR-2A Part C and credited to electronic cash ledger; GSTR-1 Tables 14/15 for supplies through e-commerce operators from Jan 2024 period; income tax TDS 0.1% under section 393(1) of the Income-tax Act 2025 (formerly 194-O) from 1 Apr 2026, ₹5 lakh threshold for individuals/HUF with PAN/Aadhaar. Not tax advice: CTA readers to their CA.",
  body: [
    {"kind": "p", "text": "Selling on Amazon and Flipkart is simple on the front end. The tax side is not. Every month you have sales reports by GST registration, tax collected by the marketplace on your behalf, income tax deducted at source, fee invoices to claim input credit on, and often stock moving between warehouses in different states."},
    {"kind": "p", "text": "None of it is hard on its own, but it piles up quickly, and mismatches between your returns and the marketplace's filings come back as notices. This checklist covers what to reconcile each month. It is a practical guide, not tax advice: confirm the treatment for your business with your chartered accountant."},

    {"kind": "h2", "text": "The five things to reconcile"},
    {"kind": "table", "headers": ["Item", "Where it comes from", "What you do with it"], "rows": [
      ["**Sales by GSTIN**", "Amazon's Merchant Tax Reports (B2C and B2B); Flipkart's sales and tax reports", "Report in GSTR-1 and pay output tax in GSTR-3B for each registration"],
      ["**GST TCS (0.5%)**", "Collected by the marketplace and filed in its GSTR-8", "Check and accept the credit; it reaches your electronic cash ledger"],
      ["**Income tax TDS (0.1%)**", "Deducted by the marketplace on your gross sales", "Check against Form 26AS / AIS and claim in your income tax return"],
      ["**Marketplace fee invoices**", "Monthly tax invoices and credit notes for commission, fulfilment, shipping and ads", "Claim input tax credit after matching with GSTR-2B"],
      ["**Stock transfers between states**", "Amazon's stock transfer report (fulfilment centre moves)", "Treat as supplies between your own GST registrations"]
    ]},

    {"kind": "h2", "text": "1. Sales: match the marketplace report to your GSTR-1"},
    {"kind": "p", "text": "On Amazon, download the **Merchant Tax Reports** (B2C and B2B) from the Tax Document Library each month. They list every invoice, refund and cancellation with the seller GSTIN, ship-from and ship-to state, HSN code, taxable value and tax."},
    {"kind": "ul", "items": [
      "**Split by GSTIN.** If Amazon stores your stock in several states, each registration files its own GSTR-1 for the sales shipped from that state.",
      "**Include refunds and cancellations.** The report for a month often includes refunds of invoices from earlier months. Report them as credit notes in the month they appear.",
      "**Check tax rates and HSN codes.** After the September 2025 GST rate changes, confirm that the rate on each product in the report matches the rate that applies to your HSN code.",
      "**Report marketplace sales separately.** Since the January 2024 tax period, GSTR-1 has a table (Table 14) for supplies made through e-commerce operators, with the operator's GSTIN. Your figures there should match what the marketplace reports for you."
    ]},

    {"kind": "h2", "text": "2. GST TCS: claim what the marketplace collected"},
    {"kind": "p", "text": "Marketplaces must collect **TCS at 0.5%** of the net value of taxable supplies made through them (0.25% CGST + 0.25% SGST for sales within a state, or 0.5% IGST between states). This rate has applied since 10 July 2024; it was 1% before."},
    {"kind": "ol", "items": [
      "The marketplace files **GSTR-8** by the 10th of the following month.",
      "The details appear in **GSTR-2A (Part C)** for each of your registrations.",
      "Check the net taxable value against your own sales for that GSTIN, then **accept the TCS credit** on the GST portal so it reaches your **electronic cash ledger**.",
      "Use the cash ledger balance to pay GST, or claim a refund of any excess."
    ]},
    {"kind": "quote", "text": "If the value in the marketplace's GSTR-8 doesn't match your GSTR-1, both sides are notified. An unresolved difference can be added to your tax liability with interest, so resolve mismatches the same month."},

    {"kind": "h2", "text": "3. Income tax TDS: check it lands against your PAN"},
    {"kind": "p", "text": "Marketplaces also deduct **income tax TDS at 0.1%** of your gross sales. From 1 April 2026 this falls under **section 393(1) of the Income-tax Act, 2025** (it was section 194-O under the old Act). For individual and HUF sellers who provide PAN or Aadhaar, it doesn't apply if sales through the marketplace stay within ₹5 lakh in a year."},
    {"kind": "ul", "items": [
      "Match the TDS shown in the marketplace's settlement or transaction report with **Form 26AS / AIS** each quarter.",
      "Chase any missing quarter with the marketplace early; it is much harder at return-filing time.",
      "Claim the TDS as a credit in your income tax return."
    ]},

    {"kind": "h2", "text": "4. Fee invoices: claim input credit"},
    {"kind": "p", "text": "Amazon and Flipkart issue monthly **tax invoices** for their fees (commission, closing, fulfilment, shipping, storage, advertising) with 18% GST, and **credit notes** for fee refunds. That GST is usually claimable as input tax credit."},
    {"kind": "ul", "items": [
      "Download all invoices and credit notes for the month, for **every** GSTIN. Fees are often billed to the registration of the state where the stock or sale sits.",
      "Match them to **GSTR-2B** before claiming credit.",
      "Net off credit notes, and check that advertising invoices (often billed separately) are included.",
      "Keep the PDFs filed by month and GSTIN; your auditor will ask for them."
    ]},

    {"kind": "h2", "text": "5. Stock transfers between states"},
    {"kind": "p", "text": "When Amazon moves your stock from a fulfilment centre in one state to another, it is a supply between two of your own GST registrations. Amazon's **stock transfer report** lists these movements with invoice numbers, values and the sending and receiving GSTINs."},
    {"kind": "ul", "items": [
      "The **sending registration** reports it as an inter-state supply and pays IGST.",
      "The **receiving registration** claims that IGST as input credit.",
      "Movements between two warehouses in the same state, under the same GSTIN, are not supplies; keep them for your stock records only."
    ]},

    {"kind": "h2", "text": "Your monthly checklist"},
    {"kind": "ol", "items": [
      "Download the Merchant Tax Reports (B2C, B2B) and the stock transfer report for the month.",
      "Download every fee invoice and credit note, for every GSTIN.",
      "Prepare GSTR-1 for each GSTIN, including credit notes and the e-commerce operator table.",
      "After the 10th, check GSTR-2A Part C and accept the TCS credit.",
      "Match fee invoices with GSTR-2B and claim input credit in GSTR-3B.",
      "Record inter-state stock transfers on both sides.",
      "Every quarter, match marketplace TDS with Form 26AS / AIS.",
      "File everything by month and GSTIN for your auditor."
    ]},
    {"kind": "p", "text": "Pexeta's seller dashboard does steps 1 and 2 for our clients: it keeps each month's Amazon tax reports and fee invoices, sorts them by GSTIN, and produces a single download for the auditor."},

    {"kind": "faq", "items": [
      {"q": "What is the TCS rate for Amazon and Flipkart sellers?", "a": "0.5% of the net value of taxable supplies made through the marketplace, split as 0.25% CGST and 0.25% SGST for sales within a state, or 0.5% IGST between states. It has applied since 10 July 2024."},
      {"q": "How do I claim TCS collected by Amazon or Flipkart?", "a": "After the marketplace files GSTR-8 (by the 10th of the next month), the details appear in your GSTR-2A Part C. Check them against your sales and accept the credit on the GST portal; it then reaches your electronic cash ledger."},
      {"q": "Is TDS under section 194-O still deducted?", "a": "Yes, at 0.1% of gross sales. From 1 April 2026 the provision is section 393(1) of the Income-tax Act, 2025, which replaced section 194-O."},
      {"q": "Do I need a separate GST registration in every state where Amazon stores my stock?", "a": "Generally yes. Storing goods in a state means you have a place of business there, so most sellers using fulfilment centres in several states register in each one. Confirm with your chartered accountant."},
      {"q": "Can I claim GST paid on Amazon fees?", "a": "Usually yes, as input tax credit, once the invoices appear in your GSTR-2B and are used for your business. Credit notes for fee refunds reduce the credit."}
    ]},
    {"kind": "sources", "items": [{"title": "Taxmann: ECOs to collect 0.5% TCS (Notification 15/2024-Central Tax)", "url": "https://www.taxmann.com/post/blog/ecos-to-collect-0-5-tcs-on-net-value-of-taxable-supplies-made-through-it-by-other-suppliers-notification/", "note": "TCS rate from 10 July 2024"}, {"title": "Masters India: GST implications for e-commerce operators", "url": "https://www.mastersindia.co/blog/gst-implications-ecommerce-operator-guide/", "note": "TCS rate split and GSTR-8 due date"}, {"title": "Commercial Taxes Dept, West Bengal: TCS mechanism under GST (FAQ)", "url": "https://comtax.wb.gov.in/GST/GST_FAQ/TCS_Mechanism_under_GST.pdf", "note": "How TCS credit reaches the seller, mismatches"}, {"title": "ClearTax: Online sellers and ECOs must report new details in GSTR-1", "url": "https://news.cleartax.in/online-sellers-and-eco-must-report-new-details-in-gstr-1/9910/amp", "note": "Table 14 from the January 2024 period"}, {"title": "TDSMAN: TDS on e-commerce transactions, section 393(1) (formerly 194-O)", "url": "https://blog.tdsman.com/2026/07/tds-on-e-commerce-transactions-section-3931-194o/", "note": "0.1% TDS under the Income-tax Act, 2025"}, {"title": "Tally Solutions: New GST rates effective 22 September 2025", "url": "https://tallysolutions.com/gst/new-gst-rates-september-2025-business-impact/", "note": "September 2025 rate changes"}]}
  ]
};
