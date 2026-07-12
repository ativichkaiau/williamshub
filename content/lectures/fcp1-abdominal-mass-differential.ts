import type { Lecture } from '../../lib/types';

export const fcp1AbdominalMassDifferential: Lecture = {
  id: 'fcp1-abdominal-mass-differential',
  title: 'Abdominal Mass: Differential by Region',
  system: 'clinical',
  source: 'L19 — Abdominal Mass',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L19 Abdominal Mass' },
    { kind: 'disease', label: 'Differential by quadrant' },
    { kind: 'exam', label: 'Spleen vs kidney' },
    { kind: 'investigation', label: 'Imaging · tumour markers' },
  ],

  highYield: [
    'Localise by **quadrant to organ**: **RUQ** (hepatomegaly, gallbladder — Courvoisier), **epigastrium** (gastric or pancreatic mass, AAA), **LUQ** (splenomegaly), **flanks** (renal — tumour, polycystic, hydronephrosis), **RIF** (appendiceal mass, Crohn, caecal cancer, ovarian), **LIF** (diverticular mass, colon cancer, faeces), **suprapubic** (bladder, uterine fibroid, ovarian). The examination approach is in [[fcp1-abdominal-mass-approach]].',
    '**Spleen vs kidney**: the **spleen** has a **notch**, enlarges towards the **RIF**, is **dull** to percussion, moves with respiration, and you **cannot get above** it or ballot it; the **kidney** is **ballotable**, you **can get above** it, and has a band of bowel **resonance** in front. Splenomegaly causes are in [[fcp1-splenomegaly-approach]].',
    '**Hepatomegaly** (RUQ, moves with respiration, dull, cannot get above it) — causes include congestion, malignancy or metastases, and infiltration; a knobbly, irregular liver suggests metastases or cirrhosis. A palpable gallbladder connects to [[fcp1-jaundice-cholestasis]].',
    '**Benign vs malignant clues**: **malignant** masses tend to be **hard, irregular, fixed**, with **weight loss**, lymphadenopathy (see [[fcp1-lymphadenopathy-approach]]) and anaemia; benign masses are often smooth, mobile and non-tender. A left iliac fossa mass in constipation may be simple **faeces** — recheck after clearance ([[fcp1-constipation-bowel-habit]]).',
    '**Investigation** follows the likely organ: ultrasound then CT, blood film and LFTs for organomegaly, tumour markers (**CEA, CA125, AFP**), and **colonoscopy** for a suspected colonic mass.',
  ],

  mechanism: {
    title: 'Quadrant to organ, then benign vs malignant',
    steps: [
      { id: 's1', label: 'Quadrant localisation → candidate organs', emphasis: 'key' },
      { id: 's2', label: 'Spleen vs kidney discriminators', emphasis: 'key' },
      { id: 's3', label: 'Organomegaly vs a discrete tumour', emphasis: 'key' },
      { id: 's4', label: 'Benign (smooth, mobile) vs malignant (hard, fixed, weight loss)', emphasis: 'key' },
      { id: 's5', label: 'Organ-directed imaging and markers', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Mass with a notch, dull, moving to the RIF, cannot get above it', mechanism: 'Splenomegaly', significance: 'key' },
    { sign: 'Ballotable flank mass, resonant anteriorly, can get above it', mechanism: 'Renal mass (kidney)', significance: 'key' },
    { sign: 'Hard, irregular, fixed mass with weight loss and lymph nodes', mechanism: 'Malignancy', significance: 'key' },
    { sign: 'Right iliac fossa mass', mechanism: 'Appendiceal mass, Crohn, caecal carcinoma or ovarian', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ultrasound then CT abdomen and pelvis', meaning: 'Confirms organ of origin and characterises the lesion' },
    { clue: 'FBC, blood film and LFTs', meaning: 'Workup of hepatosplenomegaly and haematological causes' },
    { clue: 'Tumour markers (CEA, CA125, AFP)', meaning: 'Support colorectal, ovarian or hepatocellular malignancy' },
    { clue: 'Colonoscopy for a suspected colonic mass', meaning: 'Tissue diagnosis of a left- or right-sided colonic tumour' },
  ],

  treatment: [
    { logic: 'Cause-directed management after imaging', detail: 'Route by organ of origin; drain an abscess, treat an appendiceal mass, and refer malignancy urgently.' },
    { logic: 'Recheck a suspected faecal mass after clearance', detail: 'A soft, indentable LIF mass may be stool; reassess after treating constipation before further imaging.' },
  ],

  mnemonics: [
    { hook: 'Spleen: notch, dull, to the RIF, cannot get above; Kidney: ballotable, resonant, can get above', expansion: ['Hard + fixed + weight loss = malignant', 'Soft LIF mass may be faeces'] },
  ],

  traps: [
    {
      questionCategory: 'Left upper quadrant mass',
      wrongInstinct: 'Call every left upper quadrant mass a kidney',
      rightAnswer: 'Use the discriminators — a notch, dullness, movement to the RIF and being unable to get above it mark the spleen',
      why: 'Spleen and kidney lie close together but have distinct examination signs that separate them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A left upper quadrant mass has a palpable notch, is dull to percussion, moves with respiration towards the right iliac fossa, and you cannot get above it. The mass is most likely:',
      options: [
        { id: 'a', text: 'The left kidney' },
        { id: 'b', text: 'The spleen' },
        { id: 'c', text: 'The stomach' },
        { id: 'd', text: 'A pancreatic pseudocyst' },
      ],
      answerId: 'b',
      explanation: 'A notch, dullness, movement towards the RIF and being unable to get above it are classic signs of splenomegaly rather than a renal mass.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 70-year-old has a hard, irregular, fixed left iliac fossa mass with weight loss and iron-deficiency anaemia. The most concerning diagnosis is:',
      options: [
        { id: 'a', text: 'Faecal loading' },
        { id: 'b', text: 'Colorectal carcinoma' },
        { id: 'c', text: 'A simple ovarian cyst' },
        { id: 'd', text: 'Splenomegaly' },
      ],
      answerId: 'b',
      explanation: 'A hard, fixed left iliac fossa mass with weight loss and iron-deficiency anaemia suggests colorectal cancer and warrants colonoscopy; simple faeces would be soft and indentable.',
      tests: 'disease',
    },
  ],
};

export default fcp1AbdominalMassDifferential;
