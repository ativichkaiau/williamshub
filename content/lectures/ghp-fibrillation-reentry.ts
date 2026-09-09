import type { Lecture } from '../../lib/types';

export const ghpFibrillationReentry: Lecture = {
  id: 'ghp-fibrillation-reentry',
  title: 'Fibrillation & the Re-entry Circus Movement',
  system: 'cardiovascular',
  source: 'Ch 13 — Cardiac Arrhythmias & Their ECG Interpretation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 13 Cardiac Arrhythmias' },
    { kind: 'mechanism', label: 'Re-entry \u2014 circus movement' },
    { kind: 'exam', label: 'VF \u00b7 AF \u00b7 flutter' },
  ],

  highYield: [
    '**Re-entry needs the returning impulse to find excitable muscle \u2014 that is the whole principle.** Send an impulse round a ring of muscle and it normally dies, because it arrives back at tissue still **refractory**. It survives only if the **path is longer than the wavelength**, where **wavelength = conduction velocity \u00d7 refractory period**. Everything that causes fibrillation works by shortening that wavelength or lengthening the path.',
    '**So the three classic pro-arrhythmic conditions all shrink the wavelength or stretch the circuit.** (1) **A long pathway** \u2014 a **dilated** heart, which is why fibrillation tracks chamber size. (2) **Slowed conduction** \u2014 **ischaemia**, **hyperkalaemia**, or block in the Purkinje system. (3) **A short refractory period** \u2014 **adrenaline**, repeated shocks, or quinidine-type toxicity. Learn these three and every fibrillation risk factor follows.',
    '**Ventricular fibrillation is a chain reaction, not one circuit.** A wavefront hitting partly-refractory muscle **fragments**, each fragment divides again, and the ventricle ends up carrying **many independent wavelets** that continuously re-excite each other. The ventricle **quivers without ejecting**: cardiac output falls to essentially **zero**, consciousness is lost within **~5 seconds**, and irreversible brain injury follows within **~4\u20135 minutes**. The ECG shows **coarse irregular waves with no identifiable QRS**.',
    '**Defibrillation works by making every cell refractory at the same instant.** A strong current depolarises **all** myocardium simultaneously, so every wavelet runs into refractory tissue at once and is **extinguished** \u2014 the shock does not restart the heart, it stops the fibrillation. The **SA node** then resumes as the fastest surviving pacemaker. CPR keeps coronary and cerebral perfusion going so the myocardium is still shockable when the current arrives.',
    '**Atrial fibrillation is the same physics in a thinner chamber \u2014 and the ventricles are protected by the AV node.** Multiple atrial wavelets give **no P waves**, only a fibrillating baseline. Bombarded at **300\u2013600/min**, the AV node blocks most impulses irregularly (concealed conduction) \u2192 an **irregularly irregular** ventricular rhythm with **normal QRS shape**. Losing the atrial kick costs roughly **20\u201330% of ventricular filling** \u2014 tolerable at rest, badly missed when filling time is already short. Stasis in the fibrillating atrium is what forms **thrombus**.',
    '**Atrial flutter is one big circus movement, so it is regular where fibrillation is chaotic.** A single wavefront travels a **large circuit around the atria** at about **200\u2013350/min**, giving **sawtooth F waves**. The AV node conducts a fixed fraction \u2014 **2:1 or 3:1** \u2014 so unlike [[atrial-fibrillation]] the ventricular rate is usually **regular**. Regular + sawtooth = flutter; irregularly irregular + no P waves = fibrillation.',
  ],

  mechanism: {
    title: 'Why an impulse refuses to die out',
    steps: [
      { id: 's1', label: 'Impulse re-enters tissue that has already recovered excitability', emphasis: 'key' },
      { id: 's2', label: 'Path length exceeds wavelength (velocity \u00d7 refractory period)', emphasis: 'key' },
      { id: 's3', label: 'Dilatation lengthens path; ischaemia slows conduction; adrenaline shortens refractoriness' },
      { id: 's4', label: 'Wavefront meets partly refractory muscle and fragments into daughter wavelets' },
      { id: 's5', label: 'Many independent wavelets \u2192 chamber quivers, ejects nothing', emphasis: 'danger' },
      { id: 's6', label: 'Simultaneous depolarisation by shock makes all tissue refractory at once \u2192 wavelets die', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'No palpable pulse with a quivering, non-ejecting ventricle', mechanism: 'Uncoordinated wavelets abolish synchronous contraction', significance: 'key' },
    { sign: 'Irregularly irregular pulse with no discernible P waves', mechanism: 'Atrial wavelets bombard the AV node, which blocks impulses irregularly', significance: 'key' },
    { sign: 'Pulse deficit \u2014 apex rate exceeds the radial rate', mechanism: 'Short cycles fill the ventricle too little to open the aortic valve', significance: 'key' },
    { sign: 'Absent a wave in the JVP', mechanism: 'No coordinated atrial systole occurs during fibrillation', significance: 'supportive' },
    { sign: 'Regular tachycardia around 150/min in flutter', mechanism: 'A single atrial circuit near 300/min conducted 2:1 through the AV node', significance: 'supportive' },
    { sign: 'Loss of consciousness within seconds of onset', mechanism: 'Cardiac output falls to zero and cerebral perfusion ceases', significance: 'key' },
  ],

  investigations: [
    { clue: 'Coarse irregular ECG waves with no identifiable QRS complexes', meaning: 'Ventricular fibrillation \u2014 defibrillate immediately' },
    { clue: 'Fibrillating baseline, absent P waves, irregularly irregular QRS', meaning: 'Atrial fibrillation rather than flutter' },
    { clue: 'Sawtooth F waves at 200\u2013350/min with a regular ventricular response', meaning: 'Atrial flutter with fixed-ratio AV conduction' },
    { clue: 'Flat line with no electrical activity at all', meaning: 'Asystolic cardiac arrest \u2014 not a shockable rhythm' },
    { clue: 'Serum potassium markedly raised in a patient with a wide, slowing rhythm', meaning: 'Hyperkalaemia slowing conduction and predisposing to re-entry' },
    { clue: 'Enlarged cardiac silhouette or dilated atria on imaging', meaning: 'A longer conduction path favouring sustained circus movement' },
  ],

  treatment: [
    {
      logic: 'Defibrillate ventricular fibrillation immediately \u2014 nothing else restores output',
      detail: 'The shock **terminates** the arrhythmia by depolarising all muscle at once; it does not start a beat. Chest compressions between shocks preserve coronary and cerebral flow so the myocardium stays shockable. Contrast with [[cardiac-arrest]] in asystole, where there is no wavelet to extinguish and shocking achieves nothing.',
    },
    {
      logic: 'In atrial fibrillation, protect the brain and control the ventricular rate',
      detail: 'The atria are not ejecting, so **stasis** forms thrombus and anticoagulation addresses the dominant risk. Slowing AV nodal conduction lengthens diastole and restores filling time. Because the ventricular rhythm depends on how the AV node filters the atrial barrage, rate control is really control of [[av-block]] at the node.',
    },
  ],

  mnemonics: [
    {
      hook: 'Long path, Slow speed, Short refractory = re-entry',
      expansion: ['Dilated chamber lengthens the circuit', 'Ischaemia and hyperkalaemia slow conduction', 'Adrenaline shortens the refractory period', 'Any one shrinks wavelength below path length'],
    },
    {
      hook: 'Sawtooth is regular, fibrillation is irregular',
      expansion: ['Flutter = one circuit \u2192 F waves, fixed 2:1 or 3:1, regular pulse', 'Fibrillation = many wavelets \u2192 no P waves, irregularly irregular'],
    },
  ],

  traps: [
    {
      questionCategory: 'What a defibrillator actually does',
      wrongInstinct: 'The shock restarts the stopped heart',
      rightAnswer: 'The shock depolarises all myocardium at once so every re-entrant wavelet meets refractory tissue and dies',
      why: 'It terminates an arrhythmia \u2014 which is exactly why asystole, having no wavelets, is not shockable',
    },
    {
      questionCategory: 'Separating flutter from fibrillation',
      wrongInstinct: 'Both give an irregularly irregular pulse because both are atrial tachyarrhythmias',
      rightAnswer: 'Flutter is a single circuit conducted in a fixed ratio, so the ventricular rate is usually regular',
      why: 'One circuit gives regularity; many competing wavelets give irregularity',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A dilated, ischaemic ventricle degenerates into fibrillation. Which combination best explains why the re-entrant impulse fails to extinguish?',
      options: [
        { id: 'a', text: 'Short pathway, fast conduction and a long refractory period' },
        { id: 'b', text: 'Long pathway, slowed conduction and a shortened refractory period' },
        { id: 'c', text: 'Increased SA nodal automaticity with normal conduction' },
        { id: 'd', text: 'Complete block of the AV node with an escape rhythm' },
      ],
      answerId: 'b',
      explanation: 'Re-entry persists when the path exceeds the wavelength (conduction velocity \u00d7 refractory period). Dilatation lengthens the path while ischaemia slows conduction and shortens refractoriness, so returning impulses always meet excitable muscle.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient is in ventricular fibrillation. What is the immediate physiological effect of a successful defibrillating shock?',
      options: [
        { id: 'a', text: 'It stimulates the SA node to fire a fresh impulse' },
        { id: 'b', text: 'It increases myocardial contractility enough to eject blood' },
        { id: 'c', text: 'It depolarises all myocardium simultaneously so every wavelet meets refractory tissue' },
        { id: 'd', text: 'It selectively blocks conduction through the AV node' },
      ],
      answerId: 'c',
      explanation: 'Defibrillation terminates rather than initiates. Simultaneous depolarisation leaves no excitable tissue for the wavelets to invade, they are extinguished together, and the SA node then resumes as the fastest surviving pacemaker.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'An ECG shows sawtooth atrial waves at about 300/min with a regular ventricular rate of 150/min. What is the most likely explanation?',
      options: [
        { id: 'a', text: 'Atrial fibrillation with a rapid ventricular response' },
        { id: 'b', text: 'Atrial flutter with 2:1 AV conduction' },
        { id: 'c', text: 'Sinus tachycardia with a first-degree block' },
        { id: 'd', text: 'Ventricular tachycardia with retrograde conduction' },
      ],
      answerId: 'b',
      explanation: 'Sawtooth F waves indicate a single large atrial circuit. Because the AV node conducts a fixed fraction of that regular circuit, halving 300 gives a regular 150/min \u2014 unlike fibrillation, whose many wavelets produce an irregularly irregular response.',
      tests: 'investigation',
    },
  ],
};

export default ghpFibrillationReentry;
