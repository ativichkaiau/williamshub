import Link from 'next/link';
import { lecturesBySubject, subjectByCode, subjectSlug } from '../../content';
import PracticeLauncher from '../../components/PracticeLauncher';

export const metadata = { title: 'Practice — WilliamsHub' };

export default function PracticePage() {
  const blocks = Object.entries(lecturesBySubject)
    .map(([code, mods]) => ({
      code,
      name: subjectByCode[code]?.name ?? code,
      slug: subjectSlug(code),
      year: subjectByCode[code]?.year ?? 0,
      count: mods.length,
    }))
    .sort((a, b) => a.year - b.year || a.code.localeCompare(b.code));

  return (
    <main className="mx-auto max-w-4xl px-5 py-8">
      <header className="mb-6">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Practice</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Drill exam-style questions built from each module’s content, traps and Active-Integration links. Answer to
          score; misses feed your Repair queue and Progress. Use ⌘K to jump to any module’s set.
        </p>
      </header>

      <PracticeLauncher />

      <section>
        <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
          Practise a block
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <Link
              key={b.code}
              href={`/practice/block/${b.slug}`}
              className="clay group flex items-center justify-between gap-2 p-4 transition hover:-translate-y-1"
            >
              <span className="min-w-0">
                <span className="clay-pill px-2 py-0.5 text-xs font-bold text-[#1e5bd6] dark:text-[#7AA0FF]">{b.code}</span>
                <span className="mt-2 block truncate text-sm font-bold text-slate-900 group-hover:text-[#1e5bd6] dark:text-white dark:group-hover:text-[#7AA0FF]">
                  {b.name}
                </span>
              </span>
              <span className="shrink-0 text-[11px] font-semibold text-slate-400">{b.count} →</span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
