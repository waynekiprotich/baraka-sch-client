"use client";

import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Tabs from '../components/Tabs.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function SchoolLife() {
  const tabs = [
    {
      key: 'earlyyears', label: 'Early Years (Playgroup & Pre-Primary)',
      content: (
        <div className="grid grid-3 stagger">
          <Reveal className="card">
            <h3>Play-Based Learning</h3>
            <p>Sensory play, building blocks, and interactive games that make early literacy and numeracy feel natural and fun.</p>
          </Reveal>
          <Reveal className="card" delay={60}>
            <h3>Social Development</h3>
            <p>Sharing, teamwork, and emotional growth nurtured in a warm, loving classroom environment.</p>
          </Reveal>
          <Reveal className="card" delay={120}>
            <h3>Motor Skills</h3>
            <p>Clay modeling, finger painting, and outdoor playground games to develop fine and gross motor skills.</p>
          </Reveal>
        </div>
      ),
    },
    {
      key: 'sports', label: 'Sports & Games',
      content: (
        <div className="grid grid-4 stagger">
          <Reveal className="card"><h3>Athletics</h3><p>Track and field, training on the same soil that shaped Olympic champions.</p></Reveal>
          <Reveal className="card" delay={60}><h3>Football</h3><p>Inter-house leagues and county tournaments.</p></Reveal>
          <Reveal className="card" delay={120}><h3>Volleyball & Netball</h3><p>Competitive teams for Upper Primary and Junior School.</p></Reveal>
          <Reveal className="card" delay={180}><h3>Swimming Basics</h3><p>Water-safety and beginner swim lessons each term.</p></Reveal>
        </div>
      ),
    },
    {
      key: 'clubs', label: 'Fun Clubs',
      content: (
        <div className="grid grid-4 stagger">
          {[
            ['Little Explorers', 'Outdoor nature walks, bug hunting, and learning about plants.'],
            ['Clay Modeling', 'Getting hands messy while sculpting animals and creative shapes.'],
            ['Puppet Theatre', 'Storytelling, voice acting, and puppet-making to build confidence.'],
            ['STEM & Coding', 'Weekly sessions building real, working mini-projects and robotics.'],
            ['Scouts', 'Outdoor skills, service projects and badge-work.'],
            ['Debate Society', 'Public speaking and structured argument from Grade 5 up.'],
          ].map(([t, b], i) => <Reveal key={t} className="card" delay={i * 50}><h3>{t}</h3><p>{b}</p></Reveal>)}
        </div>
      ),
    },
    {
      key: 'arts', label: 'Music & Drama',
      content: (
        <div className="grid grid-3 stagger">
          <Reveal className="card"><h3>Music & Choir</h3><p>Singing, playing instruments, and performing at the annual Music Festival.</p></Reveal>
          <Reveal className="card" delay={60}><h3>Drama & Plays</h3><p>Termly productions written and performed by learners.</p></Reveal>
          <Reveal className="card" delay={120}><h3>Art Studio</h3><p>Open studio time for painting, sculpture and design.</p></Reveal>
        </div>
      ),
    },
  ];

  const schoolLifeSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Co-curricular Activities & Clubs",
    "description": "Explore the vibrant school life at Baraka School Kapsabet, including sports, music, drama, and fun clubs.",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Athletics & Sports"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "STEM & Coding Club"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": "Music & Drama"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="School Life, Clubs & Sports" 
        description="Discover co-curricular activities, sports, and clubs at Baraka School Kapsabet. From athletics to STEM coding and music."
        schema={schoolLifeSchema}
      />

      <PageHero crumb="School Life" title="Where talents get discovered">
        Twelve clubs, competitive sports and a performing-arts programme that runs all year — Kapsabet's running heritage runs in our blood too.
      </PageHero>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Interactive Campus Life</p>
            <h2>Explore our co-curricular pathways</h2>
          </Reveal>
          <Tabs tabs={tabs} defaultKey="earlyyears" />
        </div>
      </section>

      <svg className="lane-divider" viewBox="0 0 1200 64" preserveAspectRatio="none"><path className="lane-2" d="M0 40 C300 10 900 10 1200 40" /><path d="M0 50 C300 22 900 22 1200 50" /></svg>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Gallery</p><h2>Moments from this term</h2></Reveal>
          <div className="masonry">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" alt="Students conducting a physics experiment in the science fair" wide />
            <Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80" alt="Young athletes jogging together on the training field" tall />
            <Tile swatch="p5" bgImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" alt="Students reading peacefully in the school library corner" />
            <Tile swatch="p1" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" alt="Creative class drawing and painting in the school art room" />
            <Tile swatch="p6" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" alt="Primary students engaging in an outdoor recreation session" wide />
          </div>
          <div style={{ textAlign: 'center', marginTop: '36px' }}><Link to="/gallery" className="btn btn-ghost">Open Full Gallery</Link></div>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Student Stories</p><h2>In their own words</h2></Reveal>
          <div className="grid grid-3 stagger">
            {[
              ['Faith, Grade 8', 'Debate club taught me to disagree without being disagreeable.'],
              ['Brian, Grade 6', 'I built my first working robot in the STEM club this year.'],
              ['Naomi, Grade 9', "Running here feels different — like we're part of something bigger."],
            ].map(([who, quote], i) => (
              <Reveal key={who} className="card" delay={i * 70}>
                <p className="testi-quote" style={{ fontSize: '1.05rem' }}>"{quote}"</p>
                <p style={{ marginTop: '14px', fontSize: '.85rem', color: 'var(--ink)' }}>— {who}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}