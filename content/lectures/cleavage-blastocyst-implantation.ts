import type { Lecture } from '../../lib/types';

export const cleavageBlastocystImplantation: Lecture = {
  id: 'cleavage-blastocyst-implantation',
  title: 'Cleavage, Blastocyst & Implantation',
  system: 'repro',
  source: 'L2 — Pre-embryonic Development',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Development' },
    { kind: 'lecture', label: 'HGD L2' },
    { kind: 'mechanism', label: 'Week-one development' },
    { kind: 'exam', label: 'Compaction and hatching' },
  ],
  highYield: [
    '**Cleavage** is repeated mitosis without overall growth; daughter cells are **blastomeres** enclosed by the zona pellucida. The embryo becomes a morula as cell number rises.',
    'At the **8-cell stage**, compaction establishes polarity and inside-versus-outside cell positions, beginning the separation of embryoblast and trophoblast lineages.',
    'The **blastocyst** contains an inner cell mass (**embryoblast**), outer trophoblast/trophectoderm, and a blastocyst cavity. The embryonic pole is the side containing the inner cell mass.',
    '**Hatching** removes the zona pellucida around day 5, permitting trophoblast contact with the endometrium. A blastocyst that cannot hatch cannot implant normally.',
    'Implantation begins near the end of week 1, normally in the uterine body/fundus. Trophoblast contacts and invades endometrium, while the surrounding stroma undergoes a nutrient-rich **decidual reaction**.',
  ],
  mechanism: {
    title: 'Zygote to implanted blastocyst',
    steps: [
      { id: 's1', label: 'Cleavage -> blastomeres -> morula' },
      { id: 's2', label: 'Compaction -> inner and outer cell fates', emphasis: 'key' },
      { id: 's3', label: 'Blastocyst: embryoblast + trophoblast + cavity' },
      { id: 's4', label: 'Hatching -> endometrial attachment and implantation' },
    ],
  },
  examFindings: [
    { sign: 'Blastocyst remains enclosed by zona pellucida', mechanism: 'Hatching failure prevents endometrial attachment', significance: 'key' },
    { sign: 'Implantation in uterine fundus/body', mechanism: 'Normal trophoblast-endometrium interaction', significance: 'supportive' },
    { sign: 'Endometrial stromal cells enlarge around implant', mechanism: 'Decidualization supports and regulates implantation', significance: 'key' },
  ],
  investigations: [
    { clue: 'Serial embryo morphology in IVF', meaning: 'Track cleavage, compaction, blastocyst formation, and hatching' },
    { clue: 'Transvaginal ultrasound', meaning: 'Confirm intrauterine implantation at the appropriate gestational age' },
    { clue: 'Serum or urine beta-hCG', meaning: 'Detect trophoblast-derived pregnancy signal' },
  ],
  treatment: [
    { logic: 'Transfer embryos at an appropriate cleavage/blastocyst stage', detail: 'Developmental stage and uterine timing must be synchronized.' },
    { logic: 'Evaluate pain/bleeding with pregnancy testing and ultrasound', detail: 'Exclude ectopic implantation.' },
  ],
  mnemonics: [
    { hook: 'Morula compacts; blastocyst hatches; trophoblast attaches', expansion: ['Week-one sequence'] },
    { hook: 'Embryoblast builds embryo; trophoblast builds interface', expansion: ['Inner versus outer cell mass'] },
  ],
  traps: [
    {
      questionCategory: 'Growth during cleavage',
      wrongInstinct: 'The embryo enlarges with every cleavage division',
      rightAnswer: 'Cell number rises while total conceptus size stays constrained by the zona pellucida',
      why: 'Cleavage partitions the zygote cytoplasm into progressively smaller blastomeres.',
    },
  ],
  quiz: [
    {
      id: 'q1',
      stem: 'Which blastocyst component gives rise primarily to the embryo proper?',
      options: [
        { id: 'a', text: 'Embryoblast (inner cell mass)' },
        { id: 'b', text: 'Trophoblast' },
        { id: 'c', text: 'Blastocoel' },
        { id: 'd', text: 'Zona pellucida' },
      ],
      answerId: 'a',
      explanation: 'The inner cell mass becomes the embryo proper; the trophoblast contributes mainly to the fetal-maternal interface.',
      tests: 'mechanism',
    },
  ],
};

export default cleavageBlastocystImplantation;
