import { Link } from 'react-router-dom'
import paintings from '../data/paintings'
import PaintingCard from '../components/PaintingCard'

export default function Home() {
  const featured = paintings.filter((p) => p.featured)

  return (
    <>
      <section className="hero container">
        <p className="hero-eyebrow">Original paintings · Est. 2021</p>
        <h1 className="hero-title">Small rooms, quiet light, and the odd stretch of water.</h1>
        <p className="hero-lede">
          A working studio and open catalog — oil and acrylic paintings built slowly, in
          layers, mostly about the hour just after sunrise.
        </p>
        <div className="hero-actions">
          <Link to="/gallery" className="btn btn-primary">
            View the gallery
          </Link>
          <Link to="/about" className="btn btn-ghost">
            About the artist
          </Link>
        </div>
      </section>

      <section className="container">
        <div className="section-head">
          <div>
            <p className="section-sub">Currently on the wall</p>
            <h2 className="section-title">
              Featured <em>works</em>
            </h2>
          </div>
          <Link to="/gallery" className="btn btn-ghost">
            See all paintings
          </Link>
        </div>

        <div className="gallery-grid">
          {featured.map((p) => (
            <PaintingCard key={p.id} painting={p} />
          ))}
        </div>
      </section>
    </>
  )
}
