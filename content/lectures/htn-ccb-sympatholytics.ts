import type { Lecture } from '../../lib/types';

export const htnCcbSympatholytics: Lecture = {
  id: 'htn-ccb-sympatholytics',
  title: 'CCBs, Sympatholytics & Vasodilators',
  system: 'cardiovascular',
  source: 'L18 — Antihypertensive Drugs',
  updated: '2026-06-30',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L18 Antihypertensive Drugs' },
    { kind: 'disease', label: 'Hypertension therapy' },
    { kind: 'mechanism', label: '↓ PVR / ↓ CO' },
    { kind: 'treatment', label: 'CCB / BB / vasodilators' },
  ],

  highYield: [
    '**DHP-CCB** (amlodipine, nifedipine): vascular Ca²⁺ block → ↓PVR, reflex ↑HR; AE **ankle/pedal edema, flushing**.',
    '**Non-DHP-CCB** (verapamil, diltiazem): ↓PVR + ↓HR/contractility; AE **bradycardia, AV block, constipation**.',
    '**β-blockers** (bisoprolol, carvedilol): ↓HR/CO, ↓renin; HTN with **angina/post-MI/HF**; AE bradycardia, bronchospasm, rebound on withdrawal.',
    '**α1-blockers** (prazosin, doxazosin): ↓PVR; resistant HTN + BPH; AE **first-dose postural hypotension**.',
    '**Vasodilators** (hydralazine, minoxidil, nitroprusside) for severe HTN; **sympatholytics** (clonidine = rebound HTN; **methyldopa = pregnancy**).',
  ],

  mechanism: {
    title: '↓ PVR (CCB/α/vasodilator) + ↓ CO (β-block)',
    steps: [
      { id: 's1', label: 'DHP-CCB / α-blocker / vasodilator → ↓PVR', emphasis: 'key' },
      { id: 's2', label: 'β-blocker / non-DHP-CCB → ↓HR/CO' },
      { id: 's3', label: 'Central sympatholytic → ↓sympathetic outflow' },
    ],
  },

  examFindings: [
    { sign: 'DHP-CCB: bilateral pedal edema', mechanism: 'Precapillary arteriolar vasodilation (not fluid overload)', significance: 'key' },
    { sign: 'α-blocker: first-dose syncope/postural hypotension', mechanism: 'Abrupt venodilation', significance: 'key' },
    { sign: 'Hydralazine: lupus-like syndrome', mechanism: 'Drug-induced lupus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'HR / BP; ECG (AV conduction with non-DHP)', meaning: 'Bradycardia / AV block' },
    { clue: 'Watch reflex tachycardia (vasodilators)', meaning: 'Often paired with a β-blocker' },
  ],

  treatment: [
    { logic: 'DHP-CCB (C) first-line; β-blocker for compelling indications', detail: 'Angina, post-MI, HF.' },
    { logic: 'Methyldopa / labetalol in pregnancy; vasodilators for severe HTN', detail: 'Avoid ACEi/ARB in pregnancy.' },
  ],

  mnemonics: [
    { hook: '“-dipine” (DHP) = vessels (edema); verapamil/diltiazem = heart (↓HR)', expansion: ['DHP reflex tachycardia; non-DHP slows the node'] },
    { hook: 'Pregnancy HTN → methyldopa / labetalol', expansion: ['Not ACEi/ARB'] },
  ],

  traps: [
    {
      questionCategory: 'DHP-CCB side effect',
      wrongInstinct: 'Ankle edema from a DHP-CCB means heart failure → give a diuretic',
      rightAnswer: 'DHP-CCB pedal edema is precapillary vasodilation, not volume overload — diuretics don’t help; reduce dose / add an ACEi',
      why: 'Dihydropyridine edema is local (arteriolar dilation raises capillary pressure), not fluid overload — diuretics are ineffective.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on amlodipine develops bilateral ankle edema with no other signs of heart failure. Best explanation?',
      options: [
        { id: 'a', text: 'Volume overload needing a diuretic' },
        { id: 'b', text: 'Precapillary vasodilation (a DHP-CCB class effect)' },
        { id: 'c', text: 'Nephrotic syndrome' },
        { id: 'd', text: 'Deep vein thrombosis' },
      ],
      answerId: 'b',
      explanation: 'Dihydropyridine CCBs dilate precapillary arterioles, raising capillary hydrostatic pressure and causing peripheral edema — not fluid overload, so diuretics are ineffective.',
      tests: 'exam',
    },
  ],
};

export default htnCcbSympatholytics;
