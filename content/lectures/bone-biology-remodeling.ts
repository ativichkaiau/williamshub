import type { Lecture } from '../../lib/types';

export const boneBiologyRemodeling: Lecture = {
  id: 'bone-biology-remodeling',
  title: 'Bone Biology & Remodeling',
  system: 'msk',
  source: 'L1 — Diseases of Bone',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L1 Diseases of Bone' },
    { kind: 'disease', label: 'Bone biology' },
    { kind: 'mechanism', label: 'RANK–RANKL–OPG' },
    { kind: 'exam', label: 'Woven vs lamellar' },
  ],

  highYield: [
    'Bone = **osteoid (35%: type I collagen, GAGs, proteins) + minerals (65%: hydroxyapatite)**. Cells: **osteoblasts** (form matrix), **osteocytes** (embedded, mechanotransduction), **osteoclasts** (multinucleated macrophages that resorb via acid + cathepsin K/matrix metalloproteases).',
    '**Woven bone** (immature — rapid, disorganized collagen, always abnormal in adults) vs **lamellar bone** (mature — parallel collagen, strong).',
    'Long bones form by **endochondral ossification** (cartilage model → growth-plate zones: reserve → proliferation → hypertrophy → mineralization); flat bones by **intramembranous ossification** (no cartilage).',
    'Remodeling (~10%/year) balances resorption and formation via **RANK–RANKL–OPG**: **RANKL** (on osteoblasts/stroma) binds **RANK** (on osteoclast precursors) → osteoclast activation; **osteoprotegerin (OPG)** is a decoy that **blocks RANKL** → less resorption. Wnt/β-catenin drives osteoblasts.',
    'Systemic regulators: **PTH, IL-1, glucocorticoids promote osteoclasts/turnover**; **estrogen, testosterone, BMPs favor formation** (↑ OPG).',
  ],

  mechanism: {
    title: 'Coupled osteoblast–osteoclast activity keeps bone renewing',
    steps: [
      { id: 's1', label: 'RANKL (osteoblast) binds RANK (osteoclast precursor)', emphasis: 'key' },
      { id: 's2', label: 'Osteoclast activated → resorption (acid + cathepsin K)' },
      { id: 's3', label: 'OPG decoy blocks RANKL → less resorption' },
      { id: 's4', label: 'Osteoblasts refill; balance sets bone mass' },
    ],
  },

  examFindings: [
    { sign: 'Woven bone in an adult', mechanism: 'Rapid, disorganized formation — always pathological', significance: 'key' },
    { sign: 'Estrogen loss → net bone loss', mechanism: 'Less OPG / more osteoclast activity', significance: 'key' },
    { sign: 'Growth-plate cartilage in a child', mechanism: 'Site of endochondral longitudinal growth', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Woven vs lamellar histology', meaning: 'Immature/pathologic vs mature bone' },
    { clue: 'RANKL/OPG balance', meaning: 'Direction of remodeling' },
    { clue: 'Ossification type (endochondral vs intramembranous)', meaning: 'Long bone vs flat bone development' },
  ],

  treatment: [
    { logic: 'RANKL is a drug target (denosumab)', detail: 'Blocking RANKL mimics OPG → less resorption.' },
    { logic: 'Understand remodeling to grasp metabolic bone disease', detail: 'Foundation for the next modules.' },
  ],

  mnemonics: [
    { hook: 'RANKL Recruits osteoclasts; OPG Opposes (decoy)', expansion: ['Denosumab = anti-RANKL antibody'] },
    { hook: 'OsteoBlast = Builds; osteoClast = Consumes', expansion: ['Osteocyte = mechanosensor'] },
  ],

  traps: [
    {
      questionCategory: 'RANKL vs OPG',
      wrongInstinct: 'Osteoprotegerin (OPG) activates osteoclasts to increase bone resorption',
      rightAnswer: 'OPG is a decoy receptor that BINDS RANKL and PREVENTS it from activating RANK, thereby REDUCING osteoclast activity and resorption',
      why: 'RANKL activates osteoclasts; OPG intercepts RANKL to inhibit them — the OPG/RANKL ratio sets net resorption, and denosumab therapeutically mimics OPG.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which molecule, produced by osteoblasts, acts as a decoy receptor that binds RANKL and thereby inhibits osteoclast activation?',
      options: [
        { id: 'a', text: 'RANK' },
        { id: 'b', text: 'Osteoprotegerin (OPG)' },
        { id: 'c', text: 'M-CSF' },
        { id: 'd', text: 'Cathepsin K' },
      ],
      answerId: 'b',
      explanation: 'Osteoprotegerin (OPG) is a soluble decoy that binds RANKL, preventing it from engaging RANK on osteoclast precursors — so a high OPG:RANKL ratio reduces bone resorption.',
      tests: 'exam',
    },
  ],
};

export default boneBiologyRemodeling;
