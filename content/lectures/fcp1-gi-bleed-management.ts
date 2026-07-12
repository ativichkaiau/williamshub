import type { Lecture } from '../../lib/types';

export const fcp1GiBleedManagement: Lecture = {
  id: 'fcp1-gi-bleed-management',
  title: 'GI Bleed: Resuscitation & Management',
  system: 'clinical',
  source: 'L17 — Gastrointestinal Hemorrhage',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L17 GI Hemorrhage' },
    { kind: 'treatment', label: 'Resuscitation · transfusion' },
    { kind: 'disease', label: 'Variceal vs non-variceal' },
    { kind: 'investigation', label: 'Glasgow-Blatchford score' },
  ],

  highYield: [
    '**Resuscitation comes before diagnosis** in any GI bleed: **ABC**, two large-bore cannulae, bloods including **crossmatch** and coagulation, and fluids or blood to restore perfusion. Recognise shock early — see [[fcp1-shock-management]].',
    'Use a **restrictive transfusion** threshold — transfuse red cells at **Hb below 70 g/L** (or below 80 with active cardiac disease); over-transfusion worsens outcomes and raises variceal pressure.',
    '**Risk-stratify**: the **Glasgow-Blatchford score** identifies very-low-risk patients (score 0-1) who may avoid admission; higher scores and instability need urgent endoscopy. Source detail is in [[fcp1-gi-bleed-upper]].',
    '**Variceal** bleeding: give **terlipressin + prophylactic antibiotics** early, then **endoscopic band ligation**; balloon tamponade or **TIPS** if uncontrolled. **Non-variceal** ulcer bleeding: **endoscopic haemostasis + IV PPI**. Correct coagulopathy and low platelets.',
    'Timing: endoscopy within **24 hours** for major non-variceal bleeds and within **12 hours** for suspected variceal bleeds. Rebleeding after endoscopy → repeat endoscopy, then angiographic embolisation or surgery. Sources: [[fcp1-gi-bleed-upper]] and [[fcp1-gi-bleed-lower]].',
  ],

  mechanism: {
    title: 'Resuscitate, risk-stratify, then treat by source',
    steps: [
      { id: 's1', label: 'ABC + two large-bore cannulae + crossmatch', emphasis: 'danger' },
      { id: 's2', label: 'Restrictive transfusion (Hb <70) + correct coagulopathy', emphasis: 'key' },
      { id: 's3', label: 'Risk score (Glasgow-Blatchford) directs disposition', emphasis: 'key' },
      { id: 's4', label: 'Variceal vs non-variceal pathway', emphasis: 'key' },
      { id: 's5', label: 'Endoscopic therapy; rebleed → embolisation/surgery', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cool peripheries, tachycardia, delayed capillary refill', mechanism: 'Hypoperfusion from hypovolaemia (hypotension is a late sign)', significance: 'key' },
    { sign: 'Stigmata of chronic liver disease', mechanism: 'Suggests a variceal source → terlipressin and antibiotics', significance: 'key' },
    { sign: 'Melaena or haematochezia on PR examination', mechanism: 'Confirms and helps localise the bleed', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Haemoglobin trend', meaning: 'Guides restrictive transfusion (threshold Hb below 70, or below 80 with cardiac disease)' },
    { clue: 'Glasgow-Blatchford score', meaning: 'Score 0-1 may allow outpatient management; high scores need urgent endoscopy' },
    { clue: 'Coagulation profile and platelet count', meaning: 'Correct coagulopathy or thrombocytopenia during resuscitation' },
    { clue: 'Lactate and urea', meaning: 'Markers of hypoperfusion, and a raised urea suggests an upper source' },
  ],

  treatment: [
    { logic: 'Restrictive transfusion and correction of clotting', detail: 'Target Hb around 70-90 g/L; give platelets and clotting factors as indicated; avoid over-transfusion.' },
    { logic: 'Variceal bleed: terlipressin + antibiotics + band ligation', detail: 'Vasoactive drug and prophylactic antibiotics before or with endoscopy; balloon tamponade or TIPS if refractory.' },
    { logic: 'Non-variceal bleed: endoscopic haemostasis + IV PPI', detail: 'Dual endoscopic therapy; rebleeding means repeat endoscopy, then embolisation or surgery.' },
  ],

  mnemonics: [
    { hook: 'Resuscitate → Risk-score → Rescope by source', expansion: ['Transfuse restrictively (Hb <70)', 'Varices: terlipressin + antibiotics + bands'] },
  ],

  traps: [
    {
      questionCategory: 'Transfusion strategy',
      wrongInstinct: 'Transfuse everyone up to a normal haemoglobin',
      rightAnswer: 'Use a restrictive threshold (Hb below 70, or below 80 with cardiac disease)',
      why: 'Liberal transfusion worsens mortality and can raise portal and variceal pressure, provoking rebleeding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A resuscitated patient with a non-variceal upper GI bleed has a haemoglobin of 78 g/L and no cardiac history. Following a restrictive strategy, you should:',
      options: [
        { id: 'a', text: 'Transfuse to a target of 120 g/L' },
        { id: 'b', text: 'Withhold routine red-cell transfusion at this level' },
        { id: 'c', text: 'Transfuse only fresh frozen plasma' },
        { id: 'd', text: 'Give platelets regardless of the count' },
      ],
      answerId: 'b',
      explanation: 'The restrictive threshold transfuses at Hb below 70 g/L (or below 80 with cardiac disease); at 78 g/L without cardiac disease routine transfusion is not indicated.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A cirrhotic patient with a suspected variceal bleed is being resuscitated. In addition to endoscopy, the most appropriate early drug combination is:',
      options: [
        { id: 'a', text: 'Terlipressin plus prophylactic antibiotics' },
        { id: 'b', text: 'High-dose loperamide' },
        { id: 'c', text: 'Oral iron and discharge' },
        { id: 'd', text: 'Tranexamic acid alone' },
      ],
      answerId: 'a',
      explanation: 'Suspected variceal bleeding is treated early with a vasoactive agent (terlipressin) and prophylactic antibiotics, followed by endoscopic band ligation.',
      tests: 'treatment',
    },
  ],
};

export default fcp1GiBleedManagement;
