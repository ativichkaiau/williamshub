import type { Lecture } from '../../lib/types';

export const cnsLymphomaMetastases: Lecture = {
  id: 'cns-lymphoma-metastases',
  title: 'CNS Lymphoma & Metastases',
  system: 'neuro',
  source: 'L10 — CNS Neoplasms',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L10 CNS Neoplasms' },
    { kind: 'disease', label: 'Lymphoma / metastasis' },
    { kind: 'mechanism', label: 'EBV / hematogenous' },
    { kind: 'exam', label: 'Gray-white junction' },
  ],

  highYield: [
    '**Primary CNS lymphoma** = the most common CNS neoplasm in the **immunosuppressed (AIDS, transplant)**; **EBV-associated**, usually **diffuse large B-cell lymphoma (DLBCL)**.',
    'CNS lymphoma is typically **periventricular/deep, often multifocal**, may involve the eye; malignant B-cells **cluster around vessels (perivascular)**; more aggressive than systemic DLBCL.',
    '**Metastases account for ~25–50% of intracranial tumors** — often the **most common CNS tumor overall** in cancer patients; poor prognosis.',
    'Common primaries (~80%): **lung, breast, melanoma, kidney, GI**; rare but high-risk = choriocarcinoma. Spread is **hematogenous** → **discrete masses at the gray-white junction**, usually **multiple**.',
    'Metastasis may be the **first sign of systemic cancer**; presents with mass effect (↑ICP, seizures, focal deficits) or **meningeal carcinomatosis** (cranial/spinal neuropathies).',
  ],

  mechanism: {
    title: 'Immunosuppression or systemic cancer seeds the CNS',
    steps: [
      { id: 's1', label: 'Immunosuppressed + EBV → primary CNS DLBCL', emphasis: 'key' },
      { id: 's2', label: 'Perivascular B-cell infiltrate, periventricular' },
      { id: 's3', label: 'Systemic cancer → hematogenous CNS metastasis' },
      { id: 's4', label: 'Multiple lesions at the gray-white junction', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Periventricular mass in an AIDS/transplant patient', mechanism: 'Primary CNS lymphoma (EBV, DLBCL)', significance: 'key' },
    { sign: 'Multiple ring-enhancing lesions at the gray-white junction', mechanism: 'Hematogenous metastases', significance: 'key' },
    { sign: 'Cranial neuropathies from leptomeningeal disease', mechanism: 'Meningeal carcinomatosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MRI (periventricular vs gray-white junction, single vs multiple)', meaning: 'Lymphoma vs metastasis pattern' },
    { clue: 'CSF cytology / EBV PCR; systemic staging', meaning: 'Lymphoma; hunt a primary cancer' },
    { clue: 'Biopsy (avoid steroids first in suspected lymphoma)', meaning: 'Steroids can vanish lymphoma on imaging' },
  ],

  treatment: [
    { logic: 'CNS lymphoma: high-dose methotrexate-based chemo (± rituximab)', detail: 'Not primarily surgical.' },
    { logic: 'Metastases: treat the primary + local therapy (surgery/SRS/WBRT)', detail: 'Prognosis depends on systemic disease.' },
  ],

  mnemonics: [
    { hook: 'Immunosuppressed + EBV + periventricular = primary CNS lymphoma (DLBCL)', expansion: ['Perivascular B-cells'] },
    { hook: 'Metastases = MULTIPLE, gray-white junction (lung/breast/melanoma/kidney/GI)', expansion: ['~25–50% of intracranial tumors'] },
  ],

  traps: [
    {
      questionCategory: 'Steroids before CNS lymphoma biopsy',
      wrongInstinct: 'Give corticosteroids up front for any enhancing brain mass with edema, then biopsy',
      rightAnswer: 'If CNS lymphoma is suspected, avoid steroids before biopsy — they can rapidly shrink the tumor and obscure the diagnosis',
      why: 'Lymphoma is exquisitely steroid-sensitive; premature steroids may cause the lesion to “disappear” and yield a non-diagnostic biopsy, delaying correct treatment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An AIDS patient has a solitary periventricular enhancing brain mass; biopsy shows perivascular sheets of EBV-positive large B-cells. The diagnosis is:',
      options: [
        { id: 'a', text: 'Glioblastoma' },
        { id: 'b', text: 'Primary CNS lymphoma (DLBCL)' },
        { id: 'c', text: 'Meningioma' },
        { id: 'd', text: 'Metastatic melanoma' },
      ],
      answerId: 'b',
      explanation: 'A periventricular EBV-associated diffuse large B-cell lymphoma with perivascular clustering in an immunosuppressed patient is primary CNS lymphoma — the most common CNS neoplasm in immunosuppression.',
      tests: 'exam',
    },
  ],
};

export default cnsLymphomaMetastases;
