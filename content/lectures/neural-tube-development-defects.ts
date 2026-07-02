import type { Lecture } from '../../lib/types';
import { NEURAL_DEVELOPMENT } from '../../lib/figures';

export const neuralTubeDevelopmentDefects: Lecture = {
  id: 'neural-tube-development-defects',
  title: 'Neurulation & Neural Tube Defects',
  system: 'neuro',
  source: 'L8 — Development of the Nervous System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L8 Neurodevelopment' },
    { kind: 'mechanism', label: 'Neurulation' },
    { kind: 'exam', label: 'Spina bifida / anencephaly' },
  ],

  highYield: [
    '**The nervous system develops from ECTODERM by NEURULATION: the notochord induces the overlying ectoderm to form the NEURAL PLATE → neural folds rise and fuse into the NEURAL TUBE (closing around week 4).** The neural tube becomes the CENTRAL nervous system (brain + spinal cord).',
    '**The tube closes like a zipper from the middle outward, so the ends (neuropores) close LAST — and their failure to close causes the classic neural tube defects.** Failure of the ANTERIOR (rostral) neuropore → ANENCEPHALY (absent forebrain/cranium, incompatible with life); failure of the POSTERIOR (caudal) neuropore → SPINA BIFIDA.',
    '**Spina bifida is a spectrum: OCCULTA (a bony defect only, often just a skin dimple/tuft of hair — mild); MENINGOCELE (meninges herniate); and MYELOMENINGOCELE (meninges AND neural tissue herniate — the most severe, with neurological deficit below the level).** Higher/open defects cause more disability.',
    '**FOLATE (folic acid) deficiency markedly increases the risk of neural tube defects — periconceptional folate supplementation is a key preventive measure.** OPEN defects leak alpha-fetoprotein, so a RAISED maternal serum and amniotic AFP (and ultrasound) screen for them; anencephaly and open spina bifida are detectable antenatally.',
    '**The take-home: neural tube = CNS; failure of the anterior neuropore → anencephaly, of the posterior → spina bifida (occulta → meningocele → myelomeningocele); folate prevents, AFP screens.** The rest of the nervous system (brain vesicles, PNS from neural crest) is covered in [[brain-vesicles-neural-crest]].',
  ],

  mechanism: {
    title: 'Notochord induces neural plate → tube (CNS); neuropore failure → NTDs; folate prevents',
    steps: [
      { id: 's1', label: 'Notochord induces ectoderm → neural plate → folds → NEURAL TUBE (~wk 4)', emphasis: 'key' },
      { id: 's2', label: 'Neural tube → CNS (brain + spinal cord)', emphasis: 'key' },
      { id: 's3', label: 'Anterior neuropore fails → ANENCEPHALY (fatal)', emphasis: 'danger' },
      { id: 's4', label: 'Posterior neuropore fails → SPINA BIFIDA (occulta → meningocele → myelomeningocele)', emphasis: 'key' },
      { id: 's5', label: 'Folate prevents; open defects → ↑maternal/amniotic AFP (screening)' },
    ],
  },

  examFindings: [
    { sign: 'Absent forebrain and calvarium in a fetus', mechanism: 'Anencephaly (failed anterior neuropore closure)', significance: 'key' },
    { sign: 'Herniated meninges + neural tissue with a lower-limb deficit', mechanism: 'Myelomeningocele (severe spina bifida)', significance: 'key' },
    { sign: 'Skin dimple/hair tuft over the lumbar spine, no deficit', mechanism: 'Spina bifida occulta (mild)', significance: 'key' },
    { sign: 'Raised maternal serum/amniotic alpha-fetoprotein', mechanism: 'Open neural tube defect (screening)', significance: 'key' },
    { sign: 'Reduced NTD incidence with periconceptional folate', mechanism: 'Folate lowers neural tube defect risk', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The structure that becomes the CNS', meaning: 'The neural tube' },
    { clue: 'The defect from failed anterior neuropore closure', meaning: 'Anencephaly' },
    { clue: 'The spectrum from failed posterior neuropore closure', meaning: 'Spina bifida (occulta → meningocele → myelomeningocele)' },
    { clue: 'The vitamin that prevents neural tube defects', meaning: 'Folate (folic acid)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Neurulation errors cause common, preventable birth defects — periconceptional folate is a major public-health intervention, and AFP/ultrasound screen for open defects. The neural tube becomes the CNS whose adult anatomy is the spinal cord ([[spinal-cord-anatomy-organization]]) and brain; the PNS and brain-vesicle derivatives are in [[brain-vesicles-neural-crest]]. Folate deficiency ties to nutrition ([[water-soluble-vitamins-trace-elements]]).' },
  ],

  mnemonics: [
    { hook: 'Neuropores: "Anterior fails → Anencephaly; posterior fails → spina bifida"', expansion: ['Ends close last', 'Open defect → ↑AFP'] },
    { hook: 'Spina bifida spectrum: "Occulta (bone) → Meningocele → Myelomeningocele (worst)"', expansion: ['Folate prevents', 'Myelomeningocele = neural tissue herniates'] },
  ],

  traps: [
    {
      questionCategory: 'Severity of spina bifida variants',
      wrongInstinct: 'All forms of spina bifida cause severe neurological disability',
      rightAnswer: 'Spina bifida is a SPECTRUM: OCCULTA is a bony defect only (often asymptomatic, a skin dimple/hair tuft), MENINGOCELE herniates meninges, and MYELOMENINGOCELE herniates neural tissue and causes the significant deficit — severity depends on the type and level',
      why: 'Assuming all spina bifida is severe overlooks the common, benign occulta form; the neurological deficit depends on whether neural tissue is involved (myelomeningocele) and the spinal level.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Failure of the anterior (rostral) neuropore to close results in:',
      options: [
        { id: 'a', text: 'Spina bifida occulta' },
        { id: 'b', text: 'Anencephaly' },
        { id: 'c', text: 'Myelomeningocele' },
        { id: 'd', text: 'Hydrocephalus' },
      ],
      answerId: 'b',
      explanation: 'The neural tube closes from the middle toward the ends; failure of the anterior neuropore produces anencephaly (absent forebrain and calvarium, incompatible with life), while failure of the posterior neuropore produces spina bifida.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which supplement given periconceptionally reduces the risk of neural tube defects?',
      options: [
        { id: 'a', text: 'Vitamin A' },
        { id: 'b', text: 'Folate (folic acid)' },
        { id: 'c', text: 'Vitamin D' },
        { id: 'd', text: 'Iron' },
      ],
      answerId: 'b',
      explanation: 'Folate deficiency increases the risk of neural tube defects, so periconceptional folic acid supplementation is a key preventive measure; open defects can also be screened for by a raised maternal serum/amniotic alpha-fetoprotein.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Development of the nervous system', svg: NEURAL_DEVELOPMENT, caption: 'Neurulation, the neural tube (CNS) and neural crest (PNS), brain vesicles, and neural tube defects.' },
  ],
};

export default neuralTubeDevelopmentDefects;
