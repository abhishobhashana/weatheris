import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: "https://weatheris.vercel.app", priority: 1 },
  ];
}
