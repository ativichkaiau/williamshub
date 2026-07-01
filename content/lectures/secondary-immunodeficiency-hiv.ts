import type { Lecture } from '../../lib/types';

export const secondaryImmunodeficiencyHiv: Lecture = {
  id: 'secondary-immunodeficiency-hiv',
  title: 'Secondary Immunodeficiency & HIV/AIDS',
  system: 'immune',
  source: 'L8 — Immunodeficiency',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L8 Immunodeficiency' },
    { kind: 'mechanism', label: 'Acquired defects' },
    { kind: 'exam', label: 'HIV · infection pattern' },
  ],

  highYield: [
    '**Secondary (acquired) immunodeficiency is far more common than primary** and arises during life from another cause. Major causes: **infection (HIV)**, **iatrogenic** (chemotherapy, corticosteroids, immunosuppressants, radiation, splenectomy), **malnutrition** (leading global cause), **malignancy** (esp. haematological), and chronic illness (diabetes, renal/liver failure, ageing).',
    '**HIV/AIDS is the archetype.** HIV (a retrovirus) uses **gp120 to bind CD4** (+ co-receptors CCR5/CXCR4) and **infects/depletes CD4⁺ helper T cells**. Falling CD4 counts progressively cripple **cell-mediated immunity** → **opportunistic infections and cancers**; **AIDS** is defined by CD4 <200/µL or an AIDS-defining illness.',
    '**Opportunistic infections track the CD4 count.** Classic AIDS-defining conditions: **Pneumocystis jirovecii pneumonia (PCP)**, **oesophageal candidiasis**, **CMV retinitis**, **cerebral toxoplasmosis**, **cryptococcal meningitis**, disseminated **TB/MAC**, and **Kaposi sarcoma (HHV-8)** — reflecting loss of the CD4/Th1 axis.',
    '**Asplenia/hyposplenism ≈ an antibody-type defect:** loss of splenic clearance and IgM responses → susceptibility to **encapsulated bacteria** (pneumococcus, meningococcus, Haemophilus) → hence vaccination and prophylaxis.',
    '**Localise by the infection pattern** (same logic as primary defects): encapsulated bacteria → **antibody/spleen/complement**; opportunistic viral/fungal/PCP → **T-cell/HIV**; catalase-positive + fungi → **phagocyte**; recurrent Neisseria → **terminal complement**. Neutropenia (chemotherapy) → **bacterial and fungal sepsis**.',
  ],

  mechanism: {
    title: 'Acquired loss of an immune component → its bug pattern',
    steps: [
      { id: 's1', label: 'Causes: HIV, drugs, malnutrition, malignancy, asplenia', emphasis: 'key' },
      { id: 's2', label: 'HIV gp120 → CD4 (CCR5/CXCR4) → deplete CD4 T cells', emphasis: 'key' },
      { id: 's3', label: 'AIDS = CD4 <200 or AIDS-defining illness', emphasis: 'danger' },
      { id: 's4', label: 'Opportunistic infections track falling CD4 (PCP, CMV, crypto)', emphasis: 'key' },
      { id: 's5', label: 'Infection pattern localises the acquired defect' },
    ],
  },

  examFindings: [
    { sign: 'CD4 <200/µL', mechanism: 'AIDS threshold → high opportunistic-infection risk', significance: 'key' },
    { sign: 'PCP, oesophageal candidiasis, CMV retinitis', mechanism: 'CD4/T-cell (cell-mediated) collapse in HIV', significance: 'key' },
    { sign: 'Kaposi sarcoma', mechanism: 'HHV-8 in advanced HIV (AIDS-defining)', significance: 'supportive' },
    { sign: 'Neutropenic fever after chemotherapy', mechanism: 'Iatrogenic secondary immunodeficiency (bacterial/fungal)', significance: 'key' },
    { sign: 'Overwhelming pneumococcal sepsis post-splenectomy', mechanism: 'Asplenia → encapsulated-bacteria susceptibility', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Retrovirus depleting CD4⁺ T cells', meaning: 'HIV' },
    { clue: 'Commonest global cause of secondary immunodeficiency', meaning: 'Malnutrition' },
    { clue: 'CD4 count defining AIDS', meaning: '<200 cells/µL' },
    { clue: 'Opportunistic pneumonia typical of low CD4', meaning: 'Pneumocystis jirovecii (PCP)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'HIV is treated with antiretroviral therapy (restores CD4); opportunistic infections need prophylaxis (co-trimoxazole for PCP when CD4 <200); neutropenic and asplenic patients need vaccination/prophylaxis. Pattern-recognition mirrors the primary defects in [[primary-immunodeficiency-antibody-t]] and [[primary-immunodeficiency-phagocyte-complement]].' },
  ],

  mnemonics: [
    { hook: 'HIV depletes CD4 (gp120→CD4) → AIDS at CD4 <200', expansion: ['Opportunistic infections track CD4'] },
    { hook: 'Secondary causes: "HIM DR" — HIV, Immunosuppression, Malnutrition, Drugs, Radiation/malignancy', expansion: ['Commoner than primary'] },
  ],

  traps: [
    {
      questionCategory: 'Primary vs secondary immunodeficiency frequency',
      wrongInstinct: 'Primary (genetic) immunodeficiencies are the most common cause of immunodeficiency',
      rightAnswer: 'SECONDARY (acquired) immunodeficiency is far commoner — malnutrition worldwide, and HIV/drugs/malignancy clinically',
      why: 'Primary defects are rare and usually present in childhood; most immunodeficiency encountered clinically is acquired.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'HIV causes progressive immunodeficiency principally by:',
      options: [
        { id: 'a', text: 'Destroying neutrophils' },
        { id: 'b', text: 'Depleting CD4⁺ helper T cells via gp120 binding' },
        { id: 'c', text: 'Blocking complement C3' },
        { id: 'd', text: 'Preventing V(D)J recombination' },
      ],
      answerId: 'b',
      explanation: 'HIV gp120 binds CD4 (with CCR5/CXCR4 co-receptors) and progressively depletes CD4⁺ T cells, collapsing cell-mediated immunity and leading to opportunistic infections (AIDS at CD4 <200).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with a CD4 count of 120/µL develops a subacute pneumonia with diffuse infiltrates and marked hypoxia. The most likely opportunistic organism is:',
      options: [
        { id: 'a', text: 'Streptococcus pneumoniae' },
        { id: 'b', text: 'Pneumocystis jirovecii' },
        { id: 'c', text: 'Neisseria meningitidis' },
        { id: 'd', text: 'Staphylococcus aureus' },
      ],
      answerId: 'b',
      explanation: 'At CD4 <200/µL, Pneumocystis jirovecii pneumonia (PCP) is a classic AIDS-defining opportunistic infection reflecting loss of cell-mediated immunity; prophylaxis is co-trimoxazole.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default secondaryImmunodeficiencyHiv;
