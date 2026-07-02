import type { Lecture } from '../../lib/types';
import { CROSSBRIDGE_CYCLE } from '../../lib/figures';

export const muscleContractionCrossbridge: Lecture = {
  id: 'muscle-contraction-crossbridge',
  title: 'Muscle Contraction: The Sliding Filament & Cross-Bridge Cycle',
  system: 'msk',
  source: 'L3 — Molecular Basis of Muscle Contraction',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'MSK' },
    { kind: 'lecture', label: 'L3 Muscle Contraction' },
    { kind: 'mechanism', label: 'Cross-bridge cycle' },
    { kind: 'exam', label: 'ATP role · rigor' },
  ],

  highYield: [
    '**The sarcomere (Z-line to Z-line) is the contractile unit.** **Thin filaments = actin** (F-actin of G-actin subunits, anchored to the Z line by **α-actinin/CapZ**) + regulatory **tropomyosin and troponin**. **Thick filaments = myosin**, whose heads have an **actin-binding site and an ATPase site**.',
    '**Sliding filament theory:** contraction occurs when **myosin heads pull the thin filaments toward the sarcomere centre**, so filaments slide over each other — the **I band and H zone shorten** while the **A band stays constant**; the filaments themselves do not shorten.',
    '**The cross-bridge cycle (each cycle uses 1 ATP):** (1) **binding** — an energised myosin head attaches to actin (site exposed by Ca²⁺); (2) **power stroke** — the head pivots, pulling actin, and **releases ADP + Pi**; (3) **detachment** — a **new ATP binds** myosin, releasing it from actin; (4) **re-cocking** — myosin **hydrolyses ATP (→ ADP + Pi)** to re-energise/re-set the head, ready to bind again.',
    '**ATP has two essential roles:** it **energises the power stroke** (via hydrolysis to re-cock the head) and, crucially, its **binding is required to DETACH** myosin from actin. So ATP is needed both to contract and to *relax*.',
    '**No ATP → the cross-bridge cannot detach = the rigor state** (heads locked on actin) — the basis of **rigor mortis** after death (ATP depletion). Continued cycling as long as Ca²⁺ and ATP are present produces sustained contraction.',
  ],

  mechanism: {
    title: 'Bind → power stroke → detach (ATP) → re-cock',
    steps: [
      { id: 's1', label: 'Sarcomere: actin (thin) + myosin (thick); heads have ATPase', emphasis: 'key' },
      { id: 's2', label: 'Myosin head binds actin (Ca²⁺-exposed site)', emphasis: 'key' },
      { id: 's3', label: 'Power stroke: head pivots, releases ADP+Pi → filaments slide', emphasis: 'key' },
      { id: 's4', label: 'New ATP binds → myosin detaches from actin' },
      { id: 's5', label: 'ATP hydrolysis re-cocks the head; no ATP → rigor', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'I band and H zone shorten; A band constant', mechanism: 'Sliding filament (thin slides over thick)', significance: 'key' },
    { sign: 'ATP binding needed to release myosin from actin', mechanism: 'Detachment step of the cross-bridge cycle', significance: 'key' },
    { sign: 'Rigor mortis after death', mechanism: 'ATP depletion → cross-bridges cannot detach', significance: 'key' },
    { sign: 'Power stroke releases ADP + Pi', mechanism: 'Head pivots, pulling the thin filament', significance: 'supportive' },
    { sign: 'α-actinin anchoring thin filaments', mechanism: 'Attaches actin to the Z line', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Band that does not change length during contraction', meaning: 'A band (thick filament length)' },
    { clue: 'Molecule required for myosin to detach from actin', meaning: 'ATP (binding)' },
    { clue: 'State when ATP is absent and heads stay bound', meaning: 'Rigor (rigor mortis)' },
    { clue: 'Protein anchoring thin filaments to the Z line', meaning: 'α-actinin (and CapZ)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The cycle explains muscle mechanics, energetics ([[muscle-energy-systems]]), and rigor mortis; ATP dependence links contraction to fuel supply. What triggers the cycle (Ca²⁺): [[excitation-contraction-coupling]]. Builds on the sarcomere in EHP ([[skeletal-muscle-sarcomere]]).' },
  ],

  mnemonics: [
    { hook: 'Cross-bridge: "Bind, Bend (power stroke), Break off (new ATP), Bounce back (re-cock)"', expansion: ['1 ATP per cycle'] },
    { hook: 'ATP is needed to DETACH → no ATP = rigor', expansion: ['Contraction AND relaxation need ATP'] },
  ],

  traps: [
    {
      questionCategory: 'Role of ATP in the cross-bridge cycle',
      wrongInstinct: 'ATP is only needed to power contraction, not to relax the muscle',
      rightAnswer: 'ATP is also required to DETACH myosin from actin — without it the cross-bridges cannot release (rigor)',
      why: 'ATP binding (not hydrolysis) breaks the actin–myosin bond; this is why ATP depletion after death causes rigor mortis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In the cross-bridge cycle, the binding of a new ATP molecule to the myosin head causes:',
      options: [
        { id: 'a', text: 'The power stroke' },
        { id: 'b', text: 'Detachment of myosin from actin' },
        { id: 'c', text: 'Ca²⁺ release from the SR' },
        { id: 'd', text: 'Binding of myosin to actin' },
      ],
      answerId: 'b',
      explanation: 'ATP binding to myosin releases it from actin (detachment). Subsequent hydrolysis re-cocks the head. Rigor occurs when no ATP is available to detach the head.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Rigor mortis develops after death because:',
      options: [
        { id: 'a', text: 'Excess ATP over-stimulates the muscle' },
        { id: 'b', text: 'ATP is depleted, so cross-bridges cannot detach and remain bound' },
        { id: 'c', text: 'Ca²⁺ is actively pumped out of the cytosol' },
        { id: 'd', text: 'Tropomyosin permanently blocks actin' },
      ],
      answerId: 'b',
      explanation: 'Without ATP, myosin cannot detach from actin, so the cross-bridges lock in the rigor state, producing the stiffness of rigor mortis.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'The cross-bridge cycle', svg: CROSSBRIDGE_CYCLE, caption: 'Bind → power stroke (release ADP+Pi) → detach (new ATP) → re-cock (ATP hydrolysis). No ATP → rigor. 1 ATP per cycle.' },
  ],
};

export default muscleContractionCrossbridge;
