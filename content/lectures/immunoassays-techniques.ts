import type { Lecture } from '../../lib/types';
import { IMMUNOASSAY } from '../../lib/figures';

export const immunoassaysTechniques: Lecture = {
  id: 'immunoassays-techniques',
  title: 'Immunoassays: ELISA, Blotting, Flow Cytometry',
  system: 'immune',
  source: 'L14 — Antigen-Antibody Reactions',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L14 Ag-Ab Reactions' },
    { kind: 'mechanism', label: 'Labelled detection' },
    { kind: 'exam', label: 'ELISA · Western · flow' },
  ],

  highYield: [
    '**ELISA (enzyme-linked immunosorbent assay)** uses an **enzyme-labelled antibody** that produces a **colour change** proportional to the amount of antigen/antibody — highly **sensitive and quantitative**. Formats: **direct, indirect** (detect serum antibody, e.g. HIV screen), and **sandwich** (capture + detection antibody for antigen).',
    '**Western blot (immunoblot):** proteins are separated by size (SDS-PAGE), transferred to a membrane, and probed with **specific antibody** → identifies a protein by size + specificity. Classically the **HIV confirmatory** test after a positive ELISA screen (a sensitive screen → specific confirmation algorithm).',
    '**Immunofluorescence / immunohistochemistry:** antibody tagged with a **fluorochrome** (IF) or enzyme (IHC) localises antigen in cells/tissue → used for **ANA patterns** (SLE), tissue diagnosis, and identifying tumour markers (recall IF cytoskeletal markers).',
    '**Flow cytometry:** cells in suspension are stained with **fluorochrome-labelled antibodies against surface/intracellular markers (CD molecules)** and counted/sorted one by one — the basis of **CD4 counts in HIV**, immunophenotyping leukaemias/lymphomas, and lymphocyte-subset analysis.',
    '**Choosing an assay:** a **sensitive screening** test (ELISA — few false negatives) is followed by a **specific confirmatory** test (Western blot — few false positives). Labels (enzyme, fluorochrome, radioisotope) turn an invisible antigen–antibody reaction into a readable signal.',
  ],

  mechanism: {
    title: 'Label the antibody → read the signal',
    steps: [
      { id: 's1', label: 'ELISA: enzyme-Ab → colour ∝ amount (sensitive, quantitative)', emphasis: 'key' },
      { id: 's2', label: 'Western blot: size-separate + specific Ab (HIV confirm)', emphasis: 'key' },
      { id: 's3', label: 'Immunofluorescence/IHC: localise antigen in tissue' },
      { id: 's4', label: 'Flow cytometry: count/sort cells by CD markers', emphasis: 'key' },
      { id: 's5', label: 'Screen (sensitive) → confirm (specific)' },
    ],
  },

  examFindings: [
    { sign: 'Colour change proportional to analyte in a microplate', mechanism: 'ELISA (enzyme-linked)', significance: 'key' },
    { sign: 'Positive HIV screen confirmed by band pattern', mechanism: 'ELISA screen → Western blot confirmation', significance: 'key' },
    { sign: 'CD4 T-cell count in an HIV patient', mechanism: 'Flow cytometry (fluorochrome anti-CD4)', significance: 'key' },
    { sign: 'ANA pattern on a fluorescent substrate', mechanism: 'Indirect immunofluorescence (SLE screen)', significance: 'supportive' },
    { sign: 'Immunophenotyping a leukaemia', mechanism: 'Flow cytometry of CD markers', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Sensitive quantitative colour-based antibody/antigen test', meaning: 'ELISA' },
    { clue: 'Confirmatory test after a positive HIV ELISA', meaning: 'Western blot' },
    { clue: 'Technique counting cells by surface CD markers', meaning: 'Flow cytometry' },
    { clue: 'Method to localise an antigen within a tissue section', meaning: 'Immunohistochemistry / immunofluorescence' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These assays are the daily tools of diagnosis: HIV testing, CD4 monitoring, autoantibody panels ([[autoimmune-disease-examples]]), tumour immunophenotyping, and pregnancy/hormone tests. Binding principles behind them: [[antigen-antibody-principles]].' },
  ],

  mnemonics: [
    { hook: 'ELISA = Enzyme + colour (sensitive screen); Western = protein by size (specific confirm)', expansion: ['Screen sensitive → confirm specific'] },
    { hook: 'Flow cytometry = "count cells by CD tags" (CD4 in HIV)', expansion: ['Fluorochrome antibodies'] },
  ],

  traps: [
    {
      questionCategory: 'Screen vs confirm',
      wrongInstinct: 'A confirmatory Western blot is used first because it is the most sensitive test',
      rightAnswer: 'Screen with the SENSITIVE test (ELISA) first, then CONFIRM positives with the SPECIFIC test (Western blot)',
      why: 'Sensitive screening catches all true positives (few false negatives); specific confirmation removes false positives — the standard testing algorithm (e.g. HIV).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Measuring a patient\'s CD4⁺ T-lymphocyte count in HIV infection is performed by:',
      options: [
        { id: 'a', text: 'ELISA' },
        { id: 'b', text: 'Western blot' },
        { id: 'c', text: 'Flow cytometry' },
        { id: 'd', text: 'Precipitation' },
      ],
      answerId: 'c',
      explanation: 'Flow cytometry stains cells with fluorochrome-labelled anti-CD antibodies and counts them individually — used for CD4 counts and immunophenotyping.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In the standard HIV testing algorithm, a sensitive ELISA screen is followed by which specific confirmatory test?',
      options: [
        { id: 'a', text: 'Agglutination' },
        { id: 'b', text: 'Western blot (immunoblot)' },
        { id: 'c', text: 'Complement fixation' },
        { id: 'd', text: 'Skin-prick test' },
      ],
      answerId: 'b',
      explanation: 'A positive sensitive ELISA screen is confirmed by a specific Western blot showing antibody bands to key viral proteins — screen sensitive, confirm specific.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Antigen–antibody assays', svg: IMMUNOASSAY, caption: 'ELISA (enzyme colour), agglutination/precipitation, immunofluorescence, Western blot, flow cytometry; affinity vs avidity; titre.' },
  ],
};

export default immunoassaysTechniques;
