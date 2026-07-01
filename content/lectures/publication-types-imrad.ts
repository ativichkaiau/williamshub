import type { Lecture } from '../../lib/types';
import { IMRAD_STRUCTURE } from '../../lib/figures';

export const publicationTypesImrad: Lecture = {
  id: 'publication-types-imrad',
  title: 'Types of Research Publication & the IMRaD Structure',
  system: 'research',
  source: 'L8 — Types of Research Publication',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L8 Publication Types' },
    { kind: 'mechanism', label: 'IMRaD anatomy' },
    { kind: 'exam', label: 'Article type ID' },
  ],

  highYield: [
    '**Publication disseminates findings to the scientific community** — via journals, books, conference proceedings, and online platforms — so work can be scrutinised, built upon, and credited. Publication is the "currency" of science.',
    '**Original (research) article** = reports the authors’ own **empirical** study (in vitro, in vivo, observational, or a trial/RCT). It is a **primary source** and follows the **IMRaD** structure. This is the backbone of the literature.',
    '**IMRaD = Introduction, Methods, Results, and Discussion**, framed by **Title + Abstract** (top) and **References** (bottom). Think of it as an **hourglass**: *Introduction* goes broad → the gap/question; *Methods* (design, sample, analysis) and *Results* (findings only) are the narrow, specific middle; *Discussion* opens back out to interpretation, implications, and limitations. **Read the Methods before believing the Results.**',
    '**Review article** = summarises/evaluates existing literature (a **secondary source**). **Narrative review** = broad expert overview, subjective. **Systematic review** = rigorous, reproducible methodology to find/appraise all relevant studies; a **meta-analysis** statistically pools their results → the top of the evidence hierarchy.',
    '**Other publication types.** **Case report / case series** (a novel or instructive patient or small group — hypothesis-generating, low on the evidence hierarchy), **editorial** (opinion/commentary by experts), **letter to the editor** (brief response or observation), and **textbook / book chapter** (tertiary, consolidated knowledge).',
  ],

  mechanism: {
    title: 'Pick the vehicle · read via IMRaD',
    steps: [
      { id: 's1', label: 'Original article = own empirical study (primary source)' },
      { id: 's2', label: 'IMRaD: Title/Abstract → Intro → Methods → Results → Discussion → Refs', emphasis: 'key' },
      { id: 's3', label: 'Hourglass: broad → specific (Methods/Results) → broad' },
      { id: 's4', label: 'Review = secondary (narrative vs systematic + meta-analysis)', emphasis: 'key' },
      { id: 's5', label: 'Other: case report/series, editorial, letter, textbook' },
    ],
  },

  examFindings: [
    { sign: 'IMRaD = Introduction, Methods, Results, Discussion', mechanism: 'Standard anatomy of an original article (+ Title/Abstract/References)', significance: 'key' },
    { sign: 'Systematic review + meta-analysis', mechanism: 'Reproducible search + statistical pooling → top of evidence hierarchy', significance: 'key' },
    { sign: 'Case report = single patient, hypothesis-generating', mechanism: 'Low on the evidence hierarchy, but flags the novel', significance: 'supportive' },
    { sign: 'Results section states findings only', mechanism: 'Interpretation belongs in the Discussion, not Results', significance: 'supportive' },
    { sign: 'Editorial / letter to the editor', mechanism: 'Opinion/commentary, not primary data', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A paper pooling 40 RCTs with a forest plot', meaning: 'Systematic review with meta-analysis (secondary, highest evidence)' },
    { clue: 'A one-off report of a rare presentation', meaning: 'Case report — hypothesis-generating, low evidence level' },
    { clue: 'You want to judge whether the Results are trustworthy', meaning: 'Scrutinise the Methods section first' },
    { clue: 'A broad expert overview with no explicit search method', meaning: 'Narrative review (subjective, secondary source)' },
  ],

  treatment: [
    { logic: 'Best practice', detail: 'Structure your own manuscript as IMRaD; keep Results free of interpretation; choose the publication type that matches your evidence (don’t inflate a case series into a "study").' },
  ],

  mnemonics: [
    { hook: 'IMRaD = "Introduction, Methods, Results, and Discussion"', expansion: ['Title/Abstract on top, References at the bottom'] },
    { hook: 'Hourglass: broad → narrow (Methods/Results) → broad', expansion: ['Read Methods before Results'] },
  ],

  traps: [
    {
      questionCategory: 'Where does interpretation go?',
      wrongInstinct: 'You can interpret and explain your findings in the Results section',
      rightAnswer: 'Results = findings only; interpretation, implications, and limitations belong in the Discussion',
      why: 'Mixing interpretation into Results is a classic manuscript error — IMRaD deliberately separates "what we found" from "what it means".',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which publication type is a PRIMARY source reporting the authors’ own empirical study?',
      options: [
        { id: 'a', text: 'Narrative review' },
        { id: 'b', text: 'Original research article' },
        { id: 'c', text: 'Textbook chapter' },
        { id: 'd', text: 'Editorial' },
      ],
      answerId: 'b',
      explanation: 'The original research article reports the authors’ own study (primary source, IMRaD). Reviews and textbooks are secondary/tertiary; editorials are opinion.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'In IMRaD, statistical pooling of results from multiple studies would appear in which type of paper?',
      options: [
        { id: 'a', text: 'Case report' },
        { id: 'b', text: 'Letter to the editor' },
        { id: 'c', text: 'Meta-analysis (within a systematic review)' },
        { id: 'd', text: 'Editorial' },
      ],
      answerId: 'c',
      explanation: 'A meta-analysis statistically combines results from multiple studies, usually within a systematic review — the highest tier of the evidence hierarchy.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'IMRaD hourglass', svg: IMRAD_STRUCTURE, caption: 'Introduction (broad→gap) → Methods & Results (specific) → Discussion (broad again). Title/Abstract on top, References below.' },
  ],
};

export default publicationTypesImrad;
