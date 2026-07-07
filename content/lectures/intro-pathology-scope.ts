import type { Lecture } from '../../lib/types';

export const introPathologyScope: Lecture = {
  id: 'intro-pathology-scope',
  title: 'Introduction to Pathology: Scope & Approach',
  system: 'pathology',
  source: 'L1 — Introduction to Pathology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L1 Scope' },
    { kind: 'mechanism', label: 'Etiology → pathogenesis → morphology → clinical' },
    { kind: 'exam', label: 'The 4 aspects; specimen types' },
  ],

  highYield: [
    'PATHOLOGY is the study of DISEASE — the bridge between basic science and clinical medicine. Every disease is analysed through FOUR ASPECTS: (1) ETIOLOGY (the CAUSE — genetic and/or acquired/environmental); (2) PATHOGENESIS (the MECHANISM/sequence of events from stimulus to disease); (3) MORPHOLOGIC CHANGES (structural alterations in cells/tissues, gross and microscopic); and (4) CLINICAL (functional) CONSEQUENCES — how the morphologic changes produce signs, symptoms and outcome.',
    'GENERAL pathology studies the basic CELL/TISSUE reactions common to all tissues (cell injury, inflammation, repair, haemodynamic disorders, neoplasia — the content of this whole subject), whereas SYSTEMIC (special) pathology studies how these reactions play out in SPECIFIC organs/diseases. Mastering general pathology gives the vocabulary and mechanisms that recur throughout organ-based pathology.',
    'Diagnosis uses several SPECIMEN types: BIOPSY (tissue sampled from the living — incisional, excisional, needle/core, endoscopic), CYTOLOGY (individual cells — exfoliative e.g. Pap smear, or fine-needle aspiration), FROZEN SECTION (rapid intra-operative diagnosis), and AUTOPSY (post-mortem — for cause of death, disease confirmation, audit and education). Correlating gross, microscopic and clinical findings yields the diagnosis.',
    'Pathology also underpins the LANGUAGE of medicine: distinguishing a lesion, and terms like acute/chronic, benign/malignant, and reversible/irreversible. The pathologist integrates history, gross examination, microscopy (H&E ± special stains/immunohistochemistry/molecular tests — [[diagnostic-pathology-methods]]) to reach a diagnosis that guides treatment and prognosis.',
    '**The take-home: pathology = study of disease via FOUR aspects — ETIOLOGY (cause) → PATHOGENESIS (mechanism) → MORPHOLOGY (structural change) → CLINICAL consequences. GENERAL pathology (universal cell/tissue reactions) vs SYSTEMIC (organ-specific). Diagnosis from biopsy/cytology/frozen section/autopsy, correlating gross + micro + clinical.** Diagnostic techniques are [[diagnostic-pathology-methods]]; the first universal reaction is [[cell-injury-mechanisms]].',
  ],

  mechanism: {
    title: 'Pathology = disease via 4 aspects: etiology (cause) → pathogenesis (mechanism) → morphology (structural change) → clinical consequences; general vs systemic; biopsy/cytology/autopsy',
    steps: [
      { id: 's1', label: 'Etiology = the CAUSE (genetic and/or acquired/environmental)', emphasis: 'key' },
      { id: 's2', label: 'Pathogenesis = the MECHANISM (stimulus → disease sequence)', emphasis: 'key' },
      { id: 's3', label: 'Morphologic changes = structural alterations (gross + microscopic)', emphasis: 'key' },
      { id: 's4', label: 'Clinical consequences = functional effects → signs/symptoms/outcome', emphasis: 'key' },
      { id: 's5', label: 'General (universal reactions) vs systemic pathology; biopsy/cytology/frozen/autopsy', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A description of the "cause" of a disease', mechanism: 'Etiology', significance: 'key' },
    { sign: 'A description of the "mechanism/sequence" leading to disease', mechanism: 'Pathogenesis', significance: 'key' },
    { sign: 'Gross and microscopic structural changes in tissue', mechanism: 'Morphologic changes', significance: 'key' },
    { sign: 'A cervical smear examined for cellular changes', mechanism: 'Exfoliative cytology (Pap smear)', significance: 'supportive' },
    { sign: 'Rapid tissue diagnosis during an operation', mechanism: 'Frozen section', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The four aspects of any disease', meaning: 'Etiology, pathogenesis, morphologic changes, clinical consequences' },
    { clue: 'The branch studying universal cell/tissue reactions', meaning: 'General pathology' },
    { clue: 'The specimen of individual cells rather than tissue', meaning: 'Cytology (exfoliative or fine-needle aspiration)' },
    { clue: 'The post-mortem examination of disease', meaning: 'Autopsy' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pathology provides the framework and language for all of clinical medicine: analysing every disease by etiology, pathogenesis, morphology and clinical consequences lets clinicians reason from cause to effect, and the pathologist\'s integration of history with gross and microscopic examination (and special techniques) delivers the diagnosis that determines treatment and prognosis. General pathology (this subject) supplies the universal reactions — cell injury, inflammation, repair, haemodynamics, neoplasia — reused throughout organ-based pathology. Diagnostic methods are [[diagnostic-pathology-methods]]; cell injury is [[cell-injury-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'Four aspects: "Every Patient May Complain" — Etiology, Pathogenesis, Morphology, Clinical', expansion: ['Etiology = cause', 'Pathogenesis = mechanism'] },
    { hook: '"General = universal reactions; Systemic = organ-specific"', expansion: ['Biopsy/cytology/frozen/autopsy', 'Correlate gross + micro + clinical'] },
  ],

  traps: [
    {
      questionCategory: 'Etiology vs pathogenesis',
      wrongInstinct: 'Etiology and pathogenesis are just two words for the cause of a disease',
      rightAnswer: 'They are distinct: ETIOLOGY is the CAUSE (the initiating genetic/environmental agent — "what starts it"), whereas PATHOGENESIS is the MECHANISM — the step-by-step sequence of molecular and cellular events by which that cause produces the disease ("how it develops"); a disease can have a known etiology with poorly understood pathogenesis, or vice versa',
      why: 'Exam questions frequently separate the cause (etiology) from the mechanism (pathogenesis); conflating them misclassifies answers, since identifying the agent is different from explaining how it produces the structural and functional changes of disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the pathological analysis of a disease, "pathogenesis" refers to:',
      options: [
        { id: 'a', text: 'The underlying cause or initiating agent' },
        { id: 'b', text: 'The sequence of molecular/cellular events by which the cause leads to disease' },
        { id: 'c', text: 'The gross appearance of the organ' },
        { id: 'd', text: 'The patient\'s symptoms' },
      ],
      answerId: 'b',
      explanation: 'Pathogenesis is the mechanism — the step-by-step sequence of events from the initiating stimulus to the fully developed disease. The cause is the etiology, the structural changes are the morphology, and the resulting signs/symptoms are the clinical consequences.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which specimen type examines individual exfoliated cells rather than intact tissue architecture?',
      options: [
        { id: 'a', text: 'Excisional biopsy' },
        { id: 'b', text: 'Cytology (e.g. Pap smear or fine-needle aspiration)' },
        { id: 'c', text: 'Frozen section of a resection' },
        { id: 'd', text: 'Autopsy organ block' },
      ],
      answerId: 'b',
      explanation: 'Cytology examines individual cells — exfoliative (e.g. cervical Pap smear) or fine-needle aspiration — assessing cellular features rather than tissue architecture, which is preserved in biopsies and resection specimens.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default introPathologyScope;
