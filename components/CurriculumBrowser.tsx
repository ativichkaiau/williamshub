'use client';

import { useState, type CSSProperties } from 'react';
import Link from 'next/link';
import HubIcon from './HubIcon';

export interface SubjectCard {
  code: string;
  name: string;
  count: number; // distinct lectures (L1, L2, …)
  modules: number;
  slug: string;
}

export interface YearData {
  year: number;
  label: string;
  note?: string;
  hasContent: boolean;
  subjects: SubjectCard[];
}

export default function CurriculumBrowser({
  years,
  defaultYear,
}: {
  years: YearData[];
  defaultYear: number;
}) {
  const [active, setActive] = useState(defaultYear);
  const year = years.find((y) => y.year === active) ?? years[0];

  return (
    <div>
      {/* Year tabs */}
      <div className="year-tabs" role="group" aria-label="Academic year">
        {years.map((y) => {
          const isActive = y.year === active;
          return (
            <button
              key={y.year}
              type="button"
              onClick={() => setActive(y.year)}
              aria-pressed={isActive}
              className="year-tab"
            >
              {y.label}
              {!y.hasContent && y.note && <span className="text-[11px]">· {y.note}</span>}
            </button>
          );
        })}
      </div>

      {/* Subject grid — grid-stagger replays the entrance when a year tab
          swaps the list, so switching years feels like the cars filing past. */}
      <div key={active} className="grid-stagger grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {year.subjects.map((s, i) =>
          s.count > 0 ? (
            <Link
              key={s.code}
              href={`/subject/${s.slug}`}
              className="subject-card group"
              style={{ '--i': i } as CSSProperties}
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] font-medium tracking-wide text-[var(--accent)]">
                  {s.code}
                </span>
                <span className="subject-card-mark" aria-hidden="true" />
              </div>
              <span className="mb-5 mt-3 text-[15px] font-medium leading-6 text-[var(--ink)]">
                {s.name}
              </span>
              <span className="mt-auto flex items-center justify-between gap-2 text-[11px] text-[var(--muted)]">
                <span>{s.count} lecture{s.count === 1 ? '' : 's'} · {s.modules} modules</span>
                <HubIcon name="arrow" className="text-[var(--muted)] transition group-hover:text-[var(--accent)]" />
              </span>
            </Link>
          ) : (
            <div key={s.code} className="subject-card subject-card-unavailable" style={{ '--i': i } as CSSProperties}>
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] tracking-wide text-[var(--muted)]">
                  {s.code}
                </span>
                <span className="text-[11px] text-[var(--muted)]">Coming soon</span>
              </div>
              <span className="mt-3 text-[15px] font-medium leading-6 text-[var(--muted)]">
                {s.name}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
