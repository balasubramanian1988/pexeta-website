import type { BlogPost } from "./types";

export const amazonAccountHealthIndia: BlogPost = {
  slug: "amazon-account-health-india-metrics",
  title: "Amazon Account Health in India: The Metrics That Can Get You Suspended",
  titleTag: "Amazon Seller Account Health India: ODR, Cancellation and Late Dispatch Targets",
  metaDescription:
    "Understand Amazon India's account health metrics: order defect rate, cancellation rate, late dispatch rate, policy compliance and the Account Health Rating, and how to stay safe.",
  excerpt:
    "Most Amazon suspensions are preceded by warning signs in the Account Health dashboard. Here are the metrics that matter, the targets Amazon sets, and how to fix them before it's too late.",
  category: "Amazon Operations",
  author: "Pexeta Team",
  datePublished: "2026-10-18",
  dateModified: "2026-10-18",
  readMinutes: 7,
  keywords: ["amazon account health india", "order defect rate amazon", "amazon seller suspension india", "account health rating"],
  verifyNote: "Re-check thresholds on Seller Central India's Account Health page before major edits.",
  body: [
    { kind: "p", text: "An Amazon suspension can stop your sales overnight. The good news: most suspensions don't come out of nowhere. The **Account Health** dashboard in Seller Central shows the warning signs weeks earlier, if someone is watching it." },

    { kind: "h2", text: "The three customer service metrics" },
    { kind: "table",
      headers: ["Metric", "What it measures", "Amazon's target"],
      rows: [
        ["Order Defect Rate (ODR)", "Orders with negative feedback, an A-to-z claim or a chargeback", "Below 1%"],
        ["Pre-fulfilment Cancel Rate", "Orders you cancel before dispatch", "Below 2.5%"],
        ["Late Dispatch Rate", "Orders dispatched after the expected date", "Below 4%"],
      ],
    },
    { kind: "p", text: "ODR is the most serious. It's measured over a rolling period, so one bad week can affect your numbers for a while. Cancellation and late dispatch mostly affect self-ship and Easy Ship sellers, because Amazon handles dispatch for FBA orders." },

    { kind: "h2", text: "Policy compliance and the Account Health Rating" },
    { kind: "p", text: "Amazon also tracks **policy compliance**: intellectual property complaints, product authenticity and condition complaints, listing policy violations, restricted products and more. These roll up into an **Account Health Rating** shown on the dashboard. Keep it in the healthy band and treat any drop as urgent." },
    { kind: "quote", text: "**IP complaints and authenticity complaints** are the issues we see sink accounts fastest. Respond to every one, and never sell branded goods without invoices that prove the supply chain." },

    { kind: "h2", text: "How to protect your account" },
    { kind: "ol", items: [
      "**Check Account Health daily**, not when an email arrives.",
      "**Keep stock accurate** so you never cancel orders for being out of stock. This is the main cause of high cancellation rates.",
      "**Set realistic handling times** for self-ship and Easy Ship orders.",
      "**Answer buyer messages within 24 hours**, including weekends.",
      "**Resolve A-to-z claims quickly**. Refunding a genuine issue is cheaper than an ODR hit.",
      "**Keep supplier invoices** for every branded product you sell.",
      "**Audit listings** for restricted keywords, claims and images that break policy.",
    ] },

    { kind: "h2", text: "If you receive a warning or suspension" },
    { kind: "ul", items: [
      "Read the notice carefully and identify the exact policy and ASINs involved.",
      "Write a **Plan of Action**: the root cause, what you've already fixed, and what you'll do to stop it happening again.",
      "Be specific and factual. Generic, copied appeals are usually rejected.",
      "Attach evidence: invoices, letters of authorisation, corrected listings.",
    ] },
    { kind: "p", text: "Appeals are often decided on the first submission, so it's worth getting help before you submit, not after a rejection." },

    { kind: "faq", items: [
      { q: "What is a good order defect rate on Amazon India?", a: "Amazon's target is below 1%. Many well-run accounts stay far below that." },
      { q: "Does FBA protect my account health?", a: "Partly. Amazon handles dispatch for FBA orders, so late dispatch and many delivery issues don't count against you, but negative feedback, product complaints and policy violations still do." },
      { q: "How long does an Amazon reinstatement take?", a: "It varies from days to weeks depending on the issue and the quality of your Plan of Action. A clear, evidence-backed first appeal is the fastest route." },
    ] },
  ],
};
