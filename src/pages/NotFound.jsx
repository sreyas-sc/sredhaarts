import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <section className="container hero">
      <p className="hero-eyebrow">404</p>
      <h1 className="hero-title">This wall is empty.</h1>
      <p className="hero-lede">The piece you're looking for isn't hanging here.</p>
      <Link to="/" className="btn btn-primary">
        Back to the entrance
      </Link>
    </section>
  )
}
