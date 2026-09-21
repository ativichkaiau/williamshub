import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCirrhosisPortalHypertension: Lecture = {
  id: 'rbp-cirrhosis-portal-hypertension',
  title: 'Cirrhosis, Portal Hypertension & Liver Failure',
  system: 'gi',
  source: 'Ch 15 — Liver, Gallbladder, and Biliary Tract',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 15 Liver, Gallbladder, and Biliary Tract' },
    { kind: 'mechanism', label: 'Stellate cell fibrogenesis and architectural collapse' },
    { kind: 'disease', label: 'Alcoholic and metabolic fatty liver disease' },
  ],

  highYield: [
    '**Cirrhosis is a three-part definition and all three parts must be present: bridging FIBROSIS, regenerative NODULES, and diffuse disruption of ARCHITECTURE across the whole organ.** Drop any one and the diagnosis fails, which is not pedantry but the most testable point in the chapter — and two real diseases prove it. **Congenital hepatic fibrosis** produces broad bland fibrous septa containing abnormal bile duct profiles, yet **no regenerative nodules**, with hepatocyte plates and synthetic function intact: fibrosis without cirrhosis. **Nodular regenerative hyperplasia** produces diffuse small nodules with **almost no fibrosis at all**. Both cause portal hypertension, and neither causes hepatocellular failure. The lesson is that the **architectural disruption** is what generates portal hypertension, while the **loss of functioning hepatocyte mass** is what generates failure — two separate consequences with two separate morphological substrates. Note also that cirrhosis is **diffuse by definition**: a focally scarred liver, however ugly, is not cirrhotic. The old size classification — **micronodular under 3 mm** (alcohol, haemochromatosis, biliary obstruction, chronic venous outflow block) versus **macronodular over 3 mm** (chronic viral hepatitis, alpha-1-antitrypsin deficiency, Wilson disease) — is a weak guide to cause, partly because a micronodular liver converts to a macronodular one as regeneration proceeds after the insult is removed. Regression is real but partial: septa can thin and remodel once the driver stops, which is why the word irreversible is no longer used unqualified.',
    '**The fibrogenic effector is the hepatic stellate cell, and its transformation explains why a cirrhotic liver fails at exchange before it fails at synthesis.** In the quiescent state the stellate cell sits in the **space of Disse** and is a **vitamin A store**, holding roughly **80% of the total body retinoid** as retinyl esters in cytoplasmic lipid droplets. Chronic injury activates it, chiefly through **TGF-beta** released by **Kupffer cells** — the dominant fibrogenic cytokine, driving transcription of **collagen types I and III** — with **PDGF** acting as the dominant mitogen and chemoattractant, alongside reactive oxygen species and a disrupted matrix. The activated cell **transdifferentiates into a myofibroblast**: it dumps its lipid droplets, acquires **alpha-smooth muscle actin**, and becomes both **proliferative and contractile**. Two consequences follow. First, **dense collagen is deposited in the space of Disse**, producing **capillarisation of the sinusoid** — the endothelial **fenestrae close**, a **subendothelial basement membrane appears**, and **hepatocyte microvilli are lost**. The sinusoid stops being a porous exchange surface and becomes an ordinary capillary, so solute exchange fails early, before hepatocyte number becomes limiting. Second, the contractile myofibroblast **wraps the sinusoid and squeezes**, contributing a **DYNAMIC** component to intrahepatic resistance on top of the fixed scaffolding — roughly **a quarter to a third** of the total, and it is the part that vasoactive drugs can move. Normal sinusoidal architecture and the resident cell populations are described in [[ghp-liver-metabolic-clearance-storage]].',
    '**Portal hypertension is a measurable number with a threshold for every complication, and the measurement itself tells you where the block is.** The **hepatic venous pressure gradient** — wedged minus free hepatic venous pressure — is normally **1 to 5 mmHg**. **Above 5** is portal hypertension; **10 or more** is clinically significant portal hypertension, the point at which varices form and decompensation becomes likely; **12 or more** is the threshold for **variceal bleeding and ascites**. The crucial subtlety is that this gradient samples only the **sinusoidal and post-sinusoidal** resistance. In **pre-sinusoidal** disease the gradient is **normal or near-normal despite large varices**, which makes a normal HVPG in a patient with obvious portal hypertension a positive finding rather than a negative one. Classify causes by position. **Pre-hepatic**: portal vein thrombosis, and **splenic vein thrombosis** from pancreatitis or pancreatic carcinoma, which produces **isolated gastric varices with a normal liver** — the one surgically curable portal hypertension, since splenectomy fixes it. **Intrahepatic pre-sinusoidal**: **schistosomiasis**, the commonest cause of pre-sinusoidal portal hypertension worldwide, with its pipe-stem periportal fibrosis; also congenital hepatic fibrosis, early primary biliary cholangitis and sarcoidosis. **Intrahepatic sinusoidal**: **cirrhosis**, which is the commonest cause overall. **Intrahepatic post-sinusoidal**: **sinusoidal obstruction syndrome**, obliteration of terminal hepatic venules after haematopoietic stem cell transplantation or pyrrolizidine alkaloids. **Post-hepatic**: **Budd-Chiari syndrome**, constrictive pericarditis and severe right heart failure, all of which enlarge and tenderise the liver, which pre-hepatic causes do not.',
    '**Resistance rises inside the liver while flow rises outside it, and the paradox is nitric oxide: too little where it is needed and too much where it is not.** Inside the cirrhotic liver, endothelial **nitric oxide production falls**, so the sinusoid cannot relax; outside it, **eNOS is upregulated in the splanchnic arterioles**, so the mesenteric bed vasodilates and pours **more** blood into an already obstructed portal system. The result is the **hyperdynamic circulation** of cirrhosis: high cardiac output, low systemic vascular resistance, warm peripheries, a wide pulse pressure and a low blood pressure. Every consequence of portal hypertension then follows from **portosystemic anastomotic anatomy**, so derive them rather than listing them. **Left gastric (coronary) vein to oesophageal veins to azygos**: submucosal **oesophageal varices**, which bleed catastrophically because the vessels are thin-walled and sit immediately beneath mucosa with nothing to tamponade them. **Superior rectal vein to middle and inferior rectal veins**: **anorectal varices**, which are NOT haemorrhoids — haemorrhoids are dilated normal anal cushions and are no commoner in cirrhosis. **Paraumbilical veins in the falciform ligament to superficial epigastric veins**: **caput medusae**, in which flow radiates **away from** the umbilicus, the opposite of inferior vena caval obstruction where flow runs upward. **Retroperitoneal and splenorenal collaterals** complete the set. **Splenomegaly** follows from congestion, and the resulting **hypersplenism** drops the **platelet count first**, both from sequestration and from reduced hepatic thrombopoietin — which is why thrombocytopenia is often the earliest laboratory clue to a liver nobody has yet examined.',
    '**Ascites needs a pressure AND a volume mechanism, and the volume mechanism is a kidney responding correctly to a circulation that is lying to it.** Sinusoidal hypertension plus hypoalbuminaemia raises the filtration gradient across a sinusoid that has been capillarised, and hepatic lymph production rises from a normal **800 to 1000 mL per day to as much as 20 litres**, far beyond thoracic duct capacity, so lymph weeps from the liver capsule. That alone would be self-limiting. What makes ascites relentless is that **splanchnic vasodilation drops the effective arterial blood volume**, the kidney reads underfilling, and **renin-angiotensin-aldosterone, sympathetic outflow and ADH** all switch on, retaining sodium and water that go straight into the peritoneum. The diagnostic tool is the **serum-ascites albumin gradient**: **1.1 g/dL or more means portal hypertension** with about 97% accuracy, while **below 1.1** means peritoneal disease such as malignancy, tuberculosis or pancreatitis. A **low ascitic protein, under about 1.5 g/dL**, means low opsonic capacity and predicts **spontaneous bacterial peritonitis**, which is defined by an ascitic **neutrophil count of 250 per cubic millimetre or more** regardless of culture. The same circulatory lie eventually produces **hepatorenal syndrome**, in which intense renal vasoconstriction causes progressive azotaemia while the kidneys remain **structurally normal** — a bland urinary sediment, urinary sodium typically under **10 mmol/L**, and full recovery of the organ if it is transplanted into a healthy recipient. Bedside management of these complications is covered in [[cirrhosis-fatty-liver-portal-hypertension]].',
    '**Alcohol injures the liver in three stages that are morphologically distinct, and metabolic fatty liver disease copies all three almost exactly — so the histology names the pattern while the history names the cause.** **Stage one, steatosis**: macrovesicular fat, first in zone 3, from a rising **NADH to NAD ratio** during ethanol oxidation that blocks fatty acid oxidation and drives lipogenesis. The liver enlarges, turns yellow and greasy, and **reverses within weeks of abstinence**. **Stage two, alcoholic hepatitis**: hepatocyte **ballooning**, **Mallory-Denk bodies** — ropy eosinophilic perinuclear tangles of ubiquitinated **keratin 8 and 18** intermediate filaments — and, uniquely among the hepatitides, a **NEUTROPHIL** infiltrate, with **chicken-wire perisinusoidal fibrosis** beginning around zone 3. Any hepatitis full of neutrophils is alcoholic or metabolic until proven otherwise, because viral and autoimmune hepatitis recruit lymphocytes. **Stage three, cirrhosis**: classically **micronodular**, the Laennec liver, converting toward macronodular with sustained abstinence. Two laboratory rules separate alcohol from everything else. **AST exceeds ALT by a ratio above 2**, because pyridoxal-5-phosphate deficiency limits ALT synthesis more than AST and because damaged mitochondria release the mitochondrial AST isoform; and **AST rarely exceeds 500 U/L** in alcoholic hepatitis, so a transaminase of 2000 is a virus, a toxin or ischaemia, never alcohol alone. **Metabolic dysfunction-associated fatty liver disease** reproduces steatosis, ballooning, Mallory-Denk bodies and chicken-wire fibrosis on a substrate of insulin resistance, obesity and type 2 diabetes, but typically with **ALT above AST until fibrosis is advanced**, when the ratio flips. Mallory-Denk bodies themselves are **not specific**: they also appear in Wilson disease, chronic cholestasis and after amiodarone. The cholestatic and neoplastic endpoints of chronic liver disease continue in [[rbp-cholestasis-biliary-liver-tumours]], and the injury patterns that precede all of this are in [[rbp-hepatic-injury-hepatitis]].',
  ],

  mechanism: {
    title: 'Chronic injury to a decompensated cirrhotic circulation',
    steps: [
      { id: 's1', label: 'Repeated hepatocyte injury activates Kupffer cells, which release TGF-beta and PDGF into the space of Disse', detail: 'TGF-beta drives collagen I and III transcription; PDGF drives proliferation and chemotaxis.', emphasis: 'normal' },
      { id: 's2', label: 'The quiescent vitamin A storing stellate cell transdifferentiates into a proliferative, contractile alpha-smooth muscle actin positive myofibroblast', detail: 'It discards the retinyl ester droplets that held about 80% of total body vitamin A.', emphasis: 'key' },
      { id: 's3', label: 'Collagen fills the space of Disse: fenestrae close, a subendothelial basement membrane forms and hepatocyte microvilli disappear — the sinusoid is capillarised', detail: 'Exchange fails before hepatocyte number becomes limiting, which is why function declines out of proportion to cell loss.', emphasis: 'key' },
      { id: 's4', label: 'Septa bridge vascular landmarks and surviving hepatocytes regenerate as nodules, so fibrosis, nodules and lost architecture coexist — cirrhosis', emphasis: 'key' },
      { id: 's5', label: 'Fixed scaffolding plus myofibroblast contraction raises intrahepatic resistance, while splanchnic eNOS upregulation raises portal inflow', detail: 'Too little nitric oxide inside the liver, too much outside it: resistance and flow rise together.', emphasis: 'danger' },
      { id: 's6', label: 'Portosystemic collaterals open and the arterial circulation underfills, giving varices, splenomegaly, ascites and encephalopathy', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dilated veins radiating outward from the umbilicus with blood flowing away from it, accompanied by a continuous venous hum over the epigastrium', mechanism: 'Recanalised paraumbilical veins in the falciform ligament discharging into superficial epigastric veins. The direction of flow is the discriminator: in inferior vena caval obstruction the collaterals run upward toward the chest, whereas portal hypertension drives flow radially away from the umbilicus', significance: 'key' },
    { sign: 'A platelet count of 68 with normal white cells and haemoglobin, in a patient with a palpable spleen and no bleeding history', mechanism: 'Hypersplenism from congestive splenomegaly sequesters platelets, and a cirrhotic liver makes less thrombopoietin. Platelets fall before the other lineages, so isolated thrombocytopenia with splenomegaly is often the first laboratory sign of portal hypertension', significance: 'key' },
    { sign: 'More than five spider naevi over the upper trunk with palmar erythema, gynaecomastia and small soft testes in a man', mechanism: 'Hyperoestrogenism from failed hepatic oestrogen catabolism and increased peripheral aromatisation of androstenedione; the number of spider naevi correlates with the severity of liver disease and with variceal risk', significance: 'key' },
    { sign: 'Coarse irregular flapping of the outstretched dorsiflexed hands that disappears when the arms are relaxed', mechanism: 'Asterixis is a negative myoclonus — a transient loss of postural tone, not a tremor. Ammonia bypassing the liver through portosystemic shunts is converted to glutamine in astrocytes, which swell and disturb the brainstem and cortical circuits that maintain tone', significance: 'key' },
    { sign: 'Tender hepatomegaly with fever, neutrophil leukocytosis and jaundice in a man drinking heavily for three weeks, with an AST of 210 U/L', mechanism: 'Alcoholic hepatitis is the one hepatitis with a neutrophil infiltrate, so it mimics sepsis or cholangitis clinically. The modest AST is diagnostic in itself: alcoholic hepatitis rarely exceeds 500 U/L, so a higher value points away from alcohol', significance: 'key' },
    { sign: 'A tense distended abdomen with an everted umbilicus, shifting dullness and bulging flanks, and bilateral pitting oedema to the thighs', mechanism: 'Sinusoidal hypertension plus hypoalbuminaemia drives hepatic lymph production toward 20 litres a day, while splanchnic vasodilation triggers renal sodium retention that continually refills the compartment. Oedema accompanies it because the hypoalbuminaemia is systemic', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Trichrome stain showing broad collagen septa completely encircling nodules of regenerating hepatocytes, throughout every part of the specimen', meaning: 'Cirrhosis, which requires all three components together: bridging fibrosis, regenerative nodules and diffuse architectural disruption. A report of fibrosis alone, or nodules alone, is not cirrhosis' },
    { clue: 'Broad bland fibrous bands containing numerous irregular bile duct profiles, with hepatocyte plates intact and no regenerative nodules, in a child with varices and normal albumin', meaning: 'Congenital hepatic fibrosis. Pre-sinusoidal portal hypertension with preserved synthetic function, and the cleanest proof that fibrosis and cirrhosis are not synonyms' },
    { clue: 'Hepatic venous pressure gradient of 4 mmHg in a patient with large oesophageal varices and massive splenomegaly', meaning: 'A pre-sinusoidal block, most often schistosomiasis or portal vein thrombosis. The gradient only samples sinusoidal and post-sinusoidal resistance, so a normal value here is a positive finding that relocates the lesion upstream' },
    { clue: 'Serum-ascites albumin gradient 1.8 g/dL, ascitic total protein 0.9 g/dL, ascitic neutrophils 40 per cubic millimetre', meaning: 'Portal hypertensive ascites without infection. The gradient of 1.1 or more establishes portal hypertension at about 97% accuracy, and the low ascitic protein means poor opsonic capacity, marking this patient as high risk for spontaneous bacterial peritonitis, which is defined at 250 neutrophils or more' },
    { clue: 'INR 2.4, platelets 60, D-dimer raised — and factor VIII activity 190% of normal', meaning: 'Hepatic synthetic failure, not disseminated intravascular coagulation. Factor VIII is the one clotting factor made by endothelium rather than by hepatocytes, so liver failure spares it while a consumptive coagulopathy destroys it' },
    { clue: 'Ballooned hepatocytes containing ropy eosinophilic perinuclear inclusions, surrounded by neutrophils, with delicate collagen wrapping individual zone 3 sinusoids', meaning: 'Steatohepatitis: Mallory-Denk bodies of ubiquitinated keratin 8 and 18, a neutrophil infiltrate and chicken-wire perisinusoidal fibrosis. The picture is identical in alcoholic and metabolic disease, so the history and the AST to ALT ratio assign the cause, not the biopsy' },
  ],

  treatment: [
    {
      logic: 'Lower the gradient rather than chase the varix, and know which part of the resistance can still move',
      detail: 'Portal pressure has a **fixed** component, the collagen scaffolding and the regenerative nodules, and a **dynamic** component, the contraction of activated stellate myofibroblasts around the sinusoid, which is roughly **a quarter to a third** of the total. Only the dynamic part responds to drugs, which is why reducing the hepatic venous pressure gradient below **12 mmHg**, or by **20% from baseline**, abolishes variceal bleeding risk even though the liver remains cirrhotic. The flow side is equally addressable: splanchnic arteriolar vasodilation is what keeps feeding the portal system, so **non-selective** beta blockade works by unopposed alpha-mediated splanchnic vasoconstriction — a **cardioselective** agent cannot do this, and that is the entire reason the selectivity matters. Remember too that removing the driver removes part of the fixed component: septa thin and remodel after **abstinence**, after **viral suppression** or after **weight loss**, so advanced fibrosis is no longer treated as one-way. Detailed regimens and endoscopic strategy sit in the clinical layer.',
    },
    {
      logic: 'Derive every sign of hepatic failure from the specific function that has been lost',
      detail: 'Lost **synthesis** gives coagulopathy. Factors **II, VII, IX and X** fall, and because **factor VII has the shortest half-life at about 4 to 6 hours**, the **PT and INR move first** and are the most sensitive dynamic marker — while **albumin, with a half-life near 20 days**, reports chronic rather than acute failure. Note that haemostasis is **rebalanced**, not simply impaired: protein C, protein S and antithrombin fall alongside the procoagulants, so a raised INR does **not** mean the patient is auto-anticoagulated and does not predict bleeding. Lost **ammonia clearance** gives encephalopathy: ammonia reaches the brain through portosystemic shunts, astrocytes consume it with glutamate to make **glutamine**, and the osmotic load swells them into **Alzheimer type II astrocytes** with pale enlarged nuclei. Lost **bilirubin handling** gives jaundice. Lost **hormone catabolism** gives hyperoestrogenism — **spider naevi, palmar erythema, gynaecomastia, testicular atrophy**. Lost **albumin** gives oedema. Each sign is one deleted function, so the list never needs memorising.',
    },
  ],

  mnemonics: [
    {
      hook: 'Cirrhosis needs all three, and each third has its own consequence',
      expansion: [
        'Bridging FIBROSIS — the collagen laid down by activated stellate myofibroblasts',
        'Regenerative NODULES — surviving hepatocytes proliferating inside the septa',
        'Disrupted ARCHITECTURE, diffusely across the whole organ — and this is what creates portal hypertension',
        'Fibrosis without nodules is congenital hepatic fibrosis: varices with a normal albumin',
        'Nodules without fibrosis is nodular regenerative hyperplasia: varices again, still no failure',
        'Lost hepatocyte MASS is a separate axis, and that is what produces hepatic failure',
      ],
    },
    {
      hook: 'Follow the anastomosis and the sign names itself',
      expansion: [
        'Left gastric to azygos: oesophageal varices, thin-walled and submucosal, so they bleed hard',
        'Superior rectal to middle and inferior rectal: anorectal varices — and haemorrhoids are a different lesion',
        'Paraumbilical to superficial epigastric: caput medusae, flowing AWAY from the umbilicus',
        'Splenic vein congestion: splenomegaly, then hypersplenism, and the platelets fall first',
        'Splanchnic capillary bed plus low albumin: ascites, with a serum-ascites albumin gradient of 1.1 or more',
        'Gut to systemic circulation bypassing hepatocytes: ammonia reaches the brain, giving encephalopathy',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Calling a fibrotic liver cirrhotic',
      wrongInstinct: 'The biopsy reports marked bridging fibrosis, so the patient has cirrhosis',
      rightAnswer: 'Cirrhosis requires bridging fibrosis PLUS regenerative nodules PLUS diffuse architectural disruption; fibrosis alone is not cirrhosis',
      why: 'The three components map onto different consequences, so they cannot be merged: architectural disruption produces portal hypertension while loss of hepatocyte mass produces failure — which is why congenital hepatic fibrosis gives varices with a normal albumin, and why nodular regenerative hyperplasia gives varices with almost no collagen at all',
    },
    {
      questionCategory: 'A prolonged PT with thrombocytopenia in a jaundiced patient',
      wrongInstinct: 'Prolonged PT, low platelets and a raised D-dimer together mean disseminated intravascular coagulation',
      rightAnswer: 'Measure factor VIII: normal or high activity means hepatic synthetic failure, while low activity means disseminated intravascular coagulation',
      why: 'Factor VIII is the only coagulation factor not synthesised by the hepatocyte — endothelium makes it, and it behaves as an acute phase reactant — so hepatic failure spares or raises it while a consumptive coagulopathy consumes it, which makes one assay split two conditions that look identical on a standard screen',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 9-year-old presents with haematemesis from oesophageal varices and a large spleen. Albumin, bilirubin and INR are normal. Liver biopsy shows broad bland fibrous bands containing numerous abnormal bile duct profiles, with intact hepatocyte plates and no regenerative nodules. What is the correct interpretation?',
      options: [
        { id: 'a', text: 'Established micronodular cirrhosis with preserved synthetic function' },
        { id: 'b', text: 'Congenital hepatic fibrosis: fibrosis producing pre-sinusoidal portal hypertension without cirrhosis' },
        { id: 'c', text: 'Nodular regenerative hyperplasia' },
        { id: 'd', text: 'Budd-Chiari syndrome with centrilobular congestion' },
      ],
      answerId: 'b',
      explanation: 'Cirrhosis requires three features together: bridging fibrosis, regenerative nodules and diffuse architectural disruption. Here the nodules are absent and the hepatocyte plates are intact, so this is fibrosis without cirrhosis. The septa obstruct portal flow upstream of the sinusoid, giving pre-sinusoidal portal hypertension — varices and splenomegaly — while hepatocytes continue to synthesise normally, which is why albumin and INR are untouched. Nodular regenerative hyperplasia is the mirror image, nodules with almost no fibrosis, and Budd-Chiari produces centrilobular congestion and a tender enlarged liver.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient with alcohol-related cirrhosis has a hepatic venous pressure gradient of 16 mmHg. Which single change in the liver contributes the reversible portion of that gradient?',
      options: [
        { id: 'a', text: 'Collagen septa encircling regenerative nodules' },
        { id: 'b', text: 'Contraction of activated stellate myofibroblasts around the sinusoid' },
        { id: 'c', text: 'Loss of endothelial fenestrae during capillarisation of the sinusoid' },
        { id: 'd', text: 'Compression of central veins by regenerating hepatocyte nodules' },
      ],
      answerId: 'b',
      explanation: 'Intrahepatic resistance has a fixed structural component — septa, nodules and capillarised sinusoids — and a dynamic component supplied by the contractile, alpha-smooth muscle actin positive myofibroblast into which the stellate cell transdifferentiates. That dynamic part is roughly a quarter to a third of the total and is the only part a drug can relax acutely, which is why lowering the gradient below 12 mmHg abolishes variceal bleeding risk in a liver that remains structurally cirrhotic. Options a, c and d are all fixed architectural changes.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 46-year-old man has AST 240 U/L, ALT 95 U/L, GGT 520 U/L and MCV 104 fL. Biopsy shows ballooned hepatocytes with ropy eosinophilic perinuclear inclusions, a neutrophil infiltrate, and delicate collagen surrounding individual sinusoids in zone 3. Which feature most strongly supports alcohol as the cause rather than a viral hepatitis?',
      options: [
        { id: 'a', text: 'The presence of eosinophilic perinuclear inclusions, which are specific to alcohol' },
        { id: 'b', text: 'The neutrophil infiltrate together with an AST to ALT ratio above 2 and an AST below 500 U/L' },
        { id: 'c', text: 'The zone 3 distribution, which viral hepatitis never shows' },
        { id: 'd', text: 'The raised GGT, which is specific for alcohol consumption' },
      ],
      answerId: 'b',
      explanation: 'Viral and autoimmune hepatitis recruit lymphocytes, so a hepatitis dominated by neutrophils is alcoholic or metabolic. The biochemistry adds two committed rules: AST exceeds ALT by more than twofold because pyridoxal-5-phosphate deficiency limits ALT synthesis and damaged mitochondria release mitochondrial AST, and alcoholic hepatitis rarely pushes AST above 500 U/L, so a transaminase in the thousands points to a virus, a toxin or ischaemia. Mallory-Denk bodies are not specific, appearing also in Wilson disease, chronic cholestasis and amiodarone injury, and GGT rises with enzyme induction from many drugs, so neither alone settles the question.',
      tests: 'investigation',
    },
  ],
};

export default rbpCirrhosisPortalHypertension;
