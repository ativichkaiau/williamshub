import MechanismChain from './MechanismChain';
import EcgStrip from './EcgStrip';
import MurmurStrip from './MurmurStrip';
import Quiz from './Quiz';
import RecallGate from './RecallGate';
import { Rich } from './Rich';
import { sectionColors, type SectionColor } from '../lib/theme';
import type { Lecture } from '../lib/types';

// Full content of one lecture module (all sections), with color-coded labels.
// Shared by the single-module page and the whole-lecture page.

function Label({ color, children }: { color: SectionColor; children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${color.dot}`} />
      <h3 className={`text-sm font-bold uppercase tracking-wide ${color.text}`}>{children}</h3>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <section className="clay clay-surface p-5">{children}</section>;
}

export default function LectureBody({ lecture: l }: { lecture: Lecture }) {
  return (
    <div className="space-y-5">
      {/* High-yield (recall-first) */}
      <Card>
        <Label color={sectionColors.highYield}>High-yield summary</Label>
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

      {/* Diagrams: EKG / physiology / pathology */}
      {l.figures && l.figures.length > 0 && (
        <Card>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
            <h3 className="text-sm font-bold uppercase tracking-wide text-red-600 dark:text-red-400">
              Diagrams
            </h3>
          </div>
          <div className="space-y-4">
            {l.figures.map((f, i) => (
              <figure key={i}>
                <figcaption className="mb-1.5 text-xs font-semibold text-slate-700 dark:text-slate-200">
                  {f.title}
                </figcaption>
                {f.ecg ? (
                  <EcgStrip rhythm={f.ecg} />
                ) : f.murmur ? (
                  <MurmurStrip murmur={f.murmur} />
                ) : f.svg ? (
                  <div dangerouslySetInnerHTML={{ __html: f.svg }} />
                ) : null}
                {f.caption ? (
                  <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">{f.caption}</p>
                ) : null}
              </figure>
            ))}
          </div>
        </Card>
      )}

      {/* Exam findings */}
      <Card>
        <Label color={sectionColors.exam}>Physical examination findings</Label>
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
          <Label color={sectionColors.investigation}>Investigations</Label>
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
          <Label color={sectionColors.treatment}>Treatment logic</Label>
          <ul className="space-y-2 text-sm">
            {l.treatment.map((t, i) => (
              <li key={i}>
                <span className="font-semibold text-slate-900 dark:text-white">{t.logic}</span>
                {t.detail ? <span className="text-slate-500 dark:text-slate-400"> — <Rich text={t.detail} /></span> : null}
              </li>
            ))}
          </ul>
        </Card>
      </div>

      {/* Mnemonics */}
      {l.mnemonics.length > 0 && (
        <Card>
          <Label color={sectionColors.mnemonic}>Mnemonics</Label>
          <div className="space-y-3">
            {l.mnemonics.map((m, i) => (
              <div key={i} className="clay-node bg-violet-100 p-4 dark:bg-violet-900/40">
                <div className="text-base font-bold text-violet-900 dark:text-violet-100">“{m.hook}”</div>
                <div className="mt-1 text-sm text-violet-800 dark:text-violet-200">{m.expansion.join(' · ')}</div>
              </div>
            ))}
          </div>
        </Card>
      )}

      {/* Traps */}
      <Card>
        <Label color={sectionColors.trap}>Common exam traps</Label>
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
        <Label color={sectionColors.quiz}>Active recall</Label>
        <Quiz questions={l.quiz} />
      </Card>
    </div>
  );
}
