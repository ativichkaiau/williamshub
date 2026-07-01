import { mfnLecture } from './mfn-shared';

const source = 'L5 — Lipid Metabolism';

export const tagStorageMobilization = mfnLecture({
  id: 'tag-storage-mobilization',
  title: 'Triacylglycerol Storage & Mobilization',
  source,
  tags: [
    { kind: 'mechanism', label: 'Lipogenesis and lipolysis' },
    { kind: 'exam', label: 'Insulin versus catecholamines' },
  ],
  highYield: [
    'TAG synthesis joins glycerol-3-phosphate with three fatty acyl-CoAs. Liver exports TAG in **VLDL**; adipose stores it in lipid droplets.',
    '**Insulin promotes adipose TAG storage** by increasing GLUT4 glucose uptake, glycerol-3-phosphate availability, and adipose lipoprotein lipase activity.',
    'During fasting/exercise, catecholamine signaling activates **ATGL and hormone-sensitive lipase**, releasing free fatty acids and glycerol.',
    'Free fatty acids travel bound to albumin; glycerol goes mainly to liver because adipose has little glycerol kinase.',
  ],
  chainTitle: 'Hormonal state determines TAG storage or release',
  steps: [
    { label: 'Fed insulin supplies fatty acids + glycerol-3-P' },
    { label: 'Adipose esterifies and stores TAG', emphasis: 'key' },
    { label: 'Fasting catecholamines activate droplet lipases' },
    { label: 'Albumin carries FFA; glycerol returns to liver' },
  ],
  examFindings: [
    { sign: 'Low insulin/high catecholamines increase plasma free fatty acids', mechanism: 'Adipose lipolysis releases stored acyl chains', significance: 'key' },
    { sign: 'Adipose depends on glucose for glycerol-3-phosphate in the fed state', mechanism: 'Adipose has low glycerol kinase activity', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Plasma free fatty acids and glycerol', meaning: 'Reflect adipose lipolytic flux' },
    { clue: 'Fasting triglycerides', meaning: 'Balance of VLDL production and lipoprotein lipase clearance' },
  ],
  treatment: [
    { logic: 'Restore insulin when uncontrolled diabetes drives lipolysis', detail: 'Insulin suppresses hormone-sensitive lipase and ketone substrate delivery.' },
  ],
  mnemonic: { hook: 'Insulin stores; adrenaline strips TAG', expansion: ['FFA ride albumin; glycerol goes to liver'] },
  trap: {
    questionCategory: 'Lipoprotein lipase versus hormone-sensitive lipase',
    wrongInstinct: 'Hormone-sensitive lipase hydrolyzes TAG inside circulating chylomicrons',
    rightAnswer: 'LPL acts on circulating chylomicron/VLDL TAG; adipocyte ATGL/HSL mobilize stored TAG',
    why: 'The enzymes act in different compartments and respond differently to insulin.',
  },
  quiz: {
    stem: 'Where does glycerol released from adipose TAG travel for metabolism during fasting?',
    options: ['Primarily back into adipocytes', 'Primarily to liver', 'Only to skeletal muscle', 'Directly into ketone bodies in blood'],
    answer: 1,
    explanation: 'Adipose has little glycerol kinase, so glycerol travels to liver for gluconeogenesis or TAG synthesis.',
  },
});

export const fattyAcidSynthesisEicosanoids = mfnLecture({
  id: 'fatty-acid-synthesis-eicosanoids',
  title: 'Fatty-Acid Synthesis, Essential Fatty Acids & Eicosanoids',
  source,
  tags: [
    { kind: 'mechanism', label: 'ACC and fatty-acid synthase' },
    { kind: 'exam', label: 'Malonyl-CoA' },
  ],
  highYield: [
    'Cytosolic fatty-acid synthesis uses acetyl-CoA exported as citrate and **NADPH from PPP/malic enzyme**.',
    '**Acetyl-CoA carboxylase (ACC)** is the biotin-dependent rate-limiting enzyme: acetyl-CoA → malonyl-CoA. Insulin/citrate activate; glucagon/epinephrine and AMPK inhibit.',
    'Fatty-acid synthase uses one acetyl primer plus malonyl units to produce **palmitate (16:0)**; elongation/desaturation continue mainly in ER.',
    'Humans require dietary **linoleic (ω-6) and α-linolenic (ω-3)** acids. Arachidonic acid is the precursor of prostaglandins, thromboxanes, and leukotrienes.',
  ],
  chainTitle: 'Excess carbohydrate → palmitate',
  steps: [
    { label: 'Mitochondrial citrate exports acetyl units' },
    { label: 'ACC + biotin makes malonyl-CoA', emphasis: 'key' },
    { label: 'Fatty-acid synthase + NADPH builds palmitate' },
    { label: 'ER elongates/desaturates; essential FAs feed eicosanoids' },
  ],
  examFindings: [
    { sign: 'Malonyl-CoA rises in the fed state', mechanism: 'Insulin activates ACC and simultaneously suppresses mitochondrial fatty-acid entry', significance: 'key' },
    { sign: 'Scaly dermatitis with essential-fatty-acid deficiency', mechanism: 'Impaired barrier lipids and eicosanoid precursors', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Essential-fatty-acid profile', meaning: 'Identifies linoleic/α-linolenic deficiency' },
    { clue: 'Lipogenic enzyme activation state', meaning: 'Reflects insulin/AMPK regulation in experimental settings' },
  ],
  treatment: [
    { logic: 'Supply essential ω-6 and ω-3 fatty acids in nutrition support' },
    { logic: 'Target arachidonic-acid enzymes to alter inflammation', detail: 'NSAIDs inhibit cyclooxygenase; leukotriene modifiers act on the lipoxygenase branch or receptors.' },
  ],
  mnemonic: { hook: 'ACC adds carbon; FAS fashions sixteen', expansion: ['Malonyl-CoA blocks CPT I'] },
  trap: {
    questionCategory: 'Synthesis versus oxidation',
    wrongInstinct: 'Fatty-acid synthesis and β-oxidation run together after insulin',
    rightAnswer: 'Malonyl-CoA promotes synthesis while inhibiting CPT I, preventing simultaneous long-chain β-oxidation',
    why: 'Reciprocal regulation avoids a futile cycle.',
  },
  quiz: {
    stem: 'Which metabolite directly inhibits CPT I during active fatty-acid synthesis?',
    options: ['Acetyl-CoA', 'Malonyl-CoA', 'Palmitoyl-CoA', 'Citrate'],
    answer: 1,
    explanation: 'ACC produces malonyl-CoA, which prevents mitochondrial entry of long-chain fatty acyl-CoA through CPT I.',
  },
});

export const betaOxidationCarnitine = mfnLecture({
  id: 'beta-oxidation-carnitine',
  title: 'Fatty-Acid β-Oxidation & the Carnitine Shuttle',
  source,
  tags: [
    { kind: 'mechanism', label: 'Mitochondrial β-oxidation' },
    { kind: 'disease', label: 'MCAD deficiency' },
  ],
  highYield: [
    'Fatty acids are activated to acyl-CoA at a cost of **2 ATP equivalents**. Long-chain acyl groups enter mitochondria through CPT I, translocase, and CPT II.',
    'Each β-oxidation spiral performs **oxidation–hydration–oxidation–thiolysis**, releasing acetyl-CoA, FADH₂, and NADH while shortening the chain by two carbons.',
    '**Malonyl-CoA inhibits CPT I.** Very-long-chain fatty acids begin oxidation in peroxisomes; odd-chain fatty acids end as propionyl-CoA → succinyl-CoA.',
    '**MCAD deficiency** causes fasting intolerance, hypoketotic hypoglycemia, vomiting/lethargy, and elevated medium-chain acylcarnitines/dicarboxylic acids.',
  ],
  chainTitle: 'Long-chain fatty acid → mitochondrial acetyl-CoA',
  steps: [
    { label: 'Activate FA to fatty acyl-CoA' },
    { label: 'CPT I/carnitine shuttle crosses inner membrane', emphasis: 'key' },
    { label: 'β-oxidation spiral removes two-carbon acetyl-CoA units' },
    { label: 'NADH/FADH₂ feed ETC; acetyl-CoA feeds TCA/ketones' },
  ],
  examFindings: [
    { sign: 'Hypoketotic hypoglycemia after fasting in a child', mechanism: 'Fatty-acid oxidation cannot supply ATP or acetyl-CoA for ketogenesis/gluconeogenesis', significance: 'key' },
    { sign: 'Dicarboxylic aciduria', mechanism: 'Compensatory ω-oxidation when β-oxidation is impaired', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Newborn acylcarnitine profile with elevated C8', meaning: 'Suggests MCAD deficiency' },
    { clue: 'Urine organic acids', meaning: 'Dicarboxylic acid pattern supports fatty-acid oxidation defect' },
  ],
  treatment: [
    { logic: 'Avoid fasting and give carbohydrate promptly during illness', detail: 'Prevents catabolism in fatty-acid oxidation disorders.' },
    { logic: 'Do not rely on carnitine unless the specific disorder indicates it' },
  ],
  mnemonic: { hook: 'OHOT: Oxidize, Hydrate, Oxidize, Thiolyze', expansion: ['Each turn releases a two-carbon acetyl-CoA'] },
  trap: {
    questionCategory: 'Fatty-acid oxidation presentation',
    wrongInstinct: 'A fasting FA-oxidation defect should cause marked ketosis',
    rightAnswer: 'It produces hypoketotic hypoglycemia because acetyl-CoA for ketone synthesis is unavailable',
    why: 'Failure to use fat removes both an alternate fuel and a driver of gluconeogenesis.',
  },
  quiz: {
    stem: 'A toddler becomes lethargic after an overnight fast and has hypoglycemia with very low ketones. Which pathway is most likely impaired?',
    options: ['Glycogen synthesis', 'Pentose phosphate pathway', 'Medium-chain fatty-acid oxidation', 'Cholesterol synthesis'],
    answer: 2,
    explanation: 'Hypoketotic hypoglycemia after fasting is the classic presentation of MCAD or another fatty-acid oxidation defect.',
  },
});

export const ketoneBodyMetabolism = mfnLecture({
  id: 'ketone-body-metabolism',
  title: 'Ketogenesis, Ketolysis & Ketoacidosis',
  source,
  tags: [
    { kind: 'mechanism', label: 'Hepatic ketone production' },
    { kind: 'disease', label: 'Diabetic ketoacidosis' },
  ],
  highYield: [
    'During fasting or insulin deficiency, hepatic mitochondrial β-oxidation supplies acetyl-CoA for **ketogenesis**; mitochondrial HMG-CoA synthase is the rate-limiting enzyme.',
    'The ketone bodies are **acetoacetate, β-hydroxybutyrate, and acetone**. They are water-soluble fuels exported by liver.',
    'Peripheral mitochondria reconvert ketones to acetyl-CoA. **Liver lacks thiophorase** and cannot consume its own ketones; RBCs lack mitochondria and cannot use them.',
    'In DKA, low insulin/high glucagon drives uncontrolled lipolysis and ketogenesis → high-anion-gap acidosis; β-hydroxybutyrate predominates.',
  ],
  chainTitle: 'Fatty acid → exported ketone fuel',
  steps: [
    { label: 'Low insulin raises adipose lipolysis' },
    { label: 'Liver β-oxidation produces abundant acetyl-CoA' },
    { label: 'HMG-CoA synthase → ketone bodies', emphasis: 'key' },
    { label: 'Peripheral thiophorase → acetyl-CoA for TCA' },
  ],
  examFindings: [
    { sign: 'Fruity breath with Kussmaul respirations', mechanism: 'Acetone odor plus respiratory compensation for ketoacidosis', significance: 'key' },
    { sign: 'Urine ketone test underestimates early severe DKA', mechanism: 'Nitroprusside detects acetoacetate better than β-hydroxybutyrate', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Serum β-hydroxybutyrate', meaning: 'Best direct measure of predominant DKA ketone' },
    { clue: 'Anion gap and venous pH/bicarbonate', meaning: 'Severity and resolution of ketoacidosis' },
  ],
  treatment: [
    { logic: 'DKA: fluids, potassium-aware insulin, and cause control', detail: 'Insulin stops lipolysis and ketone production; potassium must be monitored closely.' },
  ],
  mnemonic: { hook: 'Liver makes but cannot take ketones; RBCs cannot take them either', expansion: ['No thiophorase in liver, no mitochondria in RBCs'] },
  trap: {
    questionCategory: 'Ketone use',
    wrongInstinct: 'Liver uses ketones as soon as it produces them',
    rightAnswer: 'Liver exports ketones because it lacks thiophorase; peripheral mitochondria consume them',
    why: 'This preserves ketones as a circulating fuel during fasting.',
  },
  quiz: {
    stem: 'Why can the liver synthesize but not utilize ketone bodies?',
    options: ['It lacks HMG-CoA synthase', 'It lacks thiophorase', 'It lacks mitochondria', 'It lacks acetyl-CoA'],
    answer: 1,
    explanation: 'Hepatocytes lack thiophorase (succinyl-CoA:acetoacetate CoA transferase), required for ketolysis.',
  },
});

export const cholesterolBileSteroids = mfnLecture({
  id: 'cholesterol-bile-steroids',
  title: 'Cholesterol, Bile Acids & Steroids (SDL)',
  source,
  tags: [
    { kind: 'mechanism', label: 'HMG-CoA reductase' },
    { kind: 'treatment', label: 'Statins' },
  ],
  highYield: [
    'Cholesterol is synthesized in cytosol/SER from acetyl-CoA. **HMG-CoA reductase** converts HMG-CoA to mevalonate and is the rate-limiting enzyme.',
    'Low cellular cholesterol activates **SREBP-2**, increasing HMG-CoA reductase and LDL-receptor expression. Insulin/dephosphorylation activates the reductase; AMPK phosphorylation inhibits it.',
    'Cholesterol supplies membranes, steroid hormones, vitamin D, and bile acids. **Cholesterol 7α-hydroxylase (CYP7A1)** is rate-limiting for bile-acid synthesis.',
    'Primary bile acids are conjugated with glycine or taurine; intestinal bacteria form secondary bile acids. Terminal-ileal disease interrupts enterohepatic recycling.',
  ],
  chainTitle: 'Acetyl-CoA → cholesterol → specialized products',
  steps: [
    { label: 'Acetyl-CoA → HMG-CoA' },
    { label: 'HMG-CoA reductase → mevalonate', emphasis: 'key' },
    { label: 'Mevalonate → isoprenes → squalene → cholesterol' },
    { label: 'Cholesterol → bile acids, steroids, vitamin D, membranes' },
  ],
  examFindings: [
    { sign: 'Statin therapy lowers LDL and increases hepatic LDL receptors', mechanism: 'Competitive HMG-CoA reductase inhibition lowers hepatic cholesterol', significance: 'key' },
    { sign: 'Ileal disease causes bile-acid loss and steatorrhea', mechanism: 'Reduced enterohepatic bile-salt pool impairs micelle formation', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'LDL-C response to statin', meaning: 'Degree of hepatic cholesterol synthesis/clearance modification' },
    { clue: 'Liver enzymes and symptoms of myopathy when indicated', meaning: 'Assesses clinically relevant statin toxicity' },
  ],
  treatment: [
    { logic: 'Use statins to inhibit hepatic HMG-CoA reductase and upregulate LDL clearance' },
    { logic: 'Treat bile-acid malabsorption by clinical context', detail: 'Sequestrants help bile-acid diarrhea but can worsen steatorrhea when the bile-salt pool is severely depleted.' },
  ],
  mnemonic: { hook: 'Reductase makes cholesterol; 7α-hydroxylase makes bile acids', expansion: ['Statins stop mevalonate production'] },
  trap: {
    questionCategory: 'Cytosolic HMG-CoA fate',
    wrongInstinct: 'HMG-CoA always enters ketogenesis',
    rightAnswer: 'Cytosolic HMG-CoA feeds cholesterol synthesis; mitochondrial HMG-CoA feeds ketogenesis',
    why: 'Compartment determines pathway fate.',
  },
  quiz: {
    stem: 'What is the rate-limiting enzyme in bile-acid synthesis from cholesterol?',
    options: ['HMG-CoA synthase', 'HMG-CoA reductase', 'Cholesterol 7α-hydroxylase', 'ACAT'],
    answer: 2,
    explanation: 'CYP7A1 (cholesterol 7α-hydroxylase) controls conversion of cholesterol into primary bile acids.',
  },
});

export const lipoproteinsAtherogenesis = mfnLecture({
  id: 'lipoproteins-atherogenesis',
  title: 'Lipoproteins & Atherogenesis (SDL)',
  source,
  tags: [
    { kind: 'mechanism', label: 'Exogenous, endogenous & reverse transport' },
    { kind: 'disease', label: 'Atherosclerosis' },
  ],
  highYield: [
    '**Chylomicrons (apoB-48)** deliver dietary TAG; remnants return to liver through apoE. **VLDL (apoB-100)** exports hepatic TAG and becomes IDL then LDL.',
    '**ApoC-II activates lipoprotein lipase; apoE mediates remnant uptake; apoB-100 binds the LDL receptor; apoA-I activates LCAT.**',
    'LDL delivers cholesterol to tissues by receptor-mediated endocytosis. HDL supports reverse cholesterol transport through ABCA1, LCAT, and hepatic return.',
    'Retained apoB lipoproteins enter the arterial intima, become modified/oxidized, trigger macrophage foam cells and inflammation, and build an atherosclerotic plaque.',
  ],
  chainTitle: 'Lipoprotein traffic → arterial risk',
  steps: [
    { label: 'Chylomicron carries dietary TAG; VLDL carries hepatic TAG' },
    { label: 'LPL activated by apoC-II removes TAG' },
    { label: 'LDL delivers cholesterol via apoB-100 receptor binding', emphasis: 'key' },
    { label: 'Retained/modified LDL → foam cells → plaque', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Very high LDL with tendon xanthomas and premature CAD', mechanism: 'Familial hypercholesterolemia impairs LDL-receptor pathway clearance', significance: 'key' },
    { sign: 'Pancreatitis with eruptive xanthomas and creamy plasma', mechanism: 'Severe chylomicronemia from impaired LPL activity', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Fasting lipid profile and non-HDL cholesterol', meaning: 'Quantifies atherogenic apoB-containing cholesterol burden' },
    { clue: 'ApoB concentration', meaning: 'Approximates the number of atherogenic lipoprotein particles' },
  ],
  treatment: [
    { logic: 'Lower apoB-containing particles to reduce atherosclerotic risk', detail: 'Statins are foundational; add agents according to LDL level and overall risk.' },
    { logic: 'Treat severe triglyceride elevation urgently when pancreatitis risk is high' },
  ],
  mnemonic: { hook: 'C-II cuts TAG, E enters liver, B-100 binds LDL receptor, A-I activates LCAT', expansion: ['B-48 builds chylomicrons'] },
  trap: {
    questionCategory: 'Apolipoprotein identity',
    wrongInstinct: 'ApoB-48 binds the LDL receptor on peripheral cells',
    rightAnswer: 'ApoB-100 is the LDL-receptor ligand; apoB-48 is the structural protein of chylomicrons',
    why: 'RNA editing creates the shorter intestinal apoB-48 protein.',
  },
  quiz: {
    stem: 'Which apolipoprotein activates lipoprotein lipase on capillary endothelium?',
    options: ['ApoA-I', 'ApoB-48', 'ApoC-II', 'ApoE'],
    answer: 2,
    explanation: 'ApoC-II activates LPL, allowing hydrolysis of TAG in chylomicrons and VLDL.',
  },
});

export const alternativeFattyAcidOxidation = mfnLecture({
  id: 'alternative-fatty-acid-oxidation',
  title: 'Peroxisomal, α-, ω- & Odd-Chain Fatty-Acid Oxidation',
  source,
  tags: [
    { kind: 'mechanism', label: 'Special fatty-acid pathways' },
    { kind: 'disease', label: 'X-linked adrenoleukodystrophy' },
  ],
  highYield: [
    '**Peroxisomal β-oxidation shortens very-long-chain fatty acids** before mitochondrial completion. Its first oxidation transfers electrons directly to O₂, producing H₂O₂ rather than ATP.',
    '**X-linked adrenoleukodystrophy (ABCD1 defect)** impairs peroxisomal VLCFA import → VLCFA accumulation, neurologic white-matter disease, and adrenal insufficiency.',
    '**α-Oxidation** handles branched phytanic acid that cannot undergo ordinary β-oxidation; impaired phytanoyl-CoA hydroxylase causes Refsum disease.',
    'ER **ω-oxidation** forms dicarboxylic acids and rises when β-oxidation fails. Odd-chain β-oxidation ends in propionyl-CoA → methylmalonyl-CoA → succinyl-CoA using biotin and B12.',
  ],
  chainTitle: 'Fatty-acid structure determines its oxidation route',
  steps: [
    { label: 'Very long chain → peroxisomal shortening' },
    { label: 'Branched phytanic acid → α-oxidation' },
    { label: 'β-oxidation failure → ω-oxidation/dicarboxylic acids' },
    { label: 'Odd chain → propionyl-CoA → succinyl-CoA', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Progressive neurologic decline plus adrenal insufficiency in a boy', mechanism: 'ABCD1-related VLCFA accumulation in X-linked adrenoleukodystrophy', significance: 'key' },
    { sign: 'Retinitis pigmentosa, neuropathy, and ataxia with high phytanic acid', mechanism: 'Defective α-oxidation in Refsum disease', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Plasma very-long-chain fatty acids', meaning: 'Screens for peroxisomal import/oxidation disorders such as X-ALD' },
    { clue: 'Urine dicarboxylic acids', meaning: 'Indicates increased ω-oxidation, often from impaired β-oxidation' },
  ],
  treatment: [
    { logic: 'Treat the specific pathway disorder and prevent catabolism', detail: 'X-ALD requires adrenal surveillance/replacement and specialist neurologic therapy; FA-oxidation defects require fasting avoidance.' },
    { logic: 'Restrict phytanic acid in Refsum disease' },
  ],
  mnemonic: { hook: 'Very long: peroxisome; branched: alpha; beta blocked: omega; odd: succinyl-CoA', expansion: ['Peroxisomal FAD electrons become H2O2'] },
  trap: {
    questionCategory: 'Peroxisomal energy yield',
    wrongInstinct: 'Peroxisomal first-step FADH2 feeds the ETC and makes ATP',
    rightAnswer: 'Peroxisomal acyl-CoA oxidase passes electrons directly to oxygen, producing hydrogen peroxide',
    why: 'Peroxisomes shorten VLCFAs but do not conserve that first oxidation energy as ATP.',
  },
  quiz: {
    stem: 'Odd-chain fatty-acid oxidation produces which gluconeogenic TCA intermediate?',
    options: ['Citrate', 'Succinyl-CoA', 'Acetyl-CoA', 'Acetoacetate'],
    answer: 1,
    explanation: 'The terminal propionyl-CoA is converted through methylmalonyl-CoA to succinyl-CoA.',
  },
});
