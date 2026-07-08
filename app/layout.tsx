import type { Metadata } from 'next';
import './globals.css';
import Header from '../components/Header';

export const metadata: Metadata = {
  title: 'WilliamsHub — Study OS',
  description:
    'High-yield, mechanism-driven, exam-focused lecture pages built from MedCMU lectures. A VESTRIPPN satellite.',
  icons: {
    // The WilliamsHub W-mark. SVG first (crisp on modern Safari), PNG fallback.
    icon: [
      { url: '/icon.svg', type: 'image/svg+xml' },
      { url: '/icon.png', type: 'image/png', sizes: '96x96' },
    ],
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
        <Header />
        {children}
      </body>
    </html>
  );
}
