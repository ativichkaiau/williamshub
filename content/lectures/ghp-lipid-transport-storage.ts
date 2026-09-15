import type { Lecture } from '../../lib/types';

export const ghpLipidTransportStorage: Lecture = {
  id: 'ghp-lipid-transport-storage',
  title: 'Lipid Transport & Adipose Storage',
  system: 'molecular',
  source: 'Ch 68 — Lipid Metabolism',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 68 Lipid Metabolism' },
    { kind: 'mechanism', label: 'LPL fills the depot · HSL empties it' },
    { kind: 'exam', label: 'Anhydrous storage · the glycerol-3-phosphate rule' },
  ],

  highYield: [
    '**Fat is the body\'s storage fuel because of a density argument far more lopsided than 9-versus-4.** Triglyceride yields about **9 kcal/g** against **4 kcal/g** for carbohydrate, but the decisive difference is **water**. Glycogen is stored **hydrated**, carrying roughly **2–3 g of water per gram**, so the weight actually carried delivers only about **1–1.5 kcal/g**. Triglyceride is stored **anhydrous**, in a droplet that is almost pure lipid. The real advantage is therefore closer to **six- to eightfold**, not twofold. A 70 kg adult holds some **12 kg of fat — over 100,000 kcal, weeks of fuel** — against roughly **400 g of glycogen worth under 2,000 kcal**, barely a day. Stored as glycogen, that same reserve would weigh more than the person. There was never an alternative design.',
    '**You cannot store fat without carbohydrate, and the reason is one missing enzyme.** Esterifying a fatty acid needs a **glycerol-3-phosphate** backbone, and the adipocyte **has no glycerol kinase** — it cannot phosphorylate free glycerol. Its only source of glycerol-3-phosphate is **dihydroxyacetone phosphate from glycolysis**, which means **from glucose**, which means **insulin and GLUT4**. Two consequences fall straight out. First, **feeding is permissive for every gram of fat laid down**. Second, the glycerol liberated by lipolysis **cannot be re-used locally** and escapes to the **liver**, which does have glycerol kinase and feeds it into gluconeogenesis. Within the adipocyte a constant cycle of lipolysis and re-esterification runs; when glucose is scarce the re-esterification limb fails and fatty acids simply **leak out**.',
    '**Lipoprotein lipase and hormone-sensitive lipase move fat in opposite directions — this is the single most confused pair in the chapter.** **LPL is extracellular**, tethered to the **capillary endothelium** facing the blood, switched on by **apoC-II** donated by HDL, and it hydrolyses triglyceride **inside chylomicrons and VLDL** so the fatty acids can be taken into the tissue. **HSL is intracellular**, inside the adipocyte, working on the **stored droplet**, phosphorylated by **PKA** under catecholamines, glucagon and growth hormone. The elegance is in the switch: **insulin raises adipose LPL and simultaneously shuts HSL off**, so both arrows point into storage, while fasting and exercise reverse both. Insulin also lowers **muscle** LPL, so the fed state routes circulating fat to the depot rather than to the furnace.',
    '**Antilipolysis is the most sensitive action insulin has, and that single fact governs ketosis.** Suppression of HSL is achieved at insulin concentrations **far below** those needed to move glucose into muscle. So a trace of residual insulin keeps the fat depot shut, and this is why a fasting person does not develop ketoacidosis, why very small insulin doses abolish ketogenesis in diabetic ketoacidosis, and why the loss of the **last** of the insulin secretion — not the first — is what tips a patient into crisis. Mobilised fatty acids then travel **bound to albumin**: the term *free fatty acid* is a misnomer, since well under **0.01%** is truly unbound. Plasma levels run about **0.15–0.45 mEq/L** fed and rise past **1.5–2 mEq/L** in starvation, with a half-life of only **2–3 minutes** — it is the **flux**, not the concentration, that the fasting signal changes.',
    '**Four lipoproteins, two enzymes, one economy.** **Chylomicrons (apoB-48)** carry *dietary* triglyceride from gut to periphery by lymph; **VLDL (apoB-100)** carries *hepatic* triglyceride the same way. Both are unloaded by **the same LPL** and both leave **remnants**; VLDL remnants become **IDL then LDL**, whose job is cholesterol *delivery*, while **HDL** runs cholesterol *back* and lends out the **apoC-II and apoE** that make the whole system work. The practical rule: **surplus carbohydrate leaves the liver as VLDL triglyceride**, which is why a high-carbohydrate or high-fructose intake raises **triglycerides** rather than cholesterol, and why the fasting triglyceride is a feeding-state measurement in a way the cholesterol is not.',
    '**Adipose tissue is a buffer, and metabolic disease is what happens when the buffer fails.** Its postprandial job is to **trap the fatty acid flood** before it spills elsewhere; when storage capacity is exceeded or absent, lipid is deposited **ectopically** in liver, muscle, pancreas and viscera, and that is where insulin resistance is generated. Two opposite experiments make the same point: **massive obesity** and **congenital lipodystrophy** — almost no adipose at all — both produce severe insulin resistance, fatty liver and triglycerides in the thousands. It is not the **mass** of fat that injures, it is whether the fat is **in the right compartment**. This is also why **visceral** fat carries more risk than subcutaneous: it is more lipolytically active and it drains **portally**, exposing the liver to the highest fatty acid concentrations in the body.',
  ],

  mechanism: {
    title: 'Feed → insulin → LPL fills the depot → glucose supplies glycerol-3-phosphate → fast → HSL empties it → albumin-bound fatty acids out',
    steps: [
      { id: 's1', label: 'Dietary fat arrives as chylomicrons and hepatic fat as VLDL — cargo far too large to cross a capillary wall', emphasis: 'normal' },
      { id: 's2', label: 'Lipoprotein lipase on the capillary endothelium, switched on by apoC-II, hydrolyses that cargo at the tissue door', detail: 'Extracellular enzyme acting on triglyceride inside a lipoprotein — the opposite of hormone-sensitive lipase in every respect', emphasis: 'key' },
      { id: 's3', label: 'Insulin raises adipose LPL and lowers muscle LPL, so the fed state routes fat into storage rather than oxidation', emphasis: 'key' },
      { id: 's4', label: 'Inside the adipocyte, glucose-derived glycerol-3-phosphate esterifies the fatty acids — no carbohydrate, no storage', detail: 'Adipose has no glycerol kinase, so the backbone must come from dihydroxyacetone phosphate in glycolysis', emphasis: 'key' },
      { id: 's5', label: 'Fasting drops insulin and raises catecholamines; PKA activates hormone-sensitive lipase and the droplet is dismantled', emphasis: 'key' },
      { id: 's6', label: 'Fatty acids leave on albumin with a half-life of minutes; the glycerol goes to the liver, which alone can phosphorylate it', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Milky, lipaemic serum with fasting triglycerides above 1000 mg/dL, eruptive xanthomas and recurrent pancreatitis in a child', mechanism: 'Lipoprotein lipase or apoC-II deficiency — the capillary enzyme that unloads chylomicrons is missing, so dietary fat never leaves the blood', significance: 'key' },
    { sign: 'Two to three kilograms lost in the first days of a very-low-carbohydrate diet, far faster than any energy deficit can explain', mechanism: 'Glycogen is stored with 2–3 g of water per gram; depleting it releases that obligate water. The early loss is water, not fat', significance: 'key' },
    { sign: 'Plasma free fatty acids rising from 0.4 to above 1.5 mEq/L within 24 hours of fasting while total body fat is unchanged', mechanism: 'The fasting signal alters lipolytic flux through the depot, not the size of the depot', significance: 'key' },
    { sign: 'Severe insulin resistance, hepatic steatosis and triglycerides in the thousands in a patient with almost no subcutaneous fat', mechanism: 'Congenital lipodystrophy — with no buffer to trap postprandial fatty acids, lipid is deposited ectopically in liver and muscle', significance: 'key' },
    { sign: 'Rising unconjugated bilirubin and kernicterus risk in a sick neonate given a rapid intravenous lipid infusion', mechanism: 'Fatty acids and bilirubin compete for the same albumin binding sites; a fatty acid load displaces bilirubin into the free fraction', significance: 'supportive' },
    { sign: 'A man with a normal BMI but central adiposity carrying greater metabolic risk than a woman with more total fat worn on the hips', mechanism: 'Visceral fat is more lipolytically active and drains portally, so the liver sees the highest fatty acid flux in the body', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Enzyme on the capillary endothelium that unloads circulating triglyceride into tissue', meaning: 'Lipoprotein lipase, activated by apoC-II donated from HDL — it fills the depot from outside the cell' },
    { clue: 'Enzyme inside the adipocyte that dismantles the stored droplet', meaning: 'Hormone-sensitive lipase, activated by PKA and suppressed by insulin — it empties the depot from within' },
    { clue: 'Reason adipose tissue cannot re-use the glycerol it has just released', meaning: 'It has no glycerol kinase; glycerol-3-phosphate must come from glucose, so the free glycerol is exported to the liver' },
    { clue: 'Form in which mobilised fatty acids travel in plasma', meaning: 'Bound to albumin, with a half-life of only 2–3 minutes — flux is enormous even when the concentration looks modest' },
    { clue: 'Apolipoprotein marking a chylomicron as intestinal, and the one marking VLDL as hepatic', meaning: 'ApoB-48 and apoB-100 respectively — same LPL unloads both particles' },
    { clue: 'The insulin action achieved at the lowest hormone concentration of all', meaning: 'Suppression of lipolysis, which is why a very small insulin dose shuts down fatty acid release and ketogenesis' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'This module is the **whole-body economics**, not the chemistry — the pathway steps live next door in [[tag-storage-mobilization]]. Two rules carry almost all the clinical weight. **Storage requires carbohydrate**, because adipose must borrow its glycerol-3-phosphate from glucose, so insulin is permissive for every gram laid down and the fed-state signalling in [[hen1-insulin-signaling-fed-metabolism]] is the switch that closes the depot. And **the same hormone works both levers at once** — LPL up, hormone-sensitive lipase off — which is why the transition between storing and mobilising is so abrupt rather than graded.' },
    { logic: 'Where it is examined', detail: 'Three stems recur. **Which lipase** the question is really about: LPL clears triglyceride *out of* the blood, hormone-sensitive lipase releases fatty acids *into* it, and the deficiency syndromes sit at opposite poles — see [[lipoproteins-atherogenesis]] for the particle side and [[ghp-fat-digestion-absorption]] for how the chylomicron got there. **Why the first days of a low-carbohydrate diet lose so much weight** — obligate glycogen water, and the examiner wants the 2–3 g per gram figure. And **why fat mobilisation is all-or-nothing**, which is the bridge into [[ghp-fat-as-fuel-ketosis]].' },
  ],

  mnemonics: [
    { hook: 'LPL Loads the depot from outside; HSL Hoists fat out from inside', expansion: ['LPL sits on capillary endothelium and attacks triglyceride inside a lipoprotein', 'HSL sits in the adipocyte cytoplasm and attacks triglyceride inside the droplet', 'ApoC-II switches LPL on; PKA switches HSL on', 'Insulin turns LPL up and HSL off — both arrows point into storage'] },
    { hook: 'No carbs, no storage — the glycerol-3-phosphate rule', expansion: ['Adipose tissue has no glycerol kinase', 'The glycerol backbone must be built from glucose via dihydroxyacetone phosphate', 'So insulin and feeding are permissive for fat deposition', 'Released glycerol is exported to the liver, which can phosphorylate it for gluconeogenesis'] },
  ],

  traps: [
    {
      questionCategory: 'Which lipase the stem is actually asking about',
      wrongInstinct: 'Hormone-sensitive lipase is the enzyme that clears a high triglyceride level from the blood',
      rightAnswer: 'Lipoprotein lipase clears circulating triglyceride into tissue; hormone-sensitive lipase releases stored triglyceride into the circulation',
      why: 'They move fat in opposite directions — LPL deficiency gives massive chylomicronaemia and pancreatitis, while unrestrained HSL gives a flood of free fatty acids and ketones.',
    },
    {
      questionCategory: 'Why fat storage stops during a fast',
      wrongInstinct: 'Acetyl-CoA is abundant in starvation, so triglyceride synthesis should be able to continue',
      rightAnswer: 'The adipocyte cannot make glycerol-3-phosphate without glucose, so fatty acids cannot be esterified and leave the cell instead',
      why: 'Esterification, not fatty acid supply, is the limiting step — which is why falling insulin empties the depot from both directions at once.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy volunteer fasts for 48 hours. Adipose tissue continues to release fatty acids and glycerol, but no re-esterification of fatty acids into triglyceride occurs within the adipocyte. The most direct explanation is that adipose tissue:',
      options: [
        { id: 'a', text: 'Has lost the ability to activate fatty acids to their CoA derivatives' },
        { id: 'b', text: 'Lacks glycerol kinase and therefore needs glucose to generate glycerol-3-phosphate' },
        { id: 'c', text: 'Has downregulated lipoprotein lipase on its capillary endothelium' },
        { id: 'd', text: 'Cannot take up albumin-bound fatty acids from the plasma' },
      ],
      answerId: 'b',
      explanation: 'Esterification requires a glycerol-3-phosphate backbone. The adipocyte cannot phosphorylate the glycerol it has just released because it has no glycerol kinase, so its only route to glycerol-3-phosphate is dihydroxyacetone phosphate from glycolysis. Fasting removes the glucose and the insulin that delivers it, the re-esterification limb fails, and fatty acids leave the cell. Falling LPL is real but concerns uptake of circulating triglyceride, not internal recycling.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 6-year-old has recurrent abdominal pain, eruptive xanthomas over the buttocks, and serum that separates into a creamy layer on standing. Fasting triglycerides are 2800 mg/dL; cholesterol is only mildly raised and there is no premature vascular disease in the family. The defective step is:',
      options: [
        { id: 'a', text: 'Hormone-sensitive lipase activity within the adipocyte' },
        { id: 'b', text: 'Hepatic uptake of LDL by the LDL receptor' },
        { id: 'c', text: 'Lipoprotein lipase or its activator apoC-II at the capillary endothelium' },
        { id: 'd', text: 'Microsomal triglyceride transfer protein in the enterocyte' },
      ],
      answerId: 'c',
      explanation: 'Creamy fasting serum with triglycerides in the thousands and near-normal cholesterol is chylomicronaemia: the particles are made and secreted normally but never unloaded, because the capillary enzyme or its apoC-II activator is missing. The complications are pancreatitis and eruptive xanthomas rather than atheroma, since the retained particle is too large to enter the arterial wall. An MTP defect would give the opposite picture, with no chylomicrons in plasma at all.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Why can the body not use glycogen as its principal long-term energy store, even though hepatic and muscle glycogen are readily mobilised?',
      options: [
        { id: 'a', text: 'Glycogen cannot be broken down fast enough to meet resting energy demand' },
        { id: 'b', text: 'Glycogen yields about half the energy per gram of triglyceride and is stored hydrated with 2–3 g of water per gram, so the effective penalty is six- to eightfold' },
        { id: 'c', text: 'Glycogen granules are confined to liver and muscle, which have no capacity to expand' },
        { id: 'd', text: 'Glycogen cannot be converted to glucose without insulin' },
      ],
      answerId: 'b',
      explanation: 'The 9-versus-4 kcal/g comparison understates the difference badly. Glycogen is stored with two to three grams of associated water for every gram of polysaccharide, so the mass actually carried delivers little more than 1 kcal/g, whereas triglyceride is stored essentially anhydrous. A reserve of 100,000 kcal held as glycogen would weigh tens of kilograms. This is also the reason for the dramatic early weight loss on a low-carbohydrate diet, which is obligate glycogen water rather than fat.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLipidTransportStorage;
