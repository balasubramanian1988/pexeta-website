import type { BlogPost } from "./types";

export const amazonVineIndiaGuide: BlogPost = {
  slug: "amazon-vine-india-guide",
  title: "Amazon Vine in India: How It Works, Who's Eligible and How to Use It for a Launch",
  titleTag: "Amazon Vine India Guide (2026): Eligibility, Fees, Enrollment & Launch Strategy",
  metaDescription:
    "How Amazon Vine works for Amazon.in sellers: eligibility (Brand Registry, under 30 reviews, FBA offer), how the enrollment fee is charged, the real cost of free units, and how to use Vine reviews as part of a product launch.",
  excerpt:
    "A new listing with zero or two reviews struggles to convert, however good the product. Amazon Vine is the one review programme Amazon allows for free products. Here's how it works on Amazon.in and how to plan it into a launch.",
  category: "Amazon Operations",
  author: "Pexeta Team",
  datePublished: "2026-11-24",
  dateModified: "2026-11-24",
  readMinutes: 6,
  keywords: [
    "amazon vine india",
    "amazon vine eligibility",
    "amazon vine enrollment fee",
    "how to get first reviews amazon india",
    "vine voices reviews",
  ],
  verifyNote:
    "Vine available on Amazon.in (user's Seller Central screenshot, 22 Nov 2026: Marketing → Vine). India fee in INR not confirmed from an official source (one third-party article gives both ₹2,600 and ₹7,500), so the article gives US tiers as reference and tells sellers to check the fee shown in the enrollment tool. 'Enroll up to 2 units free till 21 July' is from an Amazon.in forum post, not used.",
  body: [
    { kind: "p", text: "Shoppers rarely buy a product with no reviews when a competitor has hundreds. That makes the first 20 to 30 reviews the hardest part of any launch. Buying reviews or giving free products for reviews is against Amazon's rules and, in India, a consumer-law risk. **Amazon Vine** is the exception Amazon runs itself." },

    { kind: "h2", text: "How Amazon Vine works" },
    {
      kind: "ol",
      items: [
        "You enroll an eligible product and choose how many free units (up to 30 per parent product) to make available.",
        "**Vine Voices**, reviewers Amazon invites based on the quality of their past reviews, choose products they want to try.",
        "Amazon ships them the units from your FBA stock.",
        "They decide whether to review, and write what they honestly think. You can't choose the reviewers or ask for positive reviews.",
        "Vine reviews appear on your listing with a Vine label, so shoppers know the reviewer received the product free.",
      ],
    },
    { kind: "p", text: "Amazon has prohibited incentivised reviews since October 2016, except through Vine. That's why Vine is the only compliant way to give products away in exchange for reviews on Amazon." },

    { kind: "h2", text: "Eligibility on Amazon.in" },
    {
      kind: "ul",
      items: [
        "You must be registered as a seller on Amazon.in with a **Professional** selling account.",
        "The product must belong to a brand you represent in **Amazon Brand Registry**.",
        "The product detail page must have **fewer than 30 reviews**.",
        "The product must have a **buyable FBA offer in New condition**, with stock available.",
        "Adult, digital and bundled products aren't eligible.",
      ],
    },
    { kind: "p", text: "On Amazon.in, Vine is in Seller Central under the **Marketing** menu. Not having Brand Registry is the most common blocker. See our [Brand Registry guide](/blog/amazon-brand-registry-a-plus-content-india)." },

    { kind: "h2", text: "What Vine costs" },
    { kind: "p", text: "There are two costs: the **enrollment fee** and the **products you give away**." },
    { kind: "h3", text: "Enrollment fee" },
    {
      kind: "ul",
      items: [
        "The fee is charged **once per parent ASIN**, with no extra charge for child variations.",
        "It is charged **seven days after the first Vine review is published**, not when you enroll.",
        "If no Vine review is published within **90 days** of enrollment, you aren't charged.",
        "Amazon's terms say the fee is shown in the online enrollment tool when you enroll. Check the Amazon.in fee there before you confirm.",
      ],
    },
    { kind: "p", text: "For reference, Amazon's US page lists three tiers by units enrolled per parent product:" },
    {
      kind: "table",
      headers: ["Units enrolled (US)", "Enrollment fee (US)"],
      rows: [
        ["Up to 2", "$0"],
        ["3 to 10", "$75"],
        ["11 to 30", "$200"],
      ],
    },
    { kind: "h3", text: "Cost of the free units" },
    { kind: "p", text: "The units Vine Voices receive are your stock. Add your landed cost per unit and the FBA fees for shipping them. For a paddle, appliance or other higher-value product, the free units usually cost more than the enrollment fee, so plan how many you really need." },
    {
      kind: "quote",
      text: "Total Vine cost = enrollment fee + (units enrolled × landed cost per unit) + FBA fulfilment fees for those units.",
    },
    { kind: "p", text: "The 30-unit cap counts existing reviews. A product that already has 5 reviews can get at most 25 more through Vine." },

    { kind: "h2", text: "Using Vine in a launch" },
    {
      kind: "ol",
      items: [
        "**Fix the listing first.** Vine Voices see the same detail page as shoppers and review against it. Get the title, images, bullets and A+ content right, and make sure the material and specs are accurate.",
        "**Make sure the product is ready.** Vine reviews are honest and can be critical. A product with a quality or packaging issue will get reviews that say so.",
        "**Enroll the parent ASIN** with variations included, so reviewers can choose a size or colour.",
        "**Choose units deliberately.** Enough reviews to lift conversion; not so many that the free stock costs more than it returns.",
        "**Keep FBA stock in place.** Vine units are fulfilled from FBA inventory, and you still need stock for paying customers.",
        "**Time the main ad push.** Plan bigger Sponsored Products budgets for after the first reviews arrive, so ad clicks land on a listing that has reviews.",
        "**Keep using Request a Review** for paying customers, which is allowed alongside Vine.",
      ],
    },

    { kind: "h2", text: "What Vine can't do" },
    {
      kind: "ul",
      items: [
        "It doesn't guarantee positive reviews, or any reviews at all.",
        "It won't fix a listing problem such as a high price, slow delivery or wrong category.",
        "It can't be used once a product passes 30 reviews.",
      ],
    },

    {
      kind: "faq",
      items: [
        { q: "Is Amazon Vine available in India?", a: "Yes. Eligible Amazon.in sellers can enroll products from the Marketing menu in Seller Central." },
        { q: "Who is eligible for Amazon Vine?", a: "Professional sellers registered on Amazon.in, for products in a brand they represent in Brand Registry, with fewer than 30 reviews and a buyable FBA offer in New condition." },
        { q: "When is the Vine fee charged?", a: "Once per parent ASIN, seven days after the first Vine review is published. If no Vine review is published within 90 days, there's no charge." },
        { q: "Can I ask Vine reviewers for good reviews?", a: "No. You can't choose the reviewers or influence what they write. Vine reviews are their honest opinion." },
        { q: "How many reviews can I get from Vine?", a: "Up to 30 units per parent product, and the cap includes existing reviews." },
      ],
    },

    {
      kind: "sources",
      items: [
        { title: "Amazon Seller Forums: How to enroll in the Vine program (Amazon.in eligibility)", url: "https://sellercentral-europe.amazon.com/seller-forums/discussions/t/1422541b-d7ea-432f-aa7c-8bd032470521" },
        { title: "Amazon (sell.amazon.com): Amazon Vine", url: "https://sell.amazon.com/tools/vine", note: "Up to 30 units per product; not charged until first review; US fee tiers" },
        { title: "Amazon (sell.amazon.com): Vine program", url: "https://sell.amazon.com/programs/vine", note: "Fee per parent product; adult, digital and bundled products excluded" },
        { title: "Amazon Seller Central Help: Vine", url: "https://sellercentral.amazon.com/gp/help/external/GX3CEV63Y4ZZAP37", note: "Fee charged once per parent ASIN, 7 days after first Vine review" },
        { title: "Amazon Seller Forums: Vine enrollment fee and 90-day rule", url: "https://sellercentral.amazon.com/seller-forums/discussions/t/8050c8650c952812d65e347e3f8ce423" },
        { title: "Amazon Seller Forums: Vine programme terms", url: "https://sellercentral.amazon.com/seller-forums/discussions/t/4b268f10047b02accb8e594e658204cf", note: "Fee provided in the online enrollment tool" },
        { title: "Jungle Scout: Amazon Vine program", url: "https://www.junglescout.com/resources/articles/amazon-vine-program/", note: "Existing reviews count towards the 30 cap" },
        { title: "SellerApp: Amazon Vine program and strategy", url: "https://www.sellerapp.com/blog/amazon-vine-program-and-the-strategy-behind-getting-more-reviews/", note: "Sellers can't choose reviewers or control reviews" },
        { title: "Amazon: Update on customer reviews (Oct 2016)", url: "https://www.aboutamazon.com/news/innovation-at-amazon/update-on-customer-reviews", note: "Incentivised reviews prohibited except through Vine" },
      ],
    },
  ],
};
