import type { Lecture } from '../../lib/types';

export const hhlRbcInclusionsArrangement: Lecture = {
  id: 'hhl-rbc-inclusions-arrangement',
  title: 'RBC Inclusions & Arrangements',
  system: 'heme',
  source: 'L3 — Abnormal Red Cell Morphology',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Hematology' },
    { kind: 'lecture', label: 'L3 RBC morphology' },
    { kind: 'investigation', label: 'Inclusions on the film' },
    { kind: 'disease', label: 'Asplenia · lead · myeloma' },
    { kind: 'mechanism', label: 'DNA vs Hb vs iron' },
  ],

  highYield: [
    '**Howell–Jolly body** = **DNA (nuclear) remnant** normally pitted out by the spleen → its presence signals **asplenia/hyposplenism**.',
    '**Heinz body** = **denatured haemoglobin**, seen only on a **supravital stain** → **G6PD deficiency/unstable Hb** (spleen bites them out → bite cells).',
    '**Basophilic stippling** = **aggregated ribosomes/RNA** → **lead poisoning, thalassaemia, sideroblastic anaemia**; **Pappenheimer bodies = iron** (Prussian-blue positive).',
    '**Rouleaux** = orderly red-cell stacks → **high paraprotein (myeloma)/high ESR**; **autoagglutination** = irregular clumps → **cold agglutinins (IgM)**.',
    '**Nucleated RBCs** with a left-shifted film (leukoerythroblastic) → **marrow stress/infiltration**; **Cabot rings** = mitotic-spindle remnants (megaloblastic/lead).',
  ],

  mechanism: {
    title: 'Inclusion identity: DNA, Hb, ribosomes or iron?',
    steps: [
      { id: 's1', label: 'Howell–Jolly body = DNA remnant → asplenia/hyposplenism', emphasis: 'key' },
      { id: 's2', label: 'Heinz body = denatured Hb (supravital stain) → G6PD/unstable Hb', emphasis: 'key' },
      { id: 's3', label: 'Basophilic stippling = ribosomes → lead poisoning, thalassaemia', emphasis: 'key' },
      { id: 's4', label: 'Pappenheimer bodies = iron (Prussian-blue +); Cabot ring = spindle remnant' },
      { id: 's5', label: 'Rouleaux = ↑ paraprotein (myeloma); autoagglutination = cold agglutinins' },
    ],
  },

  examFindings: [
    { sign: 'Howell–Jolly bodies (± target cells)', mechanism: 'Absent splenic pitting (asplenia/hyposplenism)', significance: 'key' },
    { sign: 'Coarse basophilic stippling', mechanism: 'Aggregated ribosomes (lead, thalassaemia, sideroblastic)', significance: 'key' },
    { sign: 'Rouleaux formation', mechanism: 'High plasma paraprotein (myeloma), raised ESR', significance: 'key' },
    { sign: 'Red-cell autoagglutination on the film', mechanism: 'IgM cold agglutinins cross-linking cells', significance: 'supportive' },
    { sign: 'Pappenheimer bodies staining with Prussian blue', mechanism: 'Iron-containing siderotic granules', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Howell–Jolly bodies + target cells on a routine film', meaning: 'Hyposplenism/asplenia (check vaccination status)' },
    { clue: 'Basophilic stippling + microcytic anaemia + abdominal pain/neuropathy', meaning: 'Lead poisoning' },
    { clue: 'Inclusion visible only on a supravital stain (not Wright stain)', meaning: 'Heinz body (G6PD/unstable Hb)' },
    { clue: 'Rouleaux + high total protein + high ESR', meaning: 'Paraproteinaemia (multiple myeloma)' },
  ],

  treatment: [
    { logic: 'An inclusion is a clue — treat the cause', detail: 'Howell–Jolly → vaccinate/antibiotic-aware asplenic patient; basophilic stippling → remove lead + chelation; rouleaux → investigate for myeloma. Splenic culling/pitting detailed in [[hhl-spleen-thymus-malt]].' },
  ],

  mnemonics: [
    { hook: 'What\'s inside? DNA (Howell–Jolly), Hb (Heinz), Ribosomes (stippling), Iron (Pappenheimer)', expansion: ['Howell–Jolly = asplenia', 'Heinz = G6PD (supravital stain) → bite cells', 'Coarse basophilic stippling = lead'] },
    { hook: 'Stacks vs clumps: Rouleaux = coins (paraprotein); Agglutination = clumps (cold IgM)', expansion: ['Rouleaux → myeloma/high ESR', 'Autoagglutination → cold agglutinin disease/Mycoplasma'] },
  ],

  traps: [
    {
      questionCategory: 'Howell–Jolly vs Pappenheimer',
      wrongInstinct: 'All small round red-cell inclusions are DNA remnants',
      rightAnswer: 'Howell–Jolly bodies are DNA (asplenia); Pappenheimer bodies are IRON (Prussian-blue positive)',
      why: 'A Perls\'/Prussian-blue stain distinguishes iron-containing Pappenheimer bodies from DNA Howell–Jolly bodies — different causes entirely.',
    },
    {
      questionCategory: 'Rouleaux vs autoagglutination',
      wrongInstinct: 'Coin-stacking and clumping of red cells mean the same thing',
      rightAnswer: 'Rouleaux (orderly stacks) = high paraprotein/myeloma; autoagglutination (irregular clumps) = cold agglutinins',
      why: 'Stacks point to plasma-protein excess; clumps point to IgM antibody cross-linking — a common smear trap.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A blood film shows red cells containing single small round basophilic bodies (Howell–Jolly bodies) together with target cells. This suggests:',
      options: [
        { id: 'a', text: 'Lead poisoning' },
        { id: 'b', text: 'Functional asplenia/hyposplenism' },
        { id: 'c', text: 'Multiple myeloma' },
        { id: 'd', text: 'Cold agglutinin disease' },
      ],
      answerId: 'b',
      explanation: 'Howell–Jolly bodies are nuclear (DNA) remnants normally pitted out by the spleen; their presence indicates asplenia or hyposplenism.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A child with abdominal pain and microcytic anaemia has coarse basophilic stippling of the red cells. The stippling represents:',
      options: [
        { id: 'a', text: 'Precipitated denatured haemoglobin' },
        { id: 'b', text: 'Aggregated ribosomes/RNA' },
        { id: 'c', text: 'Iron granules' },
        { id: 'd', text: 'Residual DNA' },
      ],
      answerId: 'b',
      explanation: 'Basophilic stippling is aggregated ribosomal RNA, classically from lead poisoning (inhibits pyrimidine-5′-nucleotidase) and thalassaemia/sideroblastic anaemia.',
      tests: 'investigation',
    },
  ],
};

export default hhlRbcInclusionsArrangement;
