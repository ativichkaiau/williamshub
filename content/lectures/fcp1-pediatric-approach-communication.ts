import type { Lecture } from '../../lib/types';

export const fcp1PediatricApproachCommunication: Lecture = {
  id: 'fcp1-pediatric-approach-communication',
  title: 'Approaching the Child: Communication with Children & Families',
  system: 'clinical',
  source: 'L2 — Pediatric History Taking',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L2 Paediatric History' },
    { kind: 'mechanism', label: 'Triadic consultation' },
    { kind: 'exam', label: 'End-of-bed assessment' },
    { kind: 'investigation', label: 'HEADSSS · assent' },
  ],

  highYield: [
    '**The paediatric consultation is triadic: clinician + caregiver + child.** The **parent is usually the historian** and the **child is the patient**; good communication keeps both engaged and gives you the observation time that is diagnostic in itself. It complements [[fcp1-pediatric-history]].',
    '**Match your approach to the developmental stage.** Get down to the child’s level, use play and a warm manner, and examine **opportunistically** — take the chance while the child is calm, and leave the **most distressing parts (ears, throat) until last**.',
    '**The “end-of-the-bed” assessment is powerful.** A child who is playing, curious and consolable is reassuring; a child who is **listless, poorly responsive or will not engage** is worrying — trust this alongside the numbers ([[fcp1-development-milestones]] frames what is age-appropriate).',
    '**Take parental concern seriously.** A carer saying the child is “just not himself” is a meaningful signal and is repeatedly shown to predict serious illness. Explore their **ideas, concerns and expectations**, as with any consultation.',
    '**Adolescents need a different frame:** offer **confidential time alone**, screen psychosocial risk with **HEADSSS**, and work with **consent and assent** — parental consent plus the child’s assent, always within **safeguarding** limits.',
  ],

  mechanism: {
    title: 'Engaging the child and family through the consultation',
    steps: [
      { id: 's1', label: 'Engage both child and family: introduce, play, put the child at ease' },
      { id: 's2', label: 'Tailor communication to the developmental stage', emphasis: 'key' },
      { id: 's3', label: 'Let the caregiver give the story while you observe the child' },
      { id: 's4', label: 'Examine opportunistically — least-distressing parts last' },
      { id: 's5', label: 'Adolescents: confidential HEADSSS, assent & safeguarding', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A child who plays, makes eye contact and is easily consoled', mechanism: 'Normal engagement and consolability are reassuring markers of a well child', significance: 'key' },
    { sign: 'A listless, poorly responsive child who will not engage', mechanism: 'Reduced interaction is an early sign of a seriously unwell child', significance: 'key' },
    { sign: 'Parental instinct that the child is “not right”', mechanism: 'Carer concern is a validated predictor of significant illness', significance: 'supportive' },
    { sign: 'Escalating distress with intrusive examination', mechanism: 'Explains why ear and throat examination are deliberately left until last', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A toddler lying still, avoiding eye contact and not playing', meaning: 'A worrying picture — escalate assessment for serious illness rather than reassure' },
    { clue: 'An adolescent seen alone who discloses risk behaviour', meaning: 'Work through the HEADSSS domains and manage within confidentiality and its limits' },
    { clue: 'A parent repeatedly attending with a well-looking child', meaning: 'Explore underlying parental anxiety and their ideas, concerns and expectations' },
    { clue: 'A distressed infant during examination', meaning: 'Examine opportunistically when calm and defer the throat and ears to the end' },
  ],

  treatment: [
    { logic: 'Examine opportunistically, distressing parts last', detail: 'Auscultate and palpate while the child is settled; a screaming child gives an unreliable examination, so save the ears and throat for the end.' },
    { logic: 'Balance confidentiality with safeguarding in adolescents', detail: 'Offer confidential time and honesty about its limits: you keep confidences unless there is risk of serious harm, which must be acted on.' },
  ],

  mnemonics: [
    { hook: 'Adolescent screen HEADSSS = Home, Education/employment, Activities, Drugs, Sexuality, Suicide/mood, Safety', expansion: ['Interview the adolescent alone for part of the visit', 'Start with less sensitive domains (Home) and move inward', 'Frame confidentiality and its safeguarding limits up front'] },
  ],

  traps: [
    {
      questionCategory: 'Paediatric examination sequence',
      wrongInstinct: 'Examine the child head-to-toe in a fixed order, starting with ears and throat',
      rightAnswer: 'Examine opportunistically while the child is calm and leave the ears and throat until last',
      why: 'A distressing first manoeuvre makes the child cry and ruins the rest of the examination; the calm, opportunistic, distressing-parts-last approach yields far more reliable signs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 2-year-old is brought with fever. When you enter, the child is lying quietly on the parent, not playing, and does not react to your toy. The most appropriate interpretation is:',
      options: [
        { id: 'a', text: 'Reassuring — the child is calm and cooperative' },
        { id: 'b', text: 'Concerning — reduced engagement suggests a potentially seriously unwell child' },
        { id: 'c', text: 'Irrelevant to the assessment' },
        { id: 'd', text: 'A sign the child is simply shy' },
      ],
      answerId: 'b',
      explanation: 'A febrile toddler who is listless and will not engage is displaying a worrying end-of-the-bed assessment. Reduced interaction and consolability are early markers of serious illness and warrant escalation, not reassurance.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A 15-year-old attends with abdominal pain. Which approach best supports an accurate and safe adolescent consultation?',
      options: [
        { id: 'a', text: 'Insist a parent remains present for the entire consultation' },
        { id: 'b', text: 'Offer confidential time alone, use a HEADSSS screen, and explain the limits of confidentiality' },
        { id: 'c', text: 'Avoid any psychosocial questions to save time' },
        { id: 'd', text: 'Proceed without any parental involvement or consent' },
      ],
      answerId: 'b',
      explanation: 'Adolescents should be offered confidential time, screened psychosocially with HEADSSS, and told honestly that confidentiality is kept unless there is a risk of serious harm. This balances autonomy, assent and safeguarding.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1PediatricApproachCommunication;
