import type { Lecture } from '../../lib/types';
import { CARDIAC_ACTION_POTENTIAL } from '../../lib/figures';

export const antiarrhythmicDrugs: Lecture = {
  id: 'antiarrhythmic-drugs',
  title: 'Antiarrhythmic Drugs (Vaughan-Williams)',
  system: 'cardiovascular',
  source: 'L4 — Antiarrhythmic Drugs',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L4 Antiarrhythmic Drugs' },
    { kind: 'disease', label: 'Arrhythmia pharmacology' },
    { kind: 'mechanism', label: 'Action-potential channels' },
    { kind: 'treatment', label: 'Drug-of-choice map' },
  ],

  highYield: [
    'Vaughan-Williams: **I = Na⁺ channel blockers** (IA/IB/IC); **II = beta-blockers**; **III = K⁺ channel blockers** (prolong AP/QT); **IV = non-DHP Ca²⁺ channel blockers**.',
    '**IA** (quinidine, procainamide, disopyramide) — moderate Na block + prolong QT. **IB** (lidocaine, mexiletine) — weak, ventricular/ischemic tissue. **IC** (flecainide, propafenone) — strong Na block, **proarrhythmic**.',
    '**Amiodarone (III)**: broad-spectrum but big toxicity (thyroid, lung, liver, cornea, skin).',
    'Treatment map: **AVNRT → adenosine** (acute); **AF → rate (BB/CCB/digoxin) ± rhythm (amiodarone)**; **VT → amiodarone/procainamide/lidocaine**; **TdP → Mg**; **brady/AV block → atropine/isoproterenol**.',
    '**Class IC increases mortality in structural/ischemic heart disease (CAST)** — avoid post-MI.',
  ],

  mechanism: {
    title: 'Where each class acts on the action potential',
    steps: [
      { id: 's1', label: 'Phase 0 (Na⁺ influx) → Class I (IA/IB/IC)', emphasis: 'key' },
      { id: 's2', label: 'SA/AV node (β-adrenergic) → Class II (beta-blockers)' },
      { id: 's3', label: 'Phase 3 (K⁺ efflux, repolarization) → Class III (prolong AP/QT)', emphasis: 'key' },
      { id: 's4', label: 'SA/AV node (Ca²⁺) → Class IV (non-DHP CCB)' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'Proarrhythmia',
        steps: [
          { id: 'd1', label: 'IA / III prolong QT → Torsades' },
          { id: 'd2', label: 'IC → proarrhythmia in structural heart disease', emphasis: 'danger' },
        ],
      },
    ],
  },

  // For a drug module, "examFindings" = recognizable toxicity clues.
  examFindings: [
    { sign: 'Procainamide → drug-induced lupus (LE-like syndrome)', mechanism: 'Class IA chronic toxicity', significance: 'key' },
    { sign: 'Amiodarone → pulmonary fibrosis, thyroid dysfunction, corneal microdeposits, blue-grey skin', mechanism: 'Class III multi-organ toxicity', significance: 'key' },
    { sign: 'Quinidine → cinchonism (tinnitus, GI) + QT prolongation/syncope', mechanism: 'Class IA toxicity', significance: 'key' },
    { sign: 'Lidocaine → CNS effects (dizziness, seizures)', mechanism: 'Class IB toxicity', significance: 'supportive' },
    { sign: 'Verapamil / propranolol → bradycardia, hypotension, ↓inotropy (CHF)', mechanism: 'Class IV / II negative chrono- & inotropy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG monitoring: QT (IA, III) and QRS widening (IC)', meaning: 'Detect proarrhythmia early' },
    { clue: 'Amiodarone baseline + monitoring: TFTs, LFTs, CXR/PFTs, eye exam', meaning: 'Surveil multi-organ toxicity' },
    { clue: 'Digoxin level / electrolytes', meaning: 'Quinidine raises digoxin; correct K⁺/Mg²⁺' },
  ],

  treatment: [
    { logic: 'SVT / AVNRT: vagal → IV adenosine (acute); BB/CCB/digoxin (prevent)', detail: 'Adenosine transiently blocks the AV node to break re-entry.' },
    { logic: 'AF / flutter: rate control (BB/CCB/digoxin); rhythm (amiodarone/flecainide); anticoagulate', detail: 'Flecainide only if structurally normal heart.' },
    { logic: 'VT: amiodarone, procainamide, or lidocaine; ICD long-term', detail: 'Hemodynamically unstable → cardiovert.' },
    { logic: 'TdP: IV magnesium. Bradyarrhythmia / AV block: atropine, isoproterenol → pacing', detail: 'Match the drug to the rhythm.' },
  ],

  mnemonics: [
    { hook: 'Some Block Potassium, Channels (I-II-III-IV)', expansion: ['I = Sodium channel blockers', 'II = Beta-blockers', 'III = Potassium channel blockers (prolong QT)', 'IV = Calcium channel blockers'] },
    { hook: 'IC = “I Can’t” (structural heart disease)', expansion: ['Flecainide/propafenone are proarrhythmic', '↑mortality post-MI / structural disease (CAST)'] },
  ],

  traps: [
    {
      questionCategory: 'Drug in structural/ischemic heart disease',
      wrongInstinct: 'Flecainide is a good all-round antiarrhythmic',
      rightAnswer: 'Avoid Class IC (flecainide) in structural / ischemic heart disease — proarrhythmic',
      why: 'CAST showed Class IC drugs increase mortality after MI; reserve them for structurally normal hearts.',
    },
    {
      questionCategory: 'Acute AVNRT drug',
      wrongInstinct: 'Start amiodarone',
      rightAnswer: 'Vagal maneuvers, then IV adenosine',
      why: 'Adenosine transiently blocks the AV node to terminate the reentrant circuit — first-line acute therapy for AVNRT.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on a long-term antiarrhythmic develops pulmonary fibrosis, abnormal thyroid function, and corneal microdeposits. Which drug?',
      options: [
        { id: 'a', text: 'Lidocaine' },
        { id: 'b', text: 'Amiodarone' },
        { id: 'c', text: 'Verapamil' },
        { id: 'd', text: 'Flecainide' },
      ],
      answerId: 'b',
      explanation: 'This triad of multi-organ toxicity (lung, thyroid, eye, also liver and skin) is characteristic of amiodarone, a Class III drug — hence baseline and periodic TFT/LFT/CXR/eye monitoring.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A regular narrow-complex tachycardia at 180/min with no visible P waves (AVNRT). Vagal maneuvers fail. Best acute drug?',
      options: [
        { id: 'a', text: 'Adenosine' },
        { id: 'b', text: 'Amiodarone' },
        { id: 'c', text: 'Digoxin' },
        { id: 'd', text: 'Flecainide' },
      ],
      answerId: 'a',
      explanation: 'IV adenosine causes transient AV nodal block that interrupts the AVNRT re-entrant circuit — the first-line acute drug after vagal maneuvers fail.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Cardiac action potential & drug-class targets', svg: CARDIAC_ACTION_POTENTIAL, caption: 'Class I → phase 0 (Na⁺); III → phase 3 (K⁺); IV → Ca²⁺; II → SA/AV nodes.' },
  ],
};

export default antiarrhythmicDrugs;
