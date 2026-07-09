import { useRef } from 'react';

export default function Testimonials({ items }) {
  const trackRef = useRef(null);

  const scrollByAmount = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 360;
    track.scrollBy({ left: dir * (cardWidth + 26), behavior: 'smooth' });
  };

  return (
    <>
      <div className="testi-track" ref={trackRef}>
        {items.map((t) => (
          <div className="testi-card" key={t.name}>
            <p className="testi-quote">&ldquo;{t.quote}&rdquo;</p>
            <div className="testi-who">
              <div className="testi-avatar">{t.initials}</div>
              <div>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="testi-controls">
        <button className="icon-btn" aria-label="Previous testimonial" onClick={() => scrollByAmount(-1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" /></svg>
        </button>
        <button className="icon-btn" aria-label="Next testimonial" onClick={() => scrollByAmount(1)}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" /></svg>
        </button>
      </div>
    </>
  );
}