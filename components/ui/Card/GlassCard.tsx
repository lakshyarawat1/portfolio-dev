// components/ui/Card/GlassCard.tsx
import React from 'react';
import styles from './GlassCard.module.css';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffect?: boolean;
  glowColor?: 'blue' | 'purple' | 'emerald' | 'amber' | 'none';
  onClick?: () => void;
  role?: string;
  tabIndex?: number;
  ariaLabel?: string;
}

export function GlassCard({
  children,
  className = '',
  hoverEffect = true,
  glowColor = 'none',
  onClick,
  role,
  tabIndex,
  ariaLabel,
}: GlassCardProps) {
  return (
    <div
      className={`${styles.card} ${hoverEffect ? styles.hoverable : ''} ${styles[`glow_${glowColor}`]} ${className}`}
      onClick={onClick}
      role={role || (onClick ? 'button' : undefined)}
      tabIndex={tabIndex || (onClick ? 0 : undefined)}
      aria-label={ariaLabel}
      onKeyDown={(e) => {
        if (onClick && (e.key === 'Enter' || e.key === ' ')) {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div className={styles.content}>{children}</div>
    </div>
  );
}
