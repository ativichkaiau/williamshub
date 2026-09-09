'use client';

import { useEffect, useState } from 'react';
import { isBookmarked, toggleBookmark } from '../lib/user/bookmarks';
import HubIcon from './HubIcon';

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
      className={`clay-pill inline-flex min-h-9 shrink-0 items-center gap-1.5 px-3 py-2 text-xs font-medium transition hover:border-[var(--accent)] active:translate-y-px ${
        ready && starred
          ? 'text-[#b8860b] dark:text-[#ffcc00]'
          : 'text-[var(--muted)]'
      }`}
    >
      <HubIcon
        key={ready && starred ? 'on' : 'off'}
        name="bookmark"
        className={ready && starred ? 'fill-current bookmark-pop' : ''}
      />
      <span>{ready && starred ? 'Saved' : 'Save'}</span>
    </button>
  );
}
