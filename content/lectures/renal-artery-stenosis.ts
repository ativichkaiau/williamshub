import type { Lecture } from '../../lib/types';

export const renalArteryStenosis: Lecture = {
  id: 'renal-artery-stenosis',
  title: 'Renal Artery Stenosis & Renovascular Hypertension',
  system: 'renal',
  source: 'L10 — Renovascular Disorders',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L10 RAS' },
    { kind: 'mechanism', label: 'RAAS activation; ACEi AKI clue' },
    { kind: 'exam', label: 'Atherosclerosis vs fibromuscular dysplasia' },
  ],

  highYield: [
    'RENAL ARTERY STENOSIS (RAS) reduces perfusion to a kidney, which senses "low pressure" and activates the RENIN-ANGIOTENSIN-ALDOSTERONE system → renovascular HYPERTENSION and sodium retention. Two main causes: ATHEROSCLEROSIS (older patients, ostial/proximal, with other vascular disease — commonest) and FIBROMUSCULAR DYSPLASIA (young women, mid/distal artery, "string-of-beads" on angiography).',
    'Clinical clues to suspect RAS: hypertension that is SEVERE, RESISTANT (≥3 drugs), of early or late onset, an abdominal BRUIT, "FLASH" pulmonary oedema, asymmetric kidney size, and — the classic exam clue — a SHARP RISE in CREATININE after starting an ACE INHIBITOR or ARB (especially in BILATERAL stenosis or stenosis of a single kidney), because angiotensin-II-mediated efferent arteriolar constriction is what maintains GFR in the stenotic kidney.',
    'Diagnosis: duplex ultrasound, CT or MR angiography (and catheter angiography). MANAGEMENT is primarily MEDICAL — RAAS blockade (with monitoring of creatinine/potassium), other antihypertensives, statin and antiplatelet, and risk-factor control; REVASCULARISATION (angioplasty ± stent) is reserved for selected cases (uncontrolled/flash oedema, deteriorating function, fibromuscular dysplasia which responds well to angioplasty), as trials show no routine benefit of stenting atherosclerotic RAS.',
    'RAS sits within RENOVASCULAR disorders that also include thromboembolism, renal vein thrombosis and thrombotic microangiopathy. Ischaemic nephropathy from chronic bilateral RAS can cause CKD. The mechanistic thread — reduced perfusion → RAAS activation → hypertension, and ACEi/ARB unmasking GFR-dependence on angiotensin II — is the high-yield concept.',
    '**The take-home: RAS → RAAS activation → renovascular HYPERTENSION; atherosclerosis (older) vs fibromuscular dysplasia (young women, "string of beads"); suspect with resistant HTN, bruit, flash oedema, and a CREATININE RISE after ACEi/ARB (bilateral disease). Treat medically (RAAS blockade + monitor); revascularise selected cases/FMD.** CKD is [[chronic-kidney-disease]]; the renovascular overview is [[renovascular-disorders]]; ACEi/ARB pharmacology is [[diuretics-pharmacology]].',
  ],

  mechanism: {
    title: 'RAS → hypoperfusion → RAAS activation → renovascular HTN; atherosclerosis vs fibromuscular dysplasia; ACEi/ARB → creatinine rise (bilateral); medical Rx, selective revascularisation',
    steps: [
      { id: 's1', label: 'Stenosis → ↓renal perfusion → RAAS activation → renovascular hypertension', emphasis: 'key' },
      { id: 's2', label: 'Atherosclerosis (older, ostial) vs fibromuscular dysplasia (young women, string-of-beads)', emphasis: 'key' },
      { id: 's3', label: 'Angiotensin II maintains GFR (efferent constriction) in the stenotic kidney', emphasis: 'key' },
      { id: 's4', label: 'ACEi/ARB → sharp creatinine rise (esp. bilateral / single-kidney stenosis)', emphasis: 'danger' },
      { id: 's5', label: 'Medical therapy (RAAS blockade + monitor); revascularise selected cases/FMD', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A sharp rise in creatinine after starting an ACE inhibitor', mechanism: 'Bilateral RAS (loss of angiotensin-II-maintained GFR)', significance: 'key' },
    { sign: 'Resistant hypertension with an abdominal bruit', mechanism: 'Renovascular hypertension (RAS)', significance: 'key' },
    { sign: '"String-of-beads" mid-artery appearance in a young woman', mechanism: 'Fibromuscular dysplasia', significance: 'key' },
    { sign: 'Recurrent "flash" pulmonary oedema with preserved LV function', mechanism: 'Bilateral RAS', significance: 'supportive' },
    { sign: 'Asymmetric kidney sizes on imaging', mechanism: 'Chronic renal artery stenosis (ischaemic atrophy)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The system activated by renal hypoperfusion', meaning: 'Renin-angiotensin-aldosterone system' },
    { clue: 'The RAS cause in young women', meaning: 'Fibromuscular dysplasia (string-of-beads)' },
    { clue: 'The classic clue after starting an ACEi/ARB', meaning: 'A sharp rise in creatinine (bilateral RAS)' },
    { clue: 'The first-line management of atherosclerotic RAS', meaning: 'Medical therapy (RAAS blockade + risk factors)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'RAS is a treatable cause of secondary/resistant hypertension and, when bilateral, of ACEi/ARB-induced AKI and flash pulmonary oedema. The mechanism (hypoperfusion → RAAS activation; angiotensin II maintaining GFR) explains both the hypertension and why creatinine jumps when RAAS is blocked. Most atherosclerotic RAS is managed medically (RAAS blockade with monitoring, statin, antiplatelet), with revascularisation reserved for selected patients and fibromuscular dysplasia (which responds well to angioplasty). CKD is [[chronic-kidney-disease]]; overview [[renovascular-disorders]].' },
  ],

  mnemonics: [
    { hook: '"RAS → Renin → resistant HTN"; Atherosclerosis (old) vs FMD (young women, beads)', expansion: ['Bruit, flash oedema, asymmetric kidneys', 'Angiotensin II maintains GFR'] },
    { hook: '"ACEi + bilateral RAS = creatinine rockets"', expansion: ['Medical Rx first', 'Revascularise FMD/selected cases'] },
  ],

  traps: [
    {
      questionCategory: 'Creatinine rise after ACE inhibitor',
      wrongInstinct: 'A jump in creatinine after starting an ACE inhibitor always means the drug is nephrotoxic and RAAS blockade is contraindicated',
      rightAnswer: 'A modest creatinine rise (up to ~30%) after ACEi/ARB is EXPECTED and acceptable, but a SHARP rise suggests BILATERAL renal artery stenosis (or stenosis of a single functioning kidney): angiotensin II maintains GFR by constricting the efferent arteriole in the hypoperfused kidney, so blocking it drops GFR — this is a diagnostic CLUE to RAS, not simple nephrotoxicity, and prompts investigation rather than assuming the drug is inherently harmful',
      why: 'Understanding that angiotensin II is holding up GFR in the stenotic kidney reframes the creatinine rise as a clue to bilateral RAS; a small rise is tolerated, but a large one warrants imaging for RAS.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A sharp rise in serum creatinine shortly after starting an ACE inhibitor for hypertension should raise suspicion of:',
      options: [
        { id: 'a', text: 'Bilateral renal artery stenosis' },
        { id: 'b', text: 'Minimal change disease' },
        { id: 'c', text: 'A lower urinary tract infection' },
        { id: 'd', text: 'Simple dehydration only' },
      ],
      answerId: 'a',
      explanation: 'In bilateral RAS (or stenosis of a single functioning kidney), GFR depends on angiotensin-II-mediated efferent arteriolar constriction; ACEi/ARB removes this, causing a sharp fall in GFR and rise in creatinine — a classic clue to renovascular disease.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Renal artery stenosis in a young woman, with a "string-of-beads" appearance on angiography, is caused by:',
      options: [
        { id: 'a', text: 'Atherosclerosis' },
        { id: 'b', text: 'Fibromuscular dysplasia' },
        { id: 'c', text: 'Vasculitis of large vessels only' },
        { id: 'd', text: 'Renal vein thrombosis' },
      ],
      answerId: 'b',
      explanation: 'Fibromuscular dysplasia affects the mid-to-distal renal artery of young women, giving a "string-of-beads" angiographic appearance, and responds well to angioplasty — unlike atherosclerotic RAS, which is proximal/ostial in older patients and usually managed medically.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default renalArteryStenosis;
