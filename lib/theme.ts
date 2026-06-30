// Per-lecture signature colors (L1–L9) and per-section semantic colors.
// Class strings are literal so Tailwind's content scanner keeps them.

export interface LectureTheme {
  dot: string;
  text: string;
  chipBg: string;
  grad: string;
}

export const lectureThemes: Record<string, LectureTheme> = {
  l1: { dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400', chipBg: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-200', grad: 'from-rose-400 to-pink-500' },
  l2: { dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400', chipBg: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200', grad: 'from-sky-400 to-blue-500' },
  l3: { dot: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-400', chipBg: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-200', grad: 'from-violet-400 to-purple-500' },
  l4: { dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400', chipBg: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-200', grad: 'from-amber-400 to-orange-500' },
  l5: { dot: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400', chipBg: 'bg-teal-100 text-teal-700 dark:bg-teal-900/40 dark:text-teal-200', grad: 'from-teal-400 to-emerald-500' },
  l6: { dot: 'bg-orange-500', text: 'text-orange-600 dark:text-orange-400', chipBg: 'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-200', grad: 'from-orange-400 to-red-500' },
  l7: { dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400', chipBg: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-200', grad: 'from-indigo-400 to-blue-500' },
  l8: { dot: 'bg-fuchsia-500', text: 'text-fuchsia-600 dark:text-fuchsia-400', chipBg: 'bg-fuchsia-100 text-fuchsia-700 dark:bg-fuchsia-900/40 dark:text-fuchsia-200', grad: 'from-fuchsia-400 to-pink-500' },
  l9: { dot: 'bg-cyan-500', text: 'text-cyan-600 dark:text-cyan-400', chipBg: 'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-200', grad: 'from-cyan-400 to-sky-500' },
  l10: { dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400', chipBg: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/40 dark:text-emerald-200', grad: 'from-emerald-400 to-teal-500' },
  l11: { dot: 'bg-red-500', text: 'text-red-600 dark:text-red-400', chipBg: 'bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-200', grad: 'from-red-400 to-rose-500' },
  l12: { dot: 'bg-blue-500', text: 'text-blue-600 dark:text-blue-400', chipBg: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-200', grad: 'from-blue-400 to-indigo-500' },
  l13: { dot: 'bg-purple-500', text: 'text-purple-600 dark:text-purple-400', chipBg: 'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-200', grad: 'from-purple-400 to-fuchsia-500' },
  l14: { dot: 'bg-pink-500', text: 'text-pink-600 dark:text-pink-400', chipBg: 'bg-pink-100 text-pink-700 dark:bg-pink-900/40 dark:text-pink-200', grad: 'from-pink-400 to-rose-500' },
  l15: { dot: 'bg-lime-500', text: 'text-lime-600 dark:text-lime-400', chipBg: 'bg-lime-100 text-lime-700 dark:bg-lime-900/40 dark:text-lime-200', grad: 'from-lime-400 to-green-500' },
  l16: { dot: 'bg-green-500', text: 'text-green-600 dark:text-green-400', chipBg: 'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-200', grad: 'from-green-400 to-emerald-500' },
  l17: { dot: 'bg-yellow-500', text: 'text-yellow-600 dark:text-yellow-400', chipBg: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/40 dark:text-yellow-200', grad: 'from-yellow-400 to-amber-500' },
  l18: { dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400', chipBg: 'bg-sky-100 text-sky-700 dark:bg-sky-900/40 dark:text-sky-200', grad: 'from-sky-400 to-blue-500' },
  l19: { dot: 'bg-stone-500', text: 'text-stone-600 dark:text-stone-400', chipBg: 'bg-stone-100 text-stone-700 dark:bg-stone-900/40 dark:text-stone-200', grad: 'from-stone-400 to-amber-500' },
};

// Accepts a slug ('l5') or a source string ('L5 — Vascular Disorders').
export function lectureTheme(slugOrSource: string): LectureTheme {
  const m = slugOrSource.match(/^l(\d+)/i);
  const key = m ? `l${m[1]}` : '';
  return lectureThemes[key] ?? lectureThemes.l1;
}

export interface SectionColor {
  dot: string;
  text: string;
}

export const sectionColors: Record<string, SectionColor> = {
  highYield: { dot: 'bg-amber-500', text: 'text-amber-600 dark:text-amber-400' },
  mechanism: { dot: 'bg-teal-500', text: 'text-teal-600 dark:text-teal-400' },
  exam: { dot: 'bg-sky-500', text: 'text-sky-600 dark:text-sky-400' },
  investigation: { dot: 'bg-indigo-500', text: 'text-indigo-600 dark:text-indigo-400' },
  treatment: { dot: 'bg-emerald-500', text: 'text-emerald-600 dark:text-emerald-400' },
  mnemonic: { dot: 'bg-violet-500', text: 'text-violet-600 dark:text-violet-400' },
  trap: { dot: 'bg-rose-500', text: 'text-rose-600 dark:text-rose-400' },
  quiz: { dot: 'bg-fuchsia-500', text: 'text-fuchsia-600 dark:text-fuchsia-400' },
};
