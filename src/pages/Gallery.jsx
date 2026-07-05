import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Lightbox from '../components/Lightbox.jsx';
import PageHero from '../components/PageHero.jsx';
import { Link } from 'react-router-dom';

const ALL_ITEMS = [
  { sw: 'p3', wide: true, cap: 'Junior School science fair', cat: 'academics' },
  { sw: 'p2', tall: true, cap: 'Athletics training on the track', cat: 'sports' },
  { sw: 'p5', cap: 'Prayer hall morning assembly', cat: 'events' },
  { sw: 'p1', cap: 'Library reading corner', cat: 'academics' },
  { sw: 'p6', wide: true, cap: 'Open Day 2026', cat: 'events' },
  { sw: 'p4', cap: 'Art studio work in progress', cat: 'campus' },
  { sw: 'p3', tall: true, cap: 'Music festival rehearsal', cat: 'events' },
  { sw: 'p2', cap: 'Debate society finals', cat: 'academics' },
  { sw: 'p5', wide: true, cap: 'Campus grounds at sunrise', cat: 'campus' },
];

const CATS = [
  { key: 'all', label: 'All' },
  { key: 'academics', label: 'Academics' },
  { key: 'sports', label: 'Sports' },
  { key: 'events', label: 'Events' },
  { key: 'campus', label: 'Campus' },
];

export default function Gallery() {
  const [cat, setCat] = useState('all');
  const [lb, setLb] = useState({ open: false, sw: 'p1', cap: '' });

  const items = cat === 'all' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <PageHero crumb="Gallery" title="Campus life, in pictures">
        A look inside classrooms, sports fields and celebrations throughout the school year.
      </PageHero>

      <section className="bg-flush">
        <div className="container">
          <div className="tabs-nav" role="tablist">
            {CATS.map((c) => (
              <button key={c.key} className={`tab-btn ${cat === c.key ? 'active' : ''}`} onClick={() => setCat(c.key)}>{c.label}</button>
            ))}
          </div>
          <div className="tab-panel active">
            <div className="masonry">
              {items.map((it, i) => (
                <Tile
                  key={it.cap}
                  swatch={it.sw}
                  wide={it.wide}
                  tall={it.tall}
                  onClick={() => setLb({ open: true, sw: it.sw, cap: it.cap })}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container split">
          <Reveal className="split-body">
            <p className="eyebrow">Videos</p>
            <h2>Watch: A day at Baraka</h2>
            <p>A short film following three learners through a typical school day — classrooms, clubs and the walk home.</p>
            <a href="#" className="btn btn-ghost">Watch on YouTube</a>
          </Reveal>
          <Reveal dir="right" className="split-media">
            <div className="frame tile p3" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <div style={{ width: '70px', height: '70px', borderRadius: '50%', background: 'rgba(255,255,255,.9)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="26" viewBox="0 0 24 24" fill="var(--purple)"><polygon points="6 4 20 12 6 20" /></svg>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Come See for Yourself</p><h2>Campus tour &amp; virtual tour</h2></Reveal>
          <div className="grid grid-2 stagger">
            <Reveal className="card" style={{ textAlign: 'center', padding: '44px' }}>
              <h3>In-Person Campus Tour</h3>
              <p style={{ marginBottom: '20px' }}>Walk every facility with our admissions team, most weekday mornings.</p>
              <Link to="/admissions#tour" className="btn btn-primary">Book a Tour</Link>
            </Reveal>
            <Reveal className="card" delay={80} style={{ textAlign: 'center', padding: '44px' }}>
              <h3>Virtual Tour</h3>
              <p style={{ marginBottom: '20px' }}>A 360° walkthrough is in production — check back this term.</p>
              <a href="#" className="btn btn-ghost">Notify Me</a>
            </Reveal>
          </div>
        </div>
      </section>

      <Lightbox open={lb.open} swatchClass={lb.sw} caption={lb.cap} onClose={() => setLb({ ...lb, open: false })} />
    </>
  );
}
