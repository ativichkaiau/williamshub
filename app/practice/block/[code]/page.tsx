import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lecturesBySubject, subjectBySlug, subjectSlug } from '../../../../content';
import { getModuleBank } from '../../../../lib/questions/bank';
import PracticeSession from '../../../../components/PracticeSession';

export function generateStaticParams() {
  return Object.keys(lecturesBySubject).map((code) => ({ code: subjectSlug(code) }));
}

export function generateMetadata({ params }: { params: { code: string } }) {
  const s = subjectBySlug[params.code];
  return { title: s ? `Practice: ${s.code} — WilliamsHub` : 'Practice — WilliamsHub' };
}

export default function BlockPracticePage({ params }: { params: { code: string } }) {
  const subject = subjectBySlug[params.code];
  if (!subject) notFound();

  const modules = lecturesBySubject[subject.code] ?? [];
  // A pool sampled across the whole block; the session shuffles + caps to 20.
  const questions = modules.flatMap((m) => getModuleBank(m.id));
  const subjectOf = Object.fromEntries(modules.map((m) => [m.id, subject.code]));

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <Link
        href="/practice"
        className="text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      >
        ← Practice
      </Link>

      <header className="mb-6 mt-4">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-[#1e5bd6] dark:text-[#7AA0FF]">
          <span>Practice · block</span>
          <span className="clay-pill px-2 py-0.5">{subject.code}</span>
        </div>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{subject.name}</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          A mixed set drawn from {questions.length.toLocaleString()} questions across {modules.length} modules — each
          session serves 20 random questions spanning modules, traps and cross-links.
        </p>
      </header>

      <PracticeSession questions={questions} title={subject.name} subjectOf={subjectOf} />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
