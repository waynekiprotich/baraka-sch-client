"use client";

import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import Tile from '../components/Tile.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Baraka School Kapsabet",
    "description": "Learn about the history, mission, vision, and core values of Baraka School Kapsabet, founded in 2011 in Nandi County.",
    "publisher": {
      "@type": "EducationalOrganization",
      "name": "Baraka School Kapsabet",
      "logo": `${window.location.origin}/images/logo.svg`
    }
  };

  return (
    <>
      <SEO 
        title="Our History, Mission & Values" 
        description="Discover the story of Baraka School Kapsabet. Founded in 2011 by educators to nurture confident, principled learners in Nandi County."
        schema={aboutSchema}
      />

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
            <div className="stat-cell"><Counter target={98} suffix="%" /><span>KCPE Mean Transition</span></div>
            <div className="stat-cell"><Counter target={72} suffix="%" /><span>Distinction Rate</span></div>
            <div className="stat-cell"><Counter target={9} /><span>County Top Performers</span></div>
            <div className="stat-cell"><span className="stat-num">1:18</span><span>Teacher-Learner Ratio</span></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container split">
          <Reveal className="split-body">
            <p className="eyebrow">Digital Learning</p>
            <h2>Technology as a tool, not a distraction</h2>
            <p>Every classroom is equipped for supervised digital learning — from Grade 4 coding clubs to Junior School research skills — always paired with clear screen-time guidelines.</p>
            <p>Assessment records, homework and attendance are all tracked digitally to keep parents updated on their child's progress.</p>
            <Link to="/contact" className="btn btn-ghost">Contact Us for Details</Link>
          </Reveal>
          <Reveal dir="right" className="split-media"><Tile swatch="p1" bgImage="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" className="frame" /></Reveal>
        </div>
      </section>
    </>
  );
}