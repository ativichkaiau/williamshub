import type { Lecture } from '../../lib/types';
import { COMPLEMENT_PATHWAYS } from '../../lib/figures';

export const complementPathways: Lecture = {
  id: 'complement-pathways',
  title: 'Complement: The Three Activation Pathways',
  system: 'immune',
  source: 'L4 — Complement System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L4 Complement' },
    { kind: 'mechanism', label: '3 pathways → C3' },
    { kind: 'exam', label: 'Trigger of each pathway' },
  ],

  highYield: [
    '**Complement = a cascade of plasma proteins** that opsonise, inflame, and lyse microbes — a major **effector arm of innate immunity** (also recruited by antibody). Three activation pathways with **different triggers converge on one step: making C3 convertase, which cleaves C3**.',
    '**Classical pathway** — triggered by **antibody (IgM or IgG) bound to antigen**: **C1** binds the Fc → activates **C4 and C2** → forms **C4b2a = the classical C3 convertase**. (Links adaptive antibody to complement.)',
    '**Lectin pathway** — triggered by **mannose-binding lectin (MBL)** recognising **mannose** on microbial surfaces → **MASP** proteases activate **C4 and C2** → same **C4b2a C3 convertase**. Antibody-independent (innate).',
    '**Alternative pathway** — triggered by **spontaneous C3 "tickover"** that becomes stabilised on **microbial surfaces** (which lack human regulators) → forms **C3bBb = the alternative C3 convertase**, with **properdin** stabilising it. Amplifies the other pathways.',
    '**All roads meet at C3.** C3 convertase cleaves **C3 → C3a + C3b**. C3b then forms the **C5 convertase**, cleaving **C5 → C5a + C5b**; **C5b nucleates the membrane attack complex (MAC, C5b–C9)**. The split products (C3a, C5a = anaphylatoxins; C3b = opsonin) drive the functions covered in [[complement-functions-regulation]].',
  ],

  mechanism: {
    title: 'Three triggers → one C3 hub → MAC',
    steps: [
      { id: 's1', label: 'Classical: antibody (IgM/IgG)+antigen → C1 → C4,C2', emphasis: 'key' },
      { id: 's2', label: 'Lectin: MBL binds mannose → MASP → C4,C2' },
      { id: 's3', label: 'Alternative: spontaneous C3 tickover on microbe (+properdin)' },
      { id: 's4', label: 'All → C3 convertase → C3a + C3b', emphasis: 'key' },
      { id: 's5', label: 'C3b → C5 convertase → C5b → MAC (C5b-9) lysis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Antibody–antigen complex activating complement', mechanism: 'Classical pathway (C1 binds Fc)', significance: 'key' },
    { sign: 'MBL binding mannose on a microbe', mechanism: 'Lectin pathway (MASP → C4/C2)', significance: 'key' },
    { sign: 'Spontaneous activation directly on a bacterial surface', mechanism: 'Alternative pathway (C3 tickover + properdin)', significance: 'key' },
    { sign: 'C3 convertase is the convergence point', mechanism: 'All three pathways cleave C3', significance: 'key' },
    { sign: 'MAC (C5b–C9) pore', mechanism: 'Terminal lysis of the target', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Complement pathway requiring antibody', meaning: 'Classical pathway' },
    { clue: 'Antibody-independent pathway using mannose recognition', meaning: 'Lectin pathway' },
    { clue: 'Pathway amplified by properdin on microbial surfaces', meaning: 'Alternative pathway' },
    { clue: 'The central component all pathways cleave', meaning: 'C3' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The convergence on C3 explains why C3 deficiency is the most severe. Eculizumab (anti-C5) blocks MAC formation in PNH/aHUS. Antibody-triggered classical activation links humoral immunity to lysis. Effector products + deficiencies: [[complement-functions-regulation]].' },
  ],

  mnemonics: [
    { hook: '"Classical = antibodies (C for Complex); Lectin = MBL/mannose; Alternative = spontaneous"', expansion: ['All meet at C3 convertase'] },
    { hook: 'Classical convertase C4b2a; Alternative C3bBb', expansion: ['Both cleave C3 → C3b'] },
  ],

  traps: [
    {
      questionCategory: 'Convergence point of complement',
      wrongInstinct: 'The three complement pathways stay separate through to lysis',
      rightAnswer: 'They CONVERGE at C3 (all form a C3 convertase); downstream (C5 → MAC) is shared',
      why: 'Different triggers, same hub — that is why C3 deficiency cripples all three pathways and causes severe pyogenic infections.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The classical complement pathway is initiated by:',
      options: [
        { id: 'a', text: 'Mannose-binding lectin recognising microbial sugars' },
        { id: 'b', text: 'Antibody (IgM/IgG) bound to antigen activating C1' },
        { id: 'c', text: 'Spontaneous hydrolysis of C3 on a microbial surface' },
        { id: 'd', text: 'Properdin binding' },
      ],
      answerId: 'b',
      explanation: 'The classical pathway starts when C1 binds the Fc of antigen-bound IgM/IgG. MBL/mannose = lectin pathway; spontaneous C3 tickover + properdin = alternative pathway.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'All three complement activation pathways converge on the formation of:',
      options: [
        { id: 'a', text: 'C1 esterase' },
        { id: 'b', text: 'A C3 convertase that cleaves C3' },
        { id: 'c', text: 'IgM pentamers' },
        { id: 'd', text: 'Mannose-binding lectin' },
      ],
      answerId: 'b',
      explanation: 'Each pathway generates a C3 convertase (classical/lectin C4b2a; alternative C3bBb) that cleaves C3 into C3a + C3b — the central convergence step leading to C5 convertase and the MAC.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Complement pathways', svg: COMPLEMENT_PATHWAYS, caption: 'Classical (antibody), lectin (MBL/mannose), alternative (tickover) all form a C3 convertase → C3b/C3a/C5a → MAC.' },
  ],
};

export default complementPathways;
