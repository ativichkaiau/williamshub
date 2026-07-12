import type { Lecture } from '../../lib/types';

export const hhlIronMetabolismStudies: Lecture = {
  id: 'hhl-iron-metabolism-studies',
  title: 'Iron Metabolism & Iron Studies',
  system: 'heme',
  source: 'L8 — Nutritional Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L8 Nutritional Anemia' },
    { kind: 'mechanism', label: 'Hepcidin–ferroportin axis' },
    { kind: 'investigation', label: 'Ferritin · TIBC · sat · sTfR' },
  ],

  highYield: [
    '**Absorption is duodenal**: dietary Fe³⁺ is reduced and taken up by **DMT1** on the apical enterocyte, then exported to blood by **ferroportin** (basolateral). **Transferrin transports it, ferritin stores it.**',
    '**Hepcidin is the master regulator** (a liver hormone): it **binds and degrades ferroportin**, blocking iron export from enterocytes and macrophages. **Inflammation (IL-6) ↑hepcidin → iron trapped → anemia of chronic disease**; **iron lack / hypoxia / erythropoietic drive ↓hepcidin → more absorption**.',
    '**Iron deficiency**: **↓ferritin, ↓serum iron, ↑TIBC, ↓transferrin saturation, ↑sTfR** (see [[hhl-iron-deficiency]]).',
    '**Anemia of chronic disease (ACD)**: **normal/↑ferritin, ↓serum iron, ↓TIBC, ↓/normal saturation, normal sTfR** — iron is present but locked away by hepcidin.',
    '**Iron overload / thalassemia**: **↑ferritin, ↑serum iron, ↓TIBC, ↑transferrin saturation** (high saturation is the early hemochromatosis clue). **sTfR helps split iron deficiency (high) from ACD (normal).**',
  ],

  mechanism: {
    title: 'Hepcidin dials iron release through ferroportin',
    steps: [
      { id: 's1', label: 'Duodenal DMT1 uptake → ferroportin export to blood' },
      { id: 's2', label: 'Hepcidin (liver) binds and degrades ferroportin', emphasis: 'key' },
      { id: 's3', label: 'Inflammation ↑hepcidin → iron trapped → ACD', emphasis: 'key' },
      { id: 's4', label: 'Iron lack/hypoxia ↓hepcidin → ↑absorption' },
      { id: 's5', label: 'Genetically low hepcidin (hemochromatosis/thal) → overload', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Low ferritin', mechanism: 'Depleted stores — specific for iron deficiency', significance: 'key' },
    { sign: 'Low serum iron with LOW TIBC and normal/high ferritin', mechanism: 'Iron sequestration — anemia of chronic disease', significance: 'key' },
    { sign: 'High transferrin saturation with high ferritin', mechanism: 'Iron overload (hemochromatosis / transfusional / thalassemia)', significance: 'supportive' },
    { sign: 'High soluble transferrin receptor (sTfR)', mechanism: 'Tissue iron deficiency (normal in ACD)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ferritin low, TIBC high, saturation low, sTfR high', meaning: 'Iron deficiency' },
    { clue: 'Ferritin normal/high, TIBC low, saturation low, sTfR normal', meaning: 'Anemia of chronic disease' },
    { clue: 'Ferritin high, TIBC low, saturation high', meaning: 'Iron overload / thalassemia' },
    { clue: 'Both low ferritin AND inflammation', meaning: 'Combined iron deficiency + ACD — use sTfR to unmask' },
  ],

  treatment: [
    { logic: 'Match therapy to the pattern, not the anemia', detail: 'Replace iron only when stores are truly low; in ACD treat the underlying inflammation.' },
    { logic: 'Do not iron-load a hepcidin-suppressed patient', detail: 'In thalassemia/hemochromatosis low hepcidin already over-absorbs iron — added iron worsens overload.' },
  ],

  mnemonics: [
    { hook: 'Hepcidin HOLDS iron in', expansion: ['↑Hepcidin (inflammation) → ferroportin down → iron trapped → ACD', '↓Hepcidin → iron released/absorbed → overload'] },
    { hook: 'Deficiency: ferritin↓ TIBC↑; ACD: ferritin↑/normal TIBC↓', expansion: ['sTfR high in deficiency, normal in ACD'] },
  ],

  traps: [
    {
      questionCategory: 'Iron deficiency vs anemia of chronic disease',
      wrongInstinct: 'A low serum iron means the patient is iron deficient and needs iron',
      rightAnswer: 'Serum iron is low in BOTH iron deficiency and ACD — use ferritin/TIBC (low ferritin + high TIBC = deficiency; normal-high ferritin + low TIBC = ACD) and sTfR to tell them apart',
      why: 'ACD sequesters iron via hepcidin, so serum iron falls despite adequate or increased stores; giving iron there is wrong.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which mediator, elevated during inflammation, degrades ferroportin and traps iron in macrophages and enterocytes to cause anemia of chronic disease?',
      options: [
        { id: 'a', text: 'Erythropoietin' },
        { id: 'b', text: 'Hepcidin' },
        { id: 'c', text: 'Transferrin' },
        { id: 'd', text: 'Ferritin' },
      ],
      answerId: 'b',
      explanation: 'Inflammation (IL-6) raises hepcidin, which binds and degrades ferroportin, blocking iron export — iron is locked in stores, lowering serum iron and causing ACD.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient has low serum iron. Ferritin is 250 µg/L (high) and TIBC is low. Which pattern is this?',
      options: [
        { id: 'a', text: 'Iron deficiency anemia' },
        { id: 'b', text: 'Anemia of chronic disease' },
        { id: 'c', text: 'Hereditary hemochromatosis' },
        { id: 'd', text: 'Acute blood loss' },
      ],
      answerId: 'b',
      explanation: 'A high/normal ferritin with a LOW TIBC and low serum iron is the anemia-of-chronic-disease pattern (iron sequestered by hepcidin); iron deficiency instead shows low ferritin and high TIBC.',
      tests: 'investigation',
    },
  ],
};

export default hhlIronMetabolismStudies;
