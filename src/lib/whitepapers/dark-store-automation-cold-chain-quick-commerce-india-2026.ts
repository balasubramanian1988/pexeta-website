import type { WhitePaper } from "./types";

export const darkStoreAutomationColdChainIndia2026: WhitePaper = {
  slug: "dark-store-automation-cold-chain-quick-commerce-india-2026",
  title: "Dark Store Automation and Cold Chain in Quick Commerce: Where Robotics Pays and What Brands Must Get Right (2026)",
  subtitle:
    "How India's quick-commerce networks are adding automation, why it sits upstream of the dark store for now, when robotics pays back, and the cold-chain rules and practices that decide whether perishables arrive in good condition.",
  titleTag: "Dark Store Automation & Cold Chain in Indian Quick Commerce (2026) | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on automation and cold chain in Indian quick commerce: dark store scale in 2026, Zepto's automated supply chain, the Kroger–Ocado lesson, when warehouse robotics pays, FSSAI temperature rules, and a brand checklist.",
  excerpt:
    "India's quick commerce reached about $13 billion GMV in FY26 on more than 5,000 mostly manual dark stores. Automation is arriving upstream first, and cold chain is becoming the difference between a sale and a refund. This paper sets out what the evidence shows and what brands should do.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-26",
  dateModified: "2026-11-26",
  readMinutes: 11,
  keywords: [
    "dark store automation india",
    "quick commerce robotics",
    "micro fulfillment centre india",
    "quick commerce cold chain",
    "fssai cold chain perishables",
    "zepto automation",
    "autostore dark store",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    { kind: "ul", items: [
      "India's quick commerce reached about **$13 billion GMV in FY26**, per Redseer and Google, after growing roughly 120% year on year.",
      "The combined dark-store network of Blinkit, Instamart and Zepto reached **5,026 locations in May 2026**, up from 3,405 a year earlier.",
      "Most Indian dark stores still run on **shelves and human pickers**. Automation has arrived **upstream** first: Zepto says it processes about **25 lakh FMCG units a day** through automated systems across its supply chain.",
      "The cautionary case is the US. In November 2025, **Kroger** said it would close three Ocado-built automated fulfilment centres and take a **$2.6 billion** impairment.",
      "Cold chain is now a compliance issue as well as a quality one. In **October 2026**, FSSAI issued an advisory requiring perishables such as khoa, paneer, meat and fish to be handled, stored and transported under controlled temperatures throughout the supply chain.",
    ] },

    { kind: "h2", text: "1. The scale of the dark store network" },
    { kind: "table", headers: ["Measure", "Figure", "Source"], rows: [
      ["Quick commerce GMV, FY26", "About $13 billion", "Redseer and Google, via ClickPost"],
      ["Dark stores (Blinkit, Instamart, Zepto)", "5,026 in May 2026 (3,405 a year earlier)", "Equirus"],
      ["Blinkit dark stores", "2,751 as of 30 Sep 2026", "Eternal Q2 FY27 results, via ClickPost"],
      ["Cities with dark stores", "477", "CLSA, Aug 2026"],
      ["Daily orders", "Blinkit 3.4–3.6 mn; Zepto 2.4–2.6 mn; Instamart 1.3–1.45 mn", "Datum Intelligence, Aug 2026"],
    ] },
    { kind: "p", text: "Estimates of market size vary widely with method and scope. ClickPost compiles figures from $3.65 billion to $13 billion for the same period. This paper uses Redseer's GMV figure because it measures full order value." },

    { kind: "h2", text: "2. Two histories of the dark store" },
    { kind: "p", text: "Kumar Anand of QKS Group, writing in Robotics 24/7 (August 2026), describes two versions of the dark store. Western grocers built heavily automated, centralised fulfilment. Indian quick-commerce operators scaled with flexible human labour in small rooms of shelves, with little automation." },
    { kind: "p", text: "The Western bet struggled on cost per order. Kroger, which partnered with Ocado in 2018, said in November 2025 that it would close automated centres in Wisconsin, Maryland and Florida, which had not met financial expectations. It took an impairment of about **$2.6 billion** and agreed to pay Ocado **$350 million**, while keeping five sites running and leaning more on store-based and third-party delivery." },
    { kind: "quote", text: "The lesson is not that automation fails. Large fixed automation built ahead of proven demand, far from customers, is hard to pay back. Automation needs dense, stable demand at the site it serves." },

    { kind: "h2", text: "3. Where automation sits in India today" },
    { kind: "p", text: "In India, automation has arrived first in the **mother hubs and distribution centres** that replenish dark stores, rather than inside the dark stores themselves." },
    { kind: "ul", items: [
      "**Zepto** completed nationwide automation of its backend supply chain in December 2025. CEO Aadit Palicha said about **25 lakh FMCG units a day** were processed through automated systems, with expected annual operating savings in the hundreds of crores.",
      "At the India AI Impact Summit in February 2026, Zepto said **more than 50% of its order volumes** were processed through highly automated distribution centres.",
      "Zepto co-founder Kaivalya Vohra told Digit the company built its own automation systems, called **Falcon and Neo**, for specific operational problems.",
      "**Flipkart** runs robot-based sortation at a Bengaluru mother hub, processing over 4,500 shipments an hour.",
    ] },

    { kind: "h2", text: "4. The automation toolbox" },
    { kind: "table", headers: ["System", "How it works", "What vendors report"], rows: [
      ["Cube storage (e.g. AutoStore)", "Bins stacked in an aluminium grid with no aisles; robots on top retrieve bins and bring them to a picking port", "Up to 4x storage capacity vs a manual warehouse (AutoStore); up to 650 picks/hour per person (Dematic)"],
      ["Goods-to-person robots (e.g. Geekplus)", "Mobile robots bring totes or racks to stationary pickers", "Most grocery and c-store users see ROI in under 24 months (Geekplus)"],
      ["Sortation robots", "Small robots carry parcels to destination chutes", "4,500+ shipments/hour at a Flipkart hub"],
    ] },
    { kind: "p", text: "These figures come from vendors and operators, and actual results depend on site layout, order profile and demand density. BCG expects robotics and dark stores to cut grocery picking costs by **30–50%** in a 5–10 year wave of automation." },

    { kind: "h2", text: "5. When robotics pays" },
    { kind: "p", text: "QKS Group's analysis gives useful benchmarks. A human picks about **150 units an hour**, so a four-fold pick rate implies a labour saving near 75%. But on a ₹100 order, delivery can take **₹40–50** and store operations **₹20–25**, so picking is only one part of the cost. The analysis sets four conditions for automation to pay:" },
    { kind: "ol", items: [
      "**Density before scale:** the site needs high, stable demand.",
      "**Coordination before hardware:** orchestration software matters more than the equipment type.",
      "**Peak-window performance before nameplate throughput.**",
      "**Redeployability before payback:** the investment should survive a site move, and pay back within the site's expected life.",
    ] },
    { kind: "p", text: "The author's advice is to prove sites profitable on flexible labour first, then automate where density justifies it. For unit economics in more detail, see our white paper on [quick commerce unit economics](/whitepapers/quick-commerce-unit-economics-margin-defense-india-2026)." },

    { kind: "h2", text: "6. Cold chain: rules and practice" },
    { kind: "h3", text: "The temperature rules" },
    { kind: "ul", items: [
      "**FSSAI storage checklist:** frozen products stored at **−18°C or below**, chilled products at **5°C or below**, with temperature records kept.",
      "**FSSAI advisory, October 2026:** perishables such as khoa, paneer, meat and fish must be handled, stored and transported under controlled temperatures throughout the supply chain. Under Schedule 4 of the Licensing and Registration Regulations, food businesses must hold the prescribed temperature across the chain.",
      "**E-commerce shelf life:** FSSAI's e-commerce guidelines require food delivered to consumers to have **30% shelf life or 45 days** before expiry at delivery. See our guide to [quick commerce shelf-life rules](/blog/quick-commerce-shelf-life-rules-rejections).",
    ] },
    { kind: "h3", text: "Why it matters more in quick commerce" },
    { kind: "p", text: "Quick-commerce platforms reported a nearly **30% summer surge** in demand for ice cream and cold drinks, with perishables accounting for up to **40% of orders**. Unlike traditional logistics, last-mile quick-commerce delivery runs without active refrigeration, so frozen goods are exposed to thawing. Petit Forestier recommends storing frozen products in negative refrigeration units, picking them at the very last moment, and using reinforced insulated boxes with cold accumulators." },
    { kind: "p", text: "Platforms are investing upstream too. Mint reported that Zepto is strengthening its cold supply chain, including sourcing, packaging automation and ripening chambers, and partnered with TCI to expand storage and distribution in the south." },

    { kind: "h2", text: "7. The Pexeta checklist for brands" },
    { kind: "ol", items: [
      "**Make cartons automation-ready.** Automated hubs and sorters handle cartons by machine. Use sturdy secondary packaging and clean, high-contrast barcodes that scan first time.",
      "**Plan shelf life backwards from delivery.** Leave enough shelf life to clear the 30% / 45-day rule after the hub, the dark store and the shelf.",
      "**Label temperature needs clearly.** Mark 'keep refrigerated' or 'keep frozen' and the required range on every case and unit.",
      "**Ask platforms about their cold chain.** For chilled or frozen SKUs, confirm cold room and freezer capacity at the dark stores you'll be listed in, and how last-mile delivery is insulated.",
      "**Focus on fast movers.** Dark stores carry a limited range; plan stock city by city for the SKUs that sell. See our guide to [city-wise stock planning](/blog/quick-commerce-stock-planning-city-wise).",
      "**Track fill rates and rejections.** Rejections at the hub for damage, labelling or short shelf life cost the sale. See our guide to [PO fill rates](/blog/quick-commerce-po-fill-rates-dark-stores).",
    ] },

    { kind: "h2", text: "8. Conclusion" },
    { kind: "p", text: "India's dark stores grew on people, not robots, and the evidence so far favours automating where demand is dense and stable, which today means the hubs that feed the stores. For brands, the practical work is less about robots and more about packaging that survives machines, shelf life that survives the network, and cold chain that survives the last mile." },

    {
      kind: "faq",
      items: [
        { q: "Are Indian dark stores automated?", a: "Mostly not. Most dark stores still use shelves and human pickers. Automation has arrived first in the distribution centres that replenish them; Zepto says over 50% of its order volumes go through highly automated distribution centres." },
        { q: "Why did Kroger close automated fulfilment centres?", a: "Kroger said in November 2025 that three of its Ocado-built automated centres had not met financial expectations. It took a $2.6 billion impairment and shifted more orders to its stores and third-party delivery partners." },
        { q: "What temperatures does FSSAI require for chilled and frozen food?", a: "FSSAI's storage checklist requires frozen products to be stored at −18°C or below and chilled products at 5°C or below, with temperature records kept." },
        { q: "What shelf life must food have when delivered by e-commerce?", a: "FSSAI's e-commerce guidelines require 30% shelf life or 45 days before expiry at the time of delivery." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "ClickPost: Quick commerce statistics India 2026", url: "https://www.clickpost.ai/blog/quick-commerce-statistics-india", note: "Redseer FY26 GMV ~$13B; Blinkit 2,751 stores (Sep 2026); range of market-size estimates" },
        { title: "Asianet Newsable: Equirus on quick commerce growth (2026)", url: "https://newsable.asianetnews.com/business/quick-commerce-leads-indias-digital-retail-boom-set-for-40-percent-growth-articleshow-chgoonv", note: "5,026 dark stores in May 2026" },
        { title: "NewKerala: Dark stores in 477 cities (CLSA, Aug 2026)", url: "https://www.newkerala.com/news/a/quick-commerce-expands-477-cities-as-players-target-192.htm" },
        { title: "Entrepreneur India: Datum Intelligence daily orders (Aug 2026)", url: "https://india.entrepreneur.com/?p=98759" },
        { title: "Robotics 24/7: As automated grocery fulfillment declines, quick commerce reveals where warehouse automation pays off (Aug 2026)", url: "https://www.robotics247.com/article/as-automated-grocery-fulfillment-declines-quick-commerce-reveals-where-warehouse-automation-pays-off" },
        { title: "Grocery Dive: Kroger to close three automated fulfilment centres", url: "https://www.grocerydive.com/news/kroger-ecommerce-profitability-400M-ocado-automated-fulfillment-centers-delivery/805781/" },
        { title: "Spokesman-Review (Reuters): Kroger to close three automated sites, $2.6 billion charge", url: "https://www.spokesman.com/stories/2025/nov/18/kroger-to-close-three-automated-delivery-fulfillme" },
        { title: "Transport Topics: Ocado gets $350 million from Kroger", url: "https://www.ttnews.com/articles/ocado-payout-kroger-warehouse" },
        { title: "CIO Insider: Zepto launches pan-India supply chain automation (Dec 2025)", url: "https://www.cioinsiderindia.com/news/zepto-launches-panindia-supply-chain-automation-nwid-7881.html" },
        { title: "Digit: Zepto's AI-led operations at India AI Impact Summit 2026", url: "https://www.digit.in/news/general/zepto-showcases-ai-led-quick-commerce-operations-at-india-ai-impact-summit-2026-details.html" },
        { title: "Digit: Zepto co-founder Kaivalya Vohra on AI in quick commerce", url: "https://www.digit.in/features/general/zepto-co-founder-kaivalya-vohra-on-how-ai-is-changing-quick-commerce.html", note: "In-house systems Falcon and Neo" },
        { title: "Flipkart Stories: Robot-based sortation at a Bengaluru mother hub", url: "https://stories.flipkart.com/bots-agv-ecommerce/" },
        { title: "AutoStore: Benefits — space", url: "https://autostoresystem.com/benefits/space?hsLang=en", note: "Up to 4x storage capacity vs manual" },
        { title: "Dematic: AutoStore — increase storage capacity up to 4x", url: "https://www.dematic.com/en-ca/insights/articles/autostore-the-next-big-step-towards-seamless-warehouse-innovation", note: "Up to 650 picks/hour per person" },
        { title: "Geekplus: Hidden costs of manual grocery fulfilment", url: "https://blog.geekplus.com/en/robotics-blog/the-hidden-costs-of-warehouse-fulfillment-and-how-to-fix-them" },
        { title: "BCG: The race to automate the last mile of grocery deliveries (2026)", url: "https://www.bcg.com/publications/2026/race-to-automate-the-last-mile-of-grocery-deliveries" },
        { title: "FSSAI: Storage and warehousing audit checklist (draft)", url: "https://infotrain.fssai.gov.in/AMS/doc/RDC_Draft_Storage_01_11_2017.pdf", note: "Frozen ≤ −18°C, chilled ≤ 5°C" },
        { title: "Maritime Gateway: FSSAI directs strict temperature control for perishables (Oct 2026)", url: "https://www.maritimegateway.com/fssai-directs-strict-temperature-control-for-perishable-foods-in-storage-and-transport-railways-brought-into-enforcement/" },
        { title: "NewKerala: FSSAI advisory on khoa, paneer, meat (Oct 2026)", url: "https://www.newkerala.com/news/a/fssai-issues-advisory-storage-transportation-perishable-foods-under-690.htm" },
        { title: "FSSAI: Guidelines for e-commerce food business operators", url: "https://fssai.gov.in/upload/advisories/2018/07/5b52d90690048Reg-54.pdf", note: "30% shelf life or 45 days at delivery" },
        { title: "India Sea Trade News: Cold chain firms gear up for summer demand", url: "https://indiaseatradenews.com/?p=141178", note: "~30% summer surge; perishables up to 40% of orders" },
        { title: "Petit Forestier: Quick commerce and deep-freeze", url: "https://www.petitforestier.com/en-ie/posts/966_quick-commerce-and-deep-freeze-how-can-18c-be-maintained-on-ultra-fast-deliveries" },
        { title: "Mint (via Magzter): Zepto looks at ways to build stronger cold chain logistics", url: "https://www.magzter.com/es/stories/newspaper/Mint-Kolkata/ZEPTO-LOOKS-AT-WAYS-TO-BUILD-STRONGER-COLD-CHAIN-LOGISTICS" },
      ],
    },
  ],
};
