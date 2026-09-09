import type { Lecture } from '../../lib/types';

export const ghpCellOrganellesFunctions: Lecture = {
  id: 'ghp-cell-organelles-functions',
  title: 'The Cell and Its Organelles',
  system: 'physiology',
  source: 'Ch 2 — The Cell and Its Functions',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 2 The Cell and Its Functions' },
    { kind: 'mechanism', label: 'Secretory pathway' },
    { kind: 'exam', label: 'Rough vs smooth ER' },
  ],

  highYield: [
    '**The cell membrane is a lipid bilayer ~7.5 nm thick that is mostly PROTEIN by mass** (roughly **55% protein, 25% phospholipid, 13% cholesterol**, the rest other lipid and carbohydrate). The **hydrophobic core** blocks water-soluble solutes (ions, glucose, urea) and lets **lipid-soluble** ones through freely (O₂, CO₂, alcohol, steroids). **Cholesterol sets fluidity**; **integral proteins** form channels, carriers, receptors and enzymes, while **peripheral proteins** sit mostly on the inner face. The **glycocalyx** is carbohydrate on the OUTER surface only — it carries a **negative charge**, mediates adhesion and immune recognition, and holds hormone receptors.',
    '**Rough ER exports; smooth ER synthesises.** **Rough ER** bears ribosomes on its cytosolic face and makes proteins destined for **secretion, membranes and lysosomes**, adding core glycosylation. **Smooth ER** has no ribosomes and handles **lipid and steroid synthesis, Ca²⁺ storage** (the sarcoplasmic reticulum is specialised smooth ER), **drug detoxification via cytochrome P450**, and **glucose-6-phosphatase** for the final step of glycogenolysis and gluconeogenesis.',
    '**Golgi = the post office.** Vesicles arrive at the **cis** face nearest the ER; cargo is modified (terminal glycosylation, sulfation), sorted, and shipped from the **trans** face as secretory vesicles or lysosomes. The routing stamp for lysosomal enzymes is **mannose-6-phosphate** — lose the tagging enzyme and hydrolases are secreted instead of delivered (**I-cell disease**).',
    '**Mitochondria** are double-membraned; the inner membrane folds into **cristae** carrying the electron transport chain and **ATP synthase**, while the **matrix** holds the citric acid cycle enzymes. They carry their **own circular DNA and ribosomes**, are **self-replicating**, are **maternally inherited**, scale in number with the energy demand of the cell (highest in cardiac and skeletal muscle), and release **cytochrome c** to trigger intrinsic apoptosis.',
    '**Peroxisomes are OXIDATIVE, not hydrolytic.** They use **oxidases** to generate **H₂O₂** and **catalase** to destroy it, perform **β-oxidation of very-long-chain fatty acids**, synthesise plasmalogens, and detoxify ethanol. Clinical anchors: **Zellweger syndrome** (failed peroxisome biogenesis) and **X-linked adrenoleukodystrophy** (VLCFA accumulation).',
    '**Nucleus and nucleolus.** The nuclear envelope is a **double membrane continuous with the rough ER**, perforated by **nuclear pores** that pass small molecules freely and large ones only with a signal. The **nucleolus is not membrane-bound** — it is the site of **rRNA synthesis and ribosomal subunit assembly**, and it enlarges strikingly in rapidly growing, protein-synthesising and malignant cells.',
  ],

  mechanism: {
    title: 'One secretory pathway threads the organelles together',
    steps: [
      { id: 's1', label: 'Rough ER: synthesis + core glycosylation of exported protein', emphasis: 'key' },
      { id: 's2', label: 'Transport vesicles bud and travel to the Golgi cis face' },
      { id: 's3', label: 'Golgi modifies, sorts and stamps (M6P → lysosome)', emphasis: 'key' },
      { id: 's4', label: 'Trans face buds secretory vesicles and lysosomes', emphasis: 'key' },
      { id: 's5', label: 'Mitochondria supply the ATP that powers the whole line' },
      { id: 's6', label: 'Smooth ER runs the parallel lipid, steroid, Ca²⁺ and detox line' },
    ],
  },

  examFindings: [
    { sign: 'Hepatocyte smooth ER proliferates markedly after chronic barbiturate or alcohol exposure', mechanism: 'Smooth ER houses the cytochrome P450 drug-metabolising system, which is inducible', significance: 'key' },
    { sign: 'Plasma-cell cytoplasm is intensely basophilic with a perinuclear pale hof', mechanism: 'Vast rough ER (RNA-rich) for antibody export, with the Golgi occupying the pale zone', significance: 'key' },
    { sign: 'Steroid-secreting cells (adrenal cortex, Leydig, corpus luteum) are packed with smooth ER and tubular-cristae mitochondria', mechanism: 'Steroidogenesis shuttles intermediates between smooth ER and mitochondria', significance: 'key' },
    { sign: 'A large, prominent nucleolus in a rapidly dividing or malignant cell', mechanism: 'High rRNA transcription and ribosome assembly to sustain protein synthesis', significance: 'supportive' },
    { sign: 'Cardiac myocytes and type I skeletal fibres have the highest mitochondrial density', mechanism: 'Mitochondrial number tracks sustained oxidative ATP demand', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Organelle bearing ribosomes on its cytosolic face', meaning: 'Rough ER — proteins for secretion, membrane insertion and lysosomes' },
    { clue: 'Organelle for steroid and lipid synthesis, Ca²⁺ storage and drug detoxification', meaning: 'Smooth ER (cytochrome P450, glucose-6-phosphatase, sarcoplasmic reticulum)' },
    { clue: 'Tag added in the Golgi that routes an enzyme to the lysosome', meaning: 'Mannose-6-phosphate; failure of tagging causes I-cell disease' },
    { clue: 'Organelle with its own circular DNA and ribosomes, maternally inherited', meaning: 'Mitochondrion' },
    { clue: 'Organelle using oxidases to make H₂O₂ and catalase to destroy it', meaning: 'Peroxisome — also β-oxidises very-long-chain fatty acids' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Organelle identity predicts cell function on sight: smooth-ER-rich means steroid or detox, rough-ER-rich means protein export, mitochondria-rich means sustained oxidative work. The downstream half of the vesicular system — uptake and digestion — is [[ghp-endocytosis-lysosomal-digestion]], and protein synthesis itself is [[ghp-translation-ribosomes]]. Course cross-links: [[electron-transport-oxphos]] for the cristae machinery and [[fatty-acids-membranes]] for bilayer structure.' },
    { logic: 'Where it breaks', detail: 'Each organelle carries its own disease class: **mitochondrial** disorders show maternal inheritance and hit high-demand tissue (muscle, brain); **peroxisomal** failure gives Zellweger and adrenoleukodystrophy; **Golgi tagging** failure gives I-cell disease. Surface cell biology continues in [[epithelial-surface-basement-membrane]].' },
  ],

  mnemonics: [
    { hook: 'ROUGH exports, SMOOTH synthesises', expansion: ['Rough ER = protein OUT (secreted, membrane, lysosomal)', 'Smooth ER = the four S: Steroids, Storage of Ca²⁺, Sanitising drugs (P450), Sugar release (glucose-6-phosphatase)'] },
    { hook: 'Golgi is the post office: CIS receives, TRANS ships, and M6P is the address label for the lysosome', expansion: ['No label → enzymes secreted into plasma instead', 'That is I-cell disease'] },
  ],

  traps: [
    {
      questionCategory: 'Which ER does what',
      wrongInstinct: 'Rough ER makes the steroid hormones, since it is the "main" or more active ER',
      rightAnswer: 'Smooth ER — steroidogenic cells such as the adrenal cortex and Leydig cells are packed with SMOOTH ER',
      why: 'Rough ER handles protein for export; smooth ER handles lipid, steroid, Ca²⁺ and detoxification.',
    },
    {
      questionCategory: 'Peroxisome versus lysosome',
      wrongInstinct: 'Peroxisomes are acid-hydrolase digestive vesicles, essentially a variant of lysosome',
      rightAnswer: 'Peroxisomes are oxidative — oxidases plus catalase, and β-oxidation of very-long-chain fatty acids',
      why: 'Peroxisome = oxygen chemistry at near-neutral pH; lysosome = hydrolysis at pH ~5. Different enzymes, different origin, different diseases.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An electron micrograph of an adrenal cortical cell producing cortisol would be expected to show a striking abundance of which organelle?',
      options: [
        { id: 'a', text: 'Rough endoplasmic reticulum' },
        { id: 'b', text: 'Smooth endoplasmic reticulum' },
        { id: 'c', text: 'Peroxisomes' },
        { id: 'd', text: 'Residual bodies' },
      ],
      answerId: 'b',
      explanation: 'Steroid synthesis is a smooth-ER and mitochondrial pathway, so steroidogenic cells are dominated by smooth ER with tubular-cristae mitochondria. Abundant rough ER characterises cells exporting protein, such as plasma cells and pancreatic acinar cells.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In a child with I-cell disease, lysosomal hydrolases are found at high concentration in the plasma rather than inside lysosomes. The defect lies in:',
      options: [
        { id: 'a', text: 'Synthesis of the hydrolases on rough ER ribosomes' },
        { id: 'b', text: 'Addition of the mannose-6-phosphate tag in the Golgi' },
        { id: 'c', text: 'The lysosomal V-type H⁺-ATPase' },
        { id: 'd', text: 'Peroxisomal catalase activity' },
      ],
      answerId: 'b',
      explanation: 'Mannose-6-phosphate is the Golgi address label that routes hydrolases into lysosomes. Without the phosphotransferase that adds it, the enzymes take the default secretory route and are exported. The enzymes themselves are normal, which is why they are detectable in plasma.',
      tests: 'lecture',
    },
    {
      id: 'q3',
      stem: 'Which organelle contains oxidases that generate hydrogen peroxide together with catalase that destroys it, and β-oxidises very-long-chain fatty acids?',
      options: [
        { id: 'a', text: 'Lysosome' },
        { id: 'b', text: 'Mitochondrion' },
        { id: 'c', text: 'Peroxisome' },
        { id: 'd', text: 'Smooth endoplasmic reticulum' },
      ],
      answerId: 'c',
      explanation: 'That pairing of oxidases with catalase defines the peroxisome, and VLCFA β-oxidation is its signature metabolic role — its failure produces adrenoleukodystrophy and Zellweger syndrome. Mitochondria β-oxidise short-, medium- and long-chain fatty acids but not very-long-chain ones.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCellOrganellesFunctions;
