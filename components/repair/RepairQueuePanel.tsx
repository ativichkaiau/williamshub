'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  ERROR_TYPE_META,
  clearCompleted,
  completeRepairItem,
  getRepairQueue,
  reopenRepairItem,
  sortRepairQueue,
} from '../../lib/repair/store';
import type { RepairPriority, RepairQueueItem } from '../../lib/repair/types';

const PRIORITY_BADGE: Record<RepairPriority, string> = {
  critical: 'bg-rose-100 text-rose-700 dark:bg-rose-900/45 dark:text-rose-200',
  high: 'bg-amber-100 text-amber-700 dark:bg-amber-900/45 dark:text-amber-200',
  medium: 'bg-sky-100 text-sky-700 dark:bg-sky-900/45 dark:text-sky-200',
  low: 'bg-black/5 text-slate-500 dark:bg-white/10 dark:text-slate-400',
};

const deKebab = (id: string) => id.replace(/-/g, ' ');

export default function RepairQueuePanel() {
  const [items, setItems] = useState<RepairQueueItem[]>([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setItems(sortRepairQueue(getRepairQueue()));
    setReady(true);
  }, []);

  const refresh = (next: RepairQueueItem[]) => setItems(sortRepairQueue(next));
  const open = items.filter((i) => !i.completed_at);

  return (
    <section className="clay clay-surface p-5">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-gradient-to-r from-rose-500 to-amber-500" />
          <h3 className="text-sm font-bold uppercase tracking-wide text-slate-700 dark:text-slate-200">
            Repair queue
          </h3>
          {ready ? (
            <span className="text-[11px] text-slate-400 dark:text-slate-500">
              {open.length} open · {items.length} total
            </span>
          ) : null}
        </div>
        {items.some((i) => i.completed_at) ? (
          <button
            type="button"
            onClick={() => refresh(clearCompleted())}
            className="clay-pill px-2.5 py-1 text-[11px] font-semibold text-slate-500 transition hover:text-slate-800 dark:text-slate-400 dark:hover:text-slate-200"
          >
            Clear done
          </button>
        ) : null}
      </div>

      {ready && items.length === 0 ? (
        <div className="rounded-xl border border-dashed border-black/10 p-5 text-sm text-slate-500 dark:border-white/10 dark:text-slate-400">
          <p className="font-medium text-slate-600 dark:text-slate-300">No repairs queued yet.</p>
          <p className="mt-1">
            After a WilliamsPod session syncs through WilliamsSync, your weak modules and the recommended fixes
            will appear here — prioritised by error type.
          </p>
        </div>
      ) : (
        <ul className="space-y-2.5">
          {items.map((it) => {
            const meta = ERROR_TYPE_META[it.error_type];
            const done = !!it.completed_at;
            return (
              <li
                key={it.id}
                className={`clay-node p-4 text-sm ${done ? 'opacity-55' : ''} bg-white/60 dark:bg-white/5`}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${PRIORITY_BADGE[it.priority]}`}>
                    {it.priority}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-semibold">
                    <span className={`h-2 w-2 rounded-full ${meta.dot}`} />
                    <span className={meta.text}>{meta.label} error</span>
                  </span>
                  <Link
                    href={`/lecture/${it.module_id}`}
                    className={`font-semibold text-slate-900 underline decoration-dotted underline-offset-2 hover:text-sky-700 dark:text-white dark:hover:text-sky-300 ${done ? 'line-through' : ''}`}
                  >
                    {deKebab(it.module_id)}
                  </Link>
                  <span className="rounded bg-black/5 px-1 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
                    {it.subject_id}
                  </span>
                  <button
                    type="button"
                    onClick={() => refresh(done ? reopenRepairItem(it.id) : completeRepairItem(it.id))}
                    className="ml-auto clay-pill px-2.5 py-1 text-[11px] font-semibold text-slate-500 transition hover:text-emerald-600 dark:text-slate-400 dark:hover:text-emerald-400"
                  >
                    {done ? '↺ reopen' : '✓ done'}
                  </button>
                </div>
                <p className="mt-2 text-slate-600 dark:text-slate-300">{it.recommended_action}</p>
              </li>
            );
          })}
        </ul>
      )}
    </section>
  );
}
