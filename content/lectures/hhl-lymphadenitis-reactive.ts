import type { Lecture } from '../../lib/types';

export const hhlLymphadenitisReactive: Lecture = {
  id: 'hhl-lymphadenitis-reactive',
  title: 'Lymphadenitis & Reactive Hyperplasia',
  system: 'heme',
  source: 'L10 — Pathology of Lymph Node & Lymphoma',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L10 Node & Lymphoma' },
    { kind: 'disease', label: 'Reactive lymphadenopathy' },
    { kind: 'mechanism', label: 'Reactive vs neoplastic' },
    { kind: 'exam', label: 'Nodal reaction patterns' },
  ],

  highYield: [
    '**Acute nonspecific lymphadenitis** = painful, tender, enlarging nodes draining an infection; **chronic nonspecific** lymphadenitis is often nontender.',
    'Reactive patterns map to nodal **compartments**: **follicular hyperplasia = B-cell** (RA, **early HIV**, toxoplasma); **paracortical/interfollicular hyperplasia = T-cell** (viral infections, post-vaccination, **drugs — phenytoin/Dilantin**); **sinus histiocytosis** = node draining a tumour.',
    '**Granulomatous lymphadenitis**: **caseating = TB**; **non-caseating = sarcoidosis**; stellate necrotizing granulomas = **cat-scratch disease** (Bartonella) / LGV.',
    '**Reactive vs lymphoma** — reactive keeps **preserved architecture**, is **polymorphous** and **polyclonal**, with germinal centres showing **tingible-body macrophages** and intact mantle zones. Lymphoma **effaces** architecture and is **monomorphous/monoclonal**.',
  ],

  mechanism: {
    title: 'Antigen challenge → compartment-specific reactive hyperplasia',
    steps: [
      { id: 's1', label: 'Antigen drains to the node' },
      { id: 's2', label: 'B-cell response → follicular (germinal-centre) hyperplasia', emphasis: 'key' },
      { id: 's3', label: 'T-cell/viral/drug response → paracortical hyperplasia', emphasis: 'key' },
      { id: 's4', label: 'Macrophage response → sinus histiocytosis' },
      { id: 's5', label: 'Preserved architecture + polyclonality = reactive, NOT lymphoma', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Tender, acutely enlarged nodes', mechanism: 'Acute lymphadenitis draining local infection', significance: 'supportive' },
    { sign: 'Florid follicular hyperplasia with tingible-body macrophages + intact mantle zones', mechanism: 'Benign B-cell reaction (RA, early HIV, toxoplasma)', significance: 'key' },
    { sign: 'Paracortical expansion with immunoblasts', mechanism: 'T-cell reaction (viral or phenytoin/drug)', significance: 'supportive' },
    { sign: 'Caseating vs non-caseating granulomas', mechanism: 'Caseating = TB; non-caseating = sarcoid', significance: 'key' },
    { sign: 'Sinuses distended by histiocytes', mechanism: 'Sinus histiocytosis in a node draining carcinoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Preserved architecture, polymorphous cells, polyclonal', meaning: 'Reactive hyperplasia (benign)' },
    { clue: 'Effaced architecture, monomorphous, monoclonal (e.g. BCL2+ follicles)', meaning: 'Lymphoma' },
    { clue: 'Caseating granulomas with acid-fast bacilli', meaning: 'Tuberculous lymphadenitis' },
    { clue: 'Follicular hyperplasia + generalised lymphadenopathy in a young adult', meaning: 'Consider early HIV / toxoplasma' },
  ],

  treatment: [
    { logic: 'Treat the underlying cause', detail: 'Reactive nodes regress once the trigger (infection, drug such as phenytoin) is removed.' },
    { logic: 'Biopsy the suspicious node', detail: 'Hard, fixed, painless nodes >~2 cm, persistent, or with B symptoms need EXCISIONAL biopsy — architecture is diagnostic and FNA can miss it.' },
  ],

  mnemonics: [
    { hook: 'Follicle = B, Paracortex = T, Sinus = histiocytes', expansion: ['Follicular hyperplasia = RA / early HIV / toxoplasma', 'Paracortical = viral / phenytoin (Dilantin)', 'Sinus histiocytosis = node draining cancer'] },
    { hook: 'Caseating = TB, Non-caseating = Sarcoid', expansion: ['Stellate necrotizing granuloma = cat-scratch (Bartonella)'] },
  ],

  traps: [
    {
      questionCategory: 'Reactive hyperplasia vs follicular lymphoma',
      wrongInstinct: 'Florid follicular hyperplasia with big germinal centres must be follicular lymphoma',
      rightAnswer: 'Preserved architecture, polymorphous/polyclonal, BCL2-negative germinal centres WITH tingible-body macrophages = reactive',
      why: 'Follicular lymphoma effaces architecture, is monotonous, BCL2-positive, and lacks tingible-body macrophages.',
    },
    {
      questionCategory: 'Drug history in lymphadenopathy',
      wrongInstinct: 'Generalised lymphadenopathy in a patient on phenytoin is lymphoma',
      rightAnswer: 'Phenytoin (Dilantin) can cause a paracortical (pseudolymphoma) reactive hyperplasia that regresses on stopping the drug',
      why: 'A drug history and reversibility distinguish it; hypersensitivity can mimic lymphoma clinically.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cervical node shows enlarged follicles. Which feature most favours a benign REACTIVE process over follicular lymphoma?',
      options: [
        { id: 'a', text: 'A monotonous population of small cleaved cells' },
        { id: 'b', text: 'BCL2 positivity within the follicles' },
        { id: 'c', text: 'Tingible-body macrophages within the germinal centres' },
        { id: 'd', text: 'Effacement of the normal nodal architecture' },
      ],
      answerId: 'c',
      explanation: 'Tingible-body macrophages, a polymorphous population, preserved architecture and BCL2-negative germinal centres indicate reactive hyperplasia; follicular lymphoma is monotonous, architecture-effacing and BCL2-positive.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient with cervical lymphadenopathy has a node biopsy showing caseating granulomas with Langhans giant cells. Most likely cause?',
      options: [
        { id: 'a', text: 'Sarcoidosis' },
        { id: 'b', text: 'Tuberculosis' },
        { id: 'c', text: 'Follicular hyperplasia' },
        { id: 'd', text: 'Sinus histiocytosis' },
      ],
      answerId: 'b',
      explanation: 'Caseating (necrotising) granulomas point to tuberculosis; sarcoidosis classically gives NON-caseating granulomas.',
      tests: 'disease',
    },
  ],
};

export default hhlLymphadenitisReactive;
