import type { Lecture } from '../../lib/types';

export const placentaDevelopmentCirculation: Lecture = {
  id: 'placenta-development-circulation',
  title: 'Placental Development & Circulation',
  system: 'repro',
  source: 'L5 — Placenta & Extraembryonic Membranes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'HGD L5' },
    { kind: 'mechanism', label: 'Chorionic villi and exchange' },
    { kind: 'exam', label: 'Maternal vs fetal placenta' },
  ],
  highYield: [
    'The placenta exchanges gases, nutrients, electrolytes, antibodies, wastes, drugs, and metabolites; synthesizes glycogen; produces **hCG, progesterone, estriol, and hCS**; and helps maintain fetal-maternal immune tolerance.',
    'The **fetal component** is **chorion frondosum**; the **maternal component** is **decidua basalis**. Chorion laeve is the smooth nonvillous chorion.',
    'Chorionic villi mature sequentially: **primary = trophoblast core**, **secondary = extraembryonic mesoderm enters**, **tertiary = fetal capillaries develop**.',
    'Anchoring/stem villi attach through the cytotrophoblastic shell; floating/branching villi project into maternal blood in the intervillous space and provide exchange surface.',
    'Maternal blood enters the intervillous space from spiral arteries; fetal blood reaches villous capillaries through **two umbilical arteries** and returns oxygenated through **one umbilical vein**. The two circulations normally do not directly mix.',
  ],
  mechanism: {
    title: 'Build a vascular exchange tree',
    steps: [
      { id: 's1', label: 'Primary villus: cyto + syncytiotrophoblast' },
      { id: 's2', label: 'Secondary villus: mesodermal core' },
      { id: 's3', label: 'Tertiary villus: fetal capillaries', emphasis: 'key' },
      { id: 's4', label: 'Branching villi bathed in maternal intervillous blood' },
    ],
  },
  examFindings: [
    { sign: 'Cobblestone maternal surface divided into cotyledons', mechanism: 'Decidual septa partition the maternal placenta', significance: 'supportive' },
    { sign: 'Smooth shiny fetal surface with chorionic vessels and cord', mechanism: 'Amnion-covered chorionic plate', significance: 'key' },
    { sign: 'Villus with mesoderm and fetal capillaries', mechanism: 'Tertiary chorionic villus', significance: 'key' },
  ],
  investigations: [
    { clue: 'Placental ultrasound and Doppler', meaning: 'Assess site, structure, and uteroplacental/fetal flow' },
    { clue: 'Gross placental examination', meaning: 'Compare fetal surface, maternal cotyledons, and cord insertion' },
    { clue: 'Placental histology', meaning: 'Evaluate villous maturation and maternal-fetal exchange lesions' },
  ],
  treatment: [
    { logic: 'Separate maternal from fetal circulation in every flow question', detail: 'Spiral arteries feed the intervillous space; umbilical vessels remain fetal.' },
    { logic: 'Use villous composition to stage development', detail: 'Mesoderm appears before fetal capillaries.' },
  ],
  mnemonics: [
    { hook: 'Primary trophoblast, secondary stroma, tertiary tubes', expansion: ['Fetal capillaries make the villus tertiary'] },
    { hook: 'Two arteries away, one vein returns', expansion: ['Umbilical flow relative to fetal heart'] },
  ],
  traps: [
    {
      questionCategory: 'Maternal versus fetal placental component',
      wrongInstinct: 'Decidua basalis is the fetal side because it lies beneath the embryo',
      rightAnswer: 'Decidua basalis is maternal; chorion frondosum is fetal',
      why: 'Decidua is transformed endometrium, while chorion derives from the conceptus.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'What distinguishes a tertiary chorionic villus from a secondary villus?',
      options: [
        { id: 'a', text: 'Presence of fetal capillaries' },
        { id: 'b', text: 'Presence of syncytiotrophoblast' },
        { id: 'c', text: 'Absence of mesoderm' },
        { id: 'd', text: 'Direct mixing of maternal and fetal blood' },
      ],
      answerId: 'a',
      explanation: 'A secondary villus has a mesodermal core; fetal vessels developing in that core create a tertiary villus.',
      tests: 'mechanism',
    },
  ],
};

export default placentaDevelopmentCirculation;
