"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Project } from "@/lib/projects"
import Image from "next/image"
import { ExternalLink, Github, Youtube } from "lucide-react"

interface ProjectModalProps {
    project: Project | null
    isOpen: boolean
    onClose: () => void
}

export function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
    if (!project) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto p-0 gap-0 bg-card border-border">
                <div className="relative w-full aspect-video md:aspect-[21/9] bg-muted overflow-hidden">
                    <Image
                        src={project.images.cover}
                        alt={project.name}
                        fill
                        className="object-cover"
                        sizes="100vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                        <DialogTitle className="text-3xl font-bold text-foreground mb-2">{project.name}</DialogTitle>
                        <DialogDescription className="text-lg text-muted-foreground">{project.tagline}</DialogDescription>
                    </div>
                </div>

                <div className="p-6 md:p-8 space-y-8">
                    <div className="flex flex-wrap gap-4">
                        {project.links.demo && (
                            <Button asChild className="flex-1 sm:flex-none">
                                <a href={project.links.demo} target="_blank" rel="noopener noreferrer">
                                    <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                                </a>
                            </Button>
                        )}
                        {project.links.repo && (
                            <Button variant="outline" asChild className="flex-1 sm:flex-none">
                                <a href={project.links.repo} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" /> Source Code
                                </a>
                            </Button>
                        )}
                        {project.links.video && (
                            <Button variant="secondary" asChild className="flex-1 sm:flex-none">
                                <a href={project.links.video} target="_blank" rel="noopener noreferrer">
                                    <Youtube className="mr-2 h-4 w-4" /> Watch Demo
                                </a>
                            </Button>
                        )}
                    </div>

                    <div className="grid md:grid-cols-[2fr_1fr] gap-8">
                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold mb-2">Overview</h3>
                                <p className="text-muted-foreground leading-relaxed">
                                    {project.description.long}
                                </p>
                            </div>

                            {project.images.gallery.length > 0 && (
                                <div>
                                    <h3 className="text-lg font-semibold mb-4">Gallery</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        {project.images.gallery.map((img, idx) => (
                                            <div key={idx} className="relative aspect-video rounded-lg overflow-hidden border border-border/50 bg-muted">
                                                <Image src={img} alt={`Gallery ${idx}`} fill className="object-cover" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>

                        <div className="space-y-6">
                            {project.metrics && project.metrics.length > 0 && (
                                <div className="bg-muted/30 rounded-lg p-4 border border-border/50">
                                    <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Impact</h4>
                                    <div className="grid grid-cols-2 gap-4">
                                        {project.metrics.map((m, i) => (
                                            <div key={i}>
                                                <div className="text-2xl font-bold text-primary">{m.value}</div>
                                                <div className="text-xs text-muted-foreground">{m.label}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <div>
                                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Tech Stack</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.stack.map(tech => (
                                        <Badge key={tech} variant="secondary">
                                            {tech}
                                        </Badge>
                                    ))}
                                </div>
                            </div>

                            <Separator />

                            <div>
                                <h4 className="font-semibold mb-3 text-sm uppercase tracking-wider text-muted-foreground">Tags</h4>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map(tag => (
                                        <Badge key={tag} variant="outline" className="text-xs">
                                            {tag}
                                        </Badge>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog >
    )
}
