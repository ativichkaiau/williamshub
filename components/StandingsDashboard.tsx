'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getVisited, getStreak, getQuizStats } from '../lib/user/activity';
import { getBookmarks } from '../lib/user/bookmarks';
import { getRepairQueue } from '../lib/repair/store';

export interface SubjectMeta {
  code: string;
  name: string;
  slug: string;
  year: number;
  total: number;
}

interface Entry {
  k: string;
  s?: string | null;
  id?: string;
}

interface Row extends SubjectMeta {
  covered: number;
  pct: number;
  acc: number | null;
  answered: number;
  repairs: number;
}

function StatTile({
  icon,
  value,
  label,
  sub,
  accent,
}: {
  icon: string;
  value: string;
  label: string;
  sub?: string;
  accent?: 'red' | 'gold';
}) {
  const valueCls =
    accent === 'red'
      ? 'text-[#e4002b] dark:text-[#ff5a72]'
      : accent === 'gold'
        ? 'text-[#b8860b] dark:text-[#ffcc00]'
        : 'text-slate-900 dark:text-white';
  return (
    <div className="clay-node clay-surface px-3 py-4 text-center">
      <div className="text-xl" aria-hidden>{icon}</div>
      <div className={`mt-1 text-2xl font-black tabular-nums ${valueCls}`}>{value}</div>
      <div className="text-[10px] font-bold uppercase tracking-wide text-slate-500 dark:text-slate-400">{label}</div>
      {sub ? <div className="text-[10px] text-slate-400 dark:text-slate-500">{sub}</div> : null}
    </div>
  );
}

function RowView({ r, rank }: { r: Row; rank: number }) {
  return (
    <Link
      href={`/subject/${r.slug}`}
      className="clay-node clay-surface flex items-center gap-3 px-3 py-2.5 transition hover:-translate-y-0.5"
    >
      <span className="w-6 shrink-0 text-center text-sm font-black tabular-nums text-slate-400 dark:text-slate-500">
        {rank}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="shrink-0 text-sm font-black text-slate-900 dark:text-white">{r.code}</span>
          <span className="truncate text-xs text-slate-400 dark:text-slate-500">{r.name}</span>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="clay-inset h-2 flex-1 overflow-hidden rounded-full">
            <span
              className="block h-full rounded-full bg-[linear-gradient(90deg,#2e5bff,#0a1a7a)]"
              style={{ width: `${r.pct}%` }}
            />
          </span>
          <span className="w-14 shrink-0 text-right text-[11px] font-semibold tabular-nums text-slate-500 dark:text-slate-400">
            {r.covered}/{r.total}
          </span>
        </div>
      </div>
      {r.acc != null ? (
        <span
          className="hidden shrink-0 rounded bg-emerald-100 px-1.5 py-0.5 text-[10px] font-bold text-emerald-700 dark:bg-emerald-900/45 dark:text-emerald-200 sm:inline"
          title={`${r.answered} answered`}
        >
          {r.acc}%
        </span>
      ) : null}
      {r.repairs > 0 ? (
        <span className="shrink-0 rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-bold text-rose-700 dark:bg-rose-900/45 dark:text-rose-200">
          🔧 {r.repairs}
        </span>
      ) : null}
    </Link>
  );
}

export default function StandingsDashboard({ subjects }: { subjects: SubjectMeta[] }) {
  const [ready, setReady] = useState(false);
  const [rows, setRows] = useState<Row[]>([]);
  const [t, setT] = useState({ modules: 0, covered: 0, pct: 0, repairs: 0, garage: 0, streak: 0, best: 0 });

  useEffect(() => {
    const visited = new Set(getVisited());
    const quiz = getQuizStats();
    const repair = getRepairQueue();
    const garage = getBookmarks().length;
    const streak = getStreak();

    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data: Entry[]) => {
        const idToSubject: Record<string, string> = {};
        for (const e of data) if (e.k === 'm' && e.id && e.s) idToSubject[e.id] = e.s;

        const covered: Record<string, number> = {};
        for (const id of visited) {
          const c = idToSubject[id];
          if (c) covered[c] = (covered[c] || 0) + 1;
        }

        const quizBy: Record<string, { c: number; a: number }> = {};
        for (const [id, qs] of Object.entries(quiz)) {
          const c = idToSubject[id];
          if (!c) continue;
          const agg = (quizBy[c] ??= { c: 0, a: 0 });
          for (const ok of Object.values(qs)) {
            agg.a++;
            if (ok) agg.c++;
          }
        }

        const repairBy: Record<string, number> = {};
        let openRepairs = 0;
        for (const it of repair) {
          if (it.completed_at) continue;
          openRepairs++;
          repairBy[it.subject_id] = (repairBy[it.subject_id] || 0) + 1;
        }

        const rws: Row[] = subjects
          .map((s) => {
            const cov = covered[s.code] || 0;
            const q = quizBy[s.code];
            return {
              ...s,
              covered: cov,
              pct: s.total ? Math.round((cov / s.total) * 100) : 0,
              acc: q && q.a ? Math.round((q.c / q.a) * 100) : null,
              answered: q?.a ?? 0,
              repairs: repairBy[s.code] || 0,
            };
          })
          .sort((a, b) => b.pct - a.pct || b.covered - a.covered || a.code.localeCompare(b.code));

        const modules = subjects.reduce((n, s) => n + s.total, 0);
        const totalCovered = rws.reduce((n, r) => n + r.covered, 0);
        setRows(rws);
        setT({
          modules,
          covered: totalCovered,
          pct: modules ? Math.round((totalCovered / modules) * 100) : 0,
          repairs: openRepairs,
          garage,
          streak: streak.count,
          best: streak.best,
        });
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, [subjects]);

  if (!ready) return <p className="py-10 text-center text-sm text-slate-400">Pulling telemetry…</p>;

  const noActivity = t.covered === 0 && t.repairs === 0 && t.garage === 0 && rows.every((r) => r.answered === 0);
  if (noActivity) {
    return (
      <div className="clay clay-surface p-8 text-center">
        <div className="text-3xl">🏁</div>
        <p className="mt-2 font-bold text-slate-700 dark:text-slate-200">No telemetry yet.</p>
        <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
          Open modules, take the quizzes, and sync WilliamsPod — your coverage, accuracy and streak will build the
          championship table here.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile icon="🔥" value={`${t.streak}`} label="Day streak" sub={`best ${t.best}`} accent="gold" />
        <StatTile icon="📍" value={`${t.pct}%`} label="Coverage" sub={`${t.covered}/${t.modules}`} />
        <StatTile icon="🔧" value={`${t.repairs}`} label="Open repairs" sub="pit box" accent={t.repairs > 0 ? 'red' : undefined} />
        <StatTile icon="⭐" value={`${t.garage}`} label="In garage" sub="starred" />
      </div>

      <section className="clay clay-surface p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc00]" />
            <h2 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
              Constructors&rsquo; standings
            </h2>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
            by coverage
          </span>
        </div>
        <div className="space-y-1.5">
          {rows.map((r, i) => (
            <RowView key={r.code} r={r} rank={i + 1} />
          ))}
        </div>
      </section>
    </div>
  );
}
