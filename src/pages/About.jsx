export default function About() {
  return (
    <section className="container">
      <div className="about-layout">
        <div className="about-portrait">
          {/* Replace this with your own portrait: drop a file in
              src/assets/paintings/ and swap the placeholder below
              for <img src={...} alt="Portrait of the artist" /> */}
          <div className="placeholder" style={{ height: '100%' }}>
            Your portrait here
          </div>
        </div>

        <div className="about-body">
          <p className="section-sub">About</p>
          <h1 className="hero-title" style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)' }}>
            Painting quiet rooms since 2016.
          </h1>

          <p>
            I'm a self-taught painter working mostly in oil, occasionally acrylic, focused
            on the light that shows up in ordinary places right before most people are
            awake to see it. Replace this paragraph with your own story — where you
            trained (or didn't), what draws you to a subject, and how your work has
            changed over time.
          </p>

          <p>
            Every piece in the gallery is built in layers over several weeks. I work from
            life where I can, and from memory and reference photos when I can't. If a
            painting has sold, prints and commissions are usually available on request.
          </p>

          <h2>A short timeline</h2>
          <ul className="timeline">
            <li>
              <span className="year">2016</span>
              <span className="event">Picked up a brush seriously for the first time.</span>
            </li>
            <li>
              <span className="year">2019</span>
              <span className="event">First group show, a local co-op gallery.</span>
            </li>
            <li>
              <span className="year">2022</span>
              <span className="event">First solo exhibition, "Small Hours."</span>
            </li>
            <li>
              <span className="year">2024</span>
              <span className="event">Began taking on private commissions.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
