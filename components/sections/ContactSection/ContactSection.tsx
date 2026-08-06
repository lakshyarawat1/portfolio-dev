// components/sections/ContactSection/ContactSection.tsx
'use client';

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2, Shield, ExternalLink, Terminal } from 'lucide-react';
import { resumeData } from '@/content/resumeData';
import { GlassCard } from '@/components/ui/Card/GlassCard';
import { Badge } from '@/components/ui/Badge/Badge';
import { Button } from '@/components/ui/Button/Button';
import styles from './ContactSection.module.css';

export function ContactSection() {
  const { personal, profiles } = resumeData;
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email && formData.message) {
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Badge variant="blue" icon={<Shield size={14} />}>
            Control Center Hub
          </Badge>
          <h2 className={styles.title}>Get in Touch & Connect</h2>
          <p className={styles.subtitle}>
            Interested in security engineering, DevSecOps collaboration, or consulting? Reach out directly.
          </p>
        </div>

        {/* Control Center Grid Layout */}
        <div className={styles.grid}>
          {/* Left Column: Direct Info & Social Widgets */}
          <div className={styles.leftCol}>
            <GlassCard hoverEffect glowColor="blue">
              <div className={styles.infoCardInner}>
                <h3 className={styles.cardTitle}>Direct Communications</h3>
                <div className={styles.infoList}>
                  <a href={`mailto:${personal.email}`} className={styles.infoRow}>
                    <div className={styles.iconCircle}>
                      <Mail size={18} />
                    </div>
                    <div>
                      <div className={styles.infoLabel}>Email</div>
                      <div className={styles.infoVal}>{personal.email}</div>
                    </div>
                  </a>

                  <a href={`tel:${personal.phone.replace(/\s+/g, '')}`} className={styles.infoRow}>
                    <div className={styles.iconCircle}>
                      <Phone size={18} />
                    </div>
                    <div>
                      <div className={styles.infoLabel}>Phone</div>
                      <div className={styles.infoVal}>{personal.phone}</div>
                    </div>
                  </a>

                  <div className={styles.infoRow}>
                    <div className={styles.iconCircle}>
                      <MapPin size={18} />
                    </div>
                    <div>
                      <div className={styles.infoLabel}>Location</div>
                      <div className={styles.infoVal}>{personal.location}</div>
                    </div>
                  </div>
                </div>
              </div>
            </GlassCard>

            {/* Verified Profiles Dock */}
            <GlassCard hoverEffect glowColor="purple">
              <div className={styles.profilesInner}>
                <h3 className={styles.cardTitle}>Verified Profiles & Rankings</h3>
                <div className={styles.profilePills}>
                  {profiles.map((p) => (
                    <a
                      key={p.platform}
                      href={p.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.profilePill}
                    >
                      <div className={styles.profileInfo}>
                        <span className={styles.platformName}>{p.platform}</span>
                        <span className={styles.usernameVal}>{p.username}</span>
                      </div>
                      <ExternalLink size={14} className={styles.extIcon} />
                    </a>
                  ))}
                </div>
              </div>
            </GlassCard>
          </div>

          {/* Right Column: Contact Message Form */}
          <div className={styles.rightCol}>
            <GlassCard hoverEffect glowColor="blue">
              <div className={styles.formInner}>
                <div className={styles.formHeader}>
                  <h3 className={styles.cardTitle}>Send a Encrypted Message</h3>
                  <p className={styles.formSub}>
                    Directly dispatch a priority message to Lakshya&apos;s inbox.
                  </p>
                </div>

                {formSubmitted ? (
                  <div className={styles.successState}>
                    <CheckCircle2 size={48} className={styles.successIcon} />
                    <h4 className={styles.successTitle}>Message Dispatched!</h4>
                    <p className={styles.successText}>
                      Thank you! Your message has been received. Lakshya will reply shortly.
                    </p>
                    <Button variant="glass" onClick={() => setFormSubmitted(false)}>
                      Send Another Message
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className={styles.contactForm}>
                    <div className={styles.formGroup}>
                      <label htmlFor="name" className={styles.label}>
                        Your Name
                      </label>
                      <input
                        id="name"
                        type="text"
                        required
                        className={styles.input}
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="email" className={styles.label}>
                        Your Email
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className={styles.input}
                        placeholder="john@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    <div className={styles.formGroup}>
                      <label htmlFor="message" className={styles.label}>
                        Message
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={4}
                        className={styles.textarea}
                        placeholder="Hi Lakshya, I'd like to discuss a Security Engineer / DevSecOps role..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      />
                    </div>

                    <Button type="submit" variant="primary" size="lg" icon={<Send size={16} />}>
                      Send Message
                    </Button>
                  </form>
                )}
              </div>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
}
