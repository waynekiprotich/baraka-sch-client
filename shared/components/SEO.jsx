import { useEffect } from 'react';

export default function SEO({ 
  title, 
  description = "Baraka School Kapsabet is a premium private mixed day school in Kapsabet, Kenya, nurturing academic excellence, character and future leaders through the CBC curriculum.", 
  keywords = "Baraka School, Kapsabet, Nandi County, CBC curriculum, private school Kenya, primary school, junior school",
  ogType = "website",
  ogImage = "/images/logo.svg",
  schema
}) {
  useEffect(() => {
    const fullTitle = title ? `${title} | Baraka School Kapsabet` : "Baraka School Kapsabet — Nurturing Excellence, Character & Future Leaders";
    document.title = fullTitle;

    const updateMeta = (name, content, isProperty = false) => {
      if (!content) return;
      const selector = isProperty ? `meta[property="${name}"]` : `meta[name="${name}"]`;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        if (isProperty) {
          el.setAttribute('property', name);
        } else {
          el.setAttribute('name', name);
        }
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    updateMeta('description', description);
    updateMeta('keywords', keywords);

    updateMeta('og:title', fullTitle, true);
    updateMeta('og:description', description, true);
    updateMeta('og:type', ogType, true);
    updateMeta('og:image', ogImage, true);
    updateMeta('og:url', window.location.href, true);

    updateMeta('twitter:card', 'summary_large_image');
    updateMeta('twitter:title', fullTitle);
    updateMeta('twitter:description', description);
    updateMeta('twitter:image', ogImage);

    let schemaScript = document.getElementById('json-ld-schema');
    if (schema) {
      if (!schemaScript) {
        schemaScript = document.createElement('script');
        schemaScript.id = 'json-ld-schema';
        schemaScript.type = 'application/ld+json';
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify(schema);
    } else {
      if (schemaScript) {
        schemaScript.remove();
      }
    }

    return () => {
      const script = document.getElementById('json-ld-schema');
      if (script) script.remove();
    };
  }, [title, description, keywords, ogType, ogImage, schema]);

  return null;
}