import type { Lecture } from '../../lib/types';

export const hhlHematinicsEsa: Lecture = {
  id: 'hhl-hematinics-esa',
  title: 'Hematinics & Erythropoiesis-Stimulating Agents',
  system: 'heme',
  source: 'L11 — Drugs for Anemia & Iron Chelation',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L11 Anemia & Iron' },
    { kind: 'disease', label: 'Iron / B12 / folate deficiency' },
    { kind: 'mechanism', label: 'Erythropoiesis substrates + EPO' },
    { kind: 'treatment', label: 'Iron · B12 · folate · ESA' },
  ],

  highYield: [
    '**Iron deficiency: oral ferrous sulfate first-line** — expect **reticulocytosis in ~1 week**, Hb rise ~2 g/dL over 3 weeks. Reserve **parenteral iron (iron sucrose, ferric carboxymaltose)** for intolerance, malabsorption, or CKD on an ESA.',
    '**Never give folate alone when B12 status is unknown** — it corrects the macrocytic anemia but lets **subacute combined degeneration** of the cord progress. Replace **B12 (hydroxocobalamin, IM for pernicious anemia)** first or together.',
    '**Folic acid** in pregnancy prevents neural tube defects; the high-dose **methotrexate rescue is folinic acid (leucovorin), NOT folic acid** — it bypasses the blocked dihydrofolate reductase.',
    '**ESAs (epoetin, darbepoetin)** treat anemia of **CKD/chemotherapy** by mimicking erythropoietin. Target **Hb ~10–11 g/dL, not normal** — overshooting raises **hypertension, thrombosis, stroke**. Ensure iron stores first; rare **pure red cell aplasia** from anti-EPO antibodies.',
  ],

  mechanism: {
    title: 'Substrate supply + EPO drive erythropoiesis',
    steps: [
      { id: 's1', label: 'Iron, B12, folate = substrates for Hb & DNA synthesis' },
      { id: 's2', label: 'Renal EPO stimulates erythroid progenitors', emphasis: 'key' },
      { id: 's3', label: 'ESAs mimic EPO → ↑ red-cell mass', detail: 'Epoetin (short-acting) and darbepoetin (long half-life) bind the EPO receptor.', emphasis: 'key' },
      { id: 's4', label: 'Over-correction (Hb >11–12) → hypertension, thrombosis, stroke', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Reticulocytosis 5–7 days after starting iron', mechanism: 'Marrow responds once the limiting substrate is restored; confirms absorption/adherence', significance: 'key' },
    { sign: 'Black stools, constipation, nausea on oral iron', mechanism: 'Unabsorbed iron irritates the GI mucosa', significance: 'supportive' },
    { sign: 'Rising Hb but worsening neuropathy on folate', mechanism: 'Folate corrects the anemia while untreated B12 deficiency keeps damaging the spinal cord', significance: 'key' },
    { sign: 'Rising blood pressure / Hb overshoot on an ESA', mechanism: 'Erythrocytosis plus endothelial effects raise thrombotic risk', significance: 'key' },
  ],

  investigations: [
    { clue: 'Microcytic anemia with low ferritin', meaning: 'Iron deficiency → oral iron first-line' },
    { clue: 'Macrocytic anemia + hypersegmented neutrophils', meaning: 'B12 and/or folate deficiency — measure both before replacing' },
    { clue: 'Normocytic anemia in CKD with low/inappropriate EPO', meaning: 'ESA candidate once iron-replete' },
    { clue: 'No reticulocyte response to oral iron', meaning: 'Non-adherence, malabsorption, or ongoing loss → consider IV iron' },
  ],

  treatment: [
    { logic: 'Oral iron first-line; IV iron only for intolerance, malabsorption, or CKD/ESA', detail: 'Iron sucrose and ferric carboxymaltose replenish stores rapidly but carry infusion-reaction risk.' },
    { logic: 'Replace B12 before or with folate', detail: 'Hydroxocobalamin IM for pernicious anemia (lifelong); folate alone masks B12 neuropathy.' },
    { logic: 'Dose ESA to a conservative Hb target (~10–11 g/dL)', detail: 'Ensure adequate iron stores; do not normalise Hb — overshoot raises cardiovascular and thrombotic events.' },
  ],

  mnemonics: [
    { hook: 'Never fold on B12', expansion: ['Folate alone corrects the macrocytic anemia', 'But subacute combined degeneration keeps progressing', 'Check and replace B12 first'] },
    { hook: 'ESA: aim low, not normal', expansion: ['Target Hb ~10–11 g/dL', 'Chasing a normal Hb → hypertension, thrombosis, stroke', 'Iron-replete first, or the ESA will not work'] },
  ],

  traps: [
    {
      questionCategory: 'Macrocytic anemia treatment',
      wrongInstinct: 'Give folic acid to fix the macrocytosis',
      rightAnswer: 'Establish and replace B12 first — folate alone lets neurological damage progress',
      why: 'Folate normalises the blood count but not the subacute combined degeneration of B12 deficiency.',
    },
    {
      questionCategory: 'ESA haemoglobin target',
      wrongInstinct: 'Titrate the ESA until haemoglobin is fully normal',
      rightAnswer: 'Target a sub-normal Hb (~10–11 g/dL)',
      why: 'Normalising Hb with ESAs increases thrombosis, stroke and mortality in CKD trials.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with megaloblastic anemia is given folic acid alone before B12 status is confirmed. What is the main danger?',
      options: [
        { id: 'a', text: 'Acute intravascular hemolysis' },
        { id: 'b', text: 'Progressive neurological damage despite improving blood counts' },
        { id: 'c', text: 'Iron overload' },
        { id: 'd', text: 'Hypertensive crisis' },
      ],
      answerId: 'b',
      explanation: 'Folate corrects the anemia but does not treat B12 deficiency; subacute combined degeneration of the cord continues to progress.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Aggressively normalising haemoglobin with an erythropoiesis-stimulating agent is avoided mainly because it increases the risk of what?',
      options: [
        { id: 'a', text: 'Bleeding from platelet dysfunction' },
        { id: 'b', text: 'Thrombosis, hypertension and stroke' },
        { id: 'c', text: 'Iron overload' },
        { id: 'd', text: 'Folate deficiency' },
      ],
      answerId: 'b',
      explanation: 'Erythrocytosis plus endothelial effects raise thrombotic and cardiovascular events, so ESAs are targeted to Hb ~10–11 g/dL rather than normal.',
      tests: 'mechanism',
    },
  ],
};

export default hhlHematinicsEsa;
