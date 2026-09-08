import type { Metadata } from 'next';
import Link from 'next/link';
import './globals.css';
import Header from '../components/Header';
import AskAI from '../components/AskAI';

export const metadata: Metadata = {
  title: 'WilliamsHub — Study OS',
  description:
    'High-yield, mechanism-driven, exam-focused lecture pages built from MedCMU lectures. A VESTRIPPN satellite.',
  icons: {
    // The Williams W-mark (public/icon.png, 512×512).
    icon: [{ url: '/icon.png', type: 'image/png', sizes: '512x512' }],
    apple: [{ url: '/apple-icon.png', sizes: '180x180' }],
  },
};

// Applied before paint to avoid a flash of the wrong theme.
const themeScript = `(function(){try{var t=localStorage.getItem('wh-theme');var d=t?t==='dark':window.matchMedia('(prefers-color-scheme: dark)').matches;if(d)document.documentElement.classList.add('dark');}catch(e){}})();`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-screen text-slate-800 antialiased dark:text-slate-200">
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <div className="page-decoration" aria-hidden="true" />
        <Header />
        {children}
        <Link
          href="/"
          aria-label="VESTRIPPN3.0 · M-8"
          className="brand-signature fixed bottom-5 left-5 z-20 hidden rounded bg-[var(--canvas)] px-2 py-1.5 transition hover:text-[var(--accent)] 2xl:inline-flex"
        >
          VESTRIPPN<span className="text-[#2E5BFF] dark:text-[#7AA0FF]">3.0</span>&nbsp;·&nbsp;M-8
        </Link>
        <AskAI />
      </body>
    </html>
  );
}
