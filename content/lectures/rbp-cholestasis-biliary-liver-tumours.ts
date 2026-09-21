import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpCholestasisBiliaryLiverTumours: Lecture = {
  id: 'rbp-cholestasis-biliary-liver-tumours',
  title: 'Cholestasis, Biliary Disease & Liver Tumours',
  system: 'gi',
  source: 'Ch 15 — Liver, Gallbladder, and Biliary Tract',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 15 Liver, Gallbladder, and Biliary Tract' },
    { kind: 'mechanism', label: 'Bile stasis, duct destruction and biliary fibrosis' },
    { kind: 'disease', label: 'Primary biliary cholangitis, sclerosing cholangitis and liver tumours' },
  ],

  highYield: [
    '**Cholestasis has one morphology and one laboratory signature whatever causes it, so the useful question is never what it looks like but where the block is.** Microscopically: **bile pigment inside hepatocytes and distending the canaliculi as bile plugs**; **feathery degeneration**, in which retained bile salts act as detergents on the plasma membrane and leave swollen, rarefied, reticulated hepatocytes (cholate stasis); **bile lakes and bile infarcts** where ruptured canaliculi spill into the parenchyma; and the **ductular reaction**, a crescent of proliferating cholangiocytes with neutrophils at the edge of the portal tract, which is the histological hallmark of **large duct obstruction**. Biochemically: **ALP and GGT rise out of proportion to the transaminases**, with **conjugated hyperbilirubinaemia**, dark urine, pale stools and pruritus. **GGT is the arbiter of where a raised ALP came from** — a high ALP with a normal GGT is bone, placenta or intestine, not liver. The single most useful bedside test follows from the fact that cholestasis blocks **fat-soluble vitamin absorption**: the coagulopathy of obstruction is **vitamin K responsive and corrects within 24 hours of parenteral vitamin K**, while the coagulopathy of hepatocellular failure does not, because there are no hepatocytes left to use the vitamin. One injection separates the two diagnoses. Bilirubin handling itself is worked through in [[bilirubin-metabolism-jaundice]].',
    '**Extrahepatic obstruction is mechanical and potentially relievable; intrahepatic cholestasis is secretory and is not, and the imaging tells them apart before any antibody does.** **Extrahepatic**: common duct stones, carcinoma of the pancreatic head, strictures, and the large-duct disease of primary sclerosing cholangitis. Ducts **dilate** on ultrasound, the biopsy shows a **ductular reaction with portal oedema**, and two complications follow — **ascending cholangitis** and, over months, **secondary biliary cirrhosis**. **Intrahepatic**: primary biliary cholangitis, drug reactions, sepsis-associated cholestasis, intrahepatic cholestasis of pregnancy, parenteral nutrition. Ducts are **not dilated**. Biliary fibrosis is architecturally distinctive and worth recognising: it starts at the **portal tract** and grows inward, producing **portal-to-portal septa** and irregular **jigsaw-shaped** nodules, whereas hepatitic cirrhosis bridges **portal tract to central vein**. The liver of long-standing obstruction is **dark green** and its parenchyma is stained with bile. **Ascending cholangitis** deserves a mechanism rather than a triad: obstruction raises intraductal pressure above roughly **20 cmH2O**, at which point bile and its enteric organisms are forced across into hepatic sinusoids — **cholangiovenous reflux** — which is why the patient is bacteraemic within hours and why antibiotics alone fail. **Decompression is the treatment; the pressure is the disease.**',
    '**Primary biliary cholangitis and primary sclerosing cholangitis differ on five axes, and DUCT SIZE is the axis that generates the other four.** **PBC**: about **90% female**, presenting at **40 to 60**, an autoimmune granulomatous destruction of **SMALL intrahepatic interlobular ducts**. The diagnostic lesion is the **florid duct lesion** — a single interlobular duct surrounded and invaded by a dense lymphoplasmacytic infiltrate with epithelioid granulomas. **Antimitochondrial antibody against the E2 subunit of the pyruvate dehydrogenase complex is positive in 90 to 95%**, and **IgM is raised**. Because the target ducts are below the resolution of any cholangiogram, **imaging is normal**; the disease progresses by **ductopenia** to biliary cirrhosis. Associations are the other autoimmune sicca conditions — Sjogren syndrome, autoimmune thyroiditis, limited scleroderma. **PSC**: about **70% male**, presenting at **20 to 40**, involving **LARGE and small ducts, intrahepatic and extrahepatic**. Imaging is therefore diagnostic — **multifocal beaded strictures alternating with dilatations** on MRCP — and the biopsy shows **concentric onion-skin periductal fibrosis** around a duct that is ultimately obliterated into a fibrous cord. **AMA is negative**, **p-ANCA is positive in most**, and **70 to 80% have inflammatory bowel disease**, overwhelmingly ulcerative colitis — although only about **5% of colitis patients develop PSC**, the liver disease runs an **independent course** and **colectomy does not cure it**. The fifth axis is cancer, and it is the one that changes practice: **PSC carries a lifetime cholangiocarcinoma risk of roughly 7 to 15%** plus an excess colorectal cancer risk, while **PBC carries no meaningful cholangiocarcinoma risk**. The clinical layer for PBC is in [[add-primary-biliary-cholangitis]].',
    '**The three storage diseases of the liver are three different molecules, three different stains and three different mechanisms — learn them as a triplet and they stop blurring.** **Hereditary haemochromatosis** is autosomal recessive, usually **HFE C282Y homozygosity**, and the mechanism is **inappropriately low hepcidin**: ferroportin on enterocytes and macrophages is never shut down, so absorption runs at **3 to 4 mg a day instead of 1 to 2**, and total body iron reaches **20 to 40 g** against a normal 2 to 6 g. Iron is demonstrated by **Perls Prussian blue**, and its **distribution is the diagnosis**: hereditary overload loads **PARENCHYMAL cells first**, hepatocytes in a **periportal zone 1** gradient, whereas transfusional overload loads **Kupffer cells and other macrophages** first. The classic triad of **cirrhosis, diabetes from islet iron, and skin pigmentation** gives bronze diabetes, with cardiomyopathy, a second and third metacarpophalangeal arthropathy, and hypogonadotrophic hypogonadism. **HCC risk rises roughly 200-fold and it does not fall back to baseline after venesection.** **Wilson disease** is autosomal recessive loss of **ATP7B**, a copper-transporting ATPase with two jobs — loading copper onto apoceruloplasmin and excreting copper into bile — so losing it drops **serum ceruloplasmin** (unloaded apoceruloplasmin is degraded rapidly), raises **free serum and urinary copper**, and drives **hepatic copper above 250 micrograms per gram dry weight**, which remains the diagnostic standard because histochemical copper stains are unreliable early. Copper in **Descemet membrane** gives **Kayser-Fleischer rings**. A Wilsonian crisis is recognisable: **Coombs-negative haemolysis, acute liver failure and a characteristically LOW alkaline phosphatase**. **Alpha-1-antitrypsin deficiency**, PiZZ, is the conceptual prize: the misfolded Z protein polymerises and **cannot leave the hepatocyte endoplasmic reticulum**, accumulating as **PAS-positive, diastase-RESISTANT globules in periportal hepatocytes** — diastase resistance being the whole point, since glycogen would have digested away.',
    '**Liver masses sort themselves by whether the background liver is cirrhotic, and hepatocellular carcinoma announces itself by invading veins.** Benign first. **Cavernous haemangioma** is the commonest benign hepatic tumour, a subcapsular red-blue spongy nodule that must not be biopsied. **Focal nodular hyperplasia** is not a neoplasm at all but a hyperplastic response to an anomalous artery: a **central stellate scar** with radiating fibrous septa carrying large malformed vessels, and **no malignant potential**. **Hepatocellular adenoma** is a true neoplasm of young women on oral contraceptives, and its diagnostic feature is a **negative** one — sheets of hepatocytes with **no portal tracts and no central veins**. It is subcapsular and **ruptures and bleeds**, especially in pregnancy, and its **beta-catenin-activated** molecular subtype is the one with real malignant potential, commoner in men and with androgen use. **Hepatocellular carcinoma** arises on **cirrhosis or chronic hepatitis in 80 to 90%** of cases, with **hepatitis B the exception that does not need cirrhosis**, acting through **integration of viral DNA into the host genome and the HBx transactivator**. **Aflatoxin B1** from Aspergillus flavus leaves a molecular fingerprint — the **TP53 codon 249 G to T transversion** — and it **synergises multiplicatively with hepatitis B**. Grossly the tumour is soft, sometimes **bile-stained green**, and it has a striking propensity for **VASCULAR INVASION**, growing as snake-like plugs along the **portal vein** and occasionally up the hepatic veins into the inferior vena cava and right atrium, so a **new portal vein thrombus in a cirrhotic liver is HCC until proven otherwise**. **Alpha-fetoprotein is raised in only about half to two-thirds**, so a normal value excludes nothing; imaging is what makes the diagnosis, because the tumour is fed by the **hepatic artery** while surrounding parenchyma is fed by the **portal vein**, giving **arterial phase hyperenhancement with portal venous washout**. Two look-alikes: **fibrolamellar carcinoma** occurs at **20 to 40 in a NON-cirrhotic liver with a normal AFP**, is a hard scirrhous mass of oncocytic cells separated by lamellar collagen, and carries the **DNAJB1-PRKACA fusion**; **cholangiocarcinoma** is a firm, gritty, white, **densely desmoplastic adenocarcinoma that is never bile-stained**, because cholangiocytes do not make bile. Staging, surveillance and treatment sit in [[hepatocellular-carcinoma-liver-tumors]].',
    '**The commonest malignant tumour of the liver is not a liver tumour at all — metastases outnumber primary hepatic cancers by roughly 20 to 40 times in Western autopsy series, and the anatomy says why.** The liver receives the **entire portal venous drainage of the gut** as well as a full arterial supply, so it filters everything the bowel sheds; liver and lung are consequently the two commonest visceral sites of metastasis. The usual primaries are **colorectum, breast, lung and pancreas**, with melanoma and neuroendocrine tumours close behind. The gross appearance is diagnostic on its own: **multiple nodules of widely differing size scattered through both lobes**, frequently **umbilicated** because the centre outgrows its blood supply and necroses, in a **massively enlarged liver with a nodular surface and a NON-cirrhotic background**. Set that against hepatocellular carcinoma, which is typically a **dominant mass in a small, shrunken, cirrhotic liver**. That contrast is the whole discriminator, and it resolves most exam vignettes before any marker is quoted: **many lesions in a big non-cirrhotic liver means secondary disease and the gut is the first place to look; one arterially enhancing lesion in a small nodular liver means HCC**. Note the practical corollary — because liver metastases are common and hepatic reserve is large, patients often present with **hepatomegaly and a raised ALP long before jaundice**, since bilirubin only rises when enough of the biliary tree is compressed. The architectural background that makes this discrimination possible is set out in [[rbp-cirrhosis-portal-hypertension]].',
  ],

  mechanism: {
    title: 'Obstructed bile to secondary biliary cirrhosis',
    steps: [
      { id: 's1', label: 'Bile flow stops, either mechanically at a large duct or through immune destruction of small interlobular ducts', emphasis: 'normal' },
      { id: 's2', label: 'Pigment accumulates in hepatocytes and distends canaliculi as bile plugs, while retained bile salts act as detergents and produce feathery degeneration', detail: 'Cholate stasis: swollen, rarefied, reticulated periportal hepatocytes.', emphasis: 'normal' },
      { id: 's3', label: 'Cholangiocytes at the portal interface proliferate into a ductular reaction and recruit neutrophils — the histological signature of large duct obstruction', emphasis: 'key' },
      { id: 's4', label: 'Periportal stellate cells activate, so fibrosis begins at the portal tract and spreads portal-to-portal, giving jigsaw nodules rather than hepatitic central-to-portal bridges', detail: 'The pattern of the septa identifies the mechanism even when the cause is unknown.', emphasis: 'key' },
      { id: 's5', label: 'Progressive ductopenia with bile lakes and bile infarcts culminates in secondary biliary cirrhosis over months, in a dark green liver', emphasis: 'danger' },
      { id: 's6', label: 'Intraductal pressure above about 20 cmH2O forces bile and enteric organisms into hepatic sinusoids, giving bacteraemic ascending cholangitis and hepatic abscess', detail: 'Cholangiovenous reflux is why antibiotics without decompression fail.', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Intense generalised pruritus with excoriations, preceding jaundice by months, in a 52-year-old woman with fatigue and a raised alkaline phosphatase', mechanism: 'The presenting complaint of primary biliary cholangitis. Itch severity tracks circulating autotaxin activity and its product lysophosphatidic acid more closely than it tracks bile acid concentration, which is why the itch is often worst when the bilirubin is still normal', significance: 'key' },
    { sign: 'A palpable, distended, entirely non-tender gallbladder in a painlessly jaundiced 68-year-old', mechanism: 'Courvoisier sign. A gallbladder scarred by chronic stone disease is fibrotic and cannot distend, so painless distension with obstructive jaundice points to a malignant distal obstruction, classically carcinoma of the pancreatic head', significance: 'key' },
    { sign: 'Rigors with a swinging fever, right upper quadrant pain and jaundice, progressing within hours to hypotension and confusion', mechanism: 'Charcot triad becoming the Reynolds pentad. Obstruction raises intraductal pressure past roughly 20 cmH2O and bile is forced across into the hepatic sinusoids, so the patient becomes bacteraemic directly from the biliary tree — the reason decompression rather than antibiotics is the definitive treatment', significance: 'key' },
    { sign: 'A golden-brown ring at the corneal limbus, best seen on slit lamp examination, in a 22-year-old with tremor and deteriorating handwriting', mechanism: 'Kayser-Fleischer rings are copper deposited in Descemet membrane in Wilson disease. They are present in nearly all patients with neurological involvement but in only about half of those presenting with liver disease alone, so their absence does not exclude hepatic Wilson disease', significance: 'key' },
    { sign: 'Slate-grey skin, a painful arthropathy of the second and third metacarpophalangeal joints, hepatomegaly and new diabetes in a 50-year-old man', mechanism: 'Hereditary haemochromatosis. Pigmentation is both iron and stimulated melanin, the islets are damaged directly by parenchymal iron, and the metacarpophalangeal arthropathy with chondrocalcinosis is distinctive enough that it should trigger transferrin saturation testing on its own', significance: 'key' },
    { sign: 'A hard, irregular liver edge with an arterial bruit audible over it, and sudden bloody ascites in a patient with known cirrhosis', mechanism: 'Hepatocellular carcinoma. The tumour is supplied by the hepatic artery rather than the portal vein, so it is audibly hypervascular, and a subcapsular nodule can rupture into the peritoneum — which is why haemorrhagic ascites in a cirrhotic patient is a tumour finding rather than a portal hypertension finding', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ALP 640 U/L, GGT 480 U/L, ALT 55 U/L, conjugated bilirubin 6.2 mg/dL', meaning: 'A cholestatic pattern, and the GGT confirms the ALP came from liver rather than bone, placenta or intestine. The disproportion between ALP and transaminases is the pattern that matters, not the absolute numbers' },
    { clue: 'INR 2.0 in a deeply jaundiced patient, falling to 1.1 twenty-four hours after parenteral vitamin K', meaning: 'Obstruction, not hepatocellular failure. Cholestasis blocks absorption of fat-soluble vitamins, so the hepatocytes can still make clotting factors once the cofactor is supplied; failure to correct means there is no synthetic capacity left, which is a completely different prognosis' },
    { clue: 'A single interlobular bile duct surrounded and invaded by lymphocytes and plasma cells with epithelioid granulomas, AMA positive, IgM raised, cholangiogram normal', meaning: 'The florid duct lesion of primary biliary cholangitis. The cholangiogram is normal precisely because the targeted ducts are interlobular and below imaging resolution, so normal imaging supports rather than refutes the diagnosis' },
    { clue: 'MRCP showing multifocal beaded strictures alternating with dilatations in both intrahepatic and extrahepatic ducts, with concentric onion-skin periductal fibrosis on biopsy and a negative AMA', meaning: 'Primary sclerosing cholangitis. Large duct involvement is what makes it imageable, and it is also what generates the 7 to 15% lifetime cholangiocarcinoma risk, so this patient needs biliary and colonoscopic surveillance that a PBC patient does not' },
    { clue: 'Perls Prussian blue showing dense iron within hepatocytes in a periportal gradient, with Kupffer cells relatively spared, and a hepatic iron index above 1.9', meaning: 'Hereditary rather than transfusional iron overload. Hereditary disease loads parenchymal cells first because absorption is unregulated, whereas transfused iron is delivered to macrophages, so the cell type carrying the iron answers the question the total body load cannot' },
    { clue: 'A 3 cm nodule in a cirrhotic liver showing arterial phase hyperenhancement with portal venous washout, tumour extending into a portal vein branch, and an alpha-fetoprotein of 6 ng/mL', meaning: 'Hepatocellular carcinoma. The enhancement pattern reports the blood supply — arterial for tumour, portal for parenchyma — and vascular invasion is characteristic. Alpha-fetoprotein is normal in a substantial minority of cases, so a normal value carries no negative predictive weight here' },
  ],

  treatment: [
    {
      logic: 'Decide obstruction versus hepatocellular failure first, because identical numbers demand opposite actions',
      detail: 'Three tests do the whole separation. **Pattern**: a cholestatic profile has **ALP and GGT out of proportion to transaminases** with **conjugated** hyperbilirubinaemia, and the GGT proves hepatic origin. **Imaging**: **dilated ducts mean an extrahepatic mechanical block**; undilated ducts with the same biochemistry mean **intrahepatic** cholestasis, and no amount of stenting will help. **Vitamin K**: an INR that **corrects within 24 hours** of parenteral vitamin K means the hepatocytes work and the problem is malabsorption of a fat-soluble vitamin; an INR that does not correct means synthetic failure. Then act on the pressure. In **ascending cholangitis** the lesion is a closed infected space at a pressure above roughly **20 cmH2O** pushing organisms into the sinusoids, so **decompression by ERCP or percutaneous drainage is the definitive treatment** and antibiotics alone are a holding measure. Long-standing obstruction ends in **secondary biliary cirrhosis** over months, which is why relieving a benign stricture early is disease-modifying rather than symptomatic.',
    },
    {
      logic: 'Duct size drives every difference between the two autoimmune cholangiopathies, including who needs cancer surveillance',
      detail: '**PBC attacks SMALL interlobular ducts**: hence about **90% female**, **AMA against pyruvate dehydrogenase E2** in 90 to 95%, **raised IgM**, a **florid duct lesion** on biopsy, a **normal cholangiogram** because those ducts cannot be imaged, and progression by **ductopenia**. **PSC attacks LARGE ducts as well as small ones**: hence about **70% male**, **beaded strictures on MRCP**, **onion-skin periductal fibrosis**, **p-ANCA** with a **negative AMA**, and an association with **ulcerative colitis in 70 to 80%** that runs an independent course, so **colectomy does not cure it**. The consequence that changes practice is cancer: a chronically injured **large** duct is where **cholangiocarcinoma** arises, giving PSC a **7 to 15% lifetime risk** plus an excess of colorectal cancer, while PBC carries **no meaningful cholangiocarcinoma risk** and needs hepatocellular carcinoma surveillance only once cirrhotic. Get the duct size right and the surveillance plan follows without memorisation.',
    },
  ],

  mnemonics: [
    {
      hook: 'PBC is the M disease; PSC is the S disease',
      expansion: [
        'PBC: Middle-aged, Mainly female, anti-Mitochondrial antibody, raised IgM, Microscopic ducts',
        'PBC therefore has a normal cholangiogram and a florid duct lesion on biopsy',
        'PSC: Sclerosing, Strictures in a String of beads, onion-Skin fibrosis, male Sex',
        'PSC goes with ulcerative colitis in 70 to 80%, is p-ANCA positive and AMA negative',
        'PSC involves large ducts, so PSC is the one with cholangiocarcinoma risk, 7 to 15% lifetime',
        'Duct size explains all of it: small ducts cannot be imaged and do not become carcinoma',
      ],
    },
    {
      hook: 'Three storage diseases, three stains, three distributions',
      expansion: [
        'Iron: Perls Prussian blue, HEPATOCYTES first in a periportal zone 1 gradient — hereditary haemochromatosis',
        'Iron in Kupffer cells and macrophages instead means transfusional overload',
        'Copper: low ceruloplasmin, high urinary copper, hepatic copper above 250 micrograms per gram dry weight — Wilson',
        'Copper in Descemet membrane gives Kayser-Fleischer rings; a crisis brings haemolysis with a LOW alkaline phosphatase',
        'Protein: PAS-positive, diastase-RESISTANT globules in periportal hepatocytes — alpha-1-antitrypsin PiZZ',
        'Diastase resistance is the point, because glycogen would have been digested away',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Which cholangiopathy needs cancer surveillance',
      wrongInstinct: 'Both primary biliary cholangitis and primary sclerosing cholangitis destroy bile ducts, so both need surveillance for cholangiocarcinoma',
      rightAnswer: 'Only primary sclerosing cholangitis carries a real cholangiocarcinoma risk, roughly 7 to 15% lifetime, and it also needs colonoscopic surveillance for colorectal cancer',
      why: 'Duct SIZE generates the difference: PBC destroys interlobular ducts that are too small to image and too small to give rise to a carcinoma, whereas PSC chronically injures large intrahepatic and extrahepatic ducts, and a large duct lined by chronically injured epithelium is precisely where cholangiocarcinoma arises',
    },
    {
      questionCategory: 'Why the liver is damaged in alpha-1-antitrypsin deficiency',
      wrongInstinct: 'Unopposed proteases digest the liver, the same loss-of-function mechanism that destroys the lung',
      rightAnswer: 'The lung disease is loss of function, but the liver disease is a toxic GAIN of function — polymerised Z protein retained inside the hepatocyte endoplasmic reticulum, visible as PAS-positive diastase-resistant globules',
      why: 'One mutation produces two opposite mechanisms, and two observations prove it: null variants that make no protein at all cause emphysema with a completely normal liver, and liver transplantation cures the hepatic disease while doing nothing for the lung, because the transplanted hepatocytes secrete normal protein but the damaged alveoli are already gone',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 34-year-old man with an eight-year history of ulcerative colitis has an alkaline phosphatase of 480 U/L and a normal ALT. MRCP shows multifocal beaded strictures alternating with dilatations in both intrahepatic and extrahepatic ducts. Antimitochondrial antibody is negative. Which additional step does this diagnosis require that primary biliary cholangitis would not?',
      options: [
        { id: 'a', text: 'Measurement of serum IgM, which is characteristically raised' },
        { id: 'b', text: 'Surveillance for cholangiocarcinoma and colonoscopic surveillance for colorectal cancer' },
        { id: 'c', text: 'Urgent colectomy, which arrests progression of the biliary disease' },
        { id: 'd', text: 'Liver biopsy, since the diagnosis cannot be made on imaging' },
      ],
      answerId: 'b',
      explanation: 'Primary sclerosing cholangitis involves large ducts as well as small ones, which is why the cholangiogram is diagnostic and why cholangiocarcinoma arises in roughly 7 to 15% over a lifetime; the associated colitis adds an excess colorectal cancer risk, so both surveillance programmes are needed. Primary biliary cholangitis destroys interlobular ducts only and carries no meaningful cholangiocarcinoma risk. Raised IgM belongs to PBC. Colectomy does not alter the course of PSC, because the liver disease runs independently of colitis activity. Biopsy is not required when imaging shows the classic beading.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Two patients have hepatic iron overload. In the first, Perls staining shows dense iron within hepatocytes, heaviest around portal tracts, with Kupffer cells almost clear. In the second, iron is concentrated in Kupffer cells and other macrophages. What does the distribution indicate?',
      options: [
        { id: 'a', text: 'The first is transfusional overload and the second is hereditary haemochromatosis' },
        { id: 'b', text: 'The first is hereditary haemochromatosis and the second is transfusional overload' },
        { id: 'c', text: 'Both patterns occur equally in either condition, so distribution is uninformative' },
        { id: 'd', text: 'The first indicates Wilson disease, since copper and iron co-deposit periportally' },
      ],
      answerId: 'b',
      explanation: 'In hereditary haemochromatosis hepcidin is inappropriately low, so ferroportin stays open and unregulated absorption delivers iron straight to parenchymal cells; hepatocytes load first, in a periportal zone 1 gradient, because zone 1 is the first tissue portal blood meets. Transfused iron arrives inside red cells that are phagocytosed, so it accumulates in macrophages, including Kupffer cells, before it reaches hepatocytes. The cell type carrying the iron therefore answers a question that the total body load cannot, and it is the discriminator to reach for before the hepatic iron index.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 63-year-old presents with a hard, massively enlarged, nodular liver and an alkaline phosphatase of 520 U/L with a normal bilirubin. Imaging shows more than twenty nodules of varying size throughout both lobes, several with central umbilication, in a liver with no features of cirrhosis. Which is the most likely diagnosis?',
      options: [
        { id: 'a', text: 'Multifocal hepatocellular carcinoma' },
        { id: 'b', text: 'Metastatic carcinoma, most likely from a gastrointestinal primary' },
        { id: 'c', text: 'Multiple hepatocellular adenomas' },
        { id: 'd', text: 'Focal nodular hyperplasia' },
      ],
      answerId: 'b',
      explanation: 'Metastases are the commonest malignant tumour of the liver by a wide margin, outnumbering primary hepatic cancer roughly 20 to 40 fold, because the liver filters the entire portal drainage of the gut. The gross picture fits: many nodules of differing size in both lobes, umbilicated where the centre has outgrown its blood supply and necrosed, in a massively enlarged non-cirrhotic liver. Hepatocellular carcinoma is typically a dominant mass in a small shrunken cirrhotic liver. The raised alkaline phosphatase with a normal bilirubin is also characteristic, because hepatic reserve is large and bilirubin only rises once enough of the biliary tree is compressed.',
      tests: 'disease',
    },
  ],
};

export default rbpCholestasisBiliaryLiverTumours;
