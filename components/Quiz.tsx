'use client';

import { useState } from 'react';
import type { QuizQuestion } from '../lib/types';

function QuizItem({ q }: { q: QuizQuestion }) {
  const [chosen, setChosen] = useState<string | null>(null);
  const answered = chosen !== null;

  return (
    <div className="clay-inset clay-surface p-4">
      <p className="text-sm font-medium text-slate-900 dark:text-white">{q.stem}</p>
      <div className="mt-3 space-y-2">
        {q.options.map((o) => {
          const isCorrect = o.id === q.answerId;
          const isChosen = o.id === chosen;
          let cls = 'clay-node w-full text-left text-sm px-3 py-2 transition ';
          if (!answered) {
            cls += 'clay-surface text-slate-700 dark:text-slate-200 active:translate-y-px';
          } else if (isCorrect) {
            cls += 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/45 dark:text-emerald-100';
          } else if (isChosen) {
            cls += 'bg-rose-100 text-rose-900 dark:bg-rose-900/45 dark:text-rose-100';
          } else {
            cls += 'clay-surface text-slate-400 dark:text-slate-500';
          }
          return (
            <button
              key={o.id}
              type="button"
              disabled={answered}
              onClick={() => setChosen(o.id)}
              className={cls}
            >
              <span className="font-bold uppercase">{o.id}.</span> {o.text}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="clay mt-3 p-3 text-sm leading-relaxed text-slate-600 dark:text-slate-300">
          <span
            className={
              chosen === q.answerId
                ? 'font-bold text-emerald-600 dark:text-emerald-400'
                : 'font-bold text-rose-500 dark:text-rose-400'
            }
          >
            {chosen === q.answerId ? 'Correct. ' : 'Not quite. '}
          </span>
          {q.explanation}
        </div>
      )}
    </div>
  );
}

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  return (
    <div className="space-y-3">
      {questions.map((q) => (
        <QuizItem key={q.id} q={q} />
      ))}
    </div>
  );
}
