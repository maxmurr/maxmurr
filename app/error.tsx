"use client"

export default function Error({
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-semibold tracking-tight">Error</h1>
      <p className="mt-2 text-muted-foreground">Something went wrong.</p>
      <button
        onClick={() => reset()}
        className="mt-6 text-sm text-muted-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors duration-150 ease-out hover:text-foreground"
      >
        Try again
      </button>
    </main>
  )
}
