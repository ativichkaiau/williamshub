import { mfnLecture } from './mfn-shared';

const source = 'L3 — Carbohydrate Metabolism';

export const glucoseTransportGlycolysis = mfnLecture({
  id: 'glucose-transport-glycolysis',
  title: 'Glucose Transport & Glycolysis',
  source,
  tags: [
    { kind: 'mechanism', label: 'Glycolytic regulation' },
    { kind: 'exam', label: 'GLUT4 and PFK-1' },
  ],
  highYield: [
    '**GLUT1** supports basal uptake (notably RBCs); **GLUT2** is high-capacity in liver and pancreatic β cells; **GLUT3** has high affinity in neurons; **GLUT4** is insulin-responsive in skeletal muscle and adipose.',
    'Cytosolic glycolysis converts glucose to 2 pyruvate with net **2 ATP and 2 NADH**; anaerobic lactate formation regenerates NAD⁺.',
    'The irreversible enzymes are **hexokinase/glucokinase, PFK-1, and pyruvate kinase**. PFK-1 is the committed, rate-limiting step.',
    '**F-2,6-BP and AMP activate PFK-1**; ATP and citrate inhibit it. In liver, glucagon lowers F-2,6-BP and suppresses glycolysis.',
  ],
  chainTitle: 'Glucose uptake → glycolytic ATP',
  steps: [
    { label: 'Tissue-specific GLUT brings glucose into cell' },
    { label: 'Hexokinase/glucokinase traps it as G6P' },
    { label: 'PFK-1 commits carbon to glycolysis', emphasis: 'key' },
    { label: 'Pyruvate + net 2 ATP + 2 NADH' },
  ],
  examFindings: [
    { sign: 'Insulin increases glucose uptake in muscle and adipose', mechanism: 'GLUT4 vesicles translocate to the plasma membrane', significance: 'key' },
    { sign: 'RBCs produce lactate even with normal oxygen', mechanism: 'They lack mitochondria and depend entirely on glycolysis', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Blood lactate', meaning: 'Balance of glycolytic lactate production and clearance' },
    { clue: 'Glucose response to insulin', meaning: 'Insulin-dependent GLUT4 uptake and downstream metabolism' },
  ],
  treatment: [
    { logic: 'Identify the controlling enzyme before predicting pathway direction', detail: 'F-2,6-BP reciprocally favors glycolysis over gluconeogenesis.' },
  ],
  mnemonic: { hook: '1 basal, 2 liver, 3 neuron, 4 muscle and fat', expansion: ['GLUT4 responds to insulin and exercise'] },
  trap: {
    questionCategory: 'Insulin-dependent glucose entry',
    wrongInstinct: 'Insulin is required for glucose uptake into every tissue',
    rightAnswer: 'Insulin chiefly recruits GLUT4 in skeletal muscle and adipose; many tissues use insulin-independent GLUTs',
    why: 'Brain and RBC glucose uptake must continue even when insulin is low.',
  },
  quiz: {
    stem: 'Which metabolite most strongly activates hepatic PFK-1 after a carbohydrate-rich meal?',
    options: ['Citrate', 'ATP', 'Fructose-2,6-bisphosphate', 'Acetyl-CoA'],
    answer: 2,
    explanation: 'Insulin raises F-2,6-BP, which strongly activates PFK-1 and promotes glycolysis.',
  },
});

export const pentoseFructoseGalactose = mfnLecture({
  id: 'pentose-fructose-galactose',
  title: 'Pentose Phosphate, Fructose & Galactose Pathways',
  source,
  tags: [
    { kind: 'mechanism', label: 'NADPH and dietary sugars' },
    { kind: 'disease', label: 'G6PD deficiency' },
  ],
  highYield: [
    'The oxidative pentose phosphate pathway makes **NADPH and ribulose-5-phosphate**; its rate-limiting enzyme is **G6PD**.',
    'NADPH keeps glutathione reduced. RBCs with G6PD deficiency develop episodic oxidative hemolysis with **Heinz bodies and bite cells**.',
    'Fructose enters hepatic glycolysis below PFK-1. **Aldolase B deficiency** traps fructose-1-phosphate, causing hypoglycemia after fruit, juice, or honey.',
    '**Classic galactosemia = GALT deficiency** with jaundice, hepatomegaly, cataracts, and E. coli sepsis; galactokinase deficiency chiefly causes infantile cataracts.',
  ],
  chainTitle: 'G6P and dietary hexoses enter specialized routes',
  steps: [
    { label: 'G6P → G6PD → NADPH + pentose' },
    { label: 'NADPH maintains reduced glutathione', emphasis: 'key' },
    { label: 'Fructose → F1P; galactose → Gal1P' },
    { label: 'Enzyme block → trapped phosphate/toxic metabolites', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Bite cells after oxidant drug, infection, or fava beans', mechanism: 'Splenic removal of Heinz-body precipitates in G6PD deficiency', significance: 'key' },
    { sign: 'Vomiting and hypoglycemia after fruit juice', mechanism: 'Aldolase B deficiency traps phosphate as fructose-1-phosphate', significance: 'key' },
  ],
  investigations: [
    { clue: 'G6PD activity measured outside an acute crisis', meaning: 'Confirms G6PD deficiency; early testing may be falsely normal' },
    { clue: 'Galactose-1-phosphate / GALT activity', meaning: 'Supports classic galactosemia' },
  ],
  treatment: [
    { logic: 'Avoid oxidant triggers in G6PD deficiency' },
    { logic: 'Remove the offending dietary sugar', detail: 'Avoid fructose/sucrose in hereditary fructose intolerance; avoid galactose/lactose in classic galactosemia.' },
  ],
  mnemonic: { hook: 'PPP protects RBCs; Aldolase B blocks fruit; GALT blocks milk sugar', expansion: ['NADPH → reduced glutathione'] },
  trap: {
    questionCategory: 'Fructose disorders',
    wrongInstinct: 'All fructose enzyme defects cause severe fasting hypoglycemia',
    rightAnswer: 'Aldolase B deficiency is severe; fructokinase deficiency causes benign essential fructosuria',
    why: 'Phosphate trapping and inhibition of glycogenolysis/gluconeogenesis occur in aldolase B deficiency.',
  },
  quiz: {
    stem: 'An infant develops jaundice, hepatomegaly, cataracts, and E. coli sepsis after milk feeding. Which enzyme is deficient?',
    options: ['Fructokinase', 'Aldolase B', 'Galactokinase', 'Galactose-1-phosphate uridyltransferase'],
    answer: 3,
    explanation: 'The multisystem neonatal presentation is classic galactosemia from GALT deficiency.',
  },
});

export const glycogenSynthesisBreakdown = mfnLecture({
  id: 'glycogen-synthesis-breakdown',
  title: 'Glycogen Synthesis, Breakdown & Hormonal Control',
  source,
  tags: [
    { kind: 'mechanism', label: 'Glycogen synthase versus phosphorylase' },
    { kind: 'disease', label: 'Glycogen storage disease' },
  ],
  highYield: [
    '**Glycogen synthase** extends α-1,4 chains using UDP-glucose; branching enzyme creates α-1,6 branches around a glycogenin core.',
    '**Glycogen phosphorylase** cleaves α-1,4 bonds; debranching enzyme handles branch points. Liver glucose-6-phosphatase releases free glucose; muscle lacks it.',
    'Insulin favors **dephosphorylation: synthase on, phosphorylase off**. Glucagon acts in liver; epinephrine acts in liver and muscle through cAMP/PKA.',
    'Muscle glycogen supplies local ATP and cannot directly maintain blood glucose; liver glycogen buffers blood glucose between meals.',
  ],
  chainTitle: 'Hormone signal selects storage or mobilization',
  steps: [
    { label: 'Insulin → phosphatase activity' },
    { label: 'Glycogen synthase active → storage', emphasis: 'key' },
    { label: 'Glucagon/epinephrine → cAMP → PKA' },
    { label: 'Phosphorylase active → glycogen breakdown' },
  ],
  examFindings: [
    { sign: 'Exercise intolerance with cramps and no rise in lactate', mechanism: 'Muscle glycogen phosphorylase deficiency (McArdle)', significance: 'key' },
    { sign: 'Severe fasting hypoglycemia and hepatomegaly', mechanism: 'Failure of hepatic free-glucose release in glucose-6-phosphatase deficiency', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Lactate response to exercise', meaning: 'Ability of muscle glycogen to feed glycolysis' },
    { clue: 'Fasting glucose, lactate, uric acid, and lipids', meaning: 'Metabolic pattern of hepatic glycogen storage disease' },
  ],
  treatment: [
    { logic: 'Prevent fasting in hepatic glycogen-release defects', detail: 'Frequent complex carbohydrate or uncooked cornstarch can maintain glucose.' },
    { logic: 'Use graded aerobic activity and avoid intense bursts in McArdle disease' },
  ],
  mnemonic: { hook: 'Insulin dephosphorylates: Synthase starts, Phosphorylase pauses', expansion: ['Glucagon does the opposite in liver'] },
  trap: {
    questionCategory: 'Liver versus muscle glycogen',
    wrongInstinct: 'Muscle glycogen directly raises blood glucose',
    rightAnswer: 'Muscle lacks glucose-6-phosphatase, so its glycogen is reserved for local glycolysis',
    why: 'Only tissues with glucose-6-phosphatase can release free glucose.',
  },
  quiz: {
    stem: 'Why can liver glycogen maintain blood glucose while muscle glycogen cannot?',
    options: ['Only liver has glycogen phosphorylase', 'Only liver has glucose-6-phosphatase', 'Muscle lacks hexokinase', 'Muscle cannot make glucose-6-phosphate'],
    answer: 1,
    explanation: 'Liver expresses glucose-6-phosphatase and can release free glucose; skeletal muscle does not.',
  },
});

export const gluconeogenesisCoriAlanine = mfnLecture({
  id: 'gluconeogenesis-cori-alanine',
  title: 'Gluconeogenesis, Cori Cycle & Glucose–Alanine Cycle',
  source,
  tags: [
    { kind: 'mechanism', label: 'Glycolytic bypass reactions' },
    { kind: 'exam', label: 'Fasting glucose production' },
  ],
  highYield: [
    'Hepatic (and fasting renal) gluconeogenesis uses **lactate, alanine/other glucogenic amino acids, and glycerol**. Even-chain fatty acids cannot provide net glucose.',
    'The bypass enzymes are **pyruvate carboxylase + PEPCK**, **fructose-1,6-bisphosphatase**, and **glucose-6-phosphatase**.',
    'Acetyl-CoA activates pyruvate carboxylase. AMP and F-2,6-BP inhibit F-1,6-bisphosphatase; glucagon lowers F-2,6-BP and favors glucose production.',
    'The **Cori cycle** returns lactate carbon from muscle/RBC to liver; the **glucose–alanine cycle** also carries amino nitrogen from muscle to liver.',
  ],
  chainTitle: 'Peripheral carbon → hepatic glucose',
  steps: [
    { label: 'Lactate, alanine, or glycerol reaches liver' },
    { label: 'Pyruvate → OAA → PEP bypasses pyruvate kinase' },
    { label: 'F1,6BPase bypasses PFK-1', emphasis: 'key' },
    { label: 'G6Pase releases glucose to blood' },
  ],
  examFindings: [
    { sign: 'Hypoglycemia and lactic acidosis after fasting/alcohol', mechanism: 'High NADH blocks lactate/alanine entry into gluconeogenesis', significance: 'key' },
    { sign: 'Alanine rises during muscle proteolysis', mechanism: 'It transports both carbon and amino nitrogen to liver', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Fasting glucose with lactate and ketones', meaning: 'Helps localize a defect in glucose production or fuel switching' },
    { clue: 'Response to glucagon', meaning: 'Assesses mobilizable hepatic glycogen and downstream glucose release' },
  ],
  treatment: [
    { logic: 'Give glucose and stop the fast in impaired gluconeogenesis' },
    { logic: 'Avoid alcohol without food', detail: 'Ethanol-derived NADH diverts pyruvate to lactate and oxaloacetate to malate.' },
  ],
  mnemonic: { hook: 'LAG makes glucose: Lactate, Amino acids, Glycerol', expansion: ['No net glucose from even-chain fatty acids'] },
  trap: {
    questionCategory: 'Gluconeogenic substrate',
    wrongInstinct: 'Acetyl-CoA from even-chain fatty acids can make net glucose',
    rightAnswer: 'Even-chain acetyl-CoA cannot produce net glucose in humans',
    why: 'PDH is irreversible and both acetyl carbons are lost as CO₂ during TCA cycling.',
  },
  quiz: {
    stem: 'Which substrate contributes carbon to net hepatic gluconeogenesis during fasting?',
    options: ['Acetyl-CoA from palmitate', 'Leucine', 'Glycerol from adipose TAG', 'Ketone bodies'],
    answer: 2,
    explanation: 'Glycerol enters as DHAP. Even-chain fatty acids, leucine, and ketone bodies do not yield net glucose.',
  },
});

export const bloodGlucoseHomeostasis = mfnLecture({
  id: 'blood-glucose-homeostasis',
  title: 'Blood-Glucose Homeostasis',
  source,
  tags: [
    { kind: 'mechanism', label: 'Insulin–glucagon coordination' },
    { kind: 'investigation', label: 'Fasting and postprandial glucose' },
  ],
  highYield: [
    'After a meal, **insulin lowers blood glucose** by increasing muscle/adipose GLUT4 uptake and promoting hepatic glycolysis, glycogenesis, and lipogenesis while suppressing hepatic glucose output.',
    'During fasting, **glucagon raises hepatic glucose output** through glycogenolysis and gluconeogenesis; it does not directly stimulate skeletal-muscle glycogenolysis.',
    'Epinephrine provides rapid counter-regulation during exercise or hypoglycemia; cortisol and growth hormone support slower counter-regulation and insulin resistance.',
    'Hepatic glycogenolysis dominates early after food withdrawal, while gluconeogenesis begins immediately and becomes progressively more important as glycogen falls.',
  ],
  chainTitle: 'Pancreatic hormones defend circulating glucose',
  steps: [
    { label: 'High glucose → β-cell insulin release' },
    { label: 'Tissue uptake/storage + reduced hepatic output', emphasis: 'key' },
    { label: 'Low glucose → α-cell glucagon release' },
    { label: 'Hepatic glycogenolysis + gluconeogenesis restore glucose' },
  ],
  examFindings: [
    { sign: 'Postprandial glucose returns toward baseline', mechanism: 'Insulin-mediated disposal plus suppression of hepatic glucose production', significance: 'key' },
    { sign: 'Neuroglycopenic and autonomic symptoms during hypoglycemia', mechanism: 'Brain fuel shortage plus sympathoadrenal counter-regulation', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Fasting plasma glucose', meaning: 'Strongly reflects overnight hepatic glucose production' },
    { clue: 'Oral glucose tolerance curve', meaning: 'Tests coordinated insulin secretion, glucose uptake, and suppression of hepatic output' },
  ],
  treatment: [
    { logic: 'Treat symptomatic hypoglycemia promptly with glucose', detail: 'Use glucagon when oral or IV glucose is not immediately available and hepatic glycogen is present.' },
    { logic: 'Interpret glucose in relation to meal timing, hormones, and liver function' },
  ],
  mnemonic: { hook: 'Insulin puts glucose in; glucagon gets glucose going from liver', expansion: ['Epinephrine is the rapid emergency backup'] },
  trap: {
    questionCategory: 'Glucagon target tissue',
    wrongInstinct: 'Glucagon directly activates skeletal-muscle glycogen phosphorylase',
    rightAnswer: 'Glucagon acts mainly on liver; skeletal muscle responds to epinephrine and contraction signals',
    why: 'Skeletal muscle lacks a meaningful glucagon response and keeps its glycogen for local use.',
  },
  quiz: {
    stem: 'Which process becomes the dominant source of blood glucose as an overnight fast continues and hepatic glycogen declines?',
    options: ['Muscle glucose export', 'Hepatic gluconeogenesis', 'Adipose glycogenolysis', 'Brain ketolysis'],
    answer: 1,
    explanation: 'Gluconeogenesis increases progressively and becomes dominant as the finite liver glycogen store is depleted.',
  },
});
