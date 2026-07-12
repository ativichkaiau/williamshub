import type { Lecture } from '../../lib/types';

export const fcp1TraumaPrimarySurvey: Lecture = {
  id: 'fcp1-trauma-primary-survey',
  title: 'Trauma Primary Survey (ABCDE)',
  system: 'clinical',
  source: 'L10 — Approach to the Trauma Patient',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L10 Trauma' },
    { kind: 'mechanism', label: 'ABCDE primary survey' },
    { kind: 'disease', label: 'Tension pneumothorax · tamponade' },
    { kind: 'treatment', label: 'Decompress · haemorrhage control' },
  ],

  highYield: [
    'The primary survey is **ABCDE** — **Airway** (with C-spine control), **Breathing**, **Circulation** (with haemorrhage control), **Disability**, **Exposure** — worked in order, treating each life threat before moving on. Then proceed to [[fcp1-trauma-secondary-survey]] and [[fcp1-trauma-resuscitation]].',
    '**Airway:** a patient talking clearly has a patent airway; look for stridor, blood, vomit or facial/airway burns, and protect the **C-spine** throughout. A **GCS ≤ 8** cannot protect the airway → definitive airway.',
    '**Breathing:** find and treat the immediately lethal chest injuries — **tension pneumothorax** (needle/finger decompression **before** the CXR), open pneumothorax, massive haemothorax and flail chest.',
    '**Circulation: haemorrhage is the leading cause of preventable trauma death** — control external bleeding by pressure, gain two large-bore IVs, and hunt the five sites of major loss (chest, abdomen, pelvis, long bones, and "on the floor"). See [[fcp1-shock-classification]] and [[fcp1-shock-management]].',
    '**Disability:** GCS, pupils and glucose. **Exposure:** fully undress, log-roll and prevent hypothermia. The **golden hour** — definitive control of bleeding early — saves lives; reassess from A after any deterioration.',
  ],

  mechanism: {
    title: 'ABCDE — treat each threat before moving on',
    steps: [
      { id: 's1', label: 'Airway + C-spine control (talking = patent)', emphasis: 'key' },
      { id: 's2', label: 'Breathing — tension pneumothorax = immediate decompression', emphasis: 'danger' },
      { id: 's3', label: 'Circulation — control haemorrhage (top preventable death)', emphasis: 'danger' },
      { id: 's4', label: 'Disability — GCS, pupils, glucose', emphasis: 'key' },
      { id: 's5', label: 'Exposure — undress, log-roll, keep warm', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Tracheal deviation, absent breath sounds, hyperresonance, distended neck veins', mechanism: 'Tension pneumothorax — obstructive shock', significance: 'key' },
    { sign: 'Distended neck veins + muffled heart sounds + hypotension (Beck triad)', mechanism: 'Cardiac tamponade', significance: 'key' },
    { sign: 'Cool, pale, tachycardic, narrow pulse pressure', mechanism: 'Hypovolaemic (haemorrhagic) shock', significance: 'key' },
    { sign: 'GCS ≤ 8, no gag', mechanism: 'Cannot protect the airway → intubate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Absent breath sounds + hypotension + distended neck veins', meaning: 'Tension pneumothorax — decompress immediately, do not wait for CXR' },
    { clue: 'Hypotension unresponsive to fluids + muffled heart sounds', meaning: 'Cardiac tamponade (or tension pneumothorax) — obstructive cause' },
    { clue: 'Positive FAST / free fluid in an unstable patient', meaning: 'Intra-abdominal haemorrhage → theatre, not the scanner' },
    { clue: 'GCS ≤ 8 or unable to protect the airway', meaning: 'Definitive airway (rapid-sequence intubation)' },
  ],

  treatment: [
    { logic: 'Treat life threats as you find them', detail: 'A tension pneumothorax is decompressed the moment it is found — the survey does not move to C until B is secured.' },
    { logic: 'Stop the bleeding first', detail: 'External pressure or tourniquet, splint the pelvis and long bones, and move exsanguinating patients to theatre — see [[fcp1-trauma-resuscitation]].' },
  ],

  mnemonics: [
    { hook: 'ABCDE — Airway, Breathing, Circulation, Disability, Exposure', expansion: ['C-spine control runs through A', 'Catastrophic haemorrhage controlled first (C-ABCDE)', 'Reassess from A after any deterioration'] },
  ],

  traps: [
    {
      questionCategory: 'Chest trauma with shock',
      wrongInstinct: 'Order a portable CXR to confirm a tension pneumothorax before treating it',
      rightAnswer: 'Tension pneumothorax is a clinical diagnosis — immediate needle or finger thoracostomy',
      why: 'Waiting for imaging in obstructive shock can be fatal; decompress on the clinical signs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A man thrown from a motorbike has distended neck veins, tracheal deviation to the left, absent breath sounds with hyperresonance on the right, and BP 80/50. The immediate next step is:',
      options: [
        { id: 'a', text: 'Portable chest X-ray to confirm the diagnosis' },
        { id: 'b', text: 'Right-sided needle or finger thoracostomy' },
        { id: 'c', text: 'Pericardiocentesis' },
        { id: 'd', text: 'CT chest with contrast' },
      ],
      answerId: 'b',
      explanation: 'These are the signs of a tension pneumothorax, an obstructive shock treated by immediate decompression on clinical grounds — do not delay for imaging.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'During the primary survey, which is the leading cause of preventable death in trauma and therefore the priority in "C"?',
      options: [
        { id: 'a', text: 'Airway obstruction' },
        { id: 'b', text: 'Haemorrhage' },
        { id: 'c', text: 'Head injury' },
        { id: 'd', text: 'Hypothermia' },
      ],
      answerId: 'b',
      explanation: 'Haemorrhage is the leading cause of preventable trauma death; circulation focuses on finding and controlling major blood loss.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1TraumaPrimarySurvey;
