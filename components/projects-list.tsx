"use client"

import { useState } from "react"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import type { Project } from "@/config/site"

const INITIAL_COUNT = 4

const truncateAtWord = (text: string, max: number): string => {
  if (text.length <= max) return text
  const lastSpace = text.lastIndexOf(" ", max)
  return lastSpace > 0 ? text.slice(0, lastSpace) : text.slice(0, max)
}

const ProjectCard = ({ project }: { project: Project }) => {
  const card = (
    <Card
      className={`h-full overflow-hidden transition-colors duration-150 ease-out will-change-transform hover:bg-accent/50 active:scale-[0.97]${project.image ? " pt-0" : ""}`}
    >
      {project.image && (
        <div className="relative aspect-video border-b">
          <Image
            src={project.image}
            alt={`${project.title} - ${truncateAtWord(project.description, 80)}`}
            fill
            sizes="(max-width: 640px) 100vw, 50vw"
            loading={project.loading}
            className="object-cover"
          />
        </div>
      )}
      <CardContent className="space-y-2">
        <div className="flex items-center justify-between">
          <p className="text-sm font-medium">{project.title}</p>
          {project.href && (
            <ArrowUpRight className="size-3.5 text-muted-foreground opacity-0 transition-[transform,opacity] duration-150 ease-out group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100" />
          )}
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
  )

  if (project.href) {
    return (
      <a
        href={project.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group block h-full"
      >
        {card}
      </a>
    )
  }

  return <div className="h-full">{card}</div>
}

export const ProjectsList = ({ projects }: { projects: Project[] }) => {
  const [expanded, setExpanded] = useState(false)

  const visible = expanded ? projects : projects.slice(0, INITIAL_COUNT)
  const remaining = projects.length - INITIAL_COUNT

  return (
    <>
      <div className="mt-4 flex flex-wrap gap-3">
        {visible.map((project, index) => {
          const isRevealed = index >= INITIAL_COUNT
          return (
            <div
              key={project.title}
              className={`w-full sm:w-[calc(50%-6px)]${isRevealed ? " motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-300 motion-safe:ease-out motion-safe:fill-mode-both" : ""}`}
              style={
                isRevealed
                  ? { animationDelay: `${(index - INITIAL_COUNT) * 50}ms` }
                  : undefined
              }
            >
              <ProjectCard project={project} />
            </div>
          )
        })}
      </div>

      {!expanded && remaining > 0 && (
        <div className="mt-6 flex justify-center">
          <Button
            variant="outline"
            onClick={() => setExpanded(true)}
            className="min-h-11"
          >
            Load more
            <span className="tabular-nums text-muted-foreground">
              {remaining}
            </span>
            <ArrowUpRight className="size-4 rotate-90" />
          </Button>
        </div>
      )}
    </>
  )
}
