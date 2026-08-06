# Lakshya — Security Engineer & DevSecOps Portfolio

An Apple iOS & Apple Web inspired portfolio website for **Lakshya**, highlighting 1.5+ years of enterprise experience at Accenture, GCP ACE & 3x Oracle Cloud certifications, AI-powered IDS/IPS projects, and offensive security research (Top 5% TryHackMe rank).

---

## 🌟 Key Features

- **Apple iOS Aesthetic & Design System**:
  - Glassmorphic translucent surfaces (`backdrop-filter: blur(24px)`).
  - Dynamic Island status header displaying real-time security telemetry.
  - Interactive iOS Launchpad App Grid with inspectors for GuardShield, WebCraft Pro, Cert Vault, Accenture Log, and THM Security Labs.
  - Apple Wallet style certification pass cards (GCP ACE & Oracle Cloud).
  - Apple Control Center style contact hub.
  - Custom dark & light theme system with zero flash (FOUC script included).

- **SOC Security Terminal**:
  - Interactive CLI supporting `scan`, `whoami`, `certs`, `projects`, `experience`, `skills`, `contact`, and `clear`.

- **100% Resume-Accurate Content**:
  - Enterprise Software Engineer at Accenture (Pune, IN).
  - SAST/DAST testing & 30+ remediated critical security vulnerabilities.
  - Guard Shield (AI IDS/IPS System in Tauri/Python/Rust) & WebCraft Pro (DevOps Portal).
  - Top 5% Global TryHackMe rank & Flipkart Bug Bounty research.

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14 (App Router)](https://nextjs.org/)
- **Language**: TypeScript
- **Styling**: CSS Modules (`.module.css`) & CSS Custom Properties (`tokens.css`)
- **Icons**: Lucide React
- **Animations**: Framer Motion & CSS Keyframes

---

## 🚀 Getting Started

### 1. Install Dependencies
```bash
npm install
```

### 2. Run Development Server
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build & Typecheck
```bash
npx tsc --noEmit
npm run build
```

---

## 📂 Project Structure

```
portfolio-dev/
├── app/                  # Next.js App Router layout & page
├── components/
│   ├── ui/               # Button, Badge, GlassCard, IOSModal, DynamicIsland
│   └── sections/         # Navbar, Hero, Apps, Projects, Experience, Certs, Skills, Terminal, Contact, Footer
├── content/              # Strictly-typed resume data (resumeData.ts)
├── lib/                  # ThemeProvider & context
├── styles/               # tokens.css (iOS glass system) & globals.css
└── README.md
```