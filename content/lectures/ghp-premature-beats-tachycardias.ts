import type { Lecture } from '../../lib/types';

export const ghpPrematureBeatsTachycardias: Lecture = {
  id: 'ghp-premature-beats-tachycardias',
  title: 'Premature Contractions & Paroxysmal Tachycardias',
  system: 'cardiovascular',
  source: 'Ch 13 — Cardiac Arrhythmias & Their ECG Interpretation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 13 Cardiac Arrhythmias' },
    { kind: 'mechanism', label: 'Ectopic focus · re-entry circuit' },
    { kind: 'exam', label: 'Compensatory pause · vagal manoeuvres' },
  ],

  highYield: [
    '**A premature contraction is a beat fired by an ectopic focus (or a re-entry circuit) BEFORE the sinus node gets there.** **Atrial (PAC):** an **early, abnormally shaped P** — often hidden in the preceding T — followed by a **normal narrow QRS**, because once past the AV node the impulse uses the Purkinje system normally. **AV-junctional:** **no P, or an inverted/retrograde P** immediately before, during or after a narrow QRS (the atria are activated backwards).',
    '**Ventricular (PVC): no preceding P, a WIDE bizarre QRS ≥ 0.12 s, and a T wave pointing OPPOSITE to the QRS.** All three follow from the same fact — the impulse starts in ventricular muscle and spreads **cell-to-cell instead of down the Purkinje network**, so depolarisation is slow, asymmetric, and the abnormal path forces an abnormal repolarisation (**discordant T**).',
    '**The pause is the discriminator, and it is pure timing logic.** A **PAC travels back into the SA node and RESETS it**, so the next sinus beat comes one cycle after the ectopic → an **incomplete (non-compensatory) pause**. A **PVC is usually blocked retrogradely at the AV node**, so the sinus node never learns it happened and keeps its own schedule → a **FULL COMPENSATORY pause**, in which the **R–R spanning the PVC equals exactly two normal cycles**.',
    '**Pulse deficit: the early beat is heard but not felt.** A premature ventricle has had almost **no diastolic filling time**, so stroke volume is too small to open the aortic valve or reach the wrist — the **apical rate exceeds the radial rate**. What the patient actually feels as a "skipped beat" is the **next** beat: the long pause gives extra filling (**Frank–Starling**) plus **post-extrasystolic potentiation**, so it thumps.',
    '**Paroxysmal tachycardias start and stop ABRUPTLY because they are RE-ENTRANT, not because a focus speeds up.** In **AV-nodal re-entry** the node contains a **slow pathway (short refractory period)** and a **fast pathway (long refractory period)**; a **well-timed PAC blocks in the fast pathway**, travels down the slow one, and by the time it returns the fast pathway has recovered → the impulse turns around and circulates. Result: a **regular narrow-complex tachycardia at 150–250/min** with **P waves buried in or just after the QRS**.',
    '**Vagal manoeuvres work because the AV node is a LIMB of the circuit.** Carotid sinus massage or Valsalva releases acetylcholine → **↑ K⁺ conductance (hyperpolarisation) and ↓ L-type Ca²⁺ current** in nodal tissue → **AV nodal conduction slows and refractoriness lengthens** → the circuit breaks and the rhythm stops dead (adenosine does the same pharmacologically). **They do NOT stop ventricular tachycardia**, because the AV node is not part of that circuit — which is why a regular wide-complex tachycardia is **VT until proven otherwise**.',
  ],

  mechanism: {
    title: 'One early impulse; whether it resets the sinus node, and whether it can circle back',
    steps: [
      { id: 's1', label: 'Ectopic focus or micro re-entry fires before the next sinus impulse', emphasis: 'key' },
      { id: 's2', label: 'Atrial origin → resets the SA node → incomplete pause, narrow QRS', emphasis: 'normal' },
      { id: 's3', label: 'Ventricular origin → cell-to-cell spread → wide bizarre QRS with discordant T', emphasis: 'key' },
      { id: 's4', label: 'Retrograde block at the AV node leaves the sinus node undisturbed → full compensatory pause', emphasis: 'key' },
      { id: 's5', label: 'Too little filling time → stroke volume too small to open the aortic valve → pulse deficit', emphasis: 'normal' },
      { id: 's6', label: 'Well-timed PAC + dual AV nodal pathways → re-entrant circuit → paroxysmal SVT', emphasis: 'key' },
      { id: 's7', label: 'Vagal acetylcholine raises AV nodal refractoriness → the circuit breaks', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Early wide bizarre QRS with no preceding P and a T pointing the other way', mechanism: 'Ventricular ectopic beat spreading muscle-to-muscle outside the Purkinje system', significance: 'key' },
    { sign: 'The R-R spanning the ectopic beat equals exactly two sinus cycles', mechanism: 'Full compensatory pause - the SA node was never reset, so its schedule continued', significance: 'key' },
    { sign: 'Early abnormal P wave with a narrow QRS and a shorter than compensatory pause', mechanism: 'Atrial ectopic beat that reset the sinus node', significance: 'key' },
    { sign: 'Apical rate higher than the radial rate', mechanism: 'Pulse deficit - premature beats eject too little blood to reach the wrist', significance: 'key' },
    { sign: 'Regular narrow-complex tachycardia at 180 per minute that starts and stops abruptly', mechanism: 'Re-entrant paroxysmal supraventricular tachycardia', significance: 'key' },
    { sign: 'A forceful beat felt after the skipped beat', mechanism: 'Extra filling during the pause plus post-extrasystolic potentiation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Early beat with no P wave, QRS 0.16 s, T opposite to the QRS', meaning: 'Premature ventricular contraction' },
    { clue: 'Inverted P immediately after a narrow QRS', meaning: 'Junctional (AV nodal) premature beat with retrograde atrial activation' },
    { clue: 'Interval from the beat before to the beat after the ectopic equals two sinus cycles', meaning: 'Full compensatory pause - a ventricular origin' },
    { clue: 'Narrow tachycardia at 200 per minute terminated instantly by carotid sinus massage', meaning: 'AV-nodal re-entrant tachycardia - the node was a limb of the circuit' },
    { clue: 'Regular wide-complex tachycardia unaffected by vagal manoeuvres', meaning: 'Ventricular tachycardia until proven otherwise' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing **supraventricular from ventricular** origin decides everything downstream: an isolated PVC in a healthy heart is benign, while runs of them in an ischaemic heart threaten degeneration into fibrillation. The re-entry physiology generalises directly to [[ghp-fibrillation-reentry]], and the wide-QRS logic comes from the cell-to-cell conduction described in [[ghp-cardiac-muscle-action-potential]]. MedCMU clinical treatments: [[premature-contractions]] and [[ventricular-tachycardia]].' },
    { logic: 'Why the pause feels like a skipped beat', detail: 'The patient does not feel the extra beat — they feel the **post-pause beat**, amplified by extra filling ([[ghp-frank-starling-mechanism]]) and post-extrasystolic potentiation. Explaining this reassures far better than a normal report does.' },
  ],

  mnemonics: [
    { hook: 'PVC: no P, Wide QRS, T the other way, and a full compensatory pause', expansion: ['Full pause = the sinus node never found out', 'PAC resets the node, so its pause is short'] },
    { hook: 'The patient feels the beat AFTER the extra beat', expansion: ['Pause gives extra filling (Frank-Starling)', 'Plus post-extrasystolic potentiation'] },
    { hook: 'Vagal manoeuvres cure what runs THROUGH the AV node', expansion: ['AV nodal re-entry stops dead', 'Ventricular tachycardia ignores them'] },
  ],

  traps: [
    {
      questionCategory: 'Reading the pause after an ectopic beat',
      wrongInstinct: 'A pause after an early beat means it must have been ventricular',
      rightAnswer: 'Both atrial and ventricular ectopics are followed by a pause; only the VENTRICULAR one gives a FULL compensatory pause, where the interval spanning it equals two sinus cycles',
      why: 'The atrial impulse resets the SA node, so its pause is short; the ventricular impulse is blocked retrogradely and leaves the sinus schedule untouched.',
    },
    {
      questionCategory: 'Choosing a manoeuvre from the rate and regularity alone',
      wrongInstinct: 'This tachycardia is fast and perfectly regular, so vagal manoeuvres or adenosine will terminate it',
      rightAnswer: 'Look at QRS width first: vagal manoeuvres only work when the AV node forms part of the circuit, so a regular WIDE-complex tachycardia should be treated as ventricular tachycardia',
      why: 'Regularity says nothing about circuit location; the AV node is not a limb of a ventricular re-entry circuit, so raising its refractoriness changes nothing.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A premature beat with a wide bizarre QRS is followed by a pause such that the interval from the preceding to the following sinus beat equals two normal R-R cycles. This full compensatory pause occurs because:',
      options: [
        { id: 'a', text: 'The ectopic impulse reset the SA node, delaying the next sinus discharge' },
        { id: 'b', text: 'The ectopic impulse was blocked retrogradely at the AV node, so the SA node kept its own rhythm' },
        { id: 'c', text: 'The ventricles were refractory for two full cycles' },
        { id: 'd', text: 'The SA node was suppressed by the ectopic focus for one cycle' },
      ],
      answerId: 'b',
      explanation: 'Retrograde conduction from the ventricle usually fails in the AV node, so the sinus node never receives the ectopic impulse and discharges on schedule; the next conducted sinus beat therefore lands exactly two cycles after the previous one. Resetting the SA node is what a PAC does, and it gives a shorter, non-compensatory pause.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with frequent premature beats has an apical rate of 92 and a radial pulse of 74. The best explanation is:',
      options: [
        { id: 'a', text: 'Atrial fibrillation has developed' },
        { id: 'b', text: 'Some beats occur so early that filling and stroke volume are too small to open the aortic valve' },
        { id: 'c', text: 'The examiner is miscounting because of respiratory sinus arrhythmia' },
        { id: 'd', text: 'The premature beats conduct with a wide QRS, which slows the pulse wave' },
      ],
      answerId: 'b',
      explanation: 'This is a pulse deficit: early beats follow very short diastoles, so end-diastolic volume and therefore stroke volume are too small to generate a palpable peripheral pulse, even though the beat is audible at the apex. QRS width does not alter pulse-wave transmission, and sinus arrhythmia varies timing rather than creating a deficit.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Carotid sinus massage abruptly terminates a regular narrow-complex tachycardia at 190 per minute. The mechanism of termination is:',
      options: [
        { id: 'a', text: 'Vagal stimulation increases AV nodal refractoriness, breaking a circuit that uses the node as one limb' },
        { id: 'b', text: 'Vagal stimulation directly suppresses the ventricular ectopic focus' },
        { id: 'c', text: 'Carotid massage raises blood pressure and mechanically stops the arrhythmia' },
        { id: 'd', text: 'Acetylcholine shortens the atrial refractory period, extinguishing re-entry' },
      ],
      answerId: 'a',
      explanation: 'Acetylcholine increases potassium conductance and reduces the L-type calcium current in nodal tissue, slowing conduction and lengthening refractoriness. Since AV-nodal re-entry uses the node as an obligatory limb, this breaks the circuit. Vagal fibres barely innervate the ventricles, and SHORTENING refractory periods would favour re-entry, not stop it.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Premature ventricular contraction', ecg: 'pvc', caption: 'Wide bizarre QRS with no preceding P and a discordant T, followed by a full compensatory pause.' },
    { title: 'Premature atrial contraction', ecg: 'pac', caption: 'Early abnormal P with a normal narrow QRS; the reset sinus node gives an incomplete pause.' },
  ],
};

export default ghpPrematureBeatsTachycardias;
