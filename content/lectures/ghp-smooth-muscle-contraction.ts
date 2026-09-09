import type { Lecture } from '../../lib/types';

export const ghpSmoothMuscleContraction: Lecture = {
  id: 'ghp-smooth-muscle-contraction',
  title: 'Smooth Muscle Contraction',
  system: 'physiology',
  source: 'Ch 8 — Contraction and Excitation of Smooth Muscle',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 8 Smooth Muscle' },
    { kind: 'mechanism', label: 'Ca²⁺ → calmodulin → MLCK' },
    { kind: 'exam', label: 'No troponin · latch · stress-relaxation' },
  ],

  highYield: [
    '**Two organisational types, and the exam wants the difference.** **Multi-unit** (ciliary and iris muscle, piloerector, vas deferens, large airways): separate fibres, each with its own nerve ending, **no gap junctions**, finely graded, controlled almost entirely by **nerves**. **Unitary (visceral, syncytial)** (gut, ureter, bladder, uterus, small vessels): fibres electrically joined by **gap junctions** so hundreds contract as **one syncytium**, with **spontaneous activity** and **responsiveness to stretch**.',
    '**No sarcomeres, no striations, no troponin.** Actin filaments anchor onto **dense bodies** — the smooth-muscle equivalent of Z discs — tethered to one another and to the membrane; myosin is **side-polar**, so heads pull along the whole filament length. The lattice can shorten by up to **~80% of its resting length** (skeletal manages only ~30%), which is how a hollow organ can empty completely.',
    '**Regulation sits on the MYOSIN side, not the actin side.** Ca²⁺ binds **calmodulin** (4 Ca²⁺) → **Ca²⁺–calmodulin activates myosin light chain kinase (MLCK)** → phosphorylation of the **regulatory light chain** on the myosin head switches its **ATPase on** → cross-bridges cycle. **Myosin light chain phosphatase (MLCP)** removes the phosphate and relaxation follows. That single swap — **calmodulin and MLCK in place of troponin C** — is the most examined fact in the chapter.',
    '**Everything is slow, and that is the design.** Myosin ATPase activity is **1/10 to 1/300 of skeletal**; latent period ~**50–100 ms**, peak tension at ~**0.5 s**, whole contraction **1–3 s**. Because each cross-bridge stays attached far longer per cycle, smooth muscle develops **equal or greater maximal force (4–6 kg/cm²)** than skeletal muscle (3–4 kg/cm²) despite far fewer myosin filaments.',
    '**The latch mechanism = tonic force at almost no cost.** Once the Ca²⁺ and MLCK burst subsides, cross-bridges stay **attached in a dephosphorylated, extremely slowly cycling state**, holding tension for hours on as little as **1/300 of the ATP** an equivalent skeletal contraction would need. This **economy of energy** is how sphincters, arterioles and the bladder neck stay shut without fatiguing.',
    '**Stress-relaxation lets hollow organs take volume without pressure.** A sudden stretch (filling bladder, a gut bolus) raises wall tension at once, then filaments slip and re-anchor over **seconds to minutes** and tension **falls back toward baseline**; on emptying, reverse stress-relaxation restores tone. This is why intravesical pressure barely moves across a wide range of volumes.',
  ],

  mechanism: {
    title: 'Ca²⁺ → calmodulin → MLCK phosphorylates myosin → slow cycling → latch',
    steps: [
      { id: 's1', label: 'Cytosolic Ca²⁺ rises (mostly entering from extracellular fluid)', emphasis: 'key' },
      { id: 's2', label: 'Four Ca²⁺ bind calmodulin — there is no troponin here', emphasis: 'key' },
      { id: 's3', label: 'Ca²⁺-calmodulin activates myosin light chain kinase (MLCK)', emphasis: 'key' },
      { id: 's4', label: 'MLCK phosphorylates the myosin regulatory light chain → ATPase on', emphasis: 'key' },
      { id: 's5', label: 'Slow attach-detach cycling → large, sustained force' },
      { id: 's6', label: 'Ca²⁺ falls: MLCP dephosphorylates → relax, or latch holds tone', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Gut, ureter and bladder walls contract as a single coordinated sheet', mechanism: 'Unitary smooth muscle is coupled by gap junctions into a syncytium', significance: 'key' },
    { sign: 'Sphincter and arteriolar tone held for hours without fatigue', mechanism: 'Latch state: dephosphorylated cross-bridges stay attached at minimal ATP cost', significance: 'key' },
    { sign: 'Bladder pressure stays low as volume rises; tension decays after a step stretch', mechanism: 'Stress-relaxation — filaments slip and re-anchor at new dense-body attachments', significance: 'key' },
    { sign: 'Contraction begins only after 50 to 100 ms and lasts seconds', mechanism: 'Very low myosin ATPase activity and slow cross-bridge cycling', significance: 'supportive' },
    { sign: 'Force per unit area equals or exceeds skeletal muscle with far fewer myosin filaments', mechanism: 'Each cross-bridge remains attached for a much longer fraction of the cycle', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Ca²⁺-binding protein that replaces troponin in smooth muscle', meaning: 'Calmodulin' },
    { clue: 'Enzyme switched on by the Ca²⁺-calmodulin complex', meaning: 'Myosin light chain kinase (MLCK)' },
    { clue: 'Enzyme whose activity determines the rate of relaxation', meaning: 'Myosin light chain phosphatase (MLCP)' },
    { clue: 'Anchor point for actin filaments in place of the Z disc', meaning: 'Dense body' },
    { clue: 'Sustained tension at roughly one three-hundredth of the usual energy cost', meaning: 'The latch mechanism' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Latch and stress-relaxation are why arterioles can hold blood pressure all day and why the bladder and gut store volume without fatigue. The **MLCK versus MLCP balance** is also the target of most relaxants: **nitric oxide and cGMP** and **beta-2 agonists via cAMP** relax by lowering Ca²⁺ and restraining MLCK, while **Rho-kinase inhibitors** relax by releasing MLCP from inhibition. How the Ca²⁺ signal itself is set: [[ghp-smooth-muscle-regulation]]. Electrical behaviour of the visceral type: [[gi-smooth-muscle-electrical-activity]].' },
    { logic: 'The three muscles in one line', detail: '**Skeletal:** troponin C, SR Ca²⁺ only, fast, neurogenic, no gap junctions ([[ghp-excitation-contraction-coupling-skeletal]]). **Cardiac:** troponin C, Ca²⁺-induced Ca²⁺ release, gap junctions, autorhythmic ([[cardiac-smooth-muscle]]). **Smooth:** **no troponin** — calmodulin and MLCK, mostly extracellular Ca²⁺, latch tone, up to 80% shortening.' },
  ],

  mnemonics: [
    { hook: 'Smooth has no troponin: Calcium Calls CalModulin, which Kicks MLCK', expansion: ['Kinase phosphorylates the myosin light chain and contraction begins', 'Phosphatase (MLCP) takes the phosphate off and it relaxes'] },
    { hook: 'LATCH = Long Attachment, Tiny Cost, Holds tone', expansion: ['Up to 300 times cheaper than the equivalent skeletal contraction', 'Stress-relaxation is the mirror image: stretched, then tension quietly let go'] },
  ],

  traps: [
    {
      questionCategory: 'Which protein Ca²⁺ binds to start contraction',
      wrongInstinct: 'Ca²⁺ binds troponin C and displaces tropomyosin, exactly as in skeletal muscle',
      rightAnswer: 'Smooth muscle has no troponin — Ca²⁺ binds calmodulin, which activates MLCK to phosphorylate the myosin head',
      why: 'Smooth muscle regulation is thick-filament (myosin) based; skeletal and cardiac regulation is thin-filament (actin) based.',
    },
    {
      questionCategory: 'Why tonic smooth muscle does not fatigue',
      wrongInstinct: 'Latch cross-bridges hold tension without consuming any ATP at all',
      rightAnswer: 'Latch is extremely cheap, not free — bridges stay attached and cycle very slowly',
      why: 'ATP is spent per cross-bridge cycle, not per unit of force held, so slowing the cycle cuts the bill about 300-fold.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A vascular smooth muscle cell is exposed to a drug that inhibits myosin light chain kinase. On stimulation, cytosolic Ca²⁺ rises normally but the cell does not shorten. The reason is:',
      options: [
        { id: 'a', text: 'Ca²⁺ can no longer bind troponin C' },
        { id: 'b', text: 'Tropomyosin remains covering the actin binding sites' },
        { id: 'c', text: 'The myosin regulatory light chain is never phosphorylated, so myosin ATPase stays off' },
        { id: 'd', text: 'The sarcoplasmic reticulum cannot release its stored Ca²⁺' },
      ],
      answerId: 'c',
      explanation: 'In smooth muscle the switch is on the myosin head: Ca²⁺-calmodulin activates MLCK, which phosphorylates the regulatory light chain and turns on myosin ATPase. Without that phosphorylation there is no cycling, however high Ca²⁺ climbs. Options a and b describe thin-filament regulation, which belongs to skeletal and cardiac muscle — smooth muscle has no troponin.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An arteriole holds a steady vasoconstriction for several hours. Compared with a skeletal muscle sustaining an equivalent force, its ATP consumption is:',
      options: [
        { id: 'a', text: 'About the same, since a given force costs the same in any muscle' },
        { id: 'b', text: 'Far lower, because latch cross-bridges stay attached and cycle very slowly' },
        { id: 'c', text: 'Far higher, because smooth muscle is an inefficient contractile system' },
        { id: 'd', text: 'Zero, because latch bridges consume no ATP once formed' },
      ],
      answerId: 'b',
      explanation: 'ATP is used per cross-bridge cycle, not per newton of force held. The latch state keeps dephosphorylated bridges attached while cycling extremely slowly, so tone costs as little as one three-hundredth of the energy. It is economical but not free, which rules out the zero-cost option.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A bladder fills slowly from 100 to 400 mL, yet intravesical pressure rises only slightly. The property chiefly responsible is:',
      options: [
        { id: 'a', text: 'Stress-relaxation of unitary smooth muscle' },
        { id: 'b', text: 'The length-tension relationship of the sarcomere' },
        { id: 'c', text: 'Latch bridge formation in the detrusor' },
        { id: 'd', text: 'Parasympathetic inhibition of myosin light chain kinase' },
      ],
      answerId: 'a',
      explanation: 'Stretch first raises wall tension, but smooth muscle filaments then slide and re-anchor around new dense bodies, so tension decays back toward baseline over seconds to minutes and pressure stays low. Latch maintains force rather than dissipating it, smooth muscle has no sarcomeres, and parasympathetic input to the detrusor is excitatory, not inhibitory.',
      tests: 'exam',
    },
  ],
};

export default ghpSmoothMuscleContraction;
