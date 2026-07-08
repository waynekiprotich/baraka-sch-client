"use client";

import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Accordion from '../components/Accordion.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';
import { sanitizeText, sanitizeEmail } from '../utils/sanitize.js';

const CheckIcon = () => <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M9 11l3 3 8-8" /></svg>;

function DemoForm({ children, onSubmitLabel = 'Sent — thank you!', className, style }) {
  const [sent, setSent] = useState(false);
  const submit = (e) => {
    e.preventDefault();
    const form = e.target;
    const textInputs = form.querySelectorAll('input[type="text"], textarea');
    textInputs.forEach((el) => { el.value = sanitizeText(el.value); });
    const emailInputs = form.querySelectorAll('input[type="email"]');
    emailInputs.forEach((el) => { el.value = sanitizeEmail(el.value); });
    setSent(true);
    form.reset();
    setTimeout(() => setSent(false), 2600);
  };
  return (
    <form className={className} style={style} onSubmit={submit}>
      {children}
      <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '24px' }} disabled={sent}>
        {sent ? onSubmitLabel : 'Submit'}
      </button>
    </form>
  );
}

export default function Admissions() {
  const faqItems = [
    { q: 'Is there a waiting list?', a: 'Popular entry grades (Playgroup, Grade 1 and Grade 7) do run waiting lists most years — we recommend applying at least one term ahead.' },
    { q: 'Do you offer bursaries or sibling discounts?', a: 'Yes — a 10% sibling discount applies from the second child enrolled, and a limited number of merit bursaries are available each year.' },
    { q: 'Can my child join mid-year?', a: 'Mid-year transfers are welcome, subject to space and a short placement assessment.' },
    { q: 'Is transport available from my area?', a: 'Our school buses cover most routes within Kapsabet town and the surrounding trading centres — contact admissions to confirm your specific route.' },
  ];

  const admissionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Baraka School Kapsabet Admissions',
    description: 'Admissions process, requirements, and fee structure for Playgroup through Grade 9 at Baraka School Kapsabet.',
    offers: {
      '@type': 'Offer',
      category: 'Education',
      priceCurrency: 'KES',
      description: 'Termly tuition fees starting from KES 28,000',
    },
  };

  const [applications, setApplications] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const loadApplications = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/admissions');
      if (!response.ok) throw new Error('Failed to fetch admissions');
      const data = await response.json();
      setApplications(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadApplications();
  }, []);

  const admissionsSchema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'Baraka School Kapsabet Admissions',
    description: 'Admissions process, requirements, and fee structure for Playgroup through Grade 9 at Baraka School Kapsabet.',
    offers: {
      '@type': 'Offer',
      category: 'Education',
      priceCurrency: 'KES',
      description: 'Termly tuition fees starting from KES 28,000',
    },
  };

  return (
    <>
      <SEO
        title="Admissions, Fees & Requirements"
        description="Learn how to apply to Baraka School Kapsabet. View our termly fee structure, admission requirements, and start your online application."
        schema={admissionsSchema}
      />

      <PageHero crumb="Admissions" title="Begin your child's Baraka journey">
        Places for Playgroup through Grade 9 are open for the 2027 intake. Here's everything you need to apply with confidence.
      </PageHero>
      <section className="bg-flush section-tight">
        <div className="container hero-cta" style={{ justifyContent: 'center' }}>
          <a href="#apply" className="btn btn-primary">Apply Online</a>
        </div>
      </section>

      <section id="process" className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">How It Works</p><h2>Admission process</h2></Reveal>
          <div className="steps stagger">
            {[
              ['01', 'Submit Enquiry', 'Fill the online form or visit our admissions office with your query.'],
              ['02', 'Assessment & Interview', 'A short, friendly placement assessment for the learner and parents.'],
              ['03', 'Offer & Enrolment', 'Receive your offer letter, pay the deposit, and confirm your place.'],
            ].map(([num, title, body], i) => (
              <Reveal key={num} className="step" delay={i * 80}><span className="num">{num}</span><h3>{title}</h3><p>{body}</p></Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container split">
          <Reveal className="split-body">
            <p className="eyebrow">Requirements</p>
            <h2>What you'll need to apply</h2>
            <ul>
              <li><CheckIcon />Completed application form</li>
              <li><CheckIcon />Copy of learner's birth certificate</li>
              <li><CheckIcon />Most recent school report / transfer letter</li>
              <li><CheckIcon />Immunisation record (Playgroup & Lower Primary)</li>
              <li><CheckIcon />Two passport photos</li>
            </ul>
          </Reveal>
          <Reveal dir="right" className="split-media"><Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="Students writing on books in an organic study session group" className="frame" loading="lazy" /></Reveal>
        </div>
      </section>

      <section id="fees" className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Investment</p><h2>Fees overview</h2><p>Indicative termly fees. A full, itemised structure is shared at the offer stage.</p></Reveal>
          <Reveal as="table" className="fee-table">
            <thead><tr><th>Level</th><th>Tuition (Termly)</th><th>Meals</th><th>Transport (Optional)</th></tr></thead>
            <tbody>
              <tr><td>Playgroup — PP2</td><td><strong>KES 28,000</strong></td><td>KES 6,000</td><td>from KES 4,500</td></tr>
              <tr><td>Lower Primary (Gr 1–3)</td><td><strong>KES 34,000</strong></td><td>KES 6,500</td><td>from KES 4,500</td></tr>
              <tr><td>Upper Primary (Gr 4–6)</td><td><strong>KES 38,000</strong></td><td>KES 7,000</td><td>from KES 5,000</td></tr>
              <tr><td>Junior School (Gr 7–9)</td><td><strong>KES 44,000</strong></td><td>KES 7,500</td><td>from KES 5,000</td></tr>
            </tbody>
          </Reveal>
        </div>
      </section>

      <section id="faq" className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Common Questions</p><h2>Frequently asked questions</h2></Reveal>
          <Reveal style={{ maxWidth: '760px' }}><Accordion items={faqItems} /></Reveal>
        </div>
      </section>

      <section id="forms" className="bg-flush">
        <div className="container">
          <Reveal className="cta-band">
            <h2>Download admission forms</h2>
            <p>Get the full application pack, fee structure and requirements checklist as a PDF.</p>
            <div className="cta-actions">
              <a href="#" className="btn btn-primary">Download Application Form</a>
              <a href="#" className="btn btn-secondary">Download Fee Structure</a>
            </div>
          </Reveal>
        </div>
      </section>

      <section id="apply" className="bg-tint">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Online Application</p><h2>Start your application</h2></Reveal>
          <Reveal>
            <DemoForm className="card-form" style={{ maxWidth: '820px', marginInline: 'auto' }}>
              <div className="field"><label htmlFor="pname">Learner's Full Name <span className="req">*</span></label><input id="pname" required type="text" placeholder="e.g. Amani Kiptoo" /></div>
              <div className="field"><label htmlFor="pdob">Date of Birth <span className="req">*</span></label><input id="pdob" required type="date" /></div>
              <div className="field">
                <label htmlFor="pgrade">Grade Applying For <span className="req">*</span></label>
                <select id="pgrade" required defaultValue="">
                  <option value="" disabled>Select grade</option>
                  <option>Playgroup</option><option>PP1 / PP2</option><option>Grade 1 – 3</option><option>Grade 4 – 6</option><option>Grade 7 – 9</option>
                </select>
              </div>
              <div className="field"><label htmlFor="pparent">Parent / Guardian Name <span className="req">*</span></label><input id="pparent" required type="text" /></div>
              <div className="field"><label htmlFor="pphone">Phone Number <span className="req">*</span></label><input id="pphone" required type="tel" placeholder="+254 7XX XXX XXX" /></div>
              <div className="field"><label htmlFor="pemail">Email Address</label><input id="pemail" type="email" /></div>
              <div className="field full"><label htmlFor="pmsg">Anything we should know?</label><textarea id="pmsg" placeholder="Learning needs, previous school, questions..."></textarea></div>
            </DemoForm>
            <p style={{ textAlign: 'center', marginTop: '14px', fontSize: '.82rem', color: 'var(--ink-40)' }}>Demo form — no data is sent in this build.</p>
          </Reveal>
        </div>
      </section>
    </>
  );
}