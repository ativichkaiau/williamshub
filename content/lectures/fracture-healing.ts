import type { Lecture } from '../../lib/types';
import { FRACTURE_HEALING } from '../../lib/figures';

export const fractureHealing: Lecture = {
  id: 'fracture-healing',
  title: 'Fracture Healing: Stages, Types & Complications',
  system: 'msk',
  source: 'L6 — Fracture & Fracture Healing',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L6 Fracture & Healing' },
    { kind: 'mechanism', label: 'Callus stages' },
    { kind: 'exam', label: 'Healing sequence · non-union' },
  ],

  highYield: [
    '**Secondary (indirect) fracture healing proceeds through overlapping stages** (bone is one of the few tissues that heals by regeneration, not scar): **(1) haematoma/inflammation → (2) soft callus → (3) hard callus → (4) remodelling.**',
    '**(1) Haematoma & inflammation (hours–days):** the fracture bleeds, forming a clot; inflammatory cells arrive, damaged bone ends are removed, and cytokines recruit stem cells. **(2) Soft callus (~2–3 weeks):** fibroblasts and chondrocytes lay down a **fibrocartilaginous callus** that bridges the gap (like a temporary splint).',
    '**(3) Hard (bony) callus (weeks–months):** the soft callus is replaced by **woven bone via endochondral (and some intramembranous) ossification** — the same process as bone development ([[ossification]]) — restoring continuity. **(4) Remodelling (months–years):** osteoblasts and osteoclasts convert **woven bone → organised lamellar bone** along lines of mechanical stress, restoring the normal shape/medullary cavity.',
    '**Primary (direct) healing** occurs only with **rigid fixation** and near-perfect apposition (e.g. **ORIF** — open reduction internal fixation): bone forms **directly across the gap with NO visible callus**. Secondary healing (with callus) is the norm for non-rigidly fixed or conservatively managed fractures — it tolerates some movement.',
    '**Requirements & complications.** Good healing needs **adequate blood supply, mechanical stability, and bone apposition**. Impaired by **excessive movement, poor blood supply, infection, gap, diabetes, smoking, corticosteroids/NSAIDs, malnutrition, and age**. Complications: **non-union, delayed union, malunion, avascular necrosis, and infection**.',
  ],

  mechanism: {
    title: 'Clot → fibrocartilage → woven bone → lamellar bone',
    steps: [
      { id: 's1', label: 'Haematoma + inflammation (clot, cytokines, clean-up)', emphasis: 'key' },
      { id: 's2', label: 'Soft callus: fibrocartilage bridges the gap (~2–3 wk)', emphasis: 'key' },
      { id: 's3', label: 'Hard callus: woven bone via endochondral ossification', emphasis: 'key' },
      { id: 's4', label: 'Remodelling: woven → lamellar bone along stress lines' },
      { id: 's5', label: 'Rigid fixation (ORIF) → primary healing (no callus)' },
    ],
  },

  examFindings: [
    { sign: 'Fibrocartilaginous (soft) callus at ~2–3 weeks', mechanism: 'Second stage bridging the fracture gap', significance: 'key' },
    { sign: 'Woven bone (hard callus) replacing soft callus', mechanism: 'Endochondral ossification (third stage)', significance: 'key' },
    { sign: 'No callus with rigid internal fixation', mechanism: 'Primary (direct) healing', significance: 'key' },
    { sign: 'Failure to unite after prolonged time', mechanism: 'Non-union (movement, poor blood supply, infection, gap)', significance: 'key' },
    { sign: 'Bone heals in a deformed position', mechanism: 'Malunion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'First stage of fracture healing', meaning: 'Haematoma + inflammation' },
    { clue: 'Callus type that first bridges the gap', meaning: 'Soft (fibrocartilaginous) callus' },
    { clue: 'Healing type after rigid ORIF with no callus', meaning: 'Primary (direct) healing' },
    { clue: 'Factors impairing fracture healing', meaning: 'Movement, poor blood supply, infection, smoking, diabetes, steroids' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Management supports the biology: reduction + immobilisation/fixation provides stability and apposition; treat infection, optimise blood supply and nutrition, and avoid smoking. Non-union may need revision/grafting. Classification precedes this ([[fracture-classification]]); ossification mechanism: [[ossification]].' },
  ],

  mnemonics: [
    { hook: 'Healing stages: "Haematoma → Soft callus → Hard callus → Remodelling"', expansion: ['Clot → fibrocartilage → woven → lamellar'] },
    { hook: 'Primary healing = rigid fixation, NO callus; Secondary = callus (some movement)', expansion: ['ORIF → direct'] },
  ],

  traps: [
    {
      questionCategory: 'Callus in primary healing',
      wrongInstinct: 'All fracture healing produces a visible callus',
      rightAnswer: 'PRIMARY (direct) healing under rigid fixation produces NO callus (direct bone formation across the gap); callus is a feature of SECONDARY healing',
      why: 'Rigid fixation with perfect apposition lets bone form directly; the fibrocartilaginous/bony callus is the hallmark of secondary healing, which tolerates micromotion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Place the stages of secondary fracture healing in the correct order:',
      options: [
        { id: 'a', text: 'Soft callus → haematoma → remodelling → hard callus' },
        { id: 'b', text: 'Haematoma/inflammation → soft callus → hard callus → remodelling' },
        { id: 'c', text: 'Remodelling → hard callus → soft callus → haematoma' },
        { id: 'd', text: 'Hard callus → soft callus → haematoma → remodelling' },
      ],
      answerId: 'b',
      explanation: 'Secondary healing proceeds: haematoma/inflammation → soft (fibrocartilaginous) callus → hard (bony) callus via endochondral ossification → remodelling of woven into lamellar bone.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Direct (primary) bone healing with no callus formation occurs specifically when:',
      options: [
        { id: 'a', text: 'The fracture is left to move freely' },
        { id: 'b', text: 'There is rigid internal fixation with near-perfect apposition of the fragments' },
        { id: 'c', text: 'The fracture is comminuted and unstable' },
        { id: 'd', text: 'Infection is present' },
      ],
      answerId: 'b',
      explanation: 'Primary healing requires rigid fixation and close apposition (e.g. ORIF); bone forms directly across the gap without callus. Any movement or gap leads to secondary (callus) healing or non-union.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Fracture healing stages', svg: FRACTURE_HEALING, caption: 'Haematoma → soft callus (fibrocartilage) → hard callus (woven bone) → remodelling (lamellar). Primary healing (rigid fixation) = no callus.' },
  ],
};

export default fractureHealing;
