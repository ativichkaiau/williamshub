import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpObstructiveLungDisease: Lecture = {
  id: 'rbp-obstructive-lung-disease',
  title: 'Obstructive Lung Disease',
  system: 'respiratory',
  source: 'Ch 12 — Lung',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 12 Lung' },
    { kind: 'mechanism', label: 'Protease-antiprotease imbalance & loss of elastic recoil' },
    { kind: 'investigation', label: 'FEV1/FVC, TLC and DLCO as morphological readouts' },
  ],

  highYield: [
    '**Obstruction limits FLOW; restriction limits VOLUME — and the FEV1/FVC ratio is the one number that separates them.** In obstruction, FEV1 falls further than FVC, so the **ratio drops below 0.70**, while **TLC and RV RISE** because airways close before the lung has emptied; the **RV/TLC ratio** climbs above **0.35–0.40** and the chest is hyperinflated. In restriction, FEV1 and FVC fall together, so the **ratio is preserved or supranormal, often above 0.85**, while **TLC FALLS**. The trap is built into this: a severely obstructed patient also has a low FVC, because every litre trapped as RV is a litre subtracted from the vital capacity. So FVC cannot diagnose restriction — only **TLC** can, and restriction is defined as TLC below the lower limit of normal. The volume side of this argument is taken up in [[rbp-restrictive-interstitial-lung]].',
    '**Emphysema is permanent enlargement of the airspaces distal to the terminal bronchiole caused by destruction of the alveolar WALLS, without significant fibrosis — a disease of lost matrix, not of thickened tissue.** The engine is **protease-antiprotease imbalance**. Cigarette smoke recruits neutrophils and macrophages into the acinus, which release **neutrophil elastase, proteinase 3, cathepsin G** and the macrophage metalloproteinases **MMP-9 and MMP-12**; these digest **elastin**, the one matrix protein the lung cannot meaningfully replace. Normally **alpha-1-antitrypsin**, made in the liver and accounting for around **90%** of serum antiprotease activity, neutralises them. Smoke defeats it twice: it multiplies the proteases, and its oxidants **sulfoxidise the active-site methionine** of alpha-1-antitrypsin, producing a functional deficiency in someone with entirely normal genes. Inherited deficiency does the same thing from the other end — the **PiZZ** homozygote holds only about **10–15%** of normal serum levels because the misfolded protein polymerises inside hepatocytes instead of being secreted, which is why the same mutation causes emphysema in the lung and cirrhosis in the liver.',
    '**The airway collapses in emphysema because the ALVEOLAR wall was destroyed, not because the airway wall was narrowed — and that single sentence explains why the obstruction is fixed.** Bronchioles under about **2 mm** have no cartilage. They stay open only because the elastic alveolar septa attached radially around them pull outwards — **radial tethering**. Destroy those septa and the tether goes, so the small airways lose their splint. On forced expiration, pleural pressure turns positive and compresses every intrathoracic airway; the airway survives only where the pressure inside it still exceeds the pressure outside. Loss of recoil lowers the driving pressure inside, moving the **equal pressure point** upstream into the unsupported bronchiole, which then **collapses dynamically** and traps gas behind it. That is why emphysema gives you a **low FEV1/FVC with a HIGH TLC**, why the patient instinctively breathes through **pursed lips** (raising mouth pressure splints the airway open), and why a bronchodilator relaxes smooth muscle that was never the problem.',
    '**The anatomical subtype of emphysema is the exam question, and it is decided by which part of the acinus is destroyed and which lobe it favours.** **CENTRIACINAR (centrilobular)** destroys the **respiratory bronchioles at the centre of the acinus while the distal alveoli are initially spared**; it is the **smoking-related** form, **upper-lobe and apical-segment predominant**, and accounts for over **95%** of clinically significant emphysema. **PANACINAR** destroys the acinus **uniformly, from respiratory bronchiole to terminal blind alveolus**; it is the **alpha-1-antitrypsin deficiency** form and is **lower-zone and basal predominant**. Two others exist and are worth naming so they do not steal a stem: **paraseptal (distal acinar)** spares the centre and hits the **periphery against the pleura and interlobular septa**, forming **apical subpleural bullae** — the lesion behind **spontaneous pneumothorax in a tall young man**; and **irregular** emphysema around old scars, which is the commonest form at autopsy and almost always clinically silent.',
    '**Chronic bronchitis is defined CLINICALLY and correlated morphologically — the definition and the lesion causing the obstruction are not in the same airway.** The definition is a **productive cough on most days for at least 3 consecutive months in each of 2 consecutive years**, with other causes excluded: no biopsy, no imaging, no spirometry appears in it. Its morphological correlate in the large airways is **hypertrophy of the submucosal mucous glands**, quantified by the **Reid index** — the thickness of the gland layer divided by the thickness of the bronchial wall between epithelium and cartilage, normally about **0.4** and raised toward **0.5–0.7**. But that big-airway gland hyperplasia produces the **sputum**, not the airflow limitation. The obstruction comes from the **small airways**: **goblet-cell metaplasia**, mucus plugging, inflammatory infiltration and **peribronchiolar fibrosis** in bronchioles under 2 mm — chronic bronchiolitis. Hence the clinical overlap syndrome in [[copd-emphysema-chronic-bronchitis]]: most smokers carry both lesions, and **DLCO** tells you which dominates, because only emphysema destroys alveolar-capillary surface.',
    '**Asthma is reversible airway hyperresponsiveness, and in the atopic form the mechanism is a textbook type I hypersensitivity reaction whose morphology you can name.** Allergen taken up by dendritic cells drives a **TH2** response: **IL-4** class-switches B cells to **IgE**, **IL-5** recruits and survives **eosinophils**, **IL-13** drives mucus hypersecretion and further IgE. Re-exposure cross-links IgE on mast cells and gives the **early phase within minutes** — histamine, **leukotrienes C4, D4 and E4** and prostaglandin D2 causing bronchoconstriction, oedema and mucus — then the **late phase at 4–8 hours**, dominated by eosinophils whose **major basic protein** and **eosinophil cationic protein** strip the epithelium. The sections show **mucus plugging of bronchi**, **Curschmann spirals** (whorled casts of shed epithelium extruded from those plugs), **Charcot-Leyden crystals** (galectin-10 released from disintegrating eosinophils), a distinctively **thickened subepithelial basement membrane** (deposited type I and III collagen beneath the true basement membrane), and hypertrophy of submucosal glands and smooth muscle. Those last structural changes are **airway remodelling** — the component that does **not** reverse with a bronchodilator and converts asthma into fixed obstruction. Clinical phenotypes are developed in [[asthma-bronchiectasis-pathology]].',
  ],

  mechanism: {
    title: 'Cigarette smoke to the dynamically collapsing bronchiole',
    steps: [
      { id: 's1', label: 'Smoke draws neutrophils and macrophages into the acinus and activates NF-κB', detail: 'Nicotine is directly chemotactic and smoke-derived reactive oxygen species amplify the recruitment.', emphasis: 'normal' },
      { id: 's2', label: 'Neutrophil elastase, proteinase 3, cathepsin G, MMP-9 and MMP-12 digest alveolar elastin', emphasis: 'key' },
      { id: 's3', label: 'Oxidants sulfoxidise the active-site methionine of alpha-1-antitrypsin, disarming the brake', detail: 'A functional antiprotease deficiency in a person with two normal SERPINA1 alleles; the PiZZ genotype reaches the same endpoint by failing to secrete the protein.', emphasis: 'key' },
      { id: 's4', label: 'Alveolar walls distal to the terminal bronchiole are destroyed and airspaces coalesce, with no fibrosis', emphasis: 'key' },
      { id: 's5', label: 'Elastic recoil falls, so radial tethering no longer splints the cartilage-free bronchioles open', emphasis: 'key' },
      { id: 's6', label: 'On expiration the equal pressure point moves into the unsupported bronchiole, it collapses, gas is trapped — FEV1/FVC falls while TLC and RV rise', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Barrel-shaped chest, hyper-resonant percussion, distant breath sounds and an impalpable apex beat', mechanism: 'Air trapping has raised RV and TLC; the hyperinflated lung interposes between the heart and the chest wall', significance: 'key' },
    { sign: 'Spontaneous pursed-lip breathing with a prolonged expiratory phase', mechanism: 'Raising pressure at the mouth raises pressure throughout the airway, driving the equal pressure point back toward the mouth so the untethered bronchiole is splinted instead of collapsing', significance: 'key' },
    { sign: 'Hoover sign — the lower costal margins move inward rather than outward on inspiration', mechanism: 'The flattened low diaphragm of hyperinflation pulls the lower ribs medially instead of lifting them; it is a sign of hyperinflation, not of weakness', significance: 'key' },
    { sign: 'Widespread polyphonic expiratory wheeze that largely clears 15 minutes after a bronchodilator', mechanism: 'Smooth muscle constriction and mucosal oedema are reversible; destroyed alveolar septa are not, so reversibility points at asthma rather than emphysema', significance: 'key' },
    { sign: 'Copious purulent sputum, coarse crackles that shift with coughing, and finger clubbing', mechanism: 'Bronchiectasis — pooled infected secretions in permanently dilated airways; clubbing is common here and is NOT a feature of uncomplicated COPD', significance: 'key' },
    { sign: 'Productive cough on most days through three winter months for two consecutive years', mechanism: 'The clinical definition of chronic bronchitis; morphologically it reflects submucosal gland hypertrophy in the large airways rather than the small-airway disease that limits flow', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Post-bronchodilator FEV1/FVC 0.52, TLC 128% predicted, RV/TLC 0.58', meaning: 'Obstruction with hyperinflation and gas trapping. The raised TLC excludes coexisting restriction outright, however low the FVC looks' },
    { clue: 'DLCO 44% predicted in a patient whose FEV1/FVC is 0.55', meaning: 'Emphysema. Destruction of alveolar septa removes capillary surface area, so transfer falls; in chronic bronchitis and asthma the septa are intact and DLCO is normal or even high' },
    { clue: 'FEV1 rising by 16% and 280 mL after salbutamol', meaning: 'Significant reversibility — both thresholds (12% AND 200 mL) are met, which supports asthma. Fixed obstruction in emphysema fails this test because the lesion is destroyed matrix, not constricted muscle' },
    { clue: 'CT showing lower-zone panlobular lucency in a 41-year-old never-smoker with raised transaminases', meaning: 'Alpha-1-antitrypsin deficiency. Confirm with serum level and Pi phenotype; the liver biopsy shows PAS-positive, diastase-RESISTANT globules of polymerised protein in periportal hepatocytes' },
    { clue: 'CT signet-ring sign — a dilated airway wider than its accompanying artery — with lack of tapering and tram-track walls', meaning: 'Bronchiectasis. The airway should always be the smaller of the pair; when it is not, the wall has been destroyed' },
    { clue: 'Reid index 0.62 measured on a bronchial cross-section at autopsy', meaning: 'Mucous gland hypertrophy confirming chronic bronchitis morphologically (normal is about 0.4). It corroborates the clinical definition; it does not explain the airflow obstruction' },
  ],

  treatment: [
    {
      logic: 'Treat the reversible compartment — you cannot regrow an alveolar wall',
      detail: 'Separate the three lesions by what each drug can physically reach. **Bronchodilators** relax airway smooth muscle, so they help most where muscle tone is the lesion (**asthma**) and least where destroyed septa are the lesion (**emphysema**). **Inhaled corticosteroids** suppress eosinophilic TH2 inflammation, which is why they transform asthma and do comparatively little for stable COPD, whose infiltrate is **neutrophilic and macrophage-rich**. Only two interventions change the natural history of emphysema: **stopping smoking**, which removes the protease drive, and **long-term oxygen** for chronic hypoxaemia, which works on the pulmonary vasculature rather than the airway. **Lung volume reduction surgery** is the exception that proves the mechanism — resecting the worst upper-lobe tissue restores recoil to the remainder and re-tethers its bronchioles. Ventilatory management belongs to [[respiratory-failure-oxygen-therapy]].',
    },
    {
      logic: 'In bronchiectasis, break the cycle at clearance and infection, because the dilatation is permanent',
      detail: 'The lesion is an **irreversibly destroyed airway wall**, so the target is the loop that keeps destroying more of it: **impaired clearance leads to infection, infection to neutrophil elastase release, elastase to further wall destruction and more impaired clearance**. Treatment therefore attacks clearance (physiotherapy, hydration, airway clearance devices) and bacterial load (targeted antibiotics for exacerbations), while the single most valuable step is finding the **underlying cause** — obstruction by a tumour or foreign body, **cystic fibrosis**, ciliary dyskinesia, prior necrotising infection or immunoglobulin deficiency — because an untreated cause guarantees recurrence.',
    },
  ],

  mnemonics: [
    {
      hook: 'Centriacinar climbs, panacinar sinks',
      expansion: [
        'Centriacinar: the respiratory bronchioles at the CENTRE of the acinus go first, distal alveoli initially spared',
        'Smoking; upper lobes and the apical segments of the lower lobes; over 95% of symptomatic emphysema',
        'Panacinar: the WHOLE acinus uniformly, respiratory bronchiole through to blind alveolus',
        'Alpha-1-antitrypsin deficiency; lower zones and bases',
        'Paraseptal hugs the pleura and septa — apical bullae, spontaneous pneumothorax in a tall young man',
      ],
    },
    {
      hook: 'Three Cs in asthmatic sputum, and every one is something shed',
      expansion: [
        'Curschmann spirals — whorled casts of shed epithelium squeezed out of mucus plugs',
        'Charcot-Leyden crystals — galectin-10 from eosinophils that have broken apart',
        'Creola bodies — clumps of sloughed surface epithelial cells',
        'The thing NOT in the sputum is the diagnostic one: subepithelial basement membrane thickening, seen only on biopsy',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Reading a low FVC in a patient with obstruction',
      wrongInstinct: 'The FVC is reduced, so there must be a coexisting restrictive defect',
      rightAnswer: 'Measure TLC. In pure obstruction the low FVC is produced by air trapping and TLC is raised; restriction requires TLC below the lower limit of normal',
      why: 'Spirometry cannot see trapped gas — every litre added to RV is subtracted from FVC. The rule is absolute: restriction is defined by TLC, never by FVC',
    },
    {
      questionCategory: 'Why airflow is obstructed in emphysema',
      wrongInstinct: 'The bronchioles are narrowed from within by inflammation, mucus and smooth muscle, as in chronic bronchitis',
      rightAnswer: 'Bronchioles below 2 mm have no cartilage and are held open only by the elastic recoil of the alveolar septa tethered to them; destroying the septa removes the splint and the airway collapses on expiration',
      why: 'Emphysema is a disease of the alveolar wall in which the airway is a passive victim — which is exactly why the obstruction is fixed and a bronchodilator cannot reverse it',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 41-year-old who has never smoked has progressive dyspnoea. CT shows uniform lucency of both lower lobes. Transaminases are raised, and liver biopsy shows PAS-positive, diastase-resistant globules in periportal hepatocytes. Which statement best explains both organs?',
      options: [
        { id: 'a', text: 'Macrophage metalloproteinases are overexpressed in lung and liver alike' },
        { id: 'b', text: 'A misfolded alpha-1-antitrypsin polymerises in hepatocytes, so it injures the liver by retention and the lung by absence' },
        { id: 'c', text: 'Ciliary dyskinesia impairs clearance in the airway and the biliary tree' },
        { id: 'd', text: 'Chronic hypoxaemia causes both the basal emphysema and the hepatic congestion' },
      ],
      answerId: 'b',
      explanation: 'The PiZZ variant folds abnormally and polymerises within the hepatocyte endoplasmic reticulum, giving the PAS-positive diastase-resistant globules and a toxic gain of function in the liver. Because it is not secreted, serum levels fall to roughly 10 to 15% of normal and neutrophil elastase digests alveolar elastin unopposed — a loss of function in the lung. The distribution is panacinar and lower-zone predominant, the opposite of smoking-related centriacinar disease.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Spirometry shows FEV1 38% predicted, FVC 61% predicted, FEV1/FVC 0.47. Plethysmography gives TLC 131% predicted and RV 245% predicted. How should the reduced FVC be interpreted?',
      options: [
        { id: 'a', text: 'It indicates a mixed obstructive and restrictive defect' },
        { id: 'b', text: 'It indicates poor effort and the study should be repeated' },
        { id: 'c', text: 'It is the direct consequence of gas trapping; the raised TLC excludes restriction' },
        { id: 'd', text: 'It indicates respiratory muscle weakness superimposed on obstruction' },
      ],
      answerId: 'c',
      explanation: 'Vital capacity is total lung capacity minus residual volume. When airways close early and RV rises to 245% predicted, FVC must fall even though the lung is larger than normal. Restriction is defined by a TLC below the lower limit of normal, and here TLC is 131% predicted, so restriction is excluded. Spirometry alone can never make this call because it does not measure the trapped gas.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A bronchial biopsy from a 24-year-old with episodic wheeze shows mucus plugging, eosinophils in the submucosa, smooth muscle hypertrophy and a strikingly thickened subepithelial collagen layer. Which finding best predicts that some of her obstruction will not reverse with a bronchodilator?',
      options: [
        { id: 'a', text: 'The eosinophilic infiltrate' },
        { id: 'b', text: 'The mucus plugging' },
        { id: 'c', text: 'The subepithelial collagen deposition and smooth muscle hypertrophy of airway remodelling' },
        { id: 'd', text: 'The presence of Charcot-Leyden crystals in the lumen' },
      ],
      answerId: 'c',
      explanation: 'Eosinophils, mucus and bronchoconstriction are the reversible compartment — steroids and bronchodilators act on them. Deposited type I and III collagen beneath the true basement membrane, together with smooth muscle and gland hypertrophy, is structural remodelling: it narrows the airway permanently and is the substrate of fixed obstruction in long-standing asthma. Charcot-Leyden crystals are galectin-10 from broken eosinophils and mark activity, not irreversibility.',
      tests: 'disease',
    },
  ],
};

export default rbpObstructiveLungDisease;
