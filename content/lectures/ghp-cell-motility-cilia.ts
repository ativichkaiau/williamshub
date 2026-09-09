import type { Lecture } from '../../lib/types';

export const ghpCellMotilityCilia: Lecture = {
  id: 'ghp-cell-motility-cilia',
  title: 'Cell Motility: Amoeboid Movement & Cilia',
  system: 'physiology',
  source: 'Ch 2 — The Cell and Its Functions',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 2 The Cell and Its Functions' },
    { kind: 'mechanism', label: 'Dynein sliding → bending' },
    { kind: 'exam', label: 'Kartagener syndrome' },
  ],

  highYield: [
    '**Amoeboid movement = crawling by pseudopod extension.** A chemotactic signal binds receptors at the leading edge → **actin polymerises (G-actin to F-actin) under the membrane** and pushes the pseudopod forward → the pseudopod **attaches to surrounding tissue** → **myosin-driven contraction pulls the cell body forward** and the rear detaches. It needs **ATP and Ca²⁺**. The cells that do it: **neutrophils and macrophages** above all, plus fibroblasts in wound healing and migrating embryonic cells.',
    '**Chemotaxis = directed migration along a chemical gradient**, and it works because **more receptors are occupied on the side facing the source**, so actin polymerises preferentially there. Positive chemotaxins include **bacterial peptides, complement C5a, leukotriene B4, IL-8** and products of inflamed tissue.',
    '**Ciliary structure: the 9+2 axoneme** — **nine outer microtubule doublets around two central singlets**, the same arrangement as the sperm **flagellum**. It is anchored by a **basal body** below the surface, which is a **centriole-like 9 triplets (9+0)**. Respiratory epithelium carries roughly **10–20 cilia per cell**, each about **2–4 µm** long.',
    '**The mechanism sentence: dynein SLIDES, nexin converts sliding into BENDING.** ATP-powered **dynein arms** project from the **A tubule** of each doublet and walk along the **B tubule** of its neighbour, so adjacent doublets try to slide past each other. **Nexin links** and the anchoring basal body resist free sliding, and that constraint forces the axoneme to **bend**. Microtubules never shorten.',
    '**Power stroke vs recovery stroke.** The cilium beats **10–20 times per second**: a **rapid, stiff, whip-like power stroke** that drives fluid forward, then a **slow recovery stroke in which the cilium flexes close to the cell surface** so it drags almost no fluid backward. That **asymmetry is what produces net unidirectional flow** — in the airway, the **mucociliary escalator** moving mucus toward the pharynx; in the fallopian tube, the ovum toward the uterus.',
    '**Clinical anchor — Kartagener syndrome** (primary ciliary dyskinesia with situs inversus), caused by a **dynein arm defect**. The triad is **situs inversus + chronic sinusitis + bronchiectasis**, with **male infertility** because the sperm flagellum shares the same axoneme, and subfertility or ectopic pregnancy in women. Situs inversus occurs in only about **half** of patients because **embryonic nodal cilia normally establish left–right asymmetry** — lose them and laterality becomes **random**, not reversed.',
  ],

  mechanism: {
    title: 'Dynein slides the doublets; nexin turns sliding into a bend',
    steps: [
      { id: 's1', label: 'ATP binds dynein arms projecting from the A tubule', emphasis: 'key' },
      { id: 's2', label: 'Dynein walks along the neighbouring B tubule → doublets try to SLIDE' },
      { id: 's3', label: 'Nexin links and the basal body resist free sliding', emphasis: 'key' },
      { id: 's4', label: 'Constrained sliding forces the axoneme to BEND', emphasis: 'key' },
      { id: 's5', label: 'Stiff power stroke moves fluid; flexed recovery stroke minimises backflow', emphasis: 'key' },
      { id: 's6', label: 'Dynein arms absent → immotile cilia → Kartagener syndrome', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cilia beat 10–20 times per second with a stiff power stroke and a flexed recovery stroke', mechanism: 'Stroke asymmetry means more fluid is moved forward than back, giving net unidirectional flow', significance: 'key' },
    { sign: 'Respiratory cilia beat toward the pharynx', mechanism: 'The mucociliary escalator clears mucus and trapped particulate upward for swallowing', significance: 'key' },
    { sign: 'A neutrophil migrates directly toward a bacterial focus', mechanism: 'Chemotaxis: C5a and bacterial peptides bind leading-edge receptors, so actin polymerises on that side', significance: 'key' },
    { sign: 'Kartagener syndrome: situs inversus with chronic sinusitis, bronchiectasis and male infertility', mechanism: 'A single dynein-arm defect disables airway cilia, embryonic nodal cilia and the sperm flagellum alike', significance: 'key' },
    { sign: 'Axoneme cross-section shows nine outer doublets around two central singlets', mechanism: 'The 9+2 pattern; the basal body anchoring it below is nine triplets (9+0)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Nine outer doublet microtubules surrounding two central singlets', meaning: 'Ciliary or flagellar axoneme, the 9+2 pattern' },
    { clue: 'ATPase arms projecting from the A tubule toward the neighbouring B tubule', meaning: 'Dynein — the motor that slides adjacent doublets' },
    { clue: 'Protein linking adjacent doublets so that sliding is converted into bending', meaning: 'Nexin' },
    { clue: 'Situs inversus with bronchiectasis, sinusitis and infertility', meaning: 'Kartagener syndrome — primary ciliary dyskinesia from a dynein arm defect' },
    { clue: 'Directed cell migration along a chemical gradient', meaning: 'Chemotaxis, as in a neutrophil following C5a' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Both engines here are the same physiological idea as muscle — a motor protein walking along a filament, with the movement decided by what is anchored. Compare dynein on microtubules with myosin on actin in [[ghp-sarcomere-sliding-filament]]. The actin machinery that extends a pseudopod is the same one that engulfs a bacterium in [[ghp-endocytosis-lysosomal-digestion]], and the organelle context is [[ghp-cell-organelles-functions]].' },
    { logic: 'Where it matters clinically', detail: 'The mucociliary escalator is the airway defence that antibiotics cannot replace: when it fails, retained secretions give recurrent infection and **bronchiectasis**. Effective beating also needs adequate airway surface liquid, which is why hydration and mucus rheology are therapeutic targets. Surface epithelial context: [[epithelial-surface-basement-membrane]].' },
  ],

  mnemonics: [
    { hook: 'Kartagener = Situs inversus, Sinusitis, Sterility, and Sacs of pus (bronchiectasis) — one broken dynein arm explains all four', expansion: ['Airway cilia → sinusitis and bronchiectasis', 'Nodal cilia → randomised laterality, so situs inversus in about half', 'Sperm flagellum → immotile sperm'] },
    { hook: 'Dynein Drives, Nexin Nails it — sliding becomes bending only because something holds on', expansion: ['9+2 in the cilium and flagellum', '9 triplets (9+0) in the basal body below', 'Microtubules slide, they never shorten'] },
  ],

  traps: [
    {
      questionCategory: 'What dynein actually does',
      wrongInstinct: 'Dynein shortens or contracts the microtubules, and that is what bends the cilium',
      rightAnswer: 'Dynein slides adjacent doublets past one another; nexin links resist, converting sliding into bending',
      why: 'Microtubule length is fixed — the bend is geometry imposed on constrained sliding, exactly as in the sliding-filament model of muscle.',
    },
    {
      questionCategory: 'Why situs inversus occurs in only half of Kartagener patients',
      wrongInstinct: 'The dynein defect actively reverses the position of the organs',
      rightAnswer: 'Embryonic nodal cilia normally set left–right asymmetry; without them laterality is RANDOM, so roughly half end up inverted',
      why: 'Removing the determinant randomises the outcome rather than flipping it — a 50/50 coin toss, not a mirror image.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'What is the immediate mechanical consequence of dynein arm activity in a normally functioning cilium?',
      options: [
        { id: 'a', text: 'Shortening of the outer doublet microtubules' },
        { id: 'b', text: 'Sliding of adjacent doublets, which nexin links convert into bending' },
        { id: 'c', text: 'Depolymerisation of the two central singlet microtubules' },
        { id: 'd', text: 'Rotation of the basal body beneath the cell surface' },
      ],
      answerId: 'b',
      explanation: 'Dynein arms on the A tubule walk along the neighbouring B tubule, generating sliding force. Because nexin links and the basal body prevent the doublets from sliding freely apart, the axoneme bends instead. Microtubules do not shorten during the beat.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 24-year-old man has lifelong chronic sinusitis, bronchiectasis on CT, dextrocardia, and infertility with immotile sperm on semen analysis. What is the underlying defect?',
      options: [
        { id: 'a', text: 'Defective CFTR chloride channel' },
        { id: 'b', text: 'Absent dynein arms in the ciliary and flagellar axoneme' },
        { id: 'c', text: 'Failure of phagolysosome fusion in neutrophils' },
        { id: 'd', text: 'Deficient NADPH oxidase in phagocytes' },
      ],
      answerId: 'b',
      explanation: 'This is Kartagener syndrome. One dynein-arm defect disables airway cilia (sinusitis, bronchiectasis), embryonic nodal cilia (randomised laterality, hence dextrocardia) and the sperm flagellum, which shares the 9+2 axoneme. Cystic fibrosis causes sinusitis, bronchiectasis and infertility too, but from absent vasa deferentia, and it does not cause situs inversus.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Why does ciliary beating produce net movement of mucus in one direction rather than simply oscillating it back and forth?',
      options: [
        { id: 'a', text: 'The power and recovery strokes are asymmetric — the cilium is stiff and extended forward, then flexes close to the cell surface on the way back' },
        { id: 'b', text: 'The power stroke is much slower than the recovery stroke, so it has more time to act' },
        { id: 'c', text: 'Cilia on adjacent cells beat in random directions that cancel out' },
        { id: 'd', text: 'Mucus is moved by pressure gradients rather than by cilia' },
      ],
      answerId: 'a',
      explanation: 'The forward stroke is rapid and rigid so it engages a large volume of fluid; the return stroke is slow with the cilium bent near the surface so it drags very little back. That asymmetry, repeated 10 to 20 times per second and coordinated between cells, gives the unidirectional mucociliary escalator.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCellMotilityCilia;
