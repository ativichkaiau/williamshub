import type { Lecture } from '../../lib/types';

export const calciumHomeostasisHormones: Lecture = {
  id: 'calcium-homeostasis-hormones',
  title: 'Calcium Homeostasis & Bone Hormones',
  system: 'msk',
  source: 'L7 — Drugs & Bone Metabolism',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L7 Drugs & Bone Metabolism' },
    { kind: 'disease', label: 'Mineral homeostasis' },
    { kind: 'mechanism', label: 'PTH / vit D / calcitonin' },
    { kind: 'exam', label: 'PTH dose effect' },
  ],

  highYield: [
    '**Calcium** (>99% in bone) is absorbed in the gut (vitamin-D-dependent) and reabsorbed in the renal tubule (PTH ↑). **Phosphate** is absorbed via vitamin D; **PTH inhibits its renal reabsorption** (phosphaturic).',
    '**PTH** (from parathyroid chief cells, released when calcium is low): ↑ renal Ca reabsorption, ↑ activation of vitamin D, ↑ intestinal Ca absorption → **raises blood calcium**.',
    '**PTH effect on bone is dose-dependent**: **continuous high PTH → ↑ osteoclasts (RANKL) → resorption**; **intermittent low-dose PTH → ↑ osteoblasts → bone FORMATION** (the basis of teriparatide).',
    '**Vitamin D (active = calcitriol)** ↑ intestinal absorption of calcium and phosphate → mineralization. **Calcitonin** (thyroid C cells) **lowers calcium** by inhibiting osteoclasts (opposes PTH).',
    '**Estrogen** maintains bone (↓ osteoclast resorption, ↓ osteoblast/osteocyte apoptosis); its fall at **menopause drives osteoporosis**.',
  ],

  mechanism: {
    title: 'Hormones defend serum calcium and set bone balance',
    steps: [
      { id: 's1', label: 'Low calcium → PTH released' },
      { id: 's2', label: 'PTH: ↑ renal Ca, ↑ active vit D, mobilizes bone', emphasis: 'key' },
      { id: 's3', label: 'Continuous PTH → resorption; intermittent → formation' },
      { id: 's4', label: 'Calcitonin lowers Ca; estrogen preserves bone' },
    ],
  },

  examFindings: [
    { sign: 'Rising serum calcium with high PTH', mechanism: 'PTH mobilizes bone + renal/gut calcium', significance: 'key' },
    { sign: 'Bone formation from intermittent low-dose PTH', mechanism: 'Osteoblast stimulation (teriparatide)', significance: 'key' },
    { sign: 'Postmenopausal bone loss', mechanism: 'Estrogen deficiency', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ca, PO₄, PTH, vitamin D panel', meaning: 'Localizes a mineral disorder' },
    { clue: 'Continuous vs intermittent PTH exposure', meaning: 'Resorption vs formation' },
    { clue: 'Estrogen status', meaning: 'Postmenopausal bone loss risk' },
  ],

  treatment: [
    { logic: 'Intermittent PTH analog builds bone (teriparatide)', detail: 'Anabolic osteoporosis therapy.' },
    { logic: 'Vitamin D + calcium underpin all bone therapy', detail: 'Enable mineralization.' },
  ],

  mnemonics: [
    { hook: 'PTH raises Ca (bone, kidney, gut via vit D); Calcitonin lowers Ca', expansion: ['Opposing hormones'] },
    { hook: 'PTH: Continuous = Consumes bone; Intermittent = Increases bone', expansion: ['Teriparatide is intermittent'] },
  ],

  traps: [
    {
      questionCategory: 'Dose-dependent PTH effect',
      wrongInstinct: 'PTH always breaks down bone, so a PTH drug could never treat osteoporosis',
      rightAnswer: 'PTH is dose-dependent: continuous high levels resorb bone, but INTERMITTENT low-dose PTH (teriparatide) stimulates osteoblasts and BUILDS bone',
      why: 'The paradox is central to bone pharmacology — pulsed PTH is anabolic, which is why teriparatide is given as a once-daily injection to increase bone formation.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Teriparatide (a PTH analog) builds bone in osteoporosis, whereas chronic hyperparathyroidism destroys bone. The explanation is that:',
      options: [
        { id: 'a', text: 'Teriparatide is not actually a form of PTH' },
        { id: 'b', text: 'Intermittent low-dose PTH stimulates osteoblasts (formation), while continuous high PTH stimulates osteoclasts (resorption)' },
        { id: 'c', text: 'PTH only acts on the kidney' },
        { id: 'd', text: 'Teriparatide blocks the PTH receptor' },
      ],
      answerId: 'b',
      explanation: 'PTH has a dose-dependent effect on bone: intermittent low doses favor osteoblastic bone formation (teriparatide’s anabolic action), while sustained high levels drive osteoclastic resorption.',
      tests: 'exam',
    },
  ],
};

export default calciumHomeostasisHormones;
