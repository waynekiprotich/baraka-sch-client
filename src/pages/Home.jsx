"use client";

import Reveal from "../components/Reveal.jsx";
import Counter from "../components/Counter.jsx";
import Tile from "../components/Tile.jsx";
import PageHero from "../components/PageHero.jsx";
import SEO from "../components/SEO.jsx";
import { Link } from 'react-router-dom';

export default function Home() {
  const homeSchema = {
    "@context": "https://schema.org",
    "@type": "School",
    "name": "Baraka School Kapsabet",
    "url": "https://barakaschoolkapsabet.ac.ke/",
    "logo": "https://barakaschoolkapsabet.ac.ke/images/logo.svg",
    "image": "https://barakaschoolkapsabet.ac.ke/images/logo.svg",
    "description": "Baraka School Kapsabet is a premium private mixed day school in Kapsabet, Kenya, nurturing academic excellence, character and future leaders through the CBC curriculum.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kapsabet–Eldoret Road",
      "addressLocality": "Kapsabet",
      "addressRegion": "Nandi County",
      "addressCountry": "KE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "0.2017",
      "longitude": "35.1053"
    },
    "telephone": "+254700123456",
    "sameAs": [
      "https://www.facebook.com/barakaschoolkapsabet",
      "https://www.instagram.com/barakaschoolkapsabet"
    ]
  };

  return (
    <>
      <SEO 
        title="Home" 
        description="Baraka School Kapsabet is a premium private mixed day school in Kapsabet, Kenya, nurturing academic excellence, character and future leaders through the CBC curriculum." 
        schema={homeSchema}
      />

      {/* Self-contained minimalist Apple-inspired styles */}
      <style>{`
        .hero-contact-btn {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          background-color: #ffffff; /* Crisp solid white */
          color: #1d1d1f !important; /* Elegant dark charcoal text */
          font-weight: 600;
          font-size: 15px;
          padding: 14px 32px;
          border-radius: 9999px; /* Perfect pill shape */
          border: 1px solid rgba(0, 0, 0, 0.08); /* Minimalist clean border border */
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08); /* Soft drop shadow (no glow) */
          text-decoration: none;
          transition: transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), 
                      background-color 0.2s ease, 
                      box-shadow 0.2s ease;
          cursor: pointer;
        }

        .hero-contact-btn:hover {
          background-color: #f5f5f7; /* Apple-inspired off-white shift on hover */
          transform: translateY(-2px); /* Elegant minimalist lift */
          box-shadow: 0 6px 16px rgba(0, 0, 0, 0.12); /* Enhanced soft drop shadow */
          color: #1d1d1f !important;
        }

        .hero-contact-btn:active {
          transform: translateY(0);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
        }
      `}</style>

      {/* Hero section with left‑aligned text */}
      <section className="hero" style={{ display: "flex", justifyContent: "flex-start" }}>
        <div className="hero-content container text-left" style={{ marginLeft: 0, marginRight: "auto", textAlign: "left" }}>
          <h1>
            Nurturing <em>Excellence</em>, Character & Future Leaders
          </h1>
          <p>
            Baraka School Kapsabet was built on the belief that children rise to meet high expectations when they feel truly known.
          </p>
          <div className="hero-cta">
            {/* Styled "Contact Us" button for high-contrast accessibility */}
            <Link to="/contact" className="hero-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
        {/* Illustration positioned via CSS */}
        <img
          src="/images/hero-illustration.svg"
          alt="Baraka School illustration layout"
          className="hero-illustration"
        />
      </section>

      {/* Quick facts */}
      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Quick Facts</p>
            <h2>At a glance</h2>
          </Reveal>
          <Reveal className="stats-strip">
            <div className="stat-cell">
              <Counter target={640} suffix="+" />
              <span>Current Learners</span>
            </div>
            <div className="stat-cell">
              <Counter target={58} suffix="+" />
              <span>Teaching Staff</span>
            </div>
            <div className="stat-cell">
              <Counter target={15} suffix="+" />
              <span>Years Running</span>
            </div>
            <div className="stat-cell">
              <Counter target={98} suffix="%" />
              <span>KCPE Mean Transition</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Our approach */}
      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Our Approach</p>
            <h2>Holistic education from Playgroup to Junior School</h2>
          </Reveal>
          <div className="grid grid-3 stagger">
            <Reveal className="card">
              <h3>Academic Excellence</h3>
              <p>
                We follow the Competency‑Based Curriculum (CBC) with a focus on mastery, not
                memorisation.
              </p>
            </Reveal>
            <Reveal className="card" delay={60}>
              <h3>Character Development</h3>
              <p>Christian values, kindness, and leadership are woven into daily life.</p>
            </Reveal>
            <Reveal className="card" delay={120}>
              <h3>Individual Attention</h3>
              <p>Small class sizes ensure every learner is seen, heard, and supported.</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Early years */}
      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Early Years Foundation</p>
            <h2>Playgroup to Pre-Primary (Ages 2-5)</h2>
          </Reveal>
          <div className="grid grid-4 stagger">
            <Reveal className="card">
              <div className="card-icon" style={{ background: "white" }} aria-hidden="true">
                🎨
              </div>
              <h3>Creative Arts</h3>
              <p>
                Painting, clay modelling, and music are woven into our daily schedule to spark
                imagination.
              </p>
            </Reveal>
            <Reveal className="card" delay={60}>
              <div className="card-icon" style={{ background: "white" }} aria-hidden="true">
                🌱
              </div>
              <h3>Nature & Play</h3>
              <p>
                Our green campus and school garden offer endless opportunities for outdoor
                exploration.
              </p>
            </Reveal>
            <Reveal className="card" delay={120}>
              <div className="card-icon" style={{ background: "white" }} aria-hidden="true">
                💻
              </div>
              <h3>Digital Explorers</h3>
              <p>
                Supervised, playful introduction to technology, coding, and digital citizenship.
              </p>
            </Reveal>
            <Reveal className="card" delay={180}>
              <div className="card-icon" style={{ background: "white" }} aria-hidden="true">
                🤝
              </div>
              <h3>Values & Character</h3>
              <p>
                Christian values, kindness, and leadership are practiced in everything we do.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head">
            <p className="eyebrow">Join Us</p>
            <h2>Visit, apply, or learn more</h2>
          </Reveal>
          <div className="hero-cta" style={{ justifyContent: "center", marginTop: "28px" }}>
            <Link to="/admissions#apply" className="btn btn-primary">Apply Online</Link>
            <Link to="/contact" className="hero-contact-btn">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}