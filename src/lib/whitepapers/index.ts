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
import { personalisedMerchandisingIndia2026 } from "./personalised-merchandising-bundles-zero-party-data-india-2026";
import { crossBorderD2cExportsIndia2026 } from "./cross-border-d2c-exports-compliance-landed-cost-india-2026";
import { ecommerceGrowthPartnerOperatingModel2027 } from "./ecommerce-growth-partner-operating-model-2027";
import { machineReadableCatalogsIndia2026 } from "./machine-readable-product-catalogs-ai-shopping-agents-india-2026";
import { omnichannelInventoryReturnsIndia2026 } from "./omnichannel-inventory-returns-rto-india-2026";
import { retailMediaNetworksIndia2026 } from "./retail-media-networks-quick-commerce-ctv-india-2026";
import { ondcOpenNetworkIndia2026 } from "./ondc-open-network-digital-commerce-india-2026";
import { darkStoreAutomationColdChainIndia2026 } from "./dark-store-automation-cold-chain-quick-commerce-india-2026";
import { postAggregatorRollUp2India2026 } from "./post-aggregator-era-brand-roll-up-2-india-2026";
import { liveStreamVideoCommerceIndia2026 } from "./live-stream-video-commerce-india-2026";
import { whatsappConversationalCommerceIndia2026 } from "./whatsapp-conversational-commerce-chat-checkout-india-2026";

const ALL: WhitePaper[] = [aiShoppingAssistantsIndia, agenticCommerceOmnichannelIndia, quickCommerceSocialDiscoveryIndia, agentEngineOptimizationAmazonGoogleAiMode, cacSqueezeMarketingEfficiencyRatioIndia, quickCommerceUnitEconomicsIndia2026, amazonSearchRankingTacosIndia2026, aiAgentsRetailOperationsIndia2026, zeroClickAttributionMmmIndia2026, personalisedMerchandisingIndia2026, crossBorderD2cExportsIndia2026, ecommerceGrowthPartnerOperatingModel2027, machineReadableCatalogsIndia2026, omnichannelInventoryReturnsIndia2026, whatsappConversationalCommerceIndia2026, retailMediaNetworksIndia2026, ondcOpenNetworkIndia2026, darkStoreAutomationColdChainIndia2026, postAggregatorRollUp2India2026, liveStreamVideoCommerceIndia2026];

export const WHITEPAPERS: WhitePaper[] = [...ALL].sort((a, b) => b.datePublished.localeCompare(a.datePublished));
export const WHITEPAPER_MAP: Record<string, WhitePaper> = Object.fromEntries(WHITEPAPERS.map((w) => [w.slug, w]));
