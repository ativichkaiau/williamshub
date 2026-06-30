'use client';

import { useState } from 'react';

// Recall-first: content renders blurred until the user chooses to reveal.
// Operationalizes "active recall over passive reading" (priority #3).
export default function RecallGate({ children }: { children: React.ReactNode }) {
  const [revealed, setRevealed] = useState(false);
  return (
    <div>
      <button
        type="button"
        onClick={() => setRevealed((v) => !v)}
        className="mb-3 inline-flex items-center gap-2 rounded-lg border border-slate-300 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 shadow-sm transition hover:bg-slate-50"
      >
        {revealed ? 'Hide answers' : 'Test yourself first'}
      </button>
      <div
        className={
          revealed
            ? 'transition'
            : 'select-none blur-sm opacity-50 transition pointer-events-none'
        }
      >
        {children}
      </div>
    </div>
  );
}
