import type { Lecture } from '../../lib/types';

export const ghpProteinTurnoverNitrogenBalance: Lecture = {
  id: 'ghp-protein-turnover-nitrogen-balance',
  title: 'Protein Turnover & Nitrogen Balance',
  system: 'molecular',
  source: 'Ch 69 — Protein Metabolism',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 69 Protein Metabolism' },
    { kind: 'mechanism', label: 'No storage form — spending protein costs function' },
    { kind: 'exam', label: 'Obligatory nitrogen loss · albumin is not a nutrition marker' },
  ],

  highYield: [
    '**Protein has no storage form, and every consequence in this chapter follows from that one sentence.** Fat has the droplet and carbohydrate has the granule — inert depots that exist to be spent. There is no equivalent for protein. Every protein molecule in the body is **already doing a job**: an enzyme, a contractile filament, a membrane transporter, an antibody, a structural collagen. So mobilising protein for fuel is never a withdrawal from savings; it is always the **dismantling of working machinery**, and the function goes with it. This is why protein catabolism is a **late and damaging** event rather than an early and cheap one, why it marks the terminal phase of starvation, and why the clinical signs of protein loss are **functional** — weakness, a poor cough, failed wound healing, immune collapse — long before they are cosmetic.',
    '**Turnover is enormous, continuous, and mostly recycling — which is what buys the first day or two.** Around **250–300 g of body protein is degraded and resynthesised every day** against a dietary intake of only **60–100 g**, so **80–90% of the amino acid flux is internal recycling** rather than new supply. Half-lives span six orders of magnitude: some regulatory enzymes turn over in **minutes**, albumin in about **20 days**, structural collagen in **years**. A small **labile pool** — liver cytoplasmic protein, plasma proteins, gut mucosa, pancreatic enzymes — is spent first and absorbs the initial shortfall. Once that is gone, the body has only one large dispensable mass left, and it takes it from **skeletal muscle**.',
    '**Nitrogen balance is whole-body bookkeeping, and the arithmetic itself is examined.** Protein is about **16% nitrogen**, so **protein grams ÷ 6.25 = nitrogen grams**. Balance is then intake minus **urinary urea nitrogen plus roughly 2–4 g/day** lost insensibly in stool, skin and secretions. **Positive balance** — intake exceeding loss, tissue being laid down — occurs in **growth, pregnancy, convalescence, resistance training**, and under **insulin, growth hormone and androgens**. **Negative balance** occurs in **trauma, sepsis, burns, immobilisation, starvation, uncontrolled diabetes, glucocorticoid excess**, and — the counter-intuitive one — whenever a **single essential amino acid is missing**, however generous the total protein intake.',
    '**Intake can never fall to zero, because loss never does: the obligatory nitrogen loss.** Put an adult on a diet with **no protein at all but adequate calories** and nitrogen excretion does not stop. It falls over several days to a floor of about **3–4 g of nitrogen per day**, equivalent to roughly **20–30 g of protein**, or about **0.34 g/kg**. This irreducible loss is the amino acid carbon that was deaminated and burned before it could be reused, plus the nitrogen in shed cells and secretions. It is the entire basis of the minimum requirement: the measured minimum sits near **0.6 g/kg/day**, and the recommended intake of about **0.8 g/kg/day** is that figure plus a safety margin for individual variation and imperfect protein quality.',
    '**Protein synthesis is all-or-none, so one missing amino acid wastes all the others.** A polypeptide must be assembled with every residue present **simultaneously**; there is no partial product and no free amino acid store to draw on. If one **essential** amino acid runs out, synthesis halts, and the other nineteen — which also cannot be stored — are **deaminated and their carbon burned**. The subject goes into **negative nitrogen balance while eating plenty of protein**. This is the concept of the **limiting amino acid** and it is what *protein quality* actually measures: **lysine** limits cereals, **methionine** limits legumes, and the classical complementary combinations exist precisely because each covers the other\'s gap. Animal protein scores highly not because it is richer but because its amino acid profile is closer to human requirement.',
    '**Adequate calories spare protein — except in the stress state, where that rule breaks.** Nitrogen balance depends on **energy** intake as much as on protein intake: underfeed calories and dietary protein is simply burned as fuel no matter how much you give, while as little as **100–150 g of glucose a day** markedly blunts protein catabolism. That is the entire rationale for dextrose in the perioperative and fasting patient. But **injury overrides adaptation**. Cytokine drive (**IL-1, IL-6, TNF**) with cortisol, catecholamines and glucagon, against a background of insulin resistance, can push losses to **20–30 g of nitrogen a day** in major burns — well over 100 g of protein — and **feeding attenuates this but cannot abolish it**. Simple starvation adapts and spares; the injured patient cannot. That distinction is the whole difference between marasmus and the catabolic stress state.',
  ],

  mechanism: {
    title: 'Every protein is working → turnover recycles most of it → shortfall taken from muscle → carbon to glucose, nitrogen to urea → balance negative → function lost',
    steps: [
      { id: 's1', label: 'There is no protein depot — every molecule is enzyme, filament, transporter, antibody or matrix', emphasis: 'key' },
      { id: 's2', label: 'Some 250–300 g is degraded and resynthesised daily, with most amino acids recycled rather than replaced', emphasis: 'normal' },
      { id: 's3', label: 'A small labile pool in liver, plasma and gut mucosa absorbs the first day or two of any shortfall', emphasis: 'normal' },
      { id: 's4', label: 'Beyond that the body draws on skeletal muscle, the largest dispensable mass of protein it owns', emphasis: 'key' },
      { id: 's5', label: 'Carbon skeletons enter gluconeogenesis while the amino nitrogen is stripped and excreted as urea', detail: 'Urinary urea nitrogen is therefore a direct readout of how fast protein is being spent', emphasis: 'key' },
      { id: 's6', label: 'Nitrogen balance turns negative and function is lost in proportion — weakness, poor healing, immune failure, respiratory muscle collapse', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Urinary urea nitrogen of 18 g/day in a major burns patient receiving full nutritional support, against a normal 6–8 g/day', mechanism: 'Cytokine and counter-regulatory drive overrides the starvation adaptation; feeding attenuates the loss but cannot abolish it', significance: 'key' },
    { sign: 'A patient eating an abundant maize-based diet who remains in negative nitrogen balance', mechanism: 'Lysine is the limiting amino acid; synthesis halts and the other amino acids are deaminated and burned rather than stored', significance: 'key' },
    { sign: 'Visible quadriceps wasting and a weak cough in a hospitalised patient before any obvious change in body weight', mechanism: 'Muscle is the reservoir that is drawn on once the labile pool is spent, and respiratory muscle loss is what ultimately kills', significance: 'key' },
    { sign: 'Serum albumin falling from 38 to 24 g/L over 72 hours of acute illness and failing to rise with aggressive feeding', mechanism: 'Albumin is a negative acute-phase protein with a half-life near 20 days — a fall this fast reflects inflammation and capillary leak, not nutrition', significance: 'key' },
    { sign: 'Markedly less nitrogen loss in a postoperative patient given 5% dextrose than in one given saline alone', mechanism: 'The protein-sparing effect of carbohydrate — even 100–150 g of glucose a day blunts the drive to gluconeogenesis from amino acids', significance: 'supportive' },
    { sign: 'Urinary nitrogen excretion rising again late in prolonged starvation after weeks of very low values', mechanism: 'The pre-terminal phase: once fat reserves are exhausted, protein must be catabolised again and death follows quickly', significance: 'key' },
  ],

  investigations: [
    { clue: 'Conversion between dietary protein and nitrogen', meaning: 'Protein is about 16% nitrogen, so 6.25 g of protein per 1 g of nitrogen' },
    { clue: 'The unavoidable loss on a protein-free but calorie-adequate diet', meaning: 'About 3–4 g nitrogen per day, roughly 0.34 g protein/kg — the obligatory nitrogen loss, and the reason intake can never be zero' },
    { clue: 'Nitrogen lost by routes other than urine', meaning: 'About 2–4 g/day in stool, skin and secretions — always added to urinary urea nitrogen in the balance calculation' },
    { clue: 'Fate of the other nineteen amino acids when a single essential one is missing', meaning: 'They cannot be stored, so they are deaminated and their carbon burned — negative balance despite ample protein intake' },
    { clue: 'Plasma protein that tracks inflammation rather than nutrition', meaning: 'Albumin, a negative acute-phase reactant with a 20-day half-life; prealbumin at about 2 days follows nutritional change far faster' },
    { clue: 'Proportion of body protein whose loss is generally fatal', meaning: 'Roughly half — usually through respiratory muscle failure, pneumonia and immune collapse rather than energy failure' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The organising idea is that **there is no spare protein**, so the question is never *how much protein is left* but *what stopped working when it was spent*. That is why the clinically useful measurement is **functional** — grip strength, cough, wound healing — rather than a number, and why the protein-energy spectrum in [[nutrition-energy-protein-malnutrition]] separates the adapted from the stressed patient rather than grading severity on a single axis. The nitrogen itself has to go somewhere, and the disposal chemistry sits in [[amino-nitrogen-handling]].' },
    { logic: 'Where it is examined', detail: 'Four reliable stems. **The balance arithmetic** — intake ÷ 6.25 minus urinary urea nitrogen plus about 4, with the insensible term the part candidates forget. **Obligatory nitrogen loss**, and why a protein-free diet still loses 3–4 g of nitrogen a day. **Albumin as an acute-phase reactant**, not a nutrition marker — the half-life argument settles it every time, and the hepatic side of that is in [[urea-cycle-hyperammonemia]]. And **the limiting amino acid**, where the trap is assuming that plenty of protein guarantees positive balance. The hormones that set the direction of all this are in [[ghp-amino-acid-pool-hormonal-control]].' },
  ],

  mnemonics: [
    { hook: 'There is no spare protein — you can only spend working tissue', expansion: ['Fat has a droplet and carbohydrate has a granule; protein has neither', 'Every protein mobilised is an enzyme, a filament or an antibody removed from service', 'So the cost of protein catabolism is always functional, never merely cosmetic', 'Which is why it is the last resource used and the one whose loss ends the story'] },
    { hook: 'Balance = (protein ÷ 6.25) − (urinary urea N + 4)', expansion: ['6.25 because protein is about 16% nitrogen', 'The 4 is the insensible loss in stool, skin and secretions', 'Positive in growth, pregnancy, convalescence and training', 'Negative in trauma, sepsis, burns, steroids, starvation — and whenever one essential amino acid is missing'] },
  ],

  traps: [
    {
      questionCategory: 'What a low albumin actually means in an acutely ill patient',
      wrongInstinct: 'It measures how malnourished the patient is and should be corrected by feeding or by infusing albumin',
      rightAnswer: 'It is a negative acute-phase protein and mostly reflects inflammation, capillary leak and redistribution',
      why: 'Its half-life is about 20 days, so it cannot possibly fall in 48 hours from lack of food — prealbumin and nitrogen balance track nutrition far faster.',
    },
    {
      questionCategory: 'Why generous protein feeding does not abolish catabolism in sepsis',
      wrongInstinct: 'Give enough protein and nitrogen balance in a septic or burned patient can be restored to positive',
      rightAnswer: 'Cytokine and counter-regulatory drive overrides the adaptive response, so feeding attenuates but cannot abolish the loss',
      why: 'Simple starvation adapts and spares protein; the injured patient cannot, and that failure of adaptation is precisely what separates the stress state from marasmus.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man eating a diet based almost entirely on maize consumes 90 g of protein daily, comfortably above his requirement, yet remains in persistently negative nitrogen balance. Adding a small quantity of legumes corrects it. The best explanation is:',
      options: [
        { id: 'a', text: 'Maize protein is poorly digested and absorbed in the small intestine' },
        { id: 'b', text: 'Lysine is limiting, so synthesis halts and the remaining amino acids are deaminated and burned' },
        { id: 'c', text: 'Maize contains an inhibitor of hepatic urea cycle enzymes' },
        { id: 'd', text: 'The total energy content of a maize diet is insufficient to spare protein' },
      ],
      answerId: 'b',
      explanation: 'Protein synthesis is all-or-none: every residue must be present at once and there is no free amino acid store to bridge a gap. Once the limiting essential amino acid runs out, synthesis stops and the other amino acids, which also cannot be stored, are deaminated and their carbon oxidised, so nitrogen excretion continues while nothing is built. Lysine is the limiting amino acid of cereals and methionine of legumes, which is why the traditional combination of the two restores balance.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A previously well 60-year-old is admitted with severe pneumonia. Serum albumin falls from 40 to 25 g/L within 72 hours. He has eaten normally until two days before admission. The most likely explanation is:',
      options: [
        { id: 'a', text: 'Acute protein-energy malnutrition from two days of reduced intake' },
        { id: 'b', text: 'Reduced hepatic synthetic capacity from occult chronic liver disease' },
        { id: 'c', text: 'Albumin behaving as a negative acute-phase protein, with redistribution through leaky capillaries' },
        { id: 'd', text: 'Urinary albumin loss from sepsis-associated glomerular injury' },
      ],
      answerId: 'c',
      explanation: 'Albumin has a half-life of about 20 days, so even complete cessation of synthesis could not drop the concentration by this much in 72 hours. What can is redistribution: inflammatory cytokines increase capillary permeability, albumin moves into the interstitium, and hepatic priority shifts to positive acute-phase proteins. Albumin therefore grades illness severity, not nutritional state, and correcting it by infusion treats the number rather than the patient.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A volunteer is placed on a diet containing no protein whatsoever but fully adequate in carbohydrate and fat. After a week of adaptation, urinary nitrogen excretion falls but plateaus at about 3.5 g/day rather than reaching zero. This residual loss represents:',
      options: [
        { id: 'a', text: 'Failure of the kidney to reabsorb filtered urea when dietary protein is withdrawn' },
        { id: 'b', text: 'The obligatory nitrogen loss — continuous turnover in which some amino acid carbon is deaminated and burned before it can be reused' },
        { id: 'c', text: 'Ongoing gluconeogenesis, which cannot be suppressed while carbohydrate intake continues' },
        { id: 'd', text: 'Bacterial urease activity in the colon generating nitrogen that is then absorbed and excreted' },
      ],
      answerId: 'b',
      explanation: 'Protein turnover never stops, and recycling is efficient but not perfect: a fraction of the amino acids released by degradation is deaminated and oxidised before it can be reincorporated, and further nitrogen is lost in shed cells, hair, and secretions. The floor sits near 3–4 g of nitrogen daily, about 0.34 g of protein per kilogram, and it is why dietary protein intake can never be zero. The measured minimum requirement of roughly 0.6 g/kg/day, and the recommended 0.8 g/kg/day, are both built on this figure.',
      tests: 'mechanism',
    },
  ],
};

export default ghpProteinTurnoverNitrogenBalance;
