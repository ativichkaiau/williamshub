import type { Lecture } from '../../lib/types';

export const ghpExerciseMuscleBloodFlow: Lecture = {
  id: 'ghp-exercise-muscle-blood-flow',
  title: 'Muscle Blood Flow in Exercise',
  system: 'cardiovascular',
  source: 'Ch 21 — Muscle & Coronary Blood Flow; Ischemic Heart Disease',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 21 Muscle & Coronary Blood Flow' },
    { kind: 'mechanism', label: 'Exercise hyperaemia and redistribution' },
    { kind: 'exam', label: 'Functional sympatholysis' },
  ],

  highYield: [
    '**Muscle flow rises up to ~20-fold: from 3–4 mL/min per 100 g at rest to 50–80 mL/min per 100 g at maximum.** In whole-body terms total muscle flow climbs from about **1 L/min to ~20 L/min**, which is the bulk of a trained adult cardiac output of **~25 L/min** (up to 30–35 L/min in elite endurance athletes). Since skeletal muscle is **35–40% of body mass**, muscle is what dominates the sum-of-local-flows that sets cardiac output.',
    '**Local metabolites open the muscle, not nerves.** The vasodilator signal is a mixture: **falling tissue PO₂** (the single most important), **adenosine**, **K⁺ released with every action potential**, **ATP**, **CO₂, H⁺ and lactate**, plus **nitric oxide** from flow-induced shear. A **denervated or sympathectomised limb still hyperaemises normally and in exact proportion to work rate** — the nerves modulate, the metabolites command.',
    '**Capillary recruitment multiplies the exchange surface.** Only about **25% of muscle capillaries are open at rest**; in exercise nearly all open, giving **2–3× the surface area and roughly halving diffusion distance**. This is essential because transit time falls as flow rises, and the widened **arteriovenous O₂ difference (from ~40 up to ~150 mL/L)** contributes as much to oxygen delivery as the flow increase itself.',
    '**Flow within a contracting muscle is intermittent, not steady.** Contraction compresses the muscle vasculature, so **a strong tetanic or isometric contraction above roughly 50–60% of maximal force can arrest its own blood flow**. Rhythmic exercise gives peak flow **between** contractions; sustained isometric work fatigues quickly despite generating a large pressor response.',
    '**The muscle pump is a real haemodynamic device.** Rhythmic contraction squeezes the deep veins, and **one-way venous valves** make the displaced blood move only toward the heart, raising venous return and preload; sympathetic **venoconstriction of the splanchnic reservoir** adds to it. Together they supply the filling that **Frank–Starling** converts into a bigger stroke volume — vasodilation alone would drop pressure without them.',
    '**Mass sympathetic discharge redistributes everything else.** Central command plus group III/IV muscle afferents drive **vasoconstriction of splanchnic, renal and inactive-muscle beds (flow can fall to a quarter of resting)**, raise heart rate and contractility, and lift mean arterial pressure by ~**20–40%**. The active muscle is spared because local metabolites blunt alpha-mediated constriction — **functional sympatholysis**. Net result: **TPR falls, output quadruples, and pressure rises only modestly.**',
  ],

  mechanism: {
    title: 'Metabolites open the working muscle while nerves close everything else',
    steps: [
      { id: 's1', label: 'Central command and group III/IV muscle afferents fire at exercise onset' },
      { id: 's2', label: 'Mass sympathetic discharge: faster rate, more force, venoconstriction, splanchnic and renal constriction', emphasis: 'key' },
      { id: 's3', label: 'In active muscle, low PO₂, adenosine, K⁺, ATP and H⁺ dilate the arterioles', emphasis: 'key' },
      { id: 's4', label: 'Functional sympatholysis: those metabolites override alpha-constriction locally only' },
      { id: 's5', label: 'Capillaries recruit from ~25% open to nearly all — 2 to 3 times the exchange surface' },
      { id: 's6', label: 'Muscle pump plus venoconstriction raise venous return; Frank–Starling turns it into ~25 L/min', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Muscle blood flow rises up to twentyfold within seconds of starting work', mechanism: 'Local metabolic vasodilation, which needs no neural or hormonal signal', significance: 'key' },
    { sign: 'Flow within the muscle pulses, falling during each contraction and peaking between them', mechanism: 'The contracting muscle compresses its own vessels', significance: 'key' },
    { sign: 'A sympathectomised limb shows normal exercise hyperaemia', mechanism: 'The response is intrinsic and metabolic, not neurogenic', significance: 'key' },
    { sign: 'Mean arterial pressure rises only 20–40% despite a fourfold to fivefold rise in cardiac output', mechanism: 'Massive muscle vasodilation lowers total peripheral resistance, offsetting the output rise', significance: 'key' },
    { sign: 'Blood pressure climbs steeply during sustained isometric handgrip', mechanism: 'Compressed vessels sustain ischaemic afferent signalling with little compensating fall in resistance', significance: 'supportive' },
    { sign: 'Reduced urine output and splanchnic flow during maximal exercise', mechanism: 'Sympathetic redistribution away from renal and gut beds toward working muscle', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Muscle flow of 3–4 mL/min per 100 g', meaning: 'Resting value; the maximal exercise value is 50–80 mL/min per 100 g' },
    { clue: 'Arteriovenous oxygen difference widening from ~40 to ~150 mL/L', meaning: 'Increased extraction — the second term of the Fick equation during exercise' },
    { clue: 'Loss of alpha-constrictor responsiveness confined to the contracting limb', meaning: 'Functional sympatholysis' },
    { clue: 'Venous return rising with rhythmic leg work but not with static contraction', meaning: 'The skeletal muscle pump requires alternating compression and relaxation' },
    { clue: 'A plateau in oxygen uptake despite rising work rate', meaning: 'Maximal oxygen consumption reached — limited by cardiac output, not by muscle vasodilator capacity' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Exercise is the cleanest demonstration that cardiac output is the sum of local tissue flows: dilate 20 kg of muscle and output must follow, or pressure collapses. The curve version of that claim: [[ghp-cardiac-output-venous-return-curves]]; the metabolic control rules behind the dilation: [[ghp-local-blood-flow-autoregulation]]; the venous reservoir the pump empties: [[ghp-venous-pressure-blood-reservoir]].' },
    { logic: 'Where it fails', detail: 'Exercise is a stress test of every link in the chain — a fixed arterial stenosis produces claudication when metabolic vasodilation cannot compensate, and a failing heart cannot raise output to match the vasodilated bed. Cardiac reserve in detail: [[ghp-cardiac-reserve]]; the same supply-demand failure in the myocardium: [[ghp-coronary-circulation-ischaemia]]; the muscle energetics behind the demand: [[ghp-muscle-energetics-fibre-types]].' },
  ],

  mnemonics: [
    { hook: 'PACK-H opens the muscle', expansion: ['low PO₂', 'Adenosine', 'CO₂ (with H⁺ and lactate)', 'K⁺ from every action potential', 'Heat and shear-driven nitric oxide alongside them'] },
    { hook: 'The muscle opens itself, the brain closes the gut', expansion: ['Local metabolites dilate the active bed', 'Mass sympathetic discharge constricts splanchnic, renal and idle muscle', 'Functional sympatholysis keeps the two from colliding'] },
    { hook: 'Squeeze, valve, return', expansion: ['Rhythmic contraction squeezes deep veins', 'One-way valves make the flow unidirectional', 'Preload rises and Frank–Starling converts it to stroke volume'] },
  ],

  traps: [
    {
      questionCategory: 'Which signal opens the muscle vessels',
      wrongInstinct: 'Sympathetic cholinergic vasodilator fibres open muscle arterioles during exercise',
      rightAnswer: 'Local metabolites do; the sympathetic vasodilator system is anticipatory at best and of little importance in humans',
      why: 'The hyperaemia survives denervation intact and is graded precisely to work rate, which no anticipatory neural signal could achieve.',
    },
    {
      questionCategory: 'Isometric versus rhythmic work',
      wrongInstinct: 'A harder contraction always delivers more blood flow to the muscle',
      rightAnswer: 'Above roughly 50–60% of maximal force the muscle occludes its own vessels and flow falls',
      why: 'Rhythmic work lets flow surge between contractions; static work does not, which is why isometric exercise fatigues fast and raises blood pressure steeply.',
    },
    {
      questionCategory: 'Pressure during exercise',
      wrongInstinct: 'Massive vasodilation in exercising muscle should cause hypotension',
      rightAnswer: 'Mean pressure actually rises 20–40%, because output quadruples and the sympathetic system constricts every non-working bed while venoconstriction and the muscle pump supply the filling',
      why: 'Pressure equals output times resistance; output rises proportionately more than resistance falls.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A surgically denervated hindlimb is stimulated to contract rhythmically. Blood flow to the limb increases roughly fifteenfold. This is best explained by:',
      options: [
        { id: 'a', text: 'Circulating adrenaline acting on beta-2 receptors' },
        { id: 'b', text: 'Local metabolic vasodilation from falling PO₂, adenosine and potassium release' },
        { id: 'c', text: 'Sympathetic cholinergic vasodilator fibres' },
        { id: 'd', text: 'The baroreceptor reflex withdrawing vasoconstrictor tone' },
      ],
      answerId: 'b',
      explanation: 'Exercise hyperaemia is intrinsic: the working fibres generate their own vasodilator signal, so the response is undiminished after denervation. Options c and d require intact nerves, and circulating catecholamines cannot account for a response confined to and graded by the contracting muscle.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'During maximal exercise, sympathetic discharge is intense, yet the arterioles of the working muscle remain dilated. The term for this is:',
      options: [
        { id: 'a', text: 'Reactive hyperaemia' },
        { id: 'b', text: 'Autoregulatory escape from the baroreflex' },
        { id: 'c', text: 'Functional sympatholysis' },
        { id: 'd', text: 'The Bainbridge reflex' },
      ],
      answerId: 'c',
      explanation: 'Locally accumulated metabolites blunt alpha-adrenergic constriction within the active bed, so the same sympathetic outflow constricts splanchnic, renal and inactive muscle vessels while sparing the working ones. Reactive hyperaemia (a) is the flow overshoot after an occlusion, and the Bainbridge reflex (d) is an atrial stretch response that raises heart rate.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Compared with rhythmic cycling at the same average force, sustained isometric contraction of the quadriceps produces:',
      options: [
        { id: 'a', text: 'Greater muscle blood flow and a smaller rise in blood pressure' },
        { id: 'b', text: 'Reduced muscle blood flow and a greater rise in blood pressure' },
        { id: 'c', text: 'Greater venous return through the skeletal muscle pump' },
        { id: 'd', text: 'The same blood flow, since metabolic demand determines flow regardless of contraction pattern' },
      ],
      answerId: 'b',
      explanation: 'Sustained contraction above roughly half of maximal force mechanically compresses the muscle vasculature, so flow falls despite maximal metabolic vasodilator signalling, and the persistent ischaemic afferent drive produces a steep pressor response. The muscle pump (c) needs alternating contraction and relaxation, so static work does not recruit it.',
      tests: 'exam',
    },
  ],
};

export default ghpExerciseMuscleBloodFlow;
