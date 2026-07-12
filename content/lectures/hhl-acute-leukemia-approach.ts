import type { Lecture } from '../../lib/types';

export const hhlAcuteLeukemiaApproach: Lecture = {
  id: 'hhl-acute-leukemia-approach',
  title: 'Acute Leukemia: Presentation, Diagnosis & Emergencies',
  system: 'heme',
  source: 'L15 — Acute Leukemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L15 Acute Leukemia' },
    { kind: 'disease', label: 'Acute leukaemia' },
    { kind: 'mechanism', label: 'Marrow failure + emergencies' },
    { kind: 'investigation', label: 'Blasts · flow cytometry' },
  ],

  highYield: [
    'Two mechanisms of presentation: **(1) MARROW FAILURE triad** — anaemia (fatigue/pallor), **neutropenia (infection/fever)**, thrombocytopenia (bleeding/petechiae); and **(2) blast INFILTRATION** — lymphadenopathy, hepatosplenomegaly, bone/joint pain, gum/skin (AML), CNS/testis (ALL).',
    'Diagnosis: **blasts on film + marrow (≥20%)**, then **flow cytometry** for lineage (**MPO/CD13/CD33 = myeloid**; **TdT/CD19/CD3 = lymphoid**) and **cytogenetics/molecular** for class, prognosis and targets.',
    '**Febrile neutropenia is an EMERGENCY**: fever + neutropenia → **broad-spectrum antibiotics within 1 hour**, before cultures return.',
    '**Tumour lysis syndrome**: massive turnover (high-count ALL/Burkitt, on treatment) → **↑K⁺, ↑phosphate, ↑urate, ↓Ca²⁺** → arrhythmia + AKI; prevent with **hydration + allopurinol/rasburicase**.',
    '**Leukostasis** (hyperleukocytosis, WBC >~100k, esp. AML): sludging → dyspnoea/hypoxia + neuro signs → **leukapheresis + cytoreduction**. **APL → DIC** (bleeding). See [[hhl-aml]].',
  ],

  mechanism: {
    title: 'Blast overgrowth → marrow failure + oncological emergencies',
    steps: [
      { id: 's1', label: 'Blasts crowd the marrow', emphasis: 'key' },
      { id: 's2', label: 'Marrow failure triad (anaemia / neutropenia / thrombocytopenia)', emphasis: 'key' },
      { id: 's3', label: 'Febrile neutropenia → sepsis', emphasis: 'danger' },
      { id: 's4', label: 'High turnover / treatment → tumour lysis (↑K, ↑PO4, ↑urate, ↓Ca)', emphasis: 'danger' },
      { id: 's5', label: 'Hyperleukocytosis → leukostasis; APL → DIC', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fever in a neutropenic patient', mechanism: 'Febrile neutropenia — treat immediately', significance: 'key' },
    { sign: 'Petechiae / mucosal bleeding', mechanism: 'Thrombocytopenia from marrow failure', significance: 'key' },
    { sign: 'Circulating blasts on the film', mechanism: 'Acute leukaemia', significance: 'key' },
    { sign: 'Dyspnoea, hypoxia, confusion with WBC >100k', mechanism: 'Leukostasis (vascular sludging)', significance: 'key' },
    { sign: 'Rising K⁺/phosphate/urate with falling Ca²⁺ and AKI', mechanism: 'Tumour lysis syndrome', significance: 'key' },
  ],

  investigations: [
    { clue: '≥20% blasts in marrow/blood', meaning: 'Acute leukaemia (then flow cytometry for lineage)' },
    { clue: 'MPO+/Auer rods vs TdT+/CD19/CD3', meaning: 'Myeloid (AML) vs lymphoid (ALL)' },
    { clue: '↑K⁺, ↑phosphate, ↑uric acid, ↓Ca²⁺, ↑creatinine', meaning: 'Tumour lysis syndrome' },
    { clue: 'Fever + absolute neutrophil count <0.5', meaning: 'Febrile neutropenia — culture, then do not delay antibiotics' },
  ],

  treatment: [
    { logic: 'Stabilise the emergencies FIRST', detail: 'Empirical broad-spectrum antibiotics for febrile neutropenia within 1 h; hydration + rasburicase/allopurinol for tumour lysis; leukapheresis/hydroxyurea for leukostasis; support APL-DIC.' },
    { logic: 'Then definitive therapy', detail: 'Lineage- and cytogenetics-directed induction (see [[hhl-aml]] and [[hhl-all]]); give transfusion support and tumour-lysis prophylaxis before starting.' },
  ],

  mnemonics: [
    { hook: 'Acute leukaemia = marrow FAILURE (low 3 lines) + INFILTRATION', expansion: ['Anaemia, neutropenia (infection), thrombocytopenia (bleeding)', 'Nodes / spleen / bone pain / gums / CNS'] },
    { hook: 'The 4 emergencies: Fever (neutropenia), Lysis (TLS), Stasis (leukostasis), DIC (APL)', expansion: ['Antibiotics in 1 h', 'Rasburicase + hydration', 'Leukapheresis', 'Support fibrinogen'] },
  ],

  traps: [
    {
      questionCategory: 'Timing of febrile-neutropenia treatment',
      wrongInstinct: 'Wait for blood-culture results before starting antibiotics',
      rightAnswer: 'Give empirical broad-spectrum antibiotics within an hour of fever in neutropenia',
      why: 'Neutropenic sepsis can be fatal within hours; cultures are drawn but must not delay treatment.',
    },
    {
      questionCategory: 'Tumour lysis electrolytes',
      wrongInstinct: 'Calcium rises along with the other electrolytes in tumour lysis',
      rightAnswer: 'TLS gives HIGH K⁺/phosphate/urate but LOW calcium',
      why: 'Hyperphosphataemia precipitates calcium — the low Ca²⁺ is the odd-one-out that flags TLS.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: '48 hours after starting chemotherapy for a high-count leukaemia, a patient develops acute kidney injury. Which electrolyte pattern indicates tumour lysis syndrome?',
      options: [
        { id: 'a', text: '↑K⁺, ↑phosphate, ↑urate, ↓Ca²⁺' },
        { id: 'b', text: '↓K⁺, ↓phosphate, ↑Ca²⁺' },
        { id: 'c', text: '↑Ca²⁺, ↓urate, ↓phosphate' },
        { id: 'd', text: 'Entirely normal electrolytes' },
      ],
      answerId: 'a',
      explanation: 'Cell lysis releases potassium, phosphate and nucleic acids (→ urate); the high phosphate precipitates calcium, so calcium falls. This pattern plus AKI is tumour lysis syndrome.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A neutropenic patient on leukaemia therapy spikes a fever to 38.5°C. Best immediate action?',
      options: [
        { id: 'a', text: 'Await blood-culture results before any treatment' },
        { id: 'b', text: 'Start empirical broad-spectrum IV antibiotics now' },
        { id: 'c', text: 'Give oral paracetamol only and observe' },
        { id: 'd', text: 'Transfuse platelets and reassess in the morning' },
      ],
      answerId: 'b',
      explanation: 'Fever in neutropenia is a medical emergency: draw cultures but give empirical broad-spectrum antibiotics within an hour, as neutropenic sepsis can progress rapidly.',
      tests: 'treatment',
    },
  ],
};

export default hhlAcuteLeukemiaApproach;
