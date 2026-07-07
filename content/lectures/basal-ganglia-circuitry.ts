import type { Lecture } from '../../lib/types';
import { BASAL_GANGLIA_CIRCUIT } from '../../lib/figures';

export const basalGangliaCircuitry: Lecture = {
  id: 'basal-ganglia-circuitry',
  title: 'Basal Ganglia Circuitry',
  system: 'neuro',
  source: 'L12 — Basal Ganglia',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L12 Basal Ganglia' },
    { kind: 'mechanism', label: 'Direct/indirect pathways' },
    { kind: 'exam', label: 'Parkinson vs hyperkinetic' },
  ],

  highYield: [
    '**The basal ganglia SELECT and SCALE movements — they facilitate wanted movements and suppress unwanted ones — but they do NOT directly drive muscles.** Components: the STRIATUM (caudate + putamen), globus pallidus (external GPe, internal GPi), subthalamic nucleus (STN), and substantia nigra (pars compacta SNc, pars reticulata SNr).',
    '**The output nuclei (GPi/SNr) are TONICALLY INHIBITORY on the motor thalamus — a "brake" on movement.** Two pathways modulate this brake: the DIRECT pathway RELEASES the brake (more movement), and the INDIRECT pathway TIGHTENS it (less movement). Balance between them controls movement amount.',
    '**DIRECT ("GO"): cortex → striatum → inhibits GPi → less inhibition of thalamus → thalamus excites cortex → MORE movement. INDIRECT ("STOP"): cortex → striatum → GPe → STN → GPi → more inhibition of thalamus → LESS movement.** DOPAMINE from the SNc tunes both: it EXCITES the direct pathway (D1) and INHIBITS the indirect pathway (D2) — net effect: dopamine PROMOTES movement.',
    'Disease maps onto the circuit. PARKINSON DISEASE = loss of SNc dopamine → underactive direct + overactive indirect → a HYPOKINETIC syndrome (bradykinesia, rigidity, resting tremor, postural instability). HYPERKINETIC disorders come from the opposite imbalance: HUNTINGTON (striatal loss → chorea), and HEMIBALLISMUS (STN lesion → wild flinging of the contralateral limbs).',
    '**The take-home: basal ganglia set the "volume" of movement via the direct (go) and indirect (stop) pathways, tuned by dopamine.** Too little dopamine → hypokinetic (Parkinson); loss of the indirect brake → hyperkinetic (chorea, ballism). Clinical movement disorders are in HNS-2 ([[basal-ganglia-cerebellum]]); the basal ganglia sit within the [[cerebrum-lobes-white-matter]].',
  ],

  mechanism: {
    title: 'Direct (go) vs indirect (stop) pathways modulate the GPi brake; dopamine promotes movement',
    steps: [
      { id: 's1', label: 'Basal ganglia select/scale movement; GPi/SNr = tonic inhibitory brake', emphasis: 'key' },
      { id: 's2', label: 'DIRECT: striatum inhibits GPi → less thalamic inhibition → MORE movement', emphasis: 'key' },
      { id: 's3', label: 'INDIRECT: striatum → GPe → STN → GPi → more inhibition → LESS movement', emphasis: 'key' },
      { id: 's4', label: 'Dopamine (SNc): D1 excites direct, D2 inhibits indirect → net MORE movement', emphasis: 'key' },
      { id: 's5', label: 'Parkinson (↓dopamine) = hypokinetic; Huntington/ballism = hyperkinetic', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bradykinesia, rigidity, resting tremor, postural instability', mechanism: 'Parkinson disease (SNc dopamine loss — hypokinetic)', significance: 'key' },
    { sign: 'Chorea (irregular, dance-like movements)', mechanism: 'Huntington disease (striatal degeneration — hyperkinetic)', significance: 'key' },
    { sign: 'Wild flinging (ballistic) movements of one side', mechanism: 'Hemiballismus (contralateral subthalamic nucleus lesion)', significance: 'key' },
    { sign: 'Dopamine promoting movement', mechanism: 'D1 excites direct, D2 inhibits indirect pathway', significance: 'supportive' },
    { sign: 'GPi/SNr tonically inhibiting the thalamus', mechanism: 'Basal ganglia "brake" on movement', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The components of the basal ganglia', meaning: 'Striatum (caudate + putamen), globus pallidus, subthalamic nucleus, substantia nigra' },
    { clue: 'The effect of the direct pathway on movement', meaning: 'Increases movement (releases the GPi brake)' },
    { clue: 'The neurotransmitter tuning the pathways', meaning: 'Dopamine (from SNc) — net pro-movement' },
    { clue: 'The lesion causing hemiballismus', meaning: 'The contralateral subthalamic nucleus' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The direct/indirect model explains Parkinson (dopamine loss → hypokinetic; L-DOPA restores it) and hyperkinetic disorders (Huntington, hemiballismus) — clinical detail and antiparkinson drugs are in HNS-2 ([[basal-ganglia-cerebellum]], [[levodopa-and-adjuncts]]). The basal ganglia scale the movement that the corticospinal tract drives ([[motor-system-corticospinal-control]]) and the cerebellum coordinates ([[cerebellum-anatomy-function]]).' },
  ],

  mnemonics: [
    { hook: 'Direct = "GO" (releases brake); Indirect = "STOP"; dopamine → net GO', expansion: ['D1 excites direct, D2 inhibits indirect', 'GPi = the brake on thalamus'] },
    { hook: 'Parkinson = "too little movement" (↓dopamine); Huntington/ballism = "too much"', expansion: ['Parkinson: rigid, slow, resting tremor', 'STN lesion → hemiballismus'] },
  ],

  traps: [
    {
      questionCategory: 'What the basal ganglia do in movement',
      wrongInstinct: 'The basal ganglia directly command muscles to contract',
      rightAnswer: 'The basal ganglia SELECT and SCALE movement (facilitate wanted, suppress unwanted) by modulating a tonic inhibitory "brake" (GPi) on the thalamus — they do NOT directly drive muscles; the corticospinal tract does that',
      why: 'Basal-ganglia disorders cause too much or too little movement (dyskinesias/bradykinesia), not paralysis, precisely because they modulate movement rather than execute it — distinguishing them from corticospinal (weakness) lesions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The hypokinetic features of Parkinson disease (bradykinesia, rigidity) result from:',
      options: [
        { id: 'a', text: 'Excess dopamine overactivating movement' },
        { id: 'b', text: 'Loss of substantia nigra dopamine, underactivating the direct pathway and overactivating the indirect pathway' },
        { id: 'c', text: 'A subthalamic nucleus lesion' },
        { id: 'd', text: 'Cerebellar degeneration' },
      ],
      answerId: 'b',
      explanation: 'Loss of nigrostriatal dopamine reduces direct-pathway (go) activity and increases indirect-pathway (stop) activity, strengthening the thalamic brake and reducing movement — the hypokinetic Parkinsonian picture. Dopamine normally promotes movement.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A lesion of the subthalamic nucleus classically causes:',
      options: [
        { id: 'a', text: 'Parkinsonism' },
        { id: 'b', text: 'Hemiballismus (wild flinging movements of the contralateral limbs)' },
        { id: 'c', text: 'Intention tremor' },
        { id: 'd', text: 'Spastic paralysis' },
      ],
      answerId: 'b',
      explanation: 'Damage to the subthalamic nucleus removes its excitatory drive to the GPi (part of the indirect/stop pathway), releasing movement and producing hemiballismus — violent flinging movements of the contralateral limbs.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Basal ganglia circuitry', svg: BASAL_GANGLIA_CIRCUIT, caption: 'Direct (go) vs indirect (stop) pathways, dopamine modulation, and the hypo-/hyperkinetic disorders.' },
  ],
};

export default basalGangliaCircuitry;
