import type { Lecture } from '../../lib/types';

export const urinaryIncontinenceDrugs: Lecture = {
  id: 'urinary-incontinence-drugs',
  title: 'Drugs for Urinary Frequency, Incontinence & Enuresis',
  system: 'renal',
  source: 'L16 — Drugs for Urinary Frequency, Incontinence & Enuresis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L16 Incontinence Drugs' },
    { kind: 'mechanism', label: 'Bladder autonomic control' },
    { kind: 'exam', label: 'Antimuscarinics; BPH drugs' },
  ],

  highYield: [
    'Bladder function is autonomically controlled: PARASYMPATHETIC (pelvic nerves, MUSCARINIC M3) CONTRACTS the detrusor to VOID; SYMPATHETIC (β3 relaxes detrusor to store; α1 contracts the bladder neck/sphincter). Drug therapy targets these receptors according to the TYPE of incontinence.',
    'URGE incontinence / OVERACTIVE BLADDER (involuntary detrusor contractions → urgency/frequency): treat by RELAXING the detrusor — ANTIMUSCARINICS (oxybutynin, tolterodine, solifenatin — block M3) or β3-AGONISTS (mirabegron). Antimuscarinic side-effects are the classic anticholinergic ones (dry mouth, constipation, blurred vision, confusion in the elderly, urinary RETENTION) — avoid in narrow-angle glaucoma and significant outlet obstruction.',
    'BENIGN PROSTATIC HYPERPLASIA (male outlet obstruction → hesitancy, weak stream, frequency): α1-BLOCKERS (tamsulosin — relax prostatic/bladder-neck smooth muscle, rapid symptom relief; side-effect postural hypotension) and 5α-REDUCTASE INHIBITORS (finasteride — shrink the prostate over months by blocking DHT; also lower PSA). STRESS incontinence (sphincter weakness) is mainly managed non-pharmacologically (pelvic floor); duloxetine is an option.',
    'ENURESIS (bedwetting in children): first-line is behavioural/enuresis alarms; DESMOPRESSIN (a vasopressin V2 analogue reducing overnight urine production) is used for short-term/situational control. OVERFLOW incontinence from an underactive/obstructed bladder is treated by relieving obstruction or, sometimes, a cholinergic agent/catheter — antimuscarinics would worsen retention.',
    '**The take-home: overactive bladder/urge → ANTIMUSCARINICS (M3 block) or β3-agonist (relax detrusor; watch anticholinergic effects/retention); BPH → α1-blockers (tamsulosin, fast) + 5α-reductase inhibitors (finasteride, slow, ↓PSA); enuresis → alarms then DESMOPRESSIN. Match the drug to the incontinence type/receptor.** The autonomic wiring is HNS-1 ([[autonomic-nervous-system]]); antimuscarinic/adrenergic pharmacology is BCP ([[cholinergic-drugs]], [[adrenergic-drugs]]); desmopressin links to posterior-pituitary drugs.',
  ],

  mechanism: {
    title: 'Overactive bladder → antimuscarinic/β3-agonist (relax detrusor); BPH → α1-blocker + 5α-reductase inhibitor; enuresis → desmopressin',
    steps: [
      { id: 's1', label: 'Detrusor contracts via parasympathetic M3; stores via sympathetic β3 (relax) / α1 (sphincter)', emphasis: 'key' },
      { id: 's2', label: 'Overactive bladder/urge: antimuscarinics (oxybutynin/solifenacin) or β3-agonist (mirabegron)', emphasis: 'key' },
      { id: 's3', label: 'Antimuscarinic side-effects: dry/constipation/blurred/confusion; risk RETENTION (avoid in obstruction/glaucoma)', emphasis: 'danger' },
      { id: 's4', label: 'BPH: α1-blocker (tamsulosin, fast) + 5α-reductase inhibitor (finasteride, slow, ↓PSA)', emphasis: 'key' },
      { id: 's5', label: 'Enuresis: alarms first-line, then desmopressin (V2 analogue, ↓overnight urine)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Urgency and frequency from detrusor overactivity', mechanism: 'Overactive bladder → antimuscarinic/β3-agonist', significance: 'key' },
    { sign: 'Dry mouth, constipation and confusion in an elderly patient on bladder medication', mechanism: 'Antimuscarinic (anticholinergic) side-effects', significance: 'key' },
    { sign: 'Rapid relief of male voiding symptoms with postural hypotension', mechanism: 'α1-blocker (tamsulosin) for BPH', significance: 'key' },
    { sign: 'Prostate shrinkage and lowered PSA over months', mechanism: '5α-reductase inhibitor (finasteride)', significance: 'supportive' },
    { sign: 'Nocturnal enuresis controlled by reducing overnight urine', mechanism: 'Desmopressin (V2 analogue)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The receptor mediating detrusor contraction (voiding)', meaning: 'Muscarinic M3 (parasympathetic)' },
    { clue: 'The drug classes for overactive bladder', meaning: 'Antimuscarinics and β3-agonists (relax the detrusor)' },
    { clue: 'The two drug classes for BPH', meaning: 'α1-blockers (fast) and 5α-reductase inhibitors (slow, ↓PSA)' },
    { clue: 'The drug reducing overnight urine in enuresis', meaning: 'Desmopressin (vasopressin V2 analogue)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching drug to incontinence type and bladder autonomic receptor avoids harm: antimuscarinics/β3-agonists relax an overactive detrusor (but antimuscarinics worsen retention and cause anticholinergic effects — dangerous in the elderly and in outlet obstruction), α1-blockers/5α-reductase inhibitors relieve BPH, and desmopressin manages enuresis/nocturia. This applies the autonomic pharmacology of BCP ([[cholinergic-drugs]], [[adrenergic-drugs]]) to the bladder wiring of HNS-1 ([[autonomic-nervous-system]]).' },
  ],

  mnemonics: [
    { hook: '"Overactive bladder → relax detrusor (antimuscarinic M3 block / β3-agonist)"', expansion: ['Watch retention + anticholinergic effects', 'Avoid in obstruction/glaucoma'] },
    { hook: 'BPH: "tAmsulosin = fast Aid (α1); finAsteride = shrinks slow (5α, ↓PSA)"', expansion: ['Enuresis: alarms → desmopressin', 'M3 = void, β3 = store'] },
  ],

  traps: [
    {
      questionCategory: 'Antimuscarinics and urinary retention',
      wrongInstinct: 'Antimuscarinics help all urinary symptoms, so they are fine in any incontinence',
      rightAnswer: 'Antimuscarinics treat OVERACTIVE bladder (urge) by relaxing the detrusor, but they IMPAIR bladder emptying — so in OUTLET OBSTRUCTION (e.g. BPH) or an underactive bladder they precipitate URINARY RETENTION, and they cause anticholinergic effects (confusion in the elderly, worsening narrow-angle glaucoma); they are the wrong choice for overflow/obstructive symptoms, which need obstruction relief instead',
      why: 'Because antimuscarinics reduce detrusor contraction, giving them to a patient with obstruction or poor emptying causes retention — matching the drug to the incontinence type (urge vs overflow/obstruction) is essential to avoid harm.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Overactive bladder (urge incontinence) is commonly treated with an antimuscarinic (e.g. oxybutynin) because blocking muscarinic M3 receptors:',
      options: [
        { id: 'a', text: 'Contracts the detrusor to empty the bladder' },
        { id: 'b', text: 'Relaxes the detrusor, reducing involuntary contractions' },
        { id: 'c', text: 'Contracts the bladder neck' },
        { id: 'd', text: 'Increases urine production' },
      ],
      answerId: 'b',
      explanation: 'Detrusor contraction is driven by parasympathetic muscarinic (M3) stimulation, so antimuscarinics relax the detrusor and reduce the involuntary contractions of overactive bladder. Their anticholinergic side-effects and risk of urinary retention limit use in outlet obstruction and the elderly.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which pair of drugs is used to treat benign prostatic hyperplasia?',
      options: [
        { id: 'a', text: 'Oxybutynin and mirabegron' },
        { id: 'b', text: 'Tamsulosin (α1-blocker) and finasteride (5α-reductase inhibitor)' },
        { id: 'c', text: 'Furosemide and spironolactone' },
        { id: 'd', text: 'Desmopressin and oxybutynin' },
      ],
      answerId: 'b',
      explanation: 'BPH is treated with α1-blockers (e.g. tamsulosin), which relax prostatic and bladder-neck smooth muscle for rapid symptom relief, and 5α-reductase inhibitors (e.g. finasteride), which shrink the prostate over months by blocking dihydrotestosterone (and lower PSA). Antimuscarinics are used for overactive bladder, not obstruction.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default urinaryIncontinenceDrugs;
