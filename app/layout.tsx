// app/layout.tsx
import type { Metadata } from 'next';
import { ThemeProvider } from '@/lib/ThemeProvider';
import { FluidBackground } from '@/components/ui/Background/FluidBackground';
import '@/styles/tokens.css';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: 'LAKSHYA | Software Engineer • Red Teamer • DevSecOps',
  description:
    'Cybersecurity-focused Software Engineer with 1.5+ years enterprise experience at Accenture, MSc in Information Security, GCP ACE certified, and 3x Oracle Cloud Certified.',
  keywords: [
    'Lakshya',
    'Software Engineer',
    'Red Teamer',
    'DevSecOps',
    'Offensive Security',
    'Penetration Testing',
    'Accenture',
    'GCP Associate Cloud Engineer',
    'Oracle Cloud Certified',
    'TryHackMe',
    'Tauri',
    'Next.js',
    'React',
  ],
  authors: [{ name: 'Lakshya' }],
  openGraph: {
    title: 'LAKSHYA | Software Engineer • Red Teamer • DevSecOps',
    description:
      'Cybersecurity-focused Software Engineer with enterprise experience at Accenture, GCP ACE certified, and TryHackMe Top 5% global ranking.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  const stored = localStorage.getItem('theme');
                  const preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  const initial = stored || preferred || 'dark';
                  document.documentElement.setAttribute('data-theme', initial);
                } catch (e) {}
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>
          <FluidBackground />
          <div className="bg-ambient">
            <div className="ambient-blob-1" />
            <div className="ambient-blob-2" />
            <div className="ambient-blob-3" />
          </div>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
