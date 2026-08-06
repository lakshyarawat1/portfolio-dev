---
name: component-design
description: >
  Guides building reusable, accessible UI components for the portfolio
  website using Next.js, TypeScript, and CSS Modules. Covers component
  structure, prop typing, accessibility, and composition patterns.
---

# Component Design Skill

## Goal
Build clean, reusable, and accessible React components that are consistent with the portfolio's design system.

## Component Structure Template

Every component follows this structure:

```tsx
// components/ui/Button/Button.tsx
import styles from './Button.module.css';

interface ButtonProps {
  label: string;
  variant?: 'primary' | 'ghost' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  disabled?: boolean;
  ariaLabel?: string;
}

export function Button({
  label,
  variant = 'primary',
  size = 'md',
  onClick,
  disabled = false,
  ariaLabel,
}: ButtonProps) {
  return (
    <button
      className={`${styles.btn} ${styles[variant]} ${styles[size]}`}
      onClick={onClick}
      disabled={disabled}
      aria-label={ariaLabel ?? label}
    >
      {label}
    </button>
  );
}
```

## Rules

1. **Always define a TypeScript interface** for props — no implicit `any`.
2. **Co-locate CSS Modules** in the same folder as the component (`Button/Button.module.css`).
3. **Always include accessibility attributes** (`aria-label`, `role`, `tabIndex`) where relevant.
4. **Avoid prop drilling** beyond 2 levels — use context or composition instead.
5. **Export components as named exports**, never default exports.
6. **Provide sensible defaults** for optional props.
7. **Handle loading and error states** for async-driven components.

## Folder Layout

```
components/
├── ui/               # Atomic: Button, Badge, Tag, Card, Avatar
└── sections/         # Page sections: HeroSection, AboutSection, ProjectsSection
```

## Accessibility Checklist

- [ ] Keyboard navigable (Tab, Enter, Escape where applicable)
- [ ] Visible focus ring (not outline: none without replacement)
- [ ] Sufficient color contrast (WCAG AA: 4.5:1 text, 3:1 UI)
- [ ] Descriptive `aria-label` on icon-only buttons
- [ ] `alt` text on all meaningful images; `alt=""` on decorative ones
- [ ] Landmark regions (`<main>`, `<nav>`, `<header>`, `<footer>`, `<section>`)
