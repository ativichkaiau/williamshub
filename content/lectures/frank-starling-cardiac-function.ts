import type { Lecture } from '../../lib/types';
import { FRANK_STARLING } from '../../lib/figures';

export const frankStarlingCardiacFunction: Lecture = {
  id: 'frank-starling-cardiac-function',
  title: 'The Frank–Starling Mechanism',
  system: 'cardiovascular',
  source: 'L10 — Cardiac Cycle & Hemodynamics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L10 Cardiac Cycle' },
    { kind: 'mechanism', label: 'Length–tension' },
    { kind: 'exam', label: 'Preload & contractility' },
  ],

  highYield: [
    '**The Frank–Starling mechanism: within limits, the more the ventricle is filled (the greater the end-diastolic volume/PRELOAD), the more forcefully it contracts and the greater the stroke volume.** "The heart pumps what it receives" — an intrinsic property that needs no nerves or hormones.',
    '**The mechanism is the length–tension relationship of cardiac muscle: increased filling stretches the sarcomeres toward their OPTIMAL overlap of actin and myosin (and increases myofilament Ca²⁺ sensitivity), generating greater force.** This is why increased venous return automatically increases the force of the next contraction.',
    '**A vital consequence: the Frank–Starling mechanism keeps the outputs of the two ventricles EQUAL.** If venous return to the right heart rises, the right ventricle pumps more into the lungs; the increased pulmonary return then stretches and boosts the left ventricle — automatically matching left and right output beat to beat ([[systemic-pulmonary-circulation]]).',
    '**Cardiac function (Starling) curves plot stroke volume/cardiac output against preload. Increased CONTRACTILITY (sympathetic stimulation, inotropes) shifts the whole curve UP and left (more output at any preload); decreased contractility (heart failure, β-blockers) shifts it DOWN.** So preload moves you ALONG a curve, while contractility moves you to a DIFFERENT curve.',
    '**Clinically this underlies the failing heart: a poorly contractile ventricle sits on a low, flat curve, so it needs a high filling pressure to eke out adequate output — producing congestion (pulmonary/systemic oedema).** Preload, afterload and contractility together determine stroke volume ([[hemodynamics-preload-afterload-cardiac-output]]).',
  ],

  mechanism: {
    title: 'More filling (preload) → more stretch → more force; contractility shifts the curve',
    steps: [
      { id: 's1', label: '↑End-diastolic volume (preload) → ↑force → ↑stroke volume', emphasis: 'key' },
      { id: 's2', label: 'Basis = length–tension (optimal actin–myosin overlap + Ca²⁺ sensitivity)', emphasis: 'key' },
      { id: 's3', label: 'Automatically matches right and left ventricular outputs', emphasis: 'key' },
      { id: 's4', label: 'Preload = move ALONG a curve; contractility = shift to a DIFFERENT curve' },
      { id: 's5', label: 'Failing heart: low flat curve → needs high filling → congestion', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Stroke volume rising as end-diastolic volume rises', mechanism: 'Frank–Starling (preload → force)', significance: 'key' },
    { sign: 'Right and left cardiac outputs staying equal', mechanism: 'Starling mechanism auto-matching the ventricles', significance: 'key' },
    { sign: 'The whole Starling curve shifting up with sympathetic stimulation', mechanism: 'Increased contractility (inotropy)', significance: 'key' },
    { sign: 'A low, flat function curve needing high filling pressure', mechanism: 'Heart failure (reduced contractility) → congestion', significance: 'key' },
    { sign: 'Increased force after increased venous return', mechanism: 'Intrinsic length–tension response', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The relationship the Frank–Starling mechanism describes', meaning: 'Preload (end-diastolic stretch) vs force/stroke volume' },
    { clue: 'The muscle property underlying it', meaning: 'The length–tension relationship (optimal actin–myosin overlap)' },
    { clue: 'What moves you ALONG a Starling curve vs to a NEW curve', meaning: 'Preload (along) vs contractility (new curve)' },
    { clue: 'Why the two ventricles keep equal output', meaning: 'The Frank–Starling mechanism auto-matches them' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Frank–Starling is one of the three determinants of stroke volume with afterload and contractility ([[hemodynamics-preload-afterload-cardiac-output]]); it keeps the two circuits of [[systemic-pulmonary-circulation]] balanced and explains the congestion of heart failure (detailed in HCVS-2). Contractility is tuned by the sympathetic drive of [[blood-pressure-baroreceptor-reflex]]. The curve concept is central to managing preload and inotropy clinically.' },
  ],

  mnemonics: [
    { hook: '"The heart pumps what it receives" (more in → more out)', expansion: ['Preload → stretch → force', 'Auto-matches right & left ventricles'] },
    { hook: 'Curves: "Preload = along the curve; Contractility = a new curve"', expansion: ['Inotropes/sympathetic shift up', 'Heart failure/β-blockers shift down'] },
  ],

  traps: [
    {
      questionCategory: 'Preload vs contractility on the Starling curve',
      wrongInstinct: 'Increasing preload and increasing contractility have the same effect on the heart',
      rightAnswer: 'Increasing PRELOAD moves the heart ALONG its existing Starling curve (more filling → more force), whereas increasing CONTRACTILITY shifts the ENTIRE curve upward (more force at ANY given preload) — they are distinct interventions',
      why: 'Conflating the two obscures how inotropes (contractility, new curve) differ from fluids (preload, same curve) in managing cardiac output — a central concept in heart-failure and shock physiology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The Frank–Starling mechanism states that, within physiological limits, an increase in ventricular end-diastolic volume (preload) causes:',
      options: [
        { id: 'a', text: 'A decrease in stroke volume' },
        { id: 'b', text: 'An increase in the force of contraction and stroke volume' },
        { id: 'c', text: 'No change in output' },
        { id: 'd', text: 'A fall in heart rate' },
      ],
      answerId: 'b',
      explanation: 'Greater end-diastolic filling stretches the cardiac sarcomeres toward optimal actin–myosin overlap (and raises calcium sensitivity), increasing the force of contraction and stroke volume — an intrinsic property that also keeps the two ventricles\' outputs matched.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'On a cardiac function (Starling) curve, increasing contractility (e.g. sympathetic stimulation) is represented by:',
      options: [
        { id: 'a', text: 'Movement rightward along the same curve' },
        { id: 'b', text: 'An upward shift of the entire curve (greater stroke volume at any preload)' },
        { id: 'c', text: 'A downward shift of the curve' },
        { id: 'd', text: 'No change to the curve' },
      ],
      answerId: 'b',
      explanation: 'Preload changes move the heart along a given curve, but increasing contractility shifts the whole curve upward so that more stroke volume is produced at any given preload; reduced contractility (heart failure) shifts it downward.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'The Frank–Starling mechanism', svg: FRANK_STARLING, caption: 'Preload vs stroke volume, and how changes in contractility shift the whole cardiac function curve.' },
  ],
};

export default frankStarlingCardiacFunction;
