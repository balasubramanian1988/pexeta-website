import type { BlogPost } from "./types";

export const amazonFulfilmentOptionsIndia: BlogPost = {
  slug: "amazon-fba-easy-ship-self-ship-india",
  title: "FBA, Easy Ship or Self Ship? Choosing the Right Amazon Fulfilment Model in India",
  titleTag: "Amazon FBA vs Easy Ship vs Self Ship in India: Which Is Right for You?",
  metaDescription:
    "Compare Amazon India's fulfilment options (FBA, Easy Ship, Self Ship and Seller Flex) on cost, control, Prime eligibility and account-health risk, with guidance on which to choose.",
  excerpt:
    "How you ship affects your costs, your Prime badge, your Buy Box chances and your account health. Here's how Amazon India's fulfilment options compare, and how to choose.",
  category: "Amazon Operations",
  author: "Pexeta Team",
  datePublished: "2026-10-15",
  dateModified: "2026-10-15",
  readMinutes: 7,
  keywords: ["amazon fba india", "easy ship vs fba", "self ship amazon india", "seller flex amazon"],
  verifyNote: "Prime eligibility rules for Easy Ship / Seller Flex change — re-check Seller Central India before editing.",
  body: [
    { kind: "p", text: "Amazon India gives sellers several ways to get orders to customers. The right choice depends on your product, your margins and how much of the operation you want to run yourself." },

    { kind: "h2", text: "The four models" },
    { kind: "table",
      headers: ["Model", "Who stores stock", "Who packs", "Who delivers"],
      rows: [
        ["Fulfilled by Amazon (FBA)", "Amazon fulfilment centre", "Amazon", "Amazon"],
        ["Easy Ship", "You", "You", "Amazon picks up and delivers"],
        ["Self Ship", "You", "You", "Your own courier partner"],
        ["Seller Flex", "Your warehouse, managed with Amazon", "Your warehouse", "Amazon"],
      ],
    },

    { kind: "h2", text: "FBA: hands-off, Prime-eligible" },
    { kind: "ul", items: [
      "**Pros:** the Prime badge, faster delivery promises, Amazon handles customer returns and delivery issues, and fewer dispatch metrics count against you.",
      "**Cons:** storage and fulfilment fees, inbound shipping costs, and long-term storage charges on slow stock.",
      "**Best for:** fast-moving products with healthy margins and predictable demand.",
    ] },

    { kind: "h2", text: "Easy Ship: your stock, Amazon's delivery" },
    { kind: "ul", items: [
      "**Pros:** no inventory sent to Amazon, flexible for large catalogues, and Amazon's logistics for delivery.",
      "**Cons:** you're responsible for packing and dispatching on time, so late dispatch and cancellations affect your account health.",
      "**Best for:** wide catalogues, slower-moving SKUs, and sellers testing demand before committing stock to FBA.",
    ] },

    { kind: "h2", text: "Self Ship: full control" },
    { kind: "ul", items: [
      "**Pros:** use your own courier rates and networks, useful for bulky or special-handling products.",
      "**Cons:** you own every delivery problem, tracking must be accurate, and Prime is generally not available.",
      "**Best for:** oversized, fragile or very specialised items, or sellers with strong existing logistics.",
    ] },

    { kind: "h2", text: "Seller Flex: a hybrid for larger sellers" },
    { kind: "p", text: "Seller Flex lets Amazon manage fulfilment operations from your own warehouse, with Amazon delivering. It's typically offered to larger sellers by invitation, and can give Prime-like delivery promises without moving stock into Amazon's fulfilment centres." },

    { kind: "h2", text: "How we usually recommend choosing" },
    { kind: "ol", items: [
      "Put your **top 20% of SKUs by sales** into FBA for the Prime badge and stronger Buy Box performance.",
      "Run the **long tail on Easy Ship** to avoid storage costs on slow movers.",
      "Use **Self Ship** only where product size or handling makes the other options impractical.",
      "**Review quarterly**: move SKUs into FBA as they prove demand, and out when they slow.",
    ] },
    { kind: "quote", text: "Always compare models on **profit per unit**, not just fees. FBA can cost more per order and still make more money if it lifts conversion. See [how to calculate true profit per unit](/blog/amazon-india-profit-per-unit-calculation)." },

    { kind: "faq", items: [
      { q: "Is FBA worth it for small sellers in India?", a: "Often yes for fast-moving products, because the Prime badge and delivery speed can lift conversion. Start with a few proven SKUs rather than the whole catalogue." },
      { q: "Do Easy Ship orders get the Prime badge?", a: "Generally Prime is tied to FBA and certain Amazon-managed programmes. Check Seller Central India for the current eligibility rules." },
      { q: "Can I use FBA and Easy Ship together?", a: "Yes. Many sellers use FBA for best-sellers and Easy Ship for the rest of the catalogue." },
    ] },
  ],
};
