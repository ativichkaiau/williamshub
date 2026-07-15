'use client';

// Lecture-page trigger that opens the global Ask AI panel (components/AskAI.tsx).
// The panel grounds itself in the current module from the pathname, so this just
// needs to open it — no props required.
export default function AskAboutButton() {
  return (
    <button
      type="button"
      onClick={() => window.dispatchEvent(new CustomEvent('williamshub:ask-ai'))}
      aria-label="Ask AI about this module"
      className="clay-pill inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-[#1e5bd6] transition active:translate-y-px dark:text-[#7AA0FF]"
    >
      <span aria-hidden>✨</span> Ask
    </button>
  );
}
