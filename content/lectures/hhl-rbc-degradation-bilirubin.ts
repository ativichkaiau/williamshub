import type { Lecture } from '../../lib/types';

export const hhlRbcDegradationBilirubin: Lecture = {
  id: 'hhl-rbc-degradation-bilirubin',
  title: 'RBC Senescence & Bilirubin Metabolism',
  system: 'heme',
  source: 'L2 — Red Blood Cell Structure & Function',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L2 RBC structure' },
    { kind: 'mechanism', label: 'Haem → bilirubin → bile' },
    { kind: 'investigation', label: 'Haptoglobin · LDH · bilirubin' },
    { kind: 'disease', label: 'Haemolysis · jaundice' },
  ],

  highYield: [
    'RBCs live **~120 days**; senescent cells lose deformability and are removed **extravascularly by splenic macrophages** (the reticulo-endothelial system).',
    'Haem catabolism: **haem oxygenase → biliverdin → unconjugated (indirect) bilirubin**, which is **albumin-bound and water-insoluble** → liver → **UGT conjugation → conjugated (direct) bilirubin** → bile → gut **urobilinogen/stercobilin**.',
    '**Intravascular haemolysis** releases free Hb → **↓ haptoglobin, haemoglobinaemia/haemoglobinuria, later haemosiderinuria, ↑ LDH**; **extravascular haemolysis** → splenomegaly + ↑ unconjugated bilirubin.',
    'Jaundice patterns: **prehepatic (haemolytic)** = ↑ **unconjugated** bilirubin, **acholuric** (no bilirubin in urine) with ↑ urine urobilinogen; **posthepatic (obstructive)** = ↑ **conjugated** bilirubin, **dark urine + pale stool**, ↑ ALP.',
    'Only **conjugated bilirubin is water-soluble** → appears in urine; unconjugated (albumin-bound) never does.',
  ],

  mechanism: {
    title: 'Old RBC → macrophage → haem to bilirubin → bile',
    steps: [
      { id: 's1', label: '~120 days → senescent RBC phagocytosed by splenic macrophages', emphasis: 'key' },
      { id: 's2', label: 'Haem oxygenase → biliverdin → unconjugated bilirubin (+ Fe recycled, CO)' },
      { id: 's3', label: 'Albumin-bound unconjugated bilirubin → liver → UGT conjugation', emphasis: 'key' },
      { id: 's4', label: 'Conjugated bilirubin → bile → gut → urobilinogen/stercobilin' },
      { id: 's5', label: 'Massive intravascular haemolysis → free Hb, ↓ haptoglobin, haemoglobinuria → AKI', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Jaundice + splenomegaly + raised indirect (unconjugated) bilirubin', mechanism: 'Extravascular haemolysis', significance: 'key' },
    { sign: 'Low haptoglobin + haemoglobinuria + high LDH', mechanism: 'Intravascular haemolysis (free plasma Hb)', significance: 'key' },
    { sign: 'Dark urine + pale stool + raised conjugated bilirubin', mechanism: 'Posthepatic (obstructive) jaundice', significance: 'key' },
    { sign: 'Neonatal unconjugated hyperbilirubinaemia', mechanism: 'Immature UGT conjugation', significance: 'supportive' },
  ],

  investigations: [
    { clue: '↑ unconjugated bilirubin, ↑ LDH, ↑ reticulocytes, ↓ haptoglobin', meaning: 'Haemolysis' },
    { clue: 'Haemoglobinuria + haemosiderinuria + very low haptoglobin', meaning: 'Intravascular haemolysis' },
    { clue: 'Conjugated hyperbilirubinaemia, ↑ ALP, pale stool, dark urine', meaning: 'Biliary obstruction (posthepatic)' },
    { clue: 'Urine urobilinogen present but no bilirubin in urine (acholuric)', meaning: 'Prehepatic (unconjugated) jaundice' },
  ],

  treatment: [
    { logic: 'Classify the jaundice first', detail: 'Unconjugated → haemolysis / Gilbert / neonatal; conjugated → hepatocellular vs obstructive (split by ALP/GGT + imaging).' },
    { logic: 'Protect the kidneys and the brain', detail: 'Hydrate in intravascular haemolysis to prevent pigment nephropathy; treat neonatal unconjugated jaundice with phototherapy to prevent kernicterus.' },
  ],

  mnemonics: [
    { hook: 'Unconjugated = Indirect = Insoluble (albumin-bound, not in urine)', expansion: ['Conjugated = direct = water-soluble → urine (dark)', 'Pale stool + dark urine = obstruction', 'Acholuric jaundice = prehepatic/haemolytic'] },
    { hook: 'Intravascular = ↓ haptoglobin + haemoglobinuria; Extravascular = splenomegaly', expansion: ['Haptoglobin mops up free Hb', 'Once saturated → haemoglobinuria → haemosiderinuria', '↑ LDH and ↑ indirect bilirubin in both'] },
  ],

  traps: [
    {
      questionCategory: 'Which bilirubin appears in urine',
      wrongInstinct: 'Unconjugated bilirubin spills into the urine during haemolysis',
      rightAnswer: 'Only CONJUGATED bilirubin is water-soluble and enters urine; haemolytic jaundice is "acholuric" with raised urine urobilinogen',
      why: 'Unconjugated bilirubin is albumin-bound and insoluble, so dark urine points to conjugated (hepatic/obstructive) causes.',
    },
    {
      questionCategory: 'Marker of intravascular haemolysis',
      wrongInstinct: 'Haptoglobin rises during haemolysis',
      rightAnswer: 'Haptoglobin FALLS — it is consumed binding free plasma haemoglobin',
      why: 'A low haptoglobin with haemoglobinuria and high LDH indicates intravascular haemolysis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Senescent red cells are removed chiefly by splenic macrophages. The first pigment produced when haem oxygenase breaks down haem is:',
      options: [
        { id: 'a', text: 'Unconjugated bilirubin' },
        { id: 'b', text: 'Biliverdin' },
        { id: 'c', text: 'Stercobilin' },
        { id: 'd', text: 'Urobilinogen' },
      ],
      answerId: 'b',
      explanation: 'Haem oxygenase converts haem to biliverdin (releasing CO and iron); biliverdin reductase then forms unconjugated bilirubin.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient has jaundice with dark urine, pale stools, raised conjugated bilirubin and a high alkaline phosphatase. This pattern indicates:',
      options: [
        { id: 'a', text: 'Prehepatic (haemolytic) jaundice' },
        { id: 'b', text: 'Gilbert syndrome' },
        { id: 'c', text: 'Posthepatic (obstructive) jaundice' },
        { id: 'd', text: 'Physiological neonatal jaundice' },
      ],
      answerId: 'c',
      explanation: 'Conjugated hyperbilirubinaemia with bilirubinuria (dark urine), pale stool (no stercobilin) and a cholestatic ALP indicates obstruction to bile flow.',
      tests: 'investigation',
    },
  ],
};

export default hhlRbcDegradationBilirubin;
