import type { WhitePaper } from "./types";

export const ondcOpenNetworkIndia2026: WhitePaper = {
  slug: "ondc-open-network-digital-commerce-india-2026",
  title: "ONDC in 2026: How India's Open Commerce Network Works, Where It Stands and How Brands Can Use It",
  subtitle:
    "How the Open Network for Digital Commerce unbundles buying, selling and delivery across separate apps, what the latest official numbers show, how fees and grievance handling work, and where ONDC fits in a brand's channel mix.",
  titleTag: "ONDC in 2026: Network Scale, Fees, Grievance Process & Brand Strategy | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on ONDC in 2026: 500 million cumulative transactions, 218 million in FY26, how buyer, seller and logistics apps work, the buyer app fee and ₹1.5 network fee, the IGM grievance process, and how brands can use ONDC alongside marketplaces.",
  excerpt:
    "ONDC passed 500 million cumulative transactions in July 2026 and enabled 218 million in FY26 alone. This paper explains how the network works, what it costs sellers, where it is gaining traction, and how brands can add it to their channel mix.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  readMinutes: 11,
  keywords: [
    "ondc 2026",
    "ondc for brands",
    "ondc seller app fees",
    "ondc buyer finder fee",
    "ondc transactions fy26",
    "beckn protocol ondc",
    "ondc grievance igm",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "The Open Network for Digital Commerce (ONDC) is not a marketplace. It is a set of open specifications that lets a shopper on one app buy from a seller listed on a different app, with delivery by a third company. This paper sets out how it works, what the latest official data shows, and where it fits for consumer brands.",
    },
    {
      kind: "ul",
      items: [
        "ONDC passed **500 million cumulative transactions in July 2026**, according to DPIIT figures, up from about 0.2 million in FY23 to **218 million in FY26**.",
        "By July 2026, **more than 200,000 retail merchants** were active on the network, and **over one million service providers** across mobility and logistics were associated with it.",
        "Mobility is a major driver: the network facilitates **over 300,000 metro and bus tickets a day**, and nine metro systems use it for ticketing.",
        "There is no single ONDC commission. The **buyer app negotiates its fee** with the seller app in real time, the seller app charges its own fee, and ONDC charges a **₹1.5 network fee** per eligible transaction.",
        "In 2026 ONDC raised **₹220 crore** from Zoho, Uber, Paytm and BSE Technologies.",
      ],
    },

    { kind: "h2", text: "1. What ONDC is" },
    {
      kind: "p",
      text: "ONDC is a Section 8 (not-for-profit) company and an initiative of the Department for Promotion of Industry and Internal Trade (DPIIT). On a conventional marketplace, one company runs the shopper app, onboards sellers, handles payment and often arranges delivery. ONDC splits these roles across separate, interoperable participants. A seller onboards once through a seller app, and its catalogue becomes visible to shoppers on any connected buyer app.",
    },
    {
      kind: "table",
      headers: ["Participant", "Role"],
      rows: [
        ["Buyer app (Buyer Network Participant)", "The shopper-facing app: search, ordering, tracking and payment collection"],
        ["Seller app (Seller Network Participant)", "Onboards sellers, manages catalogues, inventory and order acceptance"],
        ["Logistics service provider", "Picks up and delivers orders"],
        ["Gateway and registry", "Shared infrastructure that relays search requests and verifies participants"],
      ],
    },
    {
      kind: "p",
      text: "The network runs on the open-source **Beckn protocol**. A purchase moves through a standard sequence of messages between apps: search, select, initialise, confirm and status updates. Because every app follows the same specification, a buyer app doesn't need a separate integration with each seller.",
    },

    { kind: "h2", text: "2. The network in numbers" },
    {
      kind: "table",
      headers: ["Measure", "Value", "Source"],
      rows: [
        ["Cumulative transactions", "500 million+ (July 2026)", "DPIIT, via Cross-Border Magazine"],
        ["Transactions in FY26", "218 million", "ONDC FY25-26 review"],
        ["Transactions in FY23", "About 0.2 million", "DPIIT, via Cross-Border Magazine"],
        ["Active retail merchants", "200,000+ (July 2026)", "DPIIT, via Cross-Border Magazine"],
        ["Retail sellers live (December 2025)", "1.16 lakh+ from 630+ cities and towns", "Lok Sabha written reply"],
        ["Metro and bus tickets", "300,000+ a day; bus ticketing in 21 cities; 9 metros", "ONDC FY25-26 review"],
        ["Autos and cabs", "9 lakh+ drivers across 55 cities and towns", "ONDC FY25-26 review"],
        ["Credit via ONDC", "₹218 crore of loans within a year of the May 2025 launch", "ONDC FY25-26 review"],
      ],
    },
    {
      kind: "p",
      text: "Growth has accelerated. ONDC took about 20 months to reach its first 100 million transactions and added nearly 100 million more in the following six months. Seller counts differ between sources because some include service providers such as drivers; brands should read retail merchant figures separately from total participants.",
    },

    { kind: "h2", text: "3. How fees work" },
    {
      kind: "p",
      text: "Sellers on ONDC don't pay one commission to one platform. Costs are split across participants:",
    },
    {
      kind: "ul",
      items: [
        "**Buyer app fee (finder fee):** under ONDC's commercial model, the buyer app may propose a finder fee as a percentage of the total order value or a flat amount. It is negotiated with the seller app in real time, and the order completes only if the seller app agrees. An earlier 3% cap on this fee has been removed from the model.",
        "**Seller app fee:** each seller app sets its own charges. For example, Fynd advertises a 3% commission for its ONDC seller app.",
        "**ONDC network fee:** since 1 January 2025, ONDC charges **₹1.5 per transaction** to seller-side participants, on successful transactions above **₹250** with no return or refund in the specified window.",
        "**Logistics:** delivery is charged by the logistics provider.",
        "**Payment processing:** applies as with any online payment.",
      ],
    },
    {
      kind: "quote",
      text: "Before comparing ONDC with a marketplace, add up all five cost lines for your actual seller app, buyer app mix and delivery distances. Headline commission comparisons leave out logistics and payment costs.",
    },

    { kind: "h2", text: "4. Where ONDC is gaining traction" },
    {
      kind: "ul",
      items: [
        "**Mobility and ticketing:** the largest transaction volumes, with metro and bus ticketing across 25+ buyer apps.",
        "**Retail distribution:** DigiDukaan launched in Hyderabad on 8 March 2026 with 1,000+ distributors and has 10,000+ kirana stores online, helping brands reach retail counters.",
        "**Small producers:** ONDC reports an 11x rise in order volumes for farmers, artisans and rural sellers, and about 11x growth for Amazing India Swadeshi since April 2025.",
        "**Financial services:** credit and mutual fund investment, with 28 of 50 asset management companies live.",
      ],
    },
    {
      kind: "p",
      text: "For branded fashion, beauty and high-value electronics, traction on ONDC is harder to judge from public data. Brands in these categories should test with a limited range before committing inventory.",
    },

    { kind: "h2", text: "5. Operational challenges" },
    { kind: "h3", text: "Grievances involve several parties" },
    {
      kind: "p",
      text: "On a marketplace, one company handles a complaint. On ONDC, the buyer app, seller app, seller and logistics provider may all be involved. ONDC's **Issue & Grievance Management (IGM)** framework has three levels: an issue raised through the app, escalation to each participant's Grievance Redressal Officer, and then **Online Dispute Resolution** through empanelled providers for conciliation, mediation or arbitration. Consumers can also escalate to ONDC's grievance portal, and can approach the courts at any point.",
    },
    { kind: "h3", text: "Demand is spread across many apps" },
    {
      kind: "p",
      text: "There is no single ONDC search bar. A seller's visibility depends on how each buyer app ranks and displays results, so performance can vary by app and city.",
    },
    { kind: "h3", text: "Catalogue quality must hold across apps" },
    {
      kind: "p",
      text: "The same catalogue is displayed by many different buyer apps. Complete, structured product data, including images, variants and mandatory labelling details, matters more than on a single marketplace.",
    },

    { kind: "h2", text: "6. The Pexeta approach to ONDC" },
    {
      kind: "ol",
      items: [
        "**Treat ONDC as an additional channel, not a replacement** for Amazon, Flipkart or quick commerce.",
        "**Choose the seller app carefully**: compare fees, logistics options, catalogue tools, settlement timelines and how it handles returns and grievances.",
        "**Feed ONDC from one product master**: the same product record that drives marketplace and quick-commerce listings, so price and stock stay consistent.",
        "**Start where local fulfilment is possible**: cities where you have stock with a warehouse or distributor close to buyers.",
        "**Model full cost per order**: buyer app fee, seller app fee, network fee, logistics and payment, against your marketplace cost per order.",
        "**Set pricing deliberately**: decide whether lower costs go into a lower price, a better margin or both, and check it against marketplace price parity terms.",
        "**Track by buyer app and city**: orders, cancellations, returns and grievance volumes, reviewed monthly.",
      ],
    },
    {
      kind: "p",
      text: "For a step-by-step seller view, see our guide [ONDC for brands and sellers in India](/blog/ondc-for-brands-sellers-india).",
    },

    { kind: "h2", text: "7. Conclusion" },
    {
      kind: "p",
      text: "ONDC has moved from pilot to scale, with half a billion cumulative transactions and fresh private capital. Its biggest volumes so far are in mobility, but retail distribution and small-seller commerce are growing. For brands, it is best used as a lower-cost additional channel, run from the same product and inventory data as other channels, and measured on full cost per order rather than headline commission.",
    },

    {
      kind: "faq",
      items: [
        { q: "How many transactions has ONDC processed?", a: "More than 500 million cumulatively by July 2026, according to DPIIT figures, with 218 million in FY26." },
        { q: "What commission does ONDC charge sellers?", a: "There is no single commission. The buyer app's fee is negotiated with the seller app, the seller app sets its own fee, and ONDC charges ₹1.5 per successful transaction above ₹250 to seller-side participants. Logistics and payment costs are separate." },
        { q: "How do sellers join ONDC?", a: "Through a seller app (Seller Network Participant). Once onboarded, the seller's catalogue is visible across connected buyer apps." },
        { q: "How are complaints handled on ONDC?", a: "Through ONDC's Issue & Grievance Management framework: an issue raised in the app, escalation to the participants' Grievance Redressal Officers, then Online Dispute Resolution through empanelled providers." },
        { q: "Who has invested in ONDC?", a: "In 2026 ONDC raised ₹220 crore from Zoho (₹70 crore), Uber and Paytm (₹60 crore each) and BSE Technologies (₹30 crore)." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "Cross-Border Magazine: ONDC passes 500 million transactions (Aug 2026)", url: "https://cross-border-magazine.com/ondc-500-million-transactions-india/", note: "DPIIT figures: 500M cumulative, 218M FY26, 200,000+ retail merchants" },
        { title: "ONDC: FY 2025-26 in focus", url: "https://ondc.org/public/assets/newsletters/ondc-fy25-26-in-focus.pdf", note: "218M transactions; ticketing, DigiDukaan, drivers, credit, AMCs" },
        { title: "India Shipping News: Lok Sabha written reply on ONDC (Dec 2025)", url: "https://indiashippingnews.com/?p=78317", note: "1.16 lakh+ retail sellers from 630+ cities and towns" },
        { title: "India Shipping News: ONDC a Section 8 company, an initiative of DPIIT", url: "https://indiashippingnews.com/trending-news/ondc-revolutionizes-indias-e-commerce-empowering-small-businesses-lowering-costs-and-expanding-buyer-choices/" },
        { title: "Lokmat Times: ONDC surpasses 200 million transactions", url: "https://www.lokmattimes.com/business/ondc-surpasses-200-mn-transactions-last-100-mn-in-just-6-months/amp/" },
        { title: "Paytm: Paytm invests in ONDC", url: "https://paytm.com/blog/ondc/paytm-ondc-partnership-india-digital-commerce/", note: "300,000+ tickets a day across metro and bus in 21 cities" },
        { title: "ONDC: Commercial Model (governance and policies, Chapter 3)", url: "https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/CHAPTER-%5B3%5D-Commercial%2BModel.pdf", note: "Buyer app fee negotiated in real time; 3% cap removed" },
        { title: "Inc42: ONDC to levy fee of ₹1.5 from next month (Dec 2024)", url: "https://inc42.com/?p=489419" },
        { title: "Fynd: ONDC seller app", url: "https://fynd.com/ondc-seller-app", note: "Example seller app commission (3%)" },
        { title: "ONDC: User guide on grievance redressal and dispute resolution (IGM)", url: "https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/B.USER_GUIDE_ON_IGM.pdf" },
        { title: "ONDC: IGM business view and flows", url: "https://ondc-static-website-media.s3.ap-south-1.amazonaws.com/ondc-website-media/downloads/governance-and-policies/IGM_Business_view_Flows_V.1.pdf", note: "Three levels: issue, grievance, dispute" },
        { title: "ONDC: Complaints", url: "https://ondc.org/complaints/" },
        { title: "Inc42: ONDC raises ₹220 crore from Uber, Zoho, Paytm", url: "https://inc42.com/buzz/ondc-raises-%E2%82%B9220-cr-from-uber-zoho-paytm/" },
      ],
    },
  ],
};
