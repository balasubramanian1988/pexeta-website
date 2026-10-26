import type { BlogPost } from "./types";

export const costOfStockoutsAmazonIndia: BlogPost = {
  slug: "cost-of-stockouts-amazon-india",
  title: "The Real Cost of Running Out of Stock on Amazon",
  titleTag: "Amazon Stockouts: The Hidden Cost to Sales, Ranking and Ads (India Guide)",
  metaDescription: "Running out of stock on Amazon costs more than the sales you miss while you're out. Here's how stockouts hit organic ranking, ads and the Buy Box, how to estimate the real cost, and how to plan stock so it doesn't happen.",
  excerpt: "A stockout doesn't just lose a week of sales. It pauses your ads, hands customers to competitors and weakens your ranking after you're back. Here's the real cost, and how to avoid it.",
  category: "Amazon Operations",
  author: "Pexeta Team",
  datePublished: "2026-11-06",
  dateModified: "2026-11-06",
  readMinutes: 6,
  keywords: ["amazon out of stock", "amazon stockout ranking", "amazon inventory planning india", "fba restock", "amazon bsr out of stock"],
  verifyNote: "Amazon doesn't publish its ranking formula; the post says ranking 'rewards recent sales' without claiming specifics. Sponsored ads don't serve for out-of-stock offers (Amazon Ads help). Worked example uses illustrative numbers, labelled as such.",
  body: [
    {"kind": "p", "text": "Every Amazon seller knows a stockout means lost sales while the product is unavailable. The bigger cost comes **after** you restock: lower organic ranking, ads that have to work harder, and customers who have already switched to a competitor. Here's what actually happens, how to estimate the cost, and how to plan so it doesn't happen."},

    {"kind": "h2", "text": "What happens when you run out"},
    {"kind": "ul", "items": [
      "**The listing stops selling.** With FBA stock at zero, the product shows as unavailable (or another seller takes the Buy Box on a shared listing).",
      "**Your ads stop.** Sponsored Products ads don't run for products that are out of stock, so your paid visibility disappears with your organic sales.",
      "**Competitors take your customers.** Shoppers who searched for your product buy the next best option, and some of them become that brand's repeat customers.",
      "**Ranking weakens.** Amazon's search ranking rewards recent sales. A week or more with no sales lets competitors climb above you for your main keywords.",
      "**Restarting costs more.** When stock returns, you often need higher ad spend for a few weeks to win back the positions you held."
    ]},

    {"kind": "h2", "text": "Estimating the real cost"},
    {"kind": "p", "text": "An illustrative product: it sells 40 units a day at a profit of ₹150 per unit before ads, and runs out of stock for 10 days."},
    {"kind": "table", "headers": ["Cost", "How to estimate it", "Example"], "rows": [
      ["**Sales lost while out of stock**", "Daily units × days out × profit per unit", "40 × 10 × ₹150 = ₹60,000"],
      ["**Slower sales after restocking**", "Units lost while ranking recovers × profit per unit", "If sales run 25% lower for 3 weeks: 40 × 25% × 21 × ₹150 ≈ ₹31,500"],
      ["**Extra ad spend to recover**", "Additional spend above normal during recovery", "For example, ₹1,000 a day for 3 weeks = ₹21,000"],
      ["**Total**", "", "**≈ ₹1.1 lakh**, almost double the lost sales alone"]
    ]},
    {"kind": "p", "text": "Your own numbers will differ, but the pattern holds: the cost after restocking is often as large as the sales lost while out of stock."},

    {"kind": "h2", "text": "Why stockouts happen"},
    {"kind": "ul", "items": [
      "**Reordering on gut feel** instead of daily sales rate and days of stock left.",
      "**Ignoring manufacturing lead time.** If a batch takes 30 days to make, you must reorder when you still have more than 30 days of stock.",
      "**Forgetting inbound time** from your warehouse to Amazon's fulfilment centres, and receiving delays during busy periods.",
      "**Sales spikes** from sale events, ads or a viral moment that nobody planned stock for.",
      "**Only watching FBA stock,** not stock in your own warehouse and in transit."
    ]},

    {"kind": "h2", "text": "How to stay in stock"},
    {"kind": "ol", "items": [
      "**Track days of stock left for each product:** total stock (FBA + inbound + your warehouse) ÷ average daily sales.",
      "**Set a reorder point:** reorder when days left falls below manufacturing lead time + time to reach Amazon + a safety buffer.",
      "**Plan for sale events** by raising the daily sales forecast for those weeks.",
      "**Spread stock across fulfilment centres** so one region running out doesn't take the whole listing down.",
      "**Keep a backup fulfilment option** for best sellers, such as Easy Ship from your warehouse, so the listing stays live if FBA stock runs out.",
      "**Review weekly,** fastest movers first."
    ]},
    {"kind": "p", "text": "A good stock plan also accounts for how sales returns and new launches change your daily sales rate. Our [profit per unit guide](/blog/amazon-india-profit-per-unit-calculation) helps you decide which products deserve the deepest stock."},

    {"kind": "faq", "items": [
      {"q": "Does going out of stock affect Amazon ranking?", "a": "Yes. Amazon's search ranking rewards recent sales, so days with no sales let competitors move ahead of you. Many sellers see lower sales for a period after restocking while ranking recovers."},
      {"q": "Do Amazon ads run when a product is out of stock?", "a": "No. Sponsored Products ads don't serve for products that are out of stock, so you lose paid and organic visibility together."},
      {"q": "How do I know when to reorder for Amazon?", "a": "Reorder when your days of stock left (all stock, including your warehouse and stock in transit) falls below your manufacturing lead time plus the time to reach Amazon's warehouses plus a safety buffer."},
      {"q": "Can Easy Ship prevent stockouts?", "a": "It can keep a listing live while FBA stock is replenished, if you hold stock in your own warehouse and your account is set up for it. It is a backup, not a replacement for planning."}
    ]},
    {"kind": "sources", "items": [{"title": "Search Engine Land: Why your Amazon Ads aren't delivering", "url": "https://searchengineland.com/amazon-ads-critical-issues-fix-461293", "note": "Ads stop when out of stock or without the Buy Box"}]}
  ]
};
