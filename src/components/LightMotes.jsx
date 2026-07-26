import { useMemo } from 'react'

// A handful of faint brass motes drifting up through the hero, like dust
// caught in a shaft of gallery light. Purely decorative (aria-hidden),
// randomized once per mount so they don't look mechanically identical.
export default function LightMotes({ count = 9 }) {
  const motes = useMemo(
    () =>
      Array.from({ length: count }, (_, i) => ({
        id: i,
        left: Math.round(Math.random() * 100),
        delay: (Math.random() * 9).toFixed(2),
        duration: (12 + Math.random() * 10).toFixed(2),
        size: (1.5 + Math.random() * 2).toFixed(1),
      })),
    [count]
  )

  return (
    <div className="motes" aria-hidden="true">
      {motes.map((m) => (
        <span
          key={m.id}
          className="mote"
          style={{
            left: `${m.left}%`,
            width: `${m.size}px`,
            height: `${m.size}px`,
            animationDelay: `${m.delay}s`,
            animationDuration: `${m.duration}s`,
          }}
        />
      ))}
    </div>
  )
}