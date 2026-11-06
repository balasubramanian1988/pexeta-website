// lib/whitepapers/index.ts
// ============================================================
//  Central white paper registry. To ADD a paper:
//    1. Create lib/whitepapers/<slug>.ts exporting a WhitePaper.
//    2. Add one import line below + one entry in the ALL array.
//  Papers render newest-first automatically (sorted by datePublished).
// ============================================================
export type { WhitePaper } from "./types";
import type { WhitePaper } from "./types";

import { aiShoppingAssistantsIndia } from "./ai-shopping-assistants-marketplace-selling-india";

const ALL: WhitePaper[] = [aiShoppingAssistantsIndia];

export const WHITEPAPERS: WhitePaper[] = [...ALL].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
export const WHITEPAPER_MAP: Record<string, WhitePaper> = Object.fromEntries(WHITEPAPERS.map((w) => [w.slug, w]));
