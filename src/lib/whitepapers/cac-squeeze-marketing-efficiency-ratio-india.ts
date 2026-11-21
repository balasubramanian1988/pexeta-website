import type { WhitePaper } from "./types";

export const cacSqueezeMarketingEfficiencyRatioIndia: WhitePaper = {
  slug: "cac-squeeze-marketing-efficiency-ratio-india",
  title: "The CAC Squeeze and the Case for MER: Measuring Marketing on the P&L, Not the Ads Dashboard",
  subtitle:
    "What the evidence says about rising acquisition costs and platform attribution, how to set a break-even and target MER from contribution margin, and how Indian brands can balance marketplace ads, retail media and owned channels",
  titleTag: "Marketing Efficiency Ratio (MER) vs ROAS: Break-Even MER & the CAC Squeeze | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on why platform-reported ROAS can't be added up, how to calculate break-even and target MER from contribution margin, CM1 vs CM2, the growth of retail media in India, and a 90-day plan for brands.",
  excerpt:
    "Every ad platform claims credit for the same sale, so the dashboards add up to more revenue than the bank account shows. This paper explains the Marketing Efficiency Ratio, works through the break-even maths with rupee examples, and separates what is documented about CAC, retail media and email from the numbers that only circulate in vendor blogs.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-18",
  dateModified: "2026-11-18",
  readMinutes: 13,
  keywords: [
    "marketing efficiency ratio",
    "MER vs ROAS",
    "break-even MER",
    "blended ROAS",
    "contribution margin CM1 CM2",
    "customer acquisition cost rising",
    "retail media India",
    "incrementality testing",
    "LTV to CAC ratio",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "Most brands still judge marketing by the return on ad spend (ROAS) that each platform reports. Each platform grades its own work, and several can claim the same order, so the reported numbers can't simply be added together. The Marketing Efficiency Ratio (MER) sidesteps this by dividing total revenue by total marketing spend, both taken from the brand's own books. MER only becomes useful once it is compared with a break-even level set by the brand's contribution margin. This paper explains that maths, looks at where acquisition spend is moving in India, and sets out a 90-day plan.",
    },
    {
      kind: "ul",
      items: [
        "The often-repeated claim that customer acquisition costs (CAC) rose about 60% comes from a 2022 SimplicityDX release citing industry estimates for the previous five years. It is not a 2026 measurement, and we found no comparable figure for India.",
        "Platform-reported ROAS and incremental return can differ sharply by channel. In a Q1 2026 benchmark of 299 DTC brands, Common Thread Collective estimated that Google brand search reported 19.07x ROAS but delivered about 5.72x incrementally, while Meta acquisition campaigns were under-reported (1.83x reported, about 2.07x incremental).",
        "Break-even MER is 1 ÷ contribution margin before marketing. A brand with a 25% margin needs 4.0x just to break even; one with a 65% margin breaks even at about 1.5x. A single \"good MER\" benchmark is therefore meaningless.",
        "In India, the dentsu–exchange4media Digital Advertising Report 2026 estimates that ad spend on e-retail platforms rose 55.86% in 2025, from ₹11,293 crore to ₹17,601 crore. Marketplace and quick-commerce ads belong inside MER, not beside it.",
        "Owned channels are where repeat revenue becomes cheap. Klaviyo's 2026 benchmarks show automated email flows generate nearly 41% of email revenue from 5.3% of sends.",
      ],
    },

    { kind: "h2", text: "1. Why acquisition got more expensive" },
    {
      kind: "p",
      text: "Two forces have pushed the cost of winning a new customer up. The first is competition for the same ad inventory. The second is weaker measurement: Apple's App Tracking Transparency, the decline of third-party cookies and stricter privacy rules mean platforms see fewer purchases directly and model more of them.",
    },
    {
      kind: "p",
      text: "The most widely quoted figure needs context. In July 2022 SimplicityDX reported that merchants were losing $29 on average for every new customer acquired, against $9 in 2013, and that acquisition costs had risen by as much as 60% in the previous five years according to industry estimates. It named iOS 14.5, the decline of third-party cookies and privacy laws such as CCPA and GDPR as contributors. That is a useful direction of travel, but it is a four-year-old US estimate, not a current Indian benchmark.",
    },
    {
      kind: "p",
      text: "More recent evidence of the squeeze comes from Europe. The E-commerce Monitor 2026, a study of 525 Dutch webshops published in March 2026, found that the share reporting strong revenue growth fell from 19% in 2025 to 12% in 2026, and the share with declining revenue rose from 17% to 21%. Its authors concluded that the era of automatic growth seems over and that retention had become the top growth strategy.",
    },
    {
      kind: "quote",
      text: "We have not found a published, methodologically clear CAC trend for Indian D2C or marketplace brands. The practical answer is to measure your own: track blended CAC (total marketing spend ÷ new customers) monthly from your own books, and compare it with the same month last year.",
    },

    { kind: "h2", text: "2. Why platform ROAS can't be added up" },
    {
      kind: "p",
      text: "ROAS as reported inside Meta Ads Manager, Google Ads or Amazon Ads is each platform's own estimate of the revenue its ads caused. Three things make those numbers unsuitable for adding together:",
    },
    {
      kind: "ol",
      items: [
        "**Overlapping credit.** A shopper may see an Instagram ad, click a Google Shopping ad later in the week and finally buy after an abandoned-cart email. Each platform's attribution window can count the same order, so the reported totals exceed the actual sales.",
        "**Self-grading.** Each platform measures its own performance with its own models, including modelled conversions that can't be matched to a known buyer.",
        "**Signal loss.** With less deterministic tracking, more of every report is an estimate.",
      ],
    },
    {
      kind: "p",
      text: "The size of the gap varies by channel, and it doesn't always run the same way. Common Thread Collective's Q1 2026 benchmark covers 299 DTC brands, $1.01 billion in revenue and $231 million in paid media. It applies incrementality factors from its own geo-holdout tests and media-mix models to platform-reported ROAS:",
    },
    {
      kind: "table",
      headers: ["Channel", "Platform-reported ROAS", "Incrementality factor", "Estimated incremental ROAS"],
      rows: [
        ["Google brand search", "19.07x", "0.30", "5.72x"],
        ["Google non-brand (incl. Shopping, PMax)", "9.30x", "0.75", "6.97x"],
        ["Meta retargeting / non-acquisition", "5.88x", "0.60", "3.53x"],
        ["Meta acquisition", "1.83x", "1.13", "2.07x"],
        ["TikTok", "4.50x", "0.80", "3.60x"],
        ["YouTube", "1.86x", "1.10", "2.04x"],
      ],
    },
    {
      kind: "p",
      text: "Two lessons follow. Branded search and retargeting tend to claim sales that would have happened anyway. Prospecting on Meta or YouTube can be worth more than its dashboard suggests. Note that these factors are proprietary to an agency that sells measurement services and can't be independently checked; we use them to show the pattern, not as numbers to plug into your plan.",
    },
    {
      kind: "p",
      text: "You will also see claims that platform ROAS overstates true return by \"2.3x\". The figures we could trace come from agencies' own client samples, not from independent studies, so we don't rely on them.",
    },

    { kind: "h2", text: "3. MER: the number that comes from your books" },
    {
      kind: "p",
      text: "The Marketing Efficiency Ratio, also called blended ROAS, is:",
    },
    {
      kind: "quote",
      text: "**MER = Net revenue ÷ Total marketing spend**",
    },
    {
      kind: "p",
      text: "Both numbers come from your own accounts, so no platform can inflate them. Two definitions matter:",
    },
    {
      kind: "ul",
      items: [
        "**Net revenue:** sales after returns and cancellations, excluding GST. For marketplace sales, use what the customer paid, net of GST, and treat marketplace fees as a variable cost (below), not as a deduction from revenue.",
        "**Total marketing spend:** every rupee of paid media (Meta, Google, Amazon Ads, Flipkart Ads, quick-commerce ads, influencer fees), plus agency fees, creative production and marketing software. Some benchmarks count paid media only; whichever you choose, keep it the same every month so the trend is comparable.",
      ],
    },
    {
      kind: "p",
      text: "MER has a limit: it tells you whether marketing as a whole is paying off, not which channel deserves the next rupee. Use it for the overall budget decision and incrementality tests (section 6) for channel decisions.",
    },

    { kind: "h3", text: "3.1 Break-even and target MER" },
    {
      kind: "p",
      text: "MER means nothing without your margin. Start with **contribution margin before marketing**: net revenue minus product cost, packaging, shipping and fulfilment, payment-gateway or marketplace fees, and the cost of returns, expressed as a percentage of net revenue. Then:",
    },
    {
      kind: "ul",
      items: [
        "**Break-even MER = 1 ÷ contribution margin %.** At this MER, marketing consumes all of the contribution and you earn nothing towards overheads.",
        "**Target MER = 1 ÷ (contribution margin % − target profit %).** This leaves the profit you want after marketing.",
      ],
    },
    {
      kind: "table",
      headers: ["Contribution margin before marketing", "Break-even MER", "Target profit after marketing", "Target MER"],
      rows: [
        ["25% (e.g. electronics, commodities)", "4.00x", "10%", "6.67x"],
        ["45% (e.g. apparel)", "2.22x", "12%", "3.03x"],
        ["55%", "1.82x", "15%", "2.50x"],
        ["65% (e.g. beauty, supplements)", "1.54x", "15%", "2.00x"],
      ],
    },
    {
      kind: "p",
      text: "**A rupee example.** A brand sells ₹1 crore a month, net of GST and returns, with a 45% contribution margin before marketing (₹45 lakh). It spends ₹33.3 lakh on marketing, an MER of 3.0x. Contribution after marketing is ₹45 lakh − ₹33.3 lakh = ₹11.7 lakh, or 11.7% of revenue. If the same brand's margin were 25%, the same 3.0x MER would mean a loss of ₹8.3 lakh a month. The marketing performance is identical; the margin decides the outcome.",
    },
    {
      kind: "p",
      text: "This is why improving margin is often worth more than improving ads. Lifting contribution margin from 45% to 50% lowers break-even MER from 2.22x to 2.00x, so every campaign clears the bar more easily. For marketplace sellers, the fee and fulfilment lines usually decide the margin; see our guides to [Amazon India seller fees](/blog/amazon-india-seller-fees-2026) and [profit per unit](/blog/amazon-india-profit-per-unit-calculation).",
    },

    { kind: "h3", text: "3.2 CM1 and CM2: don't let repeat customers hide costly acquisition" },
    {
      kind: "p",
      text: "A healthy overall MER can hide the fact that new customers are being bought at a loss, because cheap repeat orders prop up the average. Track two layers:",
    },
    {
      kind: "ul",
      items: [
        "**CM1, first-order contribution:** revenue from new customers' first orders, minus their product, fulfilment and fee costs, minus the marketing spent to acquire them. It shows whether a new customer pays for their own acquisition on day one, or how far short they fall.",
        "**CM2, blended contribution:** all revenue minus all variable costs and all marketing. This is what funds salaries, rent and profit.",
      ],
    },
    {
      kind: "p",
      text: "A negative CM1 can be a sound choice if repeat purchases recover it quickly. That is a decision to make deliberately, with the payback period in view (section 5), not one to discover at year end.",
    },

    { kind: "h2", text: "4. Where the money is moving: retail media" },
    {
      kind: "p",
      text: "Retail media means ads sold by the stores themselves: Amazon, Flipkart, Blinkit, Zepto, Instamart and their peers. It has become the fastest-growing part of advertising, worldwide and in India.",
    },
    {
      kind: "ul",
      items: [
        "**Global:** WARC Media estimated worldwide retail media spend at $174.9 billion for 2025, up 13.7%, and forecast $196.7 billion in 2026, about 16% of all ad spend, overtaking combined linear and connected TV spend that year. It also noted that growth is slowing.",
        "**United States:** EMARKETER estimates US retail media spend of $60.32 billion in 2025 and forecasts $71.09 billion in 2026 (December 2025 forecast). Amazon Ads held 79.7% of the US market in 2025. An earlier forecast found that $9.42 billion of the $10.53 billion of new 2026 spending would go to Amazon and Walmart.",
        "**India:** the dentsu–exchange4media Digital Advertising Report 2026 puts ad spend on e-retail platforms at ₹17,601 crore in 2025, up 55.86% from ₹11,293 crore. Mint reported that Amazon's Indian ads and allied services revenue crossed ₹8,000 crore in FY25 and Flipkart's crossed ₹6,000 crore. Pitch Madison estimates quick-commerce advertising rose from about ₹300 crore in 2023 to about ₹4,000 crore in 2025.",
      ],
    },
    {
      kind: "p",
      text: "For an Indian brand selling on marketplaces, this matters in two ways. First, marketplace ads are now a large share of the marketing budget, so MER must include them; a brand that tracks only Meta and Google is measuring part of the picture. Second, retail media is measured by the store that sells the product, which is close to the purchase but is still the platform grading itself. The same caution from section 2 applies.",
    },
    {
      kind: "p",
      text: "Marketplaces and your own website do different jobs. On a marketplace, the shopper is already looking to buy, but the platform keeps the customer relationship. On your own site, you keep the customer's contact details and can sell to them again without paying for another ad. Most brands need both, with the marketplace for discovery and volume, and the owned channel for repeat purchase.",
    },

    { kind: "h2", text: "5. Owned channels and the LTV:CAC check" },
    {
      kind: "p",
      text: "A customer you can contact directly is cheaper to sell to again. On D2C websites, automated email is the best-documented example. Klaviyo's 2026 benchmarks, based on more than 183,000 brands, show that email flows such as welcome, browse-abandonment, cart-abandonment and post-purchase sequences produce nearly 41% of email revenue from just 5.3% of sends, with revenue per recipient nearly 18 times that of one-off campaigns.",
    },
    {
      kind: "p",
      text: "The figure most often quoted for email, $36 returned per $1 spent, comes from Litmus surveys of marketers. It is self-reported and its denominator is mostly software cost, so treat it as evidence that email is efficient, not as a forecast for your brand.",
    },
    {
      kind: "p",
      text: "To judge whether acquisition is affordable, compare lifetime value with acquisition cost. Shopify says e-commerce businesses typically see LTV:CAC ratios between 3:1 and 4:1, and that 2:1 or less may mean a business is close to break-even. Two cautions:",
    },
    {
      kind: "ul",
      items: [
        "**Use margin, not revenue.** An LTV built on revenue looks far better than one built on contribution margin. Say which one you mean.",
        "**Watch the payback period.** A 3:1 ratio that takes 18 months to earn back can run a brand out of cash; a lower ratio that pays back in three months may fund itself.",
      ],
    },

    { kind: "h2", text: "6. Testing what actually works: incrementality" },
    {
      kind: "p",
      text: "MER tells you whether marketing as a whole works. To decide where the next rupee goes, test whether a channel adds sales that wouldn't have happened anyway:",
    },
    {
      kind: "ul",
      items: [
        "**Branded search pause test.** Pause or sharply cut bids on your own brand name for two to four weeks and watch total sales from search. If total sales barely move, much of that spend was buying customers who were already coming.",
        "**Geo holdout.** Switch a channel off in a set of comparable cities or pin codes and compare their sales with the rest.",
        "**Retargeting caps.** Retargeting often looks best on the dashboard and adds least in tests. Cap frequency and spend, and measure the effect on total sales.",
      ],
    },
    {
      kind: "quote",
      text: "Run one test at a time, keep it long enough to cover a full buying cycle, and judge it on total sales and MER from your own books, not on the platform's report.",
    },

    { kind: "h2", text: "7. A 90-day plan" },
    { kind: "h3", text: "Days 1–30: get the numbers right" },
    {
      kind: "ul",
      items: [
        "Build a monthly P&L by channel (website, Amazon, Flipkart, quick commerce) with product cost, packaging, shipping, fees, returns and GST separated.",
        "Calculate contribution margin before marketing for each channel, then break-even and target MER.",
        "List every marketing cost (media, agency, creative, tools) in one sheet and calculate monthly MER and blended CAC for the last 12 months.",
        "Split new-customer revenue from repeat revenue and calculate CM1.",
      ],
    },
    { kind: "h3", text: "Days 31–60: test and reallocate" },
    {
      kind: "ul",
      items: [
        "Run a branded-search pause test or a geo holdout on your largest channel.",
        "Cut spend that fails the test and move it to channels that pass, including marketplace and quick-commerce ads where your products sell well.",
        "Review MER and CM1 weekly, with finance and marketing looking at the same sheet.",
      ],
    },
    { kind: "h3", text: "Days 61–90: build repeat revenue" },
    {
      kind: "ul",
      items: [
        "On your own website, collect email and phone consent at sign-up and checkout.",
        "Set up the core automated flows: welcome, browse abandonment, cart abandonment, post-purchase, replenishment and win-back.",
        "Track repeat-purchase rate and payback period by monthly customer cohort.",
      ],
    },

    { kind: "h2", text: "8. How this shapes the way Pexeta works" },
    {
      kind: "p",
      text: "Paying an agency a percentage of ad spend rewards spending more, whether or not the extra spend is profitable. Pexeta structures engagements in stages instead:",
    },
    {
      kind: "table",
      headers: ["Stage", "When it fits", "Focus", "How we're paid"],
      rows: [
        ["1. Fixed retainer (months 1–3)", "New marketplace entry or broken unit economics", "Catalogue and listing fixes, margin and MER model, conversion and retention basics", "Fixed fee"],
        ["2. Hybrid (months 4–6)", "Positive CM1 and stable fulfilment", "Scaling ads across Meta, Google, marketplaces and quick commerce", "Lower retainer plus a bonus tied to MER and CM1 targets"],
        ["3. Revenue share (month 7 onwards)", "Established brands at scale", "Full commercial co-management and expansion", "Share of incremental net revenue"],
      ],
    },
    {
      kind: "p",
      text: "The common thread is that our fee moves with the brand's contribution, not with its ad budget.",
    },

    {
      kind: "faq",
      items: [
        { q: "What is a good MER?", a: "There isn't one number. Calculate your break-even MER as 1 ÷ your contribution margin before marketing. A brand with a 45% margin breaks even at about 2.2x; one with a 25% margin needs 4.0x." },
        { q: "Is MER the same as ROAS?", a: "No. ROAS is usually one platform's estimate of the revenue its own ads produced. MER divides your total net revenue by your total marketing spend, both from your own books, so it can't be inflated by overlapping attribution." },
        { q: "Should marketplace ads be included in MER?", a: "Yes. Amazon, Flipkart and quick-commerce ads are marketing spend. Leaving them out makes MER look better than it is, especially for brands that sell mostly on marketplaces." },
        { q: "What is the difference between CM1 and CM2?", a: "CM1 is the contribution from new customers' first orders after their acquisition cost. CM2 is the contribution from all revenue after all variable costs and all marketing. CM1 shows whether acquisition pays; CM2 shows what's left for the business." },
        { q: "What LTV:CAC ratio should a brand aim for?", a: "Shopify says e-commerce businesses typically see 3:1 to 4:1, and 2:1 or less may be close to break-even. Check that LTV is based on margin rather than revenue, and look at the payback period as well as the ratio." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "SimplicityDX / Business Wire: Brands losing a record $29 for each new customer acquired (19 July 2022)", url: "https://www.businesswire.com/news/home/20220719005425/en/Brands-Losing-a-Record-29-for-Each-New-Customer-Acquired", note: "$29 loss per new customer vs $9 in 2013; CAC up as much as 60% in five years per industry estimates" },
        { title: "MediaPost: It now costs much more to acquire a new customer", url: "https://www.mediapost.com/publications/article/375818/it-now-costs-way-more-to-acquire-a-new-customer.html", note: "iOS 14.5, third-party cookies and privacy laws as contributors" },
        { title: "Sendcloud: E-commerce Monitor 2026, the era of automatic growth seems over (17 March 2026)", url: "https://www.sendcloud.com/blog/ecommerce-monitor-2026/", note: "525 Dutch webshops; strong growth 19% to 12%; declining revenue 17% to 21%" },
        { title: "Common Thread Collective: Q1 2026 channel mix benchmark, 299 DTC brands", url: "https://commonthreadco.com/pages/q1-2026-channel-mix-benchmark", note: "Platform ROAS, incrementality factors and incremental ROAS by channel" },
        { title: "Top Growth Marketing: ROAS benchmarks for DTC ecommerce (updated Nov 2026)", url: "https://topgrowthmarketing.com/?p=48544", note: "Break-even ROAS = 1 ÷ contribution margin; small first-party sample" },
        { title: "eightx: ROAS vs MER vs blended CAC", url: "https://eightx.co/blog/roas-vs-mer-vs-blended-cac", note: "MER = total revenue ÷ total marketing spend" },
        { title: "WARC Media: The Future of Commerce Media 2025 (3 November 2025)", url: "https://www.warc.com/article/the-future-of-commerce-media-2025-6aecfaaf89c1495e96fefbc03f0f08e3", note: "$196.7bn retail media in 2026; overtakes linear and connected TV" },
        { title: "Advanced Television: Global retail media ad market nears $200bn (WARC)", url: "https://www.advanced-television.com/2025/11/04/report-global-retail-media-ad-market-nears-200bn/", note: "$174.9bn in 2025 (+13.7%); 16% of all ad spend in 2026; slowing growth" },
        { title: "EMARKETER: FAQ on retail media networks, budgets in 2026", url: "https://www.emarketer.com/content/faq-on-retail-media-networks-how-marketers-should-allocate-budgets-2026", note: "US $60.32bn (2025) to $71.09bn (2026); Amazon 79.7% share" },
        { title: "EMARKETER: Retail media ad spending forecast and trends H2 2025", url: "https://content-na1.emarketer.com/retail-media-ad-spending-forecast-trends-h2-2025", note: "$9.42bn of $10.53bn incremental 2026 spend to Amazon and Walmart" },
        { title: "exchange4media: Retail media grows from ad channel to digital shelf rent (20 July 2026)", url: "https://www.exchange4media.com/digital-news/retail-media-grows-from-ad-channel-to-digital-shelf-rent-156466.html", note: "dentsu–e4m: e-retail ad spend ₹11,293 cr to ₹17,601 cr in 2025; Pitch Madison quick-commerce ad estimates" },
        { title: "Mint: The quiet rise of retail data in advertising (27 October 2025)", url: "https://www.magzter.com/en/stories/newspaper/Mint-New-Delhi/THE-QUIET-RISE-OF-RETAIL-DATA-IN-ADVERTISING", note: "Amazon India ads revenue over ₹8,000 cr and Flipkart over ₹6,000 cr in FY25" },
        { title: "Klaviyo: 2026 email marketing benchmarks", url: "https://klaviyo.com/products/email-marketing/benchmarks", note: "Flows: nearly 41% of email revenue from 5.3% of sends; RPR ~18x campaigns" },
        { title: "Litmus: The ROI of email marketing", url: "https://www.litmus.com/blog/infographic-the-roi-of-email-marketing", note: "$36 per $1, survey-based" },
        { title: "Shopify: What is a good LTV to CAC ratio?", url: "https://www.shopify.com/ca/blog/what-is-a-good-ltv-to-cac-ratio", note: "E-commerce typically 3:1 to 4:1; 2:1 or less near break-even" },
        { title: "Amazon India press release: Zero referral fees on over 12.5 crore products (2 March 2026)", url: "https://press.aboutamazon.com/in/2026/3/amazon-announces-zero-referral-fees-on-over-12-5-crore-products-sellers-to-save-up-to-70-in-fees", note: "Products under ₹1,000, 1,800+ categories, from 16 March 2026" },
      ],
    },
  ],
};
