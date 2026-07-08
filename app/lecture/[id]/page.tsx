import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lectures, lectureById, lectureSetSlug, subjectOfSource, subjectSlug, subjectByCode } from '../../../content';
import LectureBody from '../../../components/LectureBody';
import ActiveIntegrationPanel from '../../../components/ActiveIntegrationPanel';
import ConceptModeController from '../../../components/concept/ConceptModeController';
import BookmarkButton from '../../../components/BookmarkButton';
import ModuleNotes from '../../../components/ModuleNotes';
import VisitTracker from '../../../components/VisitTracker';
import LearningPath from '../../../components/LearningPath';
import { onePagerForModule } from '../../../lib/concept/onepagerForModule';
import { buildLearningPath } from '../../../lib/integrations/learningPath';
import { lectureTheme } from '../../../lib/theme';

export function generateStaticParams() {
  return lectures.map((l) => ({ id: l.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  return { title: l ? `${l.title} — WilliamsHub` : 'WilliamsHub' };
}

export default function LecturePage({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  if (!l) notFound();

  const subjectCode = subjectOfSource[l.source];
  const subject = subjectCode ? subjectByCode[subjectCode] : undefined;
  const theme = lectureTheme(l.source);

  const onePager = onePagerForModule(l);
  const learningPath = buildLearningPath(l.id);

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <VisitTracker moduleId={l.id} />
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
                Year {subject.year}
              </span>
            ) : null}
          </>
        ) : null}
      </nav>

      <header className="mb-6 mt-4">
        <div className={`mb-4 h-1.5 w-full rounded-full bg-gradient-to-r ${theme.grad}`} />
        <Link
          href={`/lecture-set/${lectureSetSlug(l.source)}`}
          className={`inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide transition hover:opacity-80 ${theme.text}`}
        >
          <span className={`h-2 w-2 rounded-full ${theme.dot}`} />
          {l.source}
        </Link>
        <div className="mt-2 flex items-start justify-between gap-3">
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">{l.title}</h1>
          <div className="flex shrink-0 items-center gap-2">
            <Link
              href={`/practice/${l.id}`}
              className="clay-pill inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#1e5bd6] transition active:translate-y-px dark:text-[#7AA0FF]"
            >
              <span aria-hidden>📝</span> Practice
            </Link>
            <BookmarkButton moduleId={l.id} />
          </div>
        </div>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {l.tags.map((t) => (
            <span key={`${t.kind}-${t.label}`} className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${theme.chipBg}`}>
              {t.label}
            </span>
          ))}
        </div>
      </header>

      <ConceptModeController lecture={l} onePager={onePager}>
        <LectureBody lecture={l} />
      </ConceptModeController>

      <LearningPath view={learningPath} />

      <ActiveIntegrationPanel moduleId={l.id} />

      <ModuleNotes moduleId={l.id} />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
