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
        className="clay-pill mb-3 inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-slate-700 transition active:translate-y-px dark:text-slate-200"
      >
        {revealed ? 'Hide answers' : 'Test yourself first'}
      </button>
      <div
        className={
          revealed
            ? 'transition'
            : 'pointer-events-none select-none opacity-50 blur-sm transition'
        }
      >
        {children}
      </div>
    </div>
  );
}
