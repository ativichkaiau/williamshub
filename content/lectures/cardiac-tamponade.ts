import type { Lecture } from '../../lib/types';

export const cardiacTamponade: Lecture = {
  id: 'cardiac-tamponade',
  title: 'Cardiac Tamponade',
  system: 'cardiovascular',
  source: 'L21 — Pericardial Disease',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L21 Pericardial Disease' },
    { kind: 'disease', label: 'Tamponade' },
    { kind: 'mechanism', label: 'Impaired filling' },
    { kind: 'exam', label: 'Beck triad' },
  ],

  highYield: [
    '**Fluid under high pressure compresses the cardiac chambers → ↓ diastolic filling → ↓ venous return → ↓ cardiac output** (obstructive shock).',
    '**Rate matters more than volume**: **acute** (trauma, LV/aortic rupture) can tamponade with a *small* volume; a slowly growing large effusion may not.',
    '**Beck triad**: **hypotension · ↑ JVP (distended neck veins) · muffled heart sounds**.',
    '**Pulsus paradoxus** (inspiratory SBP fall >10 mmHg); ECG **low voltage + electrical alternans**.',
    '**Treatment = urgent pericardiocentesis** — remove the fluid; it is a **preload-dependent** state (avoid diuretics/vasodilators).',
  ],

  mechanism: {
    title: '↑ Intrapericardial pressure → ↓ filling → ↓ CO',
    steps: [
      { id: 's1', label: 'Rapid or large effusion in a stiff pericardium', emphasis: 'key' },
      { id: 's2', label: '↑ Intrapericardial pressure compresses the chambers' },
      { id: 's3', label: '↓ Diastolic filling / venous return' },
      { id: 's4', label: '↓ Stroke volume → obstructive shock', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Beck triad: hypotension + ↑ JVP + muffled heart sounds', mechanism: 'Compressed chambers, insulating fluid', significance: 'key' },
    { sign: 'Pulsus paradoxus (>10 mmHg inspiratory SBP fall)', mechanism: 'Interventricular dependence in a fixed pericardial volume', significance: 'key' },
    { sign: 'Tachycardia, narrow pulse pressure', mechanism: 'Compensating for a fixed low stroke volume', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echocardiography (RA/RV diastolic collapse)', meaning: 'Diagnostic — do urgently' },
    { clue: 'ECG (low voltage, electrical alternans)', meaning: 'Supportive' },
    { clue: 'Clinical Beck triad + pulsus paradoxus', meaning: 'Bedside diagnosis in an unstable patient' },
  ],

  treatment: [
    { logic: 'Urgent pericardiocentesis (subxiphoid)', detail: 'Removing even a little fluid can restore output.' },
    { logic: 'IV fluids as a temporizing bridge', detail: 'Preload-dependent — supports filling until drained.' },
    { logic: 'Avoid diuretics / vasodilators', detail: 'They drop preload and worsen output.' },
  ],

  mnemonics: [
    { hook: 'Beck triad: hypoTension · ↑JVP · muffled heart sounds', expansion: ['The classic tamponade triad'] },
    { hook: 'Tamponade is preload-dependent → drain, don’t diurese', expansion: ['Fluids buy time; pericardiocentesis fixes it'] },
  ],

  traps: [
    {
      questionCategory: 'Volume vs rate of effusion',
      wrongInstinct: 'Tamponade requires a large effusion',
      rightAnswer: 'RATE matters more than volume — a rapidly accumulating SMALL effusion (trauma, rupture) can cause tamponade',
      why: 'The stiff pericardium cannot stretch acutely, so a small rapid effusion tamponades, whereas a slowly enlarging effusion may reach a large volume without compromise.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A stabbed patient is hypotensive with distended neck veins and muffled heart sounds. The most appropriate immediate management is:',
      options: [
        { id: 'a', text: 'Needle decompression of the pleura' },
        { id: 'b', text: 'Pericardiocentesis for cardiac tamponade' },
        { id: 'c', text: 'Transfusion alone for hemorrhagic shock' },
        { id: 'd', text: 'Emergency PCI for myocardial infarction' },
      ],
      answerId: 'b',
      explanation: 'Hypotension + distended neck veins + muffled heart sounds is Beck’s triad of cardiac tamponade. In a penetrating-trauma patient this is acute tamponade from a small, rapidly accumulating effusion — the immediate treatment is pericardiocentesis (or surgical drainage).',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Electrical alternans', ecg: 'electrical-alternans', caption: 'Beat-to-beat QRS amplitude swings as the heart swings within a large effusion — a classic tamponade clue (with low voltage).' },
  ],
};

export default cardiacTamponade;
