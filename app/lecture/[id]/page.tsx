import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lectures, lectureById, lectureSetSlug } from '../../../content';
import MechanismChain from '../../../components/MechanismChain';
import Quiz from '../../../components/Quiz';
import RecallGate from '../../../components/RecallGate';
import { Rich } from '../../../components/Rich';

export function generateStaticParams() {
  return lectures.map((l) => ({ id: l.id }));
}

export function generateMetadata({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  return { title: l ? `${l.title} — WilliamsHub` : 'WilliamsHub' };
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="mb-3 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <section className="clay clay-surface p-5">{children}</section>;
}

export default function LecturePage({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  if (!l) notFound();

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
        <Link
          href={`/lecture-set/${lectureSetSlug(l.source)}`}
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wide text-rose-400 transition hover:text-rose-500"
        >
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          {l.source}
        </Link>
        <h1 className="mt-2 text-3xl font-black tracking-tight text-slate-900 dark:text-white">
          {l.title}
        </h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {l.tags.map((t) => (
            <span
              key={`${t.kind}-${t.label}`}
              className="rounded-full bg-black/5 px-2.5 py-0.5 text-xs text-slate-600 dark:bg-white/10 dark:text-slate-300"
            >
              {t.label}
            </span>
          ))}
        </div>
      </header>

      <div className="space-y-5">
        {/* High-yield (recall-first) */}
        <Card>
          <SectionLabel>High-yield summary</SectionLabel>
          <RecallGate>
            <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
              {l.highYield.map((h, i) => (
                <li key={i}>
                  <Rich text={h} />
                </li>
              ))}
            </ul>
          </RecallGate>
        </Card>

        {/* Mechanism */}
        <MechanismChain chain={l.mechanism} />

        {/* Exam findings */}
        <Card>
          <SectionLabel>Physical examination findings</SectionLabel>
          <div className="divide-y divide-black/5 dark:divide-white/10">
            {l.examFindings.map((f, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <span
                  className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                    f.significance === 'key'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/45 dark:text-emerald-200'
                      : 'bg-black/5 text-slate-500 dark:bg-white/10 dark:text-slate-400'
                  }`}
                >
                  {f.significance === 'key' ? '★ key' : 'support'}
                </span>
                <div className="text-sm">
                  <span className="font-semibold text-slate-900 dark:text-white">{f.sign}</span>
                  <span className="text-slate-500 dark:text-slate-400"> — {f.mechanism}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Investigations + Treatment */}
        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <SectionLabel>Investigations</SectionLabel>
            <ul className="space-y-2 text-sm">
              {l.investigations.map((iv, i) => (
                <li key={i}>
                  <span className="font-semibold text-slate-900 dark:text-white">{iv.clue}</span>
                  <span className="text-slate-500 dark:text-slate-400"> — {iv.meaning}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <SectionLabel>Treatment logic</SectionLabel>
            <ul className="space-y-2 text-sm">
              {l.treatment.map((t, i) => (
                <li key={i}>
                  <span className="font-semibold text-slate-900 dark:text-white">{t.logic}</span>
                  {t.detail ? (
                    <span className="text-slate-500 dark:text-slate-400"> — {t.detail}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </Card>
        </div>

        {/* Mnemonics */}
        {l.mnemonics.length > 0 && (
          <Card>
            <SectionLabel>Mnemonics</SectionLabel>
            <div className="space-y-3">
              {l.mnemonics.map((m, i) => (
                <div
                  key={i}
                  className="clay-node bg-violet-100 p-4 dark:bg-violet-900/40"
                >
                  <div className="text-base font-bold text-violet-900 dark:text-violet-100">
                    “{m.hook}”
                  </div>
                  <div className="mt-1 text-sm text-violet-800 dark:text-violet-200">
                    {m.expansion.join(' · ')}
                  </div>
                </div>
              ))}
            </div>
          </Card>
        )}

        {/* Traps */}
        <Card>
          <SectionLabel>Common exam traps</SectionLabel>
          <div className="space-y-3">
            {l.traps.map((t, i) => (
              <div key={i} className="clay-node bg-rose-100 p-4 text-sm dark:bg-rose-900/35">
                <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-300">
                  Question category: {t.questionCategory}
                </div>
                <div className="mt-2 flex items-start gap-2">
                  <span className="font-bold text-rose-500">✗</span>
                  <span className="text-slate-700 dark:text-slate-200">{t.wrongInstinct}</span>
                </div>
                <div className="mt-1 flex items-start gap-2">
                  <span className="font-bold text-emerald-600 dark:text-emerald-400">✓</span>
                  <span className="font-medium text-slate-900 dark:text-white">{t.rightAnswer}</span>
                </div>
                <div className="mt-2 text-slate-600 dark:text-slate-300">{t.why}</div>
              </div>
            ))}
          </div>
        </Card>

        {/* Quiz */}
        <Card>
          <SectionLabel>Active recall</SectionLabel>
          <Quiz questions={l.quiz} />
        </Card>
      </div>

      <footer className="mt-10 text-center text-xs text-slate-400 dark:text-slate-500">
        WilliamsHub · M-8 · a VESTRIPPN3.0 satellite
      </footer>
    </main>
  );
}
