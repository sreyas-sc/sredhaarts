import { useState } from 'react'
import paintings, { categories } from '../data/paintings'
import PaintingCard from '../components/PaintingCard'

export default function Gallery() {
  const [active, setActive] = useState('All')

  const shown =
    active === 'All' ? paintings : paintings.filter((p) => p.category === active)

  return (
    <section className="container">
      <div className="section-head" style={{ marginTop: 56 }}>
        <div>
          <p className="section-sub">Full catalog · {paintings.length} pieces</p>
          <h2 className="section-title">
            The <em>gallery</em>
          </h2>
        </div>
      </div>

      <div className="filter-bar">
        {categories.map((cat) => (
          <button
            key={cat}
            className={`filter-pill ${active === cat ? 'active' : ''}`}
            onClick={() => setActive(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {shown.length > 0 ? (
        <div className="gallery-grid">
          {shown.map((p) => (
            <PaintingCard key={p.id} painting={p} />
          ))}
        </div>
      ) : (
        <p style={{ color: 'var(--text-muted)' }}>No paintings in this category yet.</p>
      )}
    </section>
  )
}
