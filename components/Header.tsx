import Link from 'next/link';
import ThemeToggle from './ThemeToggle';

// VESTRIPPN3.0 family branding — WilliamsHub is the M-8 satellite.
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/40 backdrop-blur-md dark:border-white/5 dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <span className="clay-node flex h-10 w-10 items-center justify-center bg-gradient-to-br from-emerald-400 to-emerald-600 text-lg font-black text-white">
            V
          </span>
          <span className="flex items-center gap-2">
            <span className="text-lg font-black tracking-tight text-slate-900 dark:text-white">
              VESTRIPPN<span className="text-emerald-500">3.0</span>
            </span>
            <span className="clay-pill hidden px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-300 sm:inline">
              WilliamsHub · M-8
            </span>
          </span>
        </Link>

        <nav className="flex items-center gap-3 text-sm sm:gap-4">
          <span className="hidden text-slate-500 dark:text-slate-400 sm:inline">PhysioHub</span>
          <span className="hidden text-slate-300 dark:text-slate-600 sm:inline">|</span>
          <span className="hidden text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 sm:inline">
            Mode
          </span>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
