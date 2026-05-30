"use client";

import { siteConfig } from "@/config/site";

export default function EducationSection() {
  return (
    <section id="education" style={{ borderTop: "1px solid var(--border-subtle)", background: "linear-gradient(180deg, var(--bg) 0%, var(--surface-1) 50%, var(--bg) 100%)" }}>
      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "3rem" }} className="edu-cert-grid">
          {/* Education */}
          <div>
            <p className="section-label">Education</p>
            <h2 className="section-title font-display" style={{ marginBottom: "2rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Academic</h2>
            {siteConfig.education.map((edu, idx) => (
              <div key={idx} className="glass-card" style={{ padding: "2rem" }}>
                <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1.25rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>🎓</div>
                  <div>
                    <h3 style={{ fontSize: "1.05rem", fontWeight: 700, color: "var(--text-primary)" }}>{edu.degree}</h3>
                    <p style={{ fontSize: "0.85rem", color: "var(--text-secondary)" }}>{edu.institution}</p>
                  </div>
                </div>
                <div style={{ display: "flex", gap: "0.75rem", flexWrap: "wrap" }}>
                  {[{ label: "Duration", value: edu.duration }, { label: "CGPA", value: edu.cgpa }, { label: "Location", value: "Dehradun, India" }].map((item) => (
                    <div key={item.label} style={{ padding: "0.4rem 0.85rem", borderRadius: "8px", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", color: "var(--violet-light)", letterSpacing: "0.05em" }}>
                      <span style={{ color: "var(--text-dim)" }}>{item.label}: </span>{item.value}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Certifications */}
          <div>
            <p className="section-label">Credentials</p>
            <h2 className="section-title font-display" style={{ marginBottom: "2rem", fontSize: "clamp(1.5rem, 3vw, 2.25rem)" }}>Certifications</h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              {siteConfig.certifications.map((cert, idx) => (
                <div key={idx} className="glass-card" style={{ padding: "1.75rem", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: 0, right: 0, width: "100px", height: "100px", background: "radial-gradient(circle at top right, rgba(124,58,237,0.08), transparent)", pointerEvents: "none" }} />
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", color: "var(--text-dim)", marginBottom: "0.75rem" }}>0{idx + 1} / CERT</div>
                  <h3 style={{ fontSize: "1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.3rem", lineHeight: 1.3 }}>{cert.title}</h3>
                  <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.68rem", color: "var(--violet-light)", marginBottom: "0.75rem", letterSpacing: "0.05em" }}>{cert.issuer}</p>
                  <p style={{ fontSize: "0.85rem", color: "var(--text-muted)", lineHeight: 1.7 }}>{cert.description}</p>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: "0.4rem", marginTop: "1rem", padding: "0.25rem 0.6rem", borderRadius: "6px", background: "rgba(16,185,129,0.08)", border: "1px solid rgba(16,185,129,0.25)", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.1em", color: "#10b981" }}>
                    <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                    Verified
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .edu-cert-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>
    </section>
  );
}
