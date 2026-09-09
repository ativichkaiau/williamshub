import type { Lecture } from '../../lib/types';

export const ghpAnaemiaPolycythaemiaCirculation: Lecture = {
  id: 'ghp-anaemia-polycythaemia-circulation',
  title: 'Circulatory Effects of Anaemia & Polycythaemia',
  system: 'heme',
  source: 'Ch 32 — Red Blood Cells, Anemia & Polycythemia',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Haematology' },
    { kind: 'lecture', label: 'Ch 32 Red Cells & Anaemia' },
    { kind: 'mechanism', label: 'Viscosity vs oxygen carriage' },
    { kind: 'exam', label: 'High-output failure' },
  ],

  highYield: [
    '**Oxygen delivery is the product of cardiac output and oxygen content, so the circulation compensates for anaemia by raising output.** Reduced haemoglobin lowers content; tissue hypoxia then triggers **local vasodilation**, which lowers total peripheral resistance and **increases venous return**. Cardiac output rises — often two-fold or more — which is why chronic anaemia can present as **high-output cardiac failure**.',
    '**Anaemia lowers viscosity as well as content, and that amplifies the output rise.** Blood viscosity depends mainly on **haematocrit**. Halving the haematocrit roughly halves viscosity, so resistance falls and flow rises for the same driving pressure. The compensation is therefore partly active (vasodilation) and partly passive (thinner blood).',
    '**Symptoms appear at exertion first because the reserve, not the resting state, is what fails.** At rest a raised output can maintain delivery; on exercise the output reserve is already partly spent, so **dyspnoea and fatigue** appear. This is the same reserve logic that governs [[ghp-coronary-circulation-ischaemia]] — resting adequacy tells you little about capacity.',
    '**Polycythaemia is the mirror image and its danger is viscosity, not oxygen.** Haematocrit rising toward **60–70%** can raise viscosity **several-fold**, since the relationship is steeply non-linear. Flow slows, resistance rises, and the risks are **thrombosis** and impaired tissue perfusion — so oxygen delivery can paradoxically **fall** despite more carriage capacity.',
    '**Blood volume behaves differently in the two conditions, and that decides the pressure findings.** In polycythaemia the marrow expands **total blood volume**, yet arterial pressure is often near-normal because autoregulation constricts vessels. In anaemia volume is preserved but content is low. **Relative** polycythaemia is different again — a normal red cell mass with a contracted plasma volume, as in dehydration.',
    '**The optimum haematocrit is a trade-off, and around 40–45% is near the peak.** Oxygen delivery is content × flow: raising haematocrit raises content but lowers flow through viscosity. The product peaks near the normal value — which is exactly why transfusing to a supranormal haemoglobin does not improve delivery and increases thrombotic risk, a consideration in [[hhl-hemolytic-transfusion-reactions]].',
  ],

  mechanism: {
    title: 'Content down, flow up — until it cannot be',
    steps: [
      { id: 's1', label: 'Haemoglobin falls → arterial oxygen content falls', emphasis: 'key' },
      { id: 's2', label: 'Tissue hypoxia causes local vasodilation → peripheral resistance falls' },
      { id: 's3', label: 'Reduced haematocrit lowers viscosity, further reducing resistance', emphasis: 'key' },
      { id: 's4', label: 'Venous return and cardiac output rise, defending oxygen delivery' },
      { id: 's5', label: 'Exercise exhausts the remaining output reserve → dyspnoea', emphasis: 'key' },
      { id: 's6', label: 'Sustained high output can decompensate into high-output failure', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bounding pulse with a wide pulse pressure and flow murmur in chronic anaemia', mechanism: 'High cardiac output through a low-resistance circulation', significance: 'key' },
    { sign: 'Exertional dyspnoea with a normal resting examination', mechanism: 'Output reserve consumed at rest, exhausted on exercise', significance: 'key' },
    { sign: 'Plethora with thrombotic events in polycythaemia', mechanism: 'Steeply raised viscosity slowing flow', significance: 'key' },
    { sign: 'High-output cardiac failure in long-standing severe anaemia', mechanism: 'Sustained volume and output load on the ventricle', significance: 'key' },
    { sign: 'Raised haematocrit with a normal red cell mass', mechanism: 'Relative polycythaemia from plasma volume contraction', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Raised cardiac output with low systemic vascular resistance and anaemia', meaning: 'Compensatory hyperdynamic circulation' },
    { clue: 'Haematocrit above 60% with thrombotic complications', meaning: 'Viscosity-driven impairment of flow' },
    { clue: 'Raised haematocrit that normalises with rehydration', meaning: 'Relative rather than absolute polycythaemia' },
    { clue: 'No improvement in oxygen delivery after transfusion to a high haemoglobin', meaning: 'Viscosity gains offsetting content gains' },
    { clue: 'Reticulocytosis with anaemia', meaning: 'Marrow responding — consider haemolysis or blood loss rather than production failure' },
  ],

  treatment: [
    {
      logic: 'Transfuse toward function, not toward a normal number',
      detail: 'Because delivery is **content × flow**, pushing haemoglobin above normal adds viscosity without adding delivery. Targeting a moderate value preserves the trade-off and avoids thrombotic risk.',
    },
    {
      logic: 'In polycythaemia, reduce viscosity as the primary goal',
      detail: 'The threat is **flow**, not oxygen. Venesection lowers haematocrit and restores perfusion; treating it as an oxygen problem misreads the physiology entirely.',
    },
  ],

  mnemonics: [
    { hook: 'Delivery = content × flow', expansion: ['Anaemia: content ↓, flow ↑', 'Polycythaemia: content ↑, flow ↓', 'Product peaks near a normal haematocrit'] },
    { hook: 'Anaemia thins, polycythaemia thickens', expansion: ['Low Hct → low viscosity → high output', 'High Hct → high viscosity → thrombosis'] },
  ],

  traps: [
    {
      questionCategory: 'Why more red cells is not always better',
      wrongInstinct: 'Raising haematocrit always improves tissue oxygen delivery',
      rightAnswer: 'Viscosity rises steeply, so flow falls and delivery can decrease',
      why: 'Delivery is the product of content and flow, and it peaks near normal haematocrit',
    },
    {
      questionCategory: 'Cardiac failure in anaemia',
      wrongInstinct: 'Anaemia causes failure by reducing cardiac output',
      rightAnswer: 'It causes a high-output state that can decompensate',
      why: 'The output is raised, not lowered — the ventricle fails under a sustained volume load',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why does chronic severe anaemia raise cardiac output?',
      options: [
        { id: 'a', text: 'Increased blood viscosity raises venous return' },
        { id: 'b', text: 'Tissue hypoxia causes vasodilation and reduced viscosity lowers resistance' },
        { id: 'c', text: 'Erythropoietin acts directly on the myocardium' },
        { id: 'd', text: 'Plasma volume falls, concentrating catecholamines' },
      ],
      answerId: 'b',
      explanation: 'Local hypoxic vasodilation plus the fall in viscosity from a low haematocrit both reduce peripheral resistance. Venous return and therefore cardiac output rise, defending oxygen delivery despite reduced content.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with polycythaemia has a haematocrit of 68% and presents with thrombosis. What is the dominant mechanism?',
      options: [
        { id: 'a', text: 'Excessive oxygen delivery damaging the endothelium' },
        { id: 'b', text: 'Steeply increased blood viscosity slowing flow' },
        { id: 'c', text: 'Reduced plasma clotting factor concentration' },
        { id: 'd', text: 'Erythropoietin-induced platelet activation' },
      ],
      answerId: 'b',
      explanation: 'Viscosity rises non-linearly with haematocrit, so a value near 70% can raise it several-fold. Flow slows and stasis promotes thrombosis, which is why venesection to lower haematocrit is the primary intervention.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why does transfusing a patient to a supranormal haemoglobin fail to improve tissue oxygen delivery?',
      options: [
        { id: 'a', text: 'Transfused cells cannot bind oxygen' },
        { id: 'b', text: 'Rising viscosity reduces flow, offsetting the gain in oxygen content' },
        { id: 'c', text: 'Erythropoietin is suppressed' },
        { id: 'd', text: 'The oxyhaemoglobin curve shifts leftward' },
      ],
      answerId: 'b',
      explanation: 'Delivery is content multiplied by flow. Above the normal haematocrit the viscosity penalty to flow outweighs the gain in content, so the product plateaus or falls while thrombotic risk rises.',
      tests: 'treatment',
    },
  ],
};

export default ghpAnaemiaPolycythaemiaCirculation;
