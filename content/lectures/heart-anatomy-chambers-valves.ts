import type { Lecture } from '../../lib/types';
import { HEART_ANATOMY } from '../../lib/figures';

export const heartAnatomyChambersValves: Lecture = {
  id: 'heart-anatomy-chambers-valves',
  title: 'Heart Anatomy: Chambers, Valves & Wall',
  system: 'cardiovascular',
  source: 'L1 — Overview of the Cardiovascular System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L1 CVS Overview' },
    { kind: 'mechanism', label: 'Pump structure' },
    { kind: 'exam', label: 'Valves · wall layers' },
  ],

  highYield: [
    '**The heart sits in the middle mediastinum, enclosed in the pericardium** (fibrous + serous, with a lubricating pericardial fluid layer). It is a **dual pump**: the **right heart** handles the **pulmonary** circuit, the **left heart** the **systemic** circuit — the two pumps work in **series**.',
    '**Four chambers.** **Right atrium (RA)** receives deoxygenated blood (SVC, IVC, coronary sinus) → **right ventricle (RV)** → pulmonary trunk → lungs. **Left atrium (LA)** receives oxygenated blood (pulmonary veins) → **left ventricle (LV)** → aorta → body. The **LV wall is much thicker** because it pumps against high systemic pressure.',
    '**Two valve types keep flow one-way.** **Atrioventricular (AV) valves** — **tricuspid (right)** and **mitral/bicuspid (left)** — have **chordae tendineae + papillary muscles** that prevent prolapse during systole. **Semilunar valves** — **pulmonary and aortic** — sit at the ventricular outflows and prevent backflow during diastole (no chordae).',
    '**The heart wall has three layers:** **endocardium** (inner endothelial lining, continuous with vessels), **myocardium** (thick cardiac muscle — does the pumping), and **epicardium** (visceral pericardium, outer). Valve incompetence or stenosis produces the murmurs heard on examination ([[cardiovascular-examination]]).',
    '**Coronary supply:** the **coronary arteries** (first branches of the aorta) perfuse the myocardium mainly during **diastole** (when the aortic valve is shut and the muscle relaxed); the **coronary sinus** drains most venous blood into the RA.',
  ],

  mechanism: {
    title: 'Two pumps in series, four chambers, one-way valves',
    steps: [
      { id: 's1', label: 'Right heart → pulmonary; left heart → systemic (in series)', emphasis: 'key' },
      { id: 's2', label: 'RA→RV→lungs→LA→LV→body', emphasis: 'key' },
      { id: 's3', label: 'AV valves (tricuspid/mitral) + chordae/papillary muscles', emphasis: 'key' },
      { id: 's4', label: 'Semilunar valves (pulmonary/aortic) at outflows' },
      { id: 's5', label: 'Wall: endocardium · myocardium · epicardium; LV thickest' },
    ],
  },

  examFindings: [
    { sign: 'LV wall much thicker than RV', mechanism: 'Pumps against high systemic pressure', significance: 'key' },
    { sign: 'Mitral valve = bicuspid (left AV valve)', mechanism: 'Between LA and LV', significance: 'key' },
    { sign: 'Chordae tendineae + papillary muscles on AV valves', mechanism: 'Prevent valve prolapse in systole', significance: 'supportive' },
    { sign: 'Coronary flow greatest in diastole', mechanism: 'Systolic myocardial compression + aortic valve closed', significance: 'key' },
    { sign: 'Three-layer wall: endo/myo/epicardium', mechanism: 'Lining, muscle, outer serosa', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Valve between the left atrium and left ventricle', meaning: 'Mitral (bicuspid) valve' },
    { clue: 'Structures preventing AV valve prolapse', meaning: 'Chordae tendineae + papillary muscles' },
    { clue: 'Chamber with the thickest wall', meaning: 'Left ventricle' },
    { clue: 'When the coronary arteries mainly fill', meaning: 'Diastole' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chamber/valve anatomy underlies murmurs, valve disease, and imaging ([[echocardiography-basics]], [[chest-xray-cardiac]]). Diastolic coronary filling explains ischaemia with tachycardia. Histology of the wall: [[heart-wall-cardiac-histology]]; the two circuits: [[systemic-pulmonary-circulation]].' },
  ],

  mnemonics: [
    { hook: '"LAB RAT": Left Atrium = Bicuspid, Right Atrium = Tricuspid', expansion: ['AV valves; semilunar = pulmonary + aortic'] },
    { hook: 'Right = deoxygenated → lungs; Left = oxygenated → body (LV thick)', expansion: ['Pumps in series'] },
  ],

  traps: [
    {
      questionCategory: 'Which valve is bicuspid?',
      wrongInstinct: 'The tricuspid valve is on the left and the bicuspid (mitral) valve is on the right',
      rightAnswer: 'The MITRAL (bicuspid) valve is on the LEFT (LA→LV); the TRICUSPID valve is on the RIGHT (RA→RV)',
      why: '"LAB RAT": Left = Bicuspid, Right = Tricuspid. Swapping them is a classic error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The left ventricular wall is considerably thicker than the right ventricular wall because it:',
      options: [
        { id: 'a', text: 'Holds more blood' },
        { id: 'b', text: 'Pumps against the high pressure of the systemic circulation' },
        { id: 'c', text: 'Contracts more slowly' },
        { id: 'd', text: 'Receives deoxygenated blood' },
      ],
      answerId: 'b',
      explanation: 'The LV ejects into the high-pressure systemic circuit, so it develops a much thicker myocardium than the RV, which pumps into the low-pressure pulmonary circuit.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The coronary arteries perfuse the left ventricular myocardium predominantly during:',
      options: [
        { id: 'a', text: 'Systole' },
        { id: 'b', text: 'Diastole' },
        { id: 'c', text: 'Isovolumetric contraction only' },
        { id: 'd', text: 'Atrial systole only' },
      ],
      answerId: 'b',
      explanation: 'During systole the contracting myocardium compresses the coronary vessels; flow occurs mainly in diastole when the muscle relaxes (and the aortic sinuses fill). Tachycardia shortens diastole and can provoke ischaemia.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Heart chambers & circulation', svg: HEART_ANATOMY, caption: 'RA→RV→lungs→LA→LV→body (two circuits in series); AV valves (tricuspid/mitral) + semilunar (pulmonary/aortic); wall layers; LV thickest.' },
  ],
};

export default heartAnatomyChambersValves;
