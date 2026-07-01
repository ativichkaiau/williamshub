import type { Lecture } from '../../lib/types';

export const academicAuthorship: Lecture = {
  id: 'academic-authorship',
  title: 'Academic Authorship: ICMJE Criteria, Order & Misconduct',
  system: 'research',
  source: 'L9 — Academic Authorship',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L9 Authorship' },
    { kind: 'mechanism', label: 'ICMJE criteria' },
    { kind: 'exam', label: 'Ghost vs gift · FFP' },
  ],

  highYield: [
    '**Authorship is the currency of science** — recognition, promotion, tenure, and grants all flow from it — so *who* is an author and *in what order* carries real weight and real disputes.',
    '**ICMJE criteria — an author must meet ALL of these:** (1) **substantial contribution** to conception/design OR acquisition/analysis/interpretation of data; **AND** (2) **drafting or critically revising** the manuscript for important intellectual content; **AND** (3) **final approval** of the version to be published; **AND** (4) **accountability** for the accuracy and integrity of the work. Meeting only one (e.g. only funding, or only supervising) is *not* enough.',
    '**Author roles.** **First author** = did the most work (usually the one who wrote it). **Corresponding author** = handles submission/communication and fields queries after publication. **Last/senior author** = the supervisor/PI who conceived or led the lab. **Co-authors** = the others who meet the criteria. There should be an **accountable author** (usually first or last).',
    '**Unethical authorship.** **Gift / guest / honorary authorship** = crediting someone (e.g. a department head) who did *not* contribute. **Ghost authorship** = someone who *did* contribute (often a professional/industry writer) is *not* credited. Both distort the record. Contributors who don’t meet ICMJE criteria belong in **Acknowledgements**, not the author list.',
    '**Research misconduct — "FFP".** **Fabrication** (inventing data), **Falsification** (manipulating/altering data or images), and **Plagiarism** (using others’ words/ideas as your own, including **self-plagiarism**). Also disclose **conflicts of interest** and avoid **duplicate/fragmentary (salami) publication**. Prevention of authorship disputes: **agree order and roles up-front, early in the project.**',
  ],

  mechanism: {
    title: 'Who qualifies → what order → stay honest',
    steps: [
      { id: 's1', label: 'Apply all 4 ICMJE criteria (contribution + drafting + approval + accountability)', emphasis: 'key' },
      { id: 's2', label: 'First = most work; corresponding = communicates; last = senior/PI' },
      { id: 's3', label: 'Gift/guest = undeserved credit; ghost = deserved but omitted', emphasis: 'danger' },
      { id: 's4', label: 'Non-qualifying helpers → Acknowledgements' },
      { id: 's5', label: 'Avoid FFP (fabrication/falsification/plagiarism); agree order early', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'ICMJE = contribution + drafting/revising + final approval + accountability', mechanism: 'ALL four required to be listed as an author', significance: 'key' },
    { sign: 'Gift/honorary authorship', mechanism: 'Named without contributing (e.g. head of department) — unethical', significance: 'key' },
    { sign: 'Ghost authorship', mechanism: 'Real contributor deliberately left off the author list — unethical', significance: 'key' },
    { sign: 'First = most work; last = senior/PI; corresponding = handles queries', mechanism: 'Conventional meaning of author order', significance: 'supportive' },
    { sign: 'Fabrication vs falsification vs plagiarism (FFP)', mechanism: 'Invent data / alter data / steal words — the three core misconducts', significance: 'key' },
  ],

  investigations: [
    { clue: 'Department head added though they contributed nothing', meaning: 'Gift/honorary authorship (unethical)' },
    { clue: 'Industry writer drafted the paper but isn’t listed', meaning: 'Ghost authorship (unethical)' },
    { clue: 'A technician who ran assays but did not design/write', meaning: 'Does not meet ICMJE → Acknowledgements, not authorship' },
    { clue: 'Reusing your own prior figures/text without citation', meaning: 'Self-plagiarism (a form of plagiarism)' },
  ],

  treatment: [
    { logic: 'Prevention', detail: 'Discuss authorship and order at the START of the project and revisit as roles change. Apply ICMJE to each person; move sub-threshold helpers to Acknowledgements; disclose conflicts of interest.' },
  ],

  mnemonics: [
    { hook: 'ICMJE = "Contribute, Draft, Approve, Accountable"', expansion: ['All four, not just one'] },
    { hook: 'Gift = undeserved IN; Ghost = deserved OUT', expansion: ['Both are dishonest authorship'] },
    { hook: 'Misconduct = FFP: Fabrication, Falsification, Plagiarism', expansion: ['Invent / alter / steal'] },
  ],

  traps: [
    {
      questionCategory: 'Does funding earn authorship?',
      wrongInstinct: 'Providing the grant money or being the department head automatically makes you an author',
      rightAnswer: 'Funding or supervision alone does NOT meet ICMJE criteria; without intellectual contribution + drafting + approval + accountability, that person belongs in Acknowledgements',
      why: 'Adding a non-contributor for status is gift/honorary authorship — explicitly unethical under ICMJE.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A senior professor is added as a co-author solely because they head the department, without any contribution to the study. This is:',
      options: [
        { id: 'a', text: 'Ghost authorship' },
        { id: 'b', text: 'Gift (honorary) authorship' },
        { id: 'c', text: 'Corresponding authorship' },
        { id: 'd', text: 'Acceptable senior authorship' },
      ],
      answerId: 'b',
      explanation: 'Crediting a non-contributor for prestige is gift/honorary authorship — unethical. Ghost authorship is the opposite: a real contributor left off the list.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which contribution, on its own, satisfies the ICMJE criteria for authorship?',
      options: [
        { id: 'a', text: 'Only obtaining the funding' },
        { id: 'b', text: 'Only general supervision of the group' },
        { id: 'c', text: 'None alone — all four ICMJE criteria (contribution, drafting/revising, final approval, accountability) must be met' },
        { id: 'd', text: 'Only collecting the data' },
      ],
      answerId: 'c',
      explanation: 'ICMJE requires ALL four criteria together. Funding, supervision, or data collection alone are insufficient and warrant Acknowledgement rather than authorship.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default academicAuthorship;
