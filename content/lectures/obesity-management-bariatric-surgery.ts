import type { Lecture } from '../../lib/types';

export const obesityManagementBariatricSurgery: Lecture = {
  id: 'obesity-management-bariatric-surgery',
  title: 'Obesity Management & Bariatric Surgery',
  system: 'gi',
  source: 'L8 — Obesity',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L8 Obesity' },
    { kind: 'treatment', label: 'Bariatric surgery' },
    { kind: 'mechanism', label: 'Stepped management' },
  ],

  highYield: [
    '**Obesity management is a STEPPED approach, always built on lifestyle change: (1) diet + physical activity + behavioural therapy; (2) pharmacotherapy; (3) bariatric SURGERY for severe or refractory obesity.** Each step is added when the previous is insufficient and the BMI/comorbidity threshold is met — drugs and surgery augment, never replace, lifestyle change.',
    '**Lifestyle is first-line for everyone: a sustained energy deficit (reduced calorie intake + increased activity) with behavioural support.** Pharmacotherapy (GLP-1 agonists, orlistat, etc. — see [[obesity-pharmacotherapy]]) is an adjunct at **BMI ≥30 (or ≥27 with a weight-related comorbidity)** when lifestyle alone fails.',
    '**Bariatric (metabolic) surgery is the most effective and durable treatment for severe obesity, generally offered at BMI ≥40 (or ≥35 with significant comorbidity such as type 2 diabetes).** The main procedures are the **sleeve gastrectomy** (removes most of the stomach — restrictive) and the **Roux-en-Y gastric bypass** (restrictive + a degree of malabsorption, with hormonal changes).',
    '**Surgery works beyond mere restriction — it changes GUT HORMONES (e.g. increased GLP-1/PYY satiety signals, reduced ghrelin), which is why it often produces rapid improvement or remission of type 2 diabetes ("metabolic surgery"), sometimes before much weight is lost.** Benefits include major reductions in diabetes, cardiovascular risk and mortality.',
    '**Bariatric surgery has important consequences: lifelong MICRONUTRIENT deficiencies (iron, B12, folate, calcium, fat-soluble vitamins — [[fat-soluble-vitamins]]) requiring supplementation and monitoring, plus surgical risks and dumping syndrome.** So management is a long-term commitment. This operationalises the pathophysiology of [[obesity-pathophysiology]] and the appetite hormones of [[gut-hormones-appetite-regulation]].',
  ],

  mechanism: {
    title: 'Lifestyle → drugs → surgery by BMI/comorbidity; surgery changes gut hormones',
    steps: [
      { id: 's1', label: 'Stepped: lifestyle → pharmacotherapy → bariatric surgery', emphasis: 'key' },
      { id: 's2', label: 'Drugs adjunct at BMI ≥30 (or ≥27 + comorbidity)', emphasis: 'key' },
      { id: 's3', label: 'Surgery at BMI ≥40 (or ≥35 + comorbidity, e.g. T2DM)', emphasis: 'key' },
      { id: 's4', label: 'Sleeve gastrectomy (restrictive) vs Roux-en-Y bypass (restrictive + malabsorptive)' },
      { id: 's5', label: 'Changes gut hormones → diabetes remission; lifelong micronutrient supplements', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lifestyle modification as the foundation of all obesity treatment', mechanism: 'Sustained energy deficit (first-line for everyone)', significance: 'key' },
    { sign: 'Bariatric surgery offered at BMI ≥40 (or ≥35 with comorbidity)', mechanism: 'Most effective, durable treatment for severe obesity', significance: 'key' },
    { sign: 'Type 2 diabetes remission soon after gastric bypass', mechanism: 'Favourable gut-hormone changes ("metabolic surgery")', significance: 'key' },
    { sign: 'Iron/B12/calcium/vitamin deficiency after bariatric surgery', mechanism: 'Reduced absorption — needs lifelong supplementation', significance: 'key' },
    { sign: 'Drugs used only alongside lifestyle at appropriate BMI thresholds', mechanism: 'Pharmacotherapy is an adjunct, not a replacement', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The foundation of all obesity management', meaning: 'Lifestyle modification (diet + activity + behaviour)' },
    { clue: 'The BMI threshold generally required for bariatric surgery', meaning: '≥40 (or ≥35 with significant comorbidity)' },
    { clue: 'Why bariatric surgery improves diabetes rapidly', meaning: 'Favourable gut-hormone changes (metabolic effect)' },
    { clue: 'The long-term hazard after bariatric surgery', meaning: 'Micronutrient deficiencies (needs lifelong supplementation)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The stepped approach (lifestyle → drugs — [[obesity-pharmacotherapy]] → surgery) treats the obesity of [[obesity-pathophysiology]] and its complications (T2DM, NAFLD — [[cirrhosis-fatty-liver-portal-hypertension]], OSA — [[obstructive-sleep-apnoea]]). Bariatric surgery is the most durable option but commits patients to lifelong micronutrient monitoring ([[fat-soluble-vitamins]]); its hormonal mechanism links to [[gut-hormones-appetite-regulation]].' },
  ],

  mnemonics: [
    { hook: 'Stepped care: "Lifestyle → Drugs → Surgery" (by BMI/comorbidity)', expansion: ['Drugs ≥30 (or ≥27+comorbidity)', 'Surgery ≥40 (or ≥35+comorbidity)'] },
    { hook: 'Bariatric = "metabolic surgery" (gut hormones → diabetes remission) + lifelong vitamins', expansion: ['Sleeve vs Roux-en-Y bypass', 'Monitor iron/B12/Ca/ADEK'] },
  ],

  traps: [
    {
      questionCategory: 'How bariatric surgery improves diabetes',
      wrongInstinct: 'Bariatric surgery improves type 2 diabetes only after substantial weight loss, purely by restricting intake',
      rightAnswer: 'Bariatric ("metabolic") surgery often improves or remits type 2 diabetes RAPIDLY — sometimes before much weight is lost — because it alters GUT HORMONES (↑GLP-1/PYY, ↓ghrelin), not merely by restricting food intake',
      why: 'Attributing the diabetes benefit solely to weight loss misses the hormonal/metabolic mechanism that explains its speed and magnitude, which is why it is called metabolic surgery.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the stepped management of obesity, bariatric surgery is generally reserved for patients with:',
      options: [
        { id: 'a', text: 'A BMI ≥25 who prefer surgery' },
        { id: 'b', text: 'A BMI ≥40 (or ≥35 with significant comorbidity) when lifestyle and drugs are insufficient' },
        { id: 'c', text: 'Any patient wishing to lose weight' },
        { id: 'd', text: 'A BMI <30 only' },
      ],
      answerId: 'b',
      explanation: 'Bariatric surgery is the most effective, durable treatment for severe obesity and is typically offered at BMI ≥40, or ≥35 with a significant comorbidity such as type 2 diabetes, after lifestyle and pharmacotherapy.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A well-recognised long-term consequence of bariatric surgery that requires lifelong monitoring is:',
      options: [
        { id: 'a', text: 'Micronutrient deficiency (e.g. iron, B12, calcium, fat-soluble vitamins)' },
        { id: 'b', text: 'Permanent cure requiring no follow-up' },
        { id: 'c', text: 'Hypertension' },
        { id: 'd', text: 'Increased ghrelin and appetite' },
      ],
      answerId: 'a',
      explanation: 'Restrictive/malabsorptive bariatric procedures reduce absorption of iron, B12, folate, calcium and fat-soluble vitamins, so patients need lifelong supplementation and monitoring; surgery is a long-term commitment, not a one-off cure.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default obesityManagementBariatricSurgery;
