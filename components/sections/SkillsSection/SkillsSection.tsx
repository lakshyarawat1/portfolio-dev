// components/sections/SkillsSection/SkillsSection.tsx
'use client';

import React, { useState } from 'react';
import { Terminal, Shield, Cloud, Code, Cpu, Award } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { GlassCard } from '@/components/ui/Card/GlassCard';
import { Badge } from '@/components/ui/Badge/Badge';
import styles from './SkillsSection.module.css';

export function SkillsSection() {
  const { skills, softSkills, education } = resumeData;
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', ...skills.map((s) => s.category)];

  const filteredSkills =
    activeCategory === 'All'
      ? skills
      : skills.filter((s) => s.category === activeCategory);

  const getCategoryIcon = (catName: string) => {
    switch (catName) {
      case 'Languages':
        return <Code size={18} className={styles.iconBlue} />;
      case 'Frameworks & Runtimes':
        return <Cpu size={18} className={styles.iconPurple} />;
      case 'Cloud & DevOps':
        return <Cloud size={18} className={styles.iconEmerald} />;
      case 'Offensive & Defensive Security':
        return <Shield size={18} className={styles.iconAmber} />;
      default:
        return <Terminal size={18} className={styles.iconCyan} />;
    }
  };

  return (
    <section id="skills" className={styles.skillsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="blue" icon={<Terminal size={14} />}>
            Technical Competencies
          </Badge>
          <h2 className={styles.title}>Skills, Tooling & Education</h2>
          <p className={styles.subtitle}>
            A rare combination of full-stack engineering, cloud infrastructure, and offensive security capabilities.
          </p>
        </div>

        {/* Category Pills */}
        <div className={styles.categoryFilter}>
          {categories.map((cat) => (
            <button
              key={cat}
              className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className={styles.skillsGrid}>
          {filteredSkills.map((group) => (
            <GlassCard key={group.category} hoverEffect glowColor="blue" className={styles.skillCard}>
              <div className={styles.skillCardInner}>
                <div className={styles.groupHeader}>
                  {getCategoryIcon(group.category)}
                  <h3 className={styles.groupTitle}>{group.category}</h3>
                </div>

                <div className={styles.chipsContainer}>
                  {group.items.map((skill) => (
                    <div key={skill} className={styles.skillChip}>
                      <span className={styles.chipDot} />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>

        {/* Education & Soft Skills Twin Dock */}
        <div className={styles.twinDock}>
          {/* Education */}
          <GlassCard hoverEffect glowColor="purple">
            <div className={styles.dockInner}>
              <div className={styles.dockTitleGroup}>
                <Award size={22} className={styles.iconPurple} />
                <h3 className={styles.dockTitle}>Education</h3>
              </div>
              <div className={styles.eduList}>
                {education.map((edu, idx) => (
                  <div key={idx} className={styles.eduItem}>
                    <div className={styles.eduDegree}>{edu.degree}</div>
                    <div className={styles.eduSchool}>
                      {edu.institution}, {edu.location} • <span className={styles.eduPeriod}>{edu.period}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>

          {/* Soft Skills */}
          <GlassCard hoverEffect glowColor="emerald">
            <div className={styles.dockInner}>
              <div className={styles.dockTitleGroup}>
                <Shield size={22} className={styles.iconEmerald} />
                <h3 className={styles.dockTitle}>Soft Skills & Leadership</h3>
              </div>
              <div className={styles.softList}>
                {softSkills.map((soft, idx) => (
                  <div key={idx} className={styles.softItem}>
                    <div className={styles.softTitle}>{soft.title}</div>
                    <div className={styles.softDesc}>{soft.description}</div>
                  </div>
                ))}
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}
