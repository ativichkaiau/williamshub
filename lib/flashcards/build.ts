// Flashcards — active-recall cards derived from a module's structured content.
// Pure + build-time: routes build the deck server-side and pass plain card objects
// to the client component, so the content graph never ships to the browser.

import type { Lecture } from '../types';

export type FlashcardKind = 'recall' | 'trap' | 'finding' | 'mnemonic' | 'mechanism' | 'investigation';

export interface Flashcard {
  id: string;
  moduleId: string;
  moduleTitle: string;
  source: string;
  kind: FlashcardKind;
  front: string;
  back: string;
}

// Strip the authored markup (highlighter ** and [[wikilinks]]) for plain card text.
const clean = (s: string): string =>
  s
    .replace(/\*\*/g, '')
    .replace(/\[\[([a-z0-9-]+)\]\]/g, (_m, id: string) => id.replace(/-/g, ' '))
    .trim();

function cardsForModule(l: Lecture): Flashcard[] {
  const out: Flashcard[] = [];
  const mk = (kind: FlashcardKind, key: string, front: string, back: string) => {
    const f = clean(front);
    const b = clean(back);
    if (f && b) out.push({ id: `${l.id}~${kind}-${key}`, moduleId: l.id, moduleTitle: l.title, source: l.source, kind, front: f, back: b });
  };

  // Recall the compressed core — the whole-module active-recall card.
  if (l.highYield.length) {
    mk('recall', '0', `Recall the high-yield points of “${l.title}”.`, l.highYield.map((h) => `• ${h}`).join('\n'));
  }
  // Traps — the discriminators (highest exam value).
  l.traps.forEach((t, i) => mk('trap', `t${i}`, `${t.questionCategory} — is the answer “${t.wrongInstinct}”?`, `No — ${t.rightAnswer}.\n\nWhy: ${t.why}`));
  // Exam findings — sign → why.
  l.examFindings.forEach((e, i) => mk('finding', `f${i}`, `Why does “${e.sign}” occur?`, e.mechanism));
  // Mnemonics — hook → expansion.
  l.mnemonics.forEach((m, i) => mk('mnemonic', `m${i}`, m.hook, m.expansion.join('\n')));
  // Mechanism — trace the chain.
  if (l.mechanism.steps.length) mk('mechanism', 'mech', `Trace the mechanism: ${l.mechanism.title}`, l.mechanism.steps.map((s) => s.label).join('  →  '));
  // Investigations — clue → meaning.
  l.investigations.forEach((iv, i) => mk('investigation', `i${i}`, `${iv.clue} — what does this tell you?`, iv.meaning));

  return out;
}

/** Build a deck from one or more modules. `perModule` caps cards/module (for big
 *  block decks); cards are emitted in exam-priority order so the cap keeps the best. */
export function buildFlashcards(lectures: Lecture[], perModule?: number): Flashcard[] {
  return lectures.flatMap((l) => {
    const cards = cardsForModule(l);
    return perModule ? cards.slice(0, perModule) : cards;
  });
}
