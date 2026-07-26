import { useEffect, useState } from 'react'

// Plays once when the app first mounts (not on every route change, since
// App only mounts once per full page load). Skips entirely if the visitor
// has reduced-motion turned on.
export default function IntroOverlay() {
  const [visible, setVisible] = useState(true)
  const [leaving, setLeaving] = useState(false)

  useEffect(() => {
    const prefersReduced = window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches

    if (prefersReduced) {
      setVisible(false)
      return
    }

    const leaveTimer = setTimeout(() => setLeaving(true), 150)
    const removeTimer = setTimeout(() => setVisible(false), 1400)

    return () => {
      clearTimeout(leaveTimer)
      clearTimeout(removeTimer)
    }
  }, [])

  if (!visible) return null

  return (
    <div className={`intro-overlay ${leaving ? 'is-leaving' : ''}`} aria-hidden="true">
      <span className="intro-spotlight" />
    </div>
  )
}