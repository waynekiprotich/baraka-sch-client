import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import Tile from '../components/Tile.jsx';
import PageHero from '../components/PageHero.jsx';

export default function About() {
  return (
    <>
      <PageHero crumb="About" title="Fifteen years of nurturing character alongside excellence">
        Baraka School Kapsabet was built on the belief that children rise to meet high expectations when they feel truly known.
      </PageHero>

      <section className="bg-flush">
        <div className="container split">
          <Reveal dir="left" className="split-media">
            <Tile swatch="p4" bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" className="frame" />
            <div className="badge-float"><span className="n">2011</span><p>the year Baraka opened its doors in Kapsabet</p></div>
          </Reveal>
          <Reveal className="split-body">
            <p className="eyebrow">Our History</p>
            <h2>Started by educators, for this community</h2>
            <p>Baraka School Kapsabet opened in 2011 with two classrooms and forty pupils, founded by a group of Nandi County educators who wanted a local alternative to the boarding-school pipeline — one where children could excel academically while staying rooted in family and community.</p>
            <p>Fifteen years later, that founding classroom has grown into a full Playgroup-to-Junior-School campus, but the original conviction hasn't changed: excellence and warmth are not a trade-off.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container grid grid-3 stagger">
          <Reveal className="card">
            <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2" stroke="currentColor" /></svg></div>
            <h3>Our Mission</h3><p>To nurture confident, principled learners equipped with the knowledge, skills and character to lead in their communities and beyond.</p>
          </Reveal>
          <Reveal className="card" delay={80}>
            <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M2 12s4-7 10-7 10 7 10 7-4 7-10 7-10-7-10-7z" stroke="currentColor" /><circle cx="12" cy="12" r="3" stroke="currentColor" /></svg></div>
            <h3>Our Vision</h3><p>To be East Africa's benchmark for holistic, values-driven day-school education.</p>
          </Reveal>
          <Reveal className="card" delay={160}>
            <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2l3 7h7l-5.5 4.5L18 21l-6-4-6 4 1.5-7.5L2 9h7z" stroke="currentColor" /></svg></div>
            <h3>School Motto</h3><p><em>"Baraka" — Blessing.</em> We hold that every learner who passes through our gates carries and gives forward a blessing to their community.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}>
            <p className="eyebrow" style={{ marginInline: 'auto' }}>Core Values</p>
            <h2>What guides every decision we make</h2>
          </Reveal>
          <div className="grid grid-4 stagger">
            <Reveal className="card"><h3>Integrity</h3><p>Doing right even when no one is watching.</p></Reveal>
            <Reveal className="card" delay={60}><h3>Excellence</h3><p>Pursuing the highest standard in all things.</p></Reveal>
            <Reveal className="card" delay={120}><h3>Compassion</h3><p>Leading with empathy, in and out of class.</p></Reveal>
            <Reveal className="card" delay={180}><h3>Discipline</h3><p>The foundation of every meaningful achievement.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container split reverse">
          <Reveal dir="right" className="split-media"><Tile swatch="p5" bgImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" className="frame" /></Reveal>
          <Reveal className="split-body">
            <p className="eyebrow">Leadership</p>
            <h2>A message from our Director</h2>
            <p>"Every parent who walks through our gates is trusting us with something irreplaceable. We take that seriously — in the standard of our teaching, and in the warmth of how we treat every child who studies here."</p>
            <p style={{ marginTop: '20px' }}><strong>Mrs. Ruth Chepkoech</strong><br /><span style={{ color: 'var(--ink-60)', fontSize: '.9rem' }}>Founding Director</span></p>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container split">
          <Reveal dir="left" className="split-media"><Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" className="frame" /></Reveal>
          <Reveal className="split-body">
            <p className="eyebrow">Leadership</p>
            <h2>A message from our Headteacher</h2>
            <p>"Academic results matter, and ours speak for themselves. But what I'm proudest of is watching a shy Grade 3 pupil become a confident Junior School debate captain. That transformation is the real Baraka story."</p>
            <p style={{ marginTop: '20px' }}><strong>Mr. Samuel Kiptoo</strong><br /><span style={{ color: 'var(--ink-60)', fontSize: '.9rem' }}>Headteacher</span></p>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Milestones</p><h2>Our journey so far</h2></Reveal>
          <Reveal className="timeline">
            <div className="timeline-item"><span className="yr">2011</span><h4>Baraka School Kapsabet opens</h4><p>Two classrooms, forty pupils and a bold idea about what a day school could be.</p></div>
            <div className="timeline-item"><span className="yr">2015</span><h4>First KCPE candidates graduate</h4><p>Our founding cohort posts results in the county's top tier.</p></div>
            <div className="timeline-item"><span className="yr">2019</span><h4>New science and ICT block opens</h4><p>Purpose-built labs double our practical-learning capacity.</p></div>
            <div className="timeline-item"><span className="yr">2023</span><h4>Full CBC transition completed</h4><p>Every grade fully aligned to the Competency-Based Curriculum.</p></div>
            <div className="timeline-item"><span className="yr">2026</span><h4>640+ learners, 58+ staff</h4><p>Baraka becomes one of Nandi County's most sought-after day schools.</p></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Achievements</p><h2>Recognised for what matters</h2></Reveal>
          <Reveal className="stats-strip">
            <div className="stat-cell"><Counter target={9} /><span>County Science Awards</span></div>
            <div className="stat-cell"><Counter target={4} /><span>Regional Athletics Titles</span></div>
            <div className="stat-cell"><Counter target={98} suffix="%" /><span>KCPE Transition Rate</span></div>
            <div className="stat-cell"><Counter target={15} suffix="+" /><span>Years Running</span></div>
            <div className="stat-cell"><Counter target={640} suffix="+" /><span>Current Learners</span></div>
            <div className="stat-cell"><Counter target={3200} suffix="+" /><span>Alumni</span></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Campus in Pictures</p><h2>A glimpse of daily life at Baraka</h2></Reveal>
          <div className="masonry">
            <Tile swatch="p3" bgImage="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=800&q=80" wide />
            <Tile swatch="p1" bgImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" tall />
            <Tile swatch="p6" bgImage="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" />
            <Tile swatch="p4" bgImage="https://images.unsplash.com/photo-1530210124550-912dc1381cb8?auto=format&fit=crop&w=800&q=80" />
            <Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" wide />
          </div>
        </div>
      </section>
    </>
  );
}