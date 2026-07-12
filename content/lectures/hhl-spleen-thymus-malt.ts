import type { Lecture } from '../../lib/types';

export const hhlSpleenThymusMalt: Lecture = {
  id: 'hhl-spleen-thymus-malt',
  title: 'Spleen, Thymus & MALT Histology',
  system: 'heme',
  source: 'L5 — Histology of the Lymphoid System',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L5 Lymphoid histology' },
    { kind: 'exam', label: 'White/red pulp · Hassall' },
    { kind: 'mechanism', label: 'T-cell selection · culling/pitting' },
    { kind: 'disease', label: 'Asplenia · central tolerance' },
  ],

  highYield: [
    'Spleen **white pulp** = immune tissue: **PALS (periarteriolar lymphoid sheath) = T cells** around the central arteriole, with adjacent **B-cell follicles**; a **marginal zone** screens blood-borne encapsulated bacteria.',
    'Spleen **red pulp** = **cords of Billroth + sinusoids** (open circulation) → **culling** (destroys defective whole RBCs) and **pitting** (plucks out inclusions such as Howell–Jolly bodies).',
    'Thymus: **cortex = positive selection** (thymocytes binding self-MHC survive), **medulla = negative selection** (delete strongly self-reactive cells; **AIRE** displays self-antigen) with **Hassall corpuscles**; a **blood–thymus barrier** protects the cortex.',
    '**MALT/GALT** is unencapsulated mucosal lymphoid tissue: **Peyer patches** (ileum; **M cells** sample antigen, drive IgA) and the **tonsils of Waldeyer ring**.',
    'Loss of splenic pitting → **Howell–Jolly bodies** persist (see [[hhl-rbc-inclusions-arrangement]]) and risk of **encapsulated-organism sepsis** rises.',
  ],

  mechanism: {
    title: 'Spleen filters blood, thymus schools T cells, MALT guards mucosa',
    steps: [
      { id: 's1', label: 'Spleen white pulp: PALS = T cells (central artery), follicles = B cells', emphasis: 'key' },
      { id: 's2', label: 'Spleen red pulp: cords of Billroth + sinusoids → culling & pitting', emphasis: 'key' },
      { id: 's3', label: 'Thymus cortex = positive selection (bind self-MHC → survive)', emphasis: 'key' },
      { id: 's4', label: 'Thymus medulla = negative selection (delete self-reactive) + Hassall corpuscles', emphasis: 'key' },
      { id: 's5', label: 'MALT: Peyer patches (M cells, IgA), Waldeyer ring tonsils' },
    ],
  },

  examFindings: [
    { sign: 'Hassall corpuscles (concentric epithelial whorls)', mechanism: 'Hallmark of the thymic medulla', significance: 'key' },
    { sign: 'PALS wrapping a central arteriole', mechanism: 'T-cell zone of splenic white pulp', significance: 'key' },
    { sign: 'Howell–Jolly bodies after splenectomy', mechanism: 'Loss of splenic pitting', significance: 'key' },
    { sign: 'M cells overlying a Peyer patch', mechanism: 'Antigen sampling for gut mucosal immunity (IgA)', significance: 'supportive' },
    { sign: 'Marginal zone at the white/red pulp interface', mechanism: 'Screens blood-borne encapsulated bacteria', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Concentric keratinised epithelial whorls in lymphoid tissue', meaning: 'Hassall corpuscles → thymic medulla' },
    { clue: 'Central arteriole sheathed by T cells', meaning: 'Splenic white pulp (PALS)' },
    { clue: 'Howell–Jolly bodies + target cells on the film', meaning: 'Hyposplenism (lost pitting/culling)' },
    { clue: 'Aggregated lymphoid follicles with M cells in the ileum', meaning: 'Peyer patches (GALT)' },
  ],

  treatment: [
    { logic: 'Function follows structure', detail: 'Splenic red pulp does culling/pitting — its loss gives Howell–Jolly bodies + encapsulated-organism risk → vaccinate the asplenic patient; thymic cortex/medulla enforce central tolerance (failure → autoimmunity, e.g. AIRE defects); MALT supplies mucosal IgA.' },
  ],

  mnemonics: [
    { hook: 'Spleen: PALS = T (around the central artery), follicles = B; red pulp culls & pits', expansion: ['Culling = destroy defective whole RBCs', 'Pitting = pluck out inclusions (Howell–Jolly)', 'Marginal zone screens encapsulated bacteria'] },
    { hook: 'Thymus: Cortex = Positive (bind self-MHC → live); Medulla = negative (delete self-reactive)', expansion: ['Hassall corpuscles mark the medulla', 'AIRE displays self-antigen for negative selection', 'Blood–thymus barrier protects the cortex'] },
  ],

  traps: [
    {
      questionCategory: 'Positive vs negative T-cell selection',
      wrongInstinct: 'Positive selection deletes self-reactive T cells',
      rightAnswer: 'Positive selection (cortex) RESCUES thymocytes that can bind self-MHC; NEGATIVE selection (medulla) deletes strongly self-reactive ones',
      why: 'Positive = "can you see self-MHC at all?" (survive); negative = "do you bind self too strongly?" (die) — students routinely swap these.',
    },
    {
      questionCategory: 'Splenic culling vs pitting',
      wrongInstinct: 'The spleen only destroys whole red cells',
      rightAnswer: 'Culling destroys defective whole RBCs; PITTING removes inclusions (Howell–Jolly/Heinz bodies) while keeping the cell',
      why: 'After splenectomy pitting is lost, so Howell–Jolly bodies persist in circulating red cells — a classic film clue.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Hassall corpuscles — concentric whorls of epithelial cells — are a histological hallmark of the:',
      options: [
        { id: 'a', text: 'Splenic white pulp' },
        { id: 'b', text: 'Thymic medulla' },
        { id: 'c', text: 'Lymph-node germinal centre' },
        { id: 'd', text: 'Peyer patch' },
      ],
      answerId: 'b',
      explanation: 'Hassall corpuscles are found in the thymic medulla; the cortex is where immature thymocytes undergo positive selection.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In the spleen, the periarteriolar lymphoid sheath (PALS) surrounding the central arteriole is composed mainly of:',
      options: [
        { id: 'a', text: 'B cells' },
        { id: 'b', text: 'T cells' },
        { id: 'c', text: 'Plasma cells' },
        { id: 'd', text: 'Macrophages of the cords of Billroth' },
      ],
      answerId: 'b',
      explanation: 'The PALS of the white pulp is the T-cell zone around the central arteriole; B-cell follicles sit adjacent, while the red-pulp cords of Billroth handle RBC filtration.',
      tests: 'exam',
    },
  ],
};

export default hhlSpleenThymusMalt;
