import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { SITE_CONFIG } from "@/config/site";
import { formatPostDate, getAllPosts, getPostBySlug } from "@/lib/blog";

import "./prose.css";

export async function generateStaticParams(): Promise<{ slug: string }[]> {
	return getAllPosts().map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>;
}): Promise<Metadata> {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) return {};

	return {
		title: post.title,
		description: post.excerpt,
		alternates: {
			canonical: `/blog/${slug}`,
		},
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.date,
			authors: [SITE_CONFIG.name],
		},
		twitter: {
			title: post.title,
			description: post.excerpt,
		},
	};
}

export default async function BlogPostPage({
	params,
}: {
	params: Promise<{ slug: string }>;
}) {
	const { slug } = await params;
	const post = await getPostBySlug(slug);

	if (!post) notFound();

	const jsonLd = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "BlogPosting",
				headline: post.title,
				description: post.excerpt,
				datePublished: post.date,
				author: {
					"@type": "Person",
					name: SITE_CONFIG.name,
					url: SITE_CONFIG.url,
				},
				publisher: {
					"@type": "Person",
					name: SITE_CONFIG.name,
					url: SITE_CONFIG.url,
				},
				mainEntityOfPage: {
					"@type": "WebPage",
					"@id": `${SITE_CONFIG.url}/blog/${slug}`,
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
					{
						"@type": "ListItem",
						position: 3,
						name: post.title,
						item: `${SITE_CONFIG.url}/blog/${slug}`,
					},
				],
			},
		],
	};

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<main className="mx-auto max-w-2xl px-6 py-16">
				<Link
					href="/blog"
					className="inline-flex items-center gap-1.5 text-sm text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground"
				>
					<ArrowLeft className="size-3.5" />
					Back to blog
				</Link>

				<article className="mt-8">
					<time dateTime={post.date} className="text-sm text-muted-foreground">
						{formatPostDate(post.date)}
					</time>
					<h1 className="mt-2 text-3xl font-bold tracking-tight">
						{post.title}
					</h1>

					<div
						className="prose mt-8"
						dangerouslySetInnerHTML={{ __html: post.content }}
					/>
				</article>
			</main>
		</>
	);
}
