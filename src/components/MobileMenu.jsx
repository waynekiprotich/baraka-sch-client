import { Link } from 'react-router-dom';
import { LINKS } from './Navbar.jsx';

export default function MobileMenu({ open, onClose }) {
  return (
    <div className={`mobile-panel ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="icon-btn mobile-close" aria-label="Close menu" onClick={onClose}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
      </button>
      {LINKS.map((l) => (
        <Link key={l.to} to={l.to} onClick={onClose}>{l.label}</Link>
      ))}
      <Link to="/admissions#apply" className="btn btn-primary btn-block" onClick={onClose}>Apply Now</Link>
    </div>
  );
}
