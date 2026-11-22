import type { WhitePaper } from "./types";

export const omnichannelInventoryReturnsIndia2026: WhitePaper = {
  slug: "omnichannel-inventory-returns-rto-india-2026",
  title: "Omnichannel Inventory Sync and Reverse Logistics: Keeping Stock Accurate and Returns Under Control in 2026",
  subtitle:
    "How Indian brands selling across their own site, Amazon, Flipkart and quick commerce can keep one accurate stock position, what the data says about returns and RTO, how to measure the true cost of a return, and the disposition options now available.",
  titleTag: "Omnichannel Inventory Sync, Returns & RTO in India (2026) | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on omnichannel inventory and reverse logistics for Indian brands: quick-commerce network scale, NRF and Unicommerce returns and RTO data, PIM and OMS design, return cost measurement, returnless refunds and the legal baseline.",
  excerpt:
    "Stock now sits in brand warehouses, FBA, Flipkart and thousands of dark stores, and returns run from 19% of online sales in the US to 58% of COD orders in India's festive peak. This paper covers how to keep one accurate stock position and how to bring returns and RTO under control.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  readMinutes: 12,
  keywords: [
    "omnichannel inventory sync india",
    "rto rate india cod",
    "ecommerce returns management",
    "reverse logistics d2c india",
    "returnless refunds amazon",
    "order management system available to promise",
    "quick commerce inventory dark stores",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "Indian consumer brands rarely sell from one warehouse to one storefront any more. Stock is split across their own fulfilment, Amazon and Flipkart warehouses, and quick-commerce dark stores, while orders arrive from every channel at once. At the same time, returns and return-to-origin (RTO) parcels quietly eat margin. This paper sets out what the data shows and an operating model to manage both.",
    },
    {
      kind: "ul",
      items: [
        "Quick commerce is now a major inventory location: Blinkit ran **2,751 dark stores** at the end of September 2026, and Zepto and Swiggy Instamart had **1,139** and **1,143** stores at the end of FY26.",
        "NRF and Happy Returns estimate US retail returns at **15.8%** of sales in 2025, and **19.3%** of online sales. Retailers in the survey said **9%** of returns were fraudulent.",
        "In India the bigger drain is often RTO. Unicommerce reports D2C RTO peaked at **39.2%** in November 2025 and fell to **21.0%** by March 2026 for brands that combined prepaid incentives, pin-code-level courier routing and address verification.",
        "COD is the main driver: Unicommerce found **58%** of COD orders came back in the FY26 festive quarter, against **under 15%** of prepaid orders.",
        "The fix has two halves: one accurate, shared stock position (product data plus order management), and a returns process that decides quickly whether each item is restocked, refurbished, resold or not collected at all.",
      ],
    },

    { kind: "h2", text: "1. Where inventory sits now" },
    {
      kind: "p",
      text: "A typical growing Indian brand holds stock in its own warehouse or a 3PL, in Amazon FBA and Flipkart fulfilment centres, and with quick-commerce platforms. Quick commerce in particular has scaled fast:",
    },
    {
      kind: "table",
      headers: ["Platform", "Dark stores", "As of"],
      rows: [
        ["Blinkit", "2,751", "End of September 2026 (Eternal Q2 FY27 letter)"],
        ["Swiggy Instamart", "1,143", "End of FY26 (March 2026)"],
        ["Zepto", "1,139", "End of FY26 (March 2026)"],
      ],
    },
    {
      kind: "p",
      text: "Each location is a separate pool of stock with its own replenishment cycle. If channels are managed in silos, a brand can be out of stock on one channel while units sit unsold in another. If stock is shared without a reliable live count, it can sell the same unit twice.",
    },

    { kind: "h2", text: "2. What the data says about returns and RTO" },
    { kind: "h3", text: "Global benchmark" },
    {
      kind: "table",
      headers: ["Measure (US, 2025)", "Value"],
      rows: [
        ["Total retail returns", "$849.9 billion, 15.8% of sales (16.9% in 2024)"],
        ["Online sales returned", "19.3%"],
        ["Returns that were fraudulent", "9%"],
        ["Consumers who say free returns matter when shopping online", "82%"],
        ["Consumers more likely to choose a return option with instant refund or exchange", "76%"],
      ],
    },
    { kind: "h3", text: "India: RTO and COD" },
    {
      kind: "p",
      text: "There is no official RTO rate for India, and published figures measure different things, so compare like with like:",
    },
    {
      kind: "table",
      headers: ["Source", "Finding"],
      rows: [
        ["Unicommerce India D2C Report 2026 (410M+ shipments)", "D2C RTO 39.2% at the November 2025 festive peak, 25.6% in January and 21.0% by March 2026 for brands running three fixes"],
        ["Unicommerce, FY26 festive quarter", "58% of COD orders returned, against under 15% of prepaid orders"],
        ["ClickPost FY2026 D2C network", "COD orders ended as RTO at 37.51%, prepaid at 5.28%"],
        ["Meesho FY25 prospectus (via ClickPost)", "22.3% of COD orders and 2.7% of prepaid orders undelivered"],
        ["ClickPost Great Indian Festive Report 2026", "Prepaid share of D2C shipments 52%, up from 50.3% in 2025"],
      ],
    },
    {
      kind: "p",
      text: "Unicommerce attributes the fall in RTO to three operational changes made together: a **prepaid incentive at checkout**, **pin-code-level courier routing** based on actual delivery performance, and **address verification before dispatch**.",
    },

    { kind: "h2", text: "3. The system design: one product record, one stock position" },
    { kind: "h3", text: "Product information (PIM)" },
    {
      kind: "p",
      text: "The product information system holds one master record per SKU and variant: identifiers (GTIN, seller SKU, ASIN and FSN mappings), attributes, images, compliance declarations and pricing rules. Listings on the website, Amazon, Flipkart and quick-commerce portals are generated or updated from it, so they don't drift apart.",
    },
    { kind: "h3", text: "Order management and available-to-promise (OMS / ATP)" },
    {
      kind: "p",
      text: "The order management system takes orders from every channel and holds the live stock count for every location. Its job is to answer one question correctly at all times: how many units can we promise, where, and by when? The core capabilities are:",
    },
    {
      kind: "ul",
      items: [
        "**Real-time deductions**: stock is reserved the moment an order is placed on any channel, and the new count is pushed to the others.",
        "**Shared pools with reserves**: stock in a shared warehouse is offered to several channels, with a reserve held back so a spike on one channel can't oversell the rest.",
        "**Order routing**: each order is assigned to the location that can meet the promised delivery at the lowest cost.",
        "**Buffers by channel**: when stock in a region runs low, availability is reduced on chosen channels first. Set thresholds from your own sales velocity and replenishment lead times.",
      ],
    },
    {
      kind: "p",
      text: "Stock held inside Amazon FBA, Flipkart's warehouses or a quick-commerce platform is controlled by that platform, so it can't be shared in the same way. Track it in the same system for visibility, and plan replenishment from it.",
    },

    { kind: "h2", text: "4. Measuring the true cost of a return" },
    {
      kind: "p",
      text: "A return costs far more than the refund. Most brands don't know the full number because the costs sit in different budgets. Build it per order, per channel and per category from these lines:",
    },
    {
      kind: "table",
      headers: ["Cost line", "What to include", "Where to find it"],
      rows: [
        ["Forward costs already spent", "Outbound shipping, pick and pack, packaging, payment fees", "Courier invoices, 3PL bills, payment gateway reports"],
        ["Reverse freight", "Return pickup or RTO charges", "Courier invoices; marketplace fee reports"],
        ["Handling", "Receiving, inspection, cleaning and repacking labour", "Warehouse time studies or 3PL rate card"],
        ["Value lost", "Units that can't be resold at full price: damaged, used, out of season", "Inspection grades × price realised"],
        ["Marketplace fees not refunded", "Fees retained on returned or cancelled orders", "Amazon and Flipkart settlement reports"],
        ["Fraud", "Wrong item, empty box or used item returned", "Inspection records and claims"],
      ],
    },
    {
      kind: "p",
      text: "Divide the total by the number of returns to get the cost per return, and compare it with the item's contribution margin. That comparison decides the right disposition, including whether collecting the item is worth it at all.",
    },

    { kind: "h2", text: "5. Disposition: what happens to each returned item" },
    {
      kind: "ol",
      items: [
        "**Restock**: unopened, undamaged items go back into sellable stock as soon as they pass inspection. Every day in the return queue is a day the unit can't be sold.",
        "**Refurbish or repack**: items with damaged packaging or minor faults are repaired or repacked and sold as new where rules allow.",
        "**Resell as open-box or seconds**: items that can't be sold as new are sold through an open-box section, outlet or liquidation channel.",
        "**Returnless refund**: where the return would cost more than the item can recover, refund the customer without collecting the item.",
        "**Exchange or credit first**: offering an exchange or store credit before a refund keeps some of the revenue.",
      ],
    },
    { kind: "h3", text: "Returnless refunds on Amazon" },
    {
      kind: "p",
      text: "Amazon lets sellers create **returnless resolution rules** for seller-fulfilled orders in their return settings, by price range, category or return reason, and returns that match are authorised automatically. For FBA, Amazon added an option in the US store in November 2025 to set a maximum item price between $1 and $75 for returnless resolutions. Check Seller Central for what is available on Amazon.in before relying on either.",
    },

    { kind: "h2", text: "6. Prevent returns and RTO before they happen" },
    {
      kind: "ul",
      items: [
        "**Shift orders to prepaid**: a small prepaid incentive at checkout was one of the three fixes in Unicommerce's data. Partial COD (a token prepaid amount) is another common approach.",
        "**Verify before dispatch**: confirm the order and address, by WhatsApp or call, before shipping COD orders, and hold or cancel unconfirmed ones.",
        "**Route by pin code**: choose couriers by their actual delivery success in each pin code, not by rate alone.",
        "**Fix the listing**: wrong-size and not-as-described returns usually trace back to images, size charts or specifications. Review return reasons by SKU every month.",
        "**Protect delivery quality**: late or damaged deliveries drive refusals and returns.",
      ],
    },

    { kind: "h2", text: "7. Quick commerce and marketplace stock integrity" },
    {
      kind: "ul",
      items: [
        "**Plan replenishment from sell-through by location**, not from national totals, because each dark store or fulfilment centre is a separate stock pool.",
        "**Reconcile purchase orders against available stock** before confirming them, so you don't accept quantities you can't supply.",
        "**Reconcile platform stock reports with your own records** regularly, and raise claims for lost or damaged units within each platform's window.",
      ],
    },

    { kind: "h2", text: "8. The legal baseline in India" },
    {
      kind: "p",
      text: "The Consumer Protection (E-Commerce) Rules, 2020 bar sellers on marketplaces from refusing to take back goods, or refusing a refund, where goods are defective, deficient, spurious, or not as described. Returns policy can be designed to control cost, but it can't remove that baseline. Each marketplace's own return policy applies on top.",
    },

    { kind: "h2", text: "9. The Pexeta approach" },
    {
      kind: "ol",
      items: [
        "**Map stock and channels**: list every location and channel, who controls the stock, and how often each count updates.",
        "**Build one product record**: consolidate identifiers and attributes into a single master and generate channel listings from it.",
        "**Set up live stock and routing**: connect channels to an order management system with real-time deductions, reserves and routing rules.",
        "**Measure return cost and RTO by segment**: by channel, category, payment mode and pin code, using the cost lines above.",
        "**Set disposition rules**: restock, refurbish, resell or returnless, based on cost per return against margin.",
        "**Attack RTO at the source**: prepaid incentives, verification and pin-code routing, reviewed monthly.",
      ],
    },

    { kind: "h2", text: "10. Conclusion" },
    {
      kind: "p",
      text: "Selling across more channels multiplies both opportunity and error. Brands that keep one accurate stock position, measure what each return really costs, and act on RTO before dispatch protect margin that is otherwise lost quietly in warehouses and courier invoices. None of this needs exotic technology. It needs one product record, live stock counts and disciplined measurement.",
    },

    {
      kind: "faq",
      items: [
        { q: "What is a typical RTO rate in India?", a: "There's no official figure and sources measure differently. Unicommerce reported D2C RTO of 39.2% at the November 2025 festive peak, falling to 21.0% by March 2026 for brands using prepaid incentives, pin-code routing and address verification. ClickPost's FY2026 network data showed 37.51% for COD orders against 5.28% for prepaid." },
        { q: "What share of online purchases are returned?", a: "In the US, NRF and Happy Returns estimated 19.3% of online sales would be returned in 2025, against 15.8% of all retail sales." },
        { q: "What is available-to-promise (ATP)?", a: "The number of units a business can commit to a customer at a given location and date, after subtracting reservations and safety reserves from physical stock." },
        { q: "Can Amazon sellers refund without taking the item back?", a: "Amazon lets sellers set returnless resolution rules for seller-fulfilled orders by price, category or return reason. In the US, FBA sellers can set a maximum item price between $1 and $75. Check Seller Central for Amazon.in." },
        { q: "Can a seller in India refuse a return?", a: "Under the Consumer Protection (E-Commerce) Rules, 2020, marketplace sellers can't refuse to take back goods or refund where goods are defective, deficient, spurious or not as described." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "Open Magazine: Blinkit wants your whole shopping list (Eternal Q2 FY27 letter)", url: "https://openthemagazine.com/business/blinkit-wants-your-whole-shopping-list-can-its-economics-keep-up", note: "2,751 Blinkit stores" },
        { title: "NewsBytes: Blinkit grows bigger and more profitable (Jul 2026)", url: "https://www.newsbytesapp.com/news/business/blinkit-grows-bigger-and-more-profitable/story", note: "Zepto 1,139 and Instamart 1,143 stores at FY26 end" },
        { title: "NRF: Consumers expected to return nearly $850 billion in merchandise in 2025", url: "https://nrf.com/media-center/press-releases/consumers-expected-to-return-nearly-850-billion-in-merchandise-in-2025" },
        { title: "NRF Research: 2025 Retail Returns Landscape", url: "https://www.nrf.com/research/2025-retail-returns-landscape" },
        { title: "Yahoo Finance / Retail Insight Network: Retail returns to hit $849.9bn in 2025", url: "https://finance.yahoo.com/news/retail-returns-hit-849-9bn-101543935.html", note: "Free returns and instant refund preferences" },
        { title: "Unicommerce: India D2C Report 2026", url: "https://unicommerce.com/india-d2c-report-2026-april/", note: "RTO 39.2% to 21.0% and the three fixes" },
        { title: "ClickPost: Ecommerce RTO statistics India 2026", url: "https://www.clickpost.ai/blog/ecommerce-rto-statistics-india", note: "COD 37.51% vs prepaid 5.28%; Meesho prospectus figures" },
        { title: "ClickPost: Fashion ecommerce returns statistics India 2026", url: "https://www.clickpost.ai/blog/fashion-ecommerce-returns-statistics-india", note: "58% COD vs under 15% prepaid, FY26 festive quarter" },
        { title: "ClickPost: The Great Indian Festive Report 2026", url: "https://www.clickpost.ai/clickpost-great-indian-festive-report-2026", note: "52% prepaid share" },
        { title: "Amazon Seller Forums: Enroll in FBA Returnless Resolutions by price in the US", url: "https://sellercentral.amazon.com/seller-forums/discussions/t/d31d6e3f-24ed-4870-b57b-a4d7a0d74eb8" },
        { title: "Retail Dive: Amazon lets sellers adjust returnless resolutions by price (Nov 2025)", url: "https://www.retaildive.com/news/amazon-returns-returnless-resolutions-dashboard/806886/" },
        { title: "Amazon Seller Forums: Returnless refunds, create a rule", url: "https://sellercentral-europe.amazon.com/forums/t/returnless-refunds-create-a-rule/185212", note: "Rules set by seller; matching returns authorised automatically" },
        { title: "iPleaders: Consumer Protection (E-Commerce) Rules", url: "https://blog.ipleaders.in/everything-need-know-consumer-protection-e-commerce-rules-2019/", note: "Sellers can't refuse returns of defective, deficient, spurious or misrepresented goods" },
        { title: "HSA Advocates: Consumer Protection (E-commerce) Rules, 2020", url: "https://hsalegal.com/wp-content/uploads/2020/09/HSA-Corp-Comm-Law-Policy-The-Consumer-Protection-E-commerce-Rules-2020.pdf" },
      ],
    },
  ],
};
