// lib/blog/types.ts — one source of truth for every blog post.
// Add a post: create lib/blog/<slug>.ts exporting a BlogPost, then register it in lib/blog/index.ts.

export type BlogBlock =
  | { kind: "p"; text: string }                           // paragraph (supports **bold** and [text](url))
  | { kind: "h2"; text: string }
  | { kind: "h3"; text: string }
  | { kind: "quote"; text: string }                       // callout / tip box
  | { kind: "ul"; items: string[] }                       // bullet list
  | { kind: "ol"; items: string[] }                       // numbered list
  | { kind: "table"; headers: string[]; rows: string[][] }
  | { kind: "faq"; items: { q: string; a: string }[] }    // FAQ block (also feeds FAQ schema)
  | { kind: "sources"; items: { title: string; url: string; note?: string }[] }; // highlighted, numbered source list

export type BlogPost = {
  slug: string;
  title: string;            // H1 and card title
  titleTag: string;         // <title> for SEO
  metaDescription: string;
  excerpt: string;          // card summary on /blog
  category: "Amazon Ads" | "Amazon Operations" | "Marketplace Strategy" | "Quick Commerce" | "Profitability";
  author: string;
  datePublished: string;    // YYYY-MM-DD
  dateModified: string;
  readMinutes: number;
  keywords: string[];       // reference only, not rendered
  body: BlogBlock[];
  verifyNote?: string;      // internal reminder, not rendered
};
