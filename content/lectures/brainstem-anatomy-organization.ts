import type { Lecture } from '../../lib/types';

export const brainstemAnatomyOrganization: Lecture = {
  id: 'brainstem-anatomy-organization',
  title: 'Brainstem Anatomy & Organisation',
  system: 'neuro',
  source: 'L14 — Brainstem',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L14 Brainstem' },
    { kind: 'mechanism', label: 'Midbrain/pons/medulla & CN nuclei' },
    { kind: 'exam', label: 'Cranial nerve levels; crossed signs' },
  ],

  highYield: [
    '**The brainstem has THREE parts from top to bottom — MIDBRAIN, PONS, MEDULLA — and does three jobs: it is a CONDUIT for all ascending/descending tracts, it houses the nuclei of cranial nerves III–XII, and it contains vital centres (respiration, cardiovascular) and the reticular formation for arousal.** It connects to the cerebellum by three pairs of cerebellar peduncles.',
    '**Cranial nerve nuclei are arranged by level ("the rule of 4"): MIDBRAIN = CN III & IV; PONS = CN V, VI, VII, VIII; MEDULLA = CN IX, X, XI, XII.** Motor nuclei lie MEDIALLY (from the basal plate) and sensory nuclei LATERALLY (from the alar plate) — the developmental plan of [[brain-vesicles-neural-crest]].',
    '**Landmark structures: MIDBRAIN — cerebral peduncles (crus cerebri), superior colliculi (visual reflexes) & inferior colliculi (auditory), red nucleus, substantia nigra, and the CN III nucleus/aqueduct. PONS — the large basis pontis (corticopontine/pontocerebellar), middle cerebellar peduncle. MEDULLA — the pyramids (corticospinal decussation), olives, and the vital cardiorespiratory centres.**',
    '**Because long tracts and cranial nerve nuclei are packed together, a unilateral brainstem lesion classically causes CROSSED signs: IPSILATERAL cranial nerve palsy (the nucleus/nerve at that level) + CONTRALATERAL limb weakness/sensory loss (the long tracts that will cross lower down).** This "crossed" pattern localises a lesion to the brainstem and to a specific level.',
    '**The take-home: midbrain (III, IV; colliculi) → pons (V–VIII; basis pontis) → medulla (IX–XII; pyramids, vital centres); motor medial/sensory lateral; a brainstem lesion gives CROSSED signs (ipsilateral CN + contralateral body).** The descending brainstem motor tracts are in [[brainstem-descending-motor-tracts]]; the reticular activating system in [[reticular-activating-system-consciousness]]; clinical brainstem strokes in HNS-2 ([[brainstem-syndromes]]).',
  ],

  mechanism: {
    title: 'Midbrain/pons/medulla: conduit + CN nuclei (III–XII by level) + vital centres; lesion → crossed signs',
    steps: [
      { id: 's1', label: 'Three parts: midbrain, pons, medulla (top → bottom)', emphasis: 'key' },
      { id: 's2', label: 'CN nuclei by level: midbrain III–IV, pons V–VIII, medulla IX–XII', emphasis: 'key' },
      { id: 's3', label: 'Motor nuclei MEDIAL (basal plate); sensory nuclei LATERAL (alar plate)' },
      { id: 's4', label: 'Vital cardiorespiratory centres + reticular formation (arousal) in the brainstem', emphasis: 'key' },
      { id: 's5', label: 'Unilateral lesion → CROSSED signs: ipsilateral CN palsy + contralateral body', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Ipsilateral cranial nerve palsy + contralateral hemiparesis', mechanism: 'Brainstem lesion (crossed signs) — CN nucleus + uncrossed long tract', significance: 'key' },
    { sign: 'CN III–IV signs localising a lesion', mechanism: 'Midbrain level', significance: 'key' },
    { sign: 'CN V–VIII signs localising a lesion', mechanism: 'Pontine level', significance: 'key' },
    { sign: 'CN IX–XII signs localising a lesion', mechanism: 'Medullary level', significance: 'key' },
    { sign: 'Coma from a small brainstem lesion', mechanism: 'Reticular activating formation damage', significance: 'key' },
  ],

  investigations: [
    { clue: 'The three parts of the brainstem', meaning: 'Midbrain, pons, medulla' },
    { clue: 'The cranial nerves whose nuclei lie in the pons', meaning: 'CN V, VI, VII, VIII' },
    { clue: 'The rule for motor vs sensory nucleus position', meaning: 'Motor medial, sensory lateral' },
    { clue: 'The pattern that localises a lesion to the brainstem', meaning: 'Crossed signs (ipsilateral CN + contralateral body)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Brainstem anatomy lets you localise precisely — the cranial-nerve level pinpoints midbrain/pons/medulla, and crossed signs confirm a brainstem lesion; the reticular formation makes even small lesions life-threatening (coma). Descending motor tracts arise here ([[brainstem-descending-motor-tracts]]); arousal is the ARAS ([[reticular-activating-system-consciousness]]); clinical brainstem stroke syndromes are in HNS-2 ([[brainstem-syndromes]]). Developmental medial/lateral plan from [[brain-vesicles-neural-crest]].' },
  ],

  mnemonics: [
    { hook: 'CN levels: "Midbrain 3–4, Pons 5–8, Medulla 9–12"', expansion: ['Motor medial, sensory lateral', 'Colliculi: superior=sight, inferior=sound'] },
    { hook: 'Crossed signs = "brainstem": ipsilateral face (CN) + contralateral body (tract)', expansion: ['Tracts cross lower down', 'Level = which CN'] },
  ],

  traps: [
    {
      questionCategory: 'Crossed brainstem signs',
      wrongInstinct: 'A lesion causing a facial (cranial nerve) palsy and limb weakness on OPPOSITE sides means there are two separate lesions',
      rightAnswer: 'A single unilateral BRAINSTEM lesion classically produces CROSSED signs — an IPSILATERAL cranial nerve palsy (its nucleus/nerve at that level) with CONTRALATERAL limb weakness/sensory loss (long tracts that decussate lower) — one lesion, localised to the brainstem level of the affected cranial nerve',
      why: 'Recognising crossed signs as one brainstem lesion (not two) both localises to the brainstem and identifies the level from the cranial nerve involved — a core neuro-localisation skill.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The nuclei of which cranial nerves are located in the medulla?',
      options: [
        { id: 'a', text: 'III and IV' },
        { id: 'b', text: 'V, VI, VII and VIII' },
        { id: 'c', text: 'IX, X, XI and XII' },
        { id: 'd', text: 'I and II' },
      ],
      answerId: 'c',
      explanation: 'By the "rule of 4": the midbrain houses CN III–IV, the pons CN V–VIII, and the medulla CN IX–XII. (CN I and II are not true brainstem nerves.) Motor nuclei lie medially and sensory nuclei laterally.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient has a right-sided cranial nerve palsy with left-sided limb weakness ("crossed signs"). This pattern localises the lesion to the:',
      options: [
        { id: 'a', text: 'Cerebral cortex' },
        { id: 'b', text: 'Brainstem' },
        { id: 'c', text: 'Spinal cord below the neck' },
        { id: 'd', text: 'Peripheral nerve' },
      ],
      answerId: 'b',
      explanation: 'Crossed signs — an ipsilateral cranial nerve palsy with contralateral limb weakness — are the hallmark of a brainstem lesion: the cranial nerve nucleus is affected on the same side, while the long motor tract (which crosses lower in the medulla) produces weakness on the opposite side.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default brainstemAnatomyOrganization;
