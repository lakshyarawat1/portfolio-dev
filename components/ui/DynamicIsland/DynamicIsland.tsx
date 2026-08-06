// components/ui/DynamicIsland/DynamicIsland.tsx
'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShieldCheck, Terminal, Award, ChevronDown } from 'lucide-react';
import styles from './DynamicIsland.module.css';

interface DynamicIslandProps {
  onOpenTerminal?: () => void;
}

export function DynamicIsland({ onOpenTerminal }: DynamicIslandProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div
      className={styles.islandWrapper}
      onMouseEnter={() => setIsExpanded(true)}
      onMouseLeave={() => setIsExpanded(false)}
      onClick={() => setIsExpanded(!isExpanded)}
      role="button"
      tabIndex={0}
      aria-expanded={isExpanded}
      aria-label="iOS Dynamic Island Telemetry"
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          setIsExpanded(!isExpanded);
        }
      }}
    >
      <motion.div
        layout
        initial={false}
        animate={{
          width: isExpanded ? 360 : 210,
          x: isExpanded ? -75 : 0,
          borderRadius: isExpanded ? 24 : 9999,
          padding: isExpanded ? '1.15rem 1.35rem' : '0.35rem 0.85rem',
        }}
        transition={{
          type: 'spring',
          stiffness: 420,
          damping: 30,
          mass: 0.8,
        }}
        className={`${styles.island} ${isExpanded ? styles.expanded : ''}`}
      >
        <AnimatePresence mode="popLayout" initial={false}>
          {!isExpanded ? (
            <motion.div
              key="compact"
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.92 }}
              transition={{ duration: 0.15 }}
              className={styles.compact}
            >
              <span className={styles.pulseDot} />
              <ShieldCheck size={15} className={styles.iconBlue} />
              <span className={styles.compactText}>Dev & Red Team • Lakshya</span>
              <ChevronDown size={13} className={styles.compactChevron} />
            </motion.div>
          ) : (
            <motion.div
              key="expanded"
              initial={{ opacity: 0, scale: 0.95, y: -4 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -4 }}
              transition={{ duration: 0.2, delay: 0.05 }}
              className={styles.expandedContent}
            >
              <div className={styles.islandHeader}>
                <div className={styles.headerTitle}>
                  <ShieldCheck size={18} className={styles.iconBlue} />
                  <div>
                    <div className={styles.statusTitle}>Software & Red Team Engine</div>
                    <div className={styles.statusSub}>Accenture ASE • DevSecOps</div>
                  </div>
                </div>
                <span className={styles.liveBadge}>LIVE</span>
              </div>

              <div className={styles.statsGrid}>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>99.9%</span>
                  <span className={styles.statLbl}>API Uptime</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>Top 5%</span>
                  <span className={styles.statLbl}>TryHackMe</span>
                </div>
                <div className={styles.statItem}>
                  <span className={styles.statVal}>4x</span>
                  <span className={styles.statLbl}>GCP/OCI Certs</span>
                </div>
              </div>

              <div className={styles.actionsRow}>
                {onOpenTerminal && (
                  <button
                    className={styles.actionBtn}
                    onClick={(e) => {
                      e.stopPropagation();
                      onOpenTerminal();
                    }}
                  >
                    <Terminal size={14} />
                    <span>Exploit & Dev Shell</span>
                  </button>
                )}
                <a
                  href="#certifications"
                  className={styles.actionBtn}
                  onClick={(e) => e.stopPropagation()}
                >
                  <Award size={14} />
                  <span>Verify Certs</span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
