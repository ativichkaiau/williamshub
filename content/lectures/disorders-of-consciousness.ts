import type { Lecture } from '../../lib/types';

export const disordersOfConsciousness: Lecture = {
  id: 'disorders-of-consciousness',
  title: 'Disorders of Consciousness',
  system: 'neuro',
  source: 'L12 — Cognition & Consciousness',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L12 Cognition & Consciousness' },
    { kind: 'disease', label: 'Coma' },
    { kind: 'mechanism', label: 'Arousal vs awareness' },
    { kind: 'exam', label: 'AOC approach' },
  ],

  highYield: [
    'Consciousness = **arousal (level; the ARAS/brainstem) + awareness (content; the cortex)**. Levels: **alert → drowsy → stuporous → coma**.',
    'To alter consciousness, a lesion must hit the **brainstem ARAS, both diencephalons, or both/diffuse cerebral hemispheres** — a single unilateral hemisphere lesion alone does not cause coma.',
    'Bedside exam of the unresponsive patient = **“C-P-O-M-R”: Consciousness, Pupils, Ocular movements, Motor response, Respiratory pattern** — these localize the lesion (e.g. a **fixed dilated pupil → midbrain/CN III**).',
    'Causes split into **intracranial** (brainstem lesion, diffuse cortical injury/hypoxia, multifocal, or focal lesion with herniation) vs **extracranial** (metabolic, drugs/toxins).',
    'Triage by signs: **AOC without focal signs or neck stiffness → toxic-metabolic/anoxic/post-ictal**; **AOC with neck stiffness → meningitis or subarachnoid hemorrhage**; **AOC with focal signs → stroke, abscess, tumor, or trauma**.',
  ],

  mechanism: {
    title: 'Localize the lesion, then find the cause',
    steps: [
      { id: 's1', label: 'Arousal (ARAS) or awareness (cortex) impaired', emphasis: 'key' },
      { id: 's2', label: 'C-P-O-M-R exam localizes the level' },
      { id: 's3', label: 'Intracranial (structural) vs extracranial (metabolic/toxic)' },
      { id: 's4', label: 'Focal signs / neck stiffness sort the differential', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fixed dilated pupil', mechanism: 'Midbrain / CN III dysfunction (e.g. uncal herniation)', significance: 'key' },
    { sign: 'Neck stiffness with reduced consciousness', mechanism: 'Meningitis or subarachnoid hemorrhage', significance: 'key' },
    { sign: 'Symmetric exam, no focal signs', mechanism: 'Toxic-metabolic encephalopathy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Bedside glucose + vitals; C-P-O-M-R exam', meaning: 'Rapidly reversible causes; localization' },
    { clue: 'CT head; LP if meningism (after imaging)', meaning: 'Structural lesion; meningitis/SAH' },
    { clue: 'Metabolic panel, ammonia, toxicology, EEG', meaning: 'Metabolic/toxic; non-convulsive seizures' },
  ],

  treatment: [
    { logic: 'Stabilize airway; correct glucose/oxygen; thiamine before glucose if at risk', detail: 'Reverse the treatable immediately.' },
    { logic: 'Treat by category (surgical, antimicrobial, metabolic)', detail: 'Guided by the triage triad.' },
  ],

  mnemonics: [
    { hook: 'Consciousness = Arousal (ARAS) + Awareness (cortex)', expansion: ['Coma needs brainstem or bilateral hemispheres'] },
    { hook: 'AOC triage: none / neck stiff / focal → metabolic / meningitis-SAH / structural', expansion: ['Directs imaging & LP'] },
  ],

  traps: [
    {
      questionCategory: 'What produces coma',
      wrongInstinct: 'Any large stroke in one hemisphere will render a patient comatose',
      rightAnswer: 'Coma requires the brainstem ARAS or bilateral hemispheric involvement; a unilateral hemispheric lesion causes coma only if it produces mass effect that compresses the brainstem',
      why: 'Wakefulness depends on the ascending reticular activating system projecting bilaterally, so one hemisphere can be damaged without coma unless herniation secondarily involves the brainstem.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A febrile patient with reduced consciousness has marked neck stiffness but no focal neurological deficit. The most appropriate initial concern is:',
      options: [
        { id: 'a', text: 'Toxic-metabolic encephalopathy' },
        { id: 'b', text: 'Meningitis or subarachnoid hemorrhage' },
        { id: 'c', text: 'Ischemic stroke' },
        { id: 'd', text: 'Brain tumor' },
      ],
      answerId: 'b',
      explanation: 'Altered consciousness with neck stiffness points to meningeal irritation — meningitis or subarachnoid hemorrhage — mandating urgent imaging and lumbar puncture.',
      tests: 'exam',
    },
  ],
};

export default disordersOfConsciousness;
