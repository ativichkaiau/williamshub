import type { Lecture } from '../../lib/types';

export const ghpAnaerobicGlycolysisOxygenDebt: Lecture = {
  id: 'ghp-anaerobic-glycolysis-oxygen-debt',
  title: 'Anaerobic Glycolysis & Oxygen Debt',
  system: 'molecular',
  source: 'Ch 68 — Metabolism of Carbohydrates & Formation of ATP',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 68 Carbohydrate Metabolism & ATP' },
    { kind: 'mechanism', label: 'Glycolysis runs to regenerate NAD⁺ · lactate is a fuel' },
    { kind: 'exam', label: 'What oxygen debt actually repays' },
  ],

  highYield: [
    '**Anaerobic glycolysis yields about 2 ATP per glucose against roughly 30–32 from full oxidation, and the body keeps it anyway — because yield is the wrong axis.** Glycolysis is **cytosolic, needs no membrane, no mitochondrion and no oxygen**, and has few enough steps that it can deliver ATP at roughly **two and a half times the peak rate** of oxidative phosphorylation. The correct comparison is not energy per glucose but **ATP per second, and ATP available when oxygen is not**. A sprinting muscle has glucose to spare and seconds to spend; it buys speed and pays in substrate. Starting from **glycogen rather than free glucose the net rises to 3 ATP**, because glucose-1-phosphate enters past the hexokinase step and saves one priming phosphorylation.',
    '**The rate-limiting resource is not ATP but NAD⁺ — this is the single best discriminator in the topic.** Glyceraldehyde-3-phosphate dehydrogenase consumes NAD⁺ at every pass, and the cytosolic pool is so small that it would be **fully reduced within seconds** at sprint flux. Lactate dehydrogenase reduces pyruvate to lactate and in doing so **regenerates NAD⁺**, which is the only reason the line keeps moving. So lactate is not the purpose of the pathway and not a failure of it: **lactate is the price of recycling the cofactor**. Stated the other way round, a cell makes lactate whenever **pyruvate is produced faster than mitochondria can accept it** — which is a matter of capacity, not necessarily of hypoxia.',
    '**Some tissues are obligate glycolysers and produce lactate at rest, with perfectly normal oxygen tensions.** The **erythrocyte** has no mitochondria at all and would be absurd if it did, since it would consume the cargo it carries. The **renal medulla** works at an oxygen tension kept low by countercurrent exchange, the **cornea and lens** are avascular, and **fast-twitch type IIx fibres** are built with few mitochondria and high LDH deliberately. **Proliferating cells**, including tumours, favour glycolysis even in full oxygen (the Warburg effect) because they need carbon skeletons and fast ATP more than they need efficiency. Baseline arterial lactate of **0.5–1.5 mmol/L** is the sum of these normal producers.',
    '**Lactate is a FUEL in transit, not a waste product — treat it as an exportable carbohydrate.** It leaves glycolytic fibres on **MCT4**, enters oxidative tissue on **MCT1**, and is converted straight back to pyruvate by the **LDH-1 isoenzyme** that predominates in **heart, brain and slow-twitch muscle**, which oxidise it avidly. Whatever is not burned goes to the liver for the **Cori cycle**, and the economics there are worth stating plainly: gluconeogenesis spends **6 ATP equivalents** to make the glucose that gave the muscle **2**. The cycle is a **net energy loss that the liver pays for the muscle** — it exists to shift the metabolic burden to an aerobic organ and to protect blood glucose, not to save energy.',
    '**The acid and the lactate are separable, and the classic soreness story is simply wrong.** The proton load of hard exercise comes from **ATP hydrolysis running ahead of oxidative resynthesis**; the lactate dehydrogenase step itself actually **consumes a proton**. Lactate merely travels with the acid and is therefore the convenient marker for it, not its cause. Muscle pH can fall to about **6.4** and arterial pH to around **7.0** in maximal effort, and the resulting fall in power output is arguably **protective**. Meanwhile **lactate is cleared within about an hour**, whereas **delayed-onset muscle soreness peaks at 24–72 hours** and follows **eccentric** contraction — mechanical microdamage and inflammation, with no lactate involvement whatsoever.',
    '**Oxygen debt is repaid in instalments, and lactate is neither the first nor the largest of them.** The classic accounting gives a total of about **11.5 L**, split into an **alactacid debt of roughly 3.5 L** repaid in the first **minutes** and a **lactacid debt of about 8 L** repaid over up to an hour. The fast instalment is **phosphocreatine and ATP resynthesis plus refilling the body oxygen stores** — about **2 L** held on haemoglobin, in the lungs, dissolved in body fluids, and on **myoglobin**. The slow instalment is **lactate oxidation and hepatic gluconeogenesis**. The modern label is **EPOC**, and it also covers the cost of a **raised core temperature, persisting catecholamines, and the extra work of breathing and of the heart** — which is why oxygen uptake stays above baseline long after the lactate has gone.',
  ],

  mechanism: {
    title: 'Demand outruns mitochondria → NAD⁺ shortage → LDH regenerates it → lactate exported as fuel → debt repaid',
    steps: [
      { id: 's1', label: 'ATP demand exceeds what oxidative phosphorylation can supply; glycolytic flux accelerates sharply', emphasis: 'normal' },
      { id: 's2', label: 'Glyceraldehyde-3-phosphate dehydrogenase consumes the small cytosolic NAD⁺ pool within seconds', emphasis: 'key' },
      { id: 's3', label: 'Lactate dehydrogenase reduces pyruvate to lactate and regenerates NAD⁺ — the only reason flux can continue', emphasis: 'key' },
      { id: 's4', label: 'Lactate leaves on MCT4 with the protons produced by unmatched ATP hydrolysis; pH falls and power output drops', emphasis: 'normal' },
      { id: 's5', label: 'Heart, brain and slow fibres take lactate up on MCT1 and oxidise it; the remainder goes to the liver', emphasis: 'key' },
      { id: 's6', label: 'Recovery: oxygen uptake stays high to rebuild phosphagen, refill oxygen stores and drive hepatic gluconeogenesis', emphasis: 'key' },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'Pathological lactate production',
        steps: [
          { id: 'b1', label: 'Type A — oxygen delivery fails: shock, severe hypoxaemia, regional ischaemia', emphasis: 'danger' },
          { id: 'b2', label: 'Type B — delivery is adequate but pyruvate cannot enter the cycle: thiamine deficiency, cyanide, some drugs, liver failure impairing clearance', emphasis: 'danger' },
          { id: 'b3', label: 'Raised anion gap metabolic acidosis; falling lactate clearance predicts outcome better than the initial value', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Ischaemic forearm exercise test: venous lactate normally rises several-fold, but stays flat in McArdle disease while venous ammonia rises exaggeratedly', mechanism: 'Myophosphorylase deficiency blocks entry of glycogen carbon into glycolysis, so no lactate can be made; purine nucleotide cycling rises instead to salvage ATP', significance: 'key' },
    { sign: 'Raised lactate with a widened anion gap in septic or cardiogenic shock, and a clearance rate that tracks survival more closely than the admission value', mechanism: 'Production exceeds hepatic and myocardial uptake; the trend reports whether the oxygen delivery deficit is being corrected', significance: 'key' },
    { sign: 'Lactic acidosis with a normal arterial oxygen tension and a high cardiac output in severe thiamine deficiency', mechanism: 'Pyruvate dehydrogenase cannot function without thiamine pyrophosphate, so pyruvate is diverted to lactate despite fully adequate oxygen', significance: 'key' },
    { sign: 'Oxygen uptake and ventilation remain above baseline for up to an hour after intense exercise ends', mechanism: 'Repayment of the phosphagen and oxygen-store debt first, then lactate oxidation and gluconeogenesis, with a persisting cost from raised temperature and catecholamines', significance: 'key' },
    { sign: 'Severe soreness 24–72 hours after downhill running, with blood lactate that was normal within the first hour', mechanism: 'Delayed-onset soreness is eccentric mechanical microdamage and inflammation; the timing alone excludes lactate, which is long since cleared', significance: 'key' },
    { sign: 'A trained endurance athlete reaches a much higher workload before blood lactate begins to climb', mechanism: 'Greater mitochondrial density and better MCT-mediated uptake raise clearance capacity — the muscle is not less anaerobic, it is better at disposing of lactate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Why glycolysis halts without lactate dehydrogenase even when glucose and ADP are plentiful', meaning: 'The cytosolic NAD⁺ pool is exhausted at glyceraldehyde-3-phosphate dehydrogenase; LDH exists to regenerate the cofactor, and lactate is the by-product of doing so' },
    { clue: 'Net ATP from glycolysis starting from glycogen rather than from free glucose', meaning: 'Three rather than two — glucose-1-phosphate enters beyond hexokinase, saving one priming ATP' },
    { clue: 'Energy accounting of the Cori cycle', meaning: 'Six ATP equivalents spent in the liver to return glucose worth two to the muscle — a deliberate net loss that moves the cost to an aerobic organ and defends blood glucose' },
    { clue: 'Transporters and isoenzymes that make lactate an interorgan fuel', meaning: 'MCT4 exports from glycolytic fibres, MCT1 imports into heart, brain and slow fibres, where LDH-1 pushes lactate back to pyruvate for oxidation' },
    { clue: 'Composition of the classical 11.5 L oxygen debt', meaning: 'About 3.5 L alactacid — phosphagen resynthesis plus roughly 2 L of oxygen stores on haemoglobin, myoglobin, in the lungs and in body fluids — and about 8 L lactacid, repaid far more slowly' },
    { clue: 'What actually happens at the lactate threshold', meaning: 'Production begins to exceed clearance, which is a balance point rather than the moment muscle becomes anaerobic — lactate is produced continuously well below the threshold' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The whole topic collapses into one sentence: **glycolysis is run for speed and oxygen independence, and lactate is the cost of regenerating NAD⁺ so that it can keep running**. Every clinical use follows. A raised lactate is a statement that **pyruvate production has outrun mitochondrial acceptance**, which may be a delivery problem (shock) or an acceptance problem (thiamine deficiency, cyanide, mitochondrial toxicity), and the two are managed completely differently. The step-by-step chemistry is in [[glucose-transport-glycolysis]], and the hepatic half of the Cori cycle, with its full ATP accounting, in [[gluconeogenesis-cori-alanine]].' },
    { logic: 'Where it is examined', detail: 'The three reliable stems. **Why the body keeps a 2-ATP pathway** — because rate and oxygen independence, not yield, are what it is for. **What oxygen debt repays** — phosphagen and oxygen stores first and fastest, lactate second and slowly, so an answer naming only lactate is wrong. And **whether lactate causes soreness** — it does not, and the 24–72 hour timing of delayed-onset soreness is the giveaway. A fourth, subtler stem asks **why a red cell makes lactate in fully oxygenated arterial blood**, testing whether you understand that lactate signals mitochondrial capacity rather than hypoxia. The buffering tier that precedes all of this is in [[ghp-atp-energy-currency]], and the oxidative tier that repays the debt in [[electron-transport-oxphos]].' },
  ],

  mnemonics: [
    {
      hook: 'Glycolysis runs for the cofactor, not for the coin',
      expansion: [
        'GAPDH burns NAD⁺ on every pass and the cytosolic pool lasts seconds',
        'LDH regenerates NAD⁺; lactate is the receipt',
        'So lactate means pyruvate outran the mitochondria — not always that oxygen ran out',
      ],
    },
    {
      hook: 'Debt repaid in three instalments — Phosphagen, Oxygen stores, Lactate',
      expansion: [
        'Phosphagen: ATP and phosphocreatine rebuilt in the first minutes',
        'Oxygen stores: about 2 L refilled on haemoglobin, myoglobin, lungs and body fluids',
        'Lactate: about 8 L worth, oxidised or sent to the liver over up to an hour',
        'Plus the standing cost of a warm body, circulating catecholamines and extra cardiorespiratory work',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What lactate is and what it does to muscle',
      wrongInstinct: 'Lactic acid is a metabolic waste product that accumulates and causes the burn during exercise and the soreness two days later',
      rightAnswer: 'Lactate is an exportable fuel oxidised by heart, brain and slow fibres; the protons come from unmatched ATP hydrolysis, and delayed soreness is eccentric microdamage',
      why: 'The lactate dehydrogenase step consumes a proton rather than producing one, and lactate is fully cleared within an hour while soreness peaks at 24–72 hours.',
    },
    {
      questionCategory: 'What is being repaid during the post-exercise rise in oxygen consumption',
      wrongInstinct: 'The oxygen debt is the oxygen needed to clear the lactate that built up',
      rightAnswer: 'The first and fastest component is phosphagen resynthesis plus refilling the body oxygen stores; lactate handling is the slow second component',
      why: 'The alactacid instalment is repaid in minutes and is what makes recovery between sprint intervals possible — an answer naming only lactate misses most of the debt.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a muscle fibre contracting maximally, lactate dehydrogenase is pharmacologically inhibited while glucose, ADP and Pi remain abundant. Glycolytic flux falls almost to zero within seconds. The best explanation is:',
      options: [
        { id: 'a', text: 'Accumulating pyruvate directly inhibits phosphofructokinase' },
        { id: 'b', text: 'Cytosolic NAD⁺ is no longer regenerated, so glyceraldehyde-3-phosphate dehydrogenase cannot proceed' },
        { id: 'c', text: 'ATP accumulates and allosterically shuts down hexokinase' },
        { id: 'd', text: 'Intracellular pH rises and inactivates the glycolytic enzymes' },
      ],
      answerId: 'b',
      explanation: 'The cytosolic NAD⁺ pool is very small relative to glycolytic flux, and it is consumed at the glyceraldehyde-3-phosphate dehydrogenase step. Without mitochondria able to take the reducing equivalents fast enough, the only route back to NAD⁺ is reduction of pyruvate to lactate. Block that and the cofactor is left fully reduced and the pathway stalls, which is the real reason lactate production is obligatory at high flux. ATP does not accumulate under maximal demand, and exercising muscle becomes more acidic rather than alkaline.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'During recovery from a 400 m sprint, a well-trained runner shows a rise in cardiac lactate uptake and a fall in arterial lactate to baseline over about 45 minutes. Regarding the fate of that lactate, the most accurate statement is:',
      options: [
        { id: 'a', text: 'Essentially all of it is excreted by the kidney as a fixed acid' },
        { id: 'b', text: 'All of it must be resynthesised to glucose by the liver, since lactate is a metabolic dead end' },
        { id: 'c', text: 'A large fraction is taken up on MCT1 by heart, brain and oxidative muscle and oxidised directly, with the remainder entering hepatic gluconeogenesis' },
        { id: 'd', text: 'It is converted to alanine in muscle and stored there until the next bout of exercise' },
      ],
      answerId: 'c',
      explanation: 'Lactate is a freely exchangeable interorgan fuel. Oxidative tissues express MCT1 and the LDH-1 isoenzyme, which favours converting lactate back to pyruvate for entry into the citric acid cycle, and the heart in particular prefers lactate over glucose when it is available. Only the surplus is handled by the Cori cycle, which is expensive for the liver. Renal excretion of lactate is negligible, and the glucose-alanine cycle moves nitrogen rather than storing carbon in muscle.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with severe sepsis has an arterial lactate of 6 mmol/L, a PaO2 of 95 mmHg and a cardiac index at the upper limit of normal. A colleague concludes the tissues must be globally hypoxic. The most accurate critique is:',
      options: [
        { id: 'a', text: 'Lactate of 6 mmol/L is within the normal resting range and needs no explanation' },
        { id: 'b', text: 'Lactate rises whenever pyruvate production outruns mitochondrial acceptance, which in sepsis includes impaired pyruvate dehydrogenase activity, adrenergic glycolytic stimulation and reduced clearance — not only hypoxia' },
        { id: 'c', text: 'A high cardiac output excludes any contribution from regional hypoperfusion' },
        { id: 'd', text: 'The lactate must be laboratory artefact, since anaerobic glycolysis cannot occur at a normal PaO2' },
      ],
      answerId: 'b',
      explanation: 'Hyperlactataemia reports the balance between pyruvate production and mitochondrial and hepatic disposal, and hypoxia is only one way to disturb that balance. In sepsis, catecholamine-driven Na-K-ATPase activity accelerates glycolysis, pyruvate dehydrogenase activity falls, and hepatic clearance is impaired, so lactate can rise with entirely adequate arterial oxygenation. Regional hypoperfusion can coexist with a high global cardiac output, and resting lactate is normally under about 1.5 mmol/L.',
      tests: 'disease',
    },
  ],
};

export default ghpAnaerobicGlycolysisOxygenDebt;
