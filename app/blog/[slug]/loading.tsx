export default function BlogPostLoading() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="h-4 w-28 animate-pulse rounded bg-muted" />

      <div className="mt-8 space-y-3">
        <div className="h-4 w-32 animate-pulse rounded bg-muted" />
        <div className="h-9 w-3/4 animate-pulse rounded-md bg-muted" />
      </div>

      <div className="mt-8 space-y-3">
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-5/6 animate-pulse rounded bg-muted" />
        <div className="mt-6 h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-full animate-pulse rounded bg-muted" />
        <div className="h-4 w-2/3 animate-pulse rounded bg-muted" />
      </div>
    </main>
  )
}
