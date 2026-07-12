import type { Lecture } from '../../lib/types';

export const fcp1ShockManagement: Lecture = {
  id: 'fcp1-shock-management',
  title: 'Recognition & Initial Management of Shock',
  system: 'clinical',
  source: 'L9 — Shock & Syncope',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L9 Shock & Syncope' },
    { kind: 'treatment', label: 'ABC · fluids · vasopressors' },
    { kind: 'investigation', label: 'Lactate clearance' },
    { kind: 'mechanism', label: 'Resuscitation sequence' },
  ],

  highYield: [
    '**Recognise shock early by perfusion, not blood pressure.** Tachycardia and a **narrow pulse pressure** come first; hypotension is late. The reliable signs are **end-organ**: altered mentation, cool mottled skin, capillary refill over 2 seconds, oliguria (under 0.5 mL/kg/h) and a **raised lactate**. Match the picture to its type → [[fcp1-shock-classification]].',
    '**Start with ABC:** secure the airway, give high-flow oxygen, insert two large-bore IV cannulae, and attach monitoring. In trauma this is the primary survey → [[fcp1-trauma-primary-survey]].',
    '**Fluids then pressors:** give a **balanced crystalloid bolus and reassess** (around 30 mL/kg in sepsis); be **cautious in cardiogenic shock** where the failing pump tolerates little volume. If perfusion remains inadequate, add a **vasopressor — noradrenaline is first-line in septic/distributive shock** targeting a mean arterial pressure of 65 mmHg or more; use inotropes (dobutamine) for a failing pump.',
    '**Then source control, tailored to the cause:** stop bleeding and transfuse in haemorrhage → [[fcp1-gi-bleed-management]] with massive transfusion in trauma → [[fcp1-trauma-resuscitation]]; give **antibiotics within the first hour** and take cultures in sepsis → [[fcp1-fever-approach-differential]]; **decompress obstructive shock** (needle/finger thoracostomy for tension pneumothorax, pericardiocentesis for tamponade); and reperfuse a cardiogenic MI.',
    '**Anaphylaxis is the exception to the fluids-first order — give intramuscular adrenaline immediately.** Throughout, judge the response by **lactate clearance, mean arterial pressure, urine output and mentation** rather than blood pressure alone.',
  ],

  mechanism: {
    title: 'The resuscitation sequence',
    steps: [
      { id: 's1', label: 'Recognise: perfusion signs + lactate, do not wait for hypotension', emphasis: 'danger' },
      { id: 's2', label: 'ABC: airway, high-flow oxygen, two large-bore IV, monitor', emphasis: 'danger' },
      { id: 's3', label: 'Fluids: crystalloid bolus + reassess (cautious in cardiogenic)', emphasis: 'key' },
      { id: 's4', label: 'Vasopressor if refractory: noradrenaline to MAP 65 or more', emphasis: 'key' },
      { id: 's5', label: 'Source control: stop bleeding / antibiotics / decompress / reperfuse', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cool mottled skin with capillary refill over 2 seconds', mechanism: 'Peripheral hypoperfusion', significance: 'key' },
    { sign: 'Agitation or reduced consciousness', mechanism: 'Cerebral hypoperfusion', significance: 'key' },
    { sign: 'Tachycardia with a narrow pulse pressure', mechanism: 'Early compensated shock', significance: 'key' },
    { sign: 'Oliguria (urine under 0.5 mL/kg/h)', mechanism: 'Renal hypoperfusion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rising or persistently high lactate', meaning: 'Inadequate resuscitation — track clearance as a target' },
    { clue: 'Metabolic acidosis with a base deficit', meaning: 'Reflects the depth and duration of hypoperfusion' },
    { clue: 'Falling haemoglobin or a positive FAST scan', meaning: 'Haemorrhagic source requiring control' },
    { clue: 'Blood cultures drawn before antibiotics in suspected sepsis', meaning: 'Guide later de-escalation without delaying the first dose' },
  ],

  treatment: [
    { logic: 'Fluids first, then noradrenaline to a MAP of 65 mmHg or more', detail: 'Bolus and reassess; escalate to a vasopressor when volume alone fails. Be cautious with fluids in cardiogenic shock.' },
    { logic: 'Cause-specific rescue', detail: 'Antibiotics within one hour for sepsis; intramuscular adrenaline for anaphylaxis; decompression for obstructive shock.' },
    { logic: 'Definitive source control', detail: 'Surgical or endoscopic haemostasis, reperfusion for MI, and drainage of an infective focus.' },
  ],

  mnemonics: [
    { hook: 'Recognise → ABC → Fluids → Pressors → Source control', expansion: ['Lactate and mentation, not just BP', 'Noradrenaline is the default vasopressor in sepsis'] },
  ],

  traps: [
    {
      questionCategory: 'Fluids in the wrong shock',
      wrongInstinct: 'Give large fluid boluses to every hypotensive patient',
      rightAnswer: 'In cardiogenic shock the failing pump tolerates little volume — use small cautious boluses and reach for inotropes/vasopressors',
      why: 'Aggressive fluids can precipitate pulmonary oedema in cardiogenic shock; the resuscitation must match the type.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with septic shock remains hypotensive with a lactate of 5 mmol/L after an appropriate crystalloid fluid resuscitation. The most appropriate next step to restore perfusion is:',
      options: [
        { id: 'a', text: 'Start a noradrenaline infusion targeting a MAP of at least 65 mmHg' },
        { id: 'b', text: 'Withhold further treatment and observe' },
        { id: 'c', text: 'Give a large bolus of hypotonic dextrose' },
        { id: 'd', text: 'Start dobutamine as the sole agent' },
      ],
      answerId: 'a',
      explanation: 'When shock persists despite adequate fluids, a vasopressor is added. Noradrenaline is first-line in septic/distributive shock, titrated to a mean arterial pressure of at least 65 mmHg.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A young trauma patient has a heart rate of 120, a narrow pulse pressure, cool peripheries and a lactate of 4 mmol/L, but a systolic blood pressure of 108 mmHg. The best interpretation is:',
      options: [
        { id: 'a', text: 'Not in shock because the blood pressure is normal' },
        { id: 'b', text: 'Compensated shock — resuscitate now rather than waiting for hypotension' },
        { id: 'c', text: 'A normal physiological response requiring no action' },
        { id: 'd', text: 'Distributive shock from spinal injury' },
      ],
      answerId: 'b',
      explanation: 'Tachycardia, a narrow pulse pressure, poor peripheral perfusion and a raised lactate indicate compensated shock despite a preserved blood pressure. Early resuscitation and source control are needed before decompensation.',
      tests: 'exam',
    },
  ],
};

export default fcp1ShockManagement;
