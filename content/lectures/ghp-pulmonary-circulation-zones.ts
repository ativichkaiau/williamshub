import type { Lecture } from '../../lib/types';

export const ghpPulmonaryCirculationZones: Lecture = {
  id: 'ghp-pulmonary-circulation-zones',
  title: 'Pulmonary Circulation & the West Zones',
  system: 'respiratory',
  source: 'Ch 38 — Pulmonary Circulation, Pulmonary Edema & Pleural Fluid',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 38 Pulmonary Circulation' },
    { kind: 'mechanism', label: 'Hypoxic pulmonary vasoconstriction' },
    { kind: 'exam', label: 'West zones 1 to 3' },
  ],

  highYield: [
    '**Same flow, one-tenth the pressure.** The pulmonary circuit carries the entire cardiac output — the same **~5 L/min** as the systemic circuit — at a pulmonary artery pressure of about **25/8 mmHg, mean ~15 mmHg**, with a **pulmonary capillary pressure of ~7 mmHg** and a **left atrial pressure of ~2 mmHg (1 to 5)**. Pulmonary vascular resistance is therefore roughly **one-tenth** of systemic, which is why the **right ventricle is a thin-walled volume pump** and why a modest rise in pulmonary pressure is haemodynamically serious.',
    '**The lung is a blood reservoir as well as a gas exchanger.** It holds about **450 mL, some 9% of total blood volume**, of which only about **70 mL** is in the capillaries at any instant — roughly one red cell layer thick, spread over the alveolar walls. On haemorrhage the lung can shift up to **250 mL** into the systemic circulation; conversely **left heart failure** or a **Valsalva-to-Mueller shift** can raise pulmonary blood volume by up to **100%**, which is where cardiogenic congestion begins.',
    '**Exercise is absorbed by recruitment and distension, not by raising pressure.** Cardiac output can rise **four- to sevenfold** while pulmonary artery pressure barely doubles, because the circuit responds passively in two ways: **recruitment** of previously closed apical capillaries and **distension** of those already open. This drops pulmonary vascular resistance as flow rises — the opposite of a fixed-resistance system — and it protects against oedema while simultaneously **increasing the surface area available for diffusion**. Loss of that reserve, as in emphysema or pulmonary vascular obliteration, produces exercise-induced pulmonary hypertension.',
    '**West zones: rank the three pressures and the zone names itself.** Because the upright lung is about **30 cm** tall, the hydrostatic column creates roughly a **15 mmHg** arterial pressure difference between apex and base. **Zone 1 (PA > Pa > Pv): no flow at all** — ventilated but unperfused alveolar dead space. **Zone 2 (Pa > PA > Pv): intermittent, systolic-only flow**, and flow is governed by **Pa − PA**, not Pa − Pv, because the vessel behaves as a collapsible Starling resistor (the waterfall effect). **Zone 3 (Pa > Pv > PA): continuous flow** governed by the conventional **Pa − Pv**.',
    '**Zone 1 should not exist in a healthy person — its appearance is the exam point.** At rest upright the apex is **zone 2** and the base **zone 3**; lying supine or exercising converts the **whole lung to zone 3**. Zone 1 appears only when **arterial pressure falls** (haemorrhage, shock) or **alveolar pressure rises** (positive-pressure ventilation, especially with high PEEP) — and each new zone 1 region is **wasted ventilation**, widening physiological dead space and the arterial to end-tidal CO₂ gradient.',
    '**Hypoxia constricts the pulmonary circulation — the exact opposite of every systemic bed.** When **alveolar** PO₂ falls below about **70 mmHg**, pulmonary arteriolar smooth muscle depolarises through inhibition of voltage-gated potassium channels, calcium enters, and the vessel constricts; resistance can rise up to **fivefold** at very low PO₂. **Local hypoxia is useful**: it diverts blood away from poorly ventilated alveoli toward well-ventilated ones, defending V/Q matching and arterial oxygenation. **Global hypoxia is harmful**: altitude and chronic lung disease constrict the whole bed, producing **pulmonary hypertension and cor pulmonale**. Note the stimulus is **alveolar PO₂, not arterial** — this alone answers many questions.',
  ],

  mechanism: {
    title: 'A low-pressure circuit shaped by gravity, alveolar pressure and alveolar oxygen',
    steps: [
      { id: 's1', label: 'Right ventricle drives full cardiac output at a mean pressure of only ~15 mmHg', emphasis: 'key' },
      { id: 's2', label: 'A 30 cm upright lung gives a ~15 mmHg apex-to-base hydrostatic gradient' },
      { id: 's3', label: 'Rank alveolar, arterial and venous pressures to assign zone 1, 2 or 3', emphasis: 'key' },
      { id: 's4', label: 'Zone 2 flow is set by arterial minus alveolar pressure (Starling resistor)', emphasis: 'key' },
      { id: 's5', label: 'Rising flow recruits closed capillaries and distends open ones, lowering resistance' },
      { id: 's6', label: 'Low alveolar PO₂ constricts local arterioles, diverting flow to ventilated units', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Loud pulmonary component of the second heart sound with a parasternal heave', mechanism: 'Raised pulmonary artery pressure closing the pulmonary valve forcefully against a hypertrophied right ventricle', significance: 'key' },
    { sign: 'Widening arterial to end-tidal CO₂ gradient after starting high PEEP', mechanism: 'Alveolar pressure exceeding arterial pressure creates zone 1 — ventilated but unperfused lung', significance: 'key' },
    { sign: 'Hypoxaemia worsening when a patient with unilateral lung disease lies with the good lung uppermost', mechanism: 'Gravity shifts perfusion to the dependent diseased lung, worsening the shunt', significance: 'key' },
    { sign: 'Pulmonary hypertension and cor pulmonale in a long-term high-altitude resident', mechanism: 'Sustained global hypoxic pulmonary vasoconstriction with vascular remodelling', significance: 'key' },
    { sign: 'Only a modest rise in pulmonary artery pressure despite a fourfold rise in cardiac output', mechanism: 'Recruitment and distension lower pulmonary vascular resistance as flow increases', significance: 'supportive' },
    { sign: 'Apical perfusion much lower than basal perfusion on a supine-to-upright comparison', mechanism: 'Hydrostatic gradient down the 30 cm lung column', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Mean pulmonary artery pressure of about 15 mmHg with a wedge pressure of about 8 mmHg', meaning: 'Normal low-pressure pulmonary circuit' },
    { clue: 'Alveolar pressure greater than arterial pressure in a lung region', meaning: 'West zone 1 — no flow, pure alveolar dead space' },
    { clue: 'Regional flow determined by arterial minus alveolar pressure', meaning: 'West zone 2 behaviour, the Starling resistor or waterfall effect' },
    { clue: 'The whole lung behaving as zone 3', meaning: 'Supine posture or exercise, when venous pressure exceeds alveolar pressure throughout' },
    { clue: 'Falling pulmonary vascular resistance as cardiac output rises', meaning: 'Passive recruitment and distension, not active vasodilation' },
    { clue: 'Regional vasoconstriction when alveolar PO₂ drops below about 70 mmHg', meaning: 'Hypoxic pulmonary vasoconstriction defending ventilation-perfusion matching' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The zones explain why positive-pressure ventilation is not haemodynamically free: raising alveolar pressure converts zone 3 lung into zone 2 and zone 2 into zone 1, adding dead space just when you were trying to improve oxygenation. Hypoxic pulmonary vasoconstriction is why supplemental oxygen is itself a pulmonary vasodilator in chronic lung disease, and why a pulmonary artery catheter reads a true left atrial pressure only when its tip lies in zone 3. The Starling consequences of these pressures are in [[ghp-pulmonary-oedema-pleural-fluid]].' },
    { logic: 'Bedside payoff', detail: 'It tells you the stimulus for pulmonary vasoconstriction is alveolar rather than arterial oxygen, so a blocked bronchus constricts its own vessels while an anaemic patient does not; that one-lung anaesthesia relies on this reflex to limit shunt; and that vasodilators improve pulmonary pressures at the cost of abolishing the reflex and worsening oxygenation. The matching problem itself is in [[ventilation-perfusion-matching]]; the anatomical and comparative account in [[pulmonary-circulation-features]] and [[systemic-pulmonary-circulation]]; the end-stage consequence in [[pulmonary-hypertension-cor-pulmonale]].' },
  ],

  mnemonics: [
    { hook: 'Zone 1 is Air on top, Zone 3 is Blood on top', expansion: ['Zone 1: alveolar beats arterial beats venous — no flow, dead space', 'Zone 2: arterial beats alveolar beats venous — intermittent, driven by Pa minus PA', 'Zone 3: arterial beats venous beats alveolar — continuous, driven by Pa minus Pv'] },
    { hook: 'Lungs go the wrong way in hypoxia', expansion: ['Systemic beds dilate when oxygen falls; pulmonary vessels constrict', 'The stimulus is alveolar PO₂, not arterial', 'Local hypoxia protects V/Q; global hypoxia gives cor pulmonale'] },
  ],

  traps: [
    {
      questionCategory: 'Stimulus for hypoxic pulmonary vasoconstriction',
      wrongInstinct: 'Falling arterial PO₂ in the pulmonary artery is what triggers the constriction',
      rightAnswer: 'It is alveolar PO₂ in the gas next to the vessel that drives it',
      why: 'Only an alveolar signal can selectively divert blood away from the badly ventilated units, which is the whole purpose of the reflex.',
    },
    {
      questionCategory: 'What determines flow in West zone 2',
      wrongInstinct: 'Flow is the arterial minus venous pressure difference, as in any vascular bed',
      rightAnswer: 'In zone 2 flow depends on arterial minus alveolar pressure, because the capillary collapses at its downstream end',
      why: 'Venous pressure is below alveolar pressure there, so it cannot influence flow — the Starling resistor or waterfall effect.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In a lung region, alveolar pressure is 12 mmHg, pulmonary arterial pressure is 8 mmHg and pulmonary venous pressure is 3 mmHg. This region is best described as:',
      options: [
        { id: 'a', text: 'Zone 1, with no blood flow and wasted ventilation' },
        { id: 'b', text: 'Zone 2, with intermittent systolic flow' },
        { id: 'c', text: 'Zone 3, with continuous flow throughout the cycle' },
        { id: 'd', text: 'A shunt region, ventilated poorly but well perfused' },
      ],
      answerId: 'a',
      explanation: 'Alveolar pressure exceeds arterial pressure, so the capillaries are held closed and there is no flow at any point in the cycle — ventilation without perfusion, that is alveolar dead space. Option d describes the opposite abnormality; this region is the definition of high V/Q, not shunt.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with a mucus-plugged left lower lobe bronchus shows reduced blood flow to that lobe. The mechanism is:',
      options: [
        { id: 'a', text: 'Reflex sympathetic vasoconstriction driven by chemoreceptors' },
        { id: 'b', text: 'Local hypoxic pulmonary vasoconstriction in response to low alveolar PO₂' },
        { id: 'c', text: 'Mechanical compression of the vessels by the collapsed lobe alone' },
        { id: 'd', text: 'Local vasodilation in the remaining lobes with passive steal' },
      ],
      answerId: 'b',
      explanation: 'Low alveolar PO₂ inhibits potassium channels in pulmonary arteriolar smooth muscle, depolarising it and admitting calcium, so the vessel constricts and blood is diverted to better-ventilated lung. This is the reverse of the systemic response to hypoxia, and it is a local reflex rather than a chemoreceptor-mediated one.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Adding high levels of PEEP to a hypovolaemic ventilated patient increases the physiological dead space. The best explanation is:',
      options: [
        { id: 'a', text: 'PEEP increases anatomical dead space by dilating the conducting airways' },
        { id: 'b', text: 'Raised alveolar pressure with low arterial pressure converts lung regions into zone 1' },
        { id: 'c', text: 'PEEP abolishes hypoxic pulmonary vasoconstriction throughout the lung' },
        { id: 'd', text: 'PEEP recruits collapsed alveoli, which necessarily increases shunt' },
      ],
      answerId: 'b',
      explanation: 'Zone 1 requires alveolar pressure to exceed arterial pressure, which high PEEP and hypovolaemia produce together, creating ventilated but unperfused units and widening the arterial to end-tidal CO₂ gradient. Option d is backwards, since recruitment reduces shunt rather than increasing it.',
      tests: 'investigation',
    },
  ],
};

export default ghpPulmonaryCirculationZones;
