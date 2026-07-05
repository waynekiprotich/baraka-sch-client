import { useMemo, useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import PageHero from '../components/PageHero.jsx';

const ARTICLES = [
  { sw: 'p2', bg: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80', tag: 'Sports', title: 'Athletics team sweeps the county cross-country meet', blurb: 'Baraka runners took gold in four of six age categories.', date: '28 May 2026' },
  { sw: 'p5', bg: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', tag: 'Community', title: "Parents' Day 2026: photos and highlights", blurb: 'Over 500 family members joined us for a full day of open classrooms.', date: '14 April 2026' },
  { sw: 'p6', bg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', tag: 'Admissions', title: '2027 intake applications now open', blurb: 'Priority placement closes 30 September for returning families.', date: '2 April 2026' },
  { sw: 'p1', bg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', tag: 'Achievement', title: 'Two learners selected for the National Debate Camp', blurb: 'Grade 8 debaters Faith and Kevin head to Nairobi this July.', date: '20 March 2026' },
  { sw: 'p4', bg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', tag: 'Community', title: 'New computer lab officially opened', blurb: 'Twenty-five new workstations expand our digital learning capacity.', date: '6 March 2026' },
  { sw: 'p3', bg: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80', tag: 'Sports', title: 'Baraka hosts the Kapsabet Zone athletics trials', blurb: 'Our field hosted eight schools competing for zonal qualification.', date: '19 February 2026' },
];

const CATS = ['All', 'Achievement', 'Sports', 'Community', 'Admissions'];

export default function News() {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');

  const filtered = useMemo(() => {
    return ARTICLES.filter((a) => {
      const matchesCat = cat === 'All' || a.tag === cat;
      const matchesQuery = a.title.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [cat, query]);

  return (
    <>
      <PageHero crumb="News" title="From around the school">
        Announcements, achievements and stories from the Baraka community.
      </PageHero>

      <section className="bg-flush section-tight">
        <div className="container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="field" style={{ minWidth: '280px', flex: 1 }}>
            <input type="search" placeholder="Search news articles…" aria-label="Search news" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="tabs-nav" style={{ margin: 0 }}>
            {CATS.map((c) => (
              <button key={c} className={`tab-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint section-tight">
        <div className="container">
          <Reveal className="news-feature">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" className="news-thumb" />
            <div className="news-body">
              <span className="news-tag">Achievement</span>
              <h3>Baraka learners place first at the Nandi County Science Congress</h3>
              <p style={{ color: 'var(--ink-60)', lineHeight: 1.7 }}>Six projects from our Upper Primary and Junior School classes earned top honours this term, with two advancing to the regional finals in Eldoret. The winning entries covered water filtration, solar drying and a low-cost soil-moisture sensor.</p>
              <div className="news-meta">18 June 2026 · By the Communications Office</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          {filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--ink-60)' }}>No articles match your search.</p>
          ) : (
            <div className="grid grid-3 stagger">
              {filtered.map((a, i) => (
                <Reveal key={a.title} className="news-card" delay={i * 50}>
                  <Tile swatch={a.sw} bgImage={a.bg} className="news-thumb" />
                  <div className="news-body">
                    <span className="news-tag">{a.tag}</span>
                    <h3>{a.title}</h3>
                    <p style={{ color: 'var(--ink-60)', fontSize: '.9rem', marginTop: '8px' }}>{a.blurb}</p>
                    <div className="news-meta">{a.date}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          )}
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