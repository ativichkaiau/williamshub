import type { Lecture } from '../../lib/types';
import { SLEEP_STAGES } from '../../lib/figures';

export const reticularActivatingSystemConsciousness: Lecture = {
  id: 'reticular-activating-system-consciousness',
  title: 'Reticular Activating System & Consciousness',
  system: 'neuro',
  source: 'L1 — Reticular Activating System, Sleep & Circadian Rhythms',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L1 RAS & Sleep' },
    { kind: 'mechanism', label: 'Ascending arousal' },
    { kind: 'exam', label: 'Coma' },
  ],

  highYield: [
    '**Consciousness has two components: AROUSAL (wakefulness — being awake) and AWARENESS (content of thought).** Arousal is maintained by the ASCENDING RETICULAR ACTIVATING SYSTEM (ARAS) — a network in the brainstem reticular formation that projects (via the thalamus and hypothalamus) to activate the entire cortex.',
    '**The ARAS runs from the upper pons/midbrain reticular formation → thalamic intralaminar nuclei and hypothalamus → diffuse cortex.** It uses arousal neurotransmitters — acetylcholine, noradrenaline, serotonin, histamine and orexin — to keep the cortex "switched on." This is why antihistamines (blocking arousal histamine) cause drowsiness.',
    '**Because arousal depends on this system, COMA results from either (1) bilateral diffuse cortical/hemispheric damage, or (2) damage to the ARAS in the upper brainstem/thalamus.** A small strategic brainstem lesion can abolish consciousness, whereas awareness (content) requires widespread cortical function — the anatomical basis for the coma exam.',
    '**Disorders of consciousness form a spectrum: coma (no arousal, no awareness) → vegetative state (arousal WITHOUT awareness — sleep-wake cycles but no purposeful response) → minimally conscious state → normal.** Brain death is the irreversible loss of ALL brainstem function (including the ARAS and brainstem reflexes).',
    '**Assessment uses the Glasgow Coma Scale (eye, verbal, motor) and brainstem reflexes (pupillary, corneal, oculocephalic, gag).** The take-home: arousal = ARAS (brainstem→thalamus→cortex); awareness = cortex; consciousness needs both. Clinical coma/vegetative states are covered in HNS-2 ([[disorders-of-consciousness]]); the sleep–wake cycle is [[sleep-circadian-rhythms]].',
  ],

  mechanism: {
    title: 'ARAS (brainstem→thalamus→cortex) drives arousal; cortex provides awareness',
    steps: [
      { id: 's1', label: 'Consciousness = AROUSAL (wakefulness) + AWARENESS (content)', emphasis: 'key' },
      { id: 's2', label: 'ARAS: reticular formation → thalamus/hypothalamus → diffuse cortex', emphasis: 'key' },
      { id: 's3', label: 'Arousal transmitters: ACh, noradrenaline, serotonin, histamine, orexin' },
      { id: 's4', label: 'Coma = bilateral cortex OR ARAS (brainstem/thalamus) damage', emphasis: 'danger' },
      { id: 's5', label: 'Spectrum: coma → vegetative (arousal, no awareness) → minimally conscious' },
    ],
  },

  examFindings: [
    { sign: 'Loss of consciousness from a small upper-brainstem lesion', mechanism: 'ARAS damage abolishes arousal', significance: 'key' },
    { sign: 'Sleep–wake cycles but no awareness/purposeful response', mechanism: 'Vegetative state (arousal without awareness)', significance: 'key' },
    { sign: 'Drowsiness from an antihistamine', mechanism: 'Blockade of arousal-promoting histamine', significance: 'supportive' },
    { sign: 'Coma from bilateral hemispheric injury', mechanism: 'Diffuse cortical dysfunction', significance: 'key' },
    { sign: 'Irreversible loss of all brainstem reflexes', mechanism: 'Brain death', significance: 'key' },
  ],

  investigations: [
    { clue: 'The two components of consciousness', meaning: 'Arousal (wakefulness) and awareness (content)' },
    { clue: 'The system maintaining arousal/wakefulness', meaning: 'The ascending reticular activating system (ARAS)' },
    { clue: 'The two lesion patterns that cause coma', meaning: 'Bilateral cortical damage OR ARAS (brainstem/thalamic) damage' },
    { clue: 'The state of arousal without awareness', meaning: 'Vegetative state' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The ARAS is why consciousness can be lost from a small brainstem lesion (not just massive cortical damage) — the anatomical basis of the coma exam and of clinical disorders of consciousness ([[disorders-of-consciousness]] in HNS-2). It links to the sleep–wake control of [[sleep-circadian-rhythms]] and the brainstem anatomy of [[brainstem-anatomy-organization]]; arousal neurotransmitters connect to [[cns-neurotransmission-systems]].' },
  ],

  mnemonics: [
    { hook: 'Consciousness = "Arousal (ARAS/brainstem) + Awareness (cortex)"', expansion: ['Coma = ARAS or bilateral cortex', 'Vegetative = arousal without awareness'] },
    { hook: 'ARAS transmitters keep you awake: ACh, NA, 5-HT, histamine, orexin', expansion: ['Antihistamine → drowsy', 'Orexin loss → narcolepsy'] },
  ],

  traps: [
    {
      questionCategory: 'Why a small brainstem lesion can cause coma',
      wrongInstinct: 'Coma always requires extensive damage to both cerebral hemispheres',
      rightAnswer: 'Coma can result from EITHER bilateral diffuse cortical damage OR a focal lesion of the ARAS in the upper brainstem/thalamus — because arousal depends on the small but critical ascending reticular activating system, a strategic brainstem lesion abolishes consciousness',
      why: 'The ARAS concentrates arousal control in a small brainstem/thalamic pathway, so localised damage there is as devastating for consciousness as widespread cortical injury.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Wakefulness (arousal) is maintained primarily by the:',
      options: [
        { id: 'a', text: 'Cerebellum' },
        { id: 'b', text: 'Ascending reticular activating system (ARAS)' },
        { id: 'c', text: 'Basal ganglia' },
        { id: 'd', text: 'Primary visual cortex' },
      ],
      answerId: 'b',
      explanation: 'The ascending reticular activating system, running from the brainstem reticular formation through the thalamus to the cortex, maintains arousal/wakefulness. Awareness (content) additionally requires widespread cortical function.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient has preserved sleep–wake cycles (eyes open at times) but no awareness of self or environment and no purposeful responses. This describes a:',
      options: [
        { id: 'a', text: 'Coma' },
        { id: 'b', text: 'Vegetative state (arousal without awareness)' },
        { id: 'c', text: 'Brain death' },
        { id: 'd', text: 'Normal conscious state' },
      ],
      answerId: 'b',
      explanation: 'A vegetative state features arousal (sleep–wake cycles, eye opening) via a functioning ARAS but no awareness because of widespread cortical dysfunction. Coma has neither arousal nor awareness; brain death is loss of all brainstem function.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Arousal, sleep & circadian rhythm', svg: SLEEP_STAGES, caption: 'The reticular activating system maintaining consciousness, plus sleep stages and circadian control.' },
  ],
};

export default reticularActivatingSystemConsciousness;
