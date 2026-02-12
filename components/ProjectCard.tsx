"use client"

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Project } from "@/lib/projects"
import Image from "next/image"
import { motion } from "framer-motion"

interface ProjectCardProps {
    project: Project
    onOpenModal: (project: Project) => void
}

export function ProjectCard({ project, onOpenModal }: ProjectCardProps) {
    return (
        <motion.div
            whileHover={{ y: -5 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="h-full"
        >
            <Card className="overflow-hidden border-border/50 bg-card/50 backdrop-blur-sm transition-colors hover:bg-card/80 hover:border-border h-full flex flex-col group">
                <div className="relative aspect-video w-full overflow-hidden bg-muted">
                    <Image
                        src={project.images.cover}
                        alt={project.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>
                <CardHeader>
                    <div className="flex justify-between items-start gap-2">
                        <CardTitle className="text-xl font-bold">{project.name}</CardTitle>
                        {project.featured && <Badge variant="secondary" className="text-xs shrink-0">Featured</Badge>}
                    </div>
                    <p className="text-sm text-muted-foreground font-medium">{project.tagline}</p>
                </CardHeader>
                <CardContent className="flex-grow space-y-4">
                    <p className="text-sm text-muted-foreground/90 line-clamp-3">{project.description.short}</p>
                    <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag) => (
                            <Badge key={tag} variant="outline" className="text-xs bg-background/50 text-muted-foreground">
                                {tag}
                            </Badge>
                        ))}
                    </div>
                </CardContent>
                <CardFooter className="pt-2">
                    <Button onClick={() => onOpenModal(project)} className="w-full cursor-pointer" variant="secondary">
                        View Details
                    </Button>
                </CardFooter>
            </Card>
        </motion.div>
    )
}
