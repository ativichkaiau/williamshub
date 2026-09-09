import type { Lecture } from '../../lib/types';

export const ghpHemodynamicsPressureFlowResistance: Lecture = {
  id: 'ghp-hemodynamics-pressure-flow-resistance',
  title: 'Pressure, Flow and Resistance',
  system: 'cardiovascular',
  source: 'Ch 14 — Overview of the Circulation; Pressure, Flow & Resistance',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 14 Overview of the Circulation' },
    { kind: 'mechanism', label: 'Ohm law and Poiseuille law' },
    { kind: 'exam', label: 'Series vs parallel resistance' },
  ],

  highYield: [
    '**The whole circulation obeys one equation: F = ΔP / R.** Flow through any segment is set by the **pressure difference across it**, never by the absolute pressure inside it. The systemic circuit runs from a mean aortic pressure of ~**100 mmHg** down to a right atrial pressure of ~**0 mmHg**, so a ΔP of ~100 mmHg drives a cardiac output of ~**5 L/min (~100 mL/s)** — giving a total peripheral resistance of ~**1 PRU** (1 mmHg per mL/s). The pulmonary circuit moves the same flow across a ΔP of only ~**14 mmHg**, so its resistance is roughly **one-seventh** of the systemic value.',
    '**Resistance is almost entirely a radius problem — Poiseuille: F = π ΔP r⁴ / 8ηL.** Flow varies with the **fourth power of the radius**: double the radius and flow rises **16-fold**; halve it and flow falls to **one-sixteenth**. Length and viscosity matter linearly and barely change from minute to minute, so **radius is the only variable the body can use for fast control** — which is why the **arterioles**, with their thick smooth-muscle coats, carry roughly **half of total systemic resistance** and act as the adjustable tap of each organ.',
    '**Where the pressure falls tells you where the resistance is.** Pressure barely drops along the aorta and large arteries (still ~**95 mmHg**), then plunges across the **arterioles** to ~**35 mmHg** at the start of the capillary, falls to ~**10 mmHg** at the venule end and reaches ~**0 mmHg** in the right atrium. A steep pressure gradient across a segment is the signature of high resistance in that segment.',
    '**Series adds, parallel divides.** Within one organ the artery, arteriole, capillary and vein are **in series**, so resistances simply add (**R = R₁ + R₂ + R₃**). The organs themselves are **in parallel** off the aorta (**1/R = 1/R₁ + 1/R₂ + …**), so total resistance is **lower than that of any single limb**: adding or dilating one vascular bed **lowers** total peripheral resistance, while removing one (nephrectomy, amputation) **raises** it. Conductance is simply **1/R**, and conductance is what varies with **r⁴**.',
    '**Viscosity is the second-order term, and haematocrit dominates it.** Whole blood is ~**3×** as viscous as water at a normal haematocrit of ~**40%**; plasma alone is ~**1.5×**. In **polycythaemia with a haematocrit of ~70%**, viscosity can reach ~**10× water**, sharply raising resistance and cardiac work; in **anaemia**, low viscosity plus hypoxic vasodilation lowers resistance and drives a **high-output state** (as do arteriovenous fistula, thyrotoxicosis and beriberi).',
    '**Flow is normally laminar and silent; turbulence is audible and inefficient.** Laminar flow has a **parabolic velocity profile** (fastest in the centre) and flow is **proportional to ΔP**. Turbulence appears when the **Reynolds number (Re = v·d·ρ/η)** exceeds ~**2000** in smooth tubes — or far lower at branch points and stenoses — and then flow becomes proportional to the **square root of ΔP**. Clinically, turbulence is what you hear: **bruits over stenoses, murmurs, the Korotkoff sounds** under a blood-pressure cuff.',
  ],

  mechanism: {
    title: 'One gradient, one resistance — and resistance is nearly all radius',
    steps: [
      { id: 's1', label: 'Heart maintains ΔP: aorta ~100 mmHg → right atrium ~0 mmHg' },
      { id: 's2', label: 'Flow through any bed = ΔP ÷ R (Ohm law of the circulation)', emphasis: 'key' },
      { id: 's3', label: 'R is dominated by radius: flow varies with r to the fourth power', emphasis: 'key' },
      { id: 's4', label: 'Arterioles hold ~half of systemic resistance → the adjustable tap' },
      { id: 's5', label: 'Organs sit in parallel: dilating one bed lowers total peripheral resistance', emphasis: 'key' },
      { id: 's6', label: 'Viscosity (haematocrit) and turbulence modify the same relation' },
    ],
  },

  examFindings: [
    { sign: 'Steep pressure drop from ~95 mmHg to ~35 mmHg across the arterioles', mechanism: 'Arterioles are the dominant resistance segment', significance: 'key' },
    { sign: 'Halving arteriolar radius cuts flow to about one-sixteenth', mechanism: 'Fourth-power radius dependence of Poiseuille flow', significance: 'key' },
    { sign: 'Bruit heard over a stenosed artery or an arteriovenous fistula', mechanism: 'Reynolds number exceeded — laminar flow breaks into turbulence', significance: 'key' },
    { sign: 'High cardiac output in chronic anaemia', mechanism: 'Reduced viscosity and hypoxic vasodilation lower total peripheral resistance', significance: 'key' },
    { sign: 'Rising haematocrit in polycythaemia raises resistance and cardiac work', mechanism: 'Viscosity climbs steeply above a haematocrit of about 45 to 50%', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Flow falls to one-sixteenth when a vessel radius halves', meaning: 'Fourth-power radius dependence — the Poiseuille relation' },
    { clue: 'Total peripheral resistance of about 1 PRU', meaning: 'The normal operating point: ~100 mmHg driving ~100 mL/s' },
    { clue: 'Resistances that add arithmetically', meaning: 'Vessels in series within a single organ' },
    { clue: 'Total resistance lower than that of any single branch', meaning: 'Parallel arrangement of the systemic organ beds' },
    { clue: 'Flow proportional to the square root of the pressure gradient', meaning: 'Turbulent rather than laminar flow' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every haemodynamic intervention is a move on F = ΔP/R: fluids and inotropes act on ΔP, vasopressors and vasodilators act on R, and because R follows the fourth power of radius, a few micrometres of arteriolar smooth-muscle tone changes organ flow more than any pressure manoeuvre. The volume side of the same circuit is in [[ghp-vascular-compliance-volume-distribution]], and the local control of that radius in [[ghp-local-blood-flow-autoregulation]].' },
    { logic: 'Bedside payoff', detail: 'It explains why a bruit means stenosis, why an arteriovenous fistula (a new low-resistance parallel channel) raises cardiac output, why polycythaemia is a hyperviscosity problem rather than a pressure problem, and why perfusion of an organ fails when its venous pressure rises even though arterial pressure is untouched. Neural control of the same resistance vessels: [[ghp-vasomotor-centre-sympathetic-control]]; loading conditions of the pump feeding the circuit: [[hemodynamics-preload-afterload-cardiac-output]].' },
  ],

  mnemonics: [
    { hook: 'Flow = Push divided by Push-back', expansion: ['Push = ΔP across the segment, not the pressure inside it', 'Push-back = R, and R is nearly all radius', 'Change the radius and you change everything'] },
    { hook: 'Radius Rules to the Fourth', expansion: ['×2 radius = ×16 flow', '÷2 radius = ÷16 flow', 'Length and viscosity are only first power — and hardly ever change'] },
  ],

  traps: [
    {
      questionCategory: 'Absolute pressure versus pressure gradient',
      wrongInstinct: 'Organ flow is determined by arterial pressure, so a normal blood pressure guarantees normal perfusion',
      rightAnswer: 'Flow depends on the gradient across the bed — arterial minus downstream venous or tissue pressure — divided by resistance',
      why: 'A rise in venous or compartment pressure cuts flow with arterial pressure completely unchanged.',
    },
    {
      questionCategory: 'Series versus parallel resistance',
      wrongInstinct: 'Opening an extra vascular channel adds resistance, so more open beds means a higher total peripheral resistance',
      rightAnswer: 'Systemic beds are in parallel, so every additional or dilated channel lowers total resistance below that of any single branch',
      why: 'Resistances add only in series; in parallel it is the conductances that add.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Sympathetic tone reduces the radius of an arteriole to half its previous value, with pressure gradient, blood viscosity and vessel length unchanged. Flow through that arteriole becomes approximately:',
      options: [
        { id: 'a', text: 'One-half of the previous flow' },
        { id: 'b', text: 'One-quarter of the previous flow' },
        { id: 'c', text: 'One-eighth of the previous flow' },
        { id: 'd', text: 'One-sixteenth of the previous flow' },
      ],
      answerId: 'd',
      explanation: 'Poiseuille flow varies with the fourth power of the radius, so halving the radius divides flow by 2 to the fourth, that is 16. Options a to c would be right only if flow varied with radius, radius squared or radius cubed — none of which describes laminar flow through a tube.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A large arteriovenous fistula is surgically created in the thigh. The immediate haemodynamic consequence is:',
      options: [
        { id: 'a', text: 'A rise in total peripheral resistance, because a new vascular segment has been added' },
        { id: 'b', text: 'A fall in total peripheral resistance and a rise in cardiac output' },
        { id: 'c', text: 'No change in resistance, because the fistula carries blood in both directions' },
        { id: 'd', text: 'A fall in venous return, because blood bypasses the capillaries' },
      ],
      answerId: 'b',
      explanation: 'The fistula is an extra low-resistance channel in parallel with the rest of the systemic circulation, so total resistance falls below any single branch and venous return and cardiac output rise — the classic high-output state. Option a confuses parallel with series; only resistances in series add.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with polycythaemia vera has a haematocrit of 70%. Compared with a normal haematocrit of 40%, the principal haemodynamic effect is:',
      options: [
        { id: 'a', text: 'Increased blood viscosity and therefore increased vascular resistance' },
        { id: 'b', text: 'Reduced blood viscosity with a compensatory tachycardia' },
        { id: 'c', text: 'A fourth-power increase in flow through every vessel' },
        { id: 'd', text: 'Conversion of laminar to turbulent flow throughout the arterial tree' },
      ],
      answerId: 'a',
      explanation: 'Viscosity rises steeply once the haematocrit exceeds about 45 to 50%, reaching roughly ten times that of water at 70%, and resistance rises with it (viscosity is in the denominator of the Poiseuille equation). Option c misapplies the radius term, and turbulence (d) depends on velocity, diameter and density — a high viscosity actually lowers the Reynolds number.',
      tests: 'investigation',
    },
  ],
};

export default ghpHemodynamicsPressureFlowResistance;
