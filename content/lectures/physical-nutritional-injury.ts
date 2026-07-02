import type { Lecture } from '../../lib/types';

export const physicalNutritionalInjury: Lecture = {
  id: 'physical-nutritional-injury',
  title: 'Physical & Nutritional Injury',
  system: 'pathology',
  source: 'L8 — Environmental & Occupational Pathology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pathology' },
    { kind: 'lecture', label: 'L8 Physical & nutrition' },
    { kind: 'mechanism', label: 'Thermal/electrical/radiation; deficiency' },
    { kind: 'exam', label: 'Radiation injury; obesity; vitamin deficiency' },
  ],

  highYield: [
    '**PHYSICAL injury results from MECHANICAL trauma (abrasion, laceration, contusion/bruise, incised/puncture wounds — forensic patterns), and from THERMAL, ELECTRICAL and RADIATION energy. THERMAL burns are graded by depth (superficial/partial/full-thickness); large burns cause fluid loss/shock, infection and hypermetabolism. HYPERTHERMIA (heat stroke) and HYPOTHERMIA are systemic; localised cold causes FROSTBITE (ice-crystal + vascular injury). ELECTRICAL injury causes burns and, if current crosses the heart, fatal ARRHYTHMIA.**',
    '**RADIATION injury: IONISING radiation damages DNA directly and via free radicals (water radiolysis). Rapidly dividing tissues are most vulnerable — BONE MARROW (cytopenias), GUT epithelium, skin, gonads, and the fetus. Acute high-dose causes acute radiation syndrome; it is also mutagenic/CARCINOGENIC (leukaemia, thyroid and solid cancers) and causes late FIBROSIS and vascular damage. Non-ionising UV causes sunburn and skin cancers. Radiation is also therapeutic (radiotherapy exploits the same DNA damage against tumours).**',
    '**NUTRITIONAL disease spans DEFICIENCY and EXCESS. In many populations OBESITY / metabolic syndrome now dominates — a risk factor for type 2 diabetes, atherosclerosis/IHD, NAFLD, and several cancers. PROTEIN-ENERGY MALNUTRITION includes MARASMUS (total calorie deficit — severe wasting) and KWASHIORKOR (protein deficit with some calories — oedema, fatty liver, "flaky-paint" skin). Anorexia/bulimia are important eating disorders.**',
    '**VITAMIN deficiencies each cause a syndrome (high-yield): vitamin A (night blindness, xerophthalmia), vitamin C (SCURVY — poor collagen/wound healing, bleeding gums), vitamin D (RICKETS/osteomalacia), vitamin B1/thiamine (beriberi, Wernicke-Korsakoff), B3/niacin (PELLAGRA — the 3 D\'s: dermatitis, diarrhoea, dementia), B12/folate (megaloblastic anaemia; B12 also neurologic), and vitamin K (bleeding). Fat-soluble vitamins (A, D, E, K) can also cause toxicity in EXCESS.**',
    '**The take-home: PHYSICAL injury = mechanical, THERMAL (burns → fluid loss/shock; frostbite), ELECTRICAL (arrhythmia), RADIATION (ionising → DNA damage, marrow/gut/gonads, cancer/fibrosis; UV → skin cancer). NUTRITION: OBESITY/metabolic syndrome (diabetes/IHD/cancer), PEM (marasmus vs KWASHIORKOR), VITAMIN deficiencies (C→scurvy, D→rickets, B3→pellagra, B1→beriberi/Wernicke).** Chemical/tobacco/alcohol injury is [[environmental-chemical-tobacco-injury]]; radiation carcinogenesis links to [[carcinogenesis-molecular]].',
  ],

  mechanism: {
    title: 'Physical: mechanical, thermal (burns/frostbite), electrical (arrhythmia), radiation (ionising → DNA/marrow/gut/gonads/cancer/fibrosis; UV → skin cancer); nutrition: obesity/metabolic syndrome, PEM (marasmus vs kwashiorkor), vitamin deficiencies',
    steps: [
      { id: 's1', label: 'Physical: mechanical trauma; thermal burns (→ fluid loss/shock); frostbite; electrical (arrhythmia)', emphasis: 'key' },
      { id: 's2', label: 'Ionising radiation → DNA damage (direct + free radicals); hits dividing tissues (marrow/gut/gonads/fetus)', emphasis: 'danger' },
      { id: 's3', label: 'Radiation is mutagenic/CARCINOGENIC (leukaemia/thyroid) + late fibrosis; UV → skin cancer', emphasis: 'danger' },
      { id: 's4', label: 'Nutrition excess: OBESITY/metabolic syndrome → diabetes/IHD/cancer', emphasis: 'key' },
      { id: 's5', label: 'PEM: marasmus (calories) vs KWASHIORKOR (protein, oedema); vitamins (C scurvy, D rickets, B3 pellagra, B1 beriberi)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Bone marrow suppression and GI epithelial damage after radiation', mechanism: 'Ionising radiation (dividing tissues)', significance: 'key' },
    { sign: 'Leukaemia or thyroid cancer years after radiation exposure', mechanism: 'Radiation carcinogenesis', significance: 'key' },
    { sign: 'Type 2 diabetes, fatty liver and IHD in an obese patient', mechanism: 'Obesity / metabolic syndrome', significance: 'key' },
    { sign: 'Oedema, fatty liver and "flaky-paint" skin in a child with protein deficiency', mechanism: 'Kwashiorkor', significance: 'supportive' },
    { sign: 'Bleeding gums and poor wound healing', mechanism: 'Vitamin C deficiency (scurvy)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tissues most sensitive to ionising radiation', meaning: 'Rapidly dividing (marrow, gut, gonads, fetus)' },
    { clue: 'The protein-deficiency form of malnutrition with oedema', meaning: 'Kwashiorkor (marasmus = total calorie deficit)' },
    { clue: 'The vitamin whose lack causes scurvy', meaning: 'Vitamin C' },
    { clue: 'The niacin-deficiency syndrome (3 D\'s)', meaning: 'Pellagra (dermatitis, diarrhoea, dementia)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Physical and nutritional injuries are common and preventable. Understanding burn depth and the systemic consequences of large burns (fluid loss, shock, infection) guides resuscitation, and recognising electrical injury\'s arrhythmia risk and CO/thermal exposures aids emergency care. Ionising radiation\'s predilection for dividing tissues explains both its toxicity (cytopenias, mucositis) and its therapeutic use, plus its long-term cancer/fibrosis risk. On nutrition, obesity/metabolic syndrome is a leading driver of diabetes, cardiovascular disease and cancer, while deficiency states (PEM, and the classic vitamin-deficiency syndromes — scurvy, rickets, pellagra, beriberi) are recognisable and treatable. Chemical/tobacco/alcohol injury is [[environmental-chemical-tobacco-injury]]; radiation carcinogenesis is [[carcinogenesis-molecular]].' },
  ],

  mnemonics: [
    { hook: 'Radiation hits "dividing tissues": marrow, gut, gonads, skin, fetus (+ cancer/fibrosis)', expansion: ['UV → skin cancer', 'Also therapeutic (radiotherapy)'] },
    { hook: 'Vitamins: "C=scurvy, D=rickets, B3=pellagra (3 D\'s), B1=beriberi/Wernicke"', expansion: ['Marasmus (calories) vs kwashiorkor (protein)', 'Obesity → diabetes/IHD/cancer'] },
  ],

  traps: [
    {
      questionCategory: 'Marasmus vs kwashiorkor',
      wrongInstinct: 'Marasmus and kwashiorkor are just two names for the same severe malnutrition',
      rightAnswer: 'They differ: MARASMUS is a deficit of TOTAL calories (energy) causing severe generalised WASTING (loss of muscle and fat, "skin and bones") but usually NO oedema; KWASHIORKOR is a relative PROTEIN deficiency (often with some carbohydrate intake) causing hypoalbuminaemia with OEDEMA, a fatty liver, and "flaky-paint" skin changes — so oedema and fatty liver point to kwashiorkor, whereas profound wasting without oedema points to marasmus',
      why: 'The protein-versus-total-calorie distinction (oedematous kwashiorkor vs wasted marasmus) changes recognition and refeeding management, and is a classic exam contrast in protein-energy malnutrition.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Ionising radiation injures which tissues most severely?',
      options: [
        { id: 'a', text: 'Rapidly dividing tissues (bone marrow, gut epithelium, gonads, fetus)' },
        { id: 'b', text: 'Mature neurons only' },
        { id: 'c', text: 'Adipose tissue only' },
        { id: 'd', text: 'Fully differentiated cardiac muscle only' },
      ],
      answerId: 'a',
      explanation: 'Ionising radiation damages DNA (directly and via free radicals from water radiolysis) and most affects rapidly dividing tissues — bone marrow (cytopenias), gut epithelium, skin, gonads and the fetus. It is also mutagenic/carcinogenic and causes late fibrosis and vascular damage.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A child with oedema, a fatty liver and "flaky-paint" skin changes but only mild wasting most likely has:',
      options: [
        { id: 'a', text: 'Kwashiorkor (protein deficiency)' },
        { id: 'b', text: 'Marasmus (total calorie deficiency)' },
        { id: 'c', text: 'Obesity' },
        { id: 'd', text: 'Scurvy' },
      ],
      answerId: 'a',
      explanation: 'Kwashiorkor is a relative protein deficiency (often with some caloric intake) producing hypoalbuminaemia with oedema, a fatty liver and characteristic skin changes. Marasmus is a total calorie deficit causing severe generalised wasting without oedema.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default physicalNutritionalInjury;
