// components/sections/ExperienceSection/ExperienceSection.tsx
'use client';

import React from 'react';
import { Briefcase, Building2, MapPin, Calendar, ShieldCheck, CheckCircle, TrendingUp, Users } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { GlassCard } from '@/components/ui/Card/GlassCard';
import { Badge } from '@/components/ui/Badge/Badge';
import styles from './ExperienceSection.module.css';

export function ExperienceSection() {
  const { experience } = resumeData;
  const exp = experience?.[0];

  if (!exp) return null;

  const impactMetrics = [
    { value: '30+', label: 'Critical Vulnerabilities Remediated', desc: 'SAST/DAST on 10,000+ lines of code' },
    { value: '100k+', label: 'Active Users Served', desc: 'Across 15+ Agile Sprints' },
    { value: '35%', label: 'Defect Leakage Reduction', desc: 'Across 5 concurrent client projects' },
    { value: '99.9%', label: 'API Uptime Maintained', desc: '50k+ daily financial transactions' },
  ];

  return (
    <section id="experience" className={styles.experienceSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="amber" icon={<Briefcase size={14} />}>
            Enterprise Work Experience
          </Badge>
          <h2 className={styles.title}>Professional Software & AppSec Career</h2>
          <p className={styles.subtitle}>
            Proven enterprise delivery at Accenture across full-stack development, application security, and cloud integrations.
          </p>
        </div>

        <GlassCard hoverEffect glowColor="amber" className={styles.expCard}>
          <div className={styles.expCardInner}>
            {/* Header info */}
            <div className={styles.companyHeader}>
              <div className={styles.companyIconBox}>
                <Building2 size={28} className={styles.accentureIcon} />
              </div>
              <div className={styles.companyInfo}>
                <div className={styles.roleTitleGroup}>
                  <h3 className={styles.roleTitle}>{exp.role}</h3>
                  <Badge variant="emerald" pulse>
                    Present
                  </Badge>
                </div>
                <div className={styles.companyMeta}>
                  <span className={styles.companyName}>{exp.company}</span>
                  <span className={styles.dotDivider}>•</span>
                  <span className={styles.location}>
                    <MapPin size={13} /> {exp.location}
                  </span>
                  <span className={styles.dotDivider}>•</span>
                  <span className={styles.period}>
                    <Calendar size={13} /> {exp.period}
                  </span>
                </div>
              </div>
            </div>

            {/* Metric Counters Dock */}
            <div className={styles.metricsDock}>
              {impactMetrics.map((item, idx) => (
                <div key={idx} className={styles.metricTile}>
                  <div className={styles.metricVal}>{item.value}</div>
                  <div className={styles.metricLbl}>{item.label}</div>
                  <div className={styles.metricSub}>{item.desc}</div>
                </div>
              ))}
            </div>

            {/* Bullets List */}
            <div className={styles.bulletsList}>
              {exp.bullets.map((bullet, idx) => (
                <div key={idx} className={styles.bulletItem}>
                  <div className={styles.bulletIconWrapper}>
                    {idx === 0 && <TrendingUp size={16} />}
                    {idx === 1 && <ShieldCheck size={16} />}
                    {idx === 2 && <CheckCircle size={16} />}
                    {idx === 3 && <Building2 size={16} />}
                    {idx === 4 && <Users size={16} />}
                  </div>
                  <p className={styles.bulletText}>{bullet}</p>
                </div>
              ))}
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}
