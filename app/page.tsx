import Link from 'next/link';
import { lectures, lectureById, lecturesBySubject, curriculum, subjectSlug } from '../content';
import CurriculumBrowser, { type YearData } from '../components/CurriculumBrowser';

export default function Home() {
  const years: YearData[] = curriculum.map((y) => {
    const subjects = y.subjects.map((s) => {
      const mods = lecturesBySubject[s.code] ?? [];
      return {
        code: s.code,
        name: s.name,
        // distinct lectures (L1, L2, …), not module count
        count: new Set(mods.map((l) => l.source)).size,
        modules: mods.length,
        slug: subjectSlug(s.code),
      };
    });
    return {
      year: y.year,
      label: y.label,
      note: y.note,
      hasContent: subjects.some((s) => s.count > 0),
      subjects,
    };
  });
  const defaultYear = years.find((y) => y.hasContent)?.year ?? years[0].year;

  const first = lectures[0];
  const featured = lectureById['tetralogy-of-fallot'] ?? lectures[0];
  const trapCount = lectures.reduce((n, l) => n + l.traps.length, 0);

  return (
    <main className="mx-auto max-w-6xl px-5 py-8">
      {/* Hero */}
      <section className="clay mb-10 overflow-hidden p-0">
        <div className="h-1.5 w-full bg-[linear-gradient(90deg,#fb7185,#f59e0b,#10b981,#38bdf8,#a78bfa,#f472b6)]" />
        <div className="grid gap-8 p-7 lg:grid-cols-[1.4fr_1fr] lg:p-9">
          {/* Left */}
          <div>
            <span className="clay-pill inline-flex items-center gap-2 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Interactive lecture atlas
            </span>
            <h1 className="mt-4 text-4xl font-black leading-[1.05] tracking-tight text-slate-900 dark:text-white sm:text-5xl">
              Own the lecture.
              <br />
              <span className="text-rose-400">Beat the exam trap.</span>
            </h1>
            <p className="mt-4 max-w-xl text-slate-600 dark:text-slate-300">
              High-yield, mechanism-driven pages built from your MedCMU lectures — organized by
              year and block. Recall first, then read the mechanism, the exam findings, and the
              trap that loses marks. Supplements your OnePagers — it doesn&apos;t replace them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#browse"
                className="clay-pill px-5 py-2.5 text-sm font-bold text-slate-900 transition active:translate-y-px dark:text-white"
              >
                Choose a block
              </a>
              <Link
                href={`/lecture/${first.id}`}
                className="clay-pill px-5 py-2.5 text-sm font-bold text-emerald-600 transition active:translate-y-px dark:text-emerald-400"
              >
                Run primer
              </Link>
            </div>
            {/* Year legend */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              {years.map((y) => (
                <span key={y.year} className="flex items-center gap-1.5">
                  <span
                    className={`h-2 w-2 rounded-full ${
                      y.hasContent ? 'bg-emerald-500' : 'bg-slate-300 dark:bg-slate-600'
                    }`}
                  />
                  {y.label}
                  {!y.hasContent && y.note ? ` · ${y.note}` : ''}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Lecture Console */}
          <div className="clay-inset clay-surface p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Lecture console
              </span>
              <span className="clay-pill px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-300">
                HCVS-2 · Y3
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
              <span aria-hidden>❤</span> Featured module
            </div>
            <Link href={`/lecture/${featured.id}`} className="mt-1 block">
              <div className="text-lg font-black text-slate-900 dark:text-white">
                {featured.title}
              </div>
            </Link>
            <div className="clay mt-3 p-3">
              <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400">
                {featured.mechanism.title}
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-1.5">
                {featured.mechanism.steps.slice(0, 3).map((s, i) => (
                  <span key={s.id} className="flex items-center gap-1.5">
                    <span className="clay-node bg-emerald-100 px-2 py-1 text-xs font-medium text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-200">
                      {s.label}
                    </span>
                    {i < 2 && <span className="text-slate-400">→</span>}
                  </span>
                ))}
              </div>
            </div>
            <Link
              href={`/lecture/${featured.id}`}
              className="clay-pill mt-4 inline-block px-4 py-2 text-sm font-bold text-slate-900 transition active:translate-y-px dark:text-white"
            >
              Open module
            </Link>
            <div className="mt-4 grid grid-cols-3 gap-2">
              {[
                { v: Object.keys(lecturesBySubject).length, l: 'Blocks' },
                { v: lectures.length, l: 'Modules' },
                { v: trapCount, l: 'Traps' },
              ].map((s) => (
                <div key={s.l} className="clay-node clay-surface px-2 py-3 text-center">
                  <div className="text-2xl font-black text-slate-900 dark:text-white">{s.v}</div>
                  <div className="text-[10px] uppercase tracking-wide text-slate-500 dark:text-slate-400">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Curriculum browser */}
      <section id="browse" className="scroll-mt-20">
        <h2 className="mb-1 text-xl font-black tracking-tight text-slate-900 dark:text-white">
          Choose your block
        </h2>
        <p className="mb-5 text-sm text-slate-500 dark:text-slate-400">
          Pick a year, then a subject block. Blocks with a green dot have lectures ready.
        </p>
        <CurriculumBrowser years={years} defaultYear={defaultYear} />
      </section>

      <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite · built from MedCMU lectures
      </footer>
    </main>
  );
}
