import type { BlogPost } from "./types";

export const quickCommercePoFillRates: BlogPost = {
  slug: "quick-commerce-po-fill-rates-dark-stores",
  title: "Keeping Dark Stores Stocked: Purchase Order Fill Rates on Blinkit, Zepto and Instamart",
  titleTag: "Quick Commerce PO Fill Rates: How Brands Keep Blinkit, Zepto and Instamart Stocked",
  metaDescription: "On quick commerce, brands supply stock against purchase orders, and missed or short deliveries cost visibility and future orders. Here's how the PO cycle works and how to keep fill rates high on Blinkit, Zepto and Swiggy Instamart.",
  excerpt: "Quick commerce runs on purchase orders. Miss them, or deliver short, and your products disappear from dark stores. Here's how to keep fill rates high.",
  category: "Quick Commerce",
  author: "Pexeta Team",
  datePublished: "2026-11-04",
  dateModified: "2026-11-04",
  readMinutes: 7,
  keywords: ["quick commerce purchase order", "po fill rate", "blinkit seller", "zepto brand onboarding", "instamart vendor", "dark store inventory"],
  verifyNote: "Blinkit's shift to owning inventory: ~80% of quick commerce order value from own inventory in Jul–Sep 2025 (Eternal Q2 FY26, via MediaNama). Fill-rate thresholds, penalties and shelf-life rules differ by platform and contract, so none are stated as numbers.",
  body: [
    {"kind": "p", "text": "On Amazon, you send stock to a warehouse when you choose. Quick commerce works the other way round. On **Blinkit, Zepto and Swiggy Instamart**, the platform (or the seller entity it works with) decides what it needs, raises a **purchase order (PO)**, and expects you to deliver the full quantity, on time, to its warehouse. From there, stock is split across hundreds of small dark stores."},
    {"kind": "p", "text": "How well you fulfil those POs, your **fill rate**, decides whether your products stay on the shelf in each city. Here's how the cycle works and how to keep it running."},

    {"kind": "h2", "text": "How the PO cycle works"},
    {"kind": "ol", "items": [
      "**The platform forecasts demand** for each product and city, based on recent sales and stock in its dark stores.",
      "**A PO is raised** to you or your distributor, with quantities, the delivery warehouse, and a delivery window or expiry date.",
      "**You confirm the PO and book a delivery slot** at the warehouse.",
      "**You deliver.** The warehouse checks quantities, barcodes, packaging and remaining shelf life, and accepts or rejects units.",
      "**The warehouse supplies dark stores,** and the platform pays you against the units accepted, on your agreed terms."
    ]},
    {"kind": "p", "text": "The platforms increasingly own the inventory they sell. Blinkit, for example, reported that about 80% of its quick commerce order value in July to September 2025 came from its own inventory. For brands, that means more selling through POs and less control over which products are stocked where."},

    {"kind": "h2", "text": "What fill rate means"},
    {"kind": "p", "text": "**Fill rate = units accepted ÷ units ordered on the PO.** A PO for 1,000 units where 850 are accepted is an 85% fill rate. Units count as missing if you deliver short, deliver late after the PO expires, or units are rejected at the dock."},
    {"kind": "p", "text": "Low fill rates hurt in three ways:"},
    {"kind": "ul", "items": [
      "**Out-of-stock in dark stores:** customers can't buy, and your product drops out of search and category listings in that area.",
      "**Smaller or fewer future POs:** platforms favour suppliers who deliver reliably.",
      "**Penalties or charges,** depending on your contract terms."
    ]},

    {"kind": "h2", "text": "Why POs go unfilled"},
    {"kind": "table", "headers": ["Cause", "Fix"], "rows": [
      ["Not enough finished stock", "Plan production from platform sell-through, not just your own sales; keep a buffer for fast movers"],
      ["PO noticed too late", "Have one owner check every platform portal daily; set alerts for new POs"],
      ["No delivery slot booked", "Book slots as soon as the PO is confirmed; keep a regular weekly slot where possible"],
      ["Rejected at the warehouse", "Check barcodes, MRP labels, case packs and remaining shelf life before dispatch"],
      ["Distributor or transport delays", "Agree service levels with distributors; track each PO to delivery"],
      ["Expired PO", "Deliver well inside the window; ask for a revised PO rather than delivering late"]
    ]},

    {"kind": "h2", "text": "Shelf life: the quiet rejection reason"},
    {"kind": "p", "text": "Food, personal care and other dated products usually need a minimum share of shelf life left when they reach the warehouse. Old batches sent to clear stock are a common cause of rejections. Check the shelf-life rule for each category in your platform agreement, and allocate your freshest stock to quick commerce."},

    {"kind": "h2", "text": "A weekly routine that keeps fill rates high"},
    {"kind": "ol", "items": [
      "**Monday:** review last week's POs by platform: ordered, delivered, accepted, rejected, fill rate.",
      "**List the misses** and their causes (stock, slot, rejection, transport).",
      "**Check sell-through by city** to see which products and warehouses will reorder soon.",
      "**Align production and dispatch** to expected POs, not just to last month's orders.",
      "**Daily:** check the portals for new POs, confirm them and book slots the same day."
    ]},

    {"kind": "h2", "text": "Rationalise your range for quick commerce"},
    {"kind": "p", "text": "Dark stores are small, and platforms keep only products that sell. Rather than listing your whole catalogue, focus quick commerce on your **fastest movers in pack sizes that suit instant delivery**, and keep them reliably in stock. A smaller range you can always fill beats a large range with frequent gaps. Our [quick commerce guide](/blog/selling-on-blinkit-zepto-instamart-guide) covers getting listed in the first place."},

    {"kind": "faq", "items": [
      {"q": "What is a PO fill rate in quick commerce?", "a": "It is the share of units on a purchase order that the platform's warehouse actually accepts: units accepted divided by units ordered. Short deliveries, late deliveries and rejected units all lower it."},
      {"q": "What happens if I miss a quick commerce purchase order?", "a": "Your product can go out of stock in dark stores, lose visibility, and receive smaller future orders. Depending on your contract, the platform may also apply charges."},
      {"q": "Why do quick commerce warehouses reject stock?", "a": "Common reasons are wrong or missing barcodes, MRP or labelling issues, damaged packaging, wrong case packs and too little remaining shelf life."},
      {"q": "Do Blinkit, Zepto and Instamart all work on purchase orders?", "a": "For most brands, yes: stock is supplied against purchase orders raised by the platform or the seller entity it works with. The exact process, portal and terms differ by platform and category."}
    ]},
    {"kind": "sources", "items": [{"title": "MediaNama: Hyperpure revenue drops as Blinkit shifts to inventory", "url": "https://www.medianama.com/2025/10/223-hyperpure-q2-revenue-drops-blinkit-inventory/", "note": "About 80% of Blinkit order value from own inventory, Jul–Sep 2025"}]}
  ]
};
