import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpNutritionalDiseaseObesity: Lecture = {
  id: 'rbp-nutritional-disease-obesity',
  title: 'Nutritional Deficiency, Excess & Obesity',
  system: 'pathology',
  source: 'Ch 7 — Environmental and Nutritional Diseases',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 7 Environmental and Nutritional Diseases' },
    { kind: 'mechanism', label: 'Oncotic pressure explains the oedema · insulin explains the refeeding death · adipose is an endocrine organ' },
    { kind: 'exam', label: 'Marasmus keeps its albumin · phosphate is the number that kills · only B12 reaches the spinal cord' },
  ],

  highYield: [
    '**Marasmus and kwashiorkor are not two severities of one disease — they are a deficit of ENERGY against a deficit of PROTEIN, and the oedema falls out of that difference.** In **marasmus** total calorie intake is inadequate, so the child mobilises the **somatic compartment**: skeletal muscle is catabolised for amino acids and subcutaneous fat for energy. Weight falls **below about 60% of expected for age and sex**, the limbs are emaciated, the head looks disproportionately large, and because the **visceral compartment (liver-derived plasma proteins) is comparatively spared, the serum albumin stays normal or near normal — so there is NO oedema**. In **kwashiorkor** calories are roughly adequate, classically from a starch-heavy weaning diet, but protein is not; the **visceral compartment is sacrificed instead**, and the **serum albumin falls below about 25 g/L**. Now derive the rest rather than memorising it. Albumin supplies **roughly 75% of the plasma colloid osmotic pressure**, normally about **25 to 28 mmHg**; halve the albumin and you halve the force holding water inside the capillary, so at unchanged hydrostatic pressure net filtration exceeds reabsorption plus lymphatic drainage and fluid accumulates in the interstitium. Reduced effective circulating volume then triggers **secondary hyperaldosteronism**, adding sodium and water retention, and the result is generalised pitting **oedema with ascites**. That oedema is why **weight in kwashiorkor typically reads 60 to 80% of expected and UNDERSTATES the true deficit** — the child is heavier than the malnutrition alone would allow. Two further findings come from the same protein failure: **apolipoprotein synthesis stops, triglyceride cannot be exported as VLDL, and the liver becomes fatty and enlarged**; and the skin and hair show **flaky-paint dermatosis with alternating hyper- and hypopigmentation, plus the depigmented bands of the hair flag sign**. Clinical assessment and scoring: [[fcp1-malnutrition-evaluation]].',
    '**Cachexia is a cytokine-driven catabolic programme, not starvation, and the single discriminator is what happens to resting energy expenditure.** In **simple starvation the body defends itself**: resting energy expenditure FALLS, ketoadaptation spares glucose and therefore spares muscle, and refeeding reverses the whole thing. In **cachexia the resting energy expenditure RISES** while intake falls, and **both fat and lean muscle are lost together** — which is why a cachectic patient burns muscle even while receiving adequate calories. The drivers are host and tumour cytokines, principally **TNF (originally named cachectin), IL-1, IL-6 and IFN-gamma**, with tumour-derived **proteolysis-inducing factor** and **lipid-mobilising factor**. Mechanistically these activate **NF-kappaB and the ubiquitin-proteasome pathway** to degrade myofibrillar protein, drive lipolysis, and induce **UCP1 browning of white adipose tissue** so energy is dissipated as heat; centrally they act on hypothalamic **melanocortin** signalling to suppress appetite. Cachexia affects **roughly half of patients with advanced cancer** and is judged the immediate cause of death in an estimated **20 to 30%**. The consequence that matters on the ward is a rule: **nutrition alone does not reverse cachexia**, because the catabolic signal is still running — feeding is supportive, and only treating the underlying disease or blocking the cytokine drive changes the trajectory. Chronic heart failure, COPD, chronic kidney disease, tuberculosis and HIV produce the same syndrome by the same route.',
    '**Refeeding syndrome is insulin doing exactly what insulin does, to a patient who has nothing left to give.** Weeks of starvation deplete **total-body phosphate, potassium and magnesium** while the **serum concentrations stay normal**, because as intracellular stores fall the ions leak out into plasma and the kidney trims excretion to match — so a normal pre-feed panel is not reassurance, it is camouflage. Give carbohydrate and the switch flips: **insulin surges**, glucose and **potassium move into cells on the sodium-potassium ATPase**, **magnesium follows**, and **phosphate is consumed on an industrial scale** — every glucose molecule entering glycolysis is phosphorylated twice, and the cell simultaneously rebuilds **ATP and 2,3-BPG**. **Hypophosphataemia is the one that kills.** Below about **0.32 mmol/L** ATP synthesis fails in the tissues with the least reserve: the **diaphragm weakens and the patient cannot be weaned from the ventilator**, the myocardium fails, and rhabdomyolysis, haemolysis, seizures and arrhythmia follow; falling 2,3-BPG **left-shifts the oxyhaemoglobin curve** so the oxygen that is carried will not unload. In parallel, insulin promotes renal sodium and water retention, which loads a heart that has itself atrophied. And **thiamine must go in BEFORE the carbohydrate**: body stores are only **about 25 to 30 mg and are exhausted in two to four weeks**, thiamine is the cofactor for **pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase and transketolase**, and a glucose load in a depleted patient consumes the last of it and precipitates **Wernicke encephalopathy**. The rule that follows from the mechanism, and the one examiners want: **thiamine first, calories low and slow, and phosphate measured daily for the first 72 hours.**',
    '**Every vitamin deficiency syndrome is its biochemical job failing in public.** **Vitamin A**: retinal plus opsin makes rhodopsin, so the first symptom is **night blindness**; retinoic acid acting through RAR and RXR maintains epithelial differentiation, so deficiency gives **squamous metaplasia and keratinisation** — **Bitot spots** (keratin debris on conjunctiva), xerophthalmia, **keratomalacia and corneal blindness**, follicular hyperkeratosis of skin, and respiratory and urinary epithelial failure with stones and infection. **Vitamin D**: skin 7-dehydrocholesterol to cholecalciferol, liver 25-hydroxylation, then renal 1-alpha-hydroxylation under PTH control; deficiency leaves osteoid unmineralised, which is **rickets in the child because the growth plate is still open** (widened epiphyses, rachitic rosary, frontal bossing, bowed legs) and **osteomalacia in the adult** (Looser pseudofracture zones). **Vitamin C** is the cofactor for **prolyl and lysyl hydroxylase**, so without it collagen cannot be hydroxylated, cannot cross-link and cannot form a stable triple helix — which is why **scurvy bleeds** (perifollicular and gingival haemorrhage, subperiosteal bleeding in children) and why **old wounds reopen and new ones do not heal**: it is one mechanism producing two apparently unrelated signs. **Vitamin K** is the cofactor for **gamma-glutamyl carboxylase**, which carboxylates factors **II, VII, IX and X plus protein C and protein S**, letting them bind calcium and anchor to phospholipid; without it the factors are synthesised but inert, so the **PT prolongs first because factor VII has the shortest half-life, about 6 hours**. **Thiamine** gives **dry beriberi** (peripheral neuropathy), **wet beriberi** (high-output failure with vasodilatation) and Wernicke-Korsakoff. **Niacin** builds NAD and NADP and is also made from tryptophan at **60 mg tryptophan per 1 mg niacin**, so pellagra follows a maize diet, **Hartnup disease**, **carcinoid** (tryptophan diverted to serotonin) or isoniazid: **dermatitis in sun-exposed skin, diarrhoea and dementia — the three Ds, with death as the fourth**. **B12 and folate both fail thymidylate synthesis**, so both give megaloblastic anaemia with hypersegmented neutrophils — but **only B12 deficiency causes neurological disease**, because methylmalonyl-CoA mutase needs adenosylcobalamin and the accumulating propionyl-CoA corrupts myelin lipid, producing **subacute combined degeneration of the dorsal columns and lateral corticospinal tracts**. Stores separate them in time: **B12 lasts 3 to 5 years, folate 3 to 4 months**. Micronutrient detail by nutrient: [[ghp-starvation-vitamin-mineral-deficiency]].',
    '**Fat-soluble vitamins are stored, so they accumulate to toxicity; water-soluble vitamins are excreted, so they usually do not — and the exceptions are few enough to name.** **A, D, E and K** need bile salts and micelles to be absorbed and are stored in liver and adipose, which produces two consequences. First, **any cause of fat malabsorption produces a COMBINED A, D, E and K deficiency** — cystic fibrosis, cholestasis, coeliac disease, pancreatic insufficiency, bariatric surgery and orlistat. Second, they have no excretory escape route, so excess accumulates. **Hypervitaminosis A** is acute (headache, vomiting, papilloedema, stupor — a syndrome that convincingly mimics a brain tumour, and the classic history is polar bear or seal liver) or chronic (anorexia, bone and joint pain, hyperostosis, hepatic fibrosis and portal hypertension); crucially, **retinoids are potent teratogens**, and isotretinoin causes craniofacial, cardiac and CNS malformations, which is why contraception is mandatory around treatment. **Hypervitaminosis D** causes **hypercalcaemia with metastatic calcification**, nephrocalcinosis and stones. **Excess vitamin E antagonises vitamin K** and raises bleeding risk. The water-soluble exceptions to learn by name: **pyridoxine above roughly 100 mg daily chronically causes a sensory neuropathy** from a dorsal root ganglionopathy; **pharmacological niacin causes prostaglandin-mediated flushing** (abolished by aspirin) plus hepatotoxicity, hyperglycaemia and hyperuricaemia; and **high-dose vitamin C produces oxalate stones**. Depletion also lowers the threshold for every chemical injury in the sibling chapter, because glutathione synthesis is substrate-limited: [[rbp-environmental-toxic-injury]].',
    '**Obesity is a disease of adipose tissue behaving as an ENDOCRINE and IMMUNE organ, and insulin resistance is the hinge connecting it to metabolic syndrome and to cancer.** Adipocytes secrete **leptin, adiponectin, resistin, TNF, IL-6, MCP-1, PAI-1, angiotensinogen and aromatase**. **Leptin rises in proportion to fat mass** and acts on the hypothalamic arcuate nucleus to stimulate anorexigenic **POMC/CART** neurons and inhibit orexigenic **NPY/AgRP** neurons; common obesity is a state of **leptin RESISTANCE**, with high leptin that is not heard, which is why leptin works spectacularly in the vanishingly rare congenital leptin deficiency and not at all in everyone else. **MC4R mutations are the commonest monogenic obesity**, found in roughly 1 to 6% of severe early-onset cases. **Adiponectin is the one adipokine that FALLS as fat mass rises** — it is insulin-sensitising and anti-inflammatory and acts through AMPK — so expanding adipose simultaneously loses its protective signal and gains its inflammatory ones. The inflammation is structural: hypertrophied adipocytes **outgrow their blood supply, become hypoxic and die**, macrophages move in and ring the dying cell as a **crown-like structure**, and the resident population **switches from an M2 to an M1 phenotype**. The TNF and IL-6 released drive **serine rather than tyrosine phosphorylation of IRS-1**, blunting **PI3K/Akt** signalling — that is insulin resistance, at the molecular level, caused by inflammation in fat. **Where the fat sits then decides the prognosis, for an anatomical reason**: **visceral fat is lipolytically active and drains through the PORTAL vein straight into the liver**, delivering free fatty acids and adipokines at first pass and producing hepatic insulin resistance, unrestrained gluconeogenesis and VLDL overproduction, whereas **subcutaneous, especially gluteofemoral, fat drains systemically and is comparatively inert**. This is why **waist circumference outperforms BMI**, and why a person of normal BMI with central adiposity can carry full metabolic risk. The cancer link is not vague: **hyperinsulinaemia with raised free IGF-1 drives mitogenic PI3K/Akt and MAPK signalling**, and **adipose aromatase converts androstenedione to oestrone, which after the menopause makes fat the principal source of oestrogen** while lowered SHBG raises the free fraction further — hence **endometrial and postmenopausal breast cancer**, alongside oesophageal adenocarcinoma, colorectal, renal, pancreatic, hepatocellular and gallbladder cancer. Stated factually: fat mass is **40 to 70% heritable** and is physiologically defended, so after weight loss resting energy expenditure falls further than body composition predicts and ghrelin rises — regain is the predicted physiology, not a failure of will. Adipokine detail: [[hen1-adipokines-obesity-insulin-resistance]].',
  ],

  mechanism: {
    title: 'Starvation hides the deficit → carbohydrate → insulin → phosphate, potassium and magnesium driven inward → ATP failure',
    steps: [
      {
        id: 's1',
        label: 'Weeks of starvation deplete total-body phosphate, potassium and magnesium while the serum values stay normal',
        detail: 'As intracellular stores fall the ions move out into plasma and the kidney trims excretion to match. A normal pre-feed panel is camouflage, not reassurance.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'The starved body is ketoadapted: gluconeogenic and lipolytic, with an atrophied heart and a low resting energy expenditure',
        detail: 'Cardiac mass and stroke volume fall with everything else, so the circulation that must absorb the refeeding load is already the smallest it has been.',
      },
      {
        id: 's3',
        label: 'Carbohydrate is given and insulin surges — the single event that starts the syndrome',
        detail: 'It is the carbohydrate, not the calories as such, that triggers it. The same rule applies to intravenous dextrose and to enteral and parenteral feed.',
        emphasis: 'key',
      },
      {
        id: 's4',
        label: 'Insulin drives glucose and potassium in on the sodium-potassium ATPase, magnesium follows, and phosphate is consumed rebuilding ATP and 2,3-BPG',
        detail: 'Every glucose entering glycolysis is phosphorylated twice. Anabolism restarts across every tissue at once, and phosphate is the shared currency.',
        emphasis: 'key',
      },
      {
        id: 's5',
        label: 'Serum phosphate falls below about 0.32 mmol/L and ATP synthesis fails where reserve is least',
        detail: 'Diaphragmatic weakness and failure to wean, cardiac failure, rhabdomyolysis, haemolysis, seizures and arrhythmia. Falling 2,3-BPG left-shifts the oxyhaemoglobin curve so carried oxygen will not unload.',
        emphasis: 'danger',
      },
      {
        id: 's6',
        label: 'Hypokalaemia and hypomagnesaemia add arrhythmia, and insulin-driven sodium and water retention floods an atrophied heart',
        detail: 'Hypomagnesaemia makes the hypokalaemia and hypocalcaemia refractory until the magnesium itself is replaced, so magnesium is corrected first or nothing else corrects.',
        emphasis: 'danger',
      },
    ],
    branches: [
      {
        fromId: 's3',
        title: 'The same carbohydrate load, by a second route: why thiamine goes in first',
        steps: [
          { id: 'b1', label: 'Thiamine stores are only about 25 to 30 mg and are exhausted after two to four weeks of poor intake', emphasis: 'key' },
          { id: 'b2', label: 'Thiamine pyrophosphate is the cofactor for pyruvate dehydrogenase, alpha-ketoglutarate dehydrogenase and transketolase', emphasis: 'normal' },
          { id: 'b3', label: 'A glucose load forces flux through exactly those enzymes and consumes the last of the cofactor', emphasis: 'key' },
          { id: 'b4', label: 'Wernicke encephalopathy — confusion, ophthalmoplegia and ataxia — precipitated by the treatment, within hours', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'A child below 60% of expected weight, all ribs visible, buttocks and cheeks wasted, and no oedema anywhere', mechanism: 'Marasmus. The somatic compartment — muscle and subcutaneous fat — has been catabolised, while the visceral compartment is spared, so albumin and therefore plasma oncotic pressure are preserved. The absence of oedema is a positive finding, not a missing one', significance: 'key' },
    { sign: 'A child at 70% of expected weight with pitting oedema of the legs, a distended abdomen, an enlarged smooth liver and an albumin of 18 g/L', mechanism: 'Kwashiorkor. Loss of the visceral protein compartment halves the colloid osmotic pressure that normally opposes capillary hydrostatic pressure, so filtration exceeds drainage; secondary hyperaldosteronism adds salt and water. The fatty liver is the same protein failure seen from the other side — no apolipoprotein means no VLDL export', significance: 'key' },
    { sign: 'Flaky-paint desquamation with alternating pale and dark zones, and hair with depigmented bands along its length', mechanism: 'The flag sign records the nutritional history in the hair shaft: bands laid down during protein deficiency are pale, bands laid down during better intake are dark, so the stripes date the episodes', significance: 'supportive' },
    { sign: 'Night blindness with dry conjunctivae and triangular foamy white plaques at the limbus', mechanism: 'Vitamin A deficiency. Loss of retinal starves rhodopsin regeneration, and loss of retinoic acid signalling lets conjunctival epithelium undergo squamous metaplasia and keratinise — Bitot spots are heaped keratin debris, and the same process on the cornea progresses to keratomalacia and irreversible blindness', significance: 'key' },
    { sign: 'Corkscrew hairs with perifollicular haemorrhage, swollen bleeding gums, and a surgical wound from two years ago that has opened again', mechanism: 'Scurvy. Without vitamin C, prolyl and lysyl hydroxylase cannot run, so collagen cannot cross-link: vessel walls are fragile and old scars, which depend on continuous collagen turnover, lose their tensile strength. One enzyme defect, two signs that look unrelated', significance: 'key' },
    { sign: 'Confusion, lateral rectus palsy and ataxia appearing hours after a starved patient is started on an intravenous dextrose infusion', mechanism: 'Wernicke encephalopathy precipitated by the glucose load. Carbohydrate forces flux through the thiamine-dependent dehydrogenases and consumes a store already nearly empty. Mammillary bodies and periventricular grey matter are affected first', significance: 'key' },
  ],

  investigations: [
    { clue: 'A normal serum phosphate before feeding, then daily phosphate for 72 hours after it starts', meaning: 'The pre-feed value measures plasma, not stores, and is normal in a patient whose total-body phosphate is severely depleted. The fall happens on days 1 to 3 of feeding; below about 0.32 mmol/L is the threshold at which ATP-dependent muscle fails. Measuring once at baseline is the error that kills' },
    { clue: 'Albumin read against CRP, and against prealbumin', meaning: 'Albumin is a negative acute-phase reactant with a half-life of about 20 days, so it moves too slowly to track intake and falls in any inflammatory state. The rule: a low albumin with a raised CRP is inflammation, not malnutrition. Prealbumin has a half-life of about 2 days and moves faster, but it is a negative acute-phase reactant too — weight trajectory and intake history remain the nutritional measures' },
    { clue: 'Methylmalonic acid alongside homocysteine in a megaloblastic anaemia', meaning: 'Both are raised in B12 deficiency because B12 serves both methylmalonyl-CoA mutase and methionine synthase; only homocysteine is raised in folate deficiency, which serves methionine synthase alone. A raised methylmalonic acid therefore means B12, and it is the test that settles a borderline B12 level before folate is given' },
    { clue: '25-hydroxyvitamin D, never 1,25-dihydroxyvitamin D, to assess vitamin D status', meaning: 'The 25-hydroxy form is the storage metabolite with a half-life of two to three weeks and reflects supply. The 1,25-dihydroxy form has a half-life of hours and is characteristically normal or even HIGH in deficiency, because falling calcium drives PTH, which drives renal 1-alpha-hydroxylase. Ordering it produces a falsely reassuring number' },
    { clue: 'A prolonged PT that corrects after parenteral vitamin K, and factor V assayed alongside factor VII', meaning: 'Factor VII is vitamin K-dependent with a 6-hour half-life, so the PT moves first in deficiency and corrects within hours of replacement. Factor V is NOT vitamin K-dependent but IS made by the liver: a low factor VII with a normal factor V is vitamin K deficiency, while a low factor V as well means hepatocellular failure' },
    { clue: 'Waist circumference and waist-to-hip ratio recorded alongside BMI', meaning: 'BMI measures mass, not distribution, and cannot separate muscle from fat or visceral from subcutaneous depots. Waist circumference proxies the visceral compartment, which is the depot that drains portally and therefore the one that predicts insulin resistance, dyslipidaemia and cardiovascular events' },
  ],

  treatment: [
    { logic: 'Refeed as though the physiology were the hazard, because it is', detail: 'The whole protocol is the mechanism reversed. **Thiamine goes in before the first calorie** — 200 to 300 mg daily, parenterally in the high-risk patient — because the carbohydrate itself is what precipitates Wernicke encephalopathy. **Start at about 10 kcal/kg/day**, or as low as 5 in extreme depletion, and advance over four to seven days; the target is not a nutritional one, it is to keep the insulin excursion small. **Correct magnesium first**, because hypomagnesaemia makes hypokalaemia and hypocalcaemia refractory to replacement until it is itself fixed. **Replace phosphate, potassium and magnesium as you feed rather than waiting for them to fall**, and measure phosphate daily for 72 hours. Restrict sodium and fluid, because insulin-driven retention is loading a heart that has atrophied along with everything else. In severe acute childhood malnutrition the same logic dictates the rest: treat hypoglycaemia and hypothermia first, rehydrate cautiously with a low-sodium high-potassium solution, give **empirical antibiotics because the immune response is blunted and infection is usually occult and afebrile**, and **withhold iron during the stabilisation phase** since free iron both feeds bacteria and fuels oxidative injury in a glutathione-depleted child. The bedside assessment this builds on: [[fcp1-malnutrition-evaluation]].' },
    { logic: 'Replace what the mechanism names, respect the fat-soluble ceiling, and treat obesity as physiology rather than conduct', detail: 'A deficiency syndrome is treated by restoring the cofactor, but **replacement only sticks if the route of loss is closed** — inadequate intake, malabsorption, increased loss and increased requirement need different answers, and fat malabsorption demands that **A, D, E and K be replaced together and in water-miscible form**. Going the other way, **the fat-soluble vitamins have a ceiling**: they are stored rather than excreted, so supplementation accumulates, and retinoid teratogenicity makes vitamin A the one to check before it is prescribed to anyone who could become pregnant. **Never give folate alone for a megaloblastic anaemia** — it corrects the blood film while subacute combined degeneration continues. For obesity, the honest framing is mechanistic: fat mass is **40 to 70% heritable** and actively defended, so after weight loss resting energy expenditure falls below what the new body composition predicts and ghrelin rises, which is why regain is the physiological expectation. Interventions therefore work by altering the defended set point rather than by supplying resolve — and because **the visceral depot is the one that drains portally**, even modest loss disproportionately improves hepatic insulin sensitivity, which is why a 5 to 10% reduction changes glycaemia, triglycerides and liver fat far more than it changes the scale. The adipokine biology behind it: [[hen1-adipokines-obesity-insulin-resistance]].' },
  ],

  mnemonics: [
    {
      hook: 'Marasmus keeps its albumin; kwashiorkor keeps its calories',
      expansion: [
        'Marasmus is an energy deficit: it eats the somatic compartment, so muscle and subcutaneous fat disappear, weight falls below 60% of expected, and albumin and oncotic pressure are preserved — hence no oedema, and the weight tells the truth',
        'Kwashiorkor is a protein deficit with calories still arriving: it sacrifices the visceral compartment, so albumin falls below about 25 g/L',
        'Halve the albumin and you halve the oncotic pressure opposing capillary hydrostatic pressure — filtration beats drainage, and secondary hyperaldosteronism adds salt and water, giving generalised oedema with ascites',
        'So the weight now reads 60 to 80% of expected and LIES, because the fluid is making up the difference — and the same failed protein synthesis produces the fatty liver, since no apolipoprotein means no VLDL export',
      ],
    },
    {
      hook: 'Visceral fat drains into the portal vein; subcutaneous fat drains into the rest of you',
      expansion: [
        'Visceral adipocytes are lipolytically active and their venous drainage reaches the liver at first pass, delivering free fatty acids and adipokines at concentrations the systemic circulation never sees',
        'The liver responds with insulin resistance, unrestrained gluconeogenesis and VLDL overproduction — the biochemistry of metabolic syndrome, generated anatomically',
        'Subcutaneous, and especially gluteofemoral, fat drains systemically and is comparatively inert, which is why two people at the same BMI can sit at opposite ends of the risk distribution',
        'Therefore waist circumference beats BMI as a predictor, a normal-BMI person with central adiposity can carry full metabolic risk, and losing 5 to 10% of body weight helps out of proportion to the number because the visceral depot goes first',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A megaloblastic anaemia that responded to folate',
      wrongInstinct: 'The blood count normalised, so the diagnosis was folate deficiency and the treatment was correct',
      rightAnswer: 'Folate corrects the anaemia of B12 deficiency while the neurological disease progresses unchecked. Check B12, and methylmalonic acid if B12 is borderline, before or alongside folate — never after',
      why: 'Folate rescues thymidylate synthesis, which is the haematological lesion, so the film improves whichever vitamin was missing. It cannot rescue methylmalonyl-CoA mutase, which needs adenosylcobalamin, so propionyl-CoA keeps accumulating and subacute combined degeneration of the dorsal columns and corticospinal tracts continues — now without the anaemia that would have prompted the diagnosis.',
    },
    {
      questionCategory: 'Whether a vitamin can be overdosed',
      wrongInstinct: 'Water-soluble vitamins are excreted in urine, so any dose is harmless and only A, D, E and K can be toxic',
      rightAnswer: 'The storage rule is right and the safety conclusion is wrong. Three water-soluble vitamins have named toxic syndromes: pyridoxine causes a sensory neuropathy above roughly 100 mg daily, pharmacological niacin causes flushing with hepatotoxicity, hyperglycaemia and hyperuricaemia, and high-dose vitamin C causes oxalate stones',
      why: 'Solubility governs storage, not toxicity. The fat-soluble vitamins are dangerous because they accumulate with no excretory escape — hypervitaminosis A mimicking raised intracranial pressure, retinoid teratogenicity, vitamin D hypercalcaemia with metastatic calcification. The water-soluble ones are dangerous where the excess acts pharmacologically on a receptor or enzyme before it is cleared, which is exactly the three above.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two children of the same age are admitted from the same village. Child A weighs 55% of expected, has no subcutaneous fat, visible ribs and no oedema, with an albumin of 34 g/L. Child B weighs 72% of expected, has pitting oedema to the thighs, ascites, a smooth enlarged liver and an albumin of 17 g/L. The single mechanism that explains why the heavier child is the oedematous one is:',
      options: [
        { id: 'a', text: 'Child B has a higher capillary hydrostatic pressure from cardiac failure caused by the malnutrition' },
        { id: 'b', text: 'Child B has lost the visceral protein compartment, so plasma colloid osmotic pressure falls and net capillary filtration exceeds drainage' },
        { id: 'c', text: 'Child A is more severely malnourished and has therefore exhausted the capacity to mount any interstitial fluid response' },
        { id: 'd', text: 'Child B has primary lymphatic obstruction from protein-losing enteropathy, which is the definition of kwashiorkor' },
      ],
      answerId: 'b',
      explanation: 'Marasmus is a deficit of total energy and is paid for out of the somatic compartment — skeletal muscle and subcutaneous fat — while hepatic synthesis of plasma proteins is comparatively spared, so albumin and oncotic pressure hold up and there is no oedema. Kwashiorkor is a relative protein deficiency with calories still arriving, so the visceral compartment is sacrificed instead and albumin falls below about 25 g/L. Since albumin supplies roughly three-quarters of the normal 25 to 28 mmHg colloid osmotic pressure, halving it halves the force retaining water in the capillary; filtration then exceeds reabsorption plus lymphatic drainage, and the resulting fall in effective circulating volume recruits secondary hyperaldosteronism, which adds sodium and water. The retained fluid is precisely why child B weighs more: the oedema masks the deficit, so weight in kwashiorkor understates severity. Option a inverts the Starling term that has actually changed. Option c reverses the relationship. Option d describes a different mechanism of hypoalbuminaemia entirely and is not what defines kwashiorkor.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman with anorexia nervosa who has eaten almost nothing for three weeks is admitted with a BMI of 12. Baseline phosphate, potassium and magnesium are all within the reference range, and nasogastric feeding is started at full estimated requirement. On day two she is tachypnoeic, too weak to lift her head, and cannot be weaned from support; phosphate is 0.25 mmol/L. The correct account of what happened is:',
      options: [
        { id: 'a', text: 'The normal baseline panel excluded depletion, so the fall must reflect renal phosphate wasting induced by the feed' },
        { id: 'b', text: 'Total-body phosphate was already severely depleted despite a normal serum level, and the insulin surge after carbohydrate drove the remaining phosphate intracellularly for ATP and 2,3-BPG synthesis' },
        { id: 'c', text: 'Feeding caused an osmotic diuresis that washed out phosphate, potassium and magnesium together' },
        { id: 'd', text: 'Hypophosphataemia is an incidental finding; the weakness is the direct effect of refeeding on skeletal muscle protein synthesis' },
      ],
      answerId: 'b',
      explanation: 'In prolonged starvation intracellular phosphate, potassium and magnesium stores are stripped while the serum concentrations stay normal, because the ions shift outward and the kidney trims excretion to match — so the baseline panel is camouflage rather than reassurance. Carbohydrate then triggers an insulin surge that moves glucose and potassium into cells on the sodium-potassium ATPase, pulls magnesium after them, and consumes phosphate on a large scale: every glucose entering glycolysis is phosphorylated twice, and the cell simultaneously rebuilds ATP and 2,3-BPG. Below about 0.32 mmol/L, ATP synthesis fails first where reserve is least, which is why diaphragmatic weakness and failure to wean are the classic presentation, with cardiac failure, rhabdomyolysis, haemolysis and arrhythmia alongside; falling 2,3-BPG left-shifts the oxyhaemoglobin curve so carried oxygen will not unload. The prevention is dictated by this mechanism: thiamine before any carbohydrate, start near 10 kcal/kg/day, correct magnesium first, and measure phosphate daily for 72 hours. Options a and c both invoke renal loss when the phosphate has moved inward, not outward, and option d reverses cause and effect.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A man with metastatic pancreatic cancer has lost 14 kg over four months. He has lost both fat and skeletal muscle, his measured resting energy expenditure is above predicted, and three weeks of nasogastric feeding at full calculated requirement has not restored lean mass. The best explanation is:',
      options: [
        { id: 'a', text: 'The calculated requirement was too low; cachexia is simple starvation and resolves once the calorie deficit is genuinely closed' },
        { id: 'b', text: 'Malabsorption from pancreatic exocrine failure is the sole mechanism, so the delivered calories never reached the circulation' },
        { id: 'c', text: 'Cachexia is a cytokine-driven catabolic state in which resting energy expenditure RISES and muscle is proteolysed independently of intake, so feeding alone cannot reverse it' },
        { id: 'd', text: 'Lean mass cannot be restored in any adult without resistance exercise, so the feeding regimen was irrelevant to the outcome' },
      ],
      answerId: 'c',
      explanation: 'The discriminator is the direction of resting energy expenditure. In simple starvation the body defends itself: resting energy expenditure falls, ketoadaptation spares glucose and therefore spares muscle, and refeeding reverses the deficit. In cachexia the opposite happens — TNF, IL-1, IL-6 and interferon-gamma, together with tumour-derived proteolysis-inducing factor and lipid-mobilising factor, raise resting energy expenditure while suppressing appetite through hypothalamic melanocortin signalling. Mechanistically they activate NF-kappaB and the ubiquitin-proteasome pathway to degrade myofibrillar protein, drive lipolysis and induce UCP1 browning of white fat, so both fat and lean mass are lost together and the catabolic signal keeps running while calories are being delivered. That is why nutritional support in cachexia is supportive rather than corrective, and why only treating the underlying disease or interrupting the cytokine drive changes the trajectory. Pancreatic exocrine insufficiency is real and worth replacing, but it does not explain the raised resting energy expenditure, and option a is exactly the inference the physiology contradicts.',
      tests: 'mechanism',
    },
  ],
};

export default rbpNutritionalDiseaseObesity;
