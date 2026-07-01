import type { Lecture } from '../../lib/types';
import { EXTRAAXIAL_HEMORRHAGE } from '../../lib/figures';

export const epiduralSubduralHematoma: Lecture = {
  id: 'epidural-subdural-hematoma',
  title: 'Epidural & Subdural Hematoma',
  system: 'neuro',
  source: 'L5 — CNS Trauma & Hemorrhage',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L5 CNS Trauma & Hemorrhage' },
    { kind: 'disease', label: 'Extra-axial bleed' },
    { kind: 'mechanism', label: 'Artery vs vein' },
    { kind: 'exam', label: 'Biconvex vs crescent' },
  ],

  highYield: [
    '**Epidural hematoma**: rupture of a **meningeal artery (usually the middle meningeal)**, typically with a **temporal-bone fracture**; blood between **skull and dura**.',
    'Epidural is **arterial → rapid**: classic **“lucid interval”** then deterioration; CT = **biconvex (lens-shaped)** and **does NOT cross suture lines**.',
    '**Subdural hematoma**: **tearing of bridging veins**; blood between **dura and arachnoid**. Risk in the **elderly (brain atrophy stretches veins)** and **infants**.',
    'Subdural is **venous → slower**, can be **acute or chronic**; CT = **crescent-shaped**, **crosses suture lines but not the midline** (dural reflections).',
    'Both are **space-occupying** → mass effect, raised ICP, and herniation if not evacuated.',
  ],

  mechanism: {
    title: 'Which vessel bleeds → the shape, speed, and story',
    steps: [
      { id: 's1', label: 'Trauma to the skull/meninges' },
      { id: 's2', label: 'Middle meningeal artery → epidural (biconvex, fast)', emphasis: 'key' },
      { id: 's3', label: 'Bridging veins → subdural (crescent, slower)' },
      { id: 's4', label: 'Mass effect → ↑ ICP → herniation', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lucid interval then rapid decline after temporal trauma', mechanism: 'Arterial epidural hematoma', significance: 'key' },
    { sign: 'Gradual confusion/headache in an elderly or alcoholic patient', mechanism: 'Chronic subdural (bridging-vein) hematoma', significance: 'key' },
    { sign: 'Biconvex vs crescent collection on CT', mechanism: 'Epidural (dura-limited) vs subdural', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Non-contrast CT head', meaning: 'Shape (biconvex vs crescent), midline shift' },
    { clue: 'Does the collection cross sutures or the midline?', meaning: 'Epidural (no sutures) vs subdural (crosses sutures, not midline)' },
    { clue: 'Coagulation status / anticoagulant use', meaning: 'Subdural risk & reversal' },
  ],

  treatment: [
    { logic: 'Urgent surgical evacuation for significant/expanding bleeds', detail: 'Especially epidural with deterioration.' },
    { logic: 'Reverse anticoagulation; monitor small subdurals', detail: 'Chronic subdurals may need burr-hole drainage.' },
  ],

  mnemonics: [
    { hook: 'Epidural = artery, biconvex, lucid interval, stops at sutures', expansion: ['Middle meningeal artery; temporal fracture'] },
    { hook: 'Subdural = bridging veins, crescent, crosses sutures not midline', expansion: ['Elderly & infants'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing extra-axial bleeds',
      wrongInstinct: 'A crescent-shaped bleed that crosses a suture line is an epidural hematoma',
      rightAnswer: 'A crescent collection crossing suture lines (but not the midline) is a SUBDURAL; epidurals are biconvex and stop at sutures',
      why: 'The epidural is bound by dural attachments at sutures (biconvex), while the subdural spreads in the subdural space across sutures but is halted by midline dural reflections (crescent).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young man is struck in the temple, briefly loses consciousness, wakes and talks, then rapidly deteriorates. CT shows a biconvex hyperdensity that does not cross suture lines. The diagnosis is:',
      options: [
        { id: 'a', text: 'Subdural hematoma' },
        { id: 'b', text: 'Epidural hematoma' },
        { id: 'c', text: 'Subarachnoid hemorrhage' },
        { id: 'd', text: 'Intraparenchymal hemorrhage' },
      ],
      answerId: 'b',
      explanation: 'A lucid interval after temporal trauma with a biconvex (lens-shaped) collection that respects suture lines is an epidural hematoma from middle meningeal artery rupture — a neurosurgical emergency.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Epidural vs subdural on CT', svg: EXTRAAXIAL_HEMORRHAGE, caption: 'Epidural = biconvex, arterial (MMA), stops at sutures. Subdural = crescent, bridging veins, crosses sutures but not the midline.' },
  ],
};

export default epiduralSubduralHematoma;
