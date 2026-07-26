import { useParams, Link, Navigate } from 'react-router-dom'
import paintings from '../data/paintings'
import { getPaintingImage } from '../utils/images'

export default function PaintingDetail() {
  const { id } = useParams()
  const painting = paintings.find((p) => p.id === id)

  if (!painting) return <Navigate to="/gallery" replace />

  const image = getPaintingImage(painting.image)
  const index = paintings.findIndex((p) => p.id === id)
  const catalogNumber = String(index + 1).padStart(3, '0')

  return (
    <section className="container">
      <div className="detail">
        <div>
          <Link to="/gallery" className="back-link">
            ← Back to gallery
          </Link>
          <div className="detail-frame">
            {image ? (
              <img src={image} alt={painting.title} />
            ) : (
              <div className="placeholder">{painting.title}</div>
            )}
          </div>
        </div>

        <div className="detail-info">
          <p className="detail-eyebrow">
            No. {catalogNumber} {!painting.available && '· Sold'}
          </p>
          <h1 className="detail-title">{painting.title}</h1>

          <div className="detail-meta">
            {painting.year}
            <br />
            {painting.medium}
            <br />
            {painting.dimensions}
            <br />
            {painting.category}
          </div>

          <p className="detail-desc">{painting.description}</p>

          <Link to="/contact" className="btn btn-primary">
            {painting.available ? 'Inquire about this piece' : 'Ask about a print'}
          </Link>
        </div>
      </div>
    </section>
  )
}
