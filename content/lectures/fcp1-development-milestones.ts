import type { Lecture } from '../../lib/types';

export const fcp1DevelopmentMilestones: Lecture = {
  id: 'fcp1-development-milestones',
  title: 'Developmental Milestones: The Four Domains & Red Flags',
  system: 'clinical',
  source: 'L3 — Growth & Development Assessment',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L3 Growth & Development' },
    { kind: 'mechanism', label: 'Four domains screen' },
    { kind: 'exam', label: 'Limit ages · red flags' },
    { kind: 'investigation', label: 'Isolated vs global delay' },
  ],

  highYield: [
    '**Assess development across four domains:** **gross motor**, **fine motor & vision**, **speech/language & hearing**, and **social/emotional & behaviour**. Screen all four — a problem in one does not exclude problems in another.',
    '**Know a few anchor milestones:** social smile by ~6 weeks; sits unsupported ~6–8 months; stands/cruises ~9–12 months; **walks independently ~12–15 months**; first words ~12 months; two-word phrases ~2 years. These are **average** ages.',
    '**Limit ages are the red flags — memorise these:** not smiling by 8–10 weeks, not sitting by 9 months, **not walking by 18 months**, no words by 18 months, no two-word phrases by 2.5 years. Crossing a limit age triggers assessment.',
    '**Classify delay as isolated (one domain) or global (two or more domains).** Isolated **speech** delay warrants a **hearing test first**. Global delay prompts a broader developmental, and often genetic/metabolic, evaluation.',
    '**Two findings are always sinister: regression (loss of previously acquired skills) and early hand preference before 12 months** (suggests a hemiplegia). Also **correct for prematurity up to 2 years** before labelling any delay. Growth is assessed alongside — see [[fcp1-growth-assessment]] and [[fcp1-pediatric-history]].',
  ],

  mechanism: {
    title: 'Screening development and acting on delay',
    steps: [
      { id: 's1', label: 'Screen all four domains against the child’s age' },
      { id: 's2', label: 'Separate average ages from limit ages (the red flags)', emphasis: 'key' },
      { id: 's3', label: 'Classify: isolated (one domain) vs global (two or more)' },
      { id: 's4', label: 'Correct for prematurity; check hearing & vision' },
      { id: 's5', label: 'Regression or a hard red flag → urgent referral', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Not walking independently by 18 months', mechanism: 'Crosses the gross-motor limit age and needs evaluation (including for neuromuscular causes)', significance: 'key' },
    { sign: 'No words by 18 months or no two-word phrases by 2.5 years', mechanism: 'A language red flag — always test hearing first as a reversible contributor', significance: 'key' },
    { sign: 'Established hand preference before 12 months', mechanism: 'Abnormally early dominance suggests relative weakness of the other side (possible hemiplegia)', significance: 'supportive' },
    { sign: 'Loss of skills the child previously had (regression)', mechanism: 'Regression is never a normal variant and points to a neurodegenerative or metabolic process', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Delay affecting two or more domains', meaning: 'Global developmental delay — arrange developmental assessment and consider genetic/metabolic causes' },
    { clue: 'Isolated speech and language delay', meaning: 'Test hearing first — undetected hearing loss is a common, reversible cause' },
    { clue: 'A child losing previously acquired skills', meaning: 'Regression — refer urgently for neurological and metabolic evaluation' },
    { clue: 'A preterm infant appearing “behind” for chronological age', meaning: 'Recalculate using corrected age before labelling any delay' },
  ],

  treatment: [
    { logic: 'Always correct for prematurity up to two years', detail: 'A baby born at 32 weeks assessed against chronological age will look delayed; using corrected age avoids over-diagnosis and unnecessary alarm.' },
    { logic: 'Refer regression and early hand preference promptly', detail: 'These two findings sit outside normal variation and warrant early specialist assessment rather than watchful waiting.' },
  ],

  mnemonics: [
    { hook: 'Four domains = Gross motor, Fine motor/vision, Language/hearing, Social', expansion: ['Screen every domain, not just the obvious one', 'Isolated speech delay → check hearing', 'Regression and early hand preference are always red flags'] },
  ],

  traps: [
    {
      questionCategory: 'Prematurity and milestones',
      wrongInstinct: 'Judge a preterm baby’s milestones against their chronological (birth-date) age',
      rightAnswer: 'Use corrected age (subtract the weeks of prematurity) up to about two years',
      why: 'Assessing a preterm infant by chronological age falsely labels normal development as delayed; corrected age is the fair benchmark until roughly two years.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 20-month-old is not yet walking and has no clear single words, but was smiling and sitting on time. He was born at term. The most appropriate next step is:',
      options: [
        { id: 'a', text: 'Reassure fully — this is within normal limits' },
        { id: 'b', text: 'Recognise this crosses gross-motor and language limit ages and arrange developmental assessment' },
        { id: 'c', text: 'Repeat only a growth chart' },
        { id: 'd', text: 'Wait until age three before any action' },
      ],
      answerId: 'b',
      explanation: 'Not walking by 18 months and no words by 18 months both breach limit ages, and involvement of more than one domain suggests global delay. In a term infant this warrants developmental assessment, with hearing testing for the language component.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 2-year-old who previously spoke several words and walked well has, over two months, stopped talking and become unsteady. This history is best described as:',
      options: [
        { id: 'a', text: 'Normal toddler variation' },
        { id: 'b', text: 'Isolated speech delay only' },
        { id: 'c', text: 'Developmental regression, which is always a red flag' },
        { id: 'd', text: 'An effect of prematurity' },
      ],
      answerId: 'c',
      explanation: 'Loss of previously acquired skills is regression. Unlike simple delay, regression is never a normal variant and mandates urgent neurological and metabolic evaluation.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1DevelopmentMilestones;
