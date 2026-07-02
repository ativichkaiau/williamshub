import type { Lecture } from '../../lib/types';

export const autoimmuneMetabolicLiverDisease: Lecture = {
  id: 'autoimmune-metabolic-liver-disease',
  title: 'Autoimmune & Metabolic Liver Disease',
  system: 'gi',
  source: 'L3 — Pathology of the Liver',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L3 Hepatobiliary Pathology' },
    { kind: 'disease', label: 'Wilson / haemochromatosis' },
    { kind: 'exam', label: 'PBC / PSC' },
  ],

  highYield: [
    '**Beyond viral and alcoholic causes, several INHERITED (metabolic) and AUTOIMMUNE diseases cause chronic liver injury and cirrhosis — each with a signature test.** Recognising them matters because some are specifically treatable (removing iron/copper) and each has classic associations.',
    '**Hereditary HAEMOCHROMATOSIS = iron overload (HFE gene): iron deposits in liver, pancreas, skin, heart and joints → the classic "bronze diabetes" (cirrhosis + diabetes + skin pigmentation), with high FERRITIN and transferrin saturation.** Treated by venesection; risk of hepatocellular carcinoma. Wilson\'s is its copper counterpart.',
    '**WILSON DISEASE = copper accumulation (ATP7B gene): liver disease PLUS neuropsychiatric features (movement disorder, behaviour change) and KAYSER–FLEISCHER RINGS (corneal copper).** It shows a LOW ceruloplasmin and high urinary copper; it presents in the young and is treated with copper chelation (penicillamine) — a treatable cause of cirrhosis not to miss.',
    '**α1-ANTITRYPSIN DEFICIENCY causes both liver disease (misfolded protein accumulates in hepatocytes — PAS-positive globules) and early PANACINAR EMPHYSEMA** (the lung protease problem — see [[copd-emphysema-chronic-bronchitis]]). It is the classic "liver + lung" inherited disease.',
    '**Autoimmune/cholestatic: AUTOIMMUNE HEPATITIS (young women; ANA/anti-smooth-muscle antibodies, high IgG, steroid-responsive); PRIMARY BILIARY CHOLANGITIS (middle-aged women; ANTI-MITOCHONDRIAL antibody, itch, destruction of small bile ducts); PRIMARY SCLEROSING CHOLANGITIS (men with ulcerative colitis; "beaded" bile ducts on MRCP, ↑cholangiocarcinoma risk).** These deepen the cirrhosis differential of [[cirrhosis-fatty-liver-portal-hypertension]] with their specific antibodies/tests.',
  ],

  mechanism: {
    title: 'Metabolic (Fe/Cu/α1-AT) + autoimmune (AIH/PBC/PSC) liver disease — each a signature test',
    steps: [
      { id: 's1', label: 'Haemochromatosis: iron overload (HFE) → bronze diabetes; ↑ferritin/transferrin sat', emphasis: 'key' },
      { id: 's2', label: 'Wilson: copper (ATP7B) → liver + neuro + Kayser-Fleischer; ↓ceruloplasmin', emphasis: 'key' },
      { id: 's3', label: 'α1-antitrypsin: misfolded protein → liver (PAS+) + panacinar emphysema', emphasis: 'key' },
      { id: 's4', label: 'Autoimmune hepatitis: ANA/anti-SMA, ↑IgG, steroid-responsive' },
      { id: 's5', label: 'PBC (anti-mitochondrial, itch) vs PSC (UC, beaded ducts, ↑cholangiocarcinoma)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cirrhosis + diabetes + skin pigmentation ("bronze diabetes")', mechanism: 'Hereditary haemochromatosis (iron overload)', significance: 'key' },
    { sign: 'Liver disease + movement disorder + Kayser–Fleischer rings', mechanism: 'Wilson disease (copper; low ceruloplasmin)', significance: 'key' },
    { sign: 'Liver disease with early panacinar emphysema', mechanism: 'α1-antitrypsin deficiency', significance: 'key' },
    { sign: 'Middle-aged woman with itch and anti-mitochondrial antibody', mechanism: 'Primary biliary cholangitis', significance: 'supportive' },
    { sign: 'Man with ulcerative colitis and "beaded" bile ducts on MRCP', mechanism: 'Primary sclerosing cholangitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tests for hereditary haemochromatosis', meaning: 'High ferritin and transferrin saturation (HFE gene)' },
    { clue: 'The tests for Wilson disease', meaning: 'Low ceruloplasmin, high urinary copper, Kayser–Fleischer rings' },
    { clue: 'The antibody of primary biliary cholangitis', meaning: 'Anti-mitochondrial antibody' },
    { clue: 'The inflammatory-bowel and cancer associations of PSC', meaning: 'Ulcerative colitis; cholangiocarcinoma' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These are the treatable/inherited causes of cirrhosis ([[cirrhosis-fatty-liver-portal-hypertension]]) — venesection (iron), chelation (copper), immunosuppression (autoimmune hepatitis), ursodeoxycholic acid (PBC) — each with a signature test. α1-antitrypsin links liver to lung ([[copd-emphysema-chronic-bronchitis]]); PSC to ulcerative colitis ([[inflammatory-bowel-disease]]) and cholangiocarcinoma. LFT patterns come from [[liver-function-tests-interpretation]].' },
  ],

  mnemonics: [
    { hook: 'Metals: "Haemochromatosis = irOn (bronze, ↑ferritin); Wilson = COpper (KF rings, ↓ceruloplasmin)"', expansion: ['α1-AT = liver + panacinar emphysema', 'Both risk HCC'] },
    { hook: 'Autoimmune bile ducts: "PBC = Anti-Mitochondrial (women, itch); PSC = UC + beaded ducts (men)"', expansion: ['AIH = ANA/anti-SMA, steroids', 'PSC → cholangiocarcinoma'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing PBC from PSC',
      wrongInstinct: 'Primary biliary cholangitis and primary sclerosing cholangitis are essentially the same disease',
      rightAnswer: 'They differ: PBC affects middle-aged WOMEN, is ANTI-MITOCHONDRIAL antibody positive and destroys small intrahepatic ducts; PSC affects MEN with ULCERATIVE COLITIS, shows "beaded" large ducts on MRCP and carries a high cholangiocarcinoma risk',
      why: 'The demographics, antibodies, duct level and cancer risk differ, driving different associations (UC in PSC) and surveillance (cholangiocarcinoma in PSC) — conflating them misses these.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young adult with liver disease, a movement disorder and greenish-brown corneal rings is found to have a low serum ceruloplasmin. The diagnosis is:',
      options: [
        { id: 'a', text: 'Hereditary haemochromatosis' },
        { id: 'b', text: 'Wilson disease' },
        { id: 'c', text: 'Primary biliary cholangitis' },
        { id: 'd', text: 'Autoimmune hepatitis' },
      ],
      answerId: 'b',
      explanation: 'Wilson disease is copper accumulation (ATP7B mutation) causing liver and neuropsychiatric disease with Kayser–Fleischer rings and a low ceruloplasmin; it is a treatable cause of cirrhosis (copper chelation).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A middle-aged woman with pruritus and fatigue has a cholestatic LFT pattern and a positive anti-mitochondrial antibody. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Primary sclerosing cholangitis' },
        { id: 'b', text: 'Primary biliary cholangitis' },
        { id: 'c', text: 'Haemochromatosis' },
        { id: 'd', text: 'Hepatitis A' },
      ],
      answerId: 'b',
      explanation: 'Primary biliary cholangitis is an autoimmune destruction of small intrahepatic bile ducts, typically in middle-aged women, with pruritus, a cholestatic pattern and a positive anti-mitochondrial antibody. PSC instead affects men with ulcerative colitis and shows beaded ducts.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default autoimmuneMetabolicLiverDisease;
