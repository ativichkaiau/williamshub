import type { Lecture } from '../../lib/types';

export const fcp1AnemiaMicrocytic: Lecture = {
  id: 'fcp1-anemia-microcytic',
  title: 'Microcytic Anemia — Iron, Thalassemia & Chronic Disease',
  system: 'clinical',
  source: 'L21 — Approach to Anemia',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L21 Approach to Anemia' },
    { kind: 'disease', label: 'Iron deficiency · thalassemia · ACD' },
    { kind: 'investigation', label: 'Iron studies · Mentzer index' },
    { kind: 'mechanism', label: 'Ferritin as the pivot' },
  ],

  highYield: [
    '**Microcytic (MCV <80)** = the **iron / thalassemia / chronic disease** triad (plus sideroblastic/lead). **Ferritin is the pivotal test**: a **low ferritin is diagnostic of iron deficiency**. See [[fcp1-anemia-classification]] and [[hhl-iron-deficiency]].',
    '**Iron deficiency:** **low ferritin, low serum iron, high TIBC, low transferrin saturation, high RDW**, low reticulocyte. Confirm, then **hunt the source** — menstrual/GI loss; in a man or postmenopausal woman think **GI malignancy**. Iron biochemistry is detailed in [[hhl-iron-metabolism-studies]].',
    '**Thalassemia trait:** a **normal or high RBC count** with an MCV that is **disproportionately low for a mild anemia**, a **normal RDW**, **target cells**, and **normal/raised ferritin**. Raised HbA2 confirms beta-trait. See [[hhl-alpha-beta-thalassemia]].',
    '**Anemia of chronic disease:** **ferritin normal or high, low TIBC, low transferrin saturation** — a hepcidin-driven **functional iron restriction**, not true iron lack.',
    '**Mentzer index (MCV ÷ RBC): <13 favours thalassemia, >13 favours iron deficiency** — a useful bedside discriminator while iron studies and Hb typing are pending. See [[hhl-anemia-approach-indices]].',
  ],

  mechanism: {
    title: 'Microcytic differential — ferritin as the pivot',
    steps: [
      { id: 's1', label: 'MCV <80 → iron deficiency / thalassemia / chronic disease', emphasis: 'key' },
      { id: 's2', label: 'Ferritin low → iron deficiency (diagnostic)', emphasis: 'key' },
      { id: 's3', label: 'Ferritin normal/high → thalassemia (Hb typing) or chronic disease', emphasis: 'key' },
      { id: 's4', label: 'Mentzer index MCV/RBC: <13 thalassemia, >13 iron deficiency', emphasis: 'key' },
      { id: 's5', label: 'Iron deficiency in a man/postmenopausal woman → find the GI source', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Koilonychia, angular cheilitis, glossitis, pica', mechanism: 'Iron deficiency', significance: 'key' },
    { sign: 'Very low MCV with near-normal Hb and a high RBC count', mechanism: 'Thalassemia trait', significance: 'key' },
    { sign: 'Target cells with a normal RDW', mechanism: 'Thalassemia rather than iron deficiency', significance: 'supportive' },
    { sign: 'Low ferritin', mechanism: 'The single best confirmatory test for iron deficiency', significance: 'key' },
  ],

  investigations: [
    { clue: 'Ferritin low, TIBC high, transferrin saturation low', meaning: 'Iron deficiency anemia' },
    { clue: 'Ferritin normal/high, TIBC low, saturation low', meaning: 'Anemia of chronic disease (functional iron restriction)' },
    { clue: 'High RBC count, Mentzer <13, target cells, raised HbA2', meaning: 'Beta-thalassemia trait' },
    { clue: 'Confirmed iron deficiency in a man or postmenopausal woman', meaning: 'Refer for GI endoscopy to exclude occult malignancy' },
  ],

  treatment: [
    { logic: 'Oral iron plus treat the source for iron deficiency', detail: 'A ferrous salt gives a reticulocytosis within about a week; continue roughly 3 months after the Hb normalises to refill stores. Use intravenous iron if oral is not tolerated or absorbed.' },
    { logic: 'Do not give iron blindly to thalassemia trait', detail: 'Confirm with ferritin and Hb typing first — iron loading a patient who is not iron-deficient risks overload.' },
  ],

  mnemonics: [
    { hook: 'Mentzer: under 13 = thal, over 13 = iron', expansion: ['MCV ÷ RBC count', 'Thalassemia makes many small cells (high RBC)', 'Iron deficiency makes few small cells (low RBC)'] },
    { hook: 'Ferritin low = iron; ferritin normal/high = think thal or chronic disease', expansion: ['Ferritin is the pivot of the microcytic workup'] },
  ],

  traps: [
    {
      questionCategory: 'Microcytic differential',
      wrongInstinct: 'Treat every microcytic anemia with a trial of iron',
      rightAnswer: 'Confirm iron deficiency with ferritin first — thalassemia trait needs no iron and can be harmed by loading',
      why: 'Ferritin is an acute-phase reactant that can read falsely normal in inflammation, so interpret it in context; a high RBC count with low MCV points to thalassemia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 22-year-old is found to have Hb 11 g/dL, MCV 63 fL, RBC 5.9 million/µL, a normal RDW, target cells on the smear and a normal ferritin. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Iron deficiency anemia' },
        { id: 'b', text: 'Anemia of chronic disease' },
        { id: 'c', text: 'Thalassemia trait' },
        { id: 'd', text: 'Sideroblastic anemia' },
      ],
      answerId: 'c',
      explanation: 'A very low MCV with only mild anemia, a high RBC count, normal RDW, target cells and a normal ferritin (Mentzer <13) is classic thalassemia trait, not iron deficiency.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A 66-year-old man has fatigue, Hb 9 g/dL, MCV 74 fL and a low ferritin. After starting iron, the most important next step is:',
      options: [
        { id: 'a', text: 'Reassure and repeat the blood count in a year' },
        { id: 'b', text: 'Arrange GI endoscopy to look for an occult source' },
        { id: 'c', text: 'Start a blood transfusion' },
        { id: 'd', text: 'Begin hemoglobin typing for thalassemia' },
      ],
      answerId: 'b',
      explanation: 'Iron deficiency in an older man is occult GI blood loss until proven otherwise; endoscopic evaluation is needed to exclude a gastrointestinal malignancy.',
      tests: 'investigation',
    },
  ],
};

export default fcp1AnemiaMicrocytic;
