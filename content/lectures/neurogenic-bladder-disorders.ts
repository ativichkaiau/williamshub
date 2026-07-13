import type { Lecture } from '../../lib/types';
import { MICTURITION_CONTROL } from '../../lib/figures';

export const neurogenicBladderDisorders: Lecture = {
  id: 'neurogenic-bladder-disorders',
  title: 'Neurogenic Bladder & Voiding Disorders',
  system: 'renal',
  source: 'L5 — Micturition',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L5 Micturition' },
    { kind: 'disease', label: 'Neurogenic bladder' },
    { kind: 'exam', label: 'UMN vs LMN bladder' },
  ],

  highYield: [
    'Because micturition is a spinal reflex under pontine/cortical control ([[micturition-reflex]]), the pattern of bladder dysfunction follows the LEVEL of the neurological lesion. The two big patterns are a **spastic (upper motor neuron) bladder** and a **flaccid (lower motor neuron) bladder**.',
    '**A SUPRASACRAL spinal cord lesion (above S2, after spinal shock resolves) → SPASTIC / REFLEX (UMN) bladder:** loss of cortical inhibition leaves the sacral reflex overactive → **involuntary detrusor contractions, small capacity, urgency and reflex (automatic) emptying**, often with **detrusor–sphincter dyssynergia** (detrusor and sphincter contract together → high pressures, reflux, hydronephrosis).',
    '**A SACRAL (S2–4) or peripheral-nerve lesion (cauda equina, pelvic surgery, diabetic autonomic neuropathy) → FLACCID / ATONIC (LMN) bladder:** the reflex arc is destroyed, so the detrusor cannot contract → **a large, distended, areflexic bladder with URINARY RETENTION and OVERFLOW incontinence** (dribbling once capacity is exceeded).',
    '**Immediately after acute spinal cord injury there is SPINAL SHOCK — a temporary areflexic (flaccid) bladder — before the spastic UMN pattern emerges** over weeks. Recognising this evolution matters for catheter management. Autonomic dysreflexia (a dangerous hypertensive crisis from bladder distension in high cord lesions) is a related emergency.',
    '**Management follows the pattern: overactive/spastic → antimuscarinics (± intermittent catheterisation, botulinum toxin); atonic/retention → intermittent self-catheterisation (± cholinergics).** The overriding goal is to keep bladder pressures low to protect the upper tracts (reflux/hydronephrosis → chronic kidney disease). Obstructive causes (BPH, stricture) cause retention through a different, mechanical mechanism.',
  ],

  mechanism: {
    title: 'Lesion level sets the pattern: suprasacral = spastic (UMN); sacral = flaccid (LMN)',
    steps: [
      { id: 's1', label: 'Micturition = spinal reflex under cortical/pontine control', emphasis: 'key' },
      { id: 's2', label: 'Suprasacral cord lesion → spastic/reflex UMN bladder (overactive, small)', emphasis: 'key' },
      { id: 's3', label: 'Detrusor–sphincter dyssynergia → high pressure → reflux/hydronephrosis', emphasis: 'danger' },
      { id: 's4', label: 'Sacral/peripheral lesion → flaccid/atonic LMN bladder → retention + overflow', emphasis: 'key' },
      { id: 's5', label: 'Acute SCI: spinal shock (flaccid) first → spastic later; keep pressures low' },
    ],
  },

  examFindings: [
    { sign: 'Small, overactive bladder with urgency after cord injury', mechanism: 'Spastic (UMN) neurogenic bladder', significance: 'key' },
    { sign: 'Distended atonic bladder with overflow dribbling', mechanism: 'Flaccid (LMN) bladder — retention', significance: 'key' },
    { sign: 'High detrusor pressures + vesicoureteric reflux/hydronephrosis', mechanism: 'Detrusor–sphincter dyssynergia', significance: 'key' },
    { sign: 'Transient flaccid bladder immediately after spinal cord injury', mechanism: 'Spinal shock (precedes the UMN pattern)', significance: 'supportive' },
    { sign: 'Retention from prostatic enlargement', mechanism: 'Mechanical outlet obstruction (not neurogenic)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The bladder pattern from a spinal lesion above the sacral cord', meaning: 'Spastic/reflex (upper motor neuron) bladder' },
    { clue: 'The bladder pattern from a sacral or peripheral nerve lesion', meaning: 'Flaccid/atonic (lower motor neuron) bladder with retention/overflow' },
    { clue: 'The dangerous consequence of detrusor–sphincter dyssynergia', meaning: 'High pressures → reflux → hydronephrosis/CKD' },
    { clue: 'The transient bladder state right after acute cord injury', meaning: 'Spinal shock (flaccid) before the spastic pattern' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This builds on the reflex wiring of [[micturition-reflex]]: antimuscarinics calm a spastic detrusor; intermittent catheterisation manages retention; the key is protecting the upper tracts from high-pressure reflux ([[acute-kidney-injury-azotemia]], [[chronic-kidney-disease-uremia]]). Congenital outflow obstruction is in [[kub-congenital-anomalies]]; the lower-tract anatomy is [[lower-urinary-tract-histology]].' },
  ],

  mnemonics: [
    { hook: 'Level → pattern: "above sacrum = Spastic (Small, overactive); at/below sacrum = Flaccid (Full, retention)"', expansion: ['UMN = reflex/automatic bladder', 'LMN = atonic → overflow'] },
    { hook: 'Dyssynergia = "detrusor + sphincter fight" → high pressure → protect the kidneys', expansion: ['Reflux → hydronephrosis', 'Keep bladder pressures low'] },
  ],

  traps: [
    {
      questionCategory: 'Bladder findings immediately after spinal cord injury',
      wrongInstinct: 'A spinal cord injury above the sacrum immediately produces a spastic, overactive bladder',
      rightAnswer: 'Right after acute cord injury there is SPINAL SHOCK — a temporary FLACCID, areflexic bladder — and the spastic (UMN) pattern only emerges over the following weeks as reflexes return',
      why: 'Expecting an immediate spastic bladder misreads the time course; during spinal shock the bladder is atonic and needs drainage, and management changes as the UMN pattern develops.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a chronic spinal cord lesion above the sacral segments has a small-capacity bladder with involuntary contractions and urgency. This is a:',
      options: [
        { id: 'a', text: 'Flaccid (lower motor neuron) bladder' },
        { id: 'b', text: 'Spastic/reflex (upper motor neuron) bladder' },
        { id: 'c', text: 'Normal bladder' },
        { id: 'd', text: 'Obstructive bladder from prostate enlargement' },
      ],
      answerId: 'b',
      explanation: 'A suprasacral cord lesion removes cortical inhibition of the intact sacral reflex, producing a spastic/reflex (UMN) bladder with involuntary detrusor contractions, small capacity and urgency, often with detrusor–sphincter dyssynergia.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Destruction of the sacral (S2–4) micturition centre or its peripheral nerves most characteristically produces:',
      options: [
        { id: 'a', text: 'A small, overactive bladder' },
        { id: 'b', text: 'A flaccid, atonic bladder with urinary retention and overflow incontinence' },
        { id: 'c', text: 'Increased urinary frequency without retention' },
        { id: 'd', text: 'Normal voiding' },
      ],
      answerId: 'b',
      explanation: 'Loss of the sacral reflex arc (a lower motor neuron lesion) leaves the detrusor unable to contract, so the bladder becomes distended and areflexic — chronic retention with overflow incontinence.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Micturition control', svg: MICTURITION_CONTROL, caption: 'The storage/voiding wiring whose disruption at different levels gives spastic (UMN) vs flaccid (LMN) bladders.' },
  ],
};

export default neurogenicBladderDisorders;
