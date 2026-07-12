import type { Lecture } from '../../lib/types';

export const hhlThrombolyticsAntifibrinolytics: Lecture = {
  id: 'hhl-thrombolytics-antifibrinolytics',
  title: 'Fibrinolytics & Antifibrinolytics',
  system: 'heme',
  source: 'L12 — Drugs Affecting Hemostasis',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L12 Hemostatic Drugs' },
    { kind: 'disease', label: 'Acute MI / stroke / PE · bleeding' },
    { kind: 'mechanism', label: 'Plasminogen → plasmin' },
    { kind: 'treatment', label: 'Alteplase · streptokinase · tranexamic acid' },
  ],

  highYield: [
    '**Plasmin is the central enzyme**: **tPA/alteplase and streptokinase convert plasminogen → plasmin**, which **lyses fibrin** (dissolves clot). Antifibrinolytics do the opposite.',
    '**Thrombolytics** are used for **acute ischaemic stroke (alteplase <4.5 h), STEMI without timely PCI, and massive/unstable PE** — after screening contraindications ([[hhl-anticoagulants]] often follows).',
    '**Streptokinase** is bacterial → **antigenic** (allergy, hypotension, loss of efficacy on re-exposure); alteplase/tenecteplase are recombinant and fibrin-specific.',
    '**Antifibrinolytics — tranexamic acid & aminocaproic acid** — are **lysine analogues that block plasminogen binding to fibrin**, stabilising clot for **trauma, postpartum haemorrhage, menorrhagia, and dental extraction in haemophilia**.',
  ],

  mechanism: {
    title: 'Plasmin decides the clot fate — dissolve it or hold it',
    steps: [
      { id: 's1', label: 'tPA/streptokinase convert plasminogen → plasmin', emphasis: 'key' },
      { id: 's2', label: 'Plasmin degrades fibrin → clot dissolves (↑ D-dimer)' },
      { id: 's3', label: 'Thrombolytics reopen the artery — but risk bleeding, chiefly intracranial haemorrhage', emphasis: 'danger' },
      { id: 's4', label: 'Antifibrinolytics (tranexamic acid) block plasminogen → preserve clot', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Sudden neurological deterioration/headache after tPA', mechanism: 'Intracranial haemorrhage — the feared thrombolytic complication', significance: 'key' },
    { sign: 'Falling fibrinogen and rising D-dimer after thrombolysis', mechanism: 'Systemic plasmin activity degrades fibrin and fibrinogen', significance: 'supportive' },
    { sign: 'Rash, hypotension or reduced efficacy with streptokinase', mechanism: 'Antigenicity and anti-streptokinase antibodies', significance: 'supportive' },
    { sign: 'Reduced blood loss after tranexamic acid in trauma/PPH', mechanism: 'Plasminogen blockade stabilises formed clot', significance: 'key' },
  ],

  investigations: [
    { clue: 'Ischaemic stroke <4.5 h with haemorrhage excluded on CT', meaning: 'Candidate for alteplase thrombolysis' },
    { clue: 'Recent surgery, prior intracranial haemorrhage, or active bleeding', meaning: 'Thrombolysis contraindicated — bleeding risk too high' },
    { clue: 'Heavy menstrual bleeding with a normal coagulation screen', meaning: 'Tranexamic acid reduces menstrual blood loss' },
    { clue: 'Need to re-thrombolyse months after streptokinase', meaning: 'Pre-existing antibodies reduce efficacy → use a recombinant tPA agent' },
  ],

  treatment: [
    { logic: 'Thrombolysis for acute MI, ischaemic stroke, or massive PE within the window — screen contraindications first', detail: 'Absolute bars include prior intracranial haemorrhage, recent surgery/trauma, active bleeding, and severe uncontrolled hypertension.' },
    { logic: 'Antifibrinolytics for hyperfibrinolytic bleeding', detail: 'Tranexamic acid in trauma (early), postpartum haemorrhage, menorrhagia, and dental extraction in bleeding disorders.' },
    { logic: 'Avoid antifibrinolytics with active thromboembolism or upper urinary-tract bleeding', detail: 'Stabilised clots can obstruct ureters and cause clot colic/retention.' },
  ],

  mnemonics: [
    { hook: '-ase dissolves, -amic acid holds', expansion: ['Alteplase / streptokinase → generate plasmin → lyse clot', 'Tranexamic / aminocaproic acid → block plasminogen → hold clot', 'Same pathway, opposite direction'] },
  ],

  traps: [
    {
      questionCategory: 'Thrombolytic safety',
      wrongInstinct: 'Treat thrombolytics as benign clot-busters',
      rightAnswer: 'Screen every candidate for bleeding risk — intracranial haemorrhage is catastrophic',
      why: 'Recent surgery, prior ICH, active bleeding, and uncontrolled hypertension are contraindications you must exclude first.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'How do thrombolytics such as alteplase and streptokinase dissolve a clot?',
      options: [
        { id: 'a', text: 'They inhibit factor Xa directly' },
        { id: 'b', text: 'They convert plasminogen to plasmin, which degrades fibrin' },
        { id: 'c', text: 'They potentiate antithrombin' },
        { id: 'd', text: 'They block platelet GP IIb/IIIa receptors' },
      ],
      answerId: 'b',
      explanation: 'Thrombolytics generate plasmin from plasminogen; plasmin then cleaves fibrin, lysing the clot — at the cost of systemic bleeding risk.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A woman has major postpartum haemorrhage. Which drug reduces bleeding by blocking fibrinolysis?',
      options: [
        { id: 'a', text: 'Alteplase' },
        { id: 'b', text: 'Streptokinase' },
        { id: 'c', text: 'Tranexamic acid' },
        { id: 'd', text: 'Heparin' },
      ],
      answerId: 'c',
      explanation: 'Tranexamic acid is a lysine analogue that blocks plasminogen binding to fibrin, stabilising clot; given early it reduces death from postpartum and traumatic haemorrhage.',
      tests: 'treatment',
    },
  ],
};

export default hhlThrombolyticsAntifibrinolytics;
