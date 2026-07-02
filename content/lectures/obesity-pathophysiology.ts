import type { Lecture } from '../../lib/types';

export const obesityPathophysiology: Lecture = {
  id: 'obesity-pathophysiology',
  title: 'Obesity & Metabolic Syndrome',
  system: 'gi',
  source: 'L8 — Obesity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L8 Obesity' },
    { kind: 'mechanism', label: 'Energy balance' },
    { kind: 'exam', label: 'Metabolic syndrome' },
  ],

  highYield: [
    '**Obesity is excess body fat resulting from chronic positive energy balance (intake > expenditure), classified by BMI (≥30 kg/m²; overweight 25–29.9), with WAIST circumference/central adiposity a better marker of metabolic risk.** Asian populations have higher risk at lower BMI thresholds (relevant here).',
    '**Adipose tissue is an active ENDOCRINE organ, not just storage. It secretes LEPTIN (signals satiety/energy stores to the hypothalamus — obese people are typically leptin-RESISTANT), adiponectin (insulin-sensitising, low in obesity), and inflammatory cytokines.** Appetite is regulated by the hypothalamus balancing orexigenic (ghrelin, NPY) and anorexigenic (leptin, PYY, GLP-1) signals.',
    '**Central (visceral) fat drives INSULIN RESISTANCE via free fatty acids and adipokines, linking obesity to type 2 diabetes.** The **metabolic syndrome** clusters central obesity + insulin resistance/hyperglycaemia + dyslipidaemia (high triglycerides, low HDL) + hypertension — a state of high cardiovascular risk.',
    '**Obesity causes wide-ranging complications: type 2 diabetes, cardiovascular disease, NAFLD/NASH (and cirrhosis), obstructive sleep apnoea, osteoarthritis, gallstones, and several cancers.** It is a major driver of the non-alcoholic fatty liver disease covered in [[cirrhosis-fatty-liver-portal-hypertension]] — the hepatic face of metabolic syndrome.',
    '**Management is a stepped approach: lifestyle (diet + physical activity) first, then pharmacotherapy, then bariatric surgery for severe/refractory obesity.** The energy-balance principle underlies all of it — creating a sustained energy deficit — while newer drugs exploit the gut–brain satiety hormones ([[obesity-pharmacotherapy]]).',
  ],

  mechanism: {
    title: 'Positive energy balance; adipose endocrine dysfunction → insulin resistance',
    steps: [
      { id: 's1', label: 'Obesity = chronic energy intake > expenditure; BMI ≥30, central fat = risk', emphasis: 'key' },
      { id: 's2', label: 'Adipose = endocrine organ: leptin (satiety; resistance in obesity), adiponectin', emphasis: 'key' },
      { id: 's3', label: 'Hypothalamus balances orexigenic (ghrelin/NPY) vs anorexigenic (leptin/GLP-1)' },
      { id: 's4', label: 'Visceral fat → insulin resistance → metabolic syndrome', emphasis: 'key' },
      { id: 's5', label: 'Complications: T2DM, CVD, NAFLD, OSA, OA, gallstones, cancers', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Central obesity + hyperglycaemia + high TG/low HDL + hypertension', mechanism: 'Metabolic syndrome', significance: 'key' },
    { sign: 'High leptin but persistent obesity', mechanism: 'Leptin resistance', significance: 'key' },
    { sign: 'Fatty liver on ultrasound in an obese patient', mechanism: 'NAFLD (hepatic metabolic syndrome)', significance: 'key' },
    { sign: 'Daytime somnolence + snoring in obesity', mechanism: 'Obstructive sleep apnoea', significance: 'supportive' },
    { sign: 'Type 2 diabetes with central adiposity', mechanism: 'Visceral-fat-driven insulin resistance', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The satiety hormone from adipose tissue (resistance in obesity)', meaning: 'Leptin' },
    { clue: 'The best clinical marker of metabolic (visceral fat) risk', meaning: 'Waist circumference (central adiposity)' },
    { clue: 'The cluster defining metabolic syndrome', meaning: 'Central obesity + insulin resistance + dyslipidaemia + hypertension' },
    { clue: 'The hepatic complication of obesity/metabolic syndrome', meaning: 'Non-alcoholic fatty liver disease (NAFLD/NASH)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Obesity is the driver of type 2 diabetes, NAFLD ([[cirrhosis-fatty-liver-portal-hypertension]]) and cardiovascular disease; management is stepped (lifestyle → drugs → surgery). Energy balance links back to [[nutrition-energy-protein-malnutrition]] (the other end of the spectrum), and the gut–brain satiety hormones underpin the pharmacotherapy in [[obesity-pharmacotherapy]].' },
  ],

  mnemonics: [
    { hook: 'Metabolic syndrome = "central obesity + insulin resistance + dyslipidaemia + hypertension"', expansion: ['High TG, low HDL', 'High CV risk'] },
    { hook: 'Adipose is an "endocrine organ": Leptin (satiety, resistant), Adiponectin (insulin-sensitising, low)', expansion: ['Ghrelin = hunger', 'GLP-1/PYY = satiety'] },
  ],

  traps: [
    {
      questionCategory: 'Leptin levels in obesity',
      wrongInstinct: 'Obese people are obese because they have low leptin (the satiety hormone)',
      rightAnswer: 'Most obese people have HIGH leptin levels but are leptin-RESISTANT — the hypothalamus no longer responds normally to the satiety signal; true leptin deficiency is a rare monogenic cause',
      why: 'Leptin rises with fat mass, so obesity is usually a state of resistance (not deficiency); this is why leptin therapy helps only the rare deficient patient, not common obesity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The metabolic syndrome is best described as the clustering of:',
      options: [
        { id: 'a', text: 'Central obesity, insulin resistance/hyperglycaemia, dyslipidaemia and hypertension' },
        { id: 'b', text: 'Weight loss, anaemia and jaundice' },
        { id: 'c', text: 'Fever, rash and arthritis' },
        { id: 'd', text: 'Hypothyroidism and bradycardia' },
      ],
      answerId: 'a',
      explanation: 'Metabolic syndrome clusters central (visceral) obesity, insulin resistance/hyperglycaemia, atherogenic dyslipidaemia (high triglycerides, low HDL) and hypertension — a high cardiovascular-risk state driven by visceral adiposity.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In common obesity, circulating leptin levels are typically:',
      options: [
        { id: 'a', text: 'Low, reflecting leptin deficiency' },
        { id: 'b', text: 'High, but with resistance to leptin\'s satiety signal' },
        { id: 'c', text: 'Undetectable' },
        { id: 'd', text: 'Normal and fully effective' },
      ],
      answerId: 'b',
      explanation: 'Leptin is secreted by adipose tissue in proportion to fat mass, so obese individuals usually have high leptin but are resistant to its central satiety effect. True leptin deficiency is a rare monogenic cause of obesity.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default obesityPathophysiology;
