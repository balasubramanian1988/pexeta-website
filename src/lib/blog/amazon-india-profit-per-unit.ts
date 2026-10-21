import type { BlogPost } from "./types";

export const amazonIndiaProfitPerUnit: BlogPost = {
  slug: "amazon-india-profit-per-unit-calculation",
  title: "How to Calculate Your True Profit per Unit on Amazon India",
  titleTag: "Amazon India Profit Calculation: Fees, GST, TCS and Ads per Unit",
  metaDescription:
    "Most Amazon sellers overestimate profit. Learn every cost to include per unit (referral, closing and fulfilment fees, GST, TCS, TDS, returns and ad spend) with a worked example.",
  excerpt:
    "Revenue looks healthy, but is each unit actually making money? Here's every cost to include in an Amazon India profit calculation, with a worked example.",
  category: "Profitability",
  author: "Pexeta Team",
  datePublished: "2026-10-12",
  dateModified: "2026-10-12",
  readMinutes: 8,
  keywords: ["amazon india profit calculator", "amazon seller fees india", "amazon tcs 0.5%", "amazon fba profit india"],
  verifyNote: "TCS (0.5% since 10 Jul 2024) and income-tax TDS (0.1%) rates should be re-checked each Budget; Amazon fee schedules change — example numbers are illustrative only.",
  body: [
    { kind: "p", text: "Many Amazon sellers know their revenue to the rupee but can't say how much they make on each unit. The settlement report shows a deposit, the ads console shows ACoS, and the gap between them is where profit quietly disappears." },

    { kind: "h2", text: "Every cost to include" },
    { kind: "table",
      headers: ["Cost", "What it is"],
      rows: [
        ["Product cost (landed)", "Manufacturing or purchase cost plus inbound freight and packaging"],
        ["GST on the sale", "The GST you collect and pay to the government. It's not your revenue"],
        ["Referral fee", "A percentage of the selling price, which varies by category"],
        ["Closing fee", "A fixed fee per order, based on price band and fulfilment type"],
        ["Shipping / fulfilment fees", "Weight-handling fees for Easy Ship, or pick, pack and storage fees for FBA"],
        ["GST on Amazon fees", "18% on Amazon's fees; claimable as input tax credit if you're GST-registered"],
        ["TCS", "0.5% of net taxable sales collected by Amazon under GST, adjustable against your GST liability"],
        ["TDS", "0.1% deducted by Amazon under income tax, adjustable against your income-tax liability"],
        ["Returns and damages", "Return shipping, unsellable returns and refunds"],
        ["Advertising", "Ad spend per unit sold. Use total ad spend ÷ total units"],
      ],
    },
    { kind: "quote", text: "TCS and TDS aren't extra costs if you claim them back, but they **tie up cash** until you do. Reconcile them every month." },

    { kind: "h2", text: "A worked example (illustrative numbers)" },
    { kind: "p", text: "A product sells at **₹999 including 18% GST**. The fee figures below are illustrative. Use your category's actual fee schedule from Seller Central." },
    { kind: "table",
      headers: ["Line", "Amount (₹)"],
      rows: [
        ["Selling price (incl. GST)", "999.00"],
        ["Less GST on sale (18%)", "– 152.39"],
        ["Net sales value", "846.61"],
        ["Less Amazon fees (referral + closing + shipping), illustrative", "– 220.00"],
        ["Less product landed cost", "– 300.00"],
        ["Less returns and damages allowance (5%)", "– 42.33"],
        ["Contribution before ads", "284.28"],
        ["Less ad spend per unit", "– 120.00"],
        ["**Profit per unit**", "**164.28**"],
      ],
    },
    { kind: "p", text: "Here the contribution before ads is about **34% of net sales**, so your break-even ACoS on this product is roughly 34%. Spend more than that on ads per unit and every extra sale loses money. See [ACoS vs TACoS](/blog/acos-vs-tacos-amazon-india) for how to use this number." },

    { kind: "h2", text: "Common profit leaks" },
    { kind: "ul", items: [
      "**Ignoring returns:** in categories like fashion, returns can wipe out margins.",
      "**Long-term FBA storage** on slow-moving stock.",
      "**Wrong weight or dimensions** on file, leading to higher fees than necessary.",
      "**Unclaimed reimbursements** for lost or damaged FBA inventory.",
      "**Unreconciled TCS and TDS**, leaving money unclaimed.",
      "**Ad spend on unprofitable ASINs** that never had the margin to advertise.",
    ] },

    { kind: "h2", text: "Make it a monthly habit" },
    { kind: "ol", items: [
      "Download the settlement and fee reports for the month.",
      "Calculate contribution per unit for each ASIN or product family.",
      "Compare each ASIN's ACoS against its own break-even, not an account-wide target.",
      "Cut or fix products with negative profit after ads, and invest more in the ones that carry margin.",
    ] },

    { kind: "faq", items: [
      { q: "What is the TCS rate for Amazon sellers in India?", a: "Under GST, e-commerce operators collect TCS at 0.5% of net taxable supplies, reduced from 1% with effect from 10 July 2024. Sellers can claim it against their GST liability." },
      { q: "What TDS does Amazon deduct from sellers?", a: "Amazon deducts income-tax TDS of 0.1% on sales (reduced from 1% in October 2024), which sellers can adjust against their income-tax liability. Confirm current rules with your CA." },
      { q: "Is GST on Amazon fees a cost?", a: "Amazon charges 18% GST on its fees. If you're GST-registered, you can usually claim it as input tax credit, so it isn't a final cost." },
    ] },
  ],
};
