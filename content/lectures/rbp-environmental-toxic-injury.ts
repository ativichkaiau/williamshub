import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpEnvironmentalToxicInjury: Lecture = {
  id: 'rbp-environmental-toxic-injury',
  title: 'Environmental & Chemical Injury',
  system: 'pathology',
  source: 'Ch 7 — Environmental and Nutritional Diseases',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 7 Environmental and Nutritional Diseases' },
    { kind: 'mechanism', label: 'Phase I activates → phase II excretes → conjugation outrun → covalent binding → necrosis' },
    { kind: 'exam', label: 'CO gives a normal PaO2 AND a normal SpO2 · NAPQI needs glutathione · a painless burn is a deep burn' },
  ],

  highYield: [
    '**Phase I makes a xenobiotic more reactive; phase II makes it leave — and the dangerous step is the first one.** Phase I is oxidation, almost always by a **cytochrome P450** in the smooth endoplasmic reticulum of the hepatocyte, and its product is frequently **more electrophilic and more toxic than the parent compound**. Phase II then conjugates that intermediate to **glucuronate, sulfate, glutathione, acetate or a methyl group**, making it water-soluble and excretable. The rule examiners build on is therefore counterintuitive: **metabolism can activate a poison rather than detoxify it**, and toxicity appears at the moment phase I outruns phase II. **Carbon tetrachloride** is the classic — CYP2E1 turns an inert dry-cleaning solvent into the **trichloromethyl free radical**, which reacts with oxygen to give a still more aggressive peroxy radical, and **membrane lipid peroxidation begins within 30 minutes**: ribosomes detach, apolipoprotein synthesis stops, triglyceride cannot be exported, and **the liver is fatty hours before it is necrotic**. Two corollaries fall out. First, **P450 is inducible** — chronic alcohol, isoniazid and fasting all raise CYP2E1, so the same swallowed dose yields more reactive metabolite. Second, dose-response is real but not always linear: acute and chronic exposure to one agent can be **two different diseases**, as acute alcohol is a CNS depressant while chronic alcohol is a fibrogenic hepatotoxin. Where this sits in the general scheme of cell injury: [[cell-injury-mechanisms]].',
    '**Paracetamol is the worked example of bioactivation, and it explains its own antidote.** At therapeutic dose roughly **90% is conjugated** by glucuronidation and sulfation and simply excreted, while only about **5 to 10% passes through CYP2E1** to **NAPQI**, a reactive quinone imine that **glutathione neutralises before it can reach anything**. In overdose the conjugating pathways saturate, NAPQI production climbs, and **once hepatic glutathione falls below roughly 30% of normal** free NAPQI **binds cysteine residues on mitochondrial proteins**, opens the permeability transition pore and kills the cell. The injury is **centrilobular, zone 3**, because zone 3 has the highest CYP2E1 content and the lowest oxygen tension — the same reason carbon tetrachloride and ischaemia both land there. **N-acetylcysteine works for exactly one reason: it is a cysteine donor that regenerates glutathione**, and it secondarily restores sulfate for the phase II arm and scavenges NAPQI directly. That mechanism dictates the timing — it is **near-completely protective started within 8 hours and progressively less useful afterwards**, because by then the covalent binding has already happened. **ALT peaks at 72 to 96 hours**, so a normal ALT on arrival excludes nothing; treat on the timed level, never on the enzymes.',
    '**Tobacco is a multi-organ carcinogen with a genuine, measurable dose-response — pack-years, not a yes-or-no exposure.** Cigarette smoke carries **more than 7000 constituents and roughly 70 established carcinogens**, and the leading ones are activated rather than detoxified. **Benzo(a)pyrene**, a polycyclic aromatic hydrocarbon, is inert until **CYP1A1 converts it to a diol epoxide** that binds guanine and generates the **G-to-T transversions in TP53** characteristic of smokers’ lung cancers — phase I activation again, this time in a carcinogen. **Nitrosamines such as NNK** target lung, and the aromatic amines **2-naphthylamine and 4-aminobiphenyl** target bladder urothelium because that is where they are concentrated for excretion. Smoking causes roughly **90% of lung cancer**, raising risk **about tenfold overall and twentyfold or more with heavy long-term use**, and it also causes carcinoma of the **larynx, oral cavity, oesophagus, pancreas, bladder, kidney, stomach and cervix** plus myeloid leukaemia. The interactions are **multiplicative, not additive**: smoking with asbestos raises lung cancer risk far beyond the sum of either, and smoking with alcohol does the same in the upper aerodigestive tract. Cessation lowers risk steadily but **does not return it to a never-smoker’s baseline**, and maternal smoking causes intrauterine growth restriction through carbon monoxide and nicotine-driven vasoconstriction. Exposure-specific detail: [[environmental-chemical-tobacco-injury]].',
    '**One number explains most of chronic alcohol pathology: the NADH to NAD+ ratio.** Alcohol dehydrogenase converts ethanol to **acetaldehyde** and aldehyde dehydrogenase converts that to acetate, and **both steps reduce NAD+ to NADH**, so the hepatocyte cytosol becomes profoundly reduced. Follow the consequences one at a time and the whole syndrome is derivable. Excess NADH **blocks fatty acid oxidation and drives dihydroxyacetone phosphate to glycerol-3-phosphate**, so triglyceride is synthesised and retained — **that is alcoholic fatty liver, and it is fully reversible**. The same ratio pushes **pyruvate to lactate**, producing a lactic acidosis, stripping out the substrate for gluconeogenesis and causing **fasting hypoglycaemia in a drinker who has not eaten**; the lactate then **competes with urate for renal excretion**, which is the mechanism of alcoholic gout. It also favours **beta-hydroxybutyrate over acetoacetate**, so the bedside nitroprusside ketone test can read falsely negative in alcoholic ketoacidosis. Chronic use additionally **induces CYP2E1**, adding reactive oxygen species and the paracetamol hazard above. Steatosis progresses through **alcoholic hepatitis — ballooned hepatocytes, Mallory-Denk bodies and a neutrophil infiltrate — to cirrhosis in about 10 to 15% of heavy drinkers**, and an **AST to ALT ratio above 2** points at alcohol rather than viral hepatitis. Host genetics matter here too: **roughly 30 to 50% of people of East Asian descent carry the inactivating ALDH2 variant**, accumulate acetaldehyde, flush after small amounts, and carry a clearly raised oesophageal cancer risk if they drink regardless.',
    '**Three classical poisons carry most of the exam weight, and each has one mechanism that generates all of its signs.** **Lead** binds sulfhydryl groups and blocks two enzymes of haem synthesis — **δ-aminolevulinate dehydratase and ferrochelatase** — giving a **microcytic anaemia with raised free erythrocyte protoporphyrin and ringed sideroblasts**; it separately inhibits **pyrimidine-5′-nucleotidase**, so ribosomal RNA is not degraded and **basophilic stippling** appears in the red cells. Because it substitutes for calcium it deposits in bone, producing **dense metaphyseal lines on a child’s radiograph** and the gingival **Burton line** of lead sulfide. **Children absorb roughly 50% of ingested lead against about 15% in adults**, have an incompletely formed blood-brain barrier, and absorb still more when iron-deficient because lead and iron share the DMT1 transporter — which is why **encephalopathy is the paediatric presentation and wrist drop from motor neuropathy the adult one**. **Carbon monoxide** binds haemoglobin with **roughly 200 times the affinity of oxygen** and then does something worse: it **left-shifts the dissociation curve of the remaining binding sites**, so the little oxygen still carried will not unload. It also inhibits cytochrome c oxidase and binds myoglobin. **Mercury** also works through sulfhydryl groups, but the syndrome is decided by the chemical species: **vapour goes to brain** (tremor, erethism, gingivostomatitis), **inorganic salts go to kidney** (corrosive gastritis and acute tubular necrosis), and **organic methylmercury bioaccumulates up the fish food chain, crosses the placenta, and destroys cerebellum and visual cortex**.',
    '**Physical injury kills through its systemic consequences, not through the wound you can see.** In a **burn**, depth is read at the bedside from two signs: a **superficial partial-thickness burn blisters, blanches and hurts**, whereas a **full-thickness burn is dry, leathery, non-blanching and painless** because the nerve endings have been destroyed — so **painlessness is a marker of severity, not of mildness**. Beyond roughly **20% of body surface** the injury becomes systemic: **cytokine-driven capillary leak drains the circulation over the first 24 to 48 hours**, which is why the patient who looks stable at six hours is shocked at eighteen; a **hypermetabolic state approaching twice basal rate** then runs for weeks; and **infection — classically Pseudomonas aeruginosa, with Staphylococcus aureus and Candida — is what actually kills** once the resuscitation window closes. **Electrical injury** follows the current path: low-voltage alternating current causes **tetanic contraction that prevents letting go, and ventricular fibrillation**, while high voltage cooks deep tissue along its route so that the small entry and exit wounds **systematically understate the muscle destroyed**, and **myoglobinuric acute kidney injury** follows. **Ionising radiation** breaks DNA, about two-thirds of it indirectly through hydroxyl radicals generated from water, and **the double-strand break is the lethal lesion**; sensitivity therefore tracks **proliferation rate**, so marrow, gut crypts, gonads and hair follicles fail first and **the falling lymphocyte count is the earliest practical dosimeter**. The acute syndromes arrive in dose order — **haematopoietic at roughly 2 to 10 Gy, gastrointestinal at 10 to 20 Gy, cerebrovascular above 50 Gy** — while the late effects are **fibrosis, vascular narrowing and second malignancy with no safe threshold**. Fuller treatment of the physical agents: [[physical-nutritional-injury]]. The nutritional half of this chapter: [[rbp-nutritional-disease-obesity]].',
  ],

  mechanism: {
    title: 'Paracetamol: conjugation saturates → CYP2E1 makes NAPQI → glutathione fails → covalent binding → zone 3 necrosis',
    steps: [
      { id: 's1', label: 'Therapeutic dose: about 90% glucuronidated and sulfated, excreted harmlessly', detail: 'Only 5 to 10% enters the oxidative arm, and a trivial fraction leaves unchanged.', emphasis: 'normal' },
      { id: 's2', label: 'CYP2E1 oxidises that fraction to NAPQI — a more reactive electrophile than the drug itself', detail: 'Phase I has increased toxicity, not reduced it. CYP1A2 and CYP3A4 contribute.', emphasis: 'key' },
      { id: 's3', label: 'Glutathione conjugates NAPQI and it is excreted as mercapturate', detail: 'At therapeutic dose this arm never comes close to its ceiling.', emphasis: 'normal' },
      { id: 's4', label: 'Overdose saturates glucuronidation and sulfation, so a far larger share is shunted through CYP2E1', detail: 'NAPQI production rises while glutathione is being consumed to remove it.', emphasis: 'key' },
      { id: 's5', label: 'Glutathione falls below about 30% of normal and free NAPQI binds cysteine residues on mitochondrial proteins', detail: 'Covalent adducts open the mitochondrial permeability transition pore; ATP collapses and reactive oxygen species rise.', emphasis: 'danger' },
      { id: 's6', label: 'Centrilobular zone 3 necrosis at 24 to 72 hours: ALT in the thousands, then coagulopathy, acidosis and encephalopathy', detail: 'Zone 3 has the most CYP2E1 and the least oxygen. ALT peaks at 72 to 96 hours, so it is a late marker, never a screening one.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's5',
        title: 'Why N-acetylcysteine rescues this and nothing else does',
        steps: [
          { id: 'b1', label: 'NAC is deacetylated to cysteine, the rate-limiting substrate for glutathione synthesis', emphasis: 'key' },
          { id: 'b2', label: 'Restored glutathione conjugates NAPQI before it can bind protein; NAC also supplies sulfate and scavenges NAPQI directly', emphasis: 'key' },
          { id: 'b3', label: 'Near-complete protection within 8 hours, declining afterwards because the covalent binding has already occurred', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'A confused fire victim with PaO2 of 13 kPa and a pulse oximeter reading 98%', mechanism: 'Carbon monoxide leaves dissolved oxygen untouched, so PaO2 is normal, and a two-wavelength oximeter reads carboxyhaemoglobin as oxyhaemoglobin. Both numbers are measuring the wrong thing', significance: 'key' },
    { sign: 'Hepatocyte necrosis concentrated around the central vein with the periportal rim spared', mechanism: 'Zone 3 carries the highest CYP2E1 activity and the lowest oxygen tension, so it bioactivates most and tolerates least — the shared signature of paracetamol, carbon tetrachloride and ischaemia', significance: 'key' },
    { sign: 'Basophilic stippling of red cells with a microcytic anaemia and a blue-grey line along the gum margin', mechanism: 'Lead inhibits pyrimidine-5′-nucleotidase so ribosomal RNA persists as stippling, and blocks ferrochelatase and ALA dehydratase so haem synthesis fails; the gingival line is precipitated lead sulfide', significance: 'key' },
    { sign: 'A dry, leathery, waxy-white burn that does not blanch and does not hurt', mechanism: 'Full-thickness destruction has taken the dermal nerve endings and the dermal capillary plexus with it — the absence of pain and of blanching are both signs of depth', significance: 'key' },
    { sign: 'A burned patient who is haemodynamically stable at six hours and profoundly shocked at eighteen', mechanism: 'Cytokine-driven capillary leak proceeds over 24 to 48 hours after a burn exceeding roughly 20% of body surface; an early normal blood pressure predicts nothing about the next day', significance: 'key' },
    { sign: 'Intention tremor, gingivostomatitis and pathological shyness in an industrial worker', mechanism: 'Elemental mercury vapour is lipid-soluble, crosses the blood-brain barrier and is then oxidised and trapped intracellularly — the erethism of the classical hatter', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Carboxyhaemoglobin by co-oximetry, and why a standard pulse oximeter cannot substitute', meaning: 'Co-oximetry uses four or more wavelengths and can separate the haemoglobin species; the bedside two-wavelength oximeter cannot, because carboxyhaemoglobin and oxyhaemoglobin absorb almost identically at 660 nm' },
    { clue: 'The half-life of carboxyhaemoglobin on room air, on 100% oxygen and at 3 atmospheres', meaning: 'About 4 to 5 hours, 60 to 90 minutes, and 20 to 30 minutes — the entire rationale for immediate high-flow oxygen on suspicion alone, before any level returns' },
    { clue: 'A paracetamol concentration drawn at 4 hours rather than at 1 hour', meaning: 'Absorption is incomplete before 4 hours, so an early sample under-reads and falsely reassures; the treatment nomogram is anchored at 4 hours and an untimed level is uninterpretable' },
    { clue: 'ALT on arrival after a paracetamol overdose', meaning: 'Normal, and meaningless. Bioactivation and covalent binding precede necrosis by a day, and ALT peaks at 72 to 96 hours — treat on the timed level, never on the enzymes' },
    { clue: 'Zinc protoporphyrin raised in both lead poisoning and iron deficiency', meaning: 'Both starve ferrochelatase of usable substrate, so the test cannot separate them. Basophilic stippling, a normal or high ferritin and a blood lead level are what discriminate' },
    { clue: 'Creatine kinase and urinary myoglobin after a high-voltage electrical injury', meaning: 'The visible entry and exit wounds understate the muscle destroyed along the current path; once the arrhythmia window has passed, myoglobinuric acute kidney injury is the thing that kills' },
  ],

  treatment: [
    { logic: 'An antidote works by the mechanism or it does not work at all', detail: 'Every antidote in this chapter is a mechanism restated. **N-acetylcysteine is a cysteine donor**, so it regenerates glutathione and is near-complete protection **within 8 hours**, weakening steadily after that because the adducts are already formed — which is why it is started on the history and stopped if the timed level is below the line, never the other way round. **Oxygen is the antidote to carbon monoxide** because competition is the only lever available: 100% oxygen cuts the carboxyhaemoglobin half-life from 4 to 5 hours to 60 to 90 minutes, and hyperbaric oxygen to 20 to 30 minutes. **Lead is chelated**, but the order matters — in encephalopathy **dimercaprol goes in before calcium disodium EDTA**, because EDTA alone can mobilise lead out of bone and redistribute it into the brain; oral succimer covers the milder paediatric case. In burns, the treatment is a **prediction rather than a reaction**: fluid is calculated from surface area and given before the shock appears, because waiting for hypotension means resuscitating a patient who has already lost 48 hours of plasma. Early excision and grafting exist to shut the infection door that kills most burn patients who survive the first day.' },
    { logic: 'Where this chapter is examined', detail: 'Five stems recur, and all five are mechanism questions dressed as clinical ones. **The carbon monoxide oximetry trap** — a normal PaO2 with a normal SpO2 in a fire victim, where the expected answer is co-oximetry and immediate oxygen. **NAPQI and the glutathione threshold**, with the follow-up asking why a malnourished chronic drinker is injured by a licensed dose (induced CYP2E1 making more, depleted glutathione removing less — both arms move the wrong way). **The NADH to NAD+ ratio**, from which fatty liver, lactic acidosis, fasting hypoglycaemia and hyperuricaemia all follow without memorising any of them. **Lead**, where basophilic stippling plus a microcytic anaemia plus a lead line is the triad, and the paediatric-versus-adult split is explained by absorption fraction and an immature blood-brain barrier. And **burn depth**, where the trick is that a painless burn is the deep one. Physical and nutritional injury are examined together for a reason: **malnutrition depletes glutathione and lowers every toxic threshold in this module** — see [[rbp-nutritional-disease-obesity]].' },
  ],

  mnemonics: [
    {
      hook: 'Phase I makes it reactive; phase II makes it leave',
      expansion: [
        'Phase I is cytochrome P450 oxidation, and its product is often worse than its substrate: paracetamol to NAPQI, carbon tetrachloride to a trichloromethyl radical, benzo(a)pyrene to a diol epoxide',
        'Phase II is conjugation — glucuronate, sulfate, glutathione, acetate, methyl — and it makes the molecule water-soluble and excretable',
        'Toxicity appears when phase I outruns phase II: too much substrate, an induced P450, or a depleted conjugate',
        'So the fast metaboliser is at greater risk, not less, and starvation or chronic alcohol lowers the threshold on both sides at once',
      ],
    },
    {
      hook: 'Carbon monoxide: the PaO2 is honest, the SpO2 is a lie, and the curve is the killer',
      expansion: [
        'PaO2 measures dissolved oxygen, which CO never touches, so it is genuinely normal',
        'A two-wavelength oximeter cannot distinguish carboxyhaemoglobin from oxyhaemoglobin at 660 nm, so SpO2 reads high and false',
        'The 200-fold affinity is only half the injury: CO also left-shifts the curve at the remaining sites so the carried oxygen will not unload',
        'Therefore give 100% oxygen on suspicion and confirm with co-oximetry, and never wait for cherry-red skin, which is a postmortem finding',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A reassuring oxygen saturation in a patient pulled from a fire',
      wrongInstinct: 'SpO2 of 98% with a normal PaO2 means oxygenation is adequate, so carbon monoxide poisoning is excluded',
      rightAnswer: 'Both numbers are normal in severe CO poisoning by design. Measure carboxyhaemoglobin by co-oximetry and start 100% oxygen on suspicion alone',
      why: 'Carboxyhaemoglobin and oxyhaemoglobin absorb almost identically at 660 nm, so the bedside oximeter counts one as the other; PaO2 reports dissolved oxygen, which carbon monoxide does not affect. Neither device is being inaccurate — both are measuring something the poison does not change.',
    },
    {
      questionCategory: 'What metabolism does to a poison',
      wrongInstinct: 'Metabolism detoxifies, so a rapid metaboliser clears the drug faster and is protected',
      rightAnswer: 'Phase I oxidation frequently creates a more reactive electrophile, so faster CYP2E1 means more NAPQI and greater risk, not less',
      why: 'Chronic alcohol use, isoniazid and fasting all induce CYP2E1 while simultaneously depleting glutathione, so production rises as removal falls — which is exactly why a dose inside the licensed range can be hepatotoxic in one person and harmless in another.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A malnourished man with a long history of heavy drinking takes 6 g of paracetamol over 24 hours for back pain — well below the usual toxic threshold — and develops fulminant hepatic failure with zone 3 necrosis. The best explanation is:',
      options: [
        { id: 'a', text: 'Alcohol and paracetamol compete for the same glucuronidation enzyme, so less drug is cleared' },
        { id: 'b', text: 'Chronic alcohol induces CYP2E1, raising NAPQI production, while alcohol and malnutrition deplete the glutathione that would neutralise it' },
        { id: 'c', text: 'Ethanol is itself converted to NAPQI, so the two exposures produce the same metabolite' },
        { id: 'd', text: 'Pre-existing cirrhosis prevents any phase I oxidation, so the parent drug accumulates unchanged and injures the hepatocyte directly' },
      ],
      answerId: 'b',
      explanation: 'Both arms of the balance move the wrong way at once, which is the whole point of the question. Induction of CYP2E1 shunts a larger fraction of the dose down the oxidative path, so more NAPQI is generated per gram swallowed; depleted glutathione means less capacity to conjugate it, and injury begins once glutathione falls below roughly 30% of normal. Option a inverts the mechanism — the problem is more oxidation, not less conjugation of the parent drug by competition. Ethanol is not metabolised to NAPQI. Option d is self-defeating: paracetamol is not directly hepatotoxic, and without phase I oxidation there would be no injury at all.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 30-year-old is brought from a house fire, confused and headachy. Arterial blood gas shows PaO2 13.5 kPa and the pulse oximeter reads 97%. The most appropriate interpretation and next step is:',
      options: [
        { id: 'a', text: 'Oxygenation is adequate; carbon monoxide poisoning is unlikely and observation is sufficient' },
        { id: 'b', text: 'The blood gas machine has directly measured carboxyhaemoglobin, so a normal PaO2 excludes it' },
        { id: 'c', text: 'Both values are expected to be normal in CO poisoning; send co-oximetry and start 100% oxygen immediately' },
        { id: 'd', text: 'Wait for cherry-red discolouration of the skin before committing to the diagnosis' },
      ],
      answerId: 'c',
      explanation: 'PaO2 measures oxygen dissolved in plasma, which carbon monoxide does not alter, so it is genuinely normal. A standard two-wavelength pulse oximeter reads carboxyhaemoglobin as oxyhaemoglobin because their absorbance at 660 nm is nearly identical, so SpO2 is falsely high. Only co-oximetry, which uses four or more wavelengths, separates the species. Oxygen is started before the result returns because competition is the only available lever: 100% oxygen cuts the carboxyhaemoglobin half-life from 4 to 5 hours down to 60 to 90 minutes. Cherry-red skin is unreliable in the living patient and is largely a postmortem observation, so waiting for it wastes the window.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A man who has been drinking heavily for two days without eating is found with a blood glucose of 2.4 mmol/L, a lactic acidosis, a urate of 540 micromol/L and a fatty liver on ultrasound. The single biochemical change that accounts for all four findings is:',
      options: [
        { id: 'a', text: 'Direct inhibition of hepatic glycogen phosphorylase by acetaldehyde' },
        { id: 'b', text: 'A rise in the cytosolic NADH to NAD+ ratio from oxidation of ethanol and then acetaldehyde' },
        { id: 'c', text: 'Induction of CYP2E1 with increased reactive oxygen species production' },
        { id: 'd', text: 'Depletion of hepatic glutathione by covalent binding of acetaldehyde adducts' },
      ],
      answerId: 'b',
      explanation: 'Both oxidative steps reduce NAD+ to NADH, so the cytosol becomes heavily reduced, and every finding follows from that one shift. Pyruvate is driven to lactate, which produces the acidosis, removes the substrate for gluconeogenesis and so causes the hypoglycaemia in a fasted drinker, and then competes with urate for renal tubular excretion. In parallel, excess NADH blocks fatty acid oxidation and pushes dihydroxyacetone phosphate to glycerol-3-phosphate, favouring triglyceride synthesis and retention — the fatty liver. CYP2E1 induction and acetaldehyde adducts are both real and both matter for chronic injury and for the paracetamol interaction, but neither explains the hypoglycaemia and the hyperuricaemia in the same stroke.',
      tests: 'mechanism',
    },
  ],
};

export default rbpEnvironmentalToxicInjury;
