import type { Lecture } from '../../lib/types';

export const ghpCardiacOutputVenousReturnCurves: Lecture = {
  id: 'ghp-cardiac-output-venous-return-curves',
  title: 'Cardiac Output & Venous Return Curves',
  system: 'cardiovascular',
  source: 'Ch 20 — Cardiac Output, Venous Return & Their Regulation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 20 Cardiac Output & Venous Return' },
    { kind: 'mechanism', label: 'Curve intersection = operating point' },
    { kind: 'exam', label: 'High-output vs low-output states' },
  ],

  highYield: [
    '**Resting cardiac output is ~5 L/min** (~5.6 L/min in young men, some 10–20% less in women), which is a **cardiac index of ~3 L/min/m²** for a body surface area of ~1.7 m². Index is the size-corrected number, and it **falls with age** — roughly 4 L/min/m² at age 10 down to ~2.4 L/min/m² at 80 — because it tracks **tissue metabolic demand**, not the vigour of the heart.',
    '**In the steady state cardiac output = venous return, and both are set by the SUM OF ALL LOCAL TISSUE BLOOD FLOWS.** Each tissue autoregulates its own arterioles to its own metabolic need; the heart simply receives that total and passes it on. Rearranged, **CO = arterial pressure ÷ total peripheral resistance**, so anything that **lowers TPR raises cardiac output** at a maintained pressure. The heart is **permissive, not commanding** — it has roughly **2.5-fold spare capacity** in reserve.',
    '**The operating point is where two curves cross, both plotted against right atrial pressure.** The **cardiac output curve** (Frank–Starling for the intact heart) climbs from about **−4 mmHg** and plateaus near **13 L/min** (~2.5× resting; up to ~**25 L/min** with maximal sympathetic drive). The **venous return curve** slopes **downward** as right atrial pressure rises, hitting **zero flow when RAP equals the mean systemic filling pressure of ~7 mmHg**. They intersect at **RAP ≈ 0 mmHg and CO ≈ 5 L/min** — that intersection IS the operating point.',
    '**Only two moves exist: change the heart, or change the periphery — and right atrial pressure tells you which.** A **hypereffective heart** (sympathetic stimulation, hypertrophy) lifts the cardiac output curve → **higher output with a LOWER right atrial pressure**. A **hypoeffective heart** (infarction, tamponade, valve disease, myocarditis, arrhythmia) depresses it → **lower output with a HIGHER RAP**. Raising **mean systemic filling pressure** (transfusion, venoconstriction) shifts the venous return curve **rightward** → **output and RAP rise TOGETHER**.',
    '**High-output states all share one mechanism: reduced total peripheral resistance.** **Beriberi** (thiamine deficiency blocks tissue oxidative metabolism → metabolic vasodilation), **arteriovenous fistula** (blood bypasses the arterioles entirely), **hyperthyroidism** (raised tissue metabolism) and **anaemia** (lower viscosity plus hypoxic vasodilation) drive output to **2× normal or more** — yet in beriberi and anaemia the tissues can still be underserved, which is why it is called **high-output failure**.',
    '**Low output splits into two mechanistically opposite groups.** **Cardiac causes** depress the cardiac output curve → output falls with a **raised RAP**, distended neck veins and congestion. **Peripheral causes** — haemorrhage, acute venodilation, large-vein obstruction, loss of tissue mass — lower the venous return curve → output falls with a **low, collapsed RAP**. **Same low output, opposite treatment.**',
  ],

  mechanism: {
    title: 'Cardiac output is a peripheral variable the heart merely permits',
    steps: [
      { id: 's1', label: 'Each tissue sets its own arteriolar tone to its own metabolic need', emphasis: 'key' },
      { id: 's2', label: 'The sum of all local flows returns to the right atrium as venous return' },
      { id: 's3', label: 'Venous return curve: flow falls as RAP climbs toward Pms (~7 mmHg), zero at 7' },
      { id: 's4', label: 'Cardiac output curve: the heart ejects whatever arrives, up to a ~13 L/min plateau' },
      { id: 's5', label: 'The curves intersect at RAP ~0 mmHg and ~5 L/min — the operating point', emphasis: 'key' },
      { id: 's6', label: 'Shift either curve and the point slides; the direction RAP moves names the culprit', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cardiac output ~5 L/min with a right atrial pressure of ~0 mmHg', mechanism: 'The normal intersection of the cardiac output and venous return curves', significance: 'key' },
    { sign: 'Output rises while right atrial pressure falls after an inotrope', mechanism: 'The cardiac output curve is lifted, so the heart empties the atrium more completely', significance: 'key' },
    { sign: 'Output rises and right atrial pressure rises together after transfusion', mechanism: 'Higher mean systemic filling pressure shifts the venous return curve to the right', significance: 'key' },
    { sign: 'Output falls while right atrial and jugular venous pressures rise', mechanism: 'A depressed cardiac output curve — a hypoeffective heart', significance: 'key' },
    { sign: 'Output falls with a low, empty right atrium', mechanism: 'A peripheral problem — reduced venous return, not pump failure', significance: 'key' },
    { sign: 'Cardiac output doubles and pulse pressure widens in a large AV fistula', mechanism: 'Blood bypasses arteriolar resistance, so TPR falls and venous return rises', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cardiac output divided by body surface area', meaning: 'Cardiac index, ~3 L/min/m² — the size-corrected value for comparison' },
    { clue: 'The x-intercept at which venous return falls to zero', meaning: 'Mean systemic filling pressure, ~7 mmHg' },
    { clue: 'A venous return curve that flattens below about −4 mmHg', meaning: 'The great veins are collapsing where they enter the chest — a hard ceiling on flow' },
    { clue: 'A cardiac output curve plateauing at only 5–6 L/min', meaning: 'A hypoeffective heart; output is now genuinely heart-limited' },
    { clue: 'High cardiac output with low peripheral resistance and a wide pulse pressure', meaning: 'A high-output state: beriberi, AV fistula, thyrotoxicosis or anaemia' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'It rewrites the bedside question from "is the heart weak?" to "which curve moved?" — a fluid bolus shifts the venous return curve right, an inotrope lifts the cardiac output curve, and a vasodilator lowers the resistance the return must cross. Driving pressure and resistance in detail: [[ghp-mean-systemic-filling-pressure]]; the intrinsic pump law behind the output curve: [[ghp-frank-starling-mechanism]]; loading conditions in full: [[hemodynamics-preload-afterload-cardiac-output]].' },
    { logic: 'Reading the operating point at the bedside', detail: 'Right atrial pressure is the shared axis, so filling pressure plus output localises the lesion before any imaging. How the number itself is obtained: [[ghp-cardiac-output-measurement]]; why the tissues, not the heart, own the total: [[ghp-local-blood-flow-autoregulation]]; the reserve that a failing heart loses: [[ghp-cardiac-reserve]].' },
  ],

  mnemonics: [
    { hook: 'The heart permits, the tissues demand', expansion: ['Tissues autoregulate their own flow', 'Their sum is venous return', 'Cardiac output equals it — the heart only sets the ceiling'] },
    { hook: 'A BAT flies HIGH output', expansion: ['Anaemia', 'Beriberi', 'AV fistula', 'Thyrotoxicosis', 'All four lower total peripheral resistance'] },
    { hook: 'Low output? Read the right atrium', expansion: ['Low output + HIGH RAP = pump problem', 'Low output + LOW RAP = venous return problem', 'One axis separates two opposite treatments'] },
  ],

  traps: [
    {
      questionCategory: 'Who actually sets cardiac output',
      wrongInstinct: 'Cardiac output is set by the heart through its rate and contractility',
      rightAnswer: 'It is normally set by the periphery — the sum of local tissue flows returning as venous return; the heart holds about 2.5-fold spare capacity',
      why: 'Output becomes heart-limited only when demand exceeds the plateau of the cardiac output curve, or when that plateau is depressed by disease.',
    },
    {
      questionCategory: 'Which curve moved',
      wrongInstinct: 'A fall in cardiac output means the heart is failing',
      rightAnswer: 'Check right atrial pressure: low output with a low RAP is a venous return problem, low output with a high RAP is a pump problem',
      why: 'The two curves move independently, and RAP is the shared axis that reports which one shifted.',
    },
    {
      questionCategory: 'High output with tissue distress',
      wrongInstinct: 'A cardiac output of 10 L/min excludes circulatory failure',
      rightAnswer: 'High-output failure (beriberi, anaemia, large AV fistula) delivers a huge flow that still fails to meet or reach tissue need',
      why: 'The defect is in resistance and in tissue oxygen use, not in the volume the heart is moving.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient receives a rapid 1 L transfusion. Cardiac output rises from 5.0 to 6.5 L/min and right atrial pressure rises from 0 to +3 mmHg. Which change best explains this?',
      options: [
        { id: 'a', text: 'The cardiac output curve shifted upward and to the left' },
        { id: 'b', text: 'The venous return curve shifted to the right by a rise in mean systemic filling pressure' },
        { id: 'c', text: 'Total peripheral resistance fell without any change in blood volume' },
        { id: 'd', text: 'The cardiac output curve was depressed by reduced contractility' },
      ],
      answerId: 'b',
      explanation: 'Output and right atrial pressure rising together is the signature of a rightward shift of the venous return curve: added volume raises mean systemic filling pressure, so the intersection moves up and to the right. A lifted cardiac output curve (a) raises output while LOWERING right atrial pressure, and a depressed curve (d) lowers output while raising it.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which set of findings is most consistent with the high-output state of a large chronic arteriovenous fistula?',
      options: [
        { id: 'a', text: 'Cardiac output 10 L/min, low total peripheral resistance, raised venous return' },
        { id: 'b', text: 'Cardiac output 3 L/min, high total peripheral resistance, low right atrial pressure' },
        { id: 'c', text: 'Cardiac output 10 L/min, high total peripheral resistance, low venous return' },
        { id: 'd', text: 'Cardiac output 3 L/min, low total peripheral resistance, high right atrial pressure' },
      ],
      answerId: 'a',
      explanation: 'A fistula lets blood bypass the arterioles, so total peripheral resistance falls; because output equals pressure divided by resistance, output rises, and the increased flow returns as increased venous return. High output with a HIGH resistance (c) is internally contradictory, and the low-output options describe cardiac or hypovolaemic states.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'After an inotrope is started, cardiac output rises from 3.2 to 4.6 L/min while right atrial pressure falls from +8 to +5 mmHg. What has happened?',
      options: [
        { id: 'a', text: 'Mean systemic filling pressure has increased' },
        { id: 'b', text: 'The resistance to venous return has increased' },
        { id: 'c', text: 'The cardiac output curve has been shifted upward, so the heart empties the atrium more completely' },
        { id: 'd', text: 'Blood volume has been redistributed into the systemic veins' },
      ],
      answerId: 'c',
      explanation: 'Rising output with a FALLING right atrial pressure means the heart-side curve moved: a more effective pump drains the right atrium harder, so the intersection slides up and to the left along the unchanged venous return curve. Anything acting on the venous return curve (a, b, d) would move output and right atrial pressure in the same direction, or lower output outright.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCardiacOutputVenousReturnCurves;
