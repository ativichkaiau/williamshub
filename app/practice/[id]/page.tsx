import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lectures, lectureById, subjectOfSource } from '../../../content';
import { getModuleBank } from '../../../lib/questions/bank';
import PracticeSession from '../../../components/PracticeSession';

export function generateStaticParams() {
  return lectures.map((l) => ({ id: l.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  return { title: l ? `Practice: ${l.title} — WilliamsHub` : 'Practice — WilliamsHub' };
}

export default function ModulePracticePage({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  if (!l) notFound();

  const questions = getModuleBank(l.id);
  const subjectOf = { [l.id]: subjectOfSource[l.source] ?? 'unknown' };

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <Link
        href={`/lecture/${l.id}`}
        className="text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      >
        ← {l.title}
      </Link>

      <header className="mb-6 mt-4">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <div className="text-xs font-bold uppercase tracking-wide text-[#1e5bd6] dark:text-[#7AA0FF]">Practice</div>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{l.title}</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {questions.length} question{questions.length === 1 ? '' : 's'} from this module’s content, traps and links —
          answer to score; misses can go to your Repair queue.
        </p>
      </header>

      <PracticeSession questions={questions} title={l.title} subjectOf={subjectOf} />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
