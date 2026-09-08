'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getVisited, getStreak, getQuizStats } from '../lib/user/activity';
import { getBookmarks } from '../lib/user/bookmarks';
import { getRepairQueue } from '../lib/repair/store';
import HubIcon from './HubIcon';

export interface SubjectMeta {
  code: string;
  name: string;
  slug: string;
  year: number;
  total: number;
  keystones?: { id: string; title: string }[];
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
  value,
  label,
  sub,
  accent,
}: {
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
        : 'text-[var(--ink)]';
  return (
    <div className="clay-node clay-surface px-4 py-4">
      <div className="eyebrow">{label}</div>
      <div className={`mt-1.5 text-2xl font-semibold tabular-nums ${valueCls}`}>{value}</div>
      {sub ? <div className="mt-0.5 text-[11px] text-[var(--muted)]">{sub}</div> : null}
    </div>
  );
}

function RowView({ r, rank }: { r: Row; rank: number }) {
  return (
    <Link
      href={`/subject/${r.slug}`}
      className="clay-node clay-surface flex items-center gap-3 px-3 py-2.5 transition hover:border-[var(--accent)]"
    >
      <span className="w-6 shrink-0 text-center font-mono text-xs font-medium tabular-nums text-[var(--muted)]">
        {rank}
      </span>
      <div className="min-w-0 flex-1">
        <div className="flex items-center gap-2">
          <span className="shrink-0 font-mono text-xs font-medium text-[var(--accent)]">{r.code}</span>
          <span className="truncate text-xs text-[var(--muted)]">{r.name}</span>
        </div>
        <div className="mt-1.5 flex items-center gap-2">
          <span className="clay-inset h-1.5 flex-1 overflow-hidden rounded-full">
            <span
              className="block h-full rounded-full bg-[var(--accent)]"
              style={{ width: `${r.pct}%` }}
            />
          </span>
          <span className="w-14 shrink-0 text-right text-[11px] font-medium tabular-nums text-[var(--muted)]">
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
        <span className="inline-flex shrink-0 items-center gap-1 rounded bg-rose-100 px-1.5 py-0.5 text-[10px] font-semibold text-rose-700 dark:bg-rose-900/45 dark:text-rose-200">
          <HubIcon name="repair" className="h-3 w-3" /> {r.repairs}
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

  if (!ready) return <p className="py-10 text-center text-sm text-[var(--muted)]">Loading…</p>;

  const noActivity = t.covered === 0 && t.repairs === 0 && t.garage === 0 && rows.every((r) => r.answered === 0);
  if (noActivity) {
    return (
      <div className="clay clay-surface p-8 text-center">
        <HubIcon name="progress" className="mx-auto h-8 w-8 text-[var(--muted)]" />
        <p className="mt-3 font-semibold text-[var(--ink)]">No activity yet.</p>
        <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-[var(--muted)]">
          Open modules, take the quizzes, and sync WilliamsPod — your coverage, accuracy and streak will build your
          progress here.
        </p>
      </div>
    );
  }

  // Keystones from the blocks that need you most: rank by open repairs, then by
  // how little you've covered. Combines build-time centrality with live telemetry.
  const focus = rows
    .filter((r) => (r.keystones?.length ?? 0) > 0)
    .map((r) => ({ r, need: r.repairs * 3 + (100 - r.pct) / 20 }))
    .sort((a, b) => b.need - a.need)
    .slice(0, 3)
    .map((x) => x.r);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        <StatTile value={`${t.streak}`} label="Day streak" sub={`best ${t.best}`} accent="gold" />
        <StatTile value={`${t.pct}%`} label="Coverage" sub={`${t.covered}/${t.modules}`} />
        <StatTile value={`${t.repairs}`} label="Open repairs" sub="repair queue" accent={t.repairs > 0 ? 'red' : undefined} />
        <StatTile value={`${t.garage}`} label="Saved" sub="starred" />
      </div>

      {focus.length > 0 ? (
        <section className="clay clay-surface p-5">
          <div className="mb-1 flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc00]" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
              Study these first
            </h2>
          </div>
          <p className="mb-3 text-xs text-[var(--muted)]">
            Keystone modules from the blocks that need you most — the hubs the rest of each block leans on.
          </p>
          <div className="space-y-3">
            {focus.map((r) => (
              <div key={r.code}>
                <div className="mb-1.5 flex items-center gap-2 text-xs">
                  <Link href={`/subject/${r.slug}`} className="font-mono font-medium text-[var(--accent)] transition hover:underline">
                    {r.code}
                  </Link>
                  <span className="text-[var(--muted)]">
                    {r.pct}% covered{r.repairs > 0 ? ` · ${r.repairs} repair${r.repairs === 1 ? '' : 's'}` : ''}
                  </span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {r.keystones!.map((k) => (
                    <Link
                      key={k.id}
                      href={`/lecture/${k.id}`}
                      className="clay-pill px-2.5 py-1 text-xs font-medium text-[var(--ink)] transition hover:text-[var(--accent)] hover:border-[var(--accent)]"
                    >
                      {k.title}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      ) : null}

      <section className="clay clay-surface p-5">
        <div className="mb-4 flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-[#ffcc00]" />
            <h2 className="text-sm font-semibold uppercase tracking-[0.1em] text-[var(--ink)]">
              Blocks
            </h2>
          </div>
          <span className="text-[10px] font-medium uppercase tracking-wide text-[var(--muted)]">
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
