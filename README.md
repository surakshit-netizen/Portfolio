<p align="center">
  <img src="https://avatars.githubusercontent.com/u/102235747?v=4" width="120" height="120" style="border-radius: 50%;" alt="Surakshit Chauhan" />
</p>

<h1 align="center">Surakshit Chauhan — Portfolio</h1>

<p align="center">
  <strong>Cloud & Full-Stack Developer</strong><br/>
  <em>"Building the bridge between Cloud & Code"</em>
</p>

<p align="center">
  <a href="https://github.com/surakshit-netizen"><img src="https://img.shields.io/badge/GitHub-surakshit--netizen-7c3aed?style=flat-square&logo=github" alt="GitHub" /></a>
  <a href="https://www.linkedin.com/in/surakshit-chauhan"><img src="https://img.shields.io/badge/LinkedIn-surakshit--chauhan-2563eb?style=flat-square&logo=linkedin" alt="LinkedIn" /></a>
  <a href="mailto:surakshitchauhan@gmail.com"><img src="https://img.shields.io/badge/Email-surakshitchauhan%40gmail.com-06b6d4?style=flat-square&logo=gmail" alt="Email" /></a>
</p>

---

## ✨ Overview

A modern, responsive **2-page personal portfolio** built with Next.js 16 and Tailwind CSS, featuring the **"Deep Space"** design theme — a cosmic dark aesthetic with violet/indigo gradients, glassmorphism cards, and smooth micro-animations.

### 🌐 Pages

| Page | Route | Sections |
|------|-------|----------|
| **Home** | `/` | Hero (orbiting tech icons + avatar), About Me, Skills & Tech Stack |
| **Work** | `/work` | Featured Projects, GitHub Repos (live API), Education + Certifications, Contact Form |

---

## 🎨 Design — "Deep Space"

- **Base:** Deep cosmic navy `#090912`
- **Accents:** Violet → Blue gradients (`#7c3aed` → `#2563eb`)
- **Typography:** Plus Jakarta Sans · Fraunces (serif headings) · JetBrains Mono (code)
- **Effects:** Orbiting tech icons, gradient glow ring, typewriter animation, glassmorphism cards, noise texture overlay

---

## 🛠️ Tech Stack

| Category | Technologies |
|----------|-------------|
| **Framework** | Next.js 16 (App Router, Turbopack) |
| **Language** | TypeScript |
| **Styling** | Tailwind CSS 4 + Custom CSS Design System |
| **Fonts** | Google Fonts (Plus Jakarta Sans, Fraunces, JetBrains Mono) |
| **Package Manager** | pnpm |
| **API** | GitHub REST API (live repo fetch) |
| **Deployment** | Ready for Vercel / Netlify |

---

## 📁 Project Structure

```
portfolio/
├── public/
│   └── Surakshit.Resume.pdf        # Downloadable resume
├── src/
│   ├── app/
│   │   ├── globals.css              # Deep Space design system
│   │   ├── layout.tsx               # Root layout (Navbar + Footer)
│   │   ├── page.tsx                 # Page 1 — Home
│   │   └── work/
│   │       └── page.tsx             # Page 2 — Work & Contact
│   ├── components/
│   │   ├── Navbar.tsx               # Shared — frosted glass navbar
│   │   ├── Footer.tsx               # Shared — gradient footer
│   │   ├── home/
│   │   │   ├── HeroSection.tsx      # Avatar with orbiting icons
│   │   │   ├── AboutSection.tsx     # Bio + stats + info grid
│   │   │   └── SkillsSection.tsx    # Categorized skill pills
│   │   └── work/
│   │       ├── ProjectsSection.tsx  # Featured + GitHub API repos
│   │       ├── EducationSection.tsx # Education + Certifications
│   │       └── ContactSection.tsx   # Form + social links
│   └── config/
│       └── site.ts                  # Central data config
├── next.config.ts
├── tailwind.config.ts
├── package.json
└── tsconfig.json
```

---

## 🚀 Getting Started

### Prerequisites

- **Node.js** ≥ 18
- **pnpm** (recommended) or npm

### Installation

```bash
# Clone the repository
git clone https://github.com/surakshit-netizen/Portfolio.git
cd Portfolio

# Install dependencies
pnpm install

# Start development server
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
pnpm build
pnpm start
```

---

## ⚙️ Configuration

All personal data is centralized in [`src/config/site.ts`](src/config/site.ts). Edit this single file to customize:

- Name, title, description
- Social links (GitHub, LinkedIn, WhatsApp, Email)
- About me bio
- Skills (categorized)
- Education & certifications
- Featured projects
- Resume file path

---

## 📋 Features

- ✅ **Multi-page routing** — Next.js App Router with `/` and `/work`
- ✅ **Live GitHub repos** — Fetches latest repositories via GitHub API
- ✅ **Responsive** — Mobile-friendly layouts with CSS grid
- ✅ **SEO optimized** — Meta tags, Open Graph, semantic HTML
- ✅ **Animations** — Typewriter effect, orbiting icons, floating elements, hover micro-interactions
- ✅ **Contact form** — mailto-powered, opens default email client
- ✅ **Resume download** — PDF served from `/public`
- ✅ **Glassmorphism** — Frosted glass cards with blur backdrop
- ✅ **Dark theme** — Full dark mode with noise texture overlay

---

## 🚢 Deployment

### Vercel (Recommended)

1. Push to GitHub
2. Import project at [vercel.com/new](https://vercel.com/new)
3. Vercel auto-detects Next.js — click **Deploy**
4. (Optional) Add custom domain

### Netlify

```bash
pnpm build
# Deploy the `.next` output or use Netlify's Next.js plugin
```

---

## 📬 Contact

- **Email:** [surakshitchauhan@gmail.com](mailto:surakshitchauhan@gmail.com)
- **LinkedIn:** [surakshit-chauhan](https://www.linkedin.com/in/surakshit-chauhan)
- **GitHub:** [surakshit-netizen](https://github.com/surakshit-netizen)
- **WhatsApp:** [+91 90278 31645](https://wa.me/919027831645)

---

<p align="center">
  Crafted with ❤️ using <strong>Next.js</strong> & <strong>Tailwind CSS</strong>
</p>
