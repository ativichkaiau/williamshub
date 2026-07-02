import type { Lecture } from '../../lib/types';

export const bladderUrothelialCarcinoma: Lecture = {
  id: 'bladder-urothelial-carcinoma',
  title: 'Bladder & Urothelial Carcinoma',
  system: 'renal',
  source: 'L9 — Neoplasms of the Urinary System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L9 Bladder Cancer' },
    { kind: 'mechanism', label: 'Urothelial; smoking/amines; schistosoma' },
    { kind: 'exam', label: 'Painless haematuria → cystoscopy' },
  ],

  highYield: [
    '**Most bladder cancer is UROTHELIAL (transitional cell) CARCINOMA, arising anywhere the urothelium lines the tract (renal pelvis → bladder → proximal urethra) — a "field change", so tumours are often MULTIFOCAL and RECURRENT. The cardinal presentation is PAINLESS VISIBLE (gross) HAEMATURIA in an older adult, which must be investigated (cystoscopy + upper-tract imaging) until proven otherwise.**',
    '**Risk factors reflect carcinogen exposure concentrated in urine: SMOKING (the biggest), occupational AROMATIC AMINES (aniline dyes, rubber, β-naphthylamine), cyclophosphamide, and chronic inflammation. SQUAMOUS cell carcinoma of the bladder is classically associated with chronic irritation — SCHISTOSOMA HAEMATOBIUM infection (important in endemic regions), long-term catheters and stones. Adenocarcinoma (urachal) is rare.**',
    '**Behaviour and treatment hinge on DEPTH: NON-muscle-invasive (papillary/CIS, ~75%) is treated by transurethral RESECTION (TURBT) plus intravesical therapy — BCG (immunotherapy) or chemotherapy — with lifelong surveillance cystoscopy because of the high recurrence rate; MUSCLE-INVASIVE disease needs radical CYSTECTOMY (± neoadjuvant chemotherapy) or chemoradiation, as it can metastasise (lymph nodes, lung, bone, liver).**',
    '**Work-up of haematuria: URINE cytology and CYSTOSCOPY (gold standard for the bladder) plus CT UROGRAM to image the upper tracts (synchronous urothelial tumours). Note the contrast with renal cell carcinoma (parenchymal, paraneoplastic, renal-vein invasion) — bladder cancer is urothelial, multifocal, smoking/amine-related, and presents with painless haematuria.**',
    '**The take-home: bladder cancer = mostly UROTHELIAL, multifocal/recurrent "field change"; PAINLESS visible HAEMATURIA → cystoscopy + CT urogram + cytology; risks = SMOKING, aromatic AMINES (dyes/rubber); SQUAMOUS type ↔ SCHISTOSOMA/chronic irritation. Non-muscle-invasive → TURBT + intravesical BCG/chemo + surveillance; muscle-invasive → cystectomy ± chemo.** RCC is [[renal-cell-carcinoma]]; the neoplasm overview is [[urinary-system-neoplasms]].',
  ],

  mechanism: {
    title: 'Urothelial carcinoma (multifocal field change); painless haematuria → cystoscopy; smoking/aromatic amines; squamous ↔ schistosoma; depth (non-muscle-invasive vs invasive) drives treatment',
    steps: [
      { id: 's1', label: 'Urothelial (transitional) carcinoma; multifocal, recurrent field change', emphasis: 'key' },
      { id: 's2', label: 'Painless visible haematuria (older adult) → investigate until proven otherwise', emphasis: 'danger' },
      { id: 's3', label: 'Risks: smoking (biggest), aromatic amines (dyes/rubber), cyclophosphamide', emphasis: 'key' },
      { id: 's4', label: 'Squamous cell carcinoma ↔ Schistosoma haematobium / chronic irritation', emphasis: 'key' },
      { id: 's5', label: 'Non-muscle-invasive: TURBT + intravesical BCG/chemo + surveillance; invasive: cystectomy ± chemo', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Painless visible haematuria in an older smoker', mechanism: 'Bladder urothelial carcinoma until proven otherwise', significance: 'key' },
    { sign: 'Recurrent multifocal bladder tumours over years', mechanism: 'Urothelial "field change"', significance: 'key' },
    { sign: 'Squamous cell bladder cancer in a patient from a schistosomiasis-endemic area', mechanism: 'Chronic Schistosoma haematobium irritation', significance: 'key' },
    { sign: 'Bladder cancer in a dye/rubber industry worker', mechanism: 'Occupational aromatic amine exposure', significance: 'supportive' },
    { sign: 'Muscle-invasive tumour on TURBT histology', mechanism: 'Needs radical cystectomy ± neoadjuvant chemo', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest bladder cancer type', meaning: 'Urothelial (transitional cell) carcinoma' },
    { clue: 'The cardinal presenting symptom', meaning: 'Painless visible haematuria' },
    { clue: 'The gold-standard bladder investigation', meaning: 'Cystoscopy (+ cytology, CT urogram)' },
    { clue: 'The infection linked to squamous bladder cancer', meaning: 'Schistosoma haematobium' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Painless visible haematuria in an older adult mandates urgent evaluation (cystoscopy + cytology + CT urogram) because bladder urothelial carcinoma is common and curable if caught early. Treatment depends on muscle invasion: non-muscle-invasive disease is resected transurethrally with intravesical BCG/chemotherapy and lifelong surveillance (high recurrence from field change), while muscle-invasive disease needs radical cystectomy ± neoadjuvant chemotherapy. Recognising the smoking/aromatic-amine and schistosomiasis (squamous) risk links aids prevention. RCC is [[renal-cell-carcinoma]]; overview [[urinary-system-neoplasms]].' },
  ],

  mnemonics: [
    { hook: '"Painless haematuria = cystoscopy" (older adult, until proven otherwise)', expansion: ['Smoking + aromatic amines', 'Multifocal/recurrent field change'] },
    { hook: '"Squamous bladder cancer ↔ Schistosoma (+ stones/catheters)"', expansion: ['Non-invasive: TURBT + BCG', 'Invasive: cystectomy ± chemo'] },
  ],

  traps: [
    {
      questionCategory: 'Painless haematuria',
      wrongInstinct: 'Painless haematuria without other symptoms is probably harmless and can be observed',
      rightAnswer: 'PAINLESS VISIBLE HAEMATURIA in an older adult is bladder (urothelial) cancer until proven otherwise and mandates prompt investigation — CYSTOSCOPY, urine cytology and CT UROGRAM (to image the upper tracts) — because the absence of pain is typical of malignancy, not reassuring; delaying work-up misses curable early tumours',
      why: 'Painlessness makes patients and clinicians complacent, yet it is the hallmark presentation of urothelial cancer; every episode of visible haematuria in an at-risk adult warrants cystoscopic evaluation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An older smoker presents with a single episode of painless visible haematuria. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Reassure and observe' },
        { id: 'b', text: 'Cystoscopy with urine cytology and CT urogram' },
        { id: 'c', text: 'A short course of antibiotics' },
        { id: 'd', text: 'Repeat urinalysis in one year' },
      ],
      answerId: 'b',
      explanation: 'Painless visible haematuria in an older adult (especially a smoker) is bladder urothelial carcinoma until proven otherwise and requires cystoscopy (gold standard), urine cytology and upper-tract imaging (CT urogram) because tumours are often multifocal.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Squamous cell carcinoma of the bladder is classically associated with:',
      options: [
        { id: 'a', text: 'Von Hippel-Lindau disease' },
        { id: 'b', text: 'Chronic irritation, notably Schistosoma haematobium infection (also stones/catheters)' },
        { id: 'c', text: 'Aromatic amine exposure only' },
        { id: 'd', text: 'Autosomal dominant PKD' },
      ],
      answerId: 'b',
      explanation: 'While most bladder cancer is urothelial (linked to smoking and aromatic amines), squamous cell carcinoma arises from chronic irritation/inflammation — classically Schistosoma haematobium infection in endemic regions, and also long-term catheters or stones.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default bladderUrothelialCarcinoma;
