import type { Lecture } from '../../lib/types';

export const smallCellAndOtherLungTumors: Lecture = {
  id: 'small-cell-and-other-lung-tumors',
  title: 'Small-Cell Carcinoma, Carcinoid & Metastases',
  system: 'respiratory',
  source: 'L12 — Pulmonary Neoplasms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L12 Pulmonary Neoplasm' },
    { kind: 'disease', label: 'Small-cell carcinoma' },
    { kind: 'exam', label: 'Paraneoplastic syndromes' },
  ],

  highYield: [
    '**Small-cell lung carcinoma (SCLC) is a highly aggressive, central, neuroendocrine tumour that is almost always metastatic at diagnosis** — so it is treated with **chemotherapy/radiotherapy, NOT surgery**. It is strongly smoking-related, arises from **Kulchitsky (neuroendocrine) cells**, and shows small cells with scant cytoplasm and crush artefact (neuroendocrine markers: chromogranin, synaptophysin).',
    '**SCLC is the paraneoplastic champion:** ectopic **ADH → SIADH (hyponatraemia)**; ectopic **ACTH → Cushing syndrome**; and **Lambert–Eaton myasthenic syndrome** (antibodies to presynaptic voltage-gated calcium channels → proximal weakness that IMPROVES with repeated use). Neurological paraneoplastic syndromes (e.g. anti-Hu) also occur.',
    '**Carcinoid tumour is a low-grade, well-differentiated neuroendocrine tumour** — usually a central bronchial mass in younger, non-smoking patients, with an **indolent course and good prognosis**. It rarely causes **carcinoid syndrome (flushing, diarrhoea, wheeze)** unless there is liver metastasis; histology shows uniform "salt-and-pepper" nuclei.',
    '**The lung is one of the most common sites of METASTASIS** (from breast, colon, kidney, and others), classically producing **multiple, well-circumscribed "cannonball" nodules**. In practice, a solitary or multiple pulmonary nodule is more often metastatic or benign (granuloma, hamartoma) than a primary lung cancer — context and prior history matter.',
    '**The overriding message is the SCLC vs NSCLC split:** SCLC = central, neuroendocrine, disseminated, paraneoplastic, chemo-treated; NSCLC = potentially resectable ([[non-small-cell-lung-carcinoma]]). A **solitary pulmonary nodule** is worked up by size, growth, calcification pattern and risk factors to separate benign (granuloma, hamartoma) from malignant.',
  ],

  mechanism: {
    title: 'SCLC = neuroendocrine, disseminated, paraneoplastic; carcinoid indolent; mets common',
    steps: [
      { id: 's1', label: 'SCLC: central neuroendocrine (Kulchitsky), disseminated → chemo, not surgery', emphasis: 'key' },
      { id: 's2', label: 'Paraneoplastic: SIADH (ADH), Cushing (ACTH), Lambert–Eaton', emphasis: 'key' },
      { id: 's3', label: 'Carcinoid: low-grade NE, young/non-smoker, indolent, good prognosis' },
      { id: 's4', label: 'Metastases = common; "cannonball" nodules (breast/colon/renal)', emphasis: 'key' },
      { id: 's5', label: 'Solitary nodule: benign (granuloma/hamartoma) vs malignant work-up' },
    ],
  },

  examFindings: [
    { sign: 'Central neuroendocrine tumour, disseminated at diagnosis', mechanism: 'Small-cell lung carcinoma (chemo, not surgery)', significance: 'key' },
    { sign: 'Hyponatraemia from ectopic ADH (SIADH)', mechanism: 'SCLC paraneoplastic syndrome', significance: 'key' },
    { sign: 'Proximal weakness improving with repeated effort', mechanism: 'Lambert–Eaton (anti-VGCC) with SCLC', significance: 'key' },
    { sign: 'Multiple well-circumscribed "cannonball" lung nodules', mechanism: 'Haematogenous metastases', significance: 'supportive' },
    { sign: 'Indolent central bronchial mass in a young non-smoker', mechanism: 'Bronchial carcinoid (low-grade NE tumour)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The lung cancer treated with chemo/radiotherapy rather than surgery', meaning: 'Small-cell lung carcinoma (SCLC)' },
    { clue: 'The paraneoplastic causes of hyponatraemia and Cushing in SCLC', meaning: 'Ectopic ADH (SIADH) and ectopic ACTH' },
    { clue: 'The neuromuscular syndrome associated with SCLC', meaning: 'Lambert–Eaton myasthenic syndrome (anti-VGCC)' },
    { clue: 'The typical appearance of pulmonary metastases', meaning: 'Multiple well-circumscribed "cannonball" nodules' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'SCLC\'s early dissemination means systemic chemo/radiotherapy, not resection — the opposite of localised [[non-small-cell-lung-carcinoma]]. Recognising SIADH (hyponatraemia — see [[adh-water-regulation]]), ectopic Cushing and Lambert–Eaton can be the first clue to an occult SCLC. A solitary nodule must be triaged as benign vs malignant before treatment.' },
  ],

  mnemonics: [
    { hook: 'SCLC = "Small cells, Systemic (metastatic), Secretory (paraneoplastic)"', expansion: ['ADH → SIADH, ACTH → Cushing, Lambert–Eaton', 'Chemo, not surgery'] },
    { hook: 'Lambert–Eaton "warms up" (improves with use); myasthenia "tires out"', expansion: ['LEMS = presynaptic anti-VGCC, SCLC', 'MG = postsynaptic anti-AChR'] },
  ],

  traps: [
    {
      questionCategory: 'Treatment approach to small-cell lung cancer',
      wrongInstinct: 'A localised-appearing small-cell lung cancer should be resected like other lung cancers',
      rightAnswer: 'SCLC is almost always disseminated at presentation and is treated with chemotherapy/radiotherapy, NOT surgery — its neuroendocrine biology and early metastasis make it fundamentally different from resectable NSCLC',
      why: 'Offering surgery for SCLC misjudges its natural history; the SCLC/NSCLC distinction exists precisely because it dictates a systemic rather than surgical strategy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A heavy smoker has a central lung mass, hyponatraemia from SIADH, and proximal muscle weakness that improves with repeated contraction. The tumour is:',
      options: [
        { id: 'a', text: 'Adenocarcinoma' },
        { id: 'b', text: 'Small-cell (neuroendocrine) carcinoma' },
        { id: 'c', text: 'Squamous cell carcinoma' },
        { id: 'd', text: 'Bronchial carcinoid' },
      ],
      answerId: 'b',
      explanation: 'Small-cell lung carcinoma is a central neuroendocrine tumour notorious for paraneoplastic ectopic ADH (SIADH), ectopic ACTH (Cushing) and Lambert–Eaton myasthenic syndrome (weakness improving with use). It is treated with chemotherapy, not surgery.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Multiple well-circumscribed "cannonball" nodules on a chest X-ray most likely represent:',
      options: [
        { id: 'a', text: 'Haematogenous pulmonary metastases' },
        { id: 'b', text: 'Primary squamous cell carcinoma' },
        { id: 'c', text: 'Sarcoidosis' },
        { id: 'd', text: 'Lobar pneumonia' },
      ],
      answerId: 'a',
      explanation: 'The lung is a common site of metastasis; multiple well-circumscribed round nodules ("cannonball" metastases) typically arise from primaries such as breast, colon or renal cell carcinoma.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default smallCellAndOtherLungTumors;
