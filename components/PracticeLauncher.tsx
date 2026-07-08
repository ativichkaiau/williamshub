'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getRepairQueue } from '../lib/repair/store';
import { getVisited } from '../lib/user/activity';

interface Entry {
  k: string;
  t: string;
  id?: string;
}

function Row({
  label,
  color,
  ids,
  titleOf,
}: {
  label: string;
  color: 'red' | 'blue';
  ids: string[];
  titleOf: (id: string) => string;
}) {
  if (ids.length === 0) return null;
  const dot = color === 'red' ? 'bg-[#e4002b]' : 'bg-[#2e5bff]';
  const text = color === 'red' ? 'text-[#e4002b] dark:text-[#ff5a72]' : 'text-[#1e5bd6] dark:text-[#7AA0FF]';
  return (
    <div>
      <div className="mb-2 flex items-center gap-2">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <h3 className={`text-xs font-bold uppercase tracking-wide ${text}`}>{label}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {ids.map((id) => (
          <Link key={id} href={`/practice/${id}`} className="clay-pill px-3 py-1.5 text-xs font-semibold text-slate-700 transition active:translate-y-px dark:text-slate-200">
            {titleOf(id)}
          </Link>
        ))}
      </div>
    </div>
  );
}

export default function PracticeLauncher() {
  const [ready, setReady] = useState(false);
  const [weak, setWeak] = useState<string[]>([]);
  const [recent, setRecent] = useState<string[]>([]);
  const [byId, setById] = useState<Record<string, Entry>>({});

  useEffect(() => {
    const repair = getRepairQueue().filter((i) => !i.completed_at);
    setWeak([...new Set(repair.map((i) => i.module_id))].slice(0, 8));
    setRecent([...getVisited()].reverse().slice(0, 8));
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data: Entry[]) => {
        const m: Record<string, Entry> = {};
        for (const e of data) if (e.k === 'm' && e.id) m[e.id] = e;
        setById(m);
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const titleOf = (id: string) => byId[id]?.t ?? id.replace(/-/g, ' ');
  if (!ready || (weak.length === 0 && recent.length === 0)) return null;

  return (
    <section className="clay clay-surface mb-8 space-y-5 p-5">
      <Row label="Practise your weak spots" color="red" ids={weak} titleOf={titleOf} />
      <Row label="Recently studied" color="blue" ids={recent} titleOf={titleOf} />
    </section>
  );
}
