import type { Lecture } from '../../lib/types';

export const ghpStarvationVitaminMineralDeficiency: Lecture = {
  id: 'ghp-starvation-vitamin-mineral-deficiency',
  title: 'Starvation, Vitamin & Mineral Deficiency',
  system: 'gi',
  source: 'Ch 71 — Dietary Balances; Feeding, Obesity & Starvation; Vitamins & Minerals',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 71 Starvation, Vitamins & Minerals' },
    { kind: 'mechanism', label: 'Glycogen → gluconeogenesis → ketones spare protein → fat exhausted → death' },
    { kind: 'exam', label: 'Nitrogen excretion as the readout · phosphate kills in refeeding · thiamine before glucose' },
  ],

  highYield: [
    '**Starvation runs in three phases and each is named by the fuel that dominates it.** **Phase one is hepatic glycogen** — about **100 g**, against a brain consuming roughly **120 g of glucose a day** — so it is gone within **24 hours** and was never going to be the survival store. **Phase two is gluconeogenesis**, and its substrate is overwhelmingly **muscle protein**, released as alanine and glutamine and deaminated in the liver, with glycerol and recycled lactate making up the rest. Protein loss runs at **60–75 g/day** at first and urinary nitrogen peaks at **10–12 g/day**. **Phase three is fat and ketones**, and it is by far the longest: almost all energy now comes from adipose triglyceride, protein catabolism slows to a trickle, and **essentially all of the survival time is bought here**. The fuel switching in full: [[fed-fasting-starvation]].',
    '**The one adaptation that makes prolonged fasting survivable is the brain switching to ketones.** The brain cannot oxidise fatty acids in any useful quantity, so if it required glucose throughout, the protein cost of manufacturing that glucose would kill a lean adult inside about a fortnight. Instead, as insulin falls and hepatic ketogenesis rises, **β-hydroxybutyrate and acetoacetate cross the blood–brain barrier on monocarboxylate transporters that the exposure itself upregulates**, and by roughly **three weeks they supply around two-thirds of cerebral fuel**. Glucose demand falls from about 120 g/day to some 40 g, gluconeogenesis slows to match, and the whole saving lands on muscle. The readout is measurable at the bedside: **urinary nitrogen drops from 10–12 g/day to about 3–4**, and that fall is a direct quantification of protein being spared. Mechanism: [[ketone-body-metabolism]].',
    '**Fat stores set how long survival lasts, but it is protein loss that causes death.** While adipose triglyceride remains, protein catabolism stays suppressed; once it is **exhausted there is nothing left to spare the protein**, so **catabolism resumes abruptly**. A **rise in urinary nitrogen after weeks of low values is therefore a premortal sign**, not a sign of recovery, and it marks the start of the terminal phase. Death follows when roughly **a third to a half of body protein** has gone, and it comes from the tissues that protein was doing work in: **diaphragm and intercostal failure, falling cardiac mass with arrhythmia, and immune collapse** that lets an ordinary infection finish it. Two clinical rules fall straight out of this — a lean patient starves far faster than an obese one at identical intake, and **the prognostic variable is lean mass, not weight**.',
    '**Refeeding kills through exactly the physiology that kept the patient alive — reverse it too quickly and the hidden intracellular deficits are unmasked.** Weeks of catabolism deplete **total-body phosphate, potassium and magnesium** while serum levels stay deceptively normal, because shrinking cells keep releasing them into plasma. Give carbohydrate and **insulin surges**, driving glucose and all three ions **into the cell simultaneously**, and imposing a fresh demand for **phosphate to build ATP and 2,3-DPG**. **Hypophosphataemia is the one that kills**: cardiac and respiratory muscle failure, arrhythmia, rhabdomyolysis, haemolysis and seizures, classically at **two to five days**. Thiamine stores are empty in parallel, and a carbohydrate load **consumes the last of it as pyruvate dehydrogenase cofactor**, so **thiamine goes in before any glucose does**. The entire syndrome is derivable from the starvation physiology above, which is why it is examined here rather than as a list.',
    '**Marasmus is a deficit of everything; kwashiorkor is a deficit of protein against maintained carbohydrate — and the oedema is the discriminator.** The marasmic child is **severely wasted with weight far below expected, no oedema, an aged anxious face and a preserved appetite**: an orderly adaptive response to insufficient total energy, essentially starvation physiology running correctly. The kwashiorkor child has **oedema, an enlarged smooth fatty liver, sparse depigmented hair, flaky-paint dermatosis, apathy and hypoalbuminaemia**, with true weight loss partly concealed by the fluid. The mechanism worth carrying is that continued carbohydrate **keeps insulin up, which blocks the protein-sparing switch to fat**, while amino acids are simultaneously unavailable for hepatic export protein — so **albumin falls and oncotic pressure with it**, and **apolipoprotein shortage strands triglyceride in the hepatocyte**. Full clinical management: [[nutrition-energy-protein-malnutrition]].',
    '**Learn each vitamin from the reaction that fails and the syndrome falls out of it.** **Thiamine** is cofactor for **pyruvate dehydrogenase, α-ketoglutarate dehydrogenase and transketolase**, so the tissues that fail are those most dependent on aerobic glucose: **heart (wet beri-beri with high-output failure), peripheral nerve (dry beri-beri) and brain (Wernicke encephalopathy)**. **Niacin** builds **NAD and NADP**, needed by every cell, so deficiency strikes the fastest-turnover tissues first as **pellagra: dermatitis, diarrhoea and dementia**. **Vitamin C** is the reductant keeping **prolyl and lysyl hydroxylase** working, so collagen cannot cross-link — **scurvy**, with perifollicular haemorrhage, corkscrew hairs, bleeding gums and old wounds reopening. **Vitamin D** failure gives **rickets and osteomalacia**, and **vitamin K** failure stops **γ-carboxylation of factors II, VII, IX and X with proteins C and S**. **B12 and folate** both stall thymidylate synthesis and so both give **megaloblastic anaemia** — but only B12 also serves **methylmalonyl-CoA mutase**, and that second job is why **only B12 deficiency damages the cord**. More on this group and the trace elements: [[water-soluble-vitamins-trace-elements]].',
  ],

  mechanism: {
    title: 'Glycogen (24 h) → gluconeogenesis from muscle → ketone shift spares protein → fat exhausted → protein resumes → death',
    steps: [
      { id: 's1', label: 'Hours to 24 h: hepatic glycogen, about 100 g against a 120 g/day brain demand — exhausted first', emphasis: 'normal' },
      { id: 's2', label: 'Days: gluconeogenesis from muscle protein, glycerol and lactate; urinary nitrogen peaks at 10–12 g/day', emphasis: 'key' },
      { id: 's3', label: 'Insulin falls, lipolysis and hepatic ketogenesis rise, and brain monocarboxylate transporters are upregulated', emphasis: 'key' },
      { id: 's4', label: 'Weeks: ketones supply about two-thirds of brain fuel, protein breakdown slows and nitrogen excretion falls to 3–4 g/day', emphasis: 'key' },
      { id: 's5', label: 'Fat stores exhausted: nothing remains to spare protein, so catabolism resumes and nitrogen excretion rises again', emphasis: 'danger' },
      { id: 's6', label: 'Loss of a third to a half of body protein — respiratory muscle failure, immune collapse, infection, death', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Feed too fast at this point and you cause refeeding syndrome',
        steps: [
          { id: 'b1', label: 'Carbohydrate load triggers an insulin surge in a patient with depleted total-body stores', emphasis: 'key' },
          { id: 'b2', label: 'Phosphate, potassium and magnesium are driven intracellularly at once; ATP and 2,3-DPG consume more phosphate', emphasis: 'key' },
          { id: 'b3', label: 'Hypophosphataemia at two to five days: arrhythmia, respiratory failure, rhabdomyolysis, haemolysis, seizures', emphasis: 'danger' },
          { id: 'b4', label: 'The same glucose load exhausts residual thiamine as PDH cofactor and can precipitate Wernicke encephalopathy', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Urinary nitrogen falling from 11 g/day in the first week of a fast to under 4 g/day by the third', mechanism: 'The ketone shift has taken over cerebral fuelling — the fall is a direct measurement of muscle protein being spared', significance: 'key' },
    { sign: 'A rise in urinary nitrogen after weeks of low values in a patient who is still starving', mechanism: 'Fat stores are exhausted, protein catabolism has resumed, and the terminal phase has begun — a premortal sign', significance: 'key' },
    { sign: 'Serum phosphate of 0.3 mmol/L on the third day of feeding a patient starved for a month, with new arrhythmia and respiratory failure', mechanism: 'Insulin drives phosphate into cells against a depleted total-body store while ATP and 2,3-DPG synthesis consume still more', significance: 'key' },
    { sign: 'Confusion, ophthalmoplegia and ataxia appearing hours after an intravenous glucose load', mechanism: 'The carbohydrate consumed the last thiamine as pyruvate dehydrogenase cofactor — Wernicke encephalopathy precipitated by the treatment', significance: 'key' },
    { sign: 'Pitting oedema, a smooth enlarged liver and depigmented hair in a child whose weight is only mildly reduced', mechanism: 'Kwashiorkor — hypoalbuminaemia from failed hepatic export protein synthesis, with triglyceride stranded for want of apolipoprotein', significance: 'key' },
    { sign: 'Symmetrical pigmented dermatitis on sun-exposed skin with diarrhoea and progressive cognitive decline', mechanism: 'Pellagra — NAD and NADP cannot be built, so skin, gut epithelium and neurons fail in order of turnover', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The hepatic glycogen store and how long it lasts', meaning: 'About 100 g, gone within 24 hours against a brain requiring some 120 g of glucose a day' },
    { clue: 'Fraction of cerebral fuel supplied by ketones after three weeks of fasting', meaning: 'About two-thirds — the adaptation that turns a two-week survival into a two-month one' },
    { clue: 'Urinary nitrogen early in starvation compared with the third week', meaning: '10–12 g/day falling to 3–4 g/day — the bedside readout that protein sparing has switched on' },
    { clue: 'The electrolyte that kills in refeeding, and the vitamin that must precede any glucose', meaning: 'Phosphate, and thiamine — both consequences of the insulin surge and the sudden carbohydrate load' },
    { clue: 'Why folate corrects the anaemia of B12 deficiency but not the neurology', meaning: 'Folate restores thymidylate synthesis, but only B12 serves methylmalonyl-CoA mutase, and that arm drives cord degeneration' },
    { clue: 'Why vitamins A and D reach toxicity but vitamin C almost never does', meaning: 'Fat-soluble vitamins are stored in liver and adipose tissue and accumulate; water-soluble ones are cleared in urine' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Refeeding is a prescription, not a meal. **Thiamine goes in first — 200–300 mg before the first calories** — then **start at about 10 kcal/kg/day**, or 5 in the highest-risk patient, and **replace phosphate, potassium and magnesium from the outset rather than waiting for them to fall**, since a normal level on day zero predicts nothing about day three. Check them daily for 72 hours, and restrict fluid and sodium because an atrophic heart tolerates neither. The minerals sit on the same clinical footing as the vitamins: **iodine** deficiency gives goitre, and in utero cretinism with irreversible cognitive impairment; **iron** deficiency gives microcytic anaemia; **zinc** deficiency gives impaired wound healing, loss of taste, and a perioral and acral dermatitis. The storage asymmetry then decides who is at risk of toxicity rather than deficiency: **fat-soluble vitamins accumulate** (vitamin A causing raised intracranial pressure, vitamin D causing hypercalcaemia) while **water-soluble vitamins are simply excreted**, with pyridoxine neuropathy the notable exception that proves the rule. The stored group in full: [[fat-soluble-vitamins]].' },
    { logic: 'Where it is examined', detail: 'Four stems recur, and all four are derivable rather than memorisable. **The order of fuels** — glycogen, then muscle protein, then fat and ketones — with the follow-up asking which phase supplies most of the survival time (the third). **Why the ketone shift matters**, answered by the protein arithmetic rather than by naming the ketone bodies. **Refeeding syndrome**, where the expected answer is hypophosphataemia from an insulin-driven intracellular shift, and the expected action is thiamine before glucose. And **kwashiorkor against marasmus**, where oedema with a fatty liver separates them and the mechanism is failed hepatic export protein synthesis, not simple starvation. The B12 and folate discriminator is the fifth favourite: *both* cause megaloblastic anaemia, only one causes subacute combined degeneration.' },
  ],

  mnemonics: [
    {
      hook: 'Glycogen, Gluconeogenesis, Ketones — hours, days, weeks',
      expansion: [
        'Hours: about 100 g of hepatic glycogen, exhausted by 24 hours',
        'Days: muscle protein converted to glucose, urinary nitrogen at 10–12 g/day',
        'Weeks: fat and ketones spare the protein, and nitrogen falls to 3–4 g/day',
        'The third phase supplies almost all the survival time, and a late rise in nitrogen is the premortal sign',
      ],
    },
    {
      hook: 'Refeeding: Thiamine first, then Phosphate, Potassium, Magnesium — and go slow',
      expansion: [
        'Insulin drives all three ions into the cell at the same moment',
        'Hypophosphataemia is the lethal one: no ATP, no 2,3-DPG',
        'Glucose given before thiamine can precipitate Wernicke encephalopathy',
        'Start near 10 kcal/kg/day and check bloods daily for three days',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What actually limits survival in prolonged starvation',
      wrongInstinct: 'Glucose runs out once hepatic glycogen is exhausted and the brain fails for want of fuel',
      rightAnswer: 'Fat stores set the survival time, and death follows cumulative protein loss once the fat is gone',
      why: 'The ketone shift largely removes the brain glucose requirement within days, so the question stops being about glucose almost immediately.',
    },
    {
      questionCategory: 'Treating megaloblastic anaemia before the B12 result returns',
      wrongInstinct: 'Give folate — it corrects the blood film, so the deficiency is covered whichever vitamin is missing',
      rightAnswer: 'Establish B12 status first; folate alone corrects the anaemia while neurological damage continues unchecked',
      why: 'Only B12 serves methylmalonyl-CoA mutase, and it is that arm rather than thymidylate synthesis that produces subacute combined degeneration of the cord.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously healthy adult has taken only water for 30 days and remains alert with preserved muscle bulk. Urinary nitrogen, 11 g/day in the first week, is now 3.5 g/day. The adaptation chiefly responsible for his survival is:',
      options: [
        { id: 'a', text: 'Expansion of hepatic glycogen stores to meet continuing cerebral glucose demand' },
        { id: 'b', text: 'A rise in hepatic gluconeogenesis sufficient to supply the brain entirely from muscle protein' },
        { id: 'c', text: 'Cerebral uptake of ketone bodies, which removes most of the glucose requirement and therefore most of the protein cost' },
        { id: 'd', text: 'A fall in basal metabolic rate large enough to abolish the need for any fuel oxidation' },
      ],
      answerId: 'c',
      explanation: 'The falling nitrogen excretion is the clue and it is quantitative: protein catabolism has dropped roughly threefold. Glycogen cannot expand during a fast and was exhausted in the first day. Sustaining the brain by gluconeogenesis alone is precisely the scenario that kills in about two weeks, which is why option b describes the phase the patient has escaped rather than the one keeping him alive. Metabolic rate does fall, but only by 20–25%, nothing like enough on its own. Ketone transport into the brain is upregulated by exposure, and by three weeks it supplies about two-thirds of cerebral fuel.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman with anorexia nervosa is admitted at 32 kg and started on full nutritional support. On day three she develops weakness, confusion and a new arrhythmia. Phosphate is 0.28 mmol/L, potassium 2.9 and magnesium 0.5. The most important error in her management was:',
      options: [
        { id: 'a', text: 'Feeding at full calorie targets from the start instead of about 10 kcal/kg/day with electrolytes replaced in advance' },
        { id: 'b', text: 'Using enteral rather than parenteral nutrition in a patient with a long period of starvation' },
        { id: 'c', text: 'Giving too much protein, which raised urea and precipitated the arrhythmia' },
        { id: 'd', text: 'Restricting sodium and fluid, which caused the electrolyte disturbance' },
      ],
      answerId: 'a',
      explanation: 'Total-body phosphate, potassium and magnesium were already depleted with normal-looking serum levels, and the insulin surge from a full carbohydrate load drove all three intracellularly at once while new ATP and 2,3-DPG synthesis consumed more phosphate still. Hypophosphataemia is the lethal component, striking cardiac and respiratory muscle at two to five days, which matches the timing here exactly. The route of feeding is not the issue, protein load is not the mechanism, and sodium and fluid restriction is the correct instruction rather than the error. Thiamine should also have preceded the first calories.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'A 68-year-old has a macrocytic anaemia with hypersegmented neutrophils, plus impaired proprioception and vibration sense with brisk reflexes. He is treated with high-dose folate alone. The haemoglobin normalises over eight weeks while the neurological signs progress. This is because:',
      options: [
        { id: 'a', text: 'Folate and B12 are interchangeable, and the neurological signs must have a separate cause' },
        { id: 'b', text: 'Folate restores thymidylate synthesis and thus erythropoiesis, but only B12 serves methylmalonyl-CoA mutase, the arm responsible for cord degeneration' },
        { id: 'c', text: 'High-dose folate is directly neurotoxic to the posterior columns' },
        { id: 'd', text: 'The anaemia of B12 deficiency is haemolytic rather than megaloblastic, so its correction carries no information' },
      ],
      answerId: 'b',
      explanation: 'The two deficiencies converge on one-carbon transfer for thymidylate synthesis, which is why both give an identical megaloblastic picture and why folate can rescue the marrow regardless of which is truly missing. B12 alone has the second, independent role as cofactor for methylmalonyl-CoA mutase, and the accumulation of methylmalonyl-CoA with abnormal odd-chain fatty acid incorporation into myelin produces subacute combined degeneration. Folate is not neurotoxic; it simply removes the haematological signal that would have prompted the correct diagnosis while the cord lesion advances, which is exactly why B12 status must be established before folate is given.',
      tests: 'disease',
    },
  ],
};

export default ghpStarvationVitaminMineralDeficiency;
