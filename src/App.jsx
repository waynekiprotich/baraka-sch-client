"use client";

import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout.jsx";
import ErrorBoundary from "./components/ErrorBoundary.jsx";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./pages/Home.jsx"));
const About = lazy(() => import("./pages/About.jsx"));
const Academics = lazy(() => import("./pages/Academics.jsx"));
const Admissions = lazy(() => import("./pages/Admissions.jsx"));
const SchoolLife = lazy(() => import("./pages/SchoolLife.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const News = lazy(() => import("./pages/News.jsx"));
const Contact = lazy(() => import("./pages/Contact.jsx"));
const NotFound = lazy(() => import("./pages/NotFound.jsx"));
const Error500 = lazy(() => import("./pages/500.jsx"));

function Loading() {
  return <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '50vh' }}>Loading...</div>;
}

export default function App() {
  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
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
      </Suspense>
    </ErrorBoundary>
  );
}