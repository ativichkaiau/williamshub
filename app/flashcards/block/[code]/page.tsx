import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lecturesBySubject, subjectBySlug, subjectSlug } from '../../../../content';
import { buildFlashcards } from '../../../../lib/flashcards/build';
import FlashcardSession from '../../../../components/FlashcardSession';

export function generateStaticParams() {
  return Object.keys(lecturesBySubject).map((code) => ({ code: subjectSlug(code) }));
}

export function generateMetadata({ params }: { params: { code: string } }) {
  const s = subjectBySlug[params.code];
  return { title: s ? `Flashcards: ${s.code} — WilliamsHub` : 'Flashcards — WilliamsHub' };
}

// Keep block decks focused: a couple of the highest-value cards per topic.
const PER_MODULE = 2;

export default function BlockFlashcardsPage({ params }: { params: { code: string } }) {
  const subject = subjectBySlug[params.code];
  if (!subject) notFound();

  const modules = lecturesBySubject[subject.code] ?? [];
  if (modules.length === 0) notFound();

  const cards = buildFlashcards(modules, PER_MODULE);

  return (
    <main className="mx-auto max-w-2xl px-5 py-8">
      <Link
        href={`/subject/${params.code}`}
        className="text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      >
        ← {subject.code} — {subject.name}
      </Link>

      <header className="mb-6 mt-4">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <div className="text-xs font-bold uppercase tracking-wide text-[#1e5bd6] dark:text-[#7AA0FF]">Block flashcards</div>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{subject.name}</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {cards.length} cards across {modules.length} topics — up to {PER_MODULE} high-value cards each. Shuffled every run.
        </p>
      </header>

      <FlashcardSession cards={cards} title={`${subject.code} — ${subject.name}`} />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
