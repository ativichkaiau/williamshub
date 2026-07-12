import type { Lecture } from '../../lib/types';

export const fcp1HemoptysisApproach: Lecture = {
  id: 'fcp1-hemoptysis-approach',
  title: 'Approach to Hemoptysis',
  system: 'clinical',
  source: 'L13 — Cough & Hemoptysis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L13 Cough & Hemoptysis' },
    { kind: 'disease', label: 'TB · bronchiectasis · cancer · PE' },
    { kind: 'mechanism', label: 'Hemoptysis vs haematemesis' },
    { kind: 'investigation', label: 'CXR · CT · bronchoscopy' },
  ],

  highYield: [
    '**Hemoptysis** is blood coughed up from the **lower respiratory tract, below the vocal cords** — first confirm it is not **haematemesis** ([[fcp1-gi-bleed-upper]]) or **pseudohemoptysis** from the nasopharynx.',
    'Discriminators from haematemesis: hemoptysis is **bright red and frothy**, **alkaline**, **mixed with sputum**, and **preceded by coughing**; haematemesis is **dark or coffee-ground**, **acidic**, contains **food particles**, and comes with **nausea and later melena** ([[fcp1-nausea-vomiting]]).',
    'Common causes: **bronchitis and bronchiectasis**, **tuberculosis** (think of it first in endemic areas), **bronchogenic carcinoma** (smoker, weight loss), and **pulmonary embolism/infarction** ([[fcp1-chest-pain-differential]]); also pneumonia, mitral stenosis and vasculitis.',
    'First-line workup is a **CXR**, then **contrast CT chest (CT angiography)** and often **bronchoscopy**, plus **sputum for AFB, cytology and culture**, with **CBC and clotting**.',
    'Always **quantify the bleeding** — a large volume or any airway compromise is **massive hemoptysis**, a true emergency, so escalate straight to [[fcp1-hemoptysis-massive]].',
  ],

  mechanism: {
    title: 'Confirm the source, then localise and quantify',
    steps: [
      { id: 's1', label: 'Is it truly from the lungs, not GI or nasopharynx?', emphasis: 'key' },
      { id: 's2', label: 'Bright red, frothy, alkaline, cough → hemoptysis', emphasis: 'key' },
      { id: 's3', label: 'Estimate volume; airway threat = massive', emphasis: 'danger' },
      { id: 's4', label: 'CXR → CT chest ± bronchoscopy to localise', emphasis: 'key' },
      { id: 's5', label: 'Target the cause: TB, bronchiectasis, cancer, PE' },
    ],
  },

  examFindings: [
    { sign: 'Blood bright red, frothy, mixed with sputum', mechanism: 'Alveolar/airway origin, aerated', significance: 'key' },
    { sign: 'Coffee-ground or dark blood with food particles', mechanism: 'Points to haematemesis, not hemoptysis', significance: 'key' },
    { sign: 'Weight loss, night sweats, upper-lobe signs', mechanism: 'Tuberculosis or malignancy', significance: 'supportive' },
    { sign: 'Chronic copious purulent sputum with clubbing', mechanism: 'Bronchiectasis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cavitating upper-lobe lesion with positive sputum AFB', meaning: 'Pulmonary tuberculosis' },
    { clue: 'Smoker over 40, hilar mass, weight loss', meaning: 'Bronchogenic carcinoma → CT and bronchoscopy' },
    { clue: 'Pleuritic pain, dyspnea, hypoxia, thrombosis risk factors', meaning: 'Pulmonary embolism → CT pulmonary angiography' },
    { clue: 'Normal CXR but ongoing hemoptysis', meaning: 'CT chest and bronchoscopy to localise the bleeding source' },
  ],

  treatment: [
    { logic: 'Stabilise first, investigate second', detail: 'Assess the airway and the volume of bleeding; mild hemoptysis is worked up electively, but any airway threat is managed as massive hemoptysis.' },
    { logic: 'Treat the underlying cause', detail: 'Anti-tuberculous therapy, antibiotics for infective bronchiectasis, oncology referral for tumour, or anticoagulation for PE as appropriate.' },
  ],

  mnemonics: [
    { hook: 'Hemoptysis = Bright, Frothy, Alkaline, Coughed — not vomited', expansion: ['Haematemesis = dark, acidic, food particles, melena', 'In an endemic area, think TB first'] },
  ],

  traps: [
    {
      questionCategory: 'Source of the bleeding',
      wrongInstinct: 'Assume all blood from the mouth is hemoptysis',
      rightAnswer: 'Separate hemoptysis from haematemesis and nasopharyngeal bleeding before starting the pulmonary workup',
      why: 'Colour, pH, frothiness and the preceding symptom (cough versus vomiting) redirect the entire investigation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which feature best favours hemoptysis over haematemesis?',
      options: [
        { id: 'a', text: 'Dark, coffee-ground material' },
        { id: 'b', text: 'Acidic pH with food particles' },
        { id: 'c', text: 'Bright red frothy blood mixed with sputum' },
        { id: 'd', text: 'Preceded by nausea and followed by melena' },
      ],
      answerId: 'c',
      explanation: 'Blood from the lower airways is bright red, frothy, alkaline and mixed with sputum after coughing; the other options describe haematemesis.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 60-year-old smoker has 3 weeks of hemoptysis and weight loss. CXR shows a hilar mass. The best next investigation is:',
      options: [
        { id: 'a', text: 'Reassurance and a cough suppressant' },
        { id: 'b', text: 'CT chest with bronchoscopy' },
        { id: 'c', text: 'Upper GI endoscopy' },
        { id: 'd', text: 'Sputum Gram stain alone' },
      ],
      answerId: 'b',
      explanation: 'A hilar mass in a smoker with hemoptysis and weight loss suggests bronchogenic carcinoma; CT chest with bronchoscopy localises and biopsies the lesion.',
      tests: 'investigation',
    },
  ],
};

export default fcp1HemoptysisApproach;
