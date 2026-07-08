'use client';

import { useEffect, useState } from 'react';
import { isBookmarked, toggleBookmark } from '../lib/user/bookmarks';

// Star (save) a module. Local-only; hydrates after mount to avoid
// a server/client mismatch (localStorage is client-only).
export default function BookmarkButton({ moduleId }: { moduleId: string }) {
  const [starred, setStarred] = useState(false);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setStarred(isBookmarked(moduleId));
    setReady(true);
  }, [moduleId]);

  return (
    <button
      type="button"
      onClick={() => setStarred(toggleBookmark(moduleId))}
      aria-pressed={starred}
      aria-label={starred ? 'Remove bookmark' : 'Save bookmark'}
      className={`clay-pill inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition active:translate-y-px ${
        ready && starred
          ? 'text-[#b8860b] dark:text-[#ffcc00]'
          : 'text-slate-500 dark:text-slate-400'
      }`}
    >
      <span aria-hidden>{ready && starred ? '⭐' : '☆'}</span>
      <span>{ready && starred ? 'Saved' : 'Save'}</span>
    </button>
  );
}
