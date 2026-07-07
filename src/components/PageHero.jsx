import { Link } from 'react-router-dom';

export default function PageHero({ crumb, title, children }) {
  return (
    <section className="page-hero">
      <div className="container">
        <div className="breadcrumb"><Link to="/">Home</Link><span>/</span><span>{crumb}</span></div>
        <h1>{title}</h1>
        {children && <p>{children}</p>}
      </div>
    </section>
  );
}