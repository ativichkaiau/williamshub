import type { Lecture } from '../../lib/types';

export const cellularAgingTheories: Lecture = {
  id: 'cellular-aging-theories',
  title: 'Mechanisms of Cellular Aging & Senescence',
  system: 'physiology',
  source: 'L11 — Cellular Aging & Cell Death',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'L11 Aging & Cell Death' },
    { kind: 'mechanism', label: 'Why cells age' },
    { kind: 'exam', label: 'Telomeres · ROS · senescence' },
  ],

  highYield: [
    '**Aging = a progressive, multifactorial decline in cellular and organ function** over time, increasing vulnerability to disease and death. No single cause explains it — several complementary theories operate together.',
    '**The free-radical (oxidative stress) theory:** **reactive oxygen species (ROS)** — byproducts of metabolism — accumulate and damage **DNA, proteins, and lipids** over a lifetime, outpacing antioxidant defences. Closely tied to the **mitochondrial theory** (mitochondria produce most ROS and accumulate mtDNA damage → declining energy output).',
    '**The genetic / telomere theory:** **telomeres** (chromosome-end caps) **shorten with each cell division** (the "replicative clock"); when critically short, the cell can no longer divide. **Telomerase** (which extends telomeres) is low in most somatic cells — its re-activation is a hallmark of cancer.',
    '**Cellular senescence:** damaged/aged cells enter an **irreversible growth arrest** but remain metabolically active, secreting inflammatory factors (the **SASP**) that harm neighbouring tissue — contributing to age-related inflammation ("inflammaging"). Senescence is protective against cancer but detrimental in excess.',
    '**Modifiers of aging:** **caloric restriction** extends lifespan in many organisms (reducing metabolic rate/ROS and shifting nutrient-sensing pathways); accumulated damage and senescence together drive **aging effects across organ systems**. Aging and cell death ([[apoptosis-necrosis]]) are the two faces of cellular decline.',
  ],

  mechanism: {
    title: 'Damage accumulates → division limit → senescence',
    steps: [
      { id: 's1', label: 'ROS/oxidative stress damages DNA, protein, lipid', emphasis: 'key' },
      { id: 's2', label: 'Mitochondrial damage → less energy, more ROS' },
      { id: 's3', label: 'Telomeres shorten each division → replicative limit', emphasis: 'key' },
      { id: 's4', label: 'Cellular senescence: irreversible arrest + SASP (inflammaging)', emphasis: 'key' },
      { id: 's5', label: 'Caloric restriction slows aging in models' },
    ],
  },

  examFindings: [
    { sign: 'Telomere shortening with each division', mechanism: 'Replicative "clock" limiting cell divisions', significance: 'key' },
    { sign: 'ROS-induced damage to DNA/proteins/lipids', mechanism: 'Free-radical (oxidative) theory of aging', significance: 'key' },
    { sign: 'Irreversibly arrested but active cells secreting inflammatory factors', mechanism: 'Cellular senescence (SASP → inflammaging)', significance: 'key' },
    { sign: 'Telomerase re-activation in a tumour', mechanism: 'Bypasses the replicative limit (immortalisation)', significance: 'supportive' },
    { sign: 'Lifespan extension with caloric restriction', mechanism: 'Reduced metabolic rate/ROS, altered nutrient sensing', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Chromosome-end structure that shortens with division', meaning: 'Telomere' },
    { clue: 'Enzyme that extends telomeres (high in cancer)', meaning: 'Telomerase' },
    { clue: 'Reactive byproducts of metabolism that damage the cell', meaning: 'Reactive oxygen species (free radicals)' },
    { clue: 'Irreversible growth arrest of a still-active aged cell', meaning: 'Cellular senescence' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Aging biology underlies age-related disease, cancer (telomerase/senescence), and emerging "senolytic" therapies. Oxidative stress and mitochondrial decline link to neurodegeneration; senescence balances cancer protection vs tissue harm. Its counterpart, cell death: [[apoptosis-necrosis]].' },
  ],

  mnemonics: [
    { hook: 'Aging theories: "Rusty Mitochondria, Short Telomeres, Senescent cells" (ROS, telomere, senescence)', expansion: ['Caloric restriction slows it'] },
    { hook: 'Telomeres shorten each division; telomerase (cancer) resets them', expansion: ['Replicative clock'] },
  ],

  traps: [
    {
      questionCategory: 'Senescence vs apoptosis',
      wrongInstinct: 'A senescent cell is a dead cell',
      rightAnswer: 'A senescent cell is ALIVE but permanently unable to divide (irreversible arrest) and metabolically active — secreting inflammatory SASP factors; it is not the same as apoptotic death',
      why: 'Senescence = growth arrest (a living, non-dividing state); apoptosis = programmed death. Both limit damaged cells but differ fundamentally.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Progressive shortening of telomeres with each cell division contributes to aging by:',
      options: [
        { id: 'a', text: 'Increasing telomerase activity' },
        { id: 'b', text: 'Limiting the number of times a cell can divide (replicative senescence)' },
        { id: 'c', text: 'Directly causing apoptosis of all cells immediately' },
        { id: 'd', text: 'Producing reactive oxygen species' },
      ],
      answerId: 'b',
      explanation: 'Telomeres cap chromosome ends and shorten with each division; once critically short, the cell can no longer divide (replicative senescence). Telomerase, which extends them, is largely absent in somatic cells but reactivated in cancer.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A hallmark of cellular senescence is that the cell:',
      options: [
        { id: 'a', text: 'Continues dividing indefinitely' },
        { id: 'b', text: 'Undergoes immediate apoptosis' },
        { id: 'c', text: 'Is irreversibly arrested yet metabolically active, secreting inflammatory factors (SASP)' },
        { id: 'd', text: 'Ruptures and causes necrosis' },
      ],
      answerId: 'c',
      explanation: 'Senescent cells are permanently withdrawn from the cell cycle but remain alive and active, secreting the senescence-associated secretory phenotype (SASP) that promotes tissue inflammation ("inflammaging").',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cellularAgingTheories;
