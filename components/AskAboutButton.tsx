'use client';

import HubIcon from './HubIcon';

// Lecture-page trigger that opens the global Ask AI panel (components/AskAI.tsx).
// The panel grounds itself in the current module from the pathname, so this just
// needs to open it — no props required.
export default function AskAboutButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('williamshub:ask-ai'))}
      aria-label="Ask AI about this module"
      className="clay-pill inline-flex min-h-9 items-center gap-1.5 px-3 py-2 text-xs font-medium text-[var(--accent)] transition hover:border-[var(--accent)] active:translate-y-px"
    >
      <HubIcon name="sparkles" /> Ask
    </button>
  );
}
