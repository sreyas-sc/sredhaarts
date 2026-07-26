import { useEffect, useRef } from 'react'

// Spawns small brass sparkles wherever a finger touches or drags on the
// screen — a quiet "fairy dust" trail with no wand in sight. Only ever
// triggered by real touch events, so it's inert on desktop with a mouse.
// Skips entirely if the visitor has reduced-motion turned on.
export default function SparkleTrail() {
  const layerRef = useRef(null)
  const lastSpawn = useRef(0)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches
    if (prefersReduced) return

    const layer = layerRef.current
    if (!layer) return

    function spawnSparkle(x, y) {
      const sparkle = document.createElement('span')
      sparkle.className = 'sparkle'

      const size = 4 + Math.random() * 6
      const driftX = (Math.random() - 0.5) * 46
      const rotate = Math.random() * 360

      sparkle.style.left = `${x}px`
      sparkle.style.top = `${y}px`
      sparkle.style.width = `${size}px`
      sparkle.style.height = `${size}px`
      sparkle.style.setProperty('--drift-x', `${driftX}px`)
      sparkle.style.setProperty('--rotate', `${rotate}deg`)

      layer.appendChild(sparkle)
      setTimeout(() => sparkle.remove(), 750)
    }

    function handleTouch(e) {
      const now = Date.now()
      if (now - lastSpawn.current < 45) return
      lastSpawn.current = now

      const touch = e.touches && e.touches[0]
      if (!touch) return
      spawnSparkle(touch.clientX, touch.clientY)
    }

    window.addEventListener('touchstart', handleTouch, { passive: true })
    window.addEventListener('touchmove', handleTouch, { passive: true })

    return () => {
      window.removeEventListener('touchstart', handleTouch)
      window.removeEventListener('touchmove', handleTouch)
    }
  }, [])

  return <div className="sparkle-layer" ref={layerRef} aria-hidden="true" />
}