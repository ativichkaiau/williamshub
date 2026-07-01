import type { Lecture } from '../../lib/types';
import { HEART_VALVES_AUSCULTATION } from '../../lib/figures';

export const heartValvesCoronarySupply: Lecture = {
  id: 'heart-valves-coronary-supply',
  title: 'Heart Valves & Coronary Supply',
  system: 'cardiovascular',
  source: 'L9 — Mediastinum & Heart',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L9 Mediastinum & Heart' },
    { kind: 'disease', label: 'Valves & coronaries' },
    { kind: 'mechanism', label: 'Auscultation & blood supply' },
    { kind: 'exam', label: 'Coronary territories' },
  ],

  highYield: [
    '**Four valves**: **atrioventricular** — right = **tricuspid (3 cusps)**, left = **mitral/bicuspid (2 cusps)**; and **semilunar** — **pulmonary** and **aortic** (3 cusps each). AV valves are anchored by **chordae tendineae + papillary muscles** (prevent prolapse in systole); a fibrous **cardiac skeleton** supports all four and electrically insulates atria from ventricles.',
    '**Auscultation points (downstream of each valve): Aortic = right 2nd intercostal space, Pulmonary = left 2nd ICS, Tricuspid = left lower sternal border, Mitral = left 5th ICS midclavicular (apex)** ("**A**ll **P**hysicians **T**ake **M**oney").',
    'The **coronary arteries arise from the aortic sinuses**. The **right coronary artery (RCA)** gives the **right marginal** branch and (in ~85%, "right-dominant") the **posterior descending artery (PDA)**; it supplies the **SA node (~60%) and AV node (~90%)** → RCA occlusion → bradyarrhythmias/inferior MI.',
    'The **left coronary artery** divides into the **left anterior descending (LAD)** — anterior interventricular groove, supplying the anterior wall + anterior 2/3 of the septum (the "widow-maker") — and the **left circumflex (LCx)** in the coronary sulcus supplying the lateral/posterior left ventricle.',
    '**Venous drainage**: most cardiac veins (great, middle, small cardiac veins) drain into the **coronary sinus → right atrium**. **Autonomic supply**: **sympathetic ↑ rate/contractility** (and dilates coronaries via demand); **vagal (parasympathetic) ↓ rate**; cardiac ischemic pain refers to **T1–T4 dermatomes** (chest/left arm/jaw).',
  ],

  mechanism: {
    title: 'Listen downstream of each valve; match coronary artery to territory',
    steps: [
      { id: 's1', label: 'Tricuspid/mitral (AV) + pulmonary/aortic (semilunar)', emphasis: 'key' },
      { id: 's2', label: 'Auscultate A-P-T-M downstream of each valve' },
      { id: 's3', label: 'RCA → inferior wall + SA/AV nodes; LAD → anterior/septum' },
      { id: 's4', label: 'Cardiac pain refers to T1–T4 (chest/arm/jaw)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Inferior MI with bradycardia/heart block', mechanism: 'RCA supplies the inferior wall + AV node', significance: 'key' },
    { sign: 'Anterior MI ("widow-maker")', mechanism: 'LAD occlusion (anterior wall + septum)', significance: 'key' },
    { sign: 'Apex murmur best heard at the left 5th ICS midclavicular line', mechanism: 'Mitral valve auscultation point', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG territory (inferior II/III/aVF vs anterior V1–V4)', meaning: 'RCA vs LAD' },
    { clue: 'Coronary angiography', meaning: 'Culprit vessel' },
  ],

  treatment: [
    { logic: 'Reperfuse the occluded coronary (PCI)', detail: 'Territory predicts complications (e.g. RCA → AV block).' },
  ],

  mnemonics: [
    { hook: 'Auscultation A-P-T-M: "All Physicians Take Money" (Aortic, Pulmonary, Tricuspid, Mitral)', expansion: ['Listen downstream of each valve'] },
    { hook: 'RCA → inferior wall + SA/AV nodes; LAD → anterior wall + septum', expansion: ['LCx → lateral LV'] },
  ],

  traps: [
    {
      questionCategory: 'Where valves are best auscultated',
      wrongInstinct: 'Each valve is heard directly over its anatomical location',
      rightAnswer: 'Valves are heard DOWNSTREAM in the direction of blood flow — e.g. the aortic valve is best heard at the right 2nd intercostal space, not over the valve itself',
      why: 'Sound is carried in the direction of blood flow, so the surface listening points differ from the valve positions.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient has an inferior MI (ST elevation in II, III, aVF) complicated by bradycardia and AV block. Which coronary artery is most likely occluded?',
      options: [
        { id: 'a', text: 'Left anterior descending (LAD)' },
        { id: 'b', text: 'Right coronary artery (RCA)' },
        { id: 'c', text: 'Left circumflex (LCx)' },
        { id: 'd', text: 'Left main coronary artery' },
      ],
      answerId: 'b',
      explanation: 'The RCA supplies the inferior wall and, in most people, the SA and AV nodes; its occlusion causes an inferior MI with bradyarrhythmias/AV block.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Valve auscultation points', svg: HEART_VALVES_AUSCULTATION, caption: 'A-P-T-M: aortic (R 2nd ICS), pulmonary (L 2nd ICS), tricuspid (L lower sternal border), mitral (apex).' },
  ],
};

export default heartValvesCoronarySupply;
