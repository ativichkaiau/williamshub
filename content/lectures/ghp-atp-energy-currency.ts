import type { Lecture } from '../../lib/types';

export const ghpAtpEnergyCurrency: Lecture = {
  id: 'ghp-atp-energy-currency',
  title: 'ATP as the Energy Currency',
  system: 'molecular',
  source: 'Ch 68 — Metabolism of Carbohydrates & Formation of ATP',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 68 Carbohydrate Metabolism & ATP' },
    { kind: 'mechanism', label: 'Turnover, not pool size · PCr buffer · ADP as the signal' },
    { kind: 'exam', label: 'Power vs capacity of the three energy systems' },
  ],

  highYield: [
    '**ATP is a currency, not a capital reserve — the number that matters is turnover, not pool size.** The whole body holds only about **50 g (roughly 0.1 mol)** of ATP at any instant, and at rest hydrolyses and remakes something close to **its own body weight in ATP every day**; in maximal exercise a working muscle can turn over its entire local ATP content **several times a second**. The pool is therefore worth about **1–2 seconds** of maximal contraction. Every conclusion in this chapter follows from that ratio: because the store is trivially small and the flux is enormous, physiology defends the **rate of resynthesis**, and no measurement of ATP concentration will ever tell you how hard a tissue is working.',
    '**The reason ATP works as a currency is that its transfer potential sits in the MIDDLE of the scale, not at the top.** Hydrolysis of the terminal phosphoanhydride bond yields about **7.3 kcal/mol under standard conditions and nearer 12 kcal/mol inside the cell**, where the ATP:ADP ratio is held far from equilibrium. That is high enough to drive most of the reactions the cell needs and low enough that several donors can recharge it — **phosphocreatine at about 10.3 kcal/mol**, and the glycolytic intermediates 1,3-bisphosphoglycerate and phosphoenolpyruvate higher still. A molecule at the top of the scale could not be recharged; one at the bottom could drive nothing. **A currency has to be exchangeable in both directions**, and that is exactly what mid-scale placement buys.',
    '**Phosphocreatine is the buffer that hides the drain, which is why ATP looks flat during exercise.** Muscle holds roughly **5 mmol/kg of ATP but 20–25 mmol/kg of phosphocreatine**, and creatine kinase sits so close to equilibrium that the instant ADP rises, **PCr + ADP is converted to ATP + creatine** faster than any enzymatic pathway could respond. Phosphorus magnetic resonance spectroscopy of exercising muscle shows the signature directly: **PCr falls by 70–80% while ATP barely moves**. The same enzyme, in its mitochondrial isoform, also runs the **creatine phosphate shuttle**, ferrying high-energy phosphate from the mitochondrion to the myofibril faster than ATP itself could diffuse.',
    '**The three energy systems trade power against capacity, and nothing is good at both.** Ranked by peak ATP output they run roughly **4 : 2.5 : 1** — **phosphagen** (ATP plus PCr, highest power, spent in about **8–10 seconds**), **anaerobic glycolysis** (intermediate power, useful for about **1.3–1.6 minutes** before acidosis and substrate limits bite), and **oxidative phosphorylation** (lowest power but effectively **unlimited capacity**). That single ranking predicts event physiology without any further knowledge: a shot put or a 100 m sprint is phosphagen, a 400–800 m run is glycolytic, anything beyond a couple of minutes is oxidative. The crossover is not a switch but a **shifting blend**, and all three are running at all times.',
    '**ATP concentration is a controlled variable, so it cannot also be the control signal — ADP, Pi and AMP are.** Because the cell defends ATP, its level moves very little; what moves are the products. Rising **ADP** returning to the mitochondrial matrix releases **respiratory control (acceptor control)**, so oxygen consumption climbs within a single breath of starting work. Rising **Pi** and ADP relieve the inhibition on **phosphofructokinase** and activate glycogen phosphorylase. And **adenylate kinase** converts two ADP into one ATP plus one AMP, which turns a **small fractional fall in ATP into a several-fold rise in AMP** — a built-in amplifier read by **AMP-activated protein kinase**. Consumption drives production, not the reverse.',
    '**Knowing where the ATP goes explains the resting metabolic rate.** At rest the largest single consumer is not movement but **ion pumping**: the Na⁺-K⁺-ATPase alone accounts for roughly **20–30% of whole-body resting energy**, and far more than that in neural tissue. **Protein turnover, Ca²⁺ pumping, and substrate cycling** take most of the remainder, with mechanical work a small fraction outside exercise. Biosynthesis uses a different trick — it spends ATP down to **AMP plus pyrophosphate**, and hydrolysis of the pyrophosphate makes the reaction effectively **irreversible**, which is how the cell buys directionality rather than energy. The corollary is clinical: when ATP supply fails, **the pumps fail first**, the cell swells, and that is the earliest step of ischaemic injury.',
  ],

  mechanism: {
    title: 'Demand → ADP and Pi rise → PCr buffers → glycolysis → respiratory control matches supply to demand',
    steps: [
      { id: 's1', label: 'Work begins: ATPases hydrolyse ATP, so ADP and Pi rise while ATP concentration barely moves', emphasis: 'key' },
      { id: 's2', label: 'Creatine kinase runs toward ATP instantly — PCr plus ADP regenerates ATP and buffers the fall for 8–10 s', emphasis: 'key' },
      { id: 's3', label: 'Adenylate kinase converts two ADP into ATP plus AMP, amplifying the deficit signal and switching on AMPK', emphasis: 'key' },
      { id: 's4', label: 'ADP and Pi relieve inhibition of phosphofructokinase and phosphorylase — glycolytic ATP within seconds, no oxygen required', emphasis: 'normal' },
      { id: 's5', label: 'ADP entering the matrix releases respiratory control; oxygen consumption climbs to match the load', emphasis: 'key' },
      { id: 's6', label: 'Oxidative phosphorylation reaches steady state and repays the phosphagen buffer — ATP concentration never changed', emphasis: 'normal' },
    ],
    branches: [
      {
        fromId: 's5',
        title: 'When supply cannot be raised',
        steps: [
          { id: 'b1', label: 'Oxygen delivery or mitochondrial function limited: ADP keeps rising and cannot be cleared', emphasis: 'normal' },
          { id: 'b2', label: 'Glycolytic flux carries the whole load; lactate and H⁺ accumulate and power output falls', emphasis: 'normal' },
          { id: 'b3', label: 'ATP finally falls: ion pumps stop, cells swell, and myosin cannot detach from actin', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Rigor mortis — muscle becomes rigid rather than flaccid once ATP is gone', mechanism: 'Myosin requires ATP binding to DETACH from actin, so zero ATP locks the cross-bridges; relaxation is the energy-requiring step, not contraction', significance: 'key' },
    { sign: 'Muscle ATP measured by phosphorus magnetic resonance spectroscopy is nearly unchanged at exhaustion while phosphocreatine has fallen by three-quarters', mechanism: 'The creatine kinase equilibrium defends ATP at the expense of the PCr pool — the buffer is what is consumed', significance: 'key' },
    { sign: 'Exercise intolerance with cramps and myoglobinuria, yet brief maximal efforts are tolerated and a second wind appears after a few minutes (McArdle disease)', mechanism: 'Myophosphorylase deficiency removes the glycolytic tier only: the phosphagen system still covers the first seconds, and oxidative metabolism of fat and blood-borne glucose eventually takes over', significance: 'key' },
    { sign: 'Rising lactate with a normal or high arterial oxygen tension in cyanide poisoning or septic shock', mechanism: 'Oxidative phosphorylation is blocked or bypassed despite adequate oxygen delivery, so glycolysis must carry the entire ATP load', significance: 'key' },
    { sign: 'Creatine loading raises muscle phosphocreatine by about a fifth and improves repeated short sprints but not endurance performance', mechanism: 'Supplementing the buffer enlarges only the phosphagen tier, which is the tier that limits brief maximal work', significance: 'supportive' },
    { sign: 'Cell swelling within minutes of ischaemia, before any structural damage is visible', mechanism: 'The Na⁺-K⁺-ATPase is the biggest ATP consumer and fails first, so sodium and water enter down their gradients', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Free energy of ATP hydrolysis inside a living cell versus the standard-state figure', meaning: 'About 12 kcal/mol in vivo against 7.3 kcal/mol standard — the cell holds the ATP:ADP ratio far from equilibrium, which is what raises the yield' },
    { clue: 'A phosphate donor with a transfer potential higher than that of ATP', meaning: 'Phosphocreatine at about 10.3 kcal/mol, which is precisely why it can recharge ATP and not the reverse' },
    { clue: 'Enzyme that converts two molecules of ADP into one ATP and one AMP', meaning: 'Adenylate kinase — it salvages a little ATP but matters mainly as an amplifier that turns a small ATP deficit into a large AMP signal' },
    { clue: 'Why oxygen consumption rises within seconds of starting exercise, before any hormone could act', meaning: 'Respiratory or acceptor control — ADP delivery to the matrix is the rate-limiting input to oxidative phosphorylation' },
    { clue: 'Peak ATP output of the three systems, expressed as a ratio', meaning: 'Roughly 4 : 2.5 : 1 for phosphagen, anaerobic glycolysis and oxidative metabolism — and capacity runs in exactly the opposite order' },
    { clue: 'Why fuel is stored as glycogen and triglyceride rather than as ATP itself', meaning: 'ATP is a large, multiply charged, osmotically active molecule; storing even one day of turnover would be physically impossible, so the body stores reduced carbon and mints currency on demand' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This module is the whole-body frame that the pathway modules hang on. The **pathways themselves are covered elsewhere and should not be re-learned here** — what matters at this level is that every one of them exists to serve a single quantity, the **rate of ATP resynthesis**, and that the cell defends that rate rather than any pool. The machinery that actually does the resynthesis, and why ADP is its rate-limiting input, is in [[electron-transport-oxphos]]; the step that decides whether carbon is committed to full oxidation at all is in [[pdh-tca-cycle]]. Read this module for the **accounting**, those for the **chemistry**.' },
    { logic: 'Where it is examined', detail: 'Two stems recur and both punish the intuitive answer. First, **what limits a 10-second maximal effort** — the answer is depletion of phosphocreatine, not of ATP, because ATP is the variable the system protects. Second, **what signals an energy deficit** — the answer is a rise in ADP, Pi and especially AMP, never a fall in ATP, since the fall is too small to read. A third favourite is the **power-versus-capacity ranking** dressed up as a question about which athlete uses which system. The fast, oxygen-independent tier and what it costs the body afterwards is developed in [[ghp-anaerobic-glycolysis-oxygen-debt]], and the pathway that generates it in [[glucose-transport-glycolysis]].' },
  ],

  mnemonics: [
    {
      hook: 'Currency, not capital — count the flow, not the float',
      expansion: [
        'About 50 g of ATP in the body, but close to body weight turned over per day',
        'The pool is worth 1–2 seconds of maximal work',
        'So physiology defends the resynthesis rate, and ATP concentration tells you nothing',
      ],
    },
    {
      hook: 'Power down, capacity up: Phosphagen, Glycolytic, Oxidative',
      expansion: [
        'Phosphagen — highest power, about 8–10 seconds',
        'Glycolytic — intermediate power, about 1.3–1.6 minutes',
        'Oxidative — lowest power, effectively unlimited',
        'Peak outputs run about 4 : 2.5 : 1, and capacity runs the other way',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What actually runs out during a brief maximal effort',
      wrongInstinct: 'ATP is consumed and falls, and the fall in ATP is what stops the muscle',
      rightAnswer: 'Phosphocreatine is what is consumed; ATP is buffered and falls only marginally even at exhaustion',
      why: 'Creatine kinase sits at equilibrium and converts the PCr pool into ATP as fast as ATP is used, so the buffer empties while the currency holds its value.',
    },
    {
      questionCategory: 'Which molecule reports the cellular energy state',
      wrongInstinct: 'A falling ATP concentration is the signal that switches on catabolism',
      rightAnswer: 'Rising ADP, Pi and above all AMP are the signals; ATP is held too constant to carry information',
      why: 'Adenylate kinase amplifies — a few percent fall in ATP produces a several-fold rise in AMP, which is why AMPK reads AMP and not ATP.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A sprinter performs an all-out 8-second effort. A muscle biopsy taken immediately afterwards is compared with one taken at rest. The expected finding is:',
      options: [
        { id: 'a', text: 'ATP reduced by about 80%, with phosphocreatine unchanged' },
        { id: 'b', text: 'Phosphocreatine reduced by about 80%, with ATP only slightly reduced' },
        { id: 'c', text: 'Both ATP and phosphocreatine reduced to near zero' },
        { id: 'd', text: 'Both ATP and phosphocreatine unchanged, with glycogen depleted instead' },
      ],
      answerId: 'b',
      explanation: 'Creatine kinase operates near equilibrium, so any rise in ADP is immediately converted back to ATP at the expense of phosphocreatine. The result is that the PCr pool is what empties during brief maximal work while ATP is defended and barely moves. Total muscle ATP would sustain only a second or two of maximal contraction on its own, so an 8-second effort is necessarily paid for out of the buffer. Glycogen contributes but is not depleted in 8 seconds.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Within the first few seconds of moderate exercise, whole-body oxygen consumption begins to rise, well before any measurable change in circulating adrenaline. The most direct explanation is:',
      options: [
        { id: 'a', text: 'A fall in intracellular ATP concentration directly stimulates the electron transport chain' },
        { id: 'b', text: 'Increased delivery of ADP to the mitochondrial matrix releases respiratory control' },
        { id: 'c', text: 'Lactate accumulation stimulates mitochondrial biogenesis' },
        { id: 'd', text: 'Rising intracellular pH accelerates ATP synthase' },
      ],
      answerId: 'b',
      explanation: 'Oxidative phosphorylation is limited by the availability of its substrate ADP, an arrangement called respiratory or acceptor control. The moment contraction hydrolyses ATP, ADP rises and is shuttled into the matrix, and electron flow and oxygen consumption rise to match it. ATP concentration itself is held nearly constant and is far too stable to serve as the signal. Mitochondrial biogenesis is a training adaptation taking days to weeks, and exercising muscle becomes more acidic rather than more alkaline.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A candidate argues that because anaerobic glycolysis yields only 2 ATP per glucose against roughly 30 or more from complete oxidation, it is a wasteful pathway that the body retains only as a vestige. The best rebuttal is that:',
      options: [
        { id: 'a', text: 'Anaerobic glycolysis actually yields more ATP than oxidation once lactate is counted' },
        { id: 'b', text: 'Yield per glucose is the wrong axis — glycolysis is retained for its far higher peak ATP output per unit time and its independence from oxygen' },
        { id: 'c', text: 'Anaerobic glycolysis is the only pathway able to use glycogen as a substrate' },
        { id: 'd', text: 'Oxidative phosphorylation cannot operate in skeletal muscle during contraction' },
      ],
      answerId: 'b',
      explanation: 'Efficiency and power are different currencies. Glycolysis has few steps, no membrane dependence and no requirement for oxygen, so it can deliver ATP at roughly two and a half times the peak rate of oxidative metabolism, at the cost of extracting only a small fraction of the available energy. That combination of speed and oxygen independence is exactly what a sprinting muscle, a red cell, or an ischaemic tissue needs. Oxidation also uses glycogen-derived carbon, and it continues throughout contraction.',
      tests: 'lecture',
    },
  ],
};

export default ghpAtpEnergyCurrency;
