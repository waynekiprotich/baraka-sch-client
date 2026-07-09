"use client";

import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Lightbox from '../components/Lightbox.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

const ALL_ITEMS = [
  { sw: 'p3', bg: 'https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80', wide: true, cap: 'Junior School science fair', cat: 'academics' },
  { sw: 'p2', bg: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80', tall: true, cap: 'Athletics training', cat: 'sports' },
  { sw: 'p5', bg: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80', cap: 'Morning assembly', cat: 'events' },
  { sw: 'p1', bg: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80', cap: 'Library reading corner', cat: 'academics' },
  { sw: 'p6', bg: 'https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80', wide: true, cap: 'Open Day 2026', cat: 'events' },
  { sw: 'p4', bg: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80', cap: 'Art studio project', cat: 'campus' },
  { sw: 'p3', bg: 'https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80', tall: true, cap: 'Music festival rehearsal', cat: 'events' },
  { sw: 'p2', bg: 'https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80', cap: 'Debate finals', cat: 'academics' },
  { sw: 'p5', bg: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80', wide: true, cap: 'Campus at sunrise', cat: 'campus' },
];

const CATS = [{ key: 'all', label: 'All' }, { key: 'academics', label: 'Academics' }, { key: 'sports', label: 'Sports' }, { key: 'events', label: 'Events' }, { key: 'campus', label: 'Campus' }];

export default function Gallery() {
  const [cat, setCat] = useState('all');
  const [lb, setLb] = useState({ open: false, sw: 'p1', bg: '', cap: '' });
  const items = cat === 'all' ? ALL_ITEMS : ALL_ITEMS.filter((i) => i.cat === cat);

  return (
    <>
      <SEO title="Campus Photo Gallery" description="Take a visual tour of Baraka School Kapsabet." />
      <PageHero crumb="Gallery" title="Campus life, in pictures">A look inside classrooms, sports fields and celebrations throughout the school year.</PageHero>

      <section className="bg-flush">
        <div className="container">
          <div className="tabs-nav" role="tablist">
            {CATS.map((c) => (<button key={c.key} className={`tab-btn ${cat === c.key ? 'active' : ''}`} onClick={() => setCat(c.key)}>{c.label}</button>))}
          </div>
          <div className="tab-panel active">
            <div className="masonry">
              {items.map((it) => (<Tile key={it.cap} swatch={it.sw} bgImage={it.bg} alt={it.cap} wide={it.wide} tall={it.tall} onClick={() => setLb({ open: true, sw: it.sw, bg: it.bg, cap: it.cap })} />))}
            </div>
          </div>
        </div>
      </section>

      <Lightbox open={lb.open} swatchClass={lb.sw} bgImage={lb.bg} caption={lb.cap} onClose={() => setLb({ ...lb, open: false })} />
    </>
  );
}