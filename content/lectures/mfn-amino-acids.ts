import { mfnLecture } from './mfn-shared';

const source = 'L4 — Amino Acid Metabolism';

export const aminoNitrogenHandling = mfnLecture({
  id: 'amino-nitrogen-handling',
  title: 'Amino-Acid Nitrogen Handling',
  source,
  tags: [
    { kind: 'mechanism', label: 'Transamination and deamination' },
    { kind: 'investigation', label: 'AST and ALT' },
  ],
  highYield: [
    'Most amino groups are collected on **glutamate by PLP-dependent aminotransferases**; glutamate can release NH₄⁺ through oxidative deamination.',
    '**ALT** exchanges alanine/pyruvate and **AST** exchanges aspartate/oxaloacetate. Plasma elevations mark cell injury rather than increased amino-acid synthesis.',
    'Peripheral tissues safely carry nitrogen as **glutamine**; muscle also exports **alanine**, which carries carbon for gluconeogenesis and nitrogen for urea.',
    'Positive nitrogen balance accompanies growth/pregnancy/recovery; negative balance accompanies starvation, severe illness, or inadequate protein.',
  ],
  chainTitle: 'Amino nitrogen → glutamate → safe transport',
  steps: [
    { label: 'Amino acid transfers NH₂ to α-ketoglutarate' },
    { label: 'Glutamate centralizes amino nitrogen', emphasis: 'key' },
    { label: 'Nitrogen travels as glutamine or alanine' },
    { label: 'Liver releases NH₄⁺ for urea synthesis' },
  ],
  examFindings: [
    { sign: 'ALT-predominant aminotransferase elevation', mechanism: 'Hepatocellular leakage of a relatively liver-enriched enzyme', significance: 'key' },
    { sign: 'Negative nitrogen balance in major burns', mechanism: 'Catabolic protein loss exceeds synthesis', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'AST and ALT pattern', meaning: 'Supports tissue injury pattern but does not alone measure liver function' },
    { clue: 'Dietary nitrogen versus urinary nitrogen', meaning: 'Whole-body nitrogen balance' },
  ],
  treatment: [
    { logic: 'Correct the catabolic driver and provide adequate protein/energy', detail: 'Protein alone cannot reverse ongoing severe catabolism.' },
  ],
  mnemonic: { hook: 'Glutamate gathers; glutamine and alanine carry', expansion: ['PLP (B6) powers transamination'] },
  trap: {
    questionCategory: 'Meaning of aminotransferase elevation',
    wrongInstinct: 'High ALT proves that hepatic protein synthesis is increased',
    rightAnswer: 'High ALT usually reflects enzyme leakage from injured hepatocytes',
    why: 'Aminotransferases are injury markers, not direct liver-function tests.',
  },
  quiz: {
    stem: 'Which vitamin-derived cofactor is required by aminotransferases?',
    options: ['Thiamine pyrophosphate', 'Pyridoxal phosphate', 'Tetrahydrofolate', 'Biotin'],
    answer: 1,
    explanation: 'Pyridoxal phosphate, derived from vitamin B6, carries amino groups during transamination.',
  },
});

