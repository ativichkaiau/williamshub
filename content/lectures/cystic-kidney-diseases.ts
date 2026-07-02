import type { Lecture } from '../../lib/types';

export const cysticKidneyDiseases: Lecture = {
  id: 'cystic-kidney-diseases',
  title: 'Cystic Diseases of the Kidney',
  system: 'renal',
  source: 'L8 — Cystic Diseases of the Kidney',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L8 Cystic Kidney' },
    { kind: 'mechanism', label: 'Inherited vs acquired cysts' },
    { kind: 'exam', label: 'ADPKD vs ARPKD; simple cysts' },
  ],

  highYield: [
    '**Renal cysts range from harmless to disease-defining. SIMPLE CYSTS are very common, increase with age, and are BENIGN (thin-walled, no septa/solid component on ultrasound — Bosniak I) needing no treatment. The important inherited cystic diseases are AUTOSOMAL DOMINANT (ADPKD) and AUTOSOMAL RECESSIVE (ARPKD) polycystic kidney disease.**',
    '**ADPKD is the commonest inherited kidney disease (adults): PKD1 (chromosome 16, more severe) or PKD2 mutations → progressive BILATERAL enlargement with numerous cysts → hypertension, haematuria, flank pain, and CKD progressing to end-stage renal disease by mid-adulthood. EXTRARENAL features: hepatic cysts, BERRY (intracranial) ANEURYSMS (subarachnoid haemorrhage risk), mitral valve prolapse, and colonic diverticula.**',
    '**ARPKD presents in INFANCY/childhood: bilateral enlarged kidneys with numerous small cysts + CONGENITAL HEPATIC FIBROSIS (portal hypertension); severe cases cause oligohydramnios and pulmonary hypoplasia (Potter sequence). Other cystic conditions: medullary sponge kidney (usually benign, stones/haematuria), medullary cystic/nephronophthisis (childhood CKD), and ACQUIRED cystic disease in long-term dialysis (raised RCC risk).**',
    '**Diagnosis is by IMAGING (ultrasound/CT/MRI) with age-adjusted cyst criteria and family history/genetics for ADPKD; complex or solid/enhancing cysts (higher Bosniak categories) raise concern for malignancy and need urology. Management of ADPKD: control BLOOD PRESSURE (ACEi/ARB), treat complications, and TOLVAPTAN (a vasopressin V2 antagonist) can slow cyst growth in selected patients; screen relatives and consider aneurysm screening.**',
    '**The take-home: SIMPLE cysts (benign, common); ADPKD (adult, PKD1/2, bilateral cysts → CKD/ESRD + berry aneurysms/hepatic cysts; treat BP ± tolvaptan) vs ARPKD (infancy, hepatic fibrosis, Potter sequence); acquired cystic disease in dialysis (RCC risk). Complex/solid cysts → suspect malignancy.** ADPKD progresses to the CKD of [[chronic-kidney-disease]]; renal tumours are in [[urinary-system-neoplasms]]; tolvaptan links to the posterior-pituitary drugs of endocrinology.',
  ],

  mechanism: {
    title: 'Simple cysts (benign) vs ADPKD (adult, PKD1/2, bilateral → ESRD + berry aneurysm) vs ARPKD (infant, hepatic fibrosis); complex cyst → malignancy',
    steps: [
      { id: 's1', label: 'Simple cysts = common, benign (thin-walled, Bosniak I) — no treatment', emphasis: 'key' },
      { id: 's2', label: 'ADPKD (adult): PKD1/PKD2 → bilateral cysts → HTN, CKD/ESRD', emphasis: 'key' },
      { id: 's3', label: 'ADPKD extrarenal: berry aneurysms (SAH), hepatic cysts, MVP, diverticula', emphasis: 'danger' },
      { id: 's4', label: 'ARPKD (infancy): + congenital hepatic fibrosis; severe → Potter sequence', emphasis: 'key' },
      { id: 's5', label: 'ADPKD Rx: control BP (ACEi/ARB) ± tolvaptan; complex/solid cyst → suspect malignancy', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Bilateral enlarged kidneys with numerous cysts, hypertension and CKD in an adult', mechanism: 'ADPKD (PKD1/PKD2)', significance: 'key' },
    { sign: 'Sudden severe headache in a patient with ADPKD', mechanism: 'Ruptured berry (intracranial) aneurysm — SAH', significance: 'key' },
    { sign: 'Infant with enlarged kidneys and congenital hepatic fibrosis', mechanism: 'ARPKD', significance: 'key' },
    { sign: 'An incidental thin-walled renal cyst on ultrasound', mechanism: 'Simple (benign) cyst — no treatment', significance: 'supportive' },
    { sign: 'Complex cyst with septa/solid enhancing component', mechanism: 'Higher Bosniak category — malignancy risk', significance: 'key' },
  ],

  investigations: [
    { clue: 'The commonest inherited kidney disease', meaning: 'Autosomal dominant polycystic kidney disease (ADPKD)' },
    { clue: 'The extrarenal vascular association of ADPKD', meaning: 'Berry (intracranial) aneurysms' },
    { clue: 'The polycystic disease presenting in infancy with hepatic fibrosis', meaning: 'ARPKD' },
    { clue: 'The drug that can slow cyst growth in ADPKD', meaning: 'Tolvaptan (vasopressin V2 antagonist)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Distinguishing benign simple cysts from inherited polycystic disease and from complex (possibly malignant) cysts drives very different actions: reassurance vs lifelong management vs urological work-up. ADPKD needs blood-pressure control, complication management (including awareness of berry-aneurysm SAH) and possibly tolvaptan, with family screening; ARPKD involves paediatric and hepatic care. ADPKD is a major cause of the CKD in [[chronic-kidney-disease]]; renal malignancy is in [[urinary-system-neoplasms]].' },
  ],

  mnemonics: [
    { hook: '"ADPKD = Adult, Dominant, PKD1/2, bilateral → berry Aneurysms + hepatic cysts"', expansion: ['ARPKD = infant + hepatic fibrosis', 'Simple cyst = benign'] },
    { hook: '"Complex/solid cyst = suspect cancer (Bosniak up)"; tolvaptan slows ADPKD', expansion: ['Control BP (ACEi/ARB)', 'Dialysis → acquired cysts → RCC'] },
  ],

  traps: [
    {
      questionCategory: 'ADPKD extrarenal complications',
      wrongInstinct: 'Polycystic kidney disease only affects the kidneys',
      rightAnswer: 'ADPKD is a SYSTEMIC disorder: besides renal cysts and progressive CKD, it causes HEPATIC (and other) cysts, intracranial BERRY ANEURYSMS (risk of fatal subarachnoid haemorrhage), mitral valve prolapse and colonic diverticula — so a severe headache in an ADPKD patient must raise concern for aneurysm rupture, and family/aneurysm screening is considered',
      why: 'Missing the extrarenal (especially cerebral aneurysm) associations can be fatal; recognising ADPKD as systemic changes surveillance and the interpretation of new symptoms like headache.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An adult with bilaterally enlarged kidneys full of cysts, hypertension and a family history of kidney failure is at increased risk of which extrarenal complication?',
      options: [
        { id: 'a', text: 'Pulmonary fibrosis' },
        { id: 'b', text: 'Intracranial (berry) aneurysm with subarachnoid haemorrhage' },
        { id: 'c', text: 'Cataracts' },
        { id: 'd', text: 'Peptic ulcer disease' },
      ],
      answerId: 'b',
      explanation: 'ADPKD is systemic: it is associated with intracranial berry aneurysms (risk of subarachnoid haemorrhage), hepatic cysts, mitral valve prolapse and colonic diverticula. A severe headache in an ADPKD patient should prompt urgent evaluation for aneurysm rupture.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A thin-walled renal cyst with no septa, calcification or solid component (Bosniak I) found incidentally on ultrasound should be managed by:',
      options: [
        { id: 'a', text: 'Immediate nephrectomy' },
        { id: 'b', text: 'Reassurance — it is a benign simple cyst needing no treatment' },
        { id: 'c', text: 'Chemotherapy' },
        { id: 'd', text: 'Tolvaptan' },
      ],
      answerId: 'b',
      explanation: 'Simple renal cysts are common, increase with age and are benign (Bosniak I: thin wall, no septa/solid component), requiring no treatment. Complex cysts with septa, thick walls or enhancing solid components fall into higher Bosniak categories and warrant evaluation for malignancy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default cysticKidneyDiseases;
