'use client';

import { useEffect, useState } from 'react';
import CurriculumBrowser, { type YearData } from './CurriculumBrowser';
import OnePagerBrowser from './OnePagerBrowser';

type Mode = 'williamshub' | 'onepager';

// Toggle switch between the interactive WilliamsHub lectures and the user's own
// OnePager library (Google Drive). Choice persists in localStorage.
export default function BlockBrowser({
  years,
  defaultYear,
  onePagerDefaultYear,
  contentCodes,
}: {
  years: YearData[];
  defaultYear: number;
  onePagerDefaultYear: number;
  contentCodes: string[];
}) {
  const [mode, setMode] = useState<Mode>('williamshub');

  useEffect(() => {
    try {
      const saved = localStorage.getItem('wh-block-mode');
      if (saved === 'onepager' || saved === 'williamshub') setMode(saved);
    } catch {}
  }, []);

  function pick(next: Mode) {
    setMode(next);
    try {
      localStorage.setItem('wh-block-mode', next);
    } catch {}
  }

  const options: { key: Mode; label: string; hint: string }[] = [
    { key: 'williamshub', label: 'WilliamsHub', hint: 'Interactive lectures' },
    { key: 'onepager', label: 'OnePagers', hint: 'Your Drive library' },
  ];

  return (
    <div>
      {/* Segmented toggle */}
      <div className="clay-inset mb-5 inline-flex gap-1 p-1">
        {options.map((o) => {
          const isActive = mode === o.key;
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => pick(o.key)}
              aria-pressed={isActive}
              className={`rounded-xl px-4 py-2 text-sm font-bold transition active:translate-y-px ${
                isActive
                  ? o.key === 'williamshub'
                    ? 'clay text-emerald-600 dark:text-emerald-400'
                    : 'clay text-sky-600 dark:text-sky-400'
                  : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
              }`}
            >
              {o.label}
              <span className="ml-1.5 hidden text-[11px] font-medium text-slate-400 sm:inline">
                · {o.hint}
              </span>
            </button>
          );
        })}
      </div>

      {mode === 'williamshub' ? (
        <CurriculumBrowser years={years} defaultYear={defaultYear} />
      ) : (
        <OnePagerBrowser defaultYear={onePagerDefaultYear} contentCodes={contentCodes} />
      )}
    </div>
  );
}
