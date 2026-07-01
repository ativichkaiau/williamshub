import { mfnLecture } from './mfn-shared';

const source = 'L6 — Integrative Metabolism';

export const organSpecificFuelMetabolism = mfnLecture({
  id: 'organ-specific-fuel-metabolism',
  title: 'Organ-Specific Fuel Metabolism',
  source,
  tags: [
    { kind: 'mechanism', label: 'Inter-organ fuel exchange' },
    { kind: 'exam', label: 'Tissue fuel preferences' },
  ],
  highYield: [
    '**Liver coordinates blood fuels**: stores/releases glucose, performs gluconeogenesis, oxidizes fatty acids, makes ketones, converts ammonia to urea, and exports VLDL.',
    '**RBCs lack mitochondria** and require glucose → lactate. Brain normally depends on glucose but uses substantial ketones during prolonged starvation; fatty acids do not efficiently cross the blood–brain barrier.',
    'Skeletal muscle uses its own glycogen, glucose, fatty acids, ketones, and branched-chain amino acids according to activity/state. It exports lactate and alanine.',
    'Adipose stores/release TAG and uses insulin-responsive GLUT4. Kidney contributes gluconeogenesis and ammoniagenesis increasingly during prolonged fasting.',
  ],
  chainTitle: 'Each organ contributes a different metabolic job',
  steps: [
    { label: 'Liver buffers circulating glucose and packages/export fuels' },
    { label: 'Adipose stores TAG or releases fatty acids' },
    { label: 'Muscle consumes fuel and exports lactate/alanine' },
    { label: 'Brain and RBC receive protected circulating fuels', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'RBC always releases lactate', mechanism: 'No mitochondria for PDH, TCA, or oxidative phosphorylation', significance: 'key' },
    { sign: 'Brain ketone use rises during starvation', mechanism: 'Adaptation reduces glucose demand and muscle-protein loss', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Lactate, glucose, ketones, and free fatty acids together', meaning: 'Snapshot of inter-organ fuel state' },
    { clue: 'Arteriovenous substrate difference across tissue', meaning: 'Reveals tissue uptake or release experimentally' },
  ],
  treatment: [
    { logic: 'Predict whole-body findings from the affected organ and metabolic state', detail: 'The same pathway defect has different consequences in liver, muscle, and RBC.' },
  ],
  mnemonic: { hook: 'Liver leads, adipose stores, muscle spends, RBC ferments, brain is protected', expansion: ['Kidney joins gluconeogenesis in prolonged fasting'] },
  trap: {
    questionCategory: 'Brain fuel in starvation',
    wrongInstinct: 'The brain switches mainly to free fatty acids',
    rightAnswer: 'The brain uses ketone bodies while retaining some glucose requirement',
    why: 'Long-chain fatty acids cross the blood–brain barrier poorly, whereas ketones are water-soluble.',
  },
  quiz: {
    stem: 'Which tissue necessarily converts glucose to lactate even in well-oxygenated blood?',
    options: ['Liver', 'Skeletal muscle', 'Erythrocyte', 'Renal cortex'],
    answer: 2,
    explanation: 'Erythrocytes lack mitochondria, so glycolytic pyruvate must be reduced to lactate to regenerate NAD⁺.',
  },
});

export const fedFastingStarvation = mfnLecture({
  id: 'fed-fasting-starvation',
  title: 'Fed, Fasting & Starvation States',
  source,
  tags: [
    { kind: 'mechanism', label: 'Insulin–glucagon ratio' },
    { kind: 'exam', label: 'Fuel sequence during fasting' },
  ],
  highYield: [
    'In the **fed state**, high insulin promotes GLUT4 uptake, glycolysis, glycogen synthesis, fatty-acid/TAG synthesis, and protein synthesis.',
    'Early fasting lowers insulin and raises glucagon: **hepatic glycogenolysis** initially maintains glucose, then wanes within roughly a day as gluconeogenesis rises.',
    'Adipose lipolysis supplies fatty acids for most tissues and glycerol for gluconeogenesis; hepatic β-oxidation powers gluconeogenesis and supplies acetyl-CoA for ketones.',
    'During prolonged starvation, brain ketone use increases and urinary nitrogen loss falls, preserving muscle protein; RBCs still require glucose and produce lactate.',
  ],
  chainTitle: 'Time without food changes the dominant fuel source',
  steps: [
    { label: 'Fed: dietary glucose + insulin → storage' },
    { label: 'Hours: liver glycogen maintains blood glucose' },
    { label: 'Day: gluconeogenesis + lipolysis dominate', emphasis: 'key' },
    { label: 'Days: ketone adaptation spares muscle protein' },
  ],
  examFindings: [
    { sign: 'Falling urinary nitrogen after several days of starvation', mechanism: 'Brain ketone adaptation reduces amino-acid demand for gluconeogenesis', significance: 'key' },
    { sign: 'Ketones rise while glucose remains low-normal', mechanism: 'Low insulin/high glucagon promotes hepatic ketogenesis', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Glucose, insulin, glucagon, β-hydroxybutyrate, and FFA pattern', meaning: 'Distinguishes fed from fasting physiology' },
    { clue: 'Urinary nitrogen over time', meaning: 'Degree of muscle-protein catabolism and later protein sparing' },
  ],
  treatment: [
    { logic: 'Provide carbohydrate to stop uncomplicated fasting ketosis', detail: 'Rising insulin suppresses lipolysis and ketogenesis.' },
    { logic: 'Refeed prolonged starvation cautiously', detail: 'Monitor phosphate, potassium, magnesium, and thiamine risk.' },
  ],
  mnemonic: { hook: 'Food → glycogen → gluconeogenesis → ketones', expansion: ['Ketones spare protein in prolonged starvation'] },
  trap: {
    questionCategory: 'Sequence of fasting fuels',
    wrongInstinct: 'Gluconeogenesis begins only after glycogen is completely gone',
    rightAnswer: 'Gluconeogenesis begins early and increases as glycogenolysis declines',
    why: 'Pathways overlap; the dominant contribution shifts gradually.',
  },
  quiz: {
    stem: 'What adaptation most directly reduces muscle-protein loss during prolonged starvation?',
    options: ['Increased RBC fatty-acid oxidation', 'Increased brain ketone use', 'Increased hepatic glycogen stores', 'Increased insulin secretion'],
    answer: 1,
    explanation: 'Brain ketone use lowers its glucose demand, so fewer amino acids are required for gluconeogenesis.',
  },
});

export const exerciseStressFuelIntegration = mfnLecture({
  id: 'exercise-stress-fuel-integration',
  title: 'Exercise, Stress Hormones & Fuel Integration',
  source,
  tags: [
    { kind: 'mechanism', label: 'Exercise fuel switching' },
    { kind: 'exam', label: 'Epinephrine and cortisol' },
  ],
  highYield: [
    'Immediate intense work uses stored ATP and **phosphocreatine**; short high-intensity exercise increasingly uses muscle glycogen and anaerobic glycolysis.',
    'Longer moderate exercise increases mitochondrial oxidation of fatty acids while liver maintains blood glucose through glycogenolysis and gluconeogenesis.',
    '**Epinephrine** rapidly stimulates muscle/liver glycogenolysis and adipose lipolysis while suppressing insulin release; contracting muscle also recruits GLUT4 independently of insulin.',
    '**Cortisol** supports longer stress by increasing proteolysis, lipolysis, gluconeogenic enzyme expression, and insulin resistance.',
  ],
  chainTitle: 'Exercise duration selects the dominant fuel',
  steps: [
    { label: 'Seconds: ATP + phosphocreatine' },
    { label: 'Short intense work: muscle glycogen → lactate' },
    { label: 'Prolonged work: oxidative glucose + fatty acids', emphasis: 'key' },
    { label: 'Liver/adipose hormones sustain circulating fuel' },
  ],
  examFindings: [
    { sign: 'Exercise increases muscle glucose uptake despite low insulin', mechanism: 'Contraction-triggered GLUT4 translocation', significance: 'key' },
    { sign: 'Lactate returns to liver during intense exercise', mechanism: 'Cori cycling recycles carbon while liver bears the ATP cost', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Lactate versus workload', meaning: 'Transition toward anaerobic glycolytic contribution' },
    { clue: 'Glucose and ketones during prolonged exertion', meaning: 'Adequacy of hepatic fuel support and insulin availability' },
  ],
  treatment: [
    { logic: 'Match carbohydrate and hydration to intensity and duration', detail: 'Prolonged exercise depletes glycogen; short bursts rely more on phosphocreatine and glycolysis.' },
    { logic: 'Adjust glucose-lowering therapy around exercise', detail: 'Contraction-mediated uptake can cause hypoglycemia in insulin-treated patients.' },
  ],
  mnemonic: { hook: 'Seconds: PCr; sprints: glycogen; distance: oxidation', expansion: ['Epinephrine is rapid; cortisol is sustained'] },
  trap: {
    questionCategory: 'GLUT4 regulation',
    wrongInstinct: 'Skeletal muscle can recruit GLUT4 only through insulin',
    rightAnswer: 'Muscle contraction independently recruits GLUT4, and its effect adds to insulin',
    why: 'This explains glucose uptake during exercise even when insulin is low.',
  },
  quiz: {
    stem: 'Which fuel system predominates during the first few seconds of maximal exercise?',
    options: ['Hepatic gluconeogenesis', 'Adipose β-oxidation', 'Stored ATP and phosphocreatine', 'Ketone-body oxidation'],
    answer: 2,
    explanation: 'Stored ATP and phosphocreatine provide the fastest energy before glycolytic and oxidative pathways ramp up.',
  },
});

export const metabolicJunctionPoints = mfnLecture({
  id: 'metabolic-junction-points',
  title: 'Central Junctions of Fuel Metabolism',
  source,
  tags: [
    { kind: 'mechanism', label: 'G6P, pyruvate & acetyl-CoA' },
    { kind: 'exam', label: 'Irreversible carbon flow' },
  ],
  highYield: [
    '**Glucose-6-phosphate** is the carbohydrate junction: it can enter glycolysis, glycogen, the pentose phosphate pathway, or—in liver/kidney—be dephosphorylated to free glucose.',
    '**Pyruvate** connects carbohydrate with lactate, alanine, oxaloacetate, and acetyl-CoA. Pyruvate carboxylase is reversible in carbon logic toward glucose; PDH is not.',
    '**Acetyl-CoA** integrates carbohydrate, fatty-acid, and ketogenic amino-acid carbon and feeds the TCA cycle, fatty acids, cholesterol, or ketone bodies.',
    'Humans cannot convert acetyl-CoA to net glucose because PDH is irreversible and acetyl carbons are lost during TCA cycling; pathway direction also depends on compartment and hormonal state.',
  ],
  chainTitle: 'Three junctions route carbon by cellular need',
  steps: [
    { label: 'G6P selects oxidation, storage, PPP, or blood-glucose release' },
    { label: 'Pyruvate selects lactate, alanine, OAA, or acetyl-CoA' },
    { label: 'Acetyl-CoA selects TCA, lipid, cholesterol, or ketones', emphasis: 'key' },
    { label: 'Hormones, energy state, and compartment choose the route' },
  ],
  examFindings: [
    { sign: 'Alanine and lactate both converge on pyruvate', mechanism: 'ALT and LDH connect amino-acid and anaerobic carbon to the pyruvate junction', significance: 'key' },
    { sign: 'Acetyl-CoA cannot rescue net glucose during fasting', mechanism: 'No net human pathway from acetyl-CoA to oxaloacetate/glucose', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Glucose, lactate, alanine, ketones, and free fatty acids together', meaning: 'Shows which metabolic junctions are receiving and releasing carbon' },
    { clue: 'Acylcarnitine and organic-acid profile', meaning: 'Localizes abnormal carbon flow around mitochondrial junctions' },
  ],
  treatment: [
    { logic: 'Trace carbon before choosing a metabolic intervention', detail: 'A substrate can support ATP without necessarily supporting net glucose synthesis.' },
  ],
  mnemonic: { hook: 'G6P chooses carbohydrate; pyruvate connects carb and amino acid; acetyl-CoA unites all fuels', expansion: ['Acetyl-CoA cannot go back to net glucose'] },
  trap: {
    questionCategory: 'Carbon tracing',
    wrongInstinct: 'Any substrate that becomes acetyl-CoA is glucogenic',
    rightAnswer: 'Acetyl-CoA is oxidizable and ketogenic/lipogenic, but it does not produce net glucose in humans',
    why: 'Entry into TCA does not equal net oxaloacetate gain.',
  },
  quiz: {
    stem: 'Which central metabolite can enter fatty-acid synthesis, cholesterol synthesis, ketogenesis, or the TCA cycle but cannot yield net glucose?',
    options: ['Glucose-6-phosphate', 'Pyruvate', 'Oxaloacetate', 'Acetyl-CoA'],
    answer: 3,
    explanation: 'Acetyl-CoA is a central oxidative and biosynthetic junction, but humans cannot convert it to net glucose.',
  },
});
