import type { Lecture } from '../../lib/types';

export const fcp1TraumaResuscitation: Lecture = {
  id: 'fcp1-trauma-resuscitation',
  title: 'Trauma Resuscitation & Damage Control',
  system: 'clinical',
  source: 'L10 — Approach to the Trauma Patient',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L10 Trauma' },
    { kind: 'mechanism', label: 'Damage control · lethal triad' },
    { kind: 'treatment', label: 'Blood 1:1:1 · TXA' },
    { kind: 'disease', label: 'Haemorrhagic shock' },
  ],

  highYield: [
    '**Haemorrhage control comes first** — direct pressure, tourniquet for limb bleeding, pelvic binder, and early surgery or angioembolisation for the source; this builds on [[fcp1-trauma-primary-survey]].',
    '**Permissive hypotension** (aim for a palpable radial pulse, SBP roughly 80–90 mmHg) until surgical control — aggressive crystalloid pops fresh clot, dilutes clotting factors and worsens bleeding. Use caution with head injury, which needs perfusion.',
    '**Damage-control resuscitation:** give **balanced blood products (roughly 1:1:1 red cells : plasma : platelets)**, minimise crystalloid, give **tranexamic acid within 3 hours**, and correct the **lethal triad — hypothermia, acidosis, coagulopathy**.',
    'Activate the **massive transfusion protocol** for ongoing major loss; keep the patient warm and watch **ionised calcium** (citrate binds it). Compare the graded resuscitation of shock in [[fcp1-shock-management]].',
    '**Damage-control surgery** = stop the bleeding and contamination now, restore physiology in ICU, and repair definitively later — "stay alive, do not fix everything at once."',
  ],

  mechanism: {
    title: 'Stop bleeding → replace like-with-like → reverse the lethal triad',
    steps: [
      { id: 's1', label: 'Control haemorrhage (pressure, tourniquet, binder, surgery)', emphasis: 'danger' },
      { id: 's2', label: 'Permissive hypotension until surgical control', emphasis: 'key' },
      { id: 's3', label: 'Balanced products 1:1:1 + tranexamic acid', emphasis: 'key' },
      { id: 's4', label: 'Lethal triad: hypothermia + acidosis + coagulopathy', emphasis: 'danger' },
      { id: 's5', label: 'Damage-control surgery, definitive repair later', emphasis: 'normal' },
    ],
  },

  examFindings: [
    { sign: 'Cold, mottled skin, prolonged capillary refill, weak thready pulse', mechanism: 'Hypovolaemic (haemorrhagic) shock', significance: 'key' },
    { sign: 'Continued bleeding despite fluids with a rising lactate', mechanism: 'Uncontrolled haemorrhage — activate massive transfusion', significance: 'key' },
    { sign: 'Diffuse oozing from puncture and cannula sites', mechanism: 'Trauma-induced coagulopathy', significance: 'key' },
    { sign: 'Distended, rigid abdomen after resuscitation', mechanism: 'Concealed haemorrhage or abdominal compartment syndrome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rising lactate and base deficit', meaning: 'Degree of hypoperfusion / occult shock — a resuscitation endpoint' },
    { clue: 'Low fibrinogen, prolonged PT/aPTT, low platelets (or abnormal viscoelastic test)', meaning: 'Trauma-induced coagulopathy → targeted blood products' },
    { clue: 'Persistent hypotension after the first units of blood', meaning: 'Activate the massive transfusion protocol' },
    { clue: 'Ionised hypocalcaemia during transfusion', meaning: 'Citrate binding calcium — replace calcium' },
  ],

  treatment: [
    { logic: 'Replace blood with blood, not saline', detail: 'Balanced 1:1:1 products with restricted crystalloid preserve clotting and avoid a dilutional coagulopathy.' },
    { logic: 'Give tranexamic acid early', detail: 'Within 3 hours of injury it reduces death from bleeding; given later it may be harmful.' },
    { logic: 'Fix physiology before anatomy', detail: 'Damage-control surgery halts bleeding and contamination, then the patient is rewarmed and coagulopathy corrected in ICU before definitive repair.' },
  ],

  mnemonics: [
    { hook: 'Lethal triad — Hypothermia, Acidosis, Coagulopathy', expansion: ['Each worsens the other two', 'Warm the patient and the fluids', 'Tranexamic acid within 3 hours'] },
  ],

  traps: [
    {
      questionCategory: 'Fluid choice in haemorrhagic shock',
      wrongInstinct: 'Pour in two or more litres of crystalloid to normalise the blood pressure',
      rightAnswer: 'Permissive hypotension with early balanced blood products until bleeding is controlled',
      why: 'Large crystalloid volumes dilute clotting factors, drop temperature and dislodge fresh clot, worsening the bleeding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a stab wound to the abdomen has SBP 85 and is actively bleeding but not yet in theatre. The best resuscitation strategy is:',
      options: [
        { id: 'a', text: 'Rapid 2 L normal saline to target SBP 120' },
        { id: 'b', text: 'Balanced blood products with permissive hypotension and tranexamic acid' },
        { id: 'c', text: 'Vasopressor infusion to raise the pressure' },
        { id: 'd', text: 'Withhold all fluids until SBP falls below 60' },
      ],
      answerId: 'b',
      explanation: 'Damage-control resuscitation uses balanced blood products, restricted crystalloid, permissive hypotension and early tranexamic acid until surgical control of the bleeding.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'The self-perpetuating combination of hypothermia, acidosis and coagulopathy that worsens outcome in major trauma is known as the:',
      options: [
        { id: 'a', text: 'Cushing triad' },
        { id: 'b', text: 'Beck triad' },
        { id: 'c', text: 'Lethal (trauma) triad' },
        { id: 'd', text: 'Virchow triad' },
      ],
      answerId: 'c',
      explanation: 'The lethal triad of hypothermia, acidosis and coagulopathy drives ongoing bleeding; damage-control resuscitation aims to reverse all three.',
      tests: 'mechanism',
    },
  ],
};

export default fcp1TraumaResuscitation;
