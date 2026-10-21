import type { BlogPost } from "./types";

export const amazonSponsoredAdsTypes: BlogPost = {
  slug: "amazon-sponsored-products-brands-display-guide",
  title: "Sponsored Products, Sponsored Brands or Sponsored Display: Which Amazon Ad Should You Use?",
  titleTag: "Sponsored Products vs Sponsored Brands vs Sponsored Display | Amazon India",
  metaDescription:
    "A plain-English guide to Amazon's three main ad types for Indian sellers: what each does, who can use it, where it appears and how to split your budget between them.",
  excerpt:
    "Amazon gives you three main ad formats, and each does a different job. Here's when to use Sponsored Products, Sponsored Brands and Sponsored Display, and how to split your budget.",
  category: "Amazon Ads",
  author: "Pexeta Team",
  datePublished: "2026-10-20",
  dateModified: "2026-10-20",
  readMinutes: 7,
  keywords: ["sponsored products vs sponsored brands", "sponsored display amazon india", "amazon ads types", "amazon advertising india guide"],
  body: [
    { kind: "p", text: "Amazon's self-serve advertising has three main formats. They look similar in the console, but they reach shoppers at different moments and suit different goals. Using the right mix is usually worth more than squeezing another few points out of a single campaign type." },

    { kind: "h2", text: "At a glance" },
    { kind: "table",
      headers: ["", "Sponsored Products", "Sponsored Brands", "Sponsored Display"],
      rows: [
        ["What it promotes", "A single product", "Your brand: logo, headline and several products, or video", "A product, shown to audiences on and off Amazon"],
        ["Targeting", "Keywords and products", "Keywords and products", "Audiences, products and categories"],
        ["Who can use it", "Sellers and vendors", "Brand Registry sellers and vendors", "Brand Registry sellers and vendors"],
        ["Best for", "Direct sales", "Brand awareness and cross-selling", "Retargeting and defending product pages"],
      ],
    },

    { kind: "h2", text: "Sponsored Products: your foundation" },
    { kind: "p", text: "Sponsored Products ads look like normal search results and product-page recommendations, with a small 'Sponsored' label. They're the most direct route to sales, and for most Indian sellers they take the largest share of budget." },
    { kind: "ul", items: [
      "Start with an **automatic campaign** to discover the search terms shoppers actually use.",
      "Move proven search terms into **manual exact and phrase** campaigns where you control bids.",
      "Add **negative keywords** for irrelevant terms the auto campaign finds.",
      "Use **product targeting** to appear on competitors' and your own product pages.",
    ] },

    { kind: "h2", text: "Sponsored Brands: own the top of the search page" },
    { kind: "p", text: "Sponsored Brands ads show your logo, a custom headline and up to three products, or a video, often at the top of search results. They need **Brand Registry**." },
    { kind: "ul", items: [
      "Use them on **category keywords** (\"cotton bedsheet king size\") to introduce your brand, not just one product.",
      "Link to your **Amazon Store** to cross-sell your range.",
      "Test **video ads**: they often stand out on mobile, where most Indian shoppers browse.",
      "Bid on your **own brand name** defensively if competitors are targeting it.",
    ] },

    { kind: "h2", text: "Sponsored Display: retarget and defend" },
    { kind: "p", text: "Sponsored Display reaches shoppers based on what they've viewed or bought, on Amazon and on other sites and apps. It's strongest for **retargeting** shoppers who viewed your product but didn't buy, and for **defending your product pages** so competitor ads don't take the space below your listing." },

    { kind: "h2", text: "How to split your budget" },
    { kind: "p", text: "There's no fixed formula, but a sensible starting point for a brand-registered seller is:" },
    { kind: "ul", items: [
      "**Sponsored Products: around 60–75%.** The most direct sales driver.",
      "**Sponsored Brands: around 15–30%.** Category visibility and brand searches.",
      "**Sponsored Display: around 5–15%.** Retargeting and page defence.",
    ] },
    { kind: "p", text: "Then let performance decide. Shift budget towards whichever format delivers the best results against your [ACoS and TACoS targets](/blog/acos-vs-tacos-amazon-india)." },

    { kind: "faq", items: [
      { q: "Do I need Brand Registry to advertise on Amazon India?", a: "Not for Sponsored Products. Sponsored Brands and Sponsored Display require Amazon Brand Registry for sellers." },
      { q: "Which Amazon ad type should a new seller start with?", a: "Sponsored Products. Start with an automatic campaign to learn search terms, then build manual campaigns around the ones that convert." },
      { q: "Are Sponsored Brands ads worth it for small brands?", a: "Often yes, especially on mid-volume category keywords where they introduce your brand and range at the top of the page. Start with a modest budget and measure new-to-brand sales." },
    ] },
  ],
};
