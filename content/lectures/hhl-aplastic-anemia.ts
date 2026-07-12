import type { Lecture } from '../../lib/types';

export const hhlAplasticAnemia: Lecture = {
  id: 'hhl-aplastic-anemia',
  title: 'Aplastic Anemia',
  system: 'heme',
  source: 'L6 — Classification of Anemia & Aplastic Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L6 Anemia & Aplastic' },
    { kind: 'disease', label: 'Aplastic anemia' },
    { kind: 'mechanism', label: 'Marrow failure → pancytopenia' },
    { kind: 'treatment', label: 'IST vs HSCT' },
  ],

  highYield: [
    '**Aplastic anemia = pancytopenia + a HYPOCELLULAR ("empty"/fatty) marrow** with **NO infiltrate, NO fibrosis, NO abnormal cells**. The reticulocyte count is **low** — a hypoproliferative failure.',
    'Causes: **idiopathic autoimmune (most common — T-cell attack on stem cells)**, **drugs (chloramphenicol, sulfonamides, NSAIDs, carbamazepine)**, radiation, **viruses (seronegative hepatitis, parvovirus B19 — classically pure red-cell aplasia)**, and **inherited Fanconi anemia**.',
    '**Severity = Camitta criteria**: **severe** aplastic anemia = marrow cellularity <25% PLUS ≥2 of — **neutrophils <0.5×10⁹/L, platelets <20×10⁹/L, reticulocytes <20×10⁹/L (or <1% corrected)**; **very severe** = neutrophils <0.2×10⁹/L.',
    '**Treatment splits by age/donor**: **young + matched sibling donor → allogeneic HSCT (curative)**; **older / no donor → immunosuppression (ATG + ciclosporin)**, ± eltrombopag. Supportive transfusion and infection control throughout.',
    '**Always distinguish from other pancytopenias** — the marrow tells you: leukemia/MDS (blasts/dysplasia, often hypercellular), myelofibrosis (fibrosis + teardrop cells), megaloblastic anemia (hypercellular), hypersplenism, marrow infiltration.',
  ],

  mechanism: {
    title: 'Stem-cell loss → tri-lineage failure',
    steps: [
      { id: 's1', label: 'Insult: autoimmune T-cells / drug / virus / inherited' },
      { id: 's2', label: 'Hematopoietic stem cells destroyed or depleted', emphasis: 'key' },
      { id: 's3', label: 'Marrow becomes hypocellular (fatty)', emphasis: 'key' },
      { id: 's4', label: 'Pancytopenia with low reticulocytes' },
      { id: 's5', label: 'Neutropenic sepsis / bleeding — life-threatening', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pancytopenia with reticulocytopenia', mechanism: 'Failure of all three marrow lineages', significance: 'key' },
    { sign: 'Hypocellular marrow with fat spaces, no blasts/fibrosis', mechanism: 'Empty marrow defines aplasia', significance: 'key' },
    { sign: 'Infection / fever (neutropenia)', mechanism: 'Absent neutrophils', significance: 'supportive' },
    { sign: 'Mucosal bleeding, petechiae (thrombocytopenia)', mechanism: 'Absent platelets', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pancytopenia + LOW reticulocytes', meaning: 'Hypoproliferative marrow failure (not hemolysis)' },
    { clue: 'Bone marrow biopsy: hypocellular, no infiltrate/fibrosis', meaning: 'Confirms aplastic anemia; excludes leukemia/MDS/myelofibrosis' },
    { clue: 'Cellular/hypercellular marrow with blasts', meaning: 'NOT aplasia — think leukemia / MDS instead' },
    { clue: 'Short stature, café-au-lait, chromosome breakage', meaning: 'Fanconi anemia (inherited cause)' },
  ],

  treatment: [
    { logic: 'Allogeneic HSCT for the young with a matched donor', detail: 'Potentially curative — first choice in fit patients with a sibling match.' },
    { logic: 'Immunosuppression (ATG + ciclosporin) when transplant is not an option', detail: 'Antithymocyte globulin + ciclosporin ± eltrombopag targets the autoimmune attack.' },
    { logic: 'Supportive care', detail: 'Transfusion, prompt treatment of neutropenic sepsis, remove any offending drug.' },
  ],

  mnemonics: [
    { hook: 'Empty marrow, no invaders', expansion: ['Hypocellular / fatty', 'No blasts, no fibrosis, no infiltrate', 'Low reticulocytes'] },
    { hook: 'Young + donor → transplant; old / no donor → immunosuppress', expansion: ['HSCT is curative', 'ATG + ciclosporin otherwise'] },
  ],

  traps: [
    {
      questionCategory: 'Pancytopenia — reading the marrow',
      wrongInstinct: 'All pancytopenias with a big spleen or abnormal cells are aplastic anemia',
      rightAnswer: 'Aplastic anemia requires a HYPOCELLULAR marrow with no infiltrate or fibrosis — blasts mean leukemia, teardrop cells + fibrosis mean myelofibrosis, a hypercellular marrow suggests MDS or megaloblastic anemia',
      why: 'The defining feature is an empty marrow; any infiltrate, fibrosis or hypercellularity excludes the diagnosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 19-year-old has pancytopenia, reticulocytes 0.3%, and a bone-marrow biopsy showing markedly hypocellular marrow with fat replacement and no blasts or fibrosis. Most likely diagnosis?',
      options: [
        { id: 'a', text: 'Acute myeloid leukemia' },
        { id: 'b', text: 'Aplastic anemia' },
        { id: 'c', text: 'Primary myelofibrosis' },
        { id: 'd', text: 'Megaloblastic anemia' },
      ],
      answerId: 'b',
      explanation: 'Pancytopenia with a hypocellular, fatty marrow devoid of blasts or fibrosis and a low reticulocyte count is aplastic anemia — the marrow is empty, not infiltrated.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 20-year-old with severe aplastic anemia has an HLA-matched sibling. What is the preferred definitive treatment?',
      options: [
        { id: 'a', text: 'Allogeneic hematopoietic stem-cell transplant' },
        { id: 'b', text: 'Lifelong red-cell transfusion only' },
        { id: 'c', text: 'High-dose corticosteroids alone' },
        { id: 'd', text: 'Splenectomy' },
      ],
      answerId: 'a',
      explanation: 'In a young, fit patient with a matched sibling donor, allogeneic HSCT is potentially curative and preferred; immunosuppression (ATG + ciclosporin) is used when transplant is not feasible.',
      tests: 'treatment',
    },
  ],
};

export default hhlAplasticAnemia;
