import type { Lecture } from '../../lib/types';

export const ghpExerciseOxygenDelivery: Lecture = {
  id: 'ghp-exercise-oxygen-delivery',
  title: 'Exercise Cardiorespiratory Responses & VO₂max',
  system: 'cardiovascular',
  source: 'Ch 85 — Sports Physiology',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 85 Sports Physiology' },
    { kind: 'mechanism', label: 'VO₂ = cardiac output × arteriovenous oxygen difference' },
    { kind: 'investigation', label: 'Oxygen content is different from oxygen tension' },
  ],
  highYield: [
    '**The Fick principle separates oxygen delivery from extraction.** Whole-body oxygen consumption is cardiac output multiplied by the arterial–mixed venous oxygen content difference: VO₂ = Q × (CaO₂ − CvO₂). During dynamic exercise, both output and extraction generally increase. For a worked example, Q = 20 L/min and a content difference of 150 mL O₂/L give VO₂ = 3000 mL/min. An oxygen saturation is not a content, and a peripheral venous sample is not necessarily representative of mixed venous blood. The measurement principles are in [[ghp-cardiac-output-measurement]].',
    '**Cardiac output rises through heart rate and stroke volume.** Early vagal withdrawal and increasing sympathetic activity accelerate the heart. Venoconstriction, the muscle pump and respiratory pump support venous return; increased contractility helps eject the increased filling volume. Stroke volume often plateaus during incremental exercise, but its pattern varies with posture, training and protocol. The baroreflex remains active with an operating point appropriate to exercise; it is not simply switched off.',
    '**Active muscle receives more flow despite systemic sympathetic activation.** Local metabolic vasodilation and functional sympatholysis favour perfusion where demand is high, while sympathetic vasoconstriction redistributes flow from less active beds. During large-muscle dynamic exercise, total peripheral resistance usually falls, systolic pressure rises and diastolic pressure changes relatively little. Sustained static contraction can compress vessels and produce a greater pressor response; it should not be assigned the same pressure pattern as steady rhythmic exercise. Continue with [[ghp-exercise-muscle-blood-flow]].',
    '**Ventilation rises before arterial gases need to change substantially.** Feedforward neural signals and muscle afferents contribute to the early response; metabolic and chemical feedback contribute as work continues. In healthy moderate exercise, ventilation usually matches carbon dioxide production well enough to keep PaCO₂ near its resting value and maintain arterial oxygenation. At higher intensities, additional carbon dioxide from buffering and ventilatory compensation can lower PaCO₂. Pulmonary disease, altitude or exercise-induced arterial hypoxaemia in some highly trained athletes can change this pattern.',
    '**VO₂max is an integrated limit rather than a single-organ score.** Maximal cardiac output, haemoglobin concentration, pulmonary gas exchange, muscle perfusion, diffusion and mitochondrial utilisation all contribute. Normal arterial PO₂ does not guarantee normal oxygen delivery: anaemia lowers haemoglobin-bound oxygen content despite a normal dissolved oxygen tension. Endurance training often raises maximal stroke volume and peripheral oxidative capacity; it does not require an increase in maximal heart rate. Absolute VO₂ in L/min and body-mass-normalised VO₂ in mL/kg/min answer different comparison questions.',
    '**Performance depends on more than maximal capacity.** The fraction of VO₂max that can be sustained, movement economy, fuel availability, thermoregulation and task-specific skill all matter. Two athletes with the same VO₂max can therefore complete the same event at different speeds. VO₂peak names the highest value measured in a particular test when a true maximum is not established. A heart-rate formula or a single submaximal measurement should not be presented as a direct measurement of VO₂max.',
  ],
  mechanism: {
    title: 'Link working muscle to whole-body oxygen consumption',
    steps: [
      { id: 'o1', label: 'ATP demand increases in active muscle', detail: 'Greater oxidative ATP resynthesis requires additional oxygen utilisation.' },
      { id: 'o2', label: 'Heart rate, contractility and venous return increase', detail: 'These changes raise cardiac output.' },
      { id: 'o3', label: 'Flow is directed toward active tissue', detail: 'Local vasodilation interacts with systemic neural regulation.' },
      { id: 'o4', label: 'Muscle extracts more oxygen', detail: 'Mixed venous oxygen content falls as extraction rises.', emphasis: 'key' },
      { id: 'o5', label: 'Output × extraction gives whole-body VO₂', detail: 'Use oxygen content, not saturation or partial pressure, in the Fick calculation.', emphasis: 'key' },
    ],
  },
  examFindings: [
    { sign: 'Systolic pressure rises during rhythmic large-muscle exercise', mechanism: 'Cardiac output increases while active-muscle vasodilation reduces total peripheral resistance.' },
    { sign: 'Lower heart rate at the same submaximal workload after training', mechanism: 'A greater stroke volume can support the required output at a lower rate.' },
    { sign: 'Exercise limitation with anaemia despite normal arterial PO₂', mechanism: 'Haemoglobin-bound oxygen content falls even when oxygen tension remains normal.', significance: 'key' },
  ],
  investigations: [
    { clue: 'Q 20 L/min; CaO₂ 200 mL/L; CvO₂ 50 mL/L', meaning: 'VO₂ = 20 × (200 − 50) = 3000 mL/min, or 3 L/min.' },
    { clue: 'VO₂ of 3 L/min in a 60 kg person', meaning: 'Relative oxygen consumption = 3000 / 60 = 50 mL/kg/min.' },
    { clue: 'Normal arterial PO₂ with low haemoglobin', meaning: 'Oxygen tension describes dissolved oxygen, while most blood oxygen is bound to haemoglobin.' },
  ],
  treatment: [
    { logic: 'Why it matters', detail: 'Use the oxygen pathway to explain a limitation: ventilation, gas exchange, haemoglobin, output, distribution, extraction and utilisation can each matter.' },
    { logic: 'Where it is examined', detail: 'Calculate VO₂ with consistent units and distinguish dynamic from static exercise, oxygen content from tension, and maximal capacity from endurance performance.' },
  ],
  mnemonics: [{ hook: 'Pump × pickup', expansion: ['Pump: cardiac output', 'Pickup: arterial minus mixed venous oxygen content', 'Their product: whole-body oxygen consumption'] }],
  traps: [
    { questionCategory: 'Fick principle', wrongInstinct: 'Multiply cardiac output by the arterial PO₂.', rightAnswer: 'Multiply output by the arterial–mixed venous oxygen content difference.', why: 'Content measures the amount of oxygen transported in blood.' },
    { questionCategory: 'Training', wrongInstinct: 'A higher VO₂max must mean a higher maximal heart rate.', rightAnswer: 'Stroke volume and peripheral adaptation can increase capacity without raising maximal heart rate.', why: 'Maximal oxygen consumption depends on several coupled variables.' },
  ],
  quiz: [
    { id: 'q1', stem: 'Cardiac output is 20 L/min and the arterial–mixed venous oxygen content difference is 150 mL/L. What is VO₂?', options: [{ id: 'a', text: '0.3 L/min' }, { id: 'b', text: '3 L/min' }, { id: 'c', text: '30 L/min' }, { id: 'd', text: '300 L/min' }], answerId: 'b', explanation: '20 L blood/min × 150 mL O₂/L blood = 3000 mL O₂/min = 3 L/min.', tests: 'investigation' },
    { id: 'q2', stem: 'Which change is typical during moderate rhythmic exercise involving large muscle groups?', options: [{ id: 'a', text: 'Cardiac output falls and total peripheral resistance rises markedly' }, { id: 'b', text: 'Cardiac output rises and total peripheral resistance generally falls' }, { id: 'c', text: 'Active-muscle blood flow falls to preserve renal flow' }, { id: 'd', text: 'The baroreflex ceases to operate' }], answerId: 'b', explanation: 'Heart rate and stroke volume raise output while vasodilation in active muscle generally reduces total resistance. The baroreflex continues to regulate pressure around an altered operating point.', tests: 'mechanism' },
    { id: 'q3', stem: 'Why can anaemia impair maximal exercise capacity despite a normal arterial PO₂?', options: [{ id: 'a', text: 'Arterial PO₂ measures the total amount of oxygen bound to haemoglobin' }, { id: 'b', text: 'Reduced haemoglobin lowers arterial oxygen content' }, { id: 'c', text: 'All oxygen in arterial blood is physically dissolved' }, { id: 'd', text: 'Anaemia necessarily causes complete failure of ventilation' }], answerId: 'b', explanation: 'Most oxygen is haemoglobin-bound. A normal oxygen tension does not compensate fully for a reduced haemoglobin concentration and lower oxygen content.', tests: 'mechanism' },
    { id: 'q4', stem: 'Two runners have the same measured VO₂max but different race times. Which explanation is physiologically sound?', options: [{ id: 'a', text: 'The measurements must both be wrong' }, { id: 'b', text: 'VO₂max is the sole determinant of running speed' }, { id: 'c', text: 'They can differ in economy and the fraction of VO₂max sustained' }, { id: 'd', text: 'Cardiovascular function has no role in endurance' }], answerId: 'c', explanation: 'Maximal capacity is one determinant. Economy, sustainable fraction, fuel availability, environment and task-specific factors also affect performance.', tests: 'mechanism' },
  ],
};

export default ghpExerciseOxygenDelivery;
