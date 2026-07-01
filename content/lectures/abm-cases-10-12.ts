import { abmLecture } from './abm-shared';

const case10 = 'Case 10 — Obesity & Prediabetes';
const case11 = 'Case 11 — Alcoholic Ketoacidosis';
const case12 = 'Case 12 — Ketogenic Diet & Intermittent Fasting';

export const prediabetesOgtthba1c = abmLecture({
  id: 'prediabetes-ogtt-hba1c',
  title: 'Obesity, Prediabetes, OGTT & HbA1c',
  source: case10,
  system: 'endocrine',
  tags: [
    { kind: 'investigation', label: 'FPG, OGTT & HbA1c' },
    { kind: 'disease', label: 'Metabolic syndrome' },
  ],
  highYield: [
    'Central obesity (BMI 34 kg/m², 42-inch waist in the case), hypertension, dysglycemia, and an adverse lipid profile cluster as **insulin resistance/metabolic syndrome** and raise cardiovascular and type 2 diabetes risk.',
    'Prediabetes ranges are fasting plasma glucose **100–125 mg/dL**, 2-hour 75-g OGTT **140–199 mg/dL**, or HbA1c **5.7–6.4%**.',
    'Diabetes thresholds are fasting glucose ≥126 mg/dL, 2-hour OGTT ≥200 mg/dL, or HbA1c ≥6.5%; absent unequivocal symptomatic hyperglycemia, confirmation is required.',
    'HbA1c reflects glycation over roughly 2–3 months but becomes misleading when RBC lifespan or hemoglobin structure is abnormal; OGTT directly reveals impaired post-load disposal.',
  ],
  chainTitle: 'Choose the glucose test that answers the clinical question',
  steps: [
    { label: 'Central adiposity raises pretest probability' },
    { label: 'Fasting glucose assesses basal hepatic output' },
    { label: 'OGTT challenges insulin secretion and disposal', emphasis: 'key' },
    { label: 'HbA1c estimates longer-term glycemic exposure' },
  ],
  examFindings: [
    { sign: 'Large waist with hypertension and acanthosis risk', mechanism: 'Visceral adiposity and hyperinsulinemia mark insulin resistance', significance: 'key' },
    { sign: 'Normal fasting glucose but abnormal 2-hour OGTT', mechanism: 'Postprandial dysglycemia can precede fasting hyperglycemia', significance: 'supportive' },
  ],
  investigations: [
    { clue: '75-g OGTT with fasting and 2-hour glucose', meaning: 'Classifies glucose tolerance after a standardized challenge' },
    { clue: 'HbA1c discordant with measured glucose', meaning: 'Prompts review of anemia, hemoglobin variant, renal disease, or altered RBC turnover' },
  ],
  treatment: [
    { logic: 'Treat cardiovascular risk and prevent diabetes together', detail: 'Weight reduction, activity, sleep, diet quality, blood-pressure control, and lipid management share benefit.' },
  ],
  mnemonic: { hook: 'Prediabetes: 100 fasting, 140 at 2 hours, 5.7 A1c', expansion: ['Diabetes begins at 126, 200, 6.5'] },
  trap: {
    questionCategory: 'HbA1c interpretation',
    wrongInstinct: 'HbA1c is always accurate because fasting is unnecessary',
    rightAnswer: 'HbA1c depends on RBC lifespan and assay performance; use glucose-based testing when those assumptions fail',
    why: 'Glycation exposure changes when erythrocytes live longer or shorter than usual.',
  },
  quiz: {
    stem: 'A 2-hour glucose of 165 mg/dL after a 75-g OGTT is classified as:',
    options: ['Normal glucose tolerance', 'Impaired glucose tolerance (prediabetes)', 'Diabetes regardless of confirmation', 'Reactive hypoglycemia'],
    answer: 1,
    explanation: 'A 2-hour value of 140–199 mg/dL is impaired glucose tolerance; ≥200 mg/dL is the diabetes threshold.',
  },
});

