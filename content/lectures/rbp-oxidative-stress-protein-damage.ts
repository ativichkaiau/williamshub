import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpOxidativeStressProteinDamage: Lecture = {
  id: 'rbp-oxidative-stress-protein-damage',
  title: 'Oxidative Stress, Protein Damage & Autophagy',
  system: 'pathology',
  source: 'Ch 1 — Cell Injury, Cell Death, and Adaptations',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 1 Cell Injury, Cell Death, and Adaptations' },
    { kind: 'mechanism', label: 'Free radicals, Fenton chemistry & the unfolded protein response' },
    { kind: 'investigation', label: 'Oxidant defence defects & misfolding disease' },
  ],

  highYield: [
    '**Three reactive oxygen species, three defences — and the pairing is what gets asked.** **Superoxide** is the one-electron leak from **complexes I and III** of the electron transport chain, and is made deliberately by **NADPH oxidase** in phagocytes; it is removed by **superoxide dismutase** (**SOD1** cytosolic, copper and zinc; **SOD2** mitochondrial, manganese). **Hydrogen peroxide** is the SOD product and is a ROS but **not a free radical** — it has no unpaired electron. That is precisely what makes it dangerous: being uncharged it **crosses membranes**, so it carries the problem elsewhere. It is cleared by **catalase** in peroxisomes and by **glutathione peroxidase**, which is **selenium-dependent**, in cytosol and mitochondria. The **hydroxyl radical** is the most destructive of the three and **no enzyme removes it**; it is generated from hydrogen peroxide by **Fenton chemistry** and directly by **radiolysis of water**, which is how ionising radiation injures tissue. The rule to carry: **detoxification is a relay, not a single step** — SOD alone merely converts superoxide into a membrane-permeant precursor of something worse.',
    '**Fenton chemistry is why free iron is a poison, and why chelation works upstream of the radical.** Ferrous iron splits hydrogen peroxide into hydroxide ion plus the **hydroxyl radical**, and the **Haber-Weiss** reaction uses superoxide to regenerate the ferrous iron — so the cycle is **catalytic**, and a trace of free metal destroys far more than its stoichiometry suggests. This is why the body maintains essentially **no free iron**: **transferrin** in plasma, **ferritin** inside cells, **lactoferrin** in secretions, and **caeruloplasmin** for copper. Those metal-binding proteins **are antioxidants**, a fact that is easy to miss when antioxidants are taught as a list of vitamins. The clinical payoff is direct: hereditary haemochromatosis and transfusional overload injure **liver, heart and pancreas** by exactly this route, and **deferoxamine** works by **removing the catalyst**, not by scavenging radicals one at a time. Related exposures in [[environmental-chemical-tobacco-injury]].',
    '**Lipid peroxidation is self-propagating, so one radical destroys hundreds of molecules.** The hydroxyl radical abstracts a hydrogen from a **polyunsaturated fatty acid**, producing a lipid radical; that reacts with oxygen to form a **lipid peroxyl radical**, which abstracts a hydrogen from the **next** fatty acid along. The reaction regenerates its own initiator, so it is a **chain** that continues until a **chain-breaking antioxidant** terminates it — **vitamin E** sitting within the membrane itself, and **glutathione peroxidase** reducing lipid hydroperoxides. The consequence is that membrane fluidity and barrier function collapse, which is how oxidative stress converges on the same endpoint as ischaemia in [[rbp-cell-injury-reversible-irreversible]]. End products **malondialdehyde** and **4-hydroxynonenal** are themselves reactive and cross-link proteins. **Carbon tetrachloride** is the worked case: **CYP2E1** converts it to the **trichloromethyl radical**, hepatocyte membranes peroxidise, ribosomes detach within **30 minutes**, lipoprotein export fails — so the liver becomes **steatotic before it becomes necrotic**.',
    '**Proteins and DNA are the other two targets, and the phagocyte uses the same chemistry on purpose.** Oxidation of **sulfhydryl side chains**, **carbonyl** formation, cross-linking and fragmentation cost enzymes their activity and leave proteins misfolded and flagged for degradation. In DNA the signature lesion is **8-oxoguanine**, which **mispairs with adenine** and produces **G:C to T:A transversions** if base excision repair misses it — the mechanistic link between chronic inflammation, oxidative stress and carcinogenesis. The respiratory burst runs this chemistry deliberately: **NADPH oxidase** makes superoxide and **myeloperoxidase** converts hydrogen peroxide plus chloride into **hypochlorite**. **Chronic granulomatous disease** is the natural loss-of-function experiment — no NADPH oxidase, so **catalase-positive** organisms that destroy their own peroxide survive inside the phagocyte.',
    '**The unfolded protein response is adaptive first and apoptotic only when it is overwhelmed.** ER stress — hypoxia, glucose deprivation, a mutant protein, or simple secretory overload — pulls the chaperone **BiP** away from three sensors: **PERK**, **IRE1** and **ATF6**. The **adaptive phase makes three moves at once**: PERK phosphorylates **eIF2α** to shut down translation (**inflow down**), IRE1 and ATF6 raise transcription of chaperones (**folding capacity up**), and **ER-associated degradation** retrotranslocates the hopeless ones to the **proteasome** (**disposal up**). If stress persists, the **same** PERK arm drives **CHOP**, which lowers **BCL-2** and raises **BIM**, while IRE1 recruits **TRAF2 and JNK** — and the response converts into intrinsic apoptosis. **The switch is duration, not a different pathway**, which is why activation of the UPR is never by itself evidence that a cell is dying.',
    '**Misfolded protein causes disease two different ways — loss of function and gain of toxicity — and quality control has a third arm.** **Loss**: the protein never reaches its post, as with **CFTR ΔF508**, degraded by ERAD before it can reach the membrane. **Alpha-1 antitrypsin PiZZ** is the instructive dual case — **emphysema** from the antiprotease that never arrives, and **liver disease** from the polymer that is retained in hepatocyte ER as **PAS-positive, diastase-resistant globules**. **Gain**: aggregates are toxic in their own right, or organise into **amyloid**, a **beta-pleated sheet** that is **Congo red positive with apple-green birefringence** no matter which precursor protein formed it — see [[protein-misfolding-amyloid]]. **Autophagy** is the third arm: an autophagosome engulfs damaged organelles and aggregates and fuses with a lysosome. It is primarily a **survival** programme during nutrient deprivation, so autophagic vacuoles are **not** evidence that a cell is dying by autophagy; its indigestible residue is **lipofuscin**.',
  ],

  mechanism: {
    title: 'From one leaked electron to a failed membrane',
    steps: [
      { id: 's1', label: 'A single electron escapes complex I or III onto oxygen', detail: 'Superoxide is produced continuously in health. Oxidative stress is a question of balance, not of an abnormal reaction appearing.', emphasis: 'key' },
      { id: 's2', label: 'Superoxide dismutase converts it to hydrogen peroxide', detail: 'No longer a radical, but uncharged and membrane-permeant — so the hazard can now travel out of the compartment that made it.', emphasis: 'normal' },
      { id: 's3', label: 'Catalase and glutathione peroxidase must finish the relay', detail: 'Peroxisomal catalase has high capacity; selenium-dependent glutathione peroxidase covers cytosol and mitochondria. If either is outpaced, peroxide accumulates.', emphasis: 'key' },
      { id: 's4', label: 'Free ferrous iron splits the peroxide — Fenton chemistry', detail: 'The hydroxyl radical is produced, and the iron is regenerated by superoxide, so a trace of free metal keeps the reaction running.', emphasis: 'danger' },
      { id: 's5', label: 'The hydroxyl radical initiates lipid peroxidation', detail: 'A peroxyl radical chain propagates through polyunsaturated fatty acids until vitamin E or glutathione peroxidase breaks the chain.', emphasis: 'danger' },
      { id: 's6', label: 'Membrane barrier fails, proteins carbonylate, 8-oxoguanine accumulates', detail: 'The endpoint is the same loss of membrane integrity that defines irreversible injury, now reached chemically rather than by energy failure.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Centrilobular hepatic steatosis progressing to necrosis after carbon tetrachloride exposure', mechanism: 'CYP2E1 generates the trichloromethyl radical; lipid peroxidation detaches ribosomes and blocks lipoprotein export within 30 minutes', significance: 'key' },
    { sign: 'Severe gut and marrow injury after whole-body irradiation', mechanism: 'Radiolysis of water yields hydroxyl radicals directly; the most mitotically active tissues fail first', significance: 'key' },
    { sign: 'Recurrent Staphylococcus aureus, Serratia, Burkholderia, Nocardia and Aspergillus infection with granulomas', mechanism: 'Chronic granulomatous disease — no NADPH oxidase, so catalase-positive organisms destroying their own peroxide survive phagocytosis', significance: 'key' },
    { sign: 'Micronodular cirrhosis with bronzed skin and diabetes', mechanism: 'Haemochromatosis: unbound iron drives Fenton chemistry in liver, pancreas and myocardium', significance: 'key' },
    { sign: 'PAS-positive, diastase-resistant globules in periportal hepatocytes alongside panacinar emphysema', mechanism: 'Alpha-1 antitrypsin PiZZ — retained polymer injures the liver (gain of toxicity) while unopposed elastase destroys the lung (loss of function)', significance: 'key' },
    { sign: 'Infarct extension immediately after technically successful reperfusion', mechanism: 'Reoxygenation of damaged mitochondria plus xanthine oxidase and recruited neutrophils, with antioxidant reserves already spent', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dihydrorhodamine flow cytometry, or the older nitroblue tetrazolium test', meaning: 'An absent respiratory burst confirms chronic granulomatous disease. Dihydrorhodamine is the current standard because it quantifies the defect and identifies carriers.' },
    { clue: 'Congo red showing apple-green birefringence under polarised light', meaning: 'Confirms a beta-pleated sheet, that is amyloid, whatever the precursor. Typing the precursor needs immunohistochemistry or mass spectrometry and changes the treatment entirely.' },
    { clue: 'Transferrin saturation above about 45% with a raised ferritin', meaning: 'Points to iron overload. Ferritin alone is an acute-phase reactant and rises in any inflammation, so the saturation is the more specific of the two.' },
    { clue: 'Serum alpha-1 antitrypsin level with phenotyping', meaning: 'The level quantifies the loss-of-function half. Only the PiZZ phenotype explains the liver disease, because that is caused by retained polymer rather than by deficiency.' },
    { clue: 'Glutathione status in paracetamol overdose', meaning: 'Injury begins once glutathione is exhausted and NAPQI is left unconjugated. N-acetylcysteine replenishes the substrate, which is why it is time-critical rather than dose-titrated.' },
    { clue: 'Malondialdehyde adducts or urinary 8-oxoguanine', meaning: 'Laboratory evidence that oxidation occurred. They do not identify which insult started it, so they support a mechanism rather than establish a diagnosis.' },
  ],

  treatment: [
    {
      logic: 'Remove the catalyst or restore the substrate — act upstream of the radical',
      detail: 'The interventions that work address the **chemistry**, not the radical itself: **chelation** with deferoxamine or deferasirox, or **venesection**, removes the iron catalysing Fenton chemistry; **N-acetylcysteine** regenerates **glutathione** in paracetamol overdose. Compare that with blanket **antioxidant supplementation**, which has repeatedly failed in trials — **beta-carotene increased lung cancer incidence in smokers** in the ATBC and CARET studies. The lesson is worth generalising: a correct pathway diagram does **not** predict a trial result, because supplementation changes the whole redox balance rather than the one step you had in mind. Exposure context in [[environmental-chemical-tobacco-injury]].',
    },
    {
      logic: 'Respect the adaptive phase of the unfolded protein response',
      detail: 'Brief ER stress is **protective**, so the therapeutic aim is to **reduce the folding load**, never to block the response. **Alpha-1 antitrypsin deficiency** makes the point sharply: **augmentation therapy replaces the missing antiprotease and protects the lung, but does nothing for the liver**, because the hepatic injury comes from **retained polymer** inside the hepatocyte rather than from the deficiency. One mutation, two mechanisms, two different treatment targets — the structural basis of which is in [[protein-misfolding-amyloid]].',
    },
  ],

  mnemonics: [
    {
      hook: 'SOD makes it, catalase and glutathione peroxidase take it away',
      expansion: [
        'Superoxide goes to superoxide dismutase and becomes hydrogen peroxide.',
        'Hydrogen peroxide goes to catalase (peroxisomes) and glutathione peroxidase (selenium) and becomes water.',
        'Whatever escapes meets free ferrous iron and becomes the hydroxyl radical, which no enzyme removes.',
        'So the defence is a relay: raising the first enzyme alone just moves the hazard one step along.',
      ],
    },
    {
      hook: 'UPR: inflow down, capacity up, disposal up — then CHOP',
      expansion: [
        'PERK phosphorylates eIF2α, so translation falls and less protein enters the ER.',
        'ATF6 and IRE1 raise chaperone transcription, so folding capacity rises.',
        'ERAD retrotranslocates the failures to the proteasome, so disposal rises.',
        'Only if the stress persists does PERK drive CHOP, lowering BCL-2 and committing the cell to apoptosis.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Which reactive oxygen species are free radicals',
      wrongInstinct: 'Every reactive oxygen species is a free radical, so hydrogen peroxide is one.',
      rightAnswer: 'Hydrogen peroxide is a ROS with no unpaired electron, so it is not a radical. Superoxide and the hydroxyl radical are the radicals.',
      why: 'Radical status predicts reactivity, but membrane permeability predicts reach — and being uncharged is exactly what lets peroxide deliver Fenton substrate to another compartment.',
    },
    {
      questionCategory: 'What activation of the unfolded protein response means',
      wrongInstinct: 'The UPR is a death pathway, so detecting it means the cell is already committed to apoptosis.',
      rightAnswer: 'It is adaptive first — translation down, chaperones up, ERAD up — and turns apoptotic through CHOP only once the stress has persisted unresolved.',
      why: 'Duration flips the switch, not a separate pathway: the same PERK arm that protects early is the one that drives CHOP late.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A cell line is engineered to overexpress superoxide dismutase, while catalase and glutathione peroxidase activities remain at baseline and cannot be induced further. The cells prove no more resistant to oxidative injury than controls. Why?',
      options: [
        { id: 'a', text: 'Superoxide dismutase generates superoxide rather than removing it' },
        { id: 'b', text: 'SOD converts superoxide into hydrogen peroxide, which now accumulates and, meeting free iron, yields the hydroxyl radical' },
        { id: 'c', text: 'Superoxide dismutase requires selenium, which is limiting in this system' },
        { id: 'd', text: 'Superoxide dismutase is confined to peroxisomes and cannot reach cytosolic oxidants' },
      ],
      answerId: 'b',
      explanation: 'Antioxidant defence is a relay. SOD only performs the first step, handing the cell a membrane-permeant peroxide. Without matching catalase and glutathione peroxidase capacity that peroxide accumulates and is converted by Fenton chemistry into the hydroxyl radical, which no enzyme can remove.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with transfusion-dependent thalassaemia develops cardiomyopathy and cirrhosis. Which mechanism best accounts for the oxidative tissue injury?',
      options: [
        { id: 'a', text: 'Iron directly cleaves DNA strands without any intermediate' },
        { id: 'b', text: 'Free ferrous iron catalyses conversion of hydrogen peroxide to the hydroxyl radical and is then regenerated, so the reaction is catalytic' },
        { id: 'c', text: 'Iron irreversibly inhibits superoxide dismutase' },
        { id: 'd', text: 'Haemosiderin is itself a free radical species' },
      ],
      answerId: 'b',
      explanation: 'Fenton chemistry converts hydrogen peroxide into the hydroxyl radical using ferrous iron, and the Haber-Weiss reaction regenerates that iron using superoxide. Because the metal is a catalyst rather than a reactant consumed by the reaction, even small amounts of unbound iron cause disproportionate damage — which is why chelation, not radical scavenging, is the effective treatment.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A hepatocyte accumulating a mutant secretory protein phosphorylates eIF2α and upregulates ER chaperones. Days later, CHOP expression rises and BCL-2 falls. What has happened?',
      options: [
        { id: 'a', text: 'A separate and unrelated signalling pathway has now been triggered' },
        { id: 'b', text: 'The cell has switched from necrosis to apoptosis' },
        { id: 'c', text: 'The same unfolded protein response has moved from its adaptive phase into its terminal apoptotic phase because the stress was never resolved' },
        { id: 'd', text: 'The proteasome has been pharmacologically inhibited' },
      ],
      answerId: 'c',
      explanation: 'PERK drives both halves of the response. Early it phosphorylates eIF2α to reduce translational inflow, which is protective. If the stress persists, the same arm induces CHOP, which lowers BCL-2 and raises BIM, converting the response into intrinsic apoptosis. Duration, not a different pathway, determines the outcome.',
      tests: 'mechanism',
    },
  ],
};

export default rbpOxidativeStressProteinDamage;
