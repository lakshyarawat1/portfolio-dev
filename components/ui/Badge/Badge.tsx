// components/ui/Badge/Badge.tsx
import React from 'react';
import styles from './Badge.module.css';

interface BadgeProps {
  children: React.ReactNode;
  variant?: 'blue' | 'purple' | 'emerald' | 'amber' | 'cyan' | 'neutral' | 'glass';
  icon?: React.ReactNode;
  pulse?: boolean;
  className?: string;
}

export function Badge({
  children,
  variant = 'blue',
  icon,
  pulse = false,
  className = '',
}: BadgeProps) {
  return (
    <span className={`${styles.badge} ${styles[variant]} ${className}`}>
      {pulse && <span className={`${styles.pulse} ${styles[`pulse_${variant}`]}`} />}
      {icon && <span className={styles.icon}>{icon}</span>}
      <span className={styles.text}>{children}</span>
    </span>
  );
}
