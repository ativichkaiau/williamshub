'use client';

import { useState } from 'react';
import Link from 'next/link';

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
      <div className="mb-5 flex flex-wrap gap-2">
        {years.map((y) => {
          const isActive = y.year === active;
          return (
            <button
              key={y.year}
              type="button"
              onClick={() => setActive(y.year)}
              className={`clay-pill px-4 py-2 text-sm font-bold transition active:translate-y-px ${
                isActive
                  ? 'text-emerald-600 dark:text-emerald-400'
                  : 'text-slate-500 dark:text-slate-400'
              }`}
            >
              {y.label}
              {y.hasContent ? (
                <span className="ml-1.5 inline-block h-2 w-2 rounded-full bg-emerald-500 align-middle" />
              ) : y.note ? (
                <span className="ml-1.5 text-[11px] font-medium text-slate-400">· {y.note}</span>
              ) : null}
            </button>
          );
        })}
      </div>

      {/* Subject grid */}
      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {year.subjects.map((s) =>
          s.count > 0 ? (
            <Link
              key={s.code}
              href={`/subject/${s.slug}`}
              className="clay group flex flex-col p-4 transition hover:-translate-y-1"
            >
              <div className="flex items-center justify-between">
                <span className="clay-pill px-2 py-0.5 text-xs font-bold text-emerald-600 dark:text-emerald-400">
                  {s.code}
                </span>
                <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400">
                  {s.count} lecture{s.count === 1 ? '' : 's'} · {s.modules} modules →
                </span>
              </div>
              <span className="mt-2 text-sm font-bold text-slate-900 transition group-hover:text-emerald-600 dark:text-white dark:group-hover:text-emerald-400">
                {s.name}
              </span>
            </Link>
          ) : (
            <div key={s.code} className="clay flex flex-col p-4 opacity-50">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/5 px-2 py-0.5 text-xs font-bold text-slate-500 dark:bg-white/10 dark:text-slate-400">
                  {s.code}
                </span>
                <span className="text-[11px] font-medium text-slate-400">Coming soon</span>
              </div>
              <span className="mt-2 text-sm font-semibold text-slate-600 dark:text-slate-300">
                {s.name}
              </span>
            </div>
          ),
        )}
      </div>
    </div>
  );
}
