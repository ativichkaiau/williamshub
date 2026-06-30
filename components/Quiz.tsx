'use client';

import { useState } from 'react';
import type { QuizQuestion } from '../lib/types';

function QuizItem({ q }: { q: QuizQuestion }) {
  const [chosen, setChosen] = useState<string | null>(null);
  const answered = chosen !== null;

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4">
      <p className="text-sm font-medium text-slate-900">{q.stem}</p>
      <div className="mt-3 space-y-2">
        {q.options.map((o) => {
          const isCorrect = o.id === q.answerId;
          const isChosen = o.id === chosen;
          let cls =
            'w-full text-left text-sm px-3 py-2 rounded-lg border transition ';
          if (!answered) {
            cls += 'border-slate-200 bg-white hover:bg-slate-50 cursor-pointer';
          } else if (isCorrect) {
            cls += 'border-emerald-300 bg-emerald-50 text-emerald-900';
          } else if (isChosen) {
            cls += 'border-rose-300 bg-rose-50 text-rose-900';
          } else {
            cls += 'border-slate-200 bg-white text-slate-500';
          }
          return (
            <button
              key={o.id}
              type="button"
              disabled={answered}
              onClick={() => setChosen(o.id)}
              className={cls}
            >
              <span className="font-medium uppercase">{o.id}.</span> {o.text}
            </button>
          );
        })}
      </div>
      {answered && (
        <div className="mt-3 rounded-lg bg-slate-50 p-3 text-sm leading-relaxed text-slate-600">
          <span
            className={
              chosen === q.answerId
                ? 'font-semibold text-emerald-700'
                : 'font-semibold text-rose-700'
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
