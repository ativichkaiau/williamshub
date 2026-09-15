import type { Lecture } from '../../lib/types';

export const ghpSplanchnicCirculation: Lecture = {
  id: 'ghp-splanchnic-circulation',
  title: 'Splanchnic Circulation and the Portal System',
  system: 'gi',
  source: 'Ch 63 — General Principles of Gastrointestinal Function',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 63 Splanchnic Circulation' },
    { kind: 'mechanism', label: 'Portal first pass · villus countercurrent' },
    { kind: 'exam', label: 'Autoregulatory escape · villus tip necrosis' },
  ],

  highYield: [
    '**The defining feature is two capillary beds in series, and nearly everything else follows from it.** Blood from **stomach, intestine, spleen and pancreas** drains not to the vena cava but into the **portal vein**, through the **liver sinusoids**, and only then into the hepatic veins and the heart. Hepatic inflow is roughly **1050 mL/min of portal blood plus about 300 mL/min of hepatic arterial blood — some 1350 mL/min, about a quarter of resting cardiac output**. The arrangement buys two things: **Kupffer cells strip out almost all bacteria absorbed from the gut**, and **the liver takes first pass at every water-soluble nutrient** before the systemic circulation ever sees it.',
    '**Fat is the exception that proves the portal rule.** Monosaccharides and amino acids enter the **portal blood** and are buffered by the liver. **Long-chain fatty acids are re-esterified in the enterocyte, packaged as chylomicrons and leave in intestinal lymph**, up the thoracic duct, into the **subclavian vein — bypassing hepatic first pass entirely**. That single split explains two clinical observations: **plasma turns lipaemic after a fatty meal**, because those lipids reach the systemic blood unfiltered, while **systemic glucose barely moves after a starch meal**, because the liver has already taken its share.',
    '**Countercurrent exchange in the villus is elegant, and it is also the weak point.** Each villus carries **one central arteriole** running to the tip with **venules and capillaries returning alongside it in the opposite direction**. Oxygen therefore **diffuses straight across from arteriole to venule at the base of the villus**, and **up to 80% can short-circuit before reaching the tip**. In health the cost is small. **When flow slows, blood dwells longer in the exchanger and a larger fraction short-circuits**, so the tip starves first — which is why **necrosis in ischaemic bowel begins at the villus tip and works downward**, and why **the mucosa can be infarcting while the serosa still looks normal to the surgeon**.',
    '**Postprandial hyperaemia raises mucosal flow up to eightfold, and every mediator is local.** Absorption itself drives up mucosal metabolic rate; **falling local oxygen releases adenosine, the probable common final vasodilator**; **kinins — kallidin and bradykinin — are liberated by the actively secreting glands** and are powerful dilators; and the **gut hormones gastrin, cholecystokinin, secretin and VIP** add their own vasodilator effect. Note the pattern the exam wants: **flow rises specifically in the layer doing the work** — mucosal flow during absorption, muscular flow during motility. **Parasympathetic stimulation raises flow only indirectly**, by driving secretion and motility, because the gut has no significant direct vasodilator innervation.',
    '**Under sympathetic drive the gut becomes a blood bank, and then it quietly escapes.** Sympathetic stimulation constricts splanchnic arterioles intensely and, more usefully, constricts the **large splanchnic and hepatic veins**, expelling **several hundred millilitres of blood** into the systemic circulation — a free autotransfusion in haemorrhage or hard exercise, alongside diversion of flow to heart, brain and muscle. The counterweight is **autoregulatory escape**: within minutes, accumulating local metabolic vasodilators override the constrictor signal and **arterial flow drifts back toward normal**, protecting the gut from infarction **while the venous reservoir stays squeezed**. Constriction of capacitance outlasts constriction of resistance.',
    '**In shock the gut is sacrificed first and restored last, and that is how the mucosal barrier fails.** Sympathetic outflow is reinforced by **angiotensin II and vasopressin**, both unusually potent splanchnic constrictors, so gut flow falls further and for longer than anywhere else. Prolonged hypoperfusion, amplified by the countercurrent short-circuit, produces **villus tip necrosis and loss of the epithelial barrier**, and **bacteria and endotoxin translocate into portal blood at the very moment the Kupffer cells are themselves hypoperfused**. **Reperfusion delivers a second hit** through mucosal **xanthine oxidase** and neutrophil influx. This is the basis of the claim that **the gut is the motor of multiple organ dysfunction**, and clinically why **splanchnic perfusion falls well before blood pressure does**.',
  ],

  mechanism: {
    title: 'Gut capillaries → villus countercurrent → portal vein → liver sinusoids → systemic circulation',
    steps: [
      { id: 's1', label: 'Coeliac, superior and inferior mesenteric arteries supply the first capillary bed' },
      { id: 's2', label: 'In each villus, oxygen short-circuits arteriole to venule at the base', emphasis: 'key' },
      { id: 's3', label: 'All of it drains into the portal vein, not the inferior vena cava', emphasis: 'key' },
      { id: 's4', label: 'Liver sinusoids form a second bed: Kupffer clearance and nutrient first pass', emphasis: 'key' },
      { id: 's5', label: 'Local mediators — adenosine, kinins, gut hormones — drive postprandial hyperaemia' },
      { id: 's6', label: 'Sympathetic constriction empties the reservoir and starves the villus tip', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Mucosal necrosis beginning at the villus tips with viable muscularis beneath', mechanism: 'Countercurrent oxygen short-circuit at the villus base leaves the tip with the lowest oxygen tension', significance: 'key' },
    { sign: 'Abdominal pain grossly out of proportion to a soft abdomen and an unremarkable examination', mechanism: 'Early mesenteric ischaemia injures mucosa long before serosa and parietal peritoneum are involved', significance: 'key' },
    { sign: 'Blood pressure still normal in early haemorrhage while gut perfusion has already fallen', mechanism: 'Splanchnic constriction autotransfuses the venous reservoir and diverts flow to heart and brain', significance: 'key' },
    { sign: 'Intestinal flow drops sharply with sympathetic stimulation, then drifts back toward normal within minutes', mechanism: 'Autoregulatory escape — accumulating local metabolic vasodilators override the constrictor signal', significance: 'key' },
    { sign: 'Plasma turns lipaemic after a fatty meal but systemic glucose barely rises after a starch meal', mechanism: 'Chylomicrons bypass the liver via intestinal lymph while sugars face hepatic first pass', significance: 'supportive' },
    { sign: 'Intestinal blood flow rising several-fold during active absorption', mechanism: 'Adenosine, kinins from secreting glands and gut hormones dilate the working mucosal bed', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Vessel into which stomach, intestine, spleen and pancreas all drain', meaning: 'The portal vein — gut blood traverses the liver before reaching the systemic circulation' },
    { clue: 'Approximate share of resting cardiac output passing through the liver', meaning: 'About a quarter, roughly 1350 mL per minute, of which about 1050 is portal' },
    { clue: 'Reason the villus tip is the first part of the mucosa to infarct', meaning: 'Countercurrent arteriole-to-venule oxygen short-circuit at the villus base' },
    { clue: 'Probable common final vasodilator of postprandial hyperaemia', meaning: 'Adenosine, released as local oxygen tension falls' },
    { clue: 'Phenomenon that restores gut arterial flow despite continuing sympathetic stimulation', meaning: 'Autoregulatory escape — capacitance stays constricted while resistance relaxes' },
    { clue: 'Consequence of prolonged splanchnic hypoperfusion for the mucosa', meaning: 'Villus tip necrosis, barrier failure and translocation of bacteria and endotoxin into portal blood' },
  ],

  treatment: [
    { logic: 'Why it matters at the bedside', detail: 'The two-bed anatomy is what makes gut circulation clinically distinctive. Raise resistance in the **second** bed and you get **portal hypertension** with varices, splenomegaly and ascites rather than gut congestion alone: [[cirrhosis-fatty-liver-portal-hypertension]]. Drop flow through the **first** bed and you get mucosa-first necrosis with a deceptively benign abdomen: [[appendicitis-diverticular-ischemic-bowel]]. The same first-pass principle also governs how orally given drugs reach the systemic circulation.' },
    { logic: 'The three rules worth carrying into the exam', detail: '**One — everything from the gut goes through the liver, except fat.** Water-soluble nutrients face first pass; chylomicrons take the lymph and skip it. **Two — the villus tip is the watershed.** Countercurrent short-circuiting worsens as flow slows, so hypoperfusion damages the tip before anything else, and mucosa before serosa. **Three — sympathetic constriction of resistance escapes but constriction of capacitance does not.** Flow returns within minutes while the reservoir stays emptied into the systemic circulation. The motility layer these vessels supply: [[ghp-gi-smooth-muscle-electrical]] and [[ghp-enteric-nervous-system]].' },
  ],

  mnemonics: [
    { hook: 'Two beds in series: gut first, liver second', expansion: ['Kupffer cells clear almost all the bacteria the gut absorbs', 'Water-soluble nutrients face hepatic first pass; chylomicrons take the lymph and skip it'] },
    { hook: 'Slow flow means more short-circuit, and the tip pays', expansion: ['The villus countercurrent trades tip oxygenation for a compact vascular design', 'It is why ischaemic necrosis starts at the tip and why mucosa dies before serosa'] },
  ],

  traps: [
    {
      questionCategory: 'Which part of the bowel wall dies first in hypoperfusion',
      wrongInstinct: 'The serosa lies furthest from the luminal nutrient supply, so the outer wall must be the most vulnerable layer',
      rightAnswer: 'The mucosa dies first, and within it the villus tip, because oxygen short-circuits from arteriole to venule at the villus base',
      why: 'Oxygen leaves the arteriole before reaching the tip, and slowing the flow makes that leak worse rather than better.',
    },
    {
      questionCategory: 'What sustained sympathetic stimulation does to gut blood flow',
      wrongInstinct: 'Flow stays maximally constricted for as long as the sympathetic discharge continues',
      rightAnswer: 'Arterial flow escapes back toward normal within minutes through local metabolic vasodilation, while the venous reservoir stays constricted',
      why: 'Autoregulatory escape protects the gut from infarction without giving back the autotransfused blood volume.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient in prolonged hypovolaemic shock undergoes laparotomy. The small bowel serosa looks essentially normal, yet histology of a resected segment shows necrosis confined to the upper third of the villi. The anatomical basis is:',
      options: [
        { id: 'a', text: 'The villus tip is supplied only by lymphatic lacteals, which carry no oxygen' },
        { id: 'b', text: 'Countercurrent arrangement lets oxygen diffuse from arteriole to venule at the villus base, so the tip has the lowest oxygen tension' },
        { id: 'c', text: 'Portal venous blood reaches the tip before the arterial supply does' },
        { id: 'd', text: 'The serosa has a separate supply from the hepatic artery' },
      ],
      answerId: 'b',
      explanation: 'A central arteriole runs to the tip alongside venules returning in the opposite direction, so up to 80 percent of oxygen can short-circuit across at the base. When flow slows, dwell time in the exchanger lengthens and the fraction short-circuited rises, so the tip is the first tissue to fail. Lacteals carry chyle, not oxygen; portal blood is the outflow, not the supply; and the serosa is supplied by the same mesenteric vessels.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Intense sympathetic stimulation of the mesenteric bed is maintained for thirty minutes. Compared with the first minute, at thirty minutes the most likely finding is:',
      options: [
        { id: 'a', text: 'Arterial flow still maximally reduced, with venous capacitance returned to baseline' },
        { id: 'b', text: 'Arterial flow returned most of the way toward normal, with venous capacitance still constricted' },
        { id: 'c', text: 'Both arterial flow and venous capacitance returned fully to baseline' },
        { id: 'd', text: 'Progressive further reduction in arterial flow as noradrenaline accumulates' },
      ],
      answerId: 'b',
      explanation: 'This is autoregulatory escape. Accumulating local metabolic vasodilators, chiefly adenosine released as tissue oxygen falls, progressively override the constrictor signal at the resistance vessels, so gut arterial flow recovers within minutes and the bowel is spared infarction. Constriction of the large splanchnic and hepatic capacitance veins is not subject to the same escape, so the autotransfused blood volume remains available to the systemic circulation.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'After a mixed meal, systemic plasma becomes visibly lipaemic while systemic glucose rises only modestly. The explanation is that:',
      options: [
        { id: 'a', text: 'Chylomicrons enter intestinal lymph and reach the subclavian vein, bypassing hepatic first pass, whereas monosaccharides enter portal blood' },
        { id: 'b', text: 'Long-chain fatty acids are absorbed faster than monosaccharides across the brush border' },
        { id: 'c', text: 'The liver has no capacity to take up or store triglyceride' },
        { id: 'd', text: 'Glucose is absorbed into lymph while lipid is absorbed into portal blood' },
      ],
      answerId: 'a',
      explanation: 'Water-soluble products of digestion drain into the portal vein and pass through the liver first, so the systemic rise is blunted. Long-chain fatty acids are re-esterified in the enterocyte and exported as chylomicrons into lacteals, up the thoracic duct and into the subclavian vein, entering the systemic circulation unfiltered. Option d reverses the two routes, and the difference is one of route rather than of absorption rate or hepatic capacity.',
      tests: 'mechanism',
    },
  ],
};

export default ghpSplanchnicCirculation;
