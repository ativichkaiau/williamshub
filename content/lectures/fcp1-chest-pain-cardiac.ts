import type { Lecture } from '../../lib/types';

export const fcp1ChestPainCardiac: Lecture = {
  id: 'fcp1-chest-pain-cardiac',
  title: 'Cardiac (Ischaemic) Chest Pain & ACS',
  system: 'clinical',
  source: 'L11 — Chest Pain',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L11 Chest Pain' },
    { kind: 'disease', label: 'ACS · STEMI · NSTEMI' },
    { kind: 'investigation', label: 'ECG · troponin' },
    { kind: 'treatment', label: 'Reperfusion · antiplatelet' },
  ],

  highYield: [
    '**Typical ischaemic pain** = retrosternal **pressure or heaviness**, brought on by **exertion or stress**, radiating to the **jaw or left arm**, with dyspnoea, sweating or nausea, and **eased by rest or GTN**. It overlaps the differential in [[fcp1-chest-pain-differential]].',
    '**ACS is a spectrum: STEMI** (ST elevation → immediate reperfusion), **NSTEMI** (ischaemic pain with a raised troponin but no ST elevation), and **unstable angina** (ischaemic pain with a normal troponin).',
    '**ECG plus serial high-sensitivity troponin** are the core tests; a single normal early troponin does not exclude ACS — **serial** sampling is required.',
    '**Atypical presentations** in women, the elderly and people with diabetes may have no chest pain at all — dyspnoea, fatigue or epigastric discomfort instead; keep a low threshold.',
    '**Risk-stratify** using the history, ECG and troponin (for example the HEART or TIMI scores); red-flag features push toward admission — see [[fcp1-chest-pain-red-flags]].',
  ],

  mechanism: {
    title: 'Ischaemia → ACS spectrum → reperfusion decision',
    steps: [
      { id: 's1', label: 'Plaque rupture → coronary thrombus → myocardial ischaemia', emphasis: 'key' },
      { id: 's2', label: 'ST elevation (STEMI) → immediate reperfusion', emphasis: 'danger' },
      { id: 's3', label: 'Raised troponin, no ST elevation → NSTEMI', emphasis: 'key' },
      { id: 's4', label: 'Ischaemic pain, normal troponin → unstable angina', emphasis: 'key' },
      { id: 's5', label: 'Serial ECG + troponin + risk score', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Clenched fist over the sternum (Levine sign), diaphoresis, radiation to jaw or arm', mechanism: 'Ischaemic pain pattern', significance: 'key' },
    { sign: 'Pain reproduced by exertion and relieved by rest or GTN', mechanism: 'Demand ischaemia', significance: 'key' },
    { sign: 'New S4, hypotension, basal crackles', mechanism: 'Ischaemia with left ventricular dysfunction', significance: 'supportive' },
    { sign: 'Unremarkable examination', mechanism: 'A normal exam does not exclude ACS', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ST elevation in contiguous leads or new left bundle branch block', meaning: 'STEMI → immediate reperfusion (primary PCI or thrombolysis)' },
    { clue: 'ST depression or T-wave inversion with a rising troponin', meaning: 'NSTEMI → antiplatelets, anticoagulation and early angiography' },
    { clue: 'Ischaemic pain but normal serial ECG and troponin', meaning: 'Unstable angina versus non-cardiac pain → apply a risk score' },
    { clue: 'A rising and falling high-sensitivity troponin', meaning: 'Acute myocardial injury — interpret with the clinical picture' },
  ],

  treatment: [
    { logic: 'Time is muscle in STEMI', detail: 'ST elevation triggers immediate reperfusion — primary PCI is preferred, with thrombolysis if PCI is not available in time.' },
    { logic: 'NSTEMI and unstable angina — stabilise then angiography', detail: 'Dual antiplatelet therapy, anticoagulation and anti-ischaemics, with risk-guided timing of coronary angiography.' },
    { logic: 'Do not discharge on one troponin', detail: 'Serial troponin and ECG with a validated risk score guide the disposition.' },
  ],

  mnemonics: [
    { hook: 'ACS spectrum: STEMI, NSTEMI, Unstable angina', expansion: ['STEMI = reperfuse now', 'NSTEMI = troponin up, no ST elevation', 'Unstable angina = troponin normal'] },
  ],

  traps: [
    {
      questionCategory: 'Ruling out ACS',
      wrongInstinct: 'Discharge the patient after a single normal troponin taken at presentation',
      rightAnswer: 'Take serial troponin and ECG — an early single value can miss an evolving infarction',
      why: 'Troponin rises over hours; sampling too early gives false reassurance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 58-year-old with diabetes has 40 minutes of retrosternal pressure radiating to the jaw. The ECG shows 2 mm of ST elevation in leads II, III and aVF. The best immediate management is:',
      options: [
        { id: 'a', text: 'Discharge with GTN spray' },
        { id: 'b', text: 'Immediate reperfusion (primary PCI or thrombolysis)' },
        { id: 'c', text: 'Repeat the troponin in six hours before acting' },
        { id: 'd', text: 'CT pulmonary angiogram' },
      ],
      answerId: 'b',
      explanation: 'Inferior ST elevation is a STEMI; time is muscle, so immediate reperfusion (primary PCI preferred, otherwise thrombolysis) is required.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Ischaemic chest pain with a raised troponin but no ST elevation on the ECG is best classified as:',
      options: [
        { id: 'a', text: 'STEMI' },
        { id: 'b', text: 'NSTEMI' },
        { id: 'c', text: 'Unstable angina' },
        { id: 'd', text: 'Pericarditis' },
      ],
      answerId: 'b',
      explanation: 'A raised troponin without ST elevation defines NSTEMI; unstable angina would have a normal troponin, and STEMI would show ST elevation.',
      tests: 'disease',
    },
  ],
};

export default fcp1ChestPainCardiac;
