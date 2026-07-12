import type { Lecture } from '../../lib/types';

export const fcp1UrinarySymptomsLuts: Lecture = {
  id: 'fcp1-urinary-symptoms-luts',
  title: 'Urinary Symptoms & LUTS',
  system: 'clinical',
  source: 'L34 — Urinary Symptoms',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L34 Urinary Symptoms' },
    { kind: 'disease', label: 'BPH · UTI · retention' },
    { kind: 'mechanism', label: 'Storage vs voiding LUTS' },
    { kind: 'investigation', label: 'Urinalysis · PVR · PSA' },
  ],

  highYield: [
    '**LUTS split into storage** (frequency, urgency, nocturia, urge incontinence) **and voiding/obstructive** (hesitancy, weak or intermittent stream, straining, terminal dribble, incomplete emptying) — the pattern points to the cause.',
    '**Dysuria + frequency + urgency** with cloudy or foul urine → **UTI (cystitis)**; add **fever, flank pain and rigors → pyelonephritis**, an upper-tract infection that can progress to urosepsis. Visible blood → workup for hematuria [[fcp1-hematuria-approach]].',
    'An older man with progressive **voiding** LUTS → **benign prostatic hyperplasia (BPH)**; other causes are overactive bladder, urethral stricture, neurogenic bladder, bladder stone and prostatitis.',
    '**Acute urinary retention** is a sudden, painful inability to void with a **palpable, tender bladder** — a urological emergency needing immediate catheterization. Contrast **chronic retention** (painless, huge residual, overflow incontinence, risk of obstructive nephropathy).',
    'Red flags: acute retention, visible hematuria, systemic sepsis, and **painless retention with saddle anaesthesia or leg weakness** (cauda equina) — do not miss the neurological cause.',
  ],

  mechanism: {
    title: 'Approach to lower urinary tract symptoms',
    steps: [
      { id: 's1', label: 'Confirm LUTS: storage vs voiding vs post-micturition', emphasis: 'key' },
      { id: 's2', label: 'Storage/dysuria → infection or irritation; voiding → outflow obstruction', emphasis: 'key' },
      { id: 's3', label: 'Urinalysis + culture; bladder scan for post-void residual', emphasis: 'normal' },
      { id: 's4', label: 'Acute painful retention → immediate catheterization', emphasis: 'danger' },
      { id: 's5', label: 'Fever + flank pain → pyelonephritis / urosepsis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Palpable, tender suprapubic bladder', mechanism: 'Distended bladder in acute retention', significance: 'key' },
    { sign: 'Smooth, symmetrically enlarged prostate on DRE', mechanism: 'Benign prostatic hyperplasia', significance: 'key' },
    { sign: 'Costovertebral (flank) angle tenderness', mechanism: 'Upper-tract infection — pyelonephritis', significance: 'key' },
    { sign: 'Hard, irregular, nodular prostate on DRE', mechanism: 'Suspicious for prostate cancer', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dysuria and frequency with nitrites + leucocytes on dipstick', meaning: 'UTI — send culture and treat empirically' },
    { clue: 'High post-void residual on bladder scan', meaning: 'Incomplete emptying — outflow obstruction or an atonic bladder' },
    { clue: 'Raised PSA or an abnormal DRE', meaning: 'Prostate pathology (BPH or cancer) — counsel before checking PSA' },
    { clue: 'Weak stream with a low peak flow on uroflowmetry', meaning: 'Bladder outlet obstruction, e.g. BPH' },
  ],

  treatment: [
    { logic: 'Acute retention → immediate urethral catheterization', detail: 'Decompresses the bladder and relieves pain; watch for post-obstructive diuresis, then investigate the cause.' },
    { logic: 'Treat the underlying cause', detail: 'UTI → antibiotics; BPH → an alpha-blocker (tamsulosin) with or without a 5-alpha-reductase inhibitor (finasteride); overactive bladder → bladder training and an antimuscarinic.' },
  ],

  mnemonics: [
    { hook: 'Storage stores, Voiding obstructs', expansion: ['Storage: frequency, urgency, nocturia, incontinence', 'Voiding: hesitancy, weak stream, straining, dribble'] },
  ],

  traps: [
    {
      questionCategory: 'Acute vs chronic retention',
      wrongInstinct: 'A large, painless bladder with overflow incontinence is acute retention needing an urgent catheter for pain',
      rightAnswer: 'This picture is chronic retention — still catheterize, but anticipate post-obstructive diuresis and pre-existing renal impairment',
      why: 'Acute retention is painful; chronic retention is painless with a very high residual and risks obstructive nephropathy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old man has several months of hesitancy, a weak stream, nocturia and a sense of incomplete emptying. DRE reveals a smooth, symmetrically enlarged prostate. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Overactive bladder' },
        { id: 'b', text: 'Benign prostatic hyperplasia' },
        { id: 'c', text: 'Acute cystitis' },
        { id: 'd', text: 'Bladder carcinoma' },
      ],
      answerId: 'b',
      explanation: 'Progressive voiding (obstructive) LUTS in an older man with a smooth, enlarged prostate is typical of benign prostatic hyperplasia.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 70-year-old man cannot pass urine for 8 hours and has a painful, palpable suprapubic bladder. The best immediate step is:',
      options: [
        { id: 'a', text: 'Start an oral alpha-blocker and review in a week' },
        { id: 'b', text: 'Immediate urethral catheterization' },
        { id: 'c', text: 'Urgent CT of the abdomen' },
        { id: 'd', text: 'Intravenous antibiotics' },
      ],
      answerId: 'b',
      explanation: 'This is acute urinary retention, a urological emergency; immediate catheterization decompresses the bladder and relieves pain before the cause is investigated.',
      tests: 'treatment',
    },
  ],
};

export default fcp1UrinarySymptomsLuts;
