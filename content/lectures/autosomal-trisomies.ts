import type { Lecture } from '../../lib/types';
import { AUTOSOMAL_TRISOMIES } from '../../lib/figures';

export const autosomalTrisomies: Lecture = {
  id: 'autosomal-trisomies',
  title: 'Autosomal Trisomies: Down, Edwards, Patau',
  system: 'molecular',
  source: 'L9 — Autosomal Chromosome Syndromes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L9 Autosomal Syndromes' },
    { kind: 'disease', label: 'Trisomy 21/18/13' },
    { kind: 'mechanism', label: 'Nondisjunction' },
    { kind: 'exam', label: 'Down syndrome cytogenetics' },
  ],

  highYield: [
    '**Only three autosomal trisomies survive to birth: trisomy 21 (Down), 18 (Edwards), 13 (Patau)** — all rise with **maternal age** (meiotic **nondisjunction**, usually maternal meiosis I).',
    '**Down syndrome (trisomy 21) — the most common (≈1/850)**: **hypotonia** (first sign), flat facial profile, **epicanthal folds, upslanting palpebral fissures, Brushfield spots, protruding tongue, single (simian) palmar crease**, clinodactyly. Complications: **AV septal / congenital heart disease (40–45%), duodenal atresia, ↑15× leukemia, early Alzheimer disease**.',
    '**Down cytogenetics: 95% free trisomy 21 (nondisjunction), 4% Robertsonian translocation, ~2% mosaic.** Only the **translocation** form has a high familial recurrence risk — e.g. a **rob(14;21)** carrier parent; a **21q;21q** carrier has ~100% affected offspring. Free-trisomy recurrence ≈ 1%.',
    '**Edwards syndrome (trisomy 18, ≈1/7,500)**: **prominent occiput, micrognathia, low-set ears, clenched fists with overlapping fingers, rocker-bottom feet, short sternum**, severe heart defects — most die within the first year.',
    '**Patau syndrome (trisomy 13, ≈1/15,000–25,000)**: **microcephaly/holoprosencephaly, cleft lip & palate, microphthalmia, iris coloboma, polydactyly, rocker-bottom feet** — most die within the first month.',
  ],

  mechanism: {
    title: 'Nondisjunction → extra chromosome → syndrome',
    steps: [
      { id: 's1', label: 'Maternal meiosis I nondisjunction (↑ with age)', emphasis: 'key' },
      { id: 's2', label: 'Trisomy 21 → Down; 18 → Edwards; 13 → Patau' },
      { id: 's3', label: 'Down: 95% free / 4% Robertsonian / 2% mosaic' },
      { id: 's4', label: 'Translocation form → high familial recurrence', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Hypotonia + flat facies + single palmar crease + Brushfield spots', mechanism: 'Down syndrome (trisomy 21)', significance: 'key' },
    { sign: 'Clenched fists with overlapping fingers + rocker-bottom feet + micrognathia', mechanism: 'Edwards syndrome (trisomy 18)', significance: 'key' },
    { sign: 'Cleft lip/palate + polydactyly + holoprosencephaly + microphthalmia', mechanism: 'Patau syndrome (trisomy 13)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Karyotype (free trisomy vs translocation vs mosaic)', meaning: 'Determines recurrence risk counseling' },
    { clue: 'Parental karyotype if Robertsonian translocation found', meaning: 'Identify carrier parent' },
    { clue: 'Echocardiogram (Down/Edwards)', meaning: 'Detect associated heart defects' },
  ],

  treatment: [
    { logic: 'Supportive; treat cardiac/GI anomalies', detail: 'Duodenal atresia repair, AVSD surgery in Down syndrome.' },
    { logic: 'Genetic counseling — depends on karyotype', detail: 'Translocation Down needs parental testing.' },
  ],

  mnemonics: [
    { hook: 'Drinking age 21 (Down), voting/election 18 (Edwards), puberty 13 (Patau)', expansion: ['Decreasing survival 21>18>13'] },
    { hook: 'Down: 95% nondisjunction, 4% Robertsonian, 2% mosaic', expansion: ['Only translocation recurs in families'] },
  ],

  traps: [
    {
      questionCategory: 'Recurrence risk in Down syndrome',
      wrongInstinct: 'Every Down syndrome pregnancy carries a high recurrence risk',
      rightAnswer: 'Only translocation Down syndrome (e.g. a carrier parent with rob(14;21)) has a high recurrence risk; free trisomy 21 (95%) recurs at only ≈1%',
      why: 'Recurrence counseling hinges on the karyotype — a Robertsonian carrier parent changes the risk dramatically, so parental testing is essential.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A newborn has hypotonia, a flat facial profile, upslanting palpebral fissures, Brushfield spots, and a single palmar crease. Karyotype shows 46,XY,der(14;21)(q10;q10),+21. What counseling point is most important?',
      options: [
        { id: 'a', text: 'Recurrence risk is negligible (~0.1%)' },
        { id: 'b', text: 'This is translocation Down syndrome — test parents, as recurrence risk may be high' },
        { id: 'c', text: 'The child has Edwards syndrome' },
        { id: 'd', text: 'This is mosaic Down syndrome' },
      ],
      answerId: 'b',
      explanation: 'The karyotype shows Down syndrome from a Robertsonian (14;21) translocation. Unlike free trisomy 21 (~1% recurrence), a translocation may be inherited from a balanced-carrier parent with substantial recurrence risk, so parental karyotyping is essential.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Down, Edwards & Patau compared', svg: AUTOSOMAL_TRISOMIES, caption: 'The three viable autosomal trisomies — decreasing survival 21 > 18 > 13; all rise with maternal age.' },
  ],
};

export default autosomalTrisomies;
