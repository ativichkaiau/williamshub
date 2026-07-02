import type { Lecture } from '../../lib/types';

export const nephroticSyndrome: Lecture = {
  id: 'nephrotic-syndrome',
  title: 'Nephrotic Syndrome',
  system: 'renal',
  source: 'L6 — Nephrotic & Nephritic Syndromes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L6 Nephrotic' },
    { kind: 'mechanism', label: 'Podocyte injury; heavy proteinuria' },
    { kind: 'exam', label: 'MCD, FSGS, membranous' },
  ],

  highYield: [
    '**NEPHROTIC syndrome = injury to the glomerular filtration barrier (PODOCYTES) causing HEAVY PROTEINURIA (>3.5 g/day) → the tetrad: hypoALBUMINAEMIA, OEDEMA, HYPERLIPIDAEMIA (+ lipiduria/oval fat bodies), and a HYPERCOAGULABLE state. It is "bland" (little blood/inflammation) — contrast with nephritic ([[nephritic-syndrome]]).**',
    '**Key complications from urinary protein loss: OEDEMA (low oncotic pressure), THROMBOSIS (loss of antithrombin III → renal vein thrombosis, VTE), INFECTION (loss of immunoglobulins — encapsulated organisms), and hyperlipidaemia (hepatic compensation). Frothy urine and periorbital/dependent oedema are typical.**',
    '**Causes — PRIMARY: MINIMAL CHANGE DISEASE (commonest in CHILDREN; normal light microscopy, foot-process effacement on EM; steroid-responsive); FOCAL SEGMENTAL GLOMERULOSCLEROSIS (FSGS — common in adults, esp. HIV, obesity, African ancestry; segmental scarring); MEMBRANOUS nephropathy (commonest primary in older adults; anti-PLA2R, subepithelial "spike-and-dome" deposits, thrombosis risk). SECONDARY: DIABETES (commonest overall — Kimmelstiel-Wilson nodules) and AMYLOID.**',
    '**Diagnosis: quantify proteinuria (ACR/PCR or 24-h), serum albumin/lipids, and often renal BIOPSY in adults (children with typical minimal change are treated empirically with steroids first). Management: treat the cause (steroids/immunosuppression), REDUCE proteinuria with ACE inhibitors/ARBs, manage oedema (salt restriction, diuretics), statins, and anticoagulation if high-risk.**',
    '**The take-home: nephrotic = podocyte injury → proteinuria >3.5 g → hypoalbuminaemia + oedema + hyperlipidaemia + hypercoagulability (bland urine). Children = minimal change (steroid-responsive); adults = FSGS/membranous (anti-PLA2R); commonest overall secondary = DIABETES. Treat with immunosuppression + ACEi/ARB.** The filtration barrier is HRU-1 physiology; the contrasting inflammatory picture is [[nephritic-syndrome]]; the overview is [[glomerular-disease-overview]].',
  ],

  mechanism: {
    title: 'Podocyte injury → proteinuria >3.5g → hypoalbuminaemia/oedema/hyperlipidaemia/hypercoagulable; MCD (kids) / FSGS-membranous (adults) / diabetes',
    steps: [
      { id: 's1', label: 'Podocyte (filtration barrier) injury → heavy proteinuria (>3.5 g/day)', emphasis: 'key' },
      { id: 's2', label: 'Tetrad: hypoalbuminaemia, oedema, hyperlipidaemia, hypercoagulability (bland urine)', emphasis: 'key' },
      { id: 's3', label: 'Thrombosis (↓antithrombin III → renal vein), infection (↓Ig)', emphasis: 'danger' },
      { id: 's4', label: 'Children = minimal change (steroid-responsive); adults = FSGS / membranous (anti-PLA2R)', emphasis: 'key' },
      { id: 's5', label: 'Commonest overall (secondary) = diabetes; treat cause + ACEi/ARB', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Proteinuria >3.5 g/day with hypoalbuminaemia and oedema', mechanism: 'Nephrotic syndrome (podocyte injury)', significance: 'key' },
    { sign: 'Nephrotic syndrome in a child, steroid-responsive', mechanism: 'Minimal change disease', significance: 'key' },
    { sign: 'Nephrotic syndrome with anti-PLA2R and subepithelial spikes', mechanism: 'Membranous nephropathy', significance: 'key' },
    { sign: 'Renal vein thrombosis / VTE in nephrotic syndrome', mechanism: 'Loss of antithrombin III (hypercoagulable)', significance: 'key' },
    { sign: 'Nodular glomerulosclerosis with long-standing diabetes', mechanism: 'Diabetic nephropathy (Kimmelstiel-Wilson)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The defining proteinuria threshold', meaning: '>3.5 g/day' },
    { clue: 'The commonest nephrotic cause in children', meaning: 'Minimal change disease (steroid-responsive)' },
    { clue: 'The antibody in primary membranous nephropathy', meaning: 'Anti-PLA2R' },
    { clue: 'The commonest overall (secondary) cause', meaning: 'Diabetes mellitus' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Nephrotic syndrome is defined by heavy proteinuria and its consequences (oedema, thrombosis, infection, hyperlipidaemia), and the cause determines therapy: children with minimal change get empiric steroids, adults usually need biopsy (FSGS, membranous/anti-PLA2R), and diabetes is the commonest secondary cause. Proteinuria reduction with ACEi/ARB, oedema control, statins and thromboprophylaxis are core. It contrasts with the inflammatory [[nephritic-syndrome]] and sits within [[glomerular-disease-overview]].' },
  ],

  mnemonics: [
    { hook: 'Nephrotic tetrad: "Proteinuria >3.5, hypoalbuminaemia, oedema, hyperlipidaemia" (+ hypercoagulable)', expansion: ['Bland urine (vs nephritic)', 'Thrombosis: ↓antithrombin III'] },
    { hook: '"Kids = Minimal Change (steroids); Adults = FSGS/Membranous; overall = Diabetes"', expansion: ['Membranous = anti-PLA2R', 'Renal vein thrombosis'] },
  ],

  traps: [
    {
      questionCategory: 'Nephrotic vs nephritic',
      wrongInstinct: 'Heavy proteinuria and haematuria with red-cell casts are the same glomerular syndrome',
      rightAnswer: 'NEPHROTIC syndrome is PODOCYTE injury with HEAVY proteinuria (>3.5 g) and a relatively BLAND urine (little blood/inflammation), producing hypoalbuminaemia/oedema/hyperlipidaemia/hypercoagulability; NEPHRITIC syndrome is INFLAMMATORY glomerular injury with HAEMATURIA, RED-CELL CASTS, hypertension and often renal impairment with only sub-nephrotic proteinuria — the urinary picture (bland/heavy-protein vs active/blood) separates them',
      why: 'The two syndromes have different mechanisms, differentials and treatments, so distinguishing bland heavy proteinuria (nephrotic) from an active sediment with RBC casts (nephritic) directs the entire work-up.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 4-year-old presents with periorbital oedema, heavy proteinuria and hypoalbuminaemia; light microscopy is normal and the condition responds to steroids. The diagnosis is:',
      options: [
        { id: 'a', text: 'Membranous nephropathy' },
        { id: 'b', text: 'Minimal change disease' },
        { id: 'c', text: 'Post-streptococcal glomerulonephritis' },
        { id: 'd', text: 'IgA nephropathy' },
      ],
      answerId: 'b',
      explanation: 'Minimal change disease is the commonest cause of nephrotic syndrome in children: normal light microscopy with foot-process (podocyte) effacement on electron microscopy, and typically steroid-responsive. It is treated empirically with steroids without biopsy in the typical paediatric case.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The hypercoagulable state (e.g. renal vein thrombosis) in nephrotic syndrome is largely due to urinary loss of:',
      options: [
        { id: 'a', text: 'Fibrinogen' },
        { id: 'b', text: 'Antithrombin III' },
        { id: 'c', text: 'Platelets' },
        { id: 'd', text: 'Calcium' },
      ],
      answerId: 'b',
      explanation: 'Nephrotic-range proteinuria causes urinary loss of anticoagulant proteins, notably antithrombin III, producing a hypercoagulable state with increased risk of renal vein thrombosis and venous thromboembolism. Loss of immunoglobulins similarly predisposes to infection.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default nephroticSyndrome;
