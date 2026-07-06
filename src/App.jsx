import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';

const Home = lazy(() => import('./pages/Home.jsx'));
const About = lazy(() => import('./pages/About.jsx'));
const Academics = lazy(() => import('./pages/Academics.jsx'));
const Admissions = lazy(() => import('./pages/Admissions.jsx'));
const SchoolLife = lazy(() => import('./pages/SchoolLife.jsx'));
const Gallery = lazy(() => import('./pages/Gallery.jsx'));
const News = lazy(() => import('./pages/News.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const NotFound = lazy(() => import('./pages/NotFound.jsx'));
const Error500 = lazy(() => import('./pages/500.jsx'));

export default function App() {
  return (
    <Suspense fallback={<div className="preloader" aria-hidden="true"><img className="mark" src="/images/logo.svg" alt="" /></div>}>
      <ErrorBoundary>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/admissions" element={<Admissions />} />
            <Route path="/school-life" element={<SchoolLife />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/news" element={<News />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/500" element={<Error500 />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </ErrorBoundary>
    </Suspense>
  );
}