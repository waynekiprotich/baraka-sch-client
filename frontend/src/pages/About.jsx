"use client";

import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import Tile from '../components/Tile.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import { Link } from 'react-router-dom';

export default function About() {
  const aboutSchema = {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Baraka School Kapsabet",
    "description": "Learn about the history, mission, vision, and core values of Baraka School Kapsabet, founded in 2011 in Nandi County."
  };

  return (
    <>
      <SEO title="Our History, Mission & Values" description="Discover the story of Baraka School Kapsabet. Founded in 2011 by educators to nurture confident, principled learners in Nandi County." schema={aboutSchema} />

      <PageHero crumb="About" title="Fifteen years of nurturing character alongside excellence">
        Baraka School Kapsabet was built on the belief that children rise to meet high expectations when they feel truly known.
      </PageHero>

      <section className="bg-flush">
        <div className="container split">
          <Reveal dir="left" className="split-media">
            <Tile swatch="p4" bgImage="https://images.unsplash.com/photo-1577896851231-70ef18881754?auto=format&fit=crop&w=800&q=80" alt="Group of friendly primary school children learning together" className="frame" />
            <div className="badge-float"><span className="n">2011</span><p>the year Baraka opened its doors in Kapsabet</p></div>
          </Reveal>
          <Reveal className="split-body">
            <p className="eyebrow">Our History</p>
            <h2>Started by educators, for this community</h2>
            <p>Baraka School Kapsabet opened in 2011 with two classrooms and forty pupils, founded by a group of Nandi County educators who wanted a local alternative to the boarding-school pipeline.</p>
            <p>Fifteen years later, that founding classroom has grown into a full Playgroup-to-Junior-School campus, but the original conviction hasn't changed: excellence and warmth are not a trade-off.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container grid grid-3 stagger">
          <Reveal className="card"><h3>Our Mission</h3><p>To nurture confident, principled learners equipped with the knowledge, skills and character to lead in their communities and beyond.</p></Reveal>
          <Reveal className="card" delay={80}><h3>Our Vision</h3><p>To be East Africa's benchmark for holistic, values-driven day-school education.</p></Reveal>
          <Reveal className="card" delay={160}><h3>School Motto</h3><p><em>"Baraka" — Blessing.</em> We hold that every learner who passes through our gates carries and gives forward a blessing to their community.</p></Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container split">
          <Reveal className="split-body">
            <p className="eyebrow">Leadership</p>
            <h2>A message from our Director</h2>
            <p>"Every parent who walks through our gates is trusting us with something irreplaceable. We take that seriously — in the standard of our teaching, and in the warmth of how we treat every child who studies here."</p>
            <p style={{ marginTop: '20px' }}><strong>Mrs. Ruth Chepkoech</strong><br /><span style={{ color: 'var(--ink-60)', fontSize: '.9rem' }}>Founding Director</span></p>
          </Reveal>
          <Reveal dir="right" className="split-media"><Tile swatch="p5" bgImage="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="Mrs. Ruth Chepkoech, Founding Director" className="frame" /></Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Milestones</p><h2>Our journey so far</h2></Reveal>
          <Reveal className="timeline">
            <div className="timeline-item"><span className="yr">2011</span><h3>Baraka School Kapsabet opens</h3><p>Two classrooms, forty pupils and a bold idea about what a day school could be.</p></div>
            <div className="timeline-item"><span className="yr">2015</span><h3>First KCPE candidates graduate</h3><p>Our founding cohort posts results in the county's top tier.</p></div>
            <div className="timeline-item"><span className="yr">2019</span><h3>New science and ICT block opens</h3><p>Purpose-built labs double our practical-learning capacity.</p></div>
            <div className="timeline-item"><span className="yr">2023</span><h3>Full CBC transition completed</h3><p>Every grade fully aligned to the Competency-Based Curriculum.</p></div>
            <div className="timeline-item"><span className="yr">2026</span><h3>640+ learners, 58+ staff</h3><p>Baraka becomes one of Nandi County's most sought-after day schools.</p></div>
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
    </>
  );
}