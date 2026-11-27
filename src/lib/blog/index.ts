// lib/blog/index.ts
// ============================================================
//  Central blog registry. To ADD a post:
//    1. Create lib/blog/<slug>.ts exporting a BlogPost.
//    2. Add one import line below + one entry in the ALL array.
//  Posts render newest-first automatically (sorted by datePublished).
// ============================================================
export type { BlogPost, BlogBlock } from "./types";
import type { BlogPost } from "./types";

import { acosVsTacos } from "./acos-vs-tacos-amazon-india";
import { amazonSponsoredAdsTypes } from "./amazon-sponsored-ads-types-guide";
import { amazonAdsDayparting } from "./amazon-ads-dayparting-india";
import { amazonAccountHealthIndia } from "./amazon-account-health-india";
import { fixSuppressedListings } from "./fix-suppressed-listings-amazon";
import { amazonBrandRegistryAPlus } from "./amazon-brand-registry-a-plus-india";
import { amazonFulfilmentOptionsIndia } from "./amazon-fulfilment-options-india";
import { amazonVsFlipkartD2c } from "./amazon-vs-flipkart-d2c-brands";
import { sellingOnQuickCommerce } from "./selling-on-quick-commerce-india";
import { amazonIndiaProfitPerUnit } from "./amazon-india-profit-per-unit";
import { flipkartAdsPlaPcaGuide } from "./flipkart-ads-pla-pca-guide";
import { winAmazonBuyBoxIndia } from "./win-amazon-buy-box-india";
import { amazonIndiaSellerFees2026 } from "./amazon-india-seller-fees-2026";
import { sellingOnFirstcryGuide } from "./selling-on-firstcry-guide";
import { amazonListingSeoIndiaKeywordsTitles } from "./amazon-listing-seo-india-keywords-titles";
import { globalEcommerceLogistics2026IndianSellers } from "./global-ecommerce-logistics-2026-indian-sellers";
import { amazonAccountSuspendedReinstatementIndia } from "./amazon-account-suspended-reinstatement-india";
import { reduceRtoCodOrdersIndia } from "./reduce-rto-cod-orders-india";
import { gstTcsReconciliationAmazonFlipkart } from "./gst-tcs-reconciliation-amazon-flipkart-sellers";
import { quickCommercePlatformsComparedIndia } from "./quick-commerce-platforms-compared-india";
import { quickCommerceAdsBlinkitZeptoInstamart } from "./quick-commerce-ads-blinkit-zepto-instamart";
import { quickCommerceMarginsFeesBrands } from "./quick-commerce-margins-fees-brands";
import { quickCommerceListingDocumentsCompliance } from "./quick-commerce-listing-documents-compliance";
import { quickCommerceShelfLifeRulesRejections } from "./quick-commerce-shelf-life-rules-rejections";
import { flipkartMinutesAmazonNowForBrands } from "./flipkart-minutes-amazon-now-for-brands";
import { quickCommerceStockPlanningCityWise } from "./quick-commerce-stock-planning-city-wise";
import { quickCommerceProductAvailability } from "./quick-commerce-product-availability-in-stock-rates";
import { quickCommercePoFillRates } from "./quick-commerce-po-fill-rates-dark-stores";
import { costOfStockoutsAmazonIndia } from "./cost-of-stockouts-amazon-india";
import { recoverFbaReimbursements } from "./recover-fba-reimbursements-lost-damaged-inventory";
import { flipkartZeroCommission } from "./flipkart-zero-commission-what-sellers-still-pay";
import { sellingOnMeeshoGuide } from "./selling-on-meesho-zero-commission-guide";
import { sellingOnMyntraGuide } from "./selling-on-myntra-models-fees-zero-commission";
import { legalMetrologyOnlineSellers } from "./legal-metrology-rules-online-sellers-listing-labels";
import { ondcForBrandsSellersIndia } from "./ondc-for-brands-sellers-india";
import { bisCertificationOnlineSellers } from "./bis-certification-amazon-flipkart-sellers";
import { quickCommerceInventoryLedModelBrands } from "./quick-commerce-inventory-led-model-brands";
import { quickCommerceTier2CitiesBrands } from "./quick-commerce-tier-2-cities-brands";
import { amazonSafeTClaimsIndia } from "./amazon-safe-t-claims-india";
import { amazonIndiaSellerAiTools2026 } from "./amazon-india-seller-ai-tools-2026";
import { ecommerceAmendmentRules2026Sellers } from "./ecommerce-amendment-rules-2026-sellers";
import { alexaForShoppingIndiaAmazonSellers } from "./alexa-for-shopping-india-amazon-sellers";
import { amazonFlipkartCancellationDispatchPenalties2026 } from "./amazon-flipkart-cancellation-dispatch-penalties-2026";
import { fakeReviewsRulesIndiaSellers } from "./fake-reviews-rules-india-sellers";
import { eprPlasticPackagingRegistrationOnlineSellersIndia } from "./epr-plastic-packaging-registration-online-sellers-india";
import { amazonVineIndiaGuide } from "./amazon-vine-india-guide";
import { amazonBrandAnalyticsSqpIndia } from "./amazon-brand-analytics-search-query-performance-india";
import { amazonSubscribeAndSaveIndia } from "./amazon-subscribe-and-save-india-sellers";
import { amazonBusinessB2bSellersIndia } from "./amazon-business-b2b-sellers-india";

