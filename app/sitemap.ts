import type { MetadataRoute } from "next"

import { SITE_CONFIG } from "@/config/site"
import { getAllPosts } from "@/lib/blog"

export default function sitemap(): MetadataRoute.Sitemap {
  const posts = getAllPosts()

  const latestPostDate = posts[0]?.date
    ? new Date(posts[0].date)
    : new Date("2025-01-01")

  const blogPosts = posts.map((post) => ({
    url: `${SITE_CONFIG.url}/blog/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [
    {
      url: SITE_CONFIG.url,
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${SITE_CONFIG.url}/blog`,
      lastModified: latestPostDate,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogPosts,
  ]
}
