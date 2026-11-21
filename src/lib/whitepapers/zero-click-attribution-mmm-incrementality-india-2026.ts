import type { WhitePaper } from "./types";

export const zeroClickAttributionMmmIndia2026: WhitePaper = {
  slug: "zero-click-attribution-mmm-incrementality-india-2026",
  title: "Measuring Marketing When Clicks Disappear: Marketing Mix Modelling and Incrementality Testing for Indian Brands",
  subtitle:
    "Why last-click dashboards undercount discovery, what open-source MMMs from Google and Meta actually do, how to run incrementality tests, and how to combine them into a measurement system an Indian omnichannel brand can use",
  titleTag: "Zero-Click Attribution, MMM & Incrementality (2026): A Guide for Indian Brands | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on marketing measurement in 2026: zero-click search data, what changed with cookies and consent, Google Meridian vs Meta Robyn, geo-holdout and lift tests, India's DPDP timeline, and a three-layer measurement approach.",
  excerpt:
    "When shoppers discover a brand in an AI answer and buy days later on Blinkit or Amazon, last-click reports credit 'direct' and the ads that created the demand look useless. This paper explains how marketing mix models and incrementality tests fill that gap, using only what Google, Meta and regulators have published.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-22",
  dateModified: "2026-11-22",
  readMinutes: 14,
  keywords: [
    "marketing mix modeling india",
    "google meridian",
    "meta robyn",
    "incrementality testing",
    "zero click attribution",
    "geo holdout test",
    "dpdp rules marketing",
    "last click attribution problems",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "Click-based attribution was built for a journey that ran from ad to click to checkout on one website. For an Indian brand selling on its own site, Amazon, Flipkart and quick-commerce apps, much of the journey now happens where no click is recorded. This paper explains what has changed, what marketing mix models (MMM) and incrementality tests can and can't do, and how to use them together to decide where the next rupee of ad spend should go.",
    },
    {
      kind: "ul",
      items: [
        "Similarweb found that the share of Google searches ending without a click rose from **56% to 69%** between May 2024 and May 2025, after AI Overviews launched.",
        "Third-party cookies have **not** gone away in Chrome: Google dropped its plan to remove them. The bigger measurement gaps for Indian brands are zero-click discovery, sales on marketplaces and quick-commerce apps, and consent.",
        "India's **DPDP Rules** were notified in November 2025; the notice and consent obligations for businesses apply from **13 May 2027**.",
        "**Google Meridian** (open source, generally available since January 2025) and **Meta Robyn** (open source) both estimate each channel's incremental contribution from aggregated data, and both can be calibrated with experiments.",
        "Models need a referee. Geo-holdout tests, brand-search pause tests and platform lift studies measure what disappears when spend stops.",
      ],
    },

    { kind: "h2", text: "1. Why click-based attribution undercounts" },
    { kind: "h3", text: "1.1 Zero-click discovery" },
    {
      kind: "p",
      text: "Since Google launched AI Overviews in May 2024, Similarweb's data shows zero-click searches rising from 56% to 69% by May 2025, while organic visits to news sites fell. Shopping assistants add to this: Amazon said over 400 million customers used Alexa for Shopping in the 12 months to Q3 2026, and Amazon began rolling it out in India in November 2026. A shopper who forms a preference inside an AI answer and later types the brand name, or buys on a marketplace, leaves no click trail back to the ad or content that influenced them.",
    },
    { kind: "h3", text: "1.2 Sales outside the brand's pixel" },
    {
      kind: "p",
      text: "For most Indian brands, the website is only one sales channel. An Instagram or YouTube ad can lead to a purchase on Amazon, Flipkart, Blinkit or in a shop, none of which reports back to the brand's website pixel. Last-click tools see the ad cost but not the sale.",
    },
    { kind: "h3", text: "1.3 Cookies and consent: what actually changed" },
    {
      kind: "ul",
      items: [
        "**Chrome keeps third-party cookies.** Google said in July 2024 it would no longer deprecate them, and in April 2025 that it would not roll out a standalone cookie prompt either. Users can still block them in settings, and Incognito mode blocks them.",
        "**Consent Mode v2** became necessary for personalised Google advertising to users in the **EEA and UK** from March 2024. It matters for Indian brands advertising in Europe, not for traffic in India.",
        "**India's DPDP Act** came into force with the DPDP Rules on 13 November 2025, in phases. Consent managers come under the rules from November 2026, and the main obligations on businesses, including notice and consent, apply from **13 May 2027**.",
      ],
    },
    {
      kind: "p",
      text: "The practical point: the gap in Indian brands' measurement comes less from cookie loss and more from journeys that never produce a trackable click, and from sales on platforms the brand doesn't control. Consent requirements will add to it from 2027.",
    },

    { kind: "h2", text: "2. The last-click trap" },
    {
      kind: "p",
      text: "When reports credit only the last click, upper-funnel activity (video, social, influencers, content) looks weak and branded search looks strong, because people who already know the brand search for it. The natural response is to move budget from discovery into branded search and retargeting. Branded search then keeps reporting a high ROAS while fewer new customers enter the funnel, and total sales stall even as ad spend rises.",
    },
    {
      kind: "p",
      text: "**Illustrative example:** a brand's dashboard shows branded search at 8x ROAS and YouTube at 0.8x. If a test later shows that most branded-search buyers would have bought anyway, while sales fall in regions where YouTube is switched off, the dashboard had the ranking backwards. The only way to know is to measure incrementality. Our white papers on [MER and the CAC squeeze](/whitepapers/cac-squeeze-marketing-efficiency-ratio-india) and [Amazon search ranking and TACoS](/whitepapers/amazon-search-ranking-tacos-governance-india-2026) cover the efficiency ratios to watch alongside this.",
    },

    { kind: "h2", text: "3. Marketing mix modelling: what it does" },
    {
      kind: "p",
      text: "A marketing mix model is a statistical model of total sales over time. It uses aggregated data, typically weekly, such as spend or impressions by channel, prices and promotions, seasonality and holidays, and total revenue, and needs no user-level tracking. It splits sales into a **baseline** (what the business would sell without the modelled marketing) and the **incremental contribution** of each channel.",
    },
    {
      kind: "p",
      text: "Modern MMMs share three ideas:",
    },
    {
      kind: "ul",
      items: [
        "**Carryover (adstock):** an ad's effect continues for some time after it runs, so the model spreads its impact over following weeks.",
        "**Diminishing returns (saturation):** each extra rupee in a channel adds less than the one before, so the model fits a curve that flattens as spend rises.",
        "**Calibration with experiments:** regression on observational data can mistake correlation for causation. Feeding in results from lift tests or geo-experiments anchors the model to measured effects.",
      ],
    },
    {
      kind: "p",
      text: "MMMs are planning tools, not daily dashboards. They answer questions like \"how should we split next quarter's budget across Meta, Google, Amazon Ads and quick-commerce ads?\" and \"where does extra spend stop paying back?\"",
    },

    { kind: "h2", text: "4. Google Meridian and Meta Robyn" },
    {
      kind: "table",
      headers: ["", "Google Meridian", "Meta Robyn"],
      rows: [
        ["Status", "Open source; announced March 2024, available to everyone from 29 January 2025", "Open source, from Meta Marketing Science; on CRAN (version 3.12.1, July 2025)"],
        ["Language", "Python", "R (4.0 or later), using the Python Nevergrad library"],
        ["Approach", "Bayesian causal inference: combines prior knowledge with data", "Ridge regression, with a multi-objective evolutionary algorithm for hyperparameters, time-series decomposition for trend and seasonality, and a budget allocator"],
        ["Experiments", "Calibration with incrementality experiments", "Calibration against lift tests and geo-experiments (adds a calibration error to the objective)"],
        ["Notable features", "Reach and frequency modelling for video such as YouTube; an MMM Data Platform with Google media data including query volume", "Designed for granular datasets with many variables; suited to digital and direct-response advertisers"],
      ],
    },
    {
      kind: "p",
      text: "Both are free to use but not free to run well. They need clean weekly data across every channel, someone who understands the statistics, and time to test assumptions. Google also has a partner programme of measurement firms trained on Meridian. Choose the tool your team or partner can maintain; calibration with your own experiments matters more than the choice of framework.",
    },

    { kind: "h2", text: "5. Incrementality testing: the referee" },
    {
      kind: "p",
      text: "An incrementality test asks: **if we stop or reduce this spend, how much revenue actually disappears?** Three designs are practical for Indian brands:",
    },
    {
      kind: "table",
      headers: ["Test", "How it works", "Watch out for"],
      rows: [
        ["Geo-holdout", "Pause or reduce a channel in matched regions (cities or states with similar sales patterns) and compare total sales, including marketplace and quick-commerce sales, with regions where spend continues", "Regions must be genuinely comparable; run long enough to cover the purchase cycle; avoid festival periods"],
        ["Brand-search pause", "Switch off branded search ads in some regions for a few weeks and track total brand sales and organic brand clicks", "Competitors bidding on your brand name can take the traffic; keep a defensive budget where they do"],
        ["Platform lift study", "Meta or Google randomly withholds ads from a control group and compares conversions", "Measures only that platform's effect, and only on conversions the platform can see"],
      ],
    },
    {
      kind: "p",
      text: "Test results become an **incrementality factor** for each channel: the share of reported conversions that are truly incremental. **Illustrative example:** if Meta reports a 3.5x ROAS and a geo test shows that 60% of those sales are incremental, the incremental ROAS is 3.5 × 0.6 = **2.1x**. That number, not the platform's, should drive budget decisions and the MMM's calibration.",
    },

    { kind: "h2", text: "6. Signals for zero-click influence" },
    {
      kind: "p",
      text: "Some influence won't show up in any test or model quickly. Three signals help:",
    },
    {
      kind: "ul",
      items: [
        "**AI visibility tracking:** regularly ask AI assistants the questions your customers ask (\"best sunscreen for oily skin under ₹500\") and record whether and how your brand appears. Track it over time against competitors. See our [Agent Engine Optimization paper](/whitepapers/agent-engine-optimization-amazon-google-ai-mode).",
        "**Branded search demand:** branded impressions in Google Search Console and branded search volume on Amazon show whether awareness is growing, even when clicks don't.",
        "**Post-purchase surveys:** ask \"How did you first hear about us?\" on the order confirmation page, with an open text option. Answers such as \"an Instagram reel\" or \"ChatGPT suggested it\" capture discovery that no pixel can. Treat them as directional, not exact.",
      ],
    },

    { kind: "h2", text: "7. Practical issues for Indian brands" },
    {
      kind: "ul",
      items: [
        "**Bring all sales into one dataset.** An MMM built only on website sales will undervalue every channel that drives marketplace or quick-commerce purchases. Combine website, Amazon, Flipkart and quick-commerce sales, by region where possible.",
        "**Model festivals explicitly.** Diwali, Big Billion Days, Great Indian Festival and other sale events move sales far more than ads alone; mark them in the data so the model doesn't credit the ads.",
        "**Include price and discount changes.** Marketplace promotions and price cuts drive sales too.",
        "**Plan for consent.** From May 2027, data collected for personalisation and measurement needs DPDP-compliant notice and consent. Aggregated MMM data doesn't need user-level identifiers, which is one reason MMM is more privacy-durable.",
        "**Keep daily guardrails.** MMMs and tests guide quarterly budgets; day-to-day bidding still needs ad-platform data, with TACoS and contribution-margin limits. See [ACoS vs TACoS](/blog/acos-vs-tacos-amazon-india) and [dayparting](/blog/amazon-ads-dayparting-india).",
      ],
    },

    { kind: "h2", text: "8. The Pexeta approach: three layers" },
    {
      kind: "table",
      headers: ["Layer", "Cadence", "What it answers", "Tools"],
      rows: [
        ["Strategic", "Quarterly", "How to split budget across channels; where extra spend stops paying back", "MMM (Meridian or Robyn), calibrated with test results"],
        ["Validation", "Monthly or per campaign", "Which channels are truly incremental, and by how much", "Geo-holdouts, brand-search pauses, platform lift studies"],
        ["Tactical", "Daily and weekly", "Bids, creatives, dayparting, stock-aware spend", "Platform data with TACoS, MER and contribution-margin guardrails"],
      ],
    },
    {
      kind: "p",
      text: "Each layer checks the others: a channel that looks strong in platform reports but fails a geo test gets its budget capped until the evidence improves; a channel the MMM rates highly but has never been tested gets the next test.",
    },

    { kind: "h2", text: "9. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"Over 60% of search journeys resolve inside AI conversational surfaces\":** not found. The verified figure is Similarweb's: 69% of Google searches ended without a click in May 2025, up from 56% in May 2024.",
        "**\"Third-party cookies deprecated\" and \"browser signal destruction\":** Chrome has kept third-party cookies; Google abandoned the deprecation plan in 2024–25.",
        "**\"Consent Mode v2\" as a universal regulation:** it is Google's mechanism for EEA and UK consent requirements, enforced from March 2024.",
        "**DPDP:** the Act's main notice and consent obligations for businesses apply from 13 May 2027, not now.",
        "**\"Cookie tracking coverage reduced by 40–70%\", \"8.0x branded ROAS\", \"TACoS from 12% to over 28%\", \"0.10 incrementality factor\", \"3–6 week lag\":** no primary source found; replaced with labelled illustrative examples.",
        "**\"Share of Model directly correlates with branded search\":** no published evidence found; we recommend tracking both and testing the relationship for your brand.",
        "**Meridian \"Python 3.11–3.13\", \"GPU via JAX\", \"GeoX integration\":** not verified against Google's announcements, so not stated.",
      ],
    },

    {
      kind: "faq",
      items: [
        { q: "What is marketing mix modelling?", a: "A statistical model of total sales over time that uses aggregated data, such as weekly spend by channel, prices, promotions and seasonality, to estimate how much each channel adds beyond a baseline. It needs no user-level tracking." },
        { q: "What is the difference between Google Meridian and Meta Robyn?", a: "Both are open-source MMMs. Meridian, from Google, is a Bayesian model in Python with reach and frequency modelling and calibration with experiments. Robyn, from Meta, is an R package using ridge regression and evolutionary hyperparameter optimisation, with calibration against lift tests." },
        { q: "Have third-party cookies been removed from Chrome?", a: "No. Google said in July 2024 it would not deprecate them and in April 2025 that it would not add a standalone cookie prompt. Users can still block them in settings." },
        { q: "What is an incrementality test?", a: "A controlled experiment that measures how much revenue disappears when ad spend is paused or reduced, such as a geo-holdout or a platform lift study. It tells you how much of a channel's reported performance is truly caused by the ads." },
        { q: "When do India's DPDP consent rules apply to marketing data?", a: "The DPDP Rules were notified in November 2025 with phased timelines. The main notice and consent obligations for businesses apply from 13 May 2027." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "Search Engine Roundtable: Similarweb, no clicks from Google grew from 56% to 69% since AI Overviews (3 Jul 2025)", url: "https://www.seroundtable.com/similarweb-google-zero-click-search-growth-39706.html", note: "Zero-click share May 2024 vs May 2025" },
        { title: "Modern Retail: More than 400M customers have used Alexa for Shopping", url: "https://www.modernretail.co/technology/amazon-says-more-than-400m-customers-have-used-alexa-for-shopping-in-the-last-12-months/", note: "Amazon Q3 2026 earnings call" },
        { title: "Search Engine Land: Google scraps plans to kill third-party cookies in Chrome", url: "https://searchengineland.com/google-third-party-cookies-chrome-reversal-444317", note: "July 2024 reversal" },
        { title: "Search Engine Roundtable: Chrome won't roll out prompt to turn off third-party cookies", url: "https://www.seroundtable.com/google-third-party-cookies-back-39285.html", note: "April 2025: cookies remain; Incognito blocks them" },
        { title: "Search Engine Journal: Consent Mode v2, key details for advertisers", url: "https://www.searchenginejournal.com/consent-mode-v2-google-shares-shares-key-details-for-advertisers/508623/", note: "EEA enforcement from March 2024" },
        { title: "PIB: DPDP Rules, 2025 notified (17 Nov 2025)", url: "https://static.pib.gov.in/WriteReadData/specificdocs/documents/2025/nov/doc20251117695301.pdf", note: "Eighteen-month phased compliance" },
        { title: "Bar & Bench: MeitY notifies final DPDP Rules 2025", url: "https://www.barandbench.com/view-point/meity-notifies-final-digital-personal-data-protection-rules-2025", note: "Consent managers from 13 Nov 2026; notice and consent from 13 May 2027" },
        { title: "Google: Meridian is now available to everyone (29 Jan 2025)", url: "https://blog.google/products/ads-commerce/meridian-marketing-mix-model-open-to-everyone/", note: "Bayesian causal inference; reach and frequency; MMM Data Platform; partner programme" },
        { title: "Google: Introducing Meridian (7 Mar 2024)", url: "https://blog.google/products/ads-commerce/meridian/", note: "Calibration with incrementality experiments" },
        { title: "CRAN: Robyn package reference (v3.12.1)", url: "https://cran.ms.unimelb.edu.au/web/packages/Robyn/refman/Robyn.html", note: "R ≥ 4.0; Nevergrad; ridge regression; ground-truth calibration" },
        { title: "Robyn on GitHub (Meta Marketing Science)", url: "https://github.com/facebookexperimental/robyn", note: "Ridge regression, evolutionary optimisation, MAPE.LIFT calibration, budget allocation" },
        { title: "SourceForge mirror: Robyn overview", url: "https://sourceforge.net/projects/robyn.mirror/", note: "Calibration against lift tests and geo-experiments" },
      ],
    },
  ],
};
