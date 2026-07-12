import type { Lecture } from '../../lib/types';

export const hhlComponentStorageProcessing: Lecture = {
  id: 'hhl-component-storage-processing',
  title: 'Component Preparation, Storage & Modifications',
  system: 'heme',
  source: 'L19 — Blood Donation & Blood Products',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L19 Blood Products' },
    { kind: 'treatment', label: 'Leukoreduction · Irradiation' },
    { kind: 'investigation', label: 'Crossmatch' },
  ],

  highYield: [
    '**Storage differs by component**: red cells **1–6°C for ~35–42 days**; **platelets 20–24°C with agitation for ~5–7 days** (room temperature → bacterial-growth risk, short shelf-life); **FFP frozen for ~1 year**.',
    '**Storage lesion** of stored red cells: **↓2,3-BPG**, **↑extracellular potassium**, ↓ATP, ↓pH, microaggregates — relevant in neonates and massive transfusion.',
    '**Leukoreduction** (remove WBCs) ↓ **febrile non-hemolytic reactions**, ↓ **CMV transmission**, ↓ **HLA alloimmunization**. See [[hhl-febrile-allergic-reactions]].',
    '**Irradiation** inactivates donor T-lymphocytes → **prevents transfusion-associated GVHD** in immunocompromised/related-donor recipients. See [[hhl-trali-taco-infectious]].',
    '**Washing** removes plasma proteins → for **IgA-deficient** or **severe allergic** recipients; **CMV-negative** units when CMV-safe blood is required.',
  ],

  mechanism: {
    title: 'Prepare → store → modify → compatibility-test',
    steps: [
      { id: 's1', label: 'Separate and store each component at its optimal temperature' },
      { id: 's2', label: 'Over storage, red cells develop the storage lesion (↓2,3-BPG, ↑K+)', emphasis: 'key' },
      { id: 's3', label: 'Leukoreduce → fewer WBC-driven problems (FNHTR, CMV, HLA)', emphasis: 'key' },
      { id: 's4', label: 'Irradiate → kill donor T cells → prevent TA-GVHD in the immunocompromised', emphasis: 'key' },
      { id: 's5', label: 'Crossmatch (ABO/Rh + antibody screen ± IAT) before release' },
    ],
  },

  examFindings: [
    { sign: 'Rising potassium after large/rapid red-cell transfusion', mechanism: 'Storage lesion — K+ leaks from stored cells', significance: 'supportive' },
    { sign: 'Recurrent fever/chills with transfusion', mechanism: 'WBC cytokines/antibodies — prevent with leukoreduction', significance: 'key' },
    { sign: 'Bacterial sepsis traced to a platelet unit', mechanism: 'Room-temperature storage favours bacterial growth', significance: 'key' },
    { sign: 'GVHD in an immunocompromised recipient after transfusion', mechanism: 'Viable donor T cells engraft — prevented by irradiation', significance: 'key' },
  ],

  investigations: [
    { clue: 'Platelets stored refrigerated', meaning: 'Loss of function/rapid clearance — platelets need 20–24°C with agitation' },
    { clue: 'History of febrile non-hemolytic reactions', meaning: 'Provide leukoreduced components' },
    { clue: 'Immunocompromised recipient or a first-degree-relative donor', meaning: 'Irradiate cellular components (TA-GVHD risk)' },
    { clue: 'IgA-deficient recipient with severe allergic reactions', meaning: 'Washed (plasma-depleted) or IgA-deficient components' },
  ],

  treatment: [
    { logic: 'Leukoreduce to cut febrile reactions, CMV and alloimmunization', detail: 'Filters remove white cells before storage or at the bedside.' },
    { logic: 'Irradiate cellular products for at-risk recipients', detail: 'Prevents transfusion-associated GVHD by inactivating donor T lymphocytes.' },
    { logic: 'Wash to remove plasma for IgA-deficient/severe allergic patients', detail: 'Select CMV-negative units when CMV-safe blood is required.' },
  ],

  mnemonics: [
    { hook: 'Storage lesion: 2,3-BPG down, potassium up', expansion: ['↓2,3-BPG → left-shift (poor early O2 offload)', '↑extracellular K+', '↓ATP, ↓pH — matters in neonates/massive transfusion'] },
    { hook: 'Irradiate stops GVHD; leukoreduce stops fevers/CMV', expansion: ['Irradiation kills donor T cells → no TA-GVHD', 'Leukoreduction → ↓FNHTR, CMV, HLA alloimmunization', 'Washing → for IgA-deficient/severe allergy'] },
  ],

  traps: [
    {
      questionCategory: 'Which modification prevents TA-GVHD',
      wrongInstinct: 'Leukoreduction prevents transfusion-associated graft-versus-host disease',
      rightAnswer: 'Only IRRADIATION reliably prevents TA-GVHD; leukoreduction reduces febrile reactions/CMV/alloimmunization but not GVHD',
      why: 'Leukoreduction lowers T-cell numbers but leaves enough viable T cells to engraft — irradiation inactivates them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An immunocompromised patient needs red cells. Which modification prevents transfusion-associated graft-versus-host disease?',
      options: [
        { id: 'a', text: 'Leukoreduction' },
        { id: 'b', text: 'Irradiation' },
        { id: 'c', text: 'Washing' },
        { id: 'd', text: 'CMV-negative selection' },
      ],
      answerId: 'b',
      explanation: 'Irradiation inactivates donor T lymphocytes, the cells that would otherwise engraft and cause transfusion-associated GVHD.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which change is characteristic of the red-cell storage lesion?',
      options: [
        { id: 'a', text: 'Increased 2,3-BPG' },
        { id: 'b', text: 'Decreased extracellular potassium' },
        { id: 'c', text: 'Decreased 2,3-BPG with increased extracellular potassium' },
        { id: 'd', text: 'Rising pH' },
      ],
      answerId: 'c',
      explanation: 'Stored red cells lose 2,3-BPG and ATP and leak potassium, so the storage lesion features low 2,3-BPG and high extracellular potassium.',
      tests: 'mechanism',
    },
  ],
};

export default hhlComponentStorageProcessing;
