import type { Lecture } from '../../lib/types';

export const fcp1AnemiaApproachWorkup: Lecture = {
  id: 'fcp1-anemia-approach-workup',
  title: 'Clinical Approach to Anemia — History, Signs & Staged Workup',
  system: 'clinical',
  source: 'L21 — Approach to Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L21 Approach to Anemia' },
    { kind: 'disease', label: 'Symptomatic anemia' },
    { kind: 'exam', label: 'Pallor · flow murmur' },
    { kind: 'investigation', label: 'CBC · reticulocyte · smear' },
  ],

  highYield: [
    '**Symptoms track the rate of onset**, not just the Hb: a slowly falling chronic anemia is well tolerated, while an **acute drop** causes tachycardia, dyspnea and haemodynamic compromise. Grade severity by symptoms and stability.',
    '**Signs:** conjunctival and palmar **pallor**, tachycardia and a **systolic flow murmur** are general; targeted signs point to a cause — **koilonychia/glossitis** (iron, see [[fcp1-anemia-microcytic]]), **jaundice + splenomegaly** (hemolysis, see [[fcp1-splenomegaly-approach]]), glossitis with neuropathy (B12, see [[hhl-b12-folate-megaloblastic]]).',
    '**History clues** decide the workup: diet, **menstrual and GI blood loss**, drugs, alcohol, family history and ethnicity (thalassemia), and any chronic disease.',
    '**Staged, not shotgun, testing:** a **CBC with indices (MCV, RDW), a reticulocyte count and a peripheral smear come first** and direct every targeted test that follows. Classification logic is in [[fcp1-anemia-classification]] and [[hhl-anemia-approach-indices]].',
    '**Red flags:** haemodynamic instability or active bleeding, anemia with **weight loss or lymphadenopathy** (malignancy — see [[fcp1-lymphadenopathy-approach]]), and **pancytopenia** (marrow failure) all change the pace and destination of the workup.',
  ],

  mechanism: {
    title: 'From bedside to targeted testing',
    steps: [
      { id: 's1', label: 'Confirm and grade anemia; gauge symptoms and rate of onset', emphasis: 'key' },
      { id: 's2', label: 'History: blood loss, diet, drugs, family/ethnicity, chronic disease', emphasis: 'key' },
      { id: 's3', label: 'First-line labs: CBC + MCV/RDW + reticulocyte + smear', emphasis: 'key' },
      { id: 's4', label: 'Targeted tests guided by MCV + reticulocyte (iron, B12/folate, hemolysis screen)', emphasis: 'key' },
      { id: 's5', label: 'Instability or active bleeding → resuscitate & transfuse before the workup', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Conjunctival and palmar pallor, tachycardia, systolic flow murmur', mechanism: 'General signs of anemia and its adaptation', significance: 'key' },
    { sign: 'Koilonychia, glossitis, angular cheilitis', mechanism: 'Iron deficiency', significance: 'supportive' },
    { sign: 'Jaundice with splenomegaly', mechanism: 'Hemolytic anemia', significance: 'key' },
    { sign: 'Lymphadenopathy, weight loss, or bone pain', mechanism: 'Malignant or marrow-infiltrative cause — a red flag', significance: 'key' },
  ],

  investigations: [
    { clue: 'CBC with MCV, RDW, reticulocyte and peripheral smear', meaning: 'The first-line panel that directs everything else' },
    { clue: 'Microcytic vs macrocytic on the MCV', meaning: 'Microcytic → iron studies ± Hb typing; macrocytic → B12/folate' },
    { clue: 'High reticulocyte with haemolytic markers', meaning: 'Hemolysis screen — LDH, haptoglobin, bilirubin, direct antiglobulin test' },
    { clue: 'Pancytopenia or blasts on the smear', meaning: 'Bone marrow examination for marrow failure or malignancy' },
  ],

  treatment: [
    { logic: 'Resuscitate first if unstable or bleeding, then treat the cause', detail: 'Transfuse for severe or symptomatic anemia; otherwise correct the specific deficiency or the underlying disease.' },
    { logic: 'Replace the confirmed deficiency and check the response', detail: 'Iron, B12 or folate as indicated; a rising reticulocyte at about one week confirms the marrow is responding.' },
  ],

  mnemonics: [
    { hook: 'CBC + reticulocyte + smear before anything else', expansion: ['The indices and reticulocyte funnel the differential', 'Only then order targeted tests'] },
    { hook: 'Fatigue + pallor + flow murmur = look for anemia', expansion: ['General signs prompt the CBC', 'Targeted signs suggest the cause'] },
  ],

  traps: [
    {
      questionCategory: 'Staged workup',
      wrongInstinct: 'Order iron studies, B12, folate and a marrow all at once',
      rightAnswer: 'Get the MCV, reticulocyte and smear first — they direct which targeted test is actually needed',
      why: 'Shotgun testing wastes resources and can mislead; the indices and reticulocyte response funnel the differential efficiently.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient presents with fatigue and pallor and is confirmed to be anemic. Before ordering any specific assay, which set of tests best directs the workup?',
      options: [
        { id: 'a', text: 'Serum iron, B12 and folate together' },
        { id: 'b', text: 'CBC indices (MCV, RDW), reticulocyte count and peripheral smear' },
        { id: 'c', text: 'Bone marrow biopsy' },
        { id: 'd', text: 'Hemoglobin electrophoresis' },
      ],
      answerId: 'b',
      explanation: 'The MCV and RDW, the reticulocyte count and the smear are the first-line panel that classifies the anemia and directs which targeted tests are actually needed.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A young man arrives with brisk ongoing haematemesis, Hb 6 g/dL, heart rate 130 and a systolic blood pressure of 85 mmHg. The most appropriate immediate priority is:',
      options: [
        { id: 'a', text: 'Send iron studies and await the result' },
        { id: 'b', text: 'Arrange an outpatient reticulocyte count' },
        { id: 'c', text: 'Resuscitate with airway/breathing/circulation support and transfuse' },
        { id: 'd', text: 'Start oral iron therapy' },
      ],
      answerId: 'c',
      explanation: 'An unstable, actively bleeding patient is resuscitated and transfused first; the detailed anemia classification follows once the patient is stabilised.',
      tests: 'treatment',
    },
  ],
};

export default fcp1AnemiaApproachWorkup;
