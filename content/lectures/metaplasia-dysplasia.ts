import type { Lecture } from '../../lib/types';

export const metaplasiaDysplasia: Lecture = {
  id: 'metaplasia-dysplasia',
  title: 'Metaplasia & Dysplasia',
  system: 'pathology',
  source: 'L3 — Adaptive Responses to Cell Injury',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L3 Metaplasia' },
    { kind: 'mechanism', label: 'Reprogramming; reversible vs pre-malignant' },
    { kind: 'exam', label: 'Barrett; squamous metaplasia; dysplasia' },
  ],

  highYield: [
    '**METAPLASIA is a REVERSIBLE change in which one differentiated (mature) cell type is replaced by ANOTHER better able to withstand the stress — a REPROGRAMMING of tissue stem cells, NOT transformation of already-differentiated cells. It is an adaptive response to chronic irritation, but the new epithelium may be less specialised, and persistence of the injurious stimulus can set the stage for malignancy.**',
    '**Classic examples: SQUAMOUS metaplasia of respiratory ciliated columnar epithelium in SMOKERS (protective but loses mucociliary clearance) and of the endocervix; and, importantly, BARRETT OESOPHAGUS — replacement of the normal squamous oesophageal lining by COLUMNAR (intestinal, goblet-cell) epithelium due to chronic acid REFLUX (GORD). Connective tissue can undergo metaplasia too (e.g. bone in soft tissue — myositis ossificans). Removing the stimulus can reverse metaplasia.**',
    '**DYSPLASIA is DISORDERED growth with abnormal cells — loss of uniformity and architectural orientation, with nuclear atypia (enlarged, hyperchromatic, pleomorphic nuclei), increased mitoses and loss of polarity — but the cells DO NOT breach the basement membrane. It is PRE-MALIGNANT (though not inevitably progressive) and is graded (mild/moderate/severe). When dysplasia is full-thickness but confined by the basement membrane it is CARCINOMA IN SITU; breaching the basement membrane makes it INVASIVE carcinoma.**',
    '**The clinically vital link: chronic injury → METAPLASIA (still reversible) → DYSPLASIA (pre-malignant) → carcinoma in situ → invasive cancer. This is why Barrett oesophagus (metaplasia) is surveilled for dysplasia, and why cervical/other screening detects dysplasia before invasion. Metaplasia itself is not cancer, but the environment that drives it can drive neoplastic progression.**',
    '**The take-home: METAPLASIA = reversible SWAP of one mature cell type for another via stem-cell reprogramming (squamous metaplasia in smokers; BARRETT = squamous→columnar from reflux). DYSPLASIA = disordered, atypical growth, PRE-MALIGNANT, basement membrane INTACT (full-thickness = carcinoma in situ; breach = invasive cancer). Chronic injury links metaplasia → dysplasia → cancer.** Adaptations of growth are [[cellular-adaptations-growth]]; dysplasia/anaplasia in tumours is [[neoplasia-differentiation-invasion]].',
  ],

  mechanism: {
    title: 'Metaplasia = reversible swap of mature cell type (stem-cell reprogramming; squamous metaplasia/Barrett) → dysplasia (disordered atypical growth, pre-malignant, basement membrane intact) → carcinoma in situ → invasive cancer',
    steps: [
      { id: 's1', label: 'Metaplasia = reversible replacement of one mature cell type by another (stem-cell reprogramming)', emphasis: 'key' },
      { id: 's2', label: 'Examples: squamous metaplasia (smoker bronchus); Barrett = squamous→columnar (reflux)', emphasis: 'key' },
      { id: 's3', label: 'Dysplasia = disordered growth, nuclear atypia, loss of polarity; basement membrane INTACT', emphasis: 'key' },
      { id: 's4', label: 'Dysplasia is PRE-MALIGNANT; full-thickness = carcinoma in situ', emphasis: 'danger' },
      { id: 's5', label: 'Breach of basement membrane = invasive carcinoma; chronic injury links the sequence', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ciliated columnar bronchial epithelium replaced by squamous epithelium in a smoker', mechanism: 'Squamous metaplasia', significance: 'key' },
    { sign: 'Columnar (intestinal, goblet-cell) epithelium in the lower oesophagus', mechanism: 'Barrett oesophagus (metaplasia from reflux)', significance: 'key' },
    { sign: 'Disordered epithelium with nuclear atypia but intact basement membrane', mechanism: 'Dysplasia (pre-malignant)', significance: 'key' },
    { sign: 'Full-thickness atypia confined by the basement membrane', mechanism: 'Carcinoma in situ', significance: 'supportive' },
    { sign: 'Atypical cells breaching the basement membrane', mechanism: 'Invasive carcinoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The reversible replacement of one mature cell type by another', meaning: 'Metaplasia' },
    { clue: 'The metaplasia caused by chronic acid reflux', meaning: 'Barrett oesophagus (squamous → columnar)' },
    { clue: 'The disordered, pre-malignant growth with intact basement membrane', meaning: 'Dysplasia' },
    { clue: 'The point at which dysplasia becomes invasive cancer', meaning: 'Breach of the basement membrane' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Metaplasia is a reversible, protective adaptation (squamous metaplasia in smokers; Barrett oesophagus from reflux) achieved by reprogramming stem cells, but the chronic injury driving it can push tissue along the sequence to dysplasia (disordered, pre-malignant growth with an intact basement membrane), carcinoma in situ, and finally invasive cancer once the basement membrane is breached. This underlies cancer-prevention strategies — removing the stimulus, and surveillance/screening (e.g. Barrett, cervical) to catch dysplasia before invasion. Growth adaptations are [[cellular-adaptations-growth]]; tumour differentiation/dysplasia is [[neoplasia-differentiation-invasion]].' },
  ],

  mnemonics: [
    { hook: '"Metaplasia = swap (reversible); Barrett = squamous→columnar (reflux)"', expansion: ['Squamous metaplasia in smokers', 'Stem-cell reprogramming'] },
    { hook: '"Dysplasia = disordered/atypical, PRE-malignant, basement membrane intact"', expansion: ['Full-thickness = carcinoma in situ', 'Breach = invasive'] },
  ],

  traps: [
    {
      questionCategory: 'Dysplasia vs invasive carcinoma',
      wrongInstinct: 'Dysplasia and carcinoma in situ are the same as invasive cancer and have already spread',
      rightAnswer: 'Dysplasia (disordered, atypical growth) and even carcinoma IN SITU (full-thickness atypia) remain confined by the BASEMENT MEMBRANE — they are PRE-invasive and cannot metastasise; only when atypical cells BREACH the basement membrane does it become INVASIVE carcinoma with metastatic potential, so the basement membrane is the critical dividing line and dysplasia is potentially reversible/curable if caught before invasion',
      why: 'The basement membrane distinguishes pre-invasive (dysplasia/carcinoma in situ — curable, cannot spread) from invasive cancer (can metastasise); treating dysplasia as though it were invasive cancer, or dismissing carcinoma in situ, both misjudge prognosis and management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Replacement of the normal squamous lining of the lower oesophagus by columnar (intestinal, goblet-cell) epithelium due to chronic acid reflux is called:',
      options: [
        { id: 'a', text: 'Barrett oesophagus (metaplasia)' },
        { id: 'b', text: 'Dysplasia' },
        { id: 'c', text: 'Anaplasia' },
        { id: 'd', text: 'Atrophy' },
      ],
      answerId: 'a',
      explanation: 'Barrett oesophagus is metaplasia — a reversible replacement of squamous by columnar (intestinal) epithelium driven by chronic gastro-oesophageal reflux. It is surveilled because ongoing injury can lead to dysplasia and adenocarcinoma.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'What distinguishes severe dysplasia/carcinoma in situ from invasive carcinoma?',
      options: [
        { id: 'a', text: 'Invasive carcinoma has breached the basement membrane; dysplasia/carcinoma in situ has not' },
        { id: 'b', text: 'Only dysplasia has nuclear atypia' },
        { id: 'c', text: 'Carcinoma in situ has already metastasised' },
        { id: 'd', text: 'They are identical' },
      ],
      answerId: 'a',
      explanation: 'Dysplasia and carcinoma in situ remain confined by the basement membrane (pre-invasive, cannot metastasise); invasive carcinoma is defined by cells breaching the basement membrane, conferring metastatic potential. The basement membrane is the critical divide.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default metaplasiaDysplasia;
