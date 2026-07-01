import type { Lecture } from '../../lib/types';

export const hba1cFructosamine: Lecture = {
  id: 'hba1c-fructosamine',
  title: 'HbA1c & Fructosamine',
  system: 'endocrine',
  source: 'L10 — Investigations in Diabetes Mellitus',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Endocrine' },
    { kind: 'lecture', label: 'L10 Diabetes Investigations' },
    { kind: 'investigation', label: 'HbA1c / fructosamine' },
    { kind: 'mechanism', label: 'Nonenzymatic glycation' },
    { kind: 'exam', label: 'RBC lifespan interference' },
  ],

  highYield: [
    '**HbA1c** forms when glucose nonenzymatically binds the N-terminal valine of the hemoglobin beta chain: a reversible Schiff base rearranges into a stable **Amadori ketoamine**.',
    'HbA1c integrates glycemic exposure over roughly **8-12 weeks**. Use EDTA whole blood. Diagnostic thresholds are normal <5.7%, prediabetes 5.7-6.4%, and diabetes **>=6.5%**.',
    'For many nonpregnant adults, a common treatment goal is **HbA1c <7%**. Measure about every 3 months after therapy changes or above goal, and about every 6 months when stable.',
    'Interpret HbA1c through **RBC lifespan**: iron/B12 deficiency and reduced turnover can falsely increase it; hemolysis, reticulocytosis, erythropoietin, blood loss, or shortened RBC survival can falsely decrease it. Hemoglobin variants and several chemical interferences are assay dependent.',
    '**Fructosamine** measures glycated serum proteins, mainly albumin, and reflects only **2-3 weeks**. It is useful after rapid therapy change or when HbA1c is unreliable, but rapid albumin turnover (e.g. nephrotic syndrome/cirrhosis) can falsely lower it.',
  ],

  mechanism: {
    title: 'Protein lifespan defines the glycemic time window',
    steps: [
      { id: 's1', label: 'Glucose exposure -> nonenzymatic protein glycation' },
      { id: 's2', label: 'Hemoglobin lifespan -> HbA1c reflects 8-12 weeks', emphasis: 'key' },
      { id: 's3', label: 'Albumin lifespan -> fructosamine reflects 2-3 weeks' },
      { id: 's4', label: 'Changed cell/protein turnover distorts the result' },
    ],
  },

  examFindings: [
    { sign: 'Low HbA1c despite frequent high glucose in hemolytic anemia', mechanism: 'Shortened RBC survival reduces time available for glycation', significance: 'key' },
    { sign: 'High HbA1c in iron-deficiency anemia', mechanism: 'Altered/older RBC population can falsely elevate HbA1c', significance: 'key' },
    { sign: 'Need to assess the last 2-3 weeks after rapid change', mechanism: 'Fructosamine has the shorter integration window', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'HbA1c with CBC/reticulocyte context', meaning: 'Judge whether RBC turnover supports interpretation' },
    { clue: 'Fructosamine with albumin/protein status', meaning: 'Use a short-term alternative only when protein turnover is interpretable' },
    { clue: 'SMBG/CGM versus HbA1c discordance', meaning: 'Trigger review for anemia, hemoglobin variant, kidney/liver disease, or assay interference' },
  ],

  treatment: [
    { logic: 'Use HbA1c for long-horizon monitoring when RBC biology is stable', detail: 'Match testing interval to whether therapy is changing.' },
    { logic: 'Use fructosamine when a shorter window or RBC-independent marker is needed', detail: 'Check albumin turnover first.' },
    { logic: 'Do not intensify therapy from a discordant HbA1c alone', detail: 'Resolve the biological or analytical interference.' },
  ],

  mnemonics: [
    { hook: 'A1c = about 3 months; fructosamine = a few weeks', expansion: ['RBC versus albumin lifespan'] },
    { hook: 'Short RBC survival -> short on A1c', expansion: ['Hemolysis falsely lowers'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting HbA1c in hemolysis',
      wrongInstinct: 'A normal HbA1c always proves average glucose is normal',
      rightAnswer: 'Hemolysis can falsely lower HbA1c because RBCs are removed before accumulating their expected glycation',
      why: 'HbA1c measures glycemia filtered through erythrocyte lifespan.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which marker best reflects glycemic control over the preceding 2-3 weeks when HbA1c is unreliable because of hemolysis?',
      options: [
        { id: 'a', text: 'Fructosamine' },
        { id: 'b', text: 'Urine glucose' },
        { id: 'c', text: 'C-peptide' },
        { id: 'd', text: 'Urine acetoacetate' },
      ],
      answerId: 'a',
      explanation: 'Fructosamine reflects glycated serum proteins, mainly albumin, over about 2-3 weeks and is independent of RBC survival.',
      tests: 'investigation',
    },
  ],
};

export default hba1cFructosamine;
