import type { BlogPost } from "./types";

export const amazonSubscribeAndSaveIndia: BlogPost = {
  slug: "amazon-subscribe-and-save-india-sellers",
  title: "Amazon Subscribe & Save for Indian Sellers: How It Works and When It Pays",
  titleTag: "Amazon Subscribe & Save India (2026): How It Works for Sellers, Discounts & Margin Check",
  metaDescription:
    "How Amazon Subscribe & Save works on Amazon.in, how seller-funded and Amazon-funded discounts work in Amazon's published programme, which products suit subscriptions, and how to check your margin before you fund a 5% or 10% discount.",
  excerpt:
    "Subscribe & Save turns one-time buyers of consumables into repeat orders. Here's how the programme works, what the discount costs you, and how to decide whether it's worth it for your products.",
  category: "Amazon Operations",
  author: "Pexeta Team",
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  readMinutes: 5,
  keywords: [
    "amazon subscribe and save india",
    "subscribe and save seller",
    "subscribe and save discount funding",
    "repeat purchase amazon india",
    "amazon consumables sellers",
  ],
  body: [
    { kind: "p", text: "For products customers run out of, such as groceries, personal care, baby care and pet food, the second order matters as much as the first. **Subscribe & Save** lets shoppers set up recurring deliveries at a discount. This guide covers how it works, what it costs you, and how to decide whether to use it." },

    { kind: "h2", text: "Subscribe & Save on Amazon.in" },
    { kind: "p", text: "Amazon launched its Subscribe & Save store in India in **April 2016**. Shoppers pick a product, a quantity and a delivery schedule, and get a discount on recurring orders. At launch, Amazon.in gave **5% off when one or two subscriptions arrived on the monthly delivery day, and 10% off for three or more**. Shoppers can skip or cancel an upcoming delivery." },
    { kind: "quote", text: "Discount tiers, eligibility and funding rules differ by marketplace and change over time. Check the Subscribe & Save page in your Amazon.in Seller Central for the terms that apply to your account before you set a discount." },

    { kind: "h2", text: "How the discount is funded" },
    { kind: "p", text: "In Amazon's published seller programme (sell.amazon.com), the discount has two parts:" },
    { kind: "ul", items: [
      "**Seller-funded discount:** you choose **0%, 5% or 10%**. Eligible FBA products are enrolled at 0%, and you can raise it to 5% or 10%.",
      "**Amazon-funded discount:** Amazon funds an extra **5%** on Subscribe & Save orders of **five items or more**.",
    ] },
    { kind: "table", headers: ["Your funding", "1–4 items in a delivery", "5+ items in a delivery"], rows: [
      ["0%", "No discount", "5% (Amazon-funded)"],
      ["5%", "5% (you)", "10% (5% you + 5% Amazon)"],
      ["10%", "10% (you)", "15% (10% you + 5% Amazon)"],
    ] },
    { kind: "p", text: "FBA products can be auto-enrolled. Since **June 2024**, Amazon has also allowed eligible seller-fulfilled products, which need a request in Seller Central for each product. Your account must be in good standing." },

    { kind: "h2", text: "Which products suit Subscribe & Save" },
    { kind: "ul", items: [
      "Products used up on a predictable cycle: detergents, toiletries, diapers, pet food, supplements, staples",
      "Products with a steady price, so the subscription price doesn't swing",
      "Products you can keep in stock all the time. A subscriber who gets a cancelled delivery may not come back.",
    ] },

    { kind: "h2", text: "Check the margin before you fund a discount" },
    { kind: "p", text: "A seller-funded discount comes straight out of your margin on every subscribed unit, including customers who would have bought anyway. Before choosing 5% or 10%:" },
    { kind: "ol", items: [
      "Work out profit per unit after fees, shipping and ads at the current price. See our guide to [Amazon India profit per unit](/blog/amazon-india-profit-per-unit-calculation).",
      "Recalculate at 5% and 10% off. If the product loses money at 10%, stop at 5%.",
      "Compare with what you spend to win the same order through ads. A repeat subscription order needs no ad click.",
      "Use [Brand Analytics' Repeat Purchase report](/blog/amazon-brand-analytics-search-query-performance-india), if you have Brand Registry, to see how many buyers already reorder.",
      "Plan inventory from your subscriber count and upcoming subscription orders, shown on the Subscribe & Save page in Seller Central.",
    ] },

    {
      kind: "faq",
      items: [
        { q: "Is Subscribe & Save available on Amazon.in?", a: "Yes. Amazon launched Subscribe & Save in India in April 2016 for household essentials and other everyday products." },
        { q: "Who pays for the Subscribe & Save discount?", a: "In Amazon's published programme, you choose a seller-funded discount of 0%, 5% or 10%, and Amazon funds an extra 5% on orders of five or more subscribed items. Check Amazon.in Seller Central for the terms in India." },
        { q: "Do I need FBA for Subscribe & Save?", a: "FBA products can be auto-enrolled. Since June 2024, Amazon has also allowed eligible seller-fulfilled products, enrolled by request in Seller Central." },
        { q: "Which products work best?", a: "Consumables customers reorder on a regular cycle, with a steady price and reliable stock." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "Amazon (sell.amazon.com): Subscribe & Save programme", url: "https://sell.amazon.com/programs/subscribe-and-save", note: "0% enrolment, 5% or 10% seller funding; Amazon-funded 5% on 5+ items; FBA auto-enrolment" },
        { title: "Amazon (sell.amazon.com): What is Amazon Subscribe & Save?", url: "https://sell.amazon.com/blog/subscribe-and-save", note: "FBA and seller-fulfilled participation; funding options" },
        { title: "Amazon Seller Forums: Subscribe & Save launches for seller-fulfilled orders (June 2024)", url: "https://sellercentral.amazon.com/seller-forums/discussions/t/7700284c-3397-484c-a85e-9c4844fdb33f" },
        { title: "Amazon Seller Central: Subscribe & Save terms and conditions", url: "https://sellercentral.amazon.com/gp/help/external/201620160" },
        { title: "FoneArena: Amazon Subscribe and Save store goes live in India (Apr 2016)", url: "https://www.fonearena.com/blog/182085/amazon-subscribe-and-save-store-goes-live-in-india.html/amp", note: "India launch tiers: 5% for 1–2, 10% for 3+ subscriptions" },
        { title: "Tech Times: Amazon India launches Subscribe and Save (Apr 2016)", url: "https://www.techtimes.com/articles/150130/20160415/amazon-india-launches-subscribe-and-save-option-with-monthly-automatic-delivery-free-shipping-and-savings.htm", note: "Skip or cancel upcoming subscriptions" },
      ],
    },
  ],
};
