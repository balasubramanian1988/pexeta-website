import type { BlogPost } from "./types";

export const recoverFbaReimbursements: BlogPost = {
  slug: "recover-fba-reimbursements-lost-damaged-inventory",
  title: "How to Recover FBA Reimbursements for Lost and Damaged Inventory",
  titleTag: "Amazon FBA Reimbursements in India: How to Claim for Lost and Damaged Stock",
  metaDescription: "Amazon reimburses FBA sellers when it loses or damages stock, or when a refunded customer never returns the item. Here's where money slips through in India, which reports to check, and how to claim before the window closes.",
  excerpt: "Amazon pays for stock it loses or damages, but not always automatically, and claim windows are short. Here's where the money slips through and how to recover it.",
  category: "Amazon Operations",
  author: "Pexeta Team",
  datePublished: "2026-11-02",
  dateModified: "2026-11-02",
  readMinutes: 7,
  keywords: ["amazon fba reimbursement india", "fba lost inventory claim", "amazon reimbursement claim", "fba damaged inventory", "inventory ledger report amazon", "amazon customer return not received"],
  verifyNote: "Amazon shortened most FBA reimbursement claim windows (except shipments to Amazon) from 18 months to 60 days in Oct 2024 (Seller Central India forums). Exact windows and valuation rules vary by claim type and change often: the post tells readers to check the current FBA inventory reimbursement policy in Seller Central rather than stating every window.",
  body: [
    {"kind": "p", "text": "When you use Fulfilled by Amazon (FBA), your stock passes through many hands: your courier, Amazon's receiving dock, storage, picking, packing, customer returns and removals. Units get lost, damaged or miscounted along the way. Amazon's **FBA inventory reimbursement policy** says it will pay you for stock it loses or damages, but only some of it is paid automatically, and the time you have to raise a claim is short."},
    {"kind": "p", "text": "For a busy FBA seller, unclaimed reimbursements are one of the easiest sources of money to recover. Here's where it slips through and how to get it back."},

    {"kind": "h2", "text": "Where reimbursements come from"},
    {"kind": "table", "headers": ["Situation", "What happens", "Usually paid automatically?"], "rows": [
      ["**Lost or damaged in a fulfilment centre**", "Units go missing in storage or are damaged by Amazon", "Often, but not always"],
      ["**Shipment to Amazon received short**", "Amazon receives fewer units than you sent", "No: you raise it from the shipment"],
      ["**Customer refunded, item not returned**", "Amazon refunds the buyer, but the item never comes back", "Sometimes; check each case"],
      ["**Returned item damaged or wrong**", "The buyer sends back a damaged or different product and it is put back as unsellable", "Rarely; needs a claim"],
      ["**Removal order lost**", "Stock sent back to you or disposed of doesn't arrive", "No: you raise it"],
      ["**Fee overcharges**", "Wrong size or weight measured, so FBA fees are higher than they should be", "No: you raise it"]
    ]},

    {"kind": "h2", "text": "Claim windows are short"},
    {"kind": "p", "text": "In October 2024 Amazon shortened most FBA reimbursement claim windows from 18 months to **60 days**, apart from claims about shipments to Amazon. Some claim types also have a waiting period before you can raise them, for example while Amazon waits for a customer return to arrive."},
    {"kind": "quote", "text": "Windows differ by claim type and Amazon updates them. Check the current **FBA inventory reimbursement policy** in Seller Central Help, and review your reports **every two weeks**, not once a year."},

    {"kind": "h2", "text": "The reports to check"},
    {"kind": "ul", "items": [
      "**Inventory Ledger:** every movement of every unit (received, sold, returned, lost, found, damaged, disposed). The starting point for spotting units that disappeared.",
      "**Reimbursements report:** what Amazon has already paid, so you don't claim twice.",
      "**Shipments (Send to Amazon):** units sent versus units received for each shipment.",
      "**FBA Customer Returns:** returns received, with their condition (sellable, customer damaged, carrier damaged, defective).",
      "**Removal order details:** units requested, shipped and received for each removal.",
      "**Fee preview / fee details:** the size tier and weight Amazon uses for each product."
    ]},

    {"kind": "h2", "text": "A two-weekly reimbursement routine"},
    {"kind": "ol", "items": [
      "**Reconcile shipments.** For each closed shipment, compare units sent with units received. Raise a case for shortfalls with your proof of delivery and box contents.",
      "**Check lost and damaged units** in the Inventory Ledger against the Reimbursements report. Units marked lost or damaged by Amazon with no reimbursement (and not later found) are worth a claim.",
      "**Match refunds to returns.** For each order refunded more than a few weeks ago, check whether the item came back. Refunds with no matching return are claimable once the waiting period has passed.",
      "**Review returns marked unsellable.** If a customer sent back a damaged, used or different item, raise it with the order details and photos where Amazon offers them.",
      "**Check removals.** Count what actually arrived at your warehouse against the removal order.",
      "**Spot-check fees.** If a product's size tier or weight looks wrong, ask Amazon to re-measure it.",
      "**Track every case** in one sheet: order or shipment ID, units, claim date, case ID, outcome and amount."
    ]},

    {"kind": "h2", "text": "How to raise a strong claim"},
    {"kind": "ul", "items": [
      "**One clear issue per case,** with the shipment ID, order ID or FNSKU and the exact unit count.",
      "**Attach proof:** your invoice showing the product cost, proof of delivery for shipments, packing lists and photos.",
      "**Keep it factual and short.** State what the report shows and what you are asking for.",
      "**Follow up on partial payments.** If Amazon reimburses fewer units than claimed, reply on the same case with the reconciliation."
    ]},

    {"kind": "h2", "text": "Stop the losses at the source"},
    {"kind": "ul", "items": [
      "**Label and pack shipments correctly,** with box content information, so receiving counts match.",
      "**Check high-return products.** If customers keep returning a product as damaged, the packaging may need work.",
      "**Measure your products accurately** before listing, so fees are right from day one.",
      "**Keep supplier invoices** for every product; Amazon may ask for them to value a reimbursement."
    ]},

    {"kind": "faq", "items": [
      {"q": "Does Amazon reimburse lost FBA inventory automatically?", "a": "For many units lost or damaged inside its fulfilment centres, yes. But shipment shortfalls, refunds where the item never came back, damaged returns, lost removals and fee errors often need a claim from you."},
      {"q": "How long do I have to claim an FBA reimbursement?", "a": "Since October 2024, most claim types must be raised within 60 days, apart from claims about shipments to Amazon. Windows vary by claim type, so check the current FBA inventory reimbursement policy in Seller Central."},
      {"q": "Which report shows lost and damaged FBA inventory?", "a": "The Inventory Ledger shows every movement of each unit, including units Amazon marks as lost, found, damaged or disposed. Compare it with the Reimbursements report to see what hasn't been paid."},
      {"q": "What if a customer returns a different or damaged item?", "a": "Raise a claim with the order ID, the return details and any photos or condition notes Amazon recorded. These are rarely reimbursed automatically."}
    ]},
    {"kind": "sources", "items": [{"title": "Amazon Seller Forums (India): FBA inventory reimbursement policy changes", "url": "https://sellercentral.amazon.in/seller-forums/discussions/t/2de1ef2f-e299-486c-9466-48a885c3faef", "note": "Claim windows shortened to 60 days, Oct 2024"}]}
  ]
};
