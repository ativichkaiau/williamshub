import type { Lecture } from '../../lib/types';

export const hhlWbcMorphologicAnomalies: Lecture = {
  id: 'hhl-wbc-morphologic-anomalies',
  title: 'Reactive & Congenital WBC Anomalies',
  system: 'heme',
  source: 'L4 — White Blood Cells: Morphology & Non-neoplastic',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L4 WBC non-neoplastic' },
    { kind: 'investigation', label: 'Neutrophil inclusions' },
    { kind: 'disease', label: 'Pelger–Huët · Chédiak–Higashi' },
    { kind: 'mechanism', label: 'Reactive vs inherited' },
  ],

  highYield: [
    '**Sepsis trio in neutrophils**: **toxic granulation, Döhle bodies (blue RER remnants), cytoplasmic vacuolation** — reactive changes of severe infection.',
    '**Atypical/reactive lymphocytes (Downey cells)** = activated T cells → **EBV infectious mononucleosis** (heterophile/Monospot positive).',
    '**Hypersegmented neutrophils (>5 lobes)** → **megaloblastic anaemia (B12/folate)** — often an **early clue before overt macrocytosis**.',
    '**Pelger–Huët anomaly** = benign bilobed "pince-nez" neutrophils; **acquired pseudo-Pelger–Huët signals myelodysplasia (MDS)**.',
    '**Chédiak–Higashi** = **giant lysosomal granules + partial albinism + recurrent infections** (LYST); also **May–Hegglin** (giant platelets + Döhle-like bodies) and **Alder–Reilly** (mucopolysaccharidoses).',
  ],

  mechanism: {
    title: 'Reactive (infection/nutrition) vs inherited neutrophil anomalies',
    steps: [
      { id: 's1', label: 'Toxic granulation + Döhle bodies + vacuolation → severe infection/sepsis', emphasis: 'key' },
      { id: 's2', label: 'Reactive (Downey) lymphocytes → EBV infectious mononucleosis', emphasis: 'key' },
      { id: 's3', label: 'Hypersegmented neutrophils (>5 lobes) → megaloblastic (B12/folate)', emphasis: 'key' },
      { id: 's4', label: 'Pelger–Huët (benign bilobed); pseudo-Pelger → MDS' },
      { id: 's5', label: 'Chédiak–Higashi (giant granules, albinism), May–Hegglin, Alder–Reilly' },
    ],
  },

  examFindings: [
    { sign: 'Toxic granulation + Döhle bodies + vacuolation', mechanism: 'Reactive neutrophil changes of bacterial sepsis', significance: 'key' },
    { sign: 'Atypical (reactive) lymphocytes + sore throat + lymphadenopathy', mechanism: 'EBV infectious mononucleosis', significance: 'key' },
    { sign: 'Hypersegmented neutrophils', mechanism: 'Megaloblastic haematopoiesis (B12/folate deficiency)', significance: 'key' },
    { sign: 'Bilobed "pince-nez" neutrophils in a well patient', mechanism: 'Benign congenital Pelger–Huët', significance: 'supportive' },
    { sign: 'Giant cytoplasmic granules + partial albinism + recurrent infection', mechanism: 'Chédiak–Higashi (LYST)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Hypersegmented neutrophils', meaning: 'Check B12/folate — megaloblastic change, even before marked macrocytosis' },
    { clue: 'Reactive lymphocytes + positive heterophile (Monospot)', meaning: 'EBV infectious mononucleosis' },
    { clue: 'Bilobed neutrophils — congenital or acquired?', meaning: 'Isolated + well = Pelger–Huët; with dysplasia/cytopenias = pseudo-Pelger (MDS)' },
    { clue: 'Giant leucocyte granules + oculocutaneous albinism', meaning: 'Chédiak–Higashi syndrome' },
  ],

  treatment: [
    { logic: 'Separate reactive from inherited', detail: 'Toxic changes/reactive lymphocytes resolve with the illness; hypersegmentation needs B12/folate replacement; Pelger–Huët is benign — but exclude MDS (pseudo-Pelger).' },
  ],

  mnemonics: [
    { hook: 'Sepsis trio: Toxic granulation, Döhle bodies, Vacuolation', expansion: ['All reactive neutrophil changes of severe infection', 'Hypersegmented neutrophil = megaloblastic (B12/folate)', 'Reactive lymphocytes = EBV/viral'] },
    { hook: 'Pelger–Huët = "pince-nez" bilobed; pseudo-Pelger = MDS', expansion: ['Congenital Pelger–Huët is benign', 'Acquired pseudo-Pelger signals dysplasia/MDS', 'Chédiak–Higashi = giant granules + albinism'] },
  ],

  traps: [
    {
      questionCategory: 'Pelger–Huët vs a left-shift band',
      wrongInstinct: 'Bilobed neutrophils indicate a left shift (bands) from infection',
      rightAnswer: 'Pelger–Huët cells are hyposegmented "pince-nez" MATURE neutrophils — congenital (benign) or acquired pseudo-Pelger in MDS',
      why: 'Bands are immature (single non-segmented nucleus); Pelger–Huët cells are mature but under-segmented — acquired forms suggest myelodysplasia.',
    },
    {
      questionCategory: 'Earliest film clue to B12/folate deficiency',
      wrongInstinct: 'Macrocytosis (high MCV) is always the first sign of megaloblastic anaemia',
      rightAnswer: 'Hypersegmented neutrophils (>5 lobes) can appear before overt macrocytosis',
      why: 'Neutrophil hypersegmentation is an early, sensitive marker of megaloblastic haematopoiesis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A teenager with fever, sore throat and cervical lymphadenopathy has numerous large atypical lymphocytes with abundant cytoplasm on the film. The most likely cause is:',
      options: [
        { id: 'a', text: 'Chronic lymphocytic leukaemia' },
        { id: 'b', text: 'Epstein–Barr virus (infectious mononucleosis)' },
        { id: 'c', text: 'Bacterial tonsillitis' },
        { id: 'd', text: 'Megaloblastic anaemia' },
      ],
      answerId: 'b',
      explanation: 'Atypical (reactive/Downey) lymphocytes are activated T cells responding to EBV-infected B cells — the hallmark of infectious mononucleosis (heterophile/Monospot positive).',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A child with partial oculocutaneous albinism and recurrent pyogenic infections has giant granules within leucocytes. The diagnosis is:',
      options: [
        { id: 'a', text: 'Pelger–Huët anomaly' },
        { id: 'b', text: 'Chédiak–Higashi syndrome' },
        { id: 'c', text: 'May–Hegglin anomaly' },
        { id: 'd', text: 'Alder–Reilly anomaly' },
      ],
      answerId: 'b',
      explanation: 'Chédiak–Higashi syndrome (LYST mutation) causes giant fused lysosomal granules, partial albinism, recurrent infections and a bleeding tendency.',
      tests: 'disease',
    },
  ],
};

export default hhlWbcMorphologicAnomalies;
