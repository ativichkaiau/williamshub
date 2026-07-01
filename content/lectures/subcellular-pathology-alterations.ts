import type { Lecture } from '../../lib/types';

export const subcellularPathologyAlterations: Lecture = {
  id: 'subcellular-pathology-alterations',
  title: 'Clinical Cell Biology: Subcellular Alterations in Disease',
  system: 'histology',
  source: 'L10 — Clinical Cell Biology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L10 Clinical Cell Biology' },
    { kind: 'mechanism', label: 'Histology → pathology' },
    { kind: 'exam', label: 'Organelle changes in disease' },
  ],

  highYield: [
    '**"All diseases are alterations of normal histology."** Normal histology is the **framework** for pathology: disease is read at three levels — **electron-microscopic** (organelle/subcellular), **light-microscopic** (histopathology), and **macroscopic** (gross). Some changes are **adaptive/reversible**, others accompany lethal injury.',
    '**Smooth ER hyperplasia** = an **adaptive** response to metabolising chemicals: chronic **alcohol or drugs** induce more detox enzymes → **proliferation of hepatocyte SER** (reversible).',
    '**Mitochondrial alterations.** Number rises in **hypertrophy**, falls in **atrophy**. **Megamitochondria** (abnormally large) appear in **alcoholic liver disease** and nutritional deficiency; **paracrystalline ("parking-lot") inclusions** occur in congenital **myopathies**; mitochondrial proliferation gives **oncocytomas/Warthin tumour** (oncocytes = eosinophilic, mitochondria-packed).',
    '**Plasma-membrane and nuclear changes.** **Blebs** = focal cytoplasmic extrusions of the membrane (can shed without loss of viability, but also mark injury). **Nuclear alterations** — chromatin aggregation/clumping, nucleolar change, and (in malignancy) hyperchromasia + pleomorphism (see [[nucleus-chromatin-nucleolus]]).',
    '**Light-microscopic disease patterns.** Diseases alter normal histology as: **(1) infiltration** of inflammatory cells (e.g. neutrophils → cryptitis), **(2) proliferation** of cells (e.g. **parakeratosis** — retained nuclei in the stratum corneum), and **(3) loss** of normal cells (e.g. muscle atrophy).',
  ],

  mechanism: {
    title: 'Normal histology → altered = disease',
    steps: [
      { id: 's1', label: 'Levels: EM (organelle) → LM (histopath) → gross', emphasis: 'key' },
      { id: 's2', label: 'SER hyperplasia = adaptive (alcohol/drug detox)' },
      { id: 's3', label: 'Mito: number ↑hypertrophy/↓atrophy; megamito, parking-lot', emphasis: 'key' },
      { id: 's4', label: 'Membrane blebs; nuclear chromatin/nucleolar change' },
      { id: 's5', label: 'LM patterns: infiltration, proliferation, loss', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hepatocyte SER hyperplasia in a chronic drinker', mechanism: 'Adaptive enzyme induction (detoxification)', significance: 'key' },
    { sign: 'Megamitochondria in alcoholic liver disease', mechanism: 'Mitochondrial dysfunction/adaptation', significance: 'supportive' },
    { sign: 'Eosinophilic, mitochondria-packed oncocytes (Warthin tumour)', mechanism: 'Mitochondrial proliferation', significance: 'supportive' },
    { sign: 'Parakeratosis (nuclei retained in stratum corneum)', mechanism: 'Abnormal keratinocyte proliferation (e.g. psoriasis)', significance: 'key' },
    { sign: 'Neutrophils infiltrating colonic crypts (cryptitis)', mechanism: 'Inflammatory infiltration pattern', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Adaptive organelle change from chronic alcohol/drugs', meaning: 'Smooth ER hyperplasia (hepatocyte)' },
    { clue: 'Abnormally enlarged mitochondria on EM', meaning: 'Megamitochondria (alcoholic liver / deficiency)' },
    { clue: 'Retention of nuclei in the surface keratin layer', meaning: 'Parakeratosis (proliferation pattern)' },
    { clue: 'A change visible only on electron microscopy', meaning: 'Subcellular/organelle-level alteration' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This lecture is the bridge from BHCB histology to pathology (Robbins): every disease is deviation from normal tissue. It anchors later pathology courses and the cytoskeletal-disease markers in [[intermediate-filaments-clinical]].' },
  ],

  mnemonics: [
    { hook: 'Disease = altered normal histology at 3 levels: EM → LM → gross', expansion: ['Organelle, tissue, naked eye'] },
    { hook: 'LM patterns: "Infiltrate, Proliferate, Lose"', expansion: ['Inflammation, growth, atrophy'] },
  ],

  traps: [
    {
      questionCategory: 'Is SER hyperplasia irreversible damage?',
      wrongInstinct: 'Smooth ER proliferation in hepatocytes is a sign of irreversible cell death',
      rightAnswer: 'It is an ADAPTIVE, reversible response to drug/alcohol metabolism (enzyme induction), not lethal injury',
      why: 'Many subcellular changes are adaptive/homeostatic; distinguish reversible adaptation from lethal injury (blebbing with loss of viability, karyolysis).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Chronic alcohol intake causes which adaptive subcellular change in hepatocytes?',
      options: [
        { id: 'a', text: 'Proliferation (hyperplasia) of smooth endoplasmic reticulum' },
        { id: 'b', text: 'Loss of all mitochondria' },
        { id: 'c', text: 'Disappearance of the nucleus' },
        { id: 'd', text: 'Conversion of RER to lysosomes' },
      ],
      answerId: 'a',
      explanation: 'Alcohol and drugs induce detoxifying enzymes, expanding the smooth ER — an adaptive, reversible hyperplasia. Megamitochondria may also appear in alcoholic liver disease.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Parakeratosis, seen in conditions such as psoriasis, refers to:',
      options: [
        { id: 'a', text: 'Loss of the entire epidermis' },
        { id: 'b', text: 'Retention of nuclei in the stratum corneum due to abnormal keratinocyte proliferation' },
        { id: 'c', text: 'Increased melanocyte number' },
        { id: 'd', text: 'Neutrophil infiltration of crypts' },
      ],
      answerId: 'b',
      explanation: 'Parakeratosis = retained nuclei in the normally anucleate stratum corneum, reflecting accelerated/abnormal keratinocyte turnover — an example of the "proliferation" pattern of altered histology.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default subcellularPathologyAlterations;
