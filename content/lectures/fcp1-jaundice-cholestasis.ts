import type { Lecture } from '../../lib/types';

export const fcp1JaundiceCholestasis: Lecture = {
  id: 'fcp1-jaundice-cholestasis',
  title: 'Cholestatic (Obstructive) Jaundice',
  system: 'clinical',
  source: 'L18 — Jaundice',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L18 Jaundice' },
    { kind: 'disease', label: 'Cholestasis · obstruction' },
    { kind: 'exam', label: 'Courvoisier · Charcot triad' },
    { kind: 'investigation', label: 'Ultrasound · MRCP · ERCP' },
  ],

  highYield: [
    '**Cholestatic (obstructive) jaundice** = **conjugated hyperbilirubinaemia** with **raised ALP and GGT**, **dark urine**, **pale stools**, and **pruritus**. Build on the metabolism in [[fcp1-jaundice-bilirubin-metabolism]] and the pattern approach in [[fcp1-jaundice-approach]].',
    'Split by level: **intrahepatic** (primary biliary cholangitis, drug-induced, primary sclerosing cholangitis, infiltration) vs **extrahepatic** (**common bile duct stones**, benign strictures, **pancreatic head cancer**, cholangiocarcinoma).',
    '**Courvoisier law**: painless jaundice with a **palpable, non-tender gallbladder** is unlikely to be gallstones and suggests **malignant** distal obstruction (classically pancreatic head cancer). A palpable mass overlaps with [[fcp1-abdominal-mass-differential]].',
    '**Ascending cholangitis** — the **Charcot triad** (fever, RUQ pain, jaundice), with the **Reynolds pentad** adding hypotension and confusion — is a **biliary emergency** needing antibiotics and urgent decompression. Pain patterns link to [[fcp1-abdominal-pain-approach]].',
    '**Imaging**: **ultrasound** first (dilated ducts, stones), **MRCP** to map the tree, and **ERCP** to treat (stone extraction, stenting). **Ca 19-9** supports pancreatic or biliary malignancy.',
  ],

  mechanism: {
    title: 'Cholestasis: level, then image and drain',
    steps: [
      { id: 's1', label: 'Cholestasis → conjugated bilirubin + raised ALP/GGT', emphasis: 'key' },
      { id: 's2', label: 'Dark urine, pale stools, pruritus', emphasis: 'normal' },
      { id: 's3', label: 'Intrahepatic vs extrahepatic obstruction', emphasis: 'key' },
      { id: 's4', label: 'Ultrasound → MRCP/ERCP to localise and treat', emphasis: 'key' },
      { id: 's5', label: 'Fever or hypotension = cholangitis → urgent decompression', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Palpable non-tender gallbladder with painless jaundice (Courvoisier)', mechanism: 'Malignant distal obstruction (pancreatic head)', significance: 'key' },
    { sign: 'Fever, jaundice and RUQ pain together', mechanism: 'Ascending cholangitis (Charcot triad)', significance: 'key' },
    { sign: 'Right upper quadrant tenderness with a positive Murphy sign', mechanism: 'Gallstone disease or cholecystitis', significance: 'supportive' },
    { sign: 'Excoriations from scratching', mechanism: 'Pruritus of cholestasis from retained bile salts', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ALP and GGT raised out of proportion to ALT and AST', meaning: 'Confirms a cholestatic pattern' },
    { clue: 'Ultrasound showing dilated bile ducts, with or without stones', meaning: 'Mechanical obstruction; helps separate intra- from extrahepatic' },
    { clue: 'MRCP or ERCP', meaning: 'Maps the level of obstruction; ERCP also treats (stone removal, stent)' },
    { clue: 'Raised Ca 19-9', meaning: 'Supports pancreatic or biliary malignancy' },
  ],

  treatment: [
    { logic: 'Relieve the obstruction', detail: 'ERCP for stone extraction or stenting; surgery for resectable tumours; treat pruritus.' },
    { logic: 'Cholangitis: antibiotics + urgent biliary decompression', detail: 'Sepsis from an obstructed duct needs prompt drainage (ERCP) alongside resuscitation.' },
    { logic: 'Refer suspected malignancy', detail: 'Painless obstructive jaundice with weight loss needs urgent cross-sectional imaging and specialist referral.' },
  ],

  mnemonics: [
    { hook: 'Pale stool, dark urine, itch = cholestasis; painless + palpable gallbladder = cancer', expansion: ['Courvoisier points away from stones', 'Charcot triad = cholangitis emergency'] },
  ],

  traps: [
    {
      questionCategory: 'Painless obstructive jaundice',
      wrongInstinct: 'Assume gallstones are the cause of any obstructive jaundice',
      rightAnswer: 'Painless jaundice with a palpable gallbladder (Courvoisier) suggests malignancy, not stones',
      why: 'Stones usually give a scarred, non-distensible gallbladder with pain; a distended painless gallbladder implies malignant distal obstruction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 66-year-old has 4 weeks of progressive painless jaundice, weight loss, pale stools and dark urine, with a palpable non-tender gallbladder. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Common bile duct stone' },
        { id: 'b', text: 'Pancreatic head carcinoma' },
        { id: 'c', text: 'Gilbert syndrome' },
        { id: 'd', text: 'Haemolytic anaemia' },
      ],
      answerId: 'b',
      explanation: 'Painless obstructive jaundice with weight loss and a palpable gallbladder (Courvoisier) classically indicates malignant distal obstruction such as pancreatic head cancer.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'A patient with obstructive jaundice becomes febrile and hypotensive with RUQ pain and confusion. The priority management is:',
      options: [
        { id: 'a', text: 'Oral ursodeoxycholic acid and discharge' },
        { id: 'b', text: 'IV antibiotics with urgent biliary decompression' },
        { id: 'c', text: 'Elective outpatient MRCP in 6 weeks' },
        { id: 'd', text: 'An antihistamine for pruritus only' },
      ],
      answerId: 'b',
      explanation: 'This is ascending cholangitis (progressing to the Reynolds pentad); it requires resuscitation, IV antibiotics and urgent biliary drainage.',
      tests: 'treatment',
    },
  ],
};

export default fcp1JaundiceCholestasis;
