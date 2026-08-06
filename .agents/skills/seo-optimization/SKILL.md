---
name: seo-optimization
description: >
  SEO and metadata best practices for the portfolio using Next.js
  Metadata API. Covers Open Graph, Twitter Cards, structured data,
  semantic HTML, and Core Web Vitals considerations.
---

# SEO Optimization Skill

## Goal
Ensure every page of the portfolio is discoverable, shareable, and scores 95+ on Lighthouse SEO.

## Next.js Metadata API

Use the `metadata` export in every `page.tsx` (no `<head>` tags needed):

```tsx
// app/page.tsx
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lakshya Rawat — Frontend Developer & Designer',
  description:
    'Portfolio of Lakshya Rawat, a frontend developer specializing in React, Next.js, and beautiful UI/UX.',
  keywords: ['frontend developer', 'React', 'Next.js', 'UI design', 'portfolio'],
  authors: [{ name: 'Lakshya Rawat' }],
  creator: 'Lakshya Rawat',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://lakshyarawat.dev',
    title: 'Lakshya Rawat — Frontend Developer',
    description: 'Frontend developer specializing in React, Next.js, and beautiful UI/UX.',
    siteName: 'Lakshya Rawat Portfolio',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lakshya Rawat — Frontend Developer',
    description: 'Frontend developer specializing in React, Next.js, and beautiful UI/UX.',
    images: ['/assets/og-image.png'],
    creator: '@lakshyarawat',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
  alternates: { canonical: 'https://lakshyarawat.dev' },
};
```

## Root Layout Metadata

Set site-wide defaults in `app/layout.tsx`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://lakshyarawat.dev'),
  title: {
    default: 'Lakshya Rawat — Frontend Developer',
    template: '%s | Lakshya Rawat',
  },
  // ... other shared fields
};
```

## Semantic HTML Rules

| Element        | Use For                                               |
|----------------|-------------------------------------------------------|
| `<header>`     | Site header with nav                                  |
| `<nav>`        | Primary and secondary navigation                      |
| `<main>`       | Main page content (one per page)                      |
| `<section>`    | Thematic grouping with an `aria-label` or heading     |
| `<article>`    | Self-contained content (blog post, project card)      |
| `<aside>`      | Secondary content (sidebar, related links)            |
| `<footer>`     | Site footer                                           |
| `<h1>`         | Exactly one per page — the primary page title         |
| `<h2>`–`<h6>` | Logical hierarchy, never skip levels                  |

## Structured Data (JSON-LD)

Add a `Person` schema to the homepage:

```tsx
// components/JsonLd.tsx
export function PersonJsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: 'Lakshya Rawat',
    url: 'https://lakshyarawat.dev',
    sameAs: [
      'https://github.com/lakshyarawat1',
      'https://linkedin.com/in/lakshyarawat',
    ],
    jobTitle: 'Frontend Developer',
    knowsAbout: ['React', 'Next.js', 'TypeScript', 'UI/UX Design'],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
```

## Checklist

- [ ] Unique `<title>` and `<meta name="description">` on every page
- [ ] Open Graph image at 1200×630px saved to `public/assets/og-image.png`
- [ ] One `<h1>` per page
- [ ] All images have descriptive `alt` attributes
- [ ] `canonical` URL set correctly
- [ ] `robots` meta allows indexing
- [ ] Structured data added to homepage
- [ ] `sitemap.xml` generated (use `next-sitemap` or App Router `sitemap.ts`)
- [ ] `robots.txt` configured
- [ ] No broken links
