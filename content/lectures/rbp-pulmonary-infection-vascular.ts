import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpPulmonaryInfectionVascular: Lecture = {
  id: 'rbp-pulmonary-infection-vascular',
  title: 'Pulmonary Infection & Vascular Disease',
  system: 'respiratory',
  source: 'Ch 12 — Lung',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 12 Lung' },
    { kind: 'mechanism', label: 'Alveolar exudate, caseation & the dual pulmonary blood supply' },
    { kind: 'disease', label: 'Lobar and bronchopneumonia, tuberculosis, embolism, pulmonary hypertension' },
  ],

  highYield: [
    '**Pneumonia is classified morphologically before it is classified microbiologically, and the two patterns differ because of how far the organism can spread from where it landed.** **BRONCHOPNEUMONIA** is **patchy, peribronchiolar** consolidation: abruptly bordered, slightly elevated, dry granular foci of **3–4 cm**, usually **multilobar, bilateral and basal**, because the organism stays close to the airways that delivered it and gravity decides which ones those are. **LOBAR pneumonia** is **uniform consolidation of an entire lobe** and is due to **Streptococcus pneumoniae in over 90%** of cases, because the pneumococcus spreads freely through the **pores of Kohn and canals of Lambert** from alveolus to alveolus until it meets a fissure. That one anatomical fact generates the whole difference: unimpeded lateral spread gives a lobe, restricted spread gives patches. Bronchopneumonia is the pattern of the debilitated, the very young and old, and of **aspiration**; Staphylococcus aureus, Haemophilus influenzae, Pseudomonas and coliforms produce it. Antibiotics now abort the classic staged progression of lobar disease, which is why you will read about its four stages far more often than you will see them. The pattern catalogue is set out in [[pneumonia-pathology-patterns]].',
    '**The four stages of lobar pneumonia are one week in the life of a single lobe, and each stage is named for what fills the alveoli.** **CONGESTION (days 1–2)**: heavy, boggy, red lung with vascular engorgement, intra-alveolar **protein-rich fluid, numerous bacteria and few neutrophils**. **RED HEPATISATION (days 2–4)**: alveoli packed with **neutrophils, red cells and fibrin**, so the lobe is red, firm and airless with the consistency and cut surface of liver — the entire meaning of the word hepatisation. **GREY HEPATISATION (days 4–6)**: the red cells disintegrate while the **fibrinosuppurative exudate persists**, giving a grey-brown, dry surface. **RESOLUTION (from about day 8)**: enzymes digest the exudate into granular semifluid debris that macrophages ingest and the patient expectorates. The decisive structural point is that in pneumococcal pneumonia the **alveolar WALL is never destroyed**, so resolution restores **normal architecture** no matter how much of the lobe was consolidated. Organisms that do destroy the wall — **Staphylococcus aureus, Klebsiella, anaerobes, Pseudomonas** — cannot resolve that way and leave **abscess, empyema and permanent fibrous scarring** instead.',
    '**In atypical (interstitial) pneumonia the inflammation sits in the SEPTA and the alveoli stay open, which is why the film looks far worse than the patient.** The septa are widened by a **mononuclear infiltrate of lymphocytes, plasma cells and macrophages**, while the alveolar spaces contain **no cellular exudate** — at most some proteinaceous material, or **hyaline membranes** when the injury is severe enough to be diffuse alveolar damage. Because consolidation requires alveoli that are FULL, this histology produces **no bronchial breathing, no increased vocal resonance, and almost no sputum**, yet the thickened interstitium casts **diffuse reticular or patchy shadowing** across the radiograph. The discordance is the diagnosis. **Mycoplasma pneumoniae** is the commonest cause and produces **cold agglutinins in roughly half** of patients; **Chlamydophila, Coxiella burnetii** and the respiratory viruses — influenza, RSV, adenovirus, SARS-CoV-2 — do the same thing. The other clinical consequence follows from the same anatomy: gas transfer is impaired across a thickened membrane, so hypoxaemia can be marked while the chest sounds clear.',
    '**Tuberculosis is a granulomatous compromise: the caseous necrosis IS the containment, and where the lesion sits tells you whether it is primary or reactivated.** In **PRIMARY** infection, inhaled bacilli land in the best-ventilated zone and produce the **GHON FOCUS** — a **1–1.5 cm subpleural area of grey-white consolidation straddling the fissure**, in the lower part of the upper lobe or the upper part of the lower lobe. With the caseating **hilar lymph node** that drains it, this is the **GHON COMPLEX**; fibrosed and calcified, it becomes the **RANKE COMPLEX**. The granuloma itself is **central amorphous eosinophilic caseous necrosis** ringed by **epithelioid macrophages, Langhans giant cells** and a lymphocyte cuff. It forms because **CD4 TH1** cells release **interferon-γ** to activate macrophages, an adaptive response that takes about **3 weeks** to develop — the same interval after which the tuberculin test converts, because both are the same **type IV hypersensitivity**. **SECONDARY (reactivation)** disease is **APICAL**, in the posterior segments of the upper lobes, for a straightforwardly mechanical reason: the apex has the **highest ventilation-to-perfusion ratio**, therefore the **highest alveolar oxygen tension**, and **Mycobacterium tuberculosis is a strict aerobe**. It **cavitates** because hypersensitivity already exists, so the destructive response is immediate and erodes into an airway — which is also what makes the patient infectious.',
    '**Most pulmonary emboli do NOT infarct the lung, and the reason is anatomy: the lung has two arterial supplies, so infarction identifies a compromised patient rather than a larger clot.** Roughly **60–80%** of pulmonary emboli are clinically silent and lysed; only about **10%** produce infarction, and they do so where **bronchial arterial flow is already inadequate** — left ventricular failure, shock, or pre-existing lung disease. When infarction does occur it is **RED (haemorrhagic) and wedge-shaped, with the base at the pleura and the apex pointing at the occluded vessel**, because loose spongy parenchyma with a second arterial supply allows blood to pour back into the dead zone. It is raised, firm and blue-red at first, turns red-brown as haemosiderin accumulates, and contracts over weeks into a **grey-white depressed fibrous scar**. A **fibrinous pleuritis** over the base is what generates the rub, the pleuritic pain and a small effusion. Separately from infarction, obstruction of more than about **60%** of the pulmonary vascular bed causes acute right ventricular failure and sudden death regardless of tissue viability — the **saddle embolus** kills by cross-sectional area, not by ischaemia. The general rules of embolism and infarct colour are developed in [[rbp-embolism-infarction-shock]].',
    '**Pulmonary hypertension is defined as a mean pulmonary artery pressure of 25 mmHg or more at rest, and the morphology is the same whatever the cause — only the plexiform lesion is specific.** The normal pulmonary circulation runs at about **one-eighth** of systemic pressure, so it has thin-walled muscular arteries with almost no arteriolar muscle. Under chronic pressure load they remodel identically: **medial hypertrophy** of muscular arteries, **muscularisation of arterioles that normally have no media**, **intimal fibrosis** and, in severe primary disease, the **PLEXIFORM LESION** — a tuft of capillary-like channels filling a dilated, thin-walled artery, which marks irreversible disease. The causes divide by where the pressure comes from. **Chronic hypoxia** acts through **hypoxic pulmonary vasoconstriction**, the one vascular bed in the body that CONSTRICTS in hypoxia rather than dilating, which is adaptive when one lobe is diseased and catastrophic when the whole lung is. **Left heart disease** raises it from downstream. **Chronic thromboembolic** disease obliterates the bed mechanically. **Idiopathic pulmonary arterial hypertension** is the one with a named genetic lesion: inactivating **BMPR2** mutations in around **75%** of familial cases remove a TGF-β superfamily brake on pulmonary vascular smooth muscle proliferation. The endpoint in every case is **right ventricular hypertrophy and cor pulmonale**; see [[ards-pulmonary-hypertension-atelectasis]].',
  ],

  mechanism: {
    title: 'Pneumococcal alveolitis through the four stages of consolidation',
    steps: [
      { id: 's1', label: 'Aspirated pneumococci evade mucociliary clearance and reach the alveolus, capsule blocking phagocytosis until opsonised', emphasis: 'normal' },
      { id: 's2', label: 'Macrophage TNF and IL-1 engorge the capillaries and flood alveoli with protein-rich fluid — congestion, days 1 to 2', detail: 'Bacteria are numerous at this stage and neutrophils few; the lung is heavy, boggy and red.', emphasis: 'key' },
      { id: 's3', label: 'Neutrophils, red cells and fibrin pack the airspaces — red hepatisation, days 2 to 4', detail: 'Red, firm and airless with the cut surface of liver, which is the whole origin of the name.', emphasis: 'key' },
      { id: 's4', label: 'Red cells lyse while the fibrinosuppurative exudate persists — grey hepatisation, days 4 to 6', emphasis: 'key' },
      { id: 's5', label: 'Spread through the pores of Kohn and canals of Lambert makes consolidation uniform across the lobe while alveolar WALLS remain intact', detail: 'Free lateral spread until a fissure stops it is what makes pneumococcal disease lobar rather than patchy.', emphasis: 'key' },
      { id: 's6', label: 'Enzymatic digestion clears the exudate and architecture is fully restored — unless the organism necroses the wall, when abscess, empyema and permanent scar follow', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bronchial breathing with increased vocal resonance, whispering pectoriloquy and stony dull percussion over one lobe', mechanism: 'Alveoli filled with solid exudate transmit the high-frequency sound of the large airways that aerated lung normally filters out; this requires the airspace to be FULL, so it is a sign of consolidation and never of interstitial disease', significance: 'key' },
    { sign: 'A pleural rub with sharp pleuritic pain and haemoptysis three days after hip arthroplasty', mechanism: 'Pulmonary infarction with fibrinous pleuritis over the pleural base of the wedge. Because the lung has a dual supply, infarction marks inadequate bronchial arterial flow rather than a larger embolus', significance: 'key' },
    { sign: 'Widespread reticular shadowing on the film in a young adult with a dry cough whose chest sounds essentially normal', mechanism: 'Interstitial pneumonia: mononuclear inflammation widens the septa while alveoli stay open, so the interstitium is radiologically loud and acoustically silent', significance: 'key' },
    { sign: 'Drenching night sweats, weight loss and post-tussive crackles heard over the apices and upper posterior chest', mechanism: 'Reactivation tuberculosis in the apical and posterior segments, where the highest ventilation-to-perfusion ratio gives the highest alveolar oxygen tension for a strict aerobe', significance: 'key' },
    { sign: 'A loud palpable second heart sound in the pulmonary area with a left parasternal heave and giant v waves in the jugular venous pulse', mechanism: 'Raised pulmonary artery pressure snaps the pulmonary valve shut harder, the pressure-loaded right ventricle lifts the sternum, and secondary tricuspid regurgitation transmits ventricular systole to the neck', significance: 'supportive' },
    { sign: 'Patchy dullness with coarse crackles at both bases and posteriorly in a bed-bound stroke patient', mechanism: 'Aspiration bronchopneumonia distributed by gravity into the dependent segments; the patchiness reflects organisms that stay near the bronchiole that delivered them', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dense uniform opacification confined to the right middle lobe, containing air bronchograms and silhouetting the right heart border', meaning: 'Lobar consolidation. The air bronchogram proves the airspaces around a still-patent bronchus are filled, and the fissure-bounded margin points to pneumococcal spread through pores of Kohn' },
    { clue: 'Sputum Gram stain with more than 25 neutrophils and fewer than 10 squamous epithelial cells per low-power field, showing lancet-shaped gram-positive diplococci', meaning: 'A valid lower respiratory specimen. The squamous cell count is what validates it — a high count means saliva, and no organism reported from saliva means anything' },
    { clue: 'Thick gelatinous sputum with an upper-lobe cavity and a fissure bulging downward', meaning: 'Klebsiella pneumoniae. The voluminous mucoid exudate expands the lobe enough to bow the fissure, and because this organism necroses alveolar walls it leaves abscess and permanent scar rather than resolving' },
    { clue: 'Biopsy showing caseating granulomas with Langhans giant cells, and beaded acid-fast bacilli on Ziehl-Neelsen', meaning: 'Tuberculosis. Note what a positive tuberculin test or interferon-gamma release assay would NOT have told you: both detect type IV sensitisation and cannot separate latent infection from active disease' },
    { clue: 'CT pulmonary angiogram with a segmental filling defect and a peripheral wedge-shaped pleural-based opacity', meaning: 'Embolism that has infarcted. The wedge identifies a patient whose bronchial arterial flow was already compromised, so look for left ventricular failure or shock rather than assuming a bigger clot' },
    { clue: 'Echocardiogram with right ventricular dilatation, septal flattening and an estimated right ventricular systolic pressure of 68 mmHg', meaning: 'Pulmonary hypertension — but the echo cannot say where it comes from. Right heart catheterisation with a pulmonary capillary wedge pressure at or below 15 mmHg is what proves the lesion is precapillary rather than left-sided' },
  ],

  treatment: [
    {
      logic: 'Ask whether the organism destroys the alveolar wall before you predict the outcome',
      detail: 'This single architectural question sets both prognosis and procedure. **Streptococcus pneumoniae fills alveoli but leaves the septa intact**, so even a whole consolidated lobe resolves to a normal architecture — though the radiograph lags clinical recovery by around **6 weeks**, which is why a film repeated too early causes needless alarm. **Staphylococcus aureus, Klebsiella, anaerobes and Pseudomonas necrose the wall**, so they generate **abscess, empyema and permanent fibrosis**, and those need **drainage** as well as antibiotics. The rule that follows is mechanical: **antibiotics cannot sterilise pus trapped behind a fibrinous peel**, because the drug cannot reach a bacterial population sitting in an avascular, acidic, protein-rich collection at high density. Empirical antibiotic selection itself belongs to [[community-acquired-pneumonia]].',
    },
    {
      logic: 'Correct hypoxaemia to lower pulmonary pressure, and never give pulmonary vasodilators to the wrong group',
      detail: 'The pulmonary bed is the only one that **CONSTRICTS in hypoxia**, so sustained oxygen is a genuine pulmonary vasodilator: in chronic lung disease, **long-term oxygen therapy for chronic hypoxaemia** is the only intervention that both lowers pulmonary artery pressure and prolongs life. The corollary is a hard prohibition. In **left heart disease**, a pulmonary vasodilator increases flow into a bed that still cannot drain past a high left atrial pressure, and the patient develops **pulmonary oedema**. In **chronic lung disease**, it abolishes hypoxic vasoconstriction indiscriminately, perfusing unventilated units and **worsening the shunt and the hypoxaemia**. Targeted vasodilators belong to **pulmonary arterial hypertension** — the precapillary group with a normal wedge pressure — and that is why the catheter, not the echocardiogram, licenses the prescription.',
    },
  ],

  mnemonics: [
    {
      hook: 'Hepatisation means it feels like liver — that is the whole of the name',
      expansion: [
        'Congestion, days 1 to 2: heavy, boggy, red; fluid and bacteria, few neutrophils',
        'Red hepatisation, days 2 to 4: neutrophils, red cells and fibrin; red, firm, airless, liver-like',
        'Grey hepatisation, days 4 to 6: red cells lyse, fibrinosuppurative exudate stays; grey-brown and dry',
        'Resolution, from day 8: enzymes digest, macrophages clear, architecture returns',
        'Architecture returns only because pneumococcus never destroyed the alveolar wall',
      ],
    },
    {
      hook: 'Primary tuberculosis lands in the middle; reactivation climbs to the apex',
      expansion: [
        'Ghon focus: 1 to 1.5 cm subpleural consolidation straddling the fissure — best-ventilated zone for a deposited droplet',
        'Ghon complex: that focus plus its caseating hilar node; Ranke complex: both fibrosed and calcified',
        'Reactivation is apical and posterior because the apex has the highest ventilation-to-perfusion ratio and so the highest oxygen tension',
        'Mycobacterium tuberculosis is a strict aerobe — that is the entire reason for the apex',
        'It cavitates because type IV hypersensitivity already exists, so the response is destructive from the outset',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A chest film that looks far worse than the chest examination',
      wrongInstinct: 'The film must be over-read, or the patient is compensating well and the findings will appear later',
      rightAnswer: 'The discordance is itself the diagnosis: in interstitial pneumonia the inflammation is in the septa, so the alveoli stay open — the widened interstitium casts shadows while auscultation finds no consolidation and there is little sputum',
      why: 'Bronchial breathing and increased vocal resonance require alveoli that are FULL. The rule: film worse than examination points at the interstitium, film matching the examination points at the airspace',
    },
    {
      questionCategory: 'Predicting which pneumonia leaves permanent damage',
      wrongInstinct: 'The more extensive and severe the consolidation, the more scarring the lung will be left with',
      rightAnswer: 'Ask whether the organism necroses the alveolar WALL. Pneumococcus fills alveoli but spares the septa, so even lobar consolidation resolves to normal; Staphylococcus aureus, Klebsiella, anaerobes and Pseudomonas destroy septa and leave abscess, empyema and fibrosis',
      why: 'The determinant is architectural, not clinical severity — which is why a whole-lobe pneumococcal pneumonia can end with a normal film while a much smaller staphylococcal one cannot',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A lobe removed on day 5 of an untreated pneumonia is firm, airless and grey-brown with a dry cut surface. Histology shows alveoli packed with neutrophils and fibrin, degenerating red cells, and intact alveolar walls. Which stage is this, and what does the wall finding predict?',
      options: [
        { id: 'a', text: 'Congestion; the lung will progress to abscess formation' },
        { id: 'b', text: 'Red hepatisation; architecture will be permanently distorted' },
        { id: 'c', text: 'Grey hepatisation; because the septa are intact, resolution will restore normal architecture' },
        { id: 'd', text: 'Resolution; the fibrin indicates organisation is already under way' },
      ],
      answerId: 'c',
      explanation: 'Grey hepatisation occupies roughly days 4 to 6: the red cells have disintegrated so the surface loses its red colour, while the fibrinosuppurative exudate persists. The prognostic information is in the intact alveolar walls. Pneumococcus fills airspaces without necrosing septa, so enzymatic digestion of the exudate from about day 8 restores normal architecture. Wall-destroying organisms such as Staphylococcus aureus and Klebsiella cannot resolve this way and leave abscess and scar.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A man with previously treated tuberculosis develops a cavitating lesion in the posterior segment of the right upper lobe. Why does reactivation disease favour this location?',
      options: [
        { id: 'a', text: 'Inhaled droplets deposit preferentially at the apex because of airflow turbulence' },
        { id: 'b', text: 'The apex has the highest ventilation-to-perfusion ratio and therefore the highest alveolar oxygen tension, which suits an obligate aerobe' },
        { id: 'c', text: 'Apical alveoli lack surfactant, so macrophage function is reduced there' },
        { id: 'd', text: 'The apical pleura is thinner, allowing easier bacillary access' },
      ],
      answerId: 'b',
      explanation: 'Perfusion falls more steeply than ventilation from base to apex, so the apical ventilation-to-perfusion ratio is the highest in the lung and alveolar oxygen tension there is highest. Mycobacterium tuberculosis is a strict aerobe, so reactivation favours the apical and posterior segments of the upper lobes; poorer apical lymphatic drainage contributes. Primary infection sits elsewhere entirely, forming the Ghon focus near the fissure, which is where a deposited droplet lands best. Cavitation reflects pre-existing type IV hypersensitivity making the response destructive.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 74-year-old with known left ventricular failure has a segmental pulmonary embolus and develops a peripheral wedge-shaped, pleural-based opacity with a pleural rub. A younger patient with an embolus of similar size has neither. What best explains the difference?',
      options: [
        { id: 'a', text: 'The older patient has a larger clot burden than the angiogram indicates' },
        { id: 'b', text: 'The lung has a dual supply, so infarction requires bronchial arterial flow to be inadequate — which left ventricular failure ensures' },
        { id: 'c', text: 'Advanced age abolishes the collateral circulation of the lung' },
        { id: 'd', text: 'The younger patient lysed the embolus before infarction could occur' },
      ],
      answerId: 'b',
      explanation: 'Pulmonary and bronchial arteries both supply the parenchyma, so occluding one usually leaves the tissue viable — roughly 60 to 80% of emboli are clinically silent and only about 10% infarct. Infarction therefore identifies a patient in whom bronchial flow is already compromised by left heart failure, shock or chronic lung disease, not a patient with a bigger clot. When it does occur the infarct is red and wedge-shaped, with the base at the pleura and the apex pointing at the occluded vessel, because loose parenchyma with a second supply lets blood re-enter the dead zone.',
      tests: 'investigation',
    },
  ],
};

export default rbpPulmonaryInfectionVascular;
