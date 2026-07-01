import type { Lecture } from '../../lib/types';

export const goutDrugs: Lecture = {
  id: 'gout-drugs',
  title: 'Gout Drugs',
  system: 'msk',
  source: 'L5 — Antirheumatic & Gout Drugs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L5 Antirheumatic & Gout Drugs' },
    { kind: 'disease', label: 'Gout' },
    { kind: 'mechanism', label: 'Acute vs urate-lowering' },
    { kind: 'exam', label: 'Allopurinol / colchicine' },
  ],

  highYield: [
    'Two separate goals: **treat the acute flare** (anti-inflammatory) vs **lower urate long-term (ULT)**. Do **not** start ULT for asymptomatic hyperuricemia alone.',
    '**Acute gout** — “Nice Cold Compressions”: **NSAIDs (not aspirin), Colchicine, Corticosteroids**. **Colchicine** binds tubulin → inhibits microtubules/neutrophil migration & NLRP3 inflammasome; narrow window, causes **GI upset (diarrhea)**.',
    '**Urate-lowering (chronic gout)** — “FALL”: **Febuxostat, ALLopurinol**. **Allopurinol** (→ oxypurinol) **inhibits xanthine oxidase** (first-line); risk of **severe hypersensitivity (SJS/TEN)** → screen **HLA-B*58:01** in Southeast Asians. Also treats **tumor lysis syndrome**.',
    '**Febuxostat** = xanthine oxidase inhibitor (when allopurinol fails; **cardiovascular boxed warning**).',
    '**Uricosurics (probenecid)** inhibit URAT1 → ↑ renal urate excretion (avoid in renal stones/CKD); **uricase (rasburicase/pegloticase)** degrades urate → allantoin (extreme hyperuricemia / tumor lysis).',
  ],

  mechanism: {
    title: 'Calm the flare first; lower urate for prevention',
    steps: [
      { id: 's1', label: 'Acute: NSAIDs / colchicine / steroids (anti-inflammatory)', emphasis: 'key' },
      { id: 's2', label: 'Colchicine: tubulin → ↓ neutrophil / NLRP3' },
      { id: 's3', label: 'Chronic: xanthine oxidase inhibitor (allopurinol) lowers urate' },
      { id: 's4', label: 'Screen HLA-B*58:01 before allopurinol (SJS/TEN)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bloody diarrhea after gout medication', mechanism: 'Colchicine toxicity', significance: 'key' },
    { sign: 'Severe cutaneous reaction (SJS/TEN) on urate-lowering drug', mechanism: 'Allopurinol hypersensitivity (HLA-B*58:01)', significance: 'key' },
    { sign: 'Ureteric stone on a uricosuric', mechanism: 'Probenecid ↑ urinary urate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'HLA-B*58:01 screening (SEA population)', meaning: 'Allopurinol SJS/TEN risk' },
    { clue: 'Renal function', meaning: 'Avoid probenecid in stones/CKD' },
    { clue: 'Serum urate target (<6, <5 with tophi)', meaning: 'ULT “treat to target”' },
  ],

  treatment: [
    { logic: 'Acute flare: NSAID or colchicine or steroid (not aspirin)', detail: 'Combine for severe attacks.' },
    { logic: 'Chronic: allopurinol first-line to lower urate', detail: 'Start once flare settles or with flare-prophylaxis.' },
    { logic: 'Continue low-dose colchicine/NSAID when starting ULT', detail: 'Prevents mobilization flares.' },
  ],

  mnemonics: [
    { hook: 'Acute gout = “Nice Cold Compressions”: NSAIDs, Colchicine, Corticosteroids', expansion: ['Not aspirin'] },
    { hook: 'Lower urate = “FALL”: Febuxostat, ALLopurinol (xanthine oxidase)', expansion: ['Probenecid = excretion; uricase = degradation'] },
  ],

  traps: [
    {
      questionCategory: 'Aspirin in gout',
      wrongInstinct: 'Aspirin is a good NSAID choice for an acute gout flare',
      rightAnswer: 'Avoid aspirin in gout — low-dose aspirin causes urate RETENTION and can worsen it; use indomethacin/naproxen, colchicine, or steroids instead',
      why: 'Aspirin has dose-dependent effects on urate handling (low dose retains urate), so it is specifically excluded from the acute-gout NSAID options.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Before starting allopurinol in a Thai patient with chronic gout, which test reduces the risk of a severe cutaneous reaction (SJS/TEN)?',
      options: [
        { id: 'a', text: 'G6PD level' },
        { id: 'b', text: 'HLA-B*58:01 genotyping' },
        { id: 'c', text: 'Serum urate' },
        { id: 'd', text: 'Renal ultrasound' },
      ],
      answerId: 'b',
      explanation: 'The HLA-B*58:01 allele (common in Southeast Asians) strongly predicts allopurinol hypersensitivity syndrome (SJS/TEN), so screening is recommended before starting allopurinol.',
      tests: 'investigation',
    },
  ],
};

export default goutDrugs;
