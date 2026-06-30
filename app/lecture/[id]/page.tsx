import Link from 'next/link';
import { notFound } from 'next/navigation';
import { lectures, lectureById } from '../../../content';
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
    <h2 className="mb-3 text-sm font-semibold uppercase tracking-wide text-slate-500">
      {children}
    </h2>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      {children}
    </section>
  );
}

export default function LecturePage({ params }: { params: { id: string } }) {
  const l = lectureById[params.id];
  if (!l) notFound();

  return (
    <main className="mx-auto max-w-3xl px-5 py-8">
      <Link href="/" className="text-sm text-slate-500 hover:text-slate-800">
        ← All lectures
      </Link>

      {/* Header */}
      <header className="mt-4 mb-6">
        <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-rose-600">
          <span className="h-2 w-2 rounded-full bg-rose-500" />
          {l.source}
        </div>
        <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">{l.title}</h1>
        <div className="mt-3 flex flex-wrap gap-1.5">
          {l.tags.map((t) => (
            <span
              key={`${t.kind}-${t.label}`}
              className="rounded-full bg-slate-100 px-2.5 py-0.5 text-xs text-slate-600"
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
            <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700">
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
          <div className="divide-y divide-slate-100">
            {l.examFindings.map((f, i) => (
              <div key={i} className="flex items-start gap-3 py-2">
                <span
                  className={`mt-0.5 shrink-0 rounded px-1.5 py-0.5 text-[11px] font-medium ${
                    f.significance === 'key'
                      ? 'bg-teal-50 text-teal-700'
                      : 'bg-slate-100 text-slate-500'
                  }`}
                >
                  {f.significance === 'key' ? '★ key' : 'support'}
                </span>
                <div className="text-sm">
                  <span className="font-medium text-slate-900">{f.sign}</span>
                  <span className="text-slate-500"> — {f.mechanism}</span>
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
                  <span className="font-medium text-slate-900">{iv.clue}</span>
                  <span className="text-slate-500"> — {iv.meaning}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <SectionLabel>Treatment logic</SectionLabel>
            <ul className="space-y-2 text-sm">
              {l.treatment.map((t, i) => (
                <li key={i}>
                  <span className="font-medium text-slate-900">{t.logic}</span>
                  {t.detail ? <span className="text-slate-500"> — {t.detail}</span> : null}
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
                <div key={i} className="rounded-xl bg-violet-50 p-4">
                  <div className="text-base font-semibold text-violet-900">“{m.hook}”</div>
                  <div className="mt-1 text-sm text-violet-800">{m.expansion.join(' · ')}</div>
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
              <div key={i} className="rounded-xl border border-rose-200 bg-rose-50 p-4 text-sm">
                <div className="text-xs font-semibold uppercase tracking-wide text-rose-700">
                  Question category: {t.questionCategory}
                </div>
                <div className="mt-2 flex items-start gap-2">
                  <span className="font-semibold text-rose-600">✗</span>
                  <span className="text-slate-700">{t.wrongInstinct}</span>
                </div>
                <div className="mt-1 flex items-start gap-2">
                  <span className="font-semibold text-emerald-600">✓</span>
                  <span className="text-slate-900">{t.rightAnswer}</span>
                </div>
                <div className="mt-2 text-slate-600">{t.why}</div>
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

      <footer className="mt-10 text-center text-xs text-slate-400">
        WilliamsHub · M-8 · built from MedCMU lectures
      </footer>
    </main>
  );
}
