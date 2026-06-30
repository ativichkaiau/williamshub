import type { Lecture } from '../../lib/types';

// ─────────────────────────────────────────────────────────────────────────────
// AUTHORING TEMPLATE — copy this file, rename to <lecture-id>.ts, fill from the
// ACTUAL lecture. TypeScript will flag any missing required field.
//
// Budget: ≤30–45 min. If you're reaching for a textbook to pad a section, STOP —
// that's expansion, not alignment. Empty/short is fine; wrong or bloated is not.
//
// Checklist while filling:
//   □ highYield    3–6 bullets, the compressed core (what you'd want 10 min pre-exam)
//   □ mechanism    one clean spine; fork a branch only for an exam-critical pathway
//                  mark the discriminating node emphasis:'key', lethal node 'danger'
//   □ examFindings flag the discriminating sign significance:'key'
//   □ traps        only if THIS lecture has a category-misread you can name
//   □ quiz         one item per spot you felt unsure
// ─────────────────────────────────────────────────────────────────────────────

export const TEMPLATE: Lecture = {
  id: '',                 // kebab-case, stable, e.g. 'aortic-dissection'
  title: '',
  system: 'cardiovascular',
  source: 'HCVS — <topic> (MedCMU, 2026)',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: '' },
    { kind: 'lecture', label: 'HCVS' },
    { kind: 'disease', label: '' },
    // add: mechanism / exam / investigation / treatment as relevant
  ],

  highYield: [
    '',
  ],

  mechanism: {
    title: '',
    steps: [
      { id: 's1', label: '' },
      // { id: 's2', label: '', emphasis: 'key' },
    ],
    branches: [
      // { fromId: 's1', title: '', steps: [{ id: 'b1', label: '', emphasis: 'key' }] },
    ],
  },

  examFindings: [
    { sign: '', mechanism: '', significance: 'key' },
  ],

  investigations: [
    { clue: '', meaning: '' },
  ],

  treatment: [
    { logic: '', detail: '' },
  ],

  mnemonics: [
    // { hook: '', expansion: ['', ''] },
  ],

  traps: [
    // { questionCategory: '', wrongInstinct: '', rightAnswer: '', why: '' },
  ],

  quiz: [
    {
      id: 'q1',
      stem: '',
      options: [
        { id: 'a', text: '' },
        { id: 'b', text: '' },
        { id: 'c', text: '' },
        { id: 'd', text: '' },
      ],
      answerId: 'b',
      explanation: '',
      tests: 'exam',
    },
  ],
};
