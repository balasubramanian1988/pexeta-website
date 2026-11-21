import type { WhitePaper } from "./types";

export const amazonSearchRankingTacosIndia2026: WhitePaper = {
  slug: "amazon-search-ranking-tacos-governance-india-2026",
  title: "Amazon Search Ranking and TACoS Governance in 2026: What Indian Brands Can Actually Control",
  subtitle:
    "What Amazon has said about how search ranks products, what changed with Alexa for Shopping, how to set a TACoS ceiling from your own margins, and how to structure campaigns so ad spend builds the business instead of renting it",
  titleTag: "Amazon Search Ranking & TACoS Governance (2026): A Guide for Indian Brands | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on Amazon search ranking and TACoS in 2026: what Amazon says ranks products, Alexa for Shopping in India, how to set a TACoS ceiling from contribution margin, campaign structure, AMC and off-Amazon traffic.",
  excerpt:
    "Seller blogs are full of \"A10 algorithm\" weightings that Amazon has never published. This paper sticks to what Amazon has said about ranking and its AI shopping assistant, then shows Indian brands how to govern ad spend with TACoS set from their own margins.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-20",
  dateModified: "2026-11-20",
  readMinutes: 14,
  keywords: [
    "amazon tacos",
    "amazon search ranking factors",
    "amazon a10 algorithm",
    "alexa for shopping india",
    "amazon rufus optimization",
    "acos vs tacos",
    "amazon marketing cloud india",
    "amazon ads strategy india",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "Amazon's advertising business keeps growing, and so does the pressure on brands to spend. At the same time, Amazon has replaced Rufus with Alexa for Shopping, an assistant that answers shoppers' questions before they reach a product page. This paper separates what Amazon has said from what the seller industry assumes, and sets out a way to govern ad spend that Indian brands can apply with their own numbers.",
    },
    {
      kind: "ul",
      items: [
        "Amazon reported **$19.64 billion** of advertising services revenue in July–September 2026, up 11% (12% excluding currency effects).",
        "Amazon began rolling out **Alexa for Shopping in India on 12 November 2026**, on select storefronts of the Amazon Shopping app and website. It brings together Rufus's product expertise with Alexa+ personalisation.",
        "Amazon has said that search placement depends on factors **\"such as degree of text match, price, availability, selection, and sales history\"**. It has never published an \"A10\" weighting table; percentage weights in circulation are third-party guesses.",
        "**TACoS** (total ad spend ÷ total sales) shows whether ads are growing the whole business. There is no universal \"healthy\" TACoS: set your ceiling from your own contribution margin.",
        "**Amazon Marketing Cloud** is available as self-service to sponsored ads advertisers in India. **Brand Referral Bonus** has been announced for the US; we found no Amazon announcement for Amazon.in.",
      ],
    },

    { kind: "h2", text: "1. What changed in 2026" },
    { kind: "h3", text: "1.1 Advertising keeps growing" },
    {
      kind: "p",
      text: "Amazon's Q3 2026 earnings release shows advertising services revenue of $19,637 million for the quarter, up from $17,703 million a year earlier. Amazon defines the line as sales of advertising to sellers, vendors, publishers, authors and others, through sponsored ads, display and video. Amazon said Prime Day's move to June shifted ad growth between quarters, and guided to high-teens growth for Q4. For brands, the practical point is simple: Amazon's ad inventory is a fast-growing business, and the auction for it is competitive.",
    },
    { kind: "h3", text: "1.2 Rufus became Alexa for Shopping" },
    {
      kind: "p",
      text: "Amazon retired the Rufus name in the US on 13 May 2026 and launched Alexa for Shopping, built into the search bar, results and product pages. On 12 November 2026 Amazon India announced the rollout of Alexa for Shopping on select storefronts of its app and website. Amazon India lists AI overviews at the top of search results and on product pages, side-by-side comparisons of features, prices and review highlights, price history, deal alerts and scheduled restocking actions.",
    },
    {
      kind: "p",
      text: "The scale is significant. Amazon said more than 300 million customers used Rufus in 2025, driving nearly $12 billion of incremental annualised sales. On its Q3 2026 call, Amazon said over 400 million customers had used Alexa for Shopping in the previous 12 months.",
    },
    { kind: "h3", text: "1.3 Ads moved into the assistant" },
    {
      kind: "p",
      text: "In the US, Amazon has added ads inside the assistant, including **sponsored prompts**, short brand-related questions shown during conversations. Industry reports say these moved to general availability with cost-per-click billing in March 2026, and that they deliver much less traffic than standard sponsored ads at a lower cost. We have not found an Amazon announcement of sponsored prompts for Amazon.in.",
    },

    { kind: "h2", text: "2. How Amazon search ranks products: what is actually known" },
    {
      kind: "p",
      text: "Amazon's Seller Central guidance says that factors such as degree of text match, price, availability, selection and sales history help determine where a product appears in search results. Amazon also matches searches against the information a seller provides: title, bullets, description and backend search terms.",
    },
    {
      kind: "p",
      text: "\"A9\" is the name of Amazon's former search technology subsidiary. **\"A10\" and \"A10+\" are industry labels, not Amazon terms**; Amazon has not announced an A10 update. Tables that assign percentage weights to signals such as organic sales, ad sales, sentiment or external traffic are not based on Amazon disclosures, and we don't use them.",
    },
    {
      kind: "p",
      text: "What brands can act on is the list Amazon has given, plus what it has said its assistant reads:",
    },
    {
      kind: "table",
      headers: ["Factor Amazon names", "What a brand controls"],
      rows: [
        ["Text match", "Titles, bullets, descriptions, attributes and backend search terms that use the words shoppers search for"],
        ["Price", "Price relative to comparable products, and avoiding price spikes that lose the featured offer"],
        ["Availability", "Staying in stock at fulfilment centres; stockouts cut sales and therefore sales history"],
        ["Selection", "Variations and pack sizes that match what shoppers look for"],
        ["Sales history", "Sales from all sources, paid and organic; ads can help build it, but only if the listing converts"],
        ["Assistant answers", "Amazon says its assistant draws on product information, reviews and other sources, so complete attributes and genuine reviews matter"],
      ],
    },
    {
      kind: "p",
      text: "Because sales history is a factor and ads generate sales, ad spend can support organic rank. Whether it does in your category is something to measure, not assume: track organic rank and organic sales for your main keywords while you change spend.",
    },

    { kind: "h2", text: "3. From ROAS to TACoS" },
    { kind: "h3", text: "3.1 Three ratios, three questions" },
    {
      kind: "table",
      headers: ["Metric", "Formula", "What it tells you"],
      rows: [
        ["ROAS", "Ad-attributed sales ÷ ad spend", "How much attributed revenue each rupee of ads returns"],
        ["ACoS", "Ad spend ÷ ad-attributed sales", "The inverse of ROAS: cost of ads as a share of attributed sales"],
        ["TACoS", "Ad spend ÷ total sales (paid + organic)", "How much the whole business depends on ads"],
      ],
    },
    {
      kind: "p",
      text: "ROAS and ACoS only look at sales that Amazon attributes to ads. If a campaign buys clicks on your own brand name, it can show a high ROAS while mostly capturing shoppers who would have bought anyway. TACoS adds the organic sales back in, so it shows whether ads are adding to the business or replacing sales you already had. See our guide to [ACoS vs TACoS](/blog/acos-vs-tacos-amazon-india).",
    },
    { kind: "h3", text: "3.2 Reading TACoS with sales" },
    {
      kind: "p",
      text: "TACoS on its own can mislead; read it alongside total sales over the same period:",
    },
    {
      kind: "table",
      headers: ["Pattern", "Total sales", "TACoS", "Likely meaning"],
      rows: [
        ["Healthy scale", "Rising", "Steady or falling", "Organic sales are growing alongside ads"],
        ["Launch investment", "Rising fast", "High", "Expected for new products while reviews and sales history build; set a time limit"],
        ["Ad dependence", "Flat", "Rising", "More spend is needed to hold the same sales; check organic rank, price and listing quality"],
        ["Decline", "Falling", "Rising", "Check stock, price competitiveness, reviews and suppressed listings before adding spend"],
      ],
    },
    { kind: "h3", text: "3.3 Set your TACoS ceiling from your margins" },
    {
      kind: "p",
      text: "There is no single right TACoS for every brand; benchmarks quoted in reports differ by category and source. The useful number is your own ceiling: the most you can spend on ads, as a share of total sales, and still hit your profit target.",
    },
    {
      kind: "p",
      text: "**TACoS ceiling = contribution margin before ads − target profit margin** (both as % of total sales).",
    },
    {
      kind: "p",
      text: "Illustrative example: a brand sells ₹10 lakh a month on Amazon. After product cost, Amazon fees, shipping and returns, its contribution before ads is ₹2.5 lakh, or 25% of sales. It wants to keep 10% (₹1 lakh) as profit. Its TACoS ceiling is 25% − 10% = **15%**, or ₹1.5 lakh of ad spend a month. If spend rises to ₹2 lakh while sales stay at ₹10 lakh, TACoS is 20% and profit falls to ₹50,000. Replace the figures with your own.",
    },
    {
      kind: "p",
      text: "Amazon India's 2026 cuts to referral fees on many lower-priced products change contribution margins, so recalculate the ceiling for each SKU whenever fees change. Our [MER white paper](/whitepapers/cac-squeeze-marketing-efficiency-ratio-india) applies the same logic across all marketing channels.",
    },

    { kind: "h2", text: "4. Listings for search and for the assistant" },
    {
      kind: "p",
      text: "The same listing now serves two readers: keyword search and Amazon's AI assistant. Our [Agent Engine Optimization paper](/whitepapers/agent-engine-optimization-amazon-google-ai-mode) covers the assistant side in depth. The essentials:",
    },
    {
      kind: "ul",
      items: [
        "**Titles and bullets:** lead with what the product is, then the attributes shoppers ask about (size, material, compatibility, use case). Write bullets as clear answers, not keyword lists. See [listing SEO](/blog/amazon-listing-seo-india-keywords-titles).",
        "**Backend search terms:** Amazon.in limits generic keywords to **200 bytes**. Use the space for synonyms and Indian-language spellings not already in the visible listing.",
        "**Attributes:** fill every relevant attribute field. Comparisons and overviews can only use information the catalogue holds.",
        "**A+ content and comparison charts:** use them to state facts plainly, such as dimensions, ingredients and differences between your own variants. See [A+ content](/blog/amazon-brand-registry-a-plus-content-india).",
        "**Reviews:** Amazon India says Alexa for Shopping comparisons draw on review highlights. Fix the product or packaging problems behind recurring complaints; never incentivise or manipulate reviews, which breaks Amazon policy and India's consumer protection guidelines.",
        "**Customer questions:** Amazon says its assistant draws on community Q&A. In the US, Amazon has moved the browsable Q&A block off the main product page, but answers are still read. Answer real questions accurately.",
      ],
    },

    { kind: "h2", text: "5. Campaign architecture" },
    {
      kind: "p",
      text: "Structure campaigns so that reporting answers the TACoS question: which spend brings new customers and which only defends sales you'd make anyway. See our [Sponsored Products, Brands and Display guide](/blog/amazon-sponsored-products-brands-display-guide).",
    },
    {
      kind: "table",
      headers: ["Layer", "Role", "How to judge it"],
      rows: [
        ["Branded search", "Defend your own brand terms against competitors", "Keep separate; expect high ROAS and don't treat it as growth"],
        ["Core generic search", "Win category searches where you can convert", "Organic rank and new-to-brand sales on those terms"],
        ["Long-tail and specific queries", "Capture specific, high-intent searches at lower cost", "Conversion rate and contribution after ads"],
        ["Competitor targeting", "Appear on comparable products where you have a clear advantage", "Conversion rate; cut quickly if low"],
        ["Auto and broad discovery", "Find new search terms", "Move converting terms into exact-match campaigns"],
        ["Sponsored Brands and video", "Brand awareness and multi-product consideration", "New-to-brand metrics and branded search growth"],
        ["Sponsored Display and DSP", "Retargeting and audience reach", "Incremental sales measured in AMC, not last-click ROAS"],
      ],
    },
    { kind: "h3", text: "5.1 Amazon Marketing Cloud" },
    {
      kind: "p",
      text: "Amazon Marketing Cloud (AMC) is a privacy-safe clean room where advertisers query pseudonymised ad and shopping signals with SQL. Amazon lists India among the marketplaces where sponsored ads advertisers get self-service AMC access directly in their ads account. Useful AMC analyses for TACoS governance include how much of a campaign's sales come from new-to-brand customers, the path from upper-funnel ads to purchase, and audiences of past buyers for repeat-purchase campaigns.",
    },
    { kind: "h3", text: "5.2 Bids, budgets and stock" },
    {
      kind: "p",
      text: "Pause or lower bids on SKUs that are low on stock, adjust bids by hour where conversion varies through the day (see [dayparting](/blog/amazon-ads-dayparting-india)), and pace monthly spend against the TACoS ceiling rather than a fixed ROAS target.",
    },

    { kind: "h2", text: "6. Off-Amazon traffic" },
    {
      kind: "p",
      text: "External traffic from Google, Meta, influencers or your own site adds sales and therefore sales history. Amazon Attribution tags let you measure which external campaigns drove Amazon sales.",
    },
    {
      kind: "p",
      text: "**Brand Referral Bonus** credits brand owners, on average, about 10% of qualifying sales from external traffic, against future referral fees. Amazon's announcements describe it for US seller brand owners. We found no Amazon announcement of Brand Referral Bonus for Amazon.in, so Indian brands shouldn't build budgets around it. Check Seller Central for your marketplace before planning.",
    },

    { kind: "h2", text: "7. The Pexeta approach" },
    { kind: "h3", text: "Phase 1: Listing and catalogue audit" },
    {
      kind: "p",
      text: "We compare each priority listing with the top competitors for its main searches: titles, bullets, attributes, images, A+ content, reviews and backend terms within the 200-byte limit. We fix gaps before adding spend.",
    },
    { kind: "h3", text: "Phase 2: Margin model and TACoS ceiling" },
    {
      kind: "p",
      text: "We calculate contribution before ads for every SKU using current Amazon fees, then set a TACoS ceiling per SKU and for the account.",
    },
    { kind: "h3", text: "Phase 3: Campaign restructure" },
    {
      kind: "p",
      text: "We separate branded and non-branded spend, build exact-match campaigns for proven terms, keep discovery campaigns for new terms, and use competitor targeting only where the product has a clear advantage.",
    },
    { kind: "h3", text: "Phase 4: Measurement and guardrails" },
    {
      kind: "p",
      text: "Each month we review total sales, TACoS, organic rank for core keywords and new-to-brand sales, using AMC where available. Bids and budgets are adjusted for stock levels, time of day and pacing against the TACoS ceiling.",
    },

    {
      kind: "faq",
      items: [
        { q: "What is the Amazon A10 algorithm?", a: "\"A10\" is an industry label, not an Amazon name. Amazon says search placement depends on factors such as degree of text match, price, availability, selection and sales history. It has not published ranking weights." },
        { q: "What is a good TACoS on Amazon India?", a: "There is no universal figure. Set your ceiling as your contribution margin before ads minus your target profit margin. A brand with 25% contribution and a 10% profit target can spend up to 15% of total sales on ads." },
        { q: "What is the difference between ACoS and TACoS?", a: "ACoS divides ad spend by sales Amazon attributes to ads. TACoS divides ad spend by total sales, including organic, so it shows how dependent the whole business is on advertising." },
        { q: "Is Rufus still available in India?", a: "Amazon India began rolling out Alexa for Shopping on 12 November 2026 on select storefronts. Amazon describes it as bringing together Rufus's product expertise with Alexa+ personalisation." },
        { q: "Can Indian advertisers use Amazon Marketing Cloud?", a: "Yes. Amazon lists India among the marketplaces where sponsored ads advertisers have self-service AMC access in their ads account." },
        { q: "Is Brand Referral Bonus available on Amazon.in?", a: "Amazon's announcements describe Brand Referral Bonus for US seller brand owners. We found no Amazon announcement for Amazon.in; check Seller Central for your marketplace." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "PPC Land: Amazon ad revenue growth drops to 11% after Prime Day moves to June", url: "https://ppc.land/amazon-ad-revenue-growth-drops-to-11-after-prime-day-moves-to-june/", note: "Q3 2026 advertising services revenue $19,637 million vs $17,703 million; Amazon's definition of the line" },
        { title: "Zacks: Amazon Q3 revenues miss estimates", url: "https://www.zacks.com/stock/news/3019798/amazon-q3-revenues-miss-estimates,-aws-growth-hits-near-5-year-high", note: "Ad revenue +11% (12% ex-FX); Prime Day timing effect" },
        { title: "Amazon India: Meet Alexa for Shopping (12 Nov 2026)", url: "https://www.aboutamazon.in/news/retail/alexa-for-shopping-amazon-india", note: "India rollout on select storefronts; features; review highlights in comparisons" },
        { title: "Modern Retail: More than 400M customers have used Alexa for Shopping", url: "https://www.modernretail.co/technology/amazon-says-more-than-400m-customers-have-used-alexa-for-shopping-in-the-last-12-months/", note: "Q3 2026 call; Rufus rebranded to Alexa for Shopping in May 2026" },
        { title: "PPC Land: Amazon's AI shopping assistant drove $12 billion in sales for 2025", url: "https://ppc.land/amazons-ai-shopping-assistant-drove-12-billion-in-sales-for-2025/", note: "300 million+ Rufus users in 2025; nearly $12bn incremental annualised sales" },
        { title: "Amazon India: Rufus launch in India", url: "https://aboutamazon.in/news/retail/rufus-ai-shopping-assistant-launch-in-india", note: "Rufus answers from listing details, customer reviews and community Q&A" },
        { title: "Novadata: Rufus sponsored prompts go paid", url: "https://novadata.io/resources/news/amazon-rufus-sponsored-prompts-cpc-billing-march-2026", note: "General availability with CPC billing, 25 March 2026 (US)" },
        { title: "eMarketer: Rufus ads open a window into Amazon's AI", url: "https://www.emarketer.com/content/rufus-ads-open-window-amazon-s-ai-while-missing-some-shoppers", note: "Sponsored prompts deliver a fraction of standard ad volume" },
        { title: "Search Engine Land: Amazon's A9 product ranking algorithm", url: "https://searchengineland.com/amazons-a9-product-ranking-algorithm-beginners-guide-329801", note: "Quotes Seller Central: text match, price, availability, selection and sales history" },
        { title: "Seller Labs: Understanding the A10 algorithm", url: "https://www.sellerlabs.com/blog/understanding-amazon-a10-algorithm/", note: "Industry discussion of \"A10\"; no official Amazon update" },
        { title: "Canopy Management: Amazon buried your Q&A section", url: "https://canopymanagement.com/amazon-qa-optimization-in-the-age-of-generative-search/", note: "Q&A moved off the main product page (US); assistant still reads it" },
        { title: "Amazon Ads: Direct access to AMC for sponsored ads advertisers", url: "https://advertising.amazon.com/en-gb/resources/whats-new/direct-access-to-amc-for-sponsored-ads-advertiser", note: "Self-service AMC access; India listed" },
        { title: "Amazon Ads: AMC eligibility expanded to sponsored ads advertisers", url: "https://advertising.amazon.com/en-us/resources/whats-new/expanding-amc-eligibility-to-advertisers-and-partners/", note: "What AMC is: privacy-safe clean room" },
        { title: "Amazon Ads: Brand Referral Bonus in Amazon Attribution reporting", url: "https://advertising.amazon.com/en-ca/resources/whats-new/brand-referral-bonus-amazon-attribution", note: "Average 10% of qualifying sales; US seller brand owners" },
        { title: "Marketplace Pulse: Amazon will pay brands to drive traffic to Amazon", url: "https://www.marketplacepulse.com/articles/amazon-will-pay-brands-to-drive-traffic-to-amazon", note: "Bonus credited against future fees" },
        { title: "Amazon India: Zero referral fees on over 12.5 crore products (2 Mar 2026)", url: "https://press.aboutamazon.com/in/2026/3/amazon-announces-zero-referral-fees-on-over-12-5-crore-products-sellers-to-save-up-to-70-in-fees", note: "Fee changes that affect contribution margins" },
      ],
    },
  ],
};
