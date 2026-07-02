import type { Lecture } from '../../lib/types';
import { PACEMAKER_CONDUCTION } from '../../lib/figures';

export const pacemakerConductionSystem: Lecture = {
  id: 'pacemaker-conduction-system',
  title: 'The Pacemaker & Cardiac Conduction System',
  system: 'cardiovascular',
  source: 'L4 — Cardiac Electrophysiology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L4 Cardiac Electrophysiology' },
    { kind: 'mechanism', label: 'Automaticity & spread' },
    { kind: 'exam', label: 'SA node · AV delay' },
  ],

  highYield: [
    '**The heartbeat is myogenic — it originates in the SA node,** the natural pacemaker (in the right atrium). The conduction pathway: **SA node → (through atria) → AV node → Bundle of His → left & right bundle branches → Purkinje fibres → ventricular myocardium.**',
    '**Pacemaker (slow-response) cells have NO stable resting potential:** their **phase 4 slowly, spontaneously depolarises** (the "funny current" **I_f**, a slow Na⁺ influx, plus Ca²⁺ currents) until threshold → **automaticity**. Their phase-0 upstroke is **Ca²⁺-driven** (slower than the Na⁺ upstroke of myocytes).',
    '**The AV node deliberately DELAYS the impulse (~0.1 s).** This delay (seen as the **PR interval**) lets the **atria finish contracting and fill the ventricles before ventricular systole**. The fibrous cardiac skeleton insulates the atria from the ventricles so the impulse can only pass via the AV node.',
    '**Hierarchy of pacemakers (intrinsic rates):** **SA node ~60–100/min > AV node ~40–60 > Purkinje/ventricle ~20–40.** The **fastest pacemaker sets the rate** and suppresses the slower ones (overdrive suppression). If the SA node fails, a slower **escape rhythm** takes over; complete AV block → a slow ventricular escape.',
    '**Autonomic modulation.** **Sympathetic (noradrenaline, β1)** → **↑phase-4 slope → faster rate (positive chronotropy)** and faster AV conduction. **Parasympathetic (vagus, ACh, muscarinic)** → **↓phase-4 slope + hyperpolarisation → slower rate**. The vagus dominates at rest (resting HR would be ~100 without it).',
  ],

  mechanism: {
    title: 'SA node fires → spreads → AV delay → ventricles',
    steps: [
      { id: 's1', label: 'SA node = pacemaker; path SA→AV→His→bundles→Purkinje', emphasis: 'key' },
      { id: 's2', label: 'Phase-4 spontaneous depolarisation (I_f) → automaticity', emphasis: 'key' },
      { id: 's3', label: 'AV node delays ~0.1 s (PR interval) → atria empty first', emphasis: 'key' },
      { id: 's4', label: 'Fastest pacemaker wins (SA > AV > ventricle)' },
      { id: 's5', label: 'Sympathetic ↑rate; vagus ↓rate (dominant at rest)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Spontaneous phase-4 depolarisation', mechanism: 'Funny current (I_f) → SA-node automaticity', significance: 'key' },
    { sign: 'AV nodal delay (PR interval ~0.12–0.20 s)', mechanism: 'Lets atria fill ventricles before systole', significance: 'key' },
    { sign: 'Ventricular escape rhythm ~30–40/min in complete heart block', mechanism: 'Slower distal pacemaker takes over', significance: 'key' },
    { sign: 'Vagal stimulation slows the heart', mechanism: 'ACh → ↓phase-4 slope + hyperpolarisation (M2)', significance: 'supportive' },
    { sign: 'Sympathetic drive speeds the heart', mechanism: 'Noradrenaline (β1) → ↑phase-4 slope', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The heart\'s natural pacemaker', meaning: 'SA node' },
    { clue: 'Current driving spontaneous pacemaker depolarisation', meaning: 'The "funny current" (I_f)' },
    { clue: 'ECG interval representing AV nodal delay', meaning: 'PR interval' },
    { clue: 'Effect of the vagus on heart rate', meaning: 'Slows it (↓phase-4 slope, hyperpolarisation)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This underlies bradycardia/tachycardia, heart block, escape rhythms, and drugs (β-blockers/atropine on the SA/AV nodes; ivabradine blocks I_f). AV delay = the PR interval on the ECG ([[ecg-formation-waves]]). Arrhythmias are covered clinically in HCVS-2 ([[av-block]]).' },
  ],

  mnemonics: [
    { hook: 'Path: "SA → AV → His → bundles → Purkinje"', expansion: ['Rates: SA 60–100 > AV 40–60 > ventricle 20–40'] },
    { hook: 'Sympathetic = phase-4 slope UP (faster); vagus = slope DOWN (slower)', expansion: ['Funny current I_f = automaticity'] },
  ],

  traps: [
    {
      questionCategory: 'Purpose of the AV nodal delay',
      wrongInstinct: 'The AV node delays the impulse to slow the overall heart rate',
      rightAnswer: 'The AV delay lets the ATRIA finish contracting and FILL the ventricles before ventricular systole (optimising the "atrial kick"), not to set overall rate',
      why: 'The delay ensures correct atrial-then-ventricular sequencing; the rate is set by the SA node\'s phase-4 slope.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The unstable, spontaneously depolarising phase 4 that gives SA-node cells their automaticity is driven largely by:',
      options: [
        { id: 'a', text: 'A stable resting potassium potential' },
        { id: 'b', text: 'The "funny current" (I_f), a slow inward Na⁺ current' },
        { id: 'c', text: 'Fast Na⁺ channels (as in ventricular phase 0)' },
        { id: 'd', text: 'Chloride efflux' },
      ],
      answerId: 'b',
      explanation: 'Pacemaker cells lack a stable resting potential; the funny current (I_f) plus Ca²⁺ currents slowly depolarise phase 4 to threshold, generating automatic rhythmic firing.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Increased sympathetic (β1-adrenergic) stimulation increases heart rate by:',
      options: [
        { id: 'a', text: 'Decreasing the slope of pacemaker phase 4' },
        { id: 'b', text: 'Increasing the slope of pacemaker phase-4 depolarisation (reaching threshold sooner)' },
        { id: 'c', text: 'Prolonging the AV delay' },
        { id: 'd', text: 'Hyperpolarising the SA node' },
      ],
      answerId: 'b',
      explanation: 'Sympathetic β1 stimulation steepens the phase-4 slope so SA-node cells reach threshold sooner (positive chronotropy). The vagus does the opposite (flattens the slope + hyperpolarises).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Conduction system & pacemaker', svg: PACEMAKER_CONDUCTION, caption: 'SA→AV→His→bundles→Purkinje; AV delay; pacemaker phase-4 slope (I_f, automaticity); sympathetic speeds / vagus slows.' },
  ],
};

export default pacemakerConductionSystem;
