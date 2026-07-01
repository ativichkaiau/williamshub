import type { Lecture } from '../../lib/types';
import { CYTOSKELETON_THREE } from '../../lib/figures';

export const actinMicrofilaments: Lecture = {
  id: 'actin-microfilaments',
  title: 'Microfilaments: Actin, Myosin & Cell Motility',
  system: 'histology',
  source: 'L2 — Cytoskeleton',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L2 Cytoskeleton' },
    { kind: 'mechanism', label: 'Actin dynamics' },
    { kind: 'exam', label: 'Thinnest filament' },
  ],

  highYield: [
    '**Microfilaments = actin, ~6–8 nm — the thinnest cytoskeletal filament.** Globular **G-actin** polymerises (ATP-bound) into a polar, double-helical **F-actin**. The two ends differ: the **(+) barbed end** grows fast, the **(−) pointed end** shrinks → **treadmilling**.',
    '**Myosin is the actin motor.** Actin–myosin interaction powers **muscle contraction** (thin filament), **cytokinesis** (the contractile ring that pinches dividing cells), and non-muscle motility.',
    '**Actin builds the cell cortex and surface projections.** A cortical actin meshwork under the membrane gives shape; bundled actin cores support **microvilli** (with villin/fimbrin) and the **terminal web**. Actin also drives **lamellipodia/filopodia** for cell crawling.',
    '**Actin anchors cell junctions.** The **zonula adherens** (belt) links **cadherin → catenin → actin** filaments and the terminal web — connecting the cytoskeletons of neighbouring epithelial cells (see [[cell-junctions]]).',
    '**Clinically exploited.** Some pathogens hijack actin: *Listeria* and *Shigella* polymerise host actin into "comet tails" for **actin-based intracellular motility**. Toxins like phalloidin (stabilises) and cytochalasin (blocks) target actin.',
  ],

  mechanism: {
    title: 'G-actin → F-actin → force',
    steps: [
      { id: 's1', label: 'ATP-G-actin adds to (+) end → polar F-actin', emphasis: 'key' },
      { id: 's2', label: 'Treadmilling: grow at (+), shrink at (−)' },
      { id: 's3', label: 'Myosin motor pulls on actin → contraction/movement', emphasis: 'key' },
      { id: 's4', label: 'Cores of microvilli, cortex, contractile ring' },
      { id: 's5', label: 'Anchors adherens junctions (cadherin–catenin–actin)' },
    ],
  },

  examFindings: [
    { sign: 'Thinnest filament (~6–8 nm)', mechanism: 'Actin microfilament', significance: 'key' },
    { sign: 'Brush border / microvillus core', mechanism: 'Bundled actin + villin, anchored in terminal web', significance: 'key' },
    { sign: 'Cleavage furrow at cytokinesis', mechanism: 'Actin–myosin contractile ring', significance: 'supportive' },
    { sign: 'Bacterial "comet tail"', mechanism: 'Pathogen-driven actin polymerisation (Listeria)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Structure giving epithelial cells an absorptive brush border', meaning: 'Actin-cored microvilli' },
    { clue: 'The motor protein partnering actin', meaning: 'Myosin' },
    { clue: 'Filament that forms the contractile ring in cell division', meaning: 'Actin (with myosin II)' },
    { clue: 'Junction linking actin between epithelial cells', meaning: 'Zonula adherens (cadherin–catenin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Actin underlies muscle contraction ([[skeletal-muscle-sarcomere]]), absorptive surfaces, wound-healing cell migration, and cancer-cell invasion. Its filament diameter distinguishes it from IFs and microtubules on EM.' },
  ],

  mnemonics: [
    { hook: 'Actin = thinnest (6) + Myosin motor + Microvilli + Motility', expansion: ['All the "M/movement" jobs'] },
    { hook: 'Treadmilling: grow at +, lose at −', expansion: ['Polar filament, dynamic'] },
  ],

  traps: [
    {
      questionCategory: 'Which filament cores microvilli?',
      wrongInstinct: 'Microvilli and cilia both have a microtubule core',
      rightAnswer: 'Microvilli have an ACTIN core (non-motile); cilia have a MICROTUBULE 9+2 core (motile)',
      why: 'Do not conflate the two apical projections — actin = microvilli/stereocilia, microtubules = cilia/flagella.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The core of an intestinal microvillus is composed of:',
      options: [
        { id: 'a', text: 'Microtubules in a 9+2 arrangement' },
        { id: 'b', text: 'Bundled actin filaments' },
        { id: 'c', text: 'Keratin intermediate filaments' },
        { id: 'd', text: 'Myosin thick filaments' },
      ],
      answerId: 'b',
      explanation: 'Microvilli have a core of bundled actin filaments (with villin/fimbrin) anchored in the terminal web — non-motile absorptive projections. The 9+2 microtubule core belongs to motile cilia.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The contractile ring that divides a cell during cytokinesis is made of:',
      options: [
        { id: 'a', text: 'Actin and myosin' },
        { id: 'b', text: 'Microtubules and dynein' },
        { id: 'c', text: 'Keratin' },
        { id: 'd', text: 'Tubulin dimers' },
      ],
      answerId: 'a',
      explanation: 'The cleavage furrow is generated by an actin–myosin II contractile ring. Microtubules form the mitotic spindle that separates chromosomes, not the furrow.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Three filament systems', svg: CYTOSKELETON_THREE, caption: 'Microfilaments (actin, ~6 nm, thinnest) vs intermediate filaments (~10 nm) vs microtubules (~25 nm, thickest).' },
  ],
};

export default actinMicrofilaments;
