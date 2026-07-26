export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <span>© {new Date().getFullYear()} Ardha Arts Studio. All works reserved.</span>
        <ul className="footer-links">
          <li>
            <a href="mailto:sredhass@gmail.com">sredhass@gmail.com</a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
    </footer>
  )
}
