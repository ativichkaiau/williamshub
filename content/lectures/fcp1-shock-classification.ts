import type { Lecture } from '../../lib/types';

export const fcp1ShockClassification: Lecture = {
  id: 'fcp1-shock-classification',
  title: 'Shock: Classification & Haemodynamic Profiles',
  system: 'clinical',
  source: 'L9 — Shock & Syncope',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L9 Shock & Syncope' },
    { kind: 'disease', label: 'Four shock types' },
    { kind: 'mechanism', label: 'Preload · CO · SVR grid' },
    { kind: 'investigation', label: 'Lactate · CVP' },
  ],

  highYield: [
    '**Shock is circulatory failure causing inadequate tissue perfusion and oxygen delivery — cellular hypoxia — NOT simply a low blood pressure.** A patient can be in compensated shock while still normotensive, so recognition rests on perfusion, not the cuff. Management follows in → [[fcp1-shock-management]].',
    '**Four types: hypovolemic, cardiogenic, obstructive, distributive.** **Hypovolemic** (haemorrhage → [[fcp1-gi-bleed-management]], GI losses, burns) = low preload → low cardiac output, high SVR (cold). **Cardiogenic** (MI, arrhythmia, valve failure) = pump failure → low output, high SVR, high filling pressures (cold, congested).',
    '**Obstructive** (massive PE, tension pneumothorax, cardiac tamponade → [[fcp1-chest-pain-differential]]) = mechanical block to filling or output → low output, HIGH central venous pressure, distended neck veins — and each cause is rapidly **reversible if decompressed**. **Distributive** (septic → [[fcp1-fever-approach-differential]], anaphylactic, neurogenic) = pathological vasodilation → LOW SVR with a high or normal output (warm early).',
    '**Read the haemodynamic grid:** SVR is high in every type EXCEPT distributive (low); cardiac output is low in every type EXCEPT distributive (high/normal); preload/filling is low in hypovolemic and distributive but high in cardiogenic and obstructive. This lets you separate warm from cold shock at the bedside.',
    '**Two special cues:** early **distributive shock is warm and bounding** (vasodilated), whereas the others are **cold and clamped** (vasoconstricted); and **neurogenic shock is hypotension WITH bradycardia** after spinal injury (loss of sympathetic tone) — a distributive subtype that breaks the usual reflex tachycardia rule.',
  ],

  mechanism: {
    title: 'The four types and their haemodynamics',
    steps: [
      { id: 's1', label: 'Shock = perfusion/oxygen-delivery failure, not just low BP', emphasis: 'key' },
      { id: 's2', label: 'Hypovolemic: low preload → low CO, high SVR (cold)', emphasis: 'normal' },
      { id: 's3', label: 'Cardiogenic: pump failure → low CO, high SVR, high filling (cold, congested)', emphasis: 'normal' },
      { id: 's4', label: 'Obstructive: PE/tamponade/tension pneumothorax → low CO, high CVP', emphasis: 'danger' },
      { id: 's5', label: 'Distributive: low SVR → warm, high/normal CO (sepsis, anaphylaxis)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cold, clammy skin with collapsed peripheral veins', mechanism: 'Vasoconstriction in hypovolemic or cardiogenic shock', significance: 'key' },
    { sign: 'Warm, flushed, bounding pulses early', mechanism: 'Vasodilation in distributive/septic shock', significance: 'key' },
    { sign: 'Distended neck veins with hypotension', mechanism: 'Obstructive or cardiogenic shock (high filling pressure)', significance: 'key' },
    { sign: 'Hypotension with bradycardia after spinal injury', mechanism: 'Neurogenic shock — lost sympathetic tone', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Raised serum lactate', meaning: 'Global hypoperfusion — present in all shock types, tracks severity' },
    { clue: 'Low central venous pressure with high SVR', meaning: 'Hypovolemic shock' },
    { clue: 'High central venous pressure with pulmonary oedema', meaning: 'Cardiogenic shock' },
    { clue: 'High central venous pressure with clear lungs and obstruction signs', meaning: 'Obstructive shock (tamponade, PE, tension pneumothorax)' },
  ],

  treatment: [
    { logic: 'Classify first, because the type dictates the therapy', detail: 'Volume for hypovolemic/distributive, decompression for obstructive, and pump support for cardiogenic — the detail is covered in → [[fcp1-shock-management]].' },
  ],

  mnemonics: [
    { hook: 'Warm shock = distributive (low SVR); cold shock = the other three', expansion: ['SVR low ONLY in distributive', 'Neck veins up in obstructive/cardiogenic, down in hypovolemic/distributive'] },
  ],

  traps: [
    {
      questionCategory: 'Defining shock',
      wrongInstinct: 'The blood pressure is normal, so the patient is not in shock',
      rightAnswer: 'Shock is inadequate tissue perfusion; compensated shock can be normotensive — look at lactate, mentation, skin and urine output',
      why: 'Relying on blood pressure alone misses early shock, when intervention is most effective.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with fever is hypotensive but warm and flushed with bounding pulses and brisk capillary refill. The haemodynamic profile is best described as:',
      options: [
        { id: 'a', text: 'Low systemic vascular resistance with high or normal cardiac output' },
        { id: 'b', text: 'High systemic vascular resistance with low cardiac output' },
        { id: 'c', text: 'High central venous pressure with pulmonary oedema' },
        { id: 'd', text: 'Low preload with high resistance and cold peripheries' },
      ],
      answerId: 'a',
      explanation: 'Warm, flushed peripheries with bounding pulses in a septic patient indicate distributive shock: pathological vasodilation lowers systemic vascular resistance while cardiac output is high or normal early on.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which finding best distinguishes cardiogenic from hypovolemic shock at the bedside?',
      options: [
        { id: 'a', text: 'Cool clammy skin' },
        { id: 'b', text: 'A raised jugular venous pressure' },
        { id: 'c', text: 'Tachycardia' },
        { id: 'd', text: 'A raised lactate' },
      ],
      answerId: 'b',
      explanation: 'Cold skin, tachycardia and raised lactate occur in both. A raised JVP (high filling pressure) points to cardiogenic (or obstructive) shock, whereas hypovolemic shock has a low JVP from reduced preload.',
      tests: 'exam',
    },
  ],
};

export default fcp1ShockClassification;
