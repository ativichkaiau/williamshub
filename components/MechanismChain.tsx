'use client';

import { useState } from 'react';
import type { MechanismChain as Chain, MechanismStep, Emphasis } from '../lib/types';

// Claymorphic mechanism diagram. Ordered spine left→right with arrows, then
// labelled branches. 'key' steps are exam-critical (mint), 'danger' steps lethal (rose).
// Tap a node with a `detail` to reveal the one-line "why".

const tone: Record<Emphasis, string> = {
  normal: 'clay-surface text-slate-700 dark:text-slate-200',
  key: 'bg-emerald-100 text-emerald-900 dark:bg-emerald-900/45 dark:text-emerald-100',
  danger: 'bg-rose-100 text-rose-900 dark:bg-rose-900/45 dark:text-rose-100',
};

function Node({ step }: { step: MechanismStep }) {
  const [open, setOpen] = useState(false);
  const e = step.emphasis ?? 'normal';
  return (
    <button
      type="button"
      onClick={() => step.detail && setOpen((v) => !v)}
      className={`clay-node relative px-3 py-2 text-sm font-medium transition ${tone[e]} ${
        step.detail ? 'cursor-pointer active:translate-y-px' : 'cursor-default'
      }`}
    >
      <span className="flex items-center gap-1.5">
        {e === 'key' && <span aria-hidden>★</span>}
        {e === 'danger' && <span aria-hidden>⚠</span>}
        {step.label}
      </span>
      {step.detail && open && (
        <span className="clay clay-surface absolute left-0 top-full z-10 mt-2 w-56 p-3 text-left text-xs font-normal text-slate-600 dark:text-slate-300">
          {step.detail}
        </span>
      )}
    </button>
  );
}

function Arrow() {
  return (
    <span className="select-none text-slate-400 dark:text-slate-500" aria-hidden>
      →
    </span>
  );
}

export default function MechanismChain({ chain }: { chain: Chain }) {
  return (
    <section className="clay clay-surface p-5">
      <h3 className="mb-4 text-sm font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
        {chain.title}
      </h3>

      {/* Spine */}
      <div className="flex flex-wrap items-center gap-2">
        {chain.steps.map((s, i) => (
          <span key={s.id} className="flex items-center gap-2">
            <Node step={s} />
            {i < chain.steps.length - 1 && <Arrow />}
          </span>
        ))}
      </div>

      {/* Branches */}
      {chain.branches?.map((b, bi) => (
        <div
          key={bi}
          className="mt-4 border-l-2 border-dashed border-slate-300 pl-4 dark:border-slate-600"
        >
          {b.title && (
            <div className="mb-2 text-xs font-bold uppercase tracking-wide text-slate-400 dark:text-slate-500">
              ↳ {b.title}
            </div>
          )}
          <div className="flex flex-wrap items-center gap-2">
            {b.steps.map((s, i) => (
              <span key={s.id} className="flex items-center gap-2">
                <Node step={s} />
                {i < b.steps.length - 1 && <Arrow />}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
