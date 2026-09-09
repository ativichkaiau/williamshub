'use client';

import { useEffect, useState } from 'react';
import HubIcon from './HubIcon';

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
      aria-pressed={ready && dark}
      title={ready && dark ? 'Switch to day mode' : 'Switch to night mode'}
      className="header-tool"
    >
      <HubIcon key={ready && dark ? 'moon' : 'sun'} name={ready && dark ? 'moon' : 'sun'} className="theme-icon" />
    </button>
  );
}
