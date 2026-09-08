'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import HubIcon from './HubIcon';
import { recordQuizAnswer } from '../lib/user/activity';
import { addRepairItems, makeRepairItem } from '../lib/repair/store';
import { getWeakModules, intersectsWeak } from '../lib/user/weakness';
import type { ErrorType } from '../lib/repair/types';
import type { BankQuestion, QuestionKind } from '../lib/questions/types';

const KIND_META: Record<QuestionKind, { label: string; cls: string }> = {
  recall: { label: 'Recall', cls: 'bg-amber-500/15 text-amber-700 dark:text-amber-300' },
  mechanism: { label: 'Mechanism', cls: 'bg-teal-500/15 text-teal-700 dark:text-teal-300' },
  trap: { label: 'Trap', cls: 'bg-rose-500/15 text-rose-700 dark:text-rose-300' },
  integration: { label: 'Integration', cls: 'bg-indigo-500/15 text-indigo-600 dark:text-indigo-300' },
  clinical: { label: 'Clinical', cls: 'bg-fuchsia-500/15 text-fuchsia-600 dark:text-fuchsia-300' },
};

const KIND_ERROR: Record<QuestionKind, ErrorType> = {
  recall: 'recall_error',
  mechanism: 'mechanism_error',
  trap: 'trap_error',
  integration: 'integration_error',
  clinical: 'frame_error',
};

