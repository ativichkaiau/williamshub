'use client';

import { CONCEPT_MODES } from '../../lib/concept/modes';
import type { ConceptDepth } from '../../lib/concept/types';

// Mode switcher for a module. Controlled by ConceptModeController (which owns the
// localStorage-persisted value). Clean clay-pill UI matching the app.
export default function ConceptDepthSelector({
  value,
  onChange,
}: {
  value: ConceptDepth;
  onChange: (mode: ConceptDepth) => void;
}) {
  const active = CONCEPT_MODES.find((m) => m.mode === value);
  return (
    <div className="clay clay-surface mb-5 p-3">
      <div className="mb-2 flex items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-gradient-to-r from-amber-500 to-indigo-500" />
          <span className="text-[11px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">
            Concept depth
          </span>
        </div>
        {active ? (
          <span className="text-[11px] text-slate-400 dark:text-slate-500">{active.blurb}</span>
        ) : null}
      </div>
      <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Concept depth mode">
        {CONCEPT_MODES.map((m) => {
          const on = m.mode === value;
          return (
            <button
              key={m.mode}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => onChange(m.mode)}
              className={`clay-pill inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold transition active:translate-y-px ${
                on
                  ? 'ring-2 ring-inset ring-black/10 dark:ring-white/20'
                  : 'opacity-70 hover:opacity-100'
              }`}
            >
              <span className={`h-2 w-2 rounded-full ${m.dot}`} />
              <span className={on ? m.text : 'text-slate-600 dark:text-slate-300'}>{m.label}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
