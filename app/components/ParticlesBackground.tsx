"use client";

import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect } from "react";
import type { Engine } from "@tsparticles/engine";

export default function ParticlesBackground() {
  // Initialize the tsParticles engine once on the client using the slim bundle for smaller size
  useEffect(() => {
    initParticlesEngine(async (engine: Engine) => {
      await loadSlim(engine);
    });
  }, []);

  return (
    <Particles
      id="tsparticles"
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        fpsLimit: 60,
        interactivity: {
          events: {
            onHover: { enable: true, mode: "repulse" },
            onClick: { enable: true, mode: "push" },
            resize: { enable: true },
          },
          modes: {
            repulse: { distance: 100, duration: 0.4 },
            push: { quantity: 3 },
          },
        },
        particles: {
          color: { value: "#38bdf8" },
          links: {
            color: "#38bdf8",
            distance: 150,
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
            speed: 0.6,
            straight: false,
          },
          number: {
            value: 50,
            density: { enable: true, width: 800, height: 800 },
          },
          opacity: { value: 0.4 },
          shape: { type: "circle" },
          size: { value: { min: 1, max: 3 } },
        },
        detectRetina: true,
      }}
      className="absolute inset-0 z-0"
    />
  );
}