export const obesityInsulinResistance = abmLecture({
  id: 'obesity-insulin-resistance',
  title: 'Obesity-Driven Insulin Resistance & Lifestyle Reversal',
  source: case10,
  system: 'endocrine',
  tags: [
    { kind: 'mechanism', label: 'IRS–PI3K–Akt signaling failure' },
    { kind: 'treatment', label: 'Weight loss and exercise' },
  ],
  highYield: [
    'Visceral adipocyte hypertrophy increases free-fatty-acid flux, hypoxia, macrophage inflammation, and cytokines while lowering protective adiponectin.',
    'Ectopic lipid intermediates such as DAG activate stress/PKC pathways that promote inhibitory serine phosphorylation of IRS proteins → reduced PI3K–Akt signaling and **less GLUT4 translocation**.',
    'Muscle glucose uptake falls, adipose lipolysis becomes insulin-resistant, and liver continues gluconeogenesis/VLDL output despite insulin; β cells initially compensate with hyperinsulinemia.',
    'Exercise recruits GLUT4 through contraction/AMPK pathways independent of insulin and improves mitochondrial capacity; sustained weight loss lowers ectopic fat and inflammatory signaling.',
  ],
  chainTitle: 'Visceral fat converts nutrient excess into impaired insulin signaling',
  steps: [
    { label: 'Adipocyte expansion → FFA + cytokines' },
    { label: 'DAG/PKC and inflammation inhibit IRS signaling' },
    { label: 'Akt/GLUT4 response falls', emphasis: 'key' },
    { label: 'Hyperglycemia + compensatory hyperinsulinemia → beta-cell stress' },
  ],
  examFindings: [
    { sign: 'Acanthosis nigricans', mechanism: 'High insulin stimulates keratinocyte/IGF-pathway growth', significance: 'supportive' },
    { sign: 'Central obesity with high triglycerides and low HDL', mechanism: 'Insulin-resistant adipose/liver increase FFA and VLDL flux', significance: 'key' },
  ],
  investigations: [
    { clue: 'Fasting insulin-derived indices such as HOMA-IR', meaning: 'Research/adjunct estimate; no universal diagnostic cutoff across populations' },
    { clue: 'Waist, BP, glucose, triglycerides, HDL', meaning: 'Defines the cardiometabolic risk cluster' },
  ],
  treatment: [
    { logic: 'Use a sustainable calorie deficit and high-fiber, minimally processed diet pattern' },
    { logic: 'Combine aerobic and resistance exercise', detail: 'Contraction-mediated GLUT4 improves glucose disposal even before major weight loss.' },
  ],
  mnemonic: { hook: 'Visceral FFA → DAG/PKC → IRS blocked → GLUT4 stays inside', expansion: ['Exercise opens a second GLUT4 route'] },
  trap: {
    questionCategory: 'HOMA-IR',
    wrongInstinct: 'One HOMA-IR cutoff diagnoses insulin resistance in every patient',
    rightAnswer: 'HOMA-IR is population- and assay-dependent and is not a universal standalone diagnosis',
    why: 'Clinical risk and validated glucose testing remain central.',
  },
  quiz: {
    stem: 'How can exercise increase skeletal-muscle glucose uptake when insulin is low?',
    options: ['By blocking GLUT4 synthesis', 'By contraction-mediated GLUT4 translocation', 'By inhibiting AMPK', 'By increasing hepatic glucagon receptors'],
    answer: 1,
    explanation: 'Muscle contraction activates insulin-independent signaling that recruits GLUT4 to the membrane.',
  },
});

