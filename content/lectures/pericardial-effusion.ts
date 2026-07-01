import type { Lecture } from '../../lib/types';

export const pericardialEffusion: Lecture = {
  id: 'pericardial-effusion',
  title: 'Pericardial Effusion',
  system: 'cardiovascular',
  source: 'L21 — Pericardial Disease',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L21 Pericardial Disease' },
    { kind: 'disease', label: 'Effusion' },
    { kind: 'mechanism', label: 'Transudate vs exudate' },
    { kind: 'exam', label: 'Light’s criteria' },
  ],

  highYield: [
    'Normal pericardial fluid **15–50 mL**; effusion = pathological accumulation.',
    '**Transudate** (CHF, hypoalbuminemia, renal failure) vs **exudate** (inflammation, infection, malignancy, autoimmune, post-radiation).',
    '**Light’s criteria for exudate**: pericardial/serum **protein >0.5**, pericardial/serum **LDH >0.6**, or fluid **LDH >300 U/L**. **ADA >40 U/L → tuberculous**.',
    'Fluid types: serous; **serosanguineous** (trauma/CPR); **purulent** (infection); **chylous** (lymphatic obstruction); **hemorrhagic/hemopericardium** (ruptured MI, aortic dissection, malignancy).',
    'CXR: **flask-/"water-bottle"-shaped silhouette** (moderate-large); ECG: **low voltage + electrical alternans**; echo detects as little as **~20 mL**.',
  ],

  mechanism: {
    title: 'Fluid accumulates → compresses only if fast or large',
    steps: [
      { id: 's1', label: 'Cause: inflammation, trauma/bleeding, altered capillary exchange, ↓ drainage', emphasis: 'key' },
      { id: 's2', label: 'Fluid accumulates in the pericardial sac' },
      { id: 's3', label: 'Slow/large → stiff pericardium stretches & accommodates' },
      { id: 's4', label: 'Rapid/small → intrapericardial pressure rises → tamponade', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Muffled heart sounds; pericardial friction rub', mechanism: 'Fluid between the layers', significance: 'key' },
    { sign: 'Dysphagia, hoarseness, hiccups, dyspnea', mechanism: 'Compression of esophagus / recurrent laryngeal nerve / diaphragm / lung', significance: 'key' },
    { sign: 'ECG low voltage + electrical alternans', mechanism: 'Insulating fluid; heart swinging in fluid', significance: 'key' },
  ],

  investigations: [
    { clue: 'Echocardiography (amount & distribution)', meaning: 'First-line & diagnostic' },
    { clue: 'CXR (water-bottle heart); ECG (low voltage, alternans)', meaning: 'Supportive' },
    { clue: 'Pericardiocentesis + Light’s criteria; ADA for TB', meaning: 'Transudate vs exudate; etiology' },
  ],

  treatment: [
    { logic: 'Treat the underlying cause', detail: 'Most effusions are secondary to systemic/cardiac disease.' },
    { logic: 'Drain if tamponade or large/symptomatic', detail: 'Pericardiocentesis (subxiphoid is the commonest approach).' },
  ],

  mnemonics: [
    { hook: 'Exudate = Light’s criteria (protein >0.5, LDH >0.6, LDH >300); ADA >40 = TB', expansion: ['Same logic as pleural effusions'] },
    { hook: 'CXR water-bottle heart; ECG low voltage + electrical alternans', expansion: ['Classic effusion signs'] },
  ],

  traps: [
    {
      questionCategory: 'Transudate vs exudate',
      wrongInstinct: 'Any inflammatory-looking effusion is a transudate',
      rightAnswer: 'Exudate = protein/LDH-rich (Light’s criteria positive); transudate = CHF/hypoalbuminemia/renal',
      why: 'Light’s criteria separate them: an exudate (fluid/serum protein >0.5, LDH >0.6, or LDH >300) points to inflammation/infection/malignancy, whereas a transudate reflects raised hydrostatic or low oncotic pressure.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A pericardial effusion has a fluid/serum protein ratio of 0.7 and a fluid LDH of 400 U/L. This effusion is best classified as:',
      options: [
        { id: 'a', text: 'Transudate' },
        { id: 'b', text: 'Exudate' },
        { id: 'c', text: 'Normal pericardial fluid' },
        { id: 'd', text: 'Chylous' },
      ],
      answerId: 'b',
      explanation: 'Both values meet Light’s criteria (protein ratio >0.5 and LDH >300 U/L), so this is an exudate — pointing to inflammation, infection, malignancy, or autoimmune disease rather than a pressure/oncotic (transudative) cause.',
      tests: 'investigation',
    },
  ],
};

export default pericardialEffusion;
