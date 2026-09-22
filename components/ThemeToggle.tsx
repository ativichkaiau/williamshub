'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { APPEARANCE_KEY, appearanceMode, isNight, nextAppearanceCheck, type AppearanceMode } from '../lib/appearance';
import HubIcon from './HubIcon';

const choices: { mode: AppearanceMode; label: string; detail: string }[] = [
  { mode: 'auto', label: 'Auto', detail: 'Day 06:00–18:00 · your local time' },
  { mode: 'light', label: 'Day', detail: 'Always use the light appearance' },
  { mode: 'dark', label: 'Night', detail: 'Always use the dark appearance' },
];

function savedMode(): AppearanceMode {
  try { return appearanceMode(localStorage.getItem(APPEARANCE_KEY)); } catch { return 'auto'; }
}

function apply(mode: AppearanceMode, now = new Date()): boolean {
  const dark = isNight(mode, now);
  document.documentElement.classList.toggle('dark', dark);
  document.documentElement.dataset.themeMode = mode;
  return dark;
}

export default function ThemeToggle() {
  const [mode, setMode] = useState<AppearanceMode>('auto');
  const [dark, setDark] = useState(false);
  const [ready, setReady] = useState(false);
  const [open, setOpen] = useState(false);
  const container = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const selected = useRef<HTMLButtonElement>(null);
  const panelId = useId();

  useEffect(() => {
    setMode(savedMode());
    setReady(true);
    const syncStorage = (event: StorageEvent) => {
      if (event.key === APPEARANCE_KEY || event.key === null) setMode(savedMode());
    };
    window.addEventListener('storage', syncStorage);
    return () => window.removeEventListener('storage', syncStorage);
  }, []);

  useEffect(() => {
    if (!ready) return;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const sync = () => {
      if (timer !== undefined) clearTimeout(timer);
      const now = new Date();
      setDark(apply(mode, now));
      if (mode === 'auto') timer = setTimeout(sync, nextAppearanceCheck(now));
    };
    const resume = () => { if (document.visibilityState === 'visible') sync(); };
    sync();
    window.addEventListener('focus', sync);
    document.addEventListener('visibilitychange', resume);
    return () => {
      if (timer !== undefined) clearTimeout(timer);
      window.removeEventListener('focus', sync);
      document.removeEventListener('visibilitychange', resume);
    };
  }, [mode, ready]);

  useEffect(() => {
    if (!open) return;
    selected.current?.focus();
    const outside = (event: Event) => {
      if (event.target instanceof Node && !container.current?.contains(event.target)) setOpen(false);
    };
    const escape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        event.preventDefault();
        setOpen(false);
        trigger.current?.focus();
      }
    };
    document.addEventListener('pointerdown', outside);
    document.addEventListener('focusin', outside);
    document.addEventListener('keydown', escape);
    return () => {
      document.removeEventListener('pointerdown', outside);
      document.removeEventListener('focusin', outside);
      document.removeEventListener('keydown', escape);
    };
  }, [open]);

  function choose(next: AppearanceMode) {
    setMode(next);
    setDark(apply(next));
    try { localStorage.setItem(APPEARANCE_KEY, next); } catch {}
    setOpen(false);
    trigger.current?.focus();
  }

  const label = mode === 'auto' ? `Auto (${dark ? 'night' : 'day'})` : mode === 'dark' ? 'Night' : 'Day';

  return (
    <div ref={container} className="relative">
      <button
        ref={trigger}
        type="button"
        onClick={() => setOpen((value) => !value)}
        disabled={!ready}
        aria-label={ready ? `Appearance: ${label}` : 'Appearance'}
        aria-expanded={open}
        aria-controls={open ? panelId : undefined}
        title={ready ? `Appearance: ${label} · choose Auto, Day or Night` : 'Appearance'}
        className="header-tool relative"
      >
        <HubIcon key={dark ? 'moon' : 'sun'} name={dark ? 'moon' : 'sun'} className="theme-icon" />
        {ready && mode === 'auto' ? <span aria-hidden="true" className="absolute bottom-1 right-1 text-[8px] font-bold leading-none text-[var(--accent)]">A</span> : null}
      </button>
      {open ? (
        <div id={panelId} role="group" aria-label="Appearance mode" className="absolute right-0 top-full z-50 mt-2 w-64 max-w-[calc(100vw-2.5rem)] rounded-xl border border-[var(--line)] bg-[var(--clay-surface)] p-2 shadow-lg">
          <p className="px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-[var(--muted)]">Appearance</p>
          {choices.map((choice) => (
            <button
              key={choice.mode}
              ref={mode === choice.mode ? selected : undefined}
              type="button"
              aria-pressed={mode === choice.mode}
              onClick={() => choose(choice.mode)}
              className={`block w-full rounded-lg px-3 py-2.5 text-left transition-colors hover:bg-[var(--surface-muted)] ${mode === choice.mode ? 'bg-[var(--accent-soft)] text-[var(--accent)]' : 'text-[var(--ink)]'}`}
            >
              <span className="flex items-center justify-between text-sm font-medium">{choice.label}<span aria-hidden="true">{mode === choice.mode ? '✓' : ''}</span></span>
              <span className="mt-0.5 block text-[11px] text-[var(--muted)]">{choice.detail}</span>
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
