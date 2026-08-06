// components/ui/Background/FluidBackground.tsx
'use client';

import React from 'react';
import Script from 'next/script';

export function FluidBackground() {
  return (
    <>
      <canvas className="fluid-canvas" />
      <Script src="/fluid.js?v=6" strategy="lazyOnload" />
    </>
  );
}
