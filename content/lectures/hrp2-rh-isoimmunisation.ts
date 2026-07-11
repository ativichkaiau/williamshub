import type { Lecture } from '../../lib/types';

export const hrp2RhIsoimmunisation: Lecture = {
  id: 'hrp2-rh-isoimmunisation',
  title: 'Rh Isoimmunisation & Haemolytic Disease of the Newborn',
  system: 'repro',
  source: 'L13 — Disorders Related to Pregnancy',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Reproductive' },
    { kind: 'lecture', label: 'L13 Pregnancy Disorders' },
    { kind: 'disease', label: 'HDN · hydrops' },
    { kind: 'mechanism', label: 'Maternal anti-D IgG' },
    { kind: 'treatment', label: 'Anti-D immunoglobulin' },
  ],

  highYield: [
    '**Rh(D) haemolytic disease of the newborn (HDN):** an **Rh-negative mother** carrying an **Rh-positive fetus** becomes **sensitised** (usually at a prior delivery/sensitising event) and makes **anti-D IgG**, which **crosses the placenta** in a subsequent pregnancy to haemolyse fetal red cells.',
    '**The first affected pregnancy is usually spared** (sensitisation occurs at that delivery); **subsequent** Rh-positive pregnancies are affected → fetal anaemia, and in severe cases **hydrops fetalis** (heart failure, oedema) and **kernicterus** after birth.',
    '**Prevention = anti-D immunoglobulin** to Rh-negative mothers at **sensitising events** (delivery, miscarriage, amniocentesis, antepartum bleeding, trauma) and **routine antenatal** doses — it mops up fetal cells before the mother can mount an immune response.',
    '**ABO incompatibility** (mother O, baby A/B) causes a **milder** HDN that can affect the **first** pregnancy (pre-formed anti-A/B IgG). Diagnose HDN with the **direct antiglobulin (Coombs) test**; monitor at-risk fetuses (MCA Doppler); treat with intrauterine/exchange transfusion and phototherapy.',
  ],

  mechanism: {
    title: 'Sensitisation → anti-D IgG → fetal haemolysis',
    steps: [
      { id: 's1', label: 'Rh-negative mother exposed to Rh-positive fetal cells', emphasis: 'key' },
      { id: 's2', label: 'Maternal anti-D IgG forms (sensitisation)', emphasis: 'key' },
      { id: 's3', label: 'Next pregnancy: IgG crosses placenta → fetal haemolysis', emphasis: 'danger' },
      { id: 's4', label: 'Anti-D prophylaxis prevents sensitisation', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'First pregnancy usually unaffected; later ones worse', mechanism: 'Sensitisation at the first delivery', significance: 'key' },
    { sign: 'Hydrops fetalis in severe HDN', mechanism: 'Severe fetal anaemia → heart failure', significance: 'key' },
    { sign: 'Positive direct Coombs test in the neonate', mechanism: 'Antibody-coated red cells', significance: 'key' },
    { sign: 'ABO HDN is milder and can affect the first baby', mechanism: 'Pre-formed anti-A/B IgG', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rh-negative mother, Rh-positive baby, at delivery', meaning: 'Give anti-D to prevent future sensitisation' },
    { clue: 'Sensitised pregnancy with rising anti-D titres', meaning: 'Monitor fetus (MCA Doppler); anticipate anaemia' },
    { clue: 'Neonate jaundiced at 12 h with positive Coombs', meaning: 'Immune haemolytic disease of the newborn' },
    { clue: 'Antepartum haemorrhage in an Rh-negative woman', meaning: 'Sensitising event → give anti-D' },
  ],

  treatment: [
    { logic: 'Prevent with anti-D', detail: 'Anti-D immunoglobulin at sensitising events and routinely antenatally in Rh-negative women.' },
    { logic: 'Treat established HDN', detail: 'Intrauterine transfusion for severe fetal anaemia; phototherapy/exchange transfusion neonatally.' },
  ],

  mnemonics: [
    { hook: 'Rh-negative mum + Rh-positive baby → anti-D to prevent HDN', expansion: ['First baby usually spared; give anti-D at sensitising events'] },
  ],

  traps: [
    {
      questionCategory: 'Which pregnancy is affected',
      wrongInstinct: 'Rh haemolytic disease is worst in the first pregnancy',
      rightAnswer: 'The first Rh-positive pregnancy is usually spared; sensitisation there affects SUBSEQUENT pregnancies',
      why: 'Maternal anti-D IgG develops after the first exposure, so later Rh-positive pregnancies bear the brunt — the rationale for anti-D prophylaxis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An Rh-negative woman delivers an Rh-positive baby. To prevent haemolytic disease in future pregnancies she should receive:',
      options: [
        { id: 'a', text: 'Anti-D immunoglobulin' },
        { id: 'b', text: 'Phototherapy' },
        { id: 'c', text: 'Corticosteroids' },
        { id: 'd', text: 'Magnesium sulfate' },
      ],
      answerId: 'a',
      explanation: 'Anti-D immunoglobulin destroys fetal Rh-positive cells in the maternal circulation before she can be sensitised, preventing HDN in later pregnancies.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Compared with Rh haemolytic disease, ABO haemolytic disease of the newborn:',
      options: [
        { id: 'a', text: 'Is usually more severe' },
        { id: 'b', text: 'Is generally milder and can affect the first pregnancy' },
        { id: 'c', text: 'Never affects the first pregnancy' },
        { id: 'd', text: 'Is prevented by anti-D' },
      ],
      answerId: 'b',
      explanation: 'ABO incompatibility (mother O, baby A/B) causes milder HDN and, because anti-A/B IgG is pre-formed, can affect the first pregnancy.',
      tests: 'exam',
    },
  ],
};

export default hrp2RhIsoimmunisation;
