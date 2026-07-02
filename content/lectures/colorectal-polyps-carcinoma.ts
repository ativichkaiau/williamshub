import type { Lecture } from '../../lib/types';
import { ADENOMA_CARCINOMA_SEQUENCE } from '../../lib/figures';

export const colorectalPolypsCarcinoma: Lecture = {
  id: 'colorectal-polyps-carcinoma',
  title: 'Colorectal Polyps & Carcinoma',
  system: 'gi',
  source: 'L2 — Pathology of the Lower GI Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L2 Lower GI Pathology' },
    { kind: 'disease', label: 'Colorectal cancer' },
    { kind: 'exam', label: 'Adenoma-carcinoma sequence' },
  ],

  highYield: [
    '**Most colorectal cancers arise from adenomatous polyps via the ADENOMA–CARCINOMA SEQUENCE, a stepwise accumulation of mutations: APC (loss) → KRAS (activation) → TP53 (loss)** (the chromosomal-instability pathway). This is why removing adenomas at colonoscopy prevents cancer.',
    '**Polyp types matter: adenomatous (neoplastic, premalignant) vs hyperplastic (usually benign).** Among adenomas, **villous adenomas (larger, sessile) have higher malignant potential than tubular adenomas**; increasing size, villous architecture and high-grade dysplasia raise risk. A parallel **serrated pathway (BRAF, microsatellite instability)** is a second route to cancer.',
    '**Two hereditary syndromes are classic: Familial Adenomatous Polyposis (FAP) — germline APC mutation → hundreds–thousands of colonic adenomas → nearly 100% cancer (prophylactic colectomy)**; and **Lynch syndrome (HNPCC) — DNA mismatch-repair defect (microsatellite instability), fewer polyps, right-sided cancers at a young age, plus endometrial and other cancers.**',
    '**Colorectal carcinoma presents by side: LEFT-sided tumours (annular, "napkin-ring") cause obstruction and change in bowel habit; RIGHT-sided tumours (bulky, exophytic) cause occult bleeding → IRON-DEFICIENCY ANAEMIA and weight loss.** An older adult with unexplained iron-deficiency anaemia needs colonic evaluation.',
    '**Risk factors include age, low-fibre/high-fat "Western" diet, IBD, family history and the syndromes above; CEA is a marker for monitoring recurrence (NOT screening).** Screening (colonoscopy/FIT) works by detecting and removing precursor adenomas — interrupting the sequence before invasion. Staging (depth of invasion, nodes) drives prognosis.',
  ],

  mechanism: {
    title: 'Adenoma → carcinoma (APC→KRAS→TP53); FAP/Lynch; side-specific presentation',
    steps: [
      { id: 's1', label: 'Adenoma–carcinoma sequence: APC → KRAS → TP53 (loss)', emphasis: 'key' },
      { id: 's2', label: 'Adenomatous (premalignant) vs hyperplastic; villous > tubular risk', emphasis: 'key' },
      { id: 's3', label: 'FAP: germline APC → ~100% cancer; Lynch: MMR/MSI, right-sided, young', emphasis: 'key' },
      { id: 's4', label: 'Left = obstruction/napkin-ring; Right = bleeding/iron-def anaemia', emphasis: 'key' },
      { id: 's5', label: 'Screening removes adenomas; CEA for follow-up (not screening)' },
    ],
  },

  examFindings: [
    { sign: 'Iron-deficiency anaemia in an older adult', mechanism: 'Right-sided (caecal/ascending) colorectal carcinoma bleeding', significance: 'key' },
    { sign: 'Change in bowel habit + "napkin-ring" annular lesion', mechanism: 'Left-sided obstructing carcinoma', significance: 'key' },
    { sign: 'Hundreds of colonic adenomas in a young patient', mechanism: 'Familial adenomatous polyposis (germline APC)', significance: 'key' },
    { sign: 'Right-sided cancer + endometrial cancer + young age', mechanism: 'Lynch syndrome (mismatch-repair/MSI)', significance: 'supportive' },
    { sign: 'Villous adenoma with high-grade dysplasia', mechanism: 'High malignant potential', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The classic mutation sequence of colorectal cancer', meaning: 'APC → KRAS → TP53 (adenoma–carcinoma sequence)' },
    { clue: 'The syndrome with ~100% cancer risk from APC mutation', meaning: 'Familial adenomatous polyposis (FAP)' },
    { clue: 'The presentation of a right-sided colon cancer', meaning: 'Occult bleeding → iron-deficiency anaemia' },
    { clue: 'The tumour marker for monitoring recurrence (not screening)', meaning: 'CEA' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Screening colonoscopy removes adenomas to interrupt the sequence — the rationale for population screening. IBD raises risk ([[inflammatory-bowel-disease]]); unexplained iron-deficiency anaemia mandates colonic evaluation. Resection ± chemo by stage; FAP needs prophylactic colectomy. Contrast the benign/obstructive lesions in [[appendicitis-diverticular-ischemic-bowel]].' },
  ],

  mnemonics: [
    { hook: 'Sequence: "APC → KRAS → TP53" (loss, activate, loss)', expansion: ['Villous > tubular risk', 'Serrated pathway = BRAF/MSI'] },
    { hook: 'Side: "Left = obstruct (napkin-ring); Right = bleed (iron-def anaemia)"', expansion: ['FAP = APC, ~100% cancer', 'Lynch = MMR/MSI, right-sided, young + endometrial'] },
  ],

  traps: [
    {
      questionCategory: 'Significance of unexplained iron-deficiency anaemia',
      wrongInstinct: 'Iron-deficiency anaemia in an older adult is usually just dietary',
      rightAnswer: 'Unexplained iron-deficiency anaemia in an older adult (especially a man or post-menopausal woman) should be assumed to be occult GI blood loss — often a RIGHT-sided colorectal carcinoma — until colonic evaluation excludes it',
      why: 'Right-sided cancers bleed slowly and present with anaemia rather than obstruction; attributing the anaemia to diet risks missing a curable early cancer.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The classic molecular progression of the colorectal adenoma–carcinoma sequence is:',
      options: [
        { id: 'a', text: 'TP53 → KRAS → APC' },
        { id: 'b', text: 'APC loss → KRAS activation → TP53 loss' },
        { id: 'c', text: 'BRCA1 → KRAS → APC' },
        { id: 'd', text: 'KIT → APC → TP53' },
      ],
      answerId: 'b',
      explanation: 'The chromosomal-instability pathway proceeds from APC loss (early adenoma) through KRAS activation to TP53 loss (invasive carcinoma). Removing adenomas at colonoscopy interrupts this sequence.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 68-year-old man is found to have iron-deficiency anaemia and faecal occult blood. The most important next step is:',
      options: [
        { id: 'a', text: 'Reassure and give dietary advice' },
        { id: 'b', text: 'Colonic evaluation (colonoscopy) to exclude a right-sided colorectal carcinoma' },
        { id: 'c', text: 'Start iron and repeat in a year' },
        { id: 'd', text: 'Measure CEA to screen for cancer' },
      ],
      answerId: 'b',
      explanation: 'Unexplained iron-deficiency anaemia with occult blood in an older adult suggests chronic GI blood loss, classically from a right-sided colon cancer; colonoscopy is required. CEA is for monitoring, not screening/diagnosis.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Adenoma–carcinoma sequence', svg: ADENOMA_CARCINOMA_SEQUENCE, caption: 'Stepwise APC→KRAS→TP53 progression, polyp types, FAP/Lynch and side-specific presentation.' },
  ],
};

export default colorectalPolypsCarcinoma;
