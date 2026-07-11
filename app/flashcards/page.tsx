import Link from 'next/link';
import { lecturesBySubject, subjectByCode, subjectSlug } from '../../content';

export const metadata = { title: 'Flashcards — WilliamsHub' };

export default function FlashcardsLauncher() {
  const subjects = Object.entries(lecturesBySubject)
    .map(([code, mods]) => {
      const s = subjectByCode[code];
      return { code, name: s?.name ?? code, slug: subjectSlug(code), year: s?.year ?? 0, topics: mods.length };
    })
    .sort((a, b) => a.year - b.year || a.code.localeCompare(b.code));

  const byYear = subjects.reduce<Record<number, typeof subjects>>((acc, s) => {
    (acc[s.year] ??= []).push(s);
    return acc;
  }, {});

  return (
    <main className="mx-auto max-w-4xl px-5 py-8">
      <header className="mb-8">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">Flashcards</h1>
        <p className="mt-2 max-w-2xl text-sm text-slate-500 dark:text-slate-400">
          Active-recall cards built from your modules — high-yield points, exam traps, findings and mnemonics. Pick a
          block, or open any module and hit <span className="font-semibold text-slate-700 dark:text-slate-200">🗂️ Cards</span>.
          Reveal, grade yourself, and keep your streak.
        </p>
      </header>

      {Object.entries(byYear)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([year, subs]) => (
          <section key={year} className="mb-8">
            <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              {Number(year) > 0 ? `Year ${year}` : 'Other'}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {subs.map((s) => (
                <Link
                  key={s.code}
                  href={`/flashcards/block/${s.slug}`}
                  className="clay-node clay-surface group flex flex-col gap-1 p-4 transition hover:-translate-y-0.5"
                >
                  <div className="flex items-center gap-2">
                    <span className="clay-pill px-2 py-0.5 text-[11px] font-bold text-[#1e5bd6] dark:text-[#7AA0FF]">{s.code}</span>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                      {s.topics} topics
                    </span>
                  </div>
                  <div className="text-sm font-bold text-slate-900 group-hover:text-[#1e5bd6] dark:text-white dark:group-hover:text-[#7AA0FF]">
                    {s.name}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
