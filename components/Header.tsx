import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import WilliamsHubLogo from './WilliamsHubLogo';
import CommandPalette from './CommandPalette';

const navLink =
  'flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-wider transition';

// WilliamsHub brand (Williams-F1-styled), part of the VESTRIPPN3.0 family.
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/5 bg-white/55 backdrop-blur-md dark:border-white/5 dark:bg-[#07173a]/55">
      {/* Timing-gantry livery flash */}
      <div className="livery-stripe h-1 w-full" />
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <WilliamsHubLogo />
          <span className="clay-pill hidden px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-300 xl:inline">
            VESTRIPPN<span className="text-[#2E5BFF] dark:text-[#7AA0FF]">3.0</span> · M-8
          </span>
        </Link>

        <nav className="flex items-center gap-2 sm:gap-3">
          <CommandPalette />
          <Link
            href="/standings"
            aria-label="Standings"
            className={`${navLink} text-slate-500 hover:text-[#1e5bd6] dark:text-slate-400 dark:hover:text-[#7AA0FF]`}
          >
            <span aria-hidden>🏆</span>
            <span className="hidden sm:inline">Standings</span>
          </Link>
          <Link
            href="/garage"
            aria-label="Garage"
            className={`${navLink} text-slate-500 hover:text-[#1e5bd6] dark:text-slate-400 dark:hover:text-[#7AA0FF]`}
          >
            <span aria-hidden>⭐</span>
            <span className="hidden sm:inline">Garage</span>
          </Link>
          <Link
            href="/repair"
            aria-label="Pit Box"
            className={`${navLink} text-slate-500 hover:text-[#e4002b] dark:text-slate-400 dark:hover:text-[#ff5a72]`}
          >
            <span aria-hidden>🔧</span>
            <span className="hidden sm:inline">Pit&nbsp;Box</span>
          </Link>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
