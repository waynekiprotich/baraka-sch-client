import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const onLoad = () => setTimeout(() => setDone(true), 300);
    if (document.readyState === 'complete') onLoad();
    else window.addEventListener('load', onLoad);
    const fallback = setTimeout(() => setDone(true), 1200);
    return () => { window.removeEventListener('load', onLoad); clearTimeout(fallback); };
  }, []);
  return (
    <div className={`preloader ${done ? 'done' : ''}`} aria-hidden="true">
      <img className="mark" src="/images/logo.svg" alt="" />
    </div>
  );
}

export function MobileCta() {
  return (
    <div className="mobile-cta">
      <Link to="/admissions#apply" className="btn btn-primary" style={{ width: '100%' }}>Apply Now</Link>
    </div>
  );
}

export function FabStack() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 600);
    document.addEventListener('scroll', onScroll);
    return () => document.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <div className="fab-wrap">
      <button className={`back-top ${show ? 'show' : ''}`} aria-label="Back to top" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></svg>
      </button>
      <a className="fab wa" href="https://wa.me/254700123456" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <svg viewBox="0 0 24 24" fill="currentColor" width="28" height="28">
          <path d="M12.012 2c-5.506 0-9.989 4.478-9.99 9.984a9.96 9.96 0 0 0 1.335 4.993L2 22l5.233-1.371a9.936 9.936 0 0 0 4.777 1.218h.005c5.505 0 9.989-4.478 9.99-9.984a9.965 9.965 0 0 0-2.925-7.064A9.93 9.93 0 0 0 12.012 2zm5.835 14.185c-.256.723-1.485 1.31-2.04 1.362-.506.047-1.167.07-1.877-.156a14.29 14.29 0 0 1-6.15-3.845 11.753 11.753 0 0 1-2.553-4.371c-.327-.896-.033-1.383.257-1.673.213-.213.469-.554.682-.767.17-.17.256-.256.384-.256.128 0 .256.043.34.128.128.128.81 1.962.895 2.132.085.17.085.34 0 .511-.085.17-.17.256-.298.426-.128.128-.256.256-.383.426-.128.128-.256.298-.085.597.17.298.767 1.279 1.62 2.046.853.767 1.577 1.023 1.875 1.15.256.128.426.213.469.298.085.128.085.767-.17 1.492z"/></svg>
      </a>
    </div>
  );
}

export function CookieBanner() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    if (localStorage.getItem('baraka-cookie-ack')) return;
    const t = setTimeout(() => setShow(true), 900);
    return () => clearTimeout(t);
  }, []);
  const ack = () => {
    localStorage.setItem('baraka-cookie-ack', '1');
    setShow(false);
  };
  return (
    <div className={`cookie-banner ${show ? 'show' : ''}`}>
      <p>We use cookies to improve your experience on this site. By continuing, you agree to our use of cookies.</p>
      <div className="cookie-actions">
        <button className="btn btn-sm btn-ghost" onClick={ack}>Decline</button>
        <button className="btn btn-sm btn-primary" onClick={ack}>Accept</button>
      </div>
    </div>
  );
}
</dyad-file>

The issue is that the `FabStack` component uses `window.scrollY` in a `useEffect` hook, but this can cause issues during server-side rendering or when the window object is not available. Let me also check if there are any issues with the MobileMenu component:

<dyad-write path="src/components/MobileMenu.jsx" description="Fixing MobileMenu - ensuring proper Link import">
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