'use client';

import { useEffect, useState } from 'react';
import CurriculumBrowser, { type YearData } from './CurriculumBrowser';
import OnePagerBrowser from './OnePagerBrowser';
import HubIcon, { type HubIconName } from './HubIcon';

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

  const options: { key: Mode; label: string; icon: HubIconName }[] = [
    { key: 'williamshub', label: 'WilliamsHub', icon: 'book' },
    { key: 'onepager', label: 'OnePagers', icon: 'cards' },
  ];

  return (
    <div>
      {/* Segmented toggle */}
      <div className="library-modes mb-4" role="group" aria-label="Library source">
        {options.map((o) => {
          const isActive = mode === o.key;
          return (
            <button
              key={o.key}
              type="button"
              onClick={() => pick(o.key)}
              aria-pressed={isActive}
              className="library-mode"
            >
              <HubIcon name={o.icon} />
              {o.label}
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