export const alcoholicKetoacidosisRedox = abmLecture({
  id: 'alcoholic-ketoacidosis-redox',
  title: 'Alcoholic Ketoacidosis & the Hepatic Redox Shift',
  source: case11,
  tags: [
    { kind: 'mechanism', label: 'High NADH/NAD+ and starvation' },
    { kind: 'disease', label: 'High-anion-gap acidosis' },
  ],
  highYield: [
    'Alcoholic ketoacidosis follows heavy alcohol use plus poor intake/vomiting: low insulin, high counter-regulatory hormones, volume depletion, and lipolysis deliver fatty acids to liver.',
    'Ethanol oxidation raises the hepatic **NADH/NAD+ ratio**, shifting pyruvate → lactate and oxaloacetate → malate, suppressing gluconeogenesis and TCA flux.',
    'Accumulated acetyl-CoA enters ketogenesis; high NADH shifts acetoacetate toward **β-hydroxybutyrate**, so urine nitroprusside may underestimate total ketones.',
    'Typical findings are high-anion-gap metabolic acidosis, high β-hydroxybutyrate, lactate elevation, and low/normal/mildly elevated glucose rather than marked DKA-range hyperglycemia.',
  ],
  chainTitle: 'Starvation hormones plus ethanol redox drive ketone accumulation',
  steps: [
    { label: 'Poor intake → low insulin/high glucagon' },
    { label: 'Adipose lipolysis supplies fatty acids' },
    { label: 'High NADH blocks glucose/TCA routes', emphasis: 'key' },
    { label: 'Acetyl-CoA → beta-hydroxybutyrate → anion-gap acidosis', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Tachypnea, vomiting, abdominal pain after binge then poor intake', mechanism: 'Ketoacidosis plus volume/electrolyte depletion', significance: 'key' },
    { sign: 'Ketone strip modest despite severe acidosis', mechanism: 'β-hydroxybutyrate predominates and is poorly detected by nitroprusside', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Anion gap, venous/arterial pH, bicarbonate, β-hydroxybutyrate', meaning: 'Defines and quantifies ketoacidosis' },
    { clue: 'Glucose, lactate, ethanol, electrolytes, renal and liver tests', meaning: 'Separates AKA from DKA/toxic alcohols and guides replacement' },
  ],
  treatment: [
    { logic: 'Give thiamine, dextrose-containing fluids, volume, and electrolytes', detail: 'Dextrose raises endogenous insulin and stops lipolysis/ketogenesis.' },
    { logic: 'Do not give routine insulin unless true hyperglycemic DKA coexists', detail: 'AKA glucose may be low and insulin can provoke severe hypoglycemia.' },
  ],
  mnemonic: { hook: 'Alcohol + absent food → high NADH + high ketones', expansion: ['Beta-hydroxybutyrate dominates'] },
  trap: {
    questionCategory: 'Urine ketone test',
    wrongInstinct: 'A weak urine ketone result excludes alcoholic ketoacidosis',
    rightAnswer: 'Measure serum β-hydroxybutyrate because nitroprusside mainly detects acetoacetate',
    why: 'The ethanol redox state shifts the ketone pool toward β-hydroxybutyrate.',
  },
  quiz: {
    stem: 'Why does β-hydroxybutyrate predominate in alcoholic ketoacidosis?',
    options: ['Low hepatic NADH/NAD+ ratio', 'High hepatic NADH/NAD+ ratio', 'Excess insulin', 'Inhibition of adipose lipolysis'],
    answer: 1,
    explanation: 'High NADH drives reduction of acetoacetate to β-hydroxybutyrate.',
  },
});

export const thiamineWernickeRecovery = abmLecture({
  id: 'thiamine-wernicke-recovery',
  title: 'Thiamine, Wernicke Prevention & Alcohol Recovery',
  source: case11,
  system: 'neuro',
  tags: [
    { kind: 'mechanism', label: 'TPP-dependent neuronal metabolism' },
    { kind: 'treatment', label: 'Thiamine before/with glucose' },
  ],
  highYield: [
    'Thiamine pyrophosphate is required for **PDH, α-ketoglutarate dehydrogenase, branched-chain α-ketoacid dehydrogenase, and transketolase**.',
    'Alcohol use and malnutrition reduce thiamine intake, absorption, storage, and utilization; glucose loading increases thiamine demand and can unmask Wernicke encephalopathy.',
    'Wernicke encephalopathy classically causes confusion, ophthalmoplegia/nystagmus, and gait ataxia, but the full triad is often absent; treat on suspicion.',
    'Give parenteral thiamine before or with dextrose, then correct magnesium and nutrition. Korsakoff amnesia/confabulation can become persistent if treatment is delayed.',
  ],
  chainTitle: 'Thiamine loss turns glucose metabolism into neuronal energy failure',
  steps: [
    { label: 'Alcohol/malnutrition deplete thiamine' },
    { label: 'TPP-dependent PDH/TCA/PPP flux falls' },
    { label: 'Neuronal ATP and antioxidant defense fail', emphasis: 'danger' },
    { label: 'Early IV thiamine prevents progression' },
  ],
  examFindings: [
    { sign: 'Confusion + eye-movement abnormality + gait ataxia', mechanism: 'Wernicke encephalopathy from thiamine-dependent energy failure', significance: 'key' },
    { sign: 'Persistent anterograde amnesia/confabulation', mechanism: 'Korsakoff syndrome after chronic diencephalic injury', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Clinical risk and neurologic examination', meaning: 'Treatment should not wait for a thiamine level' },
    { clue: 'Magnesium, phosphate, potassium, glucose', meaning: 'Identifies cofactors and refeeding/electrolyte risks' },
  ],
  treatment: [
    { logic: 'Give parenteral thiamine before or alongside glucose', detail: 'Do not withhold emergency glucose from a hypoglycemic patient; administer thiamine immediately as well.' },
    { logic: 'After stabilization, treat alcohol-use disorder comprehensively', detail: 'Medication choice, including disulfiram, depends on motivation, contraindications, supervision, and safer alternatives.' },
  ],
  mnemonic: { hook: 'TPP: PDH, alpha-KGDH, BCKDH, transketolase', expansion: ['Thiamine before/with carbohydrate'] },
  trap: {
    questionCategory: 'Emergency sequence',
    wrongInstinct: 'Delay life-saving glucose until thiamine is available',
    rightAnswer: 'Treat hypoglycemia immediately and give parenteral thiamine as soon as possible, ideally before or with glucose',
    why: 'The goal is to prevent Wernicke without prolonging dangerous hypoglycemia.',
  },
  quiz: {
    stem: 'Which enzyme does not require thiamine pyrophosphate?',
    options: ['Pyruvate dehydrogenase', 'Alpha-ketoglutarate dehydrogenase', 'Transketolase', 'Lactate dehydrogenase'],
    answer: 3,
    explanation: 'LDH uses NADH/NAD+; PDH, alpha-KGDH, and transketolase require TPP.',
  },
});

export const nutritionalKetosisVsKetoacidosis = abmLecture({
  id: 'nutritional-ketosis-vs-ketoacidosis',
  title: 'Nutritional Ketosis vs Ketoacidosis',
  source: case12,
  tags: [
    { kind: 'mechanism', label: 'Regulated versus uncontrolled ketogenesis' },
    { kind: 'exam', label: 'Acid-base distinction' },
  ],
  highYield: [
    'Low carbohydrate intake lowers insulin and raises glucagon, increasing adipose lipolysis, hepatic β-oxidation, and ketogenesis.',
    'In **nutritional ketosis**, residual insulin restrains lipolysis and ketone production; ketones rise modestly while bicarbonate and blood pH remain near normal.',
    'In ketoacidosis, insulin is absent/ineffective or counter-regulation is extreme, ketone production overwhelms use and renal excretion, and bicarbonate falls → high-anion-gap acidosis.',
    'Urine ketones show exposure but do not by themselves diagnose acidosis; serum β-hydroxybutyrate plus pH/bicarbonate and clinical context make the distinction.',
  ],
  chainTitle: 'Insulin restraint separates adaptive ketosis from acidotic crisis',
  steps: [
    { label: 'Low carbohydrate → low insulin/high glucagon' },
    { label: 'Fatty acids reach liver → ketones' },
    { label: 'Residual insulin caps production in nutritional ketosis', emphasis: 'key' },
    { label: 'Uncontrolled production → bicarbonate loss and acidosis', emphasis: 'danger' },
  ],
  examFindings: [
    { sign: 'Positive ketones with normal pH and bicarbonate', mechanism: 'Regulated nutritional ketosis', significance: 'key' },
    { sign: 'Kussmaul breathing, dehydration, altered mentation', mechanism: 'Compensated severe metabolic ketoacidosis', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'β-hydroxybutyrate with bicarbonate/pH and anion gap', meaning: 'Distinguishes ketone production from clinically important ketoacidosis' },
    { clue: 'Glucose and medication context', meaning: 'Separates nutritional ketosis from DKA, including euglycemic DKA' },
  ],
  treatment: [
    { logic: 'Do not label every positive ketone test as ketoacidosis' },
    { logic: 'Treat acidotic or symptomatic patients by cause', detail: 'DKA and alcoholic ketoacidosis require different insulin/glucose strategies.' },
  ],
  mnemonic: { hook: 'Ketosis has ketones; ketoacidosis has ketones plus low bicarbonate/pH', expansion: ['Context decides the cause'] },
  trap: {
    questionCategory: 'Urine ketones',
    wrongInstinct: 'Positive urine ketones prove ketoacidosis',
    rightAnswer: 'Ketoacidosis requires an acid-base disturbance, not ketones alone',
    why: 'Adaptive fasting and ketogenic diets also generate ketones.',
  },
  quiz: {
    stem: 'Which finding most clearly distinguishes ketoacidosis from nutritional ketosis?',
    options: ['Urine ketones', 'Reduced carbohydrate intake', 'Low serum bicarbonate with high anion gap', 'Increased fatty-acid oxidation'],
    answer: 2,
    explanation: 'Acidosis requires bicarbonate consumption and a high anion gap; ketones alone occur in both states.',
  },
});

export const ketogenicFastingExerciseAdaptation = abmLecture({
  id: 'ketogenic-fasting-exercise-adaptation',
  title: 'Ketogenic Diet, Intermittent Fasting & Exercise Adaptation',
  source: case12,
  tags: [
    { kind: 'mechanism', label: 'Fuel switching and body composition' },
    { kind: 'treatment', label: 'Diet and strength training' },
  ],
  highYield: [
    'During fasting or carbohydrate restriction, liver glycogen falls, gluconeogenesis maintains obligatory glucose needs, and fatty acids/ketones supply more peripheral energy.',
    'Fat loss still requires a sustained negative energy balance; ketosis changes fuel partitioning but does not override total energy balance.',
    'Early ketogenic dieting can lower body mass partly through glycogen-associated water loss. Longer-term body-composition change depends on intake, expenditure, protein, and training.',
    'Resistance exercise stimulates muscle-protein synthesis, but inadequate protein or excessive energy restriction can reduce absolute lean mass even when percent muscle increases as fat falls.',
  ],
  chainTitle: 'Diet timing and training reshape fuel use and body composition',
  steps: [
    { label: 'Carbohydrate restriction lowers insulin and glycogen' },
    { label: 'Lipolysis + ketogenesis increase' },
    { label: 'Negative energy balance reduces stored fat' },
    { label: 'Adequate protein + resistance stimulus preserve/build muscle', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Weight falls quickly in the first week', mechanism: 'Glycogen depletion releases associated water before large fat loss', significance: 'supportive' },
    { sign: 'Percent muscle rises while absolute muscle falls', mechanism: 'Percentage can increase simply because total/fat mass falls faster', significance: 'key' },
  ],
  investigations: [
    { clue: 'Absolute fat and lean mass, not percentages alone', meaning: 'Correctly interprets body-composition change' },
    { clue: 'Glucose, lipids, electrolytes, renal/liver context', meaning: 'Monitors safety and individual metabolic response' },
  ],
  treatment: [
    { logic: 'Match the dietary pattern to adherence, nutrition quality, medications, and comorbidity' },
    { logic: 'Protect lean mass with resistance training and adequate protein', detail: 'Avoid aggressive fasting in pregnancy, eating disorders, vulnerable illness, or fatty-acid oxidation disorders.' },
  ],
  mnemonic: { hook: 'Ketosis changes fuel; calorie balance changes fat; training plus protein changes muscle', expansion: ['Percent is not the same as kilograms'] },
  trap: {
    questionCategory: 'Body-composition percentages',
    wrongInstinct: 'A higher muscle percentage proves new muscle was gained',
    rightAnswer: 'Check absolute muscle mass because the percentage can rise when fat or total mass falls',
    why: 'Composition is a ratio and can change without growth of the numerator.',
  },
  quiz: {
    stem: 'Which factor most directly helps preserve lean mass during a calorie-restricted ketogenic diet?',
    options: ['Eliminating all carbohydrate regardless of intake', 'Resistance training with adequate protein', 'Maximizing fasting duration', 'Avoiding all dietary fat'],
    answer: 1,
    explanation: 'Mechanical loading and amino-acid availability support muscle-protein synthesis during energy restriction.',
  },
});
