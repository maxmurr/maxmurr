import fs from "fs"
import path from "path"

import matter from "gray-matter"
import { remark } from "remark"
import remarkGfm from "remark-gfm"
import remarkHtml from "remark-html"

export interface BlogPost {
  slug: string
  title: string
  date: string
  excerpt: string
  content: string
}

export const formatPostDate = (date: string): string =>
  new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

const POSTS_DIR = path.join(process.cwd(), "content/blog")

export function getAllPosts(): Omit<BlogPost, "content">[] {
  const files = fs
    .readdirSync(POSTS_DIR)
    .filter((file) => file.endsWith(".md"))

  return files
    .map((file) => {
      const slug = file.replace(/\.md$/, "")
      const raw = fs.readFileSync(path.join(POSTS_DIR, file), "utf-8")
      const { data } = matter(raw)

      return {
        slug,
        title: data.title as string,
        date: data.date as string,
        excerpt: data.excerpt as string,
      }
    })
    .sort((a, b) => (a.date > b.date ? -1 : 1))
}

export async function getPostBySlug(
  slug: string,
): Promise<BlogPost | undefined> {
  const filePath = path.join(POSTS_DIR, `${slug}.md`)

  if (!filePath.startsWith(POSTS_DIR)) return undefined
  if (!fs.existsSync(filePath)) return undefined

  const raw = fs.readFileSync(filePath, "utf-8")
  const { data, content: markdown } = matter(raw)
  const result = await remark()
    .use(remarkGfm)
    .use(remarkHtml, { sanitize: true })
    .process(markdown)

  return {
    slug,
    title: data.title as string,
    date: data.date as string,
    excerpt: data.excerpt as string,
    content: result.toString(),
  }
}
