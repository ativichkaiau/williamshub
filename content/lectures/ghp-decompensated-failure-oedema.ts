import type { Lecture } from '../../lib/types';
import { PV_LOOP_HF } from '../../lib/figures';

export const ghpDecompensatedFailureOedema: Lecture = {
  id: 'ghp-decompensated-failure-oedema',
  title: 'Decompensated Failure, Cardiac Oedema and Cardiogenic Shock',
  system: 'cardiovascular',
  source: 'Ch 22 — Cardiac Failure',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 22 Cardiac Failure' },
    { kind: 'mechanism', label: 'Vicious cycle of retention' },
    { kind: 'exam', label: 'Left vs right sided congestion' },
  ],

  highYield: [
    '**The compensated/decompensated line is drawn by the kidney, not by the symptoms.** In **compensated** failure fluid retention continues only until cardiac output and arterial pressure recover enough to restore **normal urine output** — then retention stops and the patient stabilises. In **decompensated** failure the cardiac output curve is so depressed that output **never reaches the level needed for normal renal excretion**, so the retention signal is never switched off and fluid accumulates without limit.',
    '**Why the decompensated heart cannot pump the retained volume: the cardiac output curve has gone flat.** On a severely depressed curve, raising right atrial pressure beyond roughly **8–10 mmHg** adds essentially **no** extra output — partly because the over-stretched, dilated ventricle gains nothing further from Frank–Starling, and partly because the raised pressure itself compresses **subendocardial coronary flow** and stiffens the ventricle. Extra filling is therefore converted entirely into **pressure and oedema**, not into flow.',
    '**That makes a true vicious cycle (positive feedback).** Low output → poor renal perfusion → **more retention** → higher filling pressure → **no gain in output** but rising capillary pressures → oedema and ventricular over-stretch → **further deterioration of the pump** → still lower output. Nothing in the loop opposes itself, which is exactly why untreated decompensated failure is progressive and why breaking the loop with a **diuretic plus an inotrope or afterload reduction** is the therapeutic principle.',
    '**Side of failure decides the side of congestion.** **Left-sided failure** raises left atrial and pulmonary capillary pressure; once capillary pressure exceeds the plasma **colloid osmotic pressure of ~28 mmHg**, filtration overwhelms the lymphatics and **pulmonary oedema** follows — orthopnoea, paroxysmal nocturnal dyspnoea, fine basal crackles, pink frothy sputum. **Right-sided failure** raises systemic venous pressure — **elevated JVP**, tender hepatomegaly, ascites and **dependent pitting oedema**. The commonest cause of right heart failure is **left** heart failure.',
    '**Chronic elevation buys tolerance; acute elevation kills.** Pulmonary lymphatic capacity can increase **several-fold** over weeks, so a chronic mitral patient may tolerate a left atrial pressure of **40–45 mmHg** with only exertional dyspnoea, while the same pressure appearing acutely produces **flash pulmonary oedema**. Acute pulmonary oedema is a second positive-feedback loop — oedema → hypoxaemia → weaker myocardium and more sympathetic drive → higher left atrial pressure — lethal within **20–30 minutes** unless interrupted.',
    '**Cardiogenic shock is failure that has starved its own pump.** Output too low to perfuse tissues (classically **systolic BP < 90 mmHg** with **cardiac index < 2.2 L/min/m²** despite adequate filling) → **coronary perfusion pressure falls** → more ischaemic myocardium → still lower output. Clinically it is the **low-output** picture, not the congestive one: cold mottled peripheries, confusion, oliguria, narrow pulse pressure, lactate rising. Mortality remains high because the feedback loop runs through the coronary circulation itself.',
  ],

  mechanism: {
    title: 'When retention stops helping: the decompensation loop',
    steps: [
      { id: 's1', label: 'Severe insult → cardiac output curve depressed below the level needed for normal urine output', emphasis: 'key' },
      { id: 's2', label: 'Renal retention signal never switches off — salt and water accumulate indefinitely' },
      { id: 's3', label: 'Filling pressure climbs onto the flat part of the curve → no further gain in output', emphasis: 'key' },
      { id: 's4', label: 'Extra volume becomes pressure: atrial and capillary pressures rise' },
      { id: 's5', label: 'Left side → pulmonary capillary pressure > 28 mmHg → alveolar oedema; right side → raised JVP, hepatomegaly, pitting oedema', emphasis: 'danger' },
      { id: 's6', label: 'Over-stretch, wall stress and falling coronary perfusion weaken the pump further — positive feedback to cardiogenic shock', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Progressive weight gain, rising oedema and persistent oliguria despite an already high filling pressure', mechanism: 'Retention with no off-switch — output never reaches the threshold for normal renal excretion', significance: 'key' },
    { sign: 'Raised JVP with hepatojugular reflux, tender hepatomegaly, ascites and pitting ankle oedema', mechanism: 'Right-sided failure transmitting pressure back into the systemic venous and capillary bed', significance: 'key' },
    { sign: 'Orthopnoea, paroxysmal nocturnal dyspnoea, fine bibasal crackles and pink frothy sputum', mechanism: 'Left-sided failure raising pulmonary capillary pressure past the plasma colloid osmotic pressure', significance: 'key' },
    { sign: 'A third heart sound with a laterally displaced, diffuse apex beat', mechanism: 'Rapid filling into a dilated, volume-loaded and poorly compliant ventricle', significance: 'supportive' },
    { sign: 'Cold mottled peripheries, confusion, oliguria and a narrow pulse pressure with rising lactate', mechanism: 'Low-output state — cardiogenic shock with inadequate tissue perfusion', significance: 'key' },
    { sign: 'A chronic mitral patient walking about with a left atrial pressure of 40 mmHg', mechanism: 'Pulmonary lymphatic capacity expands several-fold when pressure rises slowly', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Fluid retention that stops once urine output normalises', meaning: 'Compensated failure' },
    { clue: 'Fluid retention that continues indefinitely with progressive oedema', meaning: 'Decompensated failure — output is below the renal threshold' },
    { clue: 'Pulmonary capillary wedge pressure above about 25–28 mmHg developing acutely', meaning: 'Filtration exceeds lymphatic drainage — impending or established pulmonary oedema' },
    { clue: 'Cardiac index below 2.2 L/min/m² with systolic pressure under 90 mmHg despite adequate filling', meaning: 'Cardiogenic shock rather than congestive failure' },
    { clue: 'High filling pressure with a clear chest and a raised JVP', meaning: 'Predominantly right-sided failure, or right ventricular infarction' },
    { clue: 'Extra filling produces a rise in atrial pressure with no rise in stroke volume', meaning: 'The ventricle is operating on the flat portion of its function curve' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Decompensation is the moment fluid stops being medicine and becomes poison, and every bedside decision follows from asking whether the patient is **wet and warm** (congested, perfusing) or **wet and cold** (congested and shocked). The compensations that got them here are in [[ghp-cardiac-failure-compensation]]; the exhausted reserve that explains their symptoms is in [[ghp-cardiac-reserve]]; the filtration arithmetic behind the oedema is in [[ghp-starling-forces-filtration]].' },
    { logic: 'Breaking the two positive-feedback loops', detail: 'Congestion loop: **diuretics and venodilators** lower filling pressure without lowering output, because the flat curve means you can shed preload almost for free. Shock loop: restore **coronary perfusion pressure** — inotropes, revascularisation, mechanical support — since the loop runs through the myocardium’s own blood supply. See [[ghp-lymphatic-interstitial-fluid]] for the lymphatic safety factor, [[cardiogenic-shock]] and [[ghp-coronary-circulation-ischaemia]] for the shock arm, and [[jugular-venous-pressure-waveform]] for reading the right-sided pressure at the bedside.' },
  ],

  mnemonics: [
    { hook: 'Left = Lungs, Right = Rest of the body', expansion: ['Left failure backs up into pulmonary capillaries → orthopnoea, PND, crackles', 'Right failure backs up into systemic veins → JVP, liver, ascites, ankles', 'And the commonest cause of right failure is left failure'] },
    { hook: 'Compensated has a brake; decompensated has none', expansion: ['Retention stops when urine output normalises = compensated', 'Retention never stops because output never reaches the renal threshold = decompensated', 'Flat curve → extra volume becomes pressure, not flow'] },
  ],

  traps: [
    {
      questionCategory: 'Why more fluid does not help',
      wrongInstinct: 'Giving more volume in decompensated failure should raise output via Frank–Starling',
      rightAnswer: 'The severely depressed cardiac function curve is flat at high filling pressures, so extra volume raises atrial and capillary pressure with no gain in stroke volume',
      why: 'Preload only buys output while the curve is still rising.',
    },
    {
      questionCategory: 'Chronic versus acute pressure elevation',
      wrongInstinct: 'A pulmonary capillary pressure of 40 mmHg must always mean florid pulmonary oedema',
      rightAnswer: 'If it rose slowly, expanded pulmonary lymphatic drainage can keep the alveoli dry up to roughly 40–45 mmHg; the same figure appearing acutely floods the lungs',
      why: 'The safety factor is the rate of rise, not just the number.',
    },
    {
      questionCategory: 'Congestive versus low-output failure',
      wrongInstinct: 'Treating every breathless failure patient with aggressive diuresis',
      rightAnswer: 'Distinguish congestion (high filling pressure, adequate perfusion) from cardiogenic shock (low output, cold and oliguric) — the second needs perfusion restored, not volume removed alone',
      why: 'Same disease, opposite haemodynamic problem, opposite first move.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which single feature best distinguishes decompensated from compensated cardiac failure?',
      options: [
        { id: 'a', text: 'The presence of a third heart sound' },
        { id: 'b', text: 'An elevated right atrial pressure' },
        { id: 'c', text: 'Fluid retention that continues because cardiac output never reaches the level needed for normal urine output' },
        { id: 'd', text: 'A reduced left ventricular ejection fraction' },
      ],
      answerId: 'c',
      explanation: 'Compensation is defined by retention having a stopping point: once output and pressure restore normal renal excretion, accumulation ceases. In decompensation the curve is depressed below that threshold, so retention is unopposed and progressive. A third heart sound, a raised atrial pressure and a low ejection fraction are all present in compensated failure too.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Acute pulmonary oedema develops in left-sided failure principally when pulmonary capillary pressure exceeds approximately:',
      options: [
        { id: 'a', text: '10 mmHg, the normal pulmonary capillary pressure' },
        { id: 'b', text: '18 mmHg, the upper limit of normal wedge pressure' },
        { id: 'c', text: '28 mmHg, the plasma colloid osmotic pressure' },
        { id: 'd', text: '60 mmHg, the mean pulmonary arterial pressure in severe disease' },
      ],
      answerId: 'c',
      explanation: 'Net filtration turns strongly outward once hydrostatic capillary pressure overtakes the opposing plasma colloid osmotic pressure of about 28 mmHg, and lymphatic drainage is then swamped. Pressures between normal and that threshold cause interstitial rather than alveolar flooding; with chronic elevation the tolerated pressure rises further as lymphatic capacity expands.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient in cardiogenic shock has a systolic pressure of 78 mmHg, cold mottled limbs and a rising lactate. Which positive-feedback loop makes this state self-perpetuating?',
      options: [
        { id: 'a', text: 'Low output lowers coronary perfusion pressure, worsening myocardial ischaemia and lowering output further' },
        { id: 'b', text: 'Low output stimulates baroreceptors, causing vasodilation and further hypotension' },
        { id: 'c', text: 'Low output increases renal perfusion, causing a diuresis and hypovolaemia' },
        { id: 'd', text: 'Low output raises plasma colloid osmotic pressure, drawing fluid out of the interstitium' },
      ],
      answerId: 'a',
      explanation: 'The lethal loop in cardiogenic shock runs through the coronary circulation: the failing pump generates the very perfusion pressure its own muscle needs, so hypotension causes further ischaemic loss of contractile tissue. Baroreceptor unloading causes vasoconstriction, not vasodilation (b), and renal perfusion falls rather than rises (c).',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Pressure–volume loops: normal, systolic and diastolic failure', svg: PV_LOOP_HF, caption: 'The failing ventricle sits at a larger volume and higher filling pressure for a smaller stroke volume — the graphical version of "extra volume becomes pressure, not flow".' },
  ],
};

export default ghpDecompensatedFailureOedema;
