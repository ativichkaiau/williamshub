import type { Lecture } from '../../lib/types';
import { CARDIAC_BIOMARKERS } from '../../lib/figures';

export const cardiacBiomarkersAcs: Lecture = {
  id: 'cardiac-biomarkers-acs',
  title: 'Cardiac Biomarkers in Acute Coronary Syndrome',
  system: 'cardiovascular',
  source: 'L11 — Biomarkers in ACS',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L11 Biomarkers' },
    { kind: 'mechanism', label: 'Release kinetics' },
    { kind: 'exam', label: 'Troponin · CK-MB' },
  ],

  highYield: [
    '**Cardiac biomarkers are proteins released from dying myocytes — they confirm myocardial injury/infarction** and, with symptoms + ECG, define an MI. **Troponin is the gold standard** (most sensitive and specific).',
    '**Cardiac troponin (cTnI / cTnT):** rises **~3–4 hours** after injury, peaks ~24 h, and **stays elevated for 7–10 days.** Its sensitivity/specificity make it the diagnostic marker; **high-sensitivity troponin (hs-cTn)** enables **rapid rule-in/rule-out** with serial measurements (e.g. 0 h and 1–3 h). A **rise and/or fall** on serial testing distinguishes acute injury from chronic elevation.',
    '**CK-MB** rises and falls faster (normal by ~2–3 days), so it is less used now but **useful for detecting RE-infarction** (a new rise after troponin is already high). **Myoglobin** is the earliest to rise but is **non-specific** (also from skeletal muscle).',
    '**Troponin is sensitive but not perfectly specific for ACS** — it rises in **any myocardial injury**: PE, sepsis, myocarditis, heart failure, renal failure, tachyarrhythmia. So troponin must be interpreted **with the clinical picture and ECG**, not in isolation.',
    '**Other cardiac markers (not for ACS diagnosis):** **BNP / NT-proBNP** — released by stretched ventricles → marker of **heart failure** (and prognosis); **D-dimer** — sensitive but non-specific, used to **rule out** PE/DVT when pretest probability is low.',
  ],

  mechanism: {
    title: 'Necrotic myocytes leak markers with characteristic timing',
    steps: [
      { id: 's1', label: 'Troponin = gold standard (most sensitive + specific)', emphasis: 'key' },
      { id: 's2', label: 'Troponin: rises ~3–4 h, peaks ~24 h, stays ↑ 7–10 days', emphasis: 'key' },
      { id: 's3', label: 'hs-troponin + serial testing → rapid rule-in/rule-out (rise/fall)', emphasis: 'key' },
      { id: 's4', label: 'CK-MB falls fast → detects re-infarction; myoglobin earliest/non-specific' },
      { id: 's5', label: 'Troponin ↑ in non-ACS injury too → interpret clinically', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Elevated troponin with a rise/fall pattern + chest pain + ECG changes', mechanism: 'Acute myocardial infarction', significance: 'key' },
    { sign: 'Troponin still positive 7 days after MI', mechanism: 'Prolonged troponin elevation (7–10 days)', significance: 'key' },
    { sign: 'New CK-MB rise after troponin already high', mechanism: 'Re-infarction (CK-MB clears faster)', significance: 'supportive' },
    { sign: 'Raised troponin in PE/sepsis/renal failure', mechanism: 'Non-ACS myocardial injury (sensitive, not specific)', significance: 'key' },
    { sign: 'Elevated BNP/NT-proBNP', mechanism: 'Ventricular stretch → marker of heart failure', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The most sensitive and specific marker of myocardial injury', meaning: 'Cardiac troponin (cTnI/cTnT)' },
    { clue: 'Marker best for detecting re-infarction', meaning: 'CK-MB (clears faster than troponin)' },
    { clue: 'Marker of heart failure (ventricular stretch)', meaning: 'BNP / NT-proBNP' },
    { clue: 'Why a single troponin can\'t confirm ACS', meaning: 'Need a rise/fall + clinical context (troponin rises in many conditions)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Serial troponin drives the diagnosis and triage of chest pain (rapid rule-out protocols) and defines NSTEMI vs unstable angina. It integrates with the ECG ([[ecg-systematic-interpretation]]) and clinical picture. ACS management is covered in HCVS-2 ([[acs-management]]).' },
  ],

  mnemonics: [
    { hook: 'Troponin = "Tops it all" (sensitive + specific); up 3–4 h, lasts 7–10 days', expansion: ['CK-MB = re-infarction; myoglobin earliest but non-specific'] },
    { hook: 'BNP = "Balloon (stretch) → failure"; D-dimer = rule OUT clots', expansion: ['Not ACS-specific'] },
  ],

  traps: [
    {
      questionCategory: 'Specificity of troponin',
      wrongInstinct: 'An elevated troponin always means an acute coronary syndrome (heart attack)',
      rightAnswer: 'Troponin is sensitive for myocardial INJURY but not specific for ACS — it also rises in PE, sepsis, myocarditis, HF, and renal failure; interpret with the clinical picture and a rise/fall pattern',
      why: 'Troponin marks myocyte injury from any cause; the diagnosis of MI requires the right context (symptoms, ECG) plus a dynamic rise/fall.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The preferred biomarker for diagnosing acute myocardial infarction, owing to its high sensitivity and specificity, is:',
      options: [
        { id: 'a', text: 'Myoglobin' },
        { id: 'b', text: 'CK-MB' },
        { id: 'c', text: 'Cardiac troponin' },
        { id: 'd', text: 'BNP' },
      ],
      answerId: 'c',
      explanation: 'Cardiac troponin (I or T) is the gold-standard marker — most sensitive and specific for myocardial injury; it rises ~3–4 h after onset and remains elevated for 7–10 days.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Three days after an MI, a patient develops recurrent chest pain. Which marker is most useful to detect re-infarction, given that troponin is still elevated?',
      options: [
        { id: 'a', text: 'Troponin' },
        { id: 'b', text: 'CK-MB (which clears faster and would re-rise)' },
        { id: 'c', text: 'BNP' },
        { id: 'd', text: 'D-dimer' },
      ],
      answerId: 'b',
      explanation: 'Because troponin stays elevated for days, a fresh CK-MB rise (CK-MB normalises in ~2–3 days) is useful to detect re-infarction on top of a recent MI.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Cardiac biomarkers in MI', svg: CARDIAC_BIOMARKERS, caption: 'Troponin (gold standard: rises 3–4 h, peaks 24 h, lasts 7–10 days) vs CK-MB (faster → re-infarction) vs early non-specific myoglobin.' },
  ],
};

export default cardiacBiomarkersAcs;
