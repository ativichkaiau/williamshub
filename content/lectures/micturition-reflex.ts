import type { Lecture } from '../../lib/types';
import { MICTURITION_CONTROL } from '../../lib/figures';

export const micturitionReflex: Lecture = {
  id: 'micturition-reflex',
  title: 'Micturition: Bladder Storage & Voiding',
  system: 'renal',
  source: 'L5 — Micturition',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L5 Micturition' },
    { kind: 'mechanism', label: 'Storage vs voiding' },
    { kind: 'disease', label: 'Neurogenic bladder' },
  ],

  highYield: [
    '**Micturition alternates between two states — storage (filling) and voiding (emptying) — controlled by three nerves plus the brain.** The **detrusor** (smooth muscle) and the **internal (smooth) and external (skeletal) urethral sphincters** must work in reciprocal coordination: when one contracts the other relaxes.',
    '**Storage is a sympathetic + somatic job.** As the bladder fills, the **sympathetic** nerves (hypogastric, T11–L2) relax the detrusor (β₃ receptors) and contract the internal sphincter (α₁); the **somatic** pudendal nerve (S2–4) keeps the **external sphincter** contracted under voluntary control. The bladder accommodates rising volume at low pressure (compliance). Mnemonic: **sympathetic Stores**.',
    '**Voiding is a parasympathetic reflex.** Bladder wall **stretch receptors** fire as volume rises; afferents reach the **sacral micturition centre (S2–4)** and the **pontine micturition centre (PMC)**. When voiding is permitted, the **parasympathetic** pelvic nerves (S2–4) contract the detrusor (M3, ACh) while both sphincters relax → coordinated emptying. Mnemonic: **parasympathetic Pees**.',
    '**The reflex is spinal but under voluntary (pontine/cortical) control.** The PMC coordinates detrusor contraction with sphincter relaxation; higher centres decide *when* it is socially appropriate, inhibiting the reflex until then. Toilet training is the maturation of this cortical control over an intrinsic spinal reflex.',
    '**Neurogenic bladder patterns follow the lesion level:** a **suprasacral spinal cord injury** (above S2, after spinal shock) → **spastic/reflex (upper motor neuron) bladder** — involuntary contractions, small capacity, often detrusor-sphincter dyssynergia; a **sacral/peripheral-nerve lesion** → **flaccid/atonic (lower motor neuron) bladder** — no reflex contraction, retention with **overflow incontinence**.',
  ],

  mechanism: {
    title: 'Sympathetic/somatic store; parasympathetic voids; pons coordinates',
    steps: [
      { id: 's1', label: 'Filling: sympathetic relaxes detrusor + shuts internal sphincter', emphasis: 'key' },
      { id: 's2', label: 'Somatic (pudendal) holds external sphincter closed (voluntary)', emphasis: 'key' },
      { id: 's3', label: 'Stretch receptors → sacral + pontine micturition centres' },
      { id: 's4', label: 'Voiding: parasympathetic (M3) contracts detrusor, sphincters relax', emphasis: 'key' },
      { id: 's5', label: 'Cortex/pons gate the reflex (voluntary continence)' },
    ],
  },

  examFindings: [
    { sign: 'Detrusor contraction on voiding', mechanism: 'Parasympathetic pelvic nerve, M3/ACh', significance: 'key' },
    { sign: 'External sphincter under voluntary control', mechanism: 'Somatic pudendal nerve (S2–4)', significance: 'key' },
    { sign: 'Small-capacity, overactive (spastic) bladder after cord injury', mechanism: 'Suprasacral (UMN) lesion — loss of cortical inhibition', significance: 'key' },
    { sign: 'Urinary retention with overflow incontinence', mechanism: 'Flaccid (LMN) atonic bladder — sacral/nerve lesion', significance: 'key' },
    { sign: 'Detrusor–sphincter dyssynergia', mechanism: 'Loss of pontine coordination (spinal lesion)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The nerve/receptor that contracts the detrusor to void', meaning: 'Parasympathetic pelvic nerve (M3, acetylcholine)' },
    { clue: 'The nerve controlling the external urethral sphincter', meaning: 'Somatic pudendal nerve (S2–4)' },
    { clue: 'The brainstem centre coordinating voiding', meaning: 'The pontine micturition centre (PMC)' },
    { clue: 'Bladder pattern after a lesion below the sacral cord', meaning: 'Flaccid/atonic (LMN) bladder with retention and overflow' },
  ],

  treatment: [
    { logic: 'Why micturition matters', detail: 'Antimuscarinics (M3 block) calm an overactive detrusor; cholinergics/catheterisation manage retention; α-blockers relax the bladder neck. The autonomic wiring parallels other visceral reflexes and the anatomy in [[lower-urinary-tract-histology]]. Retention and infection show up on [[urinalysis-physical-chemical]] and [[urine-microscopy-sediment]]; congenital outflow obstruction is in [[kub-congenital-anomalies]].' },
  ],

  mnemonics: [
    { hook: '"Sympathetic Stores, Parasympathetic Pees"', expansion: ['Sympathetic (hypogastric): detrusor relaxes, internal sphincter shuts', 'Parasympathetic (pelvic): detrusor contracts → void'] },
    { hook: 'Point-and-Shoot for erection/ejaculation has a cousin here: "Pee = Parasympathetic"', expansion: ['Pelvic parasympathetic S2–4 empties the bladder', 'Pudendal (somatic) = voluntary external sphincter'] },
  ],

  traps: [
    {
      questionCategory: 'Autonomic control of voiding',
      wrongInstinct: 'Sympathetic stimulation empties the bladder',
      rightAnswer: 'The PARASYMPATHETIC pelvic nerve (M3) contracts the detrusor to empty the bladder; SYMPATHETIC activity promotes STORAGE (relaxes detrusor, closes the internal sphincter)',
      why: 'It is the reverse of a "fight-or-flight empties everything" intuition: you would not want to urinate while running from danger, so sympathetic tone favours storage, parasympathetic favours voiding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Contraction of the detrusor muscle during voiding is mediated by:',
      options: [
        { id: 'a', text: 'Sympathetic fibres via β₃ receptors' },
        { id: 'b', text: 'Parasympathetic fibres via M3 muscarinic receptors' },
        { id: 'c', text: 'Somatic fibres of the pudendal nerve' },
        { id: 'd', text: 'Circulating adrenaline via α₁ receptors' },
      ],
      answerId: 'b',
      explanation: 'Parasympathetic pelvic nerves (S2–4) release acetylcholine onto M3 receptors, contracting the detrusor while the sphincters relax — the coordinated act of micturition. Sympathetic and somatic activity favour storage.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A lesion destroying the sacral micturition centre (S2–4) typically produces a bladder that is:',
      options: [
        { id: 'a', text: 'Small, spastic and overactive' },
        { id: 'b', text: 'Flaccid/atonic with urinary retention and overflow incontinence' },
        { id: 'c', text: 'Completely normal' },
        { id: 'd', text: 'Unable to be filled' },
      ],
      answerId: 'b',
      explanation: 'Loss of the sacral reflex arc (a lower motor neuron lesion) leaves the detrusor unable to contract, so the bladder becomes flaccid and distended — chronic retention with overflow incontinence. Suprasacral lesions instead cause a spastic, overactive bladder.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Micturition control', svg: MICTURITION_CONTROL, caption: 'Storage (sympathetic + somatic) vs voiding (parasympathetic), coordinated by the pontine micturition centre.' },
  ],
};

export default micturitionReflex;
