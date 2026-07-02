import type { Lecture } from '../../lib/types';

export const inflammatoryMediatorsLeukocytes: Lecture = {
  id: 'inflammatory-mediators-leukocytes',
  title: 'Inflammatory Mediators & Leukocyte Recruitment',
  system: 'pathology',
  source: 'L5 — Inflammation & Repair',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L5 Mediators' },
    { kind: 'mechanism', label: 'Recruitment cascade; mediators' },
    { kind: 'exam', label: 'Selectins/integrins; arachidonic acid' },
  ],

  highYield: [
    '**Leukocytes (neutrophils first in acute inflammation) reach the injury by a multistep RECRUITMENT cascade in post-capillary venules: (1) MARGINATION (stasis pushes leukocytes to the vessel wall) → (2) ROLLING (weak, transient binding via SELECTINS — E/P-selectin on endothelium, induced by histamine/TNF/IL-1) → (3) firm ADHESION (INTEGRINS on leukocytes, activated by chemokines, binding ICAM/VCAM) → (4) TRANSMIGRATION/diapedesis (through the wall, via PECAM-1) → (5) CHEMOTAXIS (movement up a chemical gradient toward the stimulus).**',
    '**At the site, leukocytes perform PHAGOCYTOSIS: recognition/attachment (aided by OPSONINS — IgG, C3b), engulfment into a phagosome, and KILLING — chiefly by the oxygen-dependent RESPIRATORY BURST (NADPH oxidase → superoxide → H2O2; myeloperoxidase makes hypochlorite) plus oxygen-independent enzymes. Defects cause immunodeficiency (e.g. chronic granulomatous disease = NADPH oxidase defect; leukocyte adhesion deficiency = integrin defect).**',
    '**CHEMICAL MEDIATORS drive and regulate inflammation. VASOACTIVE AMINES: HISTAMINE (mast cells/basophils) → vasodilation + venule permeability. ARACHIDONIC ACID metabolites: PROSTAGLANDINS (pain, fever, vasodilation — via COX; blocked by NSAIDs/aspirin) and LEUKOTRIENES (via lipoxygenase — permeability, bronchospasm, chemotaxis). CYTOKINES: TNF and IL-1 (endothelial activation, fever, acute-phase response, the systemic effects). COMPLEMENT (C3a/C5a anaphylatoxins, C5a chemotaxis, C3b opsonin, MAC). Plus KININS (bradykinin — pain), platelet-activating factor, and nitric oxide.**',
    '**Mediators originate from CELLS (preformed: histamine; synthesised: prostaglandins, leukotrienes, cytokines, NO) or PLASMA proteins (complement, kinin and coagulation systems). Most act on target receptors, are short-lived, and are tightly regulated — which is why anti-inflammatory drugs target them (NSAIDs → COX/prostaglandins; corticosteroids → phospholipase A2 and broad mediator suppression; anti-TNF biologics).**',
    '**The take-home: leukocyte recruitment = MARGINATION → ROLLING (SELECTINS) → ADHESION (INTEGRINS/ICAM) → TRANSMIGRATION → CHEMOTAXIS, then PHAGOCYTOSIS (opsonins + respiratory burst/NADPH oxidase). Mediators: HISTAMINE (vasodilation/permeability), PROSTAGLANDINS (pain/fever, COX — NSAID target) & LEUKOTRIENES, cytokines TNF/IL-1 (systemic effects), COMPLEMENT (C5a chemotaxis, C3b opsonin).** The vascular events are [[acute-inflammation]]; chronic cells are [[chronic-inflammation-granuloma]].',
  ],

  mechanism: {
    title: 'Recruitment: margination → rolling (selectins) → adhesion (integrins/ICAM) → transmigration → chemotaxis → phagocytosis (opsonins + respiratory burst); mediators: histamine, prostaglandins (COX)/leukotrienes, TNF/IL-1, complement (C5a/C3b)',
    steps: [
      { id: 's1', label: 'Margination → rolling (SELECTINS) → firm adhesion (INTEGRINS ↔ ICAM/VCAM)', emphasis: 'key' },
      { id: 's2', label: 'Transmigration (PECAM) → chemotaxis up chemical gradient (C5a, LTB4, chemokines)', emphasis: 'key' },
      { id: 's3', label: 'Phagocytosis: opsonins (IgG/C3b) → engulf → kill via respiratory burst (NADPH oxidase)', emphasis: 'key' },
      { id: 's4', label: 'Mediators: histamine (vasodilation/permeability); prostaglandins (pain/fever, COX)/leukotrienes', emphasis: 'key' },
      { id: 's5', label: 'Cytokines TNF/IL-1 (systemic/fever); complement C5a (chemotaxis), C3b (opsonin)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Leukocyte rolling along activated endothelium', mechanism: 'Selectin-mediated (E/P-selectin)', significance: 'key' },
    { sign: 'Firm leukocyte adhesion before transmigration', mechanism: 'Integrin–ICAM/VCAM binding', significance: 'key' },
    { sign: 'Recurrent infections with a defective respiratory burst', mechanism: 'NADPH oxidase defect (chronic granulomatous disease)', significance: 'key' },
    { sign: 'Fever and pain reduced by an NSAID', mechanism: 'COX inhibition → less prostaglandin', significance: 'supportive' },
    { sign: 'Neutrophil chemotaxis toward a bacterial focus', mechanism: 'C5a / LTB4 chemoattractants', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The molecules mediating leukocyte rolling', meaning: 'Selectins' },
    { clue: 'The molecules mediating firm adhesion', meaning: 'Integrins (binding ICAM/VCAM)' },
    { clue: 'The arachidonic-acid mediators of pain and fever', meaning: 'Prostaglandins (COX pathway; NSAID target)' },
    { clue: 'The complement fragments for chemotaxis and opsonisation', meaning: 'C5a (chemotaxis), C3b (opsonin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The leukocyte recruitment cascade (selectin rolling, integrin adhesion, transmigration, chemotaxis) and phagocytic killing (respiratory burst) are how inflammation clears pathogens — and defects cause immunodeficiency (leukocyte adhesion deficiency, chronic granulomatous disease). The chemical mediators explain both symptoms and therapy: prostaglandins cause pain/fever and are blocked by NSAIDs/aspirin (COX), corticosteroids suppress phospholipase A2 and broadly damp mediators, and anti-TNF biologics target the cytokine driving systemic inflammation. Complement provides chemotaxis (C5a) and opsonisation (C3b). The vascular events are [[acute-inflammation]]; chronic inflammation is [[chronic-inflammation-granuloma]].' },
  ],

  mnemonics: [
    { hook: 'Recruitment: "Margination, Rolling (selectins), Adhesion (integrins), Transmigration, Chemotaxis"', expansion: ['Selectins = rolling', 'Integrins = firm adhesion'] },
    { hook: 'Mediators: "Histamine (dilation), Prostaglandins (pain/fever, COX), Leukotrienes, TNF/IL-1, C5a/C3b"', expansion: ['NSAIDs block COX', 'C5a chemotaxis, C3b opsonin'] },
  ],

  traps: [
    {
      questionCategory: 'Selectins vs integrins in recruitment',
      wrongInstinct: 'Selectins and integrins do the same job in getting leukocytes out of the vessel',
      rightAnswer: 'They act at DIFFERENT steps: SELECTINS (E/P-selectin on endothelium, induced by histamine/TNF/IL-1) mediate the weak, transient ROLLING of leukocytes, whereas INTEGRINS (on leukocytes, activated by chemokines) mediate the subsequent FIRM ADHESION by binding endothelial ICAM/VCAM before transmigration — so rolling = selectins, firm arrest = integrins (a leukocyte adhesion deficiency reflects an integrin defect)',
      why: 'The two adhesion families map to distinct sequential steps (rolling vs firm adhesion), and the specific defects (selectin/ligand vs integrin) cause different leukocyte adhesion deficiencies — a common exam and immunology point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which molecules mediate the initial weak, transient "rolling" of leukocytes along activated endothelium?',
      options: [
        { id: 'a', text: 'Integrins' },
        { id: 'b', text: 'Selectins' },
        { id: 'c', text: 'Prostaglandins' },
        { id: 'd', text: 'Caspases' },
      ],
      answerId: 'b',
      explanation: 'Selectins (E- and P-selectin on endothelium, induced by histamine, TNF and IL-1) mediate leukocyte rolling; firm adhesion is then mediated by leukocyte integrins binding endothelial ICAM/VCAM, followed by transmigration and chemotaxis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'NSAIDs and aspirin relieve inflammatory pain and fever by inhibiting which enzyme, reducing which mediators?',
      options: [
        { id: 'a', text: 'Cyclooxygenase (COX), reducing prostaglandins' },
        { id: 'b', text: 'Lipoxygenase, reducing histamine' },
        { id: 'c', text: 'NADPH oxidase, reducing superoxide' },
        { id: 'd', text: 'Phospholipase C, reducing complement' },
      ],
      answerId: 'a',
      explanation: 'Prostaglandins (mediators of pain, fever and vasodilation) are produced from arachidonic acid by cyclooxygenase (COX); NSAIDs and aspirin inhibit COX, reducing prostaglandin synthesis. Corticosteroids act higher up by inhibiting phospholipase A2.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default inflammatoryMediatorsLeukocytes;
