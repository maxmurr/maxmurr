"use client"

import { useCallback, useEffect, useRef, useState } from "react"

import { SITE_CONFIG } from "@/config/site"

export const CopyEmail = () => {
  const [copied, setCopied] = useState(false)
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null)

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current)
    }
  }, [])

  const handleCopy = useCallback(async () => {
    await navigator.clipboard.writeText(SITE_CONFIG.email)
    setCopied(true)
    if (timeoutRef.current) clearTimeout(timeoutRef.current)
    timeoutRef.current = setTimeout(() => setCopied(false), 2000)
  }, [])

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-live="polite"
      className="inline-grid cursor-pointer text-foreground underline decoration-muted-foreground/40 underline-offset-2 transition-colors duration-150 ease-out hover:decoration-foreground"
    >
      <span
        aria-hidden={copied}
        className={`col-start-1 row-start-1 transition-opacity duration-150 ease-out ${copied ? "opacity-0" : "opacity-100"}`}
      >
        {SITE_CONFIG.email}
      </span>
      <span
        aria-hidden={!copied}
        className={`col-start-1 row-start-1 text-center transition-opacity duration-150 ease-out ${copied ? "opacity-100" : "opacity-0"}`}
      >
        Copied!
      </span>
    </button>
  )
}
