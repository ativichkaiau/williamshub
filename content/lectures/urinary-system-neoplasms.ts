import type { Lecture } from '../../lib/types';

export const urinarySystemNeoplasms: Lecture = {
  id: 'urinary-system-neoplasms',
  title: 'Neoplasms of the Urinary System',
  system: 'renal',
  source: 'L9 — Neoplasms of the Urinary System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L9 Urinary Neoplasms' },
    { kind: 'mechanism', label: 'RCC, urothelial & Wilms' },
    { kind: 'exam', label: 'Painless haematuria; smoking' },
  ],

  highYield: [
    '**RENAL CELL CARCINOMA (RCC) is the commonest adult kidney cancer, arising from the PROXIMAL TUBULAR epithelium (clear-cell type commonest, linked to VHL). Classic triad (now uncommon): flank pain, haematuria, palpable mass; often found incidentally. RCC is notable for PARANEOPLASTIC syndromes (EPO → polycythaemia, PTHrP → hypercalcaemia, renin → hypertension) and for invading the RENAL VEIN/IVC. Risk: SMOKING, obesity, VHL.**',
    '**UROTHELIAL (transitional cell) CARCINOMA affects the BLADDER (commonest), ureter and renal pelvis: presents with PAINLESS visible HAEMATURIA. Major risk factors — SMOKING, occupational aromatic amines (dye/rubber industry), cyclophosphamide, and (for SQUAMOUS cell bladder cancer) chronic Schistosoma haematobium infection or chronic irritation (stones/catheters). Diagnosis by cystoscopy + urine cytology; tends to be multifocal/recurrent ("field change").**',
    '**WILMS TUMOUR (nephroblastoma) is the commonest renal tumour of CHILDREN (~2–5 years): a large unilateral abdominal mass, associated with WT1 mutations and syndromes (WAGR, Beckwith-Wiedemann). It is generally chemo-sensitive with good prognosis. (Contrast with neuroblastoma, which crosses the midline and comes from the adrenal/sympathetic chain.)**',
    '**The unifying red flag is PAINLESS haematuria in an adult — it must be investigated for malignancy (cystoscopy + upper-tract imaging) until proven otherwise, especially in smokers/older patients. Staging and grade guide treatment: localised RCC → (partial) nephrectomy; bladder cancer → resection ± intravesical therapy (BCG) or cystectomy; metastatic disease → targeted/immunotherapy.**',
    '**The take-home: RCC (adult, proximal tubule/clear-cell, paraneoplastic EPO/PTHrP/renin, renal vein invasion, smoking) vs UROTHELIAL carcinoma (bladder, PAINLESS haematuria, smoking/aromatic amines, multifocal) vs WILMS tumour (child, WT1). Painless haematuria in an adult = cancer work-up.** Haematuria localisation is via [[urinalysis-urine-examination]]; schistosomiasis links to PHI; general oncologic therapy is BCP ([[antineoplastic-principles]]).',
  ],

  mechanism: {
    title: 'RCC (adult, proximal tubule, paraneoplastic, renal vein) / urothelial (bladder, painless haematuria, smoking) / Wilms (child, WT1)',
    steps: [
      { id: 's1', label: 'RCC = commonest adult kidney cancer (proximal tubule/clear-cell; VHL, smoking)', emphasis: 'key' },
      { id: 's2', label: 'RCC paraneoplastic: EPO (polycythaemia), PTHrP (hypercalcaemia), renin (HTN); invades renal vein/IVC', emphasis: 'key' },
      { id: 's3', label: 'Urothelial carcinoma = bladder (commonest); PAINLESS haematuria; smoking/aromatic amines; multifocal', emphasis: 'key' },
      { id: 's4', label: 'Squamous bladder cancer: Schistosoma haematobium / chronic irritation' },
      { id: 's5', label: 'Wilms tumour = commonest child renal tumour (WT1; WAGR/Beckwith-Wiedemann)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Painless visible haematuria in an adult smoker', mechanism: 'Urothelial (bladder) carcinoma until proven otherwise', significance: 'key' },
    { sign: 'Flank mass + haematuria + polycythaemia/hypercalcaemia', mechanism: 'Renal cell carcinoma (paraneoplastic)', significance: 'key' },
    { sign: 'A tumour thrombus extending into the renal vein/IVC', mechanism: 'Renal cell carcinoma', significance: 'key' },
    { sign: 'A large unilateral abdominal mass in a young child', mechanism: 'Wilms tumour (nephroblastoma)', significance: 'key' },
    { sign: 'Squamous bladder cancer in a patient with chronic schistosomiasis', mechanism: 'Chronic irritation/Schistosoma haematobium', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest adult kidney cancer and its cell of origin', meaning: 'Renal cell carcinoma (proximal tubular epithelium)' },
    { clue: 'The classic presentation of urothelial carcinoma', meaning: 'Painless visible haematuria' },
    { clue: 'The commonest childhood renal tumour', meaning: 'Wilms tumour (nephroblastoma; WT1)' },
    { clue: 'The red flag mandating a cancer work-up in adults', meaning: 'Painless haematuria' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Painless haematuria in an adult demands prompt evaluation for malignancy (cystoscopy + upper-tract imaging + cytology), because early bladder/renal cancer is curable. RCC\'s paraneoplastic syndromes and renal-vein invasion, urothelial cancer\'s smoking/aromatic-amine risk and multifocality, and Wilms tumour in children each shape management (nephrectomy, intravesical BCG/cystectomy, chemotherapy). Haematuria localisation uses [[urinalysis-urine-examination]]; schistosomal bladder cancer links to PHI; systemic oncology to BCP ([[antineoplastic-principles]]).' },
  ],

  mnemonics: [
    { hook: '"RCC = adult, proximal tubule, Paraneoplastic (EPO/PTHrP/renin), renal Vein"', expansion: ['Smoking risk', 'Clear-cell/VHL'] },
    { hook: '"Painless haematuria = urothelial cancer until proven otherwise" (smoking/dyes)', expansion: ['Multifocal/field change', 'Wilms = child (WT1)'] },
  ],

  traps: [
    {
      questionCategory: 'Significance of painless haematuria',
      wrongInstinct: 'Painless haematuria without other symptoms is reassuring and can be observed',
      rightAnswer: 'PAINLESS visible haematuria in an ADULT is a RED FLAG for urinary tract MALIGNANCY (bladder/renal/urothelial cancer) and mandates urgent evaluation (cystoscopy + upper-tract imaging ± cytology) — the ABSENCE of pain does NOT make it benign; painful haematuria more often reflects stones/infection',
      why: 'Early urinary tract cancers are often painless and curable, so treating painless haematuria as benign risks a missed, progressing malignancy — the lack of pain increases, rather than decreases, cancer concern.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 65-year-old smoker presents with painless visible haematuria and no other symptoms. The most important next step is:',
      options: [
        { id: 'a', text: 'Reassurance and observation' },
        { id: 'b', text: 'Urgent evaluation for urinary tract malignancy (cystoscopy and upper-tract imaging)' },
        { id: 'c', text: 'A course of antibiotics only' },
        { id: 'd', text: 'Increase fluid intake and review in a year' },
      ],
      answerId: 'b',
      explanation: 'Painless visible haematuria in an adult (especially an older smoker) is urothelial/urinary tract cancer until proven otherwise and requires prompt cystoscopy plus upper-tract imaging (and cytology). Smoking and occupational aromatic amines are major risk factors for urothelial carcinoma.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Renal cell carcinoma can produce paraneoplastic effects such as polycythaemia and hypercalcaemia by secreting, respectively:',
      options: [
        { id: 'a', text: 'Insulin and glucagon' },
        { id: 'b', text: 'Erythropoietin and PTH-related peptide (PTHrP)' },
        { id: 'c', text: 'Cortisol and aldosterone' },
        { id: 'd', text: 'Thyroxine and calcitonin' },
      ],
      answerId: 'b',
      explanation: 'Renal cell carcinoma is a classic cause of paraneoplastic syndromes: ectopic erythropoietin causes polycythaemia, PTH-related peptide causes hypercalcaemia, and renin can cause hypertension. RCC also characteristically invades the renal vein/IVC.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default urinarySystemNeoplasms;