const ALL: BlogPost[] = [
  acosVsTacos,
  amazonSponsoredAdsTypes,
  amazonAdsDayparting,
  amazonAccountHealthIndia,
  fixSuppressedListings,
  amazonBrandRegistryAPlus,
  amazonFulfilmentOptionsIndia,
  amazonVsFlipkartD2c,
  sellingOnQuickCommerce,
  amazonIndiaProfitPerUnit,
  flipkartAdsPlaPcaGuide,
  winAmazonBuyBoxIndia,
  amazonIndiaSellerFees2026,
  sellingOnFirstcryGuide,
  amazonListingSeoIndiaKeywordsTitles,
  globalEcommerceLogistics2026IndianSellers,
  amazonAccountSuspendedReinstatementIndia,
  reduceRtoCodOrdersIndia,
  gstTcsReconciliationAmazonFlipkart,
  quickCommercePlatformsComparedIndia,
  quickCommerceAdsBlinkitZeptoInstamart,
  quickCommerceMarginsFeesBrands,
  quickCommerceListingDocumentsCompliance,
  quickCommerceShelfLifeRulesRejections,
  flipkartMinutesAmazonNowForBrands,
  quickCommerceStockPlanningCityWise,
  quickCommerceProductAvailability,
  quickCommercePoFillRates,
  costOfStockoutsAmazonIndia,
  recoverFbaReimbursements,
  flipkartZeroCommission,
  sellingOnMeeshoGuide,
  sellingOnMyntraGuide,
  legalMetrologyOnlineSellers,
  ondcForBrandsSellersIndia,
  bisCertificationOnlineSellers,
  quickCommerceInventoryLedModelBrands,
  quickCommerceTier2CitiesBrands,
  amazonSafeTClaimsIndia,
  amazonIndiaSellerAiTools2026,
  ecommerceAmendmentRules2026Sellers,
  alexaForShoppingIndiaAmazonSellers,
  amazonFlipkartCancellationDispatchPenalties2026,
  fakeReviewsRulesIndiaSellers,
  eprPlasticPackagingRegistrationOnlineSellersIndia,
  amazonVineIndiaGuide,
  amazonBrandAnalyticsSqpIndia,
  amazonSubscribeAndSaveIndia,
  amazonBusinessB2bSellersIndia,
];

export const POSTS: BlogPost[] = [...ALL].sort(
  (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished)
);

export const POST_MAP: Record<string, BlogPost> = Object.fromEntries(ALL.map((p) => [p.slug, p]));
