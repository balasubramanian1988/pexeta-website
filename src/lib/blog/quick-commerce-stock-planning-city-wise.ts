import type { BlogPost } from "./types";

export const quickCommerceStockPlanningCityWise: BlogPost = {
  slug: "quick-commerce-stock-planning-city-wise",
  title: "Quick Commerce Stock Planning: How Much to Send Each City",
  titleTag: "Quick Commerce Inventory Planning for Brands: City-Wise Days of Cover on Blinkit, Zepto and Instamart",
  metaDescription: "Dark store networks are growing fast, and stock now has to be split across more cities. A simple days-of-cover method for brands on Blinkit, Zepto and Instamart, with a worked example and the signals to watch.",
  excerpt: "More dark stores means your stock is spread across more cities. Here's a simple way to work out how much to send each one, so you avoid both stockouts and expiry.",
  category: "Quick Commerce",
  author: "Pexeta Team",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readMinutes: 7,
  keywords: ["quick commerce inventory planning", "blinkit stock planning", "days of cover quick commerce", "dark store replenishment brands", "zepto instamart inventory"],
  verifyNote: "Store counts: Blinkit 2,751 end Q2 FY27 (+308), 3,500 expected by Mar 2027, ~100,000 SKUs in Delhi-NCR, inventory build-up ahead of festive season (CIOL, 22 Oct 2026). Instamart 1,240 stores after adding 69 in Q2 FY27 (Business Today, 22 Oct 2026). Days-of-cover method is a general planning method, not a platform rule. Worked example uses illustrative numbers, labelled as such. Arithmetic checked: 40x11=440, +120=560, -300=260 -> 11 cases of 24=264; 12x13=156, +36=192 < 200.",
  body: [
    {"kind": "quote", "text": "**Quick links:** [Why it matters now](#why-it-matters-now) · [The method](#the-days-of-cover-method) · [Worked example](#a-worked-example) · [Signals to watch](#signals-to-watch) · [FAQs](#faqs) · [Sources](#sources)"},
    {"kind": "p", "text": "On quick commerce, a brand doesn't have one stock position. It has one per city, sometimes one per warehouse. Send too little and you go out of stock in the cities that sell best. Send too much and slow cities sit on stock until it runs short of shelf life. The fix is a simple, repeatable way to decide how much each city gets."},

    {"kind": "h2", "text": "Why it matters now"},
    {"kind": "p", "text": "The networks are growing quickly. Blinkit ended Q2 FY27 with **2,751 stores**, after adding **308** in the quarter, and expects to cross **3,500 by March 2027**. Its Delhi-NCR assortment has grown to about **100,000 SKUs**, and its parent reported an inventory build-up ahead of the festive season (CIOL). Swiggy's Instamart added **69 dark stores** in the same quarter, taking its network to **1,240** (Business Today)."},
    {"kind": "p", "text": "More stores and more cities mean your stock is spread thinner. A brand that planned one national number now needs a number for each city it sells in."},

    {"kind": "h2", "text": "The days-of-cover method"},
    {"kind": "p", "text": "This is a general planning method, not a platform rule. For each city, work out:"},
    {"kind": "ol", "items": [
      "**Average daily sales** over the last 2 to 4 weeks, adjusted for any stockout days (a day at zero stock is not a day of zero demand).",
      "**Lead time**: days from a purchase order to stock being received at the platform's warehouse in that city.",
      "**Review period**: how often you can replenish, for example weekly.",
      "**Safety stock**: a few extra days of sales to cover demand spikes and short receipts.",
      "**Target stock** = daily sales × (lead time + review period) + safety stock.",
      "**Quantity to send** = target stock − (stock on hand + stock in transit), rounded up to full cases."
    ]},
    {"kind": "p", "text": "Check the result against shelf life. If the target stock would take longer to sell than the shelf life the warehouse accepts, send less and replenish more often. See our [shelf-life and rejections guide](/blog/quick-commerce-shelf-life-rules-rejections)."},

    {"kind": "h2", "text": "A worked example"},
    {"kind": "p", "text": "Illustrative numbers for one product in two cities. Replace them with your own sales and lead times."},
    {"kind": "table", "headers": ["", "City A", "City B"], "rows": [
      ["Average daily sales (units)", "40", "12"],
      ["Lead time (days)", "4", "6"],
      ["Review period (days)", "7", "7"],
      ["Cycle stock = daily sales × (lead time + review)", "440", "156"],
      ["Safety stock (3 days of sales)", "120", "36"],
      ["**Target stock**", "**560**", "**192**"],
      ["Stock on hand + in transit", "300", "200"],
      ["Shortfall", "260", "None"],
      ["**Send (cases of 24)**", "**264 (11 cases)**", "**0**"]
    ]},
    {"kind": "p", "text": "City B already holds more than its target, so it gets nothing this week, even though it might receive a purchase order. Sending stock there anyway is how slow cities end up with expiring inventory while fast cities run out."},

    {"kind": "h2", "text": "Signals to watch"},
    {"kind": "ul", "items": [
      "**Out-of-stock days by city.** Lost days hide true demand. See [the real cost of stockouts](/blog/cost-of-stockouts-amazon-india).",
      "**PO fill rate.** Short or late deliveries against purchase orders can hurt how platforms treat your brand. See our [PO fill rate guide](/blog/quick-commerce-po-fill-rates-dark-stores).",
      "**Festive and seasonal spikes.** Raise daily sales estimates ahead of known peaks rather than reacting after stock runs out.",
      "**New cities.** A new city has no sales history. Start with a small quantity, based on a comparable city, and review weekly.",
      "**Ads.** Campaigns lift demand in specific cities. Plan stock before you increase spend there. See our [quick commerce ads guide](/blog/quick-commerce-ads-blinkit-zepto-instamart).",
      "**Margin per city.** Freight and rejections vary by city. Check that each city earns money. See [quick commerce margins and fees](/blog/quick-commerce-margins-fees-brands)."
    ]},
    {"kind": "quote", "text": "Run this weekly in one sheet: sales, stock and in-transit by city and product. Pexeta's [quick commerce services](/services/quick-commerce) include PO management and city-wise stock planning for brands."},

    {"kind": "faq", "items": [
      {"q": "How do I decide how much stock to send each quick commerce city?", "a": "Use days of cover: daily sales × (lead time + review period) + safety stock gives a target. Subtract stock on hand and in transit, and round up to full cases."},
      {"q": "How much safety stock should I keep for quick commerce?", "a": "There's no fixed rule. Many brands start with a few days of sales and adjust based on how often they run out and how much stock they write off."},
      {"q": "Should I fulfil every purchase order in full?", "a": "Fill rate matters, so aim to meet the orders you accept. But compare each order with the city's sales and stock, and raise it with the platform when an order is far above what the city sells, especially for short shelf-life products."},
      {"q": "How do I plan stock for a new city with no sales history?", "a": "Start small, based on a comparable city, and review weekly. Increase quantities as real sales data comes in."}
    ]},
    {"kind": "sources", "items": [
      {"title": "CIOL: Eternal Q2 profit jumps 92% to ₹125 crore; Blinkit targets 5,000 stores by FY28", "url": "https://www.ciol.com/news/eternal-q2-profit-jumps-92-to-125-crore-blinkit-targets-5000-stores-by-fy28-12736267", "note": "Oct 2026; Blinkit store count, SKUs and inventory build-up"},
      {"title": "Business Today: Swiggy Q2 results; Instamart loss at ₹895 crore", "url": "https://www.businesstoday.in/markets/trending-stocks/story/swiggy-q2-results-loss-narrows-to-rs-922-cr-revenue-jumps-36-instamart-loss-at-rs-895-cr-563095-2026-10-22", "note": "22 Oct 2026; Instamart store count"}
    ]}
  ]
};
