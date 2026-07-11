import type { Lecture } from '../../lib/types';

export const hrp2JaundiceManagement: Lecture = {
  id: 'hrp2-jaundice-management',
  title: 'Neonatal Jaundice: Management',
  system: 'repro',
  source: 'L14 — Perinatal Jaundice',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L14 Perinatal Jaundice' },
    { kind: 'disease', label: 'Hyperbilirubinaemia' },
    { kind: 'mechanism', label: 'Phototherapy isomerisation' },
    { kind: 'treatment', label: 'Phototherapy · exchange' },
  ],

  highYield: [
    '**Plot the bilirubin against age-specific thresholds** (nomograms) — the decision to treat depends on **level, postnatal age, gestation and risk factors**, not the level alone.',
    '**Phototherapy** (blue light ~460 nm) converts **unconjugated** bilirubin in the skin into **water-soluble isomers (lugmirubin/photoisomers)** excreted without conjugation — first-line for most.',
    '**Exchange transfusion** is used for **very high or rapidly rising** levels (or signs of **acute bilirubin encephalopathy**) to physically remove bilirubin and antibody-coated cells and prevent **kernicterus**.',
    '**Breast-feeding jaundice** (early, first week) is due to **inadequate intake/dehydration** → support feeding; **breast-milk jaundice** (peaks ~week 2, benign, prolonged unconjugated) needs reassurance once pathology is excluded. Always investigate **conjugated** hyperbilirubinaemia or jaundice **<24 h** urgently.',
  ],

  mechanism: {
    title: 'Level + age → phototherapy → exchange if severe',
    steps: [
      { id: 's1', label: 'Assess bilirubin against age/gestation thresholds', emphasis: 'key' },
      { id: 's2', label: 'Phototherapy converts unconjugated bilirubin to excretable isomers', emphasis: 'key' },
      { id: 's3', label: 'Exchange transfusion for very high/rising levels', emphasis: 'danger' },
      { id: 's4', label: 'Support feeding; investigate red flags (<24 h, conjugated)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Treatment guided by nomogram (level + age)', mechanism: 'Risk-stratified thresholds', significance: 'key' },
    { sign: 'Phototherapy first-line for unconjugated jaundice', mechanism: 'Photoisomerisation', significance: 'key' },
    { sign: 'Exchange transfusion for impending kernicterus', mechanism: 'Rapid bilirubin removal', significance: 'key' },
    { sign: 'Breast-milk jaundice is benign and prolonged', mechanism: 'Unconjugated, well baby', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Bilirubin above the phototherapy line for age', meaning: 'Start phototherapy' },
    { clue: 'Very high or rapidly rising bilirubin with neurological signs', meaning: 'Exchange transfusion' },
    { clue: 'Poorly feeding, dehydrated baby jaundiced on day 3', meaning: 'Breast-feeding (suboptimal intake) jaundice — support feeding' },
    { clue: 'Well breastfed baby, mild jaundice persisting into week 2', meaning: 'Breast-milk jaundice (exclude conjugated causes)' },
  ],

  treatment: [
    { logic: 'Phototherapy then exchange', detail: 'Phototherapy per age-specific thresholds; escalate to exchange transfusion for dangerous levels or encephalopathy; treat the underlying cause (e.g. haemolysis).' },
  ],

  mnemonics: [
    { hook: 'Light for high (phototherapy); Exchange for extreme', expansion: ['Plot on the nomogram — level + age matter'] },
  ],

  traps: [
    {
      questionCategory: 'How phototherapy works',
      wrongInstinct: 'Phototherapy works by conjugating bilirubin in the liver',
      rightAnswer: 'Phototherapy converts unconjugated bilirubin in the skin into water-soluble isomers excreted WITHOUT hepatic conjugation',
      why: 'The photochemical reaction bypasses the immature conjugating enzyme, allowing excretion of the modified bilirubin.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Phototherapy lowers neonatal bilirubin primarily by:',
      options: [
        { id: 'a', text: 'Increasing hepatic conjugation' },
        { id: 'b', text: 'Converting unconjugated bilirubin into water-soluble photoisomers' },
        { id: 'c', text: 'Binding bilirubin to albumin' },
        { id: 'd', text: 'Stimulating bile flow' },
      ],
      answerId: 'b',
      explanation: 'Blue light converts unconjugated bilirubin in the skin into water-soluble isomers that can be excreted without hepatic conjugation.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The main indication for exchange transfusion in neonatal jaundice is:',
      options: [
        { id: 'a', text: 'Mild jaundice on day 3' },
        { id: 'b', text: 'Very high or rapidly rising bilirubin / signs of encephalopathy' },
        { id: 'c', text: 'Breast-milk jaundice' },
        { id: 'd', text: 'Physiological jaundice' },
      ],
      answerId: 'b',
      explanation: 'Exchange transfusion is reserved for dangerously high or rapidly rising bilirubin (or acute bilirubin encephalopathy) to prevent kernicterus.',
      tests: 'treatment',
    },
  ],
};

export default hrp2JaundiceManagement;
