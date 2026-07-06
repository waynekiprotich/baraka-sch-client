"use client";

import SEO from "../components/SEO.jsx";

export default function Error500() {
  return (
    <>
      <SEO
        title="Server Error"
        description="An unexpected error occurred. Please try again later."
        schema={{
          "@context": "https://schema.org",
          "@type": "WebPage",
          name: "Server Error",
          description: "An unexpected error occurred. Please try again later.",
        }}
      />
      <div className="error-page">
        <h1>500</h1>
        <p>Something went wrong on our server. Please try again later.</p>
        <a href="/" className="btn btn-primary" style={{ background: "var(--gold)", color: "var(--purple-dark)" }}>
          Back to Home
        </a>
      </div>
    </>
  );
}