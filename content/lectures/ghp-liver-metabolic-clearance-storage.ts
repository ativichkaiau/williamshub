import type { Lecture } from '../../lib/types';

export const ghpLiverMetabolicClearanceStorage: Lecture = {
  id: 'ghp-liver-metabolic-clearance-storage',
  title: 'Hepatic Metabolic, Storage & Clearance Functions',
  system: 'gi',
  source: 'Ch 70 — The Liver as an Organ',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 70 Hepatic Metabolic & Clearance Functions' },
    { kind: 'mechanism', label: 'Glucose buffer · synthetic reserve · first-pass clearance' },
    { kind: 'exam', label: 'Factor VII first, albumin last, factor VIII spared' },
  ],

  highYield: [
    '**The glucose buffer function is the reason a meal does not behave like an intravenous infusion.** Portal blood after a carbohydrate meal carries a glucose load that would be wildly hyperglycaemic if delivered whole to the systemic circulation. The liver intercepts it because its uptake machinery is built to be **concentration-driven rather than hormone-gated**: **GLUT2 is a high-capacity, low-affinity transporter** and **glucokinase has a high Km and is not inhibited by its own product**, so hepatic uptake simply **rises with portal glucose and does not saturate** over the physiological range. Roughly **two thirds of an absorbed glucose load is taken up on first pass**, stored as glycogen, and released again between meals. Remove the buffer and glycaemia becomes **erratic in both directions** — the classic picture in advanced liver disease is **exaggerated post-prandial hyperglycaemia together with fasting hypoglycaemia**, because the liver can neither absorb the peak nor defend the trough.',
    '**Synthetic failure is read through half-lives, and that single idea generates most of the exam questions.** The liver exports **albumin at about 10 to 15 g per day** and essentially **all the clotting factors except one**. Because the plasma level of a protein falls at a rate set by its half-life, **factor VII, with a half-life of only about 4 to 6 hours, disappears first — so the PT and INR rise before anything else**. **Albumin, with a half-life near 20 days, cannot fall quickly**, which makes a **low albumin a marker of chronic disease and a useless marker of acute failure**. Then the exception that does the diagnostic work: **factor VIII is synthesised outside the hepatocyte, largely in sinusoidal and vascular endothelium, so it is preserved or even raised in liver failure**. Hence the discriminator: **low factor V with normal or high factor VIII points to the liver; both low points to consumption, as in DIC**.',
    '**The liver is the body bank, and each deposit has a characteristic maturity.** **Glycogen** is the short-term account — around **100 g, some 5 to 8% of liver weight**, enough to defend glucose for roughly a day of fasting before gluconeogenesis must take over. **Vitamin A is the largest store in the body**, held in the **stellate cells of the space of Disse** in quantities sufficient for **months to years**, which is why deficiency is late and why hypervitaminosis A is a hepatic problem. **Vitamin B12 stores last years**, so dietary B12 deficiency takes years to appear while malabsorptive causes are slower still than intuition suggests. **Vitamin D is held for months**, and **iron is buffered as ferritin** on an **apoferritin** scaffold that takes iron up when plasma levels rise and releases it when they fall. The theme is uniform: **the liver converts an intermittent supply into a continuous one**.',
    '**Clearance is a first-pass function, so it fails either when hepatocytes are lost or when blood simply goes around them.** Everything absorbed from the gut, and everything recirculating in portal blood, is presented to the hepatocyte before it reaches the systemic circulation. The liver **degrades hormones** — including **oestrogens, androstenedione and aldosterone** — **metabolises drugs**, and **converts ammonia to urea**. When this fails, the signs are those of substances that should have been removed: **impaired oestrogen clearance with peripheral aromatisation of adrenal androgens produces gynaecomastia, spider naevi, palmar erythema and testicular atrophy**; impaired aldosterone clearance compounds sodium retention; and **ammonia that escapes the urea cycle drives encephalopathy**. Note that **portosystemic shunting produces the same failures with intact hepatocytes**, and that **loss of first pass raises the effective bioavailability of orally administered drugs** — a dosing problem, not only a diagnostic one.',
    '**Functional reserve is the unifying idea, and confusing injury with function is the classic error.** The liver carries enormous spare capacity: a healthy donor can lose the **majority of hepatic mass** and still maintain normal synthetic function, and synthetic markers do not move until a **large fraction of functioning parenchyma** is gone. From this follows the most useful distinction in hepatology. **Transaminases report INJURY** — they are intracellular enzymes leaking from damaged hepatocytes, and their height measures how many cells are being hurt right now, not how well the organ works. **Albumin, INR and bilirubin report FUNCTION.** The two can move in opposite directions, and the exam relies on it: **an ALT of several thousand with a normal INR is dramatic injury without failure**, while **normal transaminases with a rising INR in established cirrhosis is failure without ongoing injury** — there are simply few hepatocytes left to leak.',
    '**Regeneration is not lost in cirrhosis; it is misdirected, and that distinction explains the complications.** Hepatocytes normally sit quiescent but re-enter the cell cycle readily, restoring lost mass over weeks after resection or acute injury and stopping when the original mass is approached. **Cirrhosis is therefore not a failure to regenerate** — it is **regeneration constrained by fibrosis into nodules that lack the normal portal-triad-to-central-vein architecture**. Two consequences follow directly. **Distorted vascular relationships raise sinusoidal resistance and shunt blood past hepatocytes**, giving portal hypertension and clearance failure together. And **sustained regenerative proliferation on a background of injury multiplies the opportunity for mutation**, which is why **cirrhosis of any cause is the dominant risk state for hepatocellular carcinoma**. Regeneration with the wrong blueprint is worse than a slower repair.',
  ],

  mechanism: {
    title: 'Portal nutrient load → hepatic buffering and synthesis → storage → first-pass clearance → systemic delivery',
    steps: [
      { id: 's1', label: 'GLUT2 and glucokinase take up portal glucose in proportion to its concentration, without saturating', emphasis: 'key', detail: 'High Km, no product inhibition — uptake tracks the load rather than waiting on hormonal permission.' },
      { id: 's2', label: 'Glucose is banked as glycogen and released between meals — the glucose buffer function', emphasis: 'key' },
      { id: 's3', label: 'Amino-acid nitrogen is stripped and ammonia converted to urea for renal excretion', emphasis: 'key' },
      { id: 's4', label: 'Albumin and the clotting factors are exported — factor VIII is the exception, made elsewhere', emphasis: 'key', detail: 'Factor VII falls first on half-life; albumin falls last; factor VIII is spared.' },
      { id: 's5', label: 'Vitamin A, B12 and D, iron as ferritin, and glycogen are held against future shortage' },
      { id: 's6', label: 'Hormones, drugs and toxins are cleared on first pass — until parenchyma is lost or blood is shunted past it', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Gynaecomastia, spider naevi, palmar erythema and testicular atrophy in chronic liver disease', mechanism: 'Failed hepatic degradation of oestrogens plus peripheral aromatisation of adrenal androstenedione', significance: 'key' },
    { sign: 'INR rising within hours of acute liver injury while albumin remains normal', mechanism: 'Factor VII has a half-life of hours; albumin has a half-life near 20 days and cannot fall that fast', significance: 'key' },
    { sign: 'Low factor V with a normal or raised factor VIII', mechanism: 'Factor VIII is made outside the hepatocyte, so it is spared in liver failure but consumed in DIC', significance: 'key' },
    { sign: 'Fasting hypoglycaemia alongside exaggerated post-prandial hyperglycaemia', mechanism: 'Loss of the glucose buffer removes both post-prandial uptake and inter-prandial glycogen release', significance: 'key' },
    { sign: 'Normal or only mildly raised transaminases in established cirrhosis with a rising bilirubin and INR', mechanism: 'Few hepatocytes remain to leak enzyme, while the surviving mass can no longer sustain synthetic function', significance: 'supportive' },
    { sign: 'Exaggerated response to an oral dose of a drug that normally undergoes heavy first-pass metabolism', mechanism: 'Portosystemic shunting and hepatocyte loss raise effective bioavailability', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'First synthetic marker to become abnormal in acute liver injury', meaning: 'PT and INR, driven by factor VII and its half-life of about 4 to 6 hours' },
    { clue: 'Reason albumin is useless for judging acute hepatic failure', meaning: 'A half-life near 20 days — it marks chronic disease, and a normal value excludes nothing acutely' },
    { clue: 'Clotting factor preserved or raised in liver failure', meaning: 'Factor VIII, synthesised in vascular and sinusoidal endothelium rather than in hepatocytes' },
    { clue: 'Vitamin whose hepatic store is the largest in the body', meaning: 'Vitamin A, held in stellate cells of the space of Disse, sufficient for months to years' },
    { clue: 'Laboratory values that report injury rather than function', meaning: 'ALT and AST leak from damaged cells; albumin, INR and bilirubin are what report function' },
    { clue: 'Fate of ammonia arriving in portal blood, and how it is bypassed', meaning: 'Conversion to urea for renal excretion — defeated by hepatocyte loss or by portosystemic shunting' },
  ],

  treatment: [
    { logic: 'Separate the injury question from the function question before interpreting any liver panel', detail: 'Ask two questions in order, never one. **How badly are hepatocytes being damaged right now?** — that is the transaminases, and their height correlates with the rate of cell injury, not with organ performance. **How much functioning liver is actually left?** — that is **INR, albumin and bilirubin**, and only these track reserve. A patient can have florid injury with intact function, or exhausted function with quiet enzymes, and the management differs completely. The full interpretive framework, including the cholestatic and mixed patterns, is in [[liver-function-tests-interpretation]], and the anatomical reason blood can bypass hepatocytes altogether is in [[ghp-liver-functional-anatomy-blood-flow]].' },
    { logic: 'Three discriminators worth memorising cold', detail: '**One — seven falls first, albumin falls last.** Half-life dictates the order in which synthetic markers move, so INR is the acute marker and albumin the chronic one. **Two — factor VIII is not made in the liver**, so a low factor V with a preserved factor VIII separates hepatic failure from consumptive coagulopathy. **Three — reserve is large, so synthetic failure means a lot of liver is already gone**; by the time albumin and INR move, the architectural damage described in [[cirrhosis-fatty-liver-portal-hypertension]] is usually established, and the same regenerative drive underlies the malignant risk covered in [[hepatocellular-carcinoma-liver-tumors]].' },
  ],

  mnemonics: [
    { hook: 'Seven falls first, albumin falls last', expansion: ['Factor VII half-life about 4 to 6 hours, so PT and INR rise earliest in acute failure', 'Albumin half-life about 20 days, so a low albumin means the problem has been there for weeks'] },
    { hook: 'Eight is not made here', expansion: ['Factor VIII comes from vascular and sinusoidal endothelium, not hepatocytes, so liver failure spares it', 'Low factor V with normal factor VIII means liver; both low means consumption, as in DIC'] },
  ],

  traps: [
    {
      questionCategory: 'What a very high transaminase level tells you about liver function',
      wrongInstinct: 'An ALT in the thousands means the liver is failing, and the higher the number the worse the function',
      rightAnswer: 'Transaminases measure ongoing hepatocyte injury; function is measured by INR, albumin and bilirubin, which may be entirely normal',
      why: 'Enzymes report how many cells are being hurt; synthetic markers report how much working liver is left, and the two dissociate.',
    },
    {
      questionCategory: 'Distinguishing the coagulopathy of liver failure from disseminated intravascular coagulation',
      wrongInstinct: 'Both deplete clotting factors, so the factor assays will look broadly the same and cannot separate them',
      rightAnswer: 'Factor VIII is normal or raised in liver failure because it is made outside the hepatocyte, whereas DIC consumes it along with factor V',
      why: 'Synthetic failure can only lower what the liver actually makes, so the one factor it does not make is the internal control.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously well patient presents 18 hours after a paracetamol overdose. ALT is 6200 U/L, INR is 2.8, albumin is 41 g/L and bilirubin is 32 micromol/L. Which combination of these results best reflects the amount of functioning liver remaining?',
      options: [
        { id: 'a', text: 'The ALT, since it is the most markedly abnormal value' },
        { id: 'b', text: 'The INR and bilirubin, since synthetic and excretory capacity track functional reserve' },
        { id: 'c', text: 'The albumin, since it is the definitive marker of hepatic synthetic function' },
        { id: 'd', text: 'The ALT to albumin ratio, which corrects enzyme leak for synthetic capacity' },
      ],
      answerId: 'b',
      explanation: 'Transaminases are intracellular enzymes released by injured hepatocytes, so an ALT of 6200 quantifies the rate of ongoing injury rather than organ performance. Functional reserve is read from synthetic and excretory markers: the INR of 2.8 reflects loss of clotting factor synthesis, led by factor VII with its half-life of only a few hours, and the bilirubin reflects excretory capacity. The normal albumin is entirely expected and reassures about nothing here, because its half-life of roughly 20 days means it cannot fall meaningfully within 18 hours; it is a marker of chronic rather than acute failure.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A patient with a prolonged PT, low fibrinogen and thrombocytopenia is being assessed to decide whether the coagulopathy is due to hepatic synthetic failure or to disseminated intravascular coagulation. Which single assay best separates the two?',
      options: [
        { id: 'a', text: 'Factor VIII, which is preserved or raised in liver failure but consumed in DIC' },
        { id: 'b', text: 'Factor VII, which is the first factor to fall in both conditions' },
        { id: 'c', text: 'Factor V, which is made only by hepatocytes and falls in liver failure alone' },
        { id: 'd', text: 'Fibrinogen, which is low only in DIC' },
      ],
      answerId: 'a',
      explanation: 'Factor VIII is synthesised largely in vascular and sinusoidal endothelium rather than in hepatocytes, so it is the one coagulation factor that hepatic synthetic failure cannot lower, and it is often raised as an acute-phase reactant. DIC, being a consumptive process, depletes it along with everything else. Factor VII falls early in liver failure but is also consumed in DIC, so it does not discriminate; factor V is hepatically synthesised but is likewise consumed in DIC, which is exactly why it is interpreted alongside factor VIII rather than alone; and fibrinogen falls in both advanced liver disease and DIC.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A patient with advanced cirrhosis has capillary glucose readings that swing from 3.0 mmol/L after an overnight fast to 14 mmol/L two hours after meals, despite no diabetes history and no glucose-lowering therapy. The mechanism is:',
      options: [
        { id: 'a', text: 'Pancreatic beta-cell destruction with absolute insulin deficiency' },
        { id: 'b', text: 'Loss of the hepatic glucose buffer, so post-prandial load is not absorbed and inter-prandial output is not maintained' },
        { id: 'c', text: 'Accelerated intestinal glucose absorption caused by portal hypertension' },
        { id: 'd', text: 'Renal glycosuria fluctuating with hepatic blood flow' },
      ],
      answerId: 'b',
      explanation: 'Hepatic glucose uptake is driven by portal glucose concentration through GLUT2 and glucokinase, which has a high Km and is not inhibited by its product, so a healthy liver removes roughly two thirds of an absorbed load on first pass and blunts the post-prandial peak. Between meals the same organ releases glucose from glycogen and by gluconeogenesis to defend the trough. Cirrhosis removes both arms, together with portosystemic shunting that carries absorbed glucose straight past the hepatocytes, so glycaemia becomes erratic in both directions. The pattern is buffering failure, not beta-cell failure, and the swings occur in both directions rather than in one.',
      tests: 'mechanism',
    },
  ],
};

export default ghpLiverMetabolicClearanceStorage;
