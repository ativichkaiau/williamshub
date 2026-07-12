import type { Lecture } from '../../lib/types';

export const ichSocialDeterminantsEquity: Lecture = {
  id: 'ich-social-determinants-equity',
  title: 'Social Determinants & Health Equity',
  system: 'community',
  source: 'L3 — Determinants of Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L3 SDOH & Equity' },
    { kind: 'mechanism', label: 'Social gradient' },
    { kind: 'exam', label: 'Equity vs equality' },
    { kind: 'treatment', label: 'Health in All Policies' },
  ],

  highYield: [
    '**Social determinants of health (SDOH)** — WHO’s Commission on Social Determinants of Health (**CSDH**, Marmot, 2008) — are “**the conditions in which people are born, grow, live, work and age**,” and the wider structural forces (money, power, resources) that shape those conditions ([[ich-determinants-of-health]]).',
    '**Equity is not equality.** **Equality** gives everyone the **same** resource; **equity** distributes resources **according to need** so that everyone can reach a fair level of health. A **health inequity** is a difference that is **avoidable, unfair and unjust** — distinct from a mere biological or chance inequality/variation.',
    '**The social gradient:** health worsens **step-by-step down the socioeconomic ladder** — it is not simply “poor vs rich.” The **Whitehall studies** showed each lower employment grade had higher mortality, so improving health means acting across the **whole** gradient, not only the poorest.',
    '**“The causes of the causes” (Marmot):** behind proximal risks (smoking, poor diet) lie the social conditions — poverty, poor education, insecure work — that generate them. Effective policy treats the smoking and the disadvantage driving it ([[ich-disease-prevention-strategies]]).',
    '**Health in All Policies (HiAP):** because most determinants sit outside the health sector, all sectors — housing, transport, education, taxation, employment — must weigh health impacts. This underpins health promotion ([[ich-health-promotion]]) and equitable financing such as universal health coverage ([[ich-health-financing-uhc]]).',
  ],

  mechanism: {
    title: 'From structure to health gap: structural drivers → SDOH → gradient → inequity → HiAP response',
    steps: [
      { id: 's1', label: 'Structural drivers: distribution of money, power & resources' },
      { id: 's2', label: 'Shape daily conditions — the SDOH (birth, growth, work, age)', emphasis: 'key' },
      { id: 's3', label: 'Produce a social gradient in exposure and risk', emphasis: 'key' },
      { id: 's4', label: 'Result: avoidable, unfair health inequities', emphasis: 'key' },
      { id: 's5', label: 'Respond with equity-based action & Health in All Policies' },
    ],
  },

  examFindings: [
    { sign: 'Equity means resources by NEED; equality means the SAME resources for all', mechanism: 'Identical inputs leave the disadvantaged worse off — fairness requires proportion to need', significance: 'key' },
    { sign: 'A health inequity is a difference that is avoidable, unfair and unjust', mechanism: 'Not every inequality is inequitable — only the unfair, remediable ones', significance: 'key' },
    { sign: 'Health follows a social gradient across the whole ladder, not just poor vs rich', mechanism: 'Each step down in socioeconomic position carries incremental risk (Whitehall)', significance: 'key' },
    { sign: 'The determinants lie mostly outside the health sector', mechanism: 'This is why Health in All Policies is required to address them', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Mortality rises steadily from the top to the bottom civil-service grade', meaning: 'The social gradient — health tracks socioeconomic position across the whole range' },
    { clue: 'Giving every school identical funding regardless of local deprivation', meaning: 'Equality, not equity — need-blind allocation leaves disadvantaged pupils behind' },
    { clue: 'A difference in life expectancy driven by unequal access and living conditions', meaning: 'A health inequity — avoidable and unjust, not a natural variation' },
    { clue: 'A transport and housing ministry assessing the health impact of its plans', meaning: 'Health in All Policies — acting on determinants beyond the health sector' },
  ],

  treatment: [
    { logic: 'Distinguish inequity from inequality before recommending action', detail: 'Ask whether the difference is avoidable and unfair; only then is it a target for equity-based redistribution rather than an unavoidable variation.' },
    { logic: 'Act on the whole gradient and the causes of the causes', detail: 'Combine proportionate universalism (universal action scaled to need) with intersectoral Health in All Policies so structural drivers, not just behaviours, are addressed.' },
  ],

  mnemonics: [
    { hook: 'Equity vs equality: “same” vs “fair”', expansion: ['Equality = everyone gets the SAME', 'Equity = everyone gets what they NEED', 'Inequity = the gap is avoidable + unfair + unjust'] },
    { hook: 'SDOH = “born, grow, live, work, age”', expansion: ['Conditions across the life course', 'Shaped by money, power & resources', 'Producing the social gradient'] },
  ],

  traps: [
    {
      questionCategory: 'Health equity versus equality',
      wrongInstinct: 'Giving every group exactly the same resources is the equitable approach',
      rightAnswer: 'Equity distributes resources according to need so all can reach a fair level of health; identical (equal) allocation is not necessarily equitable',
      why: 'Treating unequal starting points identically preserves the gap — equity requires giving more to those with greater need.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A ministry allocates extra health funding to the most deprived districts so that all districts can achieve a similar health outcome. This best illustrates which concept?',
      options: [
        { id: 'a', text: 'Health equality' },
        { id: 'b', text: 'Health equity' },
        { id: 'c', text: 'The prevention paradox' },
        { id: 'd', text: 'Population momentum' },
      ],
      answerId: 'b',
      explanation: 'Distributing resources according to need — more to the most deprived so all can reach a fair outcome — is health equity. Equality would give every district the same amount regardless of need.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The Whitehall studies, showing mortality rising at each step down the employment hierarchy, are the classic demonstration of which idea?',
      options: [
        { id: 'a', text: 'The social gradient in health' },
        { id: 'b', text: 'Herd immunity' },
        { id: 'c', text: 'The demographic transition' },
        { id: 'd', text: 'Population attributable risk' },
      ],
      answerId: 'a',
      explanation: 'The Whitehall studies demonstrated the social gradient: health worsens stepwise down the socioeconomic ladder, affecting everyone below the top — not just a poor-versus-rich divide.',
      tests: 'mechanism',
    },
  ],
};

export default ichSocialDeterminantsEquity;
