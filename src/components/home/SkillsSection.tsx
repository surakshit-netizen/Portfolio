"use client";

import { siteConfig } from "@/config/site";

const skillIcons: Record<string, string> = {
  Python: "🐍", React: "⚛️", "Next.js": "▲", "Node.js": "🟩",
  HTML: "🌐", CSS: "🎨", TypeScript: "🔷",
  AWS: "☁️", Terraform: "🏗️", Docker: "🐳", Kubernetes: "☸️",
  Ansible: "⚙️", Jenkins: "🔧", "CI/CD": "🔄",
  Linux: "🐧", VMware: "💻", GNS3: "🌐", "VS Code": "💙",
  "Git / GitHub": "🐙",
};

export default function SkillsSection() {
  return (
    <section id="skills" style={{ borderTop: "1px solid var(--border-subtle)" }}>
      <div className="section">
        <p className="section-label">Tech Stack</p>
        <h2 className="section-title font-display" style={{ marginBottom: "3rem" }}>Skills & Tools</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
          {Object.entries(siteConfig.skills).map(([category, skills]) => (
            <div key={category} className="glass-card" style={{ padding: "2rem", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", top: 0, right: 0, width: "150px", height: "150px", background: "radial-gradient(circle at top right, rgba(124,58,237,0.08), transparent 70%)", pointerEvents: "none" }} />
              <h3 style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--violet-light)", marginBottom: "1.25rem" }}>{category}</h3>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
                {skills.map((skill) => (
                  <div key={skill} id={`skill-${skill.toLowerCase().replace(/[^a-z0-9]/g, "-")}`}
                    style={{ display: "flex", alignItems: "center", gap: "0.5rem", padding: "0.5rem 1rem", borderRadius: "10px", background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)", transition: "all 0.25s ease", cursor: "default" }}
                    onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "rgba(124,58,237,0.15)"; el.style.borderColor = "var(--violet)"; el.style.transform = "translateY(-2px)"; el.style.boxShadow = "0 4px 16px rgba(124,58,237,0.2)"; }}
                    onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "rgba(124,58,237,0.06)"; el.style.borderColor = "rgba(124,58,237,0.15)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
                  >
                    <span style={{ fontSize: "0.95rem" }}>{skillIcons[skill] ?? "🔹"}</span>
                    <span style={{ fontSize: "0.875rem", fontWeight: 600, color: "var(--text-primary)" }}>{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
