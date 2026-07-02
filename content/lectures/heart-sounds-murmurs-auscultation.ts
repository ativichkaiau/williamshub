import type { Lecture } from '../../lib/types';
import { HEART_VALVES_AUSCULTATION } from '../../lib/figures';

export const heartSoundsMurmursAuscultation: Lecture = {
  id: 'heart-sounds-murmurs-auscultation',
  title: 'Heart Sounds & Murmurs',
  system: 'cardiovascular',
  source: 'L13 — Early Clinical Exposure (CVS)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L13 Early Clinical Exposure' },
    { kind: 'mechanism', label: 'Valve closure sounds' },
    { kind: 'exam', label: 'Systolic vs diastolic' },
  ],

  highYield: [
    '**Heart sounds are produced by valve CLOSURE, not opening. S1 ("lub") = closure of the mitral and tricuspid (atrioventricular) valves at the start of systole; S2 ("dub") = closure of the aortic and pulmonary (semilunar) valves at the end of systole.** S1 and S2 bracket systole, so timing anything between them is the key to interpreting murmurs ([[cardiac-cycle-heart-sounds]]).',
    '**S2 normally SPLITS on inspiration** (increased venous return delays pulmonary valve closure) — physiological splitting. Abnormal splitting (wide, fixed — as in an ASD — or paradoxical) is a useful clue. **S3** (early diastole, "ventricular gallop") can be normal in the young but suggests heart failure/volume overload in adults; **S4** (late diastole, "atrial gallop") reflects a stiff ventricle.',
    '**A murmur is turbulent flow; TIME it relative to S1/S2 first. SYSTOLIC murmurs (between S1 and S2): aortic stenosis (ejection, radiates to carotids) and mitral regurgitation (pansystolic, radiates to axilla). DIASTOLIC murmurs (between S2 and S1): aortic regurgitation (early, decrescendo) and mitral stenosis (mid-diastolic rumble with opening snap).**',
    '**The four auscultation areas are downstream of each valve: Aortic = right 2nd intercostal space; Pulmonary = left 2nd; Tricuspid = left lower sternal border; Mitral = apex (5th ICS, midclavicular line) — "APTM."** Left-lateral position accentuates mitral sounds; sitting forward in expiration accentuates aortic regurgitation.',
    '**Dynamic manoeuvres help: increasing preload/afterload (squatting, handgrip) makes most murmurs LOUDER, but reduced venous return (standing, Valsalva) makes HOCM and mitral valve prolapse louder** — a classic distinguishing trick. Grading (1–6, a thrill = ≥4) and radiation localise the lesion. This turns the cardiac cycle into bedside diagnosis ([[cardiovascular-examination]]).',
  ],

  mechanism: {
    title: 'Valve closure = S1/S2; time murmurs to them; APTM areas; manoeuvres',
    steps: [
      { id: 's1', label: 'S1 = mitral/tricuspid closure (start systole); S2 = aortic/pulmonary (end)', emphasis: 'key' },
      { id: 's2', label: 'S2 splits on inspiration (physiological); S3/S4 = gallops', emphasis: 'key' },
      { id: 's3', label: 'Systolic (S1–S2): aortic stenosis, mitral regurg; time it FIRST', emphasis: 'key' },
      { id: 's4', label: 'Diastolic (S2–S1): aortic regurg, mitral stenosis', emphasis: 'key' },
      { id: 's5', label: 'Areas APTM; manoeuvres (standing/Valsalva louder in HOCM/MVP)' },
    ],
  },

  examFindings: [
    { sign: 'S1 and S2 bracketing systole', mechanism: 'Closure of AV then semilunar valves', significance: 'key' },
    { sign: 'Systolic ejection murmur radiating to the carotids', mechanism: 'Aortic stenosis', significance: 'key' },
    { sign: 'Pansystolic murmur radiating to the axilla', mechanism: 'Mitral regurgitation', significance: 'key' },
    { sign: 'Early diastolic decrescendo murmur (sit forward)', mechanism: 'Aortic regurgitation', significance: 'supportive' },
    { sign: 'Murmur louder on standing/Valsalva', mechanism: 'HOCM or mitral valve prolapse (reduced preload)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The event producing S1 and S2', meaning: 'Closure of the AV (S1) then semilunar (S2) valves' },
    { clue: 'The auscultation areas mnemonic', meaning: 'APTM — Aortic, Pulmonary, Tricuspid, Mitral' },
    { clue: 'How to classify a murmur first', meaning: 'Time it relative to S1/S2 (systolic vs diastolic)' },
    { clue: 'The murmurs that get louder with standing/Valsalva', meaning: 'HOCM and mitral valve prolapse' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Timing and location turn the cardiac cycle ([[cardiac-cycle-heart-sounds]]) into diagnosis — the core skill of the cardiovascular examination ([[cardiovascular-examination]]). S3/S4 and murmur character point to specific valve lesions and heart failure (detailed in HCVS-2); manoeuvres exploit the preload/contractility physiology of [[frank-starling-cardiac-function]] and [[hemodynamics-preload-afterload-cardiac-output]].' },
  ],

  mnemonics: [
    { hook: 'S1/S2 = "valves CLOSING": S1 mitral/tricuspid, S2 aortic/pulmonary', expansion: ['S1–S2 = systole', 'S2 splits on inspiration'] },
    { hook: 'Areas "APTM": Aortic (R2), Pulmonary (L2), Tricuspid (LLSB), Mitral (apex)', expansion: ['Systolic = AS/MR', 'Diastolic = AR/MS', 'Standing louder = HOCM/MVP'] },
  ],

  traps: [
    {
      questionCategory: 'What produces the heart sounds',
      wrongInstinct: 'The heart sounds are produced when the valves open',
      rightAnswer: 'Heart sounds are produced by valve CLOSURE (and the associated flow deceleration/vibration), not opening — S1 from AV-valve closure and S2 from semilunar-valve closure; valve opening is normally silent',
      why: 'Attributing the sounds to opening reverses the physiology and mistimes the cycle; knowing S1/S2 mark closure is what lets you place a murmur correctly in systole or diastole.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The first heart sound (S1) is produced by:',
      options: [
        { id: 'a', text: 'Opening of the aortic and pulmonary valves' },
        { id: 'b', text: 'Closure of the mitral and tricuspid (atrioventricular) valves' },
        { id: 'c', text: 'Closure of the aortic and pulmonary valves' },
        { id: 'd', text: 'Atrial contraction' },
      ],
      answerId: 'b',
      explanation: 'S1 marks closure of the atrioventricular (mitral and tricuspid) valves at the onset of ventricular systole; S2 marks closure of the semilunar (aortic and pulmonary) valves at its end. Valve opening is normally silent.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A harsh ejection systolic murmur best heard at the right second intercostal space and radiating to the carotids suggests:',
      options: [
        { id: 'a', text: 'Mitral stenosis' },
        { id: 'b', text: 'Aortic stenosis' },
        { id: 'c', text: 'Aortic regurgitation' },
        { id: 'd', text: 'A normal finding' },
      ],
      answerId: 'b',
      explanation: 'Aortic stenosis produces an ejection systolic murmur loudest at the aortic area (right 2nd ICS) that radiates to the carotids. Timing it between S1 and S2 confirms it is systolic, and the location/radiation identify the valve.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Cardiac auscultation areas', svg: HEART_VALVES_AUSCULTATION, caption: 'The APTM auscultation areas and how S1/S2 timing classifies murmurs as systolic or diastolic.' },
  ],
};

export default heartSoundsMurmursAuscultation;
