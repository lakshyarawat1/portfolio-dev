// components/sections/Navbar/IOSNavbar.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { Sun, Moon, Terminal, Shield, Menu, X } from 'lucide-react';
import { useTheme } from '@/lib/ThemeProvider';
import { DynamicIsland } from '@/components/ui/DynamicIsland/DynamicIsland';
import styles from './IOSNavbar.module.css';

interface IOSNavbarProps {
  onOpenTerminal: () => void;
}

export function IOSNavbar({ onOpenTerminal }: IOSNavbarProps) {
  const { theme, toggleTheme } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const leftNavLinks = [
    { label: 'Overview', href: '#overview' },
    { label: 'Apps', href: '#apps' },
    { label: 'Projects', href: '#projects' },
  ];

  const rightNavLinks = [
    { label: 'Experience', href: '#experience' },
    { label: 'Certifications', href: '#certifications' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={`container ${styles.navContainer}`}>
        {/* Left Side: Logo + Overview, Apps, Projects */}
        <div className={styles.leftGroup}>
          <a href="#overview" className={styles.logo}>
            <Shield className={styles.logoIcon} size={22} />
            <span className={styles.logoText}>LAKSHYA</span>
            <span className={styles.logoTag}>DEV / RED</span>
          </a>

          <nav className={styles.leftNav} aria-label="Left Navigation">
            {leftNavLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* Dynamic Island Centered Dead-Center of Page Width */}
        <div className={styles.islandContainer}>
          <DynamicIsland onOpenTerminal={onOpenTerminal} />
        </div>

        {/* Right Side: Experience, Certifications, Skills, Contact + Buttons */}
        <div className={styles.rightGroup}>
          <nav className={styles.rightNav} aria-label="Right Navigation">
            {rightNavLinks.map((link) => (
              <a key={link.label} href={link.href} className={styles.navLink}>
                {link.label}
              </a>
            ))}
          </nav>

          <button
            className={styles.iconBtn}
            onClick={onOpenTerminal}
            title="Launch Exploit & Dev Terminal"
            aria-label="Launch Exploit & Dev Terminal"
          >
            <Terminal size={18} />
          </button>

          <button
            className={styles.iconBtn}
            onClick={toggleTheme}
            title={`Switch to ${theme === 'dark' ? 'Light' : 'Dark'} Mode`}
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Mobile Menu Toggle */}
          <button
            className={styles.mobileMenuBtn}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className={styles.mobileDrawer}>
          <nav className={styles.mobileNav}>
            {allNavLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={styles.mobileNavLink}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <button
              className={styles.mobileTerminalBtn}
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTerminal();
              }}
            >
              <Terminal size={16} />
              <span>Launch Exploit Shell</span>
            </button>
          </nav>
        </div>
      )}
    </header>
  );
}
