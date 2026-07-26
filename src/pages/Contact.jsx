import { useState } from 'react'

export default function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()

    const subject = encodeURIComponent(`Inquiry from ${form.name || 'the gallery site'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:sredhas24@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section className="container">
      <div className="contact-layout" style={{ marginTop: 56 }}>
        <div className="contact-info">
          <p className="section-sub">Get in touch</p>
          <h2 className="hero-title" style={{ fontSize: 'clamp(1.9rem, 3.6vw, 2.6rem)' }}>
            Commissions & inquiries
          </h2>

          <div className="contact-detail">
            <div className="label">Email</div>
            <div className="value">sredhas24@gmail.com</div>
          </div>
          <div className="contact-detail">
            <div className="label">Studio</div>
            <div className="value">By appointment only</div>
          </div>
          <div className="contact-detail">
            <div className="label">Response time</div>
            <div className="value">Usually within 2–3 days</div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label htmlFor="name">Name</label>
            <input id="name" name="name" required value={form.name} onChange={handleChange} />
          </div>
          <div className="form-field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              required
              value={form.email}
              onChange={handleChange}
            />
          </div>
          <div className="form-field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Which piece are you asking about, or what would you like commissioned?"
              value={form.message}
              onChange={handleChange}
            />
          </div>
          <button type="submit" className="btn btn-primary">
            Send message
          </button>
          {sent && (
            <p className="form-note">
              Opening your email client now — if nothing happened, write directly to
              sredhas24@gmail.com.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
