import type { Lecture } from '../../lib/types';
import { FRANK_STARLING } from '../../lib/figures';

export const ghpFrankStarlingMechanism: Lecture = {
  id: 'ghp-frank-starling-mechanism',
  title: 'The Frank–Starling Mechanism',
  system: 'cardiovascular',
  source: 'Ch 9 — Heart Muscle; The Heart as a Pump',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 9 The Heart as a Pump' },
    { kind: 'mechanism', label: 'Length-dependent activation' },
    { kind: 'exam', label: 'Preload vs contractility' },
  ],

  highYield: [
    '**Frank–Starling law: within physiological limits, the heart pumps out whatever volume comes back to it.** Extra venous return **stretches** the ventricle in diastole → **greater end-diastolic fibre length (preload)** → **more forceful contraction → larger stroke volume**. It is **intrinsic** — it works in a denervated or transplanted heart, with no nerves, no hormones and no reflexes.',
    '**The molecular basis is length-dependent activation, not just filament overlap.** Stretch toward a sarcomere length of ~**2.2 μm** improves actin–myosin overlap, but the bigger contribution is that stretch **increases the Ca²⁺ sensitivity of troponin C** (helped by reduced myofilament lattice spacing and titin-mediated strain) — so the same Ca²⁺ transient generates more force. Cardiac muscle is also **very stiff (titin)**, so it does **not** normally operate on a descending limb the way skeletal muscle can.',
    '**Stretch also speeds the heart, by two routes.** **Direct:** stretching the **SA node** raises its intrinsic rate by ~**10–15%**. **Reflex:** the **Bainbridge reflex** — stretch receptors in the **right atrium and great veins** send **vagal afferents** to the medulla, whose output **increases sympathetic drive** → **heart rate rises**. Filling therefore raises **both** stroke volume and rate; net cardiac output rises far more than either alone.',
    '**Why this matters most: it balances the two ventricles.** If the right ventricle transiently ejects more, the extra volume reaches the left ventricle, stretches it and is ejected on the very next beats — automatically, beat-to-beat, with no signalling between chambers. Without Starling, a few percent of mismatch would flood the lungs within minutes.',
    '**Afterload works in the opposite direction, but is heavily buffered.** Raising aortic pressure opposes ejection, raises ESV and initially lowers stroke volume — yet the retained blood raises EDV and Starling recruits the force to overcome it, so a normal heart maintains cardiac output until mean arterial pressure exceeds roughly **160 mmHg**. **Preload raises SV; afterload lowers it; contractility changes which curve you are on.**',
    '**Autonomic modulation shifts the entire ventricular function curve.** **Sympathetic stimulation** shifts it **up and to the left** (more work at any given filling pressure; heart rate to ~180–200/min and force roughly doubled, cardiac output up to ~**2× normal**). **Vagal stimulation** shifts it **down and right**, mainly by slowing rate, with atrial force affected more than ventricular because vagal fibres are distributed chiefly to the atria.',
  ],

  mechanism: {
    title: 'Fill it more, it contracts harder — automatically',
    steps: [
      { id: 's1', label: 'Venous return rises → greater diastolic filling (EDV, preload)', emphasis: 'key' },
      { id: 's2', label: 'Sarcomeres stretch toward optimal length (~2.2 μm)' },
      { id: 's3', label: 'Troponin C Ca²⁺ sensitivity rises → more force per Ca²⁺ transient', emphasis: 'key' },
      { id: 's4', label: 'Stroke volume rises on the same curve — the heart pumps what it receives', emphasis: 'key' },
      { id: 's5', label: 'SA node stretch (+10–15%) and the Bainbridge reflex raise heart rate' },
      { id: 's6', label: 'Sympathetic drive shifts the whole function curve up and left' },
    ],
  },

  examFindings: [
    { sign: 'Stroke volume rises after a rapid fluid bolus', mechanism: 'Increased preload recruits length-dependent activation', significance: 'key' },
    { sign: 'A transplanted (denervated) heart still increases output with exercise venous return', mechanism: 'Frank–Starling is intrinsic to the myocardium', significance: 'key' },
    { sign: 'Right and left ventricular outputs stay matched beat to beat', mechanism: 'Any excess delivered to one ventricle stretches the other and is ejected', significance: 'key' },
    { sign: 'Heart rate rises when the right atrium is distended by volume loading', mechanism: 'Bainbridge reflex plus direct SA nodal stretch', significance: 'supportive' },
    { sign: 'Cardiac output is preserved despite arterial pressure of 150 mmHg', mechanism: 'Afterload-induced rise in ESV increases EDV, and Starling compensates', significance: 'supportive' },
    { sign: 'Function curve depressed and shifted right in heart failure', mechanism: 'Reduced contractility — less stroke work at every filling pressure', significance: 'key' },
  ],

  investigations: [
    { clue: 'End-diastolic volume or right atrial pressure on the x axis', meaning: 'Preload (filling), the independent variable of the Starling curve' },
    { clue: 'Aortic or arterial pressure opposing ejection', meaning: 'Afterload' },
    { clue: 'Increased stroke work at the same filling pressure', meaning: 'Increased contractility — a different (higher) curve' },
    { clue: 'Increased stroke volume with no change of curve', meaning: 'Pure preload effect (Frank–Starling)' },
    { clue: 'Reflex tachycardia from atrial and great-vein stretch receptors', meaning: 'Bainbridge reflex' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'It is the reason venous return, not the heart, usually sets cardiac output — so in shock a fluid challenge raises output by moving the patient along the curve, while an inotrope moves them onto a higher one. Curve reading and clinical use: [[frank-starling-cardiac-function]]; loading conditions in full: [[hemodynamics-preload-afterload-cardiac-output]].' },
    { logic: 'Limits of the law', detail: 'A failing, dilated ventricle sits on a flat depressed curve, so further filling adds congestion rather than output — the rationale for diuretics and afterload reduction. The filling phases that set preload are in [[ghp-cardiac-cycle-pump]], and the rate response that accompanies it in [[ghp-conduction-system-autonomic-control]].' },
  ],

  mnemonics: [
    { hook: 'Stretch → Strength: the heart pumps what it gets', expansion: ['Preload moves you ALONG the curve', 'Contractility moves you ONTO a new curve', 'Afterload pushes you back down it'] },
    { hook: 'BAINbridge = Blood ARRIVING In atrium → Nerve reflex → faster rate', expansion: ['Atrial and great-vein stretch receptors', 'Vagal afferents to medulla, sympathetic efferents out', 'Plus direct SA-node stretch of 10–15%'] },
  ],

  traps: [
    {
      questionCategory: 'Preload versus contractility',
      wrongInstinct: 'Any increase in stroke volume means the heart has become more contractile',
      rightAnswer: 'If filling rose and the ventricular function curve is unchanged, the extra stroke volume is Frank–Starling; contractility changes only when stroke work rises at the SAME filling pressure',
      why: 'Along the curve = preload; onto a new curve = contractility.',
    },
    {
      questionCategory: 'Descending limb thinking',
      wrongInstinct: 'Over-filling a normal ventricle drops force by pulling sarcomeres past optimal overlap, as in skeletal muscle',
      rightAnswer: 'Cardiac muscle is far stiffer (titin), so in vivo it stays on the ascending limb; failure lowers the whole curve rather than pushing the heart over a descending limb',
      why: 'Congestion in failure reflects a depressed, flattened curve — not sarcomere overstretch.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A heart-transplant recipient, whose heart is denervated, increases cardiac output during exercise. Which mechanism is primarily responsible early on?',
      options: [
        { id: 'a', text: 'Increased vagal withdrawal at the SA node' },
        { id: 'b', text: 'The Bainbridge reflex' },
        { id: 'c', text: 'The Frank–Starling mechanism responding to increased venous return' },
        { id: 'd', text: 'Direct sympathetic stimulation of ventricular contractility' },
      ],
      answerId: 'c',
      explanation: 'Frank–Starling is intrinsic to the myocardium and needs no innervation: exercise raises venous return, which stretches the ventricle and increases stroke volume. The reflex and neural options (a, b, d) all require intact cardiac nerves; circulating catecholamines contribute later.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which observation indicates a genuine increase in contractility rather than a Frank–Starling effect?',
      options: [
        { id: 'a', text: 'Stroke volume rises after a 500 mL fluid bolus' },
        { id: 'b', text: 'Stroke work increases at an unchanged right atrial pressure' },
        { id: 'c', text: 'End-diastolic volume increases with slower heart rate' },
        { id: 'd', text: 'Stroke volume falls when aortic pressure is raised' },
      ],
      answerId: 'b',
      explanation: 'Contractility is defined as performance independent of loading: more stroke work at the same filling pressure means the ventricular function curve itself has shifted up. Options a and c are preload effects along the existing curve, and d is an afterload effect.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'The molecular explanation for greater force after diastolic stretch of cardiac muscle is best described as:',
      options: [
        { id: 'a', text: 'A larger calcium transient released from the sarcoplasmic reticulum' },
        { id: 'b', text: 'Increased sensitivity of troponin C to calcium, together with improved filament overlap' },
        { id: 'c', text: 'Recruitment of additional motor units' },
        { id: 'd', text: 'Prolongation of the action potential plateau' },
      ],
      answerId: 'b',
      explanation: 'Stretch causes length-dependent activation: troponin C becomes more calcium-sensitive (aided by reduced lattice spacing and titin strain) and overlap approaches optimum, so the same calcium transient produces more force. The heart cannot recruit motor units (c) — it is a syncytium contracting all-or-none.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Ventricular function (Frank–Starling) curves', svg: FRANK_STARLING, caption: 'Stroke work rises with filling pressure. Sympathetic drive shifts the curve up and left; failure depresses and flattens it, so filling adds congestion rather than output.' },
  ],
};

export default ghpFrankStarlingMechanism;
