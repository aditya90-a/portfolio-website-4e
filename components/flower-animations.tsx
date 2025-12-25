"use client"

import { useEffect, useState } from "react"

export function FlowerAnimations() {
  const [petals, setPetals] = useState<any[]>([])

  useEffect(() => {
    const createPetal = () => {
      const id = Math.random().toString(36).substring(7)
      const left = Math.random() * 100
      const duration = 5 + Math.random() * 10
      const size = 10 + Math.random() * 20
      const delay = Math.random() * 5

      return { id, left, duration, size, delay }
    }

    const initialPetals = Array.from({ length: 15 }, createPetal)
    setPetals(initialPetals)

    const interval = setInterval(() => {
      setPetals((prev) => [...prev.slice(1), createPetal()])
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {petals.map((petal) => (
        <div
          key={petal.id}
          className="flower-petal opacity-20 dark:opacity-10"
          style={{
            left: `${petal.left}%`,
            width: `${petal.size}px`,
            height: `${petal.size}px`,
            animationDuration: `${petal.duration}s`,
            animationDelay: `${petal.delay}s`,
            bottom: "-50px",
          }}
        >
          <svg viewBox="0 0 100 100" fill="currentColor" className="text-primary">
            <path d="M50 0C60 25 100 35 100 50C100 65 60 75 50 100C40 75 0 65 0 50C0 35 40 25 50 0Z" />
          </svg>
        </div>
      ))}
    </div>
  )
}
