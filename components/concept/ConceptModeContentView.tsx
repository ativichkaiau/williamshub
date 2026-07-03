import MechanismChain from '../MechanismChain';
import Quiz from '../Quiz';
import RecallGate from '../RecallGate';
import { Rich } from '../Rich';
import OnePagerModeView from './OnePagerModeView';
import { buildQuickReview, buildTeaching, CONCEPT_MODE_BY } from '../../lib/concept/modes';
import type { ConceptDepth, OnePagerSections } from '../../lib/concept/types';
import { sectionColors } from '../../lib/theme';
import type { Lecture } from '../../lib/types';

// Renders the focused view for a NON-standard concept mode. A pure projection of
// the Lecture (+ pre-built OnePager sections). Reuses existing primitives.

function Card({ children }: { children: React.ReactNode }) {
  return <section className="clay clay-surface p-5">{children}</section>;
}

function Label({ dot, text, children }: { dot: string; text: string; children: React.ReactNode }) {
  return (
    <div className="mb-3 flex items-center gap-2">
      <span className={`h-2.5 w-2.5 rounded-full ${dot}`} />
      <h3 className={`text-sm font-bold uppercase tracking-wide ${text}`}>{children}</h3>
    </div>
  );
}

export default function ConceptModeContentView({
  lecture: l,
  mode,
  onePager,
}: {
  lecture: Lecture;
  mode: ConceptDepth;
  onePager: OnePagerSections;
}) {
  const meta = CONCEPT_MODE_BY[mode];

  if (mode === 'onepager') return <OnePagerModeView onePager={onePager} />;

  if (mode === 'quick_review') {
    return (
      <Card>
        <Label dot={meta.dot} text={meta.text}>Quick review</Label>
        <RecallGate>
          <ul className="list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
            {buildQuickReview(l).map((h, i) => (
              <li key={i}>{h}</li>
            ))}
          </ul>
        </RecallGate>
      </Card>
    );
  }

  if (mode === 'mechanism') {
    return (
      <div className="space-y-5">
        <MechanismChain chain={l.mechanism} />
      </div>
    );
  }

  if (mode === 'clinical') {
    return (
      <div className="space-y-5">
        <Card>
          <Label dot={sectionColors.exam.dot} text={sectionColors.exam.text}>Physical examination findings</Label>
          <div className="divide-y divide-black/5 dark:divide-white/10">
            {l.examFindings.map((f, i) => (
              <div key={i} className="flex items-start gap-3 py-2 text-sm">
                <span
                  className={`mt-0.5 shrink-0 rounded-md px-1.5 py-0.5 text-[11px] font-bold ${
                    f.significance === 'key'
                      ? 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/45 dark:text-emerald-200'
                      : 'bg-black/5 text-slate-500 dark:bg-white/10 dark:text-slate-400'
                  }`}
                >
                  {f.significance === 'key' ? '★ key' : 'support'}
                </span>
                <div>
                  <span className="font-semibold text-slate-900 dark:text-white">{f.sign}</span>
                  <span className="text-slate-500 dark:text-slate-400"> — {f.mechanism}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>
        <div className="grid gap-5 sm:grid-cols-2">
          <Card>
            <Label dot={sectionColors.investigation.dot} text={sectionColors.investigation.text}>Investigations</Label>
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
            <Label dot={sectionColors.treatment.dot} text={sectionColors.treatment.text}>Treatment logic</Label>
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
      </div>
    );
  }

  if (mode === 'trap') {
    return (
      <div className="space-y-5">
        <Card>
          <Label dot={sectionColors.trap.dot} text={sectionColors.trap.text}>Common exam traps</Label>
          <div className="space-y-3">
            {l.traps.map((t, i) => (
              <div key={i} className="clay-node bg-rose-100 p-4 text-sm dark:bg-rose-900/35">
                <div className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-300">
                  {t.questionCategory}
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
        {l.quiz.length > 0 && (
          <Card>
            <Label dot={sectionColors.quiz.dot} text={sectionColors.quiz.text}>Test the trap</Label>
            <Quiz questions={l.quiz} />
          </Card>
        )}
      </div>
    );
  }

  // teaching
  return (
    <Card>
      <Label dot={meta.dot} text={meta.text}>Teaching version</Label>
      <p className="mb-3 text-xs text-slate-500 dark:text-slate-400">
        Explain-it-to-a-junior walkthrough — plain language, step by step.
      </p>
      <ol className="list-decimal space-y-1.5 pl-5 text-[15px] leading-relaxed text-slate-700 dark:text-slate-200">
        {buildTeaching(l).map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ol>
    </Card>
  );
}
