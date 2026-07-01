import type { Lecture } from '../../lib/types';

export const softTissueTumors: Lecture = {
  id: 'soft-tissue-tumors',
  title: 'Soft Tissue Tumors',
  system: 'msk',
  source: 'L8 — Musculoskeletal Tumors',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L8 Musculoskeletal Tumors' },
    { kind: 'disease', label: 'Soft-tissue sarcoma' },
    { kind: 'mechanism', label: 'Signature histology' },
    { kind: 'exam', label: 'Rhabdomyosarcoma' },
  ],

  highYield: [
    '**Lipoma** = commonest benign soft-tissue tumor (mature adipocytes). **Liposarcoma** = a common adult sarcoma (40–70 y), deep/retroperitoneal; hallmark cell = the **lipoblast** (subtypes: well-differentiated, myxoid, pleomorphic).',
    '**Rhabdomyosarcoma** = **most common soft-tissue sarcoma in children**; diagnostic cell = the **rhabdomyoblast** (± cross-striations). **Embryonal** (50%, most common) and **alveolar** subtypes; **rhabdomyoma** (benign) shows “spider cells.”',
    '**Nerve-sheath tumors**: **schwannoma** (Antoni A with **Verocay bodies** / Antoni B, S100+) and neurofibroma (benign) vs **malignant peripheral nerve sheath tumor (MPNST)** — associated with **neurofibromatosis type 1 (NF1)**.',
    '**Vascular**: hemangioma (benign) vs **angiosarcoma** (malignant — risk from **chronic lymphedema or radiation**) and **Kaposi sarcoma** (HHV-8, **HIV/AIDS**).',
    '**Synovial sarcoma** = a malignant tumor arising **near a joint** in young adults, with a **biphasic (spindle + epithelial)** histology (t(X;18)).',
  ],

  mechanism: {
    title: 'Identify the sarcoma by its signature cell/pattern',
    steps: [
      { id: 's1', label: 'Lipoblast → liposarcoma (adult, deep)', emphasis: 'key' },
      { id: 's2', label: 'Rhabdomyoblast → rhabdomyosarcoma (child)' },
      { id: 's3', label: 'Verocay bodies → schwannoma; MPNST in NF1' },
      { id: 's4', label: 'Angiosarcoma (lymphedema/radiation); Kaposi (HIV)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Child with a soft-tissue mass containing rhabdomyoblasts', mechanism: 'Rhabdomyosarcoma', significance: 'key' },
    { sign: 'Malignant nerve-sheath tumor in an NF1 patient', mechanism: 'MPNST', significance: 'key' },
    { sign: 'Cutaneous angiosarcoma in a chronically lymphedematous arm', mechanism: 'Stewart-Treves (post-mastectomy lymphedema)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Histology (lipoblast, rhabdomyoblast, Verocay bodies)', meaning: 'Sarcoma subtype' },
    { clue: 'Immunostains (S100, desmin, HHV-8)', meaning: 'Nerve/muscle/Kaposi lineage' },
    { clue: 'Cytogenetics (t(X;18) synovial sarcoma)', meaning: 'Confirms diagnosis' },
  ],

  treatment: [
    { logic: 'Wide excision ± radiation/chemotherapy', detail: 'Adjuvant for high-grade sarcomas.' },
    { logic: 'Treat the driver (HIV control for Kaposi)', detail: 'HHV-8 tumor regresses.' },
  ],

  mnemonics: [
    { hook: 'Lipoblast = liposarcoma; Rhabdomyoblast = rhabdomyosarcoma (kids)', expansion: ['Signature cells'] },
    { hook: 'Angiosarcoma = lymphedema/radiation; Kaposi = HIV/HHV-8; MPNST = NF1', expansion: ['Vascular & nerve tumors'] },
  ],

  traps: [
    {
      questionCategory: 'Most common childhood soft-tissue sarcoma',
      wrongInstinct: 'The most common soft-tissue sarcoma in children is liposarcoma',
      rightAnswer: 'Rhabdomyosarcoma is the most common soft-tissue sarcoma in children; liposarcoma occurs mostly in adults',
      why: 'Age matters — rhabdomyosarcoma (rhabdomyoblasts) dominates in children/teens, whereas liposarcoma is an adult sarcoma.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 6-year-old presents with a soft-tissue mass; biopsy shows primitive cells with occasional cross-striated rhabdomyoblasts. The diagnosis is:',
      options: [
        { id: 'a', text: 'Liposarcoma' },
        { id: 'b', text: 'Rhabdomyosarcoma' },
        { id: 'c', text: 'Schwannoma' },
        { id: 'd', text: 'Synovial sarcoma' },
      ],
      answerId: 'b',
      explanation: 'Rhabdomyosarcoma, the most common childhood soft-tissue sarcoma, is diagnosed by rhabdomyoblasts (skeletal-muscle differentiation, sometimes with cross-striations); the embryonal subtype is most common.',
      tests: 'exam',
    },
  ],
};

export default softTissueTumors;
