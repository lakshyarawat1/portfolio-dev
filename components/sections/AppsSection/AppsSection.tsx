// components/sections/AppsSection/AppsSection.tsx
'use client';

import React, { useState } from 'react';
import { Shield, Cpu, Terminal, Award, Briefcase, Target, ExternalLink, Code, Layers } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { GlassCard } from '@/components/ui/Card/GlassCard';
import { IOSModal } from '@/components/ui/Modal/IOSModal';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import styles from './AppsSection.module.css';

interface AppsSectionProps {
  onOpenTerminal: () => void;
}

export function AppsSection({ onOpenTerminal }: AppsSectionProps) {
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const apps = [
    {
      id: 'guard-shield',
      title: 'Guard Shield',
      category: 'AI IDS/IPS System',
      icon: <Shield size={28} className={styles.appIconBlue} />,
      badge: 'Tauri • Python • ML',
      bgColor: 'linear-gradient(135deg, #0a84ff 0%, #0040dd 100%)',
    },
    {
      id: 'webcraft-pro',
      title: 'WebCraft Pro',
      category: 'DevOps & Builder',
      icon: <Cpu size={28} className={styles.appIconPurple} />,
      badge: 'Next.js • Node • RBAC',
      bgColor: 'linear-gradient(135deg, #bf5af2 0%, #7000b5 100%)',
    },
    {
      id: 'tryhackme',
      title: 'Red Team Labs',
      category: 'Offensive Security',
      icon: <Target size={28} className={styles.appIconRed} />,
      badge: 'Top 5% Global • 100+ Labs',
      bgColor: 'linear-gradient(135deg, #ff453a 0%, #990000 100%)',
    },
    {
      id: 'certs',
      title: 'Cert Vault',
      category: 'Cloud Credentials',
      icon: <Award size={28} className={styles.appIconEmerald} />,
      badge: 'GCP ACE & 3x Oracle',
      bgColor: 'linear-gradient(135deg, #30d158 0%, #007722 100%)',
    },
    {
      id: 'accenture',
      title: 'Accenture Log',
      category: 'Software Engineering',
      icon: <Briefcase size={28} className={styles.appIconAmber} />,
      badge: '1.5+ Yrs • 30+ Remediations',
      bgColor: 'linear-gradient(135deg, #ffd60a 0%, #b38f00 100%)',
    },
    {
      id: 'terminal',
      title: 'Red Team Shell',
      category: 'Interactive Shell',
      icon: <Terminal size={28} className={styles.appIconCyan} />,
      badge: 'Security CLI',
      bgColor: 'linear-gradient(135deg, #1d1d1f 0%, #3a3a3c 100%)',
      isTerminalTrigger: true,
    },
  ];

  const handleAppClick = (app: typeof apps[0]) => {
    if (app.isTerminalTrigger) {
      onOpenTerminal();
    } else {
      setActiveModal(app.id);
    }
  };

  const guardShieldProject = resumeData.projects.find((p) => p.id === 'guard-shield');
  const webcraftProject = resumeData.projects.find((p) => p.id === 'webcraft-pro');

  return (
    <section id="apps" className={styles.appsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="blue" icon={<Layers size={14} />}>
            iOS Applications
          </Badge>
          <h2 className={styles.title}>Interactive Applications & Workspace</h2>
          <p className={styles.subtitle}>
            Tap any application tile to launch an interactive iOS inspector window.
          </p>
        </div>

        {/* iOS Home Grid */}
        <div className={styles.grid}>
          {apps.map((app) => (
            <GlassCard
              key={app.id}
              hoverEffect
              onClick={() => handleAppClick(app)}
              ariaLabel={`Open ${app.title} application window`}
            >
              <div className={styles.appTileInner}>
                <div className={styles.appIconContainer} style={{ background: app.bgColor }}>
                  {app.icon}
                </div>
                <div className={styles.appInfo}>
                  <h3 className={styles.appTitle}>{app.title}</h3>
                  <span className={styles.appCategory}>{app.category}</span>
                  <div className={styles.appBadge}>{app.badge}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>

      {/* Modal Sheets */}

      {/* Guard Shield Modal */}
      {guardShieldProject && (
        <IOSModal
          isOpen={activeModal === 'guard-shield'}
          onClose={() => setActiveModal(null)}
          title="Guard Shield — AI-Powered IDS/IPS System"
          subtitle="Tauri • Python • ML • Rust"
          icon={<Shield size={22} />}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalHeroBadge}>
              <Badge variant="blue" pulse>
                AI Threat Detection & Prevention System
              </Badge>
            </div>
            <p className={styles.modalText}>
              Cross-platform Intrusion Detection & Prevention System (IDS/IPS) built using a custom-trained AI model to detect network anomalies in real time.
            </p>
            <div className={styles.modalBullets}>
              {guardShieldProject.description.map((bullet, idx) => (
                <div key={idx} className={styles.bulletItem}>
                  <Code size={16} className={styles.bulletIcon} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className={styles.modalFooterActions}>
              <a href={guardShieldProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon={<ExternalLink size={16} />}>
                  View Source Code on GitHub
                </Button>
              </a>
            </div>
          </div>
        </IOSModal>
      )}

      {/* WebCraft Pro Modal */}
      {webcraftProject && (
        <IOSModal
          isOpen={activeModal === 'webcraft-pro'}
          onClose={() => setActiveModal(null)}
          title="WebCraft Pro — Enterprise Workflow & DevOps Portal"
          subtitle="Next.js • Node.js • React • RBAC"
          icon={<Cpu size={22} />}
        >
          <div className={styles.modalContent}>
            <div className={styles.modalHeroBadge}>
              <Badge variant="purple">DevSecOps & Multi-Tenant Portal</Badge>
            </div>
            <p className={styles.modalText}>
              Project management portal with integrated ticket creation, automated workflow assignment, and a no-code website builder with 1-click CI/CD deployment pipelines.
            </p>
            <div className={styles.modalBullets}>
              {webcraftProject.description.map((bullet, idx) => (
                <div key={idx} className={styles.bulletItem}>
                  <Code size={16} className={styles.bulletIcon} />
                  <span>{bullet}</span>
                </div>
              ))}
            </div>
            <div className={styles.modalFooterActions}>
              <a href={webcraftProject.githubUrl} target="_blank" rel="noopener noreferrer">
                <Button variant="primary" icon={<ExternalLink size={16} />}>
                  View Repository on GitHub
                </Button>
              </a>
            </div>
          </div>
        </IOSModal>
      )}

      {/* THM Modal */}
      <IOSModal
        isOpen={activeModal === 'tryhackme'}
        onClose={() => setActiveModal(null)}
        title="Red Teaming & Exploitation Research"
        subtitle="Offensive Security • Web Application Security"
        icon={<Target size={22} />}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalHeroBadge}>
            <Badge variant="amber">Top 5% Global Rank • 100+ Labs Solved</Badge>
          </div>
          <div className={styles.modalBullets}>
            <div className={styles.bulletItem}>
              <Target size={16} className={styles.bulletIcon} />
              <span>
                <strong>TryHackMe Red Team Mastery:</strong> Solved 100+ labs focusing on Linux privilege escalation, network traffic parsing (Wireshark), and web exploitation techniques.
              </span>
            </div>
            <div className={styles.bulletItem}>
              <Shield size={16} className={styles.bulletIcon} />
              <span>
                <strong>Bug Bounty Research:</strong> Conducted web application security testing (OWASP Top 10) on production systems via Flipkart&apos;s Bug Bounty program.
              </span>
            </div>
            <div className={styles.bulletItem}>
              <Code size={16} className={styles.bulletIcon} />
              <span>
                <strong>Offensive Tooling:</strong> Proficient in Burp Suite, Wireshark, Nmap, Metasploit, OWASP Juice Shop, and OverTheWire challenges.
              </span>
            </div>
          </div>
        </div>
      </IOSModal>

      {/* Certs Modal */}
      <IOSModal
        isOpen={activeModal === 'certs'}
        onClose={() => setActiveModal(null)}
        title="Cloud Certifications Vault"
        subtitle="GCP ACE & 3x Oracle Professional Certifications"
        icon={<Award size={22} />}
      >
        <div className={styles.modalContent}>
          <div className={styles.certsList}>
            {resumeData.certifications.map((cert) => (
              <div key={cert.id} className={styles.certItem}>
                <Award size={20} style={{ color: cert.badgeColor }} />
                <div>
                  <div className={styles.certName}>{cert.name}</div>
                  <div className={styles.certMeta}>
                    {cert.issuer} • Valid: {cert.validity}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </IOSModal>

      {/* Accenture Log Modal */}
      <IOSModal
        isOpen={activeModal === 'accenture'}
        onClose={() => setActiveModal(null)}
        title="Accenture — Associate Software Engineer"
        subtitle="Pune, IN • Jan 2024 – Present"
        icon={<Briefcase size={22} />}
      >
        <div className={styles.modalContent}>
          <div className={styles.modalBullets}>
            {resumeData.experience?.[0]?.bullets?.map((bullet, idx) => (
              <div key={idx} className={styles.bulletItem}>
                <Briefcase size={16} className={styles.bulletIcon} />
                <span>{bullet}</span>
              </div>
            ))}
          </div>
        </div>
      </IOSModal>
    </section>
  );
}
