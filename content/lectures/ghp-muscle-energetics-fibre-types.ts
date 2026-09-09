import type { Lecture } from '../../lib/types';

export const ghpMuscleEnergeticsFibreTypes: Lecture = {
  id: 'ghp-muscle-energetics-fibre-types',
  title: 'Muscle Energetics & Fibre Types',
  system: 'msk',
  source: 'Ch 6 — Contraction of Skeletal Muscle',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Musculoskeletal' },
    { kind: 'lecture', label: 'Ch 6 Skeletal Muscle Contraction' },
    { kind: 'mechanism', label: 'Three energy systems' },
    { kind: 'exam', label: 'Fast vs slow fibres' },
  ],

  highYield: [
    '**Stored ATP lasts only 1–2 seconds of maximal effort**, so muscle runs three refuelling systems in strict order of **speed first, capacity last**. **(1) Phosphocreatine system:** creatine kinase transfers a high-energy phosphate — **phosphocreatine + ADP → ATP + creatine** — instantly and anaerobically; stores are ~**5× those of ATP** and together they cover about **8–10 seconds** (a shot put, a lift, the start of a sprint). **(2) Glycogen–lactic acid (anaerobic glycolysis):** only **~2 ATP per glucose** but formed about **2.5× faster than oxidative metabolism**, sustaining maximal effort for roughly **1.3–1.6 minutes** at the cost of **lactate accumulation**. **(3) Oxidative (aerobic) metabolism:** glucose, **fatty acids** and amino acids to CO₂ and water — the slowest to deliver but effectively **unlimited in duration**, and the system of all prolonged activity.',
    '**Three ATP sinks inside the fibre, and contraction is not the only one.** ATP is spent on **(a) the cross-bridge walk-along cycle** (binding causes detachment; hydrolysis re-cocks the head), **(b) the SERCA Ca²⁺-ATPase pumping Ca²⁺ back into the sarcoplasmic reticulum**, and **(c) the Na⁺/K⁺-ATPase restoring ionic gradients after each action potential. Relaxation therefore costs energy too** — the physiological reason ischaemic or ATP-depleted muscle stiffens rather than goes limp.',
    '**Efficiency is at best ~25%** — the other 75% appears as **heat** (which is why shivering is an effective thermogenic strategy). Efficiency is maximal at **moderate shortening velocity**; move too slowly and maintenance heat dominates, too fast and internal viscous friction wastes energy.',
    '**Slow (Type I, red, oxidative) fibres:** **smaller fibres** driven by **smaller motor neurons**, dense **capillary networks**, **many mitochondria**, high **myoglobin** (hence red) and high oxidative enzyme content. They generate **less peak force but resist fatigue**, and dominate **postural and endurance muscle (soleus)**.',
    '**Fast (Type II, white, glycolytic) fibres:** **large fibres** with **large motor neurons**, an **extensive sarcoplasmic reticulum for rapid Ca²⁺ release**, **high myosin ATPase** (hence high Vmax), large stores of **glycolytic enzymes**, but **fewer mitochondria, less myoglobin and sparser capillaries**. They produce **great power briefly and fatigue fast** — sprinting, jumping, ocular muscle.',
    '**Fatigue is mostly metabolic and circulatory, not neuromuscular.** The main contributors are **glycogen depletion, accumulated Pi and H⁺ interfering with cross-bridge cycling and Ca²⁺ release, and impaired sarcoplasmic reticulum Ca²⁺ handling**. **Blood flow is the sharpest variable: a muscle contracting under ischaemia fatigues almost completely within 1–2 minutes**, because a sustained contraction compresses its own vessels. Failure of transmission at the neuromuscular junction is a **minor** contributor in healthy muscle — invoke it for myasthenia, not for exercise.',
    '**Hypertrophy is an increase in fibre SIZE, not fibre number.** Near-maximal, **forceful** contractions performed only a few times a day for weeks increase synthesis of **actin and myosin** and add myofibrils; low-force endurance work builds **mitochondria, capillaries and oxidative enzymes** instead. Fibre splitting (hyperplasia) contributes little. **Atrophy** is the mirror image, from **disuse, immobilisation, denervation or malnutrition**.',
    '**Denervation and remodelling.** A denervated muscle atrophies fast, develops **denervation supersensitivity (ACh receptors spread over the whole fibre, producing fibrillation potentials)**, and if reinnervation does not occur within roughly **3 months** recovery declines, with irreversible replacement by **fibrous and fatty tissue after 1–2 years**. Muscle also **remodels its sarcomere number to its working length** — immobilised **lengthened**, it **adds** sarcomeres in series; immobilised **shortened**, it **removes** them, which is how a fixed **contracture** forms.',
  ],

  mechanism: {
    title: 'Fast fuel first, then capacity — and the fibre type decides which is stocked',
    steps: [
      { id: 's1', label: 'Stored ATP powers 1–2 s of maximal contraction' },
      { id: 's2', label: 'Phosphocreatine regenerates ATP instantly → total ~8–10 s', emphasis: 'key' },
      { id: 's3', label: 'Anaerobic glycolysis: 2 ATP/glucose but fast → ~1.3–1.6 min, lactate rises', emphasis: 'key' },
      { id: 's4', label: 'Oxidative metabolism: slow delivery, unlimited duration, uses fat and glucose', emphasis: 'key' },
      { id: 's5', label: 'ATP also spent on SERCA Ca²⁺ reuptake and Na⁺/K⁺-ATPase → relaxation costs energy' },
      { id: 's6', label: 'Fast glycolytic fibres stock steps 2–3; slow oxidative fibres stock step 4', emphasis: 'key' },
      { id: 's7', label: 'Fatigue = glycogen depletion + Pi/H⁺ + impaired Ca²⁺ handling, worst with ischaemia' },
      { id: 's8', label: 'Forceful training → bigger fibres (hypertrophy); disuse or denervation → atrophy' },
    ],
  },

  examFindings: [
    { sign: 'Maximal sprint power can be sustained for only about 8 to 10 seconds', mechanism: 'Exhaustion of stored ATP plus the phosphocreatine reserve', significance: 'key' },
    { sign: 'Blood lactate rises steeply during a 60 to 90 second maximal effort', mechanism: 'Anaerobic glycolysis is the dominant supply over that window', significance: 'key' },
    { sign: 'Marathon running is fuelled largely by fat oxidation', mechanism: 'Only the oxidative system has effectively unlimited capacity', significance: 'key' },
    { sign: 'A muscle contracting with its blood supply occluded fatigues within 1 to 2 minutes', mechanism: 'Loss of oxygen and substrate delivery and of metabolite washout', significance: 'key' },
    { sign: 'Soleus is dark red and fatigue-resistant; ocular muscles are pale and rapid', mechanism: 'Slow oxidative (high myoglobin, many mitochondria) versus fast glycolytic fibres', significance: 'key' },
    { sign: 'Muscle bulk increases after weeks of heavy resistance training', mechanism: 'Hypertrophy — increased actin and myosin synthesis enlarging existing fibres', significance: 'supportive' },
    { sign: 'Fibrillation potentials on EMG two to three weeks after nerve injury', mechanism: 'Denervation supersensitivity from ACh receptors spreading along the fibre', significance: 'supportive' },
    { sign: 'Fixed joint contracture after prolonged immobilisation in flexion', mechanism: 'Remodelling removes sarcomeres in series to match the shortened working length', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Instantly available anaerobic phosphate donor for ATP resynthesis', meaning: 'Phosphocreatine, via creatine kinase' },
    { clue: 'System providing about 2 ATP per glucose but 2.5 times faster than oxidation', meaning: 'Anaerobic glycolysis (glycogen–lactic acid system)' },
    { clue: 'Only system with effectively unlimited duration', meaning: 'Oxidative metabolism, using fatty acids as well as glucose' },
    { clue: 'Pump that consumes ATP to end contraction', meaning: 'The sarcoplasmic reticulum Ca²⁺-ATPase (SERCA)' },
    { clue: 'Fibre with high myoglobin, many mitochondria and fatigue resistance', meaning: 'Slow (Type I) oxidative fibre' },
    { clue: 'Fibre with extensive sarcoplasmic reticulum and high myosin ATPase', meaning: 'Fast (Type II) glycolytic fibre' },
    { clue: 'Increase in muscle mass without an increase in fibre number', meaning: 'Hypertrophy (fibre enlargement, not hyperplasia)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The three energy systems explain the whole clinical spectrum from McArdle disease (blocked glycogenolysis, so a second-wind on fat oxidation) to rhabdomyolysis after ATP-depleting exertion, and the fibre-type split predicts which muscles waste first in critical illness and steroid myopathy. The upstream metabolism supplying these systems: [[glucose-transport-glycolysis]] and [[electron-transport-oxphos]]. The cross-bridge machine spending the ATP: [[ghp-sarcomere-sliding-filament]].' },
    { logic: 'Where it is examined', detail: 'Duration of effort is the discriminator: seconds means phosphocreatine, a minute or two means glycolysis, longer means oxidative. Fibre type also sets Vmax on the curve in [[ghp-length-tension-load-velocity]], and the same energetic logic drives calcium handling in [[ghp-excitation-contraction-coupling-skeletal]].' },
  ],

  mnemonics: [
    { hook: 'Seconds, a Minute, Forever — Phosphocreatine, Glycolysis, Oxidation', expansion: ['ATP alone 1–2 s', 'Plus phosphocreatine ~8–10 s', 'Glycolysis ~1.3–1.6 min', 'Oxidative unlimited'] },
    { hook: 'Slow = Red = Oxidative = Endurance; Fast = White = Glycolytic = Power', expansion: ['Red for myoglobin and mitochondria', 'White for sarcoplasmic reticulum and glycolytic enzymes'] },
    { hook: 'Hypertrophy makes fibres BIGGER, not MORE', expansion: ['Heavy near-maximal loads build contractile protein', 'Endurance builds mitochondria and capillaries'] },
  ],

  traps: [
    {
      questionCategory: 'What ATP is spent on in muscle',
      wrongInstinct: 'ATP powers contraction, so relaxation is the free, passive part of the cycle',
      rightAnswer: 'Relaxation is ATP-dependent: SERCA must pump calcium back into the sarcoplasmic reticulum and myosin needs ATP to detach',
      why: 'Energy failure locks muscle in contracture rather than releasing it — the same logic as rigor mortis.',
    },
    {
      questionCategory: 'Site of exercise fatigue',
      wrongInstinct: 'Fatigue during heavy exercise occurs because the neuromuscular junction fails to transmit',
      rightAnswer: 'Fatigue is predominantly intramuscular — glycogen depletion, accumulated Pi and H⁺, impaired calcium handling, and inadequate blood flow',
      why: 'Junctional transmission failure is a minor factor in healthy muscle; it is the mechanism of myasthenia, not of a hard training set.',
    },
    {
      questionCategory: 'Basis of training-induced growth',
      wrongInstinct: 'Strength training increases the number of muscle fibres',
      rightAnswer: 'It increases the SIZE of existing fibres by adding contractile protein; fibre splitting contributes very little',
      why: 'Hypertrophy versus hyperplasia is a standard single-word discriminator, and the stimulus is force, not repetition count.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A sprinter accelerates maximally for about 8 seconds. Which system supplies most of the ATP used over that interval?',
      options: [
        { id: 'a', text: 'Oxidative phosphorylation of fatty acids' },
        { id: 'b', text: 'The phosphocreatine–creatine system' },
        { id: 'c', text: 'Anaerobic glycolysis with lactate formation' },
        { id: 'd', text: 'Direct hydrolysis of stored ATP alone' },
      ],
      answerId: 'b',
      explanation: 'Stored ATP alone covers only 1 to 2 seconds. Phosphocreatine, held at roughly five times the ATP concentration, regenerates ATP essentially instantaneously through creatine kinase and extends maximal effort to about 8 to 10 seconds. Glycolysis becomes dominant over the following minute or so, and fat oxidation only over much longer durations.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Compared with fast glycolytic fibres, slow oxidative fibres characteristically have:',
      options: [
        { id: 'a', text: 'Larger diameter, more extensive sarcoplasmic reticulum and higher myosin ATPase' },
        { id: 'b', text: 'More mitochondria, more myoglobin, denser capillaries and greater fatigue resistance' },
        { id: 'c', text: 'Higher peak power output and faster maximal shortening velocity' },
        { id: 'd', text: 'Larger motor neurons and fewer capillaries' },
      ],
      answerId: 'b',
      explanation: 'Slow Type I fibres are built for sustained aerobic work: small fibres and small motor neurons, abundant mitochondria and oxidative enzymes, high myoglobin giving them their red colour, and a rich capillary supply. The features in the other options — large diameter, extensive sarcoplasmic reticulum, high myosin ATPase, high peak power, large motor neurons — all belong to fast Type II glycolytic fibres.',
      tests: 'lecture',
    },
    {
      id: 'q3',
      stem: 'A limb muscle is immobilised in a cast in a shortened position for eight weeks. Which change is expected?',
      options: [
        { id: 'a', text: 'Addition of sarcomeres in series, lengthening the muscle' },
        { id: 'b', text: 'Loss of sarcomeres in series, predisposing to contracture' },
        { id: 'c', text: 'Hyperplasia with an increased number of fibres' },
        { id: 'd', text: 'Conversion of all fibres to the slow oxidative type with preserved bulk' },
      ],
      answerId: 'b',
      explanation: 'Muscle continuously remodels its sarcomere number to match its habitual working length. Held short, it removes sarcomeres in series so that the remaining sarcomeres sit near optimal overlap at that shorter length — which fixes the shortening and produces contracture. Immobilisation in a lengthened position does the opposite. Hyperplasia is not a significant human response, and disuse causes atrophy rather than preserved bulk.',
      tests: 'exam',
    },
  ],
};

export default ghpMuscleEnergeticsFibreTypes;
