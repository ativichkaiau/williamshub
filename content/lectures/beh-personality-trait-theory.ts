import type { Lecture } from '../../lib/types';

export const behPersonalityTraitTheory: Lecture = {
  id: 'beh-personality-trait-theory',
  title: 'Personality & Trait Theory',
  system: 'community',
  source: 'L11 — Personality & Trait Theory',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Behavioral Science' },
    { kind: 'lecture', label: 'L11 Personality' },
    { kind: 'mechanism', label: 'Big Five (OCEAN)' },
    { kind: 'exam', label: 'Type vs trait' },
    { kind: 'investigation', label: 'Temperament vs character' },
  ],

  highYield: [
    '**Personality** = an enduring, characteristic pattern of thinking, feeling and behaving. **Type theories** sort people into **discrete categories** (Hippocrates/Galen’s four humours; Type A vs B), whereas **trait theories** place people on **continuous dimensions** — the dominant modern approach.',
    '**The Big Five / Five-Factor Model (OCEAN)** — **Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism** — is the most empirically robust, cross-cultural trait model. High **neuroticism** and low **conscientiousness** predict worse health behaviours and outcomes.',
    '**Earlier trait theorists:** **Allport** (cardinal, central, secondary traits), **Cattell** (16 source traits via factor analysis, the 16PF) and **Eysenck**, whose three biologically-grounded dimensions are **Extraversion–Introversion, Neuroticism–Stability and Psychoticism (PEN)**, tied to cortical arousal.',
    '**Temperament vs character:** **temperament** is the **early-appearing, biologically-based** emotional style (see Thomas & Chess in [[beh-development-principles]]); **character** is the **learned, values-based** component that matures with experience. Cloninger’s model splits personality into temperament and character dimensions.',
    '**Assessment & roots:** traits are measured with objective inventories such as the **MMPI** and Big Five scales — see [[beh-psychological-testing]]. Traits are substantially **heritable** ([[beh-behavioral-genetics]]) and, when rigid and maladaptive, shade into the disorders of [[beh-personality-disorders]].',
  ],

  mechanism: {
    title: 'The Big Five (OCEAN): five orthogonal dimensions of personality',
    steps: [
      { id: 's1', label: 'Openness — curiosity, imagination, novelty-seeking' },
      { id: 's2', label: 'Conscientiousness — organised, disciplined, dependable', emphasis: 'key' },
      { id: 's3', label: 'Extraversion — sociable, assertive, high-energy' },
      { id: 's4', label: 'Agreeableness — cooperative, trusting, warm' },
      { id: 's5', label: 'Neuroticism — emotional instability, anxiety, negative affect', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Traits are dimensional; types are categorical', mechanism: 'Trait theory rates everyone on continuous scales rather than sorting them into boxes', significance: 'key' },
    { sign: 'The Big Five is the most validated, cross-cultural trait model', mechanism: 'Five factors recur across languages and cultures and predict real-world outcomes', significance: 'key' },
    { sign: 'Temperament is biological and early; character is learned', mechanism: 'Temperament appears in infancy and is stable; character develops through experience and values', significance: 'key' },
    { sign: 'Neuroticism and low conscientiousness track poorer health', mechanism: 'They predict maladaptive coping, risk behaviour and reduced adherence', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A questionnaire scores a person from low to high on five broad dimensions', meaning: 'A trait (dimensional) approach — likely the Big Five' },
    { clue: 'An infant is described as consistently “difficult”: irritable, irregular, slow to adapt', meaning: 'A temperament pattern (Thomas & Chess), the biological substrate of later personality' },
    { clue: 'A patient is highly organised, disciplined and detail-oriented, and it serves him well', meaning: 'High conscientiousness — an adaptive trait, not a disorder' },
    { clue: 'A time-pressured, hostile, competitive “Type A” executive', meaning: 'A type (categorical) description historically linked to cardiovascular risk' },
  ],

  treatment: [
    { logic: 'Use trait profiles to tailor communication', detail: 'Adjust counselling to the patient’s style — for example, provide structure and detail for highly conscientious patients and extra reassurance for those high in neuroticism.' },
    { logic: 'Distinguish trait from disorder', detail: 'A pronounced trait is only a disorder when it is inflexible, pervasive and causes distress or impairment — the threshold explored in [[beh-personality-disorders]].' },
  ],

  mnemonics: [
    { hook: 'OCEAN of personality', expansion: ['Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism', 'The five factors of the Big Five model'] },
    { hook: 'Eysenck = PEN', expansion: ['Psychoticism, Extraversion, Neuroticism', 'Three biologically-based super-factors'] },
  ],

  traps: [
    {
      questionCategory: 'Temperament vs character',
      wrongInstinct: 'Temperament and character mean the same thing',
      rightAnswer: 'Temperament is the early, biologically-based emotional style; character is the learned, values-based component that develops with experience',
      why: 'Temperament is present in infancy and heritable, whereas character is shaped by environment and maturation — together they form personality.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which model is the most empirically supported, cross-culturally replicated trait framework of personality?',
      options: [
        { id: 'a', text: 'The four humours' },
        { id: 'b', text: 'The Big Five (Five-Factor Model)' },
        { id: 'c', text: 'Freud’s psychosexual stages' },
        { id: 'd', text: 'Type A vs Type B' },
      ],
      answerId: 'b',
      explanation: 'The Big Five (OCEAN) has the strongest empirical and cross-cultural support and reliably predicts behaviour and health outcomes, unlike the categorical type theories.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An infant’s consistent, biologically-based emotional and reactivity style, evident from early life, is best termed:',
      options: [
        { id: 'a', text: 'Character' },
        { id: 'b', text: 'Temperament' },
        { id: 'c', text: 'A personality disorder' },
        { id: 'd', text: 'A defense mechanism' },
      ],
      answerId: 'b',
      explanation: 'Temperament is the early-appearing, heritable emotional style; character is the later, learned, values-based component. Together they constitute personality.',
      tests: 'investigation',
    },
  ],
};

export default behPersonalityTraitTheory;
