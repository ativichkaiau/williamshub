import type { Lecture } from '../../lib/types';

export const asd: Lecture = {
  id: 'asd',
  title: 'Atrial Septal Defect (ASD)',
  system: 'cardiovascular',
  source: 'L3 — Congenital Heart Disease',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L3 Congenital HD' },
    { kind: 'disease', label: 'ASD' },
    { kind: 'mechanism', label: 'Left-to-right shunt' },
    { kind: 'exam', label: 'Fixed split S2' },
    { kind: 'treatment', label: 'Defect closure' },
  ],

  highYield: [
    'Types: **secundum 75%** (most common), primum 20%, sinus venosus 5%, coronary sinus 1%.',
    '**Left-to-right shunt** at the atrial level → **RA/RV volume overload**, ↑pulmonary blood flow.',
    'Usually **asymptomatic in childhood**; AF, paradoxical embolism, pulmonary HTN appear in adulthood.',
    'Hallmark = **widely fixed split S2**.',
    'The murmur is **relative (functional) pulmonary stenosis — NOT flow across the ASD itself**.',
  ],

  mechanism: {
    title: 'Atrial L→R shunt → right-heart volume overload',
    steps: [
      { id: 's1', label: 'ASD (atrial communication)' },
      { id: 's2', label: 'L→R shunt (LA → RA)' },
      { id: 's3', label: 'RA/RV volume overload', emphasis: 'key' },
      { id: 's4', label: '↑ flow across pulmonary valve' },
      { id: 's5', label: 'Ejection murmur + fixed split S2', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Late, if untreated',
        steps: [
          { id: 'e1', label: 'Chronic ↑ pulmonary blood flow' },
          { id: 'e2', label: 'Pulmonary HTN → shunt reversal (rare)', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Widely fixed split S2', mechanism: 'RV volume overload keeps RV ejection time constant across respiration — the ASD signature', significance: 'key' },
    { sign: 'Systolic ejection murmur at LUSB', mechanism: 'Relative/functional pulmonary stenosis (↑flow across a NORMAL pulmonary valve)', significance: 'key' },
    { sign: 'Mid-diastolic tricuspid rumble at LLSB', mechanism: 'Large shunt → ↑flow across the tricuspid valve', significance: 'supportive' },
    { sign: 'Often no symptoms in childhood', mechanism: 'Low-pressure atrial shunt is well tolerated for years', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG: RAD + RVH + rSR′/incomplete RBBB in V1', meaning: 'Secundum ASD pattern (primum → left-superior axis instead)' },
    { clue: 'CXR: cardiomegaly (RA/RV), ↑pulmonary markings, prominent main PA', meaning: 'Right-heart volume overload' },
    { clue: 'Echocardiography', meaning: 'Diagnostic — defect, shunt, RV volume overload' },
  ],

  treatment: [
    { logic: 'Small secundum ASDs may close spontaneously', detail: 'Observe.' },
    { logic: 'Close moderate–large shunt (Qp:Qs >1.5:1)', detail: 'Elective at 2–5 years of age.' },
    { logic: 'Large ASD with HF / faltering growth → close in infancy', detail: 'Device closure (secundum) vs surgery (primum / sinus venosus).' },
  ],

  mnemonics: [
    { hook: 'ASD: Fixed and Functional', expansion: ['Fixed split S2 = the hallmark', 'Functional (relative) pulmonary stenosis makes the murmur — ASD flow itself is silent'] },
  ],

  traps: [
    {
      questionCategory: 'Source of the murmur',
      wrongInstinct: 'Blood rushing through the ASD makes the murmur',
      rightAnswer: 'Relative pulmonary stenosis (↑flow across a normal pulmonary valve)',
      why: 'The atrial pressure gradient is tiny, so flow across the ASD is silent. The audible murmur is increased flow across the pulmonary (and tricuspid) valves.',
    },
    {
      questionCategory: 'Physical examination finding',
      wrongInstinct: 'Loud single S2',
      rightAnswer: 'Widely fixed split S2',
      why: 'RV volume overload fixes RV ejection time, so the split does not vary with respiration — the defining ASD sign.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-year-old is asymptomatic. Exam: soft systolic ejection murmur at the LUSB and a split S2 that does not change with respiration. Best explanation for the fixed split?',
      options: [
        { id: 'a', text: 'Aortic stenosis' },
        { id: 'b', text: 'RV volume overload from an atrial septal defect' },
        { id: 'c', text: 'Patent ductus arteriosus' },
        { id: 'd', text: 'Normal variant' },
      ],
      answerId: 'b',
      explanation: 'A widely fixed split S2 reflects RV volume overload (constant RV ejection time) from a left-to-right ASD shunt. The ejection murmur is relative pulmonary stenosis, not flow through the defect.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Heart sounds — ASD', murmur: 'asd', caption: 'Soft ejection systolic murmur + a WIDELY FIXED split S2 (A2/P2).' },
  ],
};

export default asd;
