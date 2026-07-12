import type { Lecture } from '../../lib/types';

export const fcp1DyspneaDifferential: Lecture = {
  id: 'fcp1-dyspnea-differential',
  title: 'Dyspnoea — Differential Diagnosis',
  system: 'clinical',
  source: 'L12 — Dyspnea & Cyanosis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L12 Dyspnea & Cyanosis' },
    { kind: 'disease', label: 'HF · PE · pneumonia · COPD' },
    { kind: 'mechanism', label: 'Cardiac vs pulmonary vs other' },
    { kind: 'investigation', label: 'CXR · BNP · D-dimer' },
  ],

  highYield: [
    'Organise the differential by system. **Pulmonary:** asthma and COPD (wheeze), pneumonia (fever, focal crackles), **PE** (pleuritic, hypoxia, risk factors), **pneumothorax** (sudden, unilateral) and pleural effusion. The approach is in [[fcp1-dyspnea-approach]].',
    '**Cardiac: heart failure** (orthopnoea, PND, raised JVP, S3, bibasal crackles), ACS, arrhythmia, valvular disease and cardiac tamponade.',
    '**"Other" — do not forget: anaemia** (see [[fcp1-anemia-classification]]), **metabolic acidosis** (Kussmaul breathing in DKA), anxiety and hyperventilation, and neuromuscular weakness.',
    '**Cannot-miss acute causes: PE, tension pneumothorax, acute pulmonary oedema, severe asthma or COPD, and anaphylaxis** — these overlap the lethal chest-pain causes in [[fcp1-chest-pain-differential]].',
    '**Discriminators:** wheeze → obstructive; orthopnoea and PND → cardiac; unilateral absent breath sounds → pneumothorax; clear lungs with hypoxia and tachycardia → PE; pallor with a normal chest → anaemia.',
  ],

  mechanism: {
    title: 'System buckets → discriminators → cannot-miss',
    steps: [
      { id: 's1', label: 'Pulmonary: asthma/COPD, pneumonia, PE, pneumothorax', emphasis: 'key' },
      { id: 's2', label: 'Cardiac: heart failure, ACS, arrhythmia, tamponade', emphasis: 'key' },
      { id: 's3', label: 'Other: anaemia, metabolic acidosis, anxiety', emphasis: 'normal' },
      { id: 's4', label: 'Cannot-miss: PE, tension pneumo, pulmonary oedema, anaphylaxis', emphasis: 'danger' },
      { id: 's5', label: 'Wheeze / orthopnoea / unilateral / clear-lungs discriminate', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Orthopnoea, PND, raised JVP, an S3 and bibasal crackles', mechanism: 'Left heart failure', significance: 'key' },
    { sign: 'Unilateral absent breath sounds with hyperresonance', mechanism: 'Pneumothorax', significance: 'key' },
    { sign: 'Clear lungs with hypoxia, tachycardia and a swollen calf', mechanism: 'Pulmonary embolism', significance: 'key' },
    { sign: 'Pallor with a normal respiratory examination', mechanism: 'Anaemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Focal consolidation on CXR with fever and productive cough', meaning: 'Pneumonia' },
    { clue: 'Bilateral congestion and cardiomegaly with a raised BNP', meaning: 'Heart failure (pulmonary oedema)' },
    { clue: 'Hypoxia with a clear CXR and a raised D-dimer', meaning: 'Pulmonary embolism → CT pulmonary angiogram' },
    { clue: 'Low haemoglobin with a normal chest', meaning: 'Anaemia as the cause → see [[fcp1-anemia-approach-workup]]' },
  ],

  treatment: [
    { logic: 'Match the therapy to the bucket', detail: 'Bronchodilators and steroids for obstruction, antibiotics for pneumonia, diuresis and nitrates for pulmonary oedema, anticoagulation for PE.' },
    { logic: 'Do not miss the non-pulmonary causes', detail: 'Check haemoglobin and glucose or ABG — anaemia and metabolic acidosis cause breathlessness with a clear chest.' },
  ],

  mnemonics: [
    { hook: 'Dyspnoea buckets: Pulmonary, Cardiac, Other (anaemia, metabolic, anxiety)', expansion: ['Wheeze = obstructive', 'Orthopnoea = cardiac', 'Clear lungs + hypoxia = PE'] },
  ],

  traps: [
    {
      questionCategory: 'Breathlessness with a clear chest',
      wrongInstinct: 'Attribute dyspnoea with a normal chest exam and CXR to anxiety',
      rightAnswer: 'Clear lungs with hypoxia is PE until excluded; a clear chest with pallor is anaemia',
      why: 'PE and anaemia both cause breathlessness with an unremarkable chest — anxiety is a diagnosis of exclusion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 70-year-old has orthopnoea, paroxysmal nocturnal dyspnoea, a raised JVP, an S3 and bibasal crackles. The most likely cause of the dyspnoea is:',
      options: [
        { id: 'a', text: 'Asthma' },
        { id: 'b', text: 'Left heart failure' },
        { id: 'c', text: 'Pneumothorax' },
        { id: 'd', text: 'Anxiety' },
      ],
      answerId: 'b',
      explanation: 'Orthopnoea, PND, a raised JVP, an S3 and bibasal crackles are the classic signs of left heart failure with pulmonary congestion.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A young woman is breathless with SpO2 89%, HR 120, clear lungs, a clear CXR and a swollen left calf. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Pulmonary embolism' },
        { id: 'b', text: 'Community-acquired pneumonia' },
        { id: 'c', text: 'Panic attack' },
        { id: 'd', text: 'Large pleural effusion' },
      ],
      answerId: 'a',
      explanation: 'Hypoxia and tachycardia with clear lungs, a clear CXR and a swollen calf are typical of pulmonary embolism.',
      tests: 'disease',
    },
  ],
};

export default fcp1DyspneaDifferential;