export const ureaCycleHyperammonemia = mfnLecture({
  id: 'urea-cycle-hyperammonemia',
  title: 'Urea Cycle & Hyperammonemia',
  source,
  tags: [
    { kind: 'mechanism', label: 'Nitrogen disposal' },
    { kind: 'disease', label: 'Urea-cycle defects' },
  ],
  highYield: [
    'The liver converts toxic ammonia to urea. **CPS I and OTC are mitochondrial**; argininosuccinate synthetase, lyase, and arginase are cytosolic.',
    'Urea receives one nitrogen from free NH₄⁺ and one from **aspartate**. CPS I is rate-limiting and requires **N-acetylglutamate**.',
    'Hyperammonemia depletes α-ketoglutarate and raises astrocyte glutamine → cerebral edema, vomiting, lethargy, and encephalopathy.',
    '**OTC deficiency** is X-linked and produces hyperammonemia, low BUN, respiratory alkalosis, and increased orotic acid without megaloblastic anemia.',
  ],
  chainTitle: 'Two nitrogens enter one urea molecule',
  steps: [
    { label: 'NH₄⁺ + HCO₃⁻ → carbamoyl phosphate by CPS I' },
    { label: 'OTC forms citrulline in mitochondria' },
    { label: 'Aspartate donates the second nitrogen', emphasis: 'key' },
    { label: 'Arginase releases urea; ornithine cycles back' },
  ],
  examFindings: [
    { sign: 'Neonate with vomiting, lethargy, respiratory alkalosis, low BUN', mechanism: 'Ammonia cannot be incorporated into urea', significance: 'key' },
    { sign: 'High urine orotic acid', mechanism: 'Mitochondrial carbamoyl phosphate spills into pyrimidine synthesis in OTC deficiency', significance: 'key' },
  ],
  investigations: [
    { clue: 'Urgent plasma ammonia', meaning: 'Confirms a metabolic emergency; handle specimen promptly' },
    { clue: 'Plasma amino acids and urine orotic acid', meaning: 'Helps identify the blocked urea-cycle step' },
  ],
  treatment: [
    { logic: 'Stop protein temporarily and reverse catabolism with calories', detail: 'Severe hyperammonemia may require hemodialysis.' },
    { logic: 'Use nitrogen scavengers and pathway-specific supplements', detail: 'Benzoate/phenylbutyrate excrete alternative nitrogen; arginine or citrulline depends on the defect.' },
  ],
  mnemonic: { hook: 'First two steps mitochondrial; the rest cytosolic', expansion: ['OTC: orotic acid up, BUN down'] },
  trap: {
    questionCategory: 'OTC versus UMP-synthase deficiency',
    wrongInstinct: 'High orotic acid always causes megaloblastic anemia',
    rightAnswer: 'OTC deficiency causes hyperammonemia without megaloblastic anemia; UMP-synthase deficiency causes megaloblastic anemia without hyperammonemia',
    why: 'The same metabolite rises through different pathway defects.',
  },
  quiz: {
    stem: 'A boy has hyperammonemia, low BUN, respiratory alkalosis, and increased urine orotic acid. Which enzyme is deficient?',
    options: ['Carbamoyl phosphate synthetase I', 'Ornithine transcarbamylase', 'Arginase', 'UMP synthase'],
    answer: 1,
    explanation: 'The combination of hyperammonemia and high orotic acid is classic for X-linked OTC deficiency.',
  },
});

