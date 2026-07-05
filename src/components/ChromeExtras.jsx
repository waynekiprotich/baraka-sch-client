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
      <Link to="/admissions#apply" className="btn btn-primary">Apply Now</Link>
      <Link to="/admissions#tour" className="btn btn-ghost">Book Tour</Link>
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
      <a className="fab wa" href="https://wa.me/254700123456" aria-label="Chat on WhatsApp" target="_blank" rel="noopener noreferrer">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 11.5a8.5 8.5 0 1 1-3.8-7.1L21 3l-1 3.6a8.46 8.46 0 0 1 1 4.9z" /></svg>
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
