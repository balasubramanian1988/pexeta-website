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
import { agenticCommerceOmnichannelIndia } from "./agentic-commerce-omnichannel-growth-india-2026";
import { quickCommerceSocialDiscoveryIndia } from "./quick-commerce-social-discovery-india-2026";
import { agentEngineOptimizationAmazonGoogleAiMode } from "./agent-engine-optimization-amazon-google-ai-mode";
import { cacSqueezeMarketingEfficiencyRatioIndia } from "./cac-squeeze-marketing-efficiency-ratio-india";
import { quickCommerceUnitEconomicsIndia2026 } from "./quick-commerce-unit-economics-margin-defense-india-2026";
import { amazonSearchRankingTacosIndia2026 } from "./amazon-search-ranking-tacos-governance-india-2026";
import { aiAgentsRetailOperationsIndia2026 } from "./ai-agents-retail-operations-pricing-inventory-india-2026";
import { zeroClickAttributionMmmIndia2026 } from "./zero-click-attribution-mmm-incrementality-india-2026";

const ALL: WhitePaper[] = [aiShoppingAssistantsIndia, agenticCommerceOmnichannelIndia, quickCommerceSocialDiscoveryIndia, agentEngineOptimizationAmazonGoogleAiMode, cacSqueezeMarketingEfficiencyRatioIndia, quickCommerceUnitEconomicsIndia2026, amazonSearchRankingTacosIndia2026, aiAgentsRetailOperationsIndia2026, zeroClickAttributionMmmIndia2026];

export const WHITEPAPERS: WhitePaper[] = [...ALL].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
export const WHITEPAPER_MAP: Record<string, WhitePaper> = Object.fromEntries(WHITEPAPERS.map((w) => [w.slug, w]));
