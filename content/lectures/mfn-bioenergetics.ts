import { mfnLecture } from './mfn-shared';

const source = 'L2 — Bioenergetics';

export const freeEnergyAtpCoupling = mfnLecture({
  id: 'free-energy-atp-coupling',
  title: 'Free Energy, ATP & Reaction Coupling',
  source,
  tags: [
    { kind: 'mechanism', label: 'ΔG and coupled reactions' },
    { kind: 'exam', label: 'Spontaneity versus rate' },
  ],
  highYield: [
    '**ΔG < 0 is exergonic/spontaneous; ΔG > 0 is endergonic; ΔG = 0 at equilibrium.** ΔG predicts direction, not reaction speed.',
    'Actual ΔG depends on standard free energy and the cellular reactant/product ratio; changing concentrations can reverse a reaction.',
    'ATP hydrolysis has a strongly negative ΔG and drives unfavorable reactions when the reactions are **mechanistically coupled**.',
    'ATP is produced by substrate-level phosphorylation and oxidative phosphorylation, then spent on chemical, transport, and mechanical work.',
  ],
  chainTitle: 'Coupling makes an unfavorable process proceed',
  steps: [
    { label: 'Endergonic cellular reaction has positive ΔG' },
    { label: 'ATP hydrolysis supplies a larger negative ΔG', emphasis: 'key' },
    { label: 'Shared intermediate couples the reactions' },
    { label: 'Sum of ΔG values becomes negative' },
  ],
  examFindings: [
    { sign: 'Negative ΔG but slow uncatalyzed reaction', mechanism: 'Thermodynamic favorability does not determine activation energy', significance: 'key' },
    { sign: 'Reaction at equilibrium', mechanism: 'Forward and reverse fluxes are equal and ΔG = 0', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Reactant/product concentration ratio', meaning: 'Determines actual cellular ΔG' },
    { clue: 'ATP/ADP ratio', meaning: 'Cellular energy state' },
  ],
  treatment: [
    { logic: 'Separate thermodynamics from kinetics', detail: 'Enzymes accelerate approach to equilibrium but do not change ΔG or equilibrium position.' },
  ],
  mnemonic: { hook: 'Negative goes; zero balances; positive needs coupling', expansion: ['Enzymes change speed, never ΔG'] },
  trap: {
    questionCategory: 'Thermodynamics versus kinetics',
    wrongInstinct: 'A negative ΔG means the reaction must be fast',
    rightAnswer: 'A negative ΔG makes a reaction thermodynamically favorable, but the activation barrier can still make it slow',
    why: 'ΔG predicts direction; activation energy determines rate.',
  },
  quiz: {
    stem: 'An enzyme catalyzes a reaction with a negative ΔG. What does the enzyme change?',
    options: ['The sign of ΔG', 'The equilibrium constant', 'The activation energy', 'The energy of the products'],
    answer: 2,
    explanation: 'Enzymes lower activation energy and increase rate without changing ΔG or the equilibrium constant.',
  },
});

export const pdhTcaCycle = mfnLecture({
  id: 'pdh-tca-cycle',
  title: 'Pyruvate Dehydrogenase & the TCA Cycle',
  source,
  tags: [
    { kind: 'mechanism', label: 'Acetyl-CoA oxidation' },
    { kind: 'disease', label: 'PDH deficiency' },
  ],
  highYield: [
    'The mitochondrial **PDH complex irreversibly converts pyruvate to acetyl-CoA**, producing CO₂ and NADH and linking glycolysis to the TCA cycle.',
    'PDH cofactors are **TPP (B1), lipoate, CoA (B5), FAD (B2), and NAD⁺ (B3)**; arsenic inhibits lipoate-dependent enzymes.',
    'One TCA turn per acetyl-CoA yields **3 NADH, 1 FADH₂, 1 GTP, and 2 CO₂** while regenerating oxaloacetate.',
    'The irreversible control points are citrate synthase, isocitrate dehydrogenase, and α-ketoglutarate dehydrogenase; high ATP/NADH slows the cycle.',
  ],
  chainTitle: 'Pyruvate carbon → reducing equivalents',
  steps: [
    { label: 'Pyruvate enters mitochondrial matrix' },
    { label: 'PDH → acetyl-CoA + NADH + CO₂', emphasis: 'key' },
    { label: 'Acetyl-CoA condenses with oxaloacetate' },
    { label: 'TCA regenerates oxaloacetate + NADH/FADH₂/GTP' },
  ],
  examFindings: [
    { sign: 'Lactic acidosis with neurologic dysfunction after carbohydrate load', mechanism: 'PDH deficiency diverts pyruvate to lactate', significance: 'key' },
    { sign: 'Improvement with ketogenic diet', mechanism: 'Ketones bypass the blocked pyruvate-to-acetyl-CoA step', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Elevated lactate and pyruvate', meaning: 'Impaired pyruvate oxidation' },
    { clue: 'Low PDH enzyme activity or pathogenic variant', meaning: 'Confirms PDH complex disorder' },
  ],
  treatment: [
    { logic: 'Reduce carbohydrate load and provide ketogenic fuel in PDH deficiency', detail: 'Thiamine-responsive variants may improve with high-dose thiamine.' },
  ],
  mnemonic: { hook: 'Tender Loving Care For Nancy', expansion: ['TPP, Lipoate, CoA, FAD, NAD⁺'] },
  trap: {
    questionCategory: 'TCA oxygen dependence',
    wrongInstinct: 'The TCA cycle directly consumes molecular oxygen',
    rightAnswer: 'TCA does not directly use O₂, but it stops without O₂ because NADH/FADH₂ cannot be reoxidized by the ETC',
    why: 'Its oxygen dependence is indirect through regeneration of oxidized cofactors.',
  },
  quiz: {
    stem: 'Which set correctly lists the products of one TCA-cycle turn per acetyl-CoA?',
    options: ['2 NADH, 2 FADH₂, 1 ATP', '3 NADH, 1 FADH₂, 1 GTP', '1 NADH, 3 FADH₂, 2 GTP', '4 NADH, 0 FADH₂, 2 ATP'],
    answer: 1,
    explanation: 'Each acetyl-CoA yields 3 NADH, 1 FADH₂, 1 GTP, and 2 CO₂.',
  },
});

export const electronTransportOxphos = mfnLecture({
  id: 'electron-transport-oxphos',
  title: 'Electron Transport & Oxidative Phosphorylation',
  source,
  tags: [
    { kind: 'mechanism', label: 'Chemiosmotic coupling' },
    { kind: 'exam', label: 'Complexes I–V' },
  ],
  highYield: [
    'NADH donates electrons to **complex I**; FADH₂ enters through **complex II**. CoQ carries electrons to III, cytochrome c carries them to IV, and **O₂ is the terminal acceptor**.',
    '**Complexes I, III, and IV pump protons; complex II does not.** The resulting proton-motive force stores the energy released by electron transfer.',
    'Protons return through **complex V (F₀F₁ ATP synthase)**, driving ATP synthesis from ADP + Pi.',
    'NADH produces more ATP than FADH₂ because NADH enters before complex I, whereas FADH₂ bypasses the first proton pump.',
  ],
  chainTitle: 'Electron flow → proton gradient → ATP',
  steps: [
    { label: 'NADH → I or FADH₂ → II' },
    { label: 'CoQ → III → cytochrome c → IV → O₂' },
    { label: 'I, III, IV pump H⁺ to intermembrane space', emphasis: 'key' },
    { label: 'H⁺ returns through V → ATP' },
  ],
  examFindings: [
    { sign: 'No proton pumping at complex II', mechanism: 'Succinate dehydrogenase transfers electrons to CoQ without pumping H⁺', significance: 'key' },
    { sign: 'Higher P/O ratio for NADH than FADH₂', mechanism: 'NADH uses one additional proton-pumping complex', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Oxygen-consumption rate', meaning: 'Overall respiratory-chain electron flux' },
    { clue: 'Mitochondrial membrane potential', meaning: 'Integrity of the proton gradient' },
  ],
  treatment: [
    { logic: 'Trace electron entry before predicting ATP yield', detail: 'Bypassing complex I lowers the number of pumped protons.' },
  ],
  mnemonic: { hook: 'One, Three, Four pump; Two does not', expansion: ['Five lets protons flow back to make ATP'] },
  trap: {
    questionCategory: 'Electron carriers versus complexes',
    wrongInstinct: 'CoQ and cytochrome c pump protons',
    rightAnswer: 'CoQ and cytochrome c are mobile electron carriers; complexes I, III, and IV are the proton pumps',
    why: 'Mobility and proton pumping are separate roles.',
  },
  quiz: {
    stem: 'Which respiratory-chain complex transfers electrons to CoQ without pumping protons?',
    options: ['Complex I', 'Complex II', 'Complex III', 'Complex IV'],
    answer: 1,
    explanation: 'Complex II (succinate dehydrogenase) feeds FADH₂-derived electrons to CoQ but does not pump H⁺.',
  },
});

export const etcInhibitorsUncouplingShuttles = mfnLecture({
  id: 'etc-inhibitors-uncoupling-shuttles',
  title: 'ETC Inhibitors, Uncoupling & NADH Shuttles',
  source,
  tags: [
    { kind: 'mechanism', label: 'Respiratory poisons' },
    { kind: 'disease', label: 'Cyanide toxicity' },
  ],
  highYield: [
    'Classic inhibitors: **rotenone/amytal—complex I; antimycin A—III; cyanide, CO, azide—IV; oligomycin—ATP synthase F₀**.',
    'Blocking electron transfer stops downstream oxygen consumption and ATP synthesis; carriers before the block become reduced and those after it oxidized.',
    '**Uncouplers dissipate the proton gradient**: electron transport and O₂ use continue or rise, ATP falls, and heat production rises. UCP1 performs physiologic uncoupling in brown fat.',
    'Cytosolic NADH enters indirectly: the **malate–aspartate shuttle** preserves NADH yield; the **glycerol-3-phosphate shuttle** transfers electrons to FAD and yields less ATP.',
  ],
  chainTitle: 'Different lesions, different respiration patterns',
  steps: [
    { label: 'ETC inhibitor blocks electron flow' },
    { label: 'O₂ consumption and ATP synthesis fall', emphasis: 'danger' },
    { label: 'Uncoupler instead leaks H⁺ across inner membrane' },
    { label: 'O₂ use rises while ATP falls and heat rises', emphasis: 'key' },
  ],
  examFindings: [
    { sign: 'Severe lactic acidosis with high venous O₂ after smoke/toxin exposure', mechanism: 'Cyanide blocks complex IV, preventing tissue oxygen use', significance: 'key' },
    { sign: 'Hyperthermia with increased O₂ consumption and low ATP', mechanism: 'Oxidative phosphorylation is uncoupled', significance: 'key' },
  ],
  investigations: [
    { clue: 'High lactate with unusually high venous oxygen saturation', meaning: 'Histotoxic hypoxia from blocked cellular respiration' },
    { clue: 'Heat production despite low ATP generation', meaning: 'Proton-gradient uncoupling' },
  ],
  treatment: [
    { logic: 'Treat suspected cyanide immediately', detail: 'Hydroxocobalamin binds cyanide; do not wait for confirmatory testing in a compatible severe exposure.' },
    { logic: 'Support cooling and eliminate the uncoupling agent' },
  ],
  mnemonic: { hook: 'Rotenone 1, Antimycin 3, Cyanide 4, Oligomycin 5', expansion: ['Uncouplers: oxygen up, ATP down, heat up'] },
  trap: {
    questionCategory: 'Inhibitor versus uncoupler',
    wrongInstinct: 'Both decrease oxygen consumption',
    rightAnswer: 'ETC inhibitors decrease O₂ use; uncouplers generally increase O₂ use while reducing ATP production',
    why: 'An uncoupler removes back-pressure from the proton gradient rather than blocking electron flow.',
  },
  quiz: {
    stem: 'A mitochondrial toxin increases oxygen consumption and heat production while decreasing ATP. What is its action?',
    options: ['Complex I inhibition', 'Complex IV inhibition', 'ATP/ADP translocase inhibition', 'Uncoupling of the proton gradient'],
    answer: 3,
    explanation: 'Uncoupling allows protons to bypass ATP synthase, so respiration accelerates but energy is released as heat.',
  },
});

export const tcaAmphibolicAnaplerosis = mfnLecture({
  id: 'tca-amphibolic-anaplerosis',
  title: 'TCA Cycle as an Amphibolic & Anaplerotic Hub',
  source,
  tags: [
    { kind: 'mechanism', label: 'Cataplerosis and anaplerosis' },
    { kind: 'exam', label: 'Pyruvate carboxylase' },
  ],
  highYield: [
    'The TCA cycle is **amphibolic**: it oxidizes acetyl-CoA for energy while supplying intermediates for glucose, fatty acids, amino acids, nucleotides, and heme.',
    '**Citrate** exports acetyl units for fatty-acid/sterol synthesis; α-ketoglutarate and oxaloacetate supply amino acids; succinyl-CoA supports heme synthesis; malate/OAA support gluconeogenesis.',
    'Withdrawal of intermediates is **cataplerosis**. Replenishment is **anaplerosis**, required to keep oxidative TCA flux running.',
    'The major anaplerotic reaction is mitochondrial **pyruvate carboxylase: pyruvate + CO₂ + ATP → oxaloacetate**; it requires biotin and is activated by acetyl-CoA.',
  ],
  chainTitle: 'TCA intermediates leave for synthesis and must be replaced',
  steps: [
    { label: 'Acetyl-CoA enters the TCA cycle' },
    { label: 'Intermediates leave for biosynthesis (cataplerosis)' },
    { label: 'Pyruvate carboxylase replenishes oxaloacetate', emphasis: 'key' },
    { label: 'Restored intermediates sustain oxidation and biosynthesis' },
  ],
  examFindings: [
    { sign: 'High acetyl-CoA activates pyruvate carboxylase', mechanism: 'Signals the need for oxaloacetate to support TCA flux or gluconeogenesis', significance: 'key' },
    { sign: 'Biotin deficiency impairs anaplerosis', mechanism: 'Pyruvate carboxylase is a biotin-dependent carboxylase', significance: 'supportive' },
  ],
  investigations: [
    { clue: 'Lactate, pyruvate, and TCA organic-acid pattern', meaning: 'Suggests impaired pyruvate carboxylation or mitochondrial flux' },
    { clue: 'Enzyme activity or molecular testing', meaning: 'Confirms a suspected pyruvate-carboxylase disorder' },
  ],
  treatment: [
    { logic: 'Preserve anaplerotic substrate when TCA intermediates are being withdrawn', detail: 'Oxaloacetate availability can limit acetyl-CoA oxidation despite abundant fuel.' },
  ],
  mnemonic: { hook: 'A-na-PLE-rosis adds to the pool; cata-PLE-rosis cuts from it', expansion: ['Pyruvate carboxylase fills OAA'] },
  trap: {
    questionCategory: 'Acetyl-CoA entry into TCA',
    wrongInstinct: 'Abundant acetyl-CoA guarantees rapid TCA oxidation',
    rightAnswer: 'Acetyl-CoA oxidation also requires enough oxaloacetate and other TCA intermediates',
    why: 'During fasting, oxaloacetate withdrawal for gluconeogenesis helps divert acetyl-CoA toward ketogenesis.',
  },
  quiz: {
    stem: 'Which reaction is the major anaplerotic source of oxaloacetate in human mitochondria?',
    options: ['Pyruvate to lactate', 'Pyruvate to acetyl-CoA', 'Pyruvate to oxaloacetate', 'Oxaloacetate to phosphoenolpyruvate'],
    answer: 2,
    explanation: 'Biotin-dependent pyruvate carboxylase replenishes oxaloacetate and is activated by acetyl-CoA.',
  },
});
