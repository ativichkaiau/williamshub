import type { Lecture } from '../../lib/types';

export const citationSynthesisConceptualFramework: Lecture = {
  id: 'citation-synthesis-conceptual-framework',
  title: 'Synthesis, Citation & the Conceptual Framework',
  system: 'research',
  source: 'L3 — Literature Review',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L3 Literature Review' },
    { kind: 'mechanism', label: 'Synthesis · citation' },
    { kind: 'exam', label: 'Plagiarism · framework' },
  ],

  highYield: [
    '**Synthesis ≠ summary.** A weak review *lists* studies ("A found X. B found Y."). A strong review **synthesises** — groups findings by theme, compares/contrasts, and shows where the field agrees, disagrees, and leaves gaps. A **matrix (synthesis) table** — rows = studies, columns = author/year, design, sample, findings, limitations — is the standard tool to organise this before writing.',
    '**Every claim needs a citation; every citation needs a matching reference.** Two parts: the **in-text citation** (marks the borrowed idea in the sentence) and the **reference list** (full details to locate the source). Common styles: **Vancouver** (numbered, standard in medicine), **APA/Harvard** (author-date). Consistency matters — one style throughout.',
    '**Use a reference manager** — EndNote, Zotero, or Mendeley — to store PDFs, insert citations, and auto-format the reference list in any style. This prevents mismatched or missing references (a common examiner catch).',
    '**Plagiarism = presenting others’ words/ideas as your own** — including **self-plagiarism** (reusing your own prior text without citing). Avoid by citing, paraphrasing properly (not just swapping words), and quoting directly when exact wording matters. This is an *integrity* issue, not just formatting.',
    '**The conceptual framework is the review’s payoff.** It is a **mental map, built from the literature, of the variables you will study and how they relate** (which is the exposure, outcome, confounder, mediator). It visualises your hypothesis, justifies which variables to measure, and links directly to your methodology.',
  ],

  mechanism: {
    title: 'Read → synthesise → cite → frame',
    steps: [
      { id: 's1', label: 'Extract each study into a matrix table (design/sample/findings/limits)' },
      { id: 's2', label: 'Synthesise by theme: agree / disagree / gap', emphasis: 'key' },
      { id: 's3', label: 'Cite every claim (in-text) + matching reference list' },
      { id: 's4', label: 'Paraphrase & attribute → avoid plagiarism (incl. self-)' },
      { id: 's5', label: 'Build the conceptual framework: variables + relationships', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Matrix / synthesis table', mechanism: 'Organises studies by theme to enable comparison, not just listing', significance: 'key' },
    { sign: 'In-text citation with no reference entry (or vice versa)', mechanism: 'Every citation must pair with a reference — common error', significance: 'key' },
    { sign: 'Reusing your own published paragraph uncited', mechanism: 'Self-plagiarism — still misconduct', significance: 'supportive' },
    { sign: 'Conceptual framework diagram', mechanism: 'Literature-derived map of study variables and their relationships', significance: 'key' },
  ],

  investigations: [
    { clue: 'Review reads as a list of disconnected summaries', meaning: 'Not synthesised — regroup by theme and compare' },
    { clue: 'Paraphrase that only swaps a few words', meaning: 'Still plagiarism — rewrite in your own structure and cite' },
    { clue: 'You cannot decide which variables to measure', meaning: 'Build the conceptual framework first — it names them' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Keep a synthesis matrix while reading; adopt one citation style + a reference manager from the start; draw the conceptual framework before writing methods.' },
  ],

  mnemonics: [
    { hook: 'Synthesise, don’t summarise', expansion: ['Compare & contrast → find the gap'] },
    { hook: 'Every citation ↔ one reference', expansion: ['In-text mark + full entry, no orphans'] },
  ],

  traps: [
    {
      questionCategory: 'Conceptual framework',
      wrongInstinct: 'The conceptual framework is just the reference list',
      rightAnswer: 'It is a literature-derived diagram/model of the study variables and how they relate (exposure, outcome, confounders)',
      why: 'It operationalises the hypothesis and tells you what to measure — it is not a bibliography.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Reusing substantial portions of your own previously published paper without citation is:',
      options: [
        { id: 'a', text: 'Acceptable, because it is your own work' },
        { id: 'b', text: 'Self-plagiarism, a form of misconduct' },
        { id: 'c', text: 'Fabrication' },
        { id: 'd', text: 'Falsification' },
      ],
      answerId: 'b',
      explanation: 'Recycling your own text without citing it is self-plagiarism. Fabrication = inventing data; falsification = altering data.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The conceptual framework of a study is best described as:',
      options: [
        { id: 'a', text: 'The list of all references cited' },
        { id: 'b', text: 'A literature-derived map of the study variables and their relationships' },
        { id: 'c', text: 'The statistical analysis plan' },
        { id: 'd', text: 'The informed consent form' },
      ],
      answerId: 'b',
      explanation: 'The conceptual framework diagrams the variables (exposure, outcome, confounders, mediators) and how they relate, built from the reviewed literature.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default citationSynthesisConceptualFramework;
