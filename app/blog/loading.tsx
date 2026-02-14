export default function BlogLoading() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16">
      <div className="h-9 w-24 animate-pulse rounded-md bg-muted" />
      <div className="mt-2 h-5 w-80 animate-pulse rounded-md bg-muted" />

      <ul className="mt-12 flex flex-col gap-8">
        {Array.from({ length: 3 }, (_, i) => (
          <li key={i} className="space-y-2 rounded-lg p-4">
            <div className="h-4 w-32 animate-pulse rounded bg-muted" />
            <div className="h-6 w-3/4 animate-pulse rounded bg-muted" />
            <div className="h-4 w-full animate-pulse rounded bg-muted" />
          </li>
        ))}
      </ul>
    </main>
  )
}
