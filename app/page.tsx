import { Suspense } from "react"
import { ArrowUpRight } from "lucide-react"

import { Header } from "@/components/layout/header"
import { Footer } from "@/components/layout/footer"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { SITE_CONFIG } from "@/config/site"


export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
      },
      {
        "@type": "Person",
        name: SITE_CONFIG.name,
        url: SITE_CONFIG.url,
        jobTitle: SITE_CONFIG.headline,
        email: SITE_CONFIG.email,
        address: { "@type": "PostalAddress", addressLocality: SITE_CONFIG.location },
        sameAs: SITE_CONFIG.socialLinks.map((link) => link.url),
        knowsAbout: SITE_CONFIG.skills,
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main className="mx-auto max-w-2xl px-6 py-16 space-y-16">
        <section>
          <h1 className="text-2xl font-semibold tracking-tight">
            hey, I&apos;m {SITE_CONFIG.name.split(" ")[0]} 👋
          </h1>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            {SITE_CONFIG.bio}
          </p>
          <p className="mt-2 text-sm text-muted-foreground">
            <a
              href="/resume.pdf"
              className="text-foreground underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
            >
              Download resume
            </a>
          </p>
        </section>

        <a
          href={`https://github.com/${SITE_CONFIG.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          <Card className="transition-colors duration-150 ease hover:bg-accent/50 active:scale-[0.98]">
            <CardContent className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <img
                  src={`https://github.com/${SITE_CONFIG.github}.png?size=80`}
                  alt={SITE_CONFIG.name}
                  className="size-10 rounded-full"
                  loading="lazy"
                />
                <div>
                  <p className="text-sm font-medium">
                    @{SITE_CONFIG.github}
                  </p>
                  <p className="text-xs text-muted-foreground">GitHub</p>
                </div>
              </div>
              <ArrowUpRight className="size-4 text-muted-foreground transition-transform duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </CardContent>
          </Card>
        </a>

        <section id="projects">
          <h2 className="text-lg font-semibold tracking-tight">Projects</h2>
          <div className="mt-4 flex flex-wrap gap-3">
            {SITE_CONFIG.projects.map((project) => (
              <div
                key={project.title}
                className="w-full sm:w-[calc(50%-6px)]"
              >
                <a
                  href={project.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full"
                >
                  <Card
                    className={`h-full overflow-hidden transition-colors duration-150 ease hover:bg-accent/50 active:scale-[0.98]${project.image ? " pt-0" : ""}`}
                  >
                    {project.image && (
                      <div className="aspect-video border-b">
                        <img
                          src={project.image}
                          alt={`${project.title} preview`}
                          className="size-full object-cover"
                          loading="lazy"
                        />
                      </div>
                    )}
                    <CardContent className="space-y-2">
                      <div className="flex items-center justify-between">
                        <p className="text-sm font-medium">{project.title}</p>
                        <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-[transform,opacity] duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
                      </div>
                      <p className="text-xs leading-relaxed text-muted-foreground">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech) => (
                          <Badge
                            key={tech}
                            variant="secondary"
                            className="text-[10px] px-1.5 py-0"
                          >
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </a>
              </div>
            ))}
          </div>
        </section>

        <section id="experience">
          <h2 className="text-lg font-semibold tracking-tight">Experience</h2>
          <div className="mt-4 space-y-6">
            {SITE_CONFIG.experience.map((exp) => (
              <div key={`${exp.company}-${exp.period}`} className="space-y-1">
                <div className="flex items-baseline justify-between gap-4">
                  <h3 className="text-sm font-medium">{exp.title}</h3>
                  <span className="shrink-0 text-xs font-mono text-muted-foreground">
                    {exp.period}
                  </span>
                </div>
                {exp.companyUrl ? (
                  <a
                    href={exp.companyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground underline decoration-muted-foreground/40 underline-offset-2 hover:text-foreground"
                  >
                    {exp.company}
                  </a>
                ) : (
                  <p className="text-xs text-muted-foreground">
                    {exp.company}
                  </p>
                )}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-lg font-semibold tracking-tight">Skills</h2>
          <div className="mt-4 flex flex-wrap gap-1.5">
            {SITE_CONFIG.skills.map((skill) => (
              <Badge key={skill} variant="secondary">
                {skill}
              </Badge>
            ))}
          </div>
        </section>

        <Separator />

        <section>
          <p className="text-sm text-muted-foreground">
            Get in touch &mdash;{" "}
            <a
              href={`mailto:${SITE_CONFIG.email}`}
              className="text-foreground underline decoration-muted-foreground/40 underline-offset-2 hover:decoration-foreground"
            >
              {SITE_CONFIG.email}
            </a>
          </p>
        </section>
      </main>
      <Suspense>
        <Footer />
      </Suspense>
    </>
  )
}
