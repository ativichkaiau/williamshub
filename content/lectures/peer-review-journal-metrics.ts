import type { Lecture } from '../../lib/types';

export const peerReviewJournalMetrics: Lecture = {
  id: 'peer-review-journal-metrics',
  title: 'Peer Review, Journal Metrics & Predatory Publishing',
  system: 'research',
  source: 'L8 — Types of Research Publication',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L8 Publication Types' },
    { kind: 'mechanism', label: 'Peer review & metrics' },
    { kind: 'exam', label: 'Impact factor · predatory' },
  ],

  highYield: [
    '**Peer review = expert scrutiny before publication** — the quality-control gate of science. A submitted manuscript goes to independent experts who recommend **accept / minor or major revision / reject**. Types: **single-blind** (reviewers know authors), **double-blind** (both anonymised), and **open** peer review. It filters flawed work but is imperfect and slow.',
    '**The publication journey:** submit → editor screens → peer review → revise/resubmit → accept → (often) pay an **article processing charge (APC)** for open access → publish → indexing. Understanding it explains why publishing takes months and why not everything "published" is trustworthy.',
    '**Journal impact factor (JIF)** ≈ average citations in a year to articles a journal published in the **previous two years**. It’s a *journal-level* proxy for influence — **not** a measure of an individual paper’s quality. Journals are also ranked by **quartile (Q1–Q4)**; article-level and author metrics include the **h-index**.',
    '**Indexing = discoverability + a credibility signal.** Reputable databases: **PubMed/MEDLINE**, **Scopus**, **Web of Science**; nationally, **TCI (Thai-Journal Citation Index)**. Being indexed in these is a basic marker that a journal is legitimate.',
    '**Predatory journals** exploit the pay-to-publish model: they charge APCs but provide **little or no genuine peer review**, use aggressive spam solicitation, fake metrics, and false indexing claims. Red flags: guaranteed rapid acceptance, unsolicited emails, unclear fees, no real editorial board. Avoid them — publishing there wastes work and damages credibility.',
  ],

  mechanism: {
    title: 'Gatekeeping → metrics → legitimacy check',
    steps: [
      { id: 's1', label: 'Peer review (single/double-blind/open) screens quality', emphasis: 'key' },
      { id: 's2', label: 'Submit → review → revise → accept → (APC) → publish' },
      { id: 's3', label: 'Impact factor = journal-level citation proxy (not paper quality)', emphasis: 'key' },
      { id: 's4', label: 'Indexed in PubMed/Scopus/WoS/TCI = credibility signal' },
      { id: 's5', label: 'Spot predatory journals (fake review, spam, false metrics)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Peer review', mechanism: 'Independent expert evaluation before acceptance — quality control', significance: 'key' },
    { sign: 'Impact factor = citations to last 2 yrs’ articles', mechanism: 'Journal-level influence proxy, NOT single-paper quality', significance: 'key' },
    { sign: 'Guaranteed acceptance + spam invitations + hidden fees', mechanism: 'Hallmarks of a predatory journal', significance: 'key' },
    { sign: 'Indexed in PubMed/Scopus/TCI', mechanism: 'Basic legitimacy signal for a journal', significance: 'supportive' },
    { sign: 'Double-blind review', mechanism: 'Both authors and reviewers anonymised → reduces bias', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Email promising publication in 48 hours for a fee', meaning: 'Predatory journal — decline' },
    { clue: 'Judging a single paper by the journal’s impact factor', meaning: 'Category error — IF is journal-level, not article-level' },
    { clue: 'Checking whether a journal is trustworthy', meaning: 'Verify indexing (PubMed/Scopus/WoS/TCI) + real editorial board' },
    { clue: 'Reviewers and authors both anonymised', meaning: 'Double-blind peer review' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Target reputable, indexed journals matched to your field/scope; judge papers on their methods, not the journal’s impact factor; never submit to a journal that spams you or guarantees acceptance.' },
  ],

  mnemonics: [
    { hook: 'Impact factor rates the Journal, not the paper', expansion: ['2-year citation average'] },
    { hook: 'Predatory = "Pay, no Peer review, Promises, Pester"', expansion: ['Spam invites, fast fake acceptance, hidden fees'] },
  ],

  traps: [
    {
      questionCategory: 'What does impact factor measure?',
      wrongInstinct: 'A high journal impact factor means each individual paper in it is high quality',
      rightAnswer: 'Impact factor is a *journal-level* average of citations — it says nothing guaranteed about any single article',
      why: 'Papers in high-IF journals vary widely; appraise each paper by its own methods, not by where it was published.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A journal that charges a publication fee but performs little or no genuine peer review and spams authors with invitations is best described as:',
      options: [
        { id: 'a', text: 'An open-access megajournal' },
        { id: 'b', text: 'A predatory journal' },
        { id: 'c', text: 'A high-impact journal' },
        { id: 'd', text: 'A society journal' },
      ],
      answerId: 'b',
      explanation: 'Predatory journals exploit pay-to-publish while skipping real peer review, using spam solicitation and false metrics/indexing claims.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The journal impact factor is best understood as:',
      options: [
        { id: 'a', text: 'A measure of an individual article’s quality' },
        { id: 'b', text: 'The number of authors on a paper' },
        { id: 'c', text: 'A journal-level average of recent citations, not a per-paper quality metric' },
        { id: 'd', text: 'The rejection rate of a journal' },
      ],
      answerId: 'c',
      explanation: 'Impact factor ≈ average citations to the journal’s articles from the previous two years — a journal-level influence proxy, not a per-article quality guarantee.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default peerReviewJournalMetrics;
