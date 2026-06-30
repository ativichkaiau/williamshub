import type { Lecture } from '../../lib/types';

export const acsManagement: Lecture = {
  id: 'acs-management',
  title: 'ACS Management & Reperfusion',
  system: 'cardiovascular',
  source: 'L9 — Acute Coronary Syndrome',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L9 Acute Coronary Syndrome' },
    { kind: 'disease', label: 'ACS management' },
    { kind: 'mechanism', label: 'Reperfusion' },
    { kind: 'treatment', label: 'PCI / fibrinolysis' },
  ],

  highYield: [
    'Immediate (first 10 min): **aspirin 150–300 mg chewed**, **P2Y12 inhibitor**, anticoagulation (UFH/LMWH), nitrate + morphine for pain, **O₂ only if SpO₂ <90%**.',
    'P2Y12 choice: **clopidogrel** if fibrinolysis planned; **ticagrelor/prasugrel** if primary PCI.',
    'STEMI reperfusion: **primary PCI** if achievable **<120 min**; else **fibrinolysis** if symptoms **<12 h** (within 10 min of diagnosis).',
    'Secondary prevention: **DAPT, statin, beta-blocker, ACEI**.',
    'Inferior STEMI + RV infarct → preload-dependent → **fluids, AVOID nitrates**.',
  ],

  mechanism: {
    title: 'Reperfuse fast → salvage myocardium',
    steps: [
      { id: 's1', label: 'STEMI diagnosis' },
      { id: 's2', label: 'Antithrombotic (aspirin + P2Y12 + anticoag)', emphasis: 'key' },
      { id: 's3', label: 'Reperfusion: PCI <120 min OR fibrinolysis <12 h', emphasis: 'key' },
      { id: 's4', label: 'Restore flow → limit infarct size' },
      { id: 's5', label: 'Secondary prevention (DAPT, statin, BB, ACEI)' },
    ],
  },

  examFindings: [
    { sign: 'SpO₂ <90% → give oxygen', mechanism: 'Oxygen only for hypoxemia, not routine', significance: 'key' },
    { sign: 'Inferior STEMI → check V4R; RV infarct → fluids, not nitrates', mechanism: 'RV infarct is preload-dependent', significance: 'key' },
    { sign: 'Ongoing ischemic pain <12 h', mechanism: 'Window for reperfusion benefit', significance: 'key' },
  ],

  investigations: [
    { clue: '12-lead ECG', meaning: 'STEMI → activate the cath lab immediately' },
    { clue: 'Troponin', meaning: 'Confirms injury (don’t wait for it in STEMI)' },
    { clue: 'Coronary angiography / echo', meaning: 'Culprit vessel; LV function' },
  ],

  treatment: [
    { logic: 'Aspirin (chewed) + P2Y12 + anticoagulation + analgesia, O₂ if hypoxic', detail: 'Immediate bundle.' },
    { logic: 'Reperfuse: primary PCI <120 min, else fibrinolysis <12 h', detail: 'Time = myocardium.' },
    { logic: 'DAPT + statin + beta-blocker + ACEI long-term', detail: 'Secondary prevention reduces mortality.' },
  ],

  mnemonics: [
    { hook: 'Aspirin chewed + P2Y12 + anticoag + reperfuse', expansion: ['Immediate antithrombotic bundle', 'Then PCI or lysis'] },
    { hook: 'PCI <120 min, else lyse <12 h; O₂ only if <90%', expansion: ['Primary PCI preferred', 'Oxygen reserved for hypoxemia'] },
  ],

  traps: [
    {
      questionCategory: 'Oxygen use',
      wrongInstinct: 'Give high-flow O₂ to every ACS patient',
      rightAnswer: 'Oxygen only if SpO₂ <90% (or respiratory distress)',
      why: 'Routine hyperoxia gives no benefit and may harm; supplemental oxygen is reserved for hypoxemia.',
    },
    {
      questionCategory: 'Inferior STEMI drug',
      wrongInstinct: 'Give nitrates for chest pain in inferior STEMI',
      rightAnswer: 'Check V4R; if RV infarct → fluids, AVOID nitrates',
      why: 'RV infarction is preload-dependent — nitrates drop preload and cause profound hypotension.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'First-line immediate antiplatelet for a patient with an acute STEMI (no contraindication)?',
      options: [
        { id: 'a', text: 'IV heparin alone' },
        { id: 'b', text: 'Aspirin 150–300 mg, chewed' },
        { id: 'c', text: 'Warfarin' },
        { id: 'd', text: 'Alteplase' },
      ],
      answerId: 'b',
      explanation: 'Chewed aspirin 150–300 mg is given immediately in suspected ACS for rapid antiplatelet effect, alongside a P2Y12 inhibitor and anticoagulation — before reperfusion.',
      tests: 'treatment',
    },
  ],
};

export default acsManagement;
