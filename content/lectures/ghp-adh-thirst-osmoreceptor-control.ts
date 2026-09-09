import type { Lecture } from '../../lib/types';

export const ghpAdhThirstOsmoreceptorControl: Lecture = {
  id: 'ghp-adh-thirst-osmoreceptor-control',
  title: 'Osmoreceptor–ADH Feedback & Thirst',
  system: 'renal',
  source: 'Ch 28 — Regulation of Extracellular Fluid Osmolarity & Sodium',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Renal' },
    { kind: 'lecture', label: 'Ch 28 Osmolarity & Sodium' },
    { kind: 'mechanism', label: 'Osmotic vs volume triggers' },
    { kind: 'exam', label: 'SIADH vs DI' },
  ],

  highYield: [
    '**Two systems defend osmolarity and they are deliberately redundant: ADH conserves water, thirst acquires it.** ADH can only reduce losses; thirst is the only route to positive water balance. This is why a patient with diabetes insipidus who has free access to water stays nearly normonatraemic, while the same patient denied water becomes dangerously hypernatraemic within hours.',
    '**Osmoreceptors are exquisitely sensitive — about 1% is enough.** They sit in the **anterior hypothalamus** near the third ventricle (**OVLT**), shrink when plasma becomes hypertonic, and signal the **supraoptic and paraventricular** nuclei. ADH is synthesised there and released from the **posterior pituitary**. The threshold for ADH release is roughly **280 mOsm/kg**, and thirst is triggered a little higher, around **290–295**.',
    '**Volume is a far less sensitive trigger, but it overrides osmolarity when it becomes severe.** Baroreceptor and low-pressure atrial receptors need a **5–10%** volume fall before stimulating ADH, against **1%** for osmolarity. But once volume loss is large, ADH is released regardless of tonicity — which is precisely why hypovolaemia produces **hyponatraemia**: the body defends volume at the expense of concentration.',
    '**ADH acts on V2 receptors to insert aquaporin-2, and that is the whole renal effect.** V2 stimulation raises **cAMP**, which shuttles **aquaporin-2** into the apical membrane of the collecting duct, making it water-permeable. Water then flows down the medullary gradient. At higher concentrations ADH also stimulates **V1** receptors on vessels, causing the vasoconstriction that matters only in severe haemorrhage.',
    '**SIADH and diabetes insipidus are mirror images, and urine osmolality separates them instantly.** In **SIADH** ADH acts when it should be suppressed: urine is **inappropriately concentrated**, sodium low, and the patient is **euvolaemic** with a normal urine sodium. In **DI** the reverse: **inappropriately dilute** urine with rising plasma sodium. The euvolaemia in SIADH is what distinguishes it from hypovolaemic hyponatraemia.',
    '**Other stimuli matter clinically because they cause hyponatraemia in hospital.** **Nausea, pain, opioids, surgery and nicotine** all stimulate ADH; **alcohol** inhibits it. Giving hypotonic fluid to a post-operative patient whose ADH is already non-osmotically elevated is one of the commonest routes to iatrogenic hyponatraemia — the risk framed in [[ghp-osmotic-equilibrium-tonicity]].',
  ],

  mechanism: {
    title: 'Sense tonicity, conserve then acquire water',
    steps: [
      { id: 's1', label: 'Plasma osmolality rises ~1% above ~280 mOsm/kg', emphasis: 'key' },
      { id: 's2', label: 'Hypothalamic osmoreceptors shrink and fire' },
      { id: 's3', label: 'Supraoptic/paraventricular nuclei release ADH from the posterior pituitary', emphasis: 'key' },
      { id: 's4', label: 'V2 receptors → cAMP → aquaporin-2 inserted in collecting duct', emphasis: 'key' },
      { id: 's5', label: 'Water reabsorbed down the medullary gradient; urine concentrates' },
      { id: 's6', label: 'Above ~290–295 mOsm/kg thirst is triggered — the only route to net water gain', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Euvolaemic hyponatraemia with concentrated urine', mechanism: 'ADH acting when osmolality should have suppressed it — SIADH', significance: 'key' },
    { sign: 'Polyuria and intense thirst with rising plasma sodium', mechanism: 'Absent or ineffective ADH', significance: 'key' },
    { sign: 'Severe hypernatraemia in a patient without access to water', mechanism: 'Thirst is the only mechanism for net water gain and has been prevented', significance: 'key' },
    { sign: 'Hyponatraemia after surgery with hypotonic fluid', mechanism: 'Non-osmotic ADH release from pain, nausea and opioids', significance: 'key' },
    { sign: 'Diuresis after alcohol ingestion', mechanism: 'Alcohol inhibits ADH release', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Urine osmolality > 100 mOsm/kg in a hyponatraemic patient', meaning: 'ADH is acting — inappropriate if the patient is euvolaemic' },
    { clue: 'Urine sodium > 30 mmol/L with euvolaemia and hyponatraemia', meaning: 'Supports SIADH over hypovolaemic hyponatraemia' },
    { clue: 'Maximally dilute urine with hypernatraemia', meaning: 'Diabetes insipidus' },
    { clue: 'Plasma osmolality below 275 with dilute urine', meaning: 'Appropriately suppressed ADH — primary polydipsia' },
    { clue: 'Response to desmopressin distinguishing two polyuric states', meaning: 'Central versus nephrogenic diabetes insipidus' },
  ],

  treatment: [
    {
      logic: 'In hyponatraemia, ask whether ADH is appropriate before choosing fluid',
      detail: 'If volume is genuinely low, ADH is **appropriate** and saline corrects both problems. If the patient is euvolaemic with concentrated urine, ADH is **inappropriate** and giving saline can worsen the sodium — water restriction is the intervention.',
    },
    {
      logic: 'Protect thirst access in anyone who cannot drink freely',
      detail: 'Because ADH only limits losses, an intact **thirst** mechanism plus access to water is what actually prevents hypernatraemia. The elderly, the sedated and infants lose that protection first, which is why hypernatraemia is largely a disease of restricted access.',
    },
  ],

  mnemonics: [
    { hook: 'ADH saves water, thirst gains water', expansion: ['Hormone can only reduce loss', 'Only drinking adds water', 'Deny water and DI turns dangerous fast'] },
    { hook: '1% osmolality, 10% volume', expansion: ['Osmoreceptors: ~1% change triggers ADH', 'Baroreceptors: need 5–10% volume loss', 'Severe volume loss overrides osmolarity'] },
  ],

  traps: [
    {
      questionCategory: 'Why hypovolaemia causes hyponatraemia',
      wrongInstinct: 'ADH is released only in response to raised osmolality',
      rightAnswer: 'Severe volume depletion releases ADH regardless of tonicity, diluting plasma sodium',
      why: 'The body defends circulating volume in preference to osmolarity',
    },
    {
      questionCategory: 'Why some DI patients look well',
      wrongInstinct: 'Absent ADH must always produce severe hypernatraemia',
      rightAnswer: 'With intact thirst and free water access, plasma sodium stays near normal',
      why: 'Polyuria is matched by polydipsia until access to water is removed',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A euvolaemic patient has plasma sodium 122 mmol/L, urine osmolality 480 mOsm/kg and urine sodium 45 mmol/L. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Hypovolaemic hyponatraemia' },
        { id: 'b', text: 'Syndrome of inappropriate ADH secretion' },
        { id: 'c', text: 'Central diabetes insipidus' },
        { id: 'd', text: 'Primary polydipsia' },
      ],
      answerId: 'b',
      explanation: 'Hyponatraemia should suppress ADH and produce maximally dilute urine. Concentrated urine with a normal urine sodium in a euvolaemic patient indicates ADH acting inappropriately — SIADH. Hypovolaemia would give a low urine sodium.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Why does severe hypovolaemia cause hyponatraemia despite normal osmoreceptor function?',
      options: [
        { id: 'a', text: 'Osmoreceptors are destroyed by hypoperfusion' },
        { id: 'b', text: 'Baroreceptor-driven ADH release overrides osmotic suppression' },
        { id: 'c', text: 'Aldosterone directly lowers plasma sodium' },
        { id: 'd', text: 'The kidney loses the ability to reabsorb sodium' },
      ],
      answerId: 'b',
      explanation: 'Volume receptors are less sensitive than osmoreceptors but take precedence once losses are large. ADH is released to defend circulating volume even though plasma is already hypotonic, so water is retained and sodium falls further.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Through which receptor and mechanism does ADH increase collecting duct water permeability?',
      options: [
        { id: 'a', text: 'V1 receptor raising intracellular calcium' },
        { id: 'b', text: 'V2 receptor raising cAMP and inserting aquaporin-2' },
        { id: 'c', text: 'Direct opening of ENaC channels' },
        { id: 'd', text: 'Nuclear receptor increasing NKCC2 synthesis' },
      ],
      answerId: 'b',
      explanation: 'V2 receptors on principal cells act through cAMP to shuttle preformed aquaporin-2 into the apical membrane. V1 receptors mediate vasoconstriction and matter only at the high concentrations seen in severe haemorrhage.',
      tests: 'mechanism',
    },
  ],
};

export default ghpAdhThirstOsmoreceptorControl;
