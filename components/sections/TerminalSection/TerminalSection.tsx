// components/sections/TerminalSection/TerminalSection.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Terminal as TerminalIcon, Play, RotateCcw, ShieldCheck, Sparkles } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { Badge } from '@/components/ui/Badge/Badge';
import styles from './TerminalSection.module.css';

interface CommandOutput {
  command: string;
  output: React.ReactNode;
}

export function TerminalSection() {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandOutput[]>([
    {
      command: 'welcome',
      output: (
        <div>
          <span className={styles.greenText}>[SYSTEM INITIALIZED]</span> Red Team & Dev Shell v2.4.0 (Lakshya OS)<br />
          Type <span className={styles.cyanText}>&apos;help&apos;</span> to see available commands or <span className={styles.cyanText}>&apos;audit&apos;</span> to run automated exploit & vulnerability telemetry.
        </div>
      ),
    },
  ]);

  const consoleBodyRef = useRef<HTMLDivElement>(null);

  // Scroll ONLY the internal console container, NEVER the browser window
  useEffect(() => {
    if (consoleBodyRef.current && history.length > 1) {
      consoleBodyRef.current.scrollTop = consoleBodyRef.current.scrollHeight;
    }
  }, [history]);

  const handleCommand = (cmd: string) => {
    const trimmed = cmd.trim().toLowerCase();
    if (!trimmed) return;

    let result: React.ReactNode;

    switch (trimmed) {
      case 'help':
        result = (
          <div className={styles.helpGrid}>
            <div><span className={styles.cyanText}>audit</span> — Run automated SAST/DAST & vulnerability audit</div>
            <div><span className={styles.cyanText}>whoami</span> — Display Lakshya background summary</div>
            <div><span className={styles.cyanText}>certs</span> — List all verified cloud certifications</div>
            <div><span className={styles.cyanText}>projects</span> — Show flagship software project metrics</div>
            <div><span className={styles.cyanText}>experience</span> — View Accenture software engineering highlights</div>
            <div><span className={styles.cyanText}>skills</span> — Print technical skillsets & red teaming tools</div>
            <div><span className={styles.cyanText}>contact</span> — Display contact info & social profile links</div>
            <div><span className={styles.cyanText}>clear</span> — Clear terminal output history</div>
          </div>
        );
        break;

      case 'scan':
      case 'audit':
        result = (
          <div className={styles.scanOutput}>
            <div>[+] Initiating Red Team Penetration & Software Audit Telemetry...</div>
            <div>[✔] Audited Codebases: <span className={styles.greenText}>10+ Repositories (10,000+ LOC)</span></div>
            <div>[✔] Remediated Vulnerabilities: <span className={styles.greenText}>30+ Critical Vulnerabilities Remediated</span></div>
            <div>[✔] TryHackMe Global Ranking: <span className={styles.goldText}>Top 5% Global (100+ Red Team Labs)</span></div>
            <div>[✔] Cloud Certifications: <span className={styles.blueText}>GCP ACE & 3x Oracle Cloud Professional</span></div>
            <div>[✔] Enterprise Performance: <span className={styles.greenText}>100k+ Active Users Served • 99.9% Uptime</span></div>
          </div>
        );
        break;

      case 'whoami':
        result = <div>{resumeData.personal.summary}</div>;
        break;

      case 'certs':
        result = (
          <div>
            {resumeData.certifications.map((c) => (
              <div key={c.id}>
                ▸ <span className={styles.goldText}>{c.name}</span> — {c.issuer} (Valid: {c.validity})
              </div>
            ))}
          </div>
        );
        break;

      case 'projects':
        result = (
          <div>
            {resumeData.projects.map((p) => (
              <div key={p.id} style={{ marginBottom: '0.5rem' }}>
                ▸ <span className={styles.cyanText}>{p.title}</span> ({p.subtitle})<br />
                &nbsp;&nbsp;Tech: {p.tags.join(', ')}<br />
                &nbsp;&nbsp;Metric: {p.metrics}
              </div>
            ))}
          </div>
        );
        break;

      case 'experience':
        result = (
          <div>
            <span className={styles.goldText}>Associate Software Engineer</span> at Accenture (Pune, IN)<br />
            Jan 2024 – Present<br />
            {resumeData.experience?.[0]?.bullets?.map((b, i) => (
              <div key={i}>• {b}</div>
            ))}
          </div>
        );
        break;

      case 'skills':
        result = (
          <div>
            {resumeData.skills.map((s) => (
              <div key={s.category}>
                <span className={styles.blueText}>{s.category}:</span> {s.items.join(', ')}
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        result = (
          <div>
            Email: <span className={styles.cyanText}>{resumeData.personal.email}</span><br />
            Phone: {resumeData.personal.phone}<br />
            Location: {resumeData.personal.location}<br />
            Profiles: {resumeData.profiles.map((p) => `${p.platform} (${p.username})`).join(' | ')}
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      default:
        result = (
          <div>
            Command not recognized: <span className={styles.redText}>{trimmed}</span>. Type{' '}
            <span className={styles.cyanText}>&apos;help&apos;</span> for valid commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: trimmed, output: result }]);
    setInputVal('');
  };

  return (
    <section id="terminal" className={styles.terminalSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="cyan" icon={<TerminalIcon size={14} />}>
            Interactive Dev & Exploit Console
          </Badge>
          <h2 className={styles.title}>Red Team & Software Shell</h2>
          <p className={styles.subtitle}>
            Execute vulnerability audits and query Lakshya&apos;s software & security telemetry directly.
          </p>
        </div>

        {/* Terminal Window Card */}
        <div className={styles.terminalWindow}>
          {/* Title bar */}
          <div className={styles.titleBar}>
            <div className={styles.windowDots}>
              <span className={`${styles.dot} ${styles.closeDot}`} />
              <span className={`${styles.dot} ${styles.minDot}`} />
              <span className={`${styles.dot} ${styles.maxDot}`} />
            </div>
            <div className={styles.windowTitle}>
              <ShieldCheck size={14} className={styles.iconGreen} />
              <span>lakshya@redteam-dev: ~/workspace</span>
            </div>
            <div className={styles.titleActions}>
              <button
                className={styles.titleBtn}
                onClick={() => handleCommand('audit')}
                title="Run Vulnerability Audit"
              >
                <Play size={12} /> Audit
              </button>
              <button
                className={styles.titleBtn}
                onClick={() => handleCommand('clear')}
                title="Clear Output"
              >
                <RotateCcw size={12} /> Clear
              </button>
            </div>
          </div>

          {/* Terminal Console */}
          <div ref={consoleBodyRef} className={styles.consoleBody}>
            {history.map((item, idx) => (
              <div key={idx} className={styles.historyBlock}>
                {item.command !== 'welcome' && (
                  <div className={styles.promptLine}>
                    <span className={styles.promptUser}>lakshya@redteam-dev</span>
                    <span className={styles.promptSep}>:~$</span>
                    <span className={styles.promptCmd}>{item.command}</span>
                  </div>
                )}
                <div className={styles.outputLine}>{item.output}</div>
              </div>
            ))}

            {/* Input prompt line */}
            <form
              className={styles.promptForm}
              onSubmit={(e) => {
                e.preventDefault();
                handleCommand(inputVal);
              }}
            >
              <span className={styles.promptUser}>lakshya@redteam-dev</span>
              <span className={styles.promptSep}>:~$</span>
              <input
                type="text"
                className={styles.terminalInput}
                value={inputVal}
                onChange={(e) => setInputVal(e.target.value)}
                placeholder="Type 'help' or 'audit'..."
                autoComplete="off"
                spellCheck={false}
              />
            </form>
          </div>

          {/* Preset Buttons Dock */}
          <div className={styles.presetBar}>
            <span className={styles.presetLabel}>Quick Commands:</span>
            {['audit', 'whoami', 'certs', 'projects', 'experience', 'skills', 'contact'].map((cmd) => (
              <button
                key={cmd}
                className={styles.presetChip}
                onClick={() => handleCommand(cmd)}
              >
                <Sparkles size={11} /> {cmd}
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
