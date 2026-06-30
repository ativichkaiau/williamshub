import type { Lecture } from '../../lib/types';

export const pda: Lecture = {
  id: 'pda',
  title: 'Patent Ductus Arteriosus (PDA)',
  system: 'cardiovascular',
  source: 'L3 — Congenital Heart Disease (Peds, MedCMU 2025)',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L3 Congenital HD' },
    { kind: 'disease', label: 'PDA' },
    { kind: 'mechanism', label: 'Left-to-right shunt' },
    { kind: 'exam', label: 'Continuous murmur' },
    { kind: 'treatment', label: 'Indomethacin' },
  ],

  highYield: [
    'Ductus fails to close (normally functional closure at **10–15 h** → ligamentum arteriosum).',
    '**Left-to-right shunt aorta → pulmonary artery** → ↑pulmonary blood flow, LA/LV overload.',
    'Continuous **“machinery” murmur at the LUSB / left infraclavicular** area.',
    '**Wide pulse pressure + bounding pulses** (diastolic runoff).',
    'Common in **preterm**; **indomethacin** closes it — **prostaglandin keeps it open**.',
  ],

  mechanism: {
    title: 'Aortopulmonary L→R shunt (systole AND diastole)',
    steps: [
      { id: 's1', label: 'Patent ductus (aorta ↔ PA)' },
      { id: 's2', label: 'Continuous L→R shunt' },
      { id: 's3', label: '↑ Pulmonary blood flow' },
      { id: 's4', label: 'LA/LV volume overload', emphasis: 'key' },
      { id: 's5', label: 'Heart failure (esp. preterm)' },
    ],
    branches: [
      {
        fromId: 's2',
        title: 'Diastolic runoff',
        steps: [
          { id: 'r1', label: 'Aorta → PA in diastole' },
          { id: 'r2', label: 'Low diastolic BP → wide pulse pressure / bounding pulses', emphasis: 'key' },
        ],
      },
      {
        fromId: 's3',
        title: 'If large / untreated',
        steps: [
          { id: 'e1', label: 'Pulmonary HTN → Eisenmenger', emphasis: 'danger' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'Continuous “machinery” murmur at LUSB / left infraclavicular', mechanism: 'Aortic pressure > PA pressure across the whole cardiac cycle → flow in systole AND diastole', significance: 'key' },
    { sign: 'Bounding pulses + wide pulse pressure', mechanism: 'Diastolic runoff of aortic blood into the PA', significance: 'key' },
    { sign: 'Neonate may show only a systolic ejection murmur', mechanism: 'Higher neonatal PA pressure limits the diastolic component', significance: 'supportive' },
    { sign: 'Loud P2', mechanism: 'Pulmonary hypertension', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'CXR: cardiomegaly + ↑pulmonary markings + prominent aorta', meaning: 'Significant left-to-right shunt' },
    { clue: 'ECG: LVH / LAE', meaning: 'Left-heart volume overload (large PDA)' },
    { clue: 'Echocardiography', meaning: 'Diagnostic — duct, shunt direction' },
  ],

  treatment: [
    { logic: 'Medical closure (preterm): indomethacin (or ibuprofen)', detail: 'Prostaglandin synthesis inhibitor. Avoid in renal dysfunction or NEC.' },
    { logic: 'Transcatheter device occlusion (most) or surgical ligation', detail: 'Definitive structural closure.' },
    { logic: 'Close all symptomatic L→R PDA, and asymptomatic with LV enlargement, regardless of age', detail: 'Hemodynamically insignificant PDA may be closed after 1 year.' },
  ],

  mnemonics: [
    { hook: 'Indomethacin closes, Prostaglandin opens', expansion: ['Continuous machinery murmur at LUSB', 'Indomethacin (↓prostaglandin) CLOSES the duct', 'PGE1 KEEPS it open for duct-dependent CHD'] },
  ],

  traps: [
    {
      questionCategory: 'Murmur timing',
      wrongInstinct: 'Pansystolic murmur',
      rightAnswer: 'Continuous (systolic + diastolic) machinery murmur',
      why: 'Aortic pressure exceeds PA pressure throughout the cycle, so the duct flows continuously — not only in systole.',
    },
    {
      questionCategory: 'Pharmacology direction',
      wrongInstinct: 'Give prostaglandin to close the PDA',
      rightAnswer: 'Indomethacin closes; prostaglandin keeps it open',
      why: 'Prostaglandins maintain ductal patency; an inhibitor (indomethacin/ibuprofen) closes it. PGE1 is used to KEEP a duct open in duct-dependent lesions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A preterm infant has a continuous murmur at the LUSB and bounding pulses. Absent contraindications, which drug is used to close the lesion?',
      options: [
        { id: 'a', text: 'Prostaglandin E1' },
        { id: 'b', text: 'Indomethacin' },
        { id: 'c', text: 'Adenosine' },
        { id: 'd', text: 'Digoxin' },
      ],
      answerId: 'b',
      explanation: 'Indomethacin inhibits prostaglandin synthesis and closes the ductus. Prostaglandin E1 does the opposite — it keeps a duct open in duct-dependent congenital lesions.',
      tests: 'treatment',
    },
  ],
};

export default pda;
