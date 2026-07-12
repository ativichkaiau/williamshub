import type { Lecture } from '../../lib/types';

export const hhlAboSystem: Lecture = {
  id: 'hhl-abo-system',
  title: 'ABO Blood Group System',
  system: 'heme',
  source: 'L17 — ABO & Rh Blood Groups; HDN',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L17 Blood Groups' },
    { kind: 'disease', label: 'ABO incompatibility' },
    { kind: 'mechanism', label: 'H antigen → A/B transferases' },
    { kind: 'investigation', label: 'Forward + reverse grouping' },
  ],

  highYield: [
    'ABO antigens are **carbohydrates**: the **H antigen** is the precursor; the A gene adds N-acetylgalactosamine and the B gene adds galactose (glycosyltransferases); **group O has no functional transferase** (H antigen only).',
    'Anti-A/anti-B are **naturally-occurring IgM** — **Landsteiner\'s law**: you make antibody against the antigen you lack → an ABO-incompatible transfusion causes **immediate complement-mediated intravascular hemolysis**. See [[hhl-hemolytic-transfusion-reactions]].',
    '**Group O = universal RED-CELL donor** (no A/B antigen); **group AB = universal red-cell recipient** (no anti-A/anti-B). For plasma the rule is reversed.',
    'ABO typing needs **both forward (cells + known antisera) and reverse (serum + known cells) grouping**; if they disagree it is an **ABO discrepancy**.',
    '**Bombay phenotype (hh)** makes no H antigen, so it cannot make A or B and carries anti-A, anti-B **and anti-H** — types as "O" but is compatible only with Bombay blood.',
  ],

  mechanism: {
    title: 'H-antigen backbone → ABO transferases → isoagglutinins',
    steps: [
      { id: 's1', label: 'H antigen (fucosylated precursor) laid down as the backbone' },
      { id: 's2', label: 'A transferase adds GalNAc; B transferase adds galactose', emphasis: 'key' },
      { id: 's3', label: 'O allele = nonfunctional enzyme → H left unmodified' },
      { id: 's4', label: 'Antigen you LACK → naturally-occurring IgM isoagglutinin (Landsteiner)', emphasis: 'key' },
      { id: 's5', label: 'Incompatible RBCs → IgM + complement → intravascular hemolysis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Forward and reverse ABO groups disagree', mechanism: 'Missing/extra isoagglutinin, subgroup, acquired B, or cold antibody', significance: 'key' },
    { sign: 'Patient "types as O" yet serum agglutinates all O donor cells', mechanism: 'Anti-H of the Bombay (hh) phenotype', significance: 'key' },
    { sign: 'Fever, loin pain and red urine minutes into a transfusion', mechanism: 'IgM anti-A/anti-B fix complement → intravascular hemolysis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cells + anti-A positive, cells + anti-B negative; serum agglutinates B cells', meaning: 'Group A (forward and reverse agree)' },
    { clue: 'Cells agglutinate with both anti-A and anti-B; serum agglutinates neither', meaning: 'Group AB — universal packed-red-cell recipient' },
    { clue: 'Cells agglutinate with neither antiserum; serum agglutinates A and B cells', meaning: 'Group O — universal red-cell donor' },
    { clue: 'Apparent group O whose serum also agglutinates O cells', meaning: 'Bombay phenotype (anti-H) — transfuse only hh blood' },
  ],

  treatment: [
    { logic: 'Transfuse ABO-identical red cells; use group O only in emergencies', detail: 'O red cells lack A/B antigen; reserve O-negative for unmatched emergencies.' },
    { logic: 'Stop the transfusion immediately if an acute reaction appears', detail: 'ABO-incompatible intravascular hemolysis is a clerical-error emergency — see [[hhl-hemolytic-transfusion-reactions]].' },
  ],

  mnemonics: [
    { hook: 'Landsteiner: you hold the antibody against the antigen you lack', expansion: ['Group A → anti-B', 'Group B → anti-A', 'Group O → anti-A + anti-B', 'Group AB → no isoagglutinins'] },
    { hook: 'O gives, AB gets (red cells) — plasma is the mirror', expansion: ['O = universal red-cell donor (no antigen)', 'AB = universal red-cell recipient (no antibody)', 'AB = universal PLASMA donor'] },
  ],

  traps: [
    {
      questionCategory: 'Universal donor — cells vs plasma',
      wrongInstinct: 'Group O is the universal donor for everything',
      rightAnswer: 'O is the universal donor for RED CELLS, but the universal PLASMA donor is AB',
      why: 'O plasma still carries anti-A and anti-B; AB plasma carries neither — the two "universals" are opposite.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A group A patient is accidentally transfused group B red cells. What is the immediate mechanism of the reaction?',
      options: [
        { id: 'a', text: 'Slow transfer of IgG anti-B across membranes' },
        { id: 'b', text: 'Preformed IgM anti-B fixes complement → intravascular hemolysis' },
        { id: 'c', text: 'T-cell mediated delayed hypersensitivity' },
        { id: 'd', text: 'Donor anti-leukocyte antibodies → pulmonary edema' },
      ],
      answerId: 'b',
      explanation: 'ABO isoagglutinins are naturally-occurring IgM; against incompatible cells they fix complement and cause immediate intravascular hemolysis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient\'s cells are not agglutinated by anti-A, anti-B or anti-A,B, yet the serum agglutinates group O donor cells. The phenotype is:',
      options: [
        { id: 'a', text: 'Group O' },
        { id: 'b', text: 'Group AB' },
        { id: 'c', text: 'Bombay (hh)' },
        { id: 'd', text: 'Weak D' },
      ],
      answerId: 'c',
      explanation: 'The Bombay phenotype lacks H antigen, so it makes no A/B and carries anti-H — its serum agglutinates even group O cells, so only Bombay blood is compatible.',
      tests: 'investigation',
    },
  ],
};

export default hhlAboSystem;
