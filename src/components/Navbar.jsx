"use client";

import { useEffect, useState, useRef } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import useTheme from "../hooks/useTheme.js";

const LINKS = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/academics", label: "Academics" },
  { to: "/admissions", label: "Admissions" },
  { to: "/school-life", label: "School Life" },
  { to: "/gallery", label: "Gallery" },
  { to: "/news", label: "News" },
  { to: "/contact", label: "Contact" },
];

const PRIMARY_LINKS = LINKS.slice(0, 5);
const SECONDARY_LINKS = LINKS.slice(5);

export { LINKS };

export default function Navbar({ onMenuOpen }) {
  const [solid, setSolid] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const dropdownRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setDropdownOpen(false);
  }, [location.pathname]);

  const isSecondaryActive = SECONDARY_LINKS.some((l) => location.pathname === l.to);

  const isLightMode = theme === "light";
  const textColor = solid && isLightMode ? "#333333" : "#ffffff";
  const inactiveTextColor = solid && isLightMode ? "rgba(51,51,51,0.7)" : "rgba(255,255,255,0.8)";
  const activeGoldColor = "#f59e0b";
  const activeBgColor = "rgba(245,158,11,0.1)";
  const navBackground = solid
    ? isLightMode
      ? "rgba(255,255,255,0.95)"
      : "rgba(30,27,75,0.95)"
    : "transparent";
  const borderBottomColor = solid
    ? isLightMode
      ? "rgba(0,0,0,0.08)"
      : "rgba(255,255,255,0.08)"
    : "transparent";

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
    onMenuOpen();
  };

  return (
    <header
      className={`nav ${solid ? "is-solid" : ""}`}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
        backgroundColor: navBackground,
        backdropFilter: solid ? "blur(16px)" : "none",
        WebkitBackdropFilter: solid ? "blur(16px)" : "none",
        borderBottom: `1px solid ${borderBottomColor}`,
        padding: solid ? "12px 0" : "20px 0",
      }}
    >
      <div className="nav-inner" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", maxWidth: "1400px", margin: "0 auto", padding: "0 24px" }}>
        <Link to="/" className="brand" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none", flexShrink: 0 }}>
          <img className="brand-mark" src="/images/logo.svg" alt="Baraka School Logo" style={{ height: "40px", width: "auto", filter: solid && isLightMode ? "none" : "brightness(0) invert(1)", transition: "filter 0.3s" }} />
          <span className="brand-text" style={{ display: "flex", flexDirection: "column", lineHeight: 1.1 }}>
            <strong style={{ fontSize: "1.15rem", letterSpacing: "-0.02em", color: textColor, transition: "color 0.3s" }}>Baraka School</strong>
            <span style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: activeGoldColor, fontWeight: 600 }}>Kapsabet</span>
          </span>
        </Link>

        <nav className="nav-links" aria-label="Primary" style={{ alignItems: "center", gap: "6px" }}>
          {PRIMARY_LINKS.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              style={({ isActive }) => ({
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 500,
                textDecoration: "none",
                whiteSpace: "nowrap",
                transition: "all 0.2s ease",
                color: isActive ? activeGoldColor : inactiveTextColor,
                backgroundColor: isActive ? activeBgColor : "transparent",
              })}
              onMouseEnter={(e) => {
                if (!e.currentTarget.style.backgroundColor.includes("rgba(245")) e.currentTarget.style.color = textColor;
              }}
              onMouseLeave={(e) => {
                if (!e.currentTarget.style.backgroundColor.includes("rgba(245")) e.currentTarget.style.color = inactiveTextColor;
              }}
            >
              {l.label}
            </NavLink>
          ))}

          <div className="nav-dropdown-container" ref={dropdownRef} style={{ position: "relative" }}>
            <button
              onClick={() => setDropdownOpen(!dropdownOpen)}
              aria-expanded={dropdownOpen}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "4px",
                padding: "8px 14px",
                borderRadius: "8px",
                fontSize: "0.95rem",
                fontWeight: 500,
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: isSecondaryActive ? activeGoldColor : inactiveTextColor,
                backgroundColor: isSecondaryActive ? activeBgColor : "transparent",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                if (!isSecondaryActive) e.currentTarget.style.color = textColor;
              }}
              onMouseLeave={(e) => {
                if (!isSecondaryActive) e.currentTarget.style.color = inactiveTextColor;
              }}
            >
              <span>Explore</span>
              <svg
                viewBox="0 0 24 24"
                width="16"
                height="16"
                stroke="currentColor"
                strokeWidth="2"
                fill="none"
                style={{
                  transition: "transform 0.2s ease",
                  transform: dropdownOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                <polyline points="6 9 12 15 18 9" />
              </svg>
            </button>

            {dropdownOpen && (
              <div
                className="dropdown-menu"
                style={{
                  position: "absolute",
                  top: "calc(100% + 8px)",
                  left: "0",
                  minWidth: "180px",
                  backgroundColor: isLightMode ? "#ffffff" : "var(--surface, #1e1b4b)",
                  border: isLightMode ? "1px solid rgba(0,0,0,0.1)" : "1px solid rgba(255,255,255,0.1)",
                  borderRadius: "12px",
                  padding: "8px",
                  boxShadow: "0 10px 25px -5px rgba(0,0,0,0.15), 0 8px 10px -6px rgba(0,0,0,0.1)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "4px",
                  zIndex: 1001,
                }}
              >
                {SECONDARY_LINKS.map((l) => (
                  <NavLink
                    key={l.to}
                    to={l.to}
                    style={({ isActive }) => ({
                      padding: "10px 12px",
                      borderRadius: "8px",
                      fontSize: "0.9rem",
                      fontWeight: 500,
                      textDecoration: "none",
                      display: "block",
                      transition: "all 0.15s ease",
                      color: isActive ? activeGoldColor : (isLightMode ? "#333333" : "#ffffff"),
                      backgroundColor: isActive ? activeBgColor : "transparent",
                    })}
                    onMouseEnter={(e) => {
                      if (!e.currentTarget.style.backgroundColor.includes("rgba(245")) {
                        e.currentTarget.style.backgroundColor = isLightMode ? "rgba(0,0,0,0.04)" : "rgba(255,255,255,0.05)";
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!e.currentTarget.style.backgroundColor.includes("rgba(245")) {
                        e.currentTarget.style.backgroundColor = "transparent";
                      }
                    }}
                  >
                    {l.label}
                  </NavLink>
                ))}
              </div>
            )}
          </div>
        </nav>

        <div className="nav-actions" style={{ display: "flex", alignItems: "center", gap: "12px", flexShrink: 0 }}>
          <button
            aria-label="Toggle dark mode"
            onClick={toggle}
            style={{ background: "transparent", border: "none", cursor: "pointer", color: textColor, display: "flex", alignItems: "center", justifyContent: "center", width: "44px", height: "44px", padding: "0", transition: "color 0.3s" }}
          >
            {theme === "light" ? (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
              </svg>
            ) : (
              <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="5" />
                <line x1="12" y1="1" x2="12" y2="3" />
                <line x1="12" y1="21" x2="12" y2="23" />
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />
                <line x1="21" y1="12" x2="23" y2="12" />
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            )}
          </button>

          <div className="apply-desktop" style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Link
              to="/admissions#apply"
              style={{
                whiteSpace: "nowrap",
                padding: "8px 18px",
                fontSize: "0.85rem",
                borderRadius: "100px",
                backgroundColor: activeGoldColor,
                color: "#000",
                fontWeight: 600,
                textDecoration: "none",
                boxShadow: "none",
              }}
            >
              Apply Now
            </Link>
          </div>

          <button
            aria-label="Open menu"
            aria-expanded={menuOpen}
            onClick={handleMenuToggle}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              color: textColor,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "44px",
              height: "44px",
              padding: "0",
              transition: "color 0.3s",
            }}
            className="nav-toggle"
          >
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2">
              {/* Top line - rotates and moves */}
              <line
                x1="3"
                y1="6"
                x2="21"
                y2="6"
                strokeLinecap="round"
                style={{
                  transformOrigin: "center",
                  transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "rotate(0deg) translate(0, 0)",
                  transition: "all 0.3s ease",
                }}
              />
              {/* Middle line - fades out */}
              <line
                x1="3"
                y1="12"
                x2="21"
                y2="12"
                strokeLinecap="round"
                style={{
                  opacity: menuOpen ? 0 : 1,
                  transition: "opacity 0.3s ease",
                }}
              />
              {/* Bottom line - rotates and moves */}
              <line
                x1="3"
                y1="18"
                x2="21"
                y2="18"
                strokeLinecap="round"
                style={{
                  transformOrigin: "center",
                  transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "rotate(0deg) translate(0, 0)",
                  transition: "all 0.3s ease",
                }}
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}