import { Link } from 'react-router-dom';

export default function Footer() {
  const onNewsletterSubmit = (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Joined!';
    btn.disabled = true;
    setTimeout(() => { btn.textContent = original; btn.disabled = false; e.target.reset(); }, 2200);
  };

  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <img className="brand-mark" src="/images/logo.svg" alt="Baraka School Logo" />
            <span className="brand-text"><strong>Baraka School</strong><span>Kapsabet</span></span>
          </div>
          <p>A premium mixed day school nurturing excellence, character and future leaders in Kapsabet, Nandi County.</p>
          <div className="social-row">
            <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
            <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /></svg></a>
            <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="4" /><polygon points="10 9 15 12 10 15 10 9" /></svg></a>
            <a href="#" aria-label="X (Twitter)"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="4" y1="4" x2="20" y2="20" /><line x1="20" y1="4" x2="4" y2="20" /></svg></a>
          </div>
        </div>
        <div>
          <h4>Quick Links</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/school-life">School Life</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/news">News</Link></li>
          </ul>
        </div>
        <div>
          <h4>Admissions</h4>
          <ul>
            <li><Link to="/admissions#process">Admission Process</Link></li>
            <li><Link to="/admissions#fees">Fees Overview</Link></li>
            <li><Link to="/admissions#faq">FAQs</Link></li>
            <li><Link to="/admissions#forms">Download Forms</Link></li>
          </ul>
        </div>
        <div>
          <h4>Newsletter</h4>
          <p style={{ fontSize: '.88rem', color: 'rgba(255,255,255,.7)', marginBottom: '14px' }}>Termly updates, straight to your inbox.</p>
          <form onSubmit={onNewsletterSubmit}>
            <div className="newsletter-row">
              <input type="email" required placeholder="Your email address" aria-label="Email address" />
              <button type="submit">Join</button>
            </div>
          </form>
          <div className="map-embed tile p5" role="img" aria-label="Geographical location Map of Baraka School Kapsabet on Kapsabet-Eldoret Road"></div>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© 2026 Baraka School Kapsabet. All rights reserved.</span>
        <div className="footer-bottom-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
          <Link to="/contact">Contact</Link>
        </div>
      </div>
    </footer>
  );
}