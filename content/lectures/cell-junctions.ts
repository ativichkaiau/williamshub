import type { Lecture } from '../../lib/types';
import { CELL_JUNCTIONS } from '../../lib/figures';

export const cellJunctions: Lecture = {
  id: 'cell-junctions',
  title: 'Cell Junctions: The Junctional Complex',
  system: 'histology',
  source: 'L3 — Epithelium & Cell Adhesion',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L3 Epithelium' },
    { kind: 'mechanism', label: 'Adhesion & sealing' },
    { kind: 'exam', label: 'Junction ↔ molecule' },
  ],

  highYield: [
    '**Zonula occludens (tight junction)** — the most apical, belt-like seal made of **occludin and claudin**. It **closes the paracellular space**, controlling what leaks between cells and maintaining **apical–basal polarity** (fences membrane proteins).',
    '**Zonula adherens (adherens junction)** — a belt just below, using **cadherins (Ca²⁺-dependent)** linked via **catenins to the actin** filaments of the terminal web. Provides lateral adhesion and mechanical continuity of the actin cytoskeleton between cells.',
    '**Macula adherens (desmosome)** — a **"spot-weld"** disc using **desmoglein/desmocollin (Ca²⁺-dependent cadherins)**, plaque proteins **desmoplakin/plakoglobin**, and **keratin intermediate filaments**. Distributes tensile/shear stress — abundant in epidermis and cardiac muscle.',
    '**Hemidesmosome** — "half a desmosome": anchors the **basal cell to the basement membrane** using **integrins → laminin** (not cadherins). Failure → blistering (bullous pemphigoid attacks hemidesmosomal antigens).',
    '**Gap junction (nexus)** — a communicating channel of **connexons (6 connexins each)** that lets ions/small molecules pass directly cell-to-cell → **electrical/metabolic coupling**. Essential in **cardiac and smooth muscle** (part of the intercalated disc) for synchronised contraction.',
  ],

  mechanism: {
    title: 'Apical seal → adhesion → anchor',
    steps: [
      { id: 's1', label: 'Tight junction (occludin/claudin) seals paracellular gap', emphasis: 'key' },
      { id: 's2', label: 'Adherens junction: cadherin–catenin–ACTIN belt', emphasis: 'key' },
      { id: 's3', label: 'Desmosome: desmoglein/collin–plakins–KERATIN spot-weld', emphasis: 'key' },
      { id: 's4', label: 'Hemidesmosome: integrin → basal lamina (laminin)' },
      { id: 's5', label: 'Gap junction: connexons → cell–cell communication' },
    ],
  },

  examFindings: [
    { sign: 'Occludin/claudin apical seal', mechanism: 'Tight junction (blocks paracellular leak)', significance: 'key' },
    { sign: 'Cadherin linked to actin', mechanism: 'Zonula adherens', significance: 'key' },
    { sign: 'Desmoglein + keratin "spot weld"', mechanism: 'Desmosome (macula adherens)', significance: 'key' },
    { sign: 'Integrin anchoring cell to basement membrane', mechanism: 'Hemidesmosome', significance: 'supportive' },
    { sign: 'Connexon channels in the intercalated disc', mechanism: 'Gap junction → cardiac electrical coupling', significance: 'key' },
  ],

  investigations: [
    { clue: 'Junction that prevents substances leaking between epithelial cells', meaning: 'Tight junction (zonula occludens)' },
    { clue: 'Junction linking keratin filaments between cells', meaning: 'Desmosome' },
    { clue: 'Junction linking actin filaments between cells', meaning: 'Adherens junction' },
    { clue: 'Junction allowing ionic current to pass (cardiac muscle)', meaning: 'Gap junction (connexons)' },
    { clue: 'Autoantibody against desmoglein-3 causing intraepidermal blisters', meaning: 'Pemphigus vulgaris (desmosome target)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Junction diseases are classic: pemphigus vulgaris (anti-desmoglein → desmosome), bullous pemphigoid (anti-hemidesmosome), and connexin mutations (deafness). Gap junctions synchronise the heart — see [[cardiac-smooth-muscle]]. IF anchoring links to [[intermediate-filaments]].' },
  ],

  mnemonics: [
    { hook: 'Adherens = Actin; Desmosome = "Desmo/keratin" intermediate filament', expansion: ['Cadherins (Ca²⁺) in both'] },
    { hook: 'Order apical→basal: "Occlude, Adhere, Desmo, Gap, Hemi"', expansion: ['Tight seals, then anchors'] },
  ],

  traps: [
    {
      questionCategory: 'Which filament anchors the desmosome?',
      wrongInstinct: 'Both adherens junctions and desmosomes anchor to actin',
      rightAnswer: 'Adherens junction → ACTIN; desmosome → KERATIN (intermediate filaments)',
      why: 'Both use Ca²⁺-dependent cadherins, but the intracellular anchor differs — actin (belt) vs keratin IF (spot-weld).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Autoantibodies against desmoglein-3 (pemphigus vulgaris) disrupt which junction, causing keratinocytes to separate?',
      options: [
        { id: 'a', text: 'Tight junction' },
        { id: 'b', text: 'Gap junction' },
        { id: 'c', text: 'Desmosome' },
        { id: 'd', text: 'Hemidesmosome' },
      ],
      answerId: 'c',
      explanation: 'Desmoglein is a desmosomal cadherin; anti-desmoglein antibodies break desmosomes → intraepidermal acantholytic blisters. Anti-hemidesmosome antibodies cause bullous pemphigoid (subepidermal).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Direct electrical coupling between cardiac muscle cells occurs through:',
      options: [
        { id: 'a', text: 'Tight junctions (claudin)' },
        { id: 'b', text: 'Gap junctions (connexons)' },
        { id: 'c', text: 'Desmosomes (desmoglein)' },
        { id: 'd', text: 'Hemidesmosomes (integrin)' },
      ],
      answerId: 'b',
      explanation: 'Gap junctions of connexons allow ions to pass cell-to-cell, synchronising cardiac contraction (part of the intercalated disc, along with desmosomes for mechanical strength).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Junctional complex', svg: CELL_JUNCTIONS, caption: 'Apical→basal: tight (occludin/claudin) → adherens (cadherin–actin) → desmosome (desmoglein–keratin) → gap (connexon) → hemidesmosome (integrin–laminin).' },
  ],
};

export default cellJunctions;
