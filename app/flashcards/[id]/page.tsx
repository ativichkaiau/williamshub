import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lectures, lectureById } from '../../../content';
import { buildFlashcards } from '../../../lib/flashcards/build';
import FlashcardSession from '../../../components/FlashcardSession';

export function generateStaticParams() {
  return lectures.map((l) => ({ id: l.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  return { title: l ? `Flashcards: ${l.title} — WilliamsHub` : 'Flashcards — WilliamsHub' };
}

export default function ModuleFlashcardsPage({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  if (!l) notFound();

  const cards = buildFlashcards([l]);

  return (
    <main className="mx-auto max-w-2xl px-5 py-8">
      <Link
        href={`/lecture/${l.id}`}
        className="text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      >
        ← {l.title}
      </Link>

      <header className="mb-6 mt-4">
        <div className="livery-stripe mb-4 h-1.5 w-full rounded-full" />
        <div className="text-xs font-bold uppercase tracking-wide text-[#1e5bd6] dark:text-[#7AA0FF]">Flashcards</div>
        <h1 className="mt-1 text-3xl font-black tracking-tight text-slate-900 dark:text-white">{l.title}</h1>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          {cards.length} active-recall card{cards.length === 1 ? '' : 's'} built from this module’s high-yield points,
          traps, findings and mnemonics. Reveal, then grade yourself.
        </p>
      </header>

      <FlashcardSession cards={cards} title={l.title} />

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
