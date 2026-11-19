import type { WhitePaper } from "./types";

export const aiAgentsRetailOperationsIndia2026: WhitePaper = {
  slug: "ai-agents-retail-operations-pricing-inventory-india-2026",
  title: "AI Agents in Retail Operations: Pricing, Replenishment and Merchandising with Guardrails",
  subtitle:
    "Where agentic AI actually stands in 2026, which marketplace operations it suits, the Amazon pricing rules and Indian competition concerns that limit automated pricing, and the guardrails a brand needs before letting software act on its behalf",
  titleTag: "AI Agents for Retail Operations (2026): Pricing, Inventory & Merchandising for Indian Brands | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on AI agents in e-commerce operations: real adoption data from McKinsey and Gartner, agent roles for pricing, replenishment, catalogue and returns, Amazon's Fair Pricing Policy, CCI's algorithmic collusion concerns, and a guardrail checklist.",
  excerpt:
    "Vendors promise autonomous retail operations; the evidence says most companies are still experimenting and many agent projects will be cancelled. This paper sets out where agents help a multi-channel Indian brand, where the rules limit them, and the guardrails to put in place first.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-21",
  dateModified: "2026-11-21",
  readMinutes: 14,
  keywords: [
    "ai agents retail operations",
    "agentic ai ecommerce india",
    "ai dynamic pricing amazon",
    "automated inventory replenishment",
    "amazon fair pricing policy",
    "algorithmic pricing collusion india",
    "multi-agent systems retail",
    "ai merchandising",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "A brand selling on Amazon, Flipkart, quick-commerce apps and its own website makes hundreds of small operating decisions every week: prices, reorders, stock allocation, listing updates, refunds. AI agents, software that can plan and take multi-step actions toward a goal, promise to make many of these decisions automatically. This paper looks at what the evidence says about adoption, where agents fit in marketplace operations, and the rules and guardrails that should shape any deployment.",
    },
    {
      kind: "ul",
      items: [
        "In McKinsey's 2025 survey, **62%** of organisations were at least experimenting with AI agents and **23%** were scaling them somewhere; in any single business function, no more than **10%** were scaling agents.",
        "Gartner predicts **over 40% of agentic AI projects will be cancelled by the end of 2027**, citing escalating costs, unclear business value or inadequate risk controls, and warns of \"agent washing\".",
        "Automated pricing on Amazon must respect the **Marketplace Fair Pricing Policy**: Amazon can remove the Featured Offer when a price is significantly higher than recent prices on or off Amazon.",
        "The **Competition Commission of India** has flagged algorithmic collusion and opaque pricing algorithms as competition concerns. Pricing agents need limits that keep each brand's prices its own decision.",
        "Start with clean data, rules and human approval; give software authority to act only where the decision is frequent, reversible and measurable.",
      ],
    },

    { kind: "h2", text: "1. Where adoption actually stands" },
    {
      kind: "p",
      text: "McKinsey's *State of AI in 2025* found that 88% of respondents' organisations use AI regularly in at least one function, but about two-thirds have not begun scaling it across the enterprise. On agents specifically, 62% were at least experimenting and 23% were scaling an agentic system somewhere, usually in only one or two functions. In any given function, no more than 10% of respondents reported scaling agents.",
    },
    {
      kind: "p",
      text: "Gartner is more cautious still. In June 2025 it predicted that over 40% of agentic AI projects would be cancelled by the end of 2027 because of escalating costs, unclear business value or inadequate risk controls. It estimated that only about 130 of the thousands of vendors claiming agentic AI offer real agentic capabilities, with many rebranding chatbots, assistants and robotic process automation. Gartner also noted that many use cases positioned as agentic don't need agentic implementations. Looking further out, it expects 33% of enterprise software applications to include agentic AI by 2028, up from less than 1% in 2024.",
    },
    {
      kind: "p",
      text: "For an Indian brand, the takeaway is practical: agents are worth testing on well-defined operating tasks, but claims of fully autonomous retail operations, or of fixed cost savings from them, should be treated with caution.",
    },

    { kind: "h2", text: "2. Rules, forecasts and agents" },
    {
      kind: "p",
      text: "Not every automation problem needs an agent. Most marketplace operations are better served by a mix of three approaches:",
    },
    {
      kind: "table",
      headers: ["Approach", "What it does", "Good for"],
      rows: [
        ["Rules", "Fixed if-then logic, such as a reorder alert at a stock threshold", "Stable, well-understood decisions; easy to audit"],
        ["Forecasting models", "Predict demand or price response from history", "Reorder quantities, stock allocation by city, promotion planning"],
        ["AI agents", "Plan multi-step actions, use tools and data, and adjust to results", "Tasks that combine several systems and need judgement, such as investigating a stockout or drafting listing changes"],
      ],
    },
    {
      kind: "p",
      text: "Agents are typically built with orchestration frameworks such as LangGraph or Microsoft's AutoGen, connected to marketplace APIs, ERP and warehouse systems. The framework matters less than the design: what the agent may read, what it may change, and when a person must approve.",
    },

    { kind: "h2", text: "3. Four operating roles" },
    {
      kind: "table",
      headers: ["Role", "Reads", "May do without approval", "Needs human approval", "Measure"],
      rows: [
        ["Pricing", "Costs, fees, own prices across channels, stock, competitor prices", "Small changes inside set price bands", "Changes outside the band; any new promotion", "Contribution margin, featured offer share, price consistency across channels"],
        ["Replenishment", "Sales by channel and city, stock, lead times, open POs", "Draft POs and allocation plans", "Issuing POs above a value threshold; changing suppliers", "Out-of-stock rate, days of cover, PO fill rate"],
        ["Catalogue and merchandising", "Listings, search terms, reviews, returns reasons", "Flag gaps; draft copy and attribute changes", "Publishing listing changes; any new claim about the product", "Conversion rate, suppressed listings, compliance errors"],
        ["Post-purchase", "Orders, tickets, courier data, return reasons", "Answer routine queries; categorise returns", "Refusing a refund or flagging a customer for fraud", "Resolution time, return rate by reason, customer complaints"],
      ],
    },
    {
      kind: "p",
      text: "The roles share data: a cost increase seen by pricing affects reorder plans, and return reasons seen post-purchase should feed listing fixes. Connecting them is useful, but each connection is also a path for an error to spread, so log every handover.",
    },

    { kind: "h2", text: "4. Automated pricing: the limits" },
    { kind: "h3", text: "4.1 Amazon's Fair Pricing Policy" },
    {
      kind: "p",
      text: "Amazon monitors prices and compares them with other prices. Under its Marketplace Fair Pricing Policy, practices that harm customer trust include setting a price significantly higher than recent prices offered on or off Amazon and selling multiple units for more per unit than a single unit. Amazon can remove the Featured Offer, remove the offer, or suspend or terminate selling privileges in serious or repeated cases. Pricing Health in Seller Central shows offers that have lost Featured Offer eligibility and the reference prices involved.",
    },
    {
      kind: "p",
      text: "For an automated pricing system this means:",
    },
    {
      kind: "ul",
      items: [
        "**Price rises should be gradual and capped.** A system that raises prices sharply when stock runs low risks losing the Featured Offer.",
        "**Watch your prices on other channels.** Amazon compares with prices off Amazon, so a deep discount on another platform can affect Amazon eligibility.",
        "**Check multipacks and bundles** so the per-unit price is never above the single-unit price.",
        "**Reference prices must be genuine.** India's amended e-commerce rules also tighten how discounts are shown; see our [seller checklist](/blog/ecommerce-amendment-rules-2026-sellers).",
      ],
    },
    { kind: "h3", text: "4.2 Competition law" },
    {
      kind: "p",
      text: "The CCI published its market study *Artificial Intelligence and Competition* on 6 October 2025. It identifies algorithmic coordinated conduct, where pricing algorithms, including self-learning ones, can reach collusive outcomes without an explicit agreement, as a competition concern, along with dynamic, targeted and personalised pricing. About 37% of startups surveyed expressed concern about AI-facilitated collusion.",
    },
    {
      kind: "p",
      text: "Practical safeguards for a brand: set prices from your own costs, margins and demand data; don't share price-setting tools, data or rules with competitors; keep records of why each pricing rule exists; and take legal advice before using any pricing software that pools competitor data.",
    },
    { kind: "h3", text: "4.3 Guardrails for a pricing agent" },
    {
      kind: "ul",
      items: [
        "A **floor** per SKU set from contribution margin after all fees, never a fixed percentage copied from another category.",
        "A **ceiling** per SKU set from recent selling prices, to stay within Fair Pricing limits.",
        "A **maximum change** per adjustment and a **maximum number of changes** per day.",
        "A **cooling-off rule** that stops automatic changes when competitors' prices start moving in response to yours.",
        "A **log** of every change with its reason, reviewed weekly.",
      ],
    },

    { kind: "h2", text: "5. Replenishment and stock allocation" },
    {
      kind: "p",
      text: "Replenishment is where automation pays back most reliably, because the decisions are frequent and the outcomes are easy to measure. The basic logic is standard:",
    },
    {
      kind: "ul",
      items: [
        "**Reorder point** = average daily sales × lead time in days + safety stock.",
        "**Days of cover** = stock on hand ÷ average daily sales, tracked by channel and, for quick commerce, by city.",
        "**Order quantity** balances supplier minimums, cash and storage costs against the risk of running out.",
      ],
    },
    {
      kind: "p",
      text: "An agent can add value on top: spotting a city or dark-store cluster where sales have jumped, checking open POs and inbound shipments, and drafting a reallocation or new PO for approval. Keep a value threshold above which a person must approve each PO, and require approval for any new supplier. For quick-commerce specifics, see our [city-wise stock planning](/blog/quick-commerce-stock-planning-city-wise) and [PO fill rate](/blog/quick-commerce-po-fill-rates-dark-stores) guides and our white paper on [quick commerce unit economics](/whitepapers/quick-commerce-unit-economics-margin-defense-india-2026).",
    },

    { kind: "h2", text: "6. Catalogue and merchandising" },
    {
      kind: "p",
      text: "Generative AI is well suited to drafting listing improvements: rewriting bullets, filling missing attributes, suggesting search terms from query reports, and summarising what reviews and return reasons say about a product. It is poorly suited to publishing those changes unchecked.",
    },
    {
      kind: "ul",
      items: [
        "**Every product claim needs a source.** Ingredients, certifications, performance and safety statements must match the product and its documents.",
        "**Mandatory declarations** under Legal Metrology rules must stay correct on every channel; see [Legal Metrology for online sellers](/blog/legal-metrology-rules-online-sellers-listing-labels).",
        "**Marketplace style rules** differ by platform; one generated listing pasted everywhere often breaks them.",
        "**Measure the change.** Track conversion and suppression for each listing edit so you know which changes helped.",
      ],
    },
    {
      kind: "p",
      text: "For writing listings that AI shopping assistants can read, see our [Agent Engine Optimization paper](/whitepapers/agent-engine-optimization-amazon-google-ai-mode); for search, see our [Amazon search ranking and TACoS paper](/whitepapers/amazon-search-ranking-tacos-governance-india-2026).",
    },

    { kind: "h2", text: "7. Post-purchase and returns" },
    {
      kind: "p",
      text: "Agents can answer routine order questions, guide customers through set-up or troubleshooting before a return, categorise return reasons and route returned stock. Two cautions:",
    },
    {
      kind: "ul",
      items: [
        "**Keep a person in the loop for adverse decisions.** Refusing a refund or labelling a customer as fraudulent should be reviewed by a person, with the evidence recorded.",
        "**Marketplace returns follow marketplace rules.** On Amazon and Flipkart, return eligibility and refunds are governed by the platform's policies, not the brand's agent.",
      ],
    },
    {
      kind: "p",
      text: "Return reasons are some of the most useful data an agent can collect: recurring complaints about sizing, damage or a misleading image point straight to listing or packaging fixes.",
    },

    { kind: "h2", text: "8. Governance checklist" },
    {
      kind: "table",
      headers: ["Risk", "Control"],
      rows: [
        ["Wrong action at scale", "Start in suggestion mode; allow automatic action only after a period of reviewed suggestions"],
        ["Runaway price changes", "Price bands, change limits, daily caps and an automatic stop"],
        ["Excess spend or stock", "Value thresholds for POs and ad budgets that require approval"],
        ["Prompt injection", "Agents that read customer messages or web pages must not have access to pricing, supplier or payment tools"],
        ["Data leaks", "Least-privilege access; supplier contracts and costs kept out of customer-facing systems"],
        ["No accountability", "A log of every action with inputs, reasoning summary and approver"],
        ["Silent failure", "Alerts when data feeds stop or an agent's actions fall outside normal ranges"],
        ["Competition risk", "Pricing based on your own data; no shared pricing tools with competitors"],
      ],
    },

    { kind: "h2", text: "9. The Pexeta approach" },
    { kind: "h3", text: "Step 1: One view of the data" },
    {
      kind: "p",
      text: "We connect sales, stock, fees, ads and costs from each marketplace and the brand's own systems into one dataset, and fix gaps before any automation. Most errors in automated operations start with bad data.",
    },
    { kind: "h3", text: "Step 2: Rules and dashboards first" },
    {
      kind: "p",
      text: "We set reorder points, price bands and margin floors as explicit rules with dashboards, so the team can see what automation would do before it does it.",
    },
    { kind: "h3", text: "Step 3: Agents in suggestion mode" },
    {
      kind: "p",
      text: "Where a task needs judgement across several systems, we add agents that draft actions, such as a reallocation, a PO or a listing update, for a person to approve.",
    },
    { kind: "h3", text: "Step 4: Limited authority, reviewed regularly" },
    {
      kind: "p",
      text: "Only frequent, reversible, measurable actions move to automatic execution, within caps. We review the action log and results with the brand every month and adjust limits.",
    },

    { kind: "h2", text: "10. Claims we checked and corrected" },
    {
      kind: "ul",
      items: [
        "**\"Over 40% of tier-1 retailers have deployed agentic systems\" (McKinsey, Gartner, Salesforce):** not found. McKinsey's 2025 figures are 62% experimenting and 23% scaling somewhere across all industries; the 40% figure Gartner publishes is the share of agentic projects it expects to be cancelled by 2027.",
        "**\"OpEx reduced by 22–34%\", \"inventory turns up 2.8x\", \"AOV up 18–26%\", \"22% of returns prevented\", \"returns cost 15–30% of gross margin\":** no primary source found. Not used.",
        "**\"Amazon's A10+ algorithm strips the Buy Box if a lower price is found on Flipkart, Zepto or Blinkit\":** \"A10+\" is not an Amazon term. Amazon's Fair Pricing Policy does compare prices on and off Amazon and can remove the Featured Offer, but Amazon has not published which sites it checks.",
        "**Fixed KPI targets** (Buy Box win rate above 92%, out-of-stock below 3%, conversion above 14%, first-contact resolution above 88%) and the **40/35/25 stock split** and **52% margin floor:** illustrative or unsourced. Targets should come from each brand's own data.",
        "**\"Sub-second\" price changes and real-time price testing:** frequent price changes risk Fair Pricing issues and competition concerns; we recommend capped, logged changes.",
        "**\"Instant refund and keep the product under ₹300\":** possible on a brand's own website, but marketplace returns follow platform policy.",
        "**\"OpenAI & Microsoft documentation on LangGraph and AutoGen\":** LangGraph is developed by LangChain and AutoGen by Microsoft.",
      ],
    },

    {
      kind: "faq",
      items: [
        { q: "How many companies are actually using AI agents?", a: "In McKinsey's 2025 survey, 62% of organisations were at least experimenting with AI agents and 23% were scaling them somewhere in the enterprise. In any single function, no more than 10% were scaling agents." },
        { q: "Will AI agents fail?", a: "Gartner predicts that over 40% of agentic AI projects will be cancelled by the end of 2027 because of escalating costs, unclear business value or inadequate risk controls. Projects with clear use cases and controls stand a better chance." },
        { q: "Can I use an AI agent to reprice on Amazon?", a: "Yes, within limits. Amazon's Fair Pricing Policy lets it remove the Featured Offer if a price is significantly higher than recent prices on or off Amazon, so automated pricing needs floors, ceilings, change limits and logs." },
        { q: "Is AI pricing legal in India?", a: "Dynamic pricing is common, but the CCI has flagged algorithmic collusion and opaque pricing as competition concerns. Price from your own data, never share pricing tools or data with competitors, and take legal advice for complex setups." },
        { q: "Where should a brand start?", a: "Unify sales, stock and cost data, set explicit rules and dashboards, then add agents that suggest actions for approval. Allow automatic action only for frequent, reversible tasks with clear limits." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "McKinsey: The state of AI in 2025: Agents, innovation, and transformation", url: "https://www.mckinsey.com/capabilities/quantumblack/our-insights/the-state-of-ai", note: "62% experimenting with agents; 23% scaling somewhere; no more than 10% in any function" },
        { title: "IDM: McKinsey, few organisations fully scaling AI despite uptake", url: "https://idm.net.au/node/15415", note: "88% use AI in at least one function; two-thirds not yet scaling" },
        { title: "Gartner: Over 40% of agentic AI projects will be canceled by end of 2027 (25 Jun 2025)", url: "https://www.gartner.com/en/newsroom/press-releases/2025-06-25-gartner-predicts-over-40-percent-of-agentic-ai-projects-will-be-canceled-by-end-of-2027.", note: "Gartner press release" },
        { title: "Outlook Business: Over 40% of agentic AI projects will be scrapped by 2027", url: "https://www.outlookbusiness.com/artificial-intelligence/over-40-of-agentic-ai-projects-will-be-scrapped-by-2027-says-gartner", note: "Costs, unclear value, inadequate risk controls" },
        { title: "W.Media: Over 40% of agentic AI projects could face the axe", url: "https://w.media/over-40-percent-of-agentic-ai-projects-could-face-the-axe-by-end-of-2027-gartner/", note: "Agent washing; about 130 real vendors; use cases that don't need agents" },
        { title: "MarTech Vibe: Over 40% of agentic AI projects will be cancelled", url: "https://martechvibe.com/?p=31458", note: "33% of enterprise software to include agentic AI by 2028" },
        { title: "Sell on Amazon: Amazon pricing strategies", url: "https://sell.amazon.com/blog/amazon-pricing-strategies", note: "Fair Pricing Policy: Amazon may remove the Featured Offer or offer" },
        { title: "Amazon Seller Forums (Europe): Marketplace Fair Pricing Policy", url: "https://sellercentral-europe.amazon.com/forums/t/potential-pricing-errors-offer-deactivation-notification-in-pricing-health/369903", note: "Policy text: price significantly higher than recent prices on or off Amazon" },
        { title: "Amazon Seller Forums (US): Pricing Health and Featured Offer eligibility", url: "https://sellercentral.amazon.com/seller-forums/discussions/t/124c4f5e379bd12e69255f99aa12b811", note: "Reference prices shown in Pricing Health" },
        { title: "SupplyKick: Why your pricing on Amazon matters", url: "https://www.supplykick.com/blog/why-your-pricing-on-amazon-matters", note: "Multipack per-unit and excessive shipping rules" },
        { title: "Economic Laws Practice: CCI publishes market study on AI and competition", url: "https://elplaw.in/wp-content/uploads/2025/10/CCI-publishes-a-market-study-on-Artificial-Intelligence-and-Competition.pdf", note: "Published 6 October 2025; algorithmic coordinated conduct" },
        { title: "Khaitan & Co: Indian antitrust authority publishes report on AI", url: "https://www.khaitanco.com/sites/default/files/2025-10/ERGO%20-%20Indian%20antitrust%20authority%20publishes%20report%20-%209%20October%202025.pdf", note: "Six concern areas, including dynamic and personalised pricing" },
        { title: "BABL AI: CCI study highlights competitive challenges", url: "https://babl.ai/cci-study-highlights-rising-ai-market-competitive-challenges-and-path-for-regulation-in-india/", note: "37% of surveyed startups concerned about AI-facilitated collusion" },
      ],
    },
  ],
};
