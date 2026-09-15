import type { Lecture } from '../../lib/types';

export const ghpEnergyExpenditureMetabolicRate: Lecture = {
  id: 'ghp-energy-expenditure-metabolic-rate',
  title: 'Energy Expenditure & Metabolic Rate',
  system: 'physiology',
  source: 'Ch 73 — Energetics & Metabolic Rate',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 73 Energetics & Metabolic Rate' },
    { kind: 'mechanism', label: 'BMR 60–70% · thermic effect 10% · activity the remainder' },
    { kind: 'investigation', label: 'Indirect calorimetry · respiratory quotient' },
  ],

  highYield: [
    '**The energy budget is roughly 60–70% basal, 8–10% thermic effect of food, and activity as the variable remainder — and almost everyone gets this split backwards.** In a sedentary adult, physical activity accounts for only about **20–30%** of total expenditure; in a serious endurance athlete it can approach or exceed the basal term, but that is an outlier, not the norm. The consequence is that **the biggest single number in the budget is the one you are not aware of**: the cost of simply remaining alive. Any claim about metabolism — that exercise will transform expenditure, or that one person burns far less than another — has to be argued against a term that **most people cannot move much and that is set mainly by how much lean tissue they carry**.',
    '**All of it ends as heat, and that single fact is why metabolic rate is measurable at all.** Even in intense exercise the body converts at most about **20–25%** of chemical energy into external work, and every joule of that work degrades to heat as soon as it is done. So the entire energy output of a resting person **is** heat, which can be measured directly in a calorimeter chamber — accurate but impractical. **Indirect calorimetry** exploits the other side of the same equation: because virtually all of the heat comes from oxidative metabolism, **oxygen consumption is a proxy for the whole budget**. The conversion factor is the **energy equivalent of oxygen, about 4.825 kcal per litre of O₂** on a mixed diet, which varies only slightly with fuel.',
    '**The respiratory quotient reads which fuel is actually burning, in real time.** RQ is **CO₂ produced divided by O₂ consumed**: **1.0 for carbohydrate, about 0.70 for fat, about 0.82 for protein**, and roughly **0.82–0.85 on a mixed Western diet**. The reason is structural — fat is **hydrogen-rich and oxygen-poor**, so oxidising it demands far more O₂ per CO₂ released, while glucose already carries enough internal oxygen that the two match. A **fasting RQ drifting toward 0.70** is the metabolic signature of the switch to fat, and an **RQ above 1.0** cannot come from any fuel at all: it means **net lipogenesis** from carbohydrate excess, or that CO₂ is being blown off faster than it is being made.',
    '**Fuel values are not the same as the heat of combustion, and protein is where the two diverge.** Burned in a bomb calorimeter, protein yields about **5.65 kcal/g**; in the body it yields about **4.1 kcal/g**, because nitrogen is excreted as **urea, which still contains chemical energy**. The working figures are therefore **carbohydrate 4, protein 4, fat 9 and alcohol 7 kcal/g**. Fat is worth more than twice as much per gram because its carbon is **far more reduced** and there is more to oxidise — which is also exactly why it is the storage form and why **adipose tissue stores energy at nine-fold the density of glycogen** before its hydration water is even counted.',
    '**The thermic effect of food is the unavoidable processing fee, and it is charged at very different rates by macronutrient.** Roughly **20–30% of the energy in protein** is spent absorbing, deaminating, synthesising urea and building peptide bonds; **carbohydrate costs 5–10%** and **fat only 0–3%**, since fat needs little more than re-esterification and packaging. On a mixed diet the weighted average lands near **10% of intake**. Two consequences follow directly: a **high-protein diet delivers fewer net calories than its label suggests**, and the thermic effect is a real but modest term that **cannot explain large differences in body weight** between individuals.',
    '**Activity is the only term that moves substantially, and much of its variance is not exercise.** Deliberate exercise raises expenditure to perhaps **15–20 times basal** for brief periods in trained subjects, and **shivering alone can double or triple it**; but across ordinary lives, much of the between-person variation lies in **non-exercise activity thermogenesis** — fidgeting, posture, spontaneous movement — which differs several-fold between people and rises unconsciously with overfeeding. Measuring free-living expenditure honestly requires **doubly labelled water**, and when it is used the usual finding is instructive: people with obesity have **normal or high measured total expenditure** and simply **under-report intake**, often by 20–30%.',
  ],

  mechanism: {
    title: 'Intake → basal floor + thermic fee + activity → work degrades to heat → read as O₂ consumed, fuel named by RQ',
    steps: [
      { id: 's1', label: 'Chemical energy enters as carbohydrate 4, protein 4, fat 9 and alcohol 7 kcal/g', emphasis: 'normal' },
      { id: 's2', label: 'About 60–70% is committed before any movement: the basal metabolic rate', emphasis: 'key' },
      { id: 's3', label: 'A further 8–10% is charged for processing the meal itself — highest for protein, negligible for fat', emphasis: 'key' },
      { id: 's4', label: 'The remainder is activity, the only substantially variable term, and much of it is unplanned movement', emphasis: 'normal' },
      { id: 's5', label: 'At most a quarter of the energy becomes external work; everything else appears immediately as heat', emphasis: 'key' },
      { id: 's6', label: 'So total output is read either as heat directly, or from oxygen consumed at 4.825 kcal/L, with the respiratory quotient naming the fuel', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A ventilated patient overfed with high-dextrose parenteral nutrition develops a respiratory quotient above 1.0, rising CO₂ production and difficulty weaning', mechanism: 'Carbohydrate in excess of oxidative needs is converted to fat, a process that releases CO₂ without consuming O₂, so the ventilatory load rises', significance: 'key' },
    { sign: 'Respiratory quotient falling toward 0.70 after an overnight fast and staying there through prolonged starvation', mechanism: 'Fat has become the dominant oxidised fuel; its hydrogen-rich, oxygen-poor structure demands more O₂ per CO₂ produced', significance: 'key' },
    { sign: 'Doubly labelled water shows normal or elevated total daily expenditure in a patient with obesity who reports eating very little', mechanism: 'Larger bodies carry more lean tissue as well as more fat, so absolute expenditure is high; the discrepancy is almost always under-reporting of intake', significance: 'key' },
    { sign: 'Measured resting expenditure by indirect calorimetry exceeding a predictive equation by 20–40% in major burns or severe sepsis', mechanism: 'Inflammatory and catecholamine-driven hypermetabolism is not captured by equations built from height, weight, age and sex', significance: 'key' },
    { sign: 'The post-prandial rise in metabolic rate is conspicuously larger after a protein meal than after an isocaloric fat meal', mechanism: 'Deamination, urea synthesis and peptide bond formation are expensive; fat requires little beyond re-esterification and packaging', significance: 'supportive' },
    { sign: 'Metabolic rate doubling or trebling during vigorous shivering in a hypothermic patient', mechanism: 'Shivering is skeletal muscle contraction performing no external work, so essentially all of the ATP cost emerges as heat', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The single conversion factor that turns oxygen consumption into energy expenditure', meaning: 'About 4.825 kcal per litre of O₂ on a mixed diet — it varies only between roughly 4.7 and 5.0 across pure fuels, which is why oxygen alone is a good enough proxy' },
    { clue: 'Respiratory quotients of the three macronutrients', meaning: 'Carbohydrate 1.0, fat about 0.70, protein about 0.82; a mixed diet sits near 0.82–0.85' },
    { clue: 'A measured respiratory quotient above 1.0', meaning: 'Net lipogenesis from carbohydrate excess, or acute hyperventilation unloading buffered CO₂ — no fuel can be oxidised at an RQ over 1.0' },
    { clue: 'Why protein yields 5.65 kcal/g in a bomb calorimeter but only about 4.1 kcal/g in the body', meaning: 'Nitrogen leaves as urea, which is excreted with its own chemical energy still intact — the physiological fuel value is the figure that counts' },
    { clue: 'Thermic effect of food, by macronutrient', meaning: 'Protein 20–30%, carbohydrate 5–10%, fat 0–3%; about 10% of intake on a mixed diet' },
    { clue: 'The gold standard for total energy expenditure in free-living people', meaning: 'Doubly labelled water — CO₂ production is derived from the different disappearance rates of the hydrogen and oxygen isotopes, requiring no chamber and no mouthpiece' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This is the arithmetic that every nutritional and metabolic decision rests on, and it is worth carrying two numbers out of it: **60–70% of expenditure is basal**, and **oxygen consumption times 4.825 kcal/L gives the whole budget**. Together they explain why prescribing energy for a sick patient starts from the basal term and adds stress and activity factors on top, and why **overfeeding is a real harm rather than a harmless excess** — it raises CO₂ production and hepatic fat deposition without buying useful substrate. The basal term itself, and what sets it, is developed in [[ghp-bmr-determinants-measurement]]; the consequences of getting the prescription wrong in either direction are in [[nutrition-energy-protein-malnutrition]].' },
    { logic: 'Where it is examined', detail: 'Three stems recur. **Which component dominates total expenditure** — basal, not activity, and the distractor is always exercise. **What an RQ above 1.0 means** — net lipogenesis, usually dextrose overfeeding, with the clinical sting in the tail being the ventilated patient who cannot be weaned. And **why protein has a physiological fuel value below its heat of combustion** — the energy that leaves in urea. A fourth asks you to **compute expenditure from a measured oxygen consumption**, which is a single multiplication if you hold the 4.825 figure. The energy-balance side of the same equation, and why expenditure adapts when weight is lost, is in [[obesity-pathophysiology]]; the heat that all of this ultimately becomes, and how it is dissipated, is in [[skin-physiology-thermoregulation]].' },
  ],

  mnemonics: [
    {
      hook: 'Sixty, ten, thirty — the budget people get backwards',
      expansion: [
        '60–70% basal: the cost of being alive, set mainly by lean mass',
        '8–10% thermic effect of food: the processing fee, highest for protein',
        '20–30% activity: the only term that really moves, and much of it is not exercise',
      ],
    },
    {
      hook: 'RQ counts oxygen against carbon: One, Point Eight, Point Seven',
      expansion: [
        'Carbohydrate 1.0 — glucose already carries its own oxygen',
        'Protein about 0.82 — in between, and rarely the point of the question',
        'Fat about 0.70 — hydrogen-rich and oxygen-poor, so it demands the most O₂',
        'Above 1.0 is not a fuel at all: it is lipogenesis or hyperventilation',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Which component of total daily expenditure is the largest',
      wrongInstinct: 'Physical activity, because it is the part that feels effortful and the part you can change',
      rightAnswer: 'Basal metabolic rate, at roughly 60–70% of the total in a typical sedentary adult',
      why: 'Activity is only about a fifth to a third of the budget, which is why exercise alone moves body weight far less than intuition predicts.',
    },
    {
      questionCategory: 'What a respiratory quotient above 1.0 is telling you',
      wrongInstinct: 'The patient is simply burning pure carbohydrate, or the measurement is in error',
      rightAnswer: 'Carbohydrate is being converted to fat — lipogenesis releases CO₂ without consuming O₂ — most often from dextrose overfeeding',
      why: 'No substrate can be oxidised at an RQ above 1.0, so the excess CO₂ has to come from synthesis, and the extra ventilatory load is what obstructs weaning.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Indirect calorimetry in a stable, resting adult gives a steady oxygen consumption of 250 mL/min. The approximate total daily energy expenditure is:',
      options: [
        { id: 'a', text: 'About 850 kcal/day' },
        { id: 'b', text: 'About 1740 kcal/day' },
        { id: 'c', text: 'About 3500 kcal/day' },
        { id: 'd', text: 'It cannot be estimated without also measuring urinary nitrogen' },
      ],
      answerId: 'b',
      explanation: 'Oxygen consumption of 0.25 L/min is 360 L/day, and at an energy equivalent of about 4.825 kcal per litre this gives roughly 1740 kcal/day. The whole point of indirect calorimetry is that this single multiplication is adequate, because the energy equivalent of oxygen varies only between about 4.7 and 5.0 kcal/L across the macronutrients. Urinary nitrogen refines the calculation by separating the protein contribution but is not needed for a usable estimate.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A ventilated patient receiving high-dextrose parenteral nutrition is difficult to wean. Indirect calorimetry shows a respiratory quotient of 1.08. The mechanism connecting the feeding regimen to the weaning failure is that:',
      options: [
        { id: 'a', text: 'Carbohydrate oxidation consumes more oxygen than fat oxidation, raising the ventilatory demand' },
        { id: 'b', text: 'Excess carbohydrate is converted to fat, a process that releases CO₂ without consuming O₂, increasing the CO₂ load the patient must clear' },
        { id: 'c', text: 'Dextrose infusion causes a metabolic alkalosis that depresses respiratory drive' },
        { id: 'd', text: 'A respiratory quotient above 1.0 indicates a calibration fault and has no clinical meaning' },
      ],
      answerId: 'b',
      explanation: 'No fuel can be oxidised at an RQ above 1.0, so a value of 1.08 signals net lipogenesis. Converting carbohydrate to fatty acid is a reductive, carbon-shortening process that liberates CO₂ while consuming little oxygen, which drives the quotient above unity and adds to the CO₂ that the respiratory system must excrete. In a patient with limited ventilatory reserve this alone can obstruct weaning, and the correction is to cut the dextrose load rather than to change the ventilator.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A patient states that she has gained weight despite eating almost nothing, and attributes it to an unusually slow metabolism. Total energy expenditure is measured by doubly labelled water and found to be above the population mean for her age. The most likely interpretation is:',
      options: [
        { id: 'a', text: 'The result is spurious, since a larger body must have a lower metabolic rate per unit mass' },
        { id: 'b', text: 'Absolute expenditure rises with body size because lean mass rises alongside fat mass, and the discrepancy almost certainly reflects under-reported intake' },
        { id: 'c', text: 'A high measured expenditure proves an underlying hyperthyroid state' },
        { id: 'd', text: 'Doubly labelled water measures only basal expenditure and therefore cannot address the question' },
      ],
      answerId: 'b',
      explanation: 'Larger bodies carry more metabolically active lean tissue as well as more adipose tissue, so absolute total and basal expenditure are typically higher, not lower, in obesity. Doubly labelled water measures free-living total expenditure over one to two weeks and is the most reliable method available, and when it is compared with self-reported intake the near-universal finding is substantial under-reporting. Rate per kilogram does fall with size, but that is a normalisation artefact rather than evidence of a slow metabolism.',
      tests: 'lecture',
    },
  ],
};

export default ghpEnergyExpenditureMetabolicRate;
