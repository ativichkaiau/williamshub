import Link from 'next/link';
import { lecturesBySubject, subjectByCode, subjectSlug } from '../../content';
import LiverySlashes from '../../components/LiverySlashes';
import HubIcon from '../../components/HubIcon';

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
        <div className="flex items-center gap-3">
          <LiverySlashes />
          <span className="eyebrow">Active recall</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">Flashcards</h1>
        <p className="mt-2 max-w-2xl text-sm leading-6 text-[var(--muted)]">
          Active-recall cards built from your modules — high-yield points, exam traps, findings and mnemonics. Pick a
          block, or open any module and hit{' '}
          <span className="inline-flex items-center gap-1 font-medium text-[var(--ink)]"><HubIcon name="cards" className="inline-block" /> Cards</span>.
          Reveal, grade yourself, and keep your streak.
        </p>
      </header>

      {Object.entries(byYear)
        .sort(([a], [b]) => Number(a) - Number(b))
        .map(([year, subs]) => (
          <section key={year} className="mb-8">
            <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
              {Number(year) > 0 ? `Year ${year}` : 'Other'}
            </h2>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {subs.map((s) => (
                <Link
                  key={s.code}
                  href={`/flashcards/block/${s.slug}`}
                  className="clay-node clay-surface group flex flex-col gap-1.5 p-4 transition hover:border-[var(--accent)]"
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[11px] font-medium tracking-wide text-[var(--accent)]">{s.code}</span>
                    <span className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">
                      {s.topics} topics
                    </span>
                  </div>
                  <div className="text-[15px] font-medium text-[var(--ink)] transition group-hover:text-[var(--accent)]">
                    {s.name}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        ))}

      <footer className="mt-10 text-center text-xs text-[var(--muted)]">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
