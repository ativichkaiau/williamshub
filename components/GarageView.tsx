'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { getBookmarks, getNotes, toggleBookmark } from '../lib/user/bookmarks';
import HubIcon from './HubIcon';

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
    return (
      <div className="py-10 text-center">
        <span className="livery-slide mx-auto block h-1 w-40 rounded-full" aria-hidden="true" />
        <p className="mt-3 text-sm text-[var(--muted)]">Loading…</p>
      </div>
    );
  }

  if (bookmarks.length === 0 && noteIds.length === 0) {
    return (
      <div className="clay clay-surface p-8 text-center">
        <HubIcon name="bookmark" className="mx-auto h-8 w-8 text-[var(--muted)]" />
        <p className="mt-3 font-semibold text-[var(--ink)]">Nothing saved yet.</p>
        <p className="mx-auto mt-1 max-w-sm text-sm leading-6 text-[var(--muted)]">
          Hit{' '}
          <span className="inline-flex items-center gap-1 font-medium text-[var(--ink)]"><HubIcon name="bookmark" className="inline-block" /> Save</span>{' '}
          on any module to keep it here, and add <span className="font-medium text-[var(--ink)]">notes</span> as you
          study. Everything is kept on this device.
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
            <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-[#b8860b] dark:text-[#ffcc00]">
              Starred modules · {bookmarks.length}
            </h2>
          </div>
          <div className="grid gap-3 sm:grid-cols-2">
            {bookmarks.map((id) => {
              const { title, subject, sub } = lookup(byId, id);
              return (
                <div key={id} className="clay flex items-center gap-2 p-4">
                  <Link href={`/lecture/${id}`} className="group min-w-0 flex-1">
                    <span className="block truncate text-sm font-medium text-[var(--ink)] transition group-hover:text-[var(--accent)]">
                      {title}
                    </span>
                    {sub ? <span className="block truncate text-[11px] text-[var(--muted)]">{sub}</span> : null}
                  </Link>
                  {subject ? (
                    <span className="shrink-0 rounded bg-[var(--surface-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                      {subject}
                    </span>
                  ) : null}
                  <button
                    type="button"
                    onClick={() => unstar(id)}
                    aria-label="Remove bookmark"
                    className="shrink-0 text-[#b8860b] transition hover:scale-110 dark:text-[#ffcc00]"
                  >
                    <HubIcon name="bookmark" className="fill-current" />
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
            <span className="h-2 w-2 rounded-full bg-[var(--accent)]" />
            <h2 className="text-xs font-semibold uppercase tracking-[0.1em] text-[var(--accent)]">
              Notes · {noteIds.length}
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
                      className="truncate text-sm font-medium text-[var(--ink)] underline decoration-dotted underline-offset-2 transition hover:text-[var(--accent)]"
                    >
                      {title}
                    </Link>
                    {subject ? (
                      <span className="shrink-0 rounded bg-[var(--surface-muted)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--muted)]">
                        {subject}
                      </span>
                    ) : null}
                  </div>
                  <p className="mt-1.5 whitespace-pre-wrap text-sm leading-6 text-[var(--ink)]">{notes[id]}</p>
                </li>
              );
            })}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
