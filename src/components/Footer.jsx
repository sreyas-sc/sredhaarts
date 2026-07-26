export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-bloom" aria-hidden="true">
  <svg viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g stroke="currentColor" strokeWidth="1.3" strokeLinecap="round">
      {/* stem, curving up from the corner */}
      <path d="M60,58 C50,80 95,95 120,115 C132,125 138,138 140,150" />

      {/* two small leaves along the stem */}
      <g transform="translate(88,96) rotate(35)">
        <path d="M0,0 C6,-6 16,-6 22,0 C16,6 6,6 0,0 Z" />
      </g>
      <g transform="translate(118,122) rotate(145) scale(-1,1)">
        <path d="M0,0 C6,-6 16,-6 22,0 C16,6 6,6 0,0 Z" />
      </g>

      {/* the bloom, five slightly irregular petals for a hand-drawn feel */}
      <g transform="translate(60,55)">
        <g transform="rotate(-8) scale(1.05)">
          <path d="M0,-2 C4,-10 8,-22 3,-36 C1,-39 -1,-39 -3,-36 C-8,-22 -4,-10 0,-2 Z" />
        </g>
        <g transform="rotate(64) scale(0.92)">
          <path d="M0,-2 C4,-10 8,-22 3,-36 C1,-39 -1,-39 -3,-36 C-8,-22 -4,-10 0,-2 Z" />
        </g>
        <g transform="rotate(138)">
          <path d="M0,-2 C4,-10 8,-22 3,-36 C1,-39 -1,-39 -3,-36 C-8,-22 -4,-10 0,-2 Z" />
        </g>
        <g transform="rotate(212) scale(0.97)">
          <path d="M0,-2 C4,-10 8,-22 3,-36 C1,-39 -1,-39 -3,-36 C-8,-22 -4,-10 0,-2 Z" />
        </g>
        <g transform="rotate(288) scale(1.03)">
          <path d="M0,-2 C4,-10 8,-22 3,-36 C1,-39 -1,-39 -3,-36 C-8,-22 -4,-10 0,-2 Z" />
        </g>

        {/* center and a few fine stamen lines */}
        <circle cx="0" cy="0" r="3.2" strokeWidth="1.1" />
        <path d="M0,0 L6,-6 M0,0 L8,3 M0,0 L-3,8 M0,0 L-7,-4" strokeWidth="0.8" />
      </g>
    </g>
  </svg>
</span>

      <div className="container footer-inner">
        <div className="footer-brand">
          <span className="footer-copy">
            © {new Date().getFullYear()} Ardha Arts Studio.
          </span>
          <span className="footer-tagline">All works reserved.</span>
        </div>

        <ul className="footer-links">
          <li>
            <a href="mailto:sredhass@gmail.com" className="footer-link">
              <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.6" />
                <path d="M3 6.5L12 13L21 6.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span>sredhass@gmail.com</span>
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="footer-link">
              <svg className="footer-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="12" cy="12" r="4.2" stroke="currentColor" strokeWidth="1.6" />
                <circle cx="17.4" cy="6.6" r="1.1" fill="currentColor" />
              </svg>
              <span>Instagram</span>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}