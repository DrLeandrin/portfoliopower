"use client"

import { useState } from "react"
import { ProjectsGrid } from "@/components/ProjectsGrid"
import { ProjectModal } from "@/components/ProjectModal"
import { Project } from "@/lib/projects"
import dynamic from "next/dynamic"

const Hero3D = dynamic(() => import("@/components/3d/Hero3D"), { ssr: false })

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <main className="min-h-screen bg-background text-foreground overflow-x-hidden relative">
      <div className="absolute inset-0 z-0 bg-background h-screen">
        <Hero3D onOpenModal={handleOpenModal} />
      </div>

      {/* Hero Content Overlay */}
      <section className="h-screen w-full flex flex-col items-center justify-center relative z-10 pointer-events-none">
        <div className="text-center space-y-6 px-4 pointer-events-auto select-none">
          <h1 className="text-6xl md:text-8xl font-bold tracking-tighter bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/40 pb-2">
            ELEVATE
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-lg mx-auto">
            Discover a universe of digital experiences tailored for the future.
          </p>
        </div>
        <div className="absolute bottom-10 animate-bounce pointer-events-auto">
          <button
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="text-sm text-muted-foreground uppercase tracking-widest hover:text-foreground transition-colors"
          >
            Explore
          </button>
        </div>
      </section>

      <div className="relative z-10 bg-background/80 backdrop-blur-3xl border-t border-white/5 shadow-2xl">
        <ProjectsGrid onOpenModal={handleOpenModal} />
      </div>

      <ProjectModal
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </main>
  );
}
