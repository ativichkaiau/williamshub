import type { Lecture } from '../../lib/types';

export const apoptosisCellDeath: Lecture = {
  id: 'apoptosis-cell-death',
  title: 'Apoptosis & Programmed Cell Death',
  system: 'pathology',
  source: 'L2 — Cell Injury & Cell Death',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L2 Apoptosis' },
    { kind: 'mechanism', label: 'Intrinsic/extrinsic; caspases' },
    { kind: 'exam', label: 'Apoptosis vs necrosis' },
  ],

  highYield: [
    '**APOPTOSIS is regulated, programmed, "cellular suicide" that eliminates unwanted/damaged single cells WITHOUT inflammation (the membrane stays intact and contents are packaged for phagocytosis). It is PHYSIOLOGIC (embryogenesis, hormone-dependent involution, immune-cell selection, turnover) and PATHOLOGIC (DNA/protein damage, viral infection, duct obstruction). Morphology: CELL SHRINKAGE, chromatin condensation, nuclear fragmentation, and membrane-bound APOPTOTIC BODIES phagocytosed by neighbours/macrophages.**',
    '**Execution is by CASPASES (proteases) via two converging pathways. INTRINSIC (MITOCHONDRIAL) pathway: cell stress/DNA damage tips the balance of the BCL-2 family toward pro-apoptotic BAX/BAK (over anti-apoptotic BCL-2) → mitochondrial outer-membrane permeabilisation → CYTOCHROME C release → apoptosome → caspase activation. EXTRINSIC (DEATH-RECEPTOR) pathway: ligands (FAS-L, TNF) engage death receptors (Fas/CD95) → caspase-8 → execution. Cytotoxic T cells also use GRANZYME B/perforin.**',
    '**APOPTOSIS vs NECROSIS is a core exam contrast: apoptosis = SINGLE cells, cell SHRINKAGE, intact membrane, ATP-DEPENDENT/regulated, NO inflammation, physiologic or pathologic; NECROSIS = GROUPS of cells, cell SWELLING, membrane RUPTURE with enzyme leak, always PATHOLOGIC, WITH inflammation. Dysregulation matters clinically: TOO LITTLE apoptosis (e.g. BCL-2 overexpression) promotes CANCER and autoimmunity; TOO MUCH contributes to neurodegeneration and ischaemic injury.**',
    '**Beyond classic apoptosis and necrosis, other REGULATED death pathways exist: NECROPTOSIS ("programmed necrosis", RIPK-driven, caspase-independent — inflammatory), PYROPTOSIS (inflammasome/caspase-1, IL-1β release — in infection), AUTOPHAGY (self-digestion of organelles — survival or death), and FERROPTOSIS (iron-dependent lipid peroxidation). These expand the "how cells die" repertoire but apoptosis remains the central regulated, non-inflammatory pathway.**',
    '**The take-home: APOPTOSIS = regulated single-cell death, SHRINKAGE + apoptotic bodies, INTACT membrane, NO inflammation; via CASPASES through INTRINSIC (mitochondrial cytochrome c, BCL-2/BAX) and EXTRINSIC (Fas/TNF death receptors) pathways. Contrast with NECROSIS (swelling, rupture, inflammation). Too little apoptosis → cancer; too much → degeneration.** Necrosis is [[necrosis-patterns]]; apoptosis evasion drives cancer ([[carcinogenesis-molecular]]).',
  ],

  mechanism: {
    title: 'Apoptosis = regulated single-cell death (shrinkage, apoptotic bodies, no inflammation) via caspases: intrinsic (mitochondrial cytochrome c, BCL-2/BAX) + extrinsic (Fas/TNF death receptors); vs necrosis (swelling/rupture/inflammation)',
    steps: [
      { id: 's1', label: 'Apoptosis = programmed, regulated single-cell death; NO inflammation (intact membrane)', emphasis: 'key' },
      { id: 's2', label: 'Morphology: cell shrinkage, chromatin condensation, apoptotic bodies (phagocytosed)', emphasis: 'key' },
      { id: 's3', label: 'Intrinsic: stress/DNA damage → BAX/BAK > BCL-2 → cytochrome c → apoptosome → caspases', emphasis: 'key' },
      { id: 's4', label: 'Extrinsic: Fas-L/TNF → death receptors → caspase-8 (+ CTL granzyme B/perforin)', emphasis: 'key' },
      { id: 's5', label: 'Too little apoptosis → cancer/autoimmunity; too much → neurodegeneration/ischaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Shrunken cells with condensed chromatin and apoptotic bodies, no inflammation', mechanism: 'Apoptosis', significance: 'key' },
    { sign: 'Cytochrome c release from mitochondria triggering caspases', mechanism: 'Intrinsic (mitochondrial) pathway', significance: 'key' },
    { sign: 'Fas-ligand engaging Fas (CD95) to activate caspase-8', mechanism: 'Extrinsic (death-receptor) pathway', significance: 'key' },
    { sign: 'BCL-2 overexpression preventing apoptosis in a lymphoma', mechanism: 'Too little apoptosis → cancer', significance: 'supportive' },
    { sign: 'Cytotoxic T-cell killing of a virally infected cell', mechanism: 'Granzyme B / perforin apoptosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The proteases that execute apoptosis', meaning: 'Caspases' },
    { clue: 'The mitochondrial trigger of the intrinsic pathway', meaning: 'Cytochrome c release (BCL-2/BAX balance)' },
    { clue: 'The receptor of the extrinsic pathway', meaning: 'Fas (CD95) / TNF receptor' },
    { clue: 'The inflammation status of apoptosis vs necrosis', meaning: 'Apoptosis none; necrosis present' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Apoptosis is the regulated, non-inflammatory way cells are eliminated in development, immune selection and after damage, executed by caspases via the intrinsic (mitochondrial, BCL-2/BAX/cytochrome c) and extrinsic (Fas/TNF) pathways. Its dysregulation is central to disease: too little apoptosis (e.g. BCL-2 overexpression) enables cancer and autoimmunity, while excessive apoptosis contributes to neurodegeneration and ischaemic injury — making apoptosis pathways major therapeutic targets. Distinguishing it from necrosis (swelling, rupture, inflammation) is fundamental. Necrosis is [[necrosis-patterns]]; evasion of apoptosis is a cancer hallmark ([[carcinogenesis-molecular]]).' },
  ],

  mnemonics: [
    { hook: 'Apoptosis "shrinks, no inflammation"; Necrosis "swells, inflames"', expansion: ['Apoptotic bodies phagocytosed', 'Single cells vs groups'] },
    { hook: 'Pathways: "Intrinsic = mitochondria/cytochrome c (BCL-2/BAX); Extrinsic = Fas/TNF"', expansion: ['Executed by caspases', 'Too little → cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Apoptosis vs necrosis',
      wrongInstinct: 'Apoptosis and necrosis both cause cell swelling and provoke inflammation',
      rightAnswer: 'They differ fundamentally: APOPTOSIS is regulated/energy-dependent, affects SINGLE cells, causes cell SHRINKAGE with an INTACT membrane and apoptotic bodies, and provokes NO inflammation (can be physiologic); NECROSIS affects GROUPS of cells, causes cell SWELLING and membrane RUPTURE with leakage of contents, is always pathologic, and DOES provoke inflammation',
      why: 'The shrinkage/intact-membrane/no-inflammation profile of apoptosis versus swelling/rupture/inflammation of necrosis is a core distinction; mixing them up misreads whether cell death is regulated and inflammatory, which changes the interpretation of the disease process.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature distinguishes apoptosis from necrosis?',
      options: [
        { id: 'a', text: 'Apoptosis causes cell swelling and inflammation' },
        { id: 'b', text: 'Apoptosis affects single cells with membrane integrity preserved and no inflammation' },
        { id: 'c', text: 'Apoptosis always affects large groups of cells' },
        { id: 'd', text: 'Apoptosis releases cellular enzymes into the blood' },
      ],
      answerId: 'b',
      explanation: 'Apoptosis is regulated single-cell death with cell shrinkage, intact membrane and apoptotic bodies, provoking no inflammation, whereas necrosis affects groups of cells with swelling and membrane rupture, leaking contents and causing inflammation.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The intrinsic (mitochondrial) pathway of apoptosis is triggered by:',
      options: [
        { id: 'a', text: 'Release of cytochrome c after a shift toward pro-apoptotic BCL-2 family proteins (BAX/BAK)' },
        { id: 'b', text: 'Fas-ligand binding Fas (CD95)' },
        { id: 'c', text: 'Complement membrane attack complex' },
        { id: 'd', text: 'Lysosomal rupture only' },
      ],
      answerId: 'a',
      explanation: 'In the intrinsic pathway, cell stress/DNA damage tips the BCL-2 family toward pro-apoptotic BAX/BAK, permeabilising the mitochondrial membrane and releasing cytochrome c, which forms the apoptosome and activates caspases. The Fas/TNF death receptors drive the separate extrinsic pathway.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default apoptosisCellDeath;
