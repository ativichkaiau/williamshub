import type { Lecture } from '../../lib/types';

export const hhlMahaPnh: Lecture = {
  id: 'hhl-maha-pnh',
  title: 'Microangiopathic Hemolysis & PNH',
  system: 'heme',
  source: 'L9 — Hemolytic Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L9 Hemolytic Anemia' },
    { kind: 'disease', label: 'MAHA · TTP/HUS · PNH' },
    { kind: 'mechanism', label: 'Mechanical / complement lysis' },
    { kind: 'investigation', label: 'Schistocytes · flow cytometry' },
  ],

  highYield: [
    '**MAHA = mechanical red-cell fragmentation → SCHISTOCYTES** as cells are sheared through fibrin strands / damaged endothelium. It is a **Coombs-negative, intravascular hemolysis** with thrombocytopenia — always look for the underlying microangiopathy.',
    '**TTP = ADAMTS13 deficiency** (can’t cleave large vWF multimers → platelet microthrombi): **pentad = MAHA + thrombocytopenia + neurological signs + renal + fever**. **A medical emergency — urgent plasma exchange; do NOT give platelets** (fuels thrombosis).',
    '**HUS = Shiga-toxin (E. coli O157:H7), typically children after bloody diarrhoea**: triad of **MAHA + thrombocytopenia + acute kidney injury**. **DIC** adds a consumptive coagulopathy (↑PT/PTT, ↓fibrinogen, ↑D-dimer); **malignant hypertension** and **HELLP** (pregnancy) are other MAHA causes.',
    '**PNH = acquired somatic PIGA mutation** in a stem cell → **loss of the GPI anchor → loss of CD55 & CD59** (complement regulators) → **complement-mediated INTRAvascular hemolysis**. Triad: **hemolysis (morning hemoglobinuria), THROMBOSIS (often unusual sites, e.g. hepatic/Budd–Chiari), and marrow failure/pancytopenia**.',
    '**Diagnosis**: MAHA → schistocytes + specific tests (ADAMTS13 for TTP). **PNH → flow cytometry showing absent CD55/CD59 (FLAER)**; treat with the **anti-C5 antibody eculizumab**.',
  ],

  mechanism: {
    title: 'Two routes to intravascular hemolysis: mechanical shear vs complement',
    steps: [
      { id: 's1', label: 'MAHA: fibrin strands / damaged endothelium shear RBCs', emphasis: 'key' },
      { id: 's2', label: 'Schistocytes + thrombocytopenia (Coombs-negative)' },
      { id: 's3', label: 'TTP (↓ADAMTS13) → microthrombi — emergency, don’t give platelets', emphasis: 'danger' },
      { id: 's4', label: 'PNH: PIGA mutation → no CD55/CD59 → complement lysis', emphasis: 'key' },
      { id: 's5', label: 'PNH thrombosis (hepatic/Budd–Chiari) — life-threatening', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Schistocytes (fragmented cells) on the film', mechanism: 'Mechanical fragmentation — hallmark of MAHA', significance: 'key' },
    { sign: 'MAHA + thrombocytopenia + fluctuating neurology', mechanism: 'TTP (ADAMTS13 deficiency)', significance: 'key' },
    { sign: 'MAHA + thrombocytopenia + AKI in a child post-diarrhoea', mechanism: 'HUS (Shiga toxin)', significance: 'key' },
    { sign: 'Morning hemoglobinuria + venous thrombosis + cytopenias', mechanism: 'PNH — complement-mediated intravascular hemolysis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Schistocytes + thrombocytopenia, negative Coombs', meaning: 'Microangiopathic hemolytic anemia' },
    { clue: 'Very low ADAMTS13 activity', meaning: 'TTP → urgent plasma exchange' },
    { clue: 'Normal PT/PTT/fibrinogen in MAHA', meaning: 'TTP/HUS (not DIC, where they are deranged)' },
    { clue: 'Flow cytometry: absent CD55/CD59 (FLAER)', meaning: 'Paroxysmal nocturnal hemoglobinuria' },
  ],

  treatment: [
    { logic: 'TTP: urgent plasma exchange (± steroids, rituximab, caplacizumab)', detail: 'Time-critical; platelet transfusion is contraindicated unless life-threatening bleeding — it worsens thrombosis.' },
    { logic: 'HUS: supportive care ± dialysis', detail: 'Mostly supportive; avoid antibiotics/antimotility agents in Shiga-toxin HUS. Treat DIC by correcting the trigger.' },
    { logic: 'PNH: eculizumab (anti-C5) + thrombosis prophylaxis', detail: 'Blocks terminal complement; anticoagulate thrombosis; consider HSCT for marrow failure.' },
  ],

  mnemonics: [
    { hook: 'Schistocytes = mechanical shear (MAHA)', expansion: ['TTP: neuro + ADAMTS13↓', 'HUS: renal + Shiga toxin (kids)', 'DIC: clotting deranged'] },
    { hook: 'PNH loses CD55 & CD59 → complement eats the cell', expansion: ['Hemolysis + thrombosis + pancytopenia', 'Flow cytometry / FLAER; eculizumab'] },
  ],

  traps: [
    {
      questionCategory: 'Thrombocytopenia in a microangiopathy',
      wrongInstinct: 'A patient with TTP has a low platelet count, so transfuse platelets',
      rightAnswer: 'In TTP, platelet transfusion can fuel further microthrombosis and is avoided unless there is life-threatening bleeding — the treatment is urgent plasma exchange',
      why: 'The thrombocytopenia is consumptive (platelets are being deposited as microthrombi); adding platelets feeds the process rather than the bleeding risk.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 30-year-old woman has anemia with schistocytes, platelets 15×10⁹/L, confusion, mild renal impairment and fever; PT/PTT and fibrinogen are normal. What is the most appropriate immediate management?',
      options: [
        { id: 'a', text: 'Platelet transfusion' },
        { id: 'b', text: 'Urgent plasma exchange' },
        { id: 'c', text: 'Broad-spectrum antibiotics only' },
        { id: 'd', text: 'Oral iron' },
      ],
      answerId: 'b',
      explanation: 'This pentad with normal coagulation is TTP (ADAMTS13 deficiency); urgent plasma exchange is life-saving, and platelets are avoided as they can worsen microthrombosis.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'A patient has intravascular hemolysis, morning hemoglobinuria and a hepatic-vein thrombosis. Flow cytometry shows red cells lacking CD55 and CD59. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Hereditary spherocytosis' },
        { id: 'b', text: 'Paroxysmal nocturnal hemoglobinuria' },
        { id: 'c', text: 'Hemolytic uraemic syndrome' },
        { id: 'd', text: 'Warm autoimmune hemolytic anemia' },
      ],
      answerId: 'b',
      explanation: 'Loss of GPI-anchored CD55/CD59 (from an acquired PIGA mutation) causes complement-mediated intravascular hemolysis with thrombosis — paroxysmal nocturnal hemoglobinuria; treat with eculizumab.',
      tests: 'disease',
    },
  ],
};

export default hhlMahaPnh;
