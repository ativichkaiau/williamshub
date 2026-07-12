import type { Lecture } from '../../lib/types';

export const ichHealthPromotion: Lecture = {
  id: 'ich-health-promotion',
  title: 'Health Promotion & the Ottawa Charter',
  system: 'community',
  source: 'L1 — Health Promotion & Disease Prevention',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L1 Health Promotion' },
    { kind: 'mechanism', label: 'Ottawa Charter · 5 areas' },
    { kind: 'exam', label: 'Promotion vs education' },
    { kind: 'treatment', label: 'Settings approach' },
  ],

  highYield: [
    '**WHO definition of health (1948):** “a state of complete physical, mental and social well-being and not merely the absence of disease or infirmity.” This positive, holistic definition is what health **promotion** works toward — it targets well-being, not just avoiding illness.',
    '**Health promotion (Ottawa Charter, 1986)** = “the process of enabling people to increase control over, and to improve, their health.” It is broader than prevention: it acts on the wider determinants of health ([[ich-determinants-of-health]]) and shifts control to communities, not just to clinicians.',
    '**The Ottawa Charter’s 5 action areas** are the most-tested list: **build healthy public policy**, **create supportive environments**, **strengthen community action**, **develop personal skills**, and **reorient health services** (from cure toward prevention/promotion).',
    '**Health promotion ≠ health education.** Health **education** (knowledge, personal skills) is only **one** of the five areas — it changes what individuals know and do. Health **promotion** wraps education in **policy, environmental and organisational** supports so the healthy choice becomes the easy choice.',
    '**Three core strategies underpin the Charter: Advocate, Enable, Mediate.** The **settings approach** delivers promotion where people live and work — **Healthy Cities**, health-promoting **schools**, **workplaces** and **hospitals** — complementing the population thinking in [[ich-disease-prevention-strategies]].',
  ],

  mechanism: {
    title: 'Ottawa Charter: from prerequisites → 3 strategies → 5 action areas → increased control over health',
    steps: [
      { id: 's1', label: 'Start from the prerequisites for health (peace, food, income, shelter, equity)' },
      { id: 's2', label: 'Apply the 3 strategies: Advocate · Enable · Mediate', emphasis: 'key' },
      { id: 's3', label: 'Act across the 5 areas (policy, environments, community, skills, services)', emphasis: 'key' },
      { id: 's4', label: 'Deliver through settings (cities, schools, workplaces, hospitals)' },
      { id: 's5', label: 'People gain control over the determinants → improved health', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Health promotion enables control over determinants; it is not only disease prevention', mechanism: 'It works “upstream” on the conditions that shape health', significance: 'key' },
    { sign: 'The 5 action areas span policy, environments, community, personal skills, services', mechanism: 'Only one (personal skills) is health education — the rest are structural', significance: 'key' },
    { sign: 'Reorienting health services means shifting resources toward prevention/promotion', mechanism: 'Moves the system beyond curative, hospital-centred care', significance: 'supportive' },
    { sign: 'The settings approach places promotion where people live, learn and work', mechanism: 'Healthy Cities / schools / workplaces embed health into daily environments', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A ban on smoking in all public buildings plus tobacco taxation', meaning: 'Building healthy public policy — a structural Ottawa action area, not education' },
    { clue: 'A leaflet and classroom talk teaching teenagers about a balanced diet', meaning: 'Health education (develop personal skills) — one area only, works on the individual' },
    { clue: 'A city redesigns streets with cycle lanes, parks and safe crossings', meaning: 'Creating supportive environments — makes the healthy choice the easy choice' },
    { clue: 'A hospital retrains staff and funds a community diabetes-prevention clinic', meaning: 'Reorienting health services toward promotion and prevention' },
  ],

  treatment: [
    { logic: 'Classify any intervention by Ottawa action area before calling it “promotion”', detail: 'Ask whether it builds policy, shapes environments, mobilises community, develops personal skills, or reorients services — most exam distractors are pure education mislabelled as full promotion.' },
    { logic: 'Prefer structural, settings-based action for population reach', detail: 'Policy and environmental change reach everyone passively and durably, whereas education depends on each person acting — pair the two ([[ich-social-determinants-equity]]).' },
  ],

  mnemonics: [
    { hook: 'Ottawa 5 areas — “Please Every Community, Skill Services”', expansion: ['Public policy (build healthy)', 'Environments (create supportive)', 'Community action (strengthen)', 'Skills (develop personal)', 'Services (reorient health)'] },
    { hook: 'Charter strategies = A-E-M: Advocate, Enable, Mediate', expansion: ['Advocate for health politically', 'Enable people to reach their potential', 'Mediate between sectors and interests'] },
  ],

  traps: [
    {
      questionCategory: 'Health promotion versus health education',
      wrongInstinct: 'Health promotion and health education are the same thing',
      rightAnswer: 'Health education (personal skills/knowledge) is just ONE of the five Ottawa action areas; health promotion also uses policy, environments, community action and service reorientation',
      why: 'Treating them as identical ignores the structural, upstream half of the Charter — the part that changes the determinants rather than the individual.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A government passes a law banning trans-fats and mandating front-of-pack nutrition labels. Which Ottawa Charter action area does this best represent?',
      options: [
        { id: 'a', text: 'Develop personal skills' },
        { id: 'b', text: 'Build healthy public policy' },
        { id: 'c', text: 'Reorient health services' },
        { id: 'd', text: 'Strengthen community action' },
      ],
      answerId: 'b',
      explanation: 'Legislation and regulation that make the environment healthier for everyone is “building healthy public policy.” Developing personal skills would be teaching individuals; this acts structurally across the whole population.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which statement best distinguishes health promotion from health education?',
      options: [
        { id: 'a', text: 'They are interchangeable terms for the same activity' },
        { id: 'b', text: 'Health education is broader and includes health promotion' },
        { id: 'c', text: 'Health promotion is broader, combining education with policy, environmental and organisational supports' },
        { id: 'd', text: 'Health promotion applies only to individuals, education only to populations' },
      ],
      answerId: 'c',
      explanation: 'Health education (developing personal skills/knowledge) is one component of health promotion. Promotion is the wider process that also builds policy, supportive environments, community action and reoriented services.',
      tests: 'exam',
    },
  ],
};

export default ichHealthPromotion;
