import type { Lecture } from '../../lib/types';
import { IMMUNODEFICIENCY_MAP } from '../../lib/figures';

export const primaryImmunodeficiencyAntibodyT: Lecture = {
  id: 'primary-immunodeficiency-antibody-t',
  title: 'Primary Immunodeficiency: Antibody, T-Cell & Combined',
  system: 'immune',
  source: 'L8 — Immunodeficiency',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L8 Immunodeficiency' },
    { kind: 'mechanism', label: 'Defect → infection' },
    { kind: 'exam', label: 'Name the PID' },
  ],

  highYield: [
    '**Immunodeficiency = a defect in immune development or effector function → increased infection** (and, often, autoimmunity/cancer). **Primary (congenital)** = genetic; **secondary (acquired)** = far commoner. The **pattern of infection localises the defect** (see the map below).',
    '**Antibody (B-cell) deficiencies → recurrent sinopulmonary infections with encapsulated bacteria** (after ~6 months, when maternal IgG wanes). **X-linked (Bruton) agammaglobulinaemia** = **BTK** defect → no mature B cells, all Ig low, absent lymphoid tissue (boys). **CVID** = low IgG/IgA ± IgM in later life (infections + autoimmunity + lymphoma risk). **Selective IgA deficiency** = commonest PID; often asymptomatic, may have mucosal infections and **anaphylaxis to blood/IVIG**. **Hyper-IgM syndrome** = **CD40L (CD40LG) defect** → no class switching (high IgM, low IgG/A/E) → also PCP/opportunistic infections.',
    '**T-cell deficiencies → viral, fungal, intracellular, and opportunistic (PCP) infections.** **DiGeorge syndrome** = **22q11.2 deletion** → thymic hypoplasia (T-cell deficiency) + hypocalcaemia (parathyroid), conotruncal cardiac defects, and facial anomalies ("CATCH-22").',
    '**Combined (T + B) deficiencies → severe, early, life-threatening infections of every type.** **SCID** — e.g. **X-linked IL2RG (common γ-chain)** or **ADA deficiency** → absent T (± B/NK) function; presents in infancy with failure to thrive, chronic diarrhoea, thrush; fatal without bone-marrow transplant ("bubble boy"). **Wiskott-Aldrich** (X-linked WAS) = **eczema + thrombocytopenia (small platelets) + infections**.',
    '**Bare lymphocyte syndromes** — defective **MHC I** expression (low CD8) or **MHC II** (low CD4, combined-like) — link antigen presentation ([[antigen-processing-presentation]]) to immunodeficiency.',
  ],

  mechanism: {
    title: 'Match the missing component to the bug',
    steps: [
      { id: 's1', label: 'Antibody defect → encapsulated bacteria, sinopulmonary', emphasis: 'key' },
      { id: 's2', label: 'XLA (BTK), CVID, selective IgA, hyper-IgM (CD40L)', emphasis: 'key' },
      { id: 's3', label: 'T-cell defect → viral/fungal/PCP (DiGeorge 22q11)', emphasis: 'key' },
      { id: 's4', label: 'Combined (SCID: IL2RG/ADA; Wiskott-Aldrich) → everything, early', emphasis: 'danger' },
      { id: 's5', label: 'Bare lymphocyte: MHC I (low CD8) / MHC II (low CD4)' },
    ],
  },

  examFindings: [
    { sign: 'Boy with recurrent pyogenic infections, absent B cells, all Ig low', mechanism: 'X-linked agammaglobulinaemia (BTK)', significance: 'key' },
    { sign: 'High IgM, low IgG/A/E, PCP', mechanism: 'Hyper-IgM (CD40L defect → no class switch)', significance: 'key' },
    { sign: 'Anaphylaxis to blood transfusion/IVIG', mechanism: 'Selective IgA deficiency (anti-IgA antibodies)', significance: 'supportive' },
    { sign: 'Hypocalcaemia + cardiac defect + T-cell deficiency', mechanism: 'DiGeorge (22q11.2 deletion)', significance: 'key' },
    { sign: 'Infant: FTT, thrush, chronic diarrhoea, no T cells', mechanism: 'SCID (IL2RG or ADA)', significance: 'key' },
    { sign: 'Eczema + thrombocytopenia + infections (boy)', mechanism: 'Wiskott-Aldrich syndrome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Recurrent encapsulated-bacterial sinopulmonary infection', meaning: 'Antibody (B-cell) deficiency — check Ig levels' },
    { clue: 'Commonest primary immunodeficiency, often asymptomatic', meaning: 'Selective IgA deficiency' },
    { clue: 'PCP + high IgM in a boy', meaning: 'X-linked hyper-IgM (CD40L)' },
    { clue: 'Neonatal tetany + T-cell deficiency + heart defect', meaning: 'DiGeorge (22q11) — FISH for deletion' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Antibody deficiencies → immunoglobulin replacement (IVIG); SCID → haematopoietic stem-cell transplant / gene therapy (and newborn screening by TRECs); live vaccines are contraindicated in T-cell/combined defects. Phagocyte & complement PIDs: [[primary-immunodeficiency-phagocyte-complement]].' },
  ],

  mnemonics: [
    { hook: 'Antibody = encapsulated bacteria; T cell = virus/fungus/PCP; combined = everything early', expansion: ['BTK=XLA, CD40L=hyper-IgM, 22q11=DiGeorge, IL2RG/ADA=SCID'] },
    { hook: 'Wiscott-Aldrich = "WATER": Wiskott, Aldrich, Thrombocytopenia, Eczema, Recurrent infection', expansion: ['X-linked WAS'] },
  ],

  traps: [
    {
      questionCategory: 'Selective IgA deficiency reaction',
      wrongInstinct: 'IgA deficiency is always symptomatic with severe infections',
      rightAnswer: 'Most selective IgA deficiency is asymptomatic; a classic clue is ANAPHYLAXIS to blood products/IVIG (anti-IgA antibodies)',
      why: 'It is the commonest and often silent PID; the exam hook is transfusion anaphylaxis, not overwhelming infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 9-month-old boy has recurrent pyogenic infections, undetectable B cells, and very low levels of all immunoglobulin classes. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Selective IgA deficiency' },
        { id: 'b', text: 'X-linked (Bruton) agammaglobulinaemia' },
        { id: 'c', text: 'DiGeorge syndrome' },
        { id: 'd', text: 'Chronic granulomatous disease' },
      ],
      answerId: 'b',
      explanation: 'A BTK defect blocks B-cell maturation → absent B cells and panhypogammaglobulinaemia in a male infant after maternal IgG wanes. DiGeorge is a T-cell defect; CGD is a phagocyte defect.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A boy has hypocalcaemic tetany, a conotruncal cardiac defect, and a T-cell deficiency. Which deletion is responsible?',
      options: [
        { id: 'a', text: '22q11.2 (DiGeorge)' },
        { id: 'b', text: 'X-linked IL2RG' },
        { id: 'c', text: 'Adenosine deaminase gene' },
        { id: 'd', text: 'BTK' },
      ],
      answerId: 'a',
      explanation: 'DiGeorge syndrome (22q11.2 deletion) causes thymic and parathyroid hypoplasia (T-cell deficiency + hypocalcaemia) with conotruncal heart defects — "CATCH-22".',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Immunodeficiency: defect → infection', svg: IMMUNODEFICIENCY_MAP, caption: 'B-cell/antibody → encapsulated bacteria; T-cell → viral/fungal/PCP; combined → all, early; with example diseases.' },
  ],
};

export default primaryImmunodeficiencyAntibodyT;
