"use client"

import { Project, projects } from "@/lib/projects"
import { ProjectCard } from "./ProjectCard"
import { motion } from "framer-motion"

interface ProjectsGridProps {
    onOpenModal: (project: Project) => void
}

export function ProjectsGrid({ onOpenModal }: ProjectsGridProps) {
    return (
        <section className="container py-20" id="projects">
            <div className="mb-12 space-y-2">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl text-foreground">Selected Work</h2>
                <p className="text-muted-foreground text-lg max-w-2xl">
                    A collection of projects showcasing my expertise in building scalable applications and immersive experiences.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
                {projects.map((project, index) => (
                    <motion.div
                        key={project.id}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1, duration: 0.5 }}
                    >
                        <ProjectCard project={project} onOpenModal={onOpenModal} />
                    </motion.div>
                ))}
            </div>
        </section>
    )
}
