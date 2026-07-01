import type { Lecture } from '../../lib/types';
import { HYPERSENSITIVITY_TYPES } from '../../lib/figures';

export const hypersensitivityType12: Lecture = {
  id: 'hypersensitivity-type-1-2',
  title: 'Hypersensitivity Types I & II',
  system: 'immune',
  source: 'L13 — Hypersensitivity',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L13 Hypersensitivity' },
    { kind: 'mechanism', label: 'IgE · anti-cell antibody' },
    { kind: 'exam', label: 'Type I vs II' },
  ],

  highYield: [
    '**Hypersensitivity = an exaggerated/misdirected immune response that damages the host.** Four types (**"ACID"**): I **A**llergic (IgE), II **C**ytotoxic (antibody vs cell), III **I**mmune-complex, IV **D**elayed (T-cell). Types I–III are antibody-mediated; IV is T-cell-mediated.',
    '**Type I (immediate/allergic) = IgE-mediated.** First exposure sensitises (Th2 → IgE coats mast cells/basophils via **FcεRI**). Re-exposure **cross-links IgE → mast-cell degranulation** releasing **histamine** (+ leukotrienes/prostaglandins) within **minutes**. Early phase (vasodilation, bronchospasm) + late phase (eosinophils).',
    '**Type I spectrum:** local (**allergic rhinitis, asthma, urticaria, food/atopic**) to systemic **anaphylaxis** (airway oedema, bronchospasm, hypotension) — treated with **adrenaline**. Diagnosed with **skin-prick tests** and **specific IgE**.',
    '**Type II (antibody-mediated cytotoxic) = IgG/IgM against a FIXED cell/tissue antigen.** Mechanisms: **complement-mediated lysis, opsonisation/phagocytosis, and ADCC**; or **receptor modulation** (activating/blocking) without cell destruction.',
    '**Type II examples:** **autoimmune haemolytic anaemia, ITP, transfusion reactions, haemolytic disease of the newborn (Rh), Goodpasture (anti-GBM)**; receptor types = **Graves (stimulating anti-TSH-R)** and **myasthenia gravis (blocking anti-AChR)**. Detected by the **direct antiglobulin (Coombs) test**.',
  ],

  mechanism: {
    title: 'IgE mast cells (I) vs anti-cell antibody (II)',
    steps: [
      { id: 's1', label: 'Type I: allergen cross-links IgE on mast cells', emphasis: 'key' },
      { id: 's2', label: '→ histamine release in minutes (immediate)', emphasis: 'key' },
      { id: 's3', label: 'Spectrum: allergy → anaphylaxis (adrenaline)' },
      { id: 's4', label: 'Type II: IgG/IgM vs fixed cell/tissue antigen', emphasis: 'key' },
      { id: 's5', label: '→ complement/ADCC/phagocytosis or receptor modulation' },
    ],
  },

  examFindings: [
    { sign: 'Wheal-and-flare within minutes of allergen', mechanism: 'Type I — mast-cell histamine (IgE)', significance: 'key' },
    { sign: 'Anaphylaxis: hypotension + bronchospasm + urticaria', mechanism: 'Systemic type I → give adrenaline', significance: 'key' },
    { sign: 'Positive direct antiglobulin (Coombs) test', mechanism: 'Type II — antibody coating red cells', significance: 'key' },
    { sign: 'Haemolytic disease of the newborn (Rh)', mechanism: 'Type II — maternal anti-Rh IgG crosses placenta', significance: 'supportive' },
    { sign: 'Graves / myasthenia gravis', mechanism: 'Type II receptor modulation (activating/blocking)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Reaction occurring within minutes of exposure', meaning: 'Type I (immediate, IgE)' },
    { clue: 'Test for antibody coating red cells', meaning: 'Direct antiglobulin (Coombs) test — type II' },
    { clue: 'Cell whose degranulation drives type I', meaning: 'Mast cell (via FcεRI/IgE)' },
    { clue: 'Emergency drug for anaphylaxis', meaning: 'Adrenaline (epinephrine)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Type I: avoidance, antihistamines, adrenaline for anaphylaxis, anti-IgE (omalizumab), immunotherapy. Type II: immunosuppression, plasmapheresis, Rh immunoprophylaxis (anti-D). Types III & IV: [[hypersensitivity-type-3-4]]; autoimmune overlap: [[autoimmune-disease-examples]].' },
  ],

  mnemonics: [
    { hook: 'Type I = IgE + Immediate + hIstamIne; Type II = "2 = antibody vs cells" (Coombs)', expansion: ['ACID: Allergic, Cytotoxic, Immune-complex, Delayed'] },
    { hook: 'Anaphylaxis → Adrenaline', expansion: ['Systemic type I'] },
  ],

  traps: [
    {
      questionCategory: 'Type II vs Type III antibody target',
      wrongInstinct: 'Type II and type III hypersensitivity both involve soluble antigen–antibody complexes',
      rightAnswer: 'Type II antibody targets a FIXED antigen on a specific cell/tissue; type III involves SOLUBLE circulating immune complexes that deposit',
      why: 'Location of the antigen distinguishes them: fixed/cell-bound (II) vs soluble/deposited (III).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Anaphylaxis occurring within minutes of a bee sting in a sensitised person is which type of hypersensitivity?',
      options: [
        { id: 'a', text: 'Type I (IgE-mediated)' },
        { id: 'b', text: 'Type II (cytotoxic)' },
        { id: 'c', text: 'Type III (immune complex)' },
        { id: 'd', text: 'Type IV (delayed)' },
      ],
      answerId: 'a',
      explanation: 'Immediate reactions from allergen cross-linking IgE on mast cells (histamine release) are type I hypersensitivity; systemic form = anaphylaxis, treated with adrenaline.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A positive direct antiglobulin (Coombs) test in autoimmune haemolytic anaemia indicates which hypersensitivity mechanism?',
      options: [
        { id: 'a', text: 'Type I' },
        { id: 'b', text: 'Type II (antibody against a fixed cell antigen)' },
        { id: 'c', text: 'Type III' },
        { id: 'd', text: 'Type IV' },
      ],
      answerId: 'b',
      explanation: 'Autoimmune haemolytic anaemia is type II: IgG/IgM coats red cells (detected by the direct Coombs test), causing complement lysis and splenic phagocytosis.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The 4 hypersensitivity types', svg: HYPERSENSITIVITY_TYPES, caption: '"ACID": I Allergic (IgE), II Cytotoxic (anti-cell antibody), III Immune-complex, IV Delayed (T-cell).' },
  ],
};

export default hypersensitivityType12;
