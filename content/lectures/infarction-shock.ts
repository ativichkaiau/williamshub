import type { Lecture } from '../../lib/types';

export const infarctionShock: Lecture = {
  id: 'infarction-shock',
  title: 'Infarction, Shock & DIC',
  system: 'pathology',
  source: 'L6 — Hemodynamic Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L6 Shock' },
    { kind: 'mechanism', label: 'Red vs white infarct; shock types' },
    { kind: 'exam', label: 'Shock classification; DIC' },
  ],

  highYield: [
    'INFARCTION is ischaemic NECROSIS from occlusion of arterial supply (or venous drainage). Most infarcts are due to thromboembolism. Two types: WHITE (pale/anaemic) infarcts occur in SOLID organs with a SINGLE (end-arterial) blood supply (heart, kidney, spleen) — wedge-shaped, pale coagulative necrosis; RED (haemorrhagic) infarcts occur in tissues with DUAL circulation or COLLATERALS, LOOSE tissue, or VENOUS occlusion, or after reperfusion (LUNG, intestine, testis). Factors affecting severity: nature of supply (dual protects), rate of occlusion (slow allows collaterals), tissue vulnerability to hypoxia (neurons > myocardium > fibroblasts), and blood oxygen content.',
    'SHOCK is systemic HYPOPERFUSION → inadequate tissue oxygenation → cellular hypoxia; if uncorrected it becomes irreversible. Major types: HYPOVOLAEMIC (haemorrhage, fluid loss → ↓preload); CARDIOGENIC (pump failure — MI, arrhythmia, tamponade); and DISTRIBUTIVE — SEPTIC (infection → systemic vasodilation, and a hyperinflammatory/procoagulant state), ANAPHYLACTIC (type I hypersensitivity), and NEUROGENIC (loss of vascular tone after spinal injury). Cardiogenic and hypovolaemic shock have LOW cardiac output/cold clammy skin; early distributive/septic shock is often WARM with high output.',
    'Shock evolves in STAGES: (1) NON-PROGRESSIVE (compensated — baroreceptor reflexes, catecholamines, RAAS maintain perfusion of vital organs); (2) PROGRESSIVE — persistent hypoperfusion, lactic ACIDOSIS, worsening organ dysfunction; (3) IRREVERSIBLE — cellular/organ injury so severe that survival is impossible even if haemodynamics are restored. Morphology: hypoxic changes in kidneys (acute tubular necrosis), lungs (diffuse alveolar damage), heart, liver and brain.',
    'DISSEMINATED INTRAVASCULAR COAGULATION (DIC) is a consumptive coagulopathy: widespread activation of coagulation (by sepsis, obstetric complications, major trauma, malignancy) forms microthrombi (→ ischaemic organ damage and microangiopathic haemolysis) while CONSUMING platelets and clotting factors → paradoxical BLEEDING. It is always SECONDARY to an underlying trigger; treatment targets the cause plus support. Septic shock frequently co-exists with DIC.',
    '**The take-home: INFARCTION = ischaemic necrosis — WHITE (solid, end-arterial: heart/kidney/spleen) vs RED (dual supply/venous/reperfusion: lung/bowel). SHOCK = systemic hypoperfusion: HYPOVOLAEMIC, CARDIOGENIC, DISTRIBUTIVE (septic/anaphylactic/neurogenic); stages non-progressive→progressive→IRREVERSIBLE. DIC = consumptive coagulopathy (microthrombi + bleeding), always secondary.** Thrombosis/embolism cause infarcts ([[hemostasis-thrombosis-embolism]]); necrosis types are [[necrosis-patterns]].',
  ],

  mechanism: {
    title: 'Infarction = ischaemic necrosis: white (solid/end-arterial) vs red (dual supply/venous/reperfusion); shock = systemic hypoperfusion (hypovolaemic/cardiogenic/distributive-septic), stages non-progressive→progressive→irreversible; DIC = consumptive (microthrombi + bleeding), secondary',
    steps: [
      { id: 's1', label: 'Infarction = ischaemic necrosis (mostly thromboembolic)', emphasis: 'key' },
      { id: 's2', label: 'White infarct = solid, single/end-arterial supply (heart/kidney/spleen); red = dual/venous/reperfusion (lung/bowel)', emphasis: 'key' },
      { id: 's3', label: 'Shock = systemic hypoperfusion: hypovolaemic, cardiogenic, distributive (septic/anaphylactic/neurogenic)', emphasis: 'danger' },
      { id: 's4', label: 'Stages: non-progressive (compensated) → progressive (acidosis) → IRREVERSIBLE', emphasis: 'danger' },
      { id: 's5', label: 'DIC = consumptive coagulopathy (microthrombi + bleeding); always secondary to a trigger', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A pale, wedge-shaped infarct in the kidney or spleen', mechanism: 'White (anaemic) infarct (end-arterial supply)', significance: 'key' },
    { sign: 'A haemorrhagic (red) infarct in the lung or intestine', mechanism: 'Dual supply / venous occlusion / reperfusion', significance: 'key' },
    { sign: 'Hypotension, tachycardia and cold clammy skin after haemorrhage', mechanism: 'Hypovolaemic shock', significance: 'key' },
    { sign: 'Warm, vasodilated shock with fever and a source of infection', mechanism: 'Septic (distributive) shock', significance: 'supportive' },
    { sign: 'Simultaneous microthrombi and bleeding with low platelets/fibrinogen', mechanism: 'Disseminated intravascular coagulation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The infarct type in solid organs with a single arterial supply', meaning: 'White (anaemic) infarct' },
    { clue: 'The infarct type in lung/bowel (dual supply/venous)', meaning: 'Red (haemorrhagic) infarct' },
    { clue: 'The three broad categories of shock', meaning: 'Hypovolaemic, cardiogenic, distributive' },
    { clue: 'The consumptive coagulopathy causing thrombosis and bleeding', meaning: 'DIC (always secondary)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Infarction and shock are core emergencies. The white/red infarct distinction reflects vascular anatomy (end-arterial solid organs vs dual-supply/venous tissues) and explains imaging/morphology. Classifying shock (hypovolaemic, cardiogenic, distributive/septic) directs resuscitation — fluids and haemorrhage control, inotropes/revascularisation, or vasopressors and source control for sepsis — and recognising the stages (compensated → progressive → irreversible) stresses treating early before irreversible organ injury. DIC, a consumptive coagulopathy that is always secondary, requires treating the trigger plus support. Thrombosis/embolism produce infarcts ([[hemostasis-thrombosis-embolism]]); necrosis morphology is [[necrosis-patterns]].' },
  ],

  mnemonics: [
    { hook: '"White infarct = solid/end-arterial (heart/kidney/spleen); Red = dual/venous/reperfusion (lung/bowel)"', expansion: ['Neurons most hypoxia-sensitive', 'Slow occlusion → collaterals'] },
    { hook: 'Shock: "Hypovolaemic, Cardiogenic, Distributive (septic/anaphylactic/neurogenic)"', expansion: ['Stages: compensated→progressive→irreversible', 'DIC = microthrombi + bleeding'] },
  ],

  traps: [
    {
      questionCategory: 'The paradox of DIC',
      wrongInstinct: 'DIC is a bleeding disorder, so it has nothing to do with clotting/thrombosis',
      rightAnswer: 'DIC is PARADOXICAL: it begins with WIDESPREAD ACTIVATION of coagulation forming microthrombi (causing ischaemic organ damage and microangiopathic haemolysis), which then CONSUMES platelets and clotting factors, leading to simultaneous BLEEDING — so both thrombosis and haemorrhage occur together; it is always SECONDARY to a trigger (sepsis, obstetric emergencies, trauma, malignancy), and treatment addresses that underlying cause',
      why: 'Viewing DIC as purely a bleeding problem misses its thrombotic core and its secondary nature; recognising the consumptive thrombosis-then-bleeding mechanism and hunting for the trigger is essential to management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A pale, wedge-shaped (white/anaemic) infarct is most characteristic of which organ?',
      options: [
        { id: 'a', text: 'Lung' },
        { id: 'b', text: 'Kidney (a solid organ with end-arterial supply)' },
        { id: 'c', text: 'Small intestine' },
        { id: 'd', text: 'Testis' },
      ],
      answerId: 'b',
      explanation: 'White (anaemic) infarcts occur in solid organs with a single, end-arterial blood supply (heart, kidney, spleen). Red (haemorrhagic) infarcts occur in tissues with a dual blood supply or collaterals, loose tissue, or venous occlusion (lung, intestine, testis).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which type of shock classically presents early as "warm" shock with peripheral vasodilation and high cardiac output?',
      options: [
        { id: 'a', text: 'Septic (distributive) shock' },
        { id: 'b', text: 'Hypovolaemic shock' },
        { id: 'c', text: 'Cardiogenic shock' },
        { id: 'd', text: 'Obstructive shock' },
      ],
      answerId: 'a',
      explanation: 'Distributive (septic) shock causes systemic vasodilation, so early on the patient is often warm with high cardiac output ("warm shock"), unlike hypovolaemic and cardiogenic shock which cause low output with cold, clammy skin. Untreated, septic shock progresses to hypoperfusion and organ failure.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default infarctionShock;
