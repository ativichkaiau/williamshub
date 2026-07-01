import type { Lecture } from '../../lib/types';

export const rheumatoidArthritisDrugs: Lecture = {
  id: 'rheumatoid-arthritis-drugs',
  title: 'Rheumatoid Arthritis Drugs (DMARDs)',
  system: 'msk',
  source: 'L5 — Antirheumatic & Gout Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L5 Antirheumatic & Gout Drugs' },
    { kind: 'disease', label: 'Rheumatoid arthritis' },
    { kind: 'mechanism', label: 'DMARD classes' },
    { kind: 'exam', label: 'Methotrexate / biologics' },
  ],

  highYield: [
    'NSAIDs/tramadol give **symptomatic relief only**; **DMARDs (disease-modifying antirheumatic drugs)** slow joint destruction and should be started early.',
    '**Methotrexate (MTX) = first-line DMARD** (inhibits dihydrofolate reductase → ↓ lymphocyte proliferation). Toxicity: **hepatotoxicity, bone-marrow suppression, GI**, and **teratogenicity (contraindicated in pregnancy)**; give folic acid.',
    'Other **conventional synthetic DMARDs**: **hydroxychloroquine (HCQ)** — no marrow suppression but **retinopathy**; **sulfasalazine**; **leflunomide** (pyrimidine synthesis, teratogenic).',
    '**Targeted synthetic DMARDs = JAK inhibitors** (tofacitinib) — block JAK-STAT; risks **herpes zoster, thromboembolism**.',
    '**Biologic DMARDs** for severe/refractory RA (screen for **TB before anti-TNF**): **TNF blockers (etanercept, infliximab, adalimumab)**, **IL-6 (tocilizumab)**, **IL-1 (anakinra — never combine with TNF blockers)**, **anti-CD20 (rituximab, B-cell depletion)**, **abatacept (blocks T-cell co-stimulation)**. Glucocorticoids give rapid control but have serious long-term effects (osteoporosis, Cushing).',
  ],

  mechanism: {
    title: 'Suppress the autoimmune cytokine cascade of RA',
    steps: [
      { id: 's1', label: 'Start DMARD early to prevent erosion', emphasis: 'key' },
      { id: 's2', label: 'MTX first-line (antifolate → ↓ lymphocytes)' },
      { id: 's3', label: 'Escalate to JAK inhibitor / biologic if inadequate' },
      { id: 's4', label: 'Biologics ↑ infection risk (screen TB before anti-TNF)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Reactivation of latent TB on a biologic', mechanism: 'TNF blockade', significance: 'key' },
    { sign: 'Retinopathy on a long-term DMARD', mechanism: 'Hydroxychloroquine', significance: 'key' },
    { sign: 'Hepatotoxicity/cytopenia on first-line RA therapy', mechanism: 'Methotrexate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'LFTs, CBC on methotrexate', meaning: 'Hepatotoxicity, marrow suppression' },
    { clue: 'TB screen before anti-TNF', meaning: 'Reactivation risk' },
    { clue: 'Baseline eye exam on hydroxychloroquine', meaning: 'Retinopathy surveillance' },
  ],

  treatment: [
    { logic: 'Methotrexate first-line (± short-term glucocorticoid bridge)', detail: 'Add folic acid.' },
    { logic: 'Add/switch to JAK inhibitor or biologic if uncontrolled', detail: 'Triple therapy or ts/b-DMARDs.' },
  ],

  mnemonics: [
    { hook: 'MTX = first-line RA DMARD (antifolate, teratogen, monitor liver/marrow)', expansion: ['Give folic acid'] },
    { hook: 'Screen TB before TNF blockers; never combine anakinra + TNF blocker', expansion: ['Infection risk'] },
  ],

  traps: [
    {
      questionCategory: 'Before starting a TNF inhibitor',
      wrongInstinct: 'Biologic DMARDs can be started immediately once conventional DMARDs fail',
      rightAnswer: 'Screen for latent tuberculosis (and hepatitis) before starting a TNF inhibitor, because TNF blockade can reactivate TB',
      why: 'TNF is essential for granuloma maintenance, so blocking it can reactivate latent TB — screening is mandatory before anti-TNF therapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which is the first-line disease-modifying drug for rheumatoid arthritis, acting by inhibiting dihydrofolate reductase?',
      options: [
        { id: 'a', text: 'Etanercept' },
        { id: 'b', text: 'Methotrexate' },
        { id: 'c', text: 'Prednisolone' },
        { id: 'd', text: 'Hydroxychloroquine' },
      ],
      answerId: 'b',
      explanation: 'Methotrexate, a dihydrofolate reductase inhibitor that suppresses lymphocyte proliferation, is the first-line DMARD for rheumatoid arthritis (contraindicated in pregnancy; monitor liver and marrow).',
      tests: 'treatment',
    },
  ],
};

export default rheumatoidArthritisDrugs;
