import type { Lecture } from '../../lib/types';

export const ifhTcmOverview: Lecture = {
  id: 'ifh-tcm-overview',
  title: 'Traditional & Complementary Medicine (T&CM)',
  system: 'community',
  source: 'L10 — Traditional & Complementary Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L10 T&CM' },
    { kind: 'mechanism', label: 'Traditional vs complementary vs integrative' },
    { kind: 'disease', label: 'CAM categories' },
    { kind: 'investigation', label: 'Why patients use T&CM' },
  ],

  highYield: [
    '**Get the definitions straight (WHO).** **Traditional medicine (TM)** = indigenous knowledge/practices used to maintain health (e.g. Thai traditional medicine, Chinese medicine, Ayurveda). **Complementary/alternative medicine (CAM)** = practices outside a country’s own conventional system. **Integrative medicine** = combining conventional + evidence-based complementary care in a coordinated way.',
    '**"Complementary" ≠ "alternative."** **Complementary = used ALONGSIDE** conventional medicine; **alternative = used INSTEAD OF** it. The instead-of pattern (e.g. abandoning chemotherapy for herbs) is the dangerous one — the crux of [[ifh-tcm-clinical-approach]].',
    '**CAM categories (NCCIH):** **natural products** (herbs, supplements), **mind–body practices** (meditation, yoga, acupuncture), and **manipulative/body-based** methods (massage, chiropractic), plus **whole medical systems**.',
    '**Thai traditional medicine (TTM)** — herbal medicine and Thai massage — is **licensed and integrated into the national health system**, with its own training and practitioners; it is not fringe practice in the Thai context.',
    '**Know WHY patients use T&CM:** it is **highly prevalent**, driven by **cultural belief**, a **holistic** appeal, **chronic/incurable** conditions, and **access/cost** — and most patients will **not disclose it unless asked**. Their reasons connect to illness meaning in [[ifh-disease-vs-illness]] and the [[ifh-biopsychosocial-model]].',
  ],

  mechanism: {
    title: 'Define → categorise the modality → locate Thai TM → understand why patients use it',
    steps: [
      { id: 's1', label: 'Distinguish traditional vs complementary vs alternative vs integrative', emphasis: 'key' },
      { id: 's2', label: 'Categorise the modality (natural product / mind–body / manipulative / whole system)' },
      { id: 's3', label: 'Recognise Thai traditional medicine within the national system' },
      { id: 's4', label: 'Understand WHY the patient uses it — belief, holism, access, chronicity', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Complementary = alongside; alternative = instead of conventional care', mechanism: 'The "instead-of" pattern risks abandoning effective treatment — that is the hazard to flag', significance: 'key' },
    { sign: 'Integrative medicine = conventional + evidence-based complementary, coordinated', mechanism: 'Not "anything goes" — it requires evidence and coordination', significance: 'supportive' },
    { sign: 'T&CM use is common and usually undisclosed', mechanism: 'Patients fear ridicule, so they will not volunteer it unless routinely and non-judgmentally asked', significance: 'key' },
    { sign: 'Thai traditional medicine is licensed and integrated', mechanism: 'It has formal training and a place in the health system, not fringe status', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A patient takes a herbal remedy ALONGSIDE prescribed metformin', meaning: 'Complementary use — used with conventional care (still check for interactions)' },
    { clue: 'A patient stops chemotherapy to pursue only herbal cures', meaning: 'Alternative use — the high-risk instead-of pattern that needs urgent discussion' },
    { clue: 'A patient uses meditation and Thai massage for chronic back pain', meaning: 'Mind–body and manipulative CAM categories' },
    { clue: 'A patient never mentions the supplements they take', meaning: 'Typical non-disclosure — you must ask directly and non-judgmentally to find out' },
  ],

  treatment: [
    { logic: 'Ask every patient about T&CM use, routinely and non-judgmentally', detail: 'Normalise the question so use is disclosed; this sets up the safety and interaction check in [[ifh-tcm-clinical-approach]].' },
    { logic: 'Understand the patient’s beliefs and reasons', detail: 'Explore the illness meaning behind the choice (see [[ifh-disease-vs-illness]]) rather than dismissing it, so you can negotiate a safe, respectful plan.' },
  ],

  mnemonics: [
    { hook: 'Complementary vs Alternative', expansion: ['Complementary = alongside conventional medicine', 'Alternative = instead of it (the risky pattern)'] },
    { hook: 'CAM categories: N-M-M', expansion: ['Natural products (herbs/supplements)', 'Mind–body (meditation, acupuncture)', 'Manipulative (massage, chiropractic)'] },
  ],

  traps: [
    {
      questionCategory: 'Complementary vs alternative',
      wrongInstinct: '"Complementary" and "alternative" medicine mean the same thing',
      rightAnswer: 'Complementary = used WITH conventional medicine; alternative = used INSTEAD OF it',
      why: 'The alternative (instead-of) pattern is the dangerous one — e.g. abandoning chemotherapy — so the distinction changes the clinical risk entirely.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient uses a herbal tea in addition to their prescribed antihypertensive. This is best described as which type of medicine use?',
      options: [
        { id: 'a', text: 'Alternative medicine' },
        { id: 'b', text: 'Complementary medicine' },
        { id: 'c', text: 'Integrative medicine by definition' },
        { id: 'd', text: 'Conventional medicine' },
      ],
      answerId: 'b',
      explanation: 'Used alongside conventional treatment, it is complementary. Alternative means used instead of conventional care; integrative specifically means a coordinated, evidence-based combination.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which statement about traditional and complementary medicine is correct?',
      options: [
        { id: 'a', text: 'Most patients spontaneously disclose their T&CM use to doctors' },
        { id: 'b', text: 'Thai traditional medicine is licensed and integrated into the health system' },
        { id: 'c', text: 'Acupuncture is classified as a natural product' },
        { id: 'd', text: 'Integrative medicine means using any remedy the patient prefers' },
      ],
      answerId: 'b',
      explanation: 'Thai traditional medicine has formal training and a place in the national system. Most patients do NOT disclose T&CM unless asked, acupuncture is a mind–body practice, and integrative medicine requires evidence and coordination.',
      tests: 'investigation',
    },
  ],
};

export default ifhTcmOverview;
