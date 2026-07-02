import type { Lecture } from '../../lib/types';
import { APOPTOSIS_NECROSIS } from '../../lib/figures';

export const apoptosisNecrosis: Lecture = {
  id: 'apoptosis-necrosis',
  title: 'Cell Death: Apoptosis vs Necrosis',
  system: 'physiology',
  source: 'L11 — Cellular Aging & Cell Death',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L11 Aging & Cell Death' },
    { kind: 'mechanism', label: 'Programmed vs accidental' },
    { kind: 'exam', label: 'Apoptosis vs necrosis' },
  ],

  highYield: [
    '**Two main modes of cell death. Apoptosis = programmed, controlled, physiological.** The cell **shrinks**, chromatin **condenses**, and it fragments into membrane-bound **apoptotic bodies** that are cleanly phagocytosed — **the membrane stays intact, so there is NO inflammation**. It is **active and ATP-dependent**.',
    '**Necrosis = accidental, uncontrolled, pathological.** From severe injury (ischaemia, toxins, trauma), the cell **swells and its membrane ruptures**, spilling contents that **trigger inflammation**. It is passive and always pathological.',
    '**Apoptosis is caspase-mediated via two pathways.** **Intrinsic (mitochondrial):** internal stress/DNA damage → **Bax/Bak** overcome **Bcl-2** → mitochondria release **cytochrome c** → caspase activation. **Extrinsic (death-receptor):** external signals bind **death receptors (Fas/FasL, TNF)** → caspase activation. Both converge on executioner caspases that dismantle the cell.',
    '**Apoptosis is essential in normal biology,** not just death: sculpting **interdigital webs** in development, removing self-reactive lymphocytes (immune tolerance), and tissue turnover. **Too little apoptosis → cancer/autoimmunity; too much → neurodegeneration/atrophy.**',
    '**Autophagy** ("self-eating") is a related process: the cell **recycles its own organelles/proteins** in autophagosomes — mainly a **survival/stress-adaptation** mechanism (and a route in starvation), though excessive autophagy can also contribute to cell death.',
  ],

  mechanism: {
    title: 'Tidy programmed death vs messy injury',
    steps: [
      { id: 's1', label: 'Apoptosis = active, cell shrinks, membrane intact, NO inflammation', emphasis: 'key' },
      { id: 's2', label: 'Necrosis = passive injury, cell swells/ruptures, INFLAMMATION', emphasis: 'key' },
      { id: 's3', label: 'Intrinsic: mitochondria/cytochrome c (Bcl-2/Bax) → caspases', emphasis: 'key' },
      { id: 's4', label: 'Extrinsic: death receptors (Fas/TNF) → caspases' },
      { id: 's5', label: 'Autophagy = recycling/survival; balance matters (cancer vs atrophy)' },
    ],
  },

  examFindings: [
    { sign: 'Cell shrinkage + apoptotic bodies, no inflammation', mechanism: 'Apoptosis (programmed, membrane intact)', significance: 'key' },
    { sign: 'Cell swelling + membrane rupture + inflammation', mechanism: 'Necrosis (injury-induced)', significance: 'key' },
    { sign: 'Cytochrome c release from mitochondria', mechanism: 'Intrinsic apoptotic pathway (caspase activation)', significance: 'key' },
    { sign: 'Fas–FasL engagement killing a target cell', mechanism: 'Extrinsic (death-receptor) apoptosis', significance: 'supportive' },
    { sign: 'Interdigital webs removed in the fetus', mechanism: 'Developmental apoptosis (physiological)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cell death with inflammation and membrane rupture', meaning: 'Necrosis' },
    { clue: 'Programmed death with no inflammation', meaning: 'Apoptosis' },
    { clue: 'Apoptotic pathway triggered by internal DNA damage', meaning: 'Intrinsic (mitochondrial) pathway' },
    { clue: 'Process recycling the cell\'s own organelles', meaning: 'Autophagy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Apoptosis dysregulation is central to cancer (too little — Bcl-2 overexpression), autoimmunity (failed lymphocyte deletion), and neurodegeneration (too much). It links to immune tolerance ([[t-cell-development-thymic-selection]]) and cytotoxic killing ([[cd8-ctl-nk-effectors]]). Aging mechanisms: [[cellular-aging-theories]].' },
  ],

  mnemonics: [
    { hook: 'Apoptosis = "A tidy, programmed, no inflammation"; Necrosis = "messy iNjury + iNflammation"', expansion: ['Apoptosis shrinks; necrosis swells/ruptures'] },
    { hook: 'Intrinsic = "Inside/mitochondria (cytochrome c)"; Extrinsic = "External death receptors (Fas)"', expansion: ['Both → caspases'] },
  ],

  traps: [
    {
      questionCategory: 'Inflammation in cell death',
      wrongInstinct: 'Both apoptosis and necrosis cause inflammation',
      rightAnswer: 'Apoptosis does NOT cause inflammation (membrane stays intact, cleanly phagocytosed); NECROSIS does (membrane ruptures, contents spill)',
      why: 'The intact vs ruptured membrane is the key distinction — apoptosis is tidy and non-inflammatory, necrosis is messy and inflammatory.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature distinguishes apoptosis from necrosis?',
      options: [
        { id: 'a', text: 'Apoptosis causes cell swelling and inflammation' },
        { id: 'b', text: 'Apoptosis is a controlled, energy-dependent process with an intact membrane and no inflammation' },
        { id: 'c', text: 'Necrosis is programmed and physiological' },
        { id: 'd', text: 'Necrosis produces apoptotic bodies' },
      ],
      answerId: 'b',
      explanation: 'Apoptosis is active/programmed: the cell shrinks, forms apoptotic bodies, keeps its membrane intact, and provokes no inflammation. Necrosis is passive injury with swelling, rupture, and inflammation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The intrinsic (mitochondrial) pathway of apoptosis is triggered by internal stress/DNA damage and involves the release of:',
      options: [
        { id: 'a', text: 'Cytochrome c from mitochondria, activating caspases' },
        { id: 'b', text: 'Histamine from granules' },
        { id: 'c', text: 'Fas ligand from T cells' },
        { id: 'd', text: 'Perforin' },
      ],
      answerId: 'a',
      explanation: 'In the intrinsic pathway, pro-apoptotic Bax/Bak (opposing Bcl-2) permeabilise mitochondria to release cytochrome c, which activates the caspase cascade. Fas ligand drives the extrinsic pathway.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Apoptosis vs necrosis', svg: APOPTOSIS_NECROSIS, caption: 'Apoptosis = programmed, shrink, intact membrane, no inflammation (intrinsic/extrinsic caspases). Necrosis = injury, swell/rupture, inflammation.' },
  ],
};

export default apoptosisNecrosis;
