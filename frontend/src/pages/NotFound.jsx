"use client";

import { Link } from "react-router-dom";
import SEO from "../components/SEO.jsx";

export default function NotFound() {
  return (
    <>
      <SEO title="Page Not Found" description="The page you're looking for doesn't exist or has moved." />
      <section className="page-hero" style={{ minHeight: "70vh", display: "flex", alignItems: "center" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p className="eyebrow" style={{ justifyContent: "center", display: "flex" }}>404</p>
          <h1>This page wandered off campus</h1>
          <p style={{ marginInline: "auto" }}>The page you're looking for doesn't exist or has moved.</p>
          <div className="hero-cta" style={{ justifyContent: "center" }}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
          </div>
        </div>
      </section>
    </>
  );
}