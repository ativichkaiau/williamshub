import Link from 'next/link';
import { lecturesBySubject, subjectByCode, subjectSlug } from '../../content';
import PracticeLauncher from '../../components/PracticeLauncher';
import { getModuleBank } from '../../lib/questions/bank';
import LiverySlashes from '../../components/LiverySlashes';

export const metadata = { title: 'Practice — WilliamsHub' };

export default function PracticePage() {
  const blocks = Object.entries(lecturesBySubject)
    .map(([code, mods]) => {
      const questionCount = mods.reduce((sum, module) => sum + getModuleBank(module.id).length, 0);
      return {
        code,
        name: subjectByCode[code]?.name ?? code,
        slug: subjectSlug(code),
        year: subjectByCode[code]?.year ?? 0,
        moduleCount: mods.length,
        questionCount,
      };
    })
    .sort((a, b) => a.year - b.year || a.code.localeCompare(b.code));
  const totalQuestions = blocks.reduce((sum, block) => sum + block.questionCount, 0);
  const totalModules = blocks.reduce((sum, block) => sum + block.moduleCount, 0);

  return (
    <main className="mx-auto max-w-4xl px-5 py-8">
      <header className="mb-6">
        <div className="flex items-center gap-3">
          <LiverySlashes />
          <span className="eyebrow">Question bank</span>
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-[var(--ink)]">Practice</h1>
        <p className="mt-2 text-sm leading-6 text-[var(--muted)]">
          Drill the full {totalQuestions.toLocaleString()}-question bank built from {totalModules.toLocaleString()} modules,
          traps and Active-Integration links. Pick a block below; each run serves 20 random questions from that block’s
          full pool.
        </p>
      </header>

      <PracticeLauncher />

      <section className="clay clay-surface mb-8 grid gap-4 p-5 sm:grid-cols-3">
        <div>
          <div className="eyebrow">Total bank</div>
          <div className="mt-1.5 text-2xl font-semibold tabular-nums text-[var(--ink)]">
            {totalQuestions.toLocaleString()}
          </div>
          <div className="text-xs text-[var(--muted)]">questions live</div>
        </div>
        <div>
          <div className="eyebrow">Coverage</div>
          <div className="mt-1.5 text-2xl font-semibold tabular-nums text-[var(--ink)]">
            {totalModules.toLocaleString()}
          </div>
          <div className="text-xs text-[var(--muted)]">modules with practice</div>
        </div>
        <div>
          <div className="eyebrow">Session size</div>
          <div className="mt-1.5 text-2xl font-semibold tabular-nums text-[var(--ink)]">20</div>
          <div className="text-xs text-[var(--muted)]">random questions per run</div>
        </div>
      </section>

      <section>
        <h2 className="mb-3 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
          Practise a block
        </h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <Link
              key={b.code}
              href={`/practice/block/${b.slug}`}
              className="clay group flex items-center justify-between gap-2 p-4 transition hover:border-[var(--accent)]"
            >
              <span className="min-w-0">
                <span className="font-mono text-[11px] font-medium tracking-wide text-[var(--accent)]">{b.code}</span>
                <span className="mt-1.5 block truncate text-[15px] font-medium text-[var(--ink)] transition group-hover:text-[var(--accent)]">
                  {b.name}
                </span>
                <span className="mt-1 block text-xs text-[var(--muted)]">
                  {b.moduleCount} module{b.moduleCount === 1 ? '' : 's'}
                </span>
              </span>
              <span className="shrink-0 text-right font-mono text-[11px] font-medium tabular-nums text-[var(--muted)]">
                {b.questionCount.toLocaleString()}
                <br />
                questions
              </span>
            </Link>
          ))}
        </div>
      </section>

      <footer className="mt-12 text-center text-xs text-[var(--muted)]">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
