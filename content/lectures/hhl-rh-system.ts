import type { Lecture } from '../../lib/types';

export const hhlRhSystem: Lecture = {
  id: 'hhl-rh-system',
  title: 'Rh System & Clinical Significance',
  system: 'heme',
  source: 'L17 — ABO & Rh Blood Groups; HDN',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L17 Blood Groups' },
    { kind: 'disease', label: 'Rh alloimmunization' },
    { kind: 'mechanism', label: 'Immune IgG anti-D' },
    { kind: 'investigation', label: 'Antibody screen / IAT' },
  ],

  highYield: [
    'The **D antigen is the most immunogenic** red-cell antigen; **RhD-positive** = D present, **RhD-negative** = D absent (with no naturally-occurring anti-D).',
    '**Anti-D is an IMMUNE IgG** — it forms only after exposure (transfusion or pregnancy) and, being IgG, **crosses the placenta** → **HDN** and **delayed hemolytic transfusion reactions**. Contrast the natural IgM of ABO. See [[hhl-hdn]].',
    '**Weak D** = reduced D expression; confirm carefully before labelling a recipient D-negative (when uncertain, give D-negative to women of childbearing potential).',
    'Other clinically important IgG systems: **Kell (anti-K — strongly immunogenic, also suppresses fetal erythropoiesis)**, **Kidd (anti-Jk — notorious for delayed hemolytic reactions)**, **Duffy**. See [[hhl-hemolytic-transfusion-reactions]].',
    '**Duffy-null red cells Fy(a-b-) resist Plasmodium vivax** invasion — a classic tropical-medicine link (common in West-African ancestry).',
  ],

  mechanism: {
    title: 'Exposure → immune IgG anti-D → IgG-mediated hemolysis',
    steps: [
      { id: 's1', label: 'RhD-negative host meets D-positive RBCs (transfusion or fetomaternal bleed)' },
      { id: 's2', label: 'Primary response → class-switch to IgG anti-D', emphasis: 'key' },
      { id: 's3', label: 'Antibody persists; re-exposure → rapid anamnestic rise' },
      { id: 's4', label: 'IgG-coated cells removed extravascularly → delayed hemolytic reaction', emphasis: 'key' },
      { id: 's5', label: 'IgG crosses placenta in a later pregnancy → fetal hemolysis (HDN)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Positive antibody screen with anti-D specificity', mechanism: 'Prior sensitization from transfusion/pregnancy', significance: 'key' },
    { sign: 'Hb falls 3–14 days post-transfusion with a positive DAT', mechanism: 'Anamnestic IgG (Rh/Kidd) → delayed extravascular hemolysis', significance: 'key' },
    { sign: 'Positive neonatal DAT in a baby of a sensitized D-negative mother', mechanism: 'Maternal IgG anti-D coating fetal cells', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'RhD-negative recipient with a positive anti-D antibody screen', meaning: 'Already sensitized — give D-negative, antigen-matched blood' },
    { clue: 'Antibody detected only by indirect antiglobulin test (IAT), not saline phase', meaning: 'IgG (immune) alloantibody such as anti-D/anti-K/anti-Jk' },
    { clue: 'Weak/discrepant reaction on D typing', meaning: 'Weak D — confirm before labelling D-negative' },
    { clue: 'Resistance to P. vivax in a Duffy-null patient', meaning: 'Fy(a-b-) cells lack the vivax receptor' },
  ],

  treatment: [
    { logic: 'Give RhD-negative red cells to D-negative recipients', detail: 'Especially girls and women of childbearing potential — prevents anti-D formation and future HDN.' },
    { logic: 'Provide antigen-negative units once an alloantibody is identified', detail: 'e.g. K-negative or Jk-matched — prevents anamnestic delayed hemolysis.' },
    { logic: 'Anti-D immunoglobulin at sensitizing events in D-negative mothers', detail: 'Prevents Rh HDN — detailed in [[hhl-hdn]].' },
  ],

  mnemonics: [
    { hook: 'Rh anti-D: Immune, IgG, In pregnancy', expansion: ['Not natural — needs exposure', 'IgG → crosses placenta → HDN', 'IgG → delayed (extravascular) transfusion reactions'] },
    { hook: 'Duffy-null dodges vivax', expansion: ['Fy(a-b-) lacks the P. vivax red-cell receptor', 'Common in West-African ancestry'] },
  ],

  traps: [
    {
      questionCategory: 'IgM vs IgG blood-group antibodies',
      wrongInstinct: 'Anti-D behaves like anti-A/anti-B — present naturally and causing immediate intravascular hemolysis',
      rightAnswer: 'Anti-D is an immune IgG that must be induced by exposure; it causes delayed extravascular hemolysis and crosses the placenta',
      why: 'ABO antibodies are natural IgM (intravascular); Rh antibodies are immune IgG (extravascular, placental).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why can anti-D cause hemolytic disease of the newborn while ABO antibodies usually cause only mild disease?',
      options: [
        { id: 'a', text: 'Anti-D is IgM and cannot cross the placenta' },
        { id: 'b', text: 'Anti-D is IgG and crosses the placenta' },
        { id: 'c', text: 'The D antigen is not expressed on fetal cells' },
        { id: 'd', text: 'ABO antibodies are complement-independent' },
      ],
      answerId: 'b',
      explanation: 'Immune anti-D is IgG, which crosses the placenta to hemolyse fetal cells; naturally-occurring ABO antibodies are largely IgM and cross poorly.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient of West-African descent is repeatedly resistant to Plasmodium vivax malaria. Which red-cell phenotype explains this?',
      options: [
        { id: 'a', text: 'Kell-negative' },
        { id: 'b', text: 'Bombay' },
        { id: 'c', text: 'Duffy-null Fy(a-b-)' },
        { id: 'd', text: 'Weak D' },
      ],
      answerId: 'c',
      explanation: 'P. vivax uses the Duffy glycoprotein to invade red cells; Duffy-null Fy(a-b-) individuals lack this receptor and resist vivax.',
      tests: 'disease',
    },
  ],
};

export default hhlRhSystem;
