import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lectureSets, lectureSetBySlug } from '../../../content';
import MechanismChain from '../../../components/MechanismChain';
import { Rich } from '../../../components/Rich';

export function generateStaticParams() {
  return lectureSets.map((s) => ({ set: s.slug }));
}

export function generateMetadata({ params }: { params: { set: string } }) {
  const s = lectureSetBySlug[params.set];
  return { title: s ? `${s.source} — WilliamsHub` : 'WilliamsHub' };
}

function setDot(source: string): string {
  if (source.startsWith('L1')) return 'bg-rose-500';
  if (source.startsWith('L2')) return 'bg-sky-500';
  if (source.startsWith('L3')) return 'bg-violet-500';
  if (source.startsWith('L4')) return 'bg-amber-500';
  return 'bg-slate-400';
}

export default function LectureSetPage({ params }: { params: { set: string } }) {
  const set = lectureSetBySlug[params.set];
  if (!set) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <Link
        href="/"
        className="text-sm text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
      >
        ← All lectures
      </Link>

      {/* Header */}
      <header className="mb-6 mt-4">
        <div className="flex items-center gap-2.5">
          <span className={`h-3.5 w-3.5 rounded-full ${setDot(set.source)}`} />
          <h1 className="text-3xl font-black tracking-tight text-slate-900 dark:text-white">
            {set.source}
          </h1>
          <span className="clay-pill px-2.5 py-0.5 text-xs font-semibold text-slate-500 dark:text-slate-300">
            {set.items.length} topics
          </span>
        </div>
        <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
          Every topic in this lecture on one scroll — diagrams, high-yield, and traps. Open any
          topic for exam findings, investigations, treatment, and the quiz.
        </p>

        {/* Jump nav */}
        <nav className="mt-4 flex flex-wrap gap-2">
          {set.items.map((l) => (
            <a
              key={l.id}
              href={`#${l.id}`}
              className="clay-pill px-3 py-1.5 text-xs font-semibold text-slate-700 transition active:translate-y-px dark:text-slate-200"
            >
              {l.title}
            </a>
          ))}
        </nav>
      </header>

      {/* Stacked topics */}
      <div className="space-y-10">
        {set.items.map((l) => (
          <section key={l.id} id={l.id} className="scroll-mt-24">
            <div className="mb-3 flex flex-wrap items-center justify-between gap-2">
              <h2 className="text-2xl font-black tracking-tight text-slate-900 dark:text-white">
                {l.title}
              </h2>
              <Link
                href={`/lecture/${l.id}`}
                className="clay-pill px-3 py-1.5 text-xs font-bold text-emerald-600 transition active:translate-y-px dark:text-emerald-400"
              >
                Open full module →
              </Link>
            </div>

            {/* High-yield */}
            <div className="clay clay-surface mb-4 p-5">
              <h3 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
                High-yield
              </h3>
              <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
                {l.highYield.map((h, i) => (
                  <li key={i}>
                    <Rich text={h} />
                  </li>
                ))}
              </ul>
            </div>

            {/* Mechanism diagram */}
            <div className="mb-4">
              <MechanismChain chain={l.mechanism} />
            </div>

            {/* Traps */}
            {l.traps.length > 0 && (
              <div className="space-y-3">
                {l.traps.map((t, i) => (
                  <div
                    key={i}
                    className="clay-node bg-rose-100 p-4 text-sm dark:bg-rose-900/35"
                  >
                    <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-300">
                      Trap · {t.questionCategory}
                    </div>
                    <div className="mt-2 flex items-start gap-2">
                      <span className="font-bold text-rose-500">✗</span>
                      <span className="text-slate-700 dark:text-slate-200">{t.wrongInstinct}</span>
                    </div>
                    <div className="mt-1 flex items-start gap-2">
                      <span className="font-bold text-emerald-600 dark:text-emerald-400">✓</span>
                      <span className="font-medium text-slate-900 dark:text-white">
                        {t.rightAnswer}
                      </span>
                    </div>
                    <div className="mt-2 text-slate-600 dark:text-slate-300">{t.why}</div>
                  </div>
                ))}
              </div>
            )}
          </section>
        ))}
      </div>

      <footer className="mt-12 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
