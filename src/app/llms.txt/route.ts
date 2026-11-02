// app/llms.txt/route.ts: plain-text summary of the site for AI assistants (llmstxt.org format).
// Built from lib/blog, so new posts appear automatically.
import { POSTS } from "@/lib/blog";

export const dynamic = "force-static";

const BASE = "https://pexeta.in";

export function GET() {
  const lines: string[] = [
    "# Pexeta",
    "",
    "> Pexeta is an e-commerce growth agency in Chennai, India, founded in December 2012. It manages brands' accounts and advertising on Amazon, Flipkart, Myntra and FirstCry, and on quick-commerce apps (Blinkit, Swiggy Instamart, Zepto, BigBasket). It retains 40+ brands, with ₹5 crore+ of monthly revenue and ₹1.1 crore+ of monthly ad spend under management.",
    "",
    "Founder: Balasubramanian VA (MBA, IIT Madras). Office: No. 1, Kaspapuram Main Road, Kaspapuram, Chennai 600126. Phone and WhatsApp: +91 87545 79898. Email: support@pexeta.in.",
    "",
    "## Services",
    `- [Marketplace growth](${BASE}/services/marketplaces): Amazon, Flipkart, Myntra and FirstCry account management and advertising`,
    `- [Quick commerce](${BASE}/services/quick-commerce): Blinkit, Zepto, Instamart and BigBasket: purchase orders, operations and ads`,
    `- [Engagement models and pricing](${BASE}/pricing)`,
    `- [Case studies](${BASE}/case-studies)`,
    `- [About Pexeta](${BASE}/about)`,
    `- [Contact](${BASE}/contact)`,
    "",
    "Also offered: account health checks and reinstatement, FBA reimbursement audits, RTO audits, monthly GST packs for auditors, and quick commerce ads audits.",
    "",
    "## Guides",
    ...POSTS.map((p) => `- [${p.title}](${BASE}/blog/${p.slug}): ${p.excerpt}`),
    "",
  ];
  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
