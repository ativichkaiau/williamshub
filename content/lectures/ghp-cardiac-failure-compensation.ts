import type { Lecture } from '../../lib/types';
import { FRANK_STARLING } from '../../lib/figures';

export const ghpCardiacFailureCompensation: Lecture = {
  id: 'ghp-cardiac-failure-compensation',
  title: 'Cardiac Failure: Acute Insult and Chronic Compensation',
  system: 'cardiovascular',
  source: 'Ch 22 — Cardiac Failure',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 22 Cardiac Failure' },
    { kind: 'mechanism', label: 'Sympathetic then renal compensation' },
    { kind: 'exam', label: 'Seconds vs days timeline' },
  ],

  highYield: [
    '**Heart failure is a pump problem defined graphically: the cardiac output curve is depressed.** The failing ventricle generates less output at every filling pressure, so the equilibrium point with the venous return curve moves **down (less output) and to the right (higher right atrial pressure)**. That single sentence explains the whole syndrome — **low forward flow plus backward congestion, simultaneously**.',
    '**Acute stage (seconds): sympathetic rescue.** After a large infarct, cardiac output can crash from ~**5 L/min to ~2 L/min**. Falling arterial pressure unloads the **baroreceptors**, so sympathetic outflow surges within **seconds and is maximal by ~30 s**. Two effects: **(1)** direct stimulation of the **undamaged** myocardium partially lifts the cardiac output curve, and **(2)** venoconstriction raises **mean systemic filling pressure** from ~**7 mmHg toward 12–17 mmHg**, shifting the venous return curve **right**. Output is dragged back to ~**4–4.5 L/min** — enough to survive, not enough to feel well.',
    '**Chronic stage (hours to days): the kidney takes over.** Reduced renal perfusion plus **renin–angiotensin–aldosterone and ADH** produce **salt and water retention**. This does something the sympathetic system cannot sustain: it **expands blood volume**, which raises **mean systemic filling pressure** and shifts the **venous return curve to the right** — the reason a compensated patient can hold a near-normal resting output on a permanently depressed cardiac curve.',
    '**Moderate retention is beneficial; excessive retention is harmful.** Beneficial because it raises the pressure gradient for venous return and stretches the ventricle onto a better part of its Frank–Starling curve. Harmful because further filling of a **flat, depressed** curve buys no extra output — it only raises **atrial and capillary pressures**, causing **pulmonary and peripheral oedema**, ventricular over-stretch and higher wall stress.',
    '**Compensated failure = the retention has an off-switch.** Fluid accumulates until cardiac output and arterial pressure are restored enough for **normal urine output**, at which point retention stops. Resting output looks **normal** — but at an elevated **right atrial pressure**, with the sympathetic system already spent, so there is almost **no cardiac reserve**. The patient is normal at rest and breathless on the stairs.',
    '**Recovery of the myocardium itself continues for weeks.** Collateral vessels grow into the border zone and the **surviving muscle hypertrophies**, so the cardiac output curve partially recovers. Compensation is therefore three overlapping processes on three timescales — **nerves in seconds, kidney in days, muscle in weeks**.',
  ],

  mechanism: {
    title: 'Nerves in seconds, kidney in days — two compensations acting on different curves',
    steps: [
      { id: 's1', label: 'Myocardial insult → cardiac output curve depressed → output falls, right atrial pressure rises', emphasis: 'key' },
      { id: 's2', label: 'Arterial pressure falls → baroreceptors unload → sympathetic surge, maximal by ~30 s', emphasis: 'key' },
      { id: 's3', label: 'Undamaged muscle stimulated (curve lifted) + venoconstriction raises mean systemic filling pressure (VR curve shifted right)' },
      { id: 's4', label: 'Output partially restored to ~4–4.5 L/min, but at a higher filling pressure' },
      { id: 's5', label: 'Low renal perfusion + RAAS + ADH → salt and water retention over hours to days', emphasis: 'key' },
      { id: 's6', label: 'Volume expansion raises filling pressure further: moderate = more output, excessive = congestion only', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Cardiac output falls abruptly to about 2 L/min in the first seconds after a large infarct', mechanism: 'Loss of contracting muscle depresses the cardiac output curve at every filling pressure', significance: 'key' },
    { sign: 'Tachycardia, cool clammy peripheries and a narrow pulse pressure within the first minute', mechanism: 'Baroreceptor-driven sympathetic surge — cardiac stimulation plus arteriolar and venous constriction', significance: 'key' },
    { sign: 'Right atrial pressure rises even though cardiac output has fallen', mechanism: 'The weakened ventricle cannot translocate blood forward, so it dams behind the pump', significance: 'key' },
    { sign: 'Urine output falls and urinary sodium is low in the days after the event', mechanism: 'Reduced renal perfusion, angiotensin II and aldosterone drive avid sodium and water retention', significance: 'key' },
    { sign: 'Blood volume and weight rise over several days without any further cardiac event', mechanism: 'Renal retention expanding extracellular fluid to raise mean systemic filling pressure', significance: 'supportive' },
    { sign: 'Resting cardiac output back to normal but the patient is breathless climbing one flight of stairs', mechanism: 'Compensated failure — reserve has been spent to maintain the resting state', significance: 'key' },
  ],

  investigations: [
    { clue: 'Cardiac output curve depressed with the venous return curve unchanged', meaning: 'Acute failure caught before any compensation has occurred' },
    { clue: 'Cardiac output curve partly lifted and venous return curve shifted right within a minute', meaning: 'Sympathetic compensation — it acts on both curves at once' },
    { clue: 'Venous return curve shifted right with no further change in the cardiac curve, days later', meaning: 'Renal fluid retention raising mean systemic filling pressure' },
    { clue: 'Mean systemic filling pressure risen from about 7 mmHg to 12 mmHg or more', meaning: 'Volume expansion or venoconstriction — the driving pressure for venous return has increased' },
    { clue: 'Normal resting cardiac output with a raised right atrial pressure and poor exercise tolerance', meaning: 'Compensated cardiac failure' },
    { clue: 'High plasma renin, aldosterone and ADH with low urinary sodium', meaning: 'Active neurohumoral compensation — the kidney reading the circulation as underfilled' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Failure is only intelligible as the intersection of two curves — the pump and the vasculature. Sympathetic compensation moves **both** curves; fluid retention moves **only the venous return curve**, which is why it helps a mildly depressed heart and drowns a severely depressed one. Read this alongside [[ghp-cardiac-output-venous-return-curves]] and [[ghp-mean-systemic-filling-pressure]], with the length-dependent basis of the preload benefit in [[ghp-frank-starling-mechanism]].' },
    { logic: 'Therapeutic logic that falls straight out of the physiology', detail: 'Every drug class in failure is aimed at one arm of this compensation: **diuretics** remove the **excessive** half of retained fluid without touching the beneficial half; **ACE inhibitors and aldosterone antagonists** interrupt the renal arm; **beta-blockers** blunt chronic sympathetic overdrive that eventually damages myocardium. Clinical framing in [[heart-failure-overview]], the neurohumoral loop in [[ghp-renin-angiotensin-hypertension]], and what happens when compensation fails in [[ghp-decompensated-failure-oedema]].' },
  ],

  mnemonics: [
    { hook: 'Seconds = Sympathetic, Days = Kidney, Weeks = Muscle', expansion: ['0–30 s: baroreceptor reflex lifts the pump and constricts the veins', 'Hours–days: RAAS and ADH retain salt and water', 'Weeks: collaterals and hypertrophy of surviving myocardium'] },
    { hook: 'Moderate retention fills the pump; excessive retention floods it', expansion: ['Retention raises mean systemic filling pressure → more venous return', 'But a flat cardiac curve converts extra filling into pressure, not flow', 'That pressure becomes pulmonary and peripheral oedema'] },
  ],

  traps: [
    {
      questionCategory: 'Timeline of compensation',
      wrongInstinct: 'Fluid retention is what restores cardiac output in the first minute after an infarct',
      rightAnswer: 'The baroreceptor-driven sympathetic reflex does it — it is essentially complete within 30 seconds; renal retention needs hours to days',
      why: 'Nerves act in seconds, the kidney acts in days — the question is nearly always about which timescale.',
    },
    {
      questionCategory: 'Why right atrial pressure rises',
      wrongInstinct: 'Right atrial pressure is high because the patient has already retained fluid',
      rightAnswer: 'It rises immediately, before any retention, because a depressed ventricle cannot translocate the blood arriving at it — blood dams up behind the pump',
      why: 'Depressing the cardiac output curve alone moves the equilibrium point down and to the right.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Thirty seconds after a large anterior myocardial infarction, cardiac output has recovered from 2.0 to 4.3 L/min. Which mechanism is chiefly responsible?',
      options: [
        { id: 'a', text: 'Renal retention of salt and water raising blood volume' },
        { id: 'b', text: 'Baroreceptor-mediated sympathetic stimulation of the heart and veins' },
        { id: 'c', text: 'Hypertrophy of the surviving ventricular myocardium' },
        { id: 'd', text: 'Growth of coronary collateral vessels into the infarct border zone' },
      ],
      answerId: 'b',
      explanation: 'Falling arterial pressure unloads the baroreceptors, and the sympathetic response is essentially maximal within about 30 seconds: it stimulates undamaged myocardium and constricts the veins, raising mean systemic filling pressure. Renal retention (a) takes hours to days, and hypertrophy and collateral growth (c, d) take weeks.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'In chronic compensated cardiac failure, the principal way renal fluid retention improves cardiac output is by:',
      options: [
        { id: 'a', text: 'Directly increasing myocardial contractility' },
        { id: 'b', text: 'Lowering total peripheral resistance so the venous return curve steepens' },
        { id: 'c', text: 'Raising mean systemic filling pressure, shifting the venous return curve to the right' },
        { id: 'd', text: 'Reducing right atrial pressure and thereby unloading the ventricle' },
      ],
      answerId: 'c',
      explanation: 'Volume expansion raises the mean systemic filling pressure, which is the driving pressure for venous return, so the venous return curve shifts right and intersects the depressed cardiac curve at a higher output. Retention does nothing to contractility (a), does not lower resistance (b), and raises rather than lowers right atrial pressure (d).',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient two weeks after a moderate infarct has a resting cardiac output of 5 L/min, a right atrial pressure of 6 mmHg and normal urine output, but becomes dyspnoeic on modest exertion. This state is best described as:',
      options: [
        { id: 'a', text: 'Decompensated cardiac failure' },
        { id: 'b', text: 'Compensated cardiac failure' },
        { id: 'c', text: 'Cardiogenic shock' },
        { id: 'd', text: 'High-output cardiac failure' },
      ],
      answerId: 'b',
      explanation: 'Compensation is defined by the retention having an off-switch: fluid accumulated until output and pressure were adequate for normal urine output, and then stopped. Resting output is normal but bought at a raised filling pressure with the reserve spent, so exertion unmasks it. Decompensated failure (a) shows continuing retention and progressive oedema, and cardiogenic shock (c) means output too low to perfuse tissues at rest.',
      tests: 'disease',
    },
  ],

  figures: [
    { title: 'Cardiac output curves: normal versus failing heart', svg: FRANK_STARLING, caption: 'Failure depresses and flattens the curve. Sympathetic drive lifts it a little; fluid retention slides the equilibrium point rightward along it — helpful while the curve still rises, useless once it is flat.' },
  ],
};

export default ghpCardiacFailureCompensation;
