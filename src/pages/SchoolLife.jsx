import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Tabs from '../components/Tabs.jsx';
import PageHero from '../components/PageHero.jsx';

export default function SchoolLife() {
  const tabs = [
    {
      key: 'sports', label: 'Sports',
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
      key: 'clubs', label: 'Clubs',
      content: (
        <div className="grid grid-4 stagger">
          {[
            ['STEM Club', 'Robotics, science fairs and the county congress team.'],
            ['Coding Club', 'Weekly sessions building real, working mini-projects.'],
            ['Scouts', 'Outdoor skills, service projects and badge-work.'],
            ['Debate Society', 'Public speaking and structured argument from Grade 5 up.'],
            ['Agriculture Club', 'Hands-on farming in the school garden.'],
            ['Environmental Club', 'Tree-planting, recycling drives and conservation projects.'],
          ].map(([t, b], i) => <Reveal key={t} className="card" delay={i * 50}><h3>{t}</h3><p>{b}</p></Reveal>)}
        </div>
      ),
    },
    {
      key: 'arts', label: 'Music & Drama',
      content: (
        <div className="grid grid-3 stagger">
          <Reveal className="card"><h3>Music</h3><p>Choir, instrumental lessons and the annual Music Festival.</p></Reveal>
          <Reveal className="card" delay={60}><h3>Drama</h3><p>Termly productions written and performed by learners.</p></Reveal>
          <Reveal className="card" delay={120}><h3>Art Studio</h3><p>Open studio time for painting, sculpture and design.</p></Reveal>
        </div>
      ),
    },
    {
      key: 'trips', label: 'Trips & Leadership',
      content: (
        <div className="grid grid-3 stagger">
          <Reveal className="card"><h3>Educational Trips</h3><p>Termly excursions tied directly to classroom learning.</p></Reveal>
          <Reveal className="card" delay={60}><h3>Leadership Programme</h3><p>Prefect body, house captains and peer-mentoring roles.</p></Reveal>
          <Reveal className="card" delay={120}><h3>Community Service</h3><p>Partnerships with local homes and environmental initiatives.</p></Reveal>
        </div>
      ),
    },
  ];

  return (
    <>
      <PageHero crumb="School Life" title="Where talents get discovered">
        Twelve clubs, competitive sports and a performing-arts programme that runs all year — Kapsabet's running heritage runs in our blood too.
      </PageHero>

      <section className="bg-flush">
        <div className="container"><Tabs tabs={tabs} defaultKey="sports" /></div>
      </section>

      <svg className="lane-divider" viewBox="0 0 1200 64" preserveAspectRatio="none"><path className="lane-2" d="M0 40 C300 10 900 10 1200 40" /><path d="M0 50 C300 22 900 22 1200 50" /></svg>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Gallery</p><h2>Moments from this term</h2></Reveal>
          <div className="masonry">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" wide />
            <Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&fit=crop&w=800&q=80" tall />
            <Tile swatch="p5" bgImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" />
            <Tile swatch="p1" bgImage="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" />
            <Tile swatch="p6" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" wide />
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
                <p style={{ marginTop: '14px', fontSize: '.85rem', color: 'var(--ink-60)' }}>— {who}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}