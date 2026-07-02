import type { Lecture } from '../../lib/types';

export const pancreaticCarcinoma: Lecture = {
  id: 'pancreatic-carcinoma',
  title: 'Pancreatic Carcinoma',
  system: 'gi',
  source: 'L4 — Pathology of the Exocrine Pancreas',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L4 Pancreas Pathology' },
    { kind: 'disease', label: 'Pancreatic cancer' },
    { kind: 'exam', label: 'Courvoisier / Trousseau' },
  ],

  highYield: [
    '**Pancreatic ductal adenocarcinoma (PDAC) is an aggressive cancer of ductal epithelium with a very poor prognosis — it usually presents late.** Risk factors: **smoking (the strongest modifiable risk), chronic pancreatitis, diabetes, obesity, age, and hereditary syndromes**; key mutations include **KRAS, CDKN2A (p16), TP53 and SMAD4.**',
    '**Most PDACs arise in the HEAD of the pancreas and obstruct the common bile duct → painless OBSTRUCTIVE JAUNDICE.** The classic **Courvoisier sign — a palpable, non-tender gallbladder with jaundice — suggests malignant obstruction rather than gallstones** (stones cause a scarred, non-distensible gallbladder). Weight loss and epigastric pain radiating to the back are common.',
    '**Paraneoplastic clues: migratory thrombophlebitis (Trousseau sign of malignancy) and new-onset diabetes in an older adult.** A desmoplastic, infiltrative tumour with **perineural and vascular invasion** underlies its aggressiveness; the tumour marker **CA 19-9** is used for monitoring (not screening).',
    '**Body/tail tumours present even later** (no early bile-duct obstruction), often with pain and metastasis. Because symptoms are late and non-specific, most patients have unresectable or metastatic disease at diagnosis; only a minority are candidates for the **Whipple (pancreaticoduodenectomy)** resection.',
    '**The high-yield picture is: an older smoker with painless obstructive jaundice, a palpable non-tender gallbladder (Courvoisier), weight loss and a raised CA 19-9 → pancreatic head cancer.** Distinguish it from chronic pancreatitis (which it complicates and mimics) and from benign biliary obstruction (gallstones).',
  ],

  mechanism: {
    title: 'Ductal adenocarcinoma (KRAS/p53), head → obstructive jaundice, late/aggressive',
    steps: [
      { id: 's1', label: 'PDAC = ductal epithelium; KRAS, CDKN2A, TP53, SMAD4; smoking risk', emphasis: 'key' },
      { id: 's2', label: 'Head tumour obstructs CBD → painless obstructive jaundice', emphasis: 'key' },
      { id: 's3', label: 'Courvoisier: palpable non-tender gallbladder = malignant obstruction', emphasis: 'key' },
      { id: 's4', label: 'Trousseau (migratory thrombophlebitis); perineural/vascular invasion', emphasis: 'danger' },
      { id: 's5', label: 'Late presentation → mostly unresectable; CA 19-9 for monitoring' },
    ],
  },

  examFindings: [
    { sign: 'Painless obstructive jaundice + weight loss in an older smoker', mechanism: 'Pancreatic head adenocarcinoma', significance: 'key' },
    { sign: 'Palpable non-tender gallbladder with jaundice (Courvoisier)', mechanism: 'Malignant biliary obstruction', significance: 'key' },
    { sign: 'Migratory superficial thrombophlebitis (Trousseau sign)', mechanism: 'Paraneoplastic hypercoagulability', significance: 'key' },
    { sign: 'New-onset diabetes + weight loss in an older adult', mechanism: 'Possible pancreatic cancer', significance: 'supportive' },
    { sign: 'Perineural and vascular invasion on histology', mechanism: 'Aggressive ductal adenocarcinoma', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The sign of a palpable non-tender gallbladder with jaundice', meaning: 'Courvoisier sign (malignant obstruction)' },
    { clue: 'The migratory thrombophlebitis of pancreatic cancer', meaning: 'Trousseau sign of malignancy' },
    { clue: 'The tumour marker used to monitor pancreatic cancer', meaning: 'CA 19-9 (monitoring, not screening)' },
    { clue: 'The most common mutation in pancreatic ductal adenocarcinoma', meaning: 'KRAS (with CDKN2A, TP53, SMAD4)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'PDAC is usually diagnosed late and only a minority are resectable (Whipple); prognosis is poor, so recognising early clues (painless obstructive jaundice, Courvoisier, Trousseau, new diabetes + weight loss) matters. Chronic pancreatitis both predisposes to and mimics it ([[acute-chronic-pancreatitis]]). Obstructive jaundice links to the cholestasis patterns of [[hepatitis-liver-injury-patterns]]; smoking is the key modifiable risk.' },
  ],

  mnemonics: [
    { hook: 'Pancreatic head cancer = "Courvoisier + Trousseau + painless jaundice + CA 19-9"', expansion: ['Courvoisier: palpable non-tender gallbladder', 'Trousseau: migratory thrombophlebitis'] },
    { hook: 'Mutations "KRAS is king" (+ p16/CDKN2A, TP53, SMAD4)', expansion: ['Smoking = strongest modifiable risk', 'Perineural/vascular invasion'] },
  ],

  traps: [
    {
      questionCategory: 'Interpreting a palpable gallbladder with jaundice',
      wrongInstinct: 'A palpable, distended gallbladder with jaundice is usually due to gallstones',
      rightAnswer: 'Courvoisier law: a palpable, NON-TENDER, distended gallbladder with jaundice suggests MALIGNANT obstruction (e.g. pancreatic head cancer) rather than stones — gallstone disease typically scars the gallbladder so it cannot distend',
      why: 'Chronic gallstone disease fibroses the gallbladder wall, preventing distension; a distensible, palpable gallbladder therefore points away from stones and toward a malignant cause of obstruction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An older smoker presents with painless jaundice, weight loss and a palpable non-tender gallbladder (Courvoisier sign). The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Gallstone in the common bile duct' },
        { id: 'b', text: 'Carcinoma of the pancreatic head' },
        { id: 'c', text: 'Acute pancreatitis' },
        { id: 'd', text: 'Viral hepatitis' },
      ],
      answerId: 'b',
      explanation: 'Painless obstructive jaundice with a palpable non-tender gallbladder (Courvoisier) in an older smoker strongly suggests a pancreatic head adenocarcinoma obstructing the common bile duct, rather than gallstones (which scar the gallbladder).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Migratory superficial thrombophlebitis (Trousseau sign of malignancy) in a patient with pancreatic cancer reflects:',
      options: [
        { id: 'a', text: 'Direct tumour invasion of veins only' },
        { id: 'b', text: 'A paraneoplastic hypercoagulable state' },
        { id: 'c', text: 'Vitamin K deficiency' },
        { id: 'd', text: 'Portal hypertension' },
      ],
      answerId: 'b',
      explanation: 'Pancreatic (and other) adenocarcinomas can induce a systemic hypercoagulable state, producing recurrent migratory thrombophlebitis — the paraneoplastic Trousseau sign of malignancy.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pancreaticCarcinoma;
