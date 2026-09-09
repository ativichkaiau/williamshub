import type { Lecture } from '../../lib/types';

export const ghpVascularComplianceVolumeDistribution: Lecture = {
  id: 'ghp-vascular-compliance-volume-distribution',
  title: 'Vascular Compliance and the Distribution of Blood Volume',
  system: 'cardiovascular',
  source: 'Ch 14 — Overview of the Circulation; Pressure, Flow & Resistance',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 14 Overview of the Circulation' },
    { kind: 'mechanism', label: 'Compliance and capacitance' },
    { kind: 'exam', label: 'Where the blood actually sits' },
  ],

  highYield: [
    '**Learn the split: ~84% of blood volume is in the systemic circulation, ~16% in the heart and lungs** (heart ~**7%**, lungs ~**9%**). Of the systemic 84%, the **veins, venules and venous sinuses hold ~64% of the entire blood volume**, the **arteries ~13%**, and **arterioles plus capillaries only ~7%** (capillaries alone ~**5%**, roughly **250 mL**). The pressure lives in the arteries; the **volume lives in the veins**.',
    '**Compliance (capacitance) = ΔV / ΔP — how much volume a vessel accepts per mmHg.** **Systemic venous compliance is ~24× that of the corresponding arteries.** The 24 is a product of two separate facts: veins are ~**8× more distensible** (thin walls, little elastin and smooth muscle) **and** hold ~**3× the volume** — and **compliance = distensibility × volume**. Distensibility is the fractional version, **ΔV / (V × ΔP)**, which strips out size; compliance keeps it in.',
    '**That compliance is why the veins are a reservoir rather than a pressure vessel.** A **500 mL transfusion** poured into a system with venous compliance measured in tens of millilitres per mmHg raises venous pressure only a few mmHg, while the same volume forced into the arterial tree would be catastrophic. Conversely, losing **~10% of blood volume** changes arterial pressure very little — the reservoir simply gives it back.',
    '**Delayed compliance (stress-relaxation) buys hours on top of that.** Sustained stretch makes vascular smooth muscle **creep**, so pressure that rises acutely after volume loading **drifts back down over minutes to hours** and the circulation absorbs an extra ~**0.5–1 L**. **Reverse stress-relaxation** does the opposite after haemorrhage: the vessels slowly tighten around the smaller volume, propping pressure up.',
    '**Sympathetic tone moves the whole volume–pressure curve, and it is the venous limb that matters.** Sympathetic stimulation of venous smooth muscle **reduces compliance**, so the same volume now generates a **higher pressure** — an internal autotransfusion that shifts blood from the reservoir toward the heart. Sympathetic inhibition (or a venodilator such as a **nitrate**) does the reverse and pools blood peripherally, dropping preload. Compare the pulmonary side, whose arteries are ~**7× more compliant** than systemic arteries — a low-pressure buffer for the right ventricle.',
    '**Cross-sectional area explains the other half of the story: velocity.** Aorta ~**2.5 cm²**, arterioles ~**40 cm²**, capillaries ~**2500 cm²**, venae cavae ~**8 cm²**. Since **velocity = flow ÷ total cross-sectional area**, blood moves at ~**33 cm/s** in the aorta but only ~**0.3 mm/s** in capillaries — a **1000-fold** slowdown that gives a **1–3 second transit time**, exactly what diffusion needs. Veins also have ~**4× the cross-section** of their paired arteries, which is why they can hold so much at low pressure.',
  ],

  mechanism: {
    title: 'The veins are a tank, the arteries are a pressure hose',
    steps: [
      { id: 's1', label: '~5 L total: ~84% systemic, ~16% in heart and lungs' },
      { id: 's2', label: 'Within the systemic side, ~64% of all blood sits in veins and venules', emphasis: 'key' },
      { id: 's3', label: 'Venous compliance (ΔV/ΔP) is ~24× arterial = 8× more distensible × 3× the volume', emphasis: 'key' },
      { id: 's4', label: 'So large volume shifts barely move venous pressure' },
      { id: 's5', label: 'Delayed compliance absorbs still more over minutes to hours' },
      { id: 's6', label: 'Sympathetic venoconstriction stiffens the tank → same volume, higher pressure, blood back to the heart', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Capillary blood velocity about one-thousandth of aortic velocity', mechanism: 'Total capillary cross-sectional area (~2500 cm²) dwarfs the aorta (~2.5 cm²)', significance: 'key' },
    { sign: 'A 500 mL transfusion raises venous pressure by only a few mmHg', mechanism: 'Very high venous compliance absorbs volume with little pressure change', significance: 'key' },
    { sign: 'Arterial pressure well maintained after a 10% haemorrhage', mechanism: 'The venous reservoir plus venoconstriction return volume to the heart', significance: 'key' },
    { sign: 'Sublingual nitrate causes postural symptoms and a fall in preload', mechanism: 'Venodilation raises venous capacitance and pools blood peripherally', significance: 'supportive' },
    { sign: 'Pressure drifts back down in the hours after rapid volume loading', mechanism: 'Delayed compliance — stress-relaxation of vascular smooth muscle', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'About 64% of total blood volume', meaning: 'The systemic veins and venules — the capacitance reservoir' },
    { clue: 'ΔV divided by ΔP', meaning: 'Compliance, also called capacitance' },
    { clue: 'ΔV divided by V times ΔP', meaning: 'Distensibility — the size-independent, fractional version' },
    { clue: 'Venous compliance about 24 times the arterial value', meaning: '8 times more distensible multiplied by 3 times the volume' },
    { clue: 'Pressure falling gradually for hours after volume loading', meaning: 'Delayed compliance (stress-relaxation) of venous smooth muscle' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Knowing that two-thirds of the blood is parked in a highly compliant venous reservoir reframes every volume problem: filling pressures reflect the tone of that reservoir as much as the amount of fluid in it, and mobilising it is faster than any transfusion. The venous limb in detail is [[ghp-venous-pressure-blood-reservoir]], and the pressure it generates when the heart stops is [[ghp-mean-systemic-filling-pressure]].' },
    { logic: 'Bedside payoff', detail: 'It explains nitrate-induced preload reduction, why venoconstriction defends pressure early in haemorrhage before any arterial change is visible, and why arterial compliance — small to begin with — is what sets the pulse. Flow and resistance in the same circuit: [[ghp-hemodynamics-pressure-flow-resistance]]; what falling arterial compliance does to the pulse: [[ghp-arterial-pulse-pressure]]; the reservoir under stress: [[ghp-shock-stages-haemorrhagic]].' },
  ],

  mnemonics: [
    { hook: '84 / 16, and 64 in the veins', expansion: ['84% systemic, 16% heart plus lungs', '64% of the whole body total is venous', 'Arteries 13%, capillaries only about 5%'] },
    { hook: '8 times stretchier × 3 times bigger = 24 times more compliant', expansion: ['8 = distensibility ratio (wall property)', '3 = volume ratio (size)', 'Compliance = distensibility × volume'] },
  ],

  traps: [
    {
      questionCategory: 'Compliance versus distensibility',
      wrongInstinct: 'Veins are 24 times more distensible than arteries',
      rightAnswer: 'Veins are about 8 times more distensible; the 24-fold figure is compliance, which also carries the 3-fold larger volume',
      why: 'Distensibility is fractional (per unit volume); compliance is absolute — compliance equals distensibility times volume.',
    },
    {
      questionCategory: 'Where the blood actually is',
      wrongInstinct: 'Most blood must be arterial, because that is where the pressure and the flow are highest',
      rightAnswer: 'About 64% is venous and only about 13% arterial — high pressure goes with low stored volume',
      why: 'Pressure reflects the compliance of the compartment, not the amount of blood sitting in it.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a healthy resting adult, approximately what fraction of the total blood volume is contained in the systemic veins, venules and venous sinuses?',
      options: [
        { id: 'a', text: 'About 13%' },
        { id: 'b', text: 'About 30%' },
        { id: 'c', text: 'About 64%' },
        { id: 'd', text: 'About 84%' },
      ],
      answerId: 'c',
      explanation: 'Roughly 64% of total blood volume is venous. 13% is the arterial share, and 84% is the whole systemic circulation (the remaining 16% being heart and lungs). Only about 5% is in capillaries at any moment.',
      tests: 'system',
    },
    {
      id: 'q2',
      stem: 'Systemic veins have roughly 24 times the compliance of the corresponding arteries. This figure is best explained by:',
      options: [
        { id: 'a', text: 'Veins being 24 times more distensible than arteries' },
        { id: 'b', text: 'Veins being about 8 times more distensible and holding about 3 times the volume' },
        { id: 'c', text: 'Veins carrying blood at 24 times lower velocity' },
        { id: 'd', text: 'Venous valves preventing any rise in pressure' },
      ],
      answerId: 'b',
      explanation: 'Compliance equals distensibility multiplied by volume, so 8 times the distensibility and 3 times the volume gives roughly 24. Option a confuses the two terms; velocity (c) is a cross-sectional-area effect and has nothing to do with compliance, and valves (d) direct flow rather than set capacitance.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient rapidly receives 800 mL of blood. Venous pressure rises immediately, then falls substantially over the next hour despite no volume being lost. The best explanation is:',
      options: [
        { id: 'a', text: 'Delayed compliance (stress-relaxation) of vascular smooth muscle' },
        { id: 'b', text: 'Reverse stress-relaxation' },
        { id: 'c', text: 'Increased sympathetic venoconstriction' },
        { id: 'd', text: 'A shift of blood into the arterial compartment' },
      ],
      answerId: 'a',
      explanation: 'Sustained stretch makes venous smooth muscle creep, so the vessel accommodates the extra volume at a lower pressure over minutes to hours — delayed compliance. Reverse stress-relaxation (b) is the opposite response after volume loss, and venoconstriction (c) would raise pressure, not lower it.',
      tests: 'mechanism',
    },
  ],
};

export default ghpVascularComplianceVolumeDistribution;
