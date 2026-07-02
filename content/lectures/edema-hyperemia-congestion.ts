import type { Lecture } from '../../lib/types';

export const edemaHyperemiaCongestion: Lecture = {
  id: 'edema-hyperemia-congestion',
  title: 'Edema, Hyperemia & Congestion',
  system: 'pathology',
  source: 'L6 — Hemodynamic Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L6 Edema' },
    { kind: 'mechanism', label: 'Starling forces; active vs passive' },
    { kind: 'exam', label: 'Edema causes; nutmeg liver' },
  ],

  highYield: [
    '**About 60% of body weight is water; fluid movement across capillaries is governed by STARLING forces — HYDROSTATIC pressure pushing fluid OUT and plasma COLLOID OSMOTIC (oncotic) pressure pulling it IN, with the lymphatics draining the small excess. EDEMA (excess interstitial fluid) results when these are disturbed: ↑HYDROSTATIC pressure, ↓oncotic pressure, LYMPHATIC obstruction, SODIUM/water retention, or increased vascular PERMEABILITY (inflammation).**',
    '**Causes by mechanism: ↑HYDROSTATIC — heart failure (systemic/pulmonary congestion), venous obstruction/thrombosis; ↓ONCOTIC (hypoalbuminaemia) — NEPHROTIC syndrome (urinary loss), cirrhosis (↓synthesis), protein malnutrition; LYMPHATIC obstruction — lymphoedema (filariasis, surgery/radiation, tumour); SODIUM RETENTION — renal disease, activation of renin-angiotensin-aldosterone. Inflammatory oedema is a protein-rich EXUDATE; the others are protein-poor TRANSUDATES. Terms: anasarca (severe generalised), ascites, effusions.**',
    '**HYPEREMIA vs CONGESTION both increase blood in a tissue but differ in mechanism. HYPEREMIA is ACTIVE — arteriolar dilation increases INFLOW (exercise, inflammation) → the tissue is RED (oxygenated). CONGESTION is PASSIVE — impaired venous OUTFLOW → the tissue is BLUE-RED and CYANOTIC (deoxygenated, stagnant blood), and chronic congestion causes hypoxic damage, capillary rupture and fibrosis.**',
    '**Chronic passive congestion has classic morphology: chronic PULMONARY congestion (left heart failure) → "HEART-FAILURE CELLS" (haemosiderin-laden macrophages in alveoli); chronic HEPATIC congestion (right heart failure) → "NUTMEG LIVER" (congested red centrilobular zones alternating with pale periportal fat). HAEMORRHAGE (extravasated blood) is classified by size — petechiae (1–2 mm), purpura (larger), ecchymoses (bruises >1–2 cm) — and by site (haematoma, haemothorax, haemarthrosis).**',
    '**The take-home: EDEMA from disturbed STARLING forces — ↑hydrostatic (heart failure), ↓oncotic (nephrotic/cirrhosis/malnutrition), LYMPHATIC obstruction, Na retention, or inflammation (exudate). HYPEREMIA = ACTIVE arteriolar (red) vs CONGESTION = PASSIVE venous (blue, cyanotic) → nutmeg liver / heart-failure cells. Haemorrhage: petechiae/purpura/ecchymoses.** Thrombosis (a cause of congestion) is [[hemostasis-thrombosis-embolism]]; infarction/shock is [[infarction-shock]].',
  ],

  mechanism: {
    title: 'Edema from disturbed Starling forces (↑hydrostatic/↓oncotic/lymphatic/Na retention/inflammation); hyperemia = active arteriolar (red) vs congestion = passive venous (blue) → nutmeg liver / heart-failure cells; haemorrhage petechiae/purpura/ecchymosis',
    steps: [
      { id: 's1', label: 'Starling: hydrostatic pushes fluid out, oncotic pulls in, lymphatics drain excess', emphasis: 'key' },
      { id: 's2', label: 'Edema: ↑hydrostatic (heart failure), ↓oncotic (nephrotic/cirrhosis), lymphatic, Na retention, inflammation', emphasis: 'key' },
      { id: 's3', label: 'Inflammatory oedema = exudate (protein-rich); others = transudate (protein-poor)', emphasis: 'key' },
      { id: 's4', label: 'Hyperemia = ACTIVE arteriolar inflow (red) vs congestion = PASSIVE venous outflow (blue/cyanotic)', emphasis: 'key' },
      { id: 's5', label: 'Chronic congestion: nutmeg liver (right HF), heart-failure cells (left HF); haemorrhage by size', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Pitting peripheral oedema and pulmonary congestion in heart failure', mechanism: 'Increased hydrostatic pressure', significance: 'key' },
    { sign: 'Generalised oedema with heavy proteinuria and low albumin', mechanism: 'Reduced plasma oncotic pressure (nephrotic)', significance: 'key' },
    { sign: '"Nutmeg" mottled liver in right heart failure', mechanism: 'Chronic passive hepatic congestion', significance: 'key' },
    { sign: 'Haemosiderin-laden "heart-failure cells" in alveoli', mechanism: 'Chronic pulmonary congestion (left HF)', significance: 'supportive' },
    { sign: 'Limb swelling after lymph-node dissection or filariasis', mechanism: 'Lymphoedema (lymphatic obstruction)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two opposing Starling forces at the capillary', meaning: 'Hydrostatic (out) and oncotic (in)' },
    { clue: 'The edema mechanism in nephrotic syndrome', meaning: 'Reduced oncotic pressure (hypoalbuminaemia)' },
    { clue: 'Active red hyperaemia vs passive blue congestion', meaning: 'Arteriolar inflow vs impaired venous outflow' },
    { clue: 'The liver appearance in chronic right heart failure', meaning: 'Nutmeg liver' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Edema is a common clinical sign whose mechanism localises the cause: raised hydrostatic pressure points to heart failure or venous obstruction, low oncotic pressure to nephrotic syndrome, cirrhosis or malnutrition, lymphatic obstruction to lymphoedema, and increased permeability to inflammation — guiding investigation and treatment (diuretics, albumin, treating the cause). Distinguishing active hyperaemia (red, arteriolar) from passive congestion (blue, venous) and recognising chronic-congestion morphology (nutmeg liver, heart-failure cells) links pathology to heart failure. Thrombosis causing congestion is [[hemostasis-thrombosis-embolism]]; infarction/shock is [[infarction-shock]].' },
  ],

  mnemonics: [
    { hook: 'Edema: "↑Hydrostatic, ↓Oncotic, Lymphatic block, Na retention, Inflammation"', expansion: ['Nephrotic = ↓oncotic', 'Heart failure = ↑hydrostatic'] },
    { hook: '"Hyperemia = Active/red (arteriolar); Congestion = passive/blue (venous)"', expansion: ['Nutmeg liver = right HF', 'Heart-failure cells = left HF'] },
  ],

  traps: [
    {
      questionCategory: 'Hyperemia vs congestion',
      wrongInstinct: 'Hyperemia and congestion both just mean more blood, so the tissue looks the same',
      rightAnswer: 'They are opposite in mechanism and appearance: HYPEREMIA is an ACTIVE process — arteriolar dilation increases INFLOW of oxygenated blood, so the tissue is RED (e.g. exercising muscle, inflammation); CONGESTION is a PASSIVE process — impaired venous OUTFLOW backs up deoxygenated blood, so the tissue is BLUE-RED and CYANOTIC, and if chronic causes hypoxic damage and fibrosis (nutmeg liver, heart-failure cells)',
      why: 'The active/red (arteriolar) versus passive/blue (venous) distinction determines the colour, the oxygenation and the downstream damage; conflating them misreads whether increased blood is a healthy response or a sign of failing venous drainage.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Generalised oedema due to heavy urinary protein loss and hypoalbuminaemia (nephrotic syndrome) results from:',
      options: [
        { id: 'a', text: 'Increased capillary hydrostatic pressure' },
        { id: 'b', text: 'Reduced plasma colloid osmotic (oncotic) pressure' },
        { id: 'c', text: 'Lymphatic obstruction' },
        { id: 'd', text: 'Increased vascular permeability from inflammation' },
      ],
      answerId: 'b',
      explanation: 'Loss of albumin lowers plasma oncotic pressure, so less fluid is drawn back into capillaries and oedema results. Increased hydrostatic pressure (heart failure), lymphatic obstruction and inflammatory permeability are the other mechanisms.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The "nutmeg liver" appearance is caused by:',
      options: [
        { id: 'a', text: 'Chronic passive hepatic congestion (right heart failure)' },
        { id: 'b', text: 'Active hyperaemia' },
        { id: 'c', text: 'Lymphatic obstruction' },
        { id: 'd', text: 'Acute hepatitis' },
      ],
      answerId: 'a',
      explanation: 'Chronic passive congestion of the liver (typically from right-sided heart failure) produces congested, red centrilobular areas alternating with paler periportal regions — the mottled "nutmeg" pattern — and can progress to centrilobular fibrosis ("cardiac cirrhosis").',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default edemaHyperemiaCongestion;
