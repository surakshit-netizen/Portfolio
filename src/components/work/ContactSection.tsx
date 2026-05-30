"use client";

import { useState } from "react";
import { siteConfig } from "@/config/site";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio Contact from ${form.name}`);
    const body = encodeURIComponent(`Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`);
    window.open(`mailto:${siteConfig.email}?subject=${subject}&body=${body}`, "_blank");
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  const inputStyle: React.CSSProperties = {
    width: "100%", padding: "0.85rem 1rem", borderRadius: "12px",
    background: "rgba(124,58,237,0.04)", border: "1px solid rgba(124,58,237,0.15)",
    color: "var(--text-primary)", fontSize: "0.95rem",
    fontFamily: "'Plus Jakarta Sans', sans-serif", outline: "none", transition: "all 0.25s ease",
  };

  return (
    <section id="contact" style={{ borderTop: "1px solid var(--border-subtle)", background: "linear-gradient(180deg, var(--bg) 0%, var(--surface-1) 50%, var(--bg) 100%)" }}>
      <div className="section">
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }} className="contact-grid">
          {/* Left */}
          <div>
            <p className="section-label">Contact</p>
            <h2 className="section-title font-display" style={{ marginBottom: "1.5rem" }}>Let&apos;s Connect</h2>
            <p style={{ color: "var(--text-secondary)", fontSize: "1.02rem", lineHeight: 1.85, marginBottom: "2.5rem" }}>
              I&apos;m open to full-time roles, freelance projects, and collaboration opportunities. Drop me a line!
            </p>
            <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
              {[
                { label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}`, id: "contact-email",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg> },
                { label: "LinkedIn", value: "surakshit-chauhan", href: siteConfig.linkedin, id: "contact-linkedin",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg> },
                { label: "WhatsApp", value: "+91 90278 31645", href: siteConfig.whatsapp, id: "contact-whatsapp",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg> },
                { label: "GitHub", value: "surakshit-netizen", href: siteConfig.github, id: "contact-github",
                  icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg> },
              ].map((c) => (
                <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" id={c.id} style={{ textDecoration: "none" }}>
                  <div className="glass-card" style={{ display: "flex", alignItems: "center", gap: "1rem", padding: "1rem 1.25rem", cursor: "pointer" }}>
                    <div style={{ width: "36px", height: "36px", borderRadius: "10px", background: "rgba(124,58,237,0.12)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--violet-light)", flexShrink: 0 }}>{c.icon}</div>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.6rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-dim)", marginBottom: "0.15rem" }}>{c.label}</div>
                      <div style={{ fontSize: "0.88rem", color: "var(--text-primary)", fontWeight: 600 }}>{c.value}</div>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit}>
            <div className="glass-card" style={{ padding: "2rem" }}>
              <h3 style={{ fontSize: "1.1rem", fontWeight: 700, color: "var(--text-primary)", marginBottom: "1.5rem" }}>Send a Message</h3>
              {[
                { name: "name", label: "Your Name", type: "text", placeholder: "John Doe", id: "contact-name" },
                { name: "email", label: "Email Address", type: "email", placeholder: "john@example.com", id: "contact-email-input" },
              ].map((field) => (
                <div key={field.name} style={{ marginBottom: "1.25rem" }}>
                  <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-dim)", display: "block", marginBottom: "0.5rem" }}>{field.label}</label>
                  <input id={field.id} type={field.type} name={field.name} value={(form as Record<string, string>)[field.name]} onChange={handleChange} required placeholder={field.placeholder} style={inputStyle}
                    onFocus={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
                    onBlur={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.15)"; e.target.style.boxShadow = "none"; }}
                  />
                </div>
              ))}
              <div style={{ marginBottom: "1.5rem" }}>
                <label style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: "0.62rem", letterSpacing: "0.2em", textTransform: "uppercase", color: "var(--text-dim)", display: "block", marginBottom: "0.5rem" }}>Message</label>
                <textarea id="contact-message" name="message" value={form.message} onChange={handleChange} required rows={5} placeholder="Hi Surakshit, I'd love to discuss..." style={{ ...inputStyle, resize: "vertical" }}
                  onFocus={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.5)"; e.target.style.boxShadow = "0 0 0 3px rgba(124,58,237,0.1)"; }}
                  onBlur={(e) => { e.target.style.borderColor = "rgba(124,58,237,0.15)"; e.target.style.boxShadow = "none"; }}
                />
              </div>
              <button id="contact-submit" type="submit" className="btn-primary" style={{ width: "100%", justifyContent: "center", padding: "0.85rem" }}>
                {sent ? "✓ Message Sent!" : (<>Send Message <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg></>)}
              </button>
            </div>
          </form>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .contact-grid { grid-template-columns: 1fr !important; gap: 2rem !important; } }`}</style>
    </section>
  );
}
