import type { Lecture } from '../../lib/types';
import { GUT_HORMONES } from '../../lib/figures';

export const gutHormonesAppetiteRegulation: Lecture = {
  id: 'gut-hormones-appetite-regulation',
  title: 'Gut Hormones & Appetite Regulation',
  system: 'gi',
  source: 'L8 — Obesity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L8 Obesity' },
    { kind: 'mechanism', label: 'Enteroendocrine hormones' },
    { kind: 'exam', label: 'Ghrelin vs satiety' },
  ],

  highYield: [
    '**The gut is the body\'s largest endocrine organ: enteroendocrine cells release hormones that coordinate DIGESTION and signal APPETITE to the hypothalamus.** These hormones both regulate secretion/motility locally and form the gut–brain axis that controls hunger and satiety — the physiology behind obesity and its treatments.',
    '**Digestive hormones: GASTRIN (G cells, antrum) stimulates gastric acid; SECRETIN (S cells, duodenum) stimulates pancreatic bicarbonate and inhibits acid; CHOLECYSTOKININ/CCK (I cells, duodenum) triggers gallbladder contraction and pancreatic enzyme release (and signals satiety) — released in response to fat/protein.** These orchestrate the response to a meal.',
    '**The INCRETINS — GLP-1 (L cells, ileum) and GIP (K cells) — are released after eating and augment insulin secretion (the "incretin effect", why oral glucose releases more insulin than IV).** GLP-1 also slows gastric emptying and promotes satiety, which is why GLP-1 analogues treat both diabetes and obesity ([[obesity-pharmacotherapy]]).',
    '**Appetite is a balance of OREXIGENIC (hunger) versus ANOREXIGENIC (satiety) signals. GHRELIN (from the stomach, rising before meals) is the main hunger ("go") hormone — essentially the only orexigenic gut hormone; satiety signals include GLP-1, PYY, CCK (from the gut) and leptin/insulin (from fat/pancreas).** The hypothalamus (arcuate nucleus) integrates them.',
    'This gut–brain physiology explains obesity treatments and bariatric surgery: surgery raises satiety hormones (GLP-1/PYY) and lowers ghrelin, and GLP-1 analogues mimic satiety — the mechanistic link to [[obesity-pathophysiology]], [[obesity-management-bariatric-surgery]] and the incretin-based diabetes drugs. Remember: ghrelin = hunger; almost everything else signals fullness.',
  ],

  mechanism: {
    title: 'Enteroendocrine hormones run digestion + gut–brain appetite (ghrelin hunger vs satiety signals)',
    steps: [
      { id: 's1', label: 'Gut is the largest endocrine organ (digestion + appetite signalling)', emphasis: 'key' },
      { id: 's2', label: 'Gastrin (acid), secretin (HCO₃⁻), CCK (bile/enzymes + satiety)', emphasis: 'key' },
      { id: 's3', label: 'Incretins GLP-1 + GIP → ↑insulin (incretin effect); GLP-1 slows emptying', emphasis: 'key' },
      { id: 's4', label: 'Ghrelin = hunger (orexigenic); GLP-1/PYY/CCK/leptin = satiety', emphasis: 'key' },
      { id: 's5', label: 'Hypothalamus integrates; basis of GLP-1 drugs + bariatric effect' },
    ],
  },

  examFindings: [
    { sign: 'Rising hunger signal before meals', mechanism: 'Ghrelin (the main orexigenic gut hormone)', significance: 'key' },
    { sign: 'Greater insulin release from oral than IV glucose', mechanism: 'The incretin effect (GLP-1, GIP)', significance: 'key' },
    { sign: 'Gallbladder contraction + pancreatic enzymes after a fatty meal', mechanism: 'Cholecystokinin (CCK)', significance: 'key' },
    { sign: 'Satiety and slowed gastric emptying from a GLP-1 analogue', mechanism: 'GLP-1 receptor agonism', significance: 'supportive' },
    { sign: 'Increased acid secretion', mechanism: 'Gastrin (G cells) on parietal cells', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The main hunger-promoting gut hormone', meaning: 'Ghrelin (orexigenic)' },
    { clue: 'The incretin hormones augmenting insulin after eating', meaning: 'GLP-1 and GIP' },
    { clue: 'The hormone triggering gallbladder contraction and satiety', meaning: 'Cholecystokinin (CCK)' },
    { clue: 'The hormone stimulating gastric acid secretion', meaning: 'Gastrin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Gut hormones are the physiology behind appetite and its disorders — ghrelin (hunger) vs GLP-1/PYY/CCK (satiety) — and are the mechanism of the obesity/diabetes drugs ([[obesity-pharmacotherapy]]) and of bariatric surgery\'s metabolic effect ([[obesity-management-bariatric-surgery]]). They tie to leptin and central appetite control in [[obesity-pathophysiology]]; CCK/secretin/gastrin also coordinate digestion (relevant to [[acute-chronic-pancreatitis]] and acid secretion).' },
  ],

  mnemonics: [
    { hook: '"Ghrelin GROWLS (hunger)"; almost everything else (GLP-1, PYY, CCK, leptin) = satiety', expansion: ['Ghrelin from stomach, rises pre-meal', 'Hypothalamic arcuate nucleus integrates'] },
    { hook: 'Digestion: "Gastrin acid, Secretin bicarbonate, CCK bile+enzymes"', expansion: ['Incretins (GLP-1/GIP) → insulin', 'GLP-1 also satiety + slows emptying'] },
  ],

  traps: [
    {
      questionCategory: 'Which gut hormone drives hunger',
      wrongInstinct: 'The gut hormones released after eating (GLP-1, PYY) increase appetite',
      rightAnswer: 'Post-meal gut hormones (GLP-1, PYY, CCK) signal SATIETY (reduce appetite); GHRELIN — released from the stomach when empty, before meals — is the main hormone that drives HUNGER (essentially the only orexigenic gut hormone)',
      why: 'Reversing the direction of these signals misunderstands appetite control; the meal-associated hormones suppress hunger (and are exploited by GLP-1 drugs), whereas fasting ghrelin promotes it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which gut hormone is the principal driver of hunger (orexigenic), rising before meals?',
      options: [
        { id: 'a', text: 'GLP-1' },
        { id: 'b', text: 'Ghrelin' },
        { id: 'c', text: 'Peptide YY (PYY)' },
        { id: 'd', text: 'Cholecystokinin (CCK)' },
      ],
      answerId: 'b',
      explanation: 'Ghrelin, secreted by the stomach when empty and rising before meals, is the main orexigenic (hunger) hormone; GLP-1, PYY and CCK are released after eating and signal satiety.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The greater insulin release seen after oral glucose compared with the same amount given intravenously is explained by:',
      options: [
        { id: 'a', text: 'The incretin effect (GLP-1 and GIP)' },
        { id: 'b', text: 'Ghrelin secretion' },
        { id: 'c', text: 'Gastrin secretion' },
        { id: 'd', text: 'Reduced gastric acid' },
      ],
      answerId: 'a',
      explanation: 'Oral glucose stimulates intestinal L and K cells to release the incretins GLP-1 and GIP, which augment glucose-dependent insulin secretion — the incretin effect. GLP-1 also promotes satiety and slows gastric emptying, exploited by GLP-1 analogues.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Gut hormones & appetite', svg: GUT_HORMONES, caption: 'Digestive and incretin hormones plus the orexigenic (ghrelin) vs anorexigenic (GLP-1/PYY/CCK) appetite signals.' },
  ],
};

export default gutHormonesAppetiteRegulation;
