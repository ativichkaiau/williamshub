'use client';

import { useEffect, useState } from 'react';

// Day/Night toggle. The actual class is applied pre-paint by an inline script in
// layout.tsx (no flash); this just reflects + flips it, persisting the choice.
export default function ThemeToggle() {
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'));
    setReady(true);
  }, []);

  function toggle() {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle('dark', next);
    try {
      localStorage.setItem('wh-theme', next ? 'dark' : 'light');
    } catch {}
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle day / night"
      className="clay-pill inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-slate-700 transition active:translate-y-px dark:text-slate-200"
    >
      <span aria-hidden>{ready && dark ? '🌙' : '☀️'}</span>
      <span>{ready && dark ? 'Night' : 'Day'}</span>
    </button>
  );
}
