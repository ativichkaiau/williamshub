import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import WilliamsHubLogo from './WilliamsHubLogo';

// WilliamsHub brand (Williams-F1-styled), part of the VESTRIPPN3.0 family.
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/40 bg-white/40 backdrop-blur-md dark:border-white/5 dark:bg-slate-900/40">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <WilliamsHubLogo />
          <span className="clay-pill hidden px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-300 lg:inline">
            VESTRIPPN<span className="text-emerald-500">3.0</span> · M-8
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
