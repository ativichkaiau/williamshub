import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpRestrictiveInterstitialLung: Lecture = {
  id: 'rbp-restrictive-interstitial-lung',
  title: 'Restrictive & Interstitial Lung Disease',
  system: 'respiratory',
  source: 'Ch 12 — Lung',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 12 Lung' },
    { kind: 'mechanism', label: 'Aberrant alveolar repair, fibroblastic foci & dust retention' },
    { kind: 'disease', label: 'UIP, pneumoconioses & sarcoidosis' },
  ],

  highYield: [
    '**Restriction means a reduced TLC, and the first move is to decide whether the problem is INSIDE the lung or outside it — a split most students skip, although it changes the whole differential.** **INTRINSIC (parenchymal)** restriction stiffens the lung itself: interstitial fibrosis, sarcoidosis, pneumoconioses, drug and radiation injury. **EXTRINSIC** restriction leaves normal lung and squeezes or fails to expand it: **kyphoscoliosis, obesity, large pleural effusion, ankylosing spondylitis, and neuromuscular disease** from motor neurone disease to myasthenia and phrenic nerve palsy. The discriminator is **DLCO**. Intrinsic disease thickens or destroys the alveolar-capillary membrane, so **DLCO falls out of proportion to the volumes**; extrinsic disease has an intact membrane, so **DLCO is normal and DLCO corrected for alveolar volume is normal or high**. Add **maximal inspiratory and expiratory pressures** and a **supine FVC** when weakness is suspected. Extrinsic causes are the commoner ones in clinic, which is exactly why the step gets skipped and exactly why it is examined.',
    '**Fibrosis is the mirror image of emphysema, and stating the mirror is the fastest way to keep the two straight.** Emphysema DESTROYS the elastic septa, so **recoil falls, compliance rises and TLC rises** while flow collapses; fibrosis DEPOSITS collagen in those same septa, so **recoil rises, compliance falls and TLC falls** while flow is unimpeded. That is why a fibrotic patient keeps an **FEV1/FVC of 0.85 or higher** — the stiff lung empties fast, it simply has less to empty — and why both patients are breathless for opposite reasons. The "interstitium" being scarred is a real anatomical space: the fused basement membranes of the type I pneumocyte and the capillary endothelium, plus the collagen, elastin, fibroblasts and scattered lymphocytes between them, a sheet normally thin enough that oxygen crosses it in well under a second. Thicken it and gas transfer fails on exertion first, which is why **desaturation on a walk test precedes resting hypoxaemia** in every intrinsic restrictive disease. The clinical taxonomy is laid out in [[add-interstitial-lung-diseases-pathophysiology-and-types]]; the obstructive half of the pair is in [[rbp-obstructive-lung-disease]].',
    '**Usual interstitial pneumonia (UIP) is the morphological pattern behind idiopathic pulmonary fibrosis, and TEMPORAL HETEROGENEITY is the single feature that defines it.** The distribution is **patchy, subpleural and paraseptal, worst at the BASES**, with normal lung immediately adjacent to scarred lung at low power. Within the scarred areas, lesions of **different ages coexist**: pale **fibroblastic foci** of plump myofibroblasts in a myxoid matrix — the actively fibrosing front — sit directly beside **old, dense, acellular collagen** and beside preserved alveoli. End-stage remodelling produces **honeycombing**: cystic spaces lined by **bronchiolar epithelium** with mucus and reactive smooth muscle in their walls. Contrast this with **non-specific interstitial pneumonia (NSIP)**, where the fibrosis is **temporally UNIFORM**, fibroblastic foci are absent and honeycombing is minimal — a distinction that matters because NSIP responds to immunosuppression and has a far better prognosis. IPF is UIP with every other cause excluded, and its pathogenesis is now read as **repetitive alveolar epithelial injury with aberrant repair**, not as chronic inflammation: senescent type II pneumocytes secrete **TGF-β1**, driving myofibroblast differentiation and type I collagen deposition, in lungs primed by a **MUC5B promoter variant** or by short telomeres from **TERT and TERC** mutations. Median survival remains about **3 years** from diagnosis.',
    '**In pneumoconiosis the reaction is set by the DUST, not by the dose alone — size, solubility and reactivity decide everything.** Only particles of roughly **1–5 μm** reach the terminal airways and alveoli; larger ones impact in the upper airway and are cleared by the mucociliary escalator, smaller ones are largely exhaled. Once retained, **more soluble and smaller** particles cause acute chemical injury, while **larger, poorly soluble** particles persist and cause chronic fibrosing disease. **COAL DUST** is the relatively inert end of that spectrum: it produces **anthracosis** (carbon in macrophages and lymphatics, present in every city dweller), then **coal macules** — 1 to 2 mm collections of carbon-laden macrophages around **respiratory bronchioles**, with a little collagen — and then **coal nodules**. Simple coal workers pneumoconiosis causes little functional impairment; the disease that matters is **progressive massive fibrosis**, blackened scars **over 2 cm** that contract and obliterate vessels. Crucially, **coal dust is NOT associated with an increased risk of lung carcinoma**, unlike silica and asbestos — a fact stems test directly. Rheumatoid arthritis plus pneumoconiosis gives the large necrobiotic nodules of **Caplan syndrome**.',
    '**Silica and asbestos each behave the way they do for a reason you can state in one line — learn the reason and the associations follow.** **SILICA**: crystalline forms (quartz, cristobalite, tridymite) are far more fibrogenic than amorphous ones. The ingested particle **ruptures the phagolysosome membrane**, activating the **NLRP3 inflammasome** and releasing **IL-1β**, and it **kills the macrophage**, which spills the indestructible particle for the next macrophage to ingest — a self-perpetuating cycle. That same macrophage killing is why **silicosis genuinely predisposes to tuberculosis**: impaired macrophage function is a real defect in cell-mediated killing, so silicotuberculosis is a mechanism, not an association of convenience. Morphology: hard **collagenous nodules with whorled hyaline collagen** in the **UPPER zones**, weakly birefringent particles under polarised light, and **eggshell calcification** of hilar nodes. Silica is a classified human carcinogen. **ASBESTOS**: **amphiboles** (crocidolite, amosite) are straight and stiff, align with airflow, penetrate deeply and are far more pathogenic than the curly, more readily cleared **serpentine chrysotile**. Macrophages coat retained fibres with iron and protein to form golden-brown beaded **ferruginous bodies** (Prussian blue positive). **Asbestosis** is diffuse interstitial fibrosis beginning **subpleurally in the LOWER lobes** — the opposite zone to coal and silica. **Pleural plaques**, dense collagen on the parietal pleura and diaphragmatic domes, often calcified, are the commonest manifestation and are a marker of exposure that does **NOT** transform into anything. The risk arithmetic is the examinable part: asbestos alone raises lung carcinoma about **5-fold**, smoking alone about **10-fold**, and the two together about **50-fold** — **MULTIPLICATIVE**. Mesothelioma risk is raised on the order of **1000-fold** by asbestos and is **not** increased by smoking at all. Occupational detail is covered in [[pulmonary-fibrosis-pneumoconioses]].',
    '**Sarcoidosis is NON-CASEATING granulomatous inflammation and a diagnosis of exclusion — and "exclusion" means specific tests, not a shrug.** The granuloma is compact, made of epithelioid histiocytes and multinucleate giant cells with a sparse lymphocytic rim and **no central caseation**, and it follows **lymphatic routes** along bronchovascular bundles, interlobular septa and the pleura — which is why transbronchial biopsy has a high yield. **Bilateral hilar lymphadenopathy** is the classic film and the lung is involved in over **90%** of cases. Immunologically it is a **CD4 TH1** disease with **IL-2 and interferon-γ**, giving intense local activity alongside **peripheral cutaneous anergy** — a combination unique enough to be worth remembering; **BAL CD4 to CD8 ratios above 3.5** support it. **Schaumann bodies** (laminated calcium and protein concretions) and **asteroid bodies** (stellate inclusions in giant cells) are characteristic but **not specific**, and about **60%** of granulomas contain neither. Macrophages in the granulomas express **1-alpha-hydroxylase** and convert 25-hydroxyvitamin D, causing **hypercalcaemia and hypercalciuria** independent of PTH. Serum ACE rises in around **60%** but is neither sensitive nor specific. Exclusion in practice means **negative acid-fast and fungal stains AND cultures** on the biopsy, plus an exposure history for **beryllium**, whose granulomas are histologically identical. Roughly **65–70%** recover with minimal residua, about **20%** keep permanent lung or ocular deficit and **10–15%** die of progressive fibrosis; see [[add-sarcoidosis-clinical-presentation-and-diagnosis]].',
  ],

  mechanism: {
    title: 'Repetitive alveolar injury to honeycomb lung',
    steps: [
      { id: 's1', label: 'Repeated micro-injury to type I pneumocytes in a genetically primed lung', detail: 'Smoking, microaspirated refluxate and inhaled particles acting on a MUC5B promoter variant or telomerase (TERT, TERC) mutation with short telomeres.', emphasis: 'normal' },
      { id: 's2', label: 'Type II pneumocytes attempt repair, become senescent and secrete TGF-β1 instead of restoring the epithelium', emphasis: 'key' },
      { id: 's3', label: 'TGF-β1 recruits fibroblasts and drives myofibroblast differentiation — the fibroblastic focus', detail: 'Plump myofibroblasts in myxoid matrix laying down type I collagen; this is the actively fibrosing front and its presence defines UIP.', emphasis: 'key' },
      { id: 's4', label: 'Foci arise at different times in different subpleural zones, so new scar, old collagen and normal lung sit side by side', detail: 'Temporal AND spatial heterogeneity — the discriminating feature against the temporally uniform fibrosis of NSIP.', emphasis: 'key' },
      { id: 's5', label: 'Alveolar architecture collapses into cystic spaces lined by bronchiolar epithelium — honeycombing, worst subpleurally at the bases', emphasis: 'key' },
      { id: 's6', label: 'Compliance falls and recoil rises: TLC and FVC fall together, FEV1/FVC is preserved or high, DLCO falls and exertional desaturation precedes resting hypoxaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fine end-inspiratory crackles at both bases with a dry Velcro quality that do not clear on coughing', mechanism: 'Stiff distal airspaces held shut through expiration snap open at the same point in each inspiration; they are basal because UIP is basal and subpleural, and they do not clear because there is no secretion to move', significance: 'key' },
    { sign: 'Finger clubbing in a patient with bibasal fibrosis', mechanism: 'Present in roughly half of IPF and common in asbestosis, but characteristically ABSENT in sarcoidosis and hypersensitivity pneumonitis — so clubbing pushes the differential toward IPF and away from the granulomatous causes', significance: 'key' },
    { sign: 'FVC falling by more than 20% on lying flat compared with sitting', mechanism: 'Abdominal contents load a weak diaphragm in the supine position — the bedside signature of EXTRINSIC neuromuscular restriction, with normal parenchyma behind it', significance: 'key' },
    { sign: 'Bilateral hilar lymphadenopathy with erythema nodosum, fever and painful ankles', mechanism: 'Löfgren syndrome, the acute presentation of sarcoidosis; it carries a high rate of spontaneous remission and is one of the few sarcoid presentations reliable enough to diagnose without biopsy', significance: 'key' },
    { sign: 'Violaceous indurated plaques across the nose, cheeks and ear lobes', mechanism: 'Lupus pernio — the most specific cutaneous sign of sarcoidosis and a marker of the chronic fibrotic phenotype rather than the self-limiting one', significance: 'supportive' },
    { sign: 'Symmetrically reduced chest expansion with vesicular breath sounds, resonant percussion and no crackles in a patient with severe kyphoscoliosis', mechanism: 'Extrinsic restriction — the lung is normal and simply cannot be expanded, so every auscultatory and percussion finding is normal while the volumes are not', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FVC 58% predicted, TLC 62% predicted, FEV1/FVC 0.86, DLCO 41% predicted', meaning: 'Intrinsic restriction. Volumes and transfer fall together because the alveolar-capillary membrane itself is thickened; the high ratio confirms flow is not the problem' },
    { clue: 'TLC 66% predicted with DLCO 96% predicted, DLCO corrected for alveolar volume 112%, maximal inspiratory pressure 28 cmH2O', meaning: 'Extrinsic restriction from respiratory muscle weakness. Normal gas transfer across a normal membrane with a weak pump; the corrected transfer is actually supranormal because the lung is underinflated' },
    { clue: 'HRCT showing basal, subpleural reticulation with traction bronchiectasis and honeycombing, and no ground-glass opacity', meaning: 'A definite UIP pattern. In the right clinical setting this is diagnostic of IPF and surgical lung biopsy adds risk without adding information — extensive ground glass would argue instead for NSIP or hypersensitivity pneumonitis' },
    { clue: 'Chest radiograph with upper-zone nodularity and eggshell calcification of the hilar nodes in a sandblaster', meaning: 'Silicosis. Screen this patient for tuberculosis on principle, because silica impairs macrophage killing and silicotuberculosis is a genuine mechanistic association' },
    { clue: 'Golden-brown beaded, Prussian-blue-positive rods on a background of diffuse interstitial fibrosis', meaning: 'Ferruginous bodies confirming asbestos exposure in a lung that also shows asbestosis. Count matters: occasional ferruginous bodies occur in normal urban lungs, so the fibrosis is what makes the diagnosis' },
    { clue: 'Transbronchial biopsy with compact non-caseating granulomas, BAL CD4 to CD8 ratio 4.2, negative acid-fast and fungal stains and cultures', meaning: 'Supports sarcoidosis — but only once mycobacterial and fungal cultures have returned negative and beryllium exposure has been excluded by history, since berylliosis is histologically identical' },
  ],

  treatment: [
    {
      logic: 'Immunosuppress where the lesion is cellular; never where the lesion is scar',
      detail: 'Read the histology as a drug-selection tool. **Sarcoidosis**, **cellular NSIP** and **hypersensitivity pneumonitis** are active cellular infiltrates, so **corticosteroids** genuinely suppress them — and in sarcoidosis the further point is that most patients need no treatment at all, since around two-thirds remit spontaneously. **IPF is not an inflammatory disease**, and treating it as one causes harm: the PANTHER-IPF trial stopped early because **prednisone with azathioprine and N-acetylcysteine increased death and hospitalisation**. What slows IPF is **antifibrotic** therapy — **pirfenidone** and **nintedanib** reduce the rate of FVC decline without reversing any fibrosis — and the only cure is **transplantation**. The rule to carry: steroids for granulomas and cells, antifibrotics for fibroblastic foci.',
    },
    {
      logic: 'In pneumoconiosis every effective intervention happens before the dust is inhaled',
      detail: 'No therapy removes retained mineral dust from the lung, so control is **engineering**: suppress the **1–5 μm respirable fraction** at source, ventilate, and use fitted respirators. Three secondary rules follow from mechanism. **Smoking cessation is disproportionately valuable in asbestos-exposed workers**, because the interaction with carcinoma is multiplicative rather than additive — removing one 10-fold factor from a 50-fold risk. **Silica-exposed workers need active tuberculosis screening**, because impaired macrophage killing is a real immunological defect. And **pleural plaques require no treatment and no surveillance of their own** — they mark exposure and do not become tumours, so treating them as premalignant is the commonest error in this territory.',
    },
  ],

  mnemonics: [
    {
      hook: 'Where the dust lands tells you which dust it was',
      expansion: [
        'Coal and silica go UP — upper zones, because lymphatic clearance is poorest at the apices',
        'Asbestos goes DOWN — lower lobes and subpleural, plus the parietal pleura',
        'Coal makes macules then progressive massive fibrosis, and raises no cancer risk',
        'Silica makes hard whorled nodules, eggshell hilar nodes, and predisposes to tuberculosis',
        'Asbestos makes ferruginous bodies, diffuse basal fibrosis, pleural plaques and mesothelioma',
      ],
    },
    {
      hook: 'UIP is a patchwork quilt; NSIP is a single coat of paint',
      expansion: [
        'UIP: lesions of different ages — fibroblastic foci beside old collagen beside normal lung',
        'UIP: patchy, subpleural, basal, with honeycombing; steroids do not help and median survival is about 3 years',
        'NSIP: temporally uniform, no fibroblastic foci, ground glass rather than honeycomb',
        'NSIP: responds to immunosuppression and lives far longer',
        'The age mix of the lesions decides it, not the quantity of collagen',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'What to do next with a restrictive spirometry pattern',
      wrongInstinct: 'A low TLC means interstitial lung disease, so order an HRCT and start looking for fibrosis',
      rightAnswer: 'Look at DLCO first. A low DLCO puts the disease inside the lung; a normal DLCO — and a normal or high DLCO corrected for alveolar volume — puts it outside, in the chest wall, the pleura, the respiratory muscles or obesity',
      why: 'The rule: restriction with a low DLCO is parenchymal, restriction with a normal DLCO is extrinsic. The extrinsic causes are commoner in clinic, so skipping this step sends the workup into the wrong organ',
    },
    {
      questionCategory: 'What makes a fibrosing pattern UIP rather than something else',
      wrongInstinct: 'Dense collagen with honeycomb change is enough to call it UIP',
      rightAnswer: 'UIP requires TEMPORAL heterogeneity — fresh fibroblastic foci must sit alongside old dense scar and preserved alveoli, distributed patchily in a subpleural, basal pattern',
      why: 'Fibrosis that is all the same age is NSIP, which responds to immunosuppression and lives far longer. The rule is that the AGE MIX of the lesions separates them, not the amount of collagen',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old sandblaster with 20 years of exposure develops cavitating upper-lobe disease. Sputum grows Mycobacterium tuberculosis. Why is his risk of tuberculosis genuinely increased rather than coincidental?',
      options: [
        { id: 'a', text: 'Silica nodules cavitate and the cavities become passively colonised' },
        { id: 'b', text: 'Crystalline silica ruptures the phagolysosome and kills the macrophage, impairing the cell-mediated killing on which mycobacterial control depends' },
        { id: 'c', text: 'Silica dust carries mycobacteria into the alveoli mechanically' },
        { id: 'd', text: 'Silicosis induces a systemic neutropenia' },
      ],
      answerId: 'b',
      explanation: 'Ingested crystalline silica damages the phagolysosomal membrane, activating the NLRP3 inflammasome with release of IL-1beta and killing the macrophage, which then spills the indestructible particle for the next macrophage. Because containing Mycobacterium tuberculosis depends on exactly that macrophage population operating under TH1 control, the defect is functional and specific. Coal dust, which is comparatively inert, carries no such association.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 62-year-old with progressive dyspnoea has TLC 64% predicted, FVC 61% predicted, FEV1/FVC 0.88, DLCO 98% predicted and DLCO corrected for alveolar volume 115% predicted. Which is the most likely explanation?',
      options: [
        { id: 'a', text: 'Idiopathic pulmonary fibrosis' },
        { id: 'b', text: 'Asbestosis' },
        { id: 'c', text: 'An extrinsic cause such as neuromuscular weakness, obesity or chest-wall deformity' },
        { id: 'd', text: 'Emphysema with coexisting fibrosis' },
      ],
      answerId: 'c',
      explanation: 'The volumes are restrictive but gas transfer is entirely normal, and once corrected for the small alveolar volume it is supranormal. That combination means the alveolar-capillary membrane is intact, so the lung parenchyma is not the problem. Any intrinsic fibrosing process thickens that membrane and lowers DLCO out of proportion to the volumes. The next tests are maximal inspiratory and expiratory pressures and a supine FVC.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A surgical lung biopsy shows subpleural, basal, patchy fibrosis in which plump myofibroblasts in a myxoid matrix lie immediately beside dense acellular collagen and beside normal alveoli, with cystic spaces lined by bronchiolar epithelium. Which single feature most strongly supports UIP over non-specific interstitial pneumonia?',
      options: [
        { id: 'a', text: 'The subpleural distribution' },
        { id: 'b', text: 'The coexistence of lesions of different ages, including fibroblastic foci beside old scar and normal lung' },
        { id: 'c', text: 'The total quantity of collagen deposited' },
        { id: 'd', text: 'The presence of cystic spaces' },
      ],
      answerId: 'b',
      explanation: 'Temporal heterogeneity is the defining feature of UIP: fibroblastic foci represent active fibrogenesis occurring now, dense acellular collagen represents fibrogenesis that finished years ago, and preserved alveoli lie between them. NSIP is temporally uniform, lacks fibroblastic foci and shows little honeycombing, which is why it responds to immunosuppression and carries a much better prognosis. Subpleural distribution and honeycomb cysts support UIP but occur in other fibrosing processes; the age mix does not.',
      tests: 'disease',
    },
  ],
};

export default rbpRestrictiveInterstitialLung;
