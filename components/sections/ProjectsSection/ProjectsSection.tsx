// components/sections/ProjectsSection/ProjectsSection.tsx
'use client';

import React from 'react';
import { ShieldAlert, Cpu, ExternalLink, Code2, CheckCircle2, FolderGit2 } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { GlassCard } from '@/components/ui/Card/GlassCard';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import styles from './ProjectsSection.module.css';

export function ProjectsSection() {
  const { projects } = resumeData;

  return (
    <section id="projects" className={styles.projectsSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="purple" icon={<FolderGit2 size={14} />}>
            Featured Software & Security Systems
          </Badge>
          <h2 className={styles.title}>Flagship Engineering Projects</h2>
          <p className={styles.subtitle}>
            Architected and built with offensive security, threat detection, and cloud scalability at core.
          </p>
        </div>

        <div className={styles.projectsStack}>
          {projects.map((project, idx) => (
            <GlassCard
              key={project.id}
              hoverEffect
              glowColor={idx === 0 ? 'blue' : 'purple'}
              className={styles.projectCard}
            >
              <div className={styles.projectCardInner}>
                {/* Header info */}
                <div className={styles.cardHeader}>
                  <div className={styles.iconContainer}>
                    {idx === 0 ? (
                      <ShieldAlert size={32} className={styles.iconBlue} />
                    ) : (
                      <Cpu size={32} className={styles.iconPurple} />
                    )}
                  </div>
                  <div>
                    <span className={styles.category}>{project.category}</span>
                    <h3 className={styles.projectTitle}>
                      {project.title} <span className={styles.subtitleText}>— {project.subtitle}</span>
                    </h3>
                  </div>
                </div>

                {/* Metrics Pill */}
                {project.metrics && (
                  <div className={styles.metricsBar}>
                    <CheckCircle2 size={16} className={styles.checkIcon} />
                    <span>{project.metrics}</span>
                  </div>
                )}

                {/* Description Bullets */}
                <div className={styles.descriptionGrid}>
                  {project.description.map((bullet, bIdx) => (
                    <div key={bIdx} className={styles.bulletRow}>
                      <span className={styles.bulletDot} />
                      <p className={styles.bulletText}>{bullet}</p>
                    </div>
                  ))}
                </div>

                {/* Tech Tags & CTA */}
                <div className={styles.cardFooter}>
                  <div className={styles.tagsGroup}>
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="neutral">
                        {tag}
                      </Badge>
                    ))}
                  </div>

                  {project.githubUrl && (
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Button variant="glass" size="sm" icon={<ExternalLink size={14} />}>
                        GitHub Code ↗
                      </Button>
                    </a>
                  )}
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
