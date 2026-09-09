import type { Lecture } from '../../lib/types';
import { PACEMAKER_CONDUCTION } from '../../lib/figures';

export const ghpConductionSystemAutonomicControl: Lecture = {
  id: 'ghp-conduction-system-autonomic-control',
  title: 'Conduction Pathways & Autonomic Control',
  system: 'cardiovascular',
  source: 'Ch 10 — Rhythmical Excitation of the Heart',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 10 Rhythmical Excitation' },
    { kind: 'mechanism', label: 'AV delay · Purkinje spread' },
    { kind: 'exam', label: 'Why the AV node is slow' },
  ],

  highYield: [
    '**Route of one beat: SA node → atrial muscle and internodal tracts → AV node → penetrating AV bundle → bundle branches → Purkinje network → ventricular muscle.** The **anterior internodal tract sends Bachmann\'s bundle to the left atrium** (so both atria depolarise nearly together); **middle and posterior tracts** carry the impulse to the AV node at up to **~1 m/s**, faster than ordinary atrial muscle (~**0.3 m/s**).',
    '**AV nodal delay is the deliberate bottleneck.** The impulse reaches the node ~**0.03 s** after SA discharge, is held up **~0.09 s in the node** and **~0.04 s in the penetrating bundle** — a **total delay of ~0.13 s**, with about **0.16 s** from SA discharge to ventricular muscle. **Purpose: the atria finish emptying before the ventricles contract.** This delay is the **PR interval (0.12–0.20 s)**.',
    '**Why nodal conduction is slow: few gap junctions and small fibres, so junctional resistance to ion flow is high** (aided by the calcium-driven, low-amplitude nodal upstroke). Conduction here is **~0.02–0.05 m/s** — the slowest in the heart. **Purkinje fibres are the opposite in every respect: very large, packed with gap junctions, conducting at 1.5–4 m/s** — about **6× ventricular muscle and up to 150× the AV node** — so the whole ventricular endocardium is activated almost simultaneously.',
    '**The fibrous AV rings make conduction one-way.** The AV bundle is the **only** electrical link between atria and ventricles, and it normally conducts **forward only** — this blocks re-entry of the impulse back into the atria (an **accessory pathway** defeats it, giving pre-excitation and re-entrant tachycardia).',
    '**Ventricular activation sequence: interventricular septum first (left side → right), then endocardium → epicardium and apex → base**, so the apex contracts first and squeezes blood toward the outflow tracts. Endocardial spread takes ~**0.03 s** and muscle transmission another ~**0.03 s** (total ~**0.06 s**); the **last regions depolarised are the posterobasal left ventricle, the upper septum and the pulmonary conus**.',
    '**Autonomic supply is asymmetric — and that asymmetry is examined.** **Sympathetic fibres reach every region, especially the ventricles: rate up to ~180–200/min, force roughly doubled, and conduction (including AV conduction) accelerated.** **Vagal fibres go almost entirely to the SA and AV nodes with little ventricular supply: rate falls, AV conduction slows or blocks, but ventricular contractility is barely touched.** Strong vagal stimulation can arrest the heart for **5–20 s** before **ventricular escape** takes over.',
  ],

  mechanism: {
    title: 'Fast to the node, slow through it, then fast everywhere at once',
    steps: [
      { id: 's1', label: 'SA impulse spreads over both atria; internodal tracts reach the AV node (~0.03 s)' },
      { id: 's2', label: 'AV node holds the impulse ~0.09 s — few gap junctions, high resistance', emphasis: 'key' },
      { id: 's3', label: 'Delay lets atria empty before ventricular systole (= the PR interval)', emphasis: 'key' },
      { id: 's4', label: 'Penetrating bundle → branches → Purkinje at 1.5–4 m/s' },
      { id: 's5', label: 'Septum first, then endocardium → epicardium, apex → base (~0.06 s)', emphasis: 'key' },
      { id: 's6', label: 'Sympathetic speeds rate, force and conduction; vagus slows the nodes', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'PR interval of 0.12–0.20 s', mechanism: 'Time for atrial depolarisation plus AV nodal and bundle delay', significance: 'key' },
    { sign: 'Narrow QRS of about 0.06–0.10 s', mechanism: 'Rapid, near-simultaneous Purkinje delivery to both ventricles', significance: 'key' },
    { sign: 'Wide QRS when the impulse bypasses the Purkinje system', mechanism: 'Slow muscle-to-muscle spread at 0.3–0.5 m/s (bundle branch block, ventricular ectopy)', significance: 'key' },
    { sign: 'Carotid sinus massage terminates a re-entrant supraventricular tachycardia', mechanism: 'Vagal input blocks conduction at the AV node, breaking the circuit', significance: 'key' },
    { sign: 'Ventricular rate stays well below atrial rate in atrial flutter', mechanism: 'AV node acts as a gatekeeper with a long refractory period', significance: 'supportive' },
    { sign: 'Heart stops briefly with intense vagal stimulation, then resumes slowly', mechanism: 'Vagal escape — Purkinje automaticity takes over at 15–40/min', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Slowest conduction in the heart (~0.02–0.05 m/s)', meaning: 'AV node' },
    { clue: 'Fastest conduction in the heart (1.5–4 m/s)', meaning: 'Purkinje fibres' },
    { clue: 'Structural reason for slow AV nodal conduction', meaning: 'Small fibres with few gap junctions (high junctional resistance)' },
    { clue: 'Only normal electrical connection between atria and ventricles', meaning: 'The penetrating AV bundle (fibrous rings insulate elsewhere)' },
    { clue: 'Last ventricular regions to depolarise', meaning: 'Posterobasal left ventricle, upper septum and pulmonary conus' },
    { clue: 'Autonomic division supplying mainly the SA and AV nodes', meaning: 'Parasympathetic (vagal)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The delay-then-broadcast design is what makes the ECG readable: nodal delay is the PR interval and Purkinje broadcast is the narrow QRS, so a long PR or a wide QRS localises the fault. Wave genesis: [[ecg-formation-waves]]; interval limits: [[ecg-intervals-segments]].' },
    { logic: 'Therapeutic leverage', detail: 'The AV node is the only place a vagal manoeuvre or an AV-nodal blocking drug can throttle ventricular rate, which is why it is targeted in flutter and re-entrant tachycardia ([[atrial-flutter]]) and why excessive block produces the syndromes in [[av-block]]. Pacemaker automaticity behind the escape rhythms: [[ghp-sa-node-pacemaker]].' },
  ],

  mnemonics: [
    { hook: 'Slow at the gate, fast down the wires: AV node 0.05, Purkinje 4', expansion: ['Delay ~0.13 s so atria empty first', 'Purkinje spread keeps QRS narrow'] },
    { hook: 'Vagus talks to the NODES, sympathetic talks to EVERYTHING', expansion: ['Vagal: rate down, AV conduction down, ventricular force nearly unchanged', 'Sympathetic: rate up, force up, conduction faster'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of AV nodal delay',
      wrongInstinct: 'The delay exists because the impulse has a long distance to travel through the AV node',
      rightAnswer: 'The distance is tiny; conduction is slow because nodal fibres are small and have very few gap junctions, giving high resistance to ion flow between cells',
      why: 'It is a designed slow-conduction zone, and it is why the same tissue is the target of AV-nodal blocking drugs.',
    },
    {
      questionCategory: 'Autonomic distribution',
      wrongInstinct: 'Vagal stimulation weakens ventricular contraction as much as it slows the heart',
      rightAnswer: 'Vagal fibres are distributed mainly to the SA and AV nodes and atria, so the dominant effects are slowing of rate and AV conduction, with little direct change in ventricular force',
      why: 'Sympathetic nerves, by contrast, innervate the ventricles richly — which is why inotropy is a sympathetic story.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The physiological purpose of AV nodal delay is to:',
      options: [
        { id: 'a', text: 'Prevent the atria from fibrillating' },
        { id: 'b', text: 'Allow the atria to complete ventricular filling before ventricular contraction begins' },
        { id: 'c', text: 'Slow the ventricular action potential and prolong its plateau' },
        { id: 'd', text: 'Permit the impulse to spread from endocardium to epicardium' },
      ],
      answerId: 'b',
      explanation: 'The ~0.13 s delay separates atrial from ventricular systole so the atrial primer pump can finish. It has no effect on atrial rhythm stability (a) or on ventricular AP shape (c); endocardial-to-epicardial spread is a later, Purkinje-driven event (d).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A ventricular ectopic beat produces a QRS complex of 0.16 s, whereas sinus beats give 0.08 s. Why?',
      options: [
        { id: 'a', text: 'The ectopic impulse spreads mainly muscle-to-muscle at 0.3–0.5 m/s instead of through the Purkinje system' },
        { id: 'b', text: 'The ventricular action potential is prolonged in ectopic beats' },
        { id: 'c', text: 'AV nodal delay is added to the QRS duration' },
        { id: 'd', text: 'The atria depolarise simultaneously with the ventricles' },
      ],
      answerId: 'a',
      explanation: 'Normal narrow QRS depends on the Purkinje network delivering the impulse at 1.5–4 m/s to the whole endocardium at once. An impulse arising in ventricular muscle must crawl cell-to-cell at 0.3–0.5 m/s, so depolarisation takes far longer and the complex is wide. AV nodal delay lies in the PR interval, not the QRS (c).',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Which set of effects best matches strong vagal (parasympathetic) stimulation of the heart?',
      options: [
        { id: 'a', text: 'Slower SA discharge, slowed AV conduction, little change in ventricular contractility' },
        { id: 'b', text: 'Slower SA discharge with a large fall in ventricular contractility' },
        { id: 'c', text: 'Faster AV conduction with slower SA discharge' },
        { id: 'd', text: 'No change in rate but marked prolongation of the QRS' },
      ],
      answerId: 'a',
      explanation: 'Vagal fibres innervate the SA node, AV node and atria densely but the ventricles sparsely, so the hallmark effects are bradycardia and impaired AV conduction (a longer PR, up to block) with ventricular force largely preserved. Sympathetic stimulation is what speeds AV conduction (c).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Conduction system of the heart', svg: PACEMAKER_CONDUCTION, caption: 'SA node → internodal tracts → AV node (delay) → bundle of His → bundle branches → Purkinje network. Slowest conduction at the node, fastest in the Purkinje fibres.' },
  ],
};

export default ghpConductionSystemAutonomicControl;
