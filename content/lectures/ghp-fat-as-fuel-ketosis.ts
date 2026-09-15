import type { Lecture } from '../../lib/types';

export const ghpFatAsFuelKetosis: Lecture = {
  id: 'ghp-fat-as-fuel-ketosis',
  title: 'Fat as Fuel: Beta-Oxidation & Ketosis',
  system: 'molecular',
  source: 'Ch 69 — Lipid Metabolism',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Molecular' },
    { kind: 'lecture', label: 'Ch 69 Lipid Metabolism' },
    { kind: 'mechanism', label: 'Acetyl-CoA exceeds oxaloacetate → ketone export' },
    { kind: 'exam', label: 'Fat makes no glucose · ketosis spares protein' },
  ],

  highYield: [
    '**Fatty acids cannot be converted to glucose in net terms — learn the reason, not the rule.** Fatty acid carbon enters metabolism as **acetyl-CoA**, and there is no way back: **pyruvate dehydrogenase is irreversible**, so acetyl-CoA cannot return to pyruvate. Nor does the TCA cycle help, because the two carbons entering as acetyl are matched by **two carbons leaving as CO2** before oxaloacetate is regenerated — carbon passes through, none accumulates. Only two exceptions exist and both are quantitatively trivial: the **glycerol backbone** of a triglyceride, which enters as dihydroxyacetone phosphate, and the **propionyl-CoA** from the final three carbons of an **odd-chain** fatty acid, which is anaplerotic via succinyl-CoA. A 12 kg fat store therefore represents weeks of energy and almost **no glucose at all**, which is the entire reason the brain needs a substitute fuel rather than simply burning fat.',
    '**The gate into beta-oxidation is malonyl-CoA on CPT-1, and it is the cleanest reciprocal switch in metabolism.** Long-chain fatty acids cannot cross the inner mitochondrial membrane unaided; they need the **carnitine shuttle**, whose rate-limiting entrance is **carnitine palmitoyltransferase 1**. CPT-1 is inhibited by **malonyl-CoA** — the *first committed intermediate of fatty acid synthesis*. So the moment the cell starts building fat, it has automatically locked the door against burning it, and no futile cycle is possible. Fed: insulin high, malonyl-CoA high, **CPT-1 shut**. Fasting: insulin low, malonyl-CoA gone, **gate open**. The clinical payoff is the presentation of a blocked pathway: a fasting child with **hypoglycaemia and inappropriately LOW ketones** has a beta-oxidation defect (**MCAD deficiency, CPT-1 deficiency, carnitine deficiency**), because fat is being mobilised but cannot be burned.',
    '**Ketogenesis is a liver function, and the liver cannot use what it makes.** When beta-oxidation floods the hepatocyte with acetyl-CoA faster than the TCA cycle can consume it — and oxaloacetate is simultaneously being **drained into gluconeogenesis** — the surplus is condensed into **acetoacetate** and **beta-hydroxybutyrate** and exported. The liver lacks **SCOT (thiophorase)**, the enzyme needed to reactivate acetoacetate, so it can make ketones but never burn them: an organ that manufactures fuel exclusively for other tissues. **Acetone** arises by spontaneous decarboxylation of acetoacetate, is volatile, and is blown off — the fruity breath. The old aphorism *fat burns in the flame of carbohydrate* is exactly this: without oxaloacetate to condense with, acetyl-CoA has nowhere to go but ketone bodies.',
    '**The point of ketosis is protein sparing, not acidosis.** The brain cannot use albumin-bound fatty acids, so in early starvation it must be fed glucose, and that glucose comes from **muscle protein** — roughly **75 g of protein catabolised per day** in the first week. Ketones solve this. Blood levels rise over days, **monocarboxylate transporters** at the blood-brain barrier are upregulated, and by **week three the brain draws around two-thirds of its energy from ketones**, needing only about **40 g of glucose a day** instead of 120. Protein loss falls to about **20 g/day**. That single adaptation is what converts a survival time of *weeks* into one of *months*, and it explains the terminal event: when fat is exhausted, protein catabolism must resume, and death follows at roughly **half the body protein lost**.',
    '**Physiological ketosis and diabetic ketoacidosis are separated by insulin and by the brake, not by the ketone level.** In fasting, insulin is low but **present**, so lipolysis remains restrained — and ketones themselves feed back on the adipocyte to further restrain it. Ketones plateau near **7–8 mmol/L**, pH stays **normal**, glucose is normal or low. In **DKA**, insulin is effectively **absent** and the counter-regulatory drive unopposed, so lipolysis is **unrestrained**, ketone production outruns buffering and utilisation, levels pass **20 mmol/L**, and a **high anion gap metabolic acidosis** appears on top of the osmotic diuresis of hyperglycaemia. A third pattern, **alcoholic ketoacidosis**, is driven by a high NADH state that blocks gluconeogenesis and pushes the ratio hard toward beta-hydroxybutyrate, with glucose normal or low.',
    '**Fat costs more oxygen per ATP than carbohydrate does, and that has bedside consequences.** The **respiratory quotient** is about **0.7** for fat and **1.0** for carbohydrate: burning fat consumes more oxygen and produces less CO2 per unit of substrate, while burning carbohydrate produces more CO2 per unit of oxygen used. So overfeeding carbohydrate to a ventilated patient with marginal respiratory reserve **raises CO2 production** and can obstruct weaning, and a measured RQ tells you which fuel is being burned — a value near 0.7 in a fasting subject confirms near-total fat oxidation. For the same reason the **ischaemic myocardium shifts toward glucose**, which yields more ATP per molecule of oxygen, and exercise moves along a continuum from fat at low intensity to carbohydrate as intensity rises.',
  ],

  mechanism: {
    title: 'Insulin falls → fatty acids to liver → CPT-1 gate opens → acetyl-CoA floods → oxaloacetate drained to glucose → ketones exported → brain switches fuel',
    steps: [
      { id: 's1', label: 'Insulin falls, hormone-sensitive lipase runs, and albumin-bound fatty acids flood the portal blood', emphasis: 'normal' },
      { id: 's2', label: 'Malonyl-CoA disappears, releasing its block on CPT-1 and opening the carnitine gate into the mitochondrion', detail: 'The reciprocal switch: the first committed intermediate of fat synthesis is the inhibitor of fat oxidation, so the two can never run together', emphasis: 'key' },
      { id: 's3', label: 'Beta-oxidation generates acetyl-CoA faster than the TCA cycle can consume it', emphasis: 'key' },
      { id: 's4', label: 'Oxaloacetate is simultaneously being pulled into gluconeogenesis, so acetyl-CoA has nothing to condense with', detail: 'This is what the old phrase about fat burning in the flame of carbohydrate actually means', emphasis: 'key' },
      { id: 's5', label: 'Surplus acetyl-CoA is condensed to acetoacetate and beta-hydroxybutyrate and exported — the liver has no SCOT and cannot burn them', emphasis: 'key' },
      { id: 's6', label: 'Brain and muscle take up ketones, cutting glucose demand and sparing the muscle protein that would otherwise supply it', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Hypoglycaemia with absent or inappropriately low ketones in a child after an intercurrent illness and a missed meal', mechanism: 'Hypoketotic hypoglycaemia means fat is mobilised but cannot be oxidised — MCAD, CPT-1 or carnitine deficiency, never simple fasting', significance: 'key' },
    { sign: 'A urine ketone dipstick only weakly positive on arrival in severe ketoacidosis, then becoming more strongly positive as the patient improves', mechanism: 'Nitroprusside detects acetoacetate and acetone but not beta-hydroxybutyrate; the high NADH state favours beta-hydroxybutyrate, and the ratio reverses during treatment', significance: 'key' },
    { sign: 'Blood ketones plateauing at 7–8 mmol/L with an entirely normal arterial pH in a healthy adult fasting for a week', mechanism: 'Residual insulin restrains lipolysis and ketones feed back on the adipocyte, so production never outruns buffering', significance: 'key' },
    { sign: 'Type 1 diabetic with glucose 26 mmol/L, pH 7.08, bicarbonate 6 and an anion gap of 30', mechanism: 'Absolute insulin lack removes the brake on lipolysis entirely — the distinction from fasting ketosis is the missing brake, not the ketones', significance: 'key' },
    { sign: 'Fruity odour on the breath of a patient with ketoacidosis', mechanism: 'Acetoacetate decarboxylates spontaneously to acetone, which is volatile and cleared by the lungs rather than the kidney', significance: 'supportive' },
    { sign: 'A ventilated patient on high-carbohydrate enteral feed with a rising PaCO2 and repeated failed weaning trials', mechanism: 'Carbohydrate has a respiratory quotient of 1.0 against 0.7 for fat, so it generates more CO2 for the same oxygen consumption', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Gate that long-chain fatty acids must pass to enter the mitochondrion', meaning: 'CPT-1 and the carnitine shuttle, held shut by malonyl-CoA whenever fatty acid synthesis is running' },
    { clue: 'The single reason fatty acid carbon cannot become glucose', meaning: 'Pyruvate dehydrogenase is irreversible, and the two acetyl carbons are matched by two CO2 leaving the cycle' },
    { clue: 'The two exceptions that do yield glucose from a fat molecule', meaning: 'The glycerol backbone, and propionyl-CoA from an odd-chain fatty acid — both quantitatively negligible' },
    { clue: 'Enzyme the liver lacks, which is why it cannot use the ketones it makes', meaning: 'SCOT, or thiophorase — the liver manufactures a fuel exclusively for other organs' },
    { clue: 'Ketone that the standard nitroprusside urine test does not detect', meaning: 'Beta-hydroxybutyrate, the dominant species precisely when the patient is sickest and NADH is highest' },
    { clue: 'Daily protein loss in early starvation compared with the ketoadapted state', meaning: 'About 75 g/day falling to about 20 g/day — the protein-sparing effect that turns weeks of survival into months' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The pathway chemistry is next door in [[ketone-body-metabolism]]; what belongs here is the **fuel economy**. One rule drives everything: **fat is a huge energy store and a negligible glucose store**, so a body running on fat still has a glucose-dependent brain to feed, and the only way to protect muscle is to give that brain a fuel it can make from fat. Ketosis is therefore an **adaptation, not a pathology** — a point the whole staged sequence in [[fed-fasting-starvation]] is built around, and the reason ketone levels alone never distinguish a healthy faster from a patient in crisis.' },
    { logic: 'Where it is examined', detail: 'Reliably three things. **Can fat make glucose** — the answer is no, with glycerol and odd-chain propionyl-CoA as the only exceptions, and the examiner will usually hide it inside a starvation stem about [[gluconeogenesis-cori-alanine]]. **Hypoglycaemia with low ketones**, which is always a beta-oxidation or carnitine defect and never ordinary fasting. And **the ketosis versus ketoacidosis discriminator**, where the required answer is insulin presence and unrestrained lipolysis rather than any threshold ketone value. The mobilisation half of the story, including which lipase is doing the releasing, is in [[ghp-lipid-transport-storage]].' },
  ],

  mnemonics: [
    { hook: 'Fat burns in the flame of carbohydrate', expansion: ['Acetyl-CoA needs oxaloacetate to enter the TCA cycle', 'Gluconeogenesis drains oxaloacetate whenever glucose is scarce', 'The acetyl-CoA that cannot enter is condensed into ketone bodies instead', 'Give carbohydrate and ketogenesis stops — which is why glucose, not bicarbonate, is the answer in starvation ketosis'] },
    { hook: 'Fasting ketosis has a brake; ketoacidosis has none', expansion: ['Fasting: insulin low but present, lipolysis restrained, ketones plateau near 7–8 mmol/L, pH normal', 'DKA: insulin absent, lipolysis unrestrained, ketones past 20 mmol/L, high anion gap acidosis', 'Ketones themselves inhibit the adipocyte — that is the feedback loop DKA has lost', 'The discriminator is insulin and the anion gap, never the presence of ketones'] },
  ],

  traps: [
    {
      questionCategory: 'Whether fat can be converted into glucose',
      wrongInstinct: 'A large fat store can maintain blood glucose indefinitely through gluconeogenesis from fatty acids',
      rightAnswer: 'Fatty acid carbon cannot become glucose in net terms; only the glycerol backbone and odd-chain propionyl-CoA contribute, and both are trivial',
      why: 'Pyruvate dehydrogenase is irreversible and the two acetyl carbons leave as CO2 — which is exactly why the brain must be given ketones rather than simply burning fat.',
    },
    {
      questionCategory: 'What makes ketoacidosis dangerous',
      wrongInstinct: 'The ketone concentration itself is the toxic element, so the aim is to clear ketones from the blood',
      rightAnswer: 'The absence of insulin, and therefore of any brake on lipolysis, is what allows production to outrun buffering',
      why: 'A fasting adult sitting at 7 mmol/L is perfectly well; the diabetic is ill because unopposed lipolysis drives ketogenesis past every buffer, with an osmotic diuresis stripping volume at the same time.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A subject has fasted for five days. Isotopically labelled palmitate is infused and label is subsequently recovered in plasma glucose. The most likely route by which labelled carbon reached glucose is:',
      options: [
        { id: 'a', text: 'Reversal of pyruvate dehydrogenase, returning acetyl-CoA to pyruvate' },
        { id: 'b', text: 'Condensation of two acetyl-CoA molecules to form oxaloacetate directly' },
        { id: 'c', text: 'The glycerol backbone released with the fatty acid, entering as dihydroxyacetone phosphate' },
        { id: 'd', text: 'Net conversion of acetyl-CoA to oxaloacetate within the TCA cycle' },
      ],
      answerId: 'c',
      explanation: 'Pyruvate dehydrogenase is physiologically irreversible, and although acetyl-CoA enters the TCA cycle, two carbons leave as CO2 before oxaloacetate is regenerated, so there is no net gain of gluconeogenic carbon. The glucose label in a fasting subject comes from the glycerol released when triglyceride is hydrolysed, which the liver phosphorylates and feeds in at dihydroxyacetone phosphate. Odd-chain fatty acids would also contribute through propionyl-CoA, but palmitate is even-chain.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An 18-month-old presents with vomiting and lethargy after a viral illness with poor oral intake. Glucose is 1.9 mmol/L; urine and blood ketones are negative. Liver is mildly enlarged and ammonia is modestly raised. The most likely category of disorder is:',
      options: [
        { id: 'a', text: 'Hyperinsulinism from a pancreatic beta-cell lesion' },
        { id: 'b', text: 'A defect in mitochondrial fatty acid oxidation or carnitine transport' },
        { id: 'c', text: 'Glycogen storage disease affecting hepatic glycogen phosphorylase' },
        { id: 'd', text: 'Adrenal insufficiency with deficient cortisol counter-regulation' },
      ],
      answerId: 'b',
      explanation: 'Fasting hypoglycaemia should be accompanied by brisk ketosis, because falling insulin mobilises fat and the liver converts the surplus acetyl-CoA into ketone bodies. Hypoglycaemia with absent ketones means fat is being released but cannot be oxidised, which localises the lesion to the carnitine shuttle or to beta-oxidation itself, as in MCAD deficiency. Hyperinsulinism is also hypoketotic but suppresses lipolysis rather than oxidation and presents with a high insulin and low free fatty acids; glycogen storage disease and adrenal insufficiency both permit ketosis.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Urinary nitrogen excretion in a fasting adult falls from about 12 g/day in the first week to about 3–4 g/day by the fourth week. The principal reason is that:',
      options: [
        { id: 'a', text: 'Renal tubular reabsorption of urea increases as glomerular filtration falls' },
        { id: 'b', text: 'Hepatic urea cycle enzymes are downregulated so nitrogen is retained in the amino-acid pool' },
        { id: 'c', text: 'The brain has adapted to derive most of its energy from ketone bodies, cutting the demand for gluconeogenesis from amino acids' },
        { id: 'd', text: 'Muscle protein has been so depleted that there is little substrate left to catabolise' },
      ],
      answerId: 'c',
      explanation: 'Early starvation obliges the liver to make around 120 g of glucose a day for the brain, and the carbon comes largely from muscle amino acids, so nitrogen excretion is high. As blood ketones rise and monocarboxylate transporters at the blood-brain barrier are upregulated, the brain shifts about two-thirds of its fuel to ketones and the glucose requirement falls, so protein catabolism drops from roughly 75 to 20 g/day. Nitrogen excretion falls because demand falls, not because the machinery or the substrate has failed — and it rises again pre-terminally once fat is exhausted.',
      tests: 'mechanism',
    },
  ],
};

export default ghpFatAsFuelKetosis;
