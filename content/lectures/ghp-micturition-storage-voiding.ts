import type { Lecture } from '../../lib/types';

export const ghpMicturitionStorageVoiding: Lecture = {
  id: 'ghp-micturition-storage-voiding',
  title: 'Micturition: Coordinating Storage & Voiding',
  system: 'renal',
  source: 'Ch 26 — The Urinary System: Functional Anatomy & Urine Formation',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 26 The Urinary System' },
    { kind: 'mechanism', label: 'Storage relaxes the bladder and closes the outlet' },
    { kind: 'exam', label: 'Retention can coexist with urine leakage' },
  ],
  highYield: [
    '**Urine formation is continuous; voiding is intermittent.** Ureteric smooth-muscle peristalsis conveys urine from the renal pelvis to the bladder, including against gravity. The oblique course of each ureter through the bladder wall helps resist reflux as bladder pressure rises. The urothelium provides a barrier while accommodating stretch. None of these transport functions requires the bladder to contract each time the kidneys form urine. Follow the upstream route in [[ghp-urinary-functional-anatomy]].',
    '**Storage requires a compliant reservoir with a competent outlet.** Detrusor accommodation allows substantial filling with a relatively small pressure increase over the normal storage range. Sympathetic hypogastric activity favours detrusor relaxation through beta-3 receptors and contraction of proximal outlet smooth muscle through alpha-1 receptors. Somatic pudendal activity contracts the striated external urethral sphincter through nicotinic receptors. The bladder neck and urethra contribute to outlet resistance; a distinct internal sphincter is most evident anatomically in males.',
    '**Voiding reverses the storage pattern and must coordinate both sides of the outlet.** Bladder-wall stretch afferents travel mainly through pelvic nerves to sacral pathways. When higher centres permit voiding, pontine circuitry coordinates pelvic parasympathetic activation with inhibition of sympathetic and pudendal outflow. Acetylcholine acting predominantly at M3 receptors contracts detrusor smooth muscle while urethral resistance falls. A strong bladder contraction against a closed external sphincter raises pressure but does not provide efficient emptying.',
    '**The sacral reflex is under higher control.** Pelvic parasympathetic and pudendal pathways involve S2–S4, but normal voluntary voiding also depends on communication with pontine and cerebral centres. Bladder sensation is not an exact volume meter: sensation, compliance, attention and disease change when urgency occurs. The simple division into sympathetic storage and parasympathetic voiding is useful, but actual continence also depends on pelvic-floor support and coordinated somatic control.',
    '**Localise the lesion before predicting bladder behaviour.** Suprapontine disease can reduce inhibition and produce urgency with relatively preserved sphincter coordination. A suprasacral spinal lesion may eventually cause detrusor overactivity with detrusor–sphincter dyssynergia; the acute spinal-shock period can instead cause retention. Sacral cord or peripheral nerve damage can impair detrusor contraction, causing a large residual volume and overflow leakage. These are physiological patterns rather than rules that replace individual urodynamic assessment.',
    '**Leakage does not prove that the bladder empties.** Stress leakage occurs when a transient rise in abdominal pressure exceeds outlet closure, while urgency leakage reflects failure to defer voiding, often associated with involuntary detrusor activity. Overflow leakage can accompany retention from obstruction or impaired detrusor contraction. In a pressure–flow study, low flow with high detrusor pressure suggests outlet resistance; low flow with weak detrusor pressure suggests impaired contraction. Detrusor pressure is vesical pressure minus abdominal pressure, so coughing alone should not be mistaken for a detrusor contraction.',
  ],
  mechanism: {
    title: 'Switching from a filling bladder to coordinated emptying',
    steps: [
      { id: 'v1', label: 'Bladder fills at relatively low pressure', detail: 'Accommodation and sympathetic storage mechanisms maintain a relaxed reservoir.' },
      { id: 'v2', label: 'Stretch afferents signal filling', detail: 'Pelvic afferents communicate with sacral and higher centres.' },
      { id: 'v3', label: 'Higher centres permit the voiding switch', detail: 'Pontine coordination links the bladder contraction to outlet relaxation.', emphasis: 'key' },
      { id: 'v4', label: 'Pelvic parasympathetic activity contracts detrusor', detail: 'M3-mediated contraction occurs as sympathetic and pudendal activity decrease.' },
      { id: 'v5', label: 'Low outlet resistance permits flow', detail: 'Effective emptying requires both adequate detrusor pressure and an open outlet.', emphasis: 'key' },
    ],
  },
  examFindings: [
    { sign: 'Leakage with coughing without a preceding urge', mechanism: 'Abdominal pressure can exceed urethral closure pressure when outlet support is insufficient.', significance: 'key' },
    { sign: 'A distended bladder with dribbling', mechanism: 'Overflow leakage can coexist with substantial urinary retention.', significance: 'key' },
    { sign: 'Retention immediately after spinal injury', mechanism: 'Acute spinal shock may suppress the reflex before a later pattern becomes apparent.' },
  ],
  investigations: [
    { clue: 'Post-void residual volume', meaning: 'Assesses emptying; a raised residual does not by itself distinguish outlet obstruction from weak detrusor contraction.' },
    { clue: 'Low flow with high detrusor pressure', meaning: 'Suggests increased outlet resistance, interpreted with the rest of the pressure–flow study.' },
    { clue: 'Vesical and abdominal pressures rise together during a cough', meaning: 'The pressure difference may remain unchanged; the event is not necessarily a detrusor contraction.' },
  ],
  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing storage failure from emptying failure explains why the same complaint of leakage can arise from different mechanisms.' },
    { logic: 'Where it is examined', detail: 'Predict the effects of pelvic, hypogastric and pudendal activity, then explain how an acute spinal lesion differs from a chronic suprasacral lesion.' },
  ],
  mnemonics: [{ hook: 'Store: relax the reservoir, close the outlet', expansion: ['Hypogastric: favours storage', 'Pudendal: contracts striated sphincter', 'Pelvic parasympathetic: contracts detrusor for voiding', 'Pontine coordination: opens the outlet as the bladder contracts'] }],
  traps: [
    { questionCategory: 'Autonomic receptors', wrongInstinct: 'Parasympathetic activation contracts the skeletal external sphincter.', rightAnswer: 'Pudendal somatic fibres contract the external sphincter; pelvic parasympathetic fibres contract detrusor.', why: 'Both use acetylcholine, but the target muscle and receptor differ.' },
    { questionCategory: 'Spinal injury', wrongInstinct: 'Every suprasacral lesion immediately produces an overactive bladder.', rightAnswer: 'Acute spinal shock can cause retention before chronic reflex changes emerge.', why: 'The level and timing of injury both matter.' },
  ],
  quiz: [
    { id: 'q1', stem: 'Which combination best describes normal bladder storage?', options: [{ id: 'a', text: 'Detrusor contraction and external sphincter relaxation' }, { id: 'b', text: 'Detrusor relaxation and external sphincter contraction' }, { id: 'c', text: 'Simultaneous maximal detrusor and external sphincter contraction' }, { id: 'd', text: 'Loss of all ureteric peristalsis' }], answerId: 'b', explanation: 'Storage requires a low-pressure compliant bladder and a closed outlet. Sympathetic and pudendal pathways support those functions.', tests: 'mechanism' },
    { id: 'q2', stem: 'Which nerve provides somatic motor control of the striated external urethral sphincter?', options: [{ id: 'a', text: 'Hypogastric' }, { id: 'b', text: 'Vagus' }, { id: 'c', text: 'Pudendal' }, { id: 'd', text: 'Phrenic' }], answerId: 'c', explanation: 'Pudendal fibres from S2–S4 activate nicotinic receptors on the striated external sphincter.', tests: 'mechanism' },
    { id: 'q3', stem: 'A pressure–flow study shows low urinary flow despite a strong rise in detrusor pressure. Which mechanism best fits?', options: [{ id: 'a', text: 'Increased outlet resistance' }, { id: 'b', text: 'Absence of any bladder contraction' }, { id: 'c', text: 'Complete loss of glomerular filtration' }, { id: 'd', text: 'A normally empty bladder with no fluid available' }], answerId: 'a', explanation: 'High detrusor pressure with low flow points toward an outlet that resists emptying. Low flow alone would not distinguish obstruction from weak contraction.', tests: 'investigation' },
    { id: 'q4', stem: 'A patient has dribbling urine and a large post-void residual. Which statement is correct?', options: [{ id: 'a', text: 'Leakage excludes urinary retention' }, { id: 'b', text: 'The residual proves the lesion is suprapontine' }, { id: 'c', text: 'Overflow leakage can accompany obstruction or detrusor underactivity' }, { id: 'd', text: 'The external sphincter must have no innervation' }], answerId: 'c', explanation: 'Overflow describes leakage from an inadequately emptied bladder. Further assessment is needed to distinguish outlet resistance from impaired detrusor contraction.', tests: 'mechanism' },
  ],
};

export default ghpMicturitionStorageVoiding;
