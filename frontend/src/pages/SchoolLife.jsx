"use client";

import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Tabs from '../components/Tabs.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function SchoolLife() {
  const tabs = [
    { key: 'earlyyears', label: 'Early Years', content: (<div className="grid grid-3 stagger"><Reveal className="card"><h3>Play-Based Learning</h3><p>Sensory play, building blocks, and interactive games.</p></Reveal><Reveal className="card" delay={60}><h3>Social Development</h3><p>Sharing, teamwork, and emotional growth.</p></Reveal><Reveal className="card" delay={120}><h3>Motor Skills</h3><p>Clay modeling, painting, and outdoor games.</p></Reveal></div>) },
    { key: 'sports', label: 'Sports & Games', content: (<div className="grid grid-4 stagger"><Reveal className="card"><h3>Athletics</h3><p>Track and field training.</p></Reveal><Reveal className="card" delay={60}><h3>Football</h3><p>Inter-house leagues.</p></Reveal><Reveal className="card" delay={120}><h3>Volleyball & Netball</h3><p>Competitive teams.</p></Reveal><Reveal className="card" delay={180}><h3>Swimming Basics</h3><p>Water-safety lessons.</p></Reveal></div>) },
    { key: 'clubs', label: 'Fun Clubs', content: (<div className="grid grid-4 stagger">{[['Little Explorers', 'Nature walks and plant learning.'], ['Clay Modeling', 'Sculpting animals.'], ['Puppet Theatre', 'Storytelling and voice acting.'], ['STEM & Coding', 'Weekly mini-projects.'], ['Scouts', 'Outdoor skills and badges.'], ['Debate Society', 'Public speaking from Grade 5.']].map(([t, b], i) => <Reveal key={t} className="card" delay={i * 50}><h3>{t}</h3><p>{b}</p></Reveal>)}</div>) },
    { key: 'arts', label: 'Music & Drama', content: (<div className="grid grid-3 stagger"><Reveal className="card"><h3>Music & Choir</h3><p>Singing and performances.</p></Reveal><Reveal className="card" delay={60}><h3>Drama & Plays</h3><p>Termly productions.</p></Reveal><Reveal className="card" delay={120}><h3>Art Studio</h3><p>Open studio time.</p></Reveal></div>) },
  ];

  return (
    <>
      <SEO title="School Life, Clubs & Sports" description="Discover co-curricular activities, sports, and clubs at Baraka School Kapsabet." />
      <PageHero crumb="School Life" title="Where talents get discovered">Twelve clubs, competitive sports and a performing-arts programme that runs all year.</PageHero>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Interactive Campus Life</p><h2>Explore our co-curricular pathways</h2></Reveal>
          <Tabs tabs={tabs} defaultKey="earlyyears" />
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Gallery</p><h2>Moments from this term</h2></Reveal>
          <div className="masonry">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="Students in science fair" wide />
            <Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80" alt="Young athletes" tall />
            <Tile swatch="p5" bgImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" alt="Students reading" />
            <Tile swatch="p1" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" alt="Creative class drawing" />
            <Tile swatch="p6" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" alt="Primary students recreating" wide />
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}><Link to="/gallery" className="btn btn-ghost">Open Full Gallery</Link></div>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Student Stories</p><h2>In their own words</h2></Reveal>
          <div className="grid grid-3 stagger">
            {[['Faith, Grade 8', 'Debate club taught me to disagree without being disagreeable.'], ['Brian, Grade 6', 'I built my first working robot in the STEM club this year.'], ['Naomi, Grade 9', "Running here feels different — like we're part of something bigger."]].map(([who, quote], i) => (<Reveal key={who} className="card" delay={i * 70}><p className="testi-quote" style={{ fontSize: '1.05rem' }}>"{quote}"</p><p style={{ marginTop: '14px', fontSize: '.85rem', color: 'var(--ink-60)' }}>— {who}</p></Reveal>))}
          </div>
        </div>
      </section>
    </>
  );
}