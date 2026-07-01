import type { Lecture } from '../../lib/types';

export const purinePyrimidineSynthesis: Lecture = {
  id: 'purine-pyrimidine-synthesis',
  title: 'Purine & Pyrimidine Synthesis',
  system: 'molecular',
  source: 'L4 — Nucleotide Metabolism',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'L4 Nucleotide Metabolism' },
    { kind: 'disease', label: 'Nucleotide synthesis' },
    { kind: 'mechanism', label: 'De novo & salvage' },
    { kind: 'exam', label: 'PRPP / dTMP' },
  ],

  highYield: [
    '**PRPP** (5-phosphoribosyl-1-pyrophosphate) donates ribose-5-phosphate for all nucleotide synthesis; **PRPP synthetase** is activated by Pi and inhibited by purine nucleotides.',
    '**Purine de novo**: the ring is built **on PRPP** to make **IMP**, the branch point → **AMP (uses GTP)** and **GMP (uses ATP)**; AMP and GMP feedback-inhibit their own synthesis (balanced pools).',
    '**Pyrimidine de novo**: the ring is built **first** (carbamoyl phosphate → orotate → OMP → **UMP**), then attached to ribose; UMP → UDP → UTP → **CTP** (CTP synthetase, glutamine).',
    '**Deoxyribonucleotides**: **ribonucleotide reductase** reduces NDPs (e.g. UDP → dUDP). **dTMP synthesis**: **thymidylate synthase** methylates dUMP using **N⁵,N¹⁰-methylene-THF** (folate).',
    '**Salvage pathways** recycle bases: **HGPRT** (hypoxanthine, guanine) and **APRT** (adenine) reattach bases to PRPP — energetically cheaper than de novo synthesis.',
  ],

  mechanism: {
    title: 'Build (de novo) or recycle (salvage) using PRPP',
    steps: [
      { id: 's1', label: 'Ribose-5-P + ATP → PRPP', emphasis: 'key' },
      { id: 's2', label: 'Purine: build ring on PRPP → IMP → AMP/GMP' },
      { id: 's3', label: 'Pyrimidine: build ring → UMP → UTP → CTP; dUMP → dTMP' },
      { id: 's4', label: 'Salvage bases via HGPRT / APRT' },
    ],
  },

  examFindings: [
    { sign: 'Balanced AMP:GMP pools', mechanism: 'IMP branch uses GTP for AMP and ATP for GMP + feedback', significance: 'key' },
    { sign: 'Thymidylate synthesis depends on folate', mechanism: 'THF donates the methyl for dUMP → dTMP', significance: 'key' },
    { sign: 'Efficient base reuse', mechanism: 'HGPRT/APRT salvage', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'PRPP availability / PRPP synthetase activity', meaning: 'Drives both purine synthesis & salvage' },
    { clue: 'Folate status', meaning: 'Required for dTMP (DNA) synthesis' },
    { clue: 'Salvage enzyme activity (HGPRT)', meaning: 'Recycling capacity' },
  ],

  treatment: [
    { logic: 'Antifolates block dTMP/purine synthesis', detail: 'Methotrexate — see the drugs module.' },
    { logic: 'Ribonucleotide reductase is a drug target', detail: 'Hydroxyurea.' },
  ],

  mnemonics: [
    { hook: 'Purine: build ON PRPP (→IMP); Pyrimidine: build ring FIRST (→UMP)', expansion: ['Then add sugar for pyrimidines'] },
    { hook: 'IMP → AMP needs GTP; IMP → GMP needs ATP', expansion: ['Cross-regulation balances the pools'] },
  ],

  traps: [
    {
      questionCategory: 'Order of ring vs sugar assembly',
      wrongInstinct: 'Both purine and pyrimidine rings are built while already attached to the ribose sugar',
      rightAnswer: 'Purine rings are built ON PRPP (sugar first); pyrimidine rings are built FIRST (as orotate) and then joined to PRPP',
      why: 'The two pathways differ in sequence — purines assemble the base directly on the ribose-phosphate, whereas pyrimidines make the free ring (orotate) before attaching it to ribose.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which molecule donates the ribose-5-phosphate used in both de novo synthesis and salvage of nucleotides?',
      options: [
        { id: 'a', text: 'IMP' },
        { id: 'b', text: 'PRPP (5-phosphoribosyl-1-pyrophosphate)' },
        { id: 'c', text: 'Carbamoyl phosphate' },
        { id: 'd', text: 'Orotate' },
      ],
      answerId: 'b',
      explanation: 'PRPP is the activated ribose-5-phosphate donor for de novo purine/pyrimidine synthesis and for salvage reactions (via HGPRT/APRT).',
      tests: 'exam',
    },
  ],
};

export default purinePyrimidineSynthesis;
