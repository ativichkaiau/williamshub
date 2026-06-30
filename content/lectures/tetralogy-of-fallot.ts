import type { Lecture } from '../../lib/types';

export const tetralogyOfFallot: Lecture = {
  id: 'tetralogy-of-fallot',
  title: 'Tetralogy of Fallot (TOF)',
  system: 'cardiovascular',
  source: 'L3 — Congenital Heart Disease (Peds, MedCMU 2025)',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L3 Congenital HD' },
    { kind: 'disease', label: 'Tetralogy of Fallot' },
    { kind: 'mechanism', label: 'Right-to-left shunt' },
    { kind: 'exam', label: 'Single S2' },
    { kind: 'treatment', label: 'Hypoxic spell' },
  ],

  highYield: [
    'Four features from anterocephalad deviation of the outlet septum: **pulmonary (infundibular) stenosis, overriding aorta, VSD, RVH** (PROVe).',
    'Most common **cyanotic** CHD; associated with **22q11.2 microdeletion** (DiGeorge).',
    'RVOT obstruction → **right-to-left shunt across the VSD** → cyanosis — **without heart failure**.',
    '**SEM at LUSB** (from the pulmonary stenosis) + **single S2**.',
    'Hypoxic **“tet” spells**; **boot-shaped heart** on CXR.',
  ],

  mechanism: {
    title: 'RVOT obstruction → right-to-left shunt → cyanosis',
    steps: [
      { id: 's1', label: 'Infundibular (subpulmonic) stenosis', emphasis: 'key' },
      { id: 's2', label: '↑ RV pressure / RVOT obstruction' },
      { id: 's3', label: 'R→L shunt across VSD', emphasis: 'key' },
      { id: 's4', label: 'Deoxygenated blood → overriding aorta' },
      { id: 's5', label: 'Cyanosis' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Hypoxic “tet” spell',
        steps: [
          { id: 't1', label: 'Infundibular spasm + ↓SVR' },
          { id: 't2', label: '↑ R→L shunt' },
          { id: 't3', label: 'Acute severe hypoxia', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Systolic ejection murmur at LUSB', mechanism: 'Pulmonary stenosis — the large VSD is silent, so the murmur is NOT from the VSD', significance: 'key' },
    { sign: 'Single S2', mechanism: 'P2 soft/inaudible because of pulmonary stenosis', significance: 'key' },
    { sign: 'Murmur softens / disappears during a tet spell', mechanism: 'Less flow crosses the RVOT as obstruction worsens', significance: 'key' },
    { sign: 'Central cyanosis, clubbing', mechanism: 'Chronic right-to-left shunting', significance: 'supportive' },
    { sign: 'No signs of heart failure', mechanism: 'RVOT obstruction limits pulmonary overflow', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CXR: boot-shaped heart (coeur en sabot) + ↓pulmonary vascular markings', meaning: 'RVH with uplifted apex; reduced pulmonary blood flow' },
    { clue: 'ECG: RAD + RVH', meaning: 'Right ventricular pressure overload' },
    { clue: 'Echocardiography', meaning: 'Diagnostic — the 4 features + RVOT gradient' },
    { clue: 'Bloods: polycythemia; screen 22q11.2 & iron deficiency', meaning: 'Chronic hypoxia; Fe deficiency raises stroke risk' },
  ],

  treatment: [
    { logic: 'Hypoxic spell: calm + knee–chest position (↑SVR)', detail: 'Then 100% O2, IV fluid bolus, morphine, NaHCO3, phenylephrine/norepinephrine (↑SVR), esmolol/propranolol (relieve infundibular spasm).' },
    { logic: 'Chronic medical: propranolol for spells; iron supplementation; manage polycythemia', detail: 'Fe deficiency → CVA risk; phlebotomy + FFP before surgery if Hct >65%. IE prophylaxis.' },
    { logic: 'Surgery: modified Blalock–Taussig shunt (palliation) → total correction', detail: 'Total repair = VSD closure + relief of RVOT obstruction.' },
  ],

  mnemonics: [
    { hook: 'PROVe', expansion: ['Pulmonary stenosis', 'RVH', 'Overriding aorta', 'VSD'] },
    { hook: 'Knee-to-chest = ↑SVR', expansion: ['Squatting / knee–chest raises systemic vascular resistance', '↑SVR pushes blood across the VSD into the lungs → less R→L shunt → less cyanosis'] },
  ],

  traps: [
    {
      questionCategory: 'Murmur intensity vs severity',
      wrongInstinct: 'Louder murmur = more severe TOF',
      rightAnswer: 'Softer / absent murmur = more severe (worse RVOT obstruction)',
      why: 'The murmur is pulmonary-stenosis flow; the worse the obstruction the less flow crosses it. In a tet spell the murmur vanishes.',
    },
    {
      questionCategory: 'Why no heart failure',
      wrongInstinct: 'Cyanotic, therefore must be in heart failure',
      rightAnswer: 'TOF is cyanotic but typically WITHOUT heart failure',
      why: 'RVOT obstruction limits pulmonary blood flow, so the lungs are not volume-overloaded — cyanosis without CHF.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cyanotic toddler suddenly becomes more cyanotic and lethargic, and his systolic ejection murmur becomes quieter. What is the immediate positioning maneuver?',
      options: [
        { id: 'a', text: 'Lay supine and flat' },
        { id: 'b', text: 'Knee–chest position' },
        { id: 'c', text: 'Trendelenburg (head-down)' },
        { id: 'd', text: 'Left lateral decubitus' },
      ],
      answerId: 'b',
      explanation: 'This is a hypoxic (tet) spell. Knee–chest position raises systemic vascular resistance, reducing the right-to-left shunt. The murmur softened because less blood is crossing the obstructed RVOT.',
      tests: 'treatment',
    },
  ],
};

export default tetralogyOfFallot;
