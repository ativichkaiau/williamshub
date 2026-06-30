import Link from 'next/link';
import { lectures, lectureById, lecturesBySource, lectureSetSlug } from '../content';
import type { Lecture } from '../lib/types';

const systemDot: Record<string, string> = {
  cardiovascular: 'bg-rose-500',
  respiratory: 'bg-sky-500',
  renal: 'bg-blue-500',
  endocrine: 'bg-violet-500',
  neuro: 'bg-amber-500',
  gi: 'bg-emerald-500',
};

// Per-lecture accent dot (L1 → L4).
function lectureDot(source: string): string {
  if (source.startsWith('L1')) return 'bg-rose-500';
  if (source.startsWith('L2')) return 'bg-sky-500';
  if (source.startsWith('L3')) return 'bg-violet-500';
  if (source.startsWith('L4')) return 'bg-amber-500';
  return 'bg-slate-400';
}

function LectureCard({ l }: { l: Lecture }) {
  return (
    <Link
      href={`/lecture/${l.id}`}
      className="clay group flex flex-col p-5 transition hover:-translate-y-1"
    >
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${systemDot[l.system] ?? 'bg-slate-400'}`} />
        <span className="text-base font-bold text-slate-900 transition group-hover:text-rose-500 dark:text-white">
          {l.title}
        </span>
      </div>
      <p className="mt-1.5 line-clamp-2 text-sm text-slate-500 dark:text-slate-400">
        {l.highYield[0]?.replace(/\*\*/g, '')}
      </p>
      <div className="mt-3 flex flex-wrap gap-1.5">
        {l.tags
          .filter((t) => t.kind === 'mechanism' || t.kind === 'exam')
          .slice(0, 2)
          .map((t) => (
            <span
              key={t.label}
              className="rounded-full bg-black/5 px-2 py-0.5 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300"
            >
              {t.label}
            </span>
          ))}
      </div>
    </Link>
  );
}

export default function Home() {
  const sources = Object.entries(lecturesBySource).sort(([a], [b]) => a.localeCompare(b));
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
              High-yield, mechanism-driven pages built from your MedCMU lectures. Recall first,
              then read the mechanism, the exam findings, and the trap that loses marks.
              Supplements your OnePagers — it doesn&apos;t replace them.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#catalog"
                className="clay-pill px-5 py-2.5 text-sm font-bold text-slate-900 transition active:translate-y-px dark:text-white"
              >
                Start studying
              </a>
              <Link
                href={`/lecture/${first.id}`}
                className="clay-pill px-5 py-2.5 text-sm font-bold text-emerald-600 transition active:translate-y-px dark:text-emerald-400"
              >
                Run primer
              </Link>
            </div>
            {/* Lecture legend */}
            <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-rose-500" />L1 Arrhythmias</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-sky-500" />L2 ECG</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-violet-500" />L3 Congenital</span>
              <span className="flex items-center gap-1.5"><span className="h-2 w-2 rounded-full bg-amber-500" />L4 Drugs</span>
            </div>
          </div>

          {/* Right: Lecture Console */}
          <div className="clay-inset clay-surface p-5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                Lecture console
              </span>
              <span className="clay-pill px-2.5 py-0.5 text-[11px] font-semibold text-slate-500 dark:text-slate-300">
                M-8
              </span>
            </div>
            <div className="mt-3 flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-rose-400">
              <span aria-hidden>❤</span> Featured module
            </div>
            <Link href={`/lecture/${featured.id}`} className="mt-1 block">
              <div className="text-lg font-black text-slate-900 dark:text-white">{featured.title}</div>
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
                { v: sources.length, l: 'Lectures' },
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

      {/* Catalog */}
      <div id="catalog" className="scroll-mt-20">
        {sources.map(([source, items]) => (
          <section key={source} className="mb-9">
            <Link
              href={`/lecture-set/${lectureSetSlug(source)}`}
              className="group mb-4 flex items-center gap-2"
            >
              <span className={`h-3 w-3 rounded-full ${lectureDot(source)}`} />
              <h2 className="text-base font-black tracking-tight text-slate-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                {source}
              </h2>
              <span className="clay-pill px-2.5 py-0.5 text-xs font-semibold text-slate-500 dark:text-slate-300">
                {items.length}
              </span>
              <span className="text-xs font-semibold text-emerald-600 opacity-0 transition group-hover:opacity-100 dark:text-emerald-400">
                View whole lecture →
              </span>
            </Link>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((l) => (
                <LectureCard key={l.id} l={l} />
              ))}
            </div>
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite · built from MedCMU lectures L1–L4
      </footer>
    </main>
  );
}
