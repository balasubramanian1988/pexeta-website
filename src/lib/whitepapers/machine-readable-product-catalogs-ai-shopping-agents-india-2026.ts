import type { WhitePaper } from "./types";

export const machineReadableCatalogsIndia2026: WhitePaper = {
  slug: "machine-readable-product-catalogs-ai-shopping-agents-india-2026",
  title: "Machine-Readable Product Catalogs: Structured Data, Product Feeds and Agentic Commerce Protocols in 2026",
  subtitle:
    "What AI shopping surfaces actually read, what the evidence says about schema markup, where ACP, UCP, MCP and llms.txt really stand, and how Indian D2C brands should build one clean product data source that feeds every channel.",
  titleTag: "Machine-Readable Product Catalogs for AI Shopping (2026): Schema, Feeds, ACP & UCP | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on preparing D2C product catalogs for AI shopping: Google's merchant listing markup, OpenAI and Merchant Center product feeds, the status of ACP, UCP and llms.txt in 2026, and a practical catalog playbook for Indian brands.",
  excerpt:
    "AI shopping surfaces read product data, not marketing copy. But the evidence on schema and AI citations is more mixed than the hype, ChatGPT's Instant Checkout has been scaled back, and Google's UCP checkout is a US pilot. This paper sets out what is real and what to build.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  readMinutes: 12,
  keywords: [
    "machine readable product catalog",
    "product schema json-ld ecommerce",
    "openai product feed specification",
    "universal commerce protocol ucp",
    "agentic commerce protocol acp",
    "llms.txt ecommerce",
    "d2c catalog ai shopping india",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "Shoppers increasingly start product research in AI assistants and AI search. Those systems work from structured product data: identifiers, prices, stock, shipping and return terms, and clearly separated attributes. This paper looks at what that data layer needs to contain, what the evidence says about it, and which of the new protocols are worth acting on now.",
    },
    {
      kind: "ul",
      items: [
        "Pages cited by AI are about **three times more likely** to carry JSON-LD than pages that aren't, according to Ahrefs' study of 6 million URLs. But when Ahrefs tracked **1,885 pages that added schema**, citations in ChatGPT and Google AI Mode didn't measurably change. Structured data is a foundation for shopping features, not a shortcut to citations.",
        "Google requires `name`, `image` and `offers` for merchant listing markup, recommends GTINs, and warns that **JavaScript-generated markup can make Shopping crawls less frequent and less reliable**.",
        "OpenAI launched **Instant Checkout** and the **Agentic Commerce Protocol (ACP)** in September 2025. In March 2026 it scaled checkout back, letting merchants use their own checkout while ChatGPT focuses on product discovery. Product feeds remain the way in.",
        "Google and Shopify launched the **Universal Commerce Protocol (UCP)** on **11 January 2026**. Stores declare support in a manifest at `/.well-known/ucp`. Merchant Center's UCP onboarding is currently a **US pilot**.",
        "Google says **llms.txt** isn't needed for its generative AI search features, and its Search team has said no AI system currently uses it.",
        "The practical priority for Indian brands is one clean product data source, with correct GTINs and discrete attributes, that feeds the website markup, Google Merchant Center, marketplaces and any AI feed from the same records.",
      ],
    },

    { kind: "h2", text: "1. Two audiences for every product page" },
    {
      kind: "p",
      text: "A product page has always been written for people: photos, story and persuasive copy. It now also has a machine audience. When a shopper asks an assistant for, say, a fragrance-free moisturiser under ₹1,000 that can be delivered this week, the system has to match the request against facts: price and currency, stock status, delivery time, return terms and specific product attributes.",
    },
    {
      kind: "p",
      text: "If those facts exist only inside a paragraph of marketing copy, or are loaded by client-side scripts, a machine reader has to infer them. Separating them into structured fields doesn't replace good copy for human shoppers. It makes the same facts unambiguous for software.",
    },

    { kind: "h2", text: "2. What the evidence says about schema and AI visibility" },
    {
      kind: "p",
      text: "Claims that schema markup 'gets you cited by ChatGPT' usually rest on correlation. The best recent evidence separates correlation from cause:",
    },
    {
      kind: "table",
      headers: ["Study", "Finding"],
      rows: [
        ["Ahrefs, 6 million URLs (2026)", "Pages cited by AI were almost three times more likely to have JSON-LD than pages that weren't cited."],
        ["Ahrefs, 1,885 pages that added JSON-LD between Aug 2025 and Mar 2026, against matched controls", "Google AI Mode +2.4% and ChatGPT +2.2%, both statistically indistinguishable from zero. AI Overviews −4.6% relative to controls."],
        ["Semrush, 5 million URLs cited by ChatGPT Search and Google AI Mode", "Organization, Article and BreadcrumbList schema appeared most often on cited pages."],
        ["Search Atlas, domain-level analysis across OpenAI, Gemini and Perplexity", "Domains with extensive schema were cited no more often than domains with little or none."],
      ],
    },
    {
      kind: "p",
      text: "Ahrefs' explanation is that schema tends to sit on better-maintained sites that also do the other things that earn citations. The conclusion for a brand is to treat product markup as hygiene: it's needed for Google's merchant listings and Shopping features, and it keeps facts consistent across surfaces, but it won't on its own make a page more likely to be cited.",
    },

    { kind: "h2", text: "3. The protocol landscape in late 2026" },
    {
      kind: "table",
      headers: ["Standard", "Who and when", "What it does", "Status for an Indian brand"],
      rows: [
        ["Agentic Commerce Protocol (ACP)", "OpenAI and Stripe, September 2025", "Product feed spec, plus checkout and delegated payment specs for ChatGPT", "Instant Checkout scaled back in March 2026. Product feed onboarding is open to approved partners."],
        ["Universal Commerce Protocol (UCP)", "Google and Shopify with retail and payment partners, 11 January 2026", "Covers discovery, cart, checkout and orders. Stores publish capabilities at /.well-known/ucp. Works over REST, MCP or A2A.", "Merchant Center UCP integration is a US pilot. Google has tested buying from Flipkart through Gemini and AI Mode in India."],
        ["Agent Payments Protocol (AP2)", "Google, September 2025", "Secure payments for agent-initiated purchases. UCP is compatible with it.", "Relevant to payment providers more than catalog teams."],
        ["Model Context Protocol (MCP)", "Anthropic, November 2024. Now under the Linux Foundation's Agentic AI Foundation.", "Open standard that connects AI applications to tools and data", "One of UCP's supported transports. Useful once a brand has its own agent integrations."],
        ["llms.txt", "Community proposal", "A Markdown file summarising a site for language models", "Google Search says it isn't needed for its generative AI features. Low priority."],
      ],
    },
    { kind: "h3", text: "What changed with ChatGPT checkout" },
    {
      kind: "p",
      text: "OpenAI said in March 2026 that the first version of Instant Checkout didn't offer the flexibility it wanted, so it is letting merchants use their own checkout while it focuses on product discovery. Merchants can share product feeds and promotions with OpenAI so their ranges are represented. Etsy told Modern Retail it hadn't seen large sales volume from Instant Checkout. OpenAI described ACP as the infrastructure connecting users to merchants across the shopping journey.",
    },
    {
      kind: "p",
      text: "For Indian brands the lesson is simple: the durable asset is accurate, complete product data. Checkout formats will keep changing; a clean feed works with all of them.",
    },
    { kind: "h3", text: "What UCP means today" },
    {
      kind: "p",
      text: "UCP lets businesses show offerings in AI Mode in Google Search and the Gemini app. The merchant stays the merchant of record and can keep its own checkout. Google's Merchant Center integration lets participating merchants add a checkout button on eligible listings, but it is visible only to pilot merchants in the US and applies to products sold in the US. Indian brands selling domestically should watch it, not build for it yet. Shopify merchants get UCP support through the platform.",
    },

    { kind: "h2", text: "4. Product markup that actually matters" },
    {
      kind: "p",
      text: "Google's merchant listing documentation sets the baseline for product pages. Build markup into the server-rendered HTML rather than injecting it with JavaScript, because Google warns that dynamically generated markup can make Shopping crawls less frequent and less reliable.",
    },
    {
      kind: "table",
      headers: ["Property", "Requirement", "Why it matters"],
      rows: [
        ["`name`, `image`, `offers`", "Required for merchant listings", "`offers` must be a single `Offer`, not an `AggregateOffer`, because the merchant must be the seller."],
        ["`gtin` / `gtin13`", "Recommended", "Use the most specific GTIN, as a number. It links your product to the same product elsewhere. In India, barcodes are issued through GS1 India."],
        ["`brand`, `description`, `color`, `category`", "Recommended", "Lets systems match attribute-level queries."],
        ["`offers.price`, `priceCurrency`, `availability`", "Part of the Offer", "Price and stock must match what the page and checkout show."],
        ["`offers.shippingDetails`", "Supported inside Offer", "Shipping cost and handling and transit time, usually in days (`DAY`)."],
        ["`offers.hasMerchantReturnPolicy`", "Supported inside Offer", "Return window, method and fees, stated once and consistently."],
        ["`aggregateRating`", "Recommended", "Only where genuine reviews are shown on the page."],
        ["`additionalProperty`", "Optional", "Key specifications such as ingredients, dimensions, capacity or material as separate name–value pairs."],
      ],
    },
    {
      kind: "quote",
      text: "Keep the markup honest. Every value in the JSON-LD should be visible on the page and identical to the feed and checkout. Markup that disagrees with the page is worse than none.",
    },

    { kind: "h2", text: "5. Product feeds: Merchant Center and ChatGPT" },
    {
      kind: "p",
      text: "Feeds are how catalogs reach shopping surfaces at scale. Google's surfaces draw on Merchant Center, and UCP is built on existing Merchant Center feeds. OpenAI's product feed specification asks for one row per purchasable item or variant, with nine required basic fields plus target and store country.",
    },
    {
      kind: "ul",
      items: [
        "OpenAI accepts a Google-compatible product data format if it confirms your registered feed supports it, so one well-maintained feed can serve both.",
        "OpenAI asks for an explicit availability value, because `unknown` does not assert that an item is in stock.",
        "Update the feed whenever products, prices or availability change. Commercetools' documentation for its OpenAI module says OpenAI accepts updates every 15 minutes.",
        "Product feed onboarding in ChatGPT is currently available to approved partners, through an application form.",
      ],
    },

    { kind: "h2", text: "6. One source of truth, many outputs" },
    {
      kind: "p",
      text: "Most Indian D2C brands sell on their own site, Amazon, Flipkart and one or more quick-commerce apps. When titles, attributes and prices are maintained separately in each, they drift. The fix is architectural rather than a new tool:",
    },
    {
      kind: "ol",
      items: [
        "**One master record per SKU and variant** in a product information system (a PIM, or a well-governed sheet for smaller catalogs), holding GTIN, attributes, images, compliance details and pricing rules.",
        "**Inventory from the system that actually holds stock** (ERP, WMS or OMS), so availability is never typed by hand.",
        "**Generated outputs**: website JSON-LD, the Merchant Center feed, marketplace listings and any AI feed are all produced from the master record, not edited separately.",
        "**Change-driven updates**: when price or stock changes, push the change to every output rather than waiting for a daily batch.",
      ],
    },
    { kind: "h3", text: "Do you need a headless storefront?" },
    {
      kind: "p",
      text: "Not necessarily. Headless architecture separates the storefront from the commerce back end and can make it easier to serve the same data to many channels. But the essentials, server-rendered markup, an accurate feed and a single product record, are achievable on mainstream platforms, and Shopify already supports UCP. The case for headless rests on scale and engineering capacity, not on AI readiness alone.",
    },

    { kind: "h2", text: "7. The Pexeta catalog playbook" },
    {
      kind: "p",
      text: "This is how we approach catalog readiness with clients. Timelines depend on catalog size and platform.",
    },
    { kind: "h3", text: "Stage 1: Audit" },
    {
      kind: "ul",
      items: [
        "Validate product pages with Google's Rich Results Test and check Merchant Center diagnostics.",
        "Check that markup is server-rendered and that price, stock, shipping and return terms match across page, markup and feed.",
        "List specifications that live only in descriptions and should become separate attributes.",
      ],
    },
    { kind: "h3", text: "Stage 2: Clean the master data" },
    {
      kind: "ul",
      items: [
        "Assign valid GS1 barcodes to every variant and remove duplicate or recycled codes.",
        "Standardise attribute names and values across the website, Amazon, Flipkart and quick-commerce listings.",
      ],
    },
    { kind: "h3", text: "Stage 3: Generate outputs" },
    {
      kind: "ul",
      items: [
        "Produce JSON-LD and the Merchant Center feed from the master record.",
        "If accepted as a partner, produce the OpenAI product feed from the same records.",
        "Track UCP: for Shopify stores, follow the platform's rollout; for others, wait for Merchant Center availability outside the US pilot.",
      ],
    },
    { kind: "h3", text: "Stage 4: Monitor" },
    {
      kind: "ul",
      items: [
        "Watch server logs for the AI crawlers each provider documents, and make sure robots.txt reflects a deliberate decision about each.",
        "Track how often the brand and products appear for a fixed set of shopping prompts in ChatGPT, Gemini and AI Mode, alongside Merchant Center performance.",
      ],
    },

    { kind: "h2", text: "8. Conclusion" },
    {
      kind: "p",
      text: "The protocols around AI shopping are moving quickly. ChatGPT's in-chat checkout was scaled back within six months, and Google's UCP checkout is still a US pilot. What doesn't change is the need for accurate, complete and consistent product data. Brands that maintain one clean product record and generate every channel's output from it will be ready for whichever surfaces win, without rebuilding their catalog each time.",
    },

    {
      kind: "faq",
      items: [
        { q: "Does adding schema markup get my products cited by ChatGPT?", a: "Not on its own. Ahrefs found AI-cited pages are about three times more likely to have JSON-LD, but a controlled test of 1,885 pages that added schema found no measurable change in ChatGPT or Google AI Mode citations. Schema is still needed for Google's merchant listings and keeps facts consistent." },
        { q: "Can customers still buy inside ChatGPT?", a: "OpenAI scaled back Instant Checkout in March 2026. It is letting merchants use their own checkout while ChatGPT focuses on product discovery, and merchants can share product feeds with OpenAI." },
        { q: "What is the Universal Commerce Protocol?", a: "An open standard launched by Google and Shopify on 11 January 2026 for agentic commerce, covering discovery through checkout and orders. Stores declare support at /.well-known/ucp. Merchant Center's UCP integration is currently a US pilot." },
        { q: "Should I add an llms.txt file?", a: "It is optional. Google Search says llms.txt isn't needed for its generative AI features, and Google has said no AI system currently uses it." },
        { q: "Do I need a headless storefront to be ready for AI shopping?", a: "No. Server-rendered product markup, an accurate product feed and one master product record can be achieved on mainstream platforms. Headless is a choice about scale and engineering capacity." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "Ahrefs: We tracked 1,885 pages adding schema. AI citations barely moved (May 2026)", url: "https://ahrefs.com/blog/schema-ai-citations/" },
        { title: "Search Engine Journal: Schema markup didn't move AI citations in Ahrefs test", url: "https://www.searchenginejournal.com/schema-markup-didnt-move-ai-citations-ahrefs-test/574568/" },
        { title: "Semrush: How do technical SEO factors impact AI search?", url: "https://www.semrush.com/blog/technical-seo-impact-on-ai-search-study/" },
        { title: "Search Atlas: The limits of schema markup for AI search", url: "https://searchatlas.com/limits-of-schema-markup-for-ai-search" },
        { title: "Google Search Central: Merchant listing structured data", url: "https://developers.google.com/search/docs/appearance/structured-data/merchant-listing" },
        { title: "OpenAI: Buy it in ChatGPT: Instant Checkout and the Agentic Commerce Protocol (Sept 2025)", url: "https://openai.com/index/buy-it-in-chatgpt/" },
        { title: "Retail Gazette: OpenAI pivots ChatGPT shopping strategy after Instant Checkout underwhelms (Mar 2026)", url: "https://www.retailgazette.co.uk/blog/2026/03/openai-pivots-chatgpt-shopping-strategy-after-instant-checkout-underwhelms/" },
        { title: "Digital Commerce 360: OpenAI shifts checkout plans in its agentic commerce strategy (Mar 2026)", url: "https://www.digitalcommerce360.com/2026/03/06/openai-shifts-checkout-plans-agentic-commerce-strategy/" },
        { title: "Modern Retail: What went wrong with ChatGPT's Instant Checkout (Mar 2026)", url: "https://www.modernretail.co/technology/what-went-wrong-with-chatgpts-instant-checkout/" },
        { title: "OpenAI Developers: Product feed specification", url: "https://developers.openai.com/commerce/product-feeds/spec" },
        { title: "OpenAI Developers: Products file upload reference", url: "https://developers.openai.com/commerce/specs/file-upload/products" },
        { title: "commercetools: Implement the OpenAI module", url: "https://docs.commercetools.com/agentic-commerce/ai-hub/openai/implement-openai-module", note: "Feed update frequency" },
        { title: "Google Developers Blog: Under the hood: Universal Commerce Protocol (11 Jan 2026)", url: "https://developers.googleblog.com/under-the-hood-universal-commerce-protocol-ucp/" },
        { title: "Google for Developers: UCP integration in Merchant Center", url: "https://developers.google.com/merchant/ucp/guides/tools/merchant-center", note: "US pilot merchants only" },
        { title: "Shopify: Universal Commerce Protocol", url: "https://www.shopify.com/ucp" },
        { title: "Google Cloud: Announcing the Agent Payments Protocol (AP2)", url: "https://cloud.google.com/blog/products/ai-machine-learning/announcing-agents-to-payments-ap2-protocol" },
        { title: "Anthropic: Introducing the Model Context Protocol (Nov 2024)", url: "https://anthropic.com/news/model-context-protocol" },
        { title: "Linux Foundation: Formation of the Agentic AI Foundation (Dec 2025)", url: "https://www.linuxfoundation.org/press/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation" },
        { title: "TechCrunch: Google tests buying from Flipkart through Gemini and AI Mode in India (Sept 2026)", url: "https://techcrunch.com/2026/09/26/google-tests-buying-from-walmart-owned-flipkart-through-gemini-and-ai-mode-in-india/" },
        { title: "Search Engine Journal: Google's llms.txt guidance depends on which product you ask", url: "https://www.searchenginejournal.com/googles-llms-txt-guidance-depends-on-which-product-you-ask/575431/" },
        { title: "Search Engine Roundtable: Google says no AI system currently uses llms.txt (Jun 2025)", url: "https://www.seroundtable.com/google-ai-llms-txt-39607.html" },
      ],
    },
  ],
};
