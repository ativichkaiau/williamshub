import type { Lecture } from '../../lib/types';

export const intracellularAccumulationsCalcification: Lecture = {
  id: 'intracellular-accumulations-calcification',
  title: 'Intracellular Accumulations & Pathologic Calcification',
  system: 'pathology',
  source: 'L4 — Intracellular Accumulations',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L4 Accumulations' },
    { kind: 'mechanism', label: 'Lipid/protein/pigment; dystrophic vs metastatic' },
    { kind: 'exam', label: 'Steatosis; haemosiderin; dystrophic Ca' },
  ],

  highYield: [
    'Cells ACCUMULATE substances abnormally when the amount produced exceeds what can be metabolised/exported, when a defective enzyme cannot degrade a substance, or when an abnormal/exogenous material cannot be broken down. Accumulations are LIPIDS, PROTEINS, or PIGMENTS (endogenous or exogenous). Some are reversible; the accumulation itself may be harmless or may injure the cell.',
    'LIPIDS: STEATOSIS (fatty change) — triglyceride accumulation, classically in the LIVER (alcohol, obesity, diabetes, toxins, protein malnutrition) and heart; CHOLESTEROL accumulates in atheromatous plaques and in macrophages ("foam cells"; xanthomas). PROTEINS: reabsorption droplets in proteinuric renal tubules, RUSSELL BODIES (immunoglobulin in plasma cells), and MALLORY-DENK "hyaline" (damaged keratin filaments in alcoholic hepatocytes). GLYCOGEN accumulates in diabetes and glycogen-storage diseases (demonstrated by PAS).',
    'PIGMENTS — endogenous: LIPOFUSCIN ("wear-and-tear", brown, in ageing/atrophic cells — sign of free-radical/lipid-peroxidation injury, harmless); MELANIN (brown-black, the only endogenous BLACK pigment); HAEMOSIDERIN (golden-brown iron-storage pigment, Prussian-blue positive) — LOCAL excess in a bruise/old haemorrhage, or SYSTEMIC in iron overload (haemosiderosis/haemochromatosis); BILIRUBIN (jaundice). Exogenous: CARBON/ANTHRACOSIS (inhaled carbon in lung/nodes — coal, smoke, pollution) and tattoo pigment.',
    'PATHOLOGIC CALCIFICATION = abnormal tissue deposition of calcium salts, of two types. DYSTROPHIC: in DAMAGED/necrotic tissue (fat necrosis, atheromas, damaged/calcified heart valves, TB/caseous foci, dead parasites) with NORMAL serum calcium. METASTATIC: in NORMAL tissue because of HYPERCALCAEMIA (hyperparathyroidism, bone destruction, vitamin D excess, renal failure, sarcoidosis, milk-alkali) — deposits in lungs, kidneys, gastric mucosa, vessels. "Damaged tissue = dystrophic; high calcium = metastatic."',
    '**The take-home: accumulations = lipid (STEATOSIS/liver; cholesterol foam cells), protein (Russell bodies, Mallory hyaline), glycogen (PAS); PIGMENTS — lipofuscin (wear-and-tear brown), melanin (black), HAEMOSIDERIN (iron, Prussian blue), bilirubin, anthracosis (carbon). CALCIFICATION: DYSTROPHIC (damaged tissue, normal Ca) vs METASTATIC (normal tissue, HIGH Ca/hypercalcaemia).** Special stains detect these ([[diagnostic-pathology-methods]]); fatty change is a reversible injury ([[cell-injury-mechanisms]]).',
  ],

  mechanism: {
    title: 'Abnormal accumulation (overload/defective degradation/undegradable): lipid (steatosis, cholesterol), protein (Russell/Mallory), glycogen; pigments (lipofuscin/melanin/haemosiderin/bilirubin/carbon); calcification dystrophic (damaged, normal Ca) vs metastatic (normal tissue, high Ca)',
    steps: [
      { id: 's1', label: 'Accumulate when production exceeds clearance, degradation fails, or material undegradable', emphasis: 'key' },
      { id: 's2', label: 'Lipid: steatosis (liver — alcohol/obesity/diabetes); cholesterol (atheroma, foam cells)', emphasis: 'key' },
      { id: 's3', label: 'Protein: Russell bodies, Mallory-Denk hyaline; glycogen (PAS+, diabetes/GSD)', emphasis: 'key' },
      { id: 's4', label: 'Pigments: lipofuscin (wear-and-tear), melanin (black), haemosiderin (iron, Prussian blue), bilirubin, anthracosis (carbon)', emphasis: 'key' },
      { id: 's5', label: 'Calcification: DYSTROPHIC (damaged tissue, normal Ca) vs METASTATIC (normal tissue, hypercalcaemia)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A large, pale, greasy liver with fat vacuoles in hepatocytes', mechanism: 'Hepatic steatosis (fatty change)', significance: 'key' },
    { sign: 'Golden-brown, Prussian-blue-positive pigment in macrophages at an old bruise', mechanism: 'Haemosiderin (iron)', significance: 'key' },
    { sign: 'Brown "wear-and-tear" pigment in ageing/atrophic heart and liver cells', mechanism: 'Lipofuscin', significance: 'key' },
    { sign: 'Calcification of a damaged/atheromatous artery or heart valve with normal serum calcium', mechanism: 'Dystrophic calcification', significance: 'supportive' },
    { sign: 'Calcium deposits in normal lungs/kidneys in hyperparathyroidism', mechanism: 'Metastatic calcification (hypercalcaemia)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The accumulation seen in the fatty liver', meaning: 'Triglyceride (steatosis)' },
    { clue: 'The iron-storage pigment (Prussian-blue positive)', meaning: 'Haemosiderin' },
    { clue: 'Calcification in damaged tissue with normal serum calcium', meaning: 'Dystrophic' },
    { clue: 'Calcification in normal tissue due to hypercalcaemia', meaning: 'Metastatic' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Abnormal accumulations are clues to disease: hepatic steatosis flags alcohol/metabolic liver injury, cholesterol foam cells underlie atherosclerosis and xanthomas, haemosiderin marks old haemorrhage or systemic iron overload, and anthracosis reflects inhaled carbon. Pathologic calcification is diagnostically important — dystrophic calcification localises previously damaged tissue (atheromas, old TB, damaged valves) with normal serum calcium, whereas metastatic calcification signals an underlying cause of hypercalcaemia (hyperparathyroidism, bone destruction, vitamin D excess, renal failure) that must be found and treated. Special stains reveal these ([[diagnostic-pathology-methods]]); fatty change reflects reversible injury ([[cell-injury-mechanisms]]).' },
  ],

  mnemonics: [
    { hook: 'Pigments: "Lipofuscin=brown wear-and-tear, Melanin=black, Haemosiderin=iron (Prussian blue), Anthracosis=carbon"', expansion: ['Steatosis = fatty liver', 'Mallory hyaline = alcoholic'] },
    { hook: '"Dystrophic = Damaged tissue (normal Ca); Metastatic = high Ca (normal tissue)"', expansion: ['Dystrophic: atheroma/TB/valves', 'Metastatic: hyperparathyroidism'] },
  ],

  traps: [
    {
      questionCategory: 'Dystrophic vs metastatic calcification',
      wrongInstinct: 'All pathologic calcification means the patient has a high blood calcium level',
      rightAnswer: 'Only METASTATIC calcification requires HYPERCALCAEMIA (deposition in NORMAL tissues due to high serum calcium — hyperparathyroidism, bone destruction, vitamin D excess, renal failure); DYSTROPHIC calcification occurs in DAMAGED/necrotic tissue (atheromas, old TB foci, damaged heart valves, fat necrosis) with a NORMAL serum calcium — so finding calcification does not by itself imply hypercalcaemia; the key is whether the tissue is damaged (dystrophic) or the calcium is high (metastatic)',
      why: 'Assuming all calcification means hypercalcaemia leads to an unnecessary metabolic work-up for common dystrophic calcification (e.g. atheroma), while missing that metastatic calcification is a signpost to a genuine hypercalcaemic disorder.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Calcification of a damaged, atheromatous artery in a patient with a normal serum calcium level is an example of:',
      options: [
        { id: 'a', text: 'Dystrophic calcification' },
        { id: 'b', text: 'Metastatic calcification' },
        { id: 'c', text: 'Haemosiderosis' },
        { id: 'd', text: 'Steatosis' },
      ],
      answerId: 'a',
      explanation: 'Dystrophic calcification occurs in previously damaged or necrotic tissue (atheromas, old TB foci, damaged valves, fat necrosis) with normal serum calcium. Metastatic calcification, by contrast, occurs in normal tissue because of hypercalcaemia.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A golden-brown, iron-containing pigment that stains positively with Prussian blue and accumulates at sites of old haemorrhage is:',
      options: [
        { id: 'a', text: 'Haemosiderin' },
        { id: 'b', text: 'Lipofuscin' },
        { id: 'c', text: 'Melanin' },
        { id: 'd', text: 'Anthracotic (carbon) pigment' },
      ],
      answerId: 'a',
      explanation: 'Haemosiderin is an iron-storage pigment (aggregated ferritin), golden-brown on H&E and Prussian-blue positive; it accumulates locally after haemorrhage (e.g. a bruise) or systemically in iron overload (haemosiderosis/haemochromatosis). Lipofuscin is "wear-and-tear" pigment and melanin is the endogenous black pigment.',
      tests: 'investigation',
    },
  ],

  figures: [],
};

export default intracellularAccumulationsCalcification;
