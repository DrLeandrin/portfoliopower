"use client"

import { useRef, useState } from "react"
import { Project } from "@/lib/projects"
import { useFrame } from "@react-three/fiber"
import { Html, Text, Float } from "@react-three/drei"
import * as THREE from "three"

interface FloatingNodeProps {
    project: Project
    onClick: () => void
}

export function FloatingNode({ project, onClick }: FloatingNodeProps) {
    const meshRef = useRef<THREE.Mesh>(null)
    const [hovered, setHovered] = useState(false)

    useFrame((state, delta) => {
        if (meshRef.current) {
            meshRef.current.rotation.x += delta * 0.4
            meshRef.current.rotation.z += delta * 0.2
        }
    })

    return (
        <Float speed={4} rotationIntensity={1} floatIntensity={2}>
            <group>
                <mesh
                    ref={meshRef}
                    onClick={(e) => {
                        e.stopPropagation()
                        onClick()
                    }}
                    onPointerOver={(e) => {
                        e.stopPropagation()
                        setHovered(true)
                        document.body.style.cursor = 'pointer'
                    }}
                    onPointerOut={(e) => {
                        setHovered(false)
                        document.body.style.cursor = 'auto'
                    }}
                    scale={hovered ? 1.2 : 1}
                >
                    <dodecahedronGeometry args={[0.6, 0]} />
                    <meshStandardMaterial
                        color={project.three.color}
                        emissive={project.three.color}
                        emissiveIntensity={hovered ? 2 : 0.5}
                        roughness={0.2}
                        metalness={0.8}
                    />
                </mesh>

                {/* Connection Line to center (Optional, sticking to just nodes for now as per design) */}

                {/* Label on Hover */}
                <Html position={[0, 1, 0]} center distanceFactor={10} style={{ pointerEvents: 'none' }}>
                    <div
                        className={`px-3 py-1 rounded-full bg-background/80 backdrop-blur-md border border-border text-xs font-bold whitespace-nowrap transition-opacity duration-300 ${hovered ? 'opacity-100' : 'opacity-0'}`}
                        style={{ transform: 'translate3d(0,0,0)' }}
                    >
                        {project.name}
                    </div>
                </Html>
            </group>
        </Float>
    )
}
