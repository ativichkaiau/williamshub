'use client';

import { useEffect, useState } from 'react';
import { isBookmarked, toggleBookmark } from '../lib/user/bookmarks';

// Star a module into "the garage". Local-only; hydrates after mount to avoid
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
      aria-label={starred ? 'Remove from garage' : 'Save to garage'}
      className={`clay-pill inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 text-xs font-bold transition active:translate-y-px ${
        ready && starred
          ? 'text-[#b8860b] dark:text-[#ffcc00]'
          : 'text-slate-500 dark:text-slate-400'
      }`}
    >
      <span aria-hidden>{ready && starred ? '⭐' : '☆'}</span>
      <span>{ready && starred ? 'In garage' : 'Save'}</span>
    </button>
  );
}
