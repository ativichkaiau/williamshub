'use client';

import { useCallback, useEffect, useMemo, useRef, useState, type KeyboardEvent as ReactKeyboardEvent } from 'react';
import { createPortal } from 'react-dom';
import { useRouter } from 'next/navigation';

// ⌘K global search over the whole curriculum. The compact index is fetched once
// on first open (public/search-index.json) so no content ships in the JS bundle.

interface Entry {
  k: 'm' | 'l' | 's';
  t: string;
  u: string;
  s?: string | null;
  sub?: string;
  tg?: string;
}

const KIND: Record<Entry['k'], { label: string; cls: string }> = {
  m: { label: 'Module', cls: 'bg-[#2e5bff]/12 text-[#1e5bd6] dark:text-[#7AA0FF]' },
  l: { label: 'Lecture', cls: 'bg-indigo-500/12 text-indigo-600 dark:text-indigo-300' },
  s: { label: 'Block', cls: 'bg-amber-500/15 text-amber-700 dark:text-amber-300' },
};

function scoreEntry(e: Entry, tokens: string[]): number {
  const title = e.t.toLowerCase();
  const hay = `${e.t} ${e.s ?? ''} ${e.sub ?? ''} ${e.tg ?? ''}`.toLowerCase();
  let score = 0;
  for (const tok of tokens) {
    if (hay.indexOf(tok) === -1) return -1; // every token must appear somewhere
    const at = title.indexOf(tok);
    if (at === 0) score += 100;
    else if (at > 0 && title[at - 1] === ' ') score += 60;
    else if (at > 0) score += 40;
    else score += 14; // matched only in tags / subject / source
  }
  if (title === tokens.join(' ')) score += 200;
  if (e.k === 's') score += 8; // nudge block-level hits up a touch
  return score - e.t.length * 0.04; // prefer concise titles
}

export default function CommandPalette() {
  const router = useRouter();
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const [index, setIndex] = useState<Entry[] | null>(null);
  const [loading, setLoading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  useEffect(() => setMounted(true), []);

  const load = useCallback(() => {
    if (index || loading) return;
    setLoading(true);
    fetch('/search-index.json')
      .then((r) => r.json())
      .then((data: Entry[]) => setIndex(data))
      .catch(() => setIndex([]))
      .finally(() => setLoading(false));
  }, [index, loading]);

  const openPalette = useCallback(() => {
    setOpen(true);
    load();
  }, [load]);

  // Global ⌘K / Ctrl-K, and Esc to close.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((o) => {
          if (!o) load();
          return !o;
        });
      } else if (e.key === 'Escape') {
        setOpen(false);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [load]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setActive(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const results = useMemo(() => {
    if (!index) return [];
    const tokens = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
    if (tokens.length === 0) return [];
    return index
      .map((e) => ({ e, score: scoreEntry(e, tokens) }))
      .filter((x) => x.score > 0)
      .sort((a, b) => b.score - a.score)
      .slice(0, 40)
      .map((x) => x.e);
  }, [index, query]);

  useEffect(() => setActive(0), [query]);

  const go = useCallback(
    (u: string) => {
      setOpen(false);
      router.push(u);
    },
    [router],
  );

  const onListKey = (e: ReactKeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setActive((a) => Math.min(a + 1, results.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setActive((a) => Math.max(a - 1, 0));
    } else if (e.key === 'Enter' && results[active]) {
      e.preventDefault();
      go(results[active].u);
    }
  };

  // keep the active row in view
  useEffect(() => {
    listRef.current?.querySelector('[data-active="true"]')?.scrollIntoView({ block: 'nearest' });
  }, [active, results]);

  return (
    <>
      <button
        type="button"
        onClick={openPalette}
        aria-label="Search (Command K)"
        className="clay-pill inline-flex items-center gap-2 px-3 py-1.5 text-sm font-semibold text-slate-500 transition active:translate-y-px dark:text-slate-300"
      >
        <span aria-hidden>🔍</span>
        <span className="hidden sm:inline">Search</span>
        <kbd className="hidden rounded bg-black/5 px-1.5 py-0.5 text-[10px] font-bold text-slate-400 dark:bg-white/10 dark:text-slate-400 sm:inline">
          ⌘K
        </kbd>
      </button>

      {mounted && open
        ? createPortal(
            <div
              className="fixed inset-0 z-[100] flex items-start justify-center bg-slate-900/40 px-4 pt-[12vh] backdrop-blur-sm"
              onClick={() => setOpen(false)}
              role="dialog"
              aria-modal="true"
              aria-label="Search"
            >
              <div
                className="clay clay-surface w-full max-w-xl overflow-hidden p-0"
                onClick={(e) => e.stopPropagation()}
                onKeyDown={onListKey}
              >
                <div className="livery-stripe h-1 w-full" />
                <div className="flex items-center gap-2 px-4 py-3">
                  <span aria-hidden className="text-slate-400">🔍</span>
                  <input
                    ref={inputRef}
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search modules, lectures, blocks, terms…"
                    className="w-full bg-transparent text-[15px] text-slate-900 outline-none placeholder:text-slate-400 dark:text-white"
                  />
                  <kbd className="rounded bg-black/5 px-1.5 py-0.5 text-[10px] font-bold text-slate-400 dark:bg-white/10">
                    esc
                  </kbd>
                </div>

                <div ref={listRef} className="max-h-[52vh] overflow-y-auto border-t border-black/5 px-2 py-2 dark:border-white/10">
                  {loading && !index ? (
                    <p className="px-3 py-6 text-center text-sm text-slate-400">Loading index…</p>
                  ) : query.trim() === '' ? (
                    <p className="px-3 py-6 text-center text-sm text-slate-400">
                      Type to search every module, lecture and block.
                    </p>
                  ) : results.length === 0 ? (
                    <p className="px-3 py-6 text-center text-sm text-slate-400">No matches for “{query}”.</p>
                  ) : (
                    results.map((r, i) => (
                      <button
                        key={r.u}
                        type="button"
                        data-active={i === active}
                        onMouseEnter={() => setActive(i)}
                        onClick={() => go(r.u)}
                        className={`flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left transition ${
                          i === active ? 'clay-node clay-surface' : ''
                        }`}
                      >
                        <span className={`shrink-0 rounded px-1.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ${KIND[r.k].cls}`}>
                          {KIND[r.k].label}
                        </span>
                        <span className="min-w-0 flex-1">
                          <span className="block truncate text-sm font-semibold text-slate-900 dark:text-white">{r.t}</span>
                          {r.sub ? (
                            <span className="block truncate text-[11px] text-slate-400 dark:text-slate-500">{r.sub}</span>
                          ) : null}
                        </span>
                        {r.s ? (
                          <span className="shrink-0 rounded bg-black/5 px-1 py-0.5 text-[10px] font-medium text-slate-500 dark:bg-white/10 dark:text-slate-400">
                            {r.s}
                          </span>
                        ) : null}
                      </button>
                    ))
                  )}
                </div>
              </div>
            </div>,
            document.body,
          )
        : null}
    </>
  );
}
