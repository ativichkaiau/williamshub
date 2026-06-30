import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'WilliamsHub — M-8',
  description:
    'High-yield, mechanism-driven, exam-focused lecture pages built from MedCMU lectures. A VEStriPPN satellite.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-slate-100 text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}
