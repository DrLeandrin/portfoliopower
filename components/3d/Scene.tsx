"use client"

import { OrbitControls, Environment, Float, Stars, Sparkles } from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { useRef } from "react"
import * as THREE from "three"
import { projects, Project } from "@/lib/projects"
import { FloatingNode } from "./FloatingNode"

interface SceneProps {
    onOpenModal: (project: Project) => void
}

export function Scene({ onOpenModal }: SceneProps) {
    const groupRef = useRef<THREE.Group>(null)

    useFrame((state, delta) => {
        if (groupRef.current) {
            groupRef.current.rotation.y += delta * 0.05
        }
    })

    // Filter featured projects
    const featuredProjects = projects.filter(p => p.featured)
    const radius = 4.5

    return (
        <>
            <ambientLight intensity={0.2} />
            <pointLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
            <pointLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />

            <Sparkles count={100} scale={12} size={2} speed={0.4} opacity={0.5} color="#ffffff" />

            <group ref={groupRef}>
                {/* Central Core */}
                <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
                    <mesh>
                        <icosahedronGeometry args={[1.2, 0]} />
                        <meshStandardMaterial color="#1a1a1a" wireframe />
                    </mesh>
                    <mesh>
                        <icosahedronGeometry args={[1, 2]} />
                        <meshPhysicalMaterial
                            color="#ffffff"
                            transmission={0.8}
                            opacity={0.8}
                            roughness={0.2}
                            thickness={1}
                            ior={1.5}
                            transparent
                        />
                    </mesh>
                    <pointLight position={[0, 0, 0]} intensity={2} color="#88aaff" distance={5} />
                </Float>

                {/* Orbiting Nodes */}
                {featuredProjects.map((project, i) => {
                    const angle = (i / featuredProjects.length) * Math.PI * 2
                    const x = Math.cos(angle) * radius
                    const z = Math.sin(angle) * radius

                    return (
                        <group key={project.id} position={[x, 0, z]}>
                            <FloatingNode project={project} onClick={() => onOpenModal(project)} />
                        </group>
                    )
                })}
            </group>

            <OrbitControls
                enableZoom={false}
                enablePan={false}
                autoRotate
                autoRotateSpeed={0.5}
                maxPolarAngle={Math.PI / 1.5}
                minPolarAngle={Math.PI / 3}
            />
        </>
    )
}
