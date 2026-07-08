'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import type {
  EdgeView,
  ModuleGraphView,
  RepairView,
  TrapView,
} from '../lib/integrations/graphView';
import type { IntegrationStrength } from '../lib/integrations/types';
import { getWeakModules } from '../lib/user/weakness';

// Active Integration — interactive map + list. Renders from a fully-resolved,
// serializable view-model (no content imports → tiny client bundle). The map is
// HTML clay-cards with a measured SVG edge overlay drawn behind them.

type Cat = 'prerequisite' | 'forward' | 'horizontal' | 'vertical';

interface CatMeta {
  label: string;
  dot: string;
  text: string;
  stroke: string; // hex for SVG edges
}

const CAT: Record<Cat, CatMeta> = {
  prerequisite: { label: 'Before this, review', dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', stroke: '#6366f1' },
  forward: { label: 'Leads forward to', dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', stroke: '#10b981' },
  horizontal: { label: 'Same-block peers', dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400', stroke: '#0ea5e9' },
  vertical: { label: 'Clinical applications', dot: 'bg-fuchsia-500', text: 'text-fuchsia-600 dark:text-fuchsia-400', stroke: '#d946ef' },
};

const STRENGTH_BADGE: Record<IntegrationStrength, string> = {
  critical: 'bg-rose-100 text-rose-700 dark:bg-rose-900/45 dark:text-rose-200',
  strong: 'bg-amber-100 text-amber-700 dark:bg-amber-900/45 dark:text-amber-200',
  moderate: 'bg-sky-100 text-sky-700 dark:bg-sky-900/45 dark:text-sky-200',
  weak: 'bg-black/5 text-slate-500 dark:bg-white/10 dark:text-slate-400',
};

const STRENGTH_LINE: Record<IntegrationStrength, { w: number; o: number }> = {
  critical: { w: 4, o: 0.95 },
  strong: { w: 3, o: 0.85 },
  moderate: { w: 2.2, o: 0.7 },
  weak: { w: 1.5, o: 0.55 },
};

// ── shared bits ──────────────────────────────────────────────────────────────

function SubjectChip({ code }: { code: string | null }) {
  if (!code) return null;
  return (
    <span className="shrink-0 rounded bg-black/5 px-1 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
      {code}
    </span>
  );
}

function StrengthBadge({ strength }: { strength: IntegrationStrength }) {
  return (
    <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${STRENGTH_BADGE[strength]}`}>
      {strength}
    </span>
  );
}

// ── MAP ──────────────────────────────────────────────────────────────────────

interface Seg {
  id: string;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  cat: Cat;
  strength: IntegrationStrength;
  weak: boolean;
}

function NodeCard({
  edge,
  cat,
  onHover,
  weak,
}: {
  edge: EdgeView;
  cat: Cat;
  onHover: (id: string | null) => void;
  weak: boolean;
}) {
  return (
    <Link
      href={`/lecture/${edge.id}`}
      data-node={edge.id}
      data-cat={cat}
      data-strength={edge.strength}
      data-weak={weak ? '1' : undefined}
      onMouseEnter={() => onHover(edge.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(edge.id)}
      onBlur={() => onHover(null)}
      title={weak ? 'A weak spot for you — this link is worth drilling' : undefined}
      className={`clay-node clay-surface group/node flex max-w-[15rem] items-center gap-1.5 px-2.5 py-1.5 transition hover:-translate-y-0.5 ${
        weak ? 'ring-2 ring-amber-400/80 dark:ring-amber-400/70' : ''
      }`}
    >
      <span className={`h-2 w-2 shrink-0 rounded-full ${weak ? 'bg-amber-500' : CAT[cat].dot}`} />
      <span className="truncate text-xs font-semibold text-slate-800 group-hover/node:text-slate-950 dark:text-slate-100 dark:group-hover/node:text-white">
        {edge.title}
      </span>
      {weak ? <span className="shrink-0 text-[11px]" aria-label="weak spot">◍</span> : null}
      <SubjectChip code={edge.subjectCode} />
    </Link>
  );
}

function Group({
  cat,
  edges,
  layout,
  onHover,
  weak,
}: {
  cat: Cat;
  edges: EdgeView[];
  layout: 'band' | 'column';
  onHover: (id: string | null) => void;
  weak: Set<string>;
}) {
  if (edges.length === 0) return null;
  const align = cat === 'prerequisite' ? 'sm:items-end' : cat === 'forward' ? 'sm:items-start' : 'items-center';
  return (
    <div className={`flex flex-col gap-1.5 ${layout === 'column' ? align : 'items-center'}`}>
      <div className="flex items-center gap-1.5">
        <span className={`h-1.5 w-1.5 rounded-full ${CAT[cat].dot}`} />
        <span className={`text-[10px] font-bold uppercase tracking-wide ${CAT[cat].text}`}>{CAT[cat].label}</span>
      </div>
      <div className={layout === 'band' ? 'flex flex-wrap justify-center gap-1.5' : 'flex flex-col gap-1.5'}>
        {edges.map((e) => (
          <NodeCard key={e.id} edge={e} cat={cat} onHover={onHover} weak={weak.has(e.id)} />
        ))}
      </div>
    </div>
  );
}

function MapView({ view, weak }: { view: ModuleGraphView; weak: Set<string> }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [segs, setSegs] = useState<Seg[]>([]);
  const [dims, setDims] = useState({ w: 0, h: 0 });
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const measure = () => {
      const cRect = container.getBoundingClientRect();
      const centerEl = container.querySelector('[data-center]');
      if (!centerEl) return;
      const cc = centerEl.getBoundingClientRect();
      const cx = cc.left + cc.width / 2 - cRect.left;
      const cy = cc.top + cc.height / 2 - cRect.top;

      const next: Seg[] = [];
      container.querySelectorAll('[data-node]').forEach((el) => {
        const r = el.getBoundingClientRect();
        next.push({
          id: el.getAttribute('data-node') ?? '',
          x1: cx,
          y1: cy,
          x2: r.left + r.width / 2 - cRect.left,
          y2: r.top + r.height / 2 - cRect.top,
          cat: (el.getAttribute('data-cat') as Cat) ?? 'horizontal',
          strength: (el.getAttribute('data-strength') as IntegrationStrength) ?? 'weak',
          weak: el.getAttribute('data-weak') === '1',
        });
      });
      setSegs(next);
      setDims({ w: cRect.width, h: cRect.height });
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(container);
    return () => ro.disconnect();
  }, [view]);

  const showEdges = dims.w >= 560;
  const hoveredEdge = hovered
    ? [...view.prerequisite, ...view.forward, ...view.horizontal, ...view.vertical].find((e) => e.id === hovered)
    : null;

  return (
    <div>
      <div ref={containerRef} className="relative">
        {showEdges ? (
          <svg
            className="pointer-events-none absolute inset-0 z-0"
            width={dims.w}
            height={dims.h}
            viewBox={`0 0 ${dims.w} ${dims.h}`}
            aria-hidden="true"
          >
            {segs.map((s) => {
              const dim = hovered && hovered !== s.id;
              const on = hovered === s.id;
              const line = STRENGTH_LINE[s.strength];
              return (
                <g key={s.id}>
                  {s.weak ? (
                    <line
                      x1={s.x1}
                      y1={s.y1}
                      x2={s.x2}
                      y2={s.y2}
                      stroke="#f59e0b"
                      strokeWidth={(on ? line.w + 1 : line.w) + 4}
                      strokeLinecap="round"
                      opacity={dim ? 0.1 : 0.4}
                    />
                  ) : null}
                  <line
                    x1={s.x1}
                    y1={s.y1}
                    x2={s.x2}
                    y2={s.y2}
                    stroke={CAT[s.cat].stroke}
                    strokeWidth={on ? line.w + 1 : line.w}
                    strokeLinecap="round"
                    opacity={dim ? 0.12 : on ? 1 : line.o}
                  />
                </g>
              );
            })}
          </svg>
        ) : null}

        <div className="relative z-10 flex flex-col items-center gap-3">
          <Group cat="horizontal" edges={view.horizontal} layout="band" onHover={setHovered} weak={weak} />

          <div className="grid w-full items-center gap-3 sm:grid-cols-[1fr_auto_1fr]">
            <Group cat="prerequisite" edges={view.prerequisite} layout="column" onHover={setHovered} weak={weak} />

            <div
              data-center
              className="livery-edge clay-node mx-auto max-w-[16rem] overflow-hidden bg-[linear-gradient(135deg,#2e5bff_0%,#0a1a7a_100%)] px-4 py-3 text-center text-white"
            >
              <div className="text-[9px] font-bold uppercase tracking-[0.2em] text-white/70">This module</div>
              <div className="mt-0.5 text-sm font-black leading-tight">{view.center.title}</div>
              {view.center.subjectCode ? (
                <div className="mt-1 inline-block rounded bg-white/15 px-1.5 py-0.5 text-[10px] font-semibold text-white/90">
                  {view.center.subjectCode}
                </div>
              ) : null}
            </div>

            <Group cat="forward" edges={view.forward} layout="column" onHover={setHovered} weak={weak} />
          </div>

          <Group cat="vertical" edges={view.vertical} layout="band" onHover={setHovered} weak={weak} />
        </div>
      </div>

      <p className="mt-3 flex min-h-[1.25rem] flex-wrap items-center justify-center gap-x-1.5 gap-y-1 text-center text-xs text-slate-500 dark:text-slate-400">
        {hoveredEdge ? (
          <>
            <span>{hoveredEdge.reason}</span>
            {hoveredEdge.via ? (
              <span className="rounded bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-600 dark:text-indigo-300">
                via {hoveredEdge.via}
              </span>
            ) : null}
            {hoveredEdge.evidence ? (
              <span className="rounded bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
                ◆ {hoveredEdge.evidence}
              </span>
            ) : null}
          </>
        ) : segs.some((s) => s.weak) ? (
          '◍ = a weak spot from your misses — those links are lit amber. Hover a node to see how it connects.'
        ) : (
          'Hover a node to see how it connects · click to open the module.'
        )}
      </p>

      {view.traps.length > 0 || view.repair.length > 0 ? (
        <div className="mt-4 grid gap-4 border-t border-black/5 pt-4 dark:border-white/10 sm:grid-cols-2">
          <TrapSection traps={view.traps} />
          <RepairSection items={view.repair} />
        </div>
      ) : null}
    </div>
  );
}

// ── LIST ─────────────────────────────────────────────────────────────────────

function EdgeRow({ edge, weak }: { edge: EdgeView; weak: boolean }) {
  return (
    <li className="flex items-start gap-2 text-sm">
      <StrengthBadge strength={edge.strength} />
      <span className="leading-snug">
        {weak ? (
          <span className="mr-1 text-amber-500" title="A weak spot for you" aria-label="weak spot">
            ◍
          </span>
        ) : null}
        <Link
          href={`/lecture/${edge.id}`}
          className={`font-semibold underline decoration-dotted underline-offset-2 hover:text-sky-700 dark:hover:text-sky-300 ${
            weak ? 'text-amber-700 dark:text-amber-300' : 'text-slate-900 dark:text-white'
          }`}
        >
          {edge.title}
        </Link>{' '}
        <SubjectChip code={edge.subjectCode} />
        <span className="text-slate-500 dark:text-slate-400"> — {edge.reason}</span>
        {edge.via ? (
          <span className="ml-1 inline-block whitespace-nowrap rounded bg-indigo-500/10 px-1.5 py-0.5 text-[10px] font-semibold text-indigo-600 dark:text-indigo-300">
            via {edge.via}
          </span>
        ) : null}
        {edge.evidence ? (
          <span className="ml-1 inline-block whitespace-nowrap rounded bg-black/5 px-1.5 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
            ◆ {edge.evidence}
          </span>
        ) : null}
      </span>
    </li>
  );
}

function EdgeSection({ cat, edges, weak }: { cat: Cat; edges: EdgeView[]; weak: Set<string> }) {
  if (edges.length === 0) return null;
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${CAT[cat].dot}`} />
        <h4 className={`text-xs font-bold uppercase tracking-wide ${CAT[cat].text}`}>{CAT[cat].label}</h4>
      </div>
      <ul className="space-y-1.5">
        {edges.map((e) => (
          <EdgeRow key={e.id} edge={e} weak={weak.has(e.id)} />
        ))}
      </ul>
    </div>
  );
}

function TrapSection({ traps }: { traps: TrapView[] }) {
  if (traps.length === 0) return null;
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-rose-500" />
        <h4 className="text-xs font-bold uppercase tracking-wide text-rose-600 dark:text-rose-400">Exam traps</h4>
      </div>
      <div className="space-y-2">
        {traps.map((t, i) => (
          <div key={i} className="clay-node bg-rose-100 p-3 text-sm dark:bg-rose-900/35">
            <div className="text-[11px] font-bold uppercase tracking-wide text-rose-600 dark:text-rose-300">
              {t.questionCategory}
            </div>
            <div className="mt-1 flex items-start gap-1.5">
              <span className="font-bold text-rose-500">✗</span>
              <span className="text-slate-600 dark:text-slate-300">{t.wrongInstinct}</span>
            </div>
            <div className="mt-0.5 flex items-start gap-1.5">
              <span className="font-bold text-emerald-600 dark:text-emerald-400">✓</span>
              <span className="font-medium text-slate-900 dark:text-white">{t.rightAnswer}</span>
            </div>
            {t.relatedId ? (
              <div className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                Review:{' '}
                <Link
                  href={`/lecture/${t.relatedId}`}
                  className="font-semibold text-slate-800 underline decoration-dotted underline-offset-2 hover:text-sky-700 dark:text-slate-100 dark:hover:text-sky-300"
                >
                  {t.relatedTitle ?? t.relatedId.replace(/-/g, ' ')}
                </Link>{' '}
                <SubjectChip code={t.relatedSubject ?? null} />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function RepairSection({ items }: { items: RepairView[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className="h-2 w-2 rounded-full bg-amber-500" />
        <h4 className="text-xs font-bold uppercase tracking-wide text-amber-600 dark:text-amber-400">
          Repair recommendations
        </h4>
      </div>
      <ul className="space-y-1.5">
        {items.map((r, i) => (
          <li key={`${r.id}-${i}`} className="flex items-start gap-2 text-sm">
            <StrengthBadge strength={r.strength} />
            <span className="leading-snug">
              <span className="italic text-slate-500 dark:text-slate-400">{r.trigger} → </span>
              <Link
                href={`/lecture/${r.id}`}
                className="font-semibold text-slate-900 underline decoration-dotted underline-offset-2 hover:text-sky-700 dark:text-white dark:hover:text-sky-300"
              >
                {r.title}
              </Link>{' '}
              <SubjectChip code={r.subjectCode} />
              {r.reason ? <span className="text-slate-500 dark:text-slate-400"> — {r.reason}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function ListView({ view, weak }: { view: ModuleGraphView; weak: Set<string> }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2">
      <EdgeSection cat="prerequisite" edges={view.prerequisite} weak={weak} />
      <EdgeSection cat="forward" edges={view.forward} weak={weak} />
      <EdgeSection cat="horizontal" edges={view.horizontal} weak={weak} />
      <EdgeSection cat="vertical" edges={view.vertical} weak={weak} />
      <TrapSection traps={view.traps} />
      <RepairSection items={view.repair} />
    </div>
  );
}

// ── shell ────────────────────────────────────────────────────────────────────

export default function IntegrationExplorer({ view }: { view: ModuleGraphView }) {
  // A module whose links are all traps/repair has nothing to plot — open on List.
  const [mode, setMode] = useState<'map' | 'list'>(view.edgeCount > 0 ? 'map' : 'list');

  // Personal weak-spot set — filled after mount (localStorage is client-only, and
  // an empty initial set keeps the server/first-paint markup identical → no
  // hydration mismatch). Recomputed when the user returns to the tab.
  const [weak, setWeak] = useState<Set<string>>(() => new Set());
  useEffect(() => {
    const refresh = () => setWeak(getWeakModules());
    refresh();
    window.addEventListener('focus', refresh);
    return () => window.removeEventListener('focus', refresh);
  }, []);

  return (
    <div>
      <div className="mb-4 clay-inset inline-flex gap-1 p-1">
        {(['map', 'list'] as const).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMode(m)}
            aria-pressed={mode === m}
            className={`rounded-lg px-3 py-1 text-xs font-bold uppercase tracking-wide transition active:translate-y-px ${
              mode === m
                ? 'clay text-[#1e5bd6] dark:text-[#7AA0FF]'
                : 'text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-200'
            }`}
          >
            {m === 'map' ? '◎ Map' : '☰ List'}
          </button>
        ))}
      </div>

      {mode === 'map' ? <MapView view={view} weak={weak} /> : <ListView view={view} weak={weak} />}
    </div>
  );
}
