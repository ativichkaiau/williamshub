import type { Lecture } from '../../lib/types';

export const ifhFamilyMedicinePrinciples: Lecture = {
  id: 'ifh-family-medicine-principles',
  title: 'Principles of Family Medicine',
  system: 'community',
  source: 'L1 — Patient Journey & Introduction to Family Health',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L1 Patient Journey & Family Health' },
    { kind: 'mechanism', label: 'The 4 C’s · Generalist role' },
    { kind: 'exam', label: 'Undifferentiated illness · COPC' },
  ],

  highYield: [
    '**Family medicine = the 4 C’s (+1).** **First contact**, **Continuity**, **Comprehensiveness**, **Coordination** — plus **Community orientation**. These accessible, ongoing, whole-scope, integrating features (mapped onto the [[ifh-patient-journey]]) define the discipline, not any single organ system.',
    '**Person-centred, not disease-centred.** The unit of care is the whole person in the context of **family and community** (nested levels: person → family → community). The family doctor is a **generalist** who manages problems across all ages, both sexes and every organ system.',
    '**It runs on the biopsychosocial model.** Health is biological + psychological + social — see [[ifh-biopsychosocial-model]] — so the family doctor reads a raised blood pressure alongside the patient’s work, family and beliefs, not in isolation.',
    '**Comprehensiveness = cradle to grave.** One clinician covers prevention, acute illness, chronic-disease care and palliation. Primary care meets the **undifferentiated** early presentation, where disease prevalence and presentation differ from the hospital’s selected population.',
    '**Community-oriented primary care (COPC).** The practice population is the *denominator*: the family doctor thinks in terms of the whole community’s health and acts as advocate and resource coordinator — a natural bridge to [[ifh-family-health-impact]].',
  ],

  mechanism: {
    title: 'Person → family → community: the generalist applies the five principles',
    steps: [
      { id: 's1', label: 'First contact — the accessible entry to care', emphasis: 'key' },
      { id: 's2', label: 'Comprehensive — all ages, both sexes, all problems, prevention → palliation' },
      { id: 's3', label: 'Continuous — an ongoing healing relationship over time', emphasis: 'key' },
      { id: 's4', label: 'Coordinated — integrates specialists & services around the patient' },
      { id: 's5', label: 'Community-oriented — the practice population is the denominator', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'The generalist manages undifferentiated, early, undiagnosed problems', mechanism: 'In an unselected primary-care population, disease prevalence and presentation differ from hospital', significance: 'key' },
    { sign: 'Care is person-centred, not organ- or disease-centred', mechanism: 'The unit of care is the whole person within family and community', significance: 'key' },
    { sign: 'Comprehensiveness spans prevention, acute, chronic and palliative care', mechanism: 'Cradle-to-grave scope across all systems and ages', significance: 'supportive' },
    { sign: 'The family doctor is coordinator, navigator and advocate', mechanism: 'Integrates fragmented specialist care around the patient and family', significance: 'key' },
  ],

  investigations: [
    { clue: 'A doctor who sees children, pregnant women and the elderly for any complaint', meaning: 'Comprehensiveness + generalist scope — the hallmark of family medicine' },
    { clue: 'Managing a vague, early symptom that does not yet fit a diagnostic label', meaning: 'The undifferentiated presentation — characteristic of first-contact primary care' },
    { clue: 'A physician links a patient’s poorly controlled BP to family and workplace stress', meaning: 'Biopsychosocial + person/family/community orientation in action' },
    { clue: 'A practice audits diabetes control across its whole enrolled population', meaning: 'Community-oriented primary care (COPC) — thinking in denominators' },
  ],

  treatment: [
    { logic: 'Apply the principles together, not à la carte', detail: 'Be the accessible first contact, deliver comprehensive continuous care, and coordinate everything else around the person and their family.' },
    { logic: 'Anchor every problem in context', detail: 'Read each presentation through the biopsychosocial lens and the family/community level, not the organ alone.' },
  ],

  mnemonics: [
    { hook: 'The 4 C’s of family medicine (+1)', expansion: ['First Contact', 'Continuity', 'Comprehensiveness', 'Coordination', '(+ Community orientation)'] },
  ],

  traps: [
    {
      questionCategory: 'Generalist vs specialist role',
      wrongInstinct: 'Family medicine is just “less-expert” internal medicine that refers everything on',
      rightAnswer: 'It is a distinct discipline defined by first-contact, continuous, comprehensive, coordinated, person-centred care',
      why: 'Its expertise is breadth, undifferentiated problems and the ongoing relationship — not narrow single-organ depth.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A family physician manages a vague, early symptom that does not yet fit a clear diagnosis. This type of presentation is best described as…',
      options: [
        { id: 'a', text: 'Undifferentiated illness' },
        { id: 'b', text: 'End-organ disease' },
        { id: 'c', text: 'A red-flag emergency' },
        { id: 'd', text: 'A completed diagnosis' },
      ],
      answerId: 'a',
      explanation: 'Primary care characteristically meets problems early and undifferentiated — before they have evolved into a labelled, organ-specific diagnosis — which is why prevalence and presentation differ from the hospital.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'Which set best captures the core principles of family medicine?',
      options: [
        { id: 'a', text: 'First-contact, continuous, comprehensive, coordinated care' },
        { id: 'b', text: 'Cure, containment, cost, control' },
        { id: 'c', text: 'Diagnosis, drugs, discharge' },
        { id: 'd', text: 'Screening, staging, surgery' },
      ],
      answerId: 'a',
      explanation: 'The discipline is defined by the “4 C’s” — first contact, continuity, comprehensiveness and coordination — usually extended with community orientation, all delivered person-centredly.',
      tests: 'mechanism',
    },
  ],
};

export default ifhFamilyMedicinePrinciples;
