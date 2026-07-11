import Link from 'next/link';
import ThemeToggle from './ThemeToggle';
import WilliamsHubLogo from './WilliamsHubLogo';
import CommandPalette from './CommandPalette';

// The primary destinations, grouped into one segmented control so the top bar
// reads as a single tidy unit rather than a scattered row of icons.
const NAV: { href: string; icon: string; label: string; accent?: 'red' }[] = [
  { href: '/flashcards', icon: '🗂️', label: 'Cards' },
  { href: '/practice', icon: '📝', label: 'Practice' },
  { href: '/standings', icon: '📊', label: 'Progress' },
  { href: '/garage', icon: '⭐', label: 'Saved' },
  { href: '/repair', icon: '🔧', label: 'Repair', accent: 'red' },
];

const itemBase =
  'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[11px] font-semibold uppercase tracking-wide transition';
const itemColor = {
  default: 'text-slate-500 hover:bg-black/[0.04] hover:text-[#1e5bd6] dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-[#7AA0FF]',
  red: 'text-slate-500 hover:bg-black/[0.04] hover:text-[#e4002b] dark:text-slate-400 dark:hover:bg-white/[0.06] dark:hover:text-[#ff5a72]',
};

// WilliamsHub brand (Williams-F1-styled), part of the VESTRIPPN3.0 family.
export default function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-900/5 bg-white/55 backdrop-blur-md dark:border-white/5 dark:bg-[#07173a]/55">
      {/* Timing-gantry livery flash */}
      <div className="livery-stripe h-1 w-full" />
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-5 py-3">
        <Link href="/" className="flex items-center gap-3">
          <WilliamsHubLogo />
          <span className="clay-pill hidden px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-300 xl:inline">
            VESTRIPPN<span className="text-[#2E5BFF] dark:text-[#7AA0FF]">3.0</span> · M-8
          </span>
        </Link>

        <nav className="flex items-center gap-2">
          <CommandPalette />
          <div className="clay-inset flex items-center gap-0.5 p-1">
            {NAV.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                aria-label={item.label}
                className={`${itemBase} ${item.accent === 'red' ? itemColor.red : itemColor.default}`}
              >
                <span aria-hidden className="text-[13px] leading-none">
                  {item.icon}
                </span>
                <span className="hidden sm:inline">{item.label}</span>
              </Link>
            ))}
          </div>
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
