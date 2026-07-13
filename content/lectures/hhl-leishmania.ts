import type { Lecture } from '../../lib/types';

export const hhlLeishmania: Lecture = {
  id: 'hhl-leishmania',
  title: 'Leishmania: Visceral & Cutaneous Disease',
  system: 'heme',
  source: 'L23 — Haemoflagellates',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L23 Haemoflagellates' },
    { kind: 'disease', label: 'Kala-azar' },
    { kind: 'mechanism', label: 'Amastigote in macrophage' },
    { kind: 'investigation', label: 'LD bodies in marrow' },
  ],

  highYield: [
    '*Leishmania* are haemoflagellates (family Trypanosomatidae) transmitted by the **sandfly** (*Phlebotomus*/*Lutzomyia*); the **amastigote** lives inside **macrophages**, the **promastigote** in the sandfly gut.',
    '**Visceral leishmaniasis (kala-azar, mainly L. donovani):** the amastigotes colonise the reticuloendothelial system → **fever, massive hepatosplenomegaly, pancytopenia, and hypergammaglobulinaemia**; **untreated visceral disease is often fatal**.',
    '**Cutaneous & mucocutaneous forms** cause chronic skin ulcers and destructive mucosal lesions (espundia).',
    '**Diagnosis = amastigotes (Leishman–Donovan bodies) in bone-marrow/splenic aspirate**, culture (NNN medium), or serology; **treat with liposomal amphotericin B** (or pentavalent antimonials). Autochthonous cases are reported in Thailand.',
  ],

  mechanism: {
    title: 'Sandfly bite → macrophage amastigotes → RE system',
    steps: [
      { id: 's1', label: 'Sandfly injects promastigotes into skin', emphasis: 'normal' },
      { id: 's2', label: 'Macrophages engulf them → amastigotes multiply inside', emphasis: 'key' },
      { id: 's3', label: 'Spread to spleen/liver/marrow (visceral disease)', emphasis: 'key' },
      { id: 's4', label: 'Marrow suppression → pancytopenia; untreated kala-azar fatal', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Massive splenomegaly + fever + pancytopenia', mechanism: 'Reticuloendothelial infiltration (kala-azar)', significance: 'key' },
    { sign: 'Amastigotes (Leishman–Donovan bodies) inside macrophages', mechanism: 'Intracellular parasite', significance: 'key' },
    { sign: 'Hypergammaglobulinaemia with reversed A:G ratio', mechanism: 'Polyclonal B-cell activation', significance: 'supportive' },
    { sign: 'Chronic painless skin ulcer', mechanism: 'Cutaneous leishmaniasis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fever + huge spleen + pancytopenia from an endemic area', meaning: 'Visceral leishmaniasis — aspirate marrow/spleen' },
    { clue: 'Amastigotes within macrophages on aspirate', meaning: 'Leishman–Donovan bodies confirm leishmaniasis' },
    { clue: 'Chronic non-healing skin ulcer at a bite site', meaning: 'Cutaneous leishmaniasis' },
    { clue: 'Positive rK39 serology', meaning: 'Supports visceral leishmaniasis' },
  ],

  treatment: [
    { logic: 'Liposomal amphotericin B', detail: 'First-line for visceral disease in most settings; pentavalent antimonials and miltefosine are alternatives.' },
  ],

  mnemonics: [
    { hook: 'Sandfly → Spleen; amastigote in macrophage', expansion: ['Visceral = kala-azar (L. donovani)', 'LD bodies in marrow/spleen aspirate', 'Untreated visceral disease kills'] },
  ],

  traps: [
    {
      questionCategory: 'Parasite stage in humans',
      wrongInstinct: 'Leishmania circulates freely in blood as a flagellated trypomastigote',
      rightAnswer: 'In humans Leishmania is the non-flagellated AMASTIGOTE living INSIDE macrophages; the flagellated promastigote is the sandfly-gut stage',
      why: 'That is why diagnosis relies on finding intracellular amastigotes (LD bodies) in marrow/spleen, not free organisms in a blood film.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Visceral leishmaniasis (kala-azar) is best diagnosed by demonstrating amastigotes in:',
      options: [
        { id: 'a', text: 'A peripheral blood film' },
        { id: 'b', text: 'Bone-marrow or splenic aspirate' },
        { id: 'c', text: 'A stool sample' },
        { id: 'd', text: 'A urine sample' },
      ],
      answerId: 'b',
      explanation: 'Leishman–Donovan bodies (intracellular amastigotes) are found in macrophage-rich tissue such as bone marrow or splenic aspirate.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'The vector of leishmaniasis is the:',
      options: [
        { id: 'a', text: 'Sandfly' },
        { id: 'b', text: 'Anopheles mosquito' },
        { id: 'c', text: 'Tsetse fly' },
        { id: 'd', text: 'Reduviid bug' },
      ],
      answerId: 'a',
      explanation: 'Leishmania is transmitted by the bite of the sandfly (Phlebotomus in the Old World, Lutzomyia in the New World).',
      tests: 'mechanism',
    },
  ],
};

export default hhlLeishmania;
