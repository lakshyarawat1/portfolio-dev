// components/ui/Background/InteractiveBackground.tsx
'use client';

import React, { useEffect, useRef } from 'react';
import styles from './InteractiveBackground.module.css';

export function InteractiveBackground() {
  const bgRef = useRef<HTMLDivElement>(null);
  const targetPos = useRef({ x: 0, y: 0 });
  const currentPos = useRef({ x: 0, y: 0 });
  const animFrameId = useRef<number | null>(null);

  useEffect(() => {
    // Initial center position
    targetPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    currentPos.current = { x: window.innerWidth / 2, y: window.innerHeight / 2 };

    const handleMouseMove = (e: MouseEvent) => {
      targetPos.current = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Smooth Lerp loop
    const animate = () => {
      const ease = 0.08;
      currentPos.current.x += (targetPos.current.x - currentPos.current.x) * ease;
      currentPos.current.y += (targetPos.current.y - currentPos.current.y) * ease;

      if (bgRef.current) {
        bgRef.current.style.setProperty('--mouse-x', `${currentPos.current.x}px`);
        bgRef.current.style.setProperty('--mouse-y', `${currentPos.current.y}px`);
      }

      animFrameId.current = requestAnimationFrame(animate);
    };

    animFrameId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
    };
  }, []);

  return (
    <div ref={bgRef} className={styles.interactiveBg} aria-hidden="true">
      {/* Interactive Cursor Spotlight Glow */}
      <div className={styles.spotlight} />

      {/* Floating Ambient Mesh Blobs */}
      <div className={styles.blob1} />
      <div className={styles.blob2} />
      <div className={styles.blob3} />
    </div>
  );
}
