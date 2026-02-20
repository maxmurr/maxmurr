import type { Metadata } from "next"
import Link from "next/link"

import { SITE_CONFIG } from "@/config/site"
import { formatPostDate, getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Articles about React, TypeScript, and modern web development.",
  alternates: {
    canonical: "/blog",
  },
}

export default function BlogPage() {
  const posts = getAllPosts()

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: "Blog",
        description:
          "Articles about React, TypeScript, and modern web development.",
        url: `${SITE_CONFIG.url}/blog`,
        mainEntity: {
          "@type": "ItemList",
          itemListElement: posts.map((post, index) => ({
            "@type": "ListItem",
            position: index + 1,
            url: `${SITE_CONFIG.url}/blog/${post.slug}`,
            name: post.title,
          })),
        },
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: SITE_CONFIG.url,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: `${SITE_CONFIG.url}/blog`,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="mx-auto max-w-2xl px-6 py-16">
        <h1 className="text-3xl font-bold tracking-tight">Blog</h1>
        <p className="mt-2 text-muted-foreground">
          Writing about software engineering and web development.
        </p>

        {posts.length === 0 ? (
          <p className="mt-12 text-muted-foreground">No posts yet.</p>
        ) : (
          <ul className="mt-12 flex flex-col gap-8">
            {posts.map((post) => (
              <li key={post.slug}>
                <Link
                  href={`/blog/${post.slug}`}
                  className="-mx-4 group block rounded-lg p-4 transition-colors duration-150 ease-out hover:bg-muted/50"
                >
                  <time
                    dateTime={post.date}
                    className="text-sm text-muted-foreground"
                  >
                    {formatPostDate(post.date)}
                  </time>
                  <h2 className="mt-1 text-lg font-semibold group-hover:text-foreground">
                    {post.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {post.excerpt}
                  </p>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </main>
    </>
  )
}
