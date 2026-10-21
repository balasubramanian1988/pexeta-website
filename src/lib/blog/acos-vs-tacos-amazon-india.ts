import type { BlogPost } from "./types";

export const acosVsTacos: BlogPost = {
  slug: "acos-vs-tacos-amazon-india",
  title: "ACoS vs TACoS: Which Amazon Ads Metric Should Indian Sellers Track?",
  titleTag: "ACoS vs TACoS on Amazon India: What They Mean and Which to Track",
  metaDescription:
    "ACoS tells you how efficient your ads are; TACoS tells you whether ads are growing your whole business. Learn the formulas, healthy ranges and how Indian sellers should use both.",
  excerpt:
    "A falling ACoS can hide a shrinking business, and a rising one can be the right move. Here's how ACoS and TACoS work together, with worked examples in rupees.",
  category: "Amazon Ads",
  author: "Pexeta Team",
  datePublished: "2026-10-21",
  dateModified: "2026-10-21",
  readMinutes: 7,
  keywords: ["acos vs tacos", "tacos amazon india", "amazon acos meaning", "amazon ads metrics india"],
  body: [
    { kind: "p", text: "Most sellers judge their Amazon ads by one number: **ACoS**. It's on every report, it's easy to understand, and it's the first thing agencies talk about. But optimising ACoS on its own can quietly shrink your business. The metric that tells you whether ads are actually working for the whole account is **TACoS**." },

    { kind: "h2", text: "What is ACoS?" },
    { kind: "p", text: "**ACoS (Advertising Cost of Sales)** is your ad spend divided by the sales those ads generated." },
    { kind: "quote", text: "**ACoS = Ad spend ÷ Ad-attributed sales × 100**" },
    { kind: "p", text: "If you spent ₹20,000 on Sponsored Products and Amazon attributed ₹1,00,000 of sales to those ads, your ACoS is 20%. It measures **ad efficiency**: how many rupees of ads it takes to produce a rupee of ad sales." },

    { kind: "h2", text: "What is TACoS?" },
    { kind: "p", text: "**TACoS (Total Advertising Cost of Sales)** divides the same ad spend by your **total** sales, organic plus ad-driven." },
    { kind: "quote", text: "**TACoS = Ad spend ÷ Total sales × 100**" },
    { kind: "p", text: "With ₹20,000 of ad spend and ₹4,00,000 of total sales, TACoS is 5%. It measures how dependent the business is on advertising, and whether ads are building organic sales over time." },

    { kind: "h2", text: "Why you need both" },
    { kind: "table",
      headers: ["Scenario", "ACoS", "TACoS", "What it means"],
      rows: [
        ["Ads improving, organic growing", "Falling", "Falling", "The ideal: ads are efficient and lifting organic rank"],
        ["Investing in a launch", "Rising", "Rising briefly", "Normal for new products if organic sales follow"],
        ["Cutting ads too hard", "Falling", "Falling", "Looks good, but check total sales: they may be shrinking"],
        ["Ads cannibalising organic", "Stable", "Rising", "You're paying for sales you'd have got anyway"],
      ],
    },
    { kind: "p", text: "The third row is the trap. You can always lower ACoS by bidding only on your cheapest, highest-converting keywords. Ad sales fall, but so does spend, and the ACoS looks great. Meanwhile your product loses visibility on competitive keywords, organic rank slips, and total sales decline. TACoS catches this; ACoS doesn't." },

    { kind: "h2", text: "What's a good ACoS and TACoS?" },
    { kind: "p", text: "There's no universal number, because the right ACoS depends on your margin. Start from your **break-even ACoS**:" },
    { kind: "quote", text: "**Break-even ACoS = Profit margin before ad spend (%)**. If you keep ₹300 on a ₹1,000 sale after product cost, Amazon fees, shipping and GST, your break-even ACoS is 30%." },
    { kind: "ul", items: [
      "**Profitable growth:** run most campaigns below break-even ACoS.",
      "**Launches and rank pushes:** a temporary ACoS above break-even can be fine, if you've decided how long and how much.",
      "**TACoS:** what matters is the trend. A stable or falling TACoS while total sales grow means advertising is compounding into organic sales.",
    ] },

    { kind: "h2", text: "How to use them together, week by week" },
    { kind: "ol", items: [
      "Track total sales, ad sales, ad spend, ACoS and TACoS for each ASIN or product family every week.",
      "Judge individual campaigns and keywords on **ACoS** against your break-even.",
      "Judge the account and each product on **TACoS** and total sales over 4 to 8 weeks.",
      "If ACoS falls but total sales fall too, you've likely cut too deep. Restore spend on keywords that drive rank.",
      "If TACoS rises with no growth in total sales, look for ads buying sales you'd win organically, such as heavy spend on your own brand keywords.",
    ] },

    { kind: "faq", items: [
      { q: "Is a lower ACoS always better?", a: "No. A very low ACoS often means you're under-investing and missing sales. Compare ACoS with your break-even and watch total sales and TACoS alongside it." },
      { q: "Where do I find TACoS in Amazon Seller Central?", a: "Amazon doesn't show TACoS directly in most reports. Divide total ad spend from the Ads console by total sales from Business Reports for the same period, or use a reporting tool." },
      { q: "Should TACoS be the same for every product?", a: "No. New launches typically run a higher TACoS while they build reviews and rank; established best-sellers should run much lower." },
    ] },
  ],
};
