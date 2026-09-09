import type { Lecture } from '../../lib/types';

export const ghpHumoralEndothelialControl: Lecture = {
  id: 'ghp-humoral-endothelial-control',
  title: 'Humoral & Endothelial Control of the Circulation',
  system: 'cardiovascular',
  source: 'Ch 17 — Local & Humoral Control of Blood Flow by the Tissues',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 17 Local & Humoral Control' },
    { kind: 'mechanism', label: 'Circulating vasoactive agents' },
    { kind: 'exam', label: 'Constrictors vs dilators' },
  ],

  highYield: [
    '**Humoral control is what the blood carries to the vessels, as opposed to what the nerves or the tissue itself supply.** The constrictors that matter are **noradrenaline and adrenaline**, **angiotensin II**, **vasopressin (ADH)** and **endothelin**; the dilators are **bradykinin**, **histamine**, **nitric oxide** and the vasodilator **prostaglandins**. Their relative potency and their site of action are the examinable points.',
    '**Adrenaline is the one with a split personality, and receptor distribution explains it.** Noradrenaline is a near-pure **α-agonist → constriction everywhere**. Adrenaline constricts via **α** but also stimulates **β₂** receptors, which are abundant in **skeletal muscle and coronary** vessels — so at low concentrations it can **dilate** those beds while constricting skin and splanchnic vessels. One hormone, opposite effects, decided by which receptor the bed expresses.',
    '**Angiotensin II is the most powerful constrictor per unit mass, and it acts on arterioles.** It constricts **arterioles** far more than veins, so it raises **total peripheral resistance** and hence arterial pressure. Its role in long-term pressure control is inseparable from the kidney — see [[ghp-renin-angiotensin-hypertension]].',
    '**Vasopressin is the most potent constrictor of all, but its everyday job is water, not pressure.** Circulating concentrations in normal life are too low to affect vessels much; its vasoconstrictor role becomes significant only in **severe haemorrhage**, where it helps defend pressure alongside the reflexes of [[ghp-baroreceptor-chemoreceptor-reflexes]].',
    '**Nitric oxide is the endothelium’s own dilator and the basis of flow-mediated dilation.** Shear stress on endothelium releases **NO**, which diffuses to smooth muscle, raises **cGMP** and relaxes it. Nitrates work by donating NO; sildenafil works by blocking its breakdown pathway. Endothelin is its opposite number — released by damaged endothelium and an extremely powerful constrictor, which helps limit bleeding from a torn vessel.',
    '**Ions matter too, and the directions are worth memorising cleanly.** Raised **Ca²⁺** constricts (it drives smooth-muscle contraction). Raised **K⁺**, **Mg²⁺**, **H⁺** and **CO₂**, and raised acetate or citrate, all **dilate**. This is why local metabolic acidosis and hyperkalaemia in working tissue reinforce the vasodilation described in [[ghp-local-blood-flow-autoregulation]].',
  ],

  mechanism: {
    title: 'One vessel, several competing chemical signals',
    steps: [
      { id: 's1', label: 'Circulating agents reach vascular smooth muscle via the blood', emphasis: 'key' },
      { id: 's2', label: 'α-receptors → constriction; β₂-receptors → dilation in muscle and coronary beds', emphasis: 'key' },
      { id: 's3', label: 'Angiotensin II constricts arterioles → total peripheral resistance rises' },
      { id: 's4', label: 'Endothelial shear stress releases NO → cGMP rises → relaxation', emphasis: 'key' },
      { id: 's5', label: 'Damaged endothelium releases endothelin → intense local constriction' },
      { id: 's6', label: 'Net tone is the algebraic sum of constrictor and dilator signals at that bed' },
    ],
  },

  examFindings: [
    { sign: 'Adrenaline raises systolic pressure while diastolic may fall', mechanism: 'β₂-mediated dilation in muscle offsets α-mediated constriction elsewhere', significance: 'key' },
    { sign: 'Noradrenaline raises both systolic and diastolic pressure', mechanism: 'Predominantly α-mediated constriction across all beds', significance: 'key' },
    { sign: 'Flushing, weal and hypotension in anaphylaxis', mechanism: 'Massive histamine release dilates arterioles and leaks capillaries', significance: 'key' },
    { sign: 'Brisk dilation of an artery after a period of increased flow', mechanism: 'Shear-stress-induced endothelial nitric oxide release', significance: 'supportive' },
    { sign: 'Marked vasoconstriction at the site of vessel injury', mechanism: 'Endothelin released from damaged endothelium', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pressor response preserved to noradrenaline but blunted to a β-agonist', meaning: 'Intact α-mediated constriction with impaired β₂ dilation' },
    { clue: 'Raised plasma renin and angiotensin II with hypertension', meaning: 'Humoral constrictor drive contributing to raised resistance' },
    { clue: 'Impaired flow-mediated dilation on brachial ultrasound', meaning: 'Endothelial dysfunction with reduced nitric oxide availability' },
    { clue: 'Serum tryptase raised after a hypotensive collapse', meaning: 'Mast-cell degranulation with histamine-mediated vasodilation' },
    { clue: 'Hyperkalaemia with peripheral vasodilation', meaning: 'Raised extracellular K⁺ relaxing vascular smooth muscle' },
  ],

  treatment: [
    {
      logic: 'Choose the vasoactive drug by the receptor the bed expresses',
      detail: 'A pure **α-agonist** raises pressure by constricting everywhere; **adrenaline** additionally recruits **β₂** dilation in muscle and coronary beds, which is why it is preferred where cardiac output and coronary flow also need support — the reasoning developed in [[ghp-shock-treatment-physiology]].',
    },
    {
      logic: 'Exploit the nitric oxide pathway when the aim is dilation',
      detail: 'Nitrates act as **NO donors**, raising **cGMP** in smooth muscle. Because the same second messenger is degraded by phosphodiesterase, combining a nitrate with a PDE inhibitor produces **profound, additive hypotension** — a mechanistic contraindication rather than an arbitrary one.',
    },
  ],

  mnemonics: [
    { hook: 'NAVE constricts: Noradrenaline, Angiotensin II, Vasopressin, Endothelin', expansion: ['All raise resistance', 'Vasopressin most potent but usually least relevant', 'Angiotensin II acts chiefly on arterioles'] },
    { hook: 'Calcium constricts, the rest dilate', expansion: ['↑Ca²⁺ → contraction', '↑K⁺, ↑Mg²⁺, ↑H⁺, ↑CO₂ → relaxation'] },
  ],

  traps: [
    {
      questionCategory: 'Why adrenaline and noradrenaline differ',
      wrongInstinct: 'Both are catecholamines so both constrict every vascular bed',
      rightAnswer: 'Adrenaline also stimulates β₂ receptors, dilating skeletal muscle and coronary vessels',
      why: 'The effect is decided by which receptor the bed expresses, not by the hormone alone',
    },
    {
      questionCategory: 'The role of vasopressin',
      wrongInstinct: 'Because it is the most potent vasoconstrictor known, it is the main day-to-day pressure regulator',
      rightAnswer: 'Its normal circulating level is too low to matter; it contributes mainly in severe haemorrhage',
      why: 'Potency in a bioassay is not the same as physiological relevance at real concentrations',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Infusing adrenaline dilates skeletal muscle arterioles while constricting cutaneous vessels. What best explains this?',
      options: [
        { id: 'a', text: 'Adrenaline is metabolised differently in the two beds' },
        { id: 'b', text: 'Skeletal muscle vessels express β₂ receptors whereas skin is dominated by α receptors' },
        { id: 'c', text: 'Muscle arterioles lack vascular smooth muscle' },
        { id: 'd', text: 'Local metabolites are absent in skin' },
      ],
      answerId: 'b',
      explanation: 'Adrenaline stimulates both α and β₂ receptors. Beds rich in β₂ — skeletal muscle and coronary — dilate, while α-dominant beds such as skin and splanchnic circulation constrict.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which circulating agent is the most potent vasoconstrictor, yet contributes little to normal moment-to-moment blood pressure control?',
      options: [
        { id: 'a', text: 'Angiotensin II' },
        { id: 'b', text: 'Noradrenaline' },
        { id: 'c', text: 'Vasopressin' },
        { id: 'd', text: 'Endothelin' },
      ],
      answerId: 'c',
      explanation: 'Vasopressin is the most powerful constrictor on a molar basis, but normal circulating concentrations are too low to influence vascular tone appreciably; it matters mainly during severe haemorrhage.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Increased blood flow through an artery causes it to dilate. Which mechanism is responsible?',
      options: [
        { id: 'a', text: 'Shear stress on endothelium releasing nitric oxide' },
        { id: 'b', text: 'Endothelin release from damaged endothelium' },
        { id: 'c', text: 'Myogenic stretch-activated calcium entry' },
        { id: 'd', text: 'Circulating angiotensin II' },
      ],
      answerId: 'a',
      explanation: 'Flow-mediated dilation: shear stress stimulates endothelial nitric oxide release, which raises cGMP in the underlying smooth muscle and relaxes it. Myogenic stretch would produce constriction, not dilation.',
      tests: 'mechanism',
    },
  ],
};

export default ghpHumoralEndothelialControl;
