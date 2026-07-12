import type { Lecture } from '../../lib/types';

export const ifhBiopsychosocialModel: Lecture = {
  id: 'ifh-biopsychosocial-model',
  title: 'The Biopsychosocial Model',
  system: 'community',
  source: 'L5 — Psychosocial Influences on Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L5 Psychosocial Influences' },
    { kind: 'mechanism', label: 'Engel · systems theory' },
    { kind: 'exam', label: 'Social determinants of health' },
  ],

  highYield: [
    '**George Engel (1977)** proposed the **biopsychosocial (BPS) model** to replace the purely **biomedical model** — which is reductionist and splits mind from body. Health and illness arise from the **interaction** of **biological + psychological + social** factors, not biology alone.',
    '**The three domains.** **Biological** — genes, pathogens, physiology, organ pathology. **Psychological** — mood, cognition, beliefs, behaviour, coping, personality. **Social** — family, work, culture, socioeconomic status and environment. They **interact dynamically**; each level can amplify or buffer the others.',
    '**It is a systems model.** Rooted in general systems theory, it nests a **hierarchy**: molecule → cell → organ → **person** → family → community → society. Intervening at one level ripples to the others — which is why family and community are units of care in [[ifh-family-medicine-principles]].',
    '**Social determinants of health (SDOH)** are the conditions in which people are born, grow, live, work and age — income, education, housing, food, employment and social support. Often called the **“causes of the causes,”** they drive most of the variation in population health.',
    '**The social gradient (Marmot).** Health follows a **gradient** by socioeconomic position — the lower the position, the worse the health, at every step. The BPS model underpins [[ifh-stress-life-events]] and [[ifh-social-support-health]] and reframes [[ifh-disease-vs-illness]] as more than pathology.',
  ],

  mechanism: {
    title: 'Assess biology + psychology + society → integrate the interactions → act on the determinants',
    steps: [
      { id: 's1', label: 'Biological — genes, pathogens, organ pathology, physiology' },
      { id: 's2', label: 'Psychological — thoughts, emotions, behaviour, coping, beliefs', emphasis: 'key' },
      { id: 's3', label: 'Social — family, work, culture, socioeconomic status, environment', emphasis: 'key' },
      { id: 's4', label: 'Integrate — the three domains interact dynamically', emphasis: 'key' },
      { id: 's5', label: 'Act on the social determinants — the upstream “causes of the causes”' },
    ],
  },

  examFindings: [
    { sign: 'Engel’s BPS model replaced the reductionist biomedical model', mechanism: 'Health = interaction of biology, psychology and society', significance: 'key' },
    { sign: 'The three domains interact — they do not merely add up', mechanism: 'Systems theory: each level influences the others', significance: 'key' },
    { sign: 'SDOH — the “causes of the causes” — drive most population health', mechanism: 'Income, education, housing and work shape exposure and access', significance: 'key' },
    { sign: 'Health follows a social gradient by socioeconomic position', mechanism: 'Risk rises stepwise as position falls (Marmot)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Diabetes stays uncontrolled because the patient cannot afford healthy food or stable housing', meaning: 'A social determinant is driving a “biological” disease' },
    { clue: 'Depression is intensifying the patient’s perception of chest pain', meaning: 'A psychological factor is modifying a biological symptom' },
    { clue: 'The same diagnosis has a very different impact on two different patients', meaning: 'Whole-person BPS context differs — biology alone does not predict experience' },
    { clue: 'Life expectancy tracks with income and postcode across a city', meaning: 'The social gradient — social determinants of health at work' },
  ],

  treatment: [
    { logic: 'Assess all three BPS domains, not just biology', detail: 'For every problem, ask what biological, psychological and social factors are contributing and how they interact.' },
    { logic: 'Act on the social determinants', detail: 'Address barriers and mobilise social support and community resources rather than treating the pathology in isolation.' },
  ],

  mnemonics: [
    { hook: 'BPS = Body, Brain, Background', expansion: ['Biological — the body', 'Psychological — the brain / mind', 'Social — the background and context'] },
    { hook: 'SDOH = the “causes of the causes”', expansion: ['Income, education, employment', 'Housing, food, environment', 'Social support and access to care'] },
  ],

  traps: [
    {
      questionCategory: 'Biomedical vs biopsychosocial',
      wrongInstinct: 'The biopsychosocial model just means “add a bit of psychology” to the diagnosis',
      rightAnswer: 'It is a systems model in which biological, psychological and social factors interact dynamically, each level shaping the others',
      why: 'Treating the domains as separate add-ons misses the interactions Engel’s model was designed to capture.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient’s poor glycaemic control is driven largely by an inability to afford healthy food and by unstable housing. This is best described as an example of:',
      options: [
        { id: 'a', text: 'Social determinants of health' },
        { id: 'b', text: 'A purely biological cause' },
        { id: 'c', text: 'Non-adherence due to poor motivation' },
        { id: 'd', text: 'A medically unexplained symptom' },
      ],
      answerId: 'a',
      explanation: 'Income, food security and housing are social determinants of health — the “causes of the causes” — and here they are shaping a biological disease outcome, exactly what the biopsychosocial model predicts.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The biopsychosocial model, proposed by George Engel, was introduced primarily as an alternative to which model?',
      options: [
        { id: 'a', text: 'The biomedical model' },
        { id: 'b', text: 'The stages-of-change model' },
        { id: 'c', text: 'The health belief model' },
        { id: 'd', text: 'The Calgary–Cambridge model' },
      ],
      answerId: 'a',
      explanation: 'Engel (1977) proposed the biopsychosocial model to overcome the limitations of the reductionist biomedical model, which considers only biological causes and separates mind from body.',
      tests: 'mechanism',
    },
  ],
};

export default ifhBiopsychosocialModel;
