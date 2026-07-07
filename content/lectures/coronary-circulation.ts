import type { Lecture } from '../../lib/types';
import { CORONARY_ARTERIES } from '../../lib/figures';

export const coronaryCirculation: Lecture = {
  id: 'coronary-circulation',
  title: 'Coronary Circulation',
  system: 'cardiovascular',
  source: 'L1 — Overview of the Cardiovascular System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 CVS Overview' },
    { kind: 'mechanism', label: 'Coronary anatomy' },
    { kind: 'exam', label: 'Diastolic perfusion' },
  ],

  highYield: [
    '**The heart is supplied by two coronary arteries arising from the aortic sinuses just above the aortic valve.** The **LEFT coronary artery** divides into the **left anterior descending (LAD)** and the **circumflex (LCx)**; the **RIGHT coronary artery (RCA)** runs in the right AV groove. Knowing which artery supplies which region predicts the site of a myocardial infarction.',
    'Territories: the LAD supplies the anterior left ventricle, apex and anterior two-thirds of the interventricular septum (the "widowmaker" — the commonest infarct); the circumflex supplies the lateral/posterior LV; the RCA supplies the right ventricle, the inferior LV, and — importantly — the SA node (~60%) and AV node (~90%).',
    '**"Dominance" refers to which artery gives off the posterior descending artery (PDA): ~85% of people are RIGHT-dominant (PDA from the RCA).** Because the RCA feeds the conduction nodes, an **inferior (RCA) infarct classically causes bradycardia and AV block**, whereas an anterior (LAD) infarct threatens a large mass of pumping myocardium.',
    '**The coronary arteries are functional END-arteries with limited anastomoses, so acute occlusion causes infarction of the downstream territory.** Coronary blood flow is tightly matched to myocardial oxygen demand (the heart extracts most of the oxygen it is offered at rest), so increased demand must be met by increased FLOW (vasodilation), not more extraction.',
    '**A defining feature: the left ventricle is perfused almost entirely during DIASTOLE, because systolic contraction compresses the intramural coronary vessels.** This is why **tachycardia (which shortens diastole) and a low diastolic blood pressure reduce coronary perfusion** — key to understanding angina. Venous blood drains via the coronary sinus into the right atrium.',
  ],

  mechanism: {
    title: 'LCA (LAD/LCx) + RCA territories; RCA feeds nodes; LV perfused in diastole',
    steps: [
      { id: 's1', label: 'Two coronaries from the aortic sinuses (LCA → LAD + LCx; RCA)', emphasis: 'key' },
      { id: 's2', label: 'LAD: anterior LV/apex/septum ("widowmaker"); LCx: lateral/posterior', emphasis: 'key' },
      { id: 's3', label: 'RCA: RV, inferior LV, SA node (~60%) + AV node (~90%)', emphasis: 'key' },
      { id: 's4', label: 'Dominance = who gives the PDA (~85% right dominant)' },
      { id: 's5', label: 'LV perfused in DIASTOLE; tachycardia/low DBP → ischaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Anterior MI with a large territory at risk', mechanism: 'LAD occlusion (anterior LV, apex, septum)', significance: 'key' },
    { sign: 'Inferior MI with bradycardia/AV block', mechanism: 'RCA occlusion (supplies SA and AV nodes)', significance: 'key' },
    { sign: 'Angina worsened by tachycardia', mechanism: 'Shortened diastole reduces coronary perfusion time', significance: 'key' },
    { sign: 'Coronary sinus draining into the right atrium', mechanism: 'Cardiac venous return', significance: 'supportive' },
    { sign: 'Right-dominant circulation in ~85%', mechanism: 'RCA gives the posterior descending artery', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The artery supplying the anterior LV, apex and anterior septum', meaning: 'Left anterior descending (LAD)' },
    { clue: 'The artery supplying the SA and AV nodes in most people', meaning: 'Right coronary artery (RCA)' },
    { clue: 'The phase of the cardiac cycle when the LV is perfused', meaning: 'Diastole' },
    { clue: 'The meaning of coronary "dominance"', meaning: 'Which artery gives the posterior descending artery' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Coronary anatomy predicts infarct location and complications (anterior LAD vs inferior RCA/AV block) and explains why diastolic time matters — the basis of angina and of the ischaemia detailed in HCVS-2. It complements the chamber/valve anatomy of [[heart-anatomy-chambers-valves]] and the two-circuit overview of [[systemic-pulmonary-circulation]]; diastolic perfusion links to the cardiac cycle ([[cardiac-cycle-heart-sounds]]).' },
  ],

  mnemonics: [
    { hook: 'Territories: "LAD = anterior (widowmaker); LCx = lateral; RCA = inferior + nodes"', expansion: ['RCA → SA/AV nodes → inferior MI bradycardia', 'Dominance = who gives PDA'] },
    { hook: 'LV perfused in "Diastole" (systole squeezes the vessels)', expansion: ['Tachycardia shortens diastole → ischaemia', 'Low diastolic BP → less perfusion'] },
  ],

  traps: [
    {
      questionCategory: 'Timing of coronary perfusion',
      wrongInstinct: 'The heart muscle is perfused during systole when pressure is highest',
      rightAnswer: 'The LEFT ventricle is perfused almost entirely during DIASTOLE — systolic contraction compresses the intramural coronary vessels — which is why tachycardia (short diastole) and low diastolic pressure reduce coronary blood flow',
      why: 'Intuiting that high systolic pressure drives coronary flow is backwards for the LV; recognising diastolic perfusion explains angina physiology and why heart rate and diastolic pressure matter clinically.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An inferior myocardial infarction complicated by bradycardia and AV block most likely results from occlusion of the:',
      options: [
        { id: 'a', text: 'Left anterior descending artery' },
        { id: 'b', text: 'Right coronary artery' },
        { id: 'c', text: 'Circumflex artery' },
        { id: 'd', text: 'Left main coronary artery' },
      ],
      answerId: 'b',
      explanation: 'The right coronary artery supplies the inferior left ventricle and, in most people, both the SA and AV nodes; its occlusion causes an inferior MI often accompanied by bradyarrhythmias and AV block.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Blood flow to the left ventricular myocardium occurs predominantly during diastole because:',
      options: [
        { id: 'a', text: 'Aortic pressure is highest in diastole' },
        { id: 'b', text: 'Systolic contraction compresses the intramural coronary vessels' },
        { id: 'c', text: 'The coronary arteries close during diastole' },
        { id: 'd', text: 'Oxygen demand is lowest in systole' },
      ],
      answerId: 'b',
      explanation: 'During systole the contracting left ventricle compresses the coronary vessels running through its wall, so most left-ventricular perfusion occurs in diastole. Tachycardia and low diastolic pressure therefore reduce coronary blood flow.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Coronary circulation', svg: CORONARY_ARTERIES, caption: 'LCA (LAD/circumflex) and RCA territories, nodal supply, dominance, and diastolic perfusion.' },
  ],
};

export default coronaryCirculation;
