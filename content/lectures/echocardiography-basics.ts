import type { Lecture } from '../../lib/types';

export const echocardiographyBasics: Lecture = {
  id: 'echocardiography-basics',
  title: 'Echocardiography: Basics',
  system: 'cardiovascular',
  source: 'L9 — Echocardiography & Chest X-ray',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L9 Echo & CXR' },
    { kind: 'mechanism', label: 'Ultrasound imaging' },
    { kind: 'exam', label: 'EF · modes' },
  ],

  highYield: [
    '**Echocardiography uses ultrasound to image the heart in real time — non-invasive, no radiation.** It shows **chamber size, wall thickness and motion, valve structure/function, pericardium, and pump function**, making it the workhorse cardiac imaging test.',
    '**Modes:** **M-mode** (a single line over time — precise chamber/wall measurements and timing); **2-D (B-mode)** (real-time cross-sectional anatomy); **Doppler** (blood-flow velocity and direction — colour Doppler maps flow, spectral Doppler quantifies gradients and regurgitation).',
    '**Standard views** are obtained from acoustic "windows" — **parasternal (long- and short-axis), apical (4-chamber), and subcostal** — each showing different chambers/valves. Transthoracic echo (TTE) is standard; transoesophageal (TEE) gives closer views (e.g. of the left atrium, valves, endocarditis).',
    '**Ejection fraction (EF) = (stroke volume ÷ end-diastolic volume) — the key measure of systolic function.** **Normal EF ≈ 55–70%.** A **reduced EF (< ~40%) = systolic (HFrEF) heart failure**; a **preserved EF with heart failure = HFpEF** (a diastolic/filling problem). Echo also assesses **regional wall-motion abnormalities** (marking prior MI territories).',
    '**Doppler quantifies valve disease:** high-velocity jets across a **stenotic** valve give the pressure gradient; **colour-flow regurgitant jets** grade leakage. Echo also detects **pericardial effusion/tamponade, vegetations (endocarditis), and thrombus** — correlating structure with the murmurs heard clinically ([[cardiovascular-examination]]).',
  ],

  mechanism: {
    title: 'Ultrasound → structure + flow + function',
    steps: [
      { id: 's1', label: 'Non-invasive, real-time, no radiation', emphasis: 'key' },
      { id: 's2', label: 'Modes: M-mode (timing), 2-D (anatomy), Doppler (flow)', emphasis: 'key' },
      { id: 's3', label: 'Windows: parasternal, apical, subcostal (TTE); TEE closer' },
      { id: 's4', label: 'EF = SV/EDV = systolic function (normal ~55–70%)', emphasis: 'key' },
      { id: 's5', label: 'Doppler grades stenosis/regurgitation; detects effusion/vegetations' },
    ],
  },

  examFindings: [
    { sign: 'Reduced ejection fraction (<40%)', mechanism: 'Systolic dysfunction (HFrEF)', significance: 'key' },
    { sign: 'Heart failure with preserved EF', mechanism: 'HFpEF (diastolic/filling problem)', significance: 'key' },
    { sign: 'Regional wall-motion abnormality', mechanism: 'Prior/current myocardial infarction in that territory', significance: 'key' },
    { sign: 'High-velocity Doppler jet across a valve', mechanism: 'Valvular stenosis (pressure gradient)', significance: 'supportive' },
    { sign: 'Pericardial effusion with diastolic RV collapse', mechanism: 'Cardiac tamponade (echo diagnosis)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Echo measure of systolic function', meaning: 'Ejection fraction (normal ~55–70%)' },
    { clue: 'Echo mode quantifying blood-flow velocity', meaning: 'Doppler' },
    { clue: 'Best non-invasive test to assess valve function/EF', meaning: 'Echocardiography' },
    { clue: 'Echo view showing all four chambers', meaning: 'Apical 4-chamber view' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Echo diagnoses and grades heart failure (EF), valve disease, tamponade, and endocarditis, guiding management. It complements the CXR ([[chest-xray-cardiac]]) and physical exam ([[cardiovascular-examination]]); EF and hemodynamics link to [[hemodynamics-preload-afterload-cardiac-output]].' },
  ],

  mnemonics: [
    { hook: 'Echo modes: "M (motion/timing), 2-D (anatomy), Doppler (flow)"', expansion: ['TTE standard, TEE closer'] },
    { hook: 'EF = SV/EDV; <40% = HFrEF, preserved = HFpEF', expansion: ['Normal ~55–70%'] },
  ],

  traps: [
    {
      questionCategory: 'What ejection fraction measures',
      wrongInstinct: 'A normal ejection fraction rules out heart failure',
      rightAnswer: 'A normal/preserved EF does NOT exclude heart failure — HFpEF has a preserved EF with impaired filling (diastolic dysfunction)',
      why: 'EF measures the systolic emptying fraction; diastolic (filling) heart failure occurs with a normal EF, so echo must also assess diastolic function.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The ejection fraction, the principal echocardiographic measure of systolic function, is calculated as:',
      options: [
        { id: 'a', text: 'End-diastolic volume ÷ stroke volume' },
        { id: 'b', text: 'Stroke volume ÷ end-diastolic volume' },
        { id: 'c', text: 'Cardiac output × heart rate' },
        { id: 'd', text: 'Stroke volume × heart rate' },
      ],
      answerId: 'b',
      explanation: 'EF = stroke volume ÷ end-diastolic volume (normal ~55–70%). A reduced EF indicates systolic dysfunction (HFrEF); heart failure with a preserved EF is HFpEF.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which echocardiographic mode is used to measure the velocity and direction of blood flow (e.g. across a stenotic valve)?',
      options: [
        { id: 'a', text: 'M-mode' },
        { id: 'b', text: '2-D (B-mode)' },
        { id: 'c', text: 'Doppler' },
        { id: 'd', text: 'Plain radiography' },
      ],
      answerId: 'c',
      explanation: 'Doppler echocardiography measures blood-flow velocity/direction, used to quantify valve gradients and regurgitation. M-mode gives timing/measurements; 2-D shows real-time anatomy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default echocardiographyBasics;
