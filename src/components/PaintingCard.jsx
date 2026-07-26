import { Link } from 'react-router-dom'
import { getPaintingImage } from '../utils/images'

export default function PaintingCard({ painting }) {
  const image = getPaintingImage(painting.image)

  function handleMouseMove(e) {
    const rect = e.currentTarget.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    e.currentTarget.style.setProperty('--mx', `${x}%`)
    e.currentTarget.style.setProperty('--my', `${y}%`)
  }

  return (
    <article className="painting-card">
      <Link to={`/gallery/${painting.id}`} aria-label={`View ${painting.title}`}>
        <div className="frame" onMouseMove={handleMouseMove}>
          {image ? (
            <img src={image} alt={painting.title} loading="lazy" />
          ) : (
            <div className="placeholder">{painting.title}</div>
          )}
          {!painting.available && <span className="sold-tag">Sold</span>}
        </div>
      </Link>

      <div className="plaque">
        <h3 className="plaque-title">
          <Link to={`/gallery/${painting.id}`}>{painting.title}</Link>
        </h3>
        <div className="plaque-meta">
          <span>{painting.year}</span>
          <span>{painting.medium}</span>
          <span>{painting.dimensions}</span>
        </div>
      </div>
    </article>
  )
}
