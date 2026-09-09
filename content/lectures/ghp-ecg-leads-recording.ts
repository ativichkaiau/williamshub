import type { Lecture } from '../../lib/types';
import { ECG_LEADS_AXIS } from '../../lib/figures';

export const ghpEcgLeadsRecording: Lecture = {
  id: 'ghp-ecg-leads-recording',
  title: 'ECG Leads & Recording',
  system: 'cardiovascular',
  source: 'Ch 11 — The Normal Electrocardiogram',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 11 Normal Electrocardiogram' },
    { kind: 'mechanism', label: 'One dipole, twelve viewpoints' },
    { kind: 'exam', label: 'Einthoven · aVR/aVL/aVF · V1-V6' },
  ],

  highYield: [
    '**A "lead" is not a wire — it is a VIEWING AXIS with a defined positive end.** The heart is treated as a single dipole sitting at the electrical centre of the body; each lead reports the **projection of that dipole onto its own axis**. Vector toward the positive electrode = **upward deflection**; away = **downward**; perpendicular = **biphasic or flat**. Twelve leads = twelve projections of one moving arrow.',
    '**Einthoven\'s triangle: RA, LA and LL as the apexes of an equilateral triangle around the heart, giving the three BIPOLAR limb leads.** **Lead I = LA(+) minus RA(−), axis 0°**; **Lead II = LL(+) minus RA(−), axis +60°**; **Lead III = LL(+) minus LA(−), axis +120°**. The right leg is the **ground/reference electrode**, not a recording lead.',
    '**Einthoven\'s law: Lead I + Lead III = Lead II** (algebraically, at every instant). It is a **Kirchhoff consequence** of sampling one dipole from three points on a closed loop — so any missing limb lead can be derived, and a strip that **violates** the law tells you the **electrodes are misplaced or reversed**.',
    '**The augmented UNIPOLAR limb leads (aVR, aVL, aVF)** put the exploring electrode on one limb and reference it to the **average of the other two**. That reference halves the signal, so the machine **augments it by ~50%** (hence "a"). Axes: **aVL −30°, aVF +90°, aVR −150°** — and because the mean cardiac vector points down-and-left, **aVR is normally entirely NEGATIVE (P, QRS and T all inverted)**. The six limb leads together map the **frontal plane** every 30°.',
    '**The chest (precordial) leads V1–V6 are unipolar, sit close to the heart, and map the HORIZONTAL plane.** **V1** 4th intercostal space right sternal border, **V2** 4th ICS left sternal border, **V3** midway V2–V4, **V4** 5th ICS mid-clavicular line, **V5** anterior axillary line and **V6** mid-axillary line at the V4 level. Being near-field, they record **large, locally dominated deflections** — which is why they localise so well.',
    '**What each chest lead faces, and the normal progression.** **V1–V2 face the septum and right ventricle** → small r, deep S (**rS**), because the big left-ventricular vector points away. **V3–V4 face the anterior wall** (transition zone, R ≈ S). **V5–V6 face the lateral left ventricle** → **tall R with a small septal q**. Frontal-plane territories: **inferior II, III, aVF**; **lateral I, aVL, V5–V6**; **anteroseptal V1–V4**. Loss of that R-wave growth (**poor R-wave progression**) means anterior forces were lost or the electrodes were misplaced.',
  ],

  mechanism: {
    title: 'One dipole, projected onto twelve axes — geometry, not twelve separate signals',
    steps: [
      { id: 's1', label: 'Heart = single dipole at the centre of Einthoven triangle', emphasis: 'key' },
      { id: 's2', label: 'Bipolar limb leads I, II, III record the difference between two limbs', emphasis: 'normal' },
      { id: 's3', label: 'Closed loop of one dipole → I + III = II (Einthoven law)', emphasis: 'key' },
      { id: 's4', label: 'aVR/aVL/aVF: one limb vs the average of the other two, boosted 50%', emphasis: 'key' },
      { id: 's5', label: 'Six limb leads tile the frontal plane every 30 degrees', emphasis: 'normal' },
      { id: 's6', label: 'V1-V6 sit on the chest → horizontal plane, near-field, big deflections', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'P, QRS and T all inverted in aVR', mechanism: 'Mean cardiac vector points down and left, away from the right shoulder', significance: 'key' },
    { sign: 'rS pattern in V1 growing to a tall R in V6', mechanism: 'Normal R-wave progression as leads swing toward the dominant left ventricular vector', significance: 'key' },
    { sign: 'Lead I plus lead III amplitudes equal lead II', mechanism: 'Einthoven law holds when electrodes are correctly placed', significance: 'supportive' },
    { sign: 'Inverted P and QRS in lead I with an upright aVR', mechanism: 'Right and left arm electrodes reversed - a recording artefact, not disease', significance: 'key' },
    { sign: 'Poor R-wave progression across V1 to V4', mechanism: 'Lost anterior forces (old anterior infarct) or chest electrodes placed too high', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Positive electrode on the left leg, negative on the right arm', meaning: 'Lead II, axis +60 degrees - usually the best P waves' },
    { clue: 'Limb lead whose axis lies at 0 degrees', meaning: 'Lead I (right arm negative, left arm positive)' },
    { clue: 'The lead that is normally entirely negative', meaning: 'aVR, at -150 degrees' },
    { clue: 'Electrode in the 4th intercostal space at the right sternal border', meaning: 'V1 - faces the septum and right ventricle' },
    { clue: 'Electrode in the 5th intercostal space, mid-clavicular line', meaning: 'V4 - the anterior wall and usual transition zone' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Lead geometry is what converts a squiggle into a location: **inferior II/III/aVF, lateral I/aVL/V5-V6, anteroseptal V1-V4**. Get the electrodes wrong and you invent disease — arm reversal mimics dextrocardia, high chest leads mimic anterior infarction. The wave content being projected is covered in [[ghp-normal-ecg-waves]], the averaging of those projections in [[ghp-mean-electrical-axis]]. MedCMU parallels: [[ecg-leads-axis]] and, for the clinical payoff, [[stemi-localization]].' },
    { logic: 'The quick placement audit', detail: 'Check three things before believing an abnormal ECG: the standardisation pulse (**10 mm = 1 mV**), an inverted aVR (upright aVR with an inverted lead I means the arms are swapped), and smooth R-wave growth V1 to V6. Systematic reading order: [[ecg-systematic-interpretation]].' },
  ],

  mnemonics: [
    { hook: 'Einthoven: I + III = II - the triangle must balance', expansion: ['I at 0, II at +60, III at +120 degrees', 'If it does not balance, suspect electrode reversal'] },
    { hook: 'aVR is the lead that should look wrong: everything inverted is NORMAL', expansion: ['aVL -30, aVF +90, aVR -150', 'Upright aVR means swapped arms, dextrocardia, or a ventricular rhythm'] },
    { hook: 'Chest leads walk a row: V1-V2 hug the sternum, V4 mid-clavicular, V5 anterior axillary, V6 mid-axillary', expansion: ['V1-V2 septal, V3-V4 anterior, V5-V6 lateral', 'R grows, S shrinks, transition at V3-V4'] },
  ],

  traps: [
    {
      questionCategory: 'Which plane a lead group samples',
      wrongInstinct: 'All twelve leads look at the heart from the front, so more leads simply means more detail',
      rightAnswer: 'The six limb leads map the FRONTAL plane; the six chest leads map the HORIZONTAL plane - together they give a three-dimensional view',
      why: 'Localisation depends on the plane: an isolated posterior infarct is invisible frontally and shows only as tall R with ST depression in V1-V2.',
    },
    {
      questionCategory: 'Normal versus abnormal in aVR',
      wrongInstinct: 'Inverted P, QRS and T in aVR is an abnormal finding that needs explaining',
      rightAnswer: 'Complete inversion in aVR is the NORMAL pattern; an upright QRS in aVR is the finding that needs explaining',
      why: 'aVR looks at the heart from the right shoulder, opposite the normal down-and-left mean vector.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A technician records an ECG in which lead II is not available. Applying Einthoven law, lead II can be reconstructed as:',
      options: [
        { id: 'a', text: 'Lead I minus lead III' },
        { id: 'b', text: 'Lead I plus lead III' },
        { id: 'c', text: 'Lead III minus lead I' },
        { id: 'd', text: 'The average of aVR and aVF' },
      ],
      answerId: 'b',
      explanation: 'Einthoven law states I + III = II at every instant, a Kirchhoff consequence of sampling a single dipole from the three apexes of the limb-lead triangle. The subtraction options invert the sign convention, and no simple average of augmented leads reproduces lead II.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A normal ECG shows a small r wave with a deep S in V1 and a tall R in V6. The physiological reason is:',
      options: [
        { id: 'a', text: 'V1 is a bipolar lead and V6 is unipolar' },
        { id: 'b', text: 'The right ventricle depolarises after the left ventricle' },
        { id: 'c', text: 'The dominant left ventricular vector points away from V1 and toward V6' },
        { id: 'd', text: 'V1 records only atrial activity' },
      ],
      answerId: 'c',
      explanation: 'Left ventricular mass dominates the QRS vector, which points down and to the left: away from V1 (negative, deep S) and toward V6 (positive, tall R). Both V leads are unipolar; the ventricles depolarise essentially together after an initial left-to-right septal vector; and V1 records ventricular activity like any other lead.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'An ECG shows an upright P, QRS and T in aVR with an entirely inverted lead I, but normal chest leads. The most likely explanation is:',
      options: [
        { id: 'a', text: 'Right and left arm electrodes have been reversed' },
        { id: 'b', text: 'Extensive lateral myocardial infarction' },
        { id: 'c', text: 'Right ventricular hypertrophy' },
        { id: 'd', text: 'Complete heart block' },
      ],
      answerId: 'a',
      explanation: 'Swapping the arm electrodes inverts lead I and turns aVR upright while leaving the chest leads untouched, since those use a different reference. True dextrocardia would also show reversed R-wave progression across the chest leads. Infarction, hypertrophy and block do not produce this isolated limb-lead mirror image.',
      tests: 'investigation',
    },
  ],

  figures: [
    { title: 'Limb leads, augmented leads and the frontal plane', svg: ECG_LEADS_AXIS, caption: 'Einthoven triangle (I, II, III) plus aVR, aVL and aVF tile the frontal plane every 30 degrees; V1-V6 add the horizontal plane.' },
  ],
};

export default ghpEcgLeadsRecording;
