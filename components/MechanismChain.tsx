'use client';

import { useState } from 'react';
import type { MechanismChain as Chain, MechanismStep, Emphasis } from '../lib/types';

// Functional, not decorative. Renders the ordered spine left→right with arrows,
// then forks labelled branches. 'key' steps are exam-critical; 'danger' steps are lethal.
// Hover/tap a node with a `detail` to reveal the one-line "why".

const tone: Record<Emphasis, string> = {
  normal: 'border-slate-200 bg-white text-slate-800',
  key: 'border-teal-300 bg-teal-50 text-teal-900 ring-1 ring-teal-200',
  danger: 'border-rose-300 bg-rose-50 text-rose-900 ring-1 ring-rose-200',
};

function Node({ step }: { step: MechanismStep }) {
  const [open, setOpen] = useState(false);
  const e = step.emphasis ?? 'normal';
  return (
    <button
      type="button"
      onClick={() => step.detail && setOpen((v) => !v)}
      className={`group relative rounded-xl border px-3 py-2 text-sm font-medium shadow-sm transition ${tone[e]} ${
        step.detail ? 'cursor-pointer hover:shadow-md' : 'cursor-default'
      }`}
    >
      <span className="flex items-center gap-1.5">
        {e === 'key' && <span aria-hidden>★</span>}
        {e === 'danger' && <span aria-hidden>⚠</span>}
        {step.label}
      </span>
      {step.detail && open && (
        <span className="absolute left-0 top-full z-10 mt-1 w-56 rounded-lg border border-slate-200 bg-white p-2 text-left text-xs font-normal text-slate-600 shadow-lg">
          {step.detail}
        </span>
      )}
    </button>
  );
}

function Arrow() {
  return <span className="select-none text-slate-300" aria-hidden>→</span>;
}

export default function MechanismChain({ chain }: { chain: Chain }) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <h3 className="mb-4 text-sm font-semibold uppercase tracking-wide text-slate-500">
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
        <div key={bi} className="mt-4 border-l-2 border-dashed border-slate-200 pl-4">
          {b.title && (
            <div className="mb-2 text-xs font-semibold uppercase tracking-wide text-slate-400">
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
