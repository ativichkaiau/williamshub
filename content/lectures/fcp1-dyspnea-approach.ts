import type { Lecture } from '../../lib/types';

export const fcp1DyspneaApproach: Lecture = {
  id: 'fcp1-dyspnea-approach',
  title: 'Dyspnoea — Approach & Initial Assessment',
  system: 'clinical',
  source: 'L12 — Dyspnea & Cyanosis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L12 Dyspnea & Cyanosis' },
    { kind: 'mechanism', label: 'Acute vs chronic · by system' },
    { kind: 'investigation', label: 'SpO2 · ABG · CXR' },
    { kind: 'disease', label: 'Respiratory failure' },
  ],

  highYield: [
    '**Dyspnoea** is the subjective sensation of breathlessness. First split by **tempo — acute (minutes to hours) versus chronic (weeks to months)** — an acute onset flags the emergencies. The causes are laid out in [[fcp1-dyspnea-differential]].',
    'Then split by **system: cardiac** (heart failure, ACS, arrhythmia), **pulmonary** (asthma/COPD, pneumonia, PE, pneumothorax) and **other** (anaemia, metabolic acidosis, anxiety, neuromuscular weakness).',
    '**Immediate assessment:** ABC, **SpO2 and oxygen**, respiratory rate, ability to speak in full sentences, and signs of tiring — a "silent chest", a rising CO2 or exhaustion signals impending respiratory failure.',
    '**Bedside clues:** orthopnoea and PND with a raised JVP → cardiac; wheeze → obstructive; focal crackles with fever → pneumonia; sudden pleuritic breathlessness → PE or pneumothorax. Cyanosis is a late sign — see [[fcp1-cyanosis]].',
    '**First-line tests:** SpO2, ECG, CXR, ABG, and targeted bloods (troponin, BNP, D-dimer, haemoglobin); there is heavy overlap with chest pain — see [[fcp1-chest-pain-differential]].',
  ],

  mechanism: {
    title: 'Tempo → system → severity → first tests',
    steps: [
      { id: 's1', label: 'Acute vs chronic onset (acute = emergencies)', emphasis: 'key' },
      { id: 's2', label: 'Cardiac vs pulmonary vs other (anaemia, metabolic)', emphasis: 'key' },
      { id: 's3', label: 'Work of breathing, sentences, SpO2', emphasis: 'key' },
      { id: 's4', label: 'Silent chest / rising CO2 / exhaustion = failure', emphasis: 'danger' },
      { id: 's5', label: 'SpO2, ECG, CXR, ABG, targeted bloods', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Raised JVP, orthopnoea, bibasal crackles and an S3', mechanism: 'Cardiac cause (heart failure)', significance: 'key' },
    { sign: 'Widespread wheeze with prolonged expiration', mechanism: 'Obstructive airway disease (asthma/COPD)', significance: 'key' },
    { sign: 'Unilateral absent breath sounds with hyperresonance', mechanism: 'Pneumothorax', significance: 'key' },
    { sign: 'Silent chest, exhaustion, cyanosis and drowsiness', mechanism: 'Impending respiratory failure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low SpO2 with hypoxaemia on the ABG', meaning: 'Confirms impaired gas exchange and guides oxygen therapy' },
    { clue: 'Raised BNP with cardiomegaly and congestion on CXR', meaning: 'Cardiac failure as the cause' },
    { clue: 'Normal CXR with hypoxia and tachycardia', meaning: 'Pulmonary embolism → CT pulmonary angiogram' },
    { clue: 'Rising PaCO2 with a falling pH on the ABG', meaning: 'Type 2 respiratory failure — consider ventilatory support' },
  ],

  treatment: [
    { logic: 'Stabilise before you diagnose', detail: 'Oxygen to a target saturation, sit the patient up, secure airway and breathing and monitor while the cause is narrowed.' },
    { logic: 'Treat the emergency you find', detail: 'Bronchodilators for obstruction, decompression for tension pneumothorax, diuresis for pulmonary oedema — therapy becomes cause-directed once the diagnosis is clear.' },
  ],

  mnemonics: [
    { hook: 'Dyspnoea: Tempo, then System, then Severity', expansion: ['Acute onset = emergencies', 'Cardiac vs pulmonary vs other', 'Silent chest = danger'] },
  ],

  traps: [
    {
      questionCategory: 'Severity of acute asthma',
      wrongInstinct: 'A quieter chest with less wheeze means the asthma attack is improving',
      rightAnswer: 'A silent chest in an exhausted asthmatic signals life-threatening airflow limitation — escalate urgently',
      why: 'No air movement means no wheeze; reduced breath sounds can mean deterioration, not recovery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with acute severe asthma becomes drowsy, with a silent chest and a rising PaCO2. This picture indicates:',
      options: [
        { id: 'a', text: 'The attack is resolving' },
        { id: 'b', text: 'Life-threatening asthma with impending respiratory failure' },
        { id: 'c', text: 'An anxiety attack' },
        { id: 'd', text: 'A simple pneumothorax' },
      ],
      answerId: 'b',
      explanation: 'A silent chest, exhaustion and a rising (normalising then high) PaCO2 in acute asthma mark life-threatening airflow limitation and impending respiratory failure.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which bedside finding most strongly suggests a cardiac rather than a pulmonary cause of dyspnoea?',
      options: [
        { id: 'a', text: 'Widespread wheeze' },
        { id: 'b', text: 'Raised JVP with orthopnoea and an S3' },
        { id: 'c', text: 'Focal bronchial breathing' },
        { id: 'd', text: 'A hyperresonant hemithorax' },
      ],
      answerId: 'b',
      explanation: 'A raised JVP with orthopnoea and a third heart sound points to cardiac failure; wheeze, bronchial breathing and hyperresonance are pulmonary signs.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1DyspneaApproach;
