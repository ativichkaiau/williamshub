import type { Lecture } from '../../lib/types';

export const ghpUrinaryFunctionalAnatomy: Lecture = {
  id: 'ghp-urinary-functional-anatomy',
  title: 'Urinary Functional Anatomy & the Excretion Equation',
  system: 'renal',
  source: 'Ch 26 — The Urinary System: Functional Anatomy & Urine Formation',
  updated: '2026-09-15',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 26 The Urinary System' },
    { kind: 'mechanism', label: 'Excretion = filtration − reabsorption + secretion' },
    { kind: 'investigation', label: 'Filtered load and clearance have different units' },
  ],
  highYield: [
    '**The kidney controls the internal environment by changing what leaves it.** It matches water, electrolyte and acid excretion to intake and endogenous production, removes metabolic wastes and many foreign compounds, and contributes to blood-pressure control. Its endocrine functions include renin release, erythropoietin production and conversion of vitamin D to calcitriol; renal gluconeogenesis also contributes during fasting. A change in urine volume alone therefore cannot tell you whether filtration, solute balance or endocrine function is normal.',
    '**Follow the fluid and the blood as two separate routes.** Filtrate passes from Bowman’s space into the proximal tubule, loop of Henle, distal tubule and collecting system, then through papillary ducts, calyces, renal pelvis, ureter, bladder and urethra. Blood enters an afferent arteriole, crosses glomerular capillaries, leaves through an efferent arteriole and then supplies peritubular capillaries or vasa recta before returning to veins. Two capillary beds in sequence allow high-pressure filtration followed by lower-pressure exchange. The filtrate is outside the blood even while it remains inside the kidney; reabsorption returns material to the circulation.',
    '**Nephron position predicts function.** Renal corpuscles lie in the cortex. Most cortical nephrons have relatively short loops, whereas juxtamedullary nephrons send long loops deep into the medulla and are associated with vasa recta. Tubular transport establishes the medullary osmotic gradient; the vasa recta limit its washout while supplying the tissue. Collecting ducts traverse this gradient, but concentrated urine still requires appropriate water permeability. A long loop is useful architecture, not a guarantee of concentrated urine. Follow the mechanism in [[ghp-countercurrent-urine-concentration]].',
    '**Excretion rate = filtered load − reabsorption rate + secretion rate.** For a freely filtered solute, filtered load is GFR × plasma concentration; excretion rate is urine concentration × urine flow. Reabsorption means movement from tubular lumen toward blood, while secretion means movement from blood toward lumen. In a hypothetical experiment, a filtered load of 100 mg/min, reabsorption of 80 mg/min and secretion of 5 mg/min produce excretion of 25 mg/min. All four quantities are amounts per time. Most filtered water is normally reabsorbed, so daily filtration is much larger than daily urine output.',
    '**Clearance is an equivalent volume of plasma cleared per unit time.** Cx = Ux × V / Px. If a marker is freely filtered and neither reabsorbed nor secreted, its clearance equals GFR. For an appropriately handled freely filtered solute, clearance below GFR indicates net reabsorption and clearance above GFR indicates net secretion. These comparisons require assumptions about filtration, protein binding and metabolism; clearance is not literally a volume of plasma removed from the circulation. Creatinine approximates GFR but tubular secretion and changing production or non-steady-state concentrations limit that approximation.',
    '**The kidney samples both incoming pressure and downstream tubular delivery.** Granular cells near the afferent arteriole release renin; macula densa cells near the end of the thick ascending limb sense tubular NaCl delivery. These signals participate in autoregulation and renin control, linking local nephron function to whole-body volume balance. This anatomical arrangement explains why the same kidney can stabilise filtration over a pressure range yet activate sodium conservation when effective arterial filling falls. Continue with [[ghp-renal-autoregulation-tgf]] and [[ghp-renal-body-fluid-pressure-control]].',
  ],
  mechanism: {
    title: 'Track a freely filtered solute from plasma to urine',
    steps: [
      { id: 'u1', label: 'Plasma reaches glomerular capillaries', detail: 'Afferent and efferent arterioles regulate the pressures and flow surrounding filtration.' },
      { id: 'u2', label: 'Filtered load enters Bowman’s space', detail: 'For a freely filtered solute: GFR × plasma concentration.', emphasis: 'key' },
      { id: 'u3', label: 'Tubules reabsorb and secrete selectively', detail: 'Reabsorption subtracts from the luminal load; secretion adds to it.' },
      { id: 'u4', label: 'The remaining amount is excreted', detail: 'Urinary concentration × urine flow gives an amount per time.', emphasis: 'key' },
    ],
  },
  examFindings: [
    { sign: 'Urine volume changes without a comparable change in GFR', mechanism: 'Tubular water reabsorption can vary greatly while filtration remains relatively stable.', significance: 'key' },
    { sign: 'Loss of concentrating ability after medullary injury', mechanism: 'Concentrating urine requires the medullary gradient, its vascular preservation and collecting-duct water permeability.' },
    { sign: 'Anaemia accompanying advanced kidney disease', mechanism: 'Reduced renal erythropoietin production contributes, although other causes of anaemia can coexist.' },
  ],
  investigations: [
    { clue: 'GFR 100 mL/min; freely filtered solute concentration 2 mg/mL', meaning: 'Filtered load = 200 mg/min. This is not the amount eventually excreted.' },
    { clue: 'Urine concentration 20 mg/mL; urine flow 1 mL/min; plasma concentration 2 mg/mL', meaning: 'Excretion is 20 mg/min and clearance is 10 mL/min. If GFR is 100 mL/min, the solute undergoes net reabsorption.' },
    { clue: 'Rising creatinine during an acute change in filtration', meaning: 'Creatinine has not necessarily reached steady state, so a steady-state eGFR can misrepresent current filtration.' },
  ],
  treatment: [
    { logic: 'Why it matters', detail: 'Separate filtration failure, tubular transport changes and urinary outflow obstruction when interpreting a renal problem. Normal urine output does not exclude impaired filtration.' },
    { logic: 'Where it is examined', detail: 'Draw the blood and filtrate routes, distinguish cortical from juxtamedullary nephrons, and calculate filtered load, excretion and clearance with explicit units.' },
  ],
  mnemonics: [{ hook: 'Filter, return, add, leave', expansion: ['Filter into the tubule', 'Return by reabsorption', 'Add by secretion', 'The remainder leaves in urine'] }],
  traps: [
    { questionCategory: 'Renal mass balance', wrongInstinct: 'Everything filtered is excreted.', rightAnswer: 'Tubular reabsorption and secretion determine the final excreted amount.', why: 'The glomerulus starts the process; the tubules substantially change the filtrate.' },
    { questionCategory: 'Units', wrongInstinct: 'A clearance of 100 mL/min means 100 mg/min is excreted.', rightAnswer: 'Clearance is volume per time; excretion is amount per time.', why: 'Excretion also depends on plasma concentration.' },
  ],
  quiz: [
    { id: 'q1', stem: 'A freely filtered solute has a filtered load of 100 mg/min. The tubules reabsorb 80 mg/min and secrete 5 mg/min. What is its excretion rate?', options: [{ id: 'a', text: '15 mg/min' }, { id: 'b', text: '25 mg/min' }, { id: 'c', text: '85 mg/min' }, { id: 'd', text: '185 mg/min' }], answerId: 'b', explanation: 'Excretion = filtration − reabsorption + secretion = 100 − 80 + 5 = 25 mg/min.', tests: 'mechanism' },
    { id: 'q2', stem: 'Which blood-flow sequence is correct?', options: [{ id: 'a', text: 'Afferent arteriole → peritubular capillaries → glomerulus → renal vein' }, { id: 'b', text: 'Glomerulus → afferent arteriole → efferent arteriole → renal vein' }, { id: 'c', text: 'Afferent arteriole → glomerulus → efferent arteriole → peritubular capillaries' }, { id: 'd', text: 'Renal vein → glomerulus → efferent arteriole → afferent arteriole' }], answerId: 'c', explanation: 'The efferent arteriole connects the glomerular capillary bed to the peritubular capillaries or vasa recta.', tests: 'mechanism' },
    { id: 'q3', stem: 'A marker is freely filtered, neither secreted nor reabsorbed, and not metabolised by the kidney. Its urinary excretion is 10 mg/min and plasma concentration is 0.1 mg/mL. What is the GFR?', options: [{ id: 'a', text: '1 mL/min' }, { id: 'b', text: '10 mL/min' }, { id: 'c', text: '100 mL/min' }, { id: 'd', text: '1000 mL/min' }], answerId: 'c', explanation: 'Clearance = excretion rate / plasma concentration = 10 / 0.1 = 100 mL/min. Under the stated handling assumptions, marker clearance equals GFR.', tests: 'investigation' },
    { id: 'q4', stem: 'Which feature of juxtamedullary nephrons is especially important for concentrating urine?', options: [{ id: 'a', text: 'Renal corpuscles located inside the bladder' }, { id: 'b', text: 'Long loops extending into the medulla with an associated vasa recta circulation' }, { id: 'c', text: 'Absence of tubular reabsorption' }, { id: 'd', text: 'Direct drainage of glomerular blood into the collecting duct' }], answerId: 'b', explanation: 'Long loops help establish the medullary gradient and vasa recta exchange limits washout. Water permeability in the collecting duct remains an additional requirement.', tests: 'mechanism' },
  ],
};

export default ghpUrinaryFunctionalAnatomy;
