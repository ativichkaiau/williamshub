import type { Lecture } from '../../lib/types';

export const ghpRenalFailureAcuteChronic: Lecture = {
  id: 'ghp-renal-failure-acute-chronic',
  title: 'Acute & Chronic Renal Failure',
  system: 'renal',
  source: 'Ch 31 — Kidney Diseases & Diuretics',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 31 Kidney Disease & Diuretics' },
    { kind: 'mechanism', label: 'Nephron loss & hyperfiltration' },
    { kind: 'exam', label: 'Prerenal vs intrinsic' },
  ],

  highYield: [
    '**Acute failure divides into prerenal, intrinsic and postrenal, and the distinction is the first decision made.** **Prerenal** is hypoperfusion with structurally intact tubules — fully reversible if perfusion is restored. **Intrinsic** is parenchymal damage, most often ischaemic or toxic acute tubular necrosis. **Postrenal** is obstruction raising **Bowman capsule pressure** and opposing filtration.',
    '**Prerenal and established ATN are separated by whether the tubules can still concentrate and conserve sodium.** In **prerenal** failure the avid tubule gives **FENa < 1%**, **urine Na⁺ < 20**, **urine osmolality > 500** and a high urea:creatinine ratio. In **ATN** the damaged tubule cannot do any of that: **FENa > 2%**, urine Na⁺ high, urine osmolality near **300**, with **muddy brown granular casts**. The tubule’s function is the test.',
    '**Chronic failure progresses by a vicious cycle, and hyperfiltration is what drives it.** Nephron loss makes survivors hyperfilter to maintain total GFR. That raised intraglomerular pressure damages them in turn, so nephrons are lost faster — progression continues even after the original insult has gone. Reducing intraglomerular pressure is therefore the central intervention, which is why RAAS blockade slows decline in [[chronic-kidney-disease]].',
    '**Creatinine is a late and non-linear marker, which is why early disease is missed.** Because of hyperfiltration by surviving nephrons, GFR can fall by roughly **50%** before creatinine leaves the reference range, and the relationship is **hyperbolic** — a rise from 60 to 120 µmol/L represents a far greater nephron loss than 300 to 360. This is why estimated GFR, not raw creatinine, is used.',
    '**The uraemic syndrome is the failure of several renal jobs at once, and each has its own consequence.** Excretory failure gives **retained nitrogenous waste**; failure of acid excretion gives **metabolic acidosis**; loss of potassium excretion gives **hyperkalaemia**; loss of erythropoietin gives **normocytic anaemia**; loss of 1α-hydroxylation with phosphate retention gives **renal bone disease**; and salt and water retention give **hypertension and oedema**.',
    '**Concentrating ability is lost early and is a useful clinical marker.** Damage to the medullary architecture destroys the gradient before excretory function fails badly, so **nocturia** and **isosthenuria** appear early — the concentrating machinery of [[ghp-countercurrent-urine-concentration]] is more fragile than filtration itself.',
  ],

  mechanism: {
    title: 'Losing nephrons accelerates losing nephrons',
    steps: [
      { id: 's1', label: 'An insult destroys a population of nephrons', emphasis: 'key' },
      { id: 's2', label: 'Survivors hyperfilter to maintain total GFR', emphasis: 'key' },
      { id: 's3', label: 'Raised intraglomerular pressure injures the remaining glomeruli' },
      { id: 's4', label: 'Proteinuria and glomerulosclerosis follow' },
      { id: 's5', label: 'Further nephron loss → more hyperfiltration in those left', emphasis: 'danger' },
      { id: 's6', label: 'Progression continues even after the original insult resolves', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Oliguria with FENa below 1% and concentrated urine', mechanism: 'Prerenal physiology with intact tubular avidity', significance: 'key' },
    { sign: 'Muddy brown granular casts with FENa above 2%', mechanism: 'Acute tubular necrosis — the tubule can no longer conserve sodium', significance: 'key' },
    { sign: 'Anuria with a palpable bladder and hydronephrosis', mechanism: 'Obstruction raising Bowman capsule pressure', significance: 'key' },
    { sign: 'Nocturia and isosthenuria early in chronic disease', mechanism: 'Loss of the medullary gradient before excretory failure', significance: 'key' },
    { sign: 'Normocytic anaemia with advanced renal impairment', mechanism: 'Reduced erythropoietin production', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'FENa below 1% with urine osmolality above 500', meaning: 'Prerenal — restore perfusion' },
    { clue: 'FENa above 2% with urine osmolality near 300', meaning: 'Established tubular injury' },
    { clue: 'Bilateral hydronephrosis on ultrasound', meaning: 'Postrenal obstruction, potentially fully reversible' },
    { clue: 'Small echogenic kidneys with anaemia and high phosphate', meaning: 'Chronic rather than acute failure' },
    { clue: 'Normal creatinine with an eGFR of 55', meaning: 'Substantial nephron loss masked by hyperfiltration' },
  ],

  treatment: [
    {
      logic: 'Exclude the reversible causes before accepting parenchymal failure',
      detail: '**Perfusion** and **obstruction** are the two fully correctable categories, and both are cheap to assess. Missing either converts a recoverable kidney into a permanently damaged one — the sequence set out in [[aki-prerenal-intrinsic-postrenal]].',
    },
    {
      logic: 'Lower intraglomerular pressure to interrupt the vicious cycle',
      detail: 'Because progression is driven by **hyperfiltration** in surviving nephrons, reducing that pressure slows decline independently of the original cause. Blood pressure and proteinuria control therefore matter even when the initiating insult has long resolved.',
    },
  ],

  mnemonics: [
    { hook: 'Before, within, after the kidney', expansion: ['Prerenal: perfusion', 'Intrinsic: parenchyma', 'Postrenal: obstruction'] },
    { hook: 'Avid tubule = prerenal, spendthrift tubule = ATN', expansion: ['FENa < 1%, Uosm > 500 → prerenal', 'FENa > 2%, Uosm ~300, muddy casts → ATN'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a normal creatinine',
      wrongInstinct: 'A creatinine within the reference range means renal function is normal',
      rightAnswer: 'GFR can fall by about half before creatinine rises above normal',
      why: 'Hyperfiltration by surviving nephrons masks early loss, and the relationship is hyperbolic',
    },
    {
      questionCategory: 'Why chronic disease keeps progressing',
      wrongInstinct: 'Progression stops once the original insult is treated',
      rightAnswer: 'Hyperfiltration in surviving nephrons damages them independently of the initial cause',
      why: 'It is why pressure and proteinuria control matter long after the insult has resolved',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An oliguric patient has FENa 0.4%, urine sodium 12 mmol/L and urine osmolality 620 mOsm/kg. What does this indicate?',
      options: [
        { id: 'a', text: 'Acute tubular necrosis' },
        { id: 'b', text: 'Prerenal failure with intact tubular function' },
        { id: 'c', text: 'Postrenal obstruction' },
        { id: 'd', text: 'Chronic kidney disease' },
      ],
      answerId: 'b',
      explanation: 'Avid sodium conservation and concentrated urine show the tubules are structurally intact and responding appropriately to hypoperfusion. In established tubular necrosis the damaged tubule cannot conserve sodium or concentrate.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Why does chronic kidney disease often progress even after the initiating cause is removed?',
      options: [
        { id: 'a', text: 'Persistent immune activation against the tubules' },
        { id: 'b', text: 'Hyperfiltration in surviving nephrons raises intraglomerular pressure and damages them' },
        { id: 'c', text: 'Erythropoietin deficiency directly destroys nephrons' },
        { id: 'd', text: 'Ongoing obstruction of the collecting system' },
      ],
      answerId: 'b',
      explanation: 'Surviving nephrons compensate by hyperfiltering, but the raised intraglomerular pressure injures them, causing further loss and yet more hyperfiltration. That self-perpetuating cycle is why lowering intraglomerular pressure slows decline.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which abnormality typically appears earliest as chronic kidney disease develops?',
      options: [
        { id: 'a', text: 'Hyperkalaemia' },
        { id: 'b', text: 'Loss of urinary concentrating ability with nocturia' },
        { id: 'c', text: 'Severe metabolic acidosis' },
        { id: 'd', text: 'Uraemic pericarditis' },
      ],
      answerId: 'b',
      explanation: 'The medullary gradient depends on delicate architecture and is disrupted before excretory capacity fails badly, so impaired concentration with nocturia and isosthenuria is an early feature. The others are late manifestations.',
      tests: 'exam',
    },
  ],
};

export default ghpRenalFailureAcuteChronic;
