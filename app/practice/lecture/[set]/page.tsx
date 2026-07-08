import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lectureSets, lectureSetBySlug, subjectOfSource, subjectSlug } from '../../../../content';
import { getModuleBank } from '../../../../lib/questions/bank';
import PracticeSession from '../../../../components/PracticeSession';

export function generateStaticParams() {
  return lectureSets.map((s) => ({ set: s.slug }));
}

export function generateMetadata({ params }: { params: { set: string } }) {
  const s = lectureSetBySlug[params.set];
  return { title: s ? `Practice: ${s.source} — WilliamsHub` : 'Practice — WilliamsHub' };
}

export default function LecturePracticePage({ params }: { params: { set: string } }) {
  const set = lectureSetBySlug[params.set];
  if (!set) notFound();

  const questions = set.items.flatMap((m) => getModuleBank(m.id));
  const subjectCode = subjectOfSource[set.source] ?? 'unknown';
  const subjectOf = Object.fromEntries(set.items.map((m) => [m.id, subjectCode]));
  const backHref = subjectCode !== 'unknown' ? `/practice/block/${subjectSlug(subjectCode)}` : '/practice';

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <Link
        href={backHref}
        className="text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      >
        ← {subjectCode !== 'unknown' ? subjectCode : 'Practice'}
      </Link>

      <header className="mb-6 mt-4">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <div className="text-xs font-bold uppercase tracking-wide text-[#1e5bd6] dark:text-[#7AA0FF]">Practice · lecture</div>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{set.source}</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {questions.length.toLocaleString()} question{questions.length === 1 ? '' : 's'} across {set.items.length} topic
          {set.items.length === 1 ? '' : 's'} in this lecture — 20 random per session.
        </p>
      </header>

      <PracticeSession questions={questions} title={set.source} subjectOf={subjectOf} />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
