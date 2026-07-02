import type { Lecture } from '../../lib/types';

export const kubCongenitalAnomalies: Lecture = {
  id: 'kub-congenital-anomalies',
  title: 'Congenital Anomalies of the Kidney & Urinary Tract',
  system: 'renal',
  source: 'L2 — Development of the Kidney & Urinary Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L2 KUB Development' },
    { kind: 'disease', label: 'CAKUT' },
    { kind: 'exam', label: 'Horseshoe kidney' },
  ],

  highYield: [
    '**Congenital anomalies of the kidney and urinary tract (CAKUT) trace back to the developmental steps** — bud formation, branching/induction, ascent, fusion and cloacal partition. They are among the commonest antenatally detected malformations and a leading cause of childhood chronic kidney disease.',
    '**Failures of ascent and fusion:** a **horseshoe kidney** (lower poles fused) ascends only until it catches under the **inferior mesenteric artery** — so it sits low; an **ectopic (pelvic) kidney** fails to ascend at all; **renal agenesis** (uni- or bilateral) results from failure of the ureteric bud to form or induce mesenchyme.',
    '**Bilateral renal agenesis / severe obstruction → oligohydramnios → Potter sequence:** because fetal urine makes most amniotic fluid, its loss causes lung hypoplasia, limb contractures and the characteristic flattened "Potter facies" — incompatible with life if bilateral.',
    '**Duplication and obstruction anomalies:** a **split or duplex ureteric bud** → duplicated ureter/collecting system; **posterior urethral valves** (males) obstruct outflow → bilateral hydronephrosis; **ureteropelvic junction obstruction** is the commonest cause of antenatal hydronephrosis; abnormal oblique tunnel → **vesicoureteric reflux** → reflux nephropathy.',
    '**Cystic and ventral-wall defects:** **polycystic kidney disease** (autosomal dominant — adult; autosomal recessive — infantile) and **multicystic dysplastic kidney** (failed bud–blastema induction); **bladder exstrophy** and **epispadias** from a ventral body-wall/cloacal membrane defect; a patent **urachus** causes urine leakage from the umbilicus.',
  ],

  mechanism: {
    title: 'Each anomaly maps to a developmental step that failed',
    steps: [
      { id: 's1', label: 'Bud fails to form/induce → renal agenesis', emphasis: 'key' },
      { id: 's2', label: 'Failed/incomplete ascent → pelvic or horseshoe kidney (caught at IMA)', emphasis: 'key' },
      { id: 's3', label: 'Split bud → duplex ureter; failed induction → dysplastic cysts' },
      { id: 's4', label: 'Bilateral agenesis → oligohydramnios → Potter sequence', emphasis: 'danger' },
      { id: 's5', label: 'Ventral wall/cloacal defect → bladder exstrophy; patent urachus' },
    ],
  },

  examFindings: [
    { sign: 'Low-lying midline kidney caught under the IMA', mechanism: 'Horseshoe kidney (fused lower poles)', significance: 'key' },
    { sign: 'Oligohydramnios + lung hypoplasia + Potter facies', mechanism: 'Bilateral renal agenesis/severe obstruction (fetal urine makes amniotic fluid)', significance: 'key' },
    { sign: 'Antenatal bilateral hydronephrosis in a male', mechanism: 'Posterior urethral valves (outflow obstruction)', significance: 'key' },
    { sign: 'Duplicated ureter/collecting system', mechanism: 'Premature splitting of the ureteric bud', significance: 'supportive' },
    { sign: 'Urine draining from the umbilicus', mechanism: 'Patent urachus (failed allantois regression)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A fused kidney that cannot ascend past a major artery', meaning: 'Horseshoe kidney (trapped under the inferior mesenteric artery)' },
    { clue: 'The amniotic-fluid consequence of bilateral renal agenesis', meaning: 'Oligohydramnios → Potter sequence' },
    { clue: 'Commonest cause of antenatal hydronephrosis', meaning: 'Ureteropelvic junction (UPJ) obstruction' },
    { clue: 'Cause of a ventral bladder wall open on the abdomen', meaning: 'Bladder exstrophy (body-wall/cloacal membrane defect)' },
  ],

  treatment: [
    { logic: 'Why anomalies matter', detail: 'They cause obstruction, infection, stones, hypertension and childhood CKD; each maps to a step in [[kidney-development-metanephros]]. Reflux and obstruction present with UTI/haematuria on [[urinalysis-physical-chemical]] and imaging. Adult PKD is a common cause of progressive renal failure and hypertension ([[renal-hemodynamics-autoregulation]]).' },
  ],

  mnemonics: [
    { hook: 'Horseshoe kidney is "hooked" under the IMA', expansion: ['Lower poles fuse and can\'t pass the inferior mesenteric artery', 'Sits low in the abdomen'] },
    { hook: 'Potter: "Pulmonary hypoplasia, Oligohydramnios, Twisted limbs, Ears low, Renal agenesis"', expansion: ['No fetal urine → no amniotic fluid → compression', 'Bilateral is fatal (lung hypoplasia)'] },
  ],

  traps: [
    {
      questionCategory: 'Cause of the Potter sequence',
      wrongInstinct: 'Potter sequence is a primary lung disease',
      rightAnswer: 'Potter sequence is caused by OLIGOHYDRAMNIOS — usually from bilateral renal agenesis or severe obstruction — because fetal urine produces most amniotic fluid; the lung hypoplasia and limb deformities are secondary to compression',
      why: 'It is a mechanical/fluid consequence of absent fetal urine, not an intrinsic lung defect — the kidneys are the root cause.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A horseshoe kidney sits abnormally low in the abdomen because its ascent is arrested by the:',
      options: [
        { id: 'a', text: 'Inferior mesenteric artery' },
        { id: 'b', text: 'Diaphragm' },
        { id: 'c', text: 'Superior mesenteric vein' },
        { id: 'd', text: 'Coeliac trunk' },
      ],
      answerId: 'a',
      explanation: 'The fused lower poles of a horseshoe kidney cannot pass beneath the inferior mesenteric artery during ascent, so the kidney remains low in the abdomen.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Bilateral renal agenesis is incompatible with postnatal life primarily because the resulting oligohydramnios causes:',
      options: [
        { id: 'a', text: 'Excess amniotic fluid and hydrops' },
        { id: 'b', text: 'Pulmonary hypoplasia' },
        { id: 'c', text: 'Congenital heart block' },
        { id: 'd', text: 'Neural tube defects' },
      ],
      answerId: 'b',
      explanation: 'Fetal urine generates most amniotic fluid; its absence (oligohydramnios) prevents normal lung expansion, producing lethal pulmonary hypoplasia — the core of the Potter sequence.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default kubCongenitalAnomalies;
