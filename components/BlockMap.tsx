'use client';

import { useMemo, useState } from 'react';
import { useRouter } from 'next/navigation';
import type { BlockGraphView } from '../lib/integrations/graphView';

// Whole-block map — a radial view of a subject's lectures (nodes) and how densely
// they cross-link (chord edges). Node size = hub degree; edge width = link weight.
// Pure computed SVG from a serializable model; hover to trace, click to open.

const VB = 620;
const CENTER = VB / 2;
const RADIUS = 232;

export default function BlockMap({ view }: { view: BlockGraphView }) {
  const router = useRouter();
  const [hover, setHover] = useState<string | null>(null);

  const { nodes, edges } = view;

  const pos = useMemo(() => {
    const n = Math.max(1, nodes.length);
    const map = new Map<string, { x: number; y: number }>();
    nodes.forEach((node, i) => {
      const a = -Math.PI / 2 + (i * 2 * Math.PI) / n;
      map.set(node.slug, { x: CENTER + RADIUS * Math.cos(a), y: CENTER + RADIUS * Math.sin(a) });
    });
    return map;
  }, [nodes]);

  const maxDeg = useMemo(() => Math.max(1, ...nodes.map((n) => n.degree)), [nodes]);
  const maxW = useMemo(() => Math.max(1, ...edges.map((e) => e.weight)), [edges]);
  const radiusOf = (deg: number) => 13 + 13 * (deg / maxDeg);

  // Slugs connected to the hovered node (for highlight/dim).
  const connected = useMemo(() => {
    if (!hover) return new Set<string>();
    const s = new Set<string>();
    for (const e of edges) {
      if (e.a === hover) s.add(e.b);
      if (e.b === hover) s.add(e.a);
    }
    return s;
  }, [hover, edges]);

  const hoveredNode = hover ? nodes.find((n) => n.slug === hover) : null;
  const go = (slug: string) => router.push(`/lecture-set/${slug}`);

  return (
    <div>
      <div className="mx-auto max-w-[34rem]">
        <svg viewBox={`0 0 ${VB} ${VB}`} width="100%" className="overflow-visible" role="img" aria-label="Block integration map">
          <defs>
            <linearGradient id="bm-node" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#2e5bff" />
              <stop offset="100%" stopColor="#0a1a7a" />
            </linearGradient>
          </defs>

          {/* edges */}
          <g>
            {edges.map((e, i) => {
              const pa = pos.get(e.a);
              const pb = pos.get(e.b);
              if (!pa || !pb) return null;
              const touches = hover && (e.a === hover || e.b === hover);
              const w = 1.8 + 4.5 * (e.weight / maxW);
              const stroke = touches ? '#ffcc00' : '#2e5bff';
              const opacity = hover ? (touches ? 0.98 : 0.05) : 0.3 + 0.42 * (e.weight / maxW);
              return (
                <line
                  key={i}
                  x1={pa.x}
                  y1={pa.y}
                  x2={pb.x}
                  y2={pb.y}
                  stroke={stroke}
                  strokeWidth={touches ? w + 1 : w}
                  strokeLinecap="round"
                  opacity={opacity}
                />
              );
            })}
          </g>

          {/* center caption */}
          <text x={CENTER} y={CENTER - 6} textAnchor="middle" className="fill-slate-400 dark:fill-slate-500" fontSize="15" fontWeight="800" letterSpacing="1">
            {view.subjectCode}
          </text>
          <text x={CENTER} y={CENTER + 14} textAnchor="middle" className="fill-slate-400 dark:fill-slate-500" fontSize="11" fontWeight="600">
            {nodes.length} lectures · {edges.length} links
          </text>

          {/* nodes */}
          <g>
            {nodes.map((node) => {
              const p = pos.get(node.slug);
              if (!p) return null;
              const r = radiusOf(node.degree);
              const isHover = hover === node.slug;
              const isConn = connected.has(node.slug);
              const dim = hover && !isHover && !isConn;
              return (
                <g
                  key={node.slug}
                  transform={`translate(${p.x},${p.y})`}
                  role="link"
                  tabIndex={0}
                  aria-label={`${node.source} — ${node.moduleCount} modules`}
                  className="cursor-pointer outline-none"
                  onMouseEnter={() => setHover(node.slug)}
                  onMouseLeave={() => setHover(null)}
                  onFocus={() => setHover(node.slug)}
                  onBlur={() => setHover(null)}
                  onClick={() => go(node.slug)}
                  onKeyDown={(ev) => {
                    if (ev.key === 'Enter' || ev.key === ' ') {
                      ev.preventDefault();
                      go(node.slug);
                    }
                  }}
                  opacity={dim ? 0.32 : 1}
                >
                  <circle
                    r={r}
                    fill="url(#bm-node)"
                    stroke={isHover ? '#ffcc00' : isConn ? '#ffcc00' : '#ffffff'}
                    strokeWidth={isHover ? 3 : isConn ? 2 : 1}
                    strokeOpacity={isHover || isConn ? 0.95 : 0.25}
                  />
                  <text textAnchor="middle" dy="0.35em" fill="#ffffff" fontSize={r > 18 ? 13 : 11} fontWeight="800">
                    {node.short}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      <p className="mx-auto mt-1 min-h-[2.25rem] max-w-md text-center text-xs text-slate-500 dark:text-slate-400">
        {hoveredNode ? (
          <span>
            <span className="font-bold text-slate-700 dark:text-slate-200">{hoveredNode.short}</span> · {hoveredNode.label} ·{' '}
            {hoveredNode.moduleCount} module{hoveredNode.moduleCount === 1 ? '' : 's'} · {connected.size} linked lecture
            {connected.size === 1 ? '' : 's'}
          </span>
        ) : (
          'Hover a lecture to trace its links · click to open the whole lecture. Bigger node = more connected.'
        )}
      </p>
    </div>
  );
}
