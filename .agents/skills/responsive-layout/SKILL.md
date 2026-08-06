---
name: responsive-layout
description: >
  Mobile-first responsive layout patterns for the portfolio using CSS
  Grid, Flexbox, and CSS custom properties. Covers breakpoints,
  fluid typography, and container queries.
---

# Responsive Layout Skill

## Goal
Build layouts that look great on every screen — from 320px mobile to 4K desktop — using a mobile-first approach.

## Breakpoint System

Define breakpoints as CSS custom properties and media query tokens:

```css
/* styles/tokens.css */
:root {
  --bp-sm:  480px;
  --bp-md:  768px;
  --bp-lg:  1024px;
  --bp-xl:  1280px;
  --bp-2xl: 1536px;
}
```

Use them in media queries (CSS doesn't support var() in @media, so define constants):

```css
/* Mobile-first — add complexity upward */
.section {
  padding: 3rem 1.25rem;        /* mobile */
}

@media (min-width: 768px) {
  .section {
    padding: 5rem 2rem;         /* tablet */
  }
}

@media (min-width: 1024px) {
  .section {
    padding: 7rem 4rem;         /* desktop */
  }
}
```

## Container Pattern

Always use a max-width container with auto margins:

```css
.container {
  width: 100%;
  max-width: 1200px;
  margin-inline: auto;
  padding-inline: clamp(1.25rem, 5vw, 4rem);
}
```

## Fluid Typography

Use `clamp()` for fluid type that scales between breakpoints without media queries:

```css
:root {
  --text-xs:   clamp(0.75rem,  0.7rem  + 0.25vw, 0.875rem);
  --text-sm:   clamp(0.875rem, 0.8rem  + 0.375vw, 1rem);
  --text-base: clamp(1rem,     0.9rem  + 0.5vw,   1.125rem);
  --text-lg:   clamp(1.125rem, 1rem    + 0.625vw, 1.25rem);
  --text-xl:   clamp(1.25rem,  1.1rem  + 0.75vw,  1.5rem);
  --text-2xl:  clamp(1.5rem,   1.2rem  + 1.5vw,   2rem);
  --text-3xl:  clamp(2rem,     1.5rem  + 2.5vw,   3rem);
  --text-hero: clamp(2.5rem,   2rem    + 3vw,      4.5rem);
}
```

## Grid Patterns

### Auto-Responsive Card Grid
```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(min(100%, 320px), 1fr));
  gap: clamp(1rem, 3vw, 2rem);
}
```

### Two-Column with Sidebar
```css
.layout-sidebar {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

@media (min-width: 1024px) {
  .layout-sidebar {
    grid-template-columns: 280px 1fr;
  }
}
```

## Spacing Scale

```css
:root {
  --space-1:  0.25rem;
  --space-2:  0.5rem;
  --space-3:  0.75rem;
  --space-4:  1rem;
  --space-6:  1.5rem;
  --space-8:  2rem;
  --space-12: 3rem;
  --space-16: 4rem;
  --space-24: 6rem;
  --space-32: 8rem;
}
```

## Checklist

- [ ] Test at 320px, 375px, 768px, 1024px, 1440px
- [ ] No horizontal scroll at any breakpoint
- [ ] Text remains legible (≥16px base on mobile)
- [ ] Touch targets ≥ 44×44px
- [ ] Images scale with `max-width: 100%; height: auto`
- [ ] Navigation collapses gracefully on mobile
