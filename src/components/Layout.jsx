"use client";

import { useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './Navbar.jsx';
import MobileMenu from './MobileMenu.jsx';
import Footer from './Footer.jsx';
import { Preloader, MobileCta, FabStack, CookieBanner } from './ChromeExtras.jsx';

export default function Layout() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) window.scrollTo({ top: 0 });
  }, [location.pathname]);

  return (
    <>
      <Preloader />
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar onMenuOpen={() => setMenuOpen(true)} />
      <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} />
      <main id="main">
        <Outlet />
      </main>
      <Footer />
      <MobileCta />
      <FabStack />
      <CookieBanner />
    </>
  );
}