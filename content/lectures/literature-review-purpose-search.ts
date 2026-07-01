import type { Lecture } from '../../lib/types';

export const literatureReviewPurposeSearch: Lecture = {
  id: 'literature-review-purpose-search',
  title: 'Literature Review: Purpose, Sources & Search Strategy',
  system: 'research',
  source: 'L3 — Literature Review',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L3 Literature Review' },
    { kind: 'mechanism', label: 'Search strategy' },
    { kind: 'exam', label: 'Sources · databases' },
  ],

  highYield: [
    '**A literature review positions your study in what is already known.** Its purposes: (1) **identify the gap** (what is *not* yet known → justifies your question), (2) **inform methodology** (which design, tools, sample size others used), (3) **build the conceptual framework**, (4) **avoid duplication**, and (5) **interpret your results** against prior findings.',
    '**Source hierarchy: primary → secondary → tertiary.** *Primary* = original research (the actual study/RCT/report). *Secondary* = summarises/analyses primaries (systematic reviews, meta-analyses, narrative reviews). *Tertiary* = compiles/condenses (textbooks, encyclopaedias, clinical guidelines). For a research project, lean on **primary sources**; use reviews to find them.',
    '**Where to search — use real academic databases, not just Google.** **PubMed/MEDLINE** (biomedical), **Scopus**, **Web of Science**, **Cochrane Library** (systematic reviews), **Google Scholar** (broad but noisy). Thai indices: **TCI (Thai-Journal Citation Index)**.',
    '**Search strategy = keywords + Boolean logic + filters.** Extract keywords from your **PICO**. Combine with **AND** (narrows — all terms), **OR** (broadens — synonyms), **NOT** (excludes). Use **MeSH terms**, truncation/wildcards (e.g. `diabet*`), phrase quotes, and filters (date, language, article type). Document the strategy so it is reproducible.',
    '**Then screen and appraise — not everything is equal.** Read by **title → abstract → full text**, applying inclusion/exclusion criteria. Prioritise by the **hierarchy of evidence** and journal quality; watch for **predatory journals**. Note each study’s design, sample, findings, and limitations for later synthesis.',
  ],

  mechanism: {
    title: 'Gap-finding search pipeline',
    steps: [
      { id: 's1', label: 'Define purpose: find the gap + inform methods' },
      { id: 's2', label: 'Derive keywords from PICO' },
      { id: 's3', label: 'Search databases with Boolean AND/OR/NOT + MeSH', emphasis: 'key' },
      { id: 's4', label: 'Prefer primary sources; use reviews to locate them' },
      { id: 's5', label: 'Screen title→abstract→full text; appraise quality', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'AND narrows, OR broadens, NOT excludes', mechanism: 'Boolean operators shape search sensitivity vs specificity', significance: 'key' },
    { sign: 'RCT report = primary; systematic review = secondary; textbook = tertiary', mechanism: 'Source hierarchy by proximity to original data', significance: 'key' },
    { sign: 'diabet* (truncation)', mechanism: 'Wildcard captures diabetes, diabetic, diabetics', significance: 'supportive' },
    { sign: 'Cochrane Library', mechanism: 'Gold-standard database of systematic reviews', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Too few results', meaning: 'Broaden: add OR synonyms, remove filters, use truncation' },
    { clue: 'Thousands of irrelevant hits', meaning: 'Narrow: add AND terms, use MeSH, apply date/type filters' },
    { clue: 'You want the *original* trial, not a summary', meaning: 'Seek the primary source (the study itself)' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Record your full search string and databases (reproducibility). Use primary sources for claims; keep a citation manager from day one.' },
  ],

  mnemonics: [
    { hook: 'Boolean: AND = All (narrow), OR = Options (broad), NOT = No', expansion: ['AND intersects, OR unions, NOT subtracts'] },
    { hook: 'Primary → Secondary → Tertiary', expansion: ['Original study → review → textbook'] },
  ],

  traps: [
    {
      questionCategory: 'Boolean operators',
      wrongInstinct: 'Using OR narrows the search to fewer, more relevant results',
      rightAnswer: 'OR *broadens* (captures any synonym); AND *narrows* (requires all terms together)',
      why: 'OR = union of sets (more results); AND = intersection (fewer, more specific results).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A systematic review of RCTs is best classified as which type of source?',
      options: [
        { id: 'a', text: 'Primary source' },
        { id: 'b', text: 'Secondary source' },
        { id: 'c', text: 'Tertiary source' },
        { id: 'd', text: 'Grey literature' },
      ],
      answerId: 'b',
      explanation: 'A systematic review analyses/summarises primary studies → secondary source. The individual RCT is primary; a textbook chapter is tertiary.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'To retrieve articles containing either "myocardial infarction" or "heart attack", you should combine the terms with:',
      options: [
        { id: 'a', text: 'AND' },
        { id: 'b', text: 'OR' },
        { id: 'c', text: 'NOT' },
        { id: 'd', text: 'A minus sign' },
      ],
      answerId: 'b',
      explanation: 'OR captures either synonym, broadening the search. AND would require both phrases in the same article; NOT excludes.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default literatureReviewPurposeSearch;
