import type { Lecture } from '../../lib/types';

export const fcp1FeverOfUnknownOrigin: Lecture = {
  id: 'fcp1-fever-of-unknown-origin',
  title: 'Fever of Unknown Origin (FUO)',
  system: 'clinical',
  source: 'L6 — Fever',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L6 Fever' },
    { kind: 'disease', label: 'Infection · malignancy · CTD' },
    { kind: 'investigation', label: 'Staged workup' },
    { kind: 'mechanism', label: 'Four etiologic buckets' },
  ],

  highYield: [
    '**Classic FUO definition:** temperature over **38.3 degrees C on several occasions**, lasting **3 weeks or more**, and still **undiagnosed after appropriate initial workup** (3 days as an inpatient or 3 outpatient visits). It is distinct from the acute febrile presentation → [[fcp1-fever-approach-differential]].',
    '**Four etiologic buckets:** **infection** (TB, occult abscess, infective endocarditis, osteomyelitis), **malignancy** (lymphoma, leukaemia, renal cell and hepatocellular carcinoma), **connective-tissue / non-infective inflammatory disease** (adult-onset Still disease, giant-cell arteritis and polymyalgia in the elderly, SLE, vasculitis), and **miscellaneous** (drug fever, PE, subacute thyroiditis, IBD, factitious). A meaningful minority stay undiagnosed and often self-resolve.',
    '**Age steers the odds:** in the elderly think **giant-cell arteritis (GCA)** and malignancy; in the young think autoimmune disease and infection. B-symptoms (night sweats, weight loss → [[fcp1-weight-loss-approach]]) and lymphadenopathy → [[fcp1-lymphadenopathy-approach]] raise the suspicion of lymphoma.',
    '**Method beats shotgun testing.** The highest-yield step is **repeating the history and examination** — new "potentially diagnostic clues" emerge over time. **Stop non-essential drugs** (drug fever), then move in stages: three sets of blood cultures OFF antibiotics, serology, CT of chest/abdomen/pelvis, then FDG-PET and targeted biopsy (temporal artery, lymph node, marrow).',
    '**Avoid empiric antibiotics or steroids before a diagnosis** — they mask the picture, delay the answer, and can worsen occult infection. The exception is when GCA is strongly suspected with visual symptoms, where steroids are started promptly while arranging temporal artery biopsy.',
  ],

  mechanism: {
    title: 'Staged evaluation of prolonged undiagnosed fever',
    steps: [
      { id: 's1', label: 'Meet criteria: over 38.3 C, 3+ weeks, undiagnosed after initial workup', emphasis: 'key' },
      { id: 's2', label: 'Categorise: infection / malignancy / connective-tissue / miscellaneous', emphasis: 'key' },
      { id: 's3', label: 'Hunt clues: repeat history & exam, stop culprit drugs', emphasis: 'normal' },
      { id: 's4', label: 'Staged tests: cultures & serology → CT → FDG-PET → targeted biopsy', emphasis: 'normal' },
      { id: 's5', label: 'Do NOT give blind empiric steroids/antibiotics before diagnosis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'New or changing heart murmur', mechanism: 'Infective endocarditis (vegetation)', significance: 'key' },
    { sign: 'Temporal artery tenderness, jaw claudication in an elderly patient', mechanism: 'Giant-cell arteritis', significance: 'key' },
    { sign: 'Lymphadenopathy or hepatosplenomegaly', mechanism: 'Lymphoma or chronic infection → [[fcp1-lymphadenopathy-approach]]', significance: 'supportive' },
    { sign: 'Relative bradycardia', mechanism: 'Typhoid, intracellular infection or drug fever', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Three sets of blood cultures off antibiotics', meaning: 'Detects infective endocarditis and occult bacteraemia' },
    { clue: 'Very high ESR/CRP in an elderly patient with headache', meaning: 'Suggests giant-cell arteritis → temporal artery biopsy' },
    { clue: 'CT chest/abdomen/pelvis', meaning: 'Finds occult abscess, lymphadenopathy or a tumour' },
    { clue: 'FDG-PET scan', meaning: 'Localises occult infection, malignancy or large-vessel vasculitis to biopsy' },
  ],

  treatment: [
    { logic: 'Direct therapy at the proven cause', detail: 'Antibiotics for endocarditis/TB, steroids for GCA once confirmed, oncological referral for malignancy.' },
    { logic: 'Watchful waiting is reasonable if stable and undiagnosed', detail: 'Many idiopathic FUOs settle spontaneously with a good prognosis; keep reviewing rather than treating blindly.' },
  ],

  mnemonics: [
    { hook: 'FUO buckets: Infection · Malignancy · Connective-tissue · Misc', expansion: ['3 weeks, over 38.3 C, undiagnosed after workup', 'Repeat the history — new clues appear'] },
  ],

  traps: [
    {
      questionCategory: 'Empiric therapy in FUO',
      wrongInstinct: 'Start empiric broad-spectrum antibiotics or steroids to see if the fever settles',
      rightAnswer: 'Withhold blind empiric therapy until a diagnosis is made (except strongly suspected GCA with visual threat)',
      why: 'Empiric drugs mask endocarditis, lymphoma and vasculitis, delaying the true diagnosis and risking harm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which set of features best satisfies the classic definition of fever of unknown origin?',
      options: [
        { id: 'a', text: 'Temperature over 38.3 degrees C for 3 or more weeks, undiagnosed after appropriate workup' },
        { id: 'b', text: 'Any fever lasting more than 5 days in a returning traveller' },
        { id: 'c', text: 'Fever with a clear localising source but negative blood cultures' },
        { id: 'd', text: 'Intermittent low-grade fever for 48 hours with neutrophilia' },
      ],
      answerId: 'a',
      explanation: 'Classic FUO requires a temperature above 38.3 degrees C on several occasions, a duration of at least 3 weeks, and no diagnosis despite an appropriate initial evaluation.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 74-year-old with three weeks of fever, weight loss, a new temporal headache and jaw claudication has an ESR of 95 mm/h. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Empiric broad-spectrum antibiotics and discharge' },
        { id: 'b', text: 'Start corticosteroids and arrange temporal artery biopsy' },
        { id: 'c', text: 'Reassure and review in one month' },
        { id: 'd', text: 'Bone marrow biopsy as the first investigation' },
      ],
      answerId: 'b',
      explanation: 'The picture is giant-cell arteritis, a leading cause of FUO in the elderly. With headache and jaw claudication threatening vision, steroids are started promptly and a temporal artery biopsy is arranged — one setting where empiric therapy is justified.',
      tests: 'treatment',
    },
  ],
};

export default fcp1FeverOfUnknownOrigin;