export const aminoCarbonSkeletonDisorders = mfnLecture({
  id: 'amino-carbon-skeleton-disorders',
  title: 'Amino-Acid Carbon Skeletons & Inborn Errors',
  source,
  tags: [
    { kind: 'mechanism', label: 'Glucogenic versus ketogenic' },
    { kind: 'disease', label: 'PKU, MSUD & homocystinuria' },
  ],
  highYield: [
    'Amino-acid carbon skeletons enter metabolism as pyruvate, acetyl-CoA/acetoacetate, or TCA intermediates. **Leucine and lysine are exclusively ketogenic**.',
    '**PKU** usually reflects phenylalanine hydroxylase deficiency → low tyrosine, neurotoxicity, eczema, fair pigmentation, and musty odor.',
    '**Maple syrup urine disease** is branched-chain α-ketoacid dehydrogenase deficiency affecting leucine, isoleucine, and valine.',
    'Classic homocystinuria from **cystathionine β-synthase deficiency** causes thrombosis, intellectual disability, osteoporosis, and downward lens displacement.',
  ],
  chainTitle: 'Amino acid → common metabolic intermediate',
  steps: [
    { label: 'Remove amino nitrogen for urea' },
    { label: 'Carbon skeleton becomes pyruvate/TCA intermediate or acetyl unit' },
    { label: 'Glucogenic carbon can support glucose production' },
    { label: 'Ketogenic carbon supports ketones/lipid', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Musty odor, eczema, and fair skin', mechanism: 'Phenylalanine accumulation and reduced tyrosine-derived melanin in PKU', significance: 'key' },
    { sign: 'Sweet-smelling urine with neonatal encephalopathy', mechanism: 'Accumulated branched-chain amino/keto acids in MSUD', significance: 'key' },
  ],
  investigations: [
    { clue: 'Newborn tandem mass-spectrometry screen', meaning: 'Detects characteristic amino-acid/acylcarnitine patterns before symptoms' },
    { clue: 'Plasma phenylalanine or branched-chain amino acids', meaning: 'Quantifies the suspected pathway block' },
  ],
  treatment: [
    { logic: 'Restrict the accumulating substrate while supplying essential nutrition', detail: 'PKU: restrict phenylalanine and supplement tyrosine; add BH4 in responsive disease.' },
    { logic: 'Treat catabolic crises urgently in MSUD', detail: 'Stop protein briefly, provide calories, and dialyze if severe.' },
  ],
  mnemonic: { hook: 'Leucine and Lysine are the Lone ketogenic pair', expansion: ['PKU smells musty; MSUD smells sweet'] },
  trap: {
    questionCategory: 'Maternal PKU',
    wrongInstinct: 'Only a fetus who inherits PKU is at risk',
    rightAnswer: 'Poorly controlled maternal phenylalanine is teratogenic even when the fetus has normal PAH genes',
    why: 'The fetal exposure is determined by maternal metabolic control.',
  },
  quiz: {
    stem: 'Which amino acids are exclusively ketogenic?',
    options: ['Leucine and lysine', 'Phenylalanine and tyrosine', 'Valine and isoleucine', 'Alanine and serine'],
    answer: 0,
    explanation: 'Leucine and lysine are the only amino acids whose carbon skeletons are exclusively ketogenic.',
  },
});

export const oneCarbonCarriers = mfnLecture({
  id: 'one-carbon-carriers',
  title: 'One-Carbon Carriers: THF, B₁₂ & SAM (SDL)',
  source,
  tags: [
    { kind: 'mechanism', label: 'One-carbon pool' },
    { kind: 'disease', label: 'Methyl-folate trap' },
  ],
  highYield: [
    '**Tetrahydrofolate (THF)** carries one-carbon units at several oxidation states for purine synthesis, dTMP synthesis, and methionine regeneration.',
    '**Vitamin B₁₂-dependent methionine synthase** transfers a methyl group from N⁵-methyl-THF to homocysteine, producing methionine and regenerating THF.',
    '**S-adenosylmethionine (SAM)** is formed from methionine + ATP and is the major methyl donor; after donation it becomes homocysteine.',
    'In B₁₂ deficiency, folate is trapped as N⁵-methyl-THF → functional folate deficiency and megaloblastic anemia; neurologic injury distinguishes B₁₂ from folate deficiency.',
  ],
  chainTitle: 'Folate and B₁₂ regenerate the methyl donor',
  steps: [
    { label: 'THF collects one-carbon units' },
    { label: 'N⁵-methyl-THF transfers methyl through B₁₂' },
    { label: 'Homocysteine → methionine → SAM', emphasis: 'key' },
    { label: 'SAM donates methyl → homocysteine returns' },
  ],
  examFindings: [
    { sign: 'Megaloblastic anemia plus paresthesias/proprioceptive loss', mechanism: 'Vitamin B₁₂ deficiency impairs DNA synthesis and myelin metabolism', significance: 'key' },
    { sign: 'High homocysteine in folate or B₁₂ deficiency', mechanism: 'Impaired remethylation to methionine', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Methylmalonic acid elevated', meaning: 'Supports B₁₂ deficiency, not isolated folate deficiency' },
    { clue: 'Homocysteine elevated with normal methylmalonate', meaning: 'More consistent with folate deficiency' },
  ],
  treatment: [
    { logic: 'Exclude or treat B₁₂ deficiency before folate alone', detail: 'Folate may correct anemia while B₁₂-related neurologic damage progresses.' },
  ],
  mnemonic: { hook: 'Folate carries carbon; B₁₂ passes methyl; SAM spends methyl', expansion: ['B₁₂ deficiency traps folate'] },
  trap: {
    questionCategory: 'Folate rescue',
    wrongInstinct: 'Folate alone fully treats any megaloblastic anemia',
    rightAnswer: 'Folate can normalize the blood count in B₁₂ deficiency but does not prevent neurologic injury',
    why: 'The hematologic and neurologic consequences of B₁₂ deficiency can dissociate.',
  },
  quiz: {
    stem: 'Which finding most strongly favors vitamin B₁₂ deficiency over isolated folate deficiency?',
    options: ['Macro-ovalocytes', 'Hypersegmented neutrophils', 'Elevated homocysteine', 'Elevated methylmalonic acid'],
    answer: 3,
    explanation: 'Both deficiencies cause megaloblastosis and high homocysteine, but methylmalonic acid rises in B₁₂ deficiency.',
  },
});

export const aminoAcidDerivedProducts = mfnLecture({
  id: 'amino-acid-derived-products',
  title: 'Amino-Acid-Derived Molecules',
  source,
  tags: [
    { kind: 'mechanism', label: 'Neurotransmitters, creatine & glutathione' },
    { kind: 'exam', label: 'Precursor-product pairs' },
  ],
  highYield: [
    'Amino acids supply specialized products: **tyrosine → catecholamines and melanin; tryptophan → serotonin; glutamate → GABA; histidine → histamine**.',
    'Many biogenic amines are made by **PLP-dependent decarboxylation**; catecholamine synthesis additionally uses tetrahydrobiopterin, vitamin C, and SAM-dependent methylation.',
    '**Creatine** is synthesized from glycine, arginine, and methionine; phosphocreatine buffers rapid ATP demand, and spontaneous cyclization produces creatinine.',
    '**Glutathione = glutamate + cysteine + glycine.** Reduced GSH detoxifies peroxides; NADPH-dependent glutathione reductase regenerates GSH from GSSG.',
  ],
  chainTitle: 'Amino-acid carbon and nitrogen build active molecules',
  steps: [
    { label: 'Select amino-acid precursor' },
    { label: 'Modify by hydroxylation/decarboxylation/methylation' },
    { label: 'Generate neurotransmitter, pigment, creatine, or antioxidant', emphasis: 'key' },
    { label: 'Degrade or recycle the active product' },
  ],
  examFindings: [
    { sign: 'Hemolysis under oxidative stress when GSH regeneration fails', mechanism: 'RBC proteins and membranes lose peroxide protection', significance: 'key' },
    { sign: 'Creatinine tracks muscle production and renal clearance', mechanism: 'Spontaneous creatine/phosphocreatine breakdown produces creatinine', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Serum creatinine with estimated GFR', meaning: 'Uses a muscle-derived metabolite to estimate renal filtration' },
    { clue: 'Metabolite or cofactor pattern in neurotransmitter synthesis', meaning: 'Localizes precursor, enzyme, or vitamin deficiency' },
  ],
  treatment: [
    { logic: 'Replace the missing precursor or cofactor only after identifying the blocked pathway', detail: 'For example, PLP, BH4, folate/B12, and SAM participate in different amino-acid-derived reactions.' },
  ],
  mnemonic: { hook: 'Tyrosine tones catecholamines and tint; tryptophan tunes serotonin', expansion: ['Glutamate gives GABA; histidine gives histamine'] },
  trap: {
    questionCategory: 'Glutathione regeneration',
    wrongInstinct: 'Glutathione peroxidase directly makes NADPH',
    rightAnswer: 'Glutathione peroxidase consumes GSH; glutathione reductase uses NADPH to regenerate GSH',
    why: 'NADPH from the pentose phosphate pathway maintains the antioxidant pool.',
  },
  quiz: {
    stem: 'Which three amino acids form glutathione?',
    options: ['Glutamate, cysteine, and glycine', 'Glycine, arginine, and methionine', 'Tyrosine, glycine, and cysteine', 'Glutamine, serine, and alanine'],
    answer: 0,
    explanation: 'Glutathione is the tripeptide γ-glutamyl-cysteinyl-glycine.',
  },
});
