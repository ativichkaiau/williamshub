import type { Lecture } from '../../lib/types';

export const metabolicToxicNmjMyopathy: Lecture = {
  id: 'metabolic-toxic-nmj-myopathy',
  title: 'Metabolic, Toxic & Neuromuscular-Junction Disorders',
  system: 'msk',
  source: 'L2 — Diseases of Skeletal Muscle',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L2 Diseases of Skeletal Muscle' },
    { kind: 'disease', label: 'Metabolic / NMJ' },
    { kind: 'mechanism', label: 'Energy & transmission' },
    { kind: 'exam', label: 'MG vs LEMS' },
  ],

  highYield: [
    '**Metabolic myopathies**: **Pompe (GSD II, acid maltase)** → glycogen in skeletal + cardiac muscle → infantile hypotonia + cardiomyopathy; **McArdle (GSD V, myophosphorylase)** → exercise cramps, myoglobinuria, “second-wind”; **carnitine/CPT deficiency** → lipid myopathy, exertional myonecrosis.',
    '**Mitochondrial myopathy**: respiratory-chain defects → weakness + **ophthalmoplegia**; **ragged-red fibers** (Gomori trichrome), COX-negative fibers.',
    '**Toxic myopathy**: **steroid-induced** (selective **type II fiber atrophy**), statins; **rhabdomyolysis** (necrosis → myoglobinuria) from drugs/trauma/ischemia.',
    '**Myasthenia gravis (MG)**: autoantibodies to the **POSTsynaptic acetylcholine receptor**; **fatigable weakness starting with extraocular muscles (ptosis, diplopia)**; associated **thymic hyperplasia/thymoma**; **improves with cholinesterase inhibitors** and thymectomy.',
    '**Lambert-Eaton myasthenic syndrome (LEMS)**: antibodies to **PREsynaptic voltage-gated calcium channels**; **paraneoplastic (small-cell lung cancer)**; proximal weakness + autonomic signs that **improve with repeated use**; **poor response to cholinesterase inhibitors**.',
  ],

  mechanism: {
    title: 'Energy failure, toxin, or blocked transmission',
    steps: [
      { id: 's1', label: 'Metabolic: glycogen/lipid/mitochondrial energy defect' },
      { id: 's2', label: 'Toxic: steroids (type II atrophy), rhabdomyolysis' },
      { id: 's3', label: 'MG: postsynaptic AChR antibodies (fatigable)', emphasis: 'key' },
      { id: 's4', label: 'LEMS: presynaptic Ca-channel antibodies (paraneoplastic)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Fatigable ptosis/diplopia worsening through the day', mechanism: 'Myasthenia gravis (postsynaptic AChR)', significance: 'key' },
    { sign: 'Proximal weakness improving with repeated effort + dry mouth', mechanism: 'LEMS (presynaptic Ca channel)', significance: 'key' },
    { sign: 'Exercise-induced cramps + myoglobinuria', mechanism: 'McArdle disease (myophosphorylase)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'AChR antibodies + repetitive nerve stimulation', meaning: 'MG (decrement) vs LEMS (increment)' },
    { clue: 'Ragged-red fibers / COX-negative', meaning: 'Mitochondrial myopathy' },
    { clue: 'CK, urine myoglobin', meaning: 'Rhabdomyolysis / metabolic myopathy' },
  ],

  treatment: [
    { logic: 'MG: cholinesterase inhibitors, immunotherapy, thymectomy', detail: 'Postsynaptic — responds to more ACh.' },
    { logic: 'LEMS: treat the tumor; 3,4-diaminopyridine', detail: 'Increase presynaptic ACh release.' },
    { logic: 'Rhabdomyolysis: IV fluids, protect kidneys', detail: 'Myoglobin nephrotoxicity.' },
  ],

  mnemonics: [
    { hook: 'MG = Muscle-receptor (postsynaptic), fatigues, improves with anticholinesterase', expansion: ['Thymoma association'] },
    { hook: 'LEMS = presynaptic Ca channel, paraneoplastic (SCLC), improves with use', expansion: ['Poor anticholinesterase response'] },
  ],

  traps: [
    {
      questionCategory: 'MG vs LEMS response pattern',
      wrongInstinct: 'Both myasthenia gravis and LEMS improve with cholinesterase inhibitors and worsen with sustained activity',
      rightAnswer: 'MG (postsynaptic) FATIGUES with use and improves with cholinesterase inhibitors; LEMS (presynaptic) IMPROVES with repeated use and responds poorly to cholinesterase inhibitors',
      why: 'The site of the lesion flips the pattern — postsynaptic receptor loss fatigues, while presynaptic calcium-channel blockade improves as repeated firing builds up calcium and ACh release.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A smoker develops proximal leg weakness and dry mouth; strength briefly improves after sustained contraction, and cholinesterase inhibitors give little benefit. Antibodies target the presynaptic calcium channel. The diagnosis and key association are:',
      options: [
        { id: 'a', text: 'Myasthenia gravis; thymoma' },
        { id: 'b', text: 'Lambert-Eaton myasthenic syndrome; small-cell lung cancer' },
        { id: 'c', text: 'Polymyositis; ovarian cancer' },
        { id: 'd', text: 'Botulism; canned food' },
      ],
      answerId: 'b',
      explanation: 'LEMS is caused by antibodies to presynaptic voltage-gated calcium channels, is paraneoplastic (classically small-cell lung cancer), improves with repeated use, and responds poorly to cholinesterase inhibitors.',
      tests: 'exam',
    },
  ],
};

export default metabolicToxicNmjMyopathy;
