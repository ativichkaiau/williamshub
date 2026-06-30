import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  lecturesBySubject,
  subjectBySlug,
  subjectSlug,
  lectureSetSlug,
} from '../../../content';
import type { Lecture } from '../../../lib/types';

export function generateStaticParams() {
  return Object.keys(lecturesBySubject).map((code) => ({ code: subjectSlug(code) }));
}

export function generateMetadata({ params }: { params: { code: string } }) {
  const s = subjectBySlug[params.code];
  return { title: s ? `${s.code} ${s.name} — WilliamsHub` : 'WilliamsHub' };
}

const systemDot: Record<string, string> = {
  cardiovascular: 'bg-rose-500',
  respiratory: 'bg-sky-500',
  renal: 'bg-blue-500',
  endocrine: 'bg-violet-500',
  neuro: 'bg-amber-500',
  gi: 'bg-emerald-500',
};

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

export default function SubjectPage({ params }: { params: { code: string } }) {
  const subject = subjectBySlug[params.code];
  if (!subject) notFound();

  const items = lecturesBySubject[subject.code] ?? [];
  if (items.length === 0) notFound();

  // Group this subject's lectures by source (L1 → L4).
  const groups = items.reduce<Record<string, Lecture[]>>((acc, l) => {
    (acc[l.source] ??= []).push(l);
    return acc;
  }, {});
  const sources = Object.entries(groups).sort(([a], [b]) => a.localeCompare(b));

  return (
    <main className="mx-auto max-w-5xl px-5 py-8">
      <Link
        href="/"
        className="text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      >
        ← All years &amp; blocks
      </Link>

      <header className="mb-8 mt-4">
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-emerald-600 dark:text-emerald-400">
          <span className="clay-pill px-2 py-0.5">{subject.code}</span>
          <span className="text-slate-400">Year {subject.year}</span>
        </div>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white sm:text-4xl">
          {subject.name}
        </h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {sources.length} lecture{sources.length === 1 ? '' : 's'} · {items.length} modules. Open a
          module, or view a whole lecture on one scroll.
        </p>
      </header>

      {sources.map(([source, lects]) => (
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
              {lects.length}
            </span>
            <span className="text-xs font-semibold text-emerald-600 opacity-0 transition group-hover:opacity-100 dark:text-emerald-400">
              View whole lecture →
            </span>
          </Link>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {lects.map((l) => (
              <LectureCard key={l.id} l={l} />
            ))}
          </div>
        </section>
      ))}

      <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
