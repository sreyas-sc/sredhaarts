export default function Footer() {
  return (
    <footer className="footer">
      <span className="footer-bloom" aria-hidden="true">
        <svg viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g stroke="currentColor" strokeWidth="1.2">
            <ellipse cx="60" cy="34" rx="13" ry="23" transform="rotate(0 60 60)" />
            <ellipse cx="60" cy="34" rx="13" ry="23" transform="rotate(72 60 60)" />
            <ellipse cx="60" cy="34" rx="13" ry="23" transform="rotate(144 60 60)" />
            <ellipse cx="60" cy="34" rx="13" ry="23" transform="rotate(216 60 60)" />
            <ellipse cx="60" cy="34" rx="13" ry="23" transform="rotate(288 60 60)" />
            <circle cx="60" cy="60" r="6" />
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