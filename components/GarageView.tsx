'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBookmarks, getNotes, toggleBookmark } from '../lib/user/bookmarks';

interface Entry {
  k: string;
  t: string;
  u: string;
  s?: string | null;
  sub?: string;
  id?: string;
}

function lookup(byId: Record<string, Entry>, id: string): { title: string; subject: string | null; sub?: string } {
  const e = byId[id];
  return { title: e?.t ?? id.replace(/-/g, ' '), subject: e?.s ?? null, sub: e?.sub };
}

export default function GarageView() {
  const [ready, setReady] = useState(false);
  const [bookmarks, setBookmarks] = useState<string[]>([]);
  const [notes, setNotes] = useState<Record<string, string>>({});
  const [byId, setById] = useState<Record<string, Entry>>({});

  useEffect(() => {
    setBookmarks(getBookmarks());
    setNotes(getNotes());
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data: Entry[]) => {
        const map: Record<string, Entry> = {};
        for (const e of data) if (e.k === 'm' && e.id) map[e.id] = e;
        setById(map);
      })
      .catch(() => {})
      .finally(() => setReady(true));
  }, []);

  const unstar = (id: string) => {
    toggleBookmark(id);
    setBookmarks(getBookmarks());
  };

  const noteIds = Object.keys(notes).filter((id) => notes[id]?.trim());

  if (!ready) {
    return <p className="py-10 text-center text-sm text-slate-400">Opening the garage…</p>;
  }

  if (bookmarks.length === 0 && noteIds.length === 0) {
    return (
      <div className="clay clay-surface p-8 text-center">
        <div className="text-3xl">🅿️</div>
        <p className="mt-2 font-bold text-slate-700 dark:text-slate-200">Garage is empty.</p>
        <p className="mx-auto mt-1 max-w-sm text-sm text-slate-500 dark:text-slate-400">
          Hit <span className="font-semibold">☆ Save</span> on any module to park it here, and jot{' '}
          <span className="font-semibold">pit notes</span> as you study. Everything is kept on this device.
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {bookmarks.length > 0 ? (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#ffcc00]" />
            <h2 className="text-xs font-bold uppercase tracking-wide text-[#b8860b] dark:text-[#ffcc00]">
              Starred modules · {bookmarks.length}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bookmarks.map((id) => {
              const { title, subject, sub } = lookup(byId, id);
              return (
                <div key={id} className="clay flex items-center gap-2 p-4">
                  <Link href={`/lecture/${id}`} className="group min-w-0 flex-1">
                    <span className="block truncate text-sm font-bold text-slate-900 transition group-hover:text-[#1e5bd6] dark:text-white dark:group-hover:text-[#7AA0FF]">
                      {title}
                    </span>
                    {sub ? <span className="block truncate text-[11px] text-slate-400">{sub}</span> : null}
                  </Link>
                  {subject ? (
                    <span className="shrink-0 rounded bg-black/5 px-1 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
                      {subject}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => unstar(id)}
                    aria-label="Remove from garage"
                    className="shrink-0 text-[#b8860b] transition hover:scale-110 dark:text-[#ffcc00]"
                  >
                    ⭐
                  </button>
                </div>
              );
            })}
          </div>
        </section>
      ) : null}

      {noteIds.length > 0 ? (
        <section>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-[#2e5bff]" />
            <h2 className="text-xs font-bold uppercase tracking-wide text-[#1e5bd6] dark:text-[#7AA0FF]">
              Pit notes · {noteIds.length}
            </h2>
          </div>
          <ul className="space-y-2.5">
            {noteIds.map((id) => {
              const { title, subject } = lookup(byId, id);
              return (
                <li key={id} className="clay clay-surface p-4">
                  <div className="flex items-center justify-between gap-2">
                    <Link
                      href={`/lecture/${id}`}
                      className="truncate text-sm font-bold text-slate-900 underline decoration-dotted underline-offset-2 hover:text-[#1e5bd6] dark:text-white dark:hover:text-[#7AA0FF]"
                    >
                      {title}
                    </Link>
                    {subject ? (
                      <span className="shrink-0 rounded bg-black/5 px-1 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
                        {subject}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 whitespace-pre-wrap text-sm text-slate-600 dark:text-slate-300">{notes[id]}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
