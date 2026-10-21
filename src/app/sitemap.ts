import type { MetadataRoute } from "next";
import { POSTS } from "@/lib/blog";

const routes = [
  "",
  "/services/marketplaces",
  "/services/quick-commerce",
  "/case-studies",
  "/pricing",
  "/about",
  "/careers",
  "/contact",
  "/blog",
  "/privacy-policy",
  "/terms",
  "/refund-policy",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: MetadataRoute.Sitemap = routes.map((route) => ({
    url: `https://pexeta.in${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));
  const posts: MetadataRoute.Sitemap = POSTS.map((p) => ({
    url: `https://pexeta.in/blog/${p.slug}`,
    lastModified: new Date(p.dateModified),
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [...pages, ...posts];
}
