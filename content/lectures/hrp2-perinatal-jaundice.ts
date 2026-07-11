import type { Lecture } from '../../lib/types';

export const hrp2PerinatalJaundice: Lecture = {
  id: 'hrp2-perinatal-jaundice',
  title: 'Perinatal (Neonatal) Jaundice',
  system: 'repro',
  source: 'L14 — Perinatal Jaundice',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L14 Perinatal Jaundice' },
    { kind: 'disease', label: 'Neonatal hyperbilirubinaemia' },
    { kind: 'mechanism', label: 'Unconjugated vs conjugated' },
    { kind: 'treatment', label: 'Phototherapy · exchange' },
  ],

  highYield: [
    '**Timing is the key triage.** Jaundice **< 24 h of life is always pathological** (usually **haemolysis** — Rh/ABO incompatibility, G6PD). **Physiological jaundice** appears **day 2–3**, peaks ~day 3–5, and resolves — due to immature **UGT** conjugation + high red-cell turnover.',
    '**Unconjugated (indirect) hyperbilirubinaemia** predominates in the newborn and is dangerous because unconjugated bilirubin is **fat-soluble** and crosses the immature **blood-brain barrier** → **kernicterus** (basal-ganglia deposition → deafness, choreoathetoid cerebral palsy).',
    '**Conjugated (direct) hyperbilirubinaemia is always pathological** → think **biliary atresia** (pale stools, dark urine — needs early surgery/Kasai), neonatal hepatitis, metabolic/infective causes.',
    '**Breast-feeding vs breast-milk jaundice:** early **breast-feeding failure** jaundice (dehydration, poor intake, first week) vs later **breast-milk jaundice** (peaks ~week 2, benign, prolonged unconjugated).',
    '**Management by bilirubin level/age charts:** **phototherapy** (converts bilirubin to water-soluble isomers) for most; **exchange transfusion** for severe/rapidly rising levels to prevent kernicterus; treat the underlying cause.',
  ],

  mechanism: {
    title: 'Bilirubin load vs conjugation/excretion capacity',
    steps: [
      { id: 's1', label: 'High RBC turnover + immature UGT → unconjugated rise', emphasis: 'key' },
      { id: 's2', label: '<24 h → pathological (haemolysis)', emphasis: 'danger' },
      { id: 's3', label: 'Day 2–3 self-limiting → physiological' },
      { id: 's4', label: 'Unconjugated crosses BBB → kernicterus', emphasis: 'danger' },
      { id: 's5', label: 'Conjugated (direct) = always pathological (e.g. biliary atresia)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Jaundice within 24 h → haemolysis', mechanism: 'Rh/ABO incompatibility, G6PD', significance: 'key' },
    { sign: 'Physiological jaundice appears day 2–3', mechanism: 'Immature UGT + RBC turnover', significance: 'key' },
    { sign: 'Pale stools + dark urine + conjugated rise → biliary atresia', mechanism: 'Obstructed bile flow', significance: 'key' },
    { sign: 'Kernicterus (lethargy, hypertonia, opisthotonus)', mechanism: 'Unconjugated bilirubin in basal ganglia', significance: 'key' },
  ],

  investigations: [
    { clue: 'Jaundice at 12 h with a positive direct Coombs test', meaning: 'Immune haemolysis (Rh/ABO) — treat promptly' },
    { clue: 'Prolonged jaundice, pale stools, raised conjugated bilirubin', meaning: 'Biliary atresia — urgent surgical assessment (Kasai)' },
    { clue: 'Well baby, jaundice peaking day 3, unconjugated', meaning: 'Physiological jaundice' },
    { clue: 'Breastfed baby, jaundice persisting into week 2, otherwise well', meaning: 'Breast-milk jaundice (benign)' },
  ],

  treatment: [
    { logic: 'Phototherapy first-line', detail: 'Converts unconjugated bilirubin into water-soluble isomers for excretion; guided by age-specific bilirubin thresholds.' },
    { logic: 'Exchange transfusion for severe cases', detail: 'Rapidly lowers dangerous unconjugated bilirubin to prevent kernicterus; treat the cause (e.g. haemolysis).' },
  ],

  mnemonics: [
    { hook: '<24 h = pathological (haemolysis); Day 2–3 = physiological', expansion: ['Conjugated (direct) is ALWAYS pathological'] },
    { hook: 'Unconjugated is Un-safe for the brain → Kernicterus', expansion: ['Fat-soluble, crosses the BBB'] },
  ],

  traps: [
    {
      questionCategory: 'Which jaundice is always abnormal',
      wrongInstinct: 'Conjugated hyperbilirubinaemia in a neonate can be physiological',
      rightAnswer: 'Conjugated (direct) hyperbilirubinaemia is ALWAYS pathological (e.g. biliary atresia)',
      why: 'Physiological jaundice is unconjugated; a raised conjugated fraction always signals liver/biliary disease needing urgent evaluation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A newborn becomes visibly jaundiced at 10 hours of age. This is:',
      options: [
        { id: 'a', text: 'Physiological and reassuring' },
        { id: 'b', text: 'Always pathological — likely haemolysis' },
        { id: 'c', text: 'Breast-milk jaundice' },
        { id: 'd', text: 'Due to immature UGT only' },
      ],
      answerId: 'b',
      explanation: 'Jaundice within the first 24 hours is always pathological and most often due to haemolysis (e.g. Rh/ABO incompatibility, G6PD deficiency), requiring urgent evaluation.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Kernicterus results from deposition in the basal ganglia of:',
      options: [
        { id: 'a', text: 'Conjugated (direct) bilirubin' },
        { id: 'b', text: 'Unconjugated (indirect) bilirubin' },
        { id: 'c', text: 'Urobilinogen' },
        { id: 'd', text: 'Biliverdin' },
      ],
      answerId: 'b',
      explanation: 'Unconjugated bilirubin is fat-soluble and crosses the immature blood-brain barrier, depositing in the basal ganglia to cause kernicterus.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A neonate has prolonged jaundice with pale stools, dark urine and a raised conjugated bilirubin. The priority diagnosis to exclude is:',
      options: [
        { id: 'a', text: 'Physiological jaundice' },
        { id: 'b', text: 'Breast-milk jaundice' },
        { id: 'c', text: 'Biliary atresia' },
        { id: 'd', text: 'G6PD deficiency' },
      ],
      answerId: 'c',
      explanation: 'Conjugated hyperbilirubinaemia with pale stools and dark urine suggests biliary obstruction; biliary atresia must be excluded urgently as early Kasai surgery improves outcomes.',
      tests: 'investigation',
    },
  ],
};

export default hrp2PerinatalJaundice;
