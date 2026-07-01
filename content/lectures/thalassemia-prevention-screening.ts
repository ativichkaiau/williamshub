import type { Lecture } from '../../lib/types';
import { THALASSEMIA_SCREENING } from '../../lib/figures';

export const thalassemiaPreventionScreening: Lecture = {
  id: 'thalassemia-prevention-screening',
  title: 'Thalassemia Carrier Screening & Prevention',
  system: 'molecular',
  source: 'L12 — Prenatal Diagnosis',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Genetics' },
    { kind: 'lecture', label: 'L12 Prenatal Diagnosis' },
    { kind: 'disease', label: 'Thalassemia prevention' },
    { kind: 'mechanism', label: 'Couple carrier screening' },
    { kind: 'exam', label: 'MCV / DCIP / HbA2' },
  ],

  highYield: [
    '**Thailand runs a national thalassemia-prevention program** because α- and β-thalassemia and Hb E are common. The goal is to identify **at-risk carrier couples** and offer prenatal diagnosis to prevent the three **severe** phenotypes.',
    '**Three severe diseases to prevent**: **Hb Bart\'s hydrops fetalis** (α-thal-1 × α-thal-1 → --/-- , lethal in utero), **homozygous β-thalassemia** (β-thal major, transfusion-dependent), and **β-thalassemia/Hb E** disease.',
    '**Step 1 — cheap screening on both partners: red-cell indices (MCV/MCH) + DCIP (or one-tube osmotic fragility, OF).** A **low MCV (<80 fL)** flags a possible α- or β-thalassemia trait; a **positive DCIP** flags **Hb E** (unstable Hb).',
    '**Step 2 — confirmatory tests**: **PCR for α-thal-1 (SEA deletion)** when MCV is low; **Hb typing / HbA₂ quantitation** — **HbA₂ > 4% = β-thalassemia trait**, an **Hb E band = Hb E** trait. This distinguishes trait types the screen cannot.',
    '**Step 3 — if BOTH partners carry compatible traits**, offer **prenatal diagnosis** (CVS, amniocentesis, cordocentesis, or **preimplantation genetic testing**) to detect an affected fetus. Carrier + non-carrier couples are reassured.',
  ],

  mechanism: {
    title: 'Screen the couple → confirm trait → identify at-risk pairs',
    steps: [
      { id: 's1', label: 'MCV/MCH + DCIP on both partners', emphasis: 'key' },
      { id: 's2', label: 'Low MCV → PCR α-thal-1; DCIP+ → Hb E' },
      { id: 's3', label: 'HbA₂ >4% = β-trait; Hb typing confirms' },
      { id: 's4', label: 'Both carriers → prenatal diagnosis / PGT', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Low MCV with normal iron studies + positive α-thal-1 PCR', mechanism: 'α-thalassemia-1 trait (risk of Hb Bart\'s hydrops)', significance: 'key' },
    { sign: 'HbA₂ > 4% on Hb typing', mechanism: 'β-thalassemia trait', significance: 'key' },
    { sign: 'Positive DCIP with an Hb E band', mechanism: 'Hb E trait', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'MCV/MCH + DCIP (or OF) screen', meaning: 'First-line couple screening' },
    { clue: 'PCR for α-thal-1 (SEA deletion)', meaning: 'Confirms α-thalassemia-1 carrier' },
    { clue: 'HbA₂ quantitation / Hb typing', meaning: 'β-trait (HbA₂>4%) and Hb E' },
  ],

  treatment: [
    { logic: 'Counsel at-risk couples; offer prenatal diagnosis', detail: 'CVS / amniocentesis / cordocentesis / PGT.' },
    { logic: 'Reassure non-at-risk couples', detail: 'Carrier + non-carrier cannot have severe disease.' },
  ],

  mnemonics: [
    { hook: 'Low MCV → PCR α-thal-1; DCIP+ → Hb E; HbA₂ >4% → β-trait', expansion: ['Screen then confirm'] },
    { hook: 'Prevent 3: Bart\'s hydrops, β-thal major, β-thal/Hb E', expansion: ['Both partners must be carriers'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a low MCV in screening',
      wrongInstinct: 'A low MCV in a prospective parent just means iron deficiency',
      rightAnswer: 'In thalassemia screening a low MCV flags a possible thalassemia trait and triggers confirmatory testing (α-thal-1 PCR, HbA₂/Hb typing) — iron deficiency must be excluded but not assumed',
      why: 'Microcytosis is the entry point of the screening algorithm; missing a thalassemia trait risks an affected fetus if the partner is also a carrier.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A couple is screened before pregnancy. Both have low MCV; PCR confirms both carry α-thalassemia-1 (SEA deletion). What severe fetal condition is this pregnancy at risk for?',
      options: [
        { id: 'a', text: 'Homozygous β-thalassemia' },
        { id: 'b', text: 'Hb Bart\'s hydrops fetalis' },
        { id: 'c', text: 'Hb E trait' },
        { id: 'd', text: 'Sickle cell disease' },
      ],
      answerId: 'b',
      explanation: 'Two α-thalassemia-1 carriers risk a fetus with all four α-globin genes deleted (--/--), causing Hb Bart\'s hydrops fetalis, which is lethal in utero — the couple should be offered prenatal diagnosis.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Thalassemia carrier screening', svg: THALASSEMIA_SCREENING, caption: 'MCV/DCIP screen → PCR α-thal-1 and HbA₂/Hb typing → at-risk couples offered prenatal diagnosis.' },
  ],
};

export default thalassemiaPreventionScreening;
