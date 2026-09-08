'use client';

import { useState } from 'react';
import Link from 'next/link';
import { onePagerGroups, onePagerYears } from '../content/onepagers';

const YEAR_LABEL: Record<number, string> = { 1: 'Year 1', 2: 'Year 2', 3: 'Year 3' };

// Browse the user's own OnePagers (Google Drive), grouped Year → Term/Module → Subject.
export default function OnePagerBrowser({
  defaultYear,
  contentCodes,
}: {
  defaultYear: number;
  contentCodes: string[];
}) {
  const [active, setActive] = useState(defaultYear);
  const hasContent = new Set(contentCodes);
  const groups = onePagerGroups.filter((g) => g.year === active);

  return (
    <div>
      {/* Year tabs */}
      <div className="year-tabs" role="group" aria-label="OnePager academic year">
        {onePagerYears.map((y) => {
          const isActive = y === active;
          return (
            <button
              key={y}
              type="button"
              onClick={() => setActive(y)}
              aria-pressed={isActive}
              className="year-tab"
            >
              {YEAR_LABEL[y] ?? `Year ${y}`}
            </button>
          );
        })}
      </div>

      {/* Module cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={`${g.year}-${g.term}`} className="clay flex flex-col p-5">
            <div className="flex flex-wrap items-center justify-between gap-2">
              <span className="eyebrow">
                {YEAR_LABEL[g.year] ?? `Year ${g.year}`} · {g.term}
              </span>
              {g.driveUrl ? (
                <a
                  href={g.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-10 items-center text-[11px] font-medium text-[var(--accent)] transition hover:underline"
                >
                  Open OnePagers ↗
                </a>
              ) : (
                <span className="text-[11px] font-medium text-slate-400">Folder coming soon</span>
              )}
            </div>

            <ul className="mt-3 flex flex-col divide-y divide-[var(--line)]">
              {g.subjects.map((s) => {
                const studied = hasContent.has(s.code);
                return (
                  <li
                    key={s.code}
                    className="flex items-center justify-between gap-3 py-3"
                  >
                    <span className="flex min-w-0 flex-col items-start gap-1 sm:flex-row sm:items-center sm:gap-3">
                      <span className="shrink-0 font-mono text-[11px] text-[var(--muted)]">
                        {s.code}
                      </span>
                      <span className="text-sm leading-5 text-[var(--ink)]">
                        {s.name}
                      </span>
                    </span>
                    {studied ? (
                      <Link
                        href={`/subject/${s.code.toLowerCase()}`}
                        className="inline-flex min-h-10 shrink-0 items-center text-[11px] font-medium text-[var(--accent)] transition hover:underline"
                      >
                        Study →
                      </Link>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </div>

      <p className="mt-4 text-xs text-slate-400 dark:text-slate-500">
        OnePagers open in Google Drive. Subjects tagged <span className="font-bold text-[#1e5bd6] dark:text-[#7AA0FF]">Study →</span> also have interactive WilliamsHub lectures.
      </p>
    </div>
  );
}
