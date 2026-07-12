import type { Lecture } from '../../lib/types';

export const hhlLymphNodeHistology: Lecture = {
  id: 'hhl-lymph-node-histology',
  title: 'Lymph Node Architecture',
  system: 'heme',
  source: 'L5 — Histology of the Lymphoid System',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L5 Lymphoid histology' },
    { kind: 'exam', label: 'Node zonation' },
    { kind: 'mechanism', label: 'Cortex B → paracortex T' },
    { kind: 'investigation', label: 'Reactive vs neoplastic' },
  ],

  highYield: [
    'Lymph flows one way: **afferent lymphatics → subcapsular sinus → cortical/medullary sinuses → a single efferent lymphatic at the hilum**.',
    'Zonation: **cortex = B cells** (follicles; a **secondary follicle has a germinal centre** with follicular dendritic cells), **paracortex = T cells**, **medulla = plasma cells** (cords) + sinuses.',
    '**Naïve lymphocytes enter from the blood across high endothelial venules (HEVs) in the paracortex** — not via the afferent lymph.',
    '**Germinal centres = B-cell proliferation, somatic hypermutation and class switching**; they contain **tingible-body macrophages ("starry sky")**.',
    'Reactive hyperplasia localises: **follicular (B-cell) → bacterial/RA/early HIV**; **paracortical (T-cell) → viral/drugs (phenytoin)**. Spleen/thymus/MALT in [[hhl-spleen-thymus-malt]].',
  ],

  mechanism: {
    title: 'Cortex (B) → paracortex (T) → medulla (plasma); lymph flows afferent → efferent',
    steps: [
      { id: 's1', label: 'Afferent lymph → subcapsular sinus → through node → efferent at hilum', emphasis: 'key' },
      { id: 's2', label: 'Cortex = B cells in follicles; secondary follicle = germinal centre (FDCs)', emphasis: 'key' },
      { id: 's3', label: 'Paracortex = T cells; HEVs let lymphocytes enter from blood', emphasis: 'key' },
      { id: 's4', label: 'Medulla = cords (plasma cells) + sinuses (macrophages)' },
      { id: 's5', label: 'Reactive hyperplasia: follicular (B/bacterial) vs paracortical (T/viral)' },
    ],
  },

  examFindings: [
    { sign: 'Prominent germinal centres (follicular hyperplasia)', mechanism: 'B-cell reaction (e.g. RA, early HIV, toxoplasma)', significance: 'key' },
    { sign: 'Expanded paracortex', mechanism: 'T-cell/viral reaction (e.g. EBV, phenytoin)', significance: 'key' },
    { sign: 'Plasma cells concentrated in medullary cords', mechanism: 'Antibody-secreting zone of the node', significance: 'supportive' },
    { sign: 'High endothelial venules in the paracortex', mechanism: 'Entry point for blood-borne lymphocytes', significance: 'supportive' },
    { sign: 'Tingible-body macrophages ("starry sky") in a germinal centre', mechanism: 'Clearance of apoptotic B cells during selection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Follicular (germinal-centre) hyperplasia', meaning: 'B-cell-driven reactive node (bacterial, RA, early HIV, toxoplasma)' },
    { clue: 'Paracortical expansion', meaning: 'T-cell-driven reaction (viral, drugs e.g. phenytoin)' },
    { clue: 'Where do circulating lymphocytes enter a node?', meaning: 'High endothelial venules of the paracortex' },
    { clue: 'Effaced architecture with monotonous back-to-back follicles', meaning: 'Suspect follicular lymphoma (vs reactive hyperplasia)' },
  ],

  treatment: [
    { logic: 'Architecture answers reactive vs neoplastic', detail: 'Preserved zonation with polyclonal germinal centres and tingible-body macrophages favours reactive hyperplasia; effaced architecture with monotonous follicles suggests lymphoma → biopsy + immunophenotyping.' },
  ],

  mnemonics: [
    { hook: 'Outside-in: Cortex = B (follicles), Paracortex = T (HEV), Medulla = plasma cells', expansion: ['Secondary follicle = germinal centre = active B cells', 'HEV = lymphocyte entry point', 'Afferent (many) → subcapsular sinus → efferent (one) at hilum'] },
  ],

  traps: [
    {
      questionCategory: 'Where lymphocytes enter the node',
      wrongInstinct: 'Lymphocytes enter the node through the afferent lymphatics',
      rightAnswer: 'Circulating lymphocytes enter across the HIGH ENDOTHELIAL VENULES in the paracortex (from blood)',
      why: 'Afferent lymphatics carry antigen/lymph; naïve lymphocytes home from the bloodstream through paracortical HEVs.',
    },
    {
      questionCategory: 'Follicular hyperplasia vs follicular lymphoma',
      wrongInstinct: 'Numerous prominent follicles always mean reactive hyperplasia',
      rightAnswer: 'Reactive follicles are polyclonal with tingible-body macrophages and preserved zonation; monotonous follicles lacking these suggest follicular lymphoma',
      why: 'A "starry-sky" of tingible-body macrophages and normal mantle/germinal-centre polarity favours reactive; their loss favours lymphoma.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Circulating naïve lymphocytes enter a lymph node from the blood by migrating across specialised vessels located in the:',
      options: [
        { id: 'a', text: 'Subcapsular sinus' },
        { id: 'b', text: 'Germinal centre' },
        { id: 'c', text: 'Paracortex (high endothelial venules)' },
        { id: 'd', text: 'Medullary cords' },
      ],
      answerId: 'c',
      explanation: 'High endothelial venules in the paracortex (T-cell zone) are where blood-borne lymphocytes cross into the node; afferent lymphatics carry antigen, not the main lymphocyte entry route.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A reactive lymph node shows enlarged secondary follicles with prominent pale germinal centres. These germinal centres are sites of:',
      options: [
        { id: 'a', text: 'T-cell selection' },
        { id: 'b', text: 'B-cell proliferation and affinity maturation' },
        { id: 'c', text: 'Plasma-cell storage' },
        { id: 'd', text: 'Red-cell destruction' },
      ],
      answerId: 'b',
      explanation: 'Germinal centres in cortical (B-cell) follicles are where activated B cells proliferate and undergo somatic hypermutation and class switching, helped by follicular dendritic and Tfh cells.',
      tests: 'exam',
    },
  ],
};

export default hhlLymphNodeHistology;
