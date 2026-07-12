import type { Lecture } from '../../lib/types';

export const fcp1FeverApproachDifferential: Lecture = {
  id: 'fcp1-fever-approach-differential',
  title: 'Approach to Acute Fever',
  system: 'clinical',
  source: 'L6 — Fever',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L6 Fever' },
    { kind: 'disease', label: 'Infective vs non-infective' },
    { kind: 'investigation', label: 'Cultures before antibiotics' },
    { kind: 'treatment', label: 'Sepsis recognition' },
  ],

  highYield: [
    '**Acute fever (days) is infective until proven otherwise — but always screen the non-infective causes:** malignancy, autoimmune/connective-tissue disease, **drug fever**, thromboembolism (DVT/PE), tissue infarction, transfusion reaction, and endocrine (thyroid storm). Build on the thermoregulation basics → [[fcp1-fever-pathophysiology]].',
    '**First split: localising vs undifferentiated.** A localising symptom or sign (dysuria, productive cough with crackles, flank pain, cellulitis) targets the workup. Undifferentiated fever needs a broad screen plus reassessment — do not anchor early.',
    '**The danger is sepsis.** Fever PLUS any of hypotension, altered mentation, tachypnoea (RR 22 or more), mottled/cool skin or a rising lactate means septic (distributive) shock → resuscitate now → [[fcp1-shock-management]], and recognise the profile in [[fcp1-shock-classification]]. A **non-blanching petechial/purpuric rash with fever is meningococcaemia** until proven otherwise.',
    '**History that changes the differential:** travel (malaria, dengue, typhoid), animal/insect exposure, immunosuppression/neutropenia, recent surgery or lines, new drugs, and sick contacts. **Take blood cultures BEFORE giving antibiotics** — antibiotics first can sterilise the sample and lose the organism.',
    '**First-line tests:** CBC with differential (neutrophilia/left shift favours bacterial; atypical lymphocytes favour viral), CRP/procalcitonin, urinalysis, CXR, blood cultures, and a **malaria film in any returning traveller**. Add lactate if the patient looks unwell. If fever persists beyond about three weeks and stays undiagnosed → [[fcp1-fever-of-unknown-origin]].',
  ],

  mechanism: {
    title: 'A structured approach to the febrile patient',
    steps: [
      { id: 's1', label: 'Confirm true fever + check haemodynamics/mentation', emphasis: 'key' },
      { id: 's2', label: 'Screen for sepsis red flags → resuscitate if present', emphasis: 'danger' },
      { id: 's3', label: 'Localise: system-by-system symptom and exam screen', emphasis: 'key' },
      { id: 's4', label: 'Infective vs non-infective (drug, clot, autoimmune, malignancy)', emphasis: 'normal' },
      { id: 's5', label: 'First tests: cultures before antibiotics, CBC, urine, CXR', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Non-blanching petechial/purpuric rash with fever', mechanism: 'Meningococcaemia/septic vasculitis — an emergency', significance: 'key' },
    { sign: 'Neck stiffness, photophobia, altered mentation', mechanism: 'Meningitis/CNS infection', significance: 'key' },
    { sign: 'Localising sign (crackles, CVA tenderness, dysuria, hot joint)', mechanism: 'Points to the infected organ system', significance: 'supportive' },
    { sign: 'Relative bradycardia', mechanism: 'Typhoid or intracellular organism', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fever + hypotension + lactate above 2 mmol/L', meaning: 'Septic shock — start the sepsis bundle immediately → [[fcp1-shock-management]]' },
    { clue: 'Neutrophilia with left shift', meaning: 'Favours bacterial infection (take cultures first)' },
    { clue: 'Fever in a returning traveller', meaning: 'Thick and thin films for malaria; consider dengue/typhoid' },
    { clue: 'Fever with no localising features after basic tests', meaning: 'Undifferentiated fever — reassess, repeat exam, broaden screen' },
  ],

  treatment: [
    { logic: 'If septic: antibiotics + fluids within the first hour', detail: 'Sepsis Six — cultures, broad-spectrum antibiotics, IV fluids, lactate, oxygen, urine output. Source control follows.' },
    { logic: 'If stable and localised: targeted therapy', detail: 'Treat the identified focus; avoid blind antibiotics for undifferentiated viral-looking illness.' },
    { logic: 'Take cultures before antibiotics', detail: 'Preserves the chance to identify the organism and de-escalate later.' },
  ],

  mnemonics: [
    { hook: 'Fever + hypoTENSION + PURPURA = act NOW', expansion: ['Think meningococcaemia/septic shock', 'Cultures then antibiotics within the hour'] },
  ],

  traps: [
    {
      questionCategory: 'Sequencing of the workup',
      wrongInstinct: 'Give broad-spectrum antibiotics first, then draw cultures once they are running',
      rightAnswer: 'Draw blood cultures BEFORE the first antibiotic dose (as long as this does not delay treatment in septic shock)',
      why: 'Antibiotics can sterilise the blood within minutes and cost you the microbiological diagnosis and later de-escalation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 19-year-old presents with fever, headache, hypotension and a rapidly spreading non-blanching purpuric rash. After securing access and sending cultures, the most appropriate immediate action is:',
      options: [
        { id: 'a', text: 'Await the blood film and CRP before treating' },
        { id: 'b', text: 'Give IV fluids and empiric antibiotics without delay' },
        { id: 'c', text: 'Prescribe oral antipyretics and review in the morning' },
        { id: 'd', text: 'Arrange outpatient dermatology follow-up for the rash' },
      ],
      answerId: 'b',
      explanation: 'Fever, hypotension and a non-blanching purpuric rash indicate meningococcaemia with septic shock. After cultures, immediate IV fluids and empiric antibiotics are life-saving — do not wait for results.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'In a stable patient with acute undifferentiated fever, why should blood cultures be taken before the first dose of antibiotics?',
      options: [
        { id: 'a', text: 'Antibiotics raise the body temperature and confound the reading' },
        { id: 'b', text: 'Cultures drawn after antibiotics are more likely to be falsely positive' },
        { id: 'c', text: 'Antibiotics can sterilise the blood and lose the causative organism' },
        { id: 'd', text: 'It is required to calculate the qSOFA score' },
      ],
      answerId: 'c',
      explanation: 'Even a single antibiotic dose can sterilise blood cultures, removing the chance to identify the organism and de-escalate therapy. Cultures should precede antibiotics unless doing so would dangerously delay treatment.',
      tests: 'investigation',
    },
  ],
};

export default fcp1FeverApproachDifferential;
