import type { Lecture } from '../../lib/types';

export const fcp1JaundiceBilirubinMetabolism: Lecture = {
  id: 'fcp1-jaundice-bilirubin-metabolism',
  title: 'Jaundice: Bilirubin Metabolism',
  system: 'clinical',
  source: 'L18 — Jaundice',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L18 Jaundice' },
    { kind: 'mechanism', label: 'Bilirubin metabolism' },
    { kind: 'disease', label: 'Unconjugated vs conjugated' },
    { kind: 'investigation', label: 'Split bilirubin · urine' },
  ],

  highYield: [
    '**Bilirubin** comes from haem breakdown: senescent red cells give **unconjugated bilirubin** (fat-soluble, albumin-bound, **not water-soluble so not in urine**) → hepatic **conjugation** (water-soluble) → excretion in **bile** → gut **urobilinogen and stercobilin**. This underpins [[fcp1-jaundice-approach]].',
    '**Jaundice** becomes visible once serum bilirubin exceeds roughly **35-50 micromol/L (about 2-3 mg/dL)** — the **sclera** yellow first because of their elastin content.',
    '**Unconjugated (indirect)** hyperbilirubinaemia: overproduction (**haemolysis** — see [[fcp1-anemia-classification]]) or impaired uptake/conjugation (**Gilbert syndrome**, neonatal jaundice, Crigler-Najjar). Urine holds **no bilirubin** (acholuric jaundice) because unconjugated bilirubin cannot be filtered.',
    '**Conjugated (direct)** hyperbilirubinaemia: hepatocellular injury or **cholestasis/obstruction** lets water-soluble bilirubin spill into blood and urine → **dark urine**, and blocked bile flow gives **pale stools**. Explored in [[fcp1-jaundice-cholestasis]].',
    '**Gilbert syndrome** is a benign, common cause of isolated **unconjugated** hyperbilirubinaemia that rises with fasting, stress or illness, with otherwise normal liver tests — reassurance only.',
  ],

  mechanism: {
    title: 'Bilirubin from red cells to gut, and where it spills',
    steps: [
      { id: 's1', label: 'Haem from senescent red cells → unconjugated bilirubin', emphasis: 'key' },
      { id: 's2', label: 'Albumin-bound transport (not water-soluble, not in urine)', emphasis: 'key' },
      { id: 's3', label: 'Hepatic uptake and conjugation (now water-soluble)', emphasis: 'key' },
      { id: 's4', label: 'Biliary excretion → gut urobilinogen and stercobilin', emphasis: 'normal' },
      { id: 's5', label: 'Unconjugated vs conjugated splits the differential', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Scleral icterus appearing before skin jaundice', mechanism: 'Bilirubin binds the elastin-rich sclera', significance: 'key' },
    { sign: 'Acholuric jaundice (no bilirubin in urine) with pallor', mechanism: 'Unconjugated bilirubin is not water-soluble; suggests haemolysis', significance: 'key' },
    { sign: 'Dark urine with pale stools', mechanism: 'Conjugated bilirubin in urine; obstructed bile flow to the gut', significance: 'key' },
    { sign: 'Mild jaundice appearing with fasting or illness in a well patient', mechanism: 'Gilbert syndrome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Split (fractionated) bilirubin', meaning: 'Unconjugated vs conjugated predominance directs the workup' },
    { clue: 'Urine dipstick for bilirubin', meaning: 'Absent in unconjugated (prehepatic); present in conjugated (hepatic or obstructive)' },
    { clue: 'Reticulocytes, LDH, haptoglobin, blood film', meaning: 'Confirms haemolysis as a cause of unconjugated hyperbilirubinaemia' },
    { clue: 'Isolated unconjugated rise with normal LFTs and no haemolysis', meaning: 'Gilbert syndrome — benign, needs reassurance only' },
  ],

  treatment: [
    { logic: 'Treat the underlying cause, not the number', detail: 'Haemolysis, obstruction and hepatitis each have specific management; Gilbert needs only reassurance.' },
    { logic: 'Neonatal unconjugated jaundice: phototherapy by threshold', detail: 'Prevents kernicterus; distinct from adult evaluation but uses the same conjugated/unconjugated logic.' },
  ],

  mnemonics: [
    { hook: 'Unconjugated = not in urine (acholuric); conjugated = dark urine', expansion: ['Sclera yellow first', 'Pale stool = blocked bile flow'] },
  ],

  traps: [
    {
      questionCategory: 'Isolated hyperbilirubinaemia',
      wrongInstinct: 'Investigate every mildly raised bilirubin as liver disease',
      rightAnswer: 'Isolated unconjugated bilirubin with normal LFTs and no haemolysis is Gilbert syndrome — reassure',
      why: 'Gilbert is benign and provoked by fasting or illness, so extensive workup is unnecessary.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A well 19-year-old is mildly jaundiced during a febrile illness. Bilirubin is raised and entirely unconjugated, LFTs are normal, and there is no anaemia or reticulocytosis. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Haemolytic anaemia' },
        { id: 'b', text: 'Gilbert syndrome' },
        { id: 'c', text: 'Biliary obstruction' },
        { id: 'd', text: 'Viral hepatitis' },
      ],
      answerId: 'b',
      explanation: 'Isolated unconjugated hyperbilirubinaemia with normal LFTs and no haemolysis, provoked by illness or fasting, is characteristic of benign Gilbert syndrome.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A jaundiced patient has dark urine that is positive for bilirubin on dipstick. This finding indicates that the raised bilirubin is predominantly:',
      options: [
        { id: 'a', text: 'Unconjugated (indirect)' },
        { id: 'b', text: 'Conjugated (direct)' },
        { id: 'c', text: 'Bound to albumin' },
        { id: 'd', text: 'Non-water-soluble' },
      ],
      answerId: 'b',
      explanation: 'Only conjugated (water-soluble) bilirubin is filtered into urine, so bilirubinuria indicates conjugated hyperbilirubinaemia (hepatic or obstructive).',
      tests: 'mechanism',
    },
  ],
};

export default fcp1JaundiceBilirubinMetabolism;
