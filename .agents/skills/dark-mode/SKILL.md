---
name: dark-mode
description: >
  Implements a consistent dark/light mode system for the portfolio
  using CSS custom properties, a React context, and the system
  preference API. Covers token definitions and theme persistence.
---

# Dark Mode Skill

## Goal
Provide a seamless dark/light mode toggle that respects system preferences and persists the user's choice.

## Token Architecture

All colors live in `styles/tokens.css` under two `data-theme` selectors:

```css
/* styles/tokens.css */

:root,
[data-theme='light'] {
  /* Backgrounds */
  --color-bg-base:      #ffffff;
  --color-bg-subtle:    #f8f8fb;
  --color-bg-card:      #f1f1f6;

  /* Text */
  --color-text-primary:   #0d0d14;
  --color-text-secondary: #4a4a6a;
  --color-text-muted:     #8888aa;

  /* Accent */
  --color-accent:         #6366f1;
  --color-accent-hover:   #4f46e5;
  --color-accent-subtle:  #eef2ff;

  /* Border */
  --color-border:         #e5e5f0;
  --color-border-strong:  #c8c8e0;
}

[data-theme='dark'] {
  /* Backgrounds */
  --color-bg-base:      #0a0a0f;
  --color-bg-subtle:    #111118;
  --color-bg-card:      #18181f;

  /* Text */
  --color-text-primary:   #f0f0ff;
  --color-text-secondary: #a0a0c0;
  --color-text-muted:     #5a5a7a;

  /* Accent */
  --color-accent:         #818cf8;
  --color-accent-hover:   #a5b4fc;
  --color-accent-subtle:  #1e1b4b;

  /* Border */
  --color-border:         #2a2a3a;
  --color-border-strong:  #3a3a50;
}
```

## Theme Provider

```tsx
// lib/ThemeProvider.tsx
'use client';
import { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

const ThemeContext = createContext<{
  theme: Theme;
  toggle: () => void;
}>({ theme: 'dark', toggle: () => {} });

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme | null;
    const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
    const resolved = stored ?? preferred;
    setTheme(resolved);
    document.documentElement.setAttribute('data-theme', resolved);
  }, []);

  const toggle = () => {
    setTheme((prev) => {
      const next = prev === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', next);
      localStorage.setItem('theme', next);
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => useContext(ThemeContext);
```

## Usage in Components

```tsx
// Always use CSS variables — never hardcode colors
.card {
  background: var(--color-bg-card);
  border: 1px solid var(--color-border);
  color: var(--color-text-primary);
}
```

## Rules

1. **Never hardcode** `#hex`, `rgb()`, or named colors in CSS — always use `var(--color-*)`.
2. **Never use `@media (prefers-color-scheme)`** in component CSS — only in tokens and the provider.
3. **Persist choice** in `localStorage` with key `'theme'`.
4. **Default to dark** for the portfolio (dark-first design).
5. The `data-theme` attribute lives only on `<html>` — never on individual components.

## Flash Prevention (FOUC)

Add an inline script to `app/layout.tsx` `<head>` to prevent flash:

```tsx
<script
  dangerouslySetInnerHTML={{
    __html: `
      (function() {
        const t = localStorage.getItem('theme');
        const p = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', t || p || 'dark');
      })();
    `,
  }}
/>
```
