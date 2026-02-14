import Link from "next/link"

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6">
      <h1 className="text-4xl font-semibold tracking-tight">404</h1>
      <p className="mt-2 text-muted-foreground">Page not found.</p>
      <Link
        href="/"
        className="mt-6 text-sm text-muted-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors duration-150 ease-out hover:text-foreground"
      >
        Back to home
      </Link>
    </main>
  )
}
