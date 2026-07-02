import type { Lecture } from '../../lib/types';

export const environmentalChemicalTobaccoInjury: Lecture = {
  id: 'environmental-chemical-tobacco-injury',
  title: 'Environmental Injury: Tobacco, Alcohol & Chemicals',
  system: 'pathology',
  source: 'L8 — Environmental & Occupational Pathology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L8 Chemical injury' },
    { kind: 'mechanism', label: 'Xenobiotics; tobacco/alcohol/metals' },
    { kind: 'exam', label: 'NAPQI; CO; asbestos; lead' },
  ],

  highYield: [
    '**Environmental/chemical injury reflects exposure to XENOBIOTICS (exogenous chemicals) that may act directly or be metabolised (by hepatic CYP450) into TOXIC/reactive intermediates. TOBACCO SMOKING is the leading preventable cause of death — a cause of lung, larynx, oral, oesophageal, bladder, pancreatic and other cancers, plus COPD/emphysema, atherosclerosis/IHD, and adverse pregnancy outcomes; even PASSIVE smoke and smokeless tobacco cause disease. ALCOHOL (ethanol) causes acute intoxication and chronic disease — fatty liver → alcoholic hepatitis → CIRRHOSIS, pancreatitis, cardiomyopathy, neurologic injury (Wernicke-Korsakoff), fetal alcohol syndrome, and increased cancer risk (upper GI, liver, breast).**',
    '**THERAPEUTIC and recreational DRUGS cause injury. The classic exam case is PARACETAMOL (ACETAMINOPHEN) overdose → the CYP450 metabolite NAPQI depletes glutathione → centrilobular hepatic NECROSIS → acute liver failure; the antidote is N-ACETYLCYSTEINE (replenishes glutathione). Other examples: aspirin toxicity, and adverse drug reactions generally. Exogenous hormones (oestrogen/OCPs) carry thrombotic/neoplastic risks.**',
    '**AIR POLLUTION — outdoor (ozone, SO2, NOx, particulates) and INDOOR (biomass/wood smoke — important in low-resource settings, and radon) — causes/worsens respiratory disease. CARBON MONOXIDE (from incomplete combustion) binds haemoglobin ~200× more avidly than O2 → CARBOXYHAEMOGLOBIN → tissue hypoxia with a classic (often described) "cherry-red" appearance and no cyanosis — a systemic asphyxiant.**',
    '**OCCUPATIONAL/industrial exposures: HEAVY METALS — LEAD (children/neurotoxicity, anaemia with basophilic stippling, "lead lines"), MERCURY (neurotoxic), ARSENIC (skin lesions, cancers); and MINERAL DUSTS (pneumoconioses) — ASBESTOS (asbestosis, bronchogenic carcinoma, and MESOTHELIOMA — synergistic with smoking), SILICA (silicosis, ↑TB risk), and coal dust. Occupational carcinogens (aromatic amines → bladder; vinyl chloride → hepatic angiosarcoma) link workplace to cancer.**',
    '**The take-home: chemical injury via xenobiotics (± CYP450 activation). TOBACCO = leading preventable killer (many cancers + COPD + IHD). ALCOHOL → fatty liver→cirrhosis, pancreatitis, Wernicke, fetal alcohol. PARACETAMOL → NAPQI → hepatic necrosis (antidote N-acetylcysteine). CO → carboxyhaemoglobin hypoxia. Metals (LEAD/mercury/arsenic); ASBESTOS → mesothelioma; SILICA → silicosis.** Physical and nutritional injury are [[physical-nutritional-injury]]; chemical carcinogenesis is [[carcinogenesis-molecular]].',
  ],

  mechanism: {
    title: 'Xenobiotics (± CYP450 activation): tobacco (cancers/COPD/IHD), alcohol (cirrhosis/pancreatitis/Wernicke), paracetamol→NAPQI→hepatic necrosis (NAC antidote), CO→carboxyhaemoglobin hypoxia, metals (lead/mercury/arsenic), asbestos→mesothelioma, silica→silicosis',
    steps: [
      { id: 's1', label: 'Xenobiotics act directly or via CYP450 into toxic reactive intermediates', emphasis: 'key' },
      { id: 's2', label: 'Tobacco = leading preventable cause of death (many cancers, COPD, atherosclerosis/IHD)', emphasis: 'danger' },
      { id: 's3', label: 'Alcohol: fatty liver→cirrhosis, pancreatitis, cardiomyopathy, Wernicke, fetal alcohol', emphasis: 'key' },
      { id: 's4', label: 'Paracetamol → NAPQI depletes glutathione → hepatic necrosis (antidote N-acetylcysteine)', emphasis: 'danger' },
      { id: 's5', label: 'CO → carboxyhaemoglobin hypoxia; metals (lead/mercury/arsenic); asbestos→mesothelioma; silica→silicosis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Lung, bladder and laryngeal cancers plus COPD in a smoker', mechanism: 'Tobacco (leading preventable cause of death)', significance: 'key' },
    { sign: 'Fatty liver progressing to cirrhosis with pancreatitis', mechanism: 'Chronic alcohol injury', significance: 'key' },
    { sign: 'Centrilobular hepatic necrosis after paracetamol overdose', mechanism: 'NAPQI (glutathione depletion) — give N-acetylcysteine', significance: 'key' },
    { sign: 'Tissue hypoxia with cherry-red skin and no cyanosis', mechanism: 'Carbon monoxide (carboxyhaemoglobin)', significance: 'supportive' },
    { sign: 'Pleural mesothelioma decades after asbestos exposure', mechanism: 'Asbestos (synergistic with smoking)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The leading preventable cause of death', meaning: 'Tobacco smoking' },
    { clue: 'The toxic paracetamol metabolite and its antidote', meaning: 'NAPQI; N-acetylcysteine' },
    { clue: 'The gas causing carboxyhaemoglobin hypoxia', meaning: 'Carbon monoxide' },
    { clue: 'The dust causing mesothelioma', meaning: 'Asbestos' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Environmental and chemical injuries are major, often preventable causes of disease. Tobacco and alcohol drive an enormous burden of cancer and organ damage, making cessation the highest-yield prevention. The paracetamol/NAPQI story is a clinical staple with a specific antidote (N-acetylcysteine) if given early, and recognising carbon monoxide poisoning (carboxyhaemoglobin, no cyanosis) is life-saving. Occupational exposures — lead, mercury, arsenic and mineral dusts (asbestos → mesothelioma, silica → silicosis) — link workplace history to specific diseases and cancers, underpinning occupational medicine and screening. Physical and nutritional injuries are [[physical-nutritional-injury]]; chemical carcinogenesis is [[carcinogenesis-molecular]].' },
  ],

  mnemonics: [
    { hook: '"Paracetamol → NAPQI → liver necrosis; antidote N-acetylcysteine (restores glutathione)"', expansion: ['Tobacco = leading preventable death', 'Alcohol → cirrhosis/Wernicke'] },
    { hook: '"CO binds Hb ~200× O2 → hypoxia, no cyanosis"; "Asbestos → mesothelioma; Silica → silicosis"', expansion: ['Lead: stippling/lead lines', 'Aromatic amines → bladder cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Carbon monoxide poisoning and cyanosis',
      wrongInstinct: 'A patient hypoxic from carbon monoxide poisoning will look cyanosed (blue)',
      rightAnswer: 'Carbon monoxide binds haemoglobin ~200× more avidly than oxygen, forming CARBOXYHAEMOGLOBIN which is bright red — so despite severe tissue HYPOXIA the patient is classically NOT cyanosed (may be described as "cherry-red"); pulse oximetry can also read falsely normal, so CO poisoning must be suspected clinically (exposure, headache, confusion) and confirmed by measuring carboxyhaemoglobin',
      why: 'Waiting for cyanosis misses CO poisoning, because carboxyhaemoglobin is red and oximetry is unreliable; recognising the exposure and cherry-red/non-cyanotic hypoxia prompts oxygen therapy that is life-saving.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Paracetamol (acetaminophen) overdose causes hepatic necrosis because:',
      options: [
        { id: 'a', text: 'A CYP450 metabolite (NAPQI) depletes glutathione and damages hepatocytes; the antidote is N-acetylcysteine' },
        { id: 'b', text: 'It directly binds haemoglobin' },
        { id: 'c', text: 'It causes fatty change only' },
        { id: 'd', text: 'It is a direct carcinogen' },
      ],
      answerId: 'a',
      explanation: 'In overdose, paracetamol is metabolised by CYP450 to NAPQI, which depletes glutathione and produces centrilobular hepatic necrosis and acute liver failure. N-acetylcysteine replenishes glutathione and is the antidote, most effective if given early.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which mineral dust exposure is classically associated with malignant mesothelioma (synergistically with smoking for lung cancer)?',
      options: [
        { id: 'a', text: 'Asbestos' },
        { id: 'b', text: 'Silica' },
        { id: 'c', text: 'Coal dust' },
        { id: 'd', text: 'Iron oxide' },
      ],
      answerId: 'a',
      explanation: 'Asbestos causes asbestosis, bronchogenic carcinoma (synergistic with smoking), and — characteristically — malignant mesothelioma of the pleura/peritoneum, often decades after exposure. Silica causes silicosis (and increases TB risk).',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default environmentalChemicalTobaccoInjury;
