import type { Lecture } from '../../lib/types';
import { SLEEP_STAGES } from '../../lib/figures';

export const consciousnessAttention: Lecture = {
  id: 'consciousness-attention',
  title: 'Consciousness, Arousal & Attention',
  system: 'neuro',
  source: 'L16 — Integrative Functions of the Brain',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L16 Consciousness' },
    { kind: 'mechanism', label: 'Arousal + content' },
    { kind: 'exam', label: 'Coma, vegetative state, GCS' },
  ],

  highYield: [
    '**Consciousness has TWO components: AROUSAL (wakefulness — the "level" of consciousness) and AWARENESS (the CONTENT — thoughts, perception).** AROUSAL depends on the ASCENDING RETICULAR ACTIVATING SYSTEM (ARAS) in the brainstem projecting via the thalamus to the cortex ([[reticular-activating-system-consciousness]]); AWARENESS depends on the widespread CEREBRAL CORTEX and its networks.',
    '**This two-part model explains the disorders of consciousness. COMA = neither arousal nor awareness (eyes closed, unrousable) — from bilateral cortical/diencephalic damage or a brainstem ARAS lesion. A VEGETATIVE STATE = arousal WITHOUT awareness (sleep-wake cycles, eyes open, but no meaningful response) — cortex damaged, brainstem intact.** A MINIMALLY CONSCIOUS state shows inconsistent awareness.',
    '**Because arousal needs the brainstem ARAS + thalamus + cortex, coma requires EITHER a focal brainstem lesion OR diffuse bilateral hemispheric dysfunction — a single one-sided cortical lesion does NOT cause coma.** The GLASGOW COMA SCALE (GCS: Eye/Verbal/Motor, 3–15) grades depth of impaired consciousness at the bedside.',
    '**ATTENTION is the selective allocation of processing resources, involving a frontoparietal network (with the right hemisphere dominant for spatial attention — hence left neglect from right parietal lesions, [[higher-cortical-functions]]).** Reticular and thalamic (intralaminar) nuclei set the overall level on which selective attention operates.',
    '**The take-home: consciousness = AROUSAL (ARAS/brainstem→thalamus→cortex) + AWARENESS (cortex); coma = loss of both (brainstem OR bilateral cortex), vegetative = arousal without awareness; GCS grades it; attention is a frontoparietal (right-dominant) network.** The sleep–wake cycle uses the same arousal systems ([[sleep-circadian-rhythms]]); locked-in syndrome (aware but de-efferented) is the key mimic in HNS-2 ([[disorders-of-consciousness]]).',
  ],

  mechanism: {
    title: 'Consciousness = arousal (ARAS→thalamus→cortex) + awareness (cortex); coma vs vegetative; GCS grades it',
    steps: [
      { id: 's1', label: 'Consciousness = AROUSAL (level) + AWARENESS (content)', emphasis: 'key' },
      { id: 's2', label: 'Arousal = ARAS (brainstem) → thalamus → cortex; awareness = cortex', emphasis: 'key' },
      { id: 's3', label: 'Coma = loss of both (brainstem ARAS OR bilateral cortex)', emphasis: 'danger' },
      { id: 's4', label: 'Vegetative = arousal WITHOUT awareness (cortex out, brainstem intact)', emphasis: 'key' },
      { id: 's5', label: 'GCS (E/V/M, 3–15) grades depth; attention = frontoparietal (right-dominant)' },
    ],
  },

  examFindings: [
    { sign: 'Unrousable, eyes closed, no sleep-wake cycle', mechanism: 'Coma (loss of arousal and awareness)', significance: 'key' },
    { sign: 'Eyes open with sleep-wake cycles but no awareness', mechanism: 'Vegetative state (arousal without awareness)', significance: 'key' },
    { sign: 'Coma from a small brainstem lesion', mechanism: 'ARAS interruption', significance: 'key' },
    { sign: 'No coma from a single unilateral cortical stroke', mechanism: 'Arousal preserved (needs bilateral/brainstem damage for coma)', significance: 'key' },
    { sign: 'Bedside score of eye/verbal/motor responses (3–15)', mechanism: 'Glasgow Coma Scale (depth of impaired consciousness)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two components of consciousness', meaning: 'Arousal (level) and awareness (content)' },
    { clue: 'The system responsible for arousal', meaning: 'The ascending reticular activating system (via the thalamus)' },
    { clue: 'The state of arousal without awareness', meaning: 'The vegetative state' },
    { clue: 'The bedside scale grading consciousness', meaning: 'The Glasgow Coma Scale (E/V/M, 3–15)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Separating arousal from awareness explains and distinguishes coma, vegetative and minimally conscious states, and tells you that coma requires brainstem (ARAS) or bilateral hemispheric failure — a crucial localisation and prognostic point graded by the GCS. Arousal rests on the ARAS ([[reticular-activating-system-consciousness]]) and the sleep systems ([[sleep-circadian-rhythms]]); attention connects to neglect ([[higher-cortical-functions]]); the clinical differential (locked-in, brain death) is in HNS-2 ([[disorders-of-consciousness]]).' },
  ],

  mnemonics: [
    { hook: 'Consciousness = "Arousal (brainstem) + Awareness (cortex)"', expansion: ['Coma = lose both', 'Vegetative = arousal only'] },
    { hook: 'Coma needs "brainstem OR both hemispheres" — one cortex isn\'t enough', expansion: ['ARAS lesion → coma', 'GCS grades depth'] },
  ],

  traps: [
    {
      questionCategory: 'What is required to produce coma',
      wrongInstinct: 'A single large one-sided cerebral (cortical) stroke will render a patient comatose',
      rightAnswer: 'Sustained coma requires EITHER a brainstem lesion interrupting the ARAS OR DIFFUSE, BILATERAL hemispheric dysfunction — a single unilateral cortical lesion, however large, does NOT by itself abolish arousal (though mass effect/herniation compressing the brainstem can secondarily cause coma)',
      why: 'Because arousal depends on the brainstem ARAS and both hemispheres, isolated one-sided cortical damage impairs content on one side but preserves wakefulness; genuine coma points to the brainstem or bilateral/global failure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient shows sleep-wake cycles and opens their eyes spontaneously but has no awareness of self or environment and makes no purposeful responses. This describes:',
      options: [
        { id: 'a', text: 'Coma' },
        { id: 'b', text: 'A vegetative state (arousal without awareness)' },
        { id: 'c', text: 'Locked-in syndrome' },
        { id: 'd', text: 'Brain death' },
      ],
      answerId: 'b',
      explanation: 'A vegetative state is arousal WITHOUT awareness: the brainstem (arousal) is intact, giving sleep-wake cycles and eye opening, but widespread cortical damage abolishes awareness. Coma lacks both arousal and awareness; locked-in patients are fully aware but de-efferented.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Sustained coma requires damage to:',
      options: [
        { id: 'a', text: 'Any single cortical area' },
        { id: 'b', text: 'The brainstem reticular activating system OR both cerebral hemispheres diffusely' },
        { id: 'c', text: 'The cerebellum' },
        { id: 'd', text: 'One optic tract' },
      ],
      answerId: 'b',
      explanation: 'Arousal depends on the ascending reticular activating system projecting through the thalamus to both hemispheres, so coma requires either a brainstem ARAS lesion or diffuse bilateral hemispheric dysfunction — a single unilateral cortical lesion alone does not abolish consciousness.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Arousal and the sleep–wake continuum', svg: SLEEP_STAGES, caption: 'The arousal system that underlies wakefulness and the sleep stages; loss of arousal underlies coma.' },
  ],
};

export default consciousnessAttention;
