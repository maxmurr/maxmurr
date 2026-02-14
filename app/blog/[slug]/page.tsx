import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import { ArrowLeft } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
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
		openGraph: {
			title: post.title,
			description: post.excerpt,
			type: "article",
			publishedTime: post.date,
			authors: [SITE_CONFIG.name],
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

	return (
		<>
			<Header />
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
			<Footer />
		</>
	);
}
