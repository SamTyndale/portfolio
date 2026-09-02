import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { CircuitCore } from './CircuitCore'
import { usePrefersReducedMotion } from '../hooks/usePrefersReducedMotion'
import { useMediaQuery } from '../hooks/useMediaQuery'

export function HeroScene() {
  const reducedMotion = usePrefersReducedMotion()
  const isMobile = useMediaQuery('(max-width: 768px)')

  return (
    <div className="absolute inset-0" aria-hidden="true">
      <Canvas
        dpr={isMobile ? [1, 1.5] : [1, 2]}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        camera={{ position: [0, 0, 4.2], fov: 42 }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[3, 2, 4]} intensity={1.2} color="#e2966a" />
        <pointLight position={[-3, -2, -3]} intensity={0.5} color="#9fb89a" />
        <Suspense fallback={null}>
          <CircuitCore reducedMotion={reducedMotion} lowPower={isMobile} />
        </Suspense>
      </Canvas>
    </div>
  )
}
