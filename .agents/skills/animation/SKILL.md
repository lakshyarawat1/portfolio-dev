---
name: animation
description: >
  Covers creating smooth, performant micro-animations and scroll-based
  transitions for the portfolio using CSS animations, Framer Motion,
  and the Intersection Observer API. Ensures animations respect
  prefers-reduced-motion.
---

# Animation Skill

## Goal
Add life to the portfolio through smooth, purposeful animations that enhance — never obstruct — the user experience.

## Core Principles

1. **Performance first** — animate only `transform` and `opacity`. Never animate `width`, `height`, `top`, `left`, or `margin`.
2. **Always respect `prefers-reduced-motion`** — wrap all motion in a media query check.
3. **Purposeful motion** — every animation must serve a UX reason (guide attention, confirm action, reveal content).
4. **60 fps target** — use `will-change: transform` sparingly on elements that will animate.

## CSS Animation Pattern

```css
/* styles/animations.css */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s cubic-bezier(0.16, 1, 0.3, 1) both;
}

/* Always wrap in reduced-motion guard */
@media (prefers-reduced-motion: reduce) {
  .animate-fade-in-up {
    animation: none;
  }
}
```

## Framer Motion Pattern (Scroll Reveal)

```tsx
'use client';
import { motion } from 'framer-motion';
import { useReducedMotion } from 'framer-motion';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
};

export function RevealOnScroll({ children }: { children: React.ReactNode }) {
  const shouldReduce = useReducedMotion();

  return (
    <motion.div
      variants={shouldReduce ? {} : fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-80px' }}
    >
      {children}
    </motion.div>
  );
}
```

## Stagger Children Pattern

```tsx
const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};
```

## Animation Timing Reference

| Use Case              | Duration   | Easing                        |
|-----------------------|------------|-------------------------------|
| Micro-interactions    | 100–200ms  | `ease-out`                    |
| Page section reveals  | 400–600ms  | `cubic-bezier(0.16,1,0.3,1)` |
| Loading skeletons     | 1.2s loop  | `ease-in-out`                 |
| Hero entrance         | 600–800ms  | `cubic-bezier(0.16,1,0.3,1)` |
| Hover effects         | 150–200ms  | `ease-out`                    |

## Do / Don't

| ✅ Do                                    | ❌ Don't                                  |
|------------------------------------------|-------------------------------------------|
| Animate `transform` & `opacity`          | Animate layout properties (`width`, `margin`) |
| Use `viewport={{ once: true }}`          | Replay animations every scroll            |
| Guard with `prefers-reduced-motion`      | Force motion on accessibility users       |
| Keep animations under 700ms             | Use long, slow transitions > 1s           |
| Use spring physics for interactive UI   | Use linear easing for natural motion      |
