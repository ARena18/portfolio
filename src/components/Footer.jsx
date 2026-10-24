import './Footer.css'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container footer__inner">
        <div className="footer__main">
          <p className="eyebrow">Contact</p>
          <h2>Let's talk.</h2>
          <p className="footer__sub">
            I'm looking for new-grad software engineering and data science
            roles. The fastest way to reach me is email.
          </p>

          <div className="footer__links">
            <a href="mailto:ahnrena.18@gmail.com" className="footer__link footer__link--primary">
              ahnrena.18@gmail.com
            </a>
            <a href="https://github.com/ARena18" target="_blank" rel="noreferrer" className="footer__link">
              GitHub ↗
            </a>
            <a href="https://www.linkedin.com/in/rena-ahn-02baa5246" target="_blank" rel="noreferrer" className="footer__link">
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="footer__bottom">
          <span>Rena Ahn — Seattle, WA</span>
          <span>Built with React, deployed on GitHub Pages</span>
        </div>
      </div>
    </footer>
  )
}
