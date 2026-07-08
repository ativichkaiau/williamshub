// Starred (saved) modules + per-module personal notes. localStorage only.

import { readJSON, writeJSON } from './store';

const BOOKMARKS = 'wh-bookmarks';
const NOTES = 'wh-notes';

export function getBookmarks(): string[] {
  return readJSON<string[]>(BOOKMARKS, []);
}

export function isBookmarked(id: string): boolean {
  return getBookmarks().includes(id);
}

/** Toggle a module's bookmark; returns the new state (true = now starred). */
export function toggleBookmark(id: string): boolean {
  const cur = getBookmarks();
  const has = cur.includes(id);
  writeJSON(BOOKMARKS, has ? cur.filter((x) => x !== id) : [...cur, id]);
  return !has;
}

export function getNotes(): Record<string, string> {
  return readJSON<Record<string, string>>(NOTES, {});
}

export function getNote(id: string): string {
  return getNotes()[id] ?? '';
}

export function setNote(id: string, text: string): void {
  const notes = getNotes();
  const trimmed = text.trim();
  if (trimmed) notes[id] = trimmed;
  else delete notes[id];
  writeJSON(NOTES, notes);
}
