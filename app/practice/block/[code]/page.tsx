import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lecturesBySubject, subjectBySlug, subjectSlug, lectureSetSlug } from '../../../../content';
import { getModuleBank } from '../../../../lib/questions/bank';

export function generateStaticParams() {
  return Object.keys(lecturesBySubject).map((code) => ({ code: subjectSlug(code) }));
}

export function generateMetadata({ params }: { params: { code: string } }) {
  const s = subjectBySlug[params.code];
  return { title: s ? `Practice: ${s.code} — WilliamsHub` : 'Practice — WilliamsHub' };
}

function lectureNo(source: string): number {
  const m = source.match(/^L(\d+)/i);
  return m ? parseInt(m[1], 10) : 999;
}

export default function BlockPracticeLauncher({ params }: { params: { code: string } }) {
  const subject = subjectBySlug[params.code];
  if (!subject) notFound();

  // Group the block's modules into their lectures (source), with question counts.
  const bySource = new Map<string, { items: { id: string }[]; count: number }>();
  for (const m of lecturesBySubject[subject.code] ?? []) {
    const entry = bySource.get(m.source) ?? { items: [], count: 0 };
    entry.items.push(m);
    entry.count += getModuleBank(m.id).length;
    bySource.set(m.source, entry);
  }
  const lectures = [...bySource.entries()]
    .map(([source, e]) => ({ source, slug: lectureSetSlug(source), moduleCount: e.items.length, count: e.count, no: lectureNo(source) }))
    .sort((a, b) => a.no - b.no);
  const total = lectures.reduce((n, l) => n + l.count, 0);

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
          {total.toLocaleString()} question{total === 1 ? '' : 's'} across {lectures.length} lecture
          {lectures.length === 1 ? '' : 's'}. Pick a lecture, or practise a mixed set from the whole block.
        </p>
      </header>

      <Link
        href={`/practice/block/${params.code}/all`}
        className="clay clay-surface mb-6 flex items-center justify-between gap-3 p-4 transition hover:-translate-y-0.5"
      >
        <span className="min-w-0">
          <span className="text-xs font-bold uppercase tracking-wide text-[#1e5bd6] dark:text-[#7AA0FF]">
            Mixed — whole block
          </span>
          <span className="mt-0.5 block text-sm font-bold text-slate-900 dark:text-white">
            20 random from all {lectures.length} lectures
          </span>
        </span>
        <span className="shrink-0 text-[11px] font-semibold text-slate-400">{total.toLocaleString()} →</span>
      </Link>

      <h2 className="mb-3 text-xs font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">By lecture</h2>
      <div className="space-y-2">
        {lectures.map((l) => (
          <Link
            key={l.slug}
            href={`/practice/lecture/${l.slug}`}
            className="clay-node clay-surface flex items-center justify-between gap-3 p-4 transition hover:-translate-y-0.5"
          >
            <span className="min-w-0">
              <span className="block truncate text-sm font-bold text-slate-900 dark:text-white">{l.source}</span>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {l.moduleCount} module{l.moduleCount === 1 ? '' : 's'}
              </span>
            </span>
            <span className="shrink-0 text-[11px] font-semibold text-slate-400">{l.count.toLocaleString()} Q →</span>
          </Link>
        ))}
      </div>

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
