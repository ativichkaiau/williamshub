import type { Lecture } from '../../lib/types';

export const fcp1PediatricHistory: Lecture = {
  id: 'fcp1-pediatric-history',
  title: 'The Paediatric History: Birth, Feeding, Development & Immunisation',
  system: 'clinical',
  source: 'L2 — Pediatric History Taking',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L2 Paediatric History' },
    { kind: 'mechanism', label: 'Adult history + extras' },
    { kind: 'exam', label: 'Birth · feeding · development' },
    { kind: 'investigation', label: 'Immunisation · growth' },
  ],

  highYield: [
    '**A paediatric history is the adult history plus specific extras:** the **birth/antenatal & perinatal** history, **feeding/nutrition**, **development**, **immunisation** and **growth**. These extras are where paediatric-specific diagnoses hide, so ask them in every child.',
    '**The history is usually collateral — the caregiver is the historian, the child is the patient.** Tailor your approach to the child’s age and involve the child where possible; the communication craft is covered in [[fcp1-pediatric-approach-communication]].',
    '**Birth history has three parts: antenatal, intrapartum and postnatal.** Ask about maternal health, infections and drugs in pregnancy; **gestation, mode of delivery, birth weight, resuscitation and APGAR**; then neonatal jaundice, feeding and any special-care admission.',
    '**Feeding, growth and development travel together.** Ask about breast vs formula, weaning and appetite (links to [[fcp1-nutritional-assessment]]), plot growth ([[fcp1-growth-assessment]]) and screen milestones ([[fcp1-development-milestones]]).',
    '**Add family and social detail that matters in children:** **consanguinity** and heritable disease, birth order, who is at home, schooling, and — always in the back of your mind — **safeguarding**. Confirm the **immunisation** record against the schedule.',
  ],

  mechanism: {
    title: 'Structuring the paediatric history',
    steps: [
      { id: 's1', label: 'Presenting complaint & HPI — usually from the caregiver' },
      { id: 's2', label: 'Birth history: antenatal → intrapartum → postnatal', emphasis: 'key' },
      { id: 's3', label: 'Feeding & nutrition history' },
      { id: 's4', label: 'Growth, development & immunisation status', emphasis: 'key' },
      { id: 's5', label: 'Family (consanguinity, heritable) & social — screen safeguarding', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Prematurity, low birth weight or a special-care admission', mechanism: 'Perinatal risk factors raise the likelihood of developmental and respiratory problems', significance: 'key' },
    { sign: 'Feeding difficulty or poor weight gain', mechanism: 'Feeding is an early, sensitive marker of illness and of failure to thrive', significance: 'key' },
    { sign: 'Incomplete immunisation for age', mechanism: 'Leaves the child exposed to vaccine-preventable disease and shifts the differential', significance: 'supportive' },
    { sign: 'A history of injury that is inconsistent or keeps changing', mechanism: 'A discrepant mechanism is a safeguarding red flag that must be actively considered', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Poor weight gain with a clear feeding difficulty', meaning: 'Triggers a failure-to-thrive assessment — plot serial growth ([[fcp1-growth-assessment]])' },
    { clue: 'Milestones that are behind expectation for age', meaning: 'Developmental delay — screen all four domains ([[fcp1-development-milestones]])' },
    { clue: 'Immunisation record incomplete for age', meaning: 'Arrange catch-up and consider vaccine-preventable illness in the differential' },
    { clue: 'Injury story that does not fit the pattern or changes on retelling', meaning: 'Consider non-accidental injury and follow safeguarding pathways' },
  ],

  treatment: [
    { logic: 'Take the birth history in every unwell child', detail: 'Antenatal, intrapartum and postnatal events explain a surprising amount of later paediatric pathology and are easy to skip.' },
    { logic: 'Corroborate the story with objective records', detail: 'Cross-check growth on the chart and immunisations on the child health record rather than relying on recall alone.' },
  ],

  mnemonics: [
    { hook: 'Paediatric extras: “Baby Feeds, Grows, Develops, Gets Immunised” → Birth, Feeding, Growth, Development, Immunisation', expansion: ['Birth = antenatal + intrapartum + postnatal', 'Feeding = breast/formula, weaning, appetite', 'Growth = plot it on the chart', 'Development = four domains', 'Immunisation = check the schedule'] },
  ],

  traps: [
    {
      questionCategory: 'Paediatric-specific history',
      wrongInstinct: 'Take the same history you would for an adult and stop there',
      rightAnswer: 'Add the birth, feeding, development, immunisation and growth history to every child',
      why: 'The paediatric-specific sections are exactly where diagnoses such as failure to thrive, developmental delay and vaccine-preventable disease are found; omitting them misses the point of a child’s presentation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 9-month-old is brought in with recurrent chest infections. Which additional part of the history is most specific to a paediatric assessment and most likely to reframe the problem?',
      options: [
        { id: 'a', text: 'Occupational history' },
        { id: 'b', text: 'Birth, feeding, growth and immunisation history' },
        { id: 'c', text: 'Alcohol history' },
        { id: 'd', text: 'Travel to endemic regions only' },
      ],
      answerId: 'b',
      explanation: 'The paediatric-specific extras — birth (prematurity, resuscitation), feeding and growth (failure to thrive) and immunisation status — are where the explanation for recurrent infections in an infant is most often found.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'When taking a history from a toddler brought by a parent, who is the patient and who is the primary historian?',
      options: [
        { id: 'a', text: 'The child is both patient and historian' },
        { id: 'b', text: 'The parent is the patient; the child is the historian' },
        { id: 'c', text: 'The child is the patient; the caregiver is usually the historian' },
        { id: 'd', text: 'The clinician is the historian; the parent is the patient' },
      ],
      answerId: 'c',
      explanation: 'In paediatrics the child is the patient but the account is usually collateral, given by the caregiver. Recognising this shapes how you gather and weigh the information — see the companion module on communication.',
      tests: 'exam',
    },
  ],
};

export default fcp1PediatricHistory;
