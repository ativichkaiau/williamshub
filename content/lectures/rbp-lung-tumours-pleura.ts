import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpLungTumoursPleura: Lecture = {
  id: 'rbp-lung-tumours-pleura',
  title: 'Lung Tumours & the Pleura',
  system: 'respiratory',
  source: 'Ch 12 — Lung',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 12 Lung' },
    { kind: 'mechanism', label: 'Tobacco field change, driver mutations & paraneoplastic secretion' },
    { kind: 'disease', label: 'Small cell vs non-small cell carcinoma, effusion and mesothelioma' },
  ],

  highYield: [
    '**The first question the pathologist answers is SMALL CELL OR NOT, because that one answer decides whether a surgeon is ever in the conversation.** **Small cell carcinoma** is about **15–20%** of lung cancers, arises from **neuroendocrine cells**, is almost always **CENTRAL** and occurs essentially only in smokers. The cells are small with **scant cytoplasm, finely granular salt-and-pepper chromatin, inconspicuous nucleoli, prominent nuclear moulding**, a very high mitotic rate and extensive necrosis; crush artefact is characteristic, and basophilic DNA encrusting vessel walls is the **Azzopardi effect**. It marks with **chromogranin, synaptophysin and CD56**, and carries near-universal biallelic loss of **TP53 and RB1**. Clinically it doubles in days and has **distant metastases in roughly two-thirds at diagnosis**, so it is staged as a systemic disease and treated **medically** — chemotherapy and radiotherapy, to which it is initially highly sensitive. **Non-small cell carcinoma** is comparatively chemoresistant, which makes **resection the only reliable cure** and makes anatomical and nodal staging the whole game. Two diseases, two entirely different questions asked of the same biopsy. The general logic of invasion and metastasis is in [[rbp-carcinogenesis-tumour-progression]].',
    '**Among the non-small cell tumours, LOCATION, smoking link and precursor lesion sort them faster than morphology does.** **SQUAMOUS CELL CARCINOMA** is **CENTRAL**, arising in a main or segmental bronchus, and carries the **strongest and most dose-dependent link to smoking**. It shows **keratin pearls and intercellular bridges**, is **p40 and p63 positive and TTF-1 negative**, and **CAVITATES** because its bulky central mass outgrows its blood supply. Its precursor sequence is the classic field change: **squamous metaplasia to dysplasia to carcinoma in situ to invasion**, all visible in the bronchial mucosa around the tumour. **ADENOCARCINOMA** is **PERIPHERAL**, is now the **commonest lung cancer overall**, and is the **commonest lung cancer in NON-SMOKERS and in WOMEN** — the single association most often missed. It grows in glandular, papillary or **lepidic** patterns with mucin, is **TTF-1 positive**, and runs a different precursor sequence: **atypical adenomatous hyperplasia to adenocarcinoma in situ** (lepidic growth along **intact alveolar septa** with no invasion) to invasive carcinoma. Its biology is driven by single lesions rather than field damage — **EGFR** mutation (never-smokers, women, East Asian ancestry, responds to tyrosine kinase inhibitors), **ALK** and **ROS1** rearrangements, and **KRAS** (smokers, refractory). **EGFR and KRAS mutations are essentially mutually exclusive**, so one result answers for the other. **LARGE CELL CARCINOMA** is, by definition, a **diagnosis of exclusion**: an undifferentiated tumour with no glandular, squamous or neuroendocrine differentiation detectable by morphology or immunohistochemistry. Subtype genetics are expanded in [[add-lung-cancer-types-and-genetic-associations]].',
    '**Paraneoplastic syndromes are not a list to memorise — each tumour secretes what its parent cell already knew how to make.** **SMALL CELL** comes from neuroendocrine cells, so it releases neuroendocrine products. **ADH** gives **SIADH**: hyponatraemia with **inappropriately concentrated urine in a clinically euvolaemic patient**, which is the triad that defines it. **ACTH** gives an ectopic Cushing syndrome with a distinctive shape — **rapid onset, severe hypokalaemic metabolic alkalosis, proximal myopathy and hyperpigmentation, but NO moon face or central obesity**, because the tumour kills the patient before the habitus can develop, and the pigment comes from melanocyte-stimulating activity within the same pro-opiomelanocortin precursor. Autoantibodies against its own **presynaptic voltage-gated calcium channels** give **Lambert-Eaton myasthenic syndrome**, in which strength **IMPROVES** with sustained use because repeated depolarisation accumulates presynaptic calcium — the exact inverse of myasthenia gravis. **SQUAMOUS CELL** comes from keratinocyte-like epithelium, and **PTHrP is a normal keratinocyte product**, so it produces **hypercalcaemia with SUPPRESSED endogenous PTH**, frequently with no bone metastasis at all. **Adenocarcinoma** is the tumour most often behind **hypertrophic pulmonary osteoarthropathy** with clubbing and painful periosteal new bone.',
    '**Local anatomy converts a tumour into a syndrome, and central versus peripheral predicts which syndrome you get.** **CENTRAL tumours** (squamous, small cell) obstruct a bronchus, producing **lobar collapse, post-obstructive pneumonia that keeps recurring in the same place, and distal bronchiectasis** — a pneumonia that recurs in one segment in a smoker is a bronchoscopy, not a second antibiotic. Mediastinal invasion then gives **superior vena cava syndrome** (facial and upper limb oedema with dilated non-pulsatile neck and chest wall veins, worst on bending forward, most often small cell), **hoarseness with a bovine cough** from the **LEFT recurrent laryngeal nerve** — left because only that nerve loops under the aortic arch inside the chest — **diaphragmatic paralysis** from the phrenic nerve, and dysphagia from oesophageal compression. **PERIPHERAL tumours** (adenocarcinoma) reach the **pleura**, giving effusion and pleuritic pain, and at the apex become a **PANCOAST tumour**: invasion of the **C8 and T1 roots** causes pain and wasting of the small muscles of the hand, and invasion of the **sympathetic chain and stellate ganglion** causes **HORNER syndrome** — ptosis, miosis and anhidrosis on the same side. Nodal spread runs hilar to mediastinal to supraclavicular, and the common distant sites are **adrenals, liver, brain and bone**.',
    '**In the pleural space, the first decision is transudate or exudate, and Light’s criteria answer a question about PERMEABILITY.** A **transudate** is an ultrafiltrate crossing an **intact** pleura because Starling forces changed — raised hydrostatic pressure in heart failure, lowered oncotic pressure in cirrhosis or nephrotic syndrome. An **exudate** means the pleura itself is **inflamed or invaded**, so capillaries leak protein: infection, malignancy, pulmonary embolism, connective tissue disease. The fluid is an **EXUDATE if ANY ONE** of three is met — **pleural to serum protein ratio above 0.5**, **pleural to serum LDH ratio above 0.6**, or **pleural LDH above two-thirds of the upper limit of normal serum LDH**. That threshold is deliberately loose: it catches about **98%** of exudates at the cost of misclassifying roughly a quarter of **diuresed heart failure** transudates, and the specific fix for that known failure is a **serum-to-pleural albumin gradient above 1.2 g/dL**, which reclassifies them as transudates. Within the exudates, **frank pus, pH below 7.2, glucose below 3.3 mmol/L or loculation** define a complicated effusion or empyema that **will not resolve on antibiotics alone**. A very low glucose also flags **rheumatoid** pleurisy.',
    '**Mesothelioma is defined by its latency, and by the fact that smoking has nothing to do with it.** It arises from the **mesothelial cells** of the parietal or visceral pleura — and also peritoneum, pericardium and tunica vaginalis — after a latent interval of **25–45 years** from first asbestos exposure, the longest of any occupational tumour, which is why incidence keeps climbing decades after exposure was controlled. Lifetime risk in the heavily exposed is around **7–10%**, and asbestos raises the risk on the order of **1000-fold**. The contrast to hold is quantitative: **asbestos and smoking are MULTIPLICATIVE for bronchogenic carcinoma**, but **mesothelioma risk is NOT increased by smoking at all** — a non-smoker with asbestos exposure is at full risk. **Pleural plaques do not transform**; they record exposure. Grossly the tumour forms a **thick, firm white rind that encases the lung**, obliterates the pleural space and tracks along the fissures, invading locally rather than metastasising early. Three histological types: **epithelioid (about 60%, best prognosis, and the one that mimics adenocarcinoma)**, **sarcomatoid** (spindled, worst) and **biphasic**. Immunohistochemistry settles the mimicry: mesothelioma is **calretinin, WT1, CK5 and CK6, and D2-40 POSITIVE** with **TTF-1 and claudin-4 NEGATIVE**; metastatic adenocarcinoma is the exact reverse. Median survival is about **12 months**. Asbestos as a fibrogenic dust is covered in [[rbp-restrictive-interstitial-lung]].',
  ],

  mechanism: {
    title: 'Tobacco carcinogens to the small cell versus non-small cell decision',
    steps: [
      { id: 's1', label: 'Polycyclic aromatic hydrocarbons and nitrosamines in smoke are activated by cytochrome P450 into electrophiles that form DNA adducts', emphasis: 'normal' },
      { id: 's2', label: 'Unrepaired adducts fix as mutations with every division; risk rises with pack-years and falls after cessation but never returns to baseline', emphasis: 'normal' },
      { id: 's3', label: 'In the CENTRAL bronchus the epithelium runs squamous metaplasia to dysplasia to carcinoma in situ to invasion — a field change across the whole mucosa', detail: 'This is why squamous carcinoma is central, why dysplasia is found in the mucosa around it, and why second primaries are common.', emphasis: 'key' },
      { id: 's4', label: 'In the PERIPHERAL alveolus the route is atypical adenomatous hyperplasia to adenocarcinoma in situ growing lepidically on intact septa, then invasion', detail: 'Driven by a single EGFR, ALK, ROS1 or KRAS lesion rather than by field damage — which is why it appears in never-smokers.', emphasis: 'key' },
      { id: 's5', label: 'Neuroendocrine cells take a third route: biallelic loss of TP53 and RB1 gives a tumour that doubles in days and secretes hormones', emphasis: 'danger' },
      { id: 's6', label: 'Hence the first question — small cell is disseminated in about two-thirds at diagnosis and treated medically; non-small cell is staged for the knife', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hoarseness with a bovine cough in a smoker with a hilar mass', mechanism: 'Compression of the LEFT recurrent laryngeal nerve, which is the only one of the pair that loops inside the thorax, under the aortic arch — a right-sided hilar mass does not do this', significance: 'key' },
    { sign: 'Ptosis, miosis and anhidrosis with wasting of the small muscles of the hand and pain down the medial forearm', mechanism: 'Apical (Pancoast) tumour invading the sympathetic chain and stellate ganglion for the Horner triad, and the C8 and T1 roots for the hand wasting and ulnar-distribution pain', significance: 'key' },
    { sign: 'Facial and upper limb swelling with dilated, non-pulsatile neck and chest wall veins that worsen on bending forward', mechanism: 'Superior vena caval obstruction. It is most often small cell because that tumour is central, bulky and fast-growing, so it fills the mediastinum before it is detected', significance: 'key' },
    { sign: 'Proximal weakness and absent reflexes that both IMPROVE after 30 seconds of sustained muscle contraction', mechanism: 'Lambert-Eaton syndrome: antibodies against presynaptic voltage-gated calcium channels reduce acetylcholine release, but repeated depolarisation accumulates presynaptic calcium and partially restores it — the exact inverse of myasthenia gravis, which fatigues', significance: 'key' },
    { sign: 'Rapid-onset proximal myopathy with hypokalaemic alkalosis and skin hyperpigmentation, but no moon face or central obesity', mechanism: 'Ectopic ACTH from a small cell carcinoma. The habitus of Cushing syndrome needs months the patient does not have, and the pigmentation comes from melanocyte-stimulating activity in the same pro-opiomelanocortin precursor', significance: 'supportive' },
    { sign: 'Stony dullness at one base with absent breath sounds, reduced vocal resonance and the trachea deviated AWAY from that side', mechanism: 'A large effusion pushes the mediastinum away; lobar collapse behind an obstructing tumour pulls it toward. The direction of shift separates the two at the bedside', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Bronchial biopsy with keratin pearls and intercellular bridges, p40 positive and TTF-1 negative', meaning: 'Squamous cell carcinoma, and that identification predicts the rest: a central cavitating mass, dysplasia in the surrounding mucosa, and hypercalcaemia through PTHrP rather than through bone metastases' },
    { clue: 'Small cells with scant cytoplasm, salt-and-pepper chromatin, nuclear moulding and crush artefact, staining for chromogranin and synaptophysin', meaning: 'Small cell carcinoma. Stop staging for resectability and start staging for systemic spread, including brain imaging, because two-thirds already have distant disease' },
    { clue: 'Serum calcium 3.2 mmol/L with PTH suppressed at 0.6 pmol/L and PTHrP elevated, and a normal bone scan', meaning: 'Humoral hypercalcaemia of malignancy. The suppressed PTH is what excludes primary hyperparathyroidism, in which PTH is inappropriately normal or high, and the normal bone scan excludes osteolytic metastases' },
    { clue: 'Peripheral nodule in a 48-year-old never-smoking woman showing an EGFR exon 19 deletion', meaning: 'Predicts response to an EGFR tyrosine kinase inhibitor as first-line therapy rather than chemotherapy. Because EGFR and KRAS mutations are essentially mutually exclusive, a KRAS-mutant result would have made EGFR testing pointless' },
    { clue: 'Pleural fluid to serum protein ratio 0.62 and LDH ratio 0.78, with pleural glucose 2.1 mmol/L and pH 7.08', meaning: 'An exudate — meeting any one criterion is sufficient — and the low pH and glucose mark a complicated parapneumonic effusion or empyema that needs a drain, not more antibiotics' },
    { clue: 'Pleural biopsy showing an epithelioid tumour that is calretinin, WT1 and D2-40 positive and TTF-1 and claudin-4 negative', meaning: 'Mesothelioma rather than metastatic adenocarcinoma, which shows the reciprocal panel. Fluid cytology cannot reliably make this distinction, which is why tissue is required' },
  ],

  treatment: [
    {
      logic: 'Let the histology decide whether a knife is ever in the conversation',
      detail: 'For **small cell carcinoma**, treat as systemic disease from the outset: it doubles in days, has **distant metastases in about two-thirds at presentation**, and is **initially very chemosensitive and radiosensitive**, so the plan is chemoradiotherapy with **prophylactic cranial irradiation** for responders, because the brain behaves as a sanctuary site that systemic drugs reach poorly. Surgery is reserved for the rare genuinely node-negative solitary nodule. For **non-small cell carcinoma**, resection is the only reliable cure, so the effort goes into **nodal staging** — mediastinal sampling and metabolic imaging — because a single unsuspected contralateral node changes the operation into palliation. The third question, in peripheral adenocarcinoma, is **molecular**: an **EGFR, ALK or ROS1** tumour is treated first-line with a targeted inhibitor rather than with chemotherapy, which is why never-smoker adenocarcinoma is now a distinct clinical pathway.',
    },
    {
      logic: 'Classify the pleural fluid before you treat the patient it came from',
      detail: 'Aspirate, then apply **Light’s criteria** and send protein, LDH, glucose, pH, cell count, cytology and culture from the same tap. A **transudate** is treated by treating the heart, liver or kidney; draining it changes nothing and it simply reaccumulates. An **exudate** demands a cause. Within exudates, one rule is mechanical and non-negotiable: **pus, pH below 7.2, glucose below 3.3 mmol/L or loculation means drainage**, because antibiotics cannot sterilise a dense bacterial population sitting behind a fibrinous peel in an avascular, acidic collection. In **malignant** effusion, recurrence is the rule rather than the exception, so the decision after the first therapeutic tap is **pleurodesis or an indwelling catheter** rather than repeated aspiration. Procedures and pneumothorax management are set out in [[pleural-effusion-pneumothorax-mesothelioma]].',
    },
  ],

  mnemonics: [
    {
      hook: 'The two S words sit in the centre',
      expansion: [
        'Squamous and Small cell are CENTRAL, and both are strongly smoking-related',
        'Squamous cavitates and makes PTHrP; small cell makes ADH and ACTH',
        'Adenocarcinoma is PERIPHERAL, commonest overall, and commonest in non-smokers and in women',
        'Large cell is undifferentiated by definition — a diagnosis made only after excluding the other three',
        'Central tumours obstruct bronchi and invade mediastinum; peripheral tumours reach pleura and the apex',
      ],
    },
    {
      hook: 'A tumour secretes what its parent cell already knew how to make',
      expansion: [
        'Small cell arises from neuroendocrine cells, so it secretes hormones: ADH giving SIADH, ACTH giving rapid Cushing without the habitus',
        'It also generates antibodies to its own calcium channels — Lambert-Eaton, where strength improves with use',
        'Squamous arises from keratinocyte-like cells, and PTHrP is a normal keratinocyte product',
        'So squamous gives hypercalcaemia with SUPPRESSED PTH, often without a single bone metastasis',
        'Adenocarcinoma is the one behind hypertrophic pulmonary osteoarthropathy with clubbing',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Hypercalcaemia in a patient with a lung mass',
      wrongInstinct: 'Hypercalcaemia in cancer means bone metastases have dissolved the skeleton, so order a bone scan',
      rightAnswer: 'Measure PTH. In squamous carcinoma the mechanism is humoral: tumour PTHrP acts on the PTH receptor, so calcium rises while endogenous PTH is SUPPRESSED, frequently with no bone metastases at all',
      why: 'The rule is one number: raised calcium with suppressed PTH is malignancy, raised calcium with an unsuppressed PTH is hyperparathyroidism. The PTH level makes the call, not the bone scan',
    },
    {
      questionCategory: 'Pleural plaques reported on the CT of an asbestos-exposed worker',
      wrongInstinct: 'Plaques are the precursor lesion of mesothelioma, so the patient needs surveillance for malignant transformation',
      rightAnswer: 'Plaques are acellular hyalinised collagen on the parietal pleura and diaphragm; they mark EXPOSURE and never transform. The exposure they record carries the mesothelioma risk, which is present with or without plaques',
      why: 'The rule: a plaque is a dosimeter, not a lesion. Mesothelioma arises from mesothelial cells after 25 to 45 years of latency, and no plaque has ever been shown to become one',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 64-year-old smoker has a central mass, mediastinal nodes and hyponatraemia with concentrated urine. Biopsy shows small cells with scant cytoplasm, nuclear moulding and synaptophysin positivity. Why does this histology, rather than the imaging, determine the treatment plan?',
      options: [
        { id: 'a', text: 'Small cell carcinoma is radioresistant, so surgery is required' },
        { id: 'b', text: 'Small cell carcinoma is disseminated in about two-thirds of patients at diagnosis and is highly chemosensitive, so it is treated medically rather than resected' },
        { id: 'c', text: 'Small cell carcinoma cannot be accurately staged, so anatomical staging is abandoned' },
        { id: 'd', text: 'The hyponatraemia must be corrected before any staging can be performed' },
      ],
      answerId: 'b',
      explanation: 'Small cell carcinoma arises from neuroendocrine cells, carries biallelic TP53 and RB1 loss, and doubles in days, so overt distant metastases are present in roughly two-thirds at diagnosis and occult spread in most of the rest. It is also initially very chemosensitive and radiosensitive. Those two facts together make chemoradiotherapy the treatment and surgery almost never appropriate, with prophylactic cranial irradiation for responders because the brain is a sanctuary site. The SIADH is a clue to the cell of origin, not the therapeutic driver.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Pleural fluid from a breathless patient shows a pleural to serum protein ratio of 0.41, a pleural to serum LDH ratio of 0.68, and a pleural LDH below two-thirds of the upper limit of normal serum LDH. How should this be classified?',
      options: [
        { id: 'a', text: 'Transudate, because two of the three criteria are not met' },
        { id: 'b', text: 'Exudate, because meeting any single one of the three criteria is sufficient' },
        { id: 'c', text: 'Indeterminate, because protein and LDH disagree' },
        { id: 'd', text: 'Transudate, because the absolute pleural LDH is not raised' },
      ],
      answerId: 'b',
      explanation: 'Light’s criteria are deliberately permissive: the fluid is an exudate if ANY one of the protein ratio above 0.5, the LDH ratio above 0.6, or a pleural LDH above two-thirds of the serum upper limit is satisfied. Here the LDH ratio alone settles it. The design catches about 98% of exudates at the cost of misclassifying roughly a quarter of diuresed heart failure transudates, and the specific remedy for that known failure is a serum-to-pleural albumin gradient above 1.2 g/dL.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 71-year-old former dockyard worker who has never smoked has a thick white pleural rind encasing the right lung. Biopsy shows an epithelioid tumour that is calretinin and WT1 positive and TTF-1 and claudin-4 negative. Which statement is correct?',
      options: [
        { id: 'a', text: 'The absence of smoking history makes asbestos-related mesothelioma unlikely' },
        { id: 'b', text: 'The immunohistochemical panel favours metastatic adenocarcinoma of the lung' },
        { id: 'c', text: 'Mesothelioma risk is raised roughly 1000-fold by asbestos and is not increased by smoking, so a never-smoker with exposure is at full risk' },
        { id: 'd', text: 'Coexisting pleural plaques would indicate the plaques had undergone malignant transformation' },
      ],
      answerId: 'c',
      explanation: 'Asbestos and smoking interact multiplicatively for bronchogenic carcinoma, roughly a 5-fold and a 10-fold risk combining to about 50-fold, but smoking adds nothing to mesothelioma risk. Latency from first exposure is 25 to 45 years, which fits a dockyard history perfectly. The panel is diagnostic of mesothelioma: calretinin, WT1, CK5 and CK6 and D2-40 positive with TTF-1 and claudin-4 negative, the reciprocal of metastatic adenocarcinoma. Pleural plaques mark exposure and do not transform.',
      tests: 'disease',
    },
  ],
};

export default rbpLungTumoursPleura;
