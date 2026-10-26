import type { BlogPost } from "./types";

export const reduceRtoCodOrdersIndia: BlogPost = {
  slug: "reduce-rto-cod-orders-india",
  title: "How to Reduce RTO on Cash-on-Delivery Orders in India",
  titleTag: "How to Reduce RTO on COD Orders in India: A Practical Guide for D2C Brands",
  metaDescription: "RTO (return to origin) on cash-on-delivery orders quietly eats D2C margins in India. Here's how to measure it properly, find where it comes from, and cut it with order confirmation, address checks, prepaid nudges and faster delivery.",
  excerpt: "Every refused COD parcel costs you shipping both ways and earns nothing. Here's how to measure RTO properly and cut it without killing conversions.",
  category: "Profitability",
  author: "Pexeta Team",
  datePublished: "2026-10-24",
  dateModified: "2026-10-24",
  readMinutes: 7,
  keywords: ["reduce rto india", "rto in ecommerce", "cod rto", "return to origin", "cod order confirmation", "ndr management"],
  verifyNote: "No industry RTO percentages used: published figures are vendor estimates. The worked example uses illustrative numbers, labelled as such.",
  body: [
    {"kind": "p", "text": "Cash on delivery is still how a large share of Indian online shoppers prefer to pay, especially outside the big metros. It lifts conversions, but it comes with a cost most brands under-count: **RTO (return to origin)**, the parcels that are refused, can't be delivered, and travel all the way back to you."},
    {"kind": "p", "text": "An RTO earns nothing and costs you shipping both ways, packaging, the COD handling fee and sometimes the product itself. This guide covers how to measure it properly and the changes that bring it down."},

    {"kind": "h2", "text": "Why RTO hurts more than it looks"},
    {"kind": "p", "text": "Take an illustrative D2C order with a ₹600 selling price:"},
    {"kind": "table", "headers": ["", "Delivered order", "RTO order"], "rows": [
      ["Revenue", "₹600", "₹0"],
      ["Forward shipping", "₹70", "₹70"],
      ["Return shipping", "–", "₹70"],
      ["COD fee", "₹25", "₹0 to ₹25, depending on the courier"],
      ["Packaging", "₹15", "₹15 (usually not reusable)"],
      ["Damaged or unsellable on return", "–", "Some share of units"]
    ]},
    {"kind": "p", "text": "Each RTO costs you roughly ₹155 to ₹180 in this example, and those losses must be covered by the profit on delivered orders. If your profit is ₹120 per delivered order, every RTO cancels out the profit on more than one delivered order. That is why RTO should sit in your **profit per order**, not in a separate logistics report nobody reads."},

    {"kind": "h2", "text": "Measure it properly first"},
    {"kind": "ul", "items": [
      "**RTO rate = RTO orders ÷ shipped orders**, tracked separately for COD and prepaid.",
      "**Split it by product, by pin code or city, by courier and by traffic source.** RTO is rarely spread evenly. A few products, regions or ad campaigns usually cause most of it.",
      "**Separate the reasons:** customer refused, customer not reachable, wrong or incomplete address, delivery attempt not made, and \"order no longer needed\". Each one has a different fix.",
      "**Count the cost, not just the rate,** using your real shipping and COD charges."
    ]},

    {"kind": "h2", "text": "Seven ways to reduce RTO"},
    {"kind": "h3", "text": "1. Confirm COD orders before dispatch"},
    {"kind": "p", "text": "Send a WhatsApp or SMS confirmation (or an automated call) within minutes of the order, asking the customer to confirm. Hold unconfirmed orders for a short window, then cancel or call. Many RTOs are impulse orders or duplicates that the customer never intended to receive."},
    {"kind": "h3", "text": "2. Check addresses at checkout"},
    {"kind": "p", "text": "Validate pin codes, flag addresses that are too short or missing landmarks, and ask for a landmark field. A large share of \"customer not reachable\" RTOs are really address problems."},
    {"kind": "h3", "text": "3. Nudge customers to prepaid"},
    {"kind": "p", "text": "Offer a small prepaid discount or free shipping on prepaid orders, or charge a modest COD fee. Some brands ask for a small advance (partial COD) on high-value or high-risk orders. Test the nudge size: too aggressive and you lose COD customers who would have accepted delivery."},
    {"kind": "h3", "text": "4. Set rules for high-risk orders"},
    {"kind": "p", "text": "Use your own RTO history to flag risky combinations, for example first-time COD buyers in pin codes with high past RTO, or unusually large quantities. For those, require confirmation, offer prepaid only, or call before dispatch. Avoid blanket bans on whole regions; they cost good customers."},
    {"kind": "h3", "text": "5. Ship faster"},
    {"kind": "p", "text": "The longer a COD customer waits, the more likely they are to refuse. Dispatching the same day and storing stock closer to customers (regional warehouses or a multi-location 3PL) shortens delivery time and reduces \"no longer needed\" refusals."},
    {"kind": "h3", "text": "6. Manage failed deliveries (NDR) actively"},
    {"kind": "p", "text": "When the courier reports a failed delivery (a non-delivery report), contact the customer the same day to fix the address or time and request a re-attempt. Without follow-up, most failed first attempts become RTOs."},
    {"kind": "h3", "text": "7. Fix the product and the promise"},
    {"kind": "p", "text": "Check whether high-RTO products have unclear sizing, misleading images or prices far above what the customer expected at the door. Ads that over-promise bring in curious buyers who refuse delivery. Clear product pages and honest ads reduce RTO as much as any logistics fix."},

    {"kind": "h2", "text": "What about Amazon and Flipkart?"},
    {"kind": "p", "text": "On marketplaces, the platform runs the checkout, payment and delivery, so you have fewer of these levers. Your influence comes from accurate listings and size charts, realistic delivery promises, good packaging and choosing the right fulfilment model. Track returns and undelivered orders by product in the marketplace reports, and read return comments for patterns. Our guide to [Amazon fulfilment options](/blog/amazon-fba-easy-ship-self-ship-india) explains how FBA, Easy Ship and Self Ship differ."},

    {"kind": "h2", "text": "A simple weekly RTO review"},
    {"kind": "ol", "items": [
      "Pull last week's shipped and RTO orders, split COD and prepaid.",
      "Rank products, pin codes, couriers and ad campaigns by RTO cost.",
      "Pick the top two causes and assign one fix each (confirmation flow, address rule, courier change, listing fix).",
      "Check the next week whether the RTO rate and cost moved, and whether conversion held.",
      "Add RTO cost into your [profit per unit](/blog/amazon-india-profit-per-unit-calculation) so pricing and ad decisions include it."
    ]},

    {"kind": "faq", "items": [
      {"q": "What does RTO mean in ecommerce?", "a": "RTO (return to origin) is an order that could not be delivered or was refused by the customer and is sent back to the seller. It is different from a customer return after delivery."},
      {"q": "Why is RTO higher on COD orders?", "a": "COD customers have not paid anything upfront, so it costs them nothing to refuse the parcel or ignore the delivery. Impulse orders, duplicate orders and long delivery times all push COD RTO up."},
      {"q": "Should I stop offering COD to cut RTO?", "a": "Usually not entirely. COD brings in many customers who would not pay upfront. It is better to confirm COD orders, nudge customers to prepaid and apply stricter rules only to high-risk orders."},
      {"q": "What is an NDR?", "a": "A non-delivery report is the courier's notice that a delivery attempt failed, with a reason. Acting on it quickly, by contacting the customer and asking for a re-attempt, turns many would-be RTOs into deliveries."},
      {"q": "Who pays for RTO shipping?", "a": "On your own website, you do: most couriers charge for the return leg. On marketplaces, the rules depend on the platform and fulfilment model, so check your fee schedule and settlement reports."}
    ]},
    {"kind": "sources", "items": [{"title": "Shiprocket: RTO protection for sellers", "url": "https://www.shiprocket.in/blog/rto-protection-for-sellers/amp/", "note": "What RTO is, common causes and fixes"}]}
  ]
};
