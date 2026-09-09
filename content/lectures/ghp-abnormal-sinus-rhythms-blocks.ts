import type { Lecture } from '../../lib/types';

export const ghpAbnormalSinusRhythmsBlocks: Lecture = {
  id: 'ghp-abnormal-sinus-rhythms-blocks',
  title: 'Abnormal Sinus Rhythms & Conduction Blocks',
  system: 'cardiovascular',
  source: 'Ch 13 — Cardiac Arrhythmias & Their ECG Interpretation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 13 Cardiac Arrhythmias' },
    { kind: 'mechanism', label: 'Where the impulse fails' },
    { kind: 'exam', label: 'Sinus rhythms · AV block ladder' },
  ],

  highYield: [
    '**In the abnormal SINUS rhythms the pacemaker is still the SA node — only its rate is wrong.** Every P is normal in shape and each is followed 1:1 by a QRS. **Sinus tachycardia (>100)**: sympathetic drive or withdrawal of vagal tone steepens phase-4 depolarisation (fever, hypovolaemia, pain, thyrotoxicosis, anaemia). **Sinus bradycardia (<60)**: vagal acetylcholine opens **K⁺ channels → hyperpolarisation and a flatter phase 4** (athletes, sleep, raised intracranial pressure, hypothermia).',
    '**Sinus arrhythmia is a sign of a HEALTHY autonomic system, not a disease.** The R–R shortens on **inspiration** (reduced vagal traffic, plus baroreflex and Bainbridge input from changing venous return) and lengthens on expiration. It is normal and prominent in the young — and its **LOSS is a marker of autonomic neuropathy**, classically in diabetes.',
    '**SA block versus AV block is a question of WHERE the impulse fails.** In **SA block** the node fires but the impulse never reaches atrial muscle: **an entire P-QRS-T is missing**, and if the pause persists a **junctional escape** rhythm at **40–60/min** takes over (absent, inverted or retrograde P waves). In **AV block** the P waves keep marching normally — the only question is whether, and when, each one gets through.',
    '**The AV block ladder.** **First degree: PR > 0.20 s, every P conducts** (prolonged AV nodal delay). **Mobitz I (Wenckebach): PR lengthens progressively until a QRS is dropped** — decremental conduction inside the **AV node**, grouped beating, narrow QRS, improves with atropine or exercise, usually benign. **Mobitz II: PR constant, then a beat is suddenly dropped** — failure in the **His–Purkinje system**, often a wide QRS, does **not** improve with atropine, and progresses to complete block. **Third degree: complete dissociation** — regular P waves and regular QRS with **no relationship**, atrial rate faster than ventricular.',
    '**The escape hierarchy explains the rate and the width.** **SA node 70–80 → AV junction 40–60 (narrow QRS) → Purkinje/ventricular muscle 15–40 (wide QRS)**. The lower the escape pacemaker, the slower and wider the rhythm, and the less reliable it is.',
    '**Stokes–Adams attacks are overdrive suppression made visible.** When complete block begins, lower pacemakers have been **suppressed by the faster sinus rate** and need **5–30 seconds** to start firing. During that ventricular standstill the patient **suddenly faints without warning** (and recovers as the escape rhythm appears). Recurrent attacks are the classic indication for a **permanent pacemaker**.',
  ],

  mechanism: {
    title: 'Follow the impulse: rate change at the node, delay at the AV node, failure below it',
    steps: [
      { id: 's1', label: 'AV node conducts slowly by design: small fibres, few gap junctions, Ca-dependent upstroke', emphasis: 'key' },
      { id: 's2', label: 'More delay → PR over 0.20 s = first-degree block (all beats still conduct)', emphasis: 'normal' },
      { id: 's3', label: 'Decremental nodal conduction fatigues beat to beat → PR lengthens, then one P drops (Mobitz I)', emphasis: 'key' },
      { id: 's4', label: 'His-Purkinje conduction fails all-or-none → sudden dropped beat, constant PR (Mobitz II)', emphasis: 'key' },
      { id: 's5', label: 'Complete failure → atria and ventricles beat independently', emphasis: 'danger' },
      { id: 's6', label: 'Overdrive-suppressed escape pacemaker takes 5-30 s to fire → Stokes-Adams syncope', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Rate speeds on inspiration and slows on expiration, P waves normal', mechanism: 'Respiratory sinus arrhythmia - intact vagal control, not disease', significance: 'supportive' },
    { sign: 'A whole P-QRS-T missing, the next beat arriving on schedule', mechanism: 'SA block or sinus pause - the node fired but failed to capture the atria', significance: 'key' },
    { sign: 'PR interval over 0.20 s with every P conducted', mechanism: 'First-degree AV block - prolonged AV nodal delay', significance: 'key' },
    { sign: 'Progressive PR lengthening then a dropped QRS, in groups', mechanism: 'Mobitz I - decremental conduction within the AV node', significance: 'key' },
    { sign: 'Constant PR with an abruptly dropped QRS, often wide', mechanism: 'Mobitz II - all-or-none failure below the node in the His-Purkinje system', significance: 'key' },
    { sign: 'P waves marching through independent QRS complexes, atrial rate faster', mechanism: 'Third-degree block with a junctional or ventricular escape rhythm', significance: 'key' },
  ],

  investigations: [
    { clue: 'PR interval of 0.26 s with every P followed by a QRS', meaning: 'First-degree AV block' },
    { clue: 'Grouped beating with lengthening PR before each dropped beat', meaning: 'Mobitz I (Wenckebach) - AV nodal, usually benign' },
    { clue: 'Dropped QRS with an unchanging PR and a broad QRS', meaning: 'Mobitz II - His-Purkinje disease, high risk of complete block' },
    { clue: 'Atrial rate 90 and ventricular rate 35, entirely unrelated', meaning: 'Third-degree AV block with a ventricular escape rhythm' },
    { clue: 'Sudden syncope 5 to 30 s after complete block begins, then spontaneous recovery', meaning: 'Stokes-Adams attack - delay before the escape pacemaker starts' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The **level** of the block predicts the danger: AV nodal disease is vagally modulated, atropine-responsive and usually benign, while **infranodal (Mobitz II and complete) block is unstable** and needs pacing. The pacemaker physiology behind escape rates is in [[ghp-sa-node-pacemaker]], and the autonomic modulation in [[ghp-conduction-system-autonomic-control]]; the intervals you measure come from [[ghp-normal-ecg-waves]]. Clinical management of the same rhythms: [[av-block]].' },
    { logic: 'The bedside discriminator', detail: 'Ask what happens with **vagal manoeuvres or exercise**: increasing sympathetic drive improves AV nodal conduction (Mobitz I gets better) but can worsen infranodal block by bombarding a diseased His-Purkinje system with faster impulses. Losing respiratory sinus arrhythmia points to autonomic neuropathy, not to conduction disease.' },
  ],

  mnemonics: [
    { hook: 'Escape ladder: SA 70-80, junction 40-60, ventricle 15-40 - lower means slower and wider', expansion: ['Narrow escape = above the bifurcation', 'Wide escape = ventricular, unreliable'] },
    { hook: 'Mobitz I: Longer, longer, longer, DROP - then you have got a Wenckebach. Mobitz II: constant, constant, DROP', expansion: ['I = in the Node, benign, atropine helps', 'II = Infranodal, wide, pacemaker'] },
  ],

  traps: [
    {
      questionCategory: 'Level of block and its consequence',
      wrongInstinct: 'Mobitz I and Mobitz II are both second-degree block, so they carry the same risk',
      rightAnswer: 'Mobitz I is AV nodal, decremental and usually benign; Mobitz II is His-Purkinje, all-or-none, and often progresses abruptly to complete block',
      why: 'Nodal tissue fatigues gradually and responds to autonomic tone; diseased His-Purkinje tissue fails without warning, so it needs pacing.',
    },
    {
      questionCategory: 'Reading a slow regular rhythm',
      wrongInstinct: 'The ventricular rate is regular at 38, so this is severe sinus bradycardia',
      rightAnswer: 'Check the P waves - regular P at a faster rate marching independently through regular QRS complexes is third-degree block, not bradycardia',
      why: 'In complete block both chambers are regular but dissociated; the atrial rate always exceeds the ventricular escape rate.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An ECG shows PR intervals of 0.18, 0.24, 0.32 s and then a P wave with no QRS, after which the cycle repeats. The site and nature of the conduction failure is:',
      options: [
        { id: 'a', text: 'His-Purkinje system, all-or-none failure' },
        { id: 'b', text: 'AV node, decremental (progressively fatiguing) conduction' },
        { id: 'c', text: 'SA node, failure to generate an impulse' },
        { id: 'd', text: 'Atrial muscle, exit block' },
      ],
      answerId: 'b',
      explanation: 'Progressive PR lengthening before a dropped beat is Wenckebach (Mobitz I), the signature of decremental conduction in AV nodal tissue, whose calcium-dependent fibres recover incompletely beat to beat. Mobitz II from His-Purkinje disease drops beats without warning at a constant PR; SA node failure would drop an entire P-QRS-T.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient develops complete heart block and faints for about 15 seconds before recovering as a slow regular pulse appears. The pause occurs because:',
      options: [
        { id: 'a', text: 'The ventricles are in fibrillation until they spontaneously convert' },
        { id: 'b', text: 'Lower pacemakers were overdrive-suppressed by the faster sinus rate and need time to start firing' },
        { id: 'c', text: 'The atria stop contracting, removing the atrial contribution to filling' },
        { id: 'd', text: 'The AV node fires at 40 to 60 per minute but the impulse cannot reach the atria' },
      ],
      answerId: 'b',
      explanation: 'This is a Stokes-Adams attack. Purkinje and junctional pacemakers have been suppressed by the faster sinus impulses; when conduction fails they take 5 to 30 s to depolarise spontaneously, giving ventricular standstill and abrupt syncope. Loss of the atrial kick alone would never cause syncope, and there is no fibrillation.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which finding most strongly favours a block located BELOW the AV node?',
      options: [
        { id: 'a', text: 'PR interval that lengthens progressively before a dropped beat' },
        { id: 'b', text: 'Conduction that improves with atropine or exercise' },
        { id: 'c', text: 'Dropped beats with a constant PR interval and a QRS of 0.14 s' },
        { id: 'd', text: 'Rate variation with the respiratory cycle' },
      ],
      answerId: 'c',
      explanation: 'A constant PR with abrupt dropped beats and a wide QRS is Mobitz II, indicating His-Purkinje disease. Progressive PR lengthening and improvement with atropine or exercise both point to the vagally-innervated AV node; respiratory rate variation is normal sinus arrhythmia.',
      tests: 'investigation',
    },
  ],

  figures: [
    { title: 'Mobitz I (Wenckebach)', ecg: 'mobitz-i', caption: 'PR lengthens beat by beat until a P wave is not conducted - decremental conduction within the AV node.' },
    { title: 'Third-degree AV block', ecg: 'third-degree', caption: 'Regular P waves and a slower regular escape rhythm, entirely dissociated; the escape rate and QRS width reveal how far down the pacemaker sits.' },
  ],
};

export default ghpAbnormalSinusRhythmsBlocks;
