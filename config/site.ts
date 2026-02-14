export interface NavItem {
  label: string
  href: string
}

export interface SocialLink {
  platform: string
  url: string
  icon: "github" | "linkedin" | "x"
}

export interface Project {
  title: string
  description: string
  technologies: string[]
  href?: string
  image?: string
}

export interface Experience {
  title: string
  company: string
  companyUrl?: string
  period: string
  description: string
}

export interface SiteConfig {
  name: string
  url: string
  headline: string
  bio: string
  location: string
  email: string
  github: string
  socialLinks: SocialLink[]
  navItems: NavItem[]
  projects: Project[]
  skills: string[]
  experience: Experience[]
}

export const SITE_CONFIG: SiteConfig = {
  name: "Max Murray",
  url: "https://maxmurr.com",
  headline: "Software Engineer",
  bio: "Building fast, maintainable web applications with React, TypeScript, and modern web architecture. Focused on high-quality standards and test-driven development.",
  location: "Bangkok, Thailand",
  email: "maxmurr.m@gmail.com",
  github: "maxmurr",

  socialLinks: [
    { platform: "GitHub", url: "https://github.com/maxmurr", icon: "github" },
    {
      platform: "LinkedIn",
      url: "https://linkedin.com/in/maxmurr",
      icon: "linkedin",
    },
    { platform: "X", url: "https://x.com/maxmurr__", icon: "x" },
  ],

  navItems: [
    { label: "Home", href: "/" },
    { label: "Projects", href: "#projects" },
    { label: "Experience", href: "#experience" },
    { label: "Blog", href: "/blog" },
  ],

  projects: [
    {
      title: "react-grep",
      description:
        "Dev tool that overlays React component names and source file locations on any element. Hold Cmd to inspect, tap Shift to toggle source, click to copy. Zero dependencies.",
      technologies: ["React", "TypeScript"],
      href: "https://react-grep.com",
      image: "https://react-grep.com/opengraph-image?bfafbd62df035060",
    },
    {
      title: "Thai PBS Election '68",
      description:
        "Live election results site for Thai PBS, handling 200,000+ peak visitors with advanced Next.js routing and real-time newsroom support.",
      technologies: ["Next.js", "TypeScript", "Tailwind CSS"],
      href: "https://www.thaipbs.or.th/LocalElection/result",
      image: "https://election68-asset.thaipbs.or.th/app-image/opengraph-image.jpg",
    },
{
      title: "Playboard",
      description:
        "Video platform UI with custom domain and subdomain support, enabling faster customer deployments and brand control.",
      technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
      href: "https://playboard.cloud",
      image: "https://www.playboard.cloud/opengraph-image.jpg?01f6125264f19290",
    },
    {
      title: "byteark-player-angular",
      description:
        "Angular video player library built on Video.js for ByteArk, expanding streaming partner compatibility and market reach.",
      technologies: ["Angular", "Video.js", "TypeScript"],
      href: "https://github.com/byteark/byteark-player-angular",
      image:
        "https://opengraph.githubassets.com/257e673c636ea46135c9c5d90967af2dc8a2e9e7b76bbc894c572f21538fbc4e/byteark/byteark-player-angular",
    },
    {
      title: "Mixay Paradise Hotel PMS",
      description:
        "Hotel property management system that cut monthly accounting time by 80% and improved bookkeeping accuracy for staff.",
      href: "https://github.com/maxmurr/mx-hotel",
      image:
        "https://opengraph.githubassets.com/d3b91987d78f0cfa514348d5519436a0b606ab6ab918221d0434dbf95c8b90f9/maxmurr/mx-hotel",
      technologies: ["Next.js", "Prisma", "Tailwind CSS", "Radix UI"],
    },
  ],

  skills: [
    "TypeScript",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Node.js",
    "Bun",
    "Prisma",
    "Docker",
    "Kubernetes",
    "Playwright",
    "Python",
    "AI SDK",
  ],

  experience: [
    {
      title: "Mid-level Software Engineer",
      company: "Innovative Extremist",
      companyUrl: "https://inox.co.th",
      period: "Jan 2025 — Present",
      description:
        "Built the Local Election '68 results site for Thai PBS with Next.js, handling 200,000+ peak visitors with live newsroom support. Designed an AI chat app connecting enterprise databases using open-source models, generating new business leads.",
    },
    {
      title: "Junior Software Engineer",
      company: "Innovative Extremist",
      companyUrl: "https://inox.co.th",
      period: "May 2024 — Dec 2024",
      description:
        "Built byteark-player-angular, a video player library using Video.js for ByteArk, expanding partner compatibility. Developed the Playboard UI with Next.js, adding custom domain support for faster customer deployments.",
    },
    {
      title: "Software Engineer Contractor",
      company: "Innovative Extremist",
      companyUrl: "https://inox.co.th",
      period: "Oct 2023 — Apr 2024",
      description:
        "Built reusable components for the Property Perfect real-estate platform. Reduced bundle size by 30% migrating from Redux to Zustand, added route-level lazy loading, and optimized LCP with image preloading.",
    },
    {
      title: "Freelance Software Engineer",
      company: "Self-employed",
      period: "Jul 2023 — Dec 2023",
      description:
        "Designed and launched a hotel PMS for Mixay Paradise in Laos, cutting monthly accounting time by 80%. Built an internal design system with Tailwind CSS and Radix UI, and set up data models and APIs with Prisma and Next.js.",
    },
  ],
}