function shuffle<T>(arr: T[]): T[] {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Bias the sample toward the links you actually miss: integration questions that
// bridge a weak module float to the front, then questions touching any weak
// module, then everything else — with a random jitter so it still varies run to
// run. With no weak signal this degrades to a plain shuffle.
function weightedDeck(questions: BankQuestion[], size: number, weak: Set<string>): BankQuestion[] {
  const scored = questions.map((q) => {
    let w = Math.random();
    const bridgesWeak = intersectsWeak(q.linkedModuleIds, weak);
    if (q.kind === 'integration' && bridgesWeak) w += 2;
    else if (bridgesWeak || weak.has(q.moduleId)) w += 1;
    return { q, w };
  });
  scored.sort((a, b) => b.w - a.w);
  return scored.slice(0, size).map((s) => s.q);
}

export default function PracticeSession({
  questions,
  title,
  subjectOf,
}: {
  questions: BankQuestion[];
  title: string;
  subjectOf?: Record<string, string>;
}) {
  // Deterministic initial order (SSR-safe), then shuffle on the client after mount
  // so server + client HTML match; "Restart" (nonce) reshuffles.
  const [nonce, setNonce] = useState(0);
  const sessionSize = Math.min(20, questions.length);
  const [deck, setDeck] = useState<BankQuestion[]>(() => questions.slice(0, sessionSize));
  const [weakBias, setWeakBias] = useState(0);
  useEffect(() => {
    const weak = getWeakModules();
    const next = weak.size > 0 ? weightedDeck(questions, sessionSize, weak) : shuffle(questions).slice(0, sessionSize);
    setDeck(next);
    setWeakBias(next.filter((q) => intersectsWeak(q.linkedModuleIds, weak) || weak.has(q.moduleId)).length);
  }, [questions, nonce, sessionSize]);
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<Record<string, string>>({});
  const [done, setDone] = useState(false);
  const [savedRepair, setSavedRepair] = useState(false);

  if (deck.length === 0) {
    return (
      <div className="clay clay-surface p-8 text-center">
        <HubIcon name="practice" className="mx-auto h-8 w-8 text-[var(--muted)]" />
        <p className="mt-3 font-semibold text-[var(--ink)]">No questions here yet.</p>
        <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-[var(--muted)]">
          Questions are built from this module’s content and links. Run{' '}
          <code className="rounded bg-[var(--surface-muted)] px-1 font-mono">npm run questions:generate</code> with an
          OpenAI key to add AI questions.
        </p>
      </div>
    );
  }

  const results = deck.map((qq) => ({ q: qq, pick: chosen[qq.id], correct: chosen[qq.id] === qq.answerId }));
  const answeredCount = results.filter((r) => r.pick !== undefined).length;
  const score = results.filter((r) => r.correct).length;
  const misses = results.filter((r) => r.pick !== undefined && !r.correct);

  const choose = (q: BankQuestion, optId: string) => {
    if (chosen[q.id] !== undefined) return;
    setChosen((c) => ({ ...c, [q.id]: optId }));
    recordQuizAnswer(q.moduleId, q.id, optId === q.answerId);
  };

  const restart = () => {
    setChosen({});
    setI(0);
    setDone(false);
    setSavedRepair(false);
    setNonce((n) => n + 1);
  };

  const sendToRepair = () => {
    const items = misses.map((m) =>
      makeRepairItem({
        module_id: m.q.moduleId,
        lecture_id: m.q.moduleId,
        subject_id: subjectOf?.[m.q.moduleId] ?? 'unknown',
        error_type: KIND_ERROR[m.q.kind],
        source_question_id: m.q.id,
      }),
    );
    if (items.length) addRepairItems(items);
    setSavedRepair(true);
  };

  // ── Summary ──────────────────────────────────────────────────────────────
  if (done) {
    const pct = Math.round((score / deck.length) * 100);
    return (
      <div className="space-y-5">
        <div className="clay clay-surface p-6 text-center">
          <div className="eyebrow">Session complete</div>
          <div className="mt-1.5 text-4xl font-semibold tabular-nums text-[var(--ink)]">{pct}%</div>
          <div className="text-sm text-[var(--muted)]">
            {score} / {deck.length} correct · {title}
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2">
            <button
              type="button"
              onClick={restart}
              className="clay-pill px-4 py-2 text-sm font-medium text-[var(--accent)] transition hover:border-[var(--accent)] active:translate-y-px"
            >
              ↻ Practise again
            </button>
            {misses.length > 0 ? (
              <button
                type="button"
                onClick={sendToRepair}
                disabled={savedRepair}
                className="clay-pill px-4 py-2 text-sm font-medium text-[#e4002b] transition hover:border-[#e4002b] active:translate-y-px disabled:opacity-50 dark:text-[#ff5a72]"
              >
                {savedRepair ? '✓ Sent to Repair' : `Send ${misses.length} miss${misses.length === 1 ? '' : 'es'} to Repair`}
              </button>
            ) : null}
            <Link href="/standings" className="clay-pill px-4 py-2 text-sm font-medium text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--accent)]">
              View progress
            </Link>
          </div>
        </div>

        {misses.length > 0 ? (
          <div>
            <h3 className="mb-2 text-xs font-semibold uppercase tracking-[0.1em] text-[var(--muted)]">
              Review your misses
            </h3>
            <ul className="space-y-2">
              {misses.map((m) => (
                <li key={m.q.id} className="clay-node clay-surface p-4 text-sm">
                  <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${KIND_META[m.q.kind].cls}`}>
                    {KIND_META[m.q.kind].label}
                  </span>
                  <p className="mt-1.5 font-medium text-[var(--ink)]">{m.q.stem}</p>
                  <p className="mt-1 text-emerald-600 dark:text-emerald-400">
                    ✓ {m.q.options.find((o) => o.id === m.q.answerId)?.text}
                  </p>
                  <p className="mt-1 leading-6 text-[var(--muted)]">{m.q.explanation}</p>
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <p className="text-center text-sm font-medium text-emerald-600 dark:text-emerald-400">Clean sweep — no misses.</p>
        )}
      </div>
    );
  }

  // ── One question ─────────────────────────────────────────────────────────
  const q = deck[i];
  const pick = chosen[q.id];
  const answered = pick !== undefined;

  return (
    <div>
      {questions.length > deck.length ? (
        <div className="clay clay-surface mb-4 flex flex-wrap items-center justify-between gap-2 p-3 text-xs text-[var(--muted)]">
          <span>
            This run is {deck.length} questions sampled from a {questions.length.toLocaleString()}-question pool.
          </span>
          <span className="font-medium text-[var(--accent)]">Restart reshuffles the pool.</span>
        </div>
      ) : null}

      {weakBias > 0 ? (
        <div className="mb-4 flex items-center gap-2 rounded-xl bg-amber-500/10 px-3 py-2 text-xs font-medium text-amber-700 dark:text-amber-300">
          <span aria-hidden>◍</span>
          <span>
            Tuned to your weak links — {weakBias} of {deck.length} question{deck.length === 1 ? '' : 's'} target modules
            you’ve been missing.
          </span>
        </div>
      ) : null}

      {/* progress */}
      <div className="mb-4 flex items-center gap-3">
        <span className="clay-inset h-1.5 flex-1 overflow-hidden rounded-full">
          <span
            className="block h-full rounded-full bg-[var(--accent)] transition-all"
            style={{ width: `${(answeredCount / deck.length) * 100}%` }}
          />
        </span>
        <span className="shrink-0 text-xs font-medium tabular-nums text-[var(--muted)]">
          {i + 1} / {deck.length}
        </span>
      </div>

      <div className="clay clay-surface p-5">
        <div className="flex items-center gap-2">
          <span className={`rounded px-1.5 py-0.5 text-[10px] font-semibold uppercase ${KIND_META[q.kind].cls}`}>
            {KIND_META[q.kind].label}
          </span>
          <span className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">Score {score}</span>
        </div>
        <p className="mt-2 text-[15px] font-medium leading-relaxed text-[var(--ink)]">{q.stem}</p>

        <div className="mt-3 space-y-2">
          {q.options.map((o) => {
            const isCorrect = o.id === q.answerId;
            const isPick = o.id === pick;
            let cls = 'clay-node w-full text-left text-sm px-3 py-2 transition ';
            if (!answered) cls += 'clay-surface text-[var(--ink)] hover:border-[var(--accent)] active:translate-y-px';
            else if (isCorrect) cls += 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/45 dark:text-emerald-100';
            else if (isPick) cls += 'bg-rose-100 text-rose-900 dark:bg-rose-900/45 dark:text-rose-100';
            else cls += 'clay-surface text-[var(--muted)]';
            return (
              <button key={o.id} type="button" disabled={answered} onClick={() => choose(q, o.id)} className={cls}>
                <span className="font-mono font-semibold uppercase">{o.id}.</span> {o.text}
              </button>
            );
          })}
        </div>

        {answered ? (
          <div className="clay mt-3 p-3 text-sm leading-relaxed text-[var(--ink)]">
            <span
              className={
                pick === q.answerId ? 'font-semibold text-emerald-600 dark:text-emerald-400' : 'font-semibold text-rose-500 dark:text-rose-400'
              }
            >
              {pick === q.answerId ? 'Correct. ' : 'Not quite. '}
            </span>
            {q.explanation}
          </div>
        ) : null}

        <div className="mt-4 flex justify-end">
          <button
            type="button"
            onClick={() => (i < deck.length - 1 ? setI(i + 1) : setDone(true))}
            disabled={!answered}
            className="clay-pill px-5 py-2 text-sm font-medium text-[var(--accent)] transition hover:border-[var(--accent)] active:translate-y-px disabled:opacity-40"
          >
            {i < deck.length - 1 ? 'Next →' : 'Finish'}
          </button>
        </div>
      </div>
    </div>
  );
}
