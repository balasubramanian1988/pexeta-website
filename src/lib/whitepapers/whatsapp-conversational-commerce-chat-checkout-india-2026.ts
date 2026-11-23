import type { WhitePaper } from "./types";

export const whatsappConversationalCommerceIndia2026: WhitePaper = {
  slug: "whatsapp-conversational-commerce-chat-checkout-india-2026",
  title: "WhatsApp Conversational Commerce: Click-to-WhatsApp Ads, In-Chat Checkout and the October 2026 Pricing Change",
  subtitle:
    "How Indian brands can sell inside WhatsApp: how Click-to-WhatsApp ads and free entry point windows work, what changed in Meta's pricing on 1 October 2026, how Flows and in-chat payments remove checkout friction, and how to use WhatsApp to cut COD returns.",
  titleTag: "WhatsApp Commerce in India: CTWA Ads, Chat Checkout & 2026 Pricing | Pexeta White Paper",
  metaDescription:
    "A sourced Pexeta white paper on WhatsApp commerce for Indian brands: per-message pricing, the October 2026 service-message charges, up to 7-day free entry point windows, WhatsApp Flows, Razorpay and PayU in-chat payments, Conversions API and COD verification.",
  excerpt:
    "WhatsApp has more than 3 billion monthly users and India is its biggest market. From 1 October 2026, Meta charges for most replies to customers. This paper covers how to run Click-to-WhatsApp ads, in-chat checkout and COD verification profitably under the new rules.",
  author: "Balasubramanian VA, Pexeta",
  datePublished: "2026-11-23",
  dateModified: "2026-11-23",
  readMinutes: 11,
  keywords: [
    "whatsapp commerce india",
    "click to whatsapp ads",
    "whatsapp business api pricing october 2026",
    "whatsapp free entry point window",
    "whatsapp payments razorpay payu",
    "whatsapp flows checkout",
    "cod verification whatsapp rto",
  ],
  body: [
    { kind: "h2", text: "Summary" },
    {
      kind: "p",
      text: "For many Indian shoppers, WhatsApp is where they already talk to shops. Brands can now run the whole journey there: an ad that opens a chat, product browsing, address capture, payment and post-order updates. This paper explains how the pieces work, what they cost after Meta's October 2026 pricing change, and where WhatsApp helps most, especially in cutting COD returns.",
    },
    {
      kind: "ul",
      items: [
        "WhatsApp passed **3 billion monthly users** in 2025, as confirmed by Meta's CEO. India is its largest market.",
        "Since **1 July 2025**, Meta charges **per message** rather than per conversation on the WhatsApp Business Platform.",
        "From **1 October 2026**, service messages (free-form replies) are charged after **1,000 free per business phone number per month**, and utility templates sent inside the 24-hour customer service window are charged again.",
        "Chats that start from a **Click-to-WhatsApp ad** or a Facebook Page button open a **free entry point window** in which messages aren't charged. Meta's documentation now says this window may stay open for **up to 7 days**, if the business replies within 24 hours.",
        "In India, customers can pay inside the chat through **Razorpay, PayU, BillDesk or Zaakpay**, using WhatsApp Pay, other UPI apps or cards.",
        "WhatsApp is most valuable on COD orders: Unicommerce reported D2C RTO peaking at **39.2%** in November 2025, and ClickPost data shows **37.51%** RTO on COD orders against **5.28%** on prepaid.",
      ],
    },

    { kind: "h2", text: "1. Why chat commerce matters in India" },
    {
      kind: "p",
      text: "A typical paid-social journey sends a shopper from an ad to a mobile web page, then a cart, an address form and a payment gateway. Every step loses people. A WhatsApp journey can keep the same person in one thread: the ad opens a chat, the business already has the shopper's phone number, products can be shown in the chat, and payment can happen without leaving the app.",
    },
    {
      kind: "p",
      text: "That doesn't make the website obsolete. The chat works best for considered or assisted purchases, repeat orders, high-COD categories and customers who prefer to ask questions before buying. The website remains better for browsing a large catalogue.",
    },

    { kind: "h2", text: "2. How WhatsApp Business Platform pricing works now" },
    {
      kind: "table",
      headers: ["Message type", "What it is", "Charged?"],
      rows: [
        ["Marketing template", "Promotions, offers, reminders sent by the business", "Yes, per delivered message"],
        ["Utility template", "Order updates, confirmations, delivery alerts", "Yes. Was free inside the 24-hour customer service window from July 2025; charged again from 1 October 2026"],
        ["Authentication template", "One-time passwords", "Yes, per delivered message"],
        ["Service message", "Free-form reply inside the 24-hour customer service window", "From 1 October 2026: first 1,000 per business phone number per month free, then charged"],
        ["Any message in a free entry point window", "Chat started from a Click-to-WhatsApp ad or Facebook Page button", "Free, except Meta Business Agent messages"],
        ["Meta Business Agent", "Meta's own AI agent replying for the business", "Charged per token: $2.00 per million tokens"],
      ],
    },
    {
      kind: "p",
      text: "Two operational points come with the October change. Meta asked businesses to add a payment method to their messaging accounts by 30 September 2026; without one, service messages beyond the free tier aren't delivered. Separately, eligible Indian customers must move their messaging accounts to INR billing by 31 December 2026, after which Meta says it will stop delivering messages from non-INR accounts.",
    },
    {
      kind: "quote",
      text: "What this means: long back-and-forth support chats now cost money once a number passes 1,000 service messages in a month. Fewer, more complete replies, and structured Flows instead of long text Q&A, keep costs down.",
    },

    { kind: "h2", text: "3. Click-to-WhatsApp ads and the free entry point window" },
    {
      kind: "p",
      text: "Click-to-WhatsApp (CTWA) ads run on Facebook and Instagram and open a chat with the brand instead of a website. A free entry point window opens when a customer on Android or iOS messages the business through a CTWA ad or a Facebook Page call-to-action button, and the business responds within 24 hours. While that window is open, marketing, utility, authentication and service messages are free. Meta's documentation says the window may remain open for up to 7 days; Wati reports this longer window applies from 28 September 2026. Before that, it was 72 hours.",
    },
    {
      kind: "p",
      text: "The practical effect: for a shopper who arrives from an ad, the brand pays for the ad click but not for the follow-up messages during the window. That makes CTWA ads the cheapest way to start a sales conversation on WhatsApp, as long as the team replies within 24 hours.",
    },
    {
      kind: "ol",
      items: [
        "**Set a pre-filled first message per ad** so you know which product or offer the shopper came from.",
        "**Reply within minutes, not hours**: the window only opens once you respond, and must be within 24 hours.",
        "**Plan the follow-up inside the window**: product details, offer, payment link and a reminder, all before it closes.",
        "**Send results back to Meta** with the Conversions API for Business Messaging, so ads optimise for purchases, not just conversations started.",
      ],
    },

    { kind: "h2", text: "4. Flows and in-chat payments" },
    { kind: "h3", text: "WhatsApp Flows" },
    {
      kind: "p",
      text: "WhatsApp Flows are multi-screen forms that open inside the chat. Each screen can exchange data with the business's server through an endpoint. For commerce, that means a shopper can pick a size or variant, choose or enter an address, and confirm, in one structured interaction instead of a long text exchange. The business receives the answers as structured data it can pass to its order system.",
    },
    { kind: "h3", text: "Payments inside the chat in India" },
    {
      kind: "p",
      text: "WhatsApp launched in-chat payments to businesses in India in September 2023, adding support for all UPI apps, cards and net banking through Razorpay and PayU. Meta's developer documentation now lists BillDesk, Razorpay, PayU and Zaakpay as supported payment gateways. At checkout, the shopper can pay natively with WhatsApp Pay using UPI, or choose another UPI app. Businesses need an account with one of the supported gateways and a payment configuration in WhatsApp Manager.",
    },

    { kind: "h2", text: "5. Using WhatsApp to cut COD returns" },
    {
      kind: "p",
      text: "Cash on delivery remains the biggest source of return-to-origin (RTO) losses in Indian e-commerce. Unicommerce reported D2C RTO peaking at 39.2% in November 2025 and falling to 21.0% by March 2026 for brands that combined prepaid incentives, pin-code-level courier routing and address verification. ClickPost's FY2026 network data showed 37.51% RTO on COD orders against 5.28% on prepaid orders.",
    },
    {
      kind: "p",
      text: "WhatsApp is well suited to the verification and prepaid-nudge steps, because the customer already uses it and order messages arrive where they will be read:",
    },
    {
      kind: "ol",
      items: [
        "**Confirm every COD order**: send a utility template with Confirm and Cancel buttons as soon as the order is placed.",
        "**Fix the address before dispatch**: use a Flow to collect a missing house number, landmark or pin code.",
        "**Offer a reason to prepay**: a small discount or faster dispatch for paying by UPI in the chat. Test the amount against your margin.",
        "**Hold unconfirmed orders**: if there's no confirmation after a set number of reminders, hold the order rather than shipping it.",
        "**Track RTO by response**: compare RTO for confirmed, unconfirmed and converted-to-prepaid orders, so you can see what the flow is actually saving.",
      ],
    },
    {
      kind: "p",
      text: "Since October 2026, these utility messages are charged when sent outside a free entry point window, so the cost of each confirmation message should be weighed against the cost of a failed COD delivery.",
    },

    { kind: "h2", text: "6. Reorders and retention" },
    {
      kind: "p",
      text: "For products that run out on a predictable schedule, such as supplements, skincare or pet food, a reminder before the customer runs out, with a one-tap reorder to a saved address, is a natural fit for WhatsApp. These are marketing or utility templates and are charged, so they should be timed from actual purchase data and limited to customers who have opted in.",
    },

    { kind: "h2", text: "7. The Pexeta approach to WhatsApp commerce" },
    {
      kind: "ol",
      items: [
        "**Set up the account properly**: verified business, WhatsApp Business Platform through Cloud API or a Business Solution Provider, a payment method on file and INR billing.",
        "**Build CTWA campaigns around products**: one ad per product or offer, with a pre-filled message that tells you where the shopper came from.",
        "**Replace text Q&A with Flows**: variant selection, address capture and COD confirmation as structured forms.",
        "**Enable in-chat payment**: link a supported gateway so shoppers can pay by UPI without leaving the chat.",
        "**Connect the Conversions API**: send purchase events back to Meta for reporting and purchase optimisation.",
        "**Watch message costs monthly**: service messages per number against the 1,000 free tier, utility volume, and any Meta Business Agent token spend.",
        "**Measure contribution, not chats**: report orders, prepaid share and RTO by campaign, not just conversations started.",
      ],
    },

    { kind: "h2", text: "8. Conclusion" },
    {
      kind: "p",
      text: "WhatsApp can carry a sale from ad to payment in one thread, and India has the scale and payment rails to make that work. The October 2026 pricing change means replies are no longer free by default, so the economics now favour chats that start from ads, structured Flows over long conversations, and messages that clearly earn their cost, such as COD confirmation. Brands that measure orders, prepaid share and RTO, rather than conversations, will know whether the channel is paying off.",
    },

    {
      kind: "faq",
      items: [
        { q: "Are WhatsApp replies to customers free?", a: "Not any more by default. From 1 October 2026, Meta charges service messages after the first 1,000 per business phone number per month, and charges utility templates sent inside the 24-hour customer service window." },
        { q: "What is a free entry point window?", a: "When a customer messages a business through a Click-to-WhatsApp ad or Facebook Page button and the business replies within 24 hours, messages in that window are free (except Meta Business Agent messages). Meta's documentation says the window may stay open for up to 7 days." },
        { q: "Can customers pay inside WhatsApp in India?", a: "Yes. Businesses can accept UPI, cards and net banking inside the chat through supported gateways: BillDesk, Razorpay, PayU and Zaakpay." },
        { q: "How does Meta charge for its Business Agent AI?", a: "Per token, at $2.00 per million input and output tokens, according to Meta's pricing page." },
        { q: "Can WhatsApp reduce RTO on COD orders?", a: "It can support the steps that do: confirming COD orders, fixing addresses before dispatch, and nudging buyers to prepay. Unicommerce reported RTO falling from 39.2% to 21.0% for brands combining prepaid incentives, pin-code routing and address verification." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "Meta for Developers: Pricing on the WhatsApp Business Platform", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing", note: "October 2026 changes, 1,000 free service messages, FEP up to 7 days, Meta Business Agent rate, INR migration" },
        { title: "Meta for Developers: Conversation-based pricing (deprecated)", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/pricing/conversation-based-pricing/", note: "Replaced by per-message pricing on 1 July 2025" },
        { title: "Meta for Developers: Free entry point conditions", url: "https://developers.secure.facebook.com/docs/whatsapp/pricing" },
        { title: "Wati: WhatsApp Business Platform pricing changes", url: "https://support.wati.io/en/articles/16954666-whatsapp-business-platform-api-pricing-changes-service-messages-and-click-to-message-ads", note: "Up to 7-day window from 28 September 2026; Meta Business Agent billing since 1 August 2026" },
        { title: "respond.io: WhatsApp pricing change 2026", url: "https://respond.io/blog/whatsapp-pricing-change-2026" },
        { title: "Omdia: The WhatsApp free lunch is over", url: "https://omdia.tech.informa.com/om146764/the-whatsapp-free-lunch-is-over-and-meta-is-also-coming-for-the-ai-layer" },
        { title: "GCN: WhatsApp now has more than 3 billion monthly users", url: "https://gcn.com/?p=20683" },
        { title: "Privacy Laws & Business: India is Meta's largest WhatsApp market", url: "https://www.privacylaws.com/reports-gateway/articles/int200/int200india/" },
        { title: "Meta for Developers: WhatsApp Flows", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/flows/guides" },
        { title: "Meta for Developers: Payments in India via payment gateways", url: "https://developers.facebook.com/documentation/business-messaging/whatsapp/payments/payments-in/pg", note: "BillDesk, Razorpay, PayU, Zaakpay" },
        { title: "TechCrunch: WhatsApp users in India can now make payments within the app (Sep 2023)", url: "https://techcrunch.com/2023/09/19/whatsapp-india-payments-businesses/" },
        { title: "Razorpay: Payments on WhatsApp", url: "https://razorpay.com/payments-on-whatsapp/" },
        { title: "Meta for Developers: Conversions API for Business Messaging", url: "https://developers.facebook.com/docs/marketing-api/conversions-api/business-messaging" },
        { title: "WhatsApp Business: New ways to do more with messaging (Conversions API)", url: "https://whatsappbusiness.com/blog/new-ways-for-businesses-to-do-more-with-messaging/", note: "Purchase optimisation for ads that click to message" },
        { title: "Unicommerce: India D2C Report 2026", url: "https://unicommerce.com/india-d2c-report-2026-april/", note: "RTO 39.2% to 21.0%" },
        { title: "ClickPost: Ecommerce RTO statistics India 2026", url: "https://www.clickpost.ai/blog/ecommerce-rto-statistics-india", note: "COD 37.51% vs prepaid 5.28%" },
      ],
    },
  ],
};
