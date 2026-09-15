import type { Lecture } from '../../lib/types';

export const ghpExerciseEnergyTraining: Lecture = {
  id: 'ghp-exercise-energy-training',
  title: 'Exercise Energy Systems, Fatigue & Training Adaptation',
  system: 'msk',
  source: 'Ch 85 — Sports Physiology',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Musculoskeletal' },
    { kind: 'lecture', label: 'Ch 85 Sports Physiology' },
    { kind: 'mechanism', label: 'Energy systems overlap from exercise onset' },
    { kind: 'exam', label: 'Lactate is a fuel; soreness is not retained lactate' },
  ],
  highYield: [
    '**ATP turnover rises far more than the muscle ATP concentration changes.** Myosin ATPase powers cross-bridge cycling, SERCA returns calcium to the sarcoplasmic reticulum and membrane pumps restore ion gradients. The small ATP store must therefore be continually replenished. Phosphocreatine rapidly transfers a phosphate to ADP through creatine kinase, glycolysis supplies ATP by substrate-level phosphorylation, and mitochondria regenerate ATP through oxidative phosphorylation. All contribute from the start; intensity, duration and training change their relative contributions. Review the common currency in [[ghp-atp-energy-currency]].',
    '**Power and capacity are different properties.** The phosphagen system supports very rapid ATP resynthesis but has limited stores. Glycolysis can supply ATP quickly as demand rises. Oxidative metabolism has a slower adjustment to a sudden workload but supports prolonged activity using carbohydrate and fat when oxygen delivery and mitochondrial function are adequate. A brief sprint relies heavily on phosphagen and glycolytic supply, while sustained exercise relies increasingly on oxidation. There is no instant switch at a particular second from one exclusive energy system to the next.',
    '**Lactate production does not prove that oxygen is absent.** Conversion of pyruvate to lactate regenerates NAD+ and can accompany high glycolytic flux even in oxygenated muscle. Lactate can be oxidised by other fibres and the heart or used for hepatic glucose production. Its blood concentration reflects appearance minus disposal. Rising lactate with increasing workload therefore describes a balance, not a universal point at which all muscle becomes anaerobic. Excess post-exercise oxygen consumption supports several recovery processes, including phosphocreatine restoration and persistent thermoregulatory and metabolic activity; it is not simply an exact repayment of a lactate debt.',
    '**Fatigue is task-dependent and has central and peripheral components.** Changes in motor drive, inorganic phosphate, ionic gradients and excitation–contraction coupling can reduce force during intense work. Glycogen availability, temperature and fluid balance become especially relevant during prolonged work. ATP is usually defended rather than completely exhausted. Delayed soreness after unfamiliar eccentric exercise reflects exercise-induced tissue stress and subsequent responses; lactate has already been cleared long before that soreness peaks.',
    '**Training adapts the systems that are repeatedly challenged.** Endurance training increases oxidative capacity through changes including mitochondrial proteins, capillary supply and fuel handling. Resistance training improves neural recruitment and, over time, muscle fibre cross-sectional area and force capacity. Type I fibres are generally oxidative and fatigue resistant; type II fibres generally support faster contraction and higher power, with substantial variation within type II. Training changes phenotype and performance, but a single gene, fibre label or resting heart rate cannot predict an individual’s sporting ability.',
    '**Fuel access and hormonal context influence performance.** Muscle contraction can increase GLUT4-mediated glucose uptake independently of the immediate insulin signal, while insulin sensitivity may remain increased after exercise. Prolonged activity draws on both fat and carbohydrate; fat provides a large store but cannot sustain the same maximal ATP delivery rate as carbohydrate at high intensity. Exogenous anabolic androgens may increase muscle protein accretion while suppressing gonadotropins and endogenous gonadal function, alongside other harms. Greater muscle mass alone does not establish better endurance, coordination or safe performance. Connect the feedback loop with [[ghp-testosterone-actions-male-axis]].',
  ],
  mechanism: {
    title: 'An abrupt increase in contractile demand',
    steps: [
      { id: 'e1', label: 'Motor activation increases ATP use', detail: 'Cross-bridge cycling and calcium handling increase energy demand.' },
      { id: 'e2', label: 'Phosphocreatine buffers the ATP supply', detail: 'Creatine kinase rapidly transfers phosphate to ADP.', emphasis: 'key' },
      { id: 'e3', label: 'Glycolytic and oxidative flux increase', detail: 'Their contributions overlap; workload determines the required rates.' },
      { id: 'e4', label: 'Delivery and utilisation approach the workload demand', detail: 'A sustainable steady state is possible only below the limits of the integrated system.' },
      { id: 'e5', label: 'Recovery restores stores; repeated bouts drive adaptation', detail: 'The adaptation depends on the stimulus and recovery conditions.' },
    ],
  },
  examFindings: [
    { sign: 'High power for a short interval but limited endurance', mechanism: 'High ATP delivery rate and total sustainable energy capacity are different constraints.' },
    { sign: 'Soreness a day or more after unfamiliar eccentric work', mechanism: 'Delayed tissue responses explain the timing; retained lactate does not.', significance: 'key' },
    { sign: 'Lower effort at the same absolute workload after endurance training', mechanism: 'The workload uses a smaller fraction of an improved oxidative capacity.' },
  ],
  investigations: [
    { clue: 'Blood lactate rises during an incremental exercise test', meaning: 'Lactate appearance is exceeding disposal; interpretation depends on the protocol and does not establish complete oxygen absence.' },
    { clue: 'High oxygen consumption persists during recovery', meaning: 'Recovery includes phosphagen restoration and continued metabolic and thermoregulatory work, not only lactate processing.' },
    { clue: 'Strength improves before a large change in muscle size', meaning: 'Early gains can reflect neural and skill adaptations rather than hypertrophy alone.' },
  ],
  treatment: [
    { logic: 'Why it matters', detail: 'Explain performance using demand, energy supply, delivery and recovery. A limiting mechanism in a short sprint need not be the one limiting a prolonged event.' },
    { logic: 'Where it is examined', detail: 'Compare power with capacity, explain the overlap of ATP pathways and distinguish immediate fatigue from delayed muscle soreness.' },
  ],
  mnemonics: [{ hook: 'Buffer, flux, sustain', expansion: ['Phosphocreatine buffers a sudden demand', 'Glycolytic flux supplies rapid ATP', 'Oxidation supports sustained ATP supply', 'All pathways overlap'] }],
  traps: [
    { questionCategory: 'Energy systems', wrongInstinct: 'The first seconds are exclusively phosphocreatine, then glycolysis starts.', rightAnswer: 'All systems contribute early, with changing relative contributions.', why: 'An energy pathway does not wait for another store to reach zero.' },
    { questionCategory: 'Lactate', wrongInstinct: 'Lactate retained in muscle causes soreness two days later.', rightAnswer: 'Delayed soreness reflects tissue stress and subsequent responses.', why: 'The timing does not match lactate clearance.' },
  ],
  quiz: [
    { id: 'q1', stem: 'Why does muscle ATP concentration fall relatively little during a short intense effort despite a large increase in ATP use?', options: [{ id: 'a', text: 'Cross-bridges stop using ATP' }, { id: 'b', text: 'Phosphagen, glycolytic and oxidative pathways regenerate ATP' }, { id: 'c', text: 'The stored ATP pool is enough for hours of maximal exercise' }, { id: 'd', text: 'Calcium pumps reverse and become the main ATP source' }], answerId: 'b', explanation: 'Rapid ATP resynthesis defends the ATP pool. Phosphocreatine provides an immediate buffer while glycolytic and oxidative contributions also increase.', tests: 'mechanism' },
    { id: 'q2', stem: 'What does a rising blood lactate concentration during exercise directly indicate?', options: [{ id: 'a', text: 'Every active fibre has zero oxygen' }, { id: 'b', text: 'Lactate appearance exceeds disposal' }, { id: 'c', text: 'Fat oxidation has stopped permanently' }, { id: 'd', text: 'All ATP has been depleted' }], answerId: 'b', explanation: 'The measured concentration reflects net balance between appearance and clearance. Lactate production and utilisation can both occur with oxygen available.', tests: 'investigation' },
    { id: 'q3', stem: 'Which adaptation best supports sustained submaximal exercise after endurance training?', options: [{ id: 'a', text: 'Complete replacement of oxidative metabolism by phosphocreatine' }, { id: 'b', text: 'Loss of capillary supply to active muscle' }, { id: 'c', text: 'Increased mitochondrial oxidative capacity and capillary supply' }, { id: 'd', text: 'Removal of all type I fibres' }], answerId: 'c', explanation: 'Improved oxidative capacity and exchange support sustained ATP resynthesis and reduce the relative intensity of a fixed workload.', tests: 'mechanism' },
    { id: 'q4', stem: 'A student has thigh soreness 36 hours after unfamiliar downhill running. Which explanation is most appropriate?', options: [{ id: 'a', text: 'Lactate remains trapped for two days' }, { id: 'b', text: 'A delayed response to unfamiliar eccentric loading' }, { id: 'c', text: 'ATP has been absent continuously since the run' }, { id: 'd', text: 'Oxidative fibres cannot contract eccentrically' }], answerId: 'b', explanation: 'Unfamiliar eccentric loading commonly produces delayed soreness through tissue stress and subsequent responses. Lactate is not retained on that timescale.', tests: 'mechanism' },
  ],
};

export default ghpExerciseEnergyTraining;
