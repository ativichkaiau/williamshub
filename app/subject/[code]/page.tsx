import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  lecturesBySubject,
  subjectBySlug,
  subjectSlug,
  lectureSetSlug,
  partOfSource,
} from '../../../content';
import { lectureTheme } from '../../../lib/theme';
import type { Lecture } from '../../../lib/types';

export function generateStaticParams() {
  return Object.keys(lecturesBySubject).map((code) => ({ code: subjectSlug(code) }));
}

export function generateMetadata({ params }: { params: { code: string } }) {
  const s = subjectBySlug[params.code];
  return { title: s ? `${s.code} ${s.name} — WilliamsHub` : 'WilliamsHub' };
}

function LectureCard({ l, theme }: { l: Lecture; theme: ReturnType<typeof lectureTheme> }) {
  // Each topic opens the whole-lecture format, scrolled to its section.
  return (
    <Link
      href={`/lecture-set/${lectureSetSlug(l.source)}#${l.id}`}
      className="clay group flex flex-col p-5 transition hover:-translate-y-1"
    >
      <div className="flex items-center gap-2">
        <span className={`h-2.5 w-2.5 rounded-full ${theme.dot}`} />
        <span className="text-base font-bold text-slate-900 transition dark:text-white">
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
            <span key={t.label} className={`rounded-full px-2 py-0.5 text-xs font-medium ${theme.chipBg}`}>
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

  // Group this subject's lectures by source (L1 → L9).
  const groups = items.reduce<Record<string, Lecture[]>>((acc, l) => {
    (acc[l.source] ??= []).push(l);
    return acc;
  }, {});
  const sources = Object.entries(groups).sort(([a], [b]) =>
    a.localeCompare(b, undefined, { numeric: true }),
  );

  // Group sources into "Parts" (e.g. HGA Part 1–5) while preserving order.
  // Subjects without any part mapping fall into a single undefined-part group
  // and render exactly as before (no headers).
  const partedGroups: { part: string | undefined; sources: typeof sources }[] = [];
  for (const entry of sources) {
    const part = partOfSource[entry[0]];
    const last = partedGroups[partedGroups.length - 1];
    if (last && last.part === part) last.sources.push(entry);
    else partedGroups.push({ part, sources: [entry] });
  }
  const hasParts = partedGroups.some((g) => g.part);

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
          {sources.length} lecture{sources.length === 1 ? '' : 's'} · {items.length} modules — each lecture
          opens as a whole-lecture scroll.
        </p>
      </header>

      {partedGroups.map((group) => (
        <div key={group.part ?? '_'}>
          {hasParts && group.part ? (
            <div className="mb-5 mt-2 flex items-center gap-3">
              <span className="clay-pill px-3 py-1 text-sm font-black tracking-tight text-slate-900 dark:text-white">
                {group.part}
              </span>
              <span className="h-px flex-1 bg-slate-200 dark:bg-white/10" />
            </div>
          ) : null}
          {group.sources.map(([source, lects]) => {
            const theme = lectureTheme(source);
            return (
              <section key={source} className="mb-9">
                <div className={`mb-3 h-1 w-12 rounded-full bg-gradient-to-r ${theme.grad}`} />
                <Link
                  href={`/lecture-set/${lectureSetSlug(source)}`}
                  className="group mb-4 flex items-center gap-2"
                >
                  <span className={`h-3 w-3 rounded-full ${theme.dot}`} />
                  <h2 className={`text-base font-black tracking-tight transition ${theme.text}`}>{source}</h2>
                  <span className={`clay-pill px-2.5 py-0.5 text-xs font-semibold ${theme.text}`}>{lects.length}</span>
                  <span className={`text-xs font-semibold opacity-0 transition group-hover:opacity-100 ${theme.text}`}>
                    View whole lecture →
                  </span>
                </Link>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {lects.map((l) => (
                    <LectureCard key={l.id} l={l} theme={theme} />
                  ))}
                </div>
              </section>
            );
          })}
        </div>
      ))}

      <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
