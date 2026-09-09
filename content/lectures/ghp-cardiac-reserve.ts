import type { Lecture } from '../../lib/types';

export const ghpCardiacReserve: Lecture = {
  id: 'ghp-cardiac-reserve',
  title: 'Cardiac Reserve',
  system: 'cardiovascular',
  source: 'Ch 22 — Cardiac Failure',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 22 Cardiac Failure' },
    { kind: 'mechanism', label: 'Rate, stroke volume and contractile reserve' },
    { kind: 'exam', label: 'Why symptoms appear on exertion first' },
  ],

  highYield: [
    '**Cardiac reserve = the maximum percentage by which cardiac output can rise above its resting value.** It is a **percentage above rest, not an absolute output**. A normal young adult moves from ~**5 L/min at rest to 20–25 L/min maximally**, a reserve of ~**300–400%**. A trained endurance athlete reaches **30–35 L/min**, a reserve of **500–600%**. In severe cardiac failure the reserve is **near zero** — the patient is already using their maximum output just to sit still.',
    '**Reserve has three components, and disease can take any one of them.** **Heart-rate reserve** (rest ~70 to a maximum of roughly **220 − age**), **stroke-volume reserve** (Frank–Starling recruitment plus a fall in end-systolic volume), and **contractile reserve** (sympathetic stimulation raising the whole ventricular function curve). Multiply them: output can roughly **triple to quadruple** because rate about doubles and stroke volume rises by half or more.',
    '**Symptoms mark the point where reserve is exhausted, which is why exertion unmasks failure first.** A patient with **100% reserve** copes with daily activity but not stairs; with reserve approaching **zero**, breathlessness and fatigue appear **at rest**. This is the physiological content of the NYHA classes — they are a bedside estimate of remaining reserve, not of ejection fraction.',
    '**Reserve is spent silently by compensation.** In compensated failure the sympathetic system and expanded blood volume are already deployed to hold a **normal resting output**. Because those same mechanisms are what a healthy person calls on during exercise, there is nothing left to recruit — **normal at rest, no reserve on demand**. That is the single most useful idea in this topic.',
    '**Graphically, reserve is how far the equilibrium point can travel.** Exercise shifts the **cardiac output curve up** (sympathetic drive) and the **venous return curve up and right** (muscle pump plus venoconstriction raising mean systemic filling pressure), and the intersection slides to a much higher output. A depressed, flattened cardiac curve limits how far that point can move no matter how hard the periphery pushes.',
    '**Measuring it: exercise, not rest.** Symptom-limited exercise testing with **VO₂ max** or the six-minute walk quantifies reserve directly, because oxygen consumption is the product of cardiac output and arteriovenous oxygen difference (Fick). Resting ejection fraction correlates poorly with reserve — patients with the same EF can differ enormously in what they can actually do.',
  ],

  mechanism: {
    title: 'Three reserves stacked — and how failure removes them',
    steps: [
      { id: 's1', label: 'Rest: cardiac output ~5 L/min, sympathetic tone low, most reserve untouched' },
      { id: 's2', label: 'Demand rises: heart-rate reserve recruited toward a maximum of about 220 − age', emphasis: 'key' },
      { id: 's3', label: 'Muscle pump and venoconstriction raise venous return → stroke-volume reserve via Frank–Starling' },
      { id: 's4', label: 'Sympathetic drive lifts the whole function curve → contractile reserve (lower end-systolic volume)', emphasis: 'key' },
      { id: 's5', label: 'Combined effect: output rises 300–400% in a normal adult, 500–600% in an athlete' },
      { id: 's6', label: 'In failure these are pre-spent to hold the resting state → reserve near zero → symptoms on minimal exertion, then at rest', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Maximum cardiac output of 20–25 L/min against a resting 5 L/min in a healthy adult', mechanism: 'Rate, stroke volume and contractile reserve recruited together — about a 300–400% reserve', significance: 'key' },
    { sign: 'An athlete reaching 30–35 L/min with a resting heart rate in the 40s', mechanism: 'Larger ventricular volume and a bigger stroke-volume reserve, giving 500–600%', significance: 'supportive' },
    { sign: 'Normal resting cardiac output but dyspnoea after climbing one flight of stairs', mechanism: 'Compensation has already spent the reserve to maintain the resting state', significance: 'key' },
    { sign: 'Breathlessness and fatigue present at rest', mechanism: 'Reserve has fallen essentially to zero — resting output is already maximal output', significance: 'key' },
    { sign: 'Heart rate rising only to 105/min at peak exercise in a patient on a beta-blocker', mechanism: 'Chronotropic incompetence — the heart-rate component of reserve is pharmacologically removed', significance: 'supportive' },
    { sign: 'Two patients with the same ejection fraction and very different exercise tolerance', mechanism: 'Reserve is a dynamic property; a resting index cannot capture it', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Peak cardiac output expressed as a percentage above the resting value', meaning: 'Cardiac reserve, by definition' },
    { clue: 'VO₂ max on cardiopulmonary exercise testing', meaning: 'The integrated measure of reserve — cardiac output times arteriovenous oxygen difference (Fick)' },
    { clue: 'Failure to reach roughly 85% of the age-predicted maximum heart rate off rate-limiting drugs', meaning: 'Chronotropic incompetence, a lost component of reserve' },
    { clue: 'Symptoms at rest rather than on exertion', meaning: 'Reserve approaching zero — NYHA class IV' },
    { clue: 'Normal resting output with elevated filling pressures', meaning: 'Compensated failure with reserve already consumed' },
    { clue: 'Stroke volume that fails to rise with exercise on echocardiography', meaning: 'Loss of the stroke-volume and contractile components of reserve' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Reserve is the number that predicts how a patient actually **lives**, and it explains why a normal resting examination never excludes heart failure — the deficit only appears under load. The exercise physiology that recruits it is in [[ghp-exercise-muscle-blood-flow]], the curve intersection that limits it in [[ghp-cardiac-output-venous-return-curves]], and the compensations that quietly spend it in [[ghp-cardiac-failure-compensation]].' },
    { logic: 'What restores reserve', detail: 'Anything that lifts the cardiac output curve or lets the periphery push harder: revascularisation, valve repair, rate control of atrial fibrillation to restore the atrial kick, and — counter-intuitively — **beta-blockade**, which sacrifices a little immediate rate response to reverse remodelling and enlarge the curve over months. Supervised exercise training raises reserve largely through peripheral adaptation. Related: [[ghp-cardiac-output-measurement]] for how output is actually quantified, and [[ghp-decompensated-failure-oedema]] for what happens when reserve reaches zero.' },
  ],

  mnemonics: [
    { hook: '3-4-5-6: normal 300–400%, athlete 500–600%, failure 0%', expansion: ['Normal adult: 5 → 20–25 L/min', 'Athlete: 5 → 30–35 L/min', 'Severe failure: resting output is already the maximum'] },
    { hook: 'Reserve = Rate + Stroke volume + Squeeze', expansion: ['Rate reserve capped at about 220 − age', 'Stroke-volume reserve from venous return and Frank–Starling', 'Squeeze (contractile) reserve from sympathetic drive lifting the curve'] },
  ],

  traps: [
    {
      questionCategory: 'Definition of reserve',
      wrongInstinct: 'Cardiac reserve is the maximum cardiac output the heart can achieve',
      rightAnswer: 'It is the maximum percentage increase above the resting output — a percentage, not an absolute figure',
      why: 'A failing patient with a resting output of 5 L/min and a maximum of 5 L/min has a normal resting output and zero reserve.',
    },
    {
      questionCategory: 'Resting measurements versus functional capacity',
      wrongInstinct: 'A normal resting cardiac output or a reassuring ejection fraction rules out significant failure',
      rightAnswer: 'Reserve is only visible under load — exercise testing, not resting haemodynamics, reveals it',
      why: 'Compensation is designed to normalise the resting state; it does so by consuming the reserve.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy 25-year-old has a resting cardiac output of 5 L/min and a maximum of 25 L/min. His cardiac reserve is:',
      options: [
        { id: 'a', text: '25 L/min' },
        { id: 'b', text: '100%' },
        { id: 'c', text: '400%' },
        { id: 'd', text: '500%' },
      ],
      answerId: 'c',
      explanation: 'Reserve is the percentage increase above rest: output rises by 20 L/min over a resting 5 L/min, which is 400%. Option a quotes the maximum output rather than the reserve, and d would require a maximum of 30 L/min, the athlete range.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with compensated cardiac failure has a normal resting cardiac output but becomes dyspnoeic on mild exertion. The best explanation is that:',
      options: [
        { id: 'a', text: 'Resting cardiac output is being maintained by mechanisms that would otherwise provide exercise reserve' },
        { id: 'b', text: 'Pulmonary diffusing capacity is reduced at rest' },
        { id: 'c', text: 'The heart-rate response to exercise is normally the only source of reserve' },
        { id: 'd', text: 'Arteriovenous oxygen difference cannot increase during exercise' },
      ],
      answerId: 'a',
      explanation: 'Sympathetic drive and an expanded blood volume are already fully deployed simply to hold the resting output, so there is nothing left to recruit when demand rises — normal at rest, no reserve on demand. Heart rate is only one of three components (c), and the arteriovenous difference does widen normally in exercise (d).',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Which measurement best quantifies cardiac reserve in clinical practice?',
      options: [
        { id: 'a', text: 'Resting left ventricular ejection fraction on echocardiography' },
        { id: 'b', text: 'Peak oxygen consumption (VO₂ max) on cardiopulmonary exercise testing' },
        { id: 'c', text: 'Resting right atrial pressure' },
        { id: 'd', text: 'Plasma natriuretic peptide concentration at rest' },
      ],
      answerId: 'b',
      explanation: 'By the Fick principle, oxygen consumption equals cardiac output times the arteriovenous oxygen difference, so peak VO₂ under symptom-limited exercise measures the integrated reserve directly. Every other option is a resting index, and compensation is specifically designed to keep resting indices looking acceptable.',
      tests: 'investigation',
    },
  ],
};

export default ghpCardiacReserve;
