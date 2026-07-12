import type { Lecture } from '../../lib/types';

export const fcp1Cyanosis: Lecture = {
  id: 'fcp1-cyanosis',
  title: 'Cyanosis — Central vs Peripheral',
  system: 'clinical',
  source: 'L12 — Dyspnea & Cyanosis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L12 Dyspnea & Cyanosis' },
    { kind: 'mechanism', label: 'Central vs peripheral · 5 g/dL' },
    { kind: 'disease', label: 'Hypoxaemia · methaemoglobinaemia' },
    { kind: 'investigation', label: 'SpO2 · ABG · co-oximetry' },
  ],

  highYield: [
    '**Cyanosis** is the bluish discolouration of skin and mucous membranes caused by **at least 5 g/dL of deoxygenated haemoglobin** (an absolute concentration, not a percentage). It is a clinical sign, confirmed by SpO2 and ABG, and often accompanies breathlessness — see [[fcp1-dyspnea-approach]].',
    '**Central cyanosis** (tongue, lips, mucous membranes) reflects **arterial hypoxaemia** or abnormal haemoglobin — from lung disease, a right-to-left shunt or high altitude; the warm mucosa is blue as well as the extremities.',
    '**Peripheral cyanosis** (fingers, toes, nail beds, with a spared warm tongue) reflects **reduced peripheral flow or increased extraction** — cold, shock, or arterial or venous occlusion — with a normal arterial saturation.',
    '**The 5 g/dL rule depends on haemoglobin: anaemia can mask cyanosis** (too little Hb to reach 5 g/dL of deoxyHb) while **polycythaemia makes it appear early** — link the mechanism to [[fcp1-anemia-classification]].',
    '**Cyanosis that does not correct with oxygen and has a normal PaO2 suggests methaemoglobinaemia** (chocolate-brown blood, a saturation gap). Cyanosis is a late and unreliable marker of hypoxaemia — do not wait for it before giving oxygen; see [[fcp1-dyspnea-differential]].',
  ],

  mechanism: {
    title: 'At least 5 g/dL deoxyHb → central vs peripheral → cause',
    steps: [
      { id: 's1', label: 'At least 5 g/dL deoxygenated Hb = visible cyanosis', emphasis: 'key' },
      { id: 's2', label: 'Central (tongue/mucosa) = arterial hypoxaemia or shunt', emphasis: 'danger' },
      { id: 's3', label: 'Peripheral (extremities) = low flow, normal SaO2', emphasis: 'key' },
      { id: 's4', label: 'Anaemia masks it, polycythaemia exaggerates it', emphasis: 'key' },
      { id: 's5', label: 'Blue + normal PaO2, no O2 response → methaemoglobinaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Blue tongue and mucous membranes', mechanism: 'Central cyanosis — arterial hypoxaemia or shunt', significance: 'key' },
    { sign: 'Blue fingers and toes with a pink, warm tongue', mechanism: 'Peripheral cyanosis — reduced flow', significance: 'key' },
    { sign: 'Cyanosis not corrected by high-flow oxygen with a normal PaO2', mechanism: 'Methaemoglobinaemia (or right-to-left shunt)', significance: 'key' },
    { sign: 'No cyanosis despite hypoxia in an anaemic patient', mechanism: 'Too little haemoglobin to reach the 5 g/dL threshold', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low SpO2 and low PaO2 on ABG with central cyanosis', meaning: 'Arterial hypoxaemia — find the lung or shunt cause' },
    { clue: 'A saturation gap (low SpO2, normal PaO2) with chocolate-brown blood', meaning: 'Methaemoglobinaemia → confirm with co-oximetry' },
    { clue: 'Central cyanosis unchanged on high-flow oxygen', meaning: 'Right-to-left shunt or abnormal haemoglobin' },
    { clue: 'Cold, poorly perfused limb with a normal SaO2', meaning: 'Peripheral cyanosis from reduced flow' },
  ],

  treatment: [
    { logic: 'Confirm and treat the hypoxaemia, not the colour', detail: 'Central cyanosis needs oxygen and cause-directed treatment; SpO2 and ABG confirm and quantify what the eye only suggests.' },
    { logic: 'Recognise methaemoglobinaemia', detail: 'A saturation gap unresponsive to oxygen points to methaemoglobinaemia, for which methylene blue is the specific treatment in significant cases.' },
  ],

  mnemonics: [
    { hook: 'Cyanosis = 5 g/dL deoxyHb; Central (tongue) vs Peripheral (tips)', expansion: ['Central = arterial hypoxaemia or shunt', 'Peripheral = low flow, normal SaO2', 'Anaemia masks, polycythaemia exaggerates'] },
  ],

  traps: [
    {
      questionCategory: 'Cyanosis in anaemia',
      wrongInstinct: 'The absence of cyanosis means the patient is not hypoxaemic',
      rightAnswer: 'Cyanosis needs at least 5 g/dL of deoxyHb — a severely anaemic patient can be hypoxaemic without looking blue',
      why: 'With a low total haemoglobin, the absolute deoxyHb may never reach the threshold to be visible.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Cyanosis becomes clinically visible when the concentration of deoxygenated haemoglobin exceeds approximately:',
      options: [
        { id: 'a', text: '1 g/dL' },
        { id: 'b', text: '2.5 g/dL' },
        { id: 'c', text: '5 g/dL' },
        { id: 'd', text: '10 g/dL' },
      ],
      answerId: 'c',
      explanation: 'Cyanosis appears at roughly 5 g/dL of deoxygenated haemoglobin, which is why anaemia can mask it and polycythaemia exaggerates it.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A cyanosed patient has SpO2 85% but a normal PaO2, the cyanosis does not improve with oxygen, and the blood is chocolate-brown. The most likely cause is:',
      options: [
        { id: 'a', text: 'Pulmonary embolism' },
        { id: 'b', text: 'Methaemoglobinaemia' },
        { id: 'c', text: 'Peripheral vasoconstriction' },
        { id: 'd', text: 'Left heart failure' },
      ],
      answerId: 'b',
      explanation: 'A saturation gap (low SpO2 with a normal PaO2), chocolate-brown blood and no response to oxygen are characteristic of methaemoglobinaemia.',
      tests: 'disease',
    },
  ],
};

export default fcp1Cyanosis;
