import type { Lecture } from '../../lib/types';

export const scaiShockClassification: Lecture = {
  id: 'scai-shock-classification',
  title: 'SCAI Shock Classification & Support',
  system: 'cardiovascular',
  source: 'L11 — Cardiogenic Shock',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L11 Cardiogenic Shock' },
    { kind: 'disease', label: 'Shock staging' },
    { kind: 'mechanism', label: 'Severity ladder' },
    { kind: 'investigation', label: 'Lactate' },
  ],

  highYield: [
    '**SCAI A–E** stages stratify cardiogenic shock by severity and mortality.',
    '**A = At risk** (no signs) · **B = Beginning** (hypotension/tachycardia, no hypoperfusion) · **C = Classic** (hypoperfusion needing support) · **D = Deteriorating** (failing support) · **E = Extremis** (collapse/arrest).',
    'Mortality climbs steeply: A ~0.6% → C ~21% → E ~90%.',
    'Hypoperfusion markers: **lactate >2**, ↑creatinine, ↑LFTs, cold/mottled, altered mentation.',
    'Management = **etiology + hemodynamic support + metabolic correction**.',
  ],

  mechanism: {
    title: 'Severity ladder A → E',
    steps: [
      { id: 's1', label: 'A: At risk (no signs)' },
      { id: 's2', label: 'B: Beginning instability (no hypoperfusion)' },
      { id: 's3', label: 'C: Classic hypoperfusion', emphasis: 'key' },
      { id: 's4', label: 'D: Deteriorating despite support' },
      { id: 's5', label: 'E: Extremis / cardiac arrest', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lactate >2 + cold/mottled + altered mentation', mechanism: 'Hypoperfusion = stage C onward', significance: 'key' },
    { sign: 'Normal mentation, warm, normal lactate', mechanism: 'Stage A/B', significance: 'supportive' },
    { sign: 'Near-pulselessness, lactate >5, pH <7.2', mechanism: 'Stage E (extremis)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Lactate, creatinine, LFTs', meaning: 'Perfusion biomarkers (stage the shock)' },
    { clue: 'Hemodynamics: SBP, MAP, pulse pressure, cardiac index, PCWP', meaning: 'Severity & response to support' },
  ],

  treatment: [
    { logic: 'Stage C → inotropes/vasopressors beyond fluids', detail: 'Restore perfusion.' },
    { logic: 'Stage D → escalate: multiple pressors / mechanical circulatory support', detail: 'When initial support fails.' },
    { logic: 'Stage E → resuscitation / cardiac-arrest care', detail: 'Circulatory collapse.' },
  ],

  mnemonics: [
    { hook: 'SCAI: At risk, Beginning, Classic, Deteriorating, Extremis (A–E)', expansion: ['Mortality rises A→E', 'C = classic hypoperfusion'] },
    { hook: 'Lactate >2 = crossed into hypoperfusion (stage C)', expansion: ['Marker of anaerobic metabolism'] },
  ],

  traps: [
    {
      questionCategory: 'When perfusion is compromised',
      wrongInstinct: 'Hypotension alone means classic shock (stage C)',
      rightAnswer: 'Hypotension WITHOUT hypoperfusion = stage B; with hypoperfusion (lactate↑, end-organ) = stage C',
      why: 'Stage B is hemodynamic instability without hypoperfusion; only when perfusion markers (lactate, urine, mentation) deteriorate is it “classic” shock (C) — important for escalation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has SBP 85 and HR 110 but normal mentation, a clear lactate, and good urine output. SCAI stage?',
      options: [
        { id: 'a', text: 'A' },
        { id: 'b', text: 'B (instability without hypoperfusion)' },
        { id: 'c', text: 'C' },
        { id: 'd', text: 'E' },
      ],
      answerId: 'b',
      explanation: 'Hemodynamic instability (hypotension, tachycardia) WITHOUT evidence of hypoperfusion is SCAI stage B; hypoperfusion markers would push it to stage C.',
      tests: 'exam',
    },
  ],
};

export default scaiShockClassification;
