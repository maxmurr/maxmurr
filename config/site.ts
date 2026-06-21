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
  loading?: "eager" | "lazy"
}

export interface Experience {
  title: string
  company: string
  companyUrl?: string
  period: string
  highlights: string[]
}

export interface SkillGroup {
  label: string
  items: string[]
}

export interface Education {
  degree: string
  school: string
  period: string
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
  skillGroups: SkillGroup[]
  skills: string[]
  experience: Experience[]
  education: Education[]
}

const SKILL_GROUPS: SkillGroup[] = [
  { label: "Languages", items: ["TypeScript", "Python"] },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TanStack", "Tailwind CSS", "Zustand"],
  },
  {
    label: "Backend & Tooling",
    items: [
      "Node.js",
      "Bun",
      "Fastify",
      "Hono",
      "tRPC",
      "Prisma",
      "Drizzle ORM",
      "PostgreSQL",
      "Redis",
      "Vercel AI SDK",
    ],
  },
  {
    label: "AI & Automation",
    items: ["LangFuse", "Dify", "RAG", "LLM Evaluation", "Agentic Workflows"],
  },
  {
    label: "DevOps & Testing",
    items: ["Docker", "GitHub Actions", "CI/CD", "Cypress", "Playwright", "Vitest"],
  },
]

export const SITE_CONFIG: SiteConfig = {
  name: "Max Murray",
  url: "https://maxmurr.com",
  headline: "Full-Stack Software Engineer",
  bio: "Full-stack software engineer building production AI features and type-safe web applications. Focused on retrieval-augmented generation (RAG) and LLM evaluation on TypeScript and Next.js stacks, shipping products that span national-scale live events and enterprise platforms. Works test-driven, leaning on automated tests to keep architecture clean and code maintainable.",
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
      title: "Thai PBS Election '69",
      description:
        "Real-time election results dashboard for Thai PBS across all 77 provinces, handling 200,000+ peak concurrent viewers. Built on TanStack Start and React 19 with live result polling, a pinch-zoom province map, and a drag-and-drop coalition builder.",
      technologies: ["TanStack Start", "React", "Vite", "Tailwind CSS"],
      href: "https://www.thaipbs.or.th/election69/result",
      image: "/projects/election-69.webp",
      loading: "eager",
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
      title: "Allianz Ayudhya Agent Portal",
      description:
        "Mobile-first agent portal for Allianz Ayudhya, built end-to-end in type-safe TypeScript: a Next.js front end and tRPC APIs on Fastify, backed by Drizzle, PostgreSQL, and Redis. Handles sales tracking, charts, and PDF quotations.",
      technologies: ["Next.js", "tRPC", "Fastify", "PostgreSQL"],
      image: "/projects/agent-portal.webp",
    },
    {
      title: "Allianz Ayudhya Sales Dashboard",
      description:
        "Self-service sales analytics for Allianz Ayudhya agents. Next.js and tRPC on Fastify with Drizzle and PostgreSQL, Redis-cached metrics refreshed by a scheduled cron, charting commission, goals, and policy trends with CSV/Excel export.",
      technologies: ["Next.js", "tRPC", "Drizzle", "Recharts"],
      image: "/projects/sales-dashboard.webp",
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
      title: "ByteArk Lighthouse",
      description:
        "Video streaming analytics platform for ByteArk on a Next.js 15 BFF with tRPC. AI-generated insights via the Vercel AI SDK and Dify, plus D3 and ApexCharts visualizations for engagement, geographic, and genre trends.",
      technologies: ["Next.js", "tRPC", "AI SDK", "D3"],
      image: "/projects/byteark-lighthouse.webp",
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

  skillGroups: SKILL_GROUPS,
  skills: SKILL_GROUPS.flatMap((group) => group.items),

  experience: [
    {
      title: "Mid-level Software Engineer",
      company: "Innovative Extremist",
      companyUrl: "https://inox.co.th",
      period: "Jan 2025 – Present",
      highlights: [
        "Raised retrieval accuracy to ~95% on an 81-case evaluation set for an enterprise AI chat application on open-source LLMs, iterating a user-feedback loop over the retrieval-augmented generation (RAG) pipeline; client demos generated new business leads.",
        "Built the Thai PBS Election ’69 results dashboard (TanStack Start, React 19) serving 200,000+ peak concurrent viewers across 77 provinces, with live result polling and a drag-and-drop coalition builder; delivered the prior Election ’68 site (Next.js) at the same scale.",
        "Shipped two type-safe TypeScript products for Allianz Ayudhya, a mobile-first agent portal and a sales analytics dashboard (Next.js, tRPC on Fastify, Drizzle, PostgreSQL, Redis), replacing on-request Excel reports for large offices with self-service analytics every agent can track.",
        "Engineered ByteArk Lighthouse, a video-streaming analytics platform on a Next.js backend-for-frontend with tRPC, surfacing AI-generated insights (Vercel AI SDK, Dify) that lead with most-watched content and peak viewing times.",
        "Led internal AI-tooling workshops on Claude Code across three engineering teams, with 90% of engineers adopting it effectively.",
      ],
    },
    {
      title: "Junior Software Engineer",
      company: "Innovative Extremist",
      companyUrl: "https://inox.co.th",
      period: "May 2024 – Dec 2024",
      highlights: [
        "Created byteark-player-angular, an open-source Angular and Video.js player library for ByteArk, expanding streaming-partner compatibility as a reusable public package.",
        "Launched the Playboard video-platform UI (Next.js, Tailwind CSS), adding custom domain and subdomain support for customer-branded deployments.",
      ],
    },
    {
      title: "Software Engineer Contractor",
      company: "Innovative Extremist",
      companyUrl: "https://inox.co.th",
      period: "Oct 2023 – Apr 2024 · Part-time",
      highlights: [
        "Reduced bundle size 30% on the Property Perfect real-estate platform by replacing Redux with Zustand, then added route-level lazy loading and image preloading, lifting the PageSpeed performance score from under 50 to 80.",
      ],
    },
    {
      title: "Freelance Software Engineer",
      company: "Mixay Paradise Hotel",
      companyUrl: "https://github.com/maxmurr/mx-hotel",
      period: "Jul 2023 – Dec 2023 · Part-time",
      highlights: [
        "Built a full-stack property management system (PMS) for Mixay Paradise Hotel in Laos, cutting monthly accounting time from 10 hours to 2. Led user research with hotel staff to surface workflow bottlenecks, then delivered the data models, REST APIs, and internal design system now used daily by front desk and management.",
      ],
    },
  ],

  education: [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "Kasetsart University",
      period: "Jul 2020 – Aug 2024",
    },
  ],
}
