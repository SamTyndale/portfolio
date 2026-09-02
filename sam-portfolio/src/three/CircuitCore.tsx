import { useMemo, useRef } from 'react'
import { useFrame, useThree } from '@react-three/fiber'
import { Float } from '@react-three/drei'
import * as THREE from 'three'

interface CircuitCoreProps {
  reducedMotion: boolean
  lowPower: boolean
}

// Generates a set of trace endpoints on a sphere shell so the "circuit"
// reads as a coherent radial structure rather than random scatter.
function useTracePoints(count: number, radius: number) {
  return useMemo(() => {
    const points: THREE.Vector3[] = []
    const golden = Math.PI * (3 - Math.sqrt(5))
    for (let i = 0; i < count; i++) {
      const y = 1 - (i / (count - 1)) * 2
      const r = Math.sqrt(1 - y * y)
      const theta = golden * i
      points.push(new THREE.Vector3(Math.cos(theta) * r, y, Math.sin(theta) * r).multiplyScalar(radius))
    }
    return points
  }, [count, radius])
}

function Traces({ points, color }: { points: THREE.Vector3[]; color: string }) {
  const geometry = useMemo(() => {
    const positions: number[] = []
    points.forEach((p) => {
      positions.push(0, 0, 0, p.x, p.y, p.z)
    })
    const geo = new THREE.BufferGeometry()
    geo.setAttribute('position', new THREE.Float32BufferAttribute(positions, 3))
    return geo
  }, [points])

  return (
    <lineSegments geometry={geometry}>
      <lineBasicMaterial color={color} transparent opacity={0.35} />
    </lineSegments>
  )
}

function Nodes({ points, color }: { points: THREE.Vector3[]; color: string }) {
  return (
    <group>
      {points.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.035, 8, 8]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={1.4}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  )
}

export function CircuitCore({ reducedMotion, lowPower }: CircuitCoreProps) {
  const group = useRef<THREE.Group>(null)
  const core = useRef<THREE.Mesh>(null)
  const { viewport } = useThree()
  const pointer = useRef({ x: 0, y: 0 })

  const traceCount = lowPower ? 8 : 14
  const points = useTracePoints(traceCount, 1.65)

  useFrame((state, delta) => {
    if (!group.current) return

    if (!reducedMotion) {
      group.current.rotation.y += delta * 0.12
      if (core.current) {
        core.current.rotation.x += delta * 0.06
        core.current.rotation.y -= delta * 0.08
      }
    }

    // subtle parallax toward pointer, always applied so the piece still
    // feels responsive even with reduced motion (small movement is fine)
    pointer.current.x = state.pointer.x
    pointer.current.y = state.pointer.y
    const targetX = pointer.current.y * 0.15
    const targetY = pointer.current.x * 0.2
    group.current.rotation.x += (targetX - group.current.rotation.x) * 0.04
    if (reducedMotion) {
      group.current.rotation.y += (targetY - group.current.rotation.y) * 0.04
    }
  })

  const scale = Math.min(viewport.width / 6, 1.4)

  return (
    <Float speed={reducedMotion ? 0 : 1.1} rotationIntensity={0.15} floatIntensity={0.4}>
      <group ref={group} scale={scale}>
        <mesh ref={core}>
          <icosahedronGeometry args={[0.85, 1]} />
          <meshStandardMaterial
            color="#1f231a"
            emissive="#c9784a"
            emissiveIntensity={0.18}
            roughness={0.35}
            metalness={0.6}
            wireframe
          />
        </mesh>
        <mesh>
          <icosahedronGeometry args={[0.62, 1]} />
          <meshStandardMaterial
            color="#181b14"
            roughness={0.25}
            metalness={0.75}
            emissive="#9fb89a"
            emissiveIntensity={0.08}
          />
        </mesh>
        <Traces points={points} color="#c9784a" />
        <Nodes points={points} color="#e2966a" />
      </group>
    </Float>
  )
}
