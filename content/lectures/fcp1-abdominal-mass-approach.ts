import type { Lecture } from '../../lib/types';

export const fcp1AbdominalMassApproach: Lecture = {
  id: 'fcp1-abdominal-mass-approach',
  title: 'Approach to an Abdominal Mass',
  system: 'clinical',
  source: 'L19 — Abdominal Mass',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L19 Abdominal Mass' },
    { kind: 'exam', label: 'Mass characterisation' },
    { kind: 'mechanism', label: 'Location to organ' },
    { kind: 'investigation', label: 'Ultrasound · CT' },
  ],

  highYield: [
    'First confirm a **true mass** (not stool, a distended bladder, or the normal aorta), then describe it: **site**, size, shape, surface, consistency, **mobility**, and special features — **pulsatility**, movement with **respiration**, and whether you can get **above** it. The differential follows in [[fcp1-abdominal-mass-differential]].',
    'A **pulsatile, expansile** central mass is an **abdominal aortic aneurysm** until proven otherwise — a potential emergency; a mass that is pulsatile but only **transmits** the pulsation lies over the aorta rather than being vascular itself.',
    'Movement **down on inspiration** suggests **liver, spleen or kidney** (they descend with the diaphragm); a **ballotable** flank mass suggests the **kidney**; a mass arising **from the pelvis** that you **cannot get below** suggests **bladder, uterus or ovary** — links to [[fcp1-pelvic-mass-approach]].',
    'Distinguish a discrete mass from **organomegaly** (hepatomegaly, splenomegaly) and note **percussion** (dull solid vs resonant bowel gas). Tenderness, bruits and overlying skin changes refine the cause.',
    '**Ultrasound** is the first-line investigation and **CT** characterises and stages. A hard, irregular, fixed mass with weight loss suggests malignancy — see the malignant-versus-benign clues in [[fcp1-abdominal-mass-differential]].',
  ],

  mechanism: {
    title: 'Is it real, where is it, and which organ',
    steps: [
      { id: 's1', label: 'Confirm a true mass (exclude stool, bladder, aorta)', emphasis: 'key' },
      { id: 's2', label: 'Localise by quadrant → candidate organ', emphasis: 'key' },
      { id: 's3', label: 'Characterise: pulsatile, moves with respiration, ballotable', emphasis: 'key' },
      { id: 's4', label: 'Percussion (dull solid vs resonant) and can you get above it', emphasis: 'key' },
      { id: 's5', label: 'Pulsatile expansile central mass = AAA emergency', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pulsatile, expansile central abdominal mass', mechanism: 'Abdominal aortic aneurysm (it pushes the examining hands apart)', significance: 'key' },
    { sign: 'Mass that moves down on inspiration', mechanism: 'Liver, spleen or kidney descending with the diaphragm', significance: 'key' },
    { sign: 'Ballotable flank mass with a resonant band anteriorly', mechanism: 'Retroperitoneal renal origin', significance: 'supportive' },
    { sign: 'Suprapubic mass you cannot get below, dull to percussion', mechanism: 'Pelvic organ — bladder, uterus or ovary', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Bedside or formal ultrasound', meaning: 'First-line to confirm the mass and its organ of origin' },
    { clue: 'CT abdomen and pelvis', meaning: 'Characterises and stages; defines vascular and solid-organ lesions' },
    { clue: 'Urinalysis', meaning: 'Haematuria points to a renal or urothelial cause' },
    { clue: 'FBC, LFTs and targeted tumour markers', meaning: 'Support specific organ diagnoses (for example AFP, CA125, CEA)' },
  ],

  treatment: [
    { logic: 'Urgent vascular referral for a pulsatile mass', detail: 'A suspected or expanding AAA needs immediate imaging and vascular surgical assessment; rupture is life-threatening.' },
    { logic: 'Targeted imaging then cause-specific referral', detail: 'Route by organ of origin; a suspected malignancy goes on an urgent cancer pathway.' },
  ],

  mnemonics: [
    { hook: 'Site, then moves-with-breathing, ballotable, or pulsatile', expansion: ['Pulsatile + expansile = AAA', 'Cannot get above it and arising from pelvis = pelvic organ'] },
  ],

  traps: [
    {
      questionCategory: 'Pulsatile abdominal mass',
      wrongInstinct: 'Palpate deeply and repeatedly to characterise a pulsatile central mass',
      rightAnswer: 'Recognise a pulsatile, expansile mass as a possible AAA and arrange urgent imaging rather than vigorous palpation',
      why: 'A tender, expanding aneurysm may be at risk of rupture and needs prompt vascular assessment.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On examination a central abdominal mass pushes the examining hands apart with each pulse (expansile). The most important diagnosis to exclude is:',
      options: [
        { id: 'a', text: 'Faecal loading' },
        { id: 'b', text: 'Abdominal aortic aneurysm' },
        { id: 'c', text: 'Splenomegaly' },
        { id: 'd', text: 'Ovarian cyst' },
      ],
      answerId: 'b',
      explanation: 'An expansile (not merely transmitted) pulsation indicates an abdominal aortic aneurysm, which requires urgent imaging and vascular assessment.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A flank mass is ballotable, has a band of resonance across it anteriorly, and you can get above it. The most likely organ of origin is:',
      options: [
        { id: 'a', text: 'Spleen' },
        { id: 'b', text: 'Kidney' },
        { id: 'c', text: 'Uterus' },
        { id: 'd', text: 'Liver' },
      ],
      answerId: 'b',
      explanation: 'A ballotable retroperitoneal mass with overlying bowel resonance that you can get above is characteristic of a renal origin, unlike the spleen which you cannot get above.',
      tests: 'exam',
    },
  ],
};

export default fcp1AbdominalMassApproach;
