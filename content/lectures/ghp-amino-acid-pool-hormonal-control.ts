import type { Lecture } from '../../lib/types';

export const ghpAminoAcidPoolHormonalControl: Lecture = {
  id: 'ghp-amino-acid-pool-hormonal-control',
  title: 'The Amino-Acid Pool & Its Hormonal Control',
  system: 'molecular',
  source: 'Ch 70 — Protein Metabolism',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 70 Protein Metabolism' },
    { kind: 'mechanism', label: 'One shared pool · insulin and GH in, cortisol and glucagon out' },
    { kind: 'exam', label: 'Cortisol redistributes · thyroid hormone is biphasic' },
  ],

  highYield: [
    '**There is one amino-acid pool, it is shared, and it is a crossroads rather than a store.** Diet, tissue protein breakdown and de novo synthesis all empty into the same free amino-acid pool, and protein synthesis, oxidation and the manufacture of nitrogen-containing products all draw from it. The body **cannot distinguish a dietary amino acid from a recycled one** once it arrives. The pool holds only about **100 g in total**, of which plasma carries barely **1 g** — a plasma concentration of roughly **35–65 mg/dL** — against a daily flux of **250–300 g**. It is therefore turned over several times a day, which is precisely why plasma amino acid concentrations barely move under normal conditions and why a large change in them is a strong signal of disease. Cells hold their own amino acids at concentrations well above plasma by **sodium-coupled active transport**, and then immediately convert them to protein: **storage happens as protein or not at all**.',
    '**Essential versus non-essential is not a list to memorise but a rule to apply: can the body build the carbon skeleton?** Transamination readily supplies the **amino group** to any available keto acid, so the limiting question is always whether the **carbon skeleton** can be synthesised. If it can, the amino acid is non-essential. If it cannot, the skeleton must come from the diet. Two corollaries carry all the clinical weight. **Conditionally essential** amino acids — arginine, glutamine, cysteine, tyrosine, and histidine in infants — are ones whose synthesis is adequate in health but outstripped in growth, prematurity or catabolic stress. And when a synthetic step is **blocked by disease**, the product becomes essential: **tyrosine in phenylketonuria** (phenylalanine hydroxylase blocked) and **cysteine in homocystinuria** (the transsulphuration route blocked) both have to be supplied.',
    '**A surplus amino acid has three fates and no fourth — it cannot be kept.** Unlike glucose and fatty acids it has **no storage form**, so within hours of absorption an excess is either **built into protein**, **deaminated and oxidised**, or diverted into a small stream of **nitrogen-containing products** (haem, purines, creatine, catecholamines, thyroid hormone, melanin, nitric oxide, niacin). Whatever is deaminated splits into two halves that travel separately: the **nitrogen** goes to **urea**, and the **carbon skeleton** joins either gluconeogenesis or ketogenesis. Almost all amino acids are **glucogenic**; several are both; only **leucine and lysine are purely ketogenic**, because their carbon enters exclusively as acetyl-CoA or acetoacetate and therefore cannot yield glucose. That split is a favourite single-best-answer.',
    '**Two amino acids carry almost all the nitrogen traffic between organs, and they go to different places for different reasons.** Muscle cannot make urea, so it exports its surplus nitrogen in a safe carrier. **Alanine** goes to the **liver**, where transamination hands the nitrogen to urea and the pyruvate skeleton is rebuilt into glucose — the **glucose-alanine cycle**, which moves nitrogen and carbon in one package. **Glutamine** — the most abundant free amino acid in the body — goes to the **gut**, where it is the enterocyte\'s preferred fuel, and to the **kidney**, where glutaminase liberates ammonia for excretion as ammonium. That renal route is why **glutamine extraction rises sharply in acidosis**: the same molecule that disposes of nitrogen also disposes of acid.',
    '**Insulin and growth hormone are the anabolic pair, but they build in different ways.** **Insulin** drives amino acid uptake into muscle, switches on translation, and — the point examiners want — is powerfully **anti-catabolic**, suppressing proteolysis. Its absence alone causes wasting: the untreated type 1 diabetic loses muscle **while eating voraciously**, because no amount of substrate compensates for the missing retention signal. **Growth hormone**, largely through **IGF-1**, increases amino acid transport and protein synthesis and produces sustained **positive nitrogen balance**, but it is simultaneously **lipolytic and diabetogenic**. That combination makes it the **nutrient-partitioning** hormone: burn fat, build protein. **Androgens** do the same but self-limit at a plateau, which is why nitrogen retention on testosterone is finite rather than cumulative.',
    '**Cortisol redistributes protein rather than simply destroying it, and thyroid hormone is biphasic — these two supply most of the exam questions.** Cortisol strips amino acids from **muscle, skin, bone matrix and lymphoid tissue** and delivers them to the **liver**, where protein synthesis actually **rises** to build gluconeogenic enzymes and acute-phase proteins. The entire Cushing phenotype falls out of that one sentence: **proximal myopathy** with type II fibre atrophy and a normal CK, **thin skin, striae and easy bruising** from lost dermal collagen, **osteoporosis** from lost bone matrix, **poor wound healing**, and **lymphopenia** — all with a normal or even high albumin. **Thyroid hormone** is the opposite kind of trap: at **physiological** levels, with adequate substrate, it promotes protein synthesis and growth, so the hypothyroid child fails to grow; in **excess**, or when substrate is short, it accelerates catabolism, so the thyrotoxic adult wastes despite hyperphagia. Same hormone, opposite direction, decided by **dose and substrate supply**.',
  ],

  mechanism: {
    title: 'Diet and breakdown feed one pool → insulin and GH pull it into protein → cortisol and glucagon pull it to the liver → carbon to glucose, nitrogen to urea',
    steps: [
      { id: 's1', label: 'Diet, tissue protein breakdown and de novo synthesis all empty into a single shared free amino-acid pool', emphasis: 'key' },
      { id: 's2', label: 'The pool holds about 100 g against a daily flux of 250–300 g, so it is a crossroads and never a reserve', detail: 'Cells hold amino acids above plasma concentration by sodium-coupled transport, then store them only by building protein', emphasis: 'key' },
      { id: 's3', label: 'Insulin and growth hormone drive amino acids into muscle, switch on translation and suppress proteolysis', emphasis: 'key' },
      { id: 's4', label: 'Cortisol and glucagon reverse the flow, pulling amino acids out of muscle and into the liver', emphasis: 'key' },
      { id: 's5', label: 'In the liver the nitrogen is stripped to urea and the carbon enters gluconeogenesis or, for leucine and lysine, ketogenesis', emphasis: 'key' },
      { id: 's6', label: 'Hepatic protein synthesis rises while peripheral protein falls — redistribution, which is exactly what the Cushing phenotype is', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Proximal myopathy with preserved distal strength and a normal creatine kinase in a patient on long-term prednisolone', mechanism: 'Cortisol-driven type II fibre atrophy — the muscle is being dismantled for gluconeogenic substrate, not inflamed, so CK stays normal', significance: 'key' },
    { sign: 'Thin skin, easy bruising and wide purple striae in Cushing syndrome', mechanism: 'The same catabolic redistribution stripping dermal collagen and the protein matrix of bone and lymphoid tissue', significance: 'key' },
    { sign: 'Progressive muscle wasting and negative nitrogen balance in untreated type 1 diabetes despite ravenous appetite and generous intake', mechanism: 'Insulin is required to retain muscle protein; without it proteolysis runs unopposed regardless of substrate supply', significance: 'key' },
    { sign: 'A hypothyroid child with markedly delayed linear growth alongside a thyrotoxic adult wasting despite hyperphagia', mechanism: 'Thyroid hormone is biphasic — anabolic at physiological levels with adequate substrate, catabolic in excess or when substrate is short', significance: 'key' },
    { sign: 'Urea rising to 15 mmol/L with a completely normal creatinine after a large upper gastrointestinal bleed', mechanism: 'A digested-blood protein load and accelerated proteolysis raise ureagenesis without any fall in glomerular filtration', significance: 'supportive' },
    { sign: 'Tyrosine supplementation prescribed alongside phenylalanine restriction in phenylketonuria', mechanism: 'A normally non-essential amino acid becomes essential when the synthetic step that makes it is blocked', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Size of the free amino-acid pool set against the daily flux through it', meaning: 'About 100 g of free amino acid, only 1 g of it in plasma, against 250–300 g turned over each day' },
    { clue: 'The rule that decides whether an amino acid is essential', meaning: 'Whether the body can build its carbon skeleton — transamination will always supply the nitrogen if the skeleton exists' },
    { clue: 'The only two purely ketogenic amino acids', meaning: 'Leucine and lysine — their carbon enters as acetyl-CoA or acetoacetate and can never yield glucose' },
    { clue: 'The two amino acids that carry the bulk of interorgan nitrogen', meaning: 'Alanine to the liver in the glucose-alanine cycle, and glutamine to gut and kidney — the latter rising sharply in acidosis' },
    { clue: 'Hormone that raises hepatic protein synthesis while lowering muscle protein', meaning: 'Cortisol — redistribution rather than global loss, which is why Cushing gives myopathy and thin skin with a normal albumin' },
    { clue: 'Hormone that is anabolic at physiological dose and catabolic in excess', meaning: 'Thyroid hormone — the direction depends on dose and on whether substrate supply keeps up' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The pool is the reason the body can run a **250–300 g daily turnover on a 100 g float**: everything is recycled through one shared compartment, so hormonal signals do not need to reach a store — they only need to change **which way the traffic flows**. That is why the hormonal picture reduces to a single axis, **insulin and growth hormone in, cortisol and glucagon out**, and why every clinical syndrome on this page is that axis pushed too far in one direction. What happens to the carbon once it is deaminated, including the glucogenic and ketogenic split and the inborn errors that interrupt it, is in [[amino-carbon-skeleton-disorders]]; the bookkeeping view of the same traffic is in [[ghp-protein-turnover-nitrogen-balance]].' },
    { logic: 'Where it is examined', detail: 'Three stems dominate. **Cortisol redistributes, it does not simply destroy** — hepatic synthesis rises while muscle, skin, bone matrix and lymphoid tissue are stripped, and the Cushing phenotype is derivable from that alone rather than memorised. **Insulin is anti-catabolic as well as anabolic**, which is why the untreated type 1 diabetic wastes while eating heavily, and the fed-state signalling behind it is in [[hen1-insulin-signaling-fed-metabolism]]. And **thyroid hormone is biphasic** — anabolic at physiological dose, catabolic in excess — which trips up anyone who has filed it as purely catabolic. Where the mobilised carbon actually ends up is in [[gluconeogenesis-cori-alanine]].' },
  ],

  mnemonics: [
    { hook: 'Build with Insulin and GH; spend with Cortisol and Glucagon', expansion: ['Insulin drives uptake and translation and blocks proteolysis — it is anti-catabolic first', 'Growth hormone builds protein while burning fat: the nutrient-partitioning hormone', 'Cortisol strips muscle, skin, bone matrix and lymphoid tissue and feeds the liver', 'Glucagon pulls amino acids into the liver for gluconeogenesis and ureagenesis', 'Thyroid hormone sits outside the pairing — anabolic at physiological dose, catabolic in excess'] },
    { hook: 'Only the two L amino acids are purely ketogenic: Leucine and Lysine', expansion: ['Their carbon enters as acetyl-CoA or acetoacetate, downstream of the irreversible step', 'So no part of them can be turned into glucose', 'Everything else is glucogenic, or both glucogenic and ketogenic', 'The nitrogen half always goes the same way regardless: transamination, then urea'] },
  ],

  traps: [
    {
      questionCategory: 'What cortisol actually does to body protein',
      wrongInstinct: 'Cortisol suppresses protein synthesis everywhere, so all tissues including the liver waste together',
      rightAnswer: 'It redistributes — hepatic synthesis of gluconeogenic enzymes and acute-phase proteins rises while muscle, skin, bone matrix and lymphoid tissue are stripped',
      why: 'The whole Cushing phenotype follows from redistribution: proximal myopathy with a normal CK, thin skin and striae, osteoporosis, poor healing and lymphopenia, all with a normal albumin.',
    },
    {
      questionCategory: 'Why an untreated type 1 diabetic wastes while eating a great deal',
      wrongInstinct: 'The calories are simply lost in the urine as glucose, so this is straightforward undernutrition',
      rightAnswer: 'Insulin is required to retain muscle protein, and its absence permits unopposed proteolysis on top of the glycosuria',
      why: 'Insulin is anti-catabolic in muscle as much as it is anabolic, which is why nitrogen balance goes negative even when protein intake is generous.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A woman on high-dose glucocorticoids for six months has proximal weakness, thin bruisable skin and purple abdominal striae. Creatine kinase and serum albumin are both normal. The mechanism best explaining this combination is:',
      options: [
        { id: 'a', text: 'Generalised suppression of protein synthesis in all tissues including the liver' },
        { id: 'b', text: 'An inflammatory myopathy induced by the steroid acting directly on muscle fibres' },
        { id: 'c', text: 'Redistribution — amino acids are stripped from muscle, skin, bone matrix and lymphoid tissue while hepatic synthesis increases' },
        { id: 'd', text: 'Impaired intestinal absorption of essential amino acids' },
      ],
      answerId: 'c',
      explanation: 'Cortisol is catabolic peripherally and anabolic in the liver: it mobilises amino acids to supply hepatic gluconeogenesis and acute-phase protein synthesis. That single redistribution generates the whole phenotype — type II fibre atrophy giving proximal weakness with a normal CK because the muscle is being dismantled rather than inflamed, loss of dermal collagen giving thin skin and striae, loss of bone matrix giving osteoporosis, and lymphoid involution giving lymphopenia. The normal albumin is the giveaway that hepatic synthesis is intact.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child with phenylketonuria is managed with strict phenylalanine restriction. Tyrosine must also be supplied in the diet. The reason is that:',
      options: [
        { id: 'a', text: 'Tyrosine is normally an essential amino acid in all individuals' },
        { id: 'b', text: 'Tyrosine is normally made from phenylalanine, so blocking that step makes it conditionally essential' },
        { id: 'c', text: 'Dietary phenylalanine restriction also removes the major dietary sources of tyrosine' },
        { id: 'd', text: 'Accumulated phenylalanine metabolites accelerate the renal excretion of tyrosine' },
      ],
      answerId: 'b',
      explanation: 'Whether an amino acid is essential depends on whether the body can build its carbon skeleton, since transamination will always supply the nitrogen. Tyrosine is normally non-essential only because phenylalanine hydroxylase makes it from phenylalanine; when that enzyme is deficient, the synthetic route is closed and tyrosine must be supplied. The same logic makes cysteine essential in homocystinuria, where the transsulphuration route from methionine is blocked.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A newly diagnosed adolescent with type 1 diabetes reports an enormous appetite and high food intake over recent months, yet has lost 8 kg with visible muscle wasting. Nitrogen balance is strongly negative. The most complete explanation is:',
      options: [
        { id: 'a', text: 'Urinary calorie loss as glucose is sufficient to account for the entire deficit' },
        { id: 'b', text: 'Malabsorption of dietary protein secondary to autonomic neuropathy' },
        { id: 'c', text: 'Insulin deficiency removes the anti-catabolic brake on muscle proteolysis, so protein is lost regardless of intake' },
        { id: 'd', text: 'Counter-regulatory suppression of growth hormone secretion reduces protein synthesis' },
      ],
      answerId: 'c',
      explanation: 'Glycosuria contributes calorie loss, but it does not explain selective loss of lean mass or a strongly negative nitrogen balance while intake is high. Insulin is required not only to drive amino acid uptake and translation but to suppress proteolysis, and that anti-catabolic action is the one that fails first. Without it, muscle protein is continuously broken down to supply hepatic gluconeogenesis, so the patient wastes despite hyperphagia — and replacing insulin, not protein, is what reverses it.',
      tests: 'mechanism',
    },
  ],
};

export default ghpAminoAcidPoolHormonalControl;
