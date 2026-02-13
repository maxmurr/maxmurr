"use client"

import { Github, Linkedin } from "lucide-react"

import { SITE_CONFIG } from "@/config/site"

const SOCIAL_ICONS: Record<string, typeof Github> = {
  github: Github,
  linkedin: Linkedin,
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
                className="text-muted-foreground transition-[color,transform] duration-150 ease hover:scale-110 hover:text-foreground active:scale-95"
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
