import type { Lecture } from '../../lib/types';

export const bladderUrethra: Lecture = {
  id: 'bladder-urethra',
  title: 'Urinary Bladder & Urethra',
  system: 'renal',
  source: 'L17 — Posterior Abdominal Wall & Urinary System',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L17 Posterior Wall & Urinary' },
    { kind: 'disease', label: 'Bladder / urethra' },
    { kind: 'mechanism', label: 'Trigone & micturition' },
    { kind: 'exam', label: 'Male vs female urethra' },
  ],

  highYield: [
    'The **urinary bladder** is a subperitoneal muscular reservoir behind the pubis; its wall is the **detrusor** muscle. Internally, the **trigone** (between the 2 ureteric orifices and the internal urethral orifice) is a smooth triangular area (the rest is folded with rugae).',
    '**Blood supply**: **superior + inferior vesical arteries** (from the internal iliac); in females the vaginal artery replaces the inferior vesical.',
    '**Micturition control**: **parasympathetic (pelvic splanchnics S2–S4) contracts the detrusor and relaxes the internal sphincter → voiding**; **sympathetic (T11–L2)** relaxes the detrusor and closes the internal sphincter (storage); the **external urethral sphincter (skeletal, pudendal nerve S2–S4)** gives voluntary control.',
    'The **male urethra (~18–20 cm)** has 4 parts: **preprostatic/intramural, prostatic** (receives ejaculatory + prostatic ducts at the seminal colliculus), **membranous** (through the external sphincter — the narrowest, least distensible, and most easily injured), and **spongy/penile**.',
    'The **female urethra (~4 cm)** is short and straight with **no internal urethral sphincter** — its shortness predisposes to **urinary tract infections**. Male urethral injuries differ by site: **membranous** (pelvic-fracture straddle) vs **bulbar/spongy** (straddle injury).',
  ],

  mechanism: {
    title: 'Detrusor stores/voids; sphincters and urethra differ by sex',
    steps: [
      { id: 's1', label: 'Trigone between ureteric + urethral orifices', emphasis: 'key' },
      { id: 's2', label: 'Parasympathetic S2–S4 → detrusor contracts (void)' },
      { id: 's3', label: 'Sympathetic T11–L2 → storage (internal sphincter closed)' },
      { id: 's4', label: 'Female urethra short → UTI; male membranous part fragile', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent UTIs in a woman', mechanism: 'Short female urethra', significance: 'key' },
    { sign: 'Urinary retention + high-riding prostate after pelvic fracture', mechanism: 'Membranous urethral rupture', significance: 'key' },
    { sign: 'Urge incontinence from detrusor overactivity', mechanism: 'Parasympathetic (S2–S4) drive on the detrusor', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Retrograde urethrogram after suspected urethral injury', meaning: 'Locate the tear (membranous vs bulbar)' },
    { clue: 'Cystoscopy of the trigone', meaning: 'Ureteric orifices / bladder lesions' },
  ],

  treatment: [
    { logic: 'Detrusor overactivity: antimuscarinics/β3 agonists', detail: 'Reduce parasympathetic-driven contraction.' },
    { logic: 'Suprapubic catheter if urethral injury', detail: 'Avoid passing a catheter through a torn urethra.' },
  ],

  mnemonics: [
    { hook: 'Parasympathetic (S2–4) = Pee (detrusor contracts); Sympathetic = Store', expansion: ['"Point and Shoot"'] },
    { hook: 'Female urethra short → UTIs; male membranous urethra = narrowest/most fragile', expansion: ['Pelvic fracture injury'] },
  ],

  traps: [
    {
      questionCategory: 'Autonomic control of the bladder',
      wrongInstinct: 'Sympathetic stimulation empties the bladder',
      rightAnswer: 'PARASYMPATHETIC (S2–S4, pelvic splanchnics) contracts the detrusor to VOID; sympathetic promotes STORAGE (relaxes detrusor, closes the internal sphincter)',
      why: '"Parasympathetic = Pee, Sympathetic = Store" — a frequently reversed exam point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which autonomic input contracts the detrusor muscle to produce voiding?',
      options: [
        { id: 'a', text: 'Sympathetic fibres from T11–L2' },
        { id: 'b', text: 'Parasympathetic pelvic splanchnic nerves (S2–S4)' },
        { id: 'c', text: 'The pudendal nerve' },
        { id: 'd', text: 'The vagus nerve' },
      ],
      answerId: 'b',
      explanation: 'Parasympathetic fibres from the pelvic splanchnic nerves (S2–S4) contract the detrusor and relax the internal urethral sphincter to void; sympathetic input (T11–L2) promotes storage.',
      tests: 'exam',
    },
  ],
};

export default bladderUrethra;
