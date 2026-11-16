import type { WhitePaper } from './types';

export const agentEngineOptimizationAmazonGoogleAiMode: WhitePaper = {
  slug: 'agent-engine-optimization-amazon-google-ai-mode',
  title: 'Agent Engine Optimization (AEO): How Amazon’s Shopping AI and Google AI Mode Read Your Catalogue',
  subtitle:
    'What is documented about the way conversational shopping assistants pick products, what is only vendor estimate, and the catalogue work an Indian brand can do now',
  titleTag: 'Agent Engine Optimization (AEO) for Amazon & Google AI Mode | Pexeta White Paper',
  metaDescription:
    'A sourced white paper on Agent Engine Optimization: Amazon Rufus and Alexa for Shopping, the COSMO knowledge graph, Google Merchant Center’s six conversational attributes, AI crawlers and structured data, with a practical checklist for Indian brands.',
  excerpt:
    'Shopping assistants now answer the question before the shopper sees a results grid. This paper separates what Amazon and Google have actually documented from the statistics that circulate in vendor blogs, and turns the documented parts into a catalogue checklist for Indian marketplace and D2C brands.',
  author: 'Balasubramanian VA, Pexeta',
  datePublished: '2026-11-16',
  dateModified: '2026-11-16',
  readMinutes: 12,
  keywords: [
    'agent engine optimization',
    'AEO for ecommerce',
    'Amazon Rufus optimization',
    'Alexa for Shopping',
    'Amazon COSMO',
    'Google AI Mode shopping',
    'Merchant Center conversational attributes',
    'AI crawlers JavaScript',
    'product structured data',
  ],
  body: [
    { kind: 'h2', text: 'Summary' },
    {
      kind: 'p',
      text: 'Our earlier paper, [AI Shopping Assistants and Marketplace Selling in India](/whitepapers/ai-shopping-assistants-marketplace-selling-india), looked at who the assistants are (Rufus, Flipkart’s Flippi, Google’s AI Mode) and what they mean for sellers. This paper goes one layer down. It asks how these systems read a product listing or feed, using only what Amazon and Google have published, and what a brand can change in its catalogue as a result. We call that work Agent Engine Optimization (AEO): preparing product data so that an AI assistant can understand it, trust it and explain it to a shopper.',
    },
    {
      kind: 'ul',
      items: [
        'Amazon says shoppers who use Rufus are 60% more likely to complete a purchase, and that Rufus generates answers from listing details, customer reviews and community Q&A. In the US, Amazon replaced the Rufus brand with Alexa for Shopping on 13 May 2026; Amazon India’s own 2026 shopping guides still refer to Rufus.',
        'Google says AI Mode passed one billion monthly users within about a year of launch, and its Shopping Graph holds more than 60 billion listings. In May 2026 Google added six optional "conversational attributes" to Merchant Center, available in all countries.',
        'Off the marketplaces, the most widely cited crawl study found that the major AI crawlers (OpenAI, Anthropic, Perplexity, Meta, ByteDance) do not execute JavaScript. Facts that appear only after client-side rendering may not be seen by them.',
        'Several numbers in circulation, such as "Rufus handles 14% of Amazon searches", are third-party estimates rather than Amazon disclosures. We flag these and do not build recommendations on them.',
      ],
    },

    { kind: 'h2', text: '1. What changed between keyword search and answer engines' },
    {
      kind: 'p',
      text: 'A keyword search returns a grid and leaves the comparison to the shopper. An assistant takes a goal in plain language ("a water bottle that fits a bike cage and won’t leak in a backpack"), works out the constraints, and replies with a short list and a reason. Google reports that the average AI Mode query is about three times as long as a traditional search query, and that follow-up queries within AI Mode have risen by more than 40% on average in the US. In a study of more than 100,000 identical shopping searches in the US and UK during July 2026, Productrise found that AI Mode surfaced roughly 95% fewer product listings than standard Google results.',
    },
    {
      kind: 'p',
      text: 'The practical consequence is a narrower shelf. When an answer names a handful of products instead of showing forty-eight tiles, a listing that the assistant cannot interpret with confidence is simply left out. That is the problem AEO addresses.',
    },
    {
      kind: 'quote',
      text: 'AEO does not replace marketplace SEO or advertising. Keyword ranking and sponsored placements still exist on both Amazon and Google. AEO is the additional work of making the same catalogue legible to the assistant that now sits in front of them.',
    },

    { kind: 'h2', text: '2. Amazon: Rufus, Alexa for Shopping and the COSMO knowledge graph' },
    { kind: 'h3', text: '2.1 Where things stand in November 2026' },
    {
      kind: 'ul',
      items: [
        'Rufus launched in the US in February 2024 and reached all US customers in July 2024. In India it went into beta on 27–28 August 2024 and is now available to all India customers on the Amazon Shopping app and desktop, according to Amazon India.',
        'Amazon reported that Rufus was used by more than 300 million customers in 2025 and estimated about $12 billion in incremental annualized sales from it.',
        'On 13 May 2026 Amazon announced Alexa for Shopping for US customers on the app, website and Echo Show devices. It replaces the standalone Rufus chat window with an assistant built into the main search bar, results page and product pages, and carries over Rufus’s shopping features.',
        'Amazon India’s Great Indian Festival 2026 and Holi 2026 shopping guides continue to feature Rufus. We have not found an Amazon announcement of Alexa for Shopping for India.',
      ],
    },
    { kind: 'h3', text: '2.2 What Amazon has said about how Rufus answers' },
    {
      kind: 'p',
      text: 'Amazon India describes Rufus as generating answers from listing details, customer reviews and community Q&A, together with relevant information from across Amazon.in and the web. On the technology side, an AWS engineering post (November 2025) says Rufus combines several models on Amazon Bedrock, including Amazon Nova, Anthropic’s Claude Sonnet and Amazon’s own custom model. An earlier AWS post describes the custom model running on AWS Inferentia and Trainium chips, with more than 80,000 of those chips used to serve Prime Day traffic.',
    },
    {
      kind: 'p',
      text: 'For a seller, the first sentence matters more than the second. The inputs Amazon names (the listing, the reviews and the Q&A) are all things a brand writes or can influence. Amazon has not published a ranking formula for Rufus or Alexa for Shopping, and claims about precise "weights" for seller answers, fulfilment method or account health should be treated as unverified.',
    },
    { kind: 'h3', text: '2.3 COSMO: Amazon’s commonsense knowledge graph' },
    {
      kind: 'p',
      text: 'COSMO is the clearest public evidence of how Amazon connects products to the situations in which people use them. Amazon researchers presented it at ACM SIGMOD in June 2024. It uses large language models to propose relationships mined from customer behaviour (for example, linking slip-resistant shoes to pregnant women through a "used for audience" relationship), filters them with human annotation and classifiers, and serves the result as a knowledge graph. The paper reports coverage of 18 major product categories, millions of knowledge assertions generated from about 30,000 annotated instructions, and deployment in Amazon search applications such as search navigation. Amazon’s science blog reports improvements of up to 60% on downstream recommendation tasks in its experiments.',
    },
    {
      kind: 'p',
      text: 'Two cautions. First, Amazon has not said publicly how COSMO feeds Rufus or Alexa for Shopping; many seller blogs describe it as "the brain of Rufus", but that is inference. Second, the 60% figure is an offline experimental result on recommendation tasks, not a sales uplift. What COSMO does show is the direction of travel: Amazon models what a product is for, who it is for and where it is used, not only which words appear in the title.',
    },
    {
      kind: 'table',
      headers: ['', 'Keyword search', 'Conversational assistant'],
      rows: [
        ['Typical input', 'Short keyword string', 'A goal or problem in plain language, often with follow-ups'],
        ['What the system must work out', 'Which listings contain the terms', 'Which products satisfy the stated constraints, and why'],
        ['What the shopper sees', 'A grid of organic and sponsored results', 'A short list with an explanation'],
        ['What the listing must supply', 'Relevant terms in title, bullets and backend fields', 'Explicit facts: use case, audience, compatibility, specifications, limits'],
      ],
    },

    { kind: 'h2', text: '3. Google: AI Mode, the Shopping Graph and conversational attributes' },
    {
      kind: 'p',
      text: 'AI Mode builds shopping answers from Google’s Shopping Graph, which Google says holds more than 60 billion product listings, alongside its web index. Merchants feed the Shopping Graph mainly through Merchant Center and through product structured data on their own pages. Google introduced shopping ads in AI Mode on 11 February 2026.',
    },
    {
      kind: 'p',
      text: 'At Google Marketing Live in May 2026, Google added six optional Merchant Center fields called conversational attributes, designed to help AI Mode, Gemini and Google’s Business Agent answer natural-language product questions. They are available in all countries, do not affect product approval, and Google recommends submitting them through a supplemental data source. Google does not describe them as a ranking factor.',
    },
    {
      kind: 'table',
      headers: ['Attribute', 'What it carries', 'Documented limits'],
      rows: [
        ['question_and_answer', 'Answers to questions shoppers actually ask about the product', 'Up to 30 pairs; 1,000 characters per question and per answer; 10,000 characters in total. No prices, dates, promotions or keyword lists'],
        ['document_link', 'Links to product PDFs: manuals, assembly guides, technical sheets', 'Up to 5 PDFs, 50 MB each; publicly reachable by Googlebot'],
        ['related_product', 'Typed links to other products in your catalogue (accessory, required part, substitute, often bought with, part of set, different brand)', 'Up to 30 relationships, identified by feed id or GTIN'],
        ['item_group_title', 'A clean parent name shared by all variants in a group', 'Up to 150 characters; identical across the group'],
        ['variant_option', 'The axes that separate variants (size, colour, capacity and so on)', 'Name–value pairs; up to 30 pairs and 5,000 characters'],
        ['popularity_rank', 'The product’s sales or performance percentile within your own inventory', 'Decimal from 0 to 100; recalculate regularly'],
      ],
    },
    {
      kind: 'p',
      text: 'For most Indian D2C brands, question_and_answer and item_group_title are the quickest wins. The first lets the brand state, in its own words, the answers to the objections that appear in reviews and return reasons. The second fixes a common problem: feed titles stuffed with modifiers that read badly when an assistant names the product in a sentence.',
    },

    { kind: 'h2', text: '4. The brand website: what AI crawlers can and cannot see' },
    {
      kind: 'p',
      text: 'Assistants that answer from the open web depend on crawlers. A December 2024 analysis by Vercel and MERJ of live crawler traffic found that none of the major AI crawlers it measured rendered JavaScript, including OpenAI’s GPTBot, OAI-SearchBot and ChatGPT-User, Anthropic’s ClaudeBot, PerplexityBot, Meta-ExternalAgent and ByteDance’s Bytespider. GPTBot and ClaudeBot did download JavaScript files (11.5% and 23.8% of their requests respectively) but did not execute them. Googlebot, which serves Gemini and AI Mode, and Applebot did render JavaScript.',
    },
    {
      kind: 'p',
      text: 'The implication is straightforward. If ingredient percentages, size charts, compatibility notes, return terms or FAQs load only through client-side widgets or tabs, a non-rendering crawler receives a page without them. Those facts should be in the HTML the server sends.',
    },
    {
      kind: 'p',
      text: 'One common confusion is worth correcting. Google-Extended is not a crawler; it is a robots.txt control token. Google’s documentation says it governs use of content for Gemini model training and grounding in Gemini Apps and Vertex AI, and that it does not affect inclusion or ranking in Google Search, which includes AI Overviews and AI Mode. Blocking it will not remove a site from AI Mode, and allowing it will not add one.',
    },
    { kind: 'h3', text: 'Structured data that Google documents for product pages' },
    {
      kind: 'p',
      text: 'Google’s merchant listing documentation covers Product and Offer markup for pages where a customer can buy, including price, availability, shipping details and return policy. A store-wide return policy can be set once on the Organization; a product-specific one sits under the Offer. Google notes that return and shipping settings made in Search Console override structured data on the site.',
    },
    {
      kind: 'table',
      headers: ['Markup', 'Key properties', 'Why an assistant needs it'],
      rows: [
        ['Product', 'name, description, image, brand, sku, gtin, material, weight, size', 'Identifies the item unambiguously and states its physical facts'],
        ['Offer', 'price, priceCurrency, availability, itemCondition, url', 'Lets the system confirm the product can be bought, at what price'],
        ['OfferShippingDetails', 'shippingRate, deliveryTime (handling and transit)', 'Answers "will it reach me by Friday?"'],
        ['MerchantReturnPolicy', 'applicableCountry, returnPolicyCategory, merchantReturnDays, returnFees, returnMethod', 'Answers "can I return it, and does it cost anything?"'],
        ['AggregateRating / Review', 'ratingValue, reviewCount', 'Only for genuine on-site reviews, per Google’s review guidelines'],
      ],
    },

    { kind: 'h2', text: '5. What the numbers say, and what they do not' },
    {
      kind: 'table',
      headers: ['Claim', 'Source', 'How to read it'],
      rows: [
        ['Rufus users are 60% more likely to complete a purchase', 'Amazon (AWS blog, Nov 2025)', 'Amazon’s own figure; it compares users with non-users, so it reflects who chooses to use Rufus as well as what Rufus does'],
        ['Rufus used by 300M+ customers in 2025; ~$12B incremental annualized sales', 'Amazon Q4 2025 results', 'Company disclosure, global'],
        ['AI Mode passed 1 billion monthly users', 'Google I/O, May 2026', 'Company disclosure, global'],
        ['AI referrals converted 31% more than other traffic in the 2025 US holiday season', 'Adobe Analytics', 'Covers all generative-AI referrals to US retail sites, not AI Mode specifically, and not India'],
        ['AI Mode showed ~95% fewer listings than standard search', 'Productrise, July 2026', 'Independent tracker; US and UK only'],
        ['Rufus handles ~274M queries a day, ~14% of Amazon searches', 'Third-party estimate (Intentwise and others)', 'Derived from Prime Day chip and token-capacity figures, not reported by Amazon. Do not plan budgets on it'],
      ],
    },
    {
      kind: 'p',
      text: 'There is no published, India-specific data yet on how much marketplace demand flows through Rufus, Flippi or AI Mode. Brands should measure their own exposure rather than borrow US multipliers.',
    },

    { kind: 'h2', text: '6. A practical AEO checklist for Indian brands' },
    { kind: 'h3', text: 'Step 1: Audit completeness and identifiers' },
    {
      kind: 'ul',
      items: [
        'Fill every relevant attribute in Seller Central (and on Flipkart and other marketplaces): target audience, skin or hair type, material, dimensions, weight, compatibility, care instructions, country of origin.',
        'Check that every SKU has a valid GTIN where the category expects one, and that brand, MPN and GTIN match across Amazon, Flipkart, Merchant Center and your own site.',
        'Fetch your product pages without JavaScript (for example with curl or the "view source" view) and confirm the key facts are in the HTML.',
      ],
    },
    { kind: 'h3', text: 'Step 2: Rewrite content as decisions, not adjectives' },
    {
      kind: 'ul',
      items: [
        'Turn each bullet into a fact with a boundary: what it is for, who it suits, what it works with, and what it is not suitable for. "304 stainless steel, safe for citrus water and carbonated drinks; keeps ice for up to 24 hours" is something an assistant can repeat; "premium durable material" is not.',
        'Keep the brand and core product name at the front of the title, then the main use case in plain language. Avoid stacking modifiers.',
        'Use A+ content and site pages for comparison tables, dimension drawings, compatibility charts and care steps, written as text where possible rather than embedded in images.',
      ],
    },
    { kind: 'h3', text: 'Step 3: Answer the questions shoppers are already asking' },
    {
      kind: 'ul',
      items: [
        'Read your recent reviews, return reasons and customer-service tickets. List the recurring questions ("does this work on induction?", "is it safe with retinol?").',
        'Answer each one explicitly in the listing, in the marketplace Q&A where you can respond as the brand, in an on-page FAQ, and in Merchant Center’s question_and_answer attribute.',
        'Add item_group_title, variant_option and related_product to your Merchant Center feed through a supplemental source; upload manuals and spec sheets as PDFs via document_link.',
      ],
    },
    { kind: 'h3', text: 'Step 4: Measure' },
    {
      kind: 'ul',
      items: [
        'Share of recommendation: run a fixed set of category prompts in Rufus, Flippi, AI Mode and ChatGPT every month and record how often your products appear. Stackline uses the same idea at scale; a manual panel of 30–50 prompts is enough to start.',
        'Answer accuracy: check whether the assistant’s description of your product matches your actual claims. Errors usually point to a missing or contradictory fact in the listing.',
        'Traffic and conversion from AI sources: in Google Analytics, track referrals from chatgpt.com, perplexity.ai, gemini.google.com and similar sources as their own channel, alongside your marketplace business reports.',
      ],
    },

    { kind: 'h2', text: '7. What this means for Indian sellers' },
    {
      kind: 'p',
      text: 'None of this requires a new tool or a new budget line. It requires catalogue discipline: complete attributes, consistent identifiers, specific claims, honest answers to common objections, and pages that send their facts in plain HTML. Those changes help human shoppers and keyword search as much as they help assistants. The difference is that an assistant gives an incomplete listing far fewer chances to be seen.',
    },
    {
      kind: 'p',
      text: 'Pexeta works with brands on Amazon, Flipkart, quick commerce and their own stores. If you want a listing and feed audit against the checklist above, [contact us for a free audit](/contact).',
    },

    {
      kind: 'faq',
      items: [
        {
          q: 'What is Agent Engine Optimization (AEO)?',
          a: 'AEO is the work of preparing product listings, feeds and pages so that AI shopping assistants such as Amazon’s Rufus or Alexa for Shopping, Flipkart’s Flippi and Google AI Mode can understand a product, trust its facts and recommend it in a conversational answer.',
        },
        {
          q: 'Has Amazon replaced Rufus with Alexa for Shopping in India?',
          a: 'Amazon announced Alexa for Shopping for US customers on 13 May 2026. Amazon India’s 2026 festive and Holi shopping guides still feature Rufus, and we have not found an announcement of Alexa for Shopping for India.',
        },
        {
          q: 'Do Google’s conversational attributes improve ranking?',
          a: 'Google has not described them as a ranking factor. They are optional fields that help AI Mode, Gemini and Business Agent answer natural-language questions about a product. They do not affect product approval.',
        },
        {
          q: 'Does blocking Google-Extended keep my site out of AI Mode?',
          a: 'No. Google says Google-Extended controls use of content for Gemini training and grounding in Gemini Apps and Vertex AI, and does not affect inclusion in Google Search, which includes AI Overviews and AI Mode.',
        },
        {
          q: 'Do AI crawlers read JavaScript-rendered content?',
          a: 'In the Vercel and MERJ study, the crawlers from OpenAI, Anthropic, Perplexity, Meta and ByteDance did not execute JavaScript. Googlebot and Applebot did. Important product facts should therefore be in the server-rendered HTML.',
        },
      ],
    },

    {
      kind: 'sources',
      items: [
        { title: 'Amazon India – Amazon announces the launch of Rufus in India', url: 'https://www.aboutamazon.in/news/retail/rufus-ai-shopping-assistant-launch-in-india' },
        { title: 'Amazon India – Rufus news tag (Great Indian Festival 2026, Holi 2026 guides)', url: 'https://www.aboutamazon.in/news/tag/rufus' },
        { title: 'AWS Machine Learning Blog – How Rufus scales conversational shopping experiences with Amazon Bedrock (Nov 2025)', url: 'https://aws.amazon.com/blogs/machine-learning/how-rufus-scales-conversational-shopping-experiences-to-millions-of-amazon-customers-with-amazon-bedrock' },
        { title: 'AWS Machine Learning Blog – Scaling Rufus with over 80,000 AWS Inferentia and Trainium chips for Prime Day', url: 'https://aws.amazon.com/blogs/machine-learning/scaling-rufus-the-amazon-generative-ai-powered-conversational-shopping-assistant-with-over-80000-aws-inferentia-and-aws-trainium-chips-for-prime-day' },
        { title: 'PPC Land – Amazon’s AI shopping assistant drove $12 billion in sales for 2025', url: 'https://ppc.land/amazons-ai-shopping-assistant-drove-12-billion-in-sales-for-2025/' },
        { title: 'TechCrunch – Amazon launches an AI shopping assistant for the search bar, powered by Alexa+ (13 May 2026)', url: 'https://techcrunch.com/2026/05/13/amazon-launches-an-ai-shopping-assistant-for-the-search-bar-powered-by-alexa/' },
        { title: 'Amazon Science – Building commonsense knowledge graphs to aid product recommendation', url: 'https://www.amazon.science/blog/building-commonsense-knowledge-graphs-to-aid-product-recommendation' },
        { title: 'Amazon Science – COSMO: A large-scale e-commerce common sense knowledge generation and serving system (SIGMOD 2024)', url: 'https://www.amazon.science/publications/cosmo-a-large-scale-e-commerce-common-sense-knowledge-generation-and-serving-system-at-amazon' },
        { title: 'Search Engine Journal – Google shares first AI Mode usage data', url: 'https://searchenginejournal.com/google-shares-first-ai-mode-usage-data/' },
        { title: 'PPC Land – Google AI Mode hits 1 billion users', url: 'https://ppc.land/google-ai-mode-hits-1-billion-users-how-search-changed-in-one-year/' },
        { title: 'PPC Land – AI Mode (Shopping Graph 60B+ listings; shopping ads from 11 Feb 2026)', url: 'https://ppc.land/ai-mode/' },
        { title: 'PPC Land – AI Mode cuts Google Shopping listings 95%, Productrise finds', url: 'https://ppc.land/ai-mode-cuts-google-shopping-listings-95-productrise-finds/' },
        { title: 'Google Merchant Center Help – Conversational attributes (answer 17085370)', url: 'https://support.google.com/merchants/answer/17085370' },
        { title: 'Dataïads – Google Merchant Center conversational attributes: the 6 fields for AI Mode', url: 'https://www.dataiads.io/en/blog/google-merchant-center-attributs-conversationnels' },
        { title: 'Vercel – The rise of the AI crawler (with MERJ, Dec 2024)', url: 'https://vercel.com/blog/the-rise-of-the-ai-crawler' },
        { title: 'PPC Land – Google-Extended explained', url: 'https://ppc.land/google-extended/' },
        { title: 'Google Search Central – Merchant listing (Product, Offer) structured data', url: 'https://developers.google.com/search/docs/appearance/structured-data/merchant-listing' },
        { title: 'Google Search Central – Merchant return policy structured data', url: 'https://developers.google.com/search/docs/appearance/structured-data/return-policy' },
        { title: 'Adobe – AI-driven traffic surges across industries (2025 holiday season)', url: 'https://business.adobe.com/blog/ai-driven-traffic-surges-across-industries' },
        { title: 'Stackline – Share of recommendation and Rufus question volumes', url: 'https://www.stackline.com/news/rufus-is-gone-what-it-means-and-what-it-doesnt' },
      ],
    },
  ],
};
