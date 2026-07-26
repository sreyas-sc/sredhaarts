import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) => (isActive ? 'active' : '')

  return (
    <header className="nav">
      <div className="nav-inner">
        <NavLink to="/" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">✦</span> Ardha Arts
        </NavLink>

        <nav>
          <ul className={`nav-links ${open ? 'open' : ''}`}>
            <li>
              <NavLink to="/" className={linkClass} onClick={() => setOpen(false)} end>
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/gallery" className={linkClass} onClick={() => setOpen(false)}>
                Gallery
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" className={linkClass} onClick={() => setOpen(false)}>
                About
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className={linkClass} onClick={() => setOpen(false)}>
                Contact
              </NavLink>
            </li>
          </ul>
        </nav>

        <button
          className="nav-toggle"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? '✕' : '☰'}
        </button>
      </div>
    </header>
  )
}
