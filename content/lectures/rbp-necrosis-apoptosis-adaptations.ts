import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpNecrosisApoptosisAdaptations: Lecture = {
  id: 'rbp-necrosis-apoptosis-adaptations',
  title: 'Necrosis, Apoptosis & Cellular Adaptation',
  system: 'pathology',
  source: 'Ch 1 — Cell Injury, Cell Death, and Adaptations',
  updated: '2026-09-16',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 1 Cell Injury, Cell Death, and Adaptations' },
    { kind: 'mechanism', label: 'Caspase cascades & the membrane-integrity axis' },
    { kind: 'exam', label: 'Necrosis patterns & adaptive responses' },
  ],

  highYield: [
    '**Apoptosis and necrosis separate on one axis: ATP and the membrane — and inflammation is the readout.** Apoptosis **requires ATP**: assembling an apoptosome and running caspases is work, and the cell spends that energy specifically to stay **sealed** until macrophages have carried it away. Nothing leaks, so there are **no DAMPs** and **no inflammation**. Necrosis is **ATP-independent membrane failure**: contents spill, and **ATP, HMGB1, uric acid and mitochondrial formyl peptides** act as danger signals, so necrosis **always** inflames. Use it as a rule at the microscope — **inflammation tells you whether the membrane held**. The corollary is the exam favourite: a cell too ATP-depleted to finish apoptosis dies by **necrosis instead**, so the same stimulus gives either outcome depending on energy. Detail in [[apoptosis-cell-death]].',
    '**Read the nucleus and the cytoplasm separately, because each answers a different question.** In necrosis the cytoplasm becomes **more eosinophilic** — basophilic RNA is lost and denatured protein binds eosin — and looks glassy once glycogen has gone. The nucleus then runs a fixed sequence: **pyknosis** (shrunken and dense), **karyorrhexis** (fragmented), **karyolysis** (faded and dissolved by DNases), ending within **1 to 2 days** in a cell with no nucleus at all. Apoptosis does the opposite to the cytoplasm — the cell **shrinks** and becomes densely eosinophilic — while the chromatin condenses **against the nuclear membrane** before budding into apoptotic bodies. **Necrosis takes sheets of contiguous cells; apoptosis takes scattered single cells.** The trap is that karyorrhexis occurs in both, so the nucleus alone will not classify the death.',
    '**Derive the necrosis patterns from mechanism plus stromal architecture; do not memorise a list.** **Coagulative** is ischaemic: the anoxia and acidosis denature the structural proteins **and** the lysosomal hydrolases that would have digested them, so the tissue is dead but still recognisable as **anucleate ghost outlines**. **The brain is the exception that proves the rule** — infarcted brain liquefies into a cyst because it has almost **no collagenous stroma**, is lipid-rich, and is packed with **microglial hydrolases**. Same mechanism, opposite morphology, because the scaffold differs. **Liquefactive** elsewhere means **pyogenic bacteria** and neutrophil enzymes, giving pus. **Caseous** is granulomatous — tuberculosis, histoplasmosis — with architecture completely obliterated inside a granuloma wall. **Fat necrosis** is the only enzymatic pattern: **lipase** meets adipose tissue in acute pancreatitis, and liberated fatty acids bind calcium as chalky **saponification**. **Fibrinoid** is immunological: **immune complexes plus plasma fibrin** in a damaged vessel wall. **Gangrene** is not a separate mechanism at all, just coagulative necrosis of a limb, turning wet when bacteria superimpose liquefaction. Compare [[necrosis-patterns]].',
    '**Intrinsic apoptosis is the mitochondrial route, and BCL-2 is the gatekeeper exams test.** Internal stress — DNA damage, growth-factor withdrawal, misfolded protein — activates **BH3-only sensors** (**BIM, BID, PUMA, NOXA**), which neutralise the antiapoptotic **BCL-2, BCL-XL and MCL-1**. That frees **BAX and BAK** to oligomerise and permeabilise the **outer** mitochondrial membrane. **Cytochrome c** escapes, binds **APAF-1** into an **apoptosome**, and activates **caspase-9**, which cleaves executioner **caspases 3 and 7**. Note carefully that this is outer membrane permeabilisation and is not the same event as the inner-membrane permeability transition of necrosis. The clinical payoff is **t(14;18)** in follicular lymphoma, which puts **BCL-2** under the immunoglobulin heavy-chain promoter: that tumour accumulates because its cells **fail to die**, not because they divide faster.',
    '**Extrinsic apoptosis is the death-receptor route, and both routes converge on the same executioners.** **FasL** trimerises **Fas (CD95)**, recruiting the **FADD** adaptor and activating **caspase-8**; **TNFR1** works the same way. This arm does two jobs: **cytotoxic T cells and NK cells** killing their targets, and **deletion of self-reactive lymphocytes** — which is why a Fas mutation causes **ALPS**, with lymphoproliferation and autoimmunity together. Cytotoxic cells also carry a third key, **granzyme B**, which cleaves caspases directly and bypasses receptors and mitochondria entirely. Everything ends at **caspases 3 and 7**, which activate **CAD** to cut DNA between nucleosomes and flip **phosphatidylserine** to the outer leaflet as the signal for engulfment. **FLIP** blocks caspase-8, and several viruses encode it.',
    '**Adaptation changes size, number or phenotype — and metaplasia is the one that creates the soil for cancer.** **Hypertrophy** makes cells bigger with no new cells and is obligatory in permanent tissues such as myocardium, running through **GATA4, NFAT and MEF2** to a fetal gene programme. **Hyperplasia** makes more cells and needs proliferative capacity — endometrium under oestrogen, liver after partial hepatectomy. **Atrophy** shrinks cells by accelerating **ubiquitin-proteasome** degradation and **autophagy**; its indigestible residue is **lipofuscin**. **Metaplasia** is something different in kind: **reversible reprogramming of stem cells** that trades one differentiated tissue for a **hardier** one. Ciliated respiratory epithelium becomes **squamous** in a smoker — tougher, but **mucociliary clearance is gone**, and that is the trade. Squamous oesophagus becomes **intestinal columnar** in reflux. Here is the payoff: metaplasia is **not neoplastic and is reversible**, yet the injuring stimulus keeps acting on a lineage that should not be there, and that is precisely the **soil in which dysplasia and then adenocarcinoma arise**. Barrett oesophagus is the worked case — see [[metaplasia-dysplasia]] and [[cellular-adaptations-growth]].',
  ],

  mechanism: {
    title: 'Intrinsic apoptosis — and why it makes no noise',
    steps: [
      { id: 's1', label: 'Internal stress activates BH3-only sensors', detail: 'DNA damage, growth-factor withdrawal or misfolded protein induces BIM, BID, PUMA or NOXA.', emphasis: 'key' },
      { id: 's2', label: 'BH3-only proteins neutralise BCL-2, BCL-XL and MCL-1', detail: 'The survival brake is released. This is the step that t(14;18) defeats by overexpressing BCL-2.', emphasis: 'key' },
      { id: 's3', label: 'BAX and BAK oligomerise in the OUTER mitochondrial membrane', detail: 'Outer membrane permeabilisation — a different event from the inner-membrane permeability transition that drives necrosis.', emphasis: 'key' },
      { id: 's4', label: 'Cytochrome c escapes and builds the apoptosome with APAF-1', detail: 'Caspase-9 is activated. ATP is consumed here, which is why apoptosis is impossible in an energy-starved cell.', emphasis: 'normal' },
      { id: 's5', label: 'Caspases 3 and 7 dismantle the cell from within', detail: 'Cytoskeleton and nuclear lamins are cleaved; CAD cuts DNA between nucleosomes into a 180 to 200 bp ladder.', emphasis: 'normal' },
      { id: 's6', label: 'Phosphatidylserine flips outward and macrophages engulf intact bodies', detail: 'The membrane never fails, so no DAMPs escape and no inflammation follows. That silence is the diagnostic signature.', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Wedge-shaped pale renal infarct with preserved anucleate tubular outlines', mechanism: 'Coagulative necrosis — ischaemia denatured the lysosomal enzymes alongside the structural proteins, so nothing digested the scaffold', significance: 'key' },
    { sign: 'A fluid-filled cyst months after a cerebral infarct', mechanism: 'Liquefactive necrosis in the one organ that liquefies after ischaemia: minimal collagenous stroma, high lipid, abundant microglial hydrolases', significance: 'key' },
    { sign: 'Chalky white plaques in peripancreatic fat during acute pancreatitis', mechanism: 'Released lipase liberates fatty acids that chelate calcium — enzymatic fat necrosis with saponification', significance: 'key' },
    { sign: 'Bright pink smudgy arterial wall in vasculitis or malignant hypertension', mechanism: 'Fibrinoid necrosis — immune complexes and leaked plasma fibrin deposited in a damaged vessel wall', significance: 'key' },
    { sign: 'Scattered single shrunken deeply eosinophilic hepatocytes with no surrounding neutrophils', mechanism: 'Apoptosis (Councilman bodies) — membranes held, so nothing leaked and nothing called inflammation in', significance: 'key' },
    { sign: 'Thick keratinising squamous epithelium lining the bronchus of a long-term smoker', mechanism: 'Squamous metaplasia — durability gained, mucociliary clearance lost; reversible, but the substrate on which dysplasia develops', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Presence or absence of neutrophils around the dying cells', meaning: 'The single most useful discriminator on a slide. Inflammation means the membrane failed, so necrosis. Scattered dying cells with no infiltrate means apoptosis.' },
    { clue: 'Annexin V binding with propidium iodide exclusion on flow cytometry', meaning: 'Phosphatidylserine externalised while the membrane is still sealed identifies apoptosis. Dual annexin V and propidium iodide positivity means the membrane has since failed — secondary necrosis.' },
    { clue: 'DNA electrophoresis: a discrete ladder versus a smear', meaning: 'A 180 to 200 bp ladder is CAD cutting cleanly between nucleosomes (apoptosis). A continuous smear is random enzymatic digestion (necrosis).' },
    { clue: 'Caseating granulomas with acid-fast bacilli', meaning: 'Caseous necrosis is a morphologic diagnosis and narrows the differential to granulomatous infection; the organism still has to be demonstrated by stain, culture or PCR.' },
    { clue: 'Goblet cells in columnar mucosa above the gastro-oesophageal junction', meaning: 'Intestinal metaplasia — Barrett oesophagus. Dysplasia is a separate diagnosis needing nuclear atypia and architectural crowding, and it is the finding that changes surveillance.' },
    { clue: 'Thickened left ventricular wall with no increase in myocyte number', meaning: 'Hypertrophy without hyperplasia. Adult cardiac myocytes are permanent cells, so enlargement is the only adaptation available to them.' },
  ],

  treatment: [
    {
      logic: 'Remove the stimulus — then check which of these adaptations actually reverses',
      detail: 'Adaptations are **reversible by definition**, and most do regress: denervated muscle regrows after **reinnervation**, ventricular hypertrophy regresses once **afterload** is relieved, and squamous metaplasia recedes after **smoking cessation**. What does **not** reverse is the fibrosis that replaced lost parenchyma, any **acquired mutation**, and established **dysplasia** — which is why dysplasia is followed and treated rather than simply watched for stimulus removal. Barrett metaplasia sits on the boundary: acid suppression reduces injury but does **not abolish** the adenocarcinoma risk, so surveillance continues. See [[metaplasia-dysplasia]].',
    },
    {
      logic: 'When a tumour survives by failing to die, target the death pathway itself',
      detail: 'A follicular lymphoma driven by **t(14;18)** is not proliferating abnormally fast — it is **refusing to undergo apoptosis** because BCL-2 is holding BAX and BAK in check. **Venetoclax**, a **BH3 mimetic**, occupies the BCL-2 groove and releases that brake, restoring mitochondrial outer membrane permeabilisation; it is licensed in **CLL and AML**. The point to carry forward is that knowing which node is blocked tells you which drug reopens it — see [[apoptosis-cell-death]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Inflammation is the readout of whether the membrane held',
      expansion: [
        'Apoptosis spends ATP to stay sealed, so nothing leaks and nothing inflames.',
        'Necrosis needs no ATP and cannot stay sealed, so DAMPs escape and inflammation always follows.',
        'A cell too ATP-depleted to finish apoptosis therefore dies by necrosis instead.',
        'At the microscope: neutrophils present means the membrane failed.',
      ],
    },
    {
      hook: 'Ischaemia coagulates, bacteria liquefy, lipase saponifies, immune complexes smudge',
      expansion: [
        'Coagulative: ischaemia denatures the digesting enzymes too, so ghost outlines survive.',
        'Liquefactive: neutrophil or microglial hydrolases dissolve the tissue — pus, or an infarcted brain.',
        'Caseous: granulomatous infection, architecture wholly obliterated.',
        'Fat: lipase plus adipose tissue, calcium soaps. Fibrinoid: immune complexes plus fibrin in a vessel wall.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Classifying a form of cell death',
      wrongInstinct: 'Nuclear fragmentation is seen, therefore this is apoptosis.',
      rightAnswer: 'Karyorrhexis occurs in both. Classify on membrane integrity and the inflammatory reaction: sealed membrane with no infiltrate is apoptosis, leakage with neutrophils is necrosis.',
      why: 'Apoptosis spends ATP specifically to stay sealed; necrosis cannot, so its contents become danger signals.',
    },
    {
      questionCategory: 'Metaplasia and cancer risk',
      wrongInstinct: 'Metaplasia is reversible and not neoplastic, so it carries no cancer risk.',
      rightAnswer: 'Both statements hold at once: Barrett metaplasia is not cancer and can regress, yet it is the tissue on which dysplasia and adenocarcinoma arise, so the risk is raised and surveillance is warranted.',
      why: 'The stimulus that forced the switch keeps acting on a reprogrammed lineage that should not be there and that is dividing under continuing injury.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Six weeks after occlusion of a middle cerebral artery, the affected territory is a fluid-filled cyst. A renal infarct of the same age in the same patient retains ghost-like anucleate tubular outlines. Both were purely ischaemic and neither is infected. What best explains the difference?',
      options: [
        { id: 'a', text: 'The cerebral infarct must have become secondarily infected' },
        { id: 'b', text: 'The brain has little collagenous stroma, is lipid-rich and contains abundant microglial hydrolases, so ischaemic necrosis liquefies there' },
        { id: 'c', text: 'The renal tubular cells died by apoptosis rather than necrosis' },
        { id: 'd', text: 'Cerebral infarcts are mediated by released lipase' },
      ],
      answerId: 'b',
      explanation: 'The pattern follows mechanism plus stromal architecture. Ischaemia normally produces coagulative necrosis because it denatures the lysosomal enzymes along with the structural proteins. The brain is the standing exception: without a collagen scaffold and with abundant hydrolytic enzyme, the same insult liquefies the tissue.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A follicular lymphoma carries t(14;18), placing BCL-2 under the control of the immunoglobulin heavy-chain promoter. Which consequence drives accumulation of the tumour cells?',
      options: [
        { id: 'a', text: 'Accelerated transit through S phase of the cell cycle' },
        { id: 'b', text: 'Overexpressed BCL-2 prevents BAX and BAK from permeabilising the outer mitochondrial membrane, so the cells fail to undergo apoptosis' },
        { id: 'c', text: 'Constitutive activation of caspase-8 at the Fas receptor' },
        { id: 'd', text: 'Loss of FasL expression on cytotoxic T cells' },
      ],
      answerId: 'b',
      explanation: 'BCL-2 is the antiapoptotic gatekeeper of the intrinsic pathway. Overexpressing it holds BAX and BAK inactive, blocking cytochrome c release and apoptosome formation. The tumour grows because its cells do not die on schedule, not because they divide faster — which is why a BH3 mimetic such as venetoclax is rational therapy.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A liver biopsy in acute viral hepatitis shows scattered single shrunken, intensely eosinophilic hepatocytes with condensed chromatin, and no neutrophils anywhere near them. What does the absence of an inflammatory infiltrate indicate about these cells?',
      options: [
        { id: 'a', text: 'They died too recently for any inflammatory response to have developed' },
        { id: 'b', text: 'Their plasma membranes remained intact, so no danger signals were released to recruit leukocytes' },
        { id: 'c', text: 'They are undergoing coagulative necrosis, which does not provoke inflammation' },
        { id: 'd', text: 'Their ATP was completely depleted before death occurred' },
      ],
      answerId: 'b',
      explanation: 'Apoptosis consumes ATP in order to keep the plasma membrane sealed until the fragments are phagocytosed. Nothing escapes, so no DAMPs recruit neutrophils. Necrosis is the opposite on every count and always inflames — making the inflammatory reaction the readout of whether the membrane held.',
      tests: 'mechanism',
    },
  ],
};

export default rbpNecrosisApoptosisAdaptations;
