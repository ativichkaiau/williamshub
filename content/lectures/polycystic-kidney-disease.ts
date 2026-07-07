import type { Lecture } from '../../lib/types';

export const polycysticKidneyDisease: Lecture = {
  id: 'polycystic-kidney-disease',
  title: 'Polycystic Kidney Disease (ADPKD)',
  system: 'renal',
  source: 'L8 — Cystic Diseases of the Kidney',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L8 ADPKD' },
    { kind: 'mechanism', label: 'PKD1/2 polycystin; extrarenal' },
    { kind: 'exam', label: 'Berry aneurysm; tolvaptan' },
  ],

  highYield: [
    'AUTOSOMAL DOMINANT PKD (ADPKD) is the commonest inherited kidney disease and a major cause of ESRD. Mutations in PKD1 (chromosome 16, ~85%, more severe/earlier ESRD) or PKD2 (chromosome 4, milder) disrupt POLYCYSTIN in the primary cilium, so tubular epithelium proliferates and forms progressively enlarging CYSTS that destroy kidney architecture. It presents in ADULTHOOD with hypertension, flank pain, haematuria, recurrent UTI/stones and enlarging palpable kidneys, progressing to CKD.',
    'EXTRA-RENAL manifestations are key: HEPATIC (and pancreatic) cysts; intracranial BERRY (saccular) ANEURYSMS — risk of subarachnoid haemorrhage, so screen those with a family history of aneurysm/SAH; MITRAL VALVE PROLAPSE and other cardiac valve disease; and colonic diverticulosis/abdominal wall hernias. A positive FAMILY HISTORY (dominant inheritance) is usual, though new mutations occur.',
    'AUTOSOMAL RECESSIVE PKD (ARPKD, PKHD1/fibrocystin) presents in NEONATES/infancy with markedly enlarged kidneys, oligohydramnios/Potter sequence, pulmonary hypoplasia and congenital hepatic FIBROSIS (portal hypertension) — a distinct, earlier and rarer disease. Other cystic diseases: simple cysts (common, benign), acquired cystic disease of dialysis, and medullary sponge kidney.',
    'MANAGEMENT: rigorous BLOOD-PRESSURE control (RAAS blockade) to slow progression and protect the heart/vessels; treat cyst infections/haemorrhage and stones; and TOLVAPTAN (a vasopressin V2-receptor antagonist) slows cyst growth and GFR decline in rapidly progressive ADPKD. Ultimately renal replacement therapy/transplant. Screen/counsel relatives; consider aneurysm screening in high-risk families.',
    '**The take-home: ADPKD = commonest inherited kidney disease — PKD1/PKD2 polycystin defect → enlarging cysts → hypertension + CKD; EXTRARENAL: hepatic cysts, BERRY ANEURYSMS (SAH), mitral prolapse. ARPKD = neonatal, hepatic fibrosis. Control BP (RAAS), TOLVAPTAN slows progression; screen family.** CKD is [[chronic-kidney-disease]]; renovascular disease is [[renovascular-disorders]]; the overview is [[cystic-kidney-diseases]].',
  ],

  mechanism: {
    title: 'ADPKD: PKD1/PKD2 polycystin (cilium) defect → enlarging cysts → hypertension/CKD; extrarenal (hepatic cysts, berry aneurysm, mitral prolapse); BP control + tolvaptan; ARPKD = neonatal',
    steps: [
      { id: 's1', label: 'PKD1 (85%, severe)/PKD2 mutations → polycystin/cilium defect → cysts', emphasis: 'key' },
      { id: 's2', label: 'Enlarging cysts → hypertension, flank pain, haematuria, CKD (adult onset)', emphasis: 'key' },
      { id: 's3', label: 'Extrarenal: hepatic cysts, berry aneurysm (SAH), mitral valve prolapse', emphasis: 'danger' },
      { id: 's4', label: 'ARPKD (PKHD1/fibrocystin): neonatal, hepatic fibrosis, Potter sequence', emphasis: 'key' },
      { id: 's5', label: 'BP control (RAAS) + tolvaptan (V2 antagonist) slow progression; screen family', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hypertension, bilateral flank masses and haematuria in an adult', mechanism: 'ADPKD (enlarging cysts)', significance: 'key' },
    { sign: 'Sudden thunderclap headache in an ADPKD patient', mechanism: 'Ruptured berry aneurysm (subarachnoid haemorrhage)', significance: 'key' },
    { sign: 'Hepatic cysts and mitral valve prolapse with polycystic kidneys', mechanism: 'Extrarenal ADPKD manifestations', significance: 'key' },
    { sign: 'Neonate with huge kidneys, oligohydramnios and hepatic fibrosis', mechanism: 'Autosomal recessive PKD', significance: 'supportive' },
    { sign: 'Slowed GFR decline on a vasopressin V2-receptor antagonist', mechanism: 'Tolvaptan in rapidly progressive ADPKD', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest inherited kidney disease', meaning: 'Autosomal dominant PKD' },
    { clue: 'The more severe ADPKD gene (earlier ESRD)', meaning: 'PKD1 (chromosome 16)' },
    { clue: 'The dangerous vascular extrarenal lesion', meaning: 'Intracranial berry aneurysm (SAH risk)' },
    { clue: 'The drug that slows cyst growth in ADPKD', meaning: 'Tolvaptan (V2-receptor antagonist)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'ADPKD is a common inherited cause of CKD/ESRD with important extrarenal disease. Management slows progression (strict BP control with RAAS blockade; tolvaptan for rapidly progressive disease) and anticipates complications: cyst infection/haemorrhage, stones, and — critically — berry aneurysms (screen high-risk families, counsel about subarachnoid haemorrhage) and cardiac valve disease. ARPKD is a distinct neonatal disease with hepatic fibrosis. Genetic counselling and relative screening are part of care. CKD is [[chronic-kidney-disease]]; the cystic-disease overview is [[cystic-kidney-diseases]].' },
  ],

  mnemonics: [
    { hook: 'ADPKD extrarenal: "Liver cysts, Aneurysm (berry), Mitral prolapse"', expansion: ['PKD1 = severe (chr 16)', 'Berry aneurysm → SAH'] },
    { hook: '"Tolvaptan (V2 blocker) slows cysts; RAAS controls BP"', expansion: ['ARPKD = neonatal + hepatic fibrosis', 'Screen the family'] },
  ],

  traps: [
    {
      questionCategory: 'Extrarenal disease in ADPKD',
      wrongInstinct: 'ADPKD only affects the kidneys, so a headache in these patients is unrelated',
      rightAnswer: 'ADPKD is a systemic disease: besides renal cysts it causes HEPATIC/pancreatic cysts, cardiac valve disease (mitral prolapse) and — importantly — intracranial BERRY ANEURYSMS, so a severe/thunderclap headache may be a subarachnoid haemorrhage; patients with a family history of aneurysm or SAH should be considered for aneurysm screening',
      why: 'Treating ADPKD as a purely renal disease risks missing a ruptured berry aneurysm (subarachnoid haemorrhage) — a life-threatening extrarenal complication that a headache in these patients should raise.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 35-year-old with hypertension, bilateral flank masses and a family history of kidney disease is found to have enlarged kidneys full of cysts. Which extrarenal complication must be considered?',
      options: [
        { id: 'a', text: 'Intracranial berry aneurysm (subarachnoid haemorrhage risk)' },
        { id: 'b', text: 'Optic glioma' },
        { id: 'c', text: 'Pheochromocytoma only' },
        { id: 'd', text: 'Medullary thyroid cancer' },
      ],
      answerId: 'a',
      explanation: 'ADPKD is systemic: it causes hepatic cysts, mitral valve prolapse and intracranial berry (saccular) aneurysms, which can rupture causing subarachnoid haemorrhage. Patients with a family history of aneurysm/SAH should be considered for screening.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which drug slows cyst growth and the decline in GFR in rapidly progressive ADPKD?',
      options: [
        { id: 'a', text: 'A loop diuretic' },
        { id: 'b', text: 'Tolvaptan (a vasopressin V2-receptor antagonist)' },
        { id: 'c', text: 'Allopurinol' },
        { id: 'd', text: 'An SGLT2 inhibitor' },
      ],
      answerId: 'b',
      explanation: 'Tolvaptan, a vasopressin V2-receptor antagonist, reduces cyst-driving cAMP signalling and slows cyst growth and GFR decline in rapidly progressive ADPKD, alongside rigorous blood-pressure control with RAAS blockade.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default polycysticKidneyDisease;
