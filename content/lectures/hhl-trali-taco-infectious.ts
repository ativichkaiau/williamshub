import type { Lecture } from '../../lib/types';

export const hhlTraliTacoInfectious: Lecture = {
  id: 'hhl-trali-taco-infectious',
  title: 'TRALI, TACO & Transfusion-transmitted Infection',
  system: 'heme',
  source: 'L20 — Blood Transfusion Reactions',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L20 Transfusion Reactions' },
    { kind: 'disease', label: 'TRALI / TACO' },
    { kind: 'mechanism', label: 'Anti-leukocyte antibody vs overload' },
    { kind: 'treatment', label: 'Respiratory support / diuretics' },
  ],

  highYield: [
    '**TRALI** = **non-cardiogenic pulmonary edema within ~6 h** of transfusion from **donor anti-leukocyte (anti-HLA/anti-neutrophil) antibodies** priming recipient neutrophils in the lung; **normal JVP/CVP**, often **hypotension** — a leading cause of transfusion death.',
    '**TACO** = **circulatory (volume) overload** → **cardiogenic** pulmonary edema with **hypertension, raised JVP** and a gallop; risk in the elderly and in cardiac/renal impairment or rapid/large transfusion.',
    '**TRALI vs TACO is the classic discriminator**: both give dyspnea/hypoxia and infiltrates, but **TRALI = normal JVP + hypotension** (respiratory support, NO diuretics) vs **TACO = raised JVP + hypertension** (slow/stop, diuretics, sit upright).',
    '**Transfusion-transmitted infection**: residual **HBV/HCV/HIV** risk (window period), **bacterial contamination — especially platelets** (room-temperature storage) → sepsis, and **CMV** (use leukoreduced/CMV-negative). See [[hhl-blood-donation]].',
    '**Transfusion-associated GVHD** (donor T cells engraft) is prevented by **irradiation** of cellular components. See [[hhl-component-storage-processing]].',
  ],

  mechanism: {
    title: 'Two look-alike lungs, plus transmitted agents',
    steps: [
      { id: 's1', label: 'Transfusion delivers donor antibodies, OR excess volume, OR a pathogen' },
      { id: 's2', label: 'TRALI — donor anti-leukocyte antibodies activate recipient neutrophils → capillary leak', emphasis: 'key' },
      { id: 's3', label: 'Non-cardiogenic pulmonary edema within 6 h, normal filling pressures', emphasis: 'danger' },
      { id: 's4', label: 'TACO — volume overload raises hydrostatic pressure → cardiogenic edema, raised JVP', emphasis: 'key' },
      { id: 's5', label: 'Bacteria (especially platelets) or viruses transmitted → sepsis or infection' },
    ],
  },

  examFindings: [
    { sign: 'Hypoxia + bilateral infiltrates within 6 h, NORMAL JVP, hypotension', mechanism: 'TRALI — neutrophil-mediated capillary leak', significance: 'key' },
    { sign: 'Dyspnea with RAISED JVP, hypertension and a gallop', mechanism: 'TACO — hydrostatic (cardiogenic) pulmonary edema', significance: 'key' },
    { sign: 'Rigors, fever and hypotension soon after a PLATELET unit', mechanism: 'Bacterial contamination (room-temperature storage)', significance: 'key' },
    { sign: 'Rash, diarrhea, pancytopenia and deranged LFTs after transfusion', mechanism: 'Transfusion-associated GVHD (donor T cells)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Post-transfusion pulmonary edema with a normal BNP and normal heart size', meaning: 'Favours TRALI over TACO' },
    { clue: 'Post-transfusion pulmonary edema with a raised BNP, hypertension and positive fluid balance', meaning: 'Favours TACO' },
    { clue: 'Positive cultures from both the patient and the platelet bag', meaning: 'Transfusion-transmitted bacterial sepsis' },
    { clue: 'A very recently infected, NAT-negative donor', meaning: 'Residual window-period viral transmission risk (HBV/HCV/HIV)' },
  ],

  treatment: [
    { logic: 'TRALI: stop, give oxygen/ventilatory support — NOT diuretics', detail: 'Non-cardiogenic edema, usually resolving in 24–72 h; the patient is often hypotensive, so diuresis can harm.' },
    { logic: 'TACO: slow/stop the transfusion, sit upright, give diuretics and oxygen', detail: 'Treat as fluid overload; prevent by a slow rate and splitting units in at-risk patients.' },
    { logic: 'Prevent transmitted disease', detail: 'Donor screening + NAT, bacterial detection for platelets, leukoreduced/CMV-negative units, and irradiation to prevent TA-GVHD.' },
  ],

  mnemonics: [
    { hook: 'TRALI = Leaky Lungs, Low pressure; TACO = Too much fluid', expansion: ['TRALI: within 6 h, normal JVP, hypotension, no diuretics', 'TACO: raised JVP, hypertension, give diuretics', 'Both: hypoxia + bilateral infiltrates'] },
    { hook: 'Platelets breed bacteria; Irradiate blocks GVHD', expansion: ['Platelets at room temperature → bacterial sepsis risk', 'CMV → leukoreduced/CMV-negative units', 'TA-GVHD prevented by irradiation'] },
  ],

  traps: [
    {
      questionCategory: 'TRALI vs TACO discrimination',
      wrongInstinct: 'Post-transfusion pulmonary edema means volume overload — give diuretics',
      rightAnswer: 'If the JVP is normal and the patient is hypotensive within 6 h, it is TRALI (non-cardiogenic) — support respiration and do NOT rely on diuretics',
      why: 'TACO has a raised JVP + hypertension and responds to diuretics; TRALI has a normal JVP + hypotension.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two hours into a transfusion an elderly patient becomes dyspneic with a raised JVP, hypertension and bilateral crackles. The most likely reaction is:',
      options: [
        { id: 'a', text: 'TRALI' },
        { id: 'b', text: 'TACO' },
        { id: 'c', text: 'Anaphylaxis' },
        { id: 'd', text: 'Febrile non-hemolytic reaction' },
      ],
      answerId: 'b',
      explanation: 'A raised JVP with hypertension and pulmonary edema indicates circulatory overload (TACO), managed by slowing/stopping the transfusion and giving diuretics.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient develops hypoxia and bilateral infiltrates within 6 hours of transfusion, with a NORMAL JVP and hypotension. The best management is:',
      options: [
        { id: 'a', text: 'Aggressive diuresis' },
        { id: 'b', text: 'Stop the transfusion and give respiratory support (avoid diuretics)' },
        { id: 'c', text: 'Adrenaline for anaphylaxis' },
        { id: 'd', text: 'Immediate exchange transfusion' },
      ],
      answerId: 'b',
      explanation: 'Normal JVP with hypotension and non-cardiogenic pulmonary edema within 6 h indicates TRALI; management is supportive (oxygen/ventilation), not diuresis.',
      tests: 'treatment',
    },
  ],
};

export default hhlTraliTacoInfectious;
