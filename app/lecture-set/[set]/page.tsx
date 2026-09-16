import Link from 'next/link';
import type { CSSProperties } from 'react';
import { notFound, permanentRedirect } from 'next/navigation';
import { lectureSets, lectureSetBySlug, lectureSetRedirects, subjectOfSource, subjectSlug, subjectByCode, referenceFrameworkByCode } from '../../../content';
import LectureBody from '../../../components/LectureBody';
import ActiveIntegrationPanel from '../../../components/ActiveIntegrationPanel';
import ConceptModeController from '../../../components/concept/ConceptModeController';
import { onePagerForModule } from '../../../lib/concept/onepagerForModule';
import { lectureTheme } from '../../../lib/theme';

export function generateStaticParams() {
  return lectureSets.map((s) => ({ set: s.slug }));
}

export function generateMetadata({ params }: { params: { set: string } }) {
  const s = lectureSetBySlug[lectureSetRedirects[params.set] ?? params.set];
  return { title: s ? `${s.source} — WilliamsHub` : 'WilliamsHub' };
}

export default function LectureSetPage({ params }: { params: { set: string } }) {
  const redirect = lectureSetRedirects[params.set];
  if (redirect) permanentRedirect(`/lecture-set/${redirect}`);
  const set = lectureSetBySlug[params.set];
  if (!set) notFound();

  const subjectCode = subjectOfSource[set.source];
  const subject = subjectCode ? subjectByCode[subjectCode] : undefined;
  const framework = subjectCode ? referenceFrameworkByCode[subjectCode] : undefined;
  const theme = lectureTheme(set.source);

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <nav
        aria-label="Breadcrumb"
        className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-slate-400 dark:text-slate-500"
      >
        <Link href="/" className="transition hover:text-slate-700 dark:hover:text-slate-200">
          All blocks
        </Link>
        {subjectCode ? (
          <>
            <span aria-hidden className="text-slate-300 dark:text-slate-600">
              ›
            </span>
            <Link
              href={`/subject/${subjectSlug(subjectCode)}`}
              className="font-semibold text-[#1e5bd6] transition hover:underline dark:text-[#7AA0FF]"
            >
              {subjectCode}
              {subject?.name ? ` — ${subject.name}` : ''}
            </Link>
            {subject?.year ? (
              <span className="clay-pill px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-300">
                {subject.yearLabel}
              </span>
            ) : null}
          </>
        ) : null}
      </nav>

      {/* Header */}
      <header className="mb-6 mt-4" data-reveal>
        <div className={`mb-4 h-1.5 w-full rounded-full bg-gradient-to-r ${theme.grad}`} />
        <div className="flex items-center gap-2.5">
          <span className={`h-3.5 w-3.5 rounded-full ${theme.dot}`} />
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">{set.source}</h1>
          <span className={`clay-pill px-2.5 py-0.5 text-xs font-semibold ${theme.text}`}>{set.items.length} topics</span>
        </div>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          All {subject?.yearLabel === 'Reference' ? 'chapter' : 'lecture'} study modules on one scroll. Jump to a topic below.
        </p>
        {framework ? <p className="mt-2 text-xs leading-5 text-[var(--muted)]">Original study notes aligned to {framework.source}. Selected core concepts; read alongside the source chapter.</p> : null}

        <Link
          href={`/practice/lecture/${params.set}`}
          className="clay-pill mt-3 inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#1e5bd6] transition active:translate-y-px dark:text-[#7AA0FF]"
        >
          <span aria-hidden>📝</span> Practise this {subject?.yearLabel === 'Reference' ? 'chapter' : 'lecture'}
        </Link>

        {/* Jump nav */}
        <nav className="mt-4 flex flex-wrap gap-2">
          {set.items.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className={`clay-pill px-3 py-1.5 text-xs font-semibold transition active:translate-y-px ${theme.text}`}
            >
              {l.title}
            </a>
          ))}
        </nav>
      </header>

      {/* Each topic in full */}
      <div className="space-y-12">
        {set.items.map((l, i) => (
          <section key={l.id} id={l.id} className="scroll-mt-24" data-reveal style={{ '--reveal-i': i } as CSSProperties}>
            <div className={`mb-3 h-1 w-16 rounded-full bg-gradient-to-r ${theme.grad}`} />
            <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
              <h2 className="flex items-center gap-2 text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                <span className={`h-3 w-3 rounded-full ${theme.dot}`} />
                {l.title}
              </h2>
              <Link
                href={`/lecture/${l.id}`}
                className={`clay-pill px-3 py-1.5 text-xs font-bold transition active:translate-y-px ${theme.text}`}
              >
                Open full module →
              </Link>
            </div>
            <ConceptModeController lecture={l} onePager={onePagerForModule(l)}>
              <LectureBody lecture={l} />
            </ConceptModeController>
            <ActiveIntegrationPanel moduleId={l.id} />
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500" data-reveal>
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
