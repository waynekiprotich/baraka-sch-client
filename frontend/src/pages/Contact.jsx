"use client";

import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Accordion from '../components/Accordion.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

const CheckIcon = () => <svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M9 11l3 3 8-8" /></svg>;

export default function Contact() {
  const faqItems = [
    { q: 'Is there a waiting list?', a: 'Popular entry grades run waiting lists most years.' },
    { q: 'Do you offer bursaries or sibling discounts?', a: 'Yes — a 10% sibling discount applies from the second child enrolled.' },
    { q: 'Can my child join mid-year?', a: 'Mid-year transfers are welcome, subject to space.' },
    { q: 'Is transport available from my area?', a: 'Our school buses cover most routes within Kapsabet town.' },
  ];

  const [formData, setFormData] = useState({ pparent: '', pemail: '', pmsg: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setFormData({ pparent: '', pemail: '', pmsg: '' }); setSubmitted(false); }, 2600);
  };

  return (
    <>
      <SEO title="Contact & Visit Us" description="Get in touch with Baraka School Kapsabet for admissions, visits, and general enquiries." />
      <PageHero crumb="Contact" title="We'd love to hear from you">Whether you're exploring admission or just have a question, our team is here to help.</PageHero>

      <section className="bg-flush">
        <div className="container split">
          <Reveal className="split-body">
            <p className="eyebrow">Get in Touch</p>
            <h2>Visit or call the school</h2>
            <ul>
              <li><CheckIcon />Kapsabet–Eldoret Road, Nandi County</li>
              <li><CheckIcon />+254 700 123 456</li>
              <li><CheckIcon />info@barakaschoolkapsabet.ac.ke</li>
              <li><CheckIcon />Mon–Fri: 8:00am – 4:30pm</li>
            </ul>
          </Reveal>
          <Reveal dir="right" className="split-media"><Tile swatch="p2" bgImage="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" alt="School reception" className="frame" /></Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal as="div" className="section-head center" style={{ marginInline: 'auto' }}><p className="eyebrow" style={{ marginInline: 'auto' }}>Send a Message</p><h2>Contact form</h2></Reveal>
          <Reveal>
            <form onSubmit={handleSubmit} className="card-form" style={{ maxWidth: '820px', marginInline: 'auto' }}>
              <div className="field"><label htmlFor="pparent">Your Name <span className="req">*</span></label><input id="pparent" required type="text" value={formData.pparent} onChange={(e) => setFormData({ ...formData, pparent: e.target.value })} /></div>
              <div className="field"><label htmlFor="pemail">Email Address <span className="req">*</span></label><input id="pemail" required type="email" value={formData.pemail} onChange={(e) => setFormData({ ...formData, pemail: e.target.value })} /></div>
              <div className="field full"><label htmlFor="pmsg">Message</label><textarea id="pmsg" value={formData.pmsg} onChange={(e) => setFormData({ ...formData, pmsg: e.target.value })}></textarea></div>
              <button type="submit" className="btn btn-primary btn-block" style={{ marginTop: '24px' }} disabled={submitted}>{submitted ? 'Sent — thank you!' : 'Send Message'}</button>
            </form>
            <p style={{ textAlign: 'center', marginTop: '14px', fontSize: '.82rem', color: 'var(--ink-40)' }}>Demo form — no data is sent in this build.</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Common Questions</p><h2>Frequently asked questions</h2></Reveal>
          <Reveal style={{ maxWidth: '760px' }}><Accordion items={faqItems} /></Reveal>
        </div>
      </section>
    </>
  );
}