---
name: performance
description: >
  Core Web Vitals optimization for the portfolio — covers image
  optimization, font loading, code splitting, bundle analysis,
  and Lighthouse CI targets. Ensures fast LCP, low CLS, and
  smooth INP.
---

# Performance Skill

## Goal
Achieve and maintain Lighthouse Performance ≥ 90, with LCP < 2.5s, CLS < 0.1, and INP < 200ms.

## Core Web Vitals Targets

| Metric | Target   | Description                             |
|--------|----------|-----------------------------------------|
| LCP    | < 2.5s   | Largest Contentful Paint                |
| CLS    | < 0.1    | Cumulative Layout Shift                 |
| INP    | < 200ms  | Interaction to Next Paint               |
| FCP    | < 1.8s   | First Contentful Paint                  |
| TTFB   | < 800ms  | Time to First Byte                      |

## Image Optimization

Always use Next.js `<Image>` — never `<img>` for content images:

```tsx
import Image from 'next/image';

// Hero image — above-the-fold, set priority
<Image
  src="/assets/hero-photo.webp"
  alt="Lakshya Rawat"
  width={600}
  height={600}
  priority          // preloads LCP image
  quality={85}
  placeholder="blur"
  blurDataURL="data:image/webp;base64,..."
/>

// Below-the-fold — lazy load (default)
<Image
  src="/assets/project-thumbnail.webp"
  alt="Project preview"
  width={800}
  height={450}
  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
/>
```

**Image format rules:**
- Use **WebP** for photos and complex images.
- Use **SVG** for icons, logos, and illustrations.
- Use **AVIF** as an additional source only if supported by Next.js version.
- Never use PNG for photos larger than 100×100px.

## Font Optimization

```tsx
// app/layout.tsx
import { Inter, Plus_Jakarta_Sans } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',         // prevent invisible text during load
  variable: '--font-inter',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700'],
});
```

- Use `display: 'swap'` always.
- Load **only the weights you use** — never load all weights.
- Use CSS variables for font families.

## Avoiding Layout Shift (CLS)

- **Always set `width` and `height`** on `<Image>` components — this reserves space.
- **Never use `height: auto`** on elements whose content loads asynchronously.
- **Reserve space for ads/embeds** with fixed aspect ratio containers.
- **Avoid inserting content above existing content** after load (e.g., cookie banners).

```css
/* Aspect ratio box — prevents CLS */
.video-wrapper {
  position: relative;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}
```

## Code Splitting

- Use **`dynamic()`** for heavy components not needed on initial render:

```tsx
import dynamic from 'next/dynamic';

const ThreeBackground = dynamic(() => import('@/components/ThreeBackground'), {
  ssr: false,
  loading: () => <div className="canvas-placeholder" />,
});
```

- Avoid importing entire icon libraries — import individual icons only.

## Bundle Analysis

Run when adding new dependencies:

```bash
ANALYZE=true next build
```

Requires `@next/bundle-analyzer` in `next.config.ts`.

## Performance Checklist

- [ ] LCP image uses `priority` prop
- [ ] All images are WebP/SVG with explicit dimensions
- [ ] Google Fonts loaded via `next/font` (not `<link>`)
- [ ] No third-party scripts block the main thread (`<Script strategy="lazyOnload">`)
- [ ] `dynamic()` used for non-critical heavy components
- [ ] Bundle size reviewed after adding new packages
- [ ] `next build` output shows no large (>500KB) chunks
- [ ] CLS verified with no layout shifts on slow 3G
