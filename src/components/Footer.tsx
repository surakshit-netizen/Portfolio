"use client";

import Link from "next/link";
import { siteConfig } from "@/config/site";

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--bg)",
        borderTop: "1px solid var(--border-subtle)",
        padding: "3rem 0",
      }}
    >
      <div
        className="container"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr",
          alignItems: "center",
          gap: "1rem",
        }}
      >
        {/* Left: Logo + tag */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
            <div
              style={{
                width: "24px",
                height: "24px",
                borderRadius: "7px",
                background: "linear-gradient(135deg, #7c3aed, #2563eb)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "0.55rem",
                fontWeight: 800,
                color: "#fff",
              }}
            >
              SC
            </div>
            <span
              style={{
                fontWeight: 700,
                fontSize: "0.9rem",
                color: "var(--text-primary)",
              }}
            >
              Surakshit Chauhan
            </span>
          </div>
          <p
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              fontSize: "0.65rem",
              color: "var(--text-dim)",
              marginTop: "0.35rem",
              letterSpacing: "0.05em",
            }}
          >
            {siteConfig.title}
          </p>
        </div>

        {/* Center: Built with */}
        <p
          style={{
            textAlign: "center",
            fontFamily: "'JetBrains Mono', monospace",
            fontSize: "0.65rem",
            color: "var(--text-dim)",
            letterSpacing: "0.05em",
          }}
        >
          Crafted with{" "}
          <span className="gradient-text" style={{ fontWeight: 700 }}>
            Next.js
          </span>{" "}
          &{" "}
          <span className="gradient-text" style={{ fontWeight: 700 }}>
            Tailwind
          </span>{" "}
          — © {new Date().getFullYear()}
        </p>

        {/* Right: Links */}
        <div
          style={{
            display: "flex",
            gap: "1.25rem",
            justifyContent: "flex-end",
          }}
        >
          {[
            { href: siteConfig.github, label: "GitHub", id: "footer-github" },
            {
              href: siteConfig.linkedin,
              label: "LinkedIn",
              id: "footer-linkedin",
            },
            {
              href: siteConfig.whatsapp,
              label: "WhatsApp",
              id: "footer-whatsapp",
            },
            {
              href: `mailto:${siteConfig.email}`,
              label: "Email",
              id: "footer-email",
            },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              id={link.id}
              style={{
                fontSize: "0.78rem",
                color: "var(--text-muted)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s ease",
              }}
              onMouseEnter={(e) => {
                (e.target as HTMLElement).style.color = "var(--violet-light)";
              }}
              onMouseLeave={(e) => {
                (e.target as HTMLElement).style.color = "var(--text-muted)";
              }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
