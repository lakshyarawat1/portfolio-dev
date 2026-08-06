// components/sections/HeroSection/HeroSection.tsx
'use client';

import React from 'react';
import { ShieldCheck, Terminal, Award, ChevronRight, Lock, Activity, Sparkles } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { Button } from '@/components/ui/Button/Button';
import { Badge } from '@/components/ui/Badge/Badge';
import { GlassCard } from '@/components/ui/Card/GlassCard';
import styles from './HeroSection.module.css';

interface HeroSectionProps {
  onOpenTerminal: () => void;
}

export function HeroSection({ onOpenTerminal }: HeroSectionProps) {
  const { personal, stats } = resumeData;

  return (
    <section id="overview" className={styles.heroSection}>
      <div className="container">
        {/* Top Status Pill */}
        <div className={styles.topBadgeWrapper}>
          <Badge variant="emerald" pulse icon={<ShieldCheck size={14} />}>
            Software Engineer • Red Teamer & DevSecOps
          </Badge>
          <Badge variant="purple" icon={<Award size={14} />}>
            Top 5% TryHackMe Red Team
          </Badge>
        </div>

        {/* Main Headline */}
        <h1 className={styles.headline}>
          Engineering Scalable Systems. <br />
          <span className={styles.gradientText}>Defending Cloud & Code.</span>
        </h1>

        {/* Subtitle */}
        <p className={styles.subtitle}>{personal.summary}</p>

        {/* Action Buttons */}
        <div className={styles.ctaGroup}>
          <Button
            variant="primary"
            size="md"
            onClick={onOpenTerminal}
            icon={<Terminal size={16} />}
          >
            Launch Exploit & Dev Shell
          </Button>

          <a href="#projects">
            <Button
              variant="glass"
              size="md"
              icon={<ChevronRight size={16} />}
              iconPosition="right"
            >
              Explore Projects
            </Button>
          </a>

          <a href="#contact">
            <Button variant="secondary" size="md">
              Get in Touch
            </Button>
          </a>
        </div>

        {/* iOS Widget Stats Grid */}
        <div className={styles.statsContainer}>
          <div className={styles.statsGrid}>
            {stats.map((stat, idx) => (
              <GlassCard key={idx} hoverEffect glowColor={idx % 2 === 0 ? 'blue' : 'purple'}>
                <div className={styles.statCardInner}>
                  <div className={styles.statHeader}>
                    {idx === 0 && <Activity size={18} className={styles.statIconBlue} />}
                    {idx === 1 && <Sparkles size={18} className={styles.statIconPurple} />}
                    {idx === 2 && <Award size={18} className={styles.statIconEmerald} />}
                    {idx === 3 && <Lock size={18} className={styles.statIconAmber} />}
                    {idx === 4 && <ShieldCheck size={18} className={styles.statIconCyan} />}
                    <span className={styles.statBadge}>Verified</span>
                  </div>
                  <div className={styles.statValue}>{stat.value}</div>
                  <div className={styles.statLabel}>{stat.label}</div>
                  <p className={styles.statDesc}>{stat.description}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
