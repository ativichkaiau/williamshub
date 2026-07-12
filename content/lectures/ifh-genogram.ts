import type { Lecture } from '../../lib/types';

export const ifhGenogram: Lecture = {
  id: 'ifh-genogram',
  title: 'The Genogram',
  system: 'community',
  source: 'L3 — Family Assessment Tools & Basic Health Data',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L3 Family Assessment Tools' },
    { kind: 'investigation', label: 'Standard symbols · 3-generation diagram' },
    { kind: 'exam', label: 'Hereditary patterns · Relationships' },
  ],

  highYield: [
    '**A genogram is a standardised 3-generation family diagram** capturing structure, medical history, relationships and social data in one picture — a core [[ifh-family-assessment-tools]] instrument. It goes **beyond a pedigree** by adding relationship quality and psychosocial information, not just inheritance.',
    '**Core symbols.** **Square = male, circle = female**; the index patient (proband) is marked with an arrow or double outline. A **solid horizontal line = marriage/partnership**; children hang below, drawn **oldest on the left**. Age is written inside the symbol; **death = an X through the symbol** (with age/cause).',
    '**Relationship & union lines.** **Divorce = double slash (//)** on the marriage line, **separation = single slash (/)**, cohabitation = dashed line. Emotional bonds may be overlaid — close, distant, conflictual, cut-off or enmeshed — turning biology into a psychosocial map.',
    '**What it reveals.** Vertical (cross-generation) disease clusters flag **hereditary/genetic risk**; repeating patterns expose roles, and the relationship lines expose **support vs conflict**. It guides who to involve and screen — feeding directly into [[ifh-family-health-impact]] and [[ifh-family-definitions-types]].',
    '**When to draw one.** Reach for a genogram in high-risk families, chronic disease, unexplained or recurrent symptoms, and psychosocial complexity; draw **at least three generations**, oldest at the top, and update it over time.',
  ],

  mechanism: {
    title: 'Draw structure → add ages/dates → mark illness & death → overlay relationships → interpret',
    steps: [
      { id: 's1', label: 'Draw ≥3 generations, oldest on top; square = male, circle = female', emphasis: 'key' },
      { id: 's2', label: 'Connect couples (horizontal line); hang children below, oldest left' },
      { id: 's3', label: 'Add ages and key dates; mark deaths with an X (age/cause)' },
      { id: 's4', label: 'Annotate each person’s illnesses + relationship lines (// divorce, close, conflict)', emphasis: 'key' },
      { id: 's5', label: 'Interpret: hereditary risk, patterns, roles, support & conflict', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Square = male, circle = female; the index patient is marked (arrow / double outline)', mechanism: 'A shared symbol language lets any clinician read the diagram', significance: 'key' },
    { sign: 'Marriage = solid horizontal line; divorce = double slash (//), separation = single slash', mechanism: 'Relationship status is encoded on the union line itself', significance: 'key' },
    { sign: 'Death is shown by an X through the symbol', mechanism: 'Distinguishes living from deceased at a glance, with age and cause noted', significance: 'supportive' },
    { sign: 'A genogram adds relationship quality and psychosocial data a pedigree omits', mechanism: 'It maps emotional bonds, roles and support — not biology alone', significance: 'key' },
  ],

  investigations: [
    { clue: 'Breast cancer in the mother, a maternal aunt and the grandmother on the diagram', meaning: 'A vertical hereditary pattern → heightened genetic risk; consider screening / genetics referral' },
    { clue: 'A double slash (//) drawn across the line joining two parent symbols', meaning: 'The couple is divorced' },
    { clue: 'An X drawn through a circle labelled “62, MI”', meaning: 'A deceased female relative who died at 62 of a myocardial infarction' },
    { clue: 'A jagged / hatched line drawn between a father and son symbol', meaning: 'A conflictual emotional relationship — a psychosocial, not genetic, finding' },
  ],

  treatment: [
    { logic: 'Use the genogram as a living clinical tool', detail: 'Draw it for high-risk, chronic-disease or psychosocially complex families, keep it updated, and let it flag both hereditary risk and the balance of support vs conflict.' },
    { logic: 'Let it direct action', detail: 'A hereditary cluster prompts screening/referral; a support gap prompts a family conversation or the family APGAR.' },
  ],

  mnemonics: [
    { hook: 'Symbols: sQuare = guy, ciRcle = girl; X marks the dead', expansion: ['□ male, ○ female', 'Horizontal line = union; // = divorce', 'Children below, oldest on the left', 'X through the symbol = deceased'] },
  ],

  traps: [
    {
      questionCategory: 'Genogram vs pedigree',
      wrongInstinct: 'A genogram is just a medical pedigree / family tree',
      rightAnswer: 'It captures biological AND psychosocial data — relationships, roles, support and conflict — not only inheritance',
      why: 'The relationship lines and social annotations are exactly what make it a family-medicine tool rather than a genetics chart.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On a standard genogram, how is a divorced couple represented?',
      options: [
        { id: 'a', text: 'Two slashes (//) across the line joining them' },
        { id: 'b', text: 'A dashed horizontal line' },
        { id: 'c', text: 'An X through both symbols' },
        { id: 'd', text: 'A square drawn inside a circle' },
      ],
      answerId: 'a',
      explanation: 'Divorce is marked by a double slash (//) on the union line; a single slash means separation, a dashed line means cohabitation, and an X through a symbol means that person has died.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which feature most distinguishes a genogram from a standard genetic pedigree?',
      options: [
        { id: 'a', text: 'It records emotional relationships and psychosocial data' },
        { id: 'b', text: 'It uses squares for males and circles for females' },
        { id: 'c', text: 'It spans three generations' },
        { id: 'd', text: 'It marks the index patient' },
      ],
      answerId: 'a',
      explanation: 'Symbols, three generations and marking the proband are shared with a pedigree. The genogram’s distinctive addition is the overlay of relationship quality, roles and psychosocial resources.',
      tests: 'lecture',
    },
  ],
};

export default ifhGenogram;
