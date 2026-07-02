import type { Lecture } from '../../lib/types';

export const renalReplacementTherapy: Lecture = {
  id: 'renal-replacement-therapy',
  title: 'Renal Replacement Therapy: Dialysis & Transplant',
  system: 'renal',
  source: 'L11 — Acute Kidney Injury & CKD',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'L11 RRT' },
    { kind: 'mechanism', label: 'Diffusion vs convection; transplant' },
    { kind: 'exam', label: 'AEIOU dialysis indications' },
  ],

  highYield: [
    '**Renal replacement therapy (RRT) supports patients with severe AKI or end-stage kidney disease. The urgent (AKI) indications are remembered as "AEIOU": severe ACIDOSIS, ELECTROLYTE disturbance (refractory HYPERKALAEMIA), INTOXICATION (dialysable poisons — salicylate, lithium, methanol, ethylene glycol), fluid OVERLOAD refractory to diuretics, and URAEMIC complications (pericarditis, encephalopathy). In CKD, RRT starts for uraemic symptoms/complications as GFR falls to end-stage.**',
    '**HAEMODIALYSIS removes solutes by DIFFUSION across a semipermeable membrane down a concentration gradient (blood vs dialysate, countercurrent), with fluid removal by ULTRAFILTRATION; it needs vascular access (a preferred arteriovenous FISTULA, or a graft/central catheter) and is typically done ~3×/week. Continuous therapies (CRRT) using CONVECTION suit haemodynamically unstable ICU patients.**',
    '**PERITONEAL DIALYSIS uses the patient\'s own PERITONEUM as the membrane: dialysate is instilled into the abdomen, solutes diffuse across, and an osmotic agent (glucose) drives fluid removal; it is home-based and continuous but risks PERITONITIS (cloudy effluent) and membrane failure over time. Dialysis controls fluid/solutes but does not replace the kidney\'s endocrine functions fully.**',
    '**KIDNEY TRANSPLANT is the best treatment for suitable ESRD patients — better survival and quality of life than dialysis — but requires lifelong IMMUNOSUPPRESSION (calcineurin inhibitors, antiproliferatives, steroids) with its risks (infection, malignancy, drug toxicity) and carries rejection risk (hyperacute/acute/chronic). Access complications, dialysis disequilibrium, and cardiovascular disease are key issues in dialysis patients.**',
    '**The take-home: RRT for AKI = "AEIOU" (Acidosis, Electrolytes/hyperkalaemia, Intoxication, Overload, Uraemia). HAEMODIALYSIS = diffusion + ultrafiltration (needs AV fistula); PERITONEAL dialysis = peritoneum as membrane (risk: peritonitis); TRANSPLANT = best outcome but lifelong immunosuppression/rejection risk.** The CKD overview is [[chronic-kidney-disease]]; CKD-MBD/anaemia is [[ckd-mineral-bone-disorder]]; AKI is [[aki-prerenal-intrinsic-postrenal]].',
  ],

  mechanism: {
    title: 'RRT: AKI indications "AEIOU"; haemodialysis = diffusion + ultrafiltration (AV fistula); peritoneal dialysis = peritoneum (peritonitis risk); transplant = best outcome, lifelong immunosuppression',
    steps: [
      { id: 's1', label: 'AKI RRT indications "AEIOU": Acidosis, Electrolytes (K+), Intoxication, Overload, Uraemia', emphasis: 'danger' },
      { id: 's2', label: 'Haemodialysis = diffusion across membrane + ultrafiltration; needs vascular access', emphasis: 'key' },
      { id: 's3', label: 'AV fistula preferred access; CRRT (convection) for unstable ICU patients', emphasis: 'key' },
      { id: 's4', label: 'Peritoneal dialysis = peritoneum as membrane; risk peritonitis (cloudy effluent)', emphasis: 'key' },
      { id: 's5', label: 'Transplant = best survival/QoL but lifelong immunosuppression + rejection risk', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Refractory hyperkalaemia or severe acidosis in AKI', mechanism: 'Indication for urgent dialysis (AEIOU)', significance: 'key' },
    { sign: 'Uraemic pericarditis or encephalopathy', mechanism: 'Uraemic indication for dialysis', significance: 'key' },
    { sign: 'Cloudy peritoneal dialysis effluent with abdominal pain', mechanism: 'PD peritonitis', significance: 'key' },
    { sign: 'A thrill and bruit over a forearm arteriovenous fistula', mechanism: 'Functioning haemodialysis access', significance: 'supportive' },
    { sign: 'Fever and graft tenderness with rising creatinine post-transplant', mechanism: 'Acute rejection (needs immunosuppression review)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The mnemonic for urgent dialysis indications', meaning: 'AEIOU (Acidosis, Electrolytes, Intoxication, Overload, Uraemia)' },
    { clue: 'The main solute-removal principle in haemodialysis', meaning: 'Diffusion (with ultrafiltration for fluid)' },
    { clue: 'The preferred long-term haemodialysis access', meaning: 'Arteriovenous fistula' },
    { clue: 'The key infective complication of peritoneal dialysis', meaning: 'Peritonitis (cloudy effluent)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Knowing when and how to start RRT is essential: the AEIOU indications (refractory acidosis, hyperkalaemia, dialysable intoxication, fluid overload, uraemic complications) identify patients needing urgent dialysis in AKI, while modality choice (haemodialysis vs peritoneal dialysis vs transplant) balances access, haemodynamics, lifestyle and outcomes. Transplant offers the best survival and quality of life but requires lifelong immunosuppression with infection/malignancy/rejection risks. The CKD overview is [[chronic-kidney-disease]]; CKD-MBD/anaemia is [[ckd-mineral-bone-disorder]]; hyperkalaemia is [[potassium-disorders]].' },
  ],

  mnemonics: [
    { hook: 'Dialysis indications = "AEIOU"', expansion: ['Acidosis, Electrolytes (K+), Intoxication', 'Overload, Uraemia'] },
    { hook: '"Haemo = diffusion (fistula); PD = peritoneum (peritonitis); Transplant = best (immunosuppress)"', expansion: ['CRRT for unstable ICU', 'Rejection: hyperacute/acute/chronic'] },
  ],

  traps: [
    {
      questionCategory: 'When to start dialysis in AKI',
      wrongInstinct: 'Dialysis in AKI is only started once the creatinine or urea reaches a fixed threshold number',
      rightAnswer: 'Urgent dialysis in AKI is driven by CLINICAL indications ("AEIOU") — severe refractory ACIDOSIS, life-threatening ELECTROLYTE disturbance (hyperkalaemia), dialysable INTOXICATION, fluid OVERLOAD unresponsive to diuretics, and URAEMIC complications (pericarditis, encephalopathy) — not by an absolute creatinine/urea number alone; a patient can need dialysis at a "modest" creatinine if hyperkalaemic or overloaded, or be managed conservatively at a high one',
      why: 'Fixating on a lab threshold delays dialysis in a hyperkalaemic or fluid-overloaded patient and over-dialyses stable ones; the AEIOU clinical indications, not the number, decide urgency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which is an urgent ("AEIOU") indication for dialysis in acute kidney injury?',
      options: [
        { id: 'a', text: 'Mild proteinuria' },
        { id: 'b', text: 'Refractory hyperkalaemia or severe metabolic acidosis' },
        { id: 'c', text: 'A single high creatinine value with no symptoms' },
        { id: 'd', text: 'Microscopic haematuria' },
      ],
      answerId: 'b',
      explanation: 'The AEIOU indications for urgent dialysis are severe Acidosis, Electrolyte disturbance (refractory hyperkalaemia), Intoxication (dialysable poisons), fluid Overload refractory to diuretics, and Uraemic complications — clinical indications, not an absolute creatinine number.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Haemodialysis removes small solutes such as urea and potassium mainly by:',
      options: [
        { id: 'a', text: 'Diffusion across a semipermeable membrane down a concentration gradient' },
        { id: 'b', text: 'Active transport by the dialyser' },
        { id: 'c', text: 'Phagocytosis' },
        { id: 'd', text: 'Osmosis of solutes into cells' },
      ],
      answerId: 'a',
      explanation: 'In haemodialysis, solutes diffuse from blood into dialysate across a semipermeable membrane (countercurrent) down their concentration gradient, while fluid is removed by ultrafiltration; continuous therapies use convection for unstable patients.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default renalReplacementTherapy;
