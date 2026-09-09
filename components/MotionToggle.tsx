'use client';

import { useEffect, useState } from 'react';
import { MOTION_CHANGE_EVENT, motionEnabled } from '../lib/motion';
import HubIcon from './HubIcon';

export default function MotionToggle() {
  const [enabled, setEnabled] = useState(false);
  const [reduced, setReduced] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const sync = (event?: Event) => {
      const requested = (event as CustomEvent<{ enabled: boolean }> | undefined)?.detail?.enabled;
      setEnabled(!preference.matches && (requested ?? motionEnabled()));
      setReduced(preference.matches);
    };
    sync();
    preference.addEventListener('change', sync);
    window.addEventListener(MOTION_CHANGE_EVENT, sync);
    return () => {
      preference.removeEventListener('change', sync);
      window.removeEventListener(MOTION_CHANGE_EVENT, sync);
    };
  }, []);

  function toggle() {
    const next = !enabled;
    try {
      localStorage.setItem('wh-motion', next ? 'enabled' : 'paused');
    } catch {}
    // Apply immediately even when the browser cannot persist preferences.
    document.documentElement.classList.toggle('motion', next);
    document.documentElement.toggleAttribute('data-motion-paused', !next);
    window.dispatchEvent(new CustomEvent(MOTION_CHANGE_EVENT, { detail: { enabled: next } }));
  }

  const label = reduced ? 'Animations reduced by your system' : enabled ? 'Pause animations' : 'Resume animations';

  return (
    <button type="button" onClick={toggle} className="header-tool motion-toggle" aria-label={label} title={label} disabled={reduced}>
      <HubIcon name={enabled ? 'pause' : 'play'} />
    </button>
  );
}
