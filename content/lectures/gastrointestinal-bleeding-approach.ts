import type { Lecture } from '../../lib/types';

export const gastrointestinalBleedingApproach: Lecture = {
  id: 'gastrointestinal-bleeding-approach',
  title: 'Approach to Gastrointestinal Bleeding',
  system: 'gi',
  source: 'L1 — Pathology of the Upper GI Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L1 Upper GI Pathology' },
    { kind: 'disease', label: 'GI haemorrhage' },
    { kind: 'exam', label: 'Upper vs lower' },
  ],

  highYield: [
    '**GI bleeding is divided at the ligament of Treitz into UPPER (proximal — oesophagus, stomach, duodenum) and LOWER (distal — small bowel, colon).** The presentation localises the source: **haematemesis (vomiting blood) and melaena (black, tarry stool) = UPPER GI bleed; haematochezia (fresh red blood per rectum) = usually LOWER** (though a brisk upper bleed can also cause haematochezia).',
    '**Melaena (black tarry stool) implies blood has been altered by transit — so it points to an UPPER source (or slow right-colon bleeding).** A raised urea:creatinine ratio also supports an upper GI bleed (absorbed blood protein). Assess haemodynamic status first (tachycardia, hypotension) — resuscitation precedes diagnosis.',
    'Common UPPER GI causes: PEPTIC ULCER DISEASE (the commonest — [[peptic-ulcer-disease]]), oesophageal/gastric VARICES (portal hypertension — [[cirrhosis-fatty-liver-portal-hypertension]]), Mallory–Weiss tears, oesophagitis, and malignancy. A posterior duodenal ulcer eroding the gastroduodenal artery causes brisk bleeding.',
    'Common LOWER GI causes: DIVERTICULOSIS (a frequent cause of painless brisk bleeding), ANGIODYSPLASIA, colorectal cancer/polyps ([[colorectal-polyps-carcinoma]]), ischaemic colitis, inflammatory bowel disease, and haemorrhoids (bright-red blood on the paper). Age and pattern narrow the differential.',
    '**Management: resuscitate (IV access, fluids/blood, correct coagulopathy), then ENDOSCOPY — upper GI endoscopy (OGD) is both diagnostic and therapeutic (clip/adrenaline/banding), and colonoscopy for lower bleeds.** Risk scores (e.g. Glasgow–Blatchford, Rockall) triage severity. Variceal bleeding needs specific therapy (terlipressin, band ligation, antibiotics — [[pharmacology-in-liver-disease]]).',
  ],

  mechanism: {
    title: 'Localise by presentation (haematemesis/melaena = upper; haematochezia = lower); resuscitate then scope',
    steps: [
      { id: 's1', label: 'Upper vs lower divided at the ligament of Treitz', emphasis: 'key' },
      { id: 's2', label: 'Haematemesis + melaena = UPPER; haematochezia = usually LOWER', emphasis: 'key' },
      { id: 's3', label: 'Upper causes: peptic ulcer (commonest), varices, Mallory-Weiss', emphasis: 'key' },
      { id: 's4', label: 'Lower causes: diverticulosis, angiodysplasia, cancer, haemorrhoids' },
      { id: 's5', label: 'Resuscitate FIRST, then endoscopy (diagnostic + therapeutic)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Haematemesis and/or melaena', mechanism: 'Upper GI bleed (proximal to ligament of Treitz)', significance: 'key' },
    { sign: 'Fresh red blood per rectum (haematochezia)', mechanism: 'Lower GI bleed (or brisk upper bleed)', significance: 'key' },
    { sign: 'Melaena with a raised urea:creatinine ratio', mechanism: 'Upper GI source (digested blood protein)', significance: 'supportive' },
    { sign: 'Brisk painless lower-GI bleeding', mechanism: 'Diverticulosis or angiodysplasia', significance: 'supportive' },
    { sign: 'Haematemesis in a cirrhotic patient', mechanism: 'Bleeding oesophageal varices (portal hypertension)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The anatomical landmark dividing upper from lower GI bleeding', meaning: 'The ligament of Treitz' },
    { clue: 'The stool finding of an upper GI bleed', meaning: 'Melaena (black, tarry stool)' },
    { clue: 'The commonest cause of upper GI bleeding', meaning: 'Peptic ulcer disease' },
    { clue: 'The first-line diagnostic and therapeutic procedure', meaning: 'Endoscopy (after resuscitation)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'GI bleeding is a common emergency where resuscitation precedes diagnosis; the presentation localises the source (peptic ulcer — [[peptic-ulcer-disease]]; varices — [[cirrhosis-fatty-liver-portal-hypertension]], [[pharmacology-in-liver-disease]]; diverticular/angiodysplasia/cancer — [[colorectal-polyps-carcinoma]], [[appendicitis-diverticular-ischemic-bowel]]). Endoscopy is diagnostic and therapeutic; PPIs and variceal therapy target the cause.' },
  ],

  mnemonics: [
    { hook: 'Localise: "Haematemesis + Melaena = Upper; Haematochezia = Lower"', expansion: ['Melaena = digested blood (upper)', 'Upper:lower split at ligament of Treitz'] },
    { hook: 'Manage: "Resuscitate → Scope" (ABC before diagnosis)', expansion: ['Peptic ulcer = commonest upper', 'Varices need terlipressin + banding + antibiotics'] },
  ],

  traps: [
    {
      questionCategory: 'Localising GI bleeding from the stool',
      wrongInstinct: 'Black, tarry stool (melaena) indicates a lower gastrointestinal (colonic) source',
      rightAnswer: 'MELAENA (black, tarry stool) indicates an UPPER GI source — the blood has been digested during transit; fresh red blood per rectum (haematochezia) suggests a lower source (or a very brisk upper bleed)',
      why: 'The colour reflects how long blood has been in the gut: digested (black) points proximal, fresh (red) points distal — mislocalising this misdirects which endoscopy to do first.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient presents with haematemesis and melaena. The most likely source and commonest cause are:',
      options: [
        { id: 'a', text: 'A lower GI source; diverticulosis' },
        { id: 'b', text: 'An upper GI source; peptic ulcer disease' },
        { id: 'c', text: 'Haemorrhoids' },
        { id: 'd', text: 'Angiodysplasia of the colon' },
      ],
      answerId: 'b',
      explanation: 'Haematemesis and melaena indicate an upper GI bleed (proximal to the ligament of Treitz); peptic ulcer disease is the commonest cause. Management is resuscitation followed by upper GI endoscopy.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The first priority in a patient with significant gastrointestinal haemorrhage is to:',
      options: [
        { id: 'a', text: 'Perform endoscopy immediately before any resuscitation' },
        { id: 'b', text: 'Assess and restore haemodynamic stability (resuscitate) before diagnostic work-up' },
        { id: 'c', text: 'Start oral iron' },
        { id: 'd', text: 'Discharge with outpatient follow-up' },
      ],
      answerId: 'b',
      explanation: 'Resuscitation (IV access, fluids/blood, correcting coagulopathy) and haemodynamic stabilisation come first; endoscopy then localises and treats the source. Risk scores help triage severity.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default gastrointestinalBleedingApproach;
