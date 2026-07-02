import type { Lecture } from '../../lib/types';

export const obesityPharmacotherapy: Lecture = {
  id: 'obesity-pharmacotherapy',
  title: 'Drugs for Obesity',
  system: 'gi',
  source: 'L9 — Drugs in Obesity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L9 Obesity Drugs' },
    { kind: 'treatment', label: 'GLP-1 agonists' },
    { kind: 'mechanism', label: 'Appetite / absorption' },
  ],

  highYield: [
    '**Anti-obesity drugs are ADJUNCTS to lifestyle change, generally reserved for BMI ≥30 (or ≥27 with weight-related comorbidity).** They work by two broad mechanisms: **reducing appetite (central/gut–brain) or reducing nutrient absorption.** They do not replace diet and exercise but augment a sustained energy deficit.',
    '**GLP-1 receptor agonists (liraglutide, semaglutide — "-glutides") are the most effective modern agents.** As incretin mimetics they **enhance satiety (act on hypothalamic appetite centres), slow gastric emptying, and improve glycaemic control** — producing substantial weight loss. Side effects: nausea/GI upset; caution with pancreatitis and a boxed warning for medullary thyroid carcinoma/MEN2.',
    '**Orlistat inhibits pancreatic and gastric LIPASE, blocking absorption of ~30% of dietary fat** — a peripheral, gut-acting drug. Its side effects follow directly from unabsorbed fat: **steatorrhoea, oily stools, flatulence, and malabsorption of fat-soluble vitamins (A, D, E, K)** — so supplement these vitamins.',
    '**Centrally acting appetite suppressants include phentermine (sympathomimetic — raises noradrenaline; avoid in cardiovascular disease), phentermine/topiramate, and naltrexone/bupropion** (act on reward/appetite pathways). Older agents (fenfluramine, sibutramine, rimonabant) were withdrawn for cardiovascular/psychiatric harm — a lesson in obesity-drug safety.',
    '**Match the mechanism: appetite (GLP-1 agonists, phentermine-based) vs absorption (orlistat).** Drugs are used when lifestyle alone fails and BMI thresholds are met; bariatric surgery is reserved for severe/refractory obesity. The physiology (satiety hormones, energy balance) is grounded in [[obesity-pathophysiology]].',
  ],

  mechanism: {
    title: 'Reduce appetite (GLP-1, sympathomimetic) or absorption (orlistat/lipase)',
    steps: [
      { id: 's1', label: 'Adjunct to lifestyle; BMI ≥30 (or ≥27 + comorbidity)', emphasis: 'key' },
      { id: 's2', label: 'GLP-1 agonists (semaglutide/liraglutide): satiety + slow emptying, most effective', emphasis: 'key' },
      { id: 's3', label: 'Orlistat: lipase inhibitor → blocks fat absorption (steatorrhoea, ADEK loss)', emphasis: 'key' },
      { id: 's4', label: 'Central: phentermine (sympathomimetic), phentermine/topiramate, naltrexone/bupropion' },
      { id: 's5', label: 'Match mechanism; surgery for severe/refractory obesity', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Substantial weight loss + improved glycaemia + nausea', mechanism: 'GLP-1 receptor agonist (semaglutide/liraglutide)', significance: 'key' },
    { sign: 'Oily stools, flatulence and fat-soluble vitamin deficiency', mechanism: 'Orlistat (lipase inhibition blocks fat absorption)', significance: 'key' },
    { sign: 'Increased heart rate/blood pressure on an appetite suppressant', mechanism: 'Phentermine (sympathomimetic) — avoid in CVD', significance: 'supportive' },
    { sign: 'GLP-1 agonist avoided with a family history of medullary thyroid cancer', mechanism: 'Boxed warning (MTC/MEN2)', significance: 'supportive' },
    { sign: 'Drug used only alongside diet and exercise', mechanism: 'Anti-obesity drugs are adjuncts, not replacements', significance: 'key' },
  ],

  investigations: [
    { clue: 'The most effective modern class of anti-obesity drugs', meaning: 'GLP-1 receptor agonists (e.g. semaglutide)' },
    { clue: 'The lipase inhibitor causing steatorrhoea', meaning: 'Orlistat' },
    { clue: 'The vitamins to supplement with orlistat', meaning: 'Fat-soluble vitamins A, D, E, K' },
    { clue: 'The sympathomimetic appetite suppressant to avoid in heart disease', meaning: 'Phentermine' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Drugs augment lifestyle for eligible patients; GLP-1 agonists exploit the satiety hormones of [[obesity-pathophysiology]] and also treat diabetes, while orlistat\'s fat-blocking causes fat-soluble vitamin loss ([[fat-soluble-vitamins]]). Knowing mechanism predicts side effects and contraindications. Severe obesity may need bariatric surgery; contrast the undernutrition of [[nutrition-energy-protein-malnutrition]].' },
  ],

  mnemonics: [
    { hook: 'Two targets: "Appetite (GLP-1, phentermine) vs Absorption (orlistat)"', expansion: ['GLP-1 = satiety + slow emptying', 'Orlistat = lipase → fat malabsorption'] },
    { hook: 'Orlistat side effects "follow the fat": steatorrhoea + ADEK deficiency', expansion: ['Supplement fat-soluble vitamins', 'Peripheral, gut-acting'] },
  ],

  traps: [
    {
      questionCategory: 'Role of anti-obesity drugs',
      wrongInstinct: 'Anti-obesity medications replace the need for diet and exercise',
      rightAnswer: 'Anti-obesity drugs are ADJUNCTS to lifestyle modification (diet + activity), used when lifestyle alone is insufficient and BMI thresholds are met — they augment, not replace, a sustained energy deficit',
      why: 'Framing drugs as a substitute for lifestyle change ignores that they work best (and are indicated) alongside diet and exercise; stopping them without lifestyle change leads to weight regain.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Orlistat promotes weight loss by:',
      options: [
        { id: 'a', text: 'Suppressing appetite centrally' },
        { id: 'b', text: 'Inhibiting pancreatic and gastric lipase to block dietary fat absorption' },
        { id: 'c', text: 'Mimicking GLP-1' },
        { id: 'd', text: 'Increasing metabolic rate' },
      ],
      answerId: 'b',
      explanation: 'Orlistat inhibits lipases, preventing absorption of about a third of dietary fat; the unabsorbed fat causes steatorrhoea and can lead to deficiency of fat-soluble vitamins (A, D, E, K), which should be supplemented.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'GLP-1 receptor agonists such as semaglutide produce weight loss mainly by:',
      options: [
        { id: 'a', text: 'Blocking fat absorption in the gut' },
        { id: 'b', text: 'Enhancing satiety and slowing gastric emptying (with improved glycaemic control)' },
        { id: 'c', text: 'Inhibiting lipase' },
        { id: 'd', text: 'Directly increasing thyroid hormone' },
      ],
      answerId: 'b',
      explanation: 'GLP-1 receptor agonists are incretin mimetics that increase satiety via central appetite centres, slow gastric emptying and improve glycaemic control, producing substantial weight loss; nausea is the common side effect.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default obesityPharmacotherapy;
