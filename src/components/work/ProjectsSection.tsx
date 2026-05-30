"use client";

import { useState, useEffect } from "react";
import { siteConfig } from "@/config/site";

interface Repo { id: number; name: string; html_url: string; description: string | null; language: string | null; stargazers_count: number; forks_count: number; }

const langColor: Record<string, string> = { TypeScript: "#3178c6", JavaScript: "#f7df1e", Python: "#3572A5", Java: "#b07219", CSS: "#563d7c", HTML: "#e34c26" };

export default function ProjectsSection() {
  const [repos, setRepos] = useState<Repo[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.github.com/users/surakshit-netizen/repos?sort=updated&per_page=10")
      .then((r) => r.json())
      .then((data: Repo[]) => { setRepos(data.filter((r) => !r.name.startsWith("."))); setLoading(false); })
      .catch(() => setLoading(false));
  }, []);

  const pinnedNames = siteConfig.pinnedProjects.map((p) => p.repo);
  const others = repos.filter((r) => !pinnedNames.includes(r.name));

  return (
    <section id="projects">
      <div className="section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "3rem", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <p className="section-label">Projects</p>
            <h2 className="section-title font-display">Featured Work</h2>
          </div>
          <a href={siteConfig.github} target="_blank" rel="noopener noreferrer" id="projects-github"
            style={{ display: "flex", alignItems: "center", gap: "0.5rem", fontFamily: "'JetBrains Mono', monospace", fontSize: "0.72rem", letterSpacing: "0.1em", color: "var(--text-muted)", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--violet-light)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-muted)"; }}
          >
            View all on GitHub <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
          </a>
        </div>

        {/* Featured */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: "1.5rem", marginBottom: "4rem" }}>
          {siteConfig.pinnedProjects.map((project) => (
            <a key={project.repo} href={project.url} target="_blank" rel="noopener noreferrer" id={`project-featured-${project.repo}`} style={{ textDecoration: "none" }}>
              <div className="glass-card" style={{ padding: "2rem", height: "100%", position: "relative", overflow: "hidden", cursor: "pointer" }}>
                <div style={{ position: "absolute", top: 0, right: 0, width: "140px", height: "140px", background: "radial-gradient(circle at top right, rgba(124,58,237,0.12), transparent 70%)", pointerEvents: "none" }} />
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "1.25rem" }}>
                  <div style={{ width: "48px", height: "48px", borderRadius: "12px", background: "var(--gradient-primary)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.3rem" }}>
                    {project.tags.includes("AI") ? "🤖" : "🏗️"}
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--violet-light)" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </div>
                <h3 style={{ fontSize: "1.2rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "0.6rem" }}>{project.name}</h3>
                <p style={{ fontSize: "0.9rem", color: "var(--text-secondary)", lineHeight: 1.7, marginBottom: "1.25rem" }}>{project.description}</p>
                <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap" }}>
                  {project.tags.map((tag) => (<span key={tag} className="tag">{tag}</span>))}
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Others */}
        <div>
          <p style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.7rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "1.5rem" }}>Other Repositories</p>
          {loading ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {[1,2,3].map((i) => (<div key={i} className="glass-card" style={{ height: "130px", padding: "1.5rem" }}><div style={{ height: "0.75rem", width: "60%", background: "rgba(124,58,237,0.1)", borderRadius: "4px", marginBottom: "0.75rem" }} /><div style={{ height: "0.6rem", width: "80%", background: "rgba(124,58,237,0.06)", borderRadius: "3px" }} /></div>))}
            </div>
          ) : (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "1rem" }}>
              {others.map((repo) => (
                <a key={repo.id} href={repo.html_url} target="_blank" rel="noopener noreferrer" id={`project-repo-${repo.name}`} style={{ textDecoration: "none" }}>
                  <div className="glass-card" style={{ padding: "1.5rem", height: "100%", cursor: "pointer" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: "0.6rem" }}>
                      <h4 style={{ fontSize: "0.95rem", fontWeight: 600, color: "var(--text-primary)", wordBreak: "break-word" }}>{repo.name.replace(/-/g, " ")}</h4>
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--text-dim)" strokeWidth="2" style={{ minWidth: "12px" }}><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>
                    </div>
                    <p style={{ fontSize: "0.8rem", color: "var(--text-muted)", lineHeight: 1.6, marginBottom: "1rem" }}>{repo.description ?? "No description."}</p>
                    <div style={{ display: "flex", gap: "1rem", fontSize: "0.72rem", color: "var(--text-dim)", fontFamily: "'JetBrains Mono', monospace" }}>
                      {repo.language && <span style={{ display: "flex", alignItems: "center", gap: "0.35rem" }}><span style={{ width: "8px", height: "8px", borderRadius: "50%", background: langColor[repo.language] ?? "var(--text-dim)" }} />{repo.language}</span>}
                      <span>★ {repo.stargazers_count}</span>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
