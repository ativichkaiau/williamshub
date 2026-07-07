import type { Lecture } from '../../lib/types';

export const renovascularDisorders: Lecture = {
  id: 'renovascular-disorders',
  title: 'Renovascular Disorders',
  system: 'renal',
  source: 'L10 — Renovascular Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L10 Renovascular' },
    { kind: 'mechanism', label: 'Stenosis & microangiopathy' },
    { kind: 'exam', label: 'RAS; ACEi caution; TMA' },
  ],

  highYield: [
    'RENAL ARTERY STENOSIS (RAS) reduces renal perfusion → activates RENIN-angiotensin → SECONDARY (renovascular) HYPERTENSION and, if bilateral, ischaemic nephropathy. Two causes: ATHEROSCLEROSIS (older patients, ostial, commonest) and FIBROMUSCULAR DYSPLASIA (young women, "string of beads" mid-artery). Clues: resistant/early or late-onset hypertension, an abdominal BRUIT, and a small kidney.',
    'Key pharmacology trap: in BILATERAL RAS (or stenosis to a single kidney), the glomerular filtration depends on angiotensin-II-mediated EFFERENT arteriolar constriction — so an ACE INHIBITOR/ARB removes that support and precipitates ACUTE KIDNEY INJURY (a sharp creatinine rise). A significant creatinine rise after starting an ACEi/ARB should raise suspicion of bilateral RAS.',
    'HYPERTENSIVE nephrosclerosis: chronic hypertension damages renal arterioles (hyaline/hyperplastic arteriolosclerosis) → progressive CKD (a leading cause of ESRD). MALIGNANT hypertension causes acute injury (fibrinoid necrosis, "onion-skin" hyperplastic arteriolosclerosis) with haematuria and rapidly rising creatinine — a hypertensive emergency.',
    'THROMBOTIC MICROANGIOPATHY (TMA) — small-vessel endothelial injury with platelet/fibrin thrombi → microangiopathic haemolytic anaemia (schistocytes) + thrombocytopenia + AKI: HAEMOLYTIC-URAEMIC SYNDROME (HUS — classically Shiga-toxin E. coli O157 in children, bloody diarrhoea) and TTP (ADAMTS13 deficiency, + neuro/fever pentad). Also renal artery/vein thrombosis and cholesterol emboli.',
    '**The take-home: RENAL ARTERY STENOSIS (atherosclerosis vs fibromuscular dysplasia → renovascular HTN; ACEi/ARB can cause AKI in BILATERAL disease); hypertensive nephrosclerosis (chronic HTN → CKD; malignant HTN = emergency); THROMBOTIC MICROANGIOPATHY (HUS/TTP — haemolysis + low platelets + AKI). Watch creatinine after starting ACEi/ARB.** RAAS physiology underlies this (HRU-1/cardiology); ACEi/ARB are cardiovascular drugs; CKD progression is [[chronic-kidney-disease]].',
  ],

  mechanism: {
    title: 'RAS (atheroma/FMD → renovascular HTN; ACEi risk in bilateral) / hypertensive nephrosclerosis / TMA (HUS-TTP: haemolysis+low platelets+AKI)',
    steps: [
      { id: 's1', label: 'Renal artery stenosis → ↑renin → renovascular HTN; ischaemic nephropathy if bilateral', emphasis: 'key' },
      { id: 's2', label: 'Atherosclerosis (older, ostial) vs fibromuscular dysplasia (young women, string of beads)', emphasis: 'key' },
      { id: 's3', label: 'ACEi/ARB in BILATERAL RAS → AKI (removes efferent constriction) — creatinine rises', emphasis: 'danger' },
      { id: 's4', label: 'Hypertensive nephrosclerosis → CKD; malignant HTN (fibrinoid necrosis) = emergency', emphasis: 'key' },
      { id: 's5', label: 'TMA (HUS/TTP): microangiopathic haemolysis + thrombocytopenia + AKI', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Resistant hypertension with an abdominal bruit', mechanism: 'Renal artery stenosis (renovascular hypertension)', significance: 'key' },
    { sign: '"String of beads" renal artery in a young woman', mechanism: 'Fibromuscular dysplasia', significance: 'key' },
    { sign: 'Sharp creatinine rise after starting an ACE inhibitor/ARB', mechanism: 'Bilateral renal artery stenosis', significance: 'key' },
    { sign: 'Schistocytes + thrombocytopenia + AKI after bloody diarrhoea in a child', mechanism: 'Haemolytic-uraemic syndrome (Shiga-toxin E. coli)', significance: 'key' },
    { sign: 'Fibrinoid necrosis/onion-skinning with very high BP and AKI', mechanism: 'Malignant hypertension (emergency)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The two causes of renal artery stenosis', meaning: 'Atherosclerosis (older) and fibromuscular dysplasia (young women)' },
    { clue: 'Why ACEi/ARB can cause AKI in bilateral RAS', meaning: 'They block angiotensin-II efferent constriction that maintains GFR' },
    { clue: 'The triad of thrombotic microangiopathy', meaning: 'Microangiopathic haemolytic anaemia + thrombocytopenia + AKI' },
    { clue: 'The classic cause of childhood HUS', meaning: 'Shiga-toxin E. coli O157:H7 (bloody diarrhoea)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Renovascular disease links hypertension and kidney injury: RAS causes secondary hypertension and, crucially, ACEi/ARB can precipitate AKI in bilateral disease (so monitor creatinine after starting them). Chronic hypertension causes nephrosclerosis and CKD, and malignant hypertension/TMA (HUS-TTP) are emergencies with haemolysis, low platelets and AKI. RAAS physiology underlies renovascular hypertension; ACEi/ARB pharmacology is cardiovascular; progression links to [[chronic-kidney-disease]].' },
  ],

  mnemonics: [
    { hook: '"Atherosclerosis = old/ostial; Fibromuscular dysplasia = young women/string of beads"', expansion: ['RAS → renovascular HTN', 'Abdominal bruit'] },
    { hook: '"ACEi + bilateral RAS = AKI (creatinine jumps)"; TMA = haemolysis + low platelets + AKI', expansion: ['HUS = E. coli O157/kids', 'TTP = ADAMTS13'] },
  ],

  traps: [
    {
      questionCategory: 'ACE inhibitor in bilateral renal artery stenosis',
      wrongInstinct: 'ACE inhibitors are always protective for the kidney, so a rising creatinine after starting one means the drug should simply be pushed higher',
      rightAnswer: 'In BILATERAL renal artery stenosis, GFR is maintained by angiotensin-II-driven EFFERENT arteriolar constriction; an ACE inhibitor/ARB removes this and can cause a sharp fall in GFR (AKI). A significant creatinine rise after starting an ACEi/ARB should prompt suspicion of bilateral RAS and reassessment — not blind dose escalation',
      why: 'Although ACEi/ARB are renoprotective in most proteinuric CKD, in bilateral RAS they precipitate AKI by abolishing the efferent tone that preserves filtration — a key exception that changes the interpretation of a post-ACEi creatinine rise.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient\'s creatinine rises sharply soon after starting an ACE inhibitor for hypertension. This should raise suspicion of:',
      options: [
        { id: 'a', text: 'Minimal change disease' },
        { id: 'b', text: 'Bilateral renal artery stenosis' },
        { id: 'c', text: 'Simple renal cyst' },
        { id: 'd', text: 'A lower urinary tract infection' },
      ],
      answerId: 'b',
      explanation: 'In bilateral renal artery stenosis, glomerular filtration depends on angiotensin-II-mediated efferent arteriolar constriction. An ACE inhibitor/ARB removes this support, causing a sharp drop in GFR and a rising creatinine — a classic clue to bilateral RAS.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child develops microangiopathic haemolytic anaemia (schistocytes), thrombocytopenia and acute kidney injury after an episode of bloody diarrhoea. The diagnosis is:',
      options: [
        { id: 'a', text: 'Post-streptococcal glomerulonephritis' },
        { id: 'b', text: 'Haemolytic-uraemic syndrome (Shiga-toxin E. coli)' },
        { id: 'c', text: 'Minimal change disease' },
        { id: 'd', text: 'Renal artery stenosis' },
      ],
      answerId: 'b',
      explanation: 'The triad of microangiopathic haemolytic anaemia, thrombocytopenia and acute kidney injury after bloody diarrhoea in a child is haemolytic-uraemic syndrome, classically from Shiga-toxin-producing E. coli O157:H7 — a thrombotic microangiopathy. Management is largely supportive.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default renovascularDisorders;
