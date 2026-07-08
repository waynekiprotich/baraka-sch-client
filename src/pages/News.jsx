"use client";

import { useState, useEffect, useMemo } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import { Link } from 'react-router-dom';

export default function News() {
  const [cat, setCat] = useState('All');
  const [query, setQuery] = useState('');
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const params = new URLSearchParams();
        params.append('page', 1);
        params.append('per_page', 10);
        if (cat !== 'All') params.append('category', cat);
        if (query) params.append('q', query);
        const response = await fetch('/api/news?' + params.toString());
        if (!response.ok) throw new Error('Failed to fetch news');
        const data = await response.json();
        setArticles(data.articles);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchNews();
  }, [cat, query]);

  const filtered = useMemo(() => {
    return articles.filter((a) => {
      const matchesCat = cat === 'All' || a.tag === cat;
      const matchesQuery = a.title.toLowerCase().includes(query.toLowerCase());
      return matchesCat && matchesQuery;
    });
  }, [articles, cat, query]);

  const newsSchema = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    name: 'Baraka School Kapsabet News & Announcements',
    description: 'Latest updates, achievements, sports news, and announcements from Baraka School Kapsabet.',
  };

  return (
    <>
      <SEO
        title="News, Events & Announcements"
        description="Stay updated with the latest news, academic achievements, sports victories, and community events from Baraka School Kapsabet."
        schema={newsSchema}
      />

      <PageHero crumb="News" title="From around the school">
        Announcements, achievements and stories from the Baraka community.
      </PageHero>

      <section className="bg-flush section-tight">
        <div className="container" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
          <div className="field" style={{ minWidth: '280px', flex: 1 }}>
            <input type="search" placeholder="Search news articles…" aria-label="Search news" value={query} onChange={(e) => setQuery(e.target.value)} />
          </div>
          <div className="tabs-nav" style={{ margin: 0 }}>
            {['All', 'Achievement', 'Sports', 'Community', 'Admissions'].map((c) => (
              <button key={c} className={`tab-btn ${cat === c ? 'active' : ''}`} onClick={() => setCat(c)}>{c}</button>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint section-tight">
        <div className="container">
          <Reveal className="news-feature">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" alt="Winning group of students celebrating with trophies at the Science Congress" className="news-thumb" />
            <div className="news-body">
              <span className="news-tag">Featured Announcement</span>
              <h2>Baraka learners place first at the Nandi County Science Congress</h2>
              <p style={{ color: 'var(--ink-60)', lineHeight: 1.7 }}>Six projects from our Upper Primary and Junior School classes earned top honours this term, with two advancing to the regional finals in Eldoret. The winning entries covered water filtration, solar drying and a low-cost soil-moisture sensor.</p>
              <div className="news-meta">18 June 2026 · By the Communications Office</div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Announcements</p>
            <h2>Latest school updates</h2>
          </Reveal>
          {loading ? (
            <p style={{ textAlign: 'center', color: 'var(--ink-60)' }}>Loading news...</p>
          ) : error ? (
            <p style={{ textAlign: 'center', color: 'var(--ink-60)' }}>Error: {error}</p>
          ) : filtered.length === 0 ? (
            <p style={{ textAlign: 'center', color: 'var(--ink-60)' }}>No articles match your search.</p>
          ) : (
            <div className="grid grid-3 stagger">
              {articles.map((a, i) => (
                <Reveal key={a.id} className="news-card" delay={i * 50}>
                  <Tile swatch={a.sw} bgImage={a.bg} alt={a.title} className="news-thumb" loading="lazy" />
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