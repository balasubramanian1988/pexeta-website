// lib/whitepapers/types.ts — one source of truth for every white paper.
// Add a paper: create lib/whitepapers/<slug>.ts exporting a WhitePaper, then register it in lib/whitepapers/index.ts.
// Body uses the same blocks as the blog (see lib/blog/types.ts), so the blog renderer is reused.
import type { BlogBlock } from "@/lib/blog/types";

export type WhitePaper = {
  slug: string;
  title: string;            // H1 and card title
  subtitle: string;         // shown under the title
  titleTag: string;         // <title> for SEO
  metaDescription: string;
  excerpt: string;          // card summary on /whitepapers
  author: string;
  datePublished: string;    // YYYY-MM-DD
  dateModified: string;
  readMinutes: number;
  keywords: string[];       // reference only, not rendered
  body: BlogBlock[];
};
