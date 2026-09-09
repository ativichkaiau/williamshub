'use client';

import { useEffect, useRef, useState } from 'react';
import { MOTION_CHANGE_EVENT, motionEnabled } from '../lib/motion';

export default function AnimatedCount({ value }: { value: number }) {
  const element = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(value);
  const formatted = value.toLocaleString('en-US');

  useEffect(() => {
    if (!element.current || !motionEnabled() || typeof IntersectionObserver === 'undefined') return;
    let frame = 0;
    let safety = 0;
    let startedAt: number | undefined;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const finish = () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(safety);
      setDisplay(value);
    };
    const tick = (time: number) => {
      startedAt ??= time;
      const progress = Math.min(1, (time - startedAt) / 1200);
      setDisplay(Math.round(value * (1 - (1 - progress) ** 3)));
      if (progress < 1) frame = requestAnimationFrame(tick);
      else finish();
    };
    const observer = new IntersectionObserver((entries) => {
      if (!entries.some((entry) => entry.isIntersecting)) return;
      observer.disconnect();
      if (!motionEnabled()) return;
      frame = requestAnimationFrame(tick);
      // A throttled tab still settles on the actual count.
      safety = window.setTimeout(finish, 1600);
    }, { threshold: 0.5 });
    observer.observe(element.current);
    preference.addEventListener('change', finish);
    window.addEventListener(MOTION_CHANGE_EVENT, finish);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.clearTimeout(safety);
      preference.removeEventListener('change', finish);
      window.removeEventListener(MOTION_CHANGE_EVENT, finish);
    };
  }, [value]);

  return (
    <span ref={element} className="inline-grid">
      <span className="invisible [grid-area:1/1]" aria-hidden="true">{formatted}</span>
      <span className="[grid-area:1/1]" aria-hidden="true">{display.toLocaleString('en-US')}</span>
      <span className="sr-only">{formatted}</span>
    </span>
  );
}
