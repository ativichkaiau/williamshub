import type { Lecture } from '../../lib/types';

export const hepaticUremicEncephalopathy: Lecture = {
  id: 'hepatic-uremic-encephalopathy',
  title: 'Hepatic & Uremic Encephalopathy',
  system: 'neuro',
  source: 'L6 — Metabolic & Regulatory Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L6 Metabolic & Regulatory' },
    { kind: 'disease', label: 'Metabolic encephalopathy' },
    { kind: 'mechanism', label: 'Ammonia / uremia' },
    { kind: 'exam', label: 'Asterixis' },
  ],

  highYield: [
    '**Hepatic encephalopathy (HE)** = **reversible** neuropsychiatric dysfunction of **cirrhosis/liver failure**; features range from subtle (“covert,” grade 0–1) to coma (West Haven grades). **Asterixis** and **elevated ammonia** are characteristic.',
    'HE is often triggered by a **precipitant**: **GI hemorrhage, sedatives, infection, hypokalemia, constipation, azotemia, excess dietary protein** — find and treat it.',
    'EEG in HE (and other metabolic encephalopathies) may show **triphasic waves**. Treatment: **lactulose** (± **rifaximin**) to lower ammonia + remove the precipitant.',
    '**Uremic encephalopathy** = advanced **renal failure**; severity **parallels azotemia**. Early: lethargy, irritability, disorientation, **multifocal myoclonus**; **generalized seizures** may occur (rare in HE).',
    'Uremic encephalopathy **reverses with dialysis** — failure to improve after dialysis should prompt a search for another cause.',
  ],

  mechanism: {
    title: 'Organ failure → accumulated toxins → diffuse encephalopathy',
    steps: [
      { id: 's1', label: 'Liver failure → ammonia & other toxins (HE)', emphasis: 'key' },
      { id: 's2', label: 'A precipitant tips a compensated patient over' },
      { id: 's3', label: 'Renal failure → uremic toxins (uremic encephalopathy)' },
      { id: 's4', label: 'Lower ammonia (lactulose) / dialyze → reversible', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Asterixis (flapping tremor) + confusion in a cirrhotic', mechanism: 'Hepatic encephalopathy', significance: 'key' },
    { sign: 'Multifocal myoclonus ± seizures in renal failure', mechanism: 'Uremic encephalopathy', significance: 'key' },
    { sign: 'EEG triphasic waves', mechanism: 'Metabolic encephalopathy (non-specific)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ammonia, liver function, search for precipitant (HE)', meaning: 'Confirm & reverse trigger' },
    { clue: 'Urea/creatinine; severity tracks azotemia (uremic)', meaning: 'Uremic encephalopathy' },
    { clue: 'EEG (triphasic waves); exclude other causes', meaning: 'Supports metabolic encephalopathy' },
  ],

  treatment: [
    { logic: 'HE: lactulose ± rifaximin + treat precipitant', detail: 'Lower gut ammonia production/absorption.' },
    { logic: 'Uremic encephalopathy: dialysis', detail: 'Reverses with adequate clearance.' },
  ],

  mnemonics: [
    { hook: 'HE = ammonia + asterixis + precipitant (bleed/sedative/infection/hypoK/constipation)', expansion: ['Lactulose + rifaximin'] },
    { hook: 'Uremic → myoclonus & seizures; reverses with dialysis', expansion: ['Severity parallels azotemia'] },
  ],

  traps: [
    {
      questionCategory: 'Managing hepatic encephalopathy',
      wrongInstinct: 'Treat hepatic encephalopathy by restricting protein and lowering ammonia only',
      rightAnswer: 'Always search for and treat the precipitant (GI bleed, infection, hypokalemia, constipation, sedatives) alongside lactulose/rifaximin',
      why: 'Most episodes of HE are triggered by an identifiable precipitant; correcting it is as important as lowering ammonia, and prolonged protein restriction worsens malnutrition.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cirrhotic patient becomes drowsy and confused with a flapping tremor after a gastrointestinal bleed. The best initial management is:',
      options: [
        { id: 'a', text: 'Emergent dialysis' },
        { id: 'b', text: 'Lactulose plus treatment of the GI bleed (the precipitant)' },
        { id: 'c', text: 'IV thiamine only' },
        { id: 'd', text: 'Long-term strict protein restriction' },
      ],
      answerId: 'b',
      explanation: 'Confusion with asterixis in a cirrhotic after a GI bleed is hepatic encephalopathy. Lower ammonia with lactulose (± rifaximin) and treat the precipitant (the GI hemorrhage).',
      tests: 'treatment',
    },
  ],
};

export default hepaticUremicEncephalopathy;
