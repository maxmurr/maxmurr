"use client"

import Link from "next/link"
import { Menu, Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import type { NavItem } from "@/config/site"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { SITE_CONFIG } from "@/config/site"

const NAV_LINK_BASE =
  "rounded-md px-3 text-sm text-muted-foreground transition-colors duration-150 ease-out hover:text-foreground"

const NavLink = ({ item, className }: { item: NavItem; className?: string }) => {
  const cn = `${NAV_LINK_BASE} ${className ?? ""}`

  if (item.href.startsWith("/")) {
    return (
      <Link href={item.href} className={cn}>
        {item.label}
      </Link>
    )
  }

  return (
    <a href={item.href} className={cn}>
      {item.label}
    </a>
  )
}

const ThemeToggle = () => {
  const { setTheme, resolvedTheme } = useTheme()

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      aria-label="Toggle theme"
    >
      <Sun className="size-4 rotate-0 scale-100 transition-transform duration-200 ease-in-out dark:-rotate-90 dark:scale-0" />
      <Moon className="absolute size-4 rotate-90 scale-0 transition-transform duration-200 ease-in-out dark:rotate-0 dark:scale-100" />
    </Button>
  )
}

export const Header = () => {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-2xl items-center justify-between px-6">
        <nav className="hidden items-center gap-1 md:flex">
          {SITE_CONFIG.navItems.map((item) => (
            <NavLink key={item.href} item={item} className="py-1.5" />
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label="Open menu">
                <Menu className="size-4" />
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <SheetHeader>
                <SheetTitle>{SITE_CONFIG.name}</SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4">
                {SITE_CONFIG.navItems.map((item) => (
                  <SheetClose key={item.href} asChild>
                    <NavLink item={item} className="py-2" />
                  </SheetClose>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        <ThemeToggle />
      </div>
    </header>
  )
}
