"use client"

import Particles, { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect, useState } from "react"
import type { Engine } from "@tsparticles/engine"

export default function ParticlesBackground() {
  const [ready, setReady] = useState(false)

  // Initialize the tsParticles engine once on the client using the slim bundle for smaller size
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine)
    }).then(() => setReady(true))
  }, [])

  if (!ready) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 30,
        interactivity: {
          events: {
            onHover: { enable: false },
            onClick: { enable: false },
            resize: { enable: true },
          },
        },
        particles: {
          color: { value: "#38bdf8" },
          links: {
            color: "#38bdf8",
            distance: 130,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: { enable: false },
          move: {
            direction: "none",
            enable: true,
            outModes: "out",
            random: false,
            speed: 0.35,
            straight: false,
          },
          number: {
            value: 24,
            density: { enable: true, width: 800, height: 800 },
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: false,
      }}
      className="absolute inset-0 z-0"
    />
  )
}
