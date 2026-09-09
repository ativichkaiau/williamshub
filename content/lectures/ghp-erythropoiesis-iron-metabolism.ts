import type { Lecture } from '../../lib/types';

export const ghpErythropoiesisIronMetabolism: Lecture = {
  id: 'ghp-erythropoiesis-iron-metabolism',
  title: 'Erythropoiesis, Erythropoietin & Iron',
  system: 'heme',
  source: 'Ch 32 — Red Blood Cells, Anemia & Polycythemia',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Haematology' },
    { kind: 'lecture', label: 'Ch 32 Red Cells & Anaemia' },
    { kind: 'mechanism', label: 'Hypoxia-driven EPO' },
    { kind: 'exam', label: 'Iron studies' },
  ],

  highYield: [
    '**The regulated variable is tissue oxygen delivery, not red cell count — and that single idea explains every secondary polycythaemia.** Anything reducing oxygen delivery (altitude, lung disease, cardiac shunt, heavy smoking) raises erythropoietin. The **peritubular interstitial cells of the kidney** make about **90%** of EPO, the liver the remainder, which is why anaemia is nearly universal in [[chronic-kidney-disease]].',
    '**The red cell is built for its job by discarding everything else.** No nucleus, no mitochondria, no ribosomes — so it cannot divide, cannot repair, and must generate ATP by **anaerobic glycolysis** alone. Its **biconcave** shape gives excess surface area for deformability and diffusion. Lifespan is about **120 days**, ending in splenic macrophage removal.',
    '**Maturation needs iron for haem, and B12/folate for DNA — failure of each gives a different cell size.** Deficient **iron** limits haemoglobin, so cells divide too many times and end up **microcytic and hypochromic**. Deficient **B12 or folate** blocks DNA synthesis while cytoplasm keeps maturing, giving large **megaloblastic** cells. Size is therefore a direct readout of which step failed — the logic behind [[hhl-anemia-classification]].',
    '**Iron studies are a four-number pattern, and the patterns are what get tested.** **Iron deficiency**: low ferritin, low serum iron, **high** transferrin/TIBC, low saturation. **Anaemia of chronic disease**: low-normal iron, **low** TIBC, **normal or high ferritin** — because hepcidin traps iron in macrophages and ferritin is an acute phase reactant. Ferritin alone therefore misleads during inflammation.',
    '**Hepcidin is the master switch and explains anaemia of chronic disease completely.** Made by the liver and raised by **inflammation (IL-6)**, hepcidin degrades **ferroportin**, the only iron export channel on enterocytes and macrophages. Iron is therefore locked inside cells: absorption falls and recycled iron cannot be released, so the marrow starves while total body iron is normal or high.',
    '**Absorption is tightly limited, which is why deficiency is usually about loss, not intake.** Only about **1–2 mg/day** is absorbed, in the **duodenum**, favoured by the **ferrous (Fe²⁺)** form and acid; most body iron is recycled from senescent red cells by macrophages. Since there is no regulated excretion route, iron balance is controlled at **absorption** — and in adults new deficiency means **blood loss** until proven otherwise.',
  ],

  mechanism: {
    title: 'Oxygen sensed, marrow instructed, iron supplied',
    steps: [
      { id: 's1', label: 'Tissue oxygen delivery falls (altitude, lung disease, anaemia)', emphasis: 'key' },
      { id: 's2', label: 'Renal peritubular cells stabilise HIF and release erythropoietin', emphasis: 'key' },
      { id: 's3', label: 'EPO drives proerythroblast proliferation and survival in marrow' },
      { id: 's4', label: 'Haemoglobin synthesis requires iron; DNA synthesis requires B12 and folate', emphasis: 'key' },
      { id: 's5', label: 'Nucleus and organelles extruded → reticulocyte released' },
      { id: 's6', label: 'After ~120 days splenic macrophages recycle the iron' },
    ],
  },

  examFindings: [
    { sign: 'Normocytic anaemia in advanced renal failure', mechanism: 'Loss of renal erythropoietin production', significance: 'key' },
    { sign: 'Microcytic hypochromic cells with low ferritin', mechanism: 'Iron-limited haemoglobin synthesis with extra divisions', significance: 'key' },
    { sign: 'Macrocytic cells with hypersegmented neutrophils', mechanism: 'Impaired DNA synthesis from B12 or folate deficiency', significance: 'key' },
    { sign: 'Secondary polycythaemia in chronic hypoxic lung disease', mechanism: 'Appropriate erythropoietin response to reduced oxygen delivery', significance: 'key' },
    { sign: 'Raised reticulocyte count after starting iron', mechanism: 'Marrow responding once the limiting substrate is supplied', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low ferritin, low iron, high TIBC', meaning: 'True iron deficiency' },
    { clue: 'Low iron, low TIBC, normal or raised ferritin', meaning: 'Anaemia of chronic disease — hepcidin-mediated iron sequestration' },
    { clue: 'Raised erythropoietin with polycythaemia', meaning: 'Secondary — an appropriate hypoxic or tumour-driven response' },
    { clue: 'Suppressed erythropoietin with polycythaemia', meaning: 'Primary marrow disease rather than a hypoxic drive' },
    { clue: 'Normal ferritin with low transferrin saturation during acute illness', meaning: 'Ferritin is an acute phase reactant and may mask deficiency' },
  ],

  treatment: [
    {
      logic: 'Find the source of loss before simply replacing iron',
      detail: 'Because there is **no regulated excretion** of iron, new deficiency in an adult means **blood loss** until proven otherwise. Replacing iron without identifying the source treats the number and misses the disease.',
    },
    {
      logic: 'Replace erythropoietin only when the deficiency is the cause',
      detail: 'In renal failure the missing signal is **EPO**, so replacement works — but only if **iron** is available for haemoglobin synthesis. Functional iron deficiency is the commonest reason EPO therapy fails, which is why iron status is checked alongside.',
    },
  ],

  mnemonics: [
    { hook: 'Iron small, B12 big', expansion: ['Iron limits haemoglobin → extra divisions → microcytic', 'B12/folate limit DNA → cytoplasm outgrows nucleus → macrocytic'] },
    { hook: 'Hepcidin hoards', expansion: ['Inflammation → IL-6 → hepcidin ↑', 'Ferroportin degraded', 'Iron trapped in macrophages and enterocytes'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting ferritin in an unwell patient',
      wrongInstinct: 'A normal ferritin excludes iron deficiency',
      rightAnswer: 'Ferritin is an acute phase reactant and can be normal or high despite deficiency',
      why: 'Transferrin saturation and TIBC are needed to see through the inflammation',
    },
    {
      questionCategory: 'What erythropoietin actually responds to',
      wrongInstinct: 'EPO is released in response to a low red cell count',
      rightAnswer: 'It responds to reduced tissue oxygen delivery, whatever the cause',
      why: 'It is why altitude, shunts and lung disease raise EPO with a normal starting haemoglobin',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with chronic inflammation has low serum iron, low TIBC and a raised ferritin. What is the mechanism?',
      options: [
        { id: 'a', text: 'True iron deficiency from occult blood loss' },
        { id: 'b', text: 'Hepcidin-mediated degradation of ferroportin trapping iron within macrophages' },
        { id: 'c', text: 'Failure of erythropoietin production' },
        { id: 'd', text: 'Impaired DNA synthesis in erythroid precursors' },
      ],
      answerId: 'b',
      explanation: 'IL-6 drives hepcidin, which degrades ferroportin — the only iron export channel. Iron is locked inside macrophages and enterocytes, so serum iron falls while stores (ferritin) are normal or raised. True deficiency would show a high TIBC and low ferritin.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Why does iron deficiency produce microcytic rather than macrocytic red cells?',
      options: [
        { id: 'a', text: 'Iron is required for DNA synthesis in precursors' },
        { id: 'b', text: 'Limited haemoglobin accumulation allows extra cell divisions before maturation' },
        { id: 'c', text: 'Iron deficiency shortens red cell lifespan' },
        { id: 'd', text: 'Erythropoietin levels fall' },
      ],
      answerId: 'b',
      explanation: 'Precursors divide until a threshold haemoglobin concentration is reached. When iron limits haemoglobin synthesis, more divisions occur before that threshold, producing smaller, paler cells. B12 and folate deficiency impair DNA synthesis instead, giving large cells.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient at high altitude develops polycythaemia with a raised erythropoietin. How is this best classified?',
      options: [
        { id: 'a', text: 'Primary polycythaemia from a marrow clone' },
        { id: 'b', text: 'Secondary polycythaemia — an appropriate response to reduced oxygen delivery' },
        { id: 'c', text: 'Relative polycythaemia from plasma volume loss' },
        { id: 'd', text: 'Anaemia of chronic disease' },
      ],
      answerId: 'b',
      explanation: 'The regulated variable is tissue oxygen delivery. Hypoxia stabilises HIF in renal peritubular cells, raising EPO appropriately. In primary polycythaemia the marrow is autonomous and EPO is suppressed.',
      tests: 'mechanism',
    },
  ],
};

export default ghpErythropoiesisIronMetabolism;
