import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpAccumulationsCalcificationAgeing: Lecture = {
  id: 'rbp-accumulations-calcification-ageing',
  title: 'Cellular Accumulations, Calcification & Ageing',
  system: 'pathology',
  source: 'Ch 1 — Cell Injury, Cell Death, and Adaptations',
  updated: '2026-09-21',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'Ch 1 Cell Injury, Cell Death, and Adaptations' },
    { kind: 'mechanism', label: 'Dystrophic versus metastatic calcification, and the pigments that date a cell' },
    { kind: 'exam', label: 'Normal calcium means look for dead tissue; raised calcium means look for the four causes' },
  ],

  highYield: [
    '**Sort an accumulation by which step broke, not by what the material looks like.** There are only four failures, and naming one names the disease class. **Supply outruns capacity** — a normal endogenous substance arrives or is made faster than the cell can process it, as with triglyceride in steatosis or reabsorption droplets in a proteinuric tubule. **Packaging or export fails** — the substance is normal but cannot be folded, secreted or shipped, as with the alpha-1 antitrypsin polymer trapped in hepatocyte endoplasmic reticulum, or the block on lipoprotein export that makes a liver fatty. **Degradation fails** — an inherited enzyme deficiency leaves a substrate nothing can break down, which is the whole of the lysosomal storage diseases. **The material was never degradable** — inhaled carbon, tattoo ink, silica, a retained suture. The same empty vacuole therefore means four different things, so the useful question at the microscope is not what is this, but why could this cell not get rid of it.',
    "**Steatosis is a failure of the hepatocyte triglyceride budget, and the budget has exactly four terms.** Free fatty acid **delivery** can rise (starvation, uncontrolled diabetes, corticosteroids mobilising adipose stores), **beta-oxidation** can fall, **triglyceride synthesis** can rise, or **VLDL export** can fail because apoprotein synthesis is blocked. Alcohol attacks three terms at once: oxidation by alcohol dehydrogenase and aldehyde dehydrogenase floods the cell with **NADH**, and a high NADH to NAD ratio drives dihydroxyacetone phosphate toward **glycerol-3-phosphate**, supplying more triglyceride backbone while starving beta-oxidation of NAD. Protein malnutrition in **kwashiorkor** and carbon tetrachloride both hit the export term by stopping apoprotein synthesis. Then read the droplet size, because it is a prognosis and not a cosmetic detail. **Macrovesicular** fat, one large vacuole displacing the nucleus to the cell margin, is the chronic pattern of alcohol, obesity, diabetes and non-alcoholic fatty liver disease. **Microvesicular** fat, fine droplets with the nucleus still central, means an **acute collapse of mitochondrial beta-oxidation** and carries a real risk of liver failure — Reye syndrome, acute fatty liver of pregnancy, valproate, high-dose intravenous tetracycline and some nucleoside analogues. Same lipid, opposite urgency.",
    '**The other accumulations each name their own broken step, so none of them has to be memorised as a list.** **Reabsorption droplets** in proximal tubular cells are pinocytosed filtered protein: they report heavy proteinuria upstream rather than tubular disease. **Russell bodies** are immunoglobulin distending the endoplasmic reticulum of a plasma cell working beyond its secretory capacity. **Mallory-Denk hyaline** is not a stored metabolite at all but **damaged keratin intermediate filaments** clumped in an injured hepatocyte, which is exactly why it turns up in alcoholic hepatitis, steatohepatitis, Wilson disease and chronic cholestasis rather than in one disease. **Cholesterol** cannot be catabolised by the cells that take it up, so it accumulates as foam cells wherever a macrophage meets oxidised lipoprotein — the atheromatous plaque, the xanthoma, the cholesterolotic gallbladder. **Glycogen** accumulates whenever glucose handling is abnormal, giving glycogen-laden proximal tubular cells in poorly controlled diabetes and the enzymatic version in the glycogen storage diseases. Every one of these regresses if the upstream problem is corrected, and that reversibility is what separates them from the calcium deposits that follow.',
    '**Four pigments, and each answers a different question.** **Lipofuscin** is the insoluble polymerised residue of lipid peroxidation complexed to protein — the undigestible remnant of autophagy, sitting in perinuclear granules. It is **inert**: it injures nothing, and its only message is that this cell is **old or atrophic**, which is why a shrunken heart or liver in the very elderly is called **brown atrophy**. Read it as a tombstone, never as a cause. **Melanin** is the only endogenous brown-black pigment, made from tyrosine by tyrosinase inside melanocytes. **Haemosiderin** is aggregated ferritin, golden-brown and coarsely granular, and the only one of the four that **stains with Prussian blue**, because it is the only one containing iron. Here the discriminator that changes management is not the stain but the **location**: iron confined to **macrophages** — the bruise running red, then green as biliverdin, then yellow as bilirubin, then golden-brown; the heart-failure cells of a chronically congested lung; reticuloendothelial loading after repeated transfusion — is **haemosiderosis and is harmless**, whereas iron inside **parenchymal cells**, in hepatocytes, cardiac myocytes and pancreatic islets, is **haemochromatosis**, and it destroys those organs by the Fenton chemistry worked through in [[rbp-oxidative-stress-protein-damage]]. **Bilirubin** is the fourth: a haem breakdown product containing **no iron**, therefore Prussian blue negative, which is precisely how the brown pigment of a cholestatic liver is separated from an iron one. Exogenous carbon belongs beside them — soot taken up by alveolar macrophages and carried to hilar nodes is **anthracosis**, a stain rather than a disease, and it becomes coal worker pneumoconiosis only when the dust burden is heavy enough to provoke fibrosis.',
    '**The anchor discriminator of the whole topic: DYSTROPHIC calcification occurs in ALREADY DEAD OR DAMAGED tissue with a NORMAL serum calcium, while METASTATIC calcification occurs in NORMAL tissue because the serum calcium is RAISED.** In the dystrophic form the dying cell supplies its own nucleation site: membrane pumps have failed, calcium floods in, phospholipid head groups of degenerating membranes bind it, membrane-associated phosphatases generate phosphate, and crystals nucleate inside membrane-bound vesicles before propagating as hydroxyapatite. Calcium and phosphate handling is normal from start to finish. This is what calcifies an atheromatous plaque, a mechanically worn **aortic valve** (the commonest reason a valve is replaced), an old tuberculous focus, a dead parasite, a focus of fat necrosis, and the necrotic debris inside a breast carcinoma that mammography picks up before anything is palpable. Its named single-cell version is the **psammoma body**, a concentrically lamellated calcification built on individual dying tumour cells, and it points at four tumours — **papillary thyroid carcinoma, serous carcinoma of ovary and endometrium, meningioma and mesothelioma**. Metastatic calcification inverts every term, and only **four things** raise calcium enough to produce it: **excess parathyroid hormone** (a parathyroid adenoma, or PTHrP from a squamous carcinoma), **destruction of bone** (myeloma, skeletal metastases, Paget disease, immobilisation), **excess vitamin D** (intoxication, or granulomatous disease making calcitriol outside PTH control), and **renal failure**, where phosphate retention drives secondary hyperparathyroidism. Where it lands is not random either. It picks the **acid-secreting tissues** — **gastric mucosa, renal tubules, alveolar septa, systemic arteries and pulmonary veins** — because a tissue that exports hydrogen ion is left with a relatively **alkaline** interstitium, and calcium phosphate is least soluble at alkaline pH. Learn the sites as a consequence of that one sentence and they stop being a list. The clinical-layer version of this split sits in [[intracellular-accumulations-calcification]].',
    '**Cellular ageing is four converging mechanisms, and the examinable one is replicative senescence.** **Telomere shortening**: DNA polymerase cannot copy the 3-prime end of a linear chromosome, so **50 to 100 base pairs** are lost per division, and once a telomere is critically short the cell reads the uncapped end as a **double-strand break** and imposes a **permanent** G1 arrest through ATM, p53 and p21. That is the **Hayflick limit**, about **50 population doublings** for a human fibroblast. **Germ cells and stem cells escape it by expressing telomerase**, a reverse transcriptase carrying its own RNA template, and roughly **90 per cent of cancers reactivate it** — which is how a tumour buys unlimited divisions. **Dyskeratosis congenita** is the natural experiment: a telomerase-complex mutation presenting with marrow failure, nail dystrophy, oral leukoplakia and pulmonary fibrosis, which is a premature-ageing phenotype produced by a telomere defect alone. The other three mechanisms are **accumulated DNA damage** with failing repair (Werner syndrome from a defective helicase, Hutchinson-Gilford progeria from a defective nuclear lamin), **declining proteostasis** as chaperone, proteasome and autophagy capacity fall, which is exactly why lipofuscin piles up in the first place, and **mitochondrial decline** alongside the insulin and IGF-1, mTOR and sirtuin nutrient-sensing axes that caloric restriction acts on. Then hold the definitional line hard: **a senescent cell is alive**. It excludes vital dyes, stays metabolically active for months, and secretes a pro-inflammatory programme of IL-6, IL-1 and metalloproteinases that inflames its neighbours, which makes senescence a source of chronic inflammation rather than a synonym for death. Quiescence in G0 is reversible, senescence is not, and apoptosis is a different event altogether — see [[rbp-necrosis-apoptosis-adaptations]].',
  ],

  mechanism: {
    title: 'Two roads to a stone: dead tissue with normal calcium, or live tissue with raised calcium',
    steps: [
      {
        id: 's1',
        label: 'A calcium phosphate deposit needs two things: a nucleation site and a local ion product above solubility',
        detail: 'There are exactly two ways to get them, and which one is operating is decided by a single blood test.',
        emphasis: 'key',
      },
      {
        id: 's2',
        label: 'DYSTROPHIC route: the cell dies first, its pumps fail, and calcium floods into a cell that can no longer exclude it',
        detail: 'Serum calcium is NORMAL throughout. The nucleation site is manufactured by the injury itself, which is why the deposit maps exactly onto the dead tissue.',
        emphasis: 'key',
      },
      {
        id: 's3',
        label: 'Phospholipid head groups of degenerating membranes bind calcium; membrane-bound phosphatases generate phosphate',
        detail: 'Crystals nucleate inside membrane-bound vesicles, the same initiation step that matrix vesicles use in physiological bone formation.',
      },
      {
        id: 's4',
        label: 'Propagation to hydroxyapatite — the tissue becomes gritty, and basophilic and amorphous on H&E',
        detail: 'Nothing removes it. A calcified valve or plaque is permanent, and the deposit can itself become a new mechanical problem.',
      },
      {
        id: 's5',
        label: 'METASTATIC route: serum calcium is RAISED, so the ion product is exceeded in tissue that is entirely alive',
        detail: 'Only four things raise it that far — PTH excess, bone destruction, vitamin D excess, and renal failure with phosphate retention driving secondary hyperparathyroidism.',
        emphasis: 'danger',
      },
      {
        id: 's6',
        label: 'Deposition selects the acid-secreting tissues: gastric mucosa, renal tubules, alveolar septa, systemic arteries',
        detail: 'A tissue that exports hydrogen ion leaves an alkaline interstitium behind, and calcium phosphate is least soluble at alkaline pH. The site list is a consequence, not a fact to memorise.',
        emphasis: 'danger',
      },
    ],
    branches: [
      {
        fromId: 's4',
        title: 'Where dystrophic calcification is the diagnostic finding rather than an incidental one',
        steps: [
          {
            id: 'b1',
            label: 'Clustered pleomorphic branching microcalcification on mammography',
            detail: 'Calcification on necrotic debris inside ducts is how ductal carcinoma in situ is detected years before it can be felt. Here the deposit is the reason the cancer is curable.',
            emphasis: 'key',
          },
          {
            id: 'b2',
            label: 'Psammoma bodies — concentric lamellated calcification built on single dying tumour cells',
            detail: 'Papillary thyroid carcinoma, serous carcinoma of ovary and endometrium, meningioma, mesothelioma.',
            emphasis: 'key',
          },
          {
            id: 'b3',
            label: 'A gritty, heavily calcified aortic valve in an elderly patient with a normal calcium',
            detail: 'Decades of mechanical stress, injury and repair in a valve with no capacity to remodel. This is the commonest indication for valve replacement in high-income countries.',
          },
        ],
      },
    ],
  },

  examFindings: [
    {
      sign: 'Gritty yellow-white nodules on the outflow surface of an excised tricuspid aortic valve, with a corrected serum calcium of 2.34 mmol/L',
      mechanism: 'Dystrophic calcification in tissue injured by decades of mechanical stress; normal calcium is not an incidental detail but the defining feature',
      significance: 'key',
    },
    {
      sign: 'Basophilic amorphous deposits in gastric mucosa, renal tubular basement membranes and alveolar septa at autopsy in a patient with myeloma',
      mechanism: 'Metastatic calcification from bone destruction, landing in the acid-secreting tissues whose interstitium is left alkaline',
      significance: 'key',
    },
    {
      sign: 'Concentric lamellated calcific bodies within the papillae of a thyroid tumour',
      mechanism: 'Psammoma bodies — dystrophic calcification on individual apoptotic tumour cells, narrowing the differential to four tumours',
      significance: 'key',
    },
    {
      sign: 'A small, dark brown heart and liver at autopsy in a 92-year-old, with fine yellow-brown perinuclear granules on microscopy',
      mechanism: 'Brown atrophy: lipofuscin is the inert residue of a lifetime of autophagy and lipid peroxidation, so it marks age and atrophy without causing either',
      significance: 'key',
    },
    {
      sign: 'Golden-brown granular pigment in alveolar macrophages that stains strongly with Prussian blue, in longstanding mitral stenosis',
      mechanism: 'Heart-failure cells — local haemosiderosis after repeated intra-alveolar haemorrhage. Iron in macrophages is storage, not disease',
      significance: 'key',
    },
    {
      sign: 'Fine cytoplasmic fat droplets with a centrally placed nucleus in a child with encephalopathy after aspirin during a viral illness',
      mechanism: 'Microvesicular steatosis from acute failure of mitochondrial beta-oxidation — the pattern that precedes liver failure, unlike the macrovesicular fat of alcohol or obesity',
      significance: 'supportive',
    },
  ],

  investigations: [
    {
      clue: 'The serum calcium, measured before anything else, in any tissue calcification',
      meaning: 'One number sorts the two mechanisms. Normal calcium means dystrophic, so go and find the dead or damaged tissue. Raised calcium means metastatic, so go and find which of the four causes is operating.',
    },
    {
      clue: 'PTH measured alongside a raised calcium',
      meaning: 'A raised or inappropriately normal PTH means primary hyperparathyroidism. A SUPPRESSED PTH means the calcium is coming from somewhere else — PTHrP from a squamous carcinoma, bone destruction by myeloma or metastases, vitamin D intoxication, or granulomatous 1-alpha-hydroxylase activity.',
    },
    {
      clue: 'Prussian blue on a brown pigment, then the location of whatever it stains',
      meaning: 'Positive means ferric iron in haemosiderin; lipofuscin, bilirubin and melanin are all negative, so one stain sorts the brown pigments. Then the location names the disease: macrophage iron is haemosiderosis and harmless, parenchymal iron is haemochromatosis and destroys the organ.',
    },
    {
      clue: 'PAS with and without diastase, and a frozen section for fat stains',
      meaning: 'PAS positive and diastase SENSITIVE is glycogen; PAS positive and diastase RESISTANT is a glycoprotein such as the alpha-1 antitrypsin globule. Routine paraffin processing dissolves lipid in xylene and leaves an empty hole, so fat must be shown on a frozen section with oil red O or Sudan black — a clear vacuole on a paraffin section is not evidence of fat.',
    },
    {
      clue: 'Clustered pleomorphic microcalcification on a screening mammogram, or von Kossa and alizarin red on a scanty tissue deposit',
      meaning: 'Dystrophic calcification used diagnostically. Mammographic microcalcification is calcium laid down on necrotic debris inside ducts and is the commonest way ductal carcinoma in situ is found. Von Kossa stains the phosphate anion black and alizarin red binds calcium itself, for deposits too sparse to call on H&E.',
    },
    {
      clue: 'Senescence-associated beta-galactosidase at pH 6.0, with telomere length',
      meaning: 'Identifies a cell that is arrested but alive. It separates senescence from apoptosis, which is death, and from quiescence, which resumes dividing when growth factors return. Short telomeres with p16 and p21 induction date the arrest to replicative exhaustion rather than to an acute stress.',
    },
  ],

  treatment: [
    {
      logic: 'Treat what the calcification is reporting — and only one of the two types is a calcium problem',
      detail: 'A calcified valve, plaque or granuloma is **dystrophic**, and there is nothing to correct in the blood: lowering a normal serum calcium does not dissolve hydroxyapatite, and the deposit is managed mechanically or not at all. **Metastatic** calcification is the opposite, because the deposit is a symptom of a systemic derangement that is still running. Find which of the four causes is operating and treat that, and in chronic kidney disease control **phosphate** as well as calcium, since it is the calcium-phosphate product that drives deposition into vessels and skin and produces **calciphylaxis**. That is also why calcium-containing phosphate binders and over-generous vitamin D analogues can make the vascular calcification of renal failure worse while correcting the number on the chart. The clinical framing of both types is in [[intracellular-accumulations-calcification]].',
    },
    {
      logic: 'Separate a deposit that is a marker from a deposit that is doing damage — they need opposite amounts of attention',
      detail: 'Some accumulations are **inert bystanders** and need nothing: lipofuscin, anthracosis, tattoo pigment, and iron confined to macrophages. Reporting them as pathology generates investigation that cannot help anyone. Others are **actively injuring the cell they sit in**, and each has a specific intervention: parenchymal iron in haemochromatosis is removed by **venesection** or chelation before cirrhosis and cardiomyopathy are established, **microvesicular** steatosis demands that the offending mitochondrial toxin be stopped immediately, and a retained foreign body keeps inflammation running until it is taken out. Brown atrophy is the useful test case — the lipofuscin needs no treatment at all, while the **atrophy** it marks is a real loss of cell mass with its own reversible causes, and that distinction is developed in [[cellular-adaptations-growth]].',
    },
  ],

  mnemonics: [
    {
      hook: 'Dystrophic means the TISSUE is abnormal; metastatic means the BLOOD is abnormal',
      expansion: [
        'Dystrophic: serum calcium normal, tissue dead or damaged — a worn aortic valve, an atheroma, an old tuberculous focus, a psammoma body.',
        'Metastatic: serum calcium raised, tissue alive — and only four things raise it that far: PTH excess, bone destruction, vitamin D excess, renal failure.',
        'Metastatic deposits choose the acid-secreting tissues — stomach, kidney, lung, systemic arteries — because exporting hydrogen ion leaves an alkaline interstitium behind.',
        'So ask for the serum calcium first: one number decides which of the two you are looking at.',
      ],
    },
    {
      hook: 'The stain names the pigment, the location names the disease',
      expansion: [
        'Prussian blue positive means iron, so the pigment is haemosiderin. Lipofuscin, bilirubin and melanin are all negative.',
        'Iron inside macrophages is haemosiderosis: a bruise, heart-failure cells, reticuloendothelial loading after transfusion. Harmless.',
        'Iron inside hepatocytes, cardiac myocytes and pancreatic islets is haemochromatosis. Cirrhosis, cardiomyopathy and diabetes follow.',
        'Brown and Prussian blue negative: perinuclear in a small old organ is lipofuscin, canalicular in a cholestatic liver is bilirubin, black in a macrophage near a lymphatic is carbon.',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'A calcified lesion and the serum calcium',
      wrongInstinct: 'Calcium is being deposited in the tissue, so the serum calcium must be raised and a cause for hypercalcaemia should be hunted.',
      rightAnswer: 'Dystrophic calcification, which is much the commoner of the two, occurs with a completely normal serum calcium, because the nucleation site is supplied by dying cells rather than by the plasma ion product.',
      why: 'Rule: a normal calcium sends you to look for dead tissue; a raised calcium sends you to look for PTH excess, bone destruction, vitamin D excess or renal failure.',
    },
    {
      questionCategory: 'A brown granular intracellular pigment',
      wrongInstinct: 'Brown granular pigment in a liver biopsy is haemosiderin and indicates clinically significant iron overload.',
      rightAnswer: 'Stain first, then look at which cells hold it. Lipofuscin, bilirubin and melanin are all Prussian blue negative, and even Prussian blue positive iron confined to Kupffer cells and other macrophages is haemosiderosis, which does not injure the organ.',
      why: 'Rule: haemochromatosis requires iron in PARENCHYMAL cells, so the diagnosis turns on the location of the pigment rather than on its colour or on the intensity of the stain.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 62-year-old with multiple myeloma has a corrected serum calcium of 3.4 mmol/L. At autopsy there are basophilic amorphous deposits in the gastric mucosa, the renal tubular basement membranes and the alveolar septa, in tissue that is otherwise histologically normal and was never necrotic. Why are these particular sites involved?',
      options: [
        { id: 'a', text: 'They receive the highest blood flow per gram of tissue in the body' },
        { id: 'b', text: 'They secrete acid, so their interstitium is left relatively alkaline, and calcium phosphate is least soluble at alkaline pH' },
        { id: 'c', text: 'They had undergone occult necrosis, making this dystrophic calcification' },
        { id: 'd', text: 'They contain the highest density of osteoblast precursors' },
      ],
      answerId: 'b',
      explanation: 'This is metastatic calcification: normal living tissue calcifying because the serum calcium is raised, here by tumour destruction of bone. The site preference is mechanistic rather than arbitrary. Gastric mucosa, renal tubules, lung and the systemic arteries all export hydrogen ion, leaving a relatively alkaline internal compartment in which calcium phosphate precipitates most readily. Option c describes the other mechanism entirely, and dystrophic calcification requires dead or damaged tissue with a normal serum calcium.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with beta-thalassaemia has received 60 units of red cells. Liver biopsy shows abundant coarse golden-brown granules that stain strongly with Prussian blue, confined to Kupffer cells and portal macrophages, with hepatocytes free of pigment. Architecture is normal, there is no fibrosis, and transaminases are normal. What is the correct interpretation?',
      options: [
        { id: 'a', text: 'Established hereditary haemochromatosis, requiring urgent venesection' },
        { id: 'b', text: 'Reticuloendothelial haemosiderosis — iron stored in macrophages is not itself injurious, and it is parenchymal deposition that defines haemochromatosis and produces fibrosis' },
        { id: 'c', text: 'Lipofuscin accumulation from a lifetime of oxidative injury' },
        { id: 'd', text: 'Bilirubin retention from chronic haemolysis' },
      ],
      answerId: 'b',
      explanation: 'The stain establishes that the pigment contains ferric iron, which excludes lipofuscin and bilirubin since neither contains iron and neither stains with Prussian blue. What then decides the significance is location. Iron held inside macrophages is a storage phenomenon and injures nothing; iron accumulating inside hepatocytes, cardiac myocytes and pancreatic islet cells catalyses Fenton chemistry within those cells and produces cirrhosis, cardiomyopathy and diabetes. Transfusional loading eventually spills into parenchymal cells, which is why such patients are monitored, but this biopsy has not reached that point.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'Human fibroblasts stop dividing after about 50 population doublings. The arrested cells have critically short telomeres, induce p53 and p21, become flat and enlarged, stain for beta-galactosidase at pH 6.0, exclude propidium iodide, and remain metabolically active for months while secreting IL-6 and metalloproteinases. Which statement is correct?',
      options: [
        { id: 'a', text: 'The cells have undergone apoptosis, and the beta-galactosidase reflects lysosomal rupture' },
        { id: 'b', text: 'They are quiescent in G0 and will re-enter the cycle when fresh growth factors are supplied' },
        { id: 'c', text: 'They are senescent: alive, metabolically active and permanently arrested, and germ cells, stem cells and most cancers evade this fate by expressing telomerase' },
        { id: 'd', text: 'The arrest is an artefact of nutrient exhaustion in the culture medium' },
      ],
      answerId: 'c',
      explanation: 'This is replicative senescence at the Hayflick limit. Because DNA polymerase cannot copy the 3-prime end of a linear chromosome, 50 to 100 base pairs are lost per division until the uncapped telomere is read as a double-strand break and p53 and p21 impose a permanent G1 arrest. The cells remain viable, which is what separates senescence from apoptosis, and the arrest is irreversible, which is what separates it from quiescence. Telomerase, expressed in germ and stem cells and reactivated in about 90 per cent of cancers, is how that limit is bypassed. The secreted IL-6 and metalloproteinases are the senescence-associated secretory phenotype, which is why accumulating senescent cells inflame the tissue around them.',
      tests: 'mechanism',
    },
  ],
};

export default rbpAccumulationsCalcificationAgeing;
