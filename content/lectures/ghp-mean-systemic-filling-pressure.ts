import type { Lecture } from '../../lib/types';

export const ghpMeanSystemicFillingPressure: Lecture = {
  id: 'ghp-mean-systemic-filling-pressure',
  title: 'Mean Systemic Filling Pressure & Resistance to Venous Return',
  system: 'cardiovascular',
  source: 'Ch 20 — Cardiac Output, Venous Return & Their Regulation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 20 Cardiac Output & Venous Return' },
    { kind: 'mechanism', label: 'Stressed volume and venous tone' },
    { kind: 'exam', label: 'Vasoplegia with normal blood volume' },
  ],

  highYield: [
    '**Mean systemic filling pressure (Pms) ≈ 7 mmHg** — the pressure measured everywhere in the systemic circulation once the heart is stopped and flow ceases, so all pressures equalise (the whole-circulation version, **mean circulatory filling pressure**, is also ~7 mmHg). It is **the upstream pressure that drives blood back to the heart**, and it exists purely because the vessels are **elastically stretched by the blood inside them**.',
    '**Only the stressed volume generates it.** Of a ~5 L blood volume, roughly **4 L is unstressed** — it merely fills the vessels without stretching them, and would generate a Pms of zero. The remaining ~**1 L of stressed volume** produces the 7 mmHg. Because **60–70% of blood sits in the systemic veins**, which are far more compliant than arteries, **Pms is a venous variable**: venous tone and total volume set it, arterial pressure does not.',
    '**Two levers move Pms: volume and sympathetic tone.** Transfusion and fluid retention raise it; haemorrhage lowers it. **Maximal sympathetic stimulation raises Pms to ~17 mmHg (~2.5×)** by venoconstricting the reservoir, and **complete sympathetic blockade drops it to ~3.5 mmHg (about half)**. That second number is the whole physiology of **spinal anaesthesia, sepsis and anaphylaxis** — venous return collapses at a **completely normal blood volume**.',
    '**Venous return = (Pms − right atrial pressure) ÷ resistance to venous return.** Flow therefore falls **linearly** as right atrial pressure climbs, and reaches **zero when RAP = Pms = 7 mmHg**. No amount of contractility can push flow above the ceiling this equation sets — the heart can only **lower the downstream pressure** toward it.',
    '**Resistance to venous return (RVR) ≈ 1.4 mmHg per L/min** (7 mmHg ÷ 5 L/min). About **two-thirds of it is venous** and only one-third arteriolar, because a resistance lying **downstream of the huge compliant venous reservoir** has a disproportionate effect on the flow that reservoir can discharge. **Arteriolar dilation steepens the venous return curve** — same x-intercept, more flow at every RAP — which is exactly how exercise, an AV fistula and thyrotoxicosis raise cardiac output.',
    '**The curve plateaus below about −4 mmHg** because the great veins **collapse where they enter the thorax**. A negative right atrial pressure cannot suck extra blood in past a collapsed vein — a hard ceiling on what a vigorous heart alone can achieve, and the reason **filling, not pumping, limits output in hypovolaemia**.',
  ],

  mechanism: {
    title: 'The pressure that pushes blood back, and the resistance it must cross',
    steps: [
      { id: 's1', label: 'Blood volume exceeds unstressed capacity, so vessel walls are stretched' },
      { id: 's2', label: 'That stretch generates Pms ~7 mmHg, almost all of it in the compliant veins', emphasis: 'key' },
      { id: 's3', label: 'The heart lowers right atrial pressure toward 0, opening the gradient Pms − RAP' },
      { id: 's4', label: 'Venous return = (Pms − RAP) ÷ RVR, with RVR ~1.4 mmHg per L/min', emphasis: 'key' },
      { id: 's5', label: 'Flow reaches zero when RAP climbs to 7 mmHg; it plateaus below −4 mmHg as veins collapse' },
      { id: 's6', label: 'Lose venous tone (spinal block, sepsis, anaphylaxis) and Pms halves at normal volume', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Right atrial pressure that has risen to 7 mmHg with no forward flow', mechanism: 'RAP now equals Pms, so the driving gradient for venous return is zero', significance: 'key' },
    { sign: 'The venous return curve flattens below about −4 mmHg', mechanism: 'The great veins collapse where they enter the chest and limit further inflow', significance: 'key' },
    { sign: 'Hypotension with warm, dilated peripheries after spinal anaesthesia', mechanism: 'Sympathetic blockade halves Pms, so venous return falls despite a normal blood volume', significance: 'key' },
    { sign: 'Neck veins fill and cardiac output rises after rapid transfusion', mechanism: 'Added stressed volume raises Pms and shifts the venous return curve to the right', significance: 'key' },
    { sign: 'Nitrate infusion lowers filling pressures and relieves pulmonary congestion', mechanism: 'Venodilation converts stressed to unstressed volume, lowering Pms and preload', significance: 'supportive' },
    { sign: 'Blood pressure maintained after moderate haemorrhage', mechanism: 'Reflex venoconstriction defends Pms by recruiting the venous reservoir', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The pressure reached throughout the vessels seconds after circulatory arrest', meaning: 'Mean circulatory filling pressure (~7 mmHg); the systemic-only value is mean systemic filling pressure' },
    { clue: 'The x-intercept of the venous return curve', meaning: 'Pms — the driving pressure for venous return' },
    { clue: 'The slope of the venous return curve', meaning: 'The inverse of resistance to venous return (~1.4 mmHg per L/min)' },
    { clue: 'A parallel rightward shift of the venous return curve', meaning: 'Increased volume or venoconstriction — a raised Pms' },
    { clue: 'A steeper curve with an unchanged x-intercept', meaning: 'Reduced resistance to venous return from arteriolar dilation, with Pms unchanged' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'It separates the two ways to restore venous return: give volume (raise Pms by adding stressed volume) or give a vasoconstrictor (raise Pms by converting unstressed to stressed volume). In vasoplegic shock the tank is full but slack, so a pressor is treating the actual defect. The intersection this feeds: [[ghp-cardiac-output-venous-return-curves]]; the reservoir itself: [[ghp-venous-pressure-blood-reservoir]]; applied to resuscitation: [[ghp-shock-treatment-physiology]].' },
    { logic: 'Where the tone comes from', detail: 'Pms is defended moment to moment by sympathetic venoconstriction, so a lesion anywhere in that pathway drops it. Central control: [[ghp-vasomotor-centre-sympathetic-control]]; how compliance parcels the blood volume between arteries and veins: [[ghp-vascular-compliance-volume-distribution]]; the pump that then converts filling into output: [[ghp-frank-starling-mechanism]].' },
  ],

  mnemonics: [
    { hook: 'Tank, drain, pipe', expansion: ['Pms is the tank pressure (~7 mmHg)', 'Right atrial pressure is the drain height', 'Resistance to venous return is the pipe (~1.4 mmHg per L/min)'] },
    { hook: 'Seven drives, seven stops', expansion: ['Pms of 7 mmHg drives venous return', 'Flow is zero when right atrial pressure reaches 7 mmHg', 'Everything in between is the gradient'] },
    { hook: 'Stressed volume is the only volume that counts', expansion: ['~4 L fills without stretching (unstressed)', '~1 L stretches (stressed) and makes the pressure', 'Venoconstriction converts one into the other with no fluid given'] },
  ],

  traps: [
    {
      questionCategory: 'Source of the driving pressure for venous return',
      wrongInstinct: 'The heart sucks blood back, or arterial pressure pushes it back through the capillaries',
      rightAnswer: 'Elastic recoil of the filled systemic vessels — mostly veins — generates Pms, and the heart only lowers the downstream pressure',
      why: 'Stop the heart and pressure everywhere settles at about 7 mmHg; that residual pressure is the entire source.',
    },
    {
      questionCategory: 'Normal volume with failing return',
      wrongInstinct: 'Venous return can only fall if blood volume has fallen',
      rightAnswer: 'Losing venous tone halves Pms at unchanged volume — spinal anaesthesia, sepsis and anaphylaxis all do this',
      why: 'Pms depends on STRESSED volume, and tone redistributes stressed to unstressed without losing a millilitre.',
    },
    {
      questionCategory: 'Which part of the circuit dominates resistance to venous return',
      wrongInstinct: 'Resistance to venous return is mainly arteriolar, since arterioles are the resistance vessels',
      rightAnswer: 'About two-thirds of it is venous, because resistance downstream of the compliant venous reservoir has an outsized effect on discharge',
      why: 'Arteriolar resistance dominates total peripheral resistance; venous resistance dominates resistance to venous return. Different questions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In an experiment the heart is fibrillated and pressures throughout the systemic circulation equalise within seconds. The value recorded is best called:',
      options: [
        { id: 'a', text: 'Central venous pressure' },
        { id: 'b', text: 'Mean systemic filling pressure, about 7 mmHg' },
        { id: 'c', text: 'Mean arterial pressure, about 100 mmHg' },
        { id: 'd', text: 'Resistance to venous return, about 1.4 mmHg per L/min' },
      ],
      answerId: 'b',
      explanation: 'With no flow there is no pressure gradient, so the pressure everywhere reflects only the degree to which the vessels are stretched by their contents — mean systemic filling pressure, ~7 mmHg in normovolaemia. It sits near the venous end of the range because the veins hold most of the blood and dominate total compliance.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Twenty minutes after a high spinal block, a euvolaemic patient becomes hypotensive with warm peripheries. The dominant haemodynamic defect is:',
      options: [
        { id: 'a', text: 'A fall in mean systemic filling pressure from loss of venous tone' },
        { id: 'b', text: 'An acute fall in myocardial contractility' },
        { id: 'c', text: 'A rise in resistance to venous return' },
        { id: 'd', text: 'A fall in circulating blood volume' },
      ],
      answerId: 'a',
      explanation: 'Sympathetic blockade relaxes the venous reservoir, converting stressed to unstressed volume; Pms can halve toward ~3.5 mmHg, so the gradient driving venous return collapses even though blood volume is unchanged (d is wrong). This is why a vasoconstrictor, which re-stresses the existing volume, treats the actual lesion.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A vasodilator lowers arteriolar resistance without changing blood volume or venous tone. The venous return curve will:',
      options: [
        { id: 'a', text: 'Shift to the right with an unchanged slope' },
        { id: 'b', text: 'Become steeper with an unchanged x-intercept' },
        { id: 'c', text: 'Become flatter with an unchanged x-intercept' },
        { id: 'd', text: 'Shift to the left with an unchanged slope' },
      ],
      answerId: 'b',
      explanation: 'The x-intercept is Pms, which depends on volume and venous tone — neither has changed, so it stays at ~7 mmHg. The slope is the inverse of resistance to venous return, so lowering resistance steepens the curve and gives more flow at every right atrial pressure. Parallel shifts (a, d) require a change in Pms itself.',
      tests: 'investigation',
    },
  ],
};

export default ghpMeanSystemicFillingPressure;
