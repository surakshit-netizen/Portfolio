"use client";

import { siteConfig } from "@/config/site";

export default function AboutSection() {
  return (
    <section id="about" style={{ borderTop: "1px solid var(--border-subtle)", background: "linear-gradient(180deg, var(--bg) 0%, var(--surface-1) 50%, var(--bg) 100%)" }}>
      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "5rem", alignItems: "start" }} className="about-grid">
          {/* Left */}
          <div>
            <p className="section-label">About Me</p>
            <h2 className="section-title font-display">Who I Am</h2>
            <div style={{ marginTop: "2.5rem", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1.5rem" }}>
              {[
                { num: "2025", label: "Graduate" },
                { num: "7.0", label: "CGPA" },
                { num: "6+", label: "Projects" },
                { num: "2", label: "Certifications" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card" style={{ padding: "1.25rem", textAlign: "center" }}>
                  <div className="gradient-text" style={{ fontFamily: "'Fraunces', serif", fontSize: "2rem", fontWeight: 700, lineHeight: 1 }}>{stat.num}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.65rem", letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-muted)", marginTop: "0.4rem" }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right */}
          <div>
            {siteConfig.about.split("\n").map((para, i) => para.trim() && (
              <p key={i} style={{ color: "var(--text-secondary)", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: "1.25rem" }}>{para.trim()}</p>
            ))}
            <div style={{ width: "100%", height: "1px", background: "var(--border-subtle)", margin: "2rem 0" }} />
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "0" }}>
              {[
                { label: "Degree", value: "BTech CSE" },
                { label: "University", value: "DIT University" },
                { label: "Location", value: "Dehradun, India" },
                { label: "Email", value: siteConfig.email },
                { label: "GitHub", value: "@surakshit-netizen" },
                { label: "Status", value: "Available" },
              ].map((item, i) => (
                <div key={item.label} style={{ padding: "1rem 0", borderTop: "1px solid var(--border-subtle)", borderRight: i % 2 === 0 ? "1px solid var(--border-subtle)" : "none", paddingRight: i % 2 === 0 ? "1.5rem" : "0", paddingLeft: i % 2 === 1 ? "1.5rem" : "0" }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.3rem" }}>{item.label}</div>
                  <div style={{ fontSize: "0.92rem", color: "var(--text-primary)", fontWeight: 600 }}>{item.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>
    </section>
  );
}
