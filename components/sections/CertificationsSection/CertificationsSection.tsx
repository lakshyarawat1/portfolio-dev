// components/sections/CertificationsSection/CertificationsSection.tsx
'use client';

import React from 'react';
import { Award, ShieldCheck, CheckCircle2, Cloud } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { GlassCard } from '@/components/ui/Card/GlassCard';
import { Badge } from '@/components/ui/Badge/Badge';
import styles from './CertificationsSection.module.css';

export function CertificationsSection() {
  const { certifications } = resumeData;

  return (
    <section id="certifications" className={styles.certsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="emerald" icon={<Award size={14} />}>
            Verified Credentials
          </Badge>
          <h2 className={styles.title}>Cloud & Industry Certifications</h2>
          <p className={styles.subtitle}>
            Certified expertise in cloud infrastructure, developer operations, data science, and enterprise applications.
          </p>
        </div>

        {/* Apple Wallet Style Grid */}
        <div className={styles.walletGrid}>
          {certifications.map((cert) => (
            <GlassCard key={cert.id} hoverEffect glowColor="emerald" className={styles.certCard}>
              <div className={styles.certCardInner}>
                <div className={styles.cardTop}>
                  <div className={styles.issuerBadge} style={{ borderColor: cert.badgeColor }}>
                    <Cloud size={20} style={{ color: cert.badgeColor }} />
                    <span>{cert.issuer}</span>
                  </div>
                  {cert.verified && (
                    <Badge variant="emerald" icon={<CheckCircle2 size={12} />}>
                      Verified
                    </Badge>
                  )}
                </div>

                <div className={styles.certBody}>
                  <h3 className={styles.certTitle}>{cert.name}</h3>
                  <div className={styles.validityRow}>
                    <ShieldCheck size={14} className={styles.validIcon} />
                    <span>Valid: {cert.validity}</span>
                  </div>
                </div>

                <div className={styles.cardFooter}>
                  <span className={styles.footerBrand}>Lakshya • Security Engineer</span>
                  <span className={styles.passTag}>WALLET PASS</span>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
