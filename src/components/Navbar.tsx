"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      id="site-navbar"
      style={{
        position: "fixed",
        top: 0, left: 0, right: 0,
        zIndex: 100,
        transition: "all 0.4s cubic-bezier(0.22,1,0.36,1)",
        background: scrolled ? "rgba(9, 9, 18, 0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(1.4)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(124, 58, 237, 0.12)"
          : "1px solid transparent",
      }}
    >
      <div
        style={{
          maxWidth: "1140px",
          margin: "0 auto",
          padding: scrolled ? "0.9rem 2rem" : "1.25rem 2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          transition: "padding 0.3s ease",
        }}
      >
        {/* Logo */}
        <Link
          href="/"
          id="nav-logo"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.6rem",
            textDecoration: "none",
          }}
        >
          {/* Gradient dot */}
          <div
            style={{
              width: "32px",
              height: "32px",
              borderRadius: "10px",
              background: "linear-gradient(135deg, #7c3aed, #2563eb)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 800,
              fontSize: "0.75rem",
              color: "#fff",
              letterSpacing: "-0.02em",
            }}
          >
            SC
          </div>
          <span
            style={{
              fontWeight: 700,
              fontSize: "1.05rem",
              color: "#f1f5f9",
              letterSpacing: "-0.01em",
            }}
          >
            Surakshit
            <span style={{ color: "rgba(167,139,250,0.7)" }}>.</span>
          </span>
        </Link>

        {/* Nav links */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            gap: "0.25rem",
          }}
        >
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                id={`nav-link-${link.label.toLowerCase()}`}
                style={{
                  padding: "0.45rem 1rem",
                  borderRadius: "10px",
                  fontSize: "0.88rem",
                  fontWeight: 600,
                  textDecoration: "none",
                  color: isActive ? "#fff" : "rgba(148,163,184,0.8)",
                  background: isActive
                    ? "rgba(124, 58, 237, 0.15)"
                    : "transparent",
                  border: isActive
                    ? "1px solid rgba(124, 58, 237, 0.3)"
                    : "1px solid transparent",
                  transition: "all 0.2s ease",
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Resume CTA */}
        <a
          href={siteConfig.resumeFile}
          download
          id="nav-resume-btn"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.4rem",
            padding: "0.5rem 1.2rem",
            background: "linear-gradient(135deg, #7c3aed, #2563eb)",
            color: "#fff",
            fontWeight: 700,
            fontSize: "0.82rem",
            textDecoration: "none",
            borderRadius: "10px",
            transition: "all 0.3s ease",
            boxShadow: "0 2px 12px rgba(124, 58, 237, 0.3)",
          }}
        >
          <svg
            width="13"
            height="13"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
          >
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Resume
        </a>
      </div>
    </header>
  );
}
