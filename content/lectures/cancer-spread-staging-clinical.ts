import type { Lecture } from '../../lib/types';

export const cancerSpreadStagingClinical: Lecture = {
  id: 'cancer-spread-staging-clinical',
  title: 'Cancer Spread, Staging & Clinical Effects',
  system: 'pathology',
  source: 'L7 — Neoplasm',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L7 Spread & staging' },
    { kind: 'mechanism', label: 'Metastasis routes; grade vs stage' },
    { kind: 'exam', label: 'TNM; tumour markers; paraneoplastic' },
  ],

  highYield: [
    '**Malignant tumours SPREAD by three routes: (1) SEEDING of body cavities (transcoelomic — e.g. ovarian carcinoma across the peritoneum, "drop metastases"); (2) LYMPHATIC spread — the typical route of CARCINOMAS, to regional lymph nodes first (basis of sentinel node biopsy); and (3) HAEMATOGENOUS spread — the typical route of SARCOMAS (and some carcinomas), via veins to LUNG and LIVER most often (portal drainage). "Carcinomas → lymphatics; sarcomas → blood" (with overlap).**',
    '**GRADING vs STAGING are different and both matter. GRADE describes the tumour\'s DIFFERENTIATION/aggressiveness under the microscope (well → poorly differentiated; e.g. grade 1–3). STAGE describes the EXTENT of spread in the body and is the more important prognostic factor, standardised as TNM: T (size/local extent of primary Tumour), N (regional lymph Node involvement), M (distant Metastasis). Higher stage = worse prognosis; staging guides treatment (local vs systemic).**',
    '**Cancer produces LOCAL effects (mass, obstruction, ulceration/bleeding, pain) and SYSTEMIC effects. CACHEXIA — progressive wasting/weight loss/anorexia (cytokine-mediated, e.g. TNF) — is common in advanced cancer. PARANEOPLASTIC syndromes are remote effects NOT explained by the tumour mass or metastases: e.g. HYPERCALCAEMIA (PTHrP — squamous cell lung cancer), CUSHING (ectopic ACTH — small-cell lung cancer), SIADH (small-cell lung cancer), and Lambert-Eaton/others — they may be the FIRST clue to an occult cancer.**',
    '**TUMOUR MARKERS (serum substances) aid diagnosis, monitoring and screening (not usually definitive alone): CEA (colorectal/others), AFP (hepatocellular carcinoma, germ-cell/yolk-sac tumours), PSA (prostate), CA-125 (ovarian), CA 19-9 (pancreatic), β-hCG (gestational trophoblastic/germ-cell), calcitonin (medullary thyroid). CANCER EPIDEMIOLOGY and SCREENING (cervical Pap/HPV, mammography, colonoscopy, etc.) aim to detect cancer early or pre-invasively.**',
    '**The take-home: spread = SEEDING (transcoelomic), LYMPHATIC (carcinomas → nodes), HAEMATOGENOUS (sarcomas → lung/liver). GRADE = differentiation (microscopic); STAGE = extent (TNM — the key prognostic factor). Effects: local (mass/obstruction), CACHEXIA, PARANEOPLASTIC syndromes (PTHrP hypercalcaemia, ectopic ACTH/SIADH — may be first sign). Markers: CEA/AFP/PSA/CA-125/β-hCG.** Molecular basis is [[carcinogenesis-molecular]]; malignant features are [[neoplasia-differentiation-invasion]].',
  ],

  mechanism: {
    title: 'Spread: seeding (transcoelomic), lymphatic (carcinomas → nodes), haematogenous (sarcomas → lung/liver); grade (differentiation) vs stage (extent, TNM — key prognosis); effects local + cachexia + paraneoplastic (PTHrP/ACTH/SIADH); markers CEA/AFP/PSA',
    steps: [
      { id: 's1', label: 'Seeding of cavities (transcoelomic); lymphatic = carcinomas (→ regional nodes)', emphasis: 'key' },
      { id: 's2', label: 'Haematogenous = sarcomas (and some carcinomas) → lung and liver', emphasis: 'key' },
      { id: 's3', label: 'GRADE = differentiation (microscopic); STAGE = extent (TNM), the key prognostic factor', emphasis: 'key' },
      { id: 's4', label: 'Cachexia (TNF-mediated wasting); paraneoplastic (PTHrP hypercalcaemia, ectopic ACTH/SIADH)', emphasis: 'danger' },
      { id: 's5', label: 'Tumour markers: CEA, AFP, PSA, CA-125, β-hCG, calcitonin; screening detects early', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Carcinoma spreading first to regional lymph nodes', mechanism: 'Lymphatic spread (carcinomas)', significance: 'key' },
    { sign: 'Sarcoma metastasising to the lungs via the bloodstream', mechanism: 'Haematogenous spread (sarcomas)', significance: 'key' },
    { sign: 'Hypercalcaemia from PTHrP in squamous cell lung cancer', mechanism: 'Paraneoplastic syndrome', significance: 'key' },
    { sign: 'Cushing syndrome from ectopic ACTH in small-cell lung cancer', mechanism: 'Paraneoplastic (ectopic hormone)', significance: 'supportive' },
    { sign: 'Rising PSA used to monitor prostate cancer', mechanism: 'Tumour marker', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The typical spread route of carcinomas vs sarcomas', meaning: 'Lymphatic (carcinoma) vs haematogenous (sarcoma)' },
    { clue: 'The microscopic vs anatomic prognostic descriptors', meaning: 'Grade (differentiation) vs stage (extent, TNM)' },
    { clue: 'The single most important prognostic factor', meaning: 'Stage (TNM)' },
    { clue: 'Remote tumour effects not due to mass/metastasis', meaning: 'Paraneoplastic syndromes' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'How and how far a cancer has spread determines management: lymphatic spread (carcinomas) underlies lymph-node sampling/sentinel biopsy, haematogenous spread (sarcomas) targets the lungs and liver, and seeding produces peritoneal disease. Staging (TNM) is the dominant prognostic factor and separates locally treatable disease from disseminated disease needing systemic therapy, while grade adds biologic aggressiveness. Recognising cachexia and paraneoplastic syndromes (PTHrP hypercalcaemia, ectopic ACTH/SIADH) can reveal an occult cancer, and tumour markers/screening enable monitoring and early detection. Molecular basis is [[carcinogenesis-molecular]].' },
  ],

  mnemonics: [
    { hook: '"Carcinoma → Lymphatics; Sarcoma → blood (haematogenous → lung/liver)"', expansion: ['Seeding = transcoelomic (ovary)', 'Sentinel node = first drainage'] },
    { hook: '"Grade = differentiation (micro); Stage = spread (TNM, key prognosis)"', expansion: ['Paraneoplastic: PTHrP/ACTH/SIADH', 'Markers: CEA/AFP/PSA/CA-125'] },
  ],

  traps: [
    {
      questionCategory: 'Grade vs stage',
      wrongInstinct: 'Tumour grade and stage are interchangeable measures of how bad a cancer is',
      rightAnswer: 'They measure different things: GRADE is a MICROSCOPIC assessment of DIFFERENTIATION/aggressiveness (how abnormal the cells look), whereas STAGE describes the ANATOMIC EXTENT of spread (size, nodal involvement, distant metastasis — the TNM system) and is generally the MORE IMPORTANT prognostic factor and the main determinant of treatment; a low-grade tumour can be high-stage and vice versa',
      why: 'Confusing grade with stage misjudges prognosis and treatment — staging (extent of spread) usually outweighs grade in guiding whether disease is locally curable or needs systemic therapy, so the two must be assessed separately.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the TNM staging system, which factor is generally the single most important determinant of prognosis?',
      options: [
        { id: 'a', text: 'The microscopic grade of the tumour' },
        { id: 'b', text: 'The stage (anatomic extent of spread: tumour size, nodes, metastasis)' },
        { id: 'c', text: 'The tumour marker level alone' },
        { id: 'd', text: 'The patient\'s age' },
      ],
      answerId: 'b',
      explanation: 'Stage — the anatomic extent of spread captured by TNM (primary Tumour, regional Nodes, distant Metastasis) — is usually the most important prognostic factor and the main determinant of treatment, generally outweighing microscopic grade.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Hypercalcaemia due to parathyroid hormone-related peptide (PTHrP) secreted by a squamous cell lung carcinoma is an example of:',
      options: [
        { id: 'a', text: 'A paraneoplastic syndrome' },
        { id: 'b', text: 'A direct effect of a bone metastasis' },
        { id: 'c', text: 'Tumour cachexia' },
        { id: 'd', text: 'Lymphatic spread' },
      ],
      answerId: 'a',
      explanation: 'Paraneoplastic syndromes are remote effects not explained by the tumour mass or metastases — here, PTHrP from a squamous cell carcinoma causing hypercalcaemia. Others include ectopic ACTH (Cushing) and SIADH from small-cell lung cancer; they may be the first clue to an occult malignancy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cancerSpreadStagingClinical;
