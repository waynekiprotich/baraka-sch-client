"use client";

import { useState, useEffect, useMemo } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function News() {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  const [articles] = useState([
    { id: 1, sw: 'p2', bg: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80', tag: 'Sports', title: 'Baraka learners place first at Nandi County Science Congress', blurb: 'Six projects earned top honours this term.', date: '18 Jun 2026' },
    { id: 2, sw: 'p3', bg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', tag: 'Campus', title: 'New library wing opens for Term 2', blurb: 'A quiet reading space for every learner.', date: '02 Jun 2026' },
    { id: 3, sw: 'p1', bg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', tag: 'Achievement', title: 'KCPE candidates post county-topping results', blurb: '98% transition to first-choice schools.', date: '20 May 2026' },
  ]);

  const filtered = useMemo(() => articles.filter((a) => (cat === 'All' || a.tag === cat) && a.title.toLowerCase().includes(query.toLowerCase())), [articles, cat, query]);

  return (
    <>
      <SEO title="News, Events & Announcements" description="Stay updated with the latest news from Baraka School Kapsabet." />
      <PageHero crumb="News" title="From around the school">Announcements, achievements and stories from the Baraka community.</PageHero>

      <section className="bg-flush section-tight">
        <div className="container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="field" style={{ minWidth: '280px', flex: 1 }}>
            <input type="search" placeholder="Search news articles…" aria-label="Search news" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="tabs-nav" style={{ margin: 0 }}>
            {['All', 'Achievement', 'Sports', 'Community', 'Admissions'].map((c) => (<button key={c} className={`tab-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>))}
          </div>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="news-feature">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" alt="Winning students" className="news-thumb" />
            <div className="news-body">
              <span className="news-tag">Featured Announcement</span>
              <h2>Baraka learners place first at the Nandi County Science Congress</h2>
              <p style={{ color: 'var(--ink-60)', lineHeight: 1.7 }}>Six projects from our Upper Primary and Junior School classes earned top honours this term.</p>
              <div className="news-meta">18 June 2026 · By the Communications Office</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Announcements</p><h2>Latest school updates</h2></Reveal>
          <div className="grid grid-3 stagger">
            {filtered.map((a, i) => (<Reveal key={a.id} className="news-card" delay={i * 50}><Tile swatch={a.sw} bgImage={a.bg} alt={a.title} className="news-thumb" loading="lazy" /><div className="news-body"><span className="news-tag">{a.tag}</span><h3>{a.title}</h3><p style={{ color: 'var(--ink-60)', fontSize: '.9rem', marginTop: '8px' }}>{a.blurb}</p><div className="news-meta">{a.date}</div></div></Reveal>))}
          </div>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container" style={{ textAlign: 'center' }}>
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Stay Updated</p><h2>Get news in your inbox</h2></Reveal>
          <Reveal as="form" style={{ display: 'flex', gap: 0, maxWidth: '440px', marginInline: 'auto' }} onSubmit={(e) => { e.preventDefault(); e.target.reset(); }}>
            <input type="email" required placeholder="Your email address" aria-label="Email" style={{ flex: 1, padding: '15px 18px', border: '1.5px solid var(--line)', borderRadius: 'var(--r-pill) 0 0 var(--r-pill)', fontFamily: 'inherit' }} />
            <button type="submit" className="btn btn-primary" style={{ borderRadius: '0 var(--r-pill) var(--r-pill) 0' }}>Subscribe</button>
          </Reveal>
        </div>
      </section>
    </>
  );
}