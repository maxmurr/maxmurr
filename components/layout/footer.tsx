"use client"

import type { LucideProps } from "lucide-react"
import { Github, Linkedin } from "lucide-react"

import { SITE_CONFIG } from "@/config/site"

const XIcon = (props: LucideProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
)

const SOCIAL_ICONS: Record<string, React.ComponentType<LucideProps>> = {
  github: Github,
  linkedin: Linkedin,
  x: XIcon,
}

export const Footer = () => {
  return (
    <footer className="pb-8 pt-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-4 px-6">
        <div className="flex items-center gap-3">
          {SITE_CONFIG.socialLinks.map((link) => {
            const Icon = SOCIAL_ICONS[link.icon]
            return (
              <a
                key={link.platform}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.platform}
                className="text-muted-foreground transition-[color,transform] duration-150 ease-out will-change-transform hover:scale-105 hover:text-foreground active:scale-[0.97]"
              >
                {Icon && <Icon className="size-5" />}
              </a>
            )
          })}
        </div>
        <p className="text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} {SITE_CONFIG.name}
        </p>
      </div>
    </footer>
  )
}
