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
    "description": "Baraka School Kapsabet is a premium private mixed day school in Kapsabet, Kenya, nurturing academic excellence, character and future leaders through the CBC curriculum.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kapsabet–Eldoret Road",
      "addressLocality": "Kapsabet",
      "addressRegion": "Nandi County",
      "addressCountry": "KE"
    },
    "telephone": "+254700123456"
  };

  return (
    <>
      <SEO title="Home" description="Baraka School Kapsabet is a premium private mixed day school in Kapsabet, Kenya, nurturing academic excellence, character and future leaders through the CBC curriculum." schema={homeSchema} />

      <section className="hero" style={{ display: "flex", justifyContent: "flex-start", position: "relative", backgroundImage: "linear-gradient(rgba(38, 14, 78, 0.82), rgba(38, 14, 78, 0.88)), url('https://images.unsplash.com/photo-1541339907198-e08756dedf3f?auto=format&fit=crop&w=1600&q=80')", backgroundSize: "cover", backgroundPosition: "center", color: "#ffffff" }}>
        <div className="hero-content container text-left" style={{ marginLeft: 0, marginRight: "auto", textAlign: "left", zIndex: 2 }}>
          <h1 style={{ color: "#ffffff" }}>Nurturing <em>Excellence</em>, Character & Future Leaders</h1>
          <p style={{ color: "rgba(255, 255, 255, 0.9)" }}>Baraka School Kapsabet was built on the belief that children rise to meet high expectations when they feel truly known.</p>
          <div className="hero-cta">
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Quick Facts</p><h2>At a glance</h2></Reveal>
          <Reveal className="stats-strip">
            <div className="stat-cell"><Counter target={640} suffix="+" /><span>Current Learners</span></div>
            <div className="stat-cell"><Counter target={58} suffix="+" /><span>Teaching Staff</span></div>
            <div className="stat-cell"><Counter target={15} suffix="+" /><span>Years Running</span></div>
            <div className="stat-cell"><Counter target={98} suffix="%" /><span>KCPE Mean Transition</span></div>
          </Reveal>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Our Approach</p><h2>Holistic education from Playgroup to Junior School</h2></Reveal>
          <div className="grid grid-3 stagger">
            <Reveal className="card"><h3>Academic Excellence</h3><p>We follow the Competency‑Based Curriculum (CBC) with a focus on mastery, not memorisation.</p></Reveal>
            <Reveal className="card" delay={60}><h3>Character Development</h3><p>Christian values, kindness, and leadership are woven into daily life.</p></Reveal>
            <Reveal className="card" delay={120}><h3>Individual Attention</h3><p>Small class sizes ensure every learner is seen, heard, and supported.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-flush">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Early Years Foundation</p><h2>Playgroup to Pre-Primary (Ages 2-5)</h2></Reveal>
          <div className="grid grid-4 stagger">
            <Reveal className="card"><div className="card-icon" style={{ background: "white" }} aria-hidden="true">🎨</div><h3>Creative Arts</h3><p>Painting, clay modelling, and music are woven into our daily schedule to spark imagination.</p></Reveal>
            <Reveal className="card" delay={60}><div className="card-icon" style={{ background: "white" }} aria-hidden="true">🌱</div><h3>Nature & Play</h3><p>Our green campus and school garden offer endless opportunities for outdoor exploration.</p></Reveal>
            <Reveal className="card" delay={120}><div className="card-icon" style={{ background: "white" }} aria-hidden="true">💻</div><h3>Digital Explorers</h3><p>Supervised, playful introduction to technology, coding, and digital citizenship.</p></Reveal>
            <Reveal className="card" delay={180}><div className="card-icon" style={{ background: "white" }} aria-hidden="true">🤝</div><h3>Values & Character</h3><p>Christian values, kindness, and leadership are practiced in everything we do.</p></Reveal>
          </div>
        </div>
      </section>

      <section className="bg-tint">
        <div className="container">
          <Reveal className="section-head"><p className="eyebrow">Join Us</p><h2>Visit, apply, or learn more</h2></Reveal>
          <div className="hero-cta" style={{ justifyContent: "center", marginTop: "28px" }}>
            <Link to="/admissions#apply" className="btn btn-primary">Apply Online</Link>
            <Link to="/contact" className="btn btn-ghost">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  );
}