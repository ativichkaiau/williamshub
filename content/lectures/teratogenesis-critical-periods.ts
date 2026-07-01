import type { Lecture } from '../../lib/types';

export const teratogenesisCriticalPeriods: Lecture = {
  id: 'teratogenesis-critical-periods',
  title: 'Teratogenesis & Critical Periods',
  system: 'repro',
  source: 'L4 — Congenital Anomalies & Teratology',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L4' },
    { kind: 'mechanism', label: 'Timing-dose-genotype interaction' },
    { kind: 'exam', label: 'Organogenetic vulnerability' },
  ],
  highYield: [
    '**Teratology** studies abnormal development. Causes include chromosomal abnormalities, gene mutations, environmental teratogens, and multifactorial interaction; many cases remain unexplained.',
    'The three core principles in the lecture are **critical developmental period**, **dose of the drug/chemical**, and **genotype of the embryo**. The same exposure can produce different outcomes at different times or in different embryos.',
    'Very early exposure may cause embryonic death or an all-or-none effect. **Weeks 3-8 are maximally sensitive for major structural malformations** because organ primordia are forming.',
    'During the fetal period, organ systems mainly grow and mature, so exposures more often cause **functional disturbance, growth restriction, or minor anomalies**, although the CNS remains vulnerable for a prolonged interval.',
    'A teratogen is not defined by mere exposure: risk depends on whether an effective dose reaches a susceptible tissue during its critical window.',
  ],
  mechanism: {
    title: 'Exposure becomes phenotype only in the right context',
    steps: [
      { id: 's1', label: 'Teratogen dose and maternal-fetal transfer' },
      { id: 's2', label: 'Embryonic genotype modifies susceptibility' },
      { id: 's3', label: 'Critical developmental window determines target', emphasis: 'key' },
      { id: 's4', label: 'Death, malformation, growth effect, or functional deficit' },
    ],
  },
  examFindings: [
    { sign: 'Major organ malformation after exposure in weeks 3-8', mechanism: 'Organogenesis is maximally sensitive', significance: 'key' },
    { sign: 'Functional CNS deficit after later fetal exposure', mechanism: 'CNS remains developmentally vulnerable beyond initial organ formation', significance: 'supportive' },
    { sign: 'Different outcomes after the same maternal exposure', mechanism: 'Dose, timing, and embryonic genotype differ', significance: 'key' },
  ],
  investigations: [
    { clue: 'Exact exposure dose and developmental date', meaning: 'Map the exposure to organ-specific critical periods' },
    { clue: 'Detailed anatomic ultrasound', meaning: 'Screen structures formed during the exposure window' },
    { clue: 'Genetic evaluation', meaning: 'Separate or combine genetic and environmental contributions' },
  ],
  treatment: [
    { logic: 'Prevent exposure during vulnerable windows when possible', detail: 'Preconception medication review matters because organogenesis begins early.' },
    { logic: 'Counsel from dose-timing-genotype evidence', detail: 'Exposure alone does not equal inevitable malformation.' },
  ],
  mnemonics: [
    { hook: 'Teratogen risk = Time x Titer x Type of embryo', expansion: ['Critical period', 'Dose', 'Genotype'] },
    { hook: 'Weeks 3-8 build the organs - major defects live here', expansion: ['Organogenetic period'] },
  ],
  traps: [
    {
      questionCategory: 'Predicting teratogenic outcome',
      wrongInstinct: 'A known teratogen always produces the same anomaly',
      rightAnswer: 'Outcome depends on developmental timing, effective dose, and embryonic genotype',
      why: 'Teratogenesis is an interaction, not a fixed one-exposure/one-defect rule.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'During which interval is an embryo generally most vulnerable to major structural malformations?',
      options: [
        { id: 'a', text: 'Weeks 3-8 after fertilization' },
        { id: 'b', text: 'Only the day of fertilization' },
        { id: 'c', text: 'The final week before birth only' },
        { id: 'd', text: 'After childhood' },
      ],
      answerId: 'a',
      explanation: 'Weeks 3-8 encompass organogenesis, when disruption of organ primordia produces major structural anomalies.',
      tests: 'exam',
    },
  ],
};

export default teratogenesisCriticalPeriods;
