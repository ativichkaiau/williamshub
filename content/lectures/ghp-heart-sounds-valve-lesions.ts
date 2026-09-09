import type { Lecture } from '../../lib/types';
import { HEART_VALVES_AUSCULTATION } from '../../lib/figures';

export const ghpHeartSoundsValveLesions: Lecture = {
  id: 'ghp-heart-sounds-valve-lesions',
  title: 'Heart Sounds and the Four Classic Valve Lesions',
  system: 'cardiovascular',
  source: 'Ch 23 — Heart Valves & Heart Sounds; Valvular & Congenital Defects',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 23 Valves & Heart Sounds' },
    { kind: 'mechanism', label: 'Valve closure and turbulence' },
    { kind: 'exam', label: 'Murmur timing to lesion' },
  ],

  highYield: [
    '**Heart sounds are not valves slapping shut — they are vibrations of taut leaflets, blood columns and chamber walls at the moment of closure.** **S1** marks **AV valve closure** at the start of systole: **low-pitched and longer (~0.14 s)**, because the mitral and tricuspid leaflets are floppier and the attached blood mass is large. **S2** marks **semilunar valve closure** at the end of systole: **higher-pitched and shorter (~0.11 s)**, because the aortic and pulmonary valves are tauter and more elastic and the recoiling blood columns are short. **S2 splits physiologically on inspiration** (A2 before P2) as increased venous return delays pulmonary valve closure.',
    '**Murmurs are turbulence, and turbulence follows velocity — so pitch reports the pressure gradient.** A **large** gradient (aortic stenosis: LV can exceed **300 mmHg** while the aorta holds 100) generates a **high-velocity jet → loud, harsh, high-pitched** murmur with a thrill. A **small** gradient (mitral stenosis: only a few mmHg from LA to LV) generates a **low-velocity flow → soft, low-pitched rumble** best heard with the **bell**. Loudness reflects flow and gradient, **not** severity in a simple way.',
    '**Systolic murmurs.** **Aortic stenosis** — **crescendo–decrescendo (ejection) systolic**, right 2nd intercostal space, **radiating to the carotids**, with a slow-rising low-volume pulse; classic triad **angina, syncope, exertional dyspnoea**. **Mitral regurgitation** — **pansystolic (holosystolic) blowing** murmur at the **apex radiating to the axilla**, often with an **S3**, because the LA is a low-pressure sink open throughout systole so the gradient never disappears.',
    '**Diastolic murmurs.** **Aortic regurgitation** — **early-diastolic decrescendo** at the left sternal edge, heard best **sitting forward in expiration**, with a **wide pulse pressure** and a collapsing (water-hammer) pulse, since diastolic runoff empties the aorta twice over. **Mitral stenosis** — **loud S1**, an **opening snap**, then a **mid-diastolic rumble** with **presystolic accentuation** if sinus rhythm persists, heard at the apex in the **left lateral position** with the bell.',
    '**Match the lesion to the chamber it overloads — this is what most questions are really testing.** **AS = LV pressure overload → concentric hypertrophy** (LV mass can rise from ~300 g toward 500–1000 g). **AR = LV volume overload → eccentric dilatation**. **MR = LA and LV volume overload**. **MS = LA pressure overload**, sparing the LV entirely, then transmitted back to pulmonary congestion, **pulmonary hypertension and RV overload**, with **atrial fibrillation** and stasis-related thrombus.',
    '**Manoeuvres separate lesions that share timing.** **Inspiration** augments right-sided murmurs (**RILE**: Right on Inspiration, Left on Expiration) by increasing right-heart venous return. **Handgrip** raises afterload — it **increases MR and AR** and **decreases the AS and HOCM** murmurs. **Valsalva strain and standing** reduce preload, softening almost every murmur **except HOCM and mitral valve prolapse**, which get louder. Worldwide, the dominant cause of these lesions in young patients remains **rheumatic** valve disease.',
  ],

  mechanism: {
    title: 'From pressure gradient to the sound you hear',
    steps: [
      { id: 's1', label: 'A pressure gradient develops across a valve at a given phase of the cycle', emphasis: 'key' },
      { id: 's2', label: 'Narrow or incompetent orifice → flow velocity rises → turbulence' },
      { id: 's3', label: 'Turbulence vibrates blood, leaflets and chamber walls → audible murmur' },
      { id: 's4', label: 'Timing tells you which valve and which direction: systolic = AS or MR; diastolic = AR or MS', emphasis: 'key' },
      { id: 's5', label: 'Shape follows the gradient over time: ejection gradients peak mid-systole; regurgitant gradients persist, giving pansystolic or decrescendo shapes' },
      { id: 's6', label: 'Chronic load remodels the upstream chamber: pressure load → concentric hypertrophy, volume load → eccentric dilatation', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Ejection systolic murmur at the right second space radiating to the carotids with a slow-rising pulse', mechanism: 'High-velocity jet through a narrowed aortic orifice during ejection', significance: 'key' },
    { sign: 'Pansystolic blowing murmur at the apex radiating to the axilla with a third heart sound', mechanism: 'Mitral regurgitation — a gradient into the low-pressure left atrium throughout systole, with a volume-loaded ventricle filling rapidly', significance: 'key' },
    { sign: 'Early-diastolic decrescendo murmur at the left sternal edge with a wide pulse pressure and collapsing pulse', mechanism: 'Aortic regurgitation — diastolic runoff back into the ventricle empties the aorta', significance: 'key' },
    { sign: 'Loud first sound, opening snap and a low-pitched mid-diastolic rumble at the apex', mechanism: 'Mitral stenosis — a thickened valve held wide open until late, with slow turbulent transmitral flow across a small gradient', significance: 'key' },
    { sign: 'A murmur that becomes louder on inspiration', mechanism: 'Increased right-sided venous return — the lesion is tricuspid or pulmonary', significance: 'supportive' },
    { sign: 'Murmur louder on handgrip', mechanism: 'Increased afterload favours regurgitant flow — mitral or aortic regurgitation rather than aortic stenosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A murmur occupying the whole of systole with no gap at S1', meaning: 'Regurgitation through an AV valve or flow through a ventricular septal defect' },
    { clue: 'A murmur beginning after S1, peaking mid-systole and ending before S2', meaning: 'Outflow obstruction — aortic or pulmonary stenosis, or dynamic obstruction in HOCM' },
    { clue: 'A murmur beginning immediately with S2 and fading through diastole', meaning: 'Aortic (or pulmonary) regurgitation' },
    { clue: 'An opening snap followed by a mid-diastolic rumble', meaning: 'Mitral stenosis; a shorter S2-to-snap interval indicates a higher left atrial pressure and more severe disease' },
    { clue: 'Concentric left ventricular hypertrophy with a normal cavity size on echocardiography', meaning: 'Chronic pressure overload — aortic stenosis or hypertension' },
    { clue: 'A dilated left atrium with atrial fibrillation and a normal-sized left ventricle', meaning: 'Mitral stenosis — the atrium takes the load and the ventricle is spared' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Timing localises the lesion and the loading pattern predicts the chamber that will fail, so a 20-second auscultation forecasts the natural history: **AS** patients die of a pressure-overloaded ventricle and its ischaemia, **MS** patients of pulmonary congestion, atrial fibrillation and embolism. The pressure–time events behind each sound are in [[ghp-cardiac-cycle-pump]]; the pulse-pressure consequences of aortic regurgitation in [[ghp-arterial-pulse-pressure]]; bedside technique in [[heart-sounds-murmurs-auscultation]].' },
    { logic: 'What the physiology says about intervening', detail: 'Pressure-overload lesions are timed by **symptoms plus gradient** because hypertrophy compensates silently until it cannot; volume-overload lesions are timed by **ventricular size and function** because the ventricle dilates before it complains. Rheumatic origin and prevention: [[rheumatic-heart-disease]]. Downstream pulmonary consequences of mitral disease: [[pulmonary-hypertension-cor-pulmonale]]. Remodelling patterns in detail: [[cardiac-hypertrophy-remodeling]].' },
  ],

  mnemonics: [
    { hook: 'S1 = Shutting the Mitral & tricuspid; S2 = Shutting the Aortic & pulmonary', expansion: ['S1 low-pitched and long — start of systole', 'S2 high-pitched and short — end of systole', 'S2 splits on inspiration: A2 before P2'] },
    { hook: 'RILE and the handgrip rule', expansion: ['Right-sided murmurs louder on Inspiration; Left-sided on Expiration', 'Handgrip raises afterload: louder MR and AR, softer AS and HOCM', 'Valsalva or standing softens everything except HOCM and MVP'] },
    { hook: 'Pressure = Concentric, Volume = Dilated', expansion: ['AS and hypertension → concentric hypertrophy', 'AR and MR → eccentric dilatation', 'MS → the left atrium takes the load, the ventricle is spared'] },
  ],

  traps: [
    {
      questionCategory: 'Loudness versus severity',
      wrongInstinct: 'The louder the murmur, the worse the lesion',
      rightAnswer: 'Loudness tracks flow velocity and gradient; a critically stenotic valve with a failing ventricle may generate a quiet murmur because flow across it has collapsed',
      why: 'No flow, no turbulence — softening in a deteriorating patient is an ominous sign, not an improving one.',
    },
    {
      questionCategory: 'Which chamber carries the load',
      wrongInstinct: 'Mitral stenosis overloads the left ventricle because the mitral valve feeds it',
      rightAnswer: 'The left ventricle is protected in mitral stenosis; the left atrium bears the pressure, and the consequences appear in the lungs and then the right ventricle',
      why: 'The obstruction lies upstream of the ventricle, so the ventricle is underfilled rather than overloaded.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why is the second heart sound higher in pitch and shorter in duration than the first?',
      options: [
        { id: 'a', text: 'Aortic pressure is higher than left atrial pressure' },
        { id: 'b', text: 'The semilunar valves and the recoiling arterial blood columns are tauter and more elastic, so they vibrate faster and damp sooner' },
        { id: 'c', text: 'The second sound is generated further from the chest wall' },
        { id: 'd', text: 'The second sound is produced by coronary flow rather than valve closure' },
      ],
      answerId: 'b',
      explanation: 'Pitch depends on the vibrating system, not on the absolute pressure: the taut, elastic semilunar valves and the short elastic blood columns behind them oscillate at higher frequency and settle quickly, giving a short high-pitched sound, while the floppier AV valves with a large attached blood mass vibrate slowly and longer.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient has a mid-diastolic rumbling murmur at the apex preceded by an opening snap, with a loud first heart sound and atrial fibrillation. Which chamber bears the primary haemodynamic load?',
      options: [
        { id: 'a', text: 'The left ventricle, from pressure overload' },
        { id: 'b', text: 'The left ventricle, from volume overload' },
        { id: 'c', text: 'The left atrium, from pressure overload' },
        { id: 'd', text: 'The right ventricle, from volume overload' },
      ],
      answerId: 'c',
      explanation: 'This is mitral stenosis. The obstruction sits between the atrium and the ventricle, so the left atrium faces the raised pressure — dilating, fibrillating and transmitting congestion to the lungs — while the left ventricle is if anything underfilled. Right ventricular strain follows later, and is pressure rather than volume overload.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'A systolic murmur at the apex becomes louder during sustained handgrip. Which lesion does this favour?',
      options: [
        { id: 'a', text: 'Aortic stenosis' },
        { id: 'b', text: 'Mitral regurgitation' },
        { id: 'c', text: 'Hypertrophic obstructive cardiomyopathy' },
        { id: 'd', text: 'Pulmonary stenosis' },
      ],
      answerId: 'b',
      explanation: 'Handgrip raises systemic vascular resistance and therefore afterload, which pushes proportionally more blood back through an incompetent mitral valve, so the murmur intensifies. The same manoeuvre reduces the transaortic gradient in aortic stenosis and enlarges the ventricular cavity in HOCM, softening both, and pulmonary stenosis is a right-sided murmur that responds to inspiration instead.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Aortic stenosis', murmur: 'aortic-stenosis', caption: 'Crescendo–decrescendo ejection murmur between S1 and S2 — the gradient peaks in mid-systole.' },
    { title: 'Mitral regurgitation', murmur: 'mitral-regurgitation', caption: 'Pansystolic plateau: the atrium stays a low-pressure sink throughout systole, so the gradient never falls away.' },
    { title: 'Aortic regurgitation', murmur: 'aortic-regurgitation', caption: 'Early-diastolic decrescendo starting with S2 and fading as the aortic-to-ventricular gradient falls.' },
    { title: 'Mitral stenosis', murmur: 'mitral-stenosis', caption: 'Loud S1, opening snap, then a low-pitched mid-diastolic rumble — a small gradient means low velocity and low pitch.' },
    { title: 'Where to listen', svg: HEART_VALVES_AUSCULTATION, caption: 'Auscultation areas sit downstream of each valve, in the direction the turbulent jet travels.' },
  ],
};

export default ghpHeartSoundsValveLesions;
