import type { Lecture } from '../../lib/types';

export const acuteInflammation: Lecture = {
  id: 'acute-inflammation',
  title: 'Acute Inflammation: Vascular Events',
  system: 'pathology',
  source: 'L5 — Inflammation & Repair',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L5 Acute inflammation' },
    { kind: 'mechanism', label: 'Vasodilation, permeability, exudate' },
    { kind: 'exam', label: 'Cardinal signs; exudate vs transudate' },
  ],

  highYield: [
    'INFLAMMATION is the protective response of vascularised tissue that delivers leukocytes and plasma proteins to a site of infection or injury to eliminate the cause and begin repair. ACUTE inflammation is RAPID (minutes–days), with a NEUTROPHIL-predominant infiltrate and prominent VASCULAR changes; it can be triggered by infections, tissue necrosis, foreign bodies, trauma and immune reactions. The FIVE CARDINAL SIGNS are rubor (redness), calor (heat), tumor (swelling), dolor (pain) and functio laesa (loss of function).',
    'The VASCULAR events are the core of acute inflammation: (1) transient vasoconstriction then VASODILATION (arteriolar — mediated by histamine/NO) → increased blood flow → REDNESS and HEAT; (2) increased vascular PERMEABILITY → protein-rich fluid leaves vessels → SWELLING; (3) as fluid leaves, blood becomes concentrated and flow slows (STASIS), letting leukocytes marginate.',
    'Increased permeability produces an EXUDATE (protein-rich, high specific gravity, cells) — distinct from a TRANSUDATE (protein-poor ultrafiltrate from altered hydrostatic/oncotic pressure, seen in heart failure/hypoalbuminaemia, NOT inflammation). Mechanisms of leak: ENDOTHELIAL CONTRACTION (histamine/leukotrienes — immediate transient, in venules), direct endothelial injury (burns), and increased transcytosis. Oedema = excess interstitial fluid; pus = neutrophil-rich exudate.',
    'Acute inflammation has several OUTCOMES: complete RESOLUTION (stimulus cleared, tissue restored — ideal), healing by fibrosis/SCARRING (with substantial tissue destruction), ABSCESS formation (walled-off pus), or progression to CHRONIC inflammation if the agent persists. Morphologic patterns include serous (blister), fibrinous (pericarditis), suppurative/purulent (abscess) and ulcerative.',
    '**The take-home: acute inflammation = rapid, NEUTROPHIL-driven response; 5 cardinal signs (redness/heat/swelling/pain/loss of function). Vascular events: VASODILATION (→ redness/heat) → ↑PERMEABILITY (→ EXUDATE/swelling) → stasis. EXUDATE (protein-rich, inflammatory) vs TRANSUDATE (protein-poor, pressure-driven). Outcomes: resolution, scarring, abscess, or chronicity.** Mediators and leukocyte recruitment are [[inflammatory-mediators-leukocytes]]; persistence → [[chronic-inflammation-granuloma]].',
  ],

  mechanism: {
    title: 'Acute inflammation (rapid, neutrophil): 5 cardinal signs; vascular events vasodilation (redness/heat) → ↑permeability (exudate/swelling) → stasis; exudate (protein-rich) vs transudate; outcomes resolution/scar/abscess/chronic',
    steps: [
      { id: 's1', label: 'Acute inflammation = rapid, neutrophil-predominant; 5 cardinal signs', emphasis: 'key' },
      { id: 's2', label: 'Vasodilation (histamine/NO) → ↑blood flow → redness + heat', emphasis: 'key' },
      { id: 's3', label: '↑vascular permeability (endothelial contraction) → protein-rich EXUDATE → swelling', emphasis: 'key' },
      { id: 's4', label: 'Exudate (protein-rich, inflammatory) vs transudate (protein-poor, pressure-driven)', emphasis: 'key' },
      { id: 's5', label: 'Outcomes: resolution (ideal), scarring, abscess, or progression to chronic', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Redness, heat, swelling, pain and loss of function', mechanism: 'The five cardinal signs of acute inflammation', significance: 'key' },
    { sign: 'Redness and warmth of inflamed tissue', mechanism: 'Vasodilation (increased blood flow)', significance: 'key' },
    { sign: 'Protein-rich fluid with cells in a body cavity', mechanism: 'Exudate (increased permeability)', significance: 'key' },
    { sign: 'Protein-poor fluid in the pleura in heart failure', mechanism: 'Transudate (not inflammatory)', significance: 'supportive' },
    { sign: 'A localised collection of pus', mechanism: 'Abscess (suppurative inflammation)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The predominant cell of acute inflammation', meaning: 'Neutrophil' },
    { clue: 'The vascular change causing redness and heat', meaning: 'Vasodilation' },
    { clue: 'The protein-rich inflammatory fluid', meaning: 'Exudate' },
    { clue: 'The protein-poor pressure-driven fluid', meaning: 'Transudate' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Acute inflammation is the body\'s rapid defensive response, and its vascular events explain the clinical signs: vasodilation causes the redness and heat, increased permeability produces the protein-rich exudate and swelling, and stasis enables leukocyte recruitment. Distinguishing an exudate (protein-rich, inflammatory/infective) from a transudate (protein-poor, from heart failure or hypoalbuminaemia) is a key clinical test (e.g. Light\'s criteria for pleural fluid). The outcome — resolution, scarring, abscess, or chronicity — guides management. Mediators/leukocytes are [[inflammatory-mediators-leukocytes]]; chronic inflammation is [[chronic-inflammation-granuloma]].' },
  ],

  mnemonics: [
    { hook: 'Cardinal signs: "rubor, calor, tumor, dolor, functio laesa"', expansion: ['Vasodilation → redness/heat', 'Permeability → swelling'] },
    { hook: '"Exudate = protein-rich (inflammation); Transudate = protein-poor (pressure)"', expansion: ['Neutrophil-predominant', 'Pus = suppurative exudate'] },
  ],

  traps: [
    {
      questionCategory: 'Exudate vs transudate',
      wrongInstinct: 'Any fluid that collects in a tissue or cavity indicates inflammation',
      rightAnswer: 'You must distinguish an EXUDATE from a TRANSUDATE: an EXUDATE is PROTEIN-RICH (high specific gravity, with inflammatory cells) and results from INCREASED VASCULAR PERMEABILITY in inflammation/infection/malignancy, whereas a TRANSUDATE is PROTEIN-POOR (a plasma ultrafiltrate) from altered HYDROSTATIC/ONCOTIC pressure (heart failure, cirrhosis, nephrotic syndrome) and is NOT inflammatory — so the protein content determines whether a collection reflects inflammation',
      why: 'Treating every effusion as inflammatory misses that transudates arise from pressure/osmotic imbalance (heart/liver/kidney failure); the exudate–transudate distinction (protein content) directs the diagnostic work-up.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The redness and warmth of acutely inflamed tissue are primarily caused by:',
      options: [
        { id: 'a', text: 'Vasoconstriction' },
        { id: 'b', text: 'Vasodilation with increased blood flow' },
        { id: 'c', text: 'Decreased vascular permeability' },
        { id: 'd', text: 'Neutrophil apoptosis' },
      ],
      answerId: 'b',
      explanation: 'After a transient vasoconstriction, arteriolar vasodilation (mediated by histamine and nitric oxide) increases blood flow to the area, producing the redness (rubor) and heat (calor); increased permeability then causes the swelling.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which best characterises an exudate?',
      options: [
        { id: 'a', text: 'A protein-rich fluid with inflammatory cells due to increased vascular permeability' },
        { id: 'b', text: 'A protein-poor ultrafiltrate from raised hydrostatic pressure' },
        { id: 'c', text: 'A fluid found only in heart failure' },
        { id: 'd', text: 'A fluid that never contains cells' },
      ],
      answerId: 'a',
      explanation: 'An exudate is protein-rich with a high specific gravity and inflammatory cells, resulting from increased vascular permeability in inflammation; a transudate is a protein-poor ultrafiltrate driven by altered hydrostatic/oncotic pressure (e.g. heart failure, hypoalbuminaemia).',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default acuteInflammation;
