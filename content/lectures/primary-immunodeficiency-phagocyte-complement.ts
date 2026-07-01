import type { Lecture } from '../../lib/types';

export const primaryImmunodeficiencyPhagocyteComplement: Lecture = {
  id: 'primary-immunodeficiency-phagocyte-complement',
  title: 'Primary Immunodeficiency: Phagocyte & Complement Defects',
  system: 'immune',
  source: 'L8 — Immunodeficiency',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L8 Immunodeficiency' },
    { kind: 'mechanism', label: 'Innate cell defects' },
    { kind: 'exam', label: 'CGD/LAD · complement' },
  ],

  highYield: [
    '**Phagocyte defects → catalase-positive bacteria and fungi, abscesses, and poor pus.** **Chronic granulomatous disease (CGD)** = defective **NADPH oxidase** → no respiratory burst (no reactive oxygen) → recurrent infections with **catalase-positive organisms** (*S. aureus*, *Serratia*, *Burkholderia*, *Nocardia*, *Aspergillus*) and **granulomas**. Diagnose with the **DHR (dihydrorhodamine) flow test / NBT test** (negative/no colour change).',
    '**Leukocyte adhesion deficiency (LAD-1)** = defective **β2-integrin (CD18)** → neutrophils cannot adhere/transmigrate → **recurrent bacterial infections without pus, delayed umbilical cord separation, and neutrophilia** (cells stuck in blood).',
    '**Chédiak-Higashi syndrome** = **LYST** gene defect → impaired lysosome/phagosome fusion → **giant granules** in leukocytes, recurrent infections, **partial albinism**, neuropathy, and bleeding.',
    '**Complement defects (recap of [[complement-functions-regulation]]).** **Early (C1–C4)** → immune-complex disease (SLE-like) + pyogenic infection. **C3** → severe recurrent pyogenic infection. **Terminal (C5–C9/MAC)** → **recurrent Neisseria**. **C1-inhibitor** deficiency → **hereditary angioedema**.',
    '**Localise by the bug.** Catalase-positive organisms/fungi + granulomas = **CGD**; delayed cord separation + no pus = **LAD**; recurrent Neisseria = **terminal complement**; recurrent encapsulated bacteria = **antibody/spleen** ([[primary-immunodeficiency-antibody-t]]).',
  ],

  mechanism: {
    title: 'Innate killers broken → characteristic bugs',
    steps: [
      { id: 's1', label: 'CGD: no NADPH oxidase → catalase⁺ bugs + granulomas', emphasis: 'key' },
      { id: 's2', label: 'Diagnose CGD with DHR/NBT (no oxidative burst)' },
      { id: 's3', label: 'LAD: β2-integrin (CD18) → no pus, delayed cord, neutrophilia', emphasis: 'key' },
      { id: 's4', label: 'Chédiak-Higashi: LYST → giant granules, albinism' },
      { id: 's5', label: 'Complement: terminal → Neisseria; C1-INH → angioedema', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Recurrent Staph/Aspergillus infections + granulomas', mechanism: 'CGD (NADPH oxidase defect, catalase⁺ organisms)', significance: 'key' },
    { sign: 'Abnormal DHR/NBT test', mechanism: 'Confirms absent respiratory burst (CGD)', significance: 'key' },
    { sign: 'Delayed umbilical cord separation + no pus + high neutrophils', mechanism: 'Leukocyte adhesion deficiency (CD18/β2-integrin)', significance: 'key' },
    { sign: 'Giant cytoplasmic granules + partial albinism', mechanism: 'Chédiak-Higashi (LYST)', significance: 'supportive' },
    { sign: 'Recurrent Neisseria infection', mechanism: 'Terminal complement (C5–C9) deficiency', significance: 'key' },
  ],

  investigations: [
    { clue: 'Test that is abnormal in chronic granulomatous disease', meaning: 'DHR flow cytometry (or NBT) — no oxidative burst' },
    { clue: 'Which organisms infect CGD patients', meaning: 'Catalase-positive bacteria + fungi' },
    { clue: 'Newborn with delayed cord separation and no pus', meaning: 'Leukocyte adhesion deficiency (CD18)' },
    { clue: 'Recurrent meningococcal disease', meaning: 'Terminal complement (MAC) deficiency' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CGD → prophylactic antibiotics/antifungals + IFN-γ; terminal-complement deficiency → meningococcal vaccination; LAD/Chédiak-Higashi may need transplant. Recognising the bug pattern is the fastest route to the diagnosis ([[primary-immunodeficiency-antibody-t]] logic).' },
  ],

  mnemonics: [
    { hook: 'CGD = "Catalase-positive Granulomas, DHR-negative"', expansion: ['NADPH oxidase; S.aureus, Serratia, Burkholderia, Nocardia, Aspergillus'] },
    { hook: 'LAD = "Late cord, no pus, high neutrophils" (CD18)', expansion: ['Integrin adhesion failure'] },
  ],

  traps: [
    {
      questionCategory: 'Why catalase-positive organisms in CGD?',
      wrongInstinct: 'CGD patients get infected by all bacteria equally',
      rightAnswer: 'CGD specifically → CATALASE-POSITIVE organisms, because catalase-negative bacteria supply their own H₂O₂ that the phagocyte can still use',
      why: 'Without NADPH oxidase, phagocytes borrow H₂O₂ from catalase-negative microbes; catalase-positive organisms destroy their own H₂O₂, escaping killing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child with recurrent Staphylococcus aureus and Aspergillus infections, granulomas, and an abnormal dihydrorhodamine (DHR) test most likely has:',
      options: [
        { id: 'a', text: 'Leukocyte adhesion deficiency' },
        { id: 'b', text: 'Chronic granulomatous disease' },
        { id: 'c', text: 'Terminal complement deficiency' },
        { id: 'd', text: 'Selective IgA deficiency' },
      ],
      answerId: 'b',
      explanation: 'CGD is a defect of NADPH oxidase → no respiratory burst → infections with catalase-positive organisms and granulomas; the DHR/NBT test is abnormal.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A neonate has delayed separation of the umbilical cord, recurrent bacterial infections without pus formation, and a markedly elevated neutrophil count. The defect involves:',
      options: [
        { id: 'a', text: 'NADPH oxidase' },
        { id: 'b', text: 'β2-integrin (CD18) adhesion molecules' },
        { id: 'c', text: 'The membrane attack complex' },
        { id: 'd', text: 'BTK' },
      ],
      answerId: 'b',
      explanation: 'Leukocyte adhesion deficiency type 1 results from defective β2-integrin (CD18) → neutrophils cannot adhere and transmigrate, causing pus-free infections, delayed cord separation, and blood neutrophilia.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default primaryImmunodeficiencyPhagocyteComplement;
