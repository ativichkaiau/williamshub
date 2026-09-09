import type { Lecture } from '../../lib/types';

export const ghpSarcomereSlidingFilament: Lecture = {
  id: 'ghp-sarcomere-sliding-filament',
  title: 'Sarcomere Structure & the Sliding Filament Mechanism',
  system: 'msk',
  source: 'Ch 6 — Contraction of Skeletal Muscle',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Musculoskeletal' },
    { kind: 'lecture', label: 'Ch 6 Skeletal Muscle Contraction' },
    { kind: 'mechanism', label: 'Cross-bridge cycle' },
    { kind: 'exam', label: 'Which bands shorten' },
  ],

  highYield: [
    '**The sarcomere is the contractile unit: Z line to Z line, resting length ~2.0 µm.** Read the striations by what is in them: the **A band (Anisotropic, dark) is the full length of the THICK (myosin) filaments** including the region where thin filaments overlap them; the **I band (Isotropic, light) contains only THIN (actin) filaments** and is bisected by the **Z line (disc)**; the **H zone is the middle of the A band where there is myosin but no actin overlap**, bisected by the **M line** where myosin tails are cross-linked.',
    '**The single most-tested fact: during contraction the I band and H zone SHORTEN, the A band does NOT change.** Filaments **slide**, they do not shorten — so any band defined by the length of the myosin filament (the A band) is fixed, and any band defined by the **gap** between opposing filaments (I band, H zone) closes.',
    '**Thin filament = actin + tropomyosin + troponin.** Two helical strands of **F-actin** (polymerised G-actin), each monomer carrying an **active site for myosin**; **tropomyosin** lies in the groove and **physically covers those active sites at rest**; the **troponin complex** clamps it in place — **troponin T binds Tropomyosin, troponin I Inhibits (binds actin), troponin C binds Calcium**. **Ca²⁺ binding to troponin C is the switch**: the complex tugs tropomyosin deeper into the groove, uncovering the active sites. **Contraction is de-inhibition, not activation.**',
    '**Thick filament = myosin II.** Each molecule has a **two-headed globular head plus an arm (the cross-bridge)**, hinged where it leaves the body of the filament. The head is both the **actin-binding site** and an **ATPase**. Heads spiral outward along the filament and — crucially — **the two halves of the thick filament point in opposite directions**, so both ends pull the Z lines **inward**. **Titin**, a giant springy protein, tethers myosin to the Z line, keeps the lattice aligned, and supplies **passive tension**.',
    '**The cross-bridge (walk-along / ratchet) cycle:** (1) ATP is **hydrolysed to ADP + Pi but the products stay bound**, leaving the head **cocked and energised, perpendicular to the filament**; (2) **Ca²⁺ uncovers the active site** and the head **attaches**; (3) **Pi release triggers the power stroke** — the head **tilts toward the arm and drags actin toward the M line**, then ADP leaves; (4) **a NEW ATP binds the head and causes detachment**; (5) hydrolysis re-cocks it and the cycle repeats. Heads act **asynchronously**, so some are always attached and movement is smooth. **Force depends on how many heads are attached at once; shortening depends on how fast they cycle.**',
    '**Rigor mortis is step 4 failing.** After death **ATP is exhausted**, so **myosin heads cannot detach** from actin — the muscle locks in a rigid contracture, beginning within a few hours, maximal at ~12 h, and released only over **15–25 h** as lysosomal proteolysis destroys the cross-bridges. It is the cleanest proof that **ATP is required for RELAXATION, not only for contraction**.',
  ],

  mechanism: {
    title: 'Ca²⁺ uncovers actin; ATP-cocked heads ratchet the Z lines inward',
    steps: [
      { id: 's1', label: 'At rest tropomyosin covers actin active sites (troponin holds it there)', emphasis: 'key' },
      { id: 's2', label: 'ATP hydrolysed on myosin head → cocked, energised, ADP + Pi still bound' },
      { id: 's3', label: 'Ca²⁺ binds troponin C → tropomyosin shifts → active sites exposed', emphasis: 'key' },
      { id: 's4', label: 'Cross-bridge attaches; Pi released → POWER STROKE tilts head, pulls actin to M line', emphasis: 'key' },
      { id: 's5', label: 'New ATP binds → head DETACHES (no ATP = no detachment)', emphasis: 'key' },
      { id: 's6', label: 'Cycle repeats asynchronously while Ca²⁺ is present → I band and H zone narrow, A band unchanged' },
    ],
  },

  examFindings: [
    { sign: 'On electron microscopy of a contracted fibre, the A band width is unchanged', mechanism: 'The A band equals thick filament length, and filaments slide rather than shorten', significance: 'key' },
    { sign: 'I band and H zone both narrow during contraction', mechanism: 'Thin filaments slide inward, closing the non-overlap gaps', significance: 'key' },
    { sign: 'Z lines are drawn toward each other', mechanism: 'The two halves of each thick filament pull in opposite directions toward the M line', significance: 'key' },
    { sign: 'Rigidity of skeletal muscle some hours after death', mechanism: 'Rigor mortis — no ATP, so cross-bridges cannot detach from actin', significance: 'key' },
    { sign: 'Contraction is smooth rather than jerky at the fibre level', mechanism: 'Cross-bridges cycle asynchronously, so attachment is continuous overall', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Dark band whose width never changes with contraction', meaning: 'A band — the length of the thick (myosin) filament' },
    { clue: 'Light band bisected by the Z line', meaning: 'I band — thin (actin) filaments only' },
    { clue: 'Central region of the A band lacking actin overlap', meaning: 'H zone (bisected by the M line)' },
    { clue: 'Protein that physically covers the actin active site at rest', meaning: 'Tropomyosin, held there by troponin (T binds tropomyosin, I inhibits, C binds calcium)' },
    { clue: 'Event that causes myosin to release actin', meaning: 'Binding of a new ATP molecule to the myosin head' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This machine explains rigor mortis, malignant hyperthermia, contracture, and why troponin subunits released from dying cardiac myocytes are the cornerstone cardiac biomarker. It also sets the ceiling on force: the number of cross-bridges that can engage is decided by filament overlap, which is the whole content of [[ghp-length-tension-load-velocity]]. How the electrical signal reaches these filaments: [[ghp-excitation-contraction-coupling-skeletal]] and [[excitation-contraction-coupling]]. The synapse that starts it: [[ghp-neuromuscular-junction]].' },
    { logic: 'Where it is examined', detail: 'Expect band-behaviour questions and the ATP-for-detachment discriminator. The same sliding-filament apparatus, differently regulated by calmodulin rather than troponin, appears in [[ghp-smooth-muscle-contraction]]; the cardiac variant in [[cardiac-smooth-muscle]].' },
  ],

  mnemonics: [
    { hook: 'A band is Always the same; the I band and H zone Vanish', expansion: ['A = thick filament length (fixed)', 'I and H = gaps, so they close', 'A is for Actin but the A band is myosin — the trap is built into the alphabet'] },
    { hook: 'Troponin: T ties Tropomyosin, I Inhibits, C catches Calcium', expansion: ['Ca²⁺ on troponin C → tropomyosin slides off the active site', 'ATP binds to LET GO, ATP splits to RE-COCK', 'No ATP → heads stuck attached → rigor mortis'] },
  ],

  traps: [
    {
      questionCategory: 'Which bands change during contraction',
      wrongInstinct: 'All the striations narrow as the muscle shortens, including the A band',
      rightAnswer: 'Only the I band and H zone narrow; the A band is unchanged',
      why: 'Contraction slides filaments past one another without shortening either one, so the band defined by thick-filament length cannot change.',
    },
    {
      questionCategory: 'What ATP is used for in the cross-bridge cycle',
      wrongInstinct: 'ATP is consumed to power the power stroke itself, so a dead muscle should go limp',
      rightAnswer: 'ATP binding is required for DETACHMENT; the power stroke is driven by energy already stored in the cocked head',
      why: 'Rigor mortis is the experiment: with no ATP the heads stay locked to actin and the muscle stiffens rather than relaxes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Electron microscopy of a maximally contracted skeletal muscle fibre is compared with the same fibre at rest. Which set of changes is correct?',
      options: [
        { id: 'a', text: 'A band shortened, I band shortened, H zone unchanged' },
        { id: 'b', text: 'A band unchanged, I band shortened, H zone shortened' },
        { id: 'c', text: 'A band unchanged, I band unchanged, H zone widened' },
        { id: 'd', text: 'All bands shorten in proportion to the whole sarcomere' },
      ],
      answerId: 'b',
      explanation: 'The sliding filament mechanism moves thin filaments toward the M line without changing the length of either filament. The A band is defined by thick filament length and is therefore fixed, while the I band (actin-only zone) and the H zone (myosin-only zone) are gaps that close as overlap increases.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Rigor mortis develops because, in the absence of ATP, myosin heads:',
      options: [
        { id: 'a', text: 'Cannot bind actin, leaving the muscle flaccid' },
        { id: 'b', text: 'Cannot detach from actin, locking the filaments together' },
        { id: 'c', text: 'Hydrolyse ADP instead, producing sustained power strokes' },
        { id: 'd', text: 'Are cleaved from the thick filament by calcium-activated proteases' },
      ],
      answerId: 'b',
      explanation: 'Detachment requires a fresh ATP molecule to bind the myosin head. Once cellular ATP is exhausted after death, heads complete their power stroke and remain bound, producing rigid contracture. Proteolysis eventually breaks the cross-bridges down over 15 to 25 hours, which is why rigor resolves.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'In skeletal muscle, the immediate consequence of calcium binding to troponin C is that:',
      options: [
        { id: 'a', text: 'Myosin ATPase is switched on for the first time' },
        { id: 'b', text: 'Tropomyosin moves deeper into the actin groove, uncovering myosin-binding sites' },
        { id: 'c', text: 'The Z lines are pulled together directly by calcium-actin bonds' },
        { id: 'd', text: 'Myosin light-chain kinase phosphorylates the myosin head' },
      ],
      answerId: 'b',
      explanation: 'Skeletal muscle is regulated on the thin filament by de-inhibition. Calcium on troponin C causes the troponin complex to drag tropomyosin off the actin active sites, permitting cross-bridge attachment by heads that were already energised. Myosin light-chain kinase phosphorylation is the smooth-muscle mechanism, and calcium does not itself generate force.',
      tests: 'mechanism',
    },
  ],
};

export default ghpSarcomereSlidingFilament;
