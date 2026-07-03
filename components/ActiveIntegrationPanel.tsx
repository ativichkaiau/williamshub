import Link from 'next/link';
import { lectureById } from '../content';
import { moduleNodes } from '../lib/integrations/graph';
import { getIntegrations, hasAnyIntegration } from '../lib/integrations/resolve';
import type {
  IntegrationStrength,
  ModuleIntegration,
  RepairRecommendation,
  TrapLink,
} from '../lib/integrations/types';

// Active Integration — treats the module as a node in the knowledge graph and
// shows its prerequisite / forward / horizontal / vertical / trap / repair links.
// Server component (no client JS): fully static, computed at build time.

const STRENGTH_BADGE: Record<IntegrationStrength, string> = {
  critical: 'bg-rose-100 text-rose-700 dark:bg-rose-900/45 dark:text-rose-200',
  strong: 'bg-amber-100 text-amber-700 dark:bg-amber-900/45 dark:text-amber-200',
  moderate: 'bg-sky-100 text-sky-700 dark:bg-sky-900/45 dark:text-sky-200',
  weak: 'bg-black/5 text-slate-500 dark:bg-white/10 dark:text-slate-400',
};

interface SectionMeta {
  label: string;
  dot: string;
  text: string;
}

// The six categories, in the order + wording the feature specifies.
const SECTIONS = {
  prerequisite: { label: 'Before this, review', dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400' },
  forward: { label: 'This connects forward to', dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
  horizontal: { label: 'Same-block connections', dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400' },
  vertical: { label: 'Clinical applications', dot: 'bg-fuchsia-500', text: 'text-fuchsia-600 dark:text-fuchsia-400' },
  trap: { label: 'Exam traps', dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400' },
  repair: { label: 'Repair recommendations', dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
} satisfies Record<string, SectionMeta>;

function StrengthBadge({ strength }: { strength: IntegrationStrength }) {
  return (
    <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${STRENGTH_BADGE[strength]}`}>
      {strength}
    </span>
  );
}

function ModuleLink({ id, className }: { id: string; className?: string }) {
  const title = lectureById[id]?.title ?? id.replace(/-/g, ' ');
  const subject = moduleNodes[id]?.subjectCode;
  return (
    <span className="inline-flex items-baseline gap-1.5">
      <Link
        href={`/lecture/${id}`}
        className={`font-semibold text-slate-900 underline decoration-dotted underline-offset-2 hover:text-sky-700 dark:text-white dark:hover:text-sky-300 ${className ?? ''}`}
      >
        {title}
      </Link>
      {subject ? (
        <span className="shrink-0 rounded bg-black/5 px-1 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
          {subject}
        </span>
      ) : null}
    </span>
  );
}

function SectionHeader({ meta }: { meta: SectionMeta }) {
  return (
    <div className="mb-2 flex items-center gap-2">
      <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
      <h4 className={`text-xs font-bold uppercase tracking-wide ${meta.text}`}>{meta.label}</h4>
    </div>
  );
}

function EdgeList({ meta, edges }: { meta: SectionMeta; edges: ModuleIntegration[] }) {
  if (edges.length === 0) return null;
  return (
    <div>
      <SectionHeader meta={meta} />
      <ul className="space-y-1.5">
        {edges.map((e) => (
          <li key={e.targetId} className="flex items-start gap-2 text-sm">
            <StrengthBadge strength={e.strength} />
            <span className="leading-snug">
              <ModuleLink id={e.targetId} />
              <span className="text-slate-500 dark:text-slate-400"> — {e.reason}</span>
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function TrapList({ traps }: { traps: TrapLink[] }) {
  if (traps.length === 0) return null;
  return (
    <div>
      <SectionHeader meta={SECTIONS.trap} />
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
            {t.relatedModuleId ? (
              <div className="mt-1.5 text-xs text-slate-500 dark:text-slate-400">
                Review: <ModuleLink id={t.relatedModuleId} className="text-xs" />
              </div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}

function RepairList({ items }: { items: RepairRecommendation[] }) {
  if (items.length === 0) return null;
  return (
    <div>
      <SectionHeader meta={SECTIONS.repair} />
      <ul className="space-y-1.5">
        {items.map((r, i) => (
          <li key={`${r.targetId}-${i}`} className="flex items-start gap-2 text-sm">
            <StrengthBadge strength={r.strength} />
            <span className="leading-snug">
              <span className="italic text-slate-500 dark:text-slate-400">{r.trigger} → </span>
              <ModuleLink id={r.targetId} />
              {r.reason ? <span className="text-slate-500 dark:text-slate-400"> — {r.reason}</span> : null}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function ActiveIntegrationPanel({ moduleId }: { moduleId: string }) {
  const b = getIntegrations(moduleId);

  return (
    <section className="clay clay-surface mt-5 p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-indigo-500 to-fuchsia-500" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
            Active Integration
          </h3>
        </div>
        <span className="text-[10px] font-medium uppercase tracking-wide text-slate-400 dark:text-slate-500">
          knowledge graph
        </span>
      </div>

      {hasAnyIntegration(b) ? (
        <div className="grid gap-4 sm:grid-cols-2">
          <EdgeList meta={SECTIONS.prerequisite} edges={b.prerequisite} />
          <EdgeList meta={SECTIONS.forward} edges={b.forward} />
          <EdgeList meta={SECTIONS.horizontal} edges={b.horizontal} />
          <EdgeList meta={SECTIONS.vertical} edges={b.vertical} />
          <TrapList traps={b.traps} />
          <RepairList items={b.repair} />
        </div>
      ) : (
        <p className="text-sm text-slate-500 dark:text-slate-400">
          No integrations mapped yet — cross-module links will appear here as related content is added.
        </p>
      )}
    </section>
  );
}
