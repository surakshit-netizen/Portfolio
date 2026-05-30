"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { siteConfig } from "@/config/site";

const orbitItems = [
  { label: "React", emoji: "⚛️" },
  { label: "AWS", emoji: "☁️" },
  { label: "Python", emoji: "🐍" },
  { label: "Docker", emoji: "🐳" },
  { label: "Terraform", emoji: "🏗️" },
  { label: "Node", emoji: "🟩" },
];

export default function HeroSection() {
  const [typed, setTyped] = useState("");
  const fullText = siteConfig.tagline;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < fullText.length) { setTyped(fullText.slice(0, i + 1)); i++; }
      else clearInterval(interval);
    }, 50);
    return () => clearInterval(interval);
  }, [fullText]);

  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", position: "relative", overflow: "hidden", padding: "7rem 2rem 4rem" }}>
      {/* Background orbs */}
      <div style={{ position: "absolute", top: "15%", left: "10%", width: "500px", height: "500px", borderRadius: "50%", background: "radial-gradient(circle, rgba(124,58,237,0.15), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />
      <div style={{ position: "absolute", bottom: "10%", right: "5%", width: "400px", height: "400px", borderRadius: "50%", background: "radial-gradient(circle, rgba(37,99,235,0.12), transparent 70%)", filter: "blur(60px)", pointerEvents: "none" }} />

      {/* Grid lines */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(rgba(124,58,237,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.03) 1px, transparent 1px)", backgroundSize: "60px 60px", pointerEvents: "none" }} />

      <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center", zIndex: 1, position: "relative" }}>
        {/* Avatar with orbit */}
        <div className="animate-fade-up" style={{ position: "relative", width: "180px", height: "180px", margin: "0 auto 2.5rem" }}>
          <div style={{ position: "absolute", inset: "-20px", borderRadius: "50%", border: "1px solid rgba(124,58,237,0.2)", animation: "rotate 20s linear infinite" }}>
            {orbitItems.map((item, i) => (
              <div key={item.label} style={{ position: "absolute", top: "50%", left: "50%", transform: `rotate(${i * 60}deg) translateX(110px) rotate(-${i * 60}deg)`, width: "32px", height: "32px", borderRadius: "8px", background: "rgba(15,15,30,0.9)", border: "1px solid rgba(124,58,237,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "0.85rem", backdropFilter: "blur(8px)" }} title={item.label}>{item.emoji}</div>
            ))}
          </div>
          <div style={{ position: "absolute", inset: "-4px", borderRadius: "50%", background: "linear-gradient(135deg, #7c3aed, #2563eb, #06b6d4)", padding: "3px", animation: "glow-pulse 3s ease-in-out infinite" }}>
            <div style={{ width: "100%", height: "100%", borderRadius: "50%", background: "var(--bg)" }} />
          </div>
          <div style={{ position: "absolute", inset: "4px", borderRadius: "50%", overflow: "hidden" }}>
            <Image src={siteConfig.avatarUrl} alt={siteConfig.name} width={180} height={180} priority style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          </div>
        </div>

        {/* Status */}
        <div className="animate-fade-up delay-100" style={{ marginBottom: "1.5rem" }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: "0.5rem", padding: "0.35rem 1rem", borderRadius: "999px", background: "rgba(16,185,129,0.1)", border: "1px solid rgba(16,185,129,0.3)", fontSize: "0.78rem", color: "#10b981", fontWeight: 600 }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "50%", background: "#10b981", animation: "glow-pulse 1.5s ease-in-out infinite" }} />
            Open to opportunities
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-200" style={{ fontSize: "clamp(2.5rem, 8vw, 5.5rem)", fontWeight: 800, lineHeight: 1.05, marginBottom: "1rem", letterSpacing: "-0.03em" }}>
          <span style={{ color: "var(--text-primary)" }}>Surakshit</span><br />
          <span className="gradient-text">Chauhan</span>
        </h1>

        <p className="animate-fade-up delay-300" style={{ fontSize: "clamp(1rem, 2.5vw, 1.2rem)", color: "var(--text-secondary)", marginBottom: "0.75rem", fontWeight: 400 }}>{siteConfig.heroSubtitle}</p>

        {/* Typewriter */}
        <p className="animate-fade-up delay-400" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "clamp(0.9rem, 2vw, 1.1rem)", color: "var(--violet-light)", marginBottom: "2.5rem", minHeight: "1.5em" }}>
          &ldquo;{typed}<span style={{ marginLeft: "2px", color: "var(--violet)", animation: "glow-pulse 1s step-end infinite" }}>|</span>&rdquo;
        </p>

        {/* CTAs */}
        <div className="animate-fade-up delay-500" style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap", marginBottom: "3rem" }}>
          <a href="/work" className="btn-primary" id="hero-view-work">View My Work <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg></a>
          <a href="/work#contact" className="btn-secondary" id="hero-contact">Get in Touch</a>
          <a href={siteConfig.resumeFile} download className="btn-secondary" id="hero-resume"><svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>Download CV</a>
        </div>

        {/* Social */}
        <div className="animate-fade-up delay-600" style={{ display: "flex", gap: "0.75rem", justifyContent: "center" }}>
          {[
            { href: siteConfig.github, label: "GitHub", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
            { href: siteConfig.linkedin, label: "LinkedIn", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
            { href: siteConfig.whatsapp, label: "WhatsApp", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
            { href: `mailto:${siteConfig.email}`, label: "Email", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
          ].map((s) => (
            <a key={s.label} href={s.href} target={s.href.startsWith("mailto") ? undefined : "_blank"} rel="noopener noreferrer" id={`hero-${s.label.toLowerCase()}`} aria-label={s.label}
              style={{ width: "44px", height: "44px", borderRadius: "12px", display: "flex", alignItems: "center", justifyContent: "center", background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)", color: "var(--text-secondary)", textDecoration: "none", transition: "all 0.3s ease" }}
              onMouseEnter={(e) => { const el = e.currentTarget; el.style.background = "rgba(124,58,237,0.2)"; el.style.borderColor = "var(--violet)"; el.style.color = "var(--violet-light)"; el.style.transform = "translateY(-3px)"; el.style.boxShadow = "0 6px 20px rgba(124,58,237,0.3)"; }}
              onMouseLeave={(e) => { const el = e.currentTarget; el.style.background = "rgba(124,58,237,0.08)"; el.style.borderColor = "rgba(124,58,237,0.2)"; el.style.color = "var(--text-secondary)"; el.style.transform = "translateY(0)"; el.style.boxShadow = "none"; }}
            >{s.icon}</a>
          ))}
        </div>
      </div>

      {/* Scroll */}
      <div className="animate-float" style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", color: "var(--text-dim)", fontSize: "0.7rem", fontFamily: "'JetBrains Mono', monospace", letterSpacing: "0.15em" }}>
        scroll
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
      </div>
    </section>
  );
}
