import Link from 'next/link';
import type { LearningPathView, PathStep } from '../lib/integrations/learningPath';

// "The racing line" — the suggested study route rendered as a track of nodes:
// foundations on the left, this module (livery card) in the middle, applications
// on the right. Server component, fully static.

function SubjectChip({ code }: { code: string | null }) {
  if (!code) return null;
  return (
    <span className="mt-1 inline-block rounded bg-black/5 px-1 py-0.5 text-[9px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
      {code}
    </span>
  );
}

function Node({ s, role }: { s: PathStep; role: 'before' | 'current' | 'after' }) {
  if (role === 'current') {
    return (
      <div className="clay-node livery-edge min-w-[9.5rem] max-w-[12rem] overflow-hidden bg-[linear-gradient(135deg,#2e5bff_0%,#0a1a7a_100%)] px-3 py-2 text-center text-white">
        <div className="text-[8px] font-bold uppercase tracking-[0.2em] text-white/70">You are here</div>
        <div className="mt-0.5 text-xs font-black leading-tight">{s.title}</div>
        <SubjectChip code={s.subjectCode} />
      </div>
    );
  }
  return (
    <Link
      href={`/lecture/${s.id}`}
      className="clay-node clay-surface block min-w-[9rem] max-w-[12rem] px-3 py-2 text-center transition hover:-translate-y-0.5"
    >
      <div className={`text-[8px] font-bold uppercase tracking-[0.18em] ${role === 'before' ? 'text-indigo-500 dark:text-indigo-300' : 'text-emerald-500 dark:text-emerald-300'}`}>
        {role === 'before' ? 'Review first' : 'Then'}
      </div>
      <div className="mt-0.5 text-xs font-bold leading-tight text-slate-800 dark:text-slate-100">{s.title}</div>
      <SubjectChip code={s.subjectCode} />
    </Link>
  );
}

export default function LearningPath({ view }: { view: LearningPathView }) {
  if (!view.hasPath) return null;

  const nodes: { s: PathStep; role: 'before' | 'current' | 'after' }[] = [
    ...view.before.map((s) => ({ s, role: 'before' as const })),
    { s: view.current, role: 'current' as const },
    ...view.after.map((s) => ({ s, role: 'after' as const })),
  ];

  return (
    <section className="clay clay-surface mt-5 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-[#2e5bff] to-[#e4002b]" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">The racing line</h3>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
          suggested study route
        </span>
      </div>

      <ol className="flex flex-col items-stretch gap-2 sm:flex-row sm:items-center sm:overflow-x-auto sm:pb-2">
        {nodes.map((n, i) => (
          <li key={`${n.role}-${n.s.id}`} className="flex items-center gap-2 sm:shrink-0">
            <Node s={n.s} role={n.role} />
            {i < nodes.length - 1 ? (
              <span aria-hidden className="mx-auto shrink-0 text-slate-300 dark:text-slate-600">
                <span className="hidden sm:inline">→</span>
                <span className="block text-center sm:hidden">↓</span>
              </span>
            ) : null}
          </li>
        ))}
      </ol>
    </section>
  );
}
