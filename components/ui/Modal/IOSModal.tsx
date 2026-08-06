// components/ui/Modal/IOSModal.tsx
'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import styles from './IOSModal.module.css';

interface IOSModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  subtitle?: string;
  icon?: React.ReactNode;
  children: React.ReactNode;
}

export function IOSModal({
  isOpen,
  onClose,
  title,
  subtitle,
  icon,
  children,
}: IOSModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className={styles.overlay} onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={styles.modal}
        onClick={(e) => e.stopPropagation()}
      >
        {/* iOS Header / Window Title Bar */}
        <div className={styles.header}>
          <div className={styles.windowControls}>
            <button className={`${styles.dot} ${styles.closeDot}`} onClick={onClose} aria-label="Close modal" />
            <span className={`${styles.dot} ${styles.minimizeDot}`} />
            <span className={`${styles.dot} ${styles.expandDot}`} />
          </div>
          <div className={styles.titleGroup}>
            {icon && <span className={styles.headerIcon}>{icon}</span>}
            <div>
              <h3 className={styles.title}>{title}</h3>
              {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
            </div>
          </div>
          <button className={styles.closeBtn} onClick={onClose} aria-label="Close window">
            <X size={18} />
          </button>
        </div>

        {/* Content Body */}
        <div className={styles.body}>{children}</div>
      </div>
    </div>
  );
}
