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
      <div className="mb-5 flex flex-wrap gap-2">
        {onePagerYears.map((y) => {
          const isActive = y === active;
          return (
            <button
              key={y}
              type="button"
              onClick={() => setActive(y)}
              className={`clay-pill px-4 py-2 text-sm font-bold transition active:translate-y-px ${
                isActive
                  ? 'text-sky-600 dark:text-sky-400'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {YEAR_LABEL[y] ?? `Year ${y}`}
            </button>
          );
        })}
      </div>

      {/* Module cards */}
      <div className="grid gap-3 sm:grid-cols-2">
        {groups.map((g) => (
          <div key={`${g.year}-${g.term}`} className="clay flex flex-col p-4">
            <div className="flex items-center justify-between">
              <span className="clay-pill px-2.5 py-0.5 text-xs font-bold text-sky-600 dark:text-sky-400">
                {YEAR_LABEL[g.year] ?? `Year ${g.year}`} · {g.term}
              </span>
              {g.driveUrl ? (
                <a
                  href={g.driveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[11px] font-bold text-sky-600 transition hover:underline dark:text-sky-400"
                >
                  Open OnePagers ↗
                </a>
              ) : (
                <span className="text-[11px] font-medium text-slate-400">Folder coming soon</span>
              )}
            </div>

            <ul className="mt-3 flex flex-col gap-1.5">
              {g.subjects.map((s) => {
                const studied = hasContent.has(s.code);
                return (
                  <li
                    key={s.code}
                    className="clay-node clay-surface flex items-center justify-between gap-2 px-3 py-2"
                  >
                    <span className="flex min-w-0 items-center gap-2">
                      <span className="shrink-0 rounded-full bg-sky-500/10 px-2 py-0.5 text-[11px] font-bold text-sky-600 dark:text-sky-400">
                        {s.code}
                      </span>
                      <span className="truncate text-sm font-semibold text-slate-700 dark:text-slate-200">
                        {s.name}
                      </span>
                    </span>
                    {studied ? (
                      <Link
                        href={`/subject/${s.code.toLowerCase()}`}
                        className="shrink-0 text-[11px] font-bold text-emerald-600 transition hover:underline dark:text-emerald-400"
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
        OnePagers open in Google Drive. Subjects tagged <span className="font-bold text-emerald-600 dark:text-emerald-400">Study →</span> also have interactive WilliamsHub lectures.
      </p>
    </div>
  );
}
