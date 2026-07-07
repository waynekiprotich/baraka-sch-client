"use client";

import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import Tile from '../components/Tile.jsx';
import Accordion from '../components/Accordion.jsx';
import PageHero from '../components/PageHero.jsx';
import SEO from '../components/SEO.jsx';

export default function Contact() {
  const faqItems = [
    { q: 'What are your office hours?', a: 'Monday to Friday, 7:30am – 5:00pm. Saturday mornings by appointment during term time.' },
    { q: "What's the fastest way to reach the school?", a: 'WhatsApp or phone during office hours gets the quickest response — the contact form is best for non-urgent enquiries.' },
    { q: 'Who do I contact in an emergency?', a: 'Call the emergency line listed below — it is monitored around the clock, including weekends and holidays.' },
  ];

  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Baraka School Kapsabet",
    "image": `${window.location.origin}/images/logo.svg`,
    "telephone": "+254-700-123-456",
    "email": "info@barakaschoolkapsabet.ac.ke",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kapsabet–Eldoret Road",
      "addressLocality": "Kapsabet",
      "addressRegion": "Nandi County",
      "addressCountry": "KE"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "07:30",
        "closes": "17:00"
      }
    ]
  };

  return (
    <>
      <SEO 
        title="Contact Us & Location" 
        description="Get in touch with Baraka School Kapsabet. Find our phone number, email, WhatsApp contact, office hours, and campus location on Kapsabet–Eldoret Road."
        schema={contactSchema}
      />

      <PageHero crumb="Contact" title="We'd love to hear from you">
        Visit, call, WhatsApp or send a message — our admissions and front-office team responds within one working day.
      </PageHero>

      <section className="bg-flush">
        <div className="container split">
          <Reveal dir="left" className="split-media">
            <div className="frame tile p5" role="img" aria-label="Map showing Baraka School Kapsabet location, Kapsabet–Eldoret Road, Nandi County"></div>
          </Reveal>
          <Reveal className="split-body">
            <p className="eyebrow">Visit Us</p>
            <h2>Find us in Kapsabet</h2>
            <p style={{ marginBottom: '6px' }}><strong>Address —</strong> Kapsabet–Eldoret Road, Kapsabet, Nandi County, Kenya</p>
            <p style={{ marginBottom: '6px' }}><strong>Phone —</strong> +254 700 123 456</p>
            <p style={{ marginBottom: '6px' }}><strong>Email —</strong> info@barakaschoolkapsabet.ac.ke</p>
            <p style={{ marginBottom: '22px' }}><strong>WhatsApp —</strong> <a href="https://wa.me/254700123456" style={{ color: 'var(--purple)', fontWeight: 700 }}>+254 700 123 456</a></p>
            <div className="social-row">
              <a href="#" aria-label="Facebook"><svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg></a>
              <a href="#" aria-label="Instagram"><svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /></svg></a>
              <a href="#" aria-label="YouTube"><svg viewBox="0 0 24 24" fill="none" stroke="var(--purple)" strokeWidth="2"><rect x="2" y="5" width="20" height="14" rx="4" /><polygon points="10 9 15 12 10 15 10 9" /></svg></a>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container grid grid-3 stagger">
          <Reveal className="card">
            <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><circle cx="12" cy="12" r="9" stroke="currentColor" /><path d="M12 7v5l3 3" stroke="currentColor" /></svg></div>
            <h3>Office Hours</h3><p>Mon – Fri, 7:30am – 5:00pm.<br />Saturday mornings by appointment.</p>
          </Reveal>
          <Reveal className="card" delay={80}>
            <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8.5-8 10-4.5-1.5-8-5-8-10V6a1 1 0 0 1 1-1h3z" stroke="currentColor" /></svg></div>
            <h3>Emergency Contact</h3><p>+254 700 999 111<br />Answered 24/7, including holidays.</p>
          </Reveal>
          <Reveal className="card" delay={160}>
            <div className="card-icon"><svg viewBox="0 0 24 24" fill="none" strokeWidth="2"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20z" stroke="currentColor" /><circle cx="12" cy="10" r="3" stroke="currentColor" /></svg></div>
            <h3>WhatsApp</h3><p>Fastest for quick questions.<br />+254 700 123 456</p>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Common Questions</p><h2>Frequently asked questions</h2></Reveal>
          <Reveal style={{ maxWidth: '760px' }}><Accordion items={faqItems} /></Reveal>
        </div>
      </section>
    </>
  );
}