"use client";

import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import Counter from '../components/Counter.jsx';
import Tile from '../components/Tile.jsx';
import Tabs from '../components/Tabs.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

const CheckIcon = () => <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M9 11l3 3 8-8" /></svg>;

export default function Academics() {
  const levelTabs = [
    {
      key: 'lower', label: 'Lower Primary',
      content: (
        <div className="grid grid-3 stagger">
          <Reveal className="card"><h3>Grades 1 – 3</h3><p>Play-anchored, competency-based foundations in literacy, numeracy and creative arts.</p></Reveal>
          <Reveal className="card" delay={60}><h3>Core Focus</h3><p>Language development, environmental activities, and movement & music.</p></Reveal>
          <Reveal className="card" delay={120}><h3>Class Size</h3><p>Capped at 24 learners per class, supported by a dedicated class teacher and aide.</p></Reveal>
        </div>
      ),
    },
    {
      key: 'upper', label: 'Upper Primary',
      content: (
        <div className="grid grid-3 stagger">
          <Reveal className="card"><h3>Grades 4 – 6</h3><p>Subject-based teaching begins, with specialist teachers for sciences, maths and languages.</p></Reveal>
          <Reveal className="card" delay={60}><h3>Core Focus</h3><p>Critical thinking, project work, and introductory computer studies.</p></Reveal>
          <Reveal className="card" delay={120}><h3>Assessment</h3><p>Continuous, competency-based assessment aligned to national CBC standards.</p></Reveal>
        </div>
      ),
    },
    {
      key: 'junior', label: 'Junior School',
      content: (
        <div className="grid grid-3 stagger">
          <Reveal className="card"><h3>Grades 7 – 9</h3><p>Pathway exploration across STEM, Social Sciences and Arts & Sports Science.</p></Reveal>
          <Reveal className="card" delay={60}><h3>Core Focus</h3><p>Career guidance, leadership programmes, and senior-school placement preparation.</p></Reveal>
          <Reveal className="card" delay={120}><h3>Outcomes</h3><p>98% of Baraka Junior School graduates transition to their first-choice senior school.</p></Reveal>
        </div>
      ),
    },
  ];

  const departments = [
    ['Mathematics', 'Numeracy built through reasoning, not memorisation.'],
    ['Sciences', 'Hands-on labs from Grade 4 onward.'],
    ['Languages', 'English, Kiswahili and communication skills.'],
    ['Computer Studies', 'Coding, typing and digital citizenship.'],
    ['Social Studies', 'Citizenship, geography and Kenyan history.'],
    ['Creative Arts', 'Music, art and design across every grade.'],
    ['Agriculture', 'Practical farming in our own school garden.'],
    ['Religious Education', 'Christian values integrated with academic life.'],
  ];

  const academicsSchema = {
    "@context": "https://schema.org",
    "@type": "EducationalProcedure",
    "name": "CBC Curriculum Pathways",
    "description": "Full CBC pathways from Playgroup through Junior School, backed by continuous assessment and modern digital learning.",
    "educationalLevel": ["Primary School", "Junior Secondary School"]
  };

  return (
    <>
      <SEO 
        title="CBC Curriculum & Academic Programs" 
        description="Explore our CBC curriculum pathways from Playgroup to Junior School. Small class sizes, digital learning, and continuous assessment."
        schema={academicsSchema}
      />

      <PageHero crumb="Academics" title="A curriculum built for how children actually learn">
        Full CBC pathways from Playgroup through Junior School, backed by continuous assessment and modern digital learning.
      </PageHero>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Curriculum by Level</p><h2>Explore each stage of learning</h2></Reveal>
          <Tabs tabs={levelTabs} defaultKey="lower" />
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Departments</p><h2>Subjects taught with real depth</h2></Reveal>
          <div className="grid grid-4 stagger">
            {departments.map(([title, body], i) => (
              <Reveal key={title} className="card" delay={i * 40}><h3>{title}</h3><p>{body}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container split">
          <Reveal className="split-body">
            <p className="eyebrow">Our Approach</p>
            <h2>Teaching philosophy</h2>
            <p>We teach to mastery, not the calendar. Lessons move at the pace of understanding, with every learner's competency tracked individually rather than compared to the class average.</p>
            <ul>
              <li><CheckIcon />Inquiry-first lesson design across every subject</li>
              <li><CheckIcon />Regular one-on-one learner check-ins</li>
              <li><CheckIcon />Parents briefed each term with a written progress narrative</li>
            </ul>
          </Reveal>
          <Reveal dir="right" className="split-media"><Tile swatch="p6" bgImage="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80" className="frame" /></Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container split reverse">
          <Reveal dir="left" className="split-media"><Tile swatch="p1" bgImage="https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80" className="frame" /></Reveal>
          <Reveal className="split-body">
            <p className="eyebrow">Digital Learning</p>
            <h2>Technology as a tool, not a distraction</h2>
            <p>Every classroom is equipped for supervised digital learning — from Grade 4 coding clubs to Junior School research skills — always paired with clear screen-time guidelines.</p>
            <p>Assessment records, homework and attendance are all tracked digitally to keep parents updated on their child's progress.</p>
            <Link to="/contact" className="btn btn-ghost">Contact Us for Details</Link>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Performance</p><h2>Results that reflect the work</h2></Reveal>
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
            <p className="eyebrow">Planning Ahead</p>
            <h2>Academic calendar & downloads</h2>
            <p>Term dates, examination schedules and holiday breaks for the current academic year.</p>
            <ul>
              <li><CheckIcon />Term 1 — 6 Jan to 4 Apr</li>
              <li><CheckIcon />Term 2 — 28 Apr to 25 Jul</li>
              <li><CheckIcon />Term 3 — 18 Aug to 14 Nov</li>
            </ul>
            <a href="#" className="btn btn-primary">Download Academic Calendar (PDF)</a>
          </Reveal>
          <Reveal dir="right" className="split-media"><Tile swatch="p4" bgImage="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80" className="frame" /></Reveal>
        </div>
      </section>
    </>
  );
}