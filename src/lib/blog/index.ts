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
];

export const POSTS: BlogPost[] = [...ALL].sort(
  (a, b) => +new Date(b.datePublished) - +new Date(a.datePublished)
);

export const POST_MAP: Record<string, BlogPost> = Object.fromEntries(ALL.map((p) => [p.slug, p]));
