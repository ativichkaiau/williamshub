import type { Lecture } from '../../lib/types';
import { PACEMAKER_CONDUCTION } from '../../lib/figures';

export const ghpSaNodePacemaker: Lecture = {
  id: 'ghp-sa-node-pacemaker',
  title: 'The SA Node & Pacemaker Automaticity',
  system: 'cardiovascular',
  source: 'Ch 10 — Rhythmical Excitation of the Heart',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 10 Rhythmical Excitation' },
    { kind: 'mechanism', label: 'Phase-4 drift · funny current' },
    { kind: 'exam', label: 'Fastest pacemaker wins' },
  ],

  highYield: [
    '**The SA node sits in the superolateral right atrial wall just below and lateral to the SVC opening**, and its fibres are **small (~3–5 μm), nearly devoid of contractile filaments**, and continuous with atrial muscle — so its impulse escapes immediately into the atria. **Its maximum diastolic potential is only −55 to −60 mV**, not −85 mV, and that single fact explains everything else about it.',
    '**At −55 mV the fast Na⁺ channels are permanently inactivated**, so phase 0 cannot be Na⁺-driven. The upstroke is carried instead by **slow L-type Ca²⁺ channels** — hence a **slow, low-amplitude upstroke and slow conduction (~0.03–0.05 m/s)** through nodal tissue. There is **no true resting potential and no phase 1 or 2**: the nodal action potential is a rounded Ca²⁺ spike.',
    '**Phase 4 is an unstable, spontaneous depolarising drift — the pacemaker potential — built from three currents.** (1) The **funny current I_f**, an inward Na⁺-carried current through **HCN channels that activate on hyperpolarisation and are opened further by cAMP**; (2) **progressive decay of the outward K⁺ current**; (3) a late **T-type Ca²⁺ current**. Drift reaches **threshold ~−40 mV** and fires. **Rate is set by the SLOPE of that drift, the threshold, and the maximum diastolic potential.**',
    '**Fastest pacemaker wins.** Intrinsic rates: **SA node ~70–80/min > AV node ~40–60/min > Purkinje/ventricular ~15–40/min**. The SA node does not suppress the others by being dominant in any hierarchical sense — it simply **reaches threshold first and discharges them before their own drift arrives**. Ectopic sites are additionally silenced by **overdrive suppression**: being driven fast loads the cell with Na⁺, stimulating the **electrogenic Na⁺/K⁺-ATPase**, whose hyperpolarising current flattens their phase-4 drift.',
    '**Autonomic control is control of the slope.** **Sympathetic (β1 → cAMP)** increases I_f and Ca²⁺ current → **steeper drift → faster rate** (up to 180–200/min). **Vagal (M2 → ACh)** opens **K⁺ channels → hyperpolarises the node toward −65 to −75 mV and flattens the slope → slower rate**; intense vagal activity can stop the SA node entirely.',
    '**Clinical anchor:** because latent pacemakers were being suppressed, an SA node that stops leaves a **pause of seconds before an escape rhythm appears** — the mechanism of **Stokes–Adams syncope** after sudden complete AV block, where ventricular escape may take **5–30 s** to emerge. **Escape rhythms are protective; ectopic beats that fire faster than the SA node are usurping.** The drug **ivabradine** slows rate by blocking I_f alone, with no effect on contractility.',
  ],

  mechanism: {
    title: 'A leaky membrane that cannot rest, firing first and therefore ruling',
    steps: [
      { id: 's1', label: 'Maximum diastolic potential only −55 to −60 mV → fast Na⁺ channels inactivated', emphasis: 'key' },
      { id: 's2', label: 'Phase 4 drift: funny current in, K⁺ current decaying, T-type Ca²⁺ late', emphasis: 'key' },
      { id: 's3', label: 'Drift reaches threshold ~−40 mV → L-type Ca²⁺ upstroke (slow phase 0)' },
      { id: 's4', label: 'Impulse spreads to atria and discharges all latent pacemakers before they fire', emphasis: 'key' },
      { id: 's5', label: 'Repeated overdrive loads Na⁺ → electrogenic pump hyperpolarises them (overdrive suppression)' },
      { id: 's6', label: 'If the SA node fails, suppression lifts slowly → pause, then escape rhythm', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'No stable resting potential in nodal cells', mechanism: 'Continuous phase-4 depolarising drift (automaticity)', significance: 'key' },
    { sign: 'Slow, rounded, low-amplitude upstroke in SA nodal cells', mechanism: 'Phase 0 carried by L-type Ca²⁺, not fast Na⁺ channels', significance: 'key' },
    { sign: 'Junctional escape rhythm at 40–60/min when the SA node fails', mechanism: 'AV nodal automaticity emerges once overdrive is removed', significance: 'key' },
    { sign: 'Idioventricular escape at 15–40/min in complete AV block', mechanism: 'Purkinje automaticity is the slowest but last-resort pacemaker', significance: 'key' },
    { sign: 'Syncope seconds after the onset of complete block (Stokes–Adams)', mechanism: 'Overdrive-suppressed escape pacemakers take 5–30 s to start', significance: 'supportive' },
    { sign: 'Ivabradine slows heart rate without reducing contractility', mechanism: 'Selective blockade of the funny current in the SA node', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Inward current activated by hyperpolarisation and enhanced by cAMP', meaning: 'The funny current through HCN channels' },
    { clue: 'Slope of phase 4 in nodal cells', meaning: 'The determinant of discharge rate (steeper = faster)' },
    { clue: 'Why the SA node is the pacemaker rather than the AV node', meaning: 'Its faster drift reaches threshold first and discharges the others' },
    { clue: 'Rhythm at 40–60/min with narrow QRS after sinus arrest', meaning: 'AV junctional escape rhythm' },
    { clue: 'Silencing of latent pacemakers by being driven rapidly', meaning: 'Overdrive suppression (electrogenic Na⁺/K⁺-ATPase)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Automaticity explains both safety and danger: escape rhythms keep a blocked heart alive, while an ectopic focus firing faster than the SA node captures the heart and produces a tachyarrhythmia. Ectopic beats: [[premature-contractions]]; the block that unmasks escape rhythms: [[av-block]].' },
    { logic: 'Contrast with working myocardium', detail: 'Nodal cells are calcium-driven with no stable resting potential; atrial and ventricular myocytes are sodium-driven with a plateau — compare [[ghp-cardiac-muscle-action-potential]] and [[cardiac-action-potential]]. How this impulse is then distributed is covered in [[ghp-conduction-system-autonomic-control]].' },
  ],

  mnemonics: [
    { hook: 'Fastest drift wins: SA 70–80 > AV 40–60 > Purkinje 15–40', expansion: ['The SA node rules by firing first, not by rank', 'Slower sites are extra insurance, not rivals'] },
    { hook: 'Sympathetic steepens the slope, vagus flattens it and drops the floor', expansion: ['Beta-1 and cAMP open more funny channels → faster', 'ACh opens K⁺ channels → hyperpolarisation → slower'] },
  ],

  traps: [
    {
      questionCategory: 'Why the SA node dominates',
      wrongInstinct: 'The SA node actively inhibits the AV node and Purkinje fibres through nerves or transmitters',
      rightAnswer: 'It simply depolarises them before their own slower phase-4 drift reaches threshold; the added suppression is overdrive suppression, an intrinsic property of the driven cells',
      why: 'Take the SA node away and the latent pacemakers wake up unaided — no inhibitory signal was ever being sent.',
    },
    {
      questionCategory: 'Ionic basis of the nodal upstroke',
      wrongInstinct: 'Phase 0 in the SA node is a fast sodium spike like the ventricular action potential',
      rightAnswer: 'At a maximum diastolic potential of −55 mV the fast Na⁺ channels are inactivated, so phase 0 is carried by slow L-type Ca²⁺ current',
      why: 'That is also why nodal conduction is slow and why calcium-channel blockers act selectively on the nodes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why is the sinoatrial node normally the pacemaker of the heart?',
      options: [
        { id: 'a', text: 'It is the only cardiac tissue capable of spontaneous depolarisation' },
        { id: 'b', text: 'Its phase-4 drift is steepest, so it reaches threshold before any other automatic tissue' },
        { id: 'c', text: 'It releases acetylcholine that suppresses the AV node' },
        { id: 'd', text: 'It has the most negative resting membrane potential in the heart' },
      ],
      answerId: 'b',
      explanation: 'AV nodal and Purkinje cells are also automatic (40–60 and 15–40/min), but the SA node drifts to threshold fastest and discharges them first, reinforced by overdrive suppression. Its maximum diastolic potential is the least negative in the heart, not the most (d).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Vagal stimulation slows the sinus rate mainly by:',
      options: [
        { id: 'a', text: 'Increasing potassium conductance, hyperpolarising the node and flattening phase 4' },
        { id: 'b', text: 'Blocking L-type calcium channels during phase 0' },
        { id: 'c', text: 'Increasing cyclic AMP and the funny current' },
        { id: 'd', text: 'Shortening the atrial action potential duration' },
      ],
      answerId: 'a',
      explanation: 'Acetylcholine acting on M2 receptors opens potassium channels, driving the maximum diastolic potential toward −65 to −75 mV and reducing the slope of phase 4, so threshold is reached later. Raising cAMP and the funny current (c) is the sympathetic effect, which speeds the node.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient develops sudden complete AV block and faints after several seconds before recovering with a slow pulse. The delay before the escape rhythm appears is explained by:',
      options: [
        { id: 'a', text: 'Ischaemic damage to the Purkinje system' },
        { id: 'b', text: 'Overdrive suppression of latent pacemakers, which must recover their automaticity' },
        { id: 'c', text: 'Depletion of sarcoplasmic reticulum calcium' },
        { id: 'd', text: 'Persisting vagal tone on the ventricular myocardium' },
      ],
      answerId: 'b',
      explanation: 'This is the Stokes–Adams pattern: Purkinje pacemakers have been chronically overdriven and hyperpolarised by the electrogenic sodium pump, so their phase-4 drift takes 5–30 s to recover once driving stops. Cerebral hypoperfusion during that pause causes the syncope.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Pacemaker potential and the conduction system', svg: PACEMAKER_CONDUCTION, caption: 'Unstable phase 4 drifts from about −60 mV to a threshold near −40 mV, then fires a calcium-driven upstroke. Slope, threshold and maximum diastolic potential set the rate.' },
  ],
};

export default ghpSaNodePacemaker;
