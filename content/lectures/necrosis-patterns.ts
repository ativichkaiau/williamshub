import type { Lecture } from '../../lib/types';

export const necrosisPatterns: Lecture = {
  id: 'necrosis-patterns',
  title: 'Necrosis & Its Morphologic Patterns',
  system: 'pathology',
  source: 'L2 — Cell Injury & Cell Death',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L2 Necrosis' },
    { kind: 'mechanism', label: 'Nuclear changes; 6 patterns' },
    { kind: 'exam', label: 'Coagulative vs liquefactive vs caseous' },
  ],

  highYield: [
    '**NECROSIS is death of cells in living tissue, with LEAKAGE of contents (enzymes) → local INFLAMMATION (unlike apoptosis). The NUCLEAR changes are common to all patterns: PYKNOSIS (shrunken, dense nucleus) → KARYORRHEXIS (fragmentation) → KARYOLYSIS (fading/dissolution). The tissue pattern of necrosis reflects the cause and site.**',
    '**COAGULATIVE necrosis: architecture PRESERVED for days (protein denaturation "coagulates" the tissue), firm and pale — the pattern of ISCHAEMIC infarction in most solid organs (heart, kidney, spleen) EXCEPT the brain. LIQUEFACTIVE necrosis: enzymatic digestion → soft, liquid/pus — seen in BACTERIAL ABSCESSES and, notably, in the BRAIN/CNS (ischaemic infarction of brain liquefies, an exception to the coagulative rule).**',
    '**CASEOUS necrosis: "cheese-like", soft white friable debris with granulomatous inflammation — the hallmark of TUBERCULOSIS (and some fungi). FAT necrosis: chalky white saponification (calcium soaps) from released lipases — classic in acute PANCREATITIS and in traumatised breast fat. FIBRINOID necrosis: bright pink "fibrin-like" deposits in vessel WALLS — in immune vasculitis and malignant hypertension.**',
    '**GANGRENOUS necrosis (a clinical term, usually of a limb): DRY gangrene = coagulative necrosis from ischaemia (mummified); WET gangrene = superimposed bacterial infection with liquefaction (worse, spreading). Recognising the pattern points to the cause: coagulative→ischaemia, liquefactive→abscess/CNS infarct, caseous→TB, fat→pancreatitis, fibrinoid→immune vascular injury.**',
    '**The take-home: necrosis = death in living tissue with enzyme leak → inflammation; nuclei show PYKNOSIS→KARYORRHEXIS→KARYOLYSIS. Patterns: COAGULATIVE (ischaemic infarct, architecture preserved — not brain), LIQUEFACTIVE (abscess/BRAIN), CASEOUS (TB), FAT (pancreatitis/breast), FIBRINOID (vessel walls — vasculitis/malignant HTN), GANGRENOUS (dry=ischaemic, wet=infected).** Mechanisms of injury are [[cell-injury-mechanisms]]; regulated death is [[apoptosis-cell-death]].',
  ],

  mechanism: {
    title: 'Necrosis (enzyme leak → inflammation); nuclei pyknosis→karyorrhexis→karyolysis; patterns: coagulative (ischaemic infarct, not brain), liquefactive (abscess/brain), caseous (TB), fat (pancreatitis), fibrinoid (vessels), gangrenous',
    steps: [
      { id: 's1', label: 'Necrosis = death in living tissue + enzyme leak → local inflammation', emphasis: 'key' },
      { id: 's2', label: 'Nuclear changes: pyknosis → karyorrhexis → karyolysis', emphasis: 'key' },
      { id: 's3', label: 'Coagulative = ischaemic infarct (architecture preserved) — EXCEPT brain', emphasis: 'key' },
      { id: 's4', label: 'Liquefactive = abscess & BRAIN infarct; caseous = TB; fat = pancreatitis/breast', emphasis: 'key' },
      { id: 's5', label: 'Fibrinoid = vessel walls (vasculitis/malignant HTN); gangrene dry (ischaemic) vs wet (infected)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A firm, pale wedge infarct in the kidney with preserved architecture', mechanism: 'Coagulative necrosis (ischaemia)', significance: 'key' },
    { sign: 'A soft, liquefied cavity in the brain after infarction, or pus in an abscess', mechanism: 'Liquefactive necrosis', significance: 'key' },
    { sign: 'Cheese-like white friable material with granulomas', mechanism: 'Caseous necrosis (tuberculosis)', significance: 'key' },
    { sign: 'Chalky-white saponified fat in acute pancreatitis', mechanism: 'Fat necrosis (lipase, calcium soaps)', significance: 'supportive' },
    { sign: 'Bright pink material in arterial walls in vasculitis', mechanism: 'Fibrinoid necrosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The sequence of nuclear changes in necrosis', meaning: 'Pyknosis → karyorrhexis → karyolysis' },
    { clue: 'The necrosis of ischaemic infarction in most organs', meaning: 'Coagulative (brain is the exception → liquefactive)' },
    { clue: 'The necrosis characteristic of tuberculosis', meaning: 'Caseous' },
    { clue: 'The necrosis in vessel walls in vasculitis/malignant HTN', meaning: 'Fibrinoid' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The pattern of necrosis points to the underlying cause and disease: coagulative necrosis indicates ischaemic infarction (heart, kidney, spleen), liquefactive indicates a bacterial abscess or a brain infarct (the CNS exception), caseous necrosis signals tuberculosis, fat necrosis signals pancreatitis or breast trauma, and fibrinoid necrosis indicates immune-mediated vascular injury (vasculitis, malignant hypertension). Gangrene (dry vs wet) guides surgical management. Because necrosis leaks contents, it causes inflammation and releases enzyme markers. Injury mechanisms are [[cell-injury-mechanisms]]; apoptosis (non-inflammatory) is [[apoptosis-cell-death]].' },
  ],

  mnemonics: [
    { hook: 'Patterns: "Coagulative=infarct, Liquefactive=abscess/Brain, Caseous=TB, Fat=pancreas, Fibrinoid=vessels"', expansion: ['Brain infarct = liquefactive (exception)', 'Nuclei: pyknosis/karyorrhexis/karyolysis'] },
    { hook: '"Dry gangrene = ischaemic (coagulative); Wet = infected (liquefactive)"', expansion: ['Fat necrosis = calcium soaps', 'Caseous = granuloma/TB'] },
  ],

  traps: [
    {
      questionCategory: 'Necrosis pattern of brain infarction',
      wrongInstinct: 'Like the heart and kidney, an ischaemic infarct of the brain undergoes coagulative necrosis',
      rightAnswer: 'The BRAIN is the classic EXCEPTION: ischaemic infarction of the CNS produces LIQUEFACTIVE (not coagulative) necrosis — the lipid-rich brain, digested by hydrolytic enzymes from microglia, liquefies into a cystic cavity — whereas ischaemic infarcts of most other solid organs (heart, kidney, spleen) are coagulative',
      why: 'The CNS-liquefaction exception to the "ischaemia → coagulative necrosis" rule is a favourite exam point; forgetting it mislabels the morphology of stroke/brain infarcts.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Caseous necrosis, with soft "cheese-like" debris and surrounding granulomatous inflammation, is most characteristic of:',
      options: [
        { id: 'a', text: 'Myocardial infarction' },
        { id: 'b', text: 'Tuberculosis' },
        { id: 'c', text: 'Acute pancreatitis' },
        { id: 'd', text: 'Vasculitis' },
      ],
      answerId: 'b',
      explanation: 'Caseous necrosis — friable "cheese-like" material within granulomas — is the hallmark of tuberculosis (and some fungal infections). Coagulative necrosis typifies infarction, fat necrosis pancreatitis, and fibrinoid necrosis immune vascular injury.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which necrosis pattern occurs in an ischaemic infarct of the brain, differing from most other organs?',
      options: [
        { id: 'a', text: 'Liquefactive necrosis' },
        { id: 'b', text: 'Coagulative necrosis' },
        { id: 'c', text: 'Caseous necrosis' },
        { id: 'd', text: 'Fibrinoid necrosis' },
      ],
      answerId: 'a',
      explanation: 'Ischaemic infarction of the CNS undergoes liquefactive necrosis (the lipid-rich tissue is digested into a cystic cavity), an exception to the coagulative necrosis seen in ischaemic infarcts of the heart, kidney and spleen. Liquefactive necrosis also occurs in bacterial abscesses.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default necrosisPatterns;
