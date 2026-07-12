import type { Lecture } from '../../lib/types';

export const fcp1BleedingAssessmentTool: Lecture = {
  id: 'fcp1-bleeding-assessment-tool',
  title: 'The Bleeding History & Assessment Tools',
  system: 'clinical',
  source: 'L23 — Bleeding Tendency',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L23 Bleeding Tendency' },
    { kind: 'disease', label: 'Inherited vs acquired bleeding' },
    { kind: 'investigation', label: 'ISTH bleeding score' },
    { kind: 'mechanism', label: 'Developmental haemostasis' },
  ],

  highYield: [
    '**The bleeding history is the most important screen** — more useful than any single lab. Ask about **site, spontaneous vs provoked, recurrence, transfusion need, family history, drugs (antiplatelets, anticoagulants, NSAIDs) and menstrual loss**. The pattern also localises the defect — see [[fcp1-bleeding-primary-vs-secondary]].',
    '**A tendency is clinically significant when bleeding is out of proportion to the challenge, from multiple sites, recurrent, spontaneous, requires intervention/transfusion, or comes with a positive family history.**',
    '**Haemostatic challenges are the best stress test.** Uneventful **major surgery, dental extraction or childbirth** argues strongly against a significant inherited disorder; heavy bleeding after these raises it.',
    '**Standardised Bleeding Assessment Tools (for example the ISTH-BAT)** convert the history into a **bleeding score** that decides who needs laboratory testing — a **normal score has good negative predictive value**, useful for screening mild von Willebrand disease and platelet disorders. See [[fcp1-bleeding-coagulation-tests]].',
    '**Developmental haemostasis:** neonates and infants have physiologically **different (lower) vitamin K-dependent factor levels**, so **interpret coagulation tests against age-specific reference ranges**. Also separate **inherited (lifelong, familial)** from **acquired (new, drug- or illness-related)** bleeding. Cross-links: [[hhl-primary-hemostasis-disorders]], [[hhl-coagulation-disorders]].',
  ],

  mechanism: {
    title: 'From a structured history to targeted testing',
    steps: [
      { id: 's1', label: 'Bleeding history first: site, spontaneous vs provoked, recurrence, transfusion need', emphasis: 'key' },
      { id: 's2', label: 'Probe haemostatic challenges: surgery, dental extraction, childbirth, trauma, menses', emphasis: 'key' },
      { id: 's3', label: 'Score with a Bleeding Assessment Tool (ISTH-BAT) to decide who needs labs', emphasis: 'key' },
      { id: 's4', label: 'Separate inherited (lifelong + family history) from acquired (drugs, new illness)', emphasis: 'key' },
      { id: 's5', label: 'Interpret tests against age-specific ranges (developmental haemostasis in neonates)', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Bleeding out of proportion to the challenge, from multiple sites, recurrent', mechanism: 'A clinically significant bleeding tendency', significance: 'key' },
    { sign: 'Positive family history with a lifelong pattern', mechanism: 'Inherited disorder', significance: 'key' },
    { sign: 'New-onset bleeding with a relevant drug list or systemic illness', mechanism: 'Acquired cause', significance: 'key' },
    { sign: 'Survived major surgery or childbirth without abnormal bleeding', mechanism: 'Argues against a severe inherited disorder', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Structured bleeding history plus a Bleeding Assessment Tool score', meaning: 'Triages who actually needs laboratory testing' },
    { clue: 'CBC/platelet count with PT and aPTT', meaning: 'The baseline screen ordered after the history' },
    { clue: 'Convincing history but normal screening tests', meaning: 'Proceed to specific vWF, platelet-function and factor assays — screens miss mild disease' },
    { clue: 'A neonate or young infant', meaning: 'Interpret coagulation results against age-specific (developmental) reference ranges' },
  ],

  treatment: [
    { logic: 'Let the bleeding score and history direct testing and pre-procedure planning', detail: 'A high score prompts specific testing and haemostatic cover before surgery; a low score with normal tests is reassuring.' },
    { logic: 'Stop or adjust contributory drugs and treat acquired causes', detail: 'Review antiplatelets, anticoagulants and NSAIDs, and correct vitamin K deficiency, liver disease or thrombocytopenia.' },
  ],

  mnemonics: [
    { hook: 'History checklist: Site, Spontaneous or provoked, Surgery/dental, Family, Drugs, Menses', expansion: ['Cover each to judge significance'] },
    { hook: 'A normal response to a real haemostatic challenge is the best negative test', expansion: ['Uneventful surgery/childbirth reassures more than a single normal lab'] },
  ],

  traps: [
    {
      questionCategory: 'Significance of the bleeding history',
      wrongInstinct: 'Reassure the patient because the screening PT, aPTT and platelet count are all normal',
      rightAnswer: 'A convincing bleeding history warrants specific testing (for example for von Willebrand disease) even when the screens are normal',
      why: 'Standard screens miss mild von Willebrand disease and platelet function defects, so the history — not a normal screen — drives further testing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 25-year-old woman had heavy bleeding after a dental extraction and again after a tonsillectomy, has menorrhagia and a mother with similar problems. Her platelet count, PT and aPTT are all normal. The best next step is:',
      options: [
        { id: 'a', text: 'Reassure her that the normal screen excludes a bleeding disorder' },
        { id: 'b', text: 'Proceed to specific testing such as von Willebrand factor studies' },
        { id: 'c', text: 'Start empirical iron therapy alone' },
        { id: 'd', text: 'Repeat the same screening tests in one year' },
      ],
      answerId: 'b',
      explanation: 'A strong, familial, challenge-provoked bleeding history is clinically significant; normal screening tests do not exclude mild von Willebrand disease, so specific assays are indicated.',
      tests: 'lecture',
    },
    {
      id: 'q2',
      stem: 'A term neonate has a mildly prolonged PT and aPTT compared with adult reference values but no bleeding. The best interpretation is:',
      options: [
        { id: 'a', text: 'This always indicates an inherited coagulopathy' },
        { id: 'b', text: 'Compare the results against age-specific reference ranges (developmental haemostasis)' },
        { id: 'c', text: 'Immediately transfuse fresh frozen plasma' },
        { id: 'd', text: 'The tests must have been performed incorrectly' },
      ],
      answerId: 'b',
      explanation: 'Neonates have physiologically lower vitamin K-dependent factor levels, so coagulation results must be read against age-specific (developmental) reference ranges before calling them abnormal.',
      tests: 'investigation',
    },
  ],
};

export default fcp1BleedingAssessmentTool;
