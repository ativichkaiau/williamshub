import type { Lecture } from '../../lib/types';

export const fcp1GiBleedUpper: Lecture = {
  id: 'fcp1-gi-bleed-upper',
  title: 'Upper GI Bleeding',
  system: 'clinical',
  source: 'L17 — Gastrointestinal Hemorrhage',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L17 GI Hemorrhage' },
    { kind: 'disease', label: 'Peptic ulcer · varices · Mallory-Weiss' },
    { kind: 'mechanism', label: 'Proximal to ligament of Treitz' },
    { kind: 'investigation', label: 'Glasgow-Blatchford · endoscopy' },
  ],

  highYield: [
    '**Upper GI bleeding** arises **proximal to the ligament of Treitz** and presents with **haematemesis** (fresh red or coffee-ground) and/or **melaena** (black, tarry, offensive stool). Melaena needs as little as ~50 mL of blood. Manage alongside [[fcp1-gi-bleed-management]].',
    'Commonest causes: **peptic ulcer disease** (the single most common), **oesophageal or gastric varices** (portal hypertension), **Mallory-Weiss tear** (after retching), erosive gastritis/oesophagitis, and malignancy. Ulcer risk factors are **H. pylori** and **NSAIDs** — see [[fcp1-dyspepsia-reflux]].',
    'A **raised urea-to-creatinine ratio** supports an upper source (digested blood absorbed as protein), and haemoglobin can be **normal early** before haemodilution. Distinguish this from a lower source in [[fcp1-gi-bleed-lower]].',
    'Risk-stratify with the **Glasgow-Blatchford score** (pre-endoscopy — predicts need for intervention; a score of 0 may allow outpatient care) and the **Rockall score** (mortality and rebleeding). Endoscopy is diagnostic and therapeutic within 24 hours.',
    '**Haematemesis with shock is an emergency** — resuscitate before endoscopy. Stigmata of chronic liver disease suggest a **variceal** bleed and change the drugs; portal causes link to [[fcp1-splenomegaly-approach]].',
  ],

  mechanism: {
    title: 'Recognising an upper GI bleed and its source',
    steps: [
      { id: 's1', label: 'Source proximal to the ligament of Treitz', emphasis: 'key' },
      { id: 's2', label: 'Haematemesis (coffee-ground or red) ± melaena', emphasis: 'key' },
      { id: 's3', label: 'Assess haemodynamics: pulse, BP, postural drop', emphasis: 'key' },
      { id: 's4', label: 'Variceal vs non-variceal (liver stigmata)', emphasis: 'key' },
      { id: 's5', label: 'Shock or ongoing bleed → resuscitate before scope', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Black, tarry melaena on PR examination', mechanism: 'Digested blood from an upper source', significance: 'key' },
    { sign: 'Tachycardia, hypotension, postural drop', mechanism: 'Hypovolaemia from acute blood loss', significance: 'key' },
    { sign: 'Stigmata of chronic liver disease (spider naevi, ascites, splenomegaly)', mechanism: 'Portal hypertension → variceal source', significance: 'key' },
    { sign: 'Epigastric tenderness', mechanism: 'Peptic ulcer disease', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Raised urea out of proportion to creatinine', meaning: 'Supports an upper GI source (absorbed blood protein)' },
    { clue: 'Glasgow-Blatchford score', meaning: 'Pre-endoscopy risk; a score of 0 may permit outpatient care' },
    { clue: 'Haemoglobin (may be normal early)', meaning: 'Guides transfusion; a normal early value does not exclude major bleeding' },
    { clue: 'Upper GI endoscopy within 24 hours', meaning: 'Identifies and treats the bleeding lesion' },
  ],

  treatment: [
    { logic: 'Resuscitate first — ABC, two large-bore cannulae, crossmatch', detail: 'Restore circulating volume before endoscopy; the full pathway is in [[fcp1-gi-bleed-management]].' },
    { logic: 'Early endoscopy for diagnosis and haemostasis', detail: 'Non-variceal ulcers get endoscopic therapy plus IV PPI; variceal bleeds get terlipressin, antibiotics and band ligation.' },
  ],

  mnemonics: [
    { hook: 'Up high = haematemesis + melaena + high urea', expansion: ['Ulcer is commonest; varices change the drugs', 'Resuscitate before you scope'] },
  ],

  traps: [
    {
      questionCategory: 'Haemodynamics in GI bleeding',
      wrongInstinct: 'A normal haemoglobin rules out significant bleeding',
      rightAnswer: 'Judge the patient by perfusion and vital signs; haemoglobin lags in acute bleeding',
      why: 'Haemoglobin only falls after haemodilution, so early values can be normal despite major loss.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 55-year-old vomits fresh blood and passes black, tarry stool. Blood tests show urea 18 mmol/L with a normal creatinine. This urea-creatinine pattern indicates:',
      options: [
        { id: 'a', text: 'A lower GI source' },
        { id: 'b', text: 'An upper GI source' },
        { id: 'c', text: 'Renal failure' },
        { id: 'd', text: 'Dehydration alone' },
      ],
      answerId: 'b',
      explanation: 'A disproportionately raised urea reflects absorbed blood protein from an upper GI bleed, and melaena supports an upper source.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A man with known cirrhosis presents with large-volume haematemesis and a blood pressure of 85/50. The immediate priority is:',
      options: [
        { id: 'a', text: 'Urgent endoscopy before any resuscitation' },
        { id: 'b', text: 'Resuscitation with IV access and fluids/blood, then endoscopy' },
        { id: 'c', text: 'Oral PPI and discharge' },
        { id: 'd', text: 'CT abdomen before any treatment' },
      ],
      answerId: 'b',
      explanation: 'Haematemesis with hypotension is an emergency; circulation is restored first, then endoscopy (with terlipressin and antibiotics if variceal).',
      tests: 'treatment',
    },
  ],
};

export default fcp1GiBleedUpper;
