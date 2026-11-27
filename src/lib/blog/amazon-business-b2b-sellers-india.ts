import type { BlogPost } from "./types";

export const amazonBusinessB2bSellersIndia: BlogPost = {
  slug: "amazon-business-b2b-sellers-india",
  title: "Amazon Business (B2B) for Indian Sellers: Business Price, Quantity Discounts and GST Invoices",
  titleTag: "Amazon Business B2B Seller Program India (2026): Business Price, Quantity Discounts, GST Invoices",
  metaDescription:
    "How the Amazon Business (B2B) seller program works on Amazon.in: auto-enrolment, Business Price, quantity discounts, business-only offers, GST invoices with the buyer's GSTIN, B2B tax reporting and FBA for business orders.",
  excerpt:
    "Offices, schools, clinics and shops buy on Amazon too, and they want GST invoices and bulk prices. Here's how the Amazon Business seller program works and how to set it up so business buyers choose your offer.",
  category: "Amazon Operations",
  author: "Pexeta Team",
  datePublished: "2026-11-27",
  dateModified: "2026-11-27",
  readMinutes: 5,
  keywords: [
    "amazon business seller india",
    "amazon b2b seller program",
    "amazon business price",
    "amazon quantity discounts",
    "amazon gst invoice b2b",
    "sell to businesses on amazon india",
  ],
  body: [
    { kind: "p", text: "Not every Amazon.in order comes from a household. Businesses buy office supplies, cleaning products, IT accessories, kitchen equipment and corporate gifts, and they need a **GST invoice** to claim input tax credit. **Amazon Business** is Amazon's B2B programme for these buyers. This guide covers what sellers need to know." },

    { kind: "h2", text: "Amazon Business in numbers" },
    { kind: "p", text: "Amazon Business says it offers **15+ crore products with a GST invoice**, from **3.5+ lakh sellers**, delivering to **99.8% of pincodes** in India. Registration is free for buyers, and Amazon Business says there is currently **no minimum order quantity or value**." },

    { kind: "h2", text: "Enrolment: you're probably already in" },
    { kind: "ul", items: [
      "**New sellers** registering on Amazon are **auto-enrolled** in the B2B programme.",
      "**Existing sellers** can enrol from the \"Enroll for B2B\" link in Seller Central. Amazon says enrolment is free and takes a few minutes.",
      "You use the **same Seller Central account** and the same inventory for B2B and B2C. You don't need separate stock for business orders, and **FBA** can fulfil B2B orders.",
      "You can opt out any time under Settings > Account Info > My Services. That removes only the B2B features, not your seller account.",
    ] },

    { kind: "h2", text: "Who the business buyers are" },
    { kind: "p", text: "A **verified business customer** has registered a business account, given valid business licence details and been verified by Amazon from publicly available data. Their orders show a **Business Buyer** label next to the Order ID in Manage Orders." },

    { kind: "h2", text: "The four pricing tools" },
    { kind: "table", headers: ["Tool", "What it does", "Rule to know"], rows: [
      ["Business Price", "A price shown only to business customers", "Can be equal to, but not higher than, your regular price. If you set none, business buyers pay the retail price"],
      ["Quantity Discounts", "Lower prices for bulk purchases", "On the buyer side, Amazon Business says tiers start at 2+ items"],
      ["Business-only offer", "An offer visible only to business customers", "Set a Business Price and no regular price"],
      ["GST-exclusive prices", "Shows business buyers the price before GST", "Matches how businesses compare costs"],
    ] },
    { kind: "p", text: "Buyers who want more than your listed tiers can click **\"Request discount on a greater quantity\"** to ask you for a quote. Business Price and Quantity Discounts are set from your Manage Inventory page." },
    { kind: "p", text: "Amazon also lists a **referral fee discount** and lower fees on multi-unit sales among the B2B benefits. The programme page doesn't publish the rates, so check the current fee schedule in Seller Central and run the numbers per SKU with our [profit-per-unit guide](/blog/amazon-india-profit-per-unit-calculation)." },

    { kind: "h2", text: "GST invoices and tax reporting" },
    { kind: "p", text: "This is where B2B differs from retail, and where mistakes cost buyers their tax credit:" },
    { kind: "ul", items: [
      "Amazon generates a **Business Invoice** showing the customer's business name, **GSTIN** (if any) and purchase order number.",
      "You must issue a Business Invoice to a business customer **even if they bought at your retail price**.",
      "For B2B orders, your GST returns must report the transaction at **invoice level with the buyer's GSTIN**. Without it, the buyer can't claim input tax credit. The B2B report is in Reports > Tax Document Library > Merchant Tax Report > B2B Reports.",
      "Only B2B offers carry the **Business Invoice badge**, which business buyers filter for.",
    ] },
    { kind: "p", text: "Reconcile these reports every month with your other marketplace data. See our [GST and TCS reconciliation guide](/blog/gst-tcs-reconciliation-amazon-flipkart-sellers)." },

    { kind: "h2", text: "Is it worth setting up?" },
    { kind: "p", text: "B2B features suit products that businesses buy repeatedly or in bulk: stationery, housekeeping and pantry supplies, IT accessories, tools, packaging, kitchenware for cafés and gifting items for corporate orders. For these, a Business Price, two or three quantity tiers and clean GST invoicing are low-effort steps. Price each tier against your actual landed cost and [Amazon fees](/blog/amazon-india-seller-fees-2026), not against a target margin." },
    { kind: "quote", text: "Pexeta sets up Business Price, quantity tiers and B2B tax reports as part of account management. Talk to us if business buyers are a segment you want to grow." },

    {
      kind: "sources",
      items: [
        { title: "Amazon Seller (India): Amazon Business B2B program", url: "https://sell.amazon.in/grow-your-business/programs/amazon-business", note: "Enrolment, Business Price rules, business-only offers, Business Invoice, B2B tax reports, FBA for B2B" },
        { title: "Amazon Business India: Sell on Amazon Business", url: "https://business.amazon.in/en/sell", note: "GST-exclusive prices, auto-generated GST invoices, same Seller Central account" },
        { title: "Amazon Business India: home page", url: "https://business.amazon.in/", note: "15+ crore products with GST invoice, 3.5+ lakh sellers, 99.8% pincodes" },
        { title: "Amazon Business India: Savings and discounts", url: "https://business.amazon.in/en/key-features/reduce-costs", note: "Quantity discount tiers start at 2+ items" },
        { title: "Amazon Business India: Quantity discounts", url: "https://business.amazon.in/en/discover-more/blog/quantity-discounts", note: "Request discount on a greater quantity" },
        { title: "Amazon Business India: Contact us / FAQ", url: "https://business.amazon.in/en/contact-us", note: "No minimum order quantity or value" },
      ],
    },
  ],
};
