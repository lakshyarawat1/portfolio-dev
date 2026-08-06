// app/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { IOSNavbar } from '@/components/sections/Navbar/IOSNavbar';
import { HeroSection } from '@/components/sections/HeroSection/HeroSection';
import { AppsSection } from '@/components/sections/AppsSection/AppsSection';
import { ProjectsSection } from '@/components/sections/ProjectsSection/ProjectsSection';
import { ExperienceSection } from '@/components/sections/ExperienceSection/ExperienceSection';
import { CertificationsSection } from '@/components/sections/CertificationsSection/CertificationsSection';
import { SkillsSection } from '@/components/sections/SkillsSection/SkillsSection';
import { TerminalSection } from '@/components/sections/TerminalSection/TerminalSection';
import { ContactSection } from '@/components/sections/ContactSection/ContactSection';
import { IOSFooter } from '@/components/sections/Footer/IOSFooter';
import { IOSModal } from '@/components/ui/Modal/IOSModal';
import { Terminal as TerminalIcon } from 'lucide-react';

export default function Home() {
  const [terminalModalOpen, setTerminalModalOpen] = useState(false);

  // Guarantee that refreshing/reopening the website ALWAYS starts at top (0, 0)
  useEffect(() => {
    if (typeof window !== 'undefined') {
      if ('scrollRestoration' in window.history) {
        window.history.scrollRestoration = 'manual';
      }
      window.scrollTo(0, 0);
    }
  }, []);

  const handleOpenTerminal = () => {
    // Scroll smoothly to terminal section if visible or open modal window
    const terminalEl = document.getElementById('terminal');
    if (terminalEl) {
      terminalEl.scrollIntoView({ behavior: 'smooth' });
    } else {
      setTerminalModalOpen(true);
    }
  };

  return (
    <main style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <IOSNavbar onOpenTerminal={handleOpenTerminal} />
      <HeroSection onOpenTerminal={handleOpenTerminal} />
      <AppsSection onOpenTerminal={handleOpenTerminal} />
      <ProjectsSection />
      <ExperienceSection />
      <CertificationsSection />
      <SkillsSection />
      <TerminalSection />
      <ContactSection />
      <IOSFooter />

      {/* Floating Terminal Modal Window */}
      {terminalModalOpen && (
        <IOSModal
          isOpen={terminalModalOpen}
          onClose={() => setTerminalModalOpen(false)}
          title="SOC Security Terminal"
          subtitle="Lakshya OS Interactive Console"
          icon={<TerminalIcon size={20} />}
        >
          <TerminalSection />
        </IOSModal>
      )}
    </main>
  );
}
