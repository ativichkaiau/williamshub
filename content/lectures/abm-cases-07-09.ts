import { abmLecture } from './abm-shared';

const case7 = 'Case 7 — Familial Chylomicronemia Syndrome';
const case8 = 'Case 8 — Familial Hypercholesterolemia';
const case9 = 'Case 9 — MCAD Deficiency';

export const familialChylomicronemiaLpl = abmLecture({
  id: 'familial-chylomicronemia-lpl',
  title: 'Familial Chylomicronemia & the LPL Axis',
  source: case7,
  tags: [
    { kind: 'mechanism', label: 'LPL–apoC-II pathway' },
    { kind: 'disease', label: 'Type I hyperlipoproteinemia' },
  ],
  highYield: [
    'Familial chylomicronemia syndrome is usually an autosomal-recessive defect in **LPL or a required partner** (apoC-II, apoA-V, GPIHBP1, LMF1), preventing clearance of chylomicron TAG.',
    'The hallmark is persistent fasting chylomicronemia with **very high triglycerides**, milky/creamy plasma, eruptive xanthomas, lipemia retinalis, abdominal pain, and recurrent pancreatitis.',
    'ApoC-II activates endothelial LPL; LPL hydrolyzes chylomicron and VLDL TAG so fatty acids enter muscle/adipose and remnants return to liver.',
    'HDL can be low because normal surface-lipid transfer during TAG-rich lipoprotein catabolism is reduced; LDL-C may be normal or low despite massive triglyceride elevation.',
  ],
  chainTitle: 'Failure of capillary TAG hydrolysis leaves chylomicrons in fasting blood',
  steps: [
    { label: 'Enterocyte secretes apoB-48 chylomicrons' },
    { label: 'ApoC-II should activate endothelial LPL' },
    { label: 'LPL-axis defect blocks TAG hydrolysis', emphasis: 'key' },
    { label: 'Chylomicrons accumulate → milky plasma + pancreatitis risk' },
  ],
  examFindings: [
    { sign: 'Milky fasting serum with eruptive xanthomas in a child', mechanism: 'Persistent chylomicrons from monogenic LPL-pathway failure', significance: 'key' },
    { sign: 'Triglycerides >1000–2000 mg/dL with relatively preserved LDL-C', mechanism: 'Selective accumulation of large TAG-rich particles', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Repeated fasting triglycerides and lipoprotein pattern', meaning: 'Confirms severe persistent chylomicronemia' },
    { clue: 'Genetic panel for LPL-pathway genes', meaning: 'Distinguishes monogenic FCS from multifactorial severe hypertriglyceridemia' },
  ],
  treatment: [
    { logic: 'Use a lifelong very-low-fat diet with specialist guidance', detail: 'Avoid alcohol and large simple-sugar loads; prevent essential-fatty-acid and fat-soluble-vitamin deficiency.' },
    { logic: 'Treat abdominal pain as possible pancreatitis', detail: 'FCS pancreatitis risk persists even in childhood.' },
  ],
  mnemonic: { hook: 'No LPL lipolysis → Lipemic plasma', expansion: ['ApoC-II turns LPL on'] },
  trap: {
    questionCategory: 'Atherosclerosis versus pancreatitis risk',
    wrongInstinct: 'Every severe lipid disorder primarily causes premature atherosclerosis',
    rightAnswer: 'FCS is dominated by recurrent pancreatitis from chylomicronemia; LDL-driven atherosclerosis is not its defining risk',
    why: 'Particle type and vascular entry—not total lipid alone—determine the clinical complication.',
  },
  quiz: {
    stem: 'Which apolipoprotein normally activates lipoprotein lipase?',
    options: ['ApoA-I', 'ApoB-48', 'ApoC-II', 'ApoE'],
    answer: 2,
    explanation: 'ApoC-II is the essential activator of LPL-mediated hydrolysis of chylomicron and VLDL triglyceride.',
  },
});

export const fcsPancreatitisMct = abmLecture({
  id: 'fcs-pancreatitis-mct',
  title: 'Hypertriglyceridemic Pancreatitis & MCT Nutrition',
  source: case7,
  system: 'gi',
  tags: [
    { kind: 'mechanism', label: 'Free-fatty-acid pancreatic injury' },
    { kind: 'treatment', label: 'Medium-chain triglycerides' },
  ],
  highYield: [
    'At extreme triglyceride levels, pancreatic lipase releases a local excess of unbound fatty acids; micellar aggregates injure acinar cells and capillary endothelium, amplifying ischemia and inflammation.',
    'Severe chylomicronemia can also increase blood viscosity in pancreatic microcirculation, adding a second proposed mechanism for acute pancreatitis.',
    '**Medium-chain fatty acids enter portal blood directly** and are albumin-bound rather than packaged extensively into chylomicrons, so MCT can provide calories with less chylomicron burden.',
    'Dietary fat restriction must still provide essential long-chain fatty acids and vitamins A, D, E, and K; nutrition planning is safer than indiscriminate fat elimination.',
  ],
  chainTitle: 'Extreme chylomicron TAG becomes toxic within pancreatic capillaries',
  steps: [
    { label: 'Chylomicrons flood pancreatic microcirculation' },
    { label: 'Pancreatic lipase releases excess local FFA' },
    { label: 'Detergent injury + ischemia → acinar inflammation', emphasis: 'danger' },
    { label: 'Very-low-fat/MCT plan lowers chylomicron delivery' },
  ],
  examFindings: [
    { sign: 'Epigastric pain, vomiting, fever with very high TG', mechanism: 'Hypertriglyceridemia-associated acute pancreatitis', significance: 'key' },
    { sign: 'Lipemic sample can artifactually lower measured sodium', mechanism: 'Pseudohyponatremia with indirect ion-selective methods', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Lipase and abdominal imaging when indicated', meaning: 'Confirms acute pancreatitis and evaluates complications' },
    { clue: 'Triglyceride level at presentation', meaning: 'Identifies a likely metabolic trigger before fasting rapidly lowers it' },
  ],
  treatment: [
    { logic: 'Manage acute pancreatitis supportively and reduce ongoing TG exposure' },
    { logic: 'Use MCT within a dietitian-designed very-low-fat plan', detail: 'MCT bypasses chylomicron packaging more than long-chain fat but is not nutritionally complete alone.' },
  ],
  mnemonic: { hook: 'Medium chain takes the portal shortcut', expansion: ['Long chain rides a chylomicron through lymph'] },
  trap: {
    questionCategory: 'Why MCT helps',
    wrongInstinct: 'MCT activates defective LPL',
    rightAnswer: 'MCT reduces dependence on intestinal chylomicron transport by entering portal circulation more directly',
    why: 'It bypasses the blocked transport step rather than repairing the enzyme.',
  },
  quiz: {
    stem: 'Why are medium-chain triglycerides useful in familial chylomicronemia?',
    options: ['They increase apoB-48 synthesis', 'They enter portal blood with less chylomicron packaging', 'They inhibit pancreatic lipase permanently', 'They activate LDL receptors'],
    answer: 1,
    explanation: 'Medium-chain fatty acids are absorbed into portal blood and reduce dependence on chylomicron transport.',
  },
});

export const homozygousFamilialHypercholesterolemia = abmLecture({
  id: 'homozygous-familial-hypercholesterolemia',
  title: 'Homozygous Familial Hypercholesterolemia',
  source: case8,
  tags: [
    { kind: 'mechanism', label: 'LDL-receptor pathway failure' },
    { kind: 'disease', label: 'Type IIa hyperlipoproteinemia' },
  ],
  highYield: [
    'Familial hypercholesterolemia results from impaired hepatic clearance of apoB-containing LDL, most often through **LDLR**, but also APOB, PCSK9 gain-of-function, or LDLRAP1 defects.',
    'Biallelic/homozygous disease causes LDL-C often >500 mg/dL, childhood xanthomas, aortic-root/coronary atherosclerosis, and cardiovascular disease in childhood or adolescence.',
    'Triglycerides are usually not the dominant abnormality: the Fredrickson type IIa pattern is high LDL with relatively normal TAG.',
    'A strong family history, tendon/tuberous xanthomas, extreme LDL-C, and early vascular stenoses make a receptor-clearance disorder far more likely than lifestyle alone.',
  ],
  chainTitle: 'Reduced LDL-receptor clearance exposes arteries from childhood',
  steps: [
    { label: 'VLDL is remodeled to LDL containing apoB-100' },
    { label: 'LDLR pathway should remove LDL in liver' },
    { label: 'Biallelic clearance defect → extreme LDL accumulation', emphasis: 'key' },
    { label: 'Xanthomas + aortic/coronary atherosclerosis', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Childhood tuberous/tendon xanthomas', mechanism: 'Macrophage cholesterol deposition from lifelong extreme LDL', significance: 'key' },
    { sign: 'Aortic-root or coronary stenosis in adolescence', mechanism: 'Accelerated apoB-particle retention and plaque formation', significance: 'key' },
  ],
  investigations: [
    { clue: 'Untreated LDL-C, family cascade screening, genetic testing', meaning: 'Establishes severity, inheritance, and affected relatives' },
    { clue: 'Echocardiography/vascular imaging as indicated', meaning: 'Detects aortic valve/root and coronary disease' },
  ],
  treatment: [
    { logic: 'Begin intensive specialist LDL lowering immediately', detail: 'Combination therapy may include statin, ezetimibe, PCSK9-pathway therapy, LDLR-independent agents, and lipoprotein apheresis.' },
    { logic: 'Screen first-degree relatives', detail: 'Early detection changes lifetime LDL exposure.' },
  ],
  mnemonic: { hook: 'FH: Family, Five-hundred LDL, Fast atherosclerosis', expansion: ['HoFH presents in childhood'] },
  trap: {
    questionCategory: 'Severity recognition',
    wrongInstinct: 'A 13-year-old with LDL >600 mg/dL has lifestyle hypercholesterolemia',
    rightAnswer: 'Extreme childhood LDL with xanthomas is a monogenic clearance disorder until proven otherwise',
    why: 'Lifestyle rarely produces this magnitude or age of presentation.',
  },
  quiz: {
    stem: 'Which lipoprotein abnormality best fits familial hypercholesterolemia?',
    options: ['Isolated chylomicron elevation', 'Marked LDL elevation with relatively normal triglycerides', 'Isolated HDL elevation', 'Only fasting free-fatty-acid elevation'],
    answer: 1,
    explanation: 'FH is a type IIa LDL-clearance disorder; triglycerides are not the principal abnormality.',
  },
});

export const ldlRetentionXanthomas = abmLecture({
  id: 'ldl-retention-xanthomas',
  title: 'LDL Retention, Xanthomas & Premature Atherosclerosis',
  source: case8,
  tags: [
    { kind: 'mechanism', label: 'Oxidized LDL and foam cells' },
    { kind: 'disease', label: 'Premature coronary disease' },
  ],
  highYield: [
    'ApoB-containing LDL crosses dysfunctional endothelium, binds intimal proteoglycans, and becomes oxidized/modified.',
    'Macrophage scavenger receptors take up modified LDL without normal cholesterol feedback → **foam cells**, fatty streaks, inflammatory plaque, and a necrotic core.',
    'The same cholesterol-laden macrophage process in tendons and subcutaneous tissues produces xanthomas; the finding is a visible marker of cumulative LDL exposure.',
    'Lipoprotein(a) adds proatherogenic and potentially antifibrinolytic risk because its apo(a) resembles plasminogen and its particle carries cholesterol into the wall.',
  ],
  chainTitle: 'Extreme LDL burden becomes both xanthoma and plaque',
  steps: [
    { label: 'LDL accumulates in plasma' },
    { label: 'ApoB particles are retained and modified in arterial intima' },
    { label: 'Macrophages become foam cells', emphasis: 'key' },
    { label: 'Plaque narrows coronary/aortic vessels → heart failure/ischemia' },
  ],
  examFindings: [
    { sign: 'Tendon or tuberous xanthomas', mechanism: 'Cholesterol-loaded macrophages in connective tissue', significance: 'key' },
    { sign: 'Premature edema/heart-failure symptoms with coronary stenoses', mechanism: 'Severe early ischemic or valvular/aortic disease from lifelong LDL', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'ApoB and Lp(a)', meaning: 'Refines atherogenic particle burden beyond calculated LDL-C' },
    { clue: 'Coronary/aortic imaging in severe childhood FH', meaning: 'Assesses early target-organ disease' },
  ],
  treatment: [
    { logic: 'Lower cumulative LDL exposure, not merely the latest measurement', detail: 'Earlier and deeper reduction yields greater prevention in familial disease.' },
    { logic: 'Address all vascular risks while using FH-specific therapy' },
  ],
  mnemonic: { hook: 'Retain LDL → recruit macrophages → raise foam plaque', expansion: ['Xanthoma is foam-cell biology outside the artery'] },
  trap: {
    questionCategory: 'Macrophage cholesterol control',
    wrongInstinct: 'Scavenger-receptor uptake shuts off normally when macrophage cholesterol rises',
    rightAnswer: 'Modified-LDL scavenger uptake lacks the feedback control of the LDL receptor',
    why: 'Unregulated uptake permits progressive foam-cell formation.',
  },
  quiz: {
    stem: 'What cellular event creates both early atherosclerotic fatty streaks and xanthomas?',
    options: ['Neutrophil glycogen storage', 'Macrophage uptake of modified LDL and foam-cell formation', 'Hepatocyte bile retention', 'Adipocyte chylomicron synthesis'],
    answer: 1,
    explanation: 'Cholesterol-laden macrophage foam cells accumulate in arterial intima and in xanthomatous tissue.',
  },
});

export const mcadHypoketoticHypoglycemia = abmLecture({
  id: 'mcad-hypoketotic-hypoglycemia',
  title: 'MCAD Deficiency & Hypoketotic Hypoglycemia',
  source: case9,
  tags: [
    { kind: 'mechanism', label: 'Medium-chain beta-oxidation failure' },
    { kind: 'disease', label: 'Fasting metabolic crisis' },
  ],
  highYield: [
    'Autosomal-recessive **ACADM deficiency** blocks the first dehydrogenation step for medium-chain acyl-CoAs during mitochondrial β-oxidation.',
    'Illness or fasting exhausts glycogen, but the child cannot generate enough fatty-acid ATP/NADH or acetyl-CoA → **hypoketotic hypoglycemia**.',
    'Low acetyl-CoA fails to activate pyruvate carboxylase, further weakening gluconeogenesis; fatty acids are diverted toward ω-oxidation and dicarboxylic acids.',
    'Crisis causes vomiting, lethargy, seizures, hepatic dysfunction, hyperammonemia, cardiopulmonary collapse, or sudden death if glucose is not supplied.',
  ],
  chainTitle: 'Fasting unmasks failure to switch from glucose to fat',
  steps: [
    { label: 'Illness/fast depletes liver glycogen' },
    { label: 'MCAD block prevents medium-chain β-oxidation' },
    { label: 'ATP + acetyl-CoA + ketones fall', emphasis: 'key' },
    { label: 'Hypoglycemic encephalopathy and organ dysfunction', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Lethargy after overnight fasting with low glucose and low ketones', mechanism: 'Fatty-acid oxidation cannot support ketogenesis or gluconeogenesis', significance: 'key' },
    { sign: 'Dicarboxylic aciduria', mechanism: 'Compensatory ω-oxidation of accumulating medium-chain fatty acids', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Elevated C8 acylcarnitine with C8:C10 ratio', meaning: 'Characteristic newborn-screen/crisis pattern for MCAD deficiency' },
    { clue: 'Urine medium-chain dicarboxylic acids with low ketones', meaning: 'Supports impaired mitochondrial β-oxidation' },
  ],
  treatment: [
    { logic: 'Give IV dextrose immediately during crisis', detail: 'Do not wait for metabolic confirmation in a symptomatic hypoglycemic child.' },
    { logic: 'Avoid fasting and use a written sick-day plan' },
  ],
  mnemonic: { hook: 'MCAD: Medium Chain, C8, Avoid fasting, Dextrose', expansion: ['Hypoglycemia without appropriate ketones'] },
  trap: {
    questionCategory: 'Ketone expectation',
    wrongInstinct: 'Any fasting hypoglycemia should have high ketones',
    rightAnswer: 'Low ketones during fasting hypoglycemia point toward fatty-acid oxidation or ketogenesis failure',
    why: 'Ketones are the expected alternate fuel when insulin is low.',
  },
  quiz: {
    stem: 'Which acylcarnitine is classically elevated in MCAD deficiency?',
    options: ['C2 acetylcarnitine', 'C5 isovalerylcarnitine', 'C8 octanoylcarnitine', 'C16 palmitoylcarnitine'],
    answer: 2,
    explanation: 'C8 octanoylcarnitine is the characteristic marker of MCAD deficiency.',
  },
});

export const mcadDiagnosisPrevention = abmLecture({
  id: 'mcad-diagnosis-prevention',
  title: 'MCAD Confirmation, Complications & Sick-Day Prevention',
  source: case9,
  tags: [
    { kind: 'investigation', label: 'Acylcarnitine and organic acids' },
    { kind: 'treatment', label: 'Fasting avoidance' },
  ],
  highYield: [
    'Newborn screening detects an acylcarnitine pattern before symptoms; confirmation uses plasma acylcarnitines, urine organic acids/acylglycines, and **biallelic ACADM variants**.',
    'During a well interval, metabolites can normalize, so a prior newborn-screen or crisis sample is valuable; molecular confirmation prevents false reassurance.',
    'The major preventable complications are hypoglycemic brain injury, seizures, hepatic dysfunction, arrhythmia/cardiomyopathy, and sudden death.',
    'Prevention is practical: age-appropriate maximum fasting intervals, carbohydrate before prolonged exercise, early glucose during illness, medical identification, and a family emergency letter.',
  ],
  chainTitle: 'Screen early, confirm, then prevent catabolism',
  steps: [
    { label: 'Newborn C8 signal or fasting crisis raises suspicion' },
    { label: 'Acylcarnitine/organic-acid profile localizes the block' },
    { label: 'ACADM testing confirms inheritance', emphasis: 'key' },
    { label: 'Sick-day carbohydrate prevents neurologic injury' },
  ],
  examFindings: [
    { sign: 'Normal development between crises', mechanism: 'The defect is most dangerous during catabolic stress', significance: 'supportive' },
    { sign: 'Rapid deterioration after vomiting illness', mechanism: 'Loss of intake triggers glycogen depletion and failed fat use', significance: 'key' },
  ],
  investigations: [
    { clue: 'C8 elevation plus hexanoylglycine/suberylglycine', meaning: 'Biochemical signature of medium-chain oxidation failure' },
    { clue: 'ACADM sequencing', meaning: 'Confirms diagnosis and enables family counseling' },
  ],
  treatment: [
    { logic: 'During illness, shorten fasting intervals and use rapid carbohydrate', detail: 'Seek urgent IV glucose when oral intake is unreliable.' },
    { logic: 'Avoid routine high-fat or fasting regimens', detail: 'The patient cannot safely depend on medium-chain fat oxidation.' },
  ],
  mnemonic: { hook: 'Never let MCAD run out of carbohydrate', expansion: ['Illness + vomiting = emergency glucose plan'] },
  trap: {
    questionCategory: 'Dietary fat restriction',
    wrongInstinct: 'Eliminate all dietary fat permanently',
    rightAnswer: 'The core management is fasting avoidance and emergency carbohydrate, with balanced nutrition guided by the metabolic team',
    why: 'Essential fats and normal growth still matter; catabolism is the main trigger.',
  },
  quiz: {
    stem: 'What is the most important immediate action when a child with MCAD deficiency cannot tolerate oral intake?',
    options: ['Prolong the fast to stimulate adaptation', 'Give a high-fat drink', 'Provide urgent glucose, often intravenously', 'Administer glucagon alone and observe'],
    answer: 2,
    explanation: 'Exogenous glucose stops catabolism and supplies the fuel the child cannot obtain safely from fatty-acid oxidation.',
  },
});
