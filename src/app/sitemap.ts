import type { MetadataRoute } from "next";

const routes = [
  "",
  "/services/marketplaces",
  "/services/quick-commerce",
  "/case-studies",
  "/pricing",
  "/about",
  "/careers",
  "/contact",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({
    url: `https://pexeta.in${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
}
