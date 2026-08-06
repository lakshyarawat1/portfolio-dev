// components/sections/Footer/IOSFooter.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Shield, Heart } from 'lucide-react';
import styles from './IOSFooter.module.css';

export function IOSFooter() {
  const [year, setYear] = useState<number>(2026);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerContainer}`}>
        <div className={styles.topRow}>
          <div className={styles.brandGroup}>
            <Shield className={styles.brandIcon} size={20} />
            <span className={styles.brandTitle}>LAKSHYA</span>
            <span className={styles.brandSub}>Software Engineer • Red Teamer • DevSecOps</span>
          </div>

          <div className={styles.footerNav}>
            <a href="#overview">Overview</a>
            <a href="#apps">Apps</a>
            <a href="#projects">Projects</a>
            <a href="#experience">Experience</a>
            <a href="#certifications">Certifications</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.bottomRow}>
          <p className={styles.copyright}>
            © {year} Lakshya. All rights reserved. Built with Apple iOS Design Principles.
          </p>

          <div className={styles.builtWith}>
            <span>Crafted with</span>
            <Heart size={14} className={styles.heartIcon} />
            <span>using Next.js & TypeScript</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
