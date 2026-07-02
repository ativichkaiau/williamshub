import type { Lecture } from '../../lib/types';
import { CARDIAC_ACTION_POTENTIAL } from '../../lib/figures';

export const cardiacActionPotential: Lecture = {
  id: 'cardiac-action-potential',
  title: 'The Cardiac Action Potential',
  system: 'cardiovascular',
  source: 'L4 — Cardiac Electrophysiology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L4 Cardiac Electrophysiology' },
    { kind: 'mechanism', label: 'Phases 0–4' },
    { kind: 'exam', label: 'Plateau · long refractory' },
  ],

  highYield: [
    '**The ventricular/atrial (fast-response) action potential has five phases.** **Phase 0 (upstroke):** rapid **Na⁺ influx** (fast Na⁺ channels) → sharp depolarisation. **Phase 1:** brief repolarisation (transient K⁺ efflux + Na⁺ inactivation). **Phase 2 (PLATEAU):** **Ca²⁺ influx (L-type channels) balances K⁺ efflux** — the hallmark of cardiac muscle, sustaining contraction. **Phase 3:** repolarisation (K⁺ efflux dominates). **Phase 4:** resting potential (~−90 mV, K⁺-set).',
    '**The plateau (phase 2) is the key difference from nerve/skeletal muscle.** The Ca²⁺ that enters during the plateau **triggers Ca²⁺-induced Ca²⁺ release** from the SR → contraction, and it **prolongs the action potential (~200–300 ms).**',
    '**The long AP means a long absolute refractory period** — so **cardiac muscle CANNOT be tetanised** (a new AP can\'t fire until the muscle has nearly relaxed). This guarantees the heart alternates contraction and relaxation (filling), preventing sustained contraction that would stop the pump.',
    '**Two response types.** **Fast-response** cells (atrial/ventricular myocytes, Purkinje) → Na⁺-driven fast phase 0, stable phase 4. **Slow-response** cells (SA and AV nodes) → **Ca²⁺-driven** slower phase 0 and an **unstable phase 4 (automaticity)** — covered in [[pacemaker-conduction-system]].',
    '**Clinical anchors:** the **QT interval reflects ventricular AP duration**; **long-QT (drugs, congenital) → torsades de pointes**. Antiarrhythmic drug classes target these currents: **Class I → Na⁺ (phase 0)**, **Class III → K⁺ (phase 3, prolong AP)**, **Class IV → Ca²⁺ (nodes)**.',
  ],

  mechanism: {
    title: 'Na⁺ up → Ca²⁺ plateau → K⁺ down',
    steps: [
      { id: 's1', label: 'Phase 0: fast Na⁺ influx → rapid upstroke', emphasis: 'key' },
      { id: 's2', label: 'Phase 2 PLATEAU: Ca²⁺ influx balances K⁺ efflux', emphasis: 'key' },
      { id: 's3', label: 'Ca²⁺ → Ca²⁺-induced Ca²⁺ release → contraction' },
      { id: 's4', label: 'Phase 3: K⁺ efflux repolarises; phase 4 rest (~−90 mV)' },
      { id: 's5', label: 'Long refractory period → heart cannot be tetanised', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Plateau phase (phase 2)', mechanism: 'L-type Ca²⁺ influx balancing K⁺ efflux', significance: 'key' },
    { sign: 'Cardiac muscle cannot be tetanised', mechanism: 'Long absolute refractory period (long AP)', significance: 'key' },
    { sign: 'Phase 0 upstroke in ventricular myocytes', mechanism: 'Fast Na⁺ channel influx (fast response)', significance: 'key' },
    { sign: 'Prolonged QT → torsades de pointes', mechanism: 'Prolonged ventricular AP (K⁺-current block)', significance: 'supportive' },
    { sign: 'Ca²⁺ entry triggers SR Ca²⁺ release', mechanism: 'Ca²⁺-induced Ca²⁺ release → contraction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ion responsible for the plateau', meaning: 'Ca²⁺ (L-type channels)' },
    { clue: 'Ion of the rapid phase-0 upstroke (fast response)', meaning: 'Na⁺' },
    { clue: 'Why the heart cannot tetanise', meaning: 'Its long refractory period (long action potential)' },
    { clue: 'ECG interval reflecting ventricular AP duration', meaning: 'QT interval' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The plateau and long refractory period protect the pump and are the basis of QT/torsades and antiarrhythmic drug classes (I Na⁺, III K⁺, IV Ca²⁺). Pacemaker/nodal APs and conduction: [[pacemaker-conduction-system]]; the resulting ECG: [[ecg-formation-waves]]. Overlaps HCVS-2 arrhythmias.' },
  ],

  mnemonics: [
    { hook: 'Phases: "0 Na up, 1 dip, 2 Ca plateau, 3 K down, 4 rest"', expansion: ['Plateau = Ca²⁺ (unique to heart)'] },
    { hook: 'Long AP → long refractory → NO tetanus (heart must relax to fill)', expansion: ['Protects the pump'] },
  ],

  traps: [
    {
      questionCategory: 'What makes the cardiac plateau?',
      wrongInstinct: 'The plateau of the cardiac action potential is due to continued Na⁺ influx',
      rightAnswer: 'The plateau (phase 2) is due to Ca²⁺ influx (L-type channels) balancing K⁺ efflux — Na⁺ channels are already inactivated',
      why: 'The fast Na⁺ current makes only the phase-0 upstroke; the sustained plateau is a Ca²⁺ phenomenon that also drives contraction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The plateau phase (phase 2) of the ventricular action potential is produced mainly by:',
      options: [
        { id: 'a', text: 'Rapid Na⁺ influx' },
        { id: 'b', text: 'Ca²⁺ influx through L-type channels balancing K⁺ efflux' },
        { id: 'c', text: 'Cl⁻ influx' },
        { id: 'd', text: 'The Na⁺/K⁺-ATPase' },
      ],
      answerId: 'b',
      explanation: 'During the plateau, inward Ca²⁺ (L-type channels) roughly balances outward K⁺, prolonging the AP and triggering Ca²⁺-induced Ca²⁺ release for contraction. Phase 0 is the Na⁺ upstroke.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Cardiac muscle cannot undergo tetanic contraction because:',
      options: [
        { id: 'a', text: 'It lacks calcium' },
        { id: 'b', text: 'Its long action potential produces a long refractory period lasting nearly the whole contraction' },
        { id: 'c', text: 'It has no gap junctions' },
        { id: 'd', text: 'It cannot be stimulated repeatedly' },
      ],
      answerId: 'b',
      explanation: 'The prolonged plateau gives cardiac muscle a long absolute refractory period, so a second AP cannot fire until the muscle has nearly relaxed — preventing tetanus and ensuring alternating contraction/filling.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Cardiac action potential', svg: CARDIAC_ACTION_POTENTIAL, caption: 'Phase 0 Na⁺ up → phase 2 Ca²⁺ plateau → phase 3 K⁺ down → phase 4 rest. Long refractory period prevents tetanus.' },
  ],
};

export default cardiacActionPotential;
