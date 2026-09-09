import type { Lecture } from '../../lib/types';
import { CARDIAC_ACTION_POTENTIAL } from '../../lib/figures';

export const ghpCardiacMuscleActionPotential: Lecture = {
  id: 'ghp-cardiac-muscle-action-potential',
  title: 'Cardiac Muscle & Its Action Potential',
  system: 'cardiovascular',
  source: 'Ch 9 — Heart Muscle; The Heart as a Pump',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 9 Heart Muscle' },
    { kind: 'mechanism', label: 'Plateau · syncytium · CICR' },
    { kind: 'exam', label: 'Why the heart cannot tetanise' },
  ],

  highYield: [
    '**The heart is a FUNCTIONAL syncytium, not an anatomical one.** Myocytes remain separate cells but are welded end-to-end at **intercalated discs**, whose **gap junctions (connexons)** pass ions with almost no resistance — so an impulse arising anywhere spreads to every cell and the mass contracts **all-or-none**. There are **two syncytia** — atrial and ventricular — electrically insulated by the **fibrous AV rings** and joined only through the **AV bundle**, which is what makes the atrial-then-ventricular sequence possible.',
    '**Phase 2 (the plateau) is the signature of cardiac muscle.** Resting potential ≈ **−85 to −90 mV**; phase 0 overshoots to about **+20 mV** on **fast Na⁺ channels**, then **slow L-type Ca²⁺ channels** open and **K⁺ permeability falls ~5-fold**, holding the membrane depolarised. Result: a **~0.3 s ventricular AP** (atrial ≈ **0.2 s**) versus **1–5 ms** in nerve or skeletal muscle — roughly **15× longer**, and it is what makes cardiac contraction outlast the stimulus.',
    '**Long AP → long absolute refractory period (~0.25–0.30 s ventricle, ~0.15 s atrium), which is why the heart CANNOT be tetanised.** A second stimulus lands while the previous contraction is still under way and finds inactivated Na⁺ channels; a relative refractory period of ~**0.05 s** follows. This guarantees a relaxation (filling) interval between beats. The **shorter atrial refractory period** is exactly why atria will sustain rates that ventricles cannot.',
    '**Cardiac excitation–contraction coupling leans on EXTRACELLULAR Ca²⁺.** Cardiac **T-tubules are ~5× wider (~25× the volume)** of skeletal ones and their lumen is lined with **negatively charged mucopolysaccharides that hold a reservoir of Ca²⁺**, while the **cardiac SR is comparatively sparse**. Ca²⁺ entering through the T-tubule during the plateau triggers **Ca²⁺-induced Ca²⁺ release** from the SR via **RyR2** — trigger Ca²⁺ from outside, amplifier Ca²⁺ from inside.',
    '**Therefore contractile strength tracks plasma Ca²⁺ in cardiac (but not skeletal) muscle** — hypocalcaemia weakens the heart, hypercalcaemia stiffens it toward systolic arrest. Relaxation needs Ca²⁺ removal by **SERCA** (back into SR) and the **Na⁺/Ca²⁺ exchanger (NCX)**, which runs on the Na⁺ gradient built by the **Na⁺/K⁺-ATPase** — the reason **digoxin** (pump inhibition → intracellular Na⁺ rises → less Ca²⁺ extruded) is positively inotropic.',
    '**Clinical anchor:** AP duration is read on the surface ECG as the **QT interval**. Drugs or channelopathies that prolong repolarisation lengthen QT and invite **torsades de pointes**; ischaemia, which starves the ATP-dependent pumps, shortens and destabilises the plateau and is the substrate for reentry.',
  ],

  mechanism: {
    title: 'Gap junctions spread it, the plateau prolongs it, calcium translates it into force',
    steps: [
      { id: 's1', label: 'Gap junctions at intercalated discs → functional syncytium', emphasis: 'key' },
      { id: 's2', label: 'Phase 0: fast Na⁺ influx → overshoot to ~+20 mV' },
      { id: 's3', label: 'Phase 2: L-type Ca²⁺ influx + fall in K⁺ efflux → ~0.3 s plateau', emphasis: 'key' },
      { id: 's4', label: 'T-tubule Ca²⁺ triggers SR release (RyR2) → cross-bridge cycling', emphasis: 'key' },
      { id: 's5', label: 'Long AP → absolute refractory ≈ contraction duration → no tetanus', emphasis: 'key' },
      { id: 's6', label: 'SERCA + Na⁺/Ca²⁺ exchanger clear Ca²⁺ → relaxation and refilling' },
    ],
  },

  examFindings: [
    { sign: 'Stimulating one atrial point contracts the whole atrium', mechanism: 'Gap-junction coupling makes the atria a single functional syncytium', significance: 'key' },
    { sign: 'A tetanising stimulus train fails to fuse cardiac contractions', mechanism: 'Absolute refractory period is nearly as long as the contraction itself', significance: 'key' },
    { sign: 'Ventricular action potential lasts about 0.3 s (atrial about 0.2 s)', mechanism: 'L-type Ca²⁺ plateau with reduced K⁺ permeability', significance: 'key' },
    { sign: 'Contraction weakens when bath or plasma Ca²⁺ is lowered', mechanism: 'Cardiac muscle depends on extracellular Ca²⁺ entering via T-tubules', significance: 'key' },
    { sign: 'Digoxin increases contractile force', mechanism: 'Na⁺/K⁺-ATPase block raises intracellular Na⁺ → Na⁺/Ca²⁺ exchanger extrudes less Ca²⁺', significance: 'supportive' },
    { sign: 'Prolonged QT on the ECG', mechanism: 'Lengthened ventricular action potential (delayed repolarisation)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Low-resistance junction allowing ion flow between myocytes', meaning: 'Gap junction at the intercalated disc' },
    { clue: 'Current sustaining the plateau', meaning: 'Slow inward Ca²⁺ through L-type channels' },
    { clue: 'Structure insulating atrial from ventricular syncytium', meaning: 'Fibrous AV rings (AV bundle is the only conducting path)' },
    { clue: 'Reason cardiac muscle cannot be tetanised', meaning: 'Refractory period nearly as long as the contraction' },
    { clue: 'Source of trigger calcium in cardiac E-C coupling', meaning: 'Extracellular Ca²⁺ entering through wide T-tubules' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The plateau and its refractory period are what let the heart alternate ejection with filling — lose either and you get tetany or fibrillation instead of a pump. Phase-by-phase currents and drug targets: [[cardiac-action-potential]] and [[cardiac-ion-currents-channels]].' },
    { logic: 'Contrast with skeletal muscle', detail: 'Skeletal fibres are individually innervated and run almost entirely on SR Ca²⁺; cardiac fibres are electrically continuous and depend on Ca²⁺ crossing the sarcolemma, so plasma Ca²⁺ and pump inhibitors change cardiac force directly. Compare [[ghp-excitation-contraction-coupling-skeletal]] and [[excitation-contraction-coupling]]; the pacemaker variant of this action potential is in [[ghp-sa-node-pacemaker]].' },
  ],

  mnemonics: [
    { hook: 'Plateau = PLenty of CAlcium; long AP → long refractory → no tetanus', expansion: ['Ventricle ~0.3 s, atrium ~0.2 s', 'Refractory ≈ contraction, so filling is guaranteed'] },
    { hook: 'Skeletal borrows from inside, cardiac borrows from outside', expansion: ['Skeletal: SR calcium, unaffected by acute plasma Ca²⁺', 'Cardiac: T-tubule calcium triggers SR release → force tracks ECF Ca²⁺'] },
  ],

  traps: [
    {
      questionCategory: 'Syncytium — anatomical or functional',
      wrongInstinct: 'Cardiac myocytes fuse into one giant multinucleate cell, like skeletal muscle',
      rightAnswer: 'They stay separate cells; the syncytium is FUNCTIONAL, created by gap junctions in the intercalated discs',
      why: 'Electrical continuity, not cytoplasmic fusion — which is why a single connexin defect can uncouple conduction.',
    },
    {
      questionCategory: 'Source of activator calcium',
      wrongInstinct: 'Cardiac contraction, like skeletal, comes entirely from SR calcium, so plasma Ca²⁺ should not matter',
      rightAnswer: 'Cardiac contraction needs extracellular Ca²⁺ entering through the T-tubules to trigger SR release, so force tracks plasma Ca²⁺',
      why: 'The cardiac SR is sparse and the T-tubules carry a bound Ca²⁺ store — remove ECF Ca²⁺ and the heart stops contracting even though it still fires.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A ventricular myocyte is stimulated repeatedly at 15 Hz. Unlike skeletal muscle, it does not develop sustained (tetanic) contraction. The best explanation is:',
      options: [
        { id: 'a', text: 'Cardiac muscle lacks troponin, so cross-bridges cannot summate' },
        { id: 'b', text: 'The absolute refractory period lasts nearly as long as the contraction itself' },
        { id: 'c', text: 'Gap junctions short-circuit each successive stimulus' },
        { id: 'd', text: 'Cardiac sarcoplasmic reticulum cannot release calcium twice in succession' },
      ],
      answerId: 'b',
      explanation: 'The ~0.3 s plateaued action potential produces an absolute refractory period of ~0.25–0.30 s in the ventricle, so a second action potential cannot be elicited until the muscle has largely relaxed. Cardiac muscle does have troponin (a); gap junctions spread rather than block excitation (c); the SR can release repeatedly once refractoriness passes (d).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An isolated cardiac muscle preparation is perfused with a calcium-free solution. Action potentials of near-normal upstroke still occur, but contraction fails. Why?',
      options: [
        { id: 'a', text: 'Phase 0 depends on extracellular calcium in ventricular muscle' },
        { id: 'b', text: 'Trigger calcium entering through the T-tubules is required to release SR calcium' },
        { id: 'c', text: 'The sarcoplasmic reticulum cannot store calcium without extracellular calcium' },
        { id: 'd', text: 'Gap junctions close instantly without extracellular calcium' },
      ],
      answerId: 'b',
      explanation: 'Ventricular phase 0 is Na⁺-driven, so the spike persists; but cardiac E-C coupling requires Ca²⁺ influx through the wide T-tubules during the plateau to trigger Ca²⁺-induced Ca²⁺ release from a relatively sparse SR. Without that trigger there is excitation without contraction.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which feature explains why atrial and ventricular contraction are separated in time rather than occurring together?',
      options: [
        { id: 'a', text: 'Atrial myocytes lack gap junctions' },
        { id: 'b', text: 'The fibrous AV rings insulate the two syncytia, so conduction must pass through the AV bundle' },
        { id: 'c', text: 'Ventricular action potentials are shorter than atrial ones' },
        { id: 'd', text: 'Atrial muscle is refractory while the ventricle depolarises' },
      ],
      answerId: 'b',
      explanation: 'Atria and ventricles are two separate functional syncytia; the fibrous skeleton blocks direct spread, so excitation must travel through the AV bundle, where nodal delay imposes the atrial-then-ventricular sequence. Atrial APs are shorter, not longer (c), and atrial gap junctions are abundant (a).',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Cardiac action potential phases', svg: CARDIAC_ACTION_POTENTIAL, caption: 'Phase 0 fast Na⁺; phase 2 plateau on L-type Ca²⁺ with reduced K⁺ efflux; phase 3 K⁺ repolarisation. The long plateau creates the refractory period that prevents tetanus.' },
  ],
};

export default ghpCardiacMuscleActionPotential;
