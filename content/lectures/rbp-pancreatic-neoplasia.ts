import type { Lecture } from '../../lib/types';

// Original study notes aligned to Robbins Basic Pathology, 9th edition.
// Source and review scope: docs/robbins-coverage.md.
export const rbpPancreaticNeoplasia: Lecture = {
  id: 'rbp-pancreatic-neoplasia',
  title: 'Pancreatic Cystic Lesions & Neoplasia',
  system: 'gi',
  source: 'Ch 16 — Pancreas',
  updated: '2026-09-19',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'Ch 16 Pancreas' },
    { kind: 'mechanism', label: 'Epithelial lining and malignant potential in cystic lesions' },
    { kind: 'disease', label: 'Ductal adenocarcinoma and pancreatic neuroendocrine tumours' },
  ],

  highYield: [
    '**Every pancreatic cyst is really one question — is this epithelium premalignant? — so sort by the lining first and by the size last.** Four lesions, four answers. **Pseudocyst**: no epithelial lining at all, walled by granulation and fibrous tissue, follows an attack of pancreatitis, fluid **amylase-rich and CEA-poor**; about **75%** of all pancreatic cysts, and with no epithelium there is nothing that can become dysplastic, so **no malignant potential** ([[rbp-pancreatitis-acute-chronic]]). **Serous cystadenoma**: lined by bland **glycogen-rich cuboidal** cells, a **microcystic honeycomb** of innumerable small cysts of clear straw fluid around a **central stellate scar** with sunburst calcification, typically a woman in her seventh decade, associated with **VHL** mutation; malignant change is **under 1%**, so it is watched, not cut. **Mucinous cystic neoplasm**: almost exclusively **women**, **body and tail**, **does NOT communicate with the duct**, and defined by mucinous columnar epithelium sitting on a dense **OVARIAN-TYPE STROMA** that is oestrogen and progesterone receptor positive — that stroma is the diagnostic feature and nothing else in the pancreas has it; about **one third** harbour invasive carcinoma at resection, so it is resected. **Intraductal papillary mucinous neoplasm**: **communicates with the duct system**, which is its definition, more often in the **head**, and **main-duct type carries invasive carcinoma in roughly 40 to 70%** against **10 to 20%** for branch-duct type. Fluid rule: **CEA above about 192 ng/mL means mucinous**; high amylase means it talks to a duct.',
    '**Ductal adenocarcinoma has an ordered set of mutations, and the order is the point: KRAS opens, CDKN2A follows, TP53 and SMAD4 close.** It is **85 to 90%** of pancreatic cancers, and it arises through **PanIN** lesions — flat then papillary then dysplastic ductal epithelium — in a sequence that mirrors the adenoma-carcinoma sequence of the colon ([[rbp-carcinogenesis-tumour-progression]]). **KRAS**, almost always at **codon 12**, is mutated in **90 to 95%** and is both the earliest and the commonest event, already present in low-grade PanIN; it drives proliferation constitutively. **CDKN2A**, which encodes **p16**, is inactivated in about **95%** by deletion, point mutation or promoter methylation, in intermediate-grade PanIN — the brake that should have answered a RAS-driven cell is removed. **TP53** (**50 to 75%**) and **SMAD4** (about **55%**) are late, appearing in high-grade PanIN and invasive carcinoma. SMAD4 is worth singling out twice over: it sits in the TGF-beta growth-inhibitory pathway, and its status predicts behaviour — **SMAD4 loss correlates with widespread metastatic disease, SMAD4 retention with locally destructive disease** — while loss of its nuclear staining on immunohistochemistry is a practical aid to calling malignancy on a difficult biopsy. Telomere shortening is detectable even earlier than KRAS.',
    '**The desmoplastic stroma is the tumour’s dominant morphology, and almost every clinical peculiarity of pancreatic cancer falls straight out of it.** Invasive glands recruit and activate **pancreatic stellate cells**, which lay down a dense collagenous stroma that commonly makes up **80% or more of the tumour mass**, with sparse malignant glands scattered through it. Four consequences, all derivable. **It is hard, gritty and pale** — and so is burnt-out chronic pancreatitis, which is why the gross specimen and the surgeon’s finger cannot tell them apart and why the diagnosis is microscopic. **It is hypovascular and has high interstitial pressure**, so it enhances poorly on contrast CT (appearing as a hypodense mass against normal gland) and cytotoxic drugs are delivered badly — the stroma is a physical barrier as much as a biological one, which is the standing explanation for chemoresistance. **It invades nerves**: perineural invasion is found in around **90%**, which is the anatomical reason for relentless back pain. **It invades lymphatics and veins early.** On microscopy the malignant glands are well formed but architecturally wrong — angulated, haphazard, with incomplete lumina, and crucially **sitting immediately beside muscular arteries with no intervening acini**, an arrangement never seen in normal pancreas. That architectural reasoning, not nuclear atypia, is usually what settles the biopsy.',
    '**Head versus tail is pure geography, and it explains both the reputation of this cancer and its one early presentation.** About **60%** arise in the head, **15%** in the body, **5%** in the tail, and the rest diffusely. The intrapancreatic **common bile duct** runs through the head, so a tumour of only one or two centimetres can obstruct it: the patient develops **progressive PAINLESS obstructive jaundice** with **pale stools, dark urine and pruritus**, and conjugated hyperbilirubinaemia with a disproportionate alkaline phosphatase ([[bilirubin-metabolism-jaundice]]). That is the whole of the early-presentation story, and it is why head lesions are the ones sometimes resectable. **Courvoisier’s sign deserves its reasoning rather than its slogan.** The claim is that a **palpable, distended, NON-tender gallbladder in a jaundiced patient means malignant obstruction rather than stones**, and the reason is a statement about the **gallbladder WALL, not about the stone**: years of calculous disease scar and fibrose the wall so that it cannot distend however high the pressure rises, whereas a tumour obstructs a previously normal duct in a previously normal gallbladder, which distends freely as pressure builds below the cystic duct. It is a rule about chronicity, which is exactly why a first-ever stone lodged in the distal bile duct can occasionally break it. **Body and tail tumours have nothing to obstruct**, so they stay silent until they invade the coeliac plexus or metastasise — and are almost never resectable at diagnosis.',
    '**Two exam favourites, and both are really cautions: Trousseau tells you the tumour is prothrombotic, and CA 19-9 tells you almost nothing unless a cancer is already known.** **Migratory thrombophlebitis**, described by Trousseau, occurs in about **10%**: tender cords appear, resolve and reappear in unusual and shifting sites. The mechanism is that the tumour releases **tissue factor** and **mucins** that directly activate platelets and the coagulation cascade, so this is genuine tumour-driven hypercoagulability rather than stasis, which is why it migrates and why it recurs despite treatment. **CA 19-9** is the sialylated **Lewis-a** blood group antigen, and both halves of that description are the problem. Because its synthesis depends on Lewis genotype, **5 to 10% of people are Lewis-negative and never produce it at all**, so their level stays normal with advanced disease. Because it is cleared in bile, **any cholestasis raises it**, including benign obstruction and cholangitis. Its positive predictive value in an asymptomatic population is therefore poor, and **it is a monitoring test — treatment response and recurrence — not a screening test.** Add the other soft presentations worth recognising: **new-onset diabetes in an older adult without risk factors** precedes the diagnosis in roughly a quarter of cases, and unexplained weight loss is near-universal.',
    '**Pancreatic neuroendocrine tumours are a different lineage with a different natural history, and the mistake is to give them the prognosis of the adenocarcinoma sitting in the same organ.** They are about **2%** of pancreatic neoplasms, arise from islet cells, and carry a completely separate gene set — **MEN1, DAXX, ATRX** and mTOR pathway genes, with **no KRAS** — which is the molecular statement that they are not adenocarcinoma variants ([[hen1-islet-hormones-paracrine]]). They are **graded** by **Ki-67 index and mitotic count**, and a well-differentiated tumour with liver metastases is measured in **years**, whereas metastatic ductal adenocarcinoma is measured in **months**. Functional syndromes, each named by its hormone. **Insulinoma** is commonest, usually solitary, small and about **90% benign**, and presents with **Whipple’s triad**: neuroglycopenic symptoms, a documented glucose below **2.5 mmol/L (45 mg/dL)** at the time, and relief on giving glucose — confirmed by **high insulin with HIGH C-peptide and proinsulin** and a negative sulfonylurea screen. **Gastrinoma** causes **Zollinger-Ellison syndrome**: multiple, refractory and distally sited duodenal ulcers with diarrhoea, because the acid load inactivates pancreatic lipase; over **60% are malignant** and about **25% are MEN1-associated**. **Glucagonoma**: necrolytic migratory erythema, mild diabetes, anaemia and weight loss. **VIPoma**: watery diarrhoea, hypokalaemia and achlorhydria. **Somatostatinoma**: diabetes, gallstones and steatorrhoea. **MEN1** means parathyroid, pancreas and pituitary.',
  ],

  mechanism: {
    title: 'From a normal duct to an unresectable cancer',
    steps: [
      { id: 's1', label: 'Normal ductal epithelium acquires telomere shortening and a KRAS codon 12 mutation: low-grade PanIN', detail: 'KRAS is mutated in 90 to 95% of ductal adenocarcinomas and is the earliest detectable driver, present before any invasion.', emphasis: 'key' },
      { id: 's2', label: 'CDKN2A (p16) is inactivated by deletion, mutation or promoter methylation: intermediate-grade PanIN', detail: 'Inactivated in about 95%. The checkpoint that should have arrested a RAS-driven cell is removed, so proliferation continues unopposed.', emphasis: 'key' },
      { id: 's3', label: 'TP53 and SMAD4 are lost: high-grade PanIN, then breach of the basement membrane', detail: 'TP53 in 50 to 75%, SMAD4 in about 55%. Both are late events, which is why they are found in the invasive component and not in early PanIN.', emphasis: 'key' },
      { id: 's4', label: 'Invasive glands activate pancreatic stellate cells, which build a desmoplastic stroma that is 80% or more of the tumour mass', detail: 'The stroma, not the epithelium, is most of what the pathologist and the radiologist are actually looking at.', emphasis: 'key' },
      { id: 's5', label: 'The stroma makes the tumour hard, hypovascular and high-pressure: poor CT enhancement, poor drug delivery, and a gross specimen indistinguishable from chronic pancreatitis', detail: 'This is why the diagnosis is microscopic, why the tumour appears hypodense, and why chemotherapy penetrates badly.', emphasis: 'normal' },
      { id: 's6', label: 'Perineural invasion in about 90%, then lymphatic and venous spread to liver and peritoneum; SMAD4 loss predicts a metastatic rather than a locally destructive pattern', detail: 'Perineural invasion explains the boring back pain; SMAD4 status is the closest thing to a behavioural predictor available on a biopsy.', emphasis: 'danger' },
    ],
    branches: [
      {
        fromId: 's1',
        title: 'The cystic route to the same destination',
        steps: [
          { id: 'b1', label: 'Mucinous epithelium confined to a cyst with ovarian-type stroma: mucinous cystic neoplasm, about one third already invasive at resection', emphasis: 'key' },
          { id: 'b2', label: 'Mucinous epithelium growing within and communicating with the ducts, often GNAS-mutated: intraductal papillary mucinous neoplasm, 40 to 70% invasive if main-duct', emphasis: 'key' },
          { id: 'b3', label: 'Serous, glycogen-rich cuboidal epithelium with VHL loss: serous cystadenoma, which goes nowhere — under 1% become malignant', emphasis: 'normal' },
        ],
      },
    ],
  },

  examFindings: [
    { sign: 'A smooth, distended, non-tender gallbladder palpable below the right costal margin in a jaundiced patient', mechanism: 'Courvoisier reasoning. Long-standing calculous disease fibroses the gallbladder wall so it cannot distend; a tumour obstructing below the cystic duct raises pressure slowly in a previously normal gallbladder, which therefore enlarges. The sign is a statement about chronic wall disease, not about the presence of a stone', significance: 'key' },
    { sign: 'Progressive painless jaundice with pale stools, dark urine and skin excoriation from itching', mechanism: 'A head tumour obstructing the intrapancreatic common bile duct. The bilirubin is conjugated, so it is water-soluble and appears in urine while none reaches the gut to be converted to stercobilin; retained bile salts stimulate cutaneous nerve endings. This is the one presentation early enough to be resectable', significance: 'key' },
    { sign: 'Tender cord-like superficial veins that appear, resolve and recur in shifting and unusual sites', mechanism: 'Migratory thrombophlebitis of Trousseau, in about 10%. Tumour-released tissue factor and mucins activate platelets and the coagulation cascade directly, so the hypercoagulability is tumour-driven rather than stasis-driven, which is why it migrates rather than staying put', significance: 'key' },
    { sign: 'Constant boring epigastric pain radiating to the back, worse at night, partly relieved by curling forward', mechanism: 'Perineural invasion, present in around 90%, with retroperitoneal extension to the coeliac plexus. It is characteristic of body and tail lesions, which have no duct to obstruct and therefore declare themselves only when they have grown into nerve', significance: 'key' },
    { sign: 'A migrating annular rash with blistering and crusted erosions over the groin and perineum, with mild diabetes and weight loss', mechanism: 'Necrolytic migratory erythema of glucagonoma. Sustained glucagon drives catabolism with amino acid depletion, and the epidermis, which turns over fast, fails first. The rash frequently precedes the diagnosis by years, which is the only reason it is worth recognising', significance: 'supportive' },
    { sign: 'Recurrent confusion and sweating relieved within minutes by glucose, in a patient who has gained weight', mechanism: 'Whipple’s triad of insulinoma: neuroglycopenic symptoms, documented hypoglycaemia at the time, and relief on giving glucose. The weight gain is the clue that the hypoglycaemia is chronic, since the patient learns to eat constantly to prevent it', significance: 'key' },
  ],

  investigations: [
    { clue: 'Cyst fluid with CEA of 850 ng/mL and amylase of 40 U/L in a woman with a lesion in the tail', meaning: 'Mucinous and not communicating with the duct: a mucinous cystic neoplasm. CEA above roughly 192 ng/mL indicates a mucinous lining, and low amylase excludes both a pseudocyst and an intraductal papillary mucinous neoplasm. Note what CEA does not do — it separates mucinous from non-mucinous, and says nothing about whether that mucinous epithelium has already become invasive' },
    { clue: 'Endoscopy showing mucin extruding from a patulous fish-mouth ampulla, with a diffusely dilated main pancreatic duct', meaning: 'Main-duct intraductal papillary mucinous neoplasm. Visible communication with the duct system is the defining feature of the lesion, and main-duct disease harbours invasive carcinoma in roughly 40 to 70%, against 10 to 20% for branch-duct disease — which is why one is resected and the other can often be watched' },
    { clue: 'A microcystic honeycomb lesion with a central stellate scar and sunburst calcification in a 70-year-old woman', meaning: 'Serous cystadenoma. The lining is bland glycogen-rich cuboidal epithelium, and the fluid is thin and straw-coloured with low CEA and low amylase. Malignant transformation is under 1%, so recognising the radiological pattern spares the patient a pancreatectomy' },
    { clue: 'Pancreatic protocol CT with a hypoenhancing head mass, abrupt cut-off of both the bile and pancreatic ducts, and loss of the fat plane around the superior mesenteric artery', meaning: 'Ductal adenocarcinoma. It enhances poorly because the desmoplastic stroma is hypovascular, so it is defined on CT by being darker than normal gland. The double duct sign reflects a mass at the ampullary end, and arterial encasement determines resectability far more reliably than tumour diameter' },
    { clue: 'Biopsy showing angulated glands with incomplete lumina lying directly against a muscular artery in dense fibrous stroma, with tumour tracking along a nerve', meaning: 'Ductal adenocarcinoma, diagnosed on architecture rather than on cytological atypia. Normal pancreatic ducts never abut a muscular artery without intervening acini, and perineural invasion is effectively diagnostic of malignancy. Loss of nuclear SMAD4 staining supports the call and also flags a tumour inclined to metastasise widely' },
    { clue: 'During a spontaneous hypoglycaemic episode: glucose 2.1 mmol/L, insulin raised, C-peptide 3.5 ng/mL, proinsulin raised, sulfonylurea screen negative', meaning: 'Endogenous hyperinsulinism, that is an insulinoma. C-peptide is the discriminator: it is cleaved from proinsulin in equimolar amounts with endogenous insulin, so exogenous insulin gives high insulin with SUPPRESSED C-peptide, while a sulfonylurea raises both and is excluded only by assaying the drug' },
  ],

  treatment: [
    {
      logic: 'Decide resectability from the vessels rather than the size, and decide cyst surgery from the lining rather than the diameter',
      detail: 'Only about **20%** of ductal adenocarcinomas are resectable at diagnosis, and resectability is an **anatomical** judgement: encasement of the coeliac axis, superior mesenteric or hepatic artery beyond **180 degrees** is what makes a tumour unresectable, while involvement of the superior mesenteric or portal **vein** is often reconstructable. A small tumour abutting an artery is unresectable; a larger one that is not is operable — which is why diameter is the wrong question. Even after a margin-negative pancreatoduodenectomy five-year survival is only about **20 to 25%**, against a figure historically under **5%** overall and now around **10 to 13%** in registry data. The cyst algorithm follows the epithelium: **main-duct IPMN and mucinous cystic neoplasm are resected** because their lining is premalignant; a **branch-duct IPMN under 3 cm with no mural nodule, no main duct dilatation and no jaundice** can be surveilled; **serous cystadenoma and pseudocyst need nothing** unless they are symptomatic, infected or obstructing.',
    },
    {
      logic: 'A pancreatic neuroendocrine tumour is GRADED, not merely staged — and its grade outweighs its metastases',
      detail: 'Grade comes from the **Ki-67 index and mitotic count**, and it, rather than the presence of liver deposits, governs the plan: a well-differentiated metastatic tumour is compatible with **years** of life, so hepatic metastasis is a reason to debulk and treat, not to withdraw. Functional syndromes are controlled by opposing the hormone. **Somatostatin analogues** such as octreotide suppress secretion in VIPoma and glucagonoma and also slow growth. **Gastrinoma needs proton pump inhibition at doses well above ordinary ulcer therapy**, because the tumour sets acid output, and under-dosing is the commonest failure. **Diazoxide** holds an insulinoma until it can be enucleated, since most are solitary and benign. Finally, screen for **MEN1** whenever the tumour is multifocal, the patient is young, or calcium is raised — parathyroid, pancreas, pituitary — because a missed syndrome means the next tumour arrives unannounced.',
    },
  ],

  mnemonics: [
    {
      hook: 'Ask one question of every pancreatic cyst: is there an epithelial lining, and does that lining make mucin?',
      expansion: [
        'No lining, follows pancreatitis, amylase-rich and CEA-poor: pseudocyst, no malignant potential',
        'Glycogen-rich cuboidal lining, microcystic with a central stellate scar, older woman: serous cystadenoma, under 1% malignant',
        'Mucinous columnar lining on OVARIAN-TYPE stroma, woman, body or tail, no duct communication: mucinous cystic neoplasm, one third already invasive',
        'Mucinous lining COMMUNICATING with the ducts: intraductal papillary mucinous neoplasm — main duct 40 to 70% invasive, branch duct 10 to 20%',
        'Fluid CEA above 192 ng/mL says mucinous; fluid amylase says it talks to a duct',
      ],
    },
    {
      hook: 'Courvoisier is a statement about the gallbladder WALL, not about the stone',
      expansion: [
        'Years of stones scar and fibrose the wall, so a stone-diseased gallbladder cannot distend whatever the pressure',
        'A head tumour obstructs a previously normal duct draining a previously normal gallbladder',
        'Pressure below the cystic duct rises slowly, so the gallbladder becomes large, palpable and NON-tender',
        'Palpable gallbladder with jaundice therefore means malignant obstruction distal to the cystic duct until proved otherwise',
        'Head lesions obstruct the bile duct early and present with painless jaundice; body and tail lesions have nothing to obstruct and present when it is already too late',
      ],
    },
  ],

  traps: [
    {
      questionCategory: 'Using CA 19-9',
      wrongInstinct: 'CA 19-9 is the pancreatic cancer marker, so a high level makes the diagnosis and a normal level rules it out',
      rightAnswer: 'Use CA 19-9 only to monitor a cancer that is already diagnosed — response to treatment and detection of recurrence. It cannot screen, because any cholestasis raises it and 5 to 10% of people cannot synthesise it at all',
      why: 'CA 19-9 is the sialylated Lewis-a blood group antigen, so its production depends on the patient’s Lewis genotype and its level depends on biliary clearance — two variables that have nothing to do with whether a tumour is present',
    },
    {
      questionCategory: 'Interpreting a hard mass in the head of the pancreas',
      wrongInstinct: 'The gland is stony hard, gritty and pale at operation, so this is plainly carcinoma and the surgeon can proceed without tissue',
      rightAnswer: 'Burnt-out chronic pancreatitis produces an identical gross specimen. The discriminators are microscopic: glands abutting a muscular artery with no intervening acini, incomplete and angulated lumina, perineural invasion, and loss of nuclear SMAD4 staining',
      why: 'The hardness belongs to the desmoplastic stroma, and stroma is a reaction rather than a tumour — both a carcinoma and chronic inflammation can generate it, so only the ARCHITECTURE of the glands settles the question',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 48-year-old woman has an incidental 5 cm multiloculated cyst in the tail of the pancreas. She has never had pancreatitis, and MRCP shows no communication with the main pancreatic duct. The resected specimen shows tall mucinous columnar epithelium resting on a densely cellular spindle-cell stroma that is oestrogen and progesterone receptor positive. Which statement is correct?',
      options: [
        { id: 'a', text: 'This is a serous cystadenoma and observation alone would have been sufficient' },
        { id: 'b', text: 'This is a pseudocyst, since the absence of duct communication excludes a neoplasm' },
        { id: 'c', text: 'This is a mucinous cystic neoplasm; the ovarian-type stroma defines it, and roughly a third harbour invasive carcinoma, so resection is correct' },
        { id: 'd', text: 'This is a branch-duct intraductal papillary mucinous neoplasm, in which absent duct communication is typical' },
      ],
      answerId: 'c',
      explanation: 'The ovarian-type stroma is the defining feature of a mucinous cystic neoplasm and nothing else in the pancreas has it, which is why it, and not the mucin, is the answer. The rest of the picture fits: these occur almost exclusively in women in the fourth to sixth decades, sit in the body or tail, and do not communicate with the ductal system. Around one third contain an invasive carcinoma at resection, and resection is curative when the lesion is still confined, so this is a premalignant lesion that is removed rather than watched. Duct communication is the defining feature of an intraductal papillary mucinous neoplasm, so option d inverts the rule; a serous cystadenoma would be microcystic with glycogen-rich cuboidal cells; and a pseudocyst has no epithelial lining at all.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A pancreatoduodenectomy specimen contains PanIN lesions of increasing grade alongside an invasive ductal adenocarcinoma. Microdissection and sequencing show a KRAS codon 12 mutation in the low-grade PanIN and in the invasive tumour, CDKN2A inactivation in the higher-grade PanIN and the tumour, and TP53 and SMAD4 loss only in the invasive component. Which conclusion is best supported?',
      options: [
        { id: 'a', text: 'SMAD4 loss is the initiating event, since it is present in the invasive carcinoma' },
        { id: 'b', text: 'KRAS is the earliest and commonest driver, with CDKN2A, TP53 and SMAD4 as progressively later hits, and SMAD4 loss marks a tumour inclined to widespread metastasis' },
        { id: 'c', text: 'The distribution shows that PanIN lesions are reactive changes rather than precursors' },
        { id: 'd', text: 'CDKN2A inactivation is the final rate-limiting step immediately before invasion' },
      ],
      answerId: 'b',
      explanation: 'The molecular distribution reproduces the progression model. KRAS, mutated at codon 12 in 90 to 95% of ductal adenocarcinomas, is present from the earliest lesion; CDKN2A, inactivated in about 95%, follows in intermediate-grade PanIN; TP53 in 50 to 75% and SMAD4 in about 55% appear only late, in high-grade PanIN and invasive carcinoma. Finding a mutation in both precursor and cancer places it early, while finding it only in the cancer places it late, so option a reverses the inference. The practical value is twofold: the shared KRAS mutation confirms the PanIN lesions are genuine precursors rather than reactive, and SMAD4 status carries behavioural information, since its loss correlates with widespread metastatic disease while its retention correlates with locally destructive disease.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A 66-year-old man has three weeks of painless jaundice with pale stools, dark urine, pruritus and 8 kg of weight loss. A smooth, non-tender mass is palpable below the right costal margin. Bilirubin is 280 µmol/L and predominantly conjugated, with a disproportionately raised alkaline phosphatase. Which statement is correct?',
      options: [
        { id: 'a', text: 'The palpable gallbladder favours a stone impacted in the common bile duct' },
        { id: 'b', text: 'The palpable gallbladder argues against long-standing calculous disease and favours malignant obstruction distal to the cystic duct, typically a carcinoma of the pancreatic head' },
        { id: 'c', text: 'Painless jaundice with a palpable gallbladder is the characteristic presentation of a tumour in the tail of the pancreas' },
        { id: 'd', text: 'Unconjugated hyperbilirubinaemia would be the expected biochemical pattern' },
      ],
      answerId: 'b',
      explanation: 'Courvoisier reasoning turns on the state of the gallbladder wall rather than on the nature of the obstructing lesion. Chronic calculous disease scars and fibroses the wall so that it cannot distend, whereas a tumour obstructs a previously normal duct draining a previously normal gallbladder, which enlarges as pressure rises below the cystic duct. Geography explains the rest: the intrapancreatic common bile duct passes through the head, so a small head tumour obstructs it early and produces painless jaundice, which is the one presentation early enough to be potentially resectable, while body and tail tumours have nothing to obstruct and remain silent until they invade the coeliac plexus or metastasise. The bilirubin is conjugated because the block is downstream of conjugation, which is also why it spills into urine while none reaches the gut to colour the stool.',
      tests: 'exam',
    },
  ],
};

export default rbpPancreaticNeoplasia;
