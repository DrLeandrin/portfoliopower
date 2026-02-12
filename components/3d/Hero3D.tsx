"use client"

import { Canvas } from "@react-three/fiber"
import { Suspense } from "react"
import { Scene } from "./Scene"
import { Project } from "@/lib/projects"

interface Hero3DProps {
    onOpenModal: (project: Project) => void
}

export default function Hero3D({ onOpenModal }: Hero3DProps) {
    return (
        <div className="absolute inset-0 z-0 h-full w-full">
            <Canvas
                camera={{ position: [0, 0, 10], fov: 45 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <Scene onOpenModal={onOpenModal} />
                </Suspense>
            </Canvas>
        </div>
    )
}
