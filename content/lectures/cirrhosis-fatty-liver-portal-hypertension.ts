import type { Lecture } from '../../lib/types';
import { LIVER_DISEASE_PROGRESSION } from '../../lib/figures';

export const cirrhosisFattyLiverPortalHypertension: Lecture = {
  id: 'cirrhosis-fatty-liver-portal-hypertension',
  title: 'Fatty Liver, Cirrhosis & Portal Hypertension',
  system: 'gi',
  source: 'L3 — Pathology of the Liver',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L3 Liver Pathology' },
    { kind: 'disease', label: 'Cirrhosis' },
    { kind: 'exam', label: 'Portal hypertension' },
  ],

  highYield: [
    '**Cirrhosis is the end-stage of chronic liver injury: diffuse FIBROSIS plus REGENERATIVE NODULES replacing normal architecture — usually irreversible.** It produces two problems: **portal hypertension** and **hepatocellular failure**. Commonest causes: **alcohol, NAFLD/NASH, and chronic viral hepatitis (B and C).**',
    '**Fatty liver (steatosis) is the reversible first step.** **Alcoholic liver disease** progresses fatty change → **alcoholic hepatitis (Mallory–Denk bodies, neutrophils, ballooning; AST:ALT >2)** → cirrhosis (micronodular). **Non-alcoholic fatty liver disease (NAFLD/NASH)** is the hepatic manifestation of metabolic syndrome/insulin resistance and is now a leading cause of chronic liver disease.',
    '**Portal hypertension (raised portal venous pressure) opens porto-systemic shunts and causes the "classic four": oesophageal/gastric VARICES (haematemesis), ASCITES, SPLENOMEGALY (→ hypersplenism, thrombocytopenia), and caput medusae.** Ascites arises from portal hypertension + hypoalbuminaemia (low oncotic pressure) + sodium/water retention.',
    '**Hepatocellular failure gives: jaundice, hypoalbuminaemia (oedema), coagulopathy (↓clotting factors), hyperoestrogenism (spider naevi, palmar erythema, gynaecomastia), and hepatic ENCEPHALOPATHY (hyperammonaemia → asterixis/confusion).** Spontaneous bacterial peritonitis and hepatorenal syndrome are feared decompensations.',
    '**Metabolic/inherited causes to recognise: hereditary haemochromatosis (iron overload — bronze diabetes, HFE), Wilson disease (copper — Kayser–Fleischer rings, low ceruloplasmin), α1-antitrypsin deficiency, and the biliary cirrhoses (PBC — anti-mitochondrial antibody; PSC — with UC).** Any cirrhosis carries a substantial risk of hepatocellular carcinoma ([[hepatocellular-carcinoma-liver-tumors]]).',
  ],

  mechanism: {
    title: 'Steatosis → hepatitis → fibrosis → cirrhosis → portal HTN + liver failure',
    steps: [
      { id: 's1', label: 'Cirrhosis = diffuse fibrosis + regenerative nodules (irreversible)', emphasis: 'key' },
      { id: 's2', label: 'Steatosis (reversible) → alcoholic/NASH hepatitis → cirrhosis', emphasis: 'key' },
      { id: 's3', label: 'Portal HTN: varices, ascites, splenomegaly, caput medusae', emphasis: 'key' },
      { id: 's4', label: 'Liver failure: jaundice, ↓albumin, coagulopathy, encephalopathy', emphasis: 'danger' },
      { id: 's5', label: 'Causes incl. haemochromatosis (Fe), Wilson (Cu), α1-AT, PBC/PSC' },
    ],
  },

  examFindings: [
    { sign: 'Haematemesis from oesophageal varices', mechanism: 'Portal hypertension (porto-systemic shunt)', significance: 'key' },
    { sign: 'Ascites + splenomegaly + caput medusae', mechanism: 'Portal hypertension + hypoalbuminaemia', significance: 'key' },
    { sign: 'Spider naevi, palmar erythema, gynaecomastia', mechanism: 'Hyperoestrogenism of hepatocellular failure', significance: 'key' },
    { sign: 'Asterixis + confusion + high ammonia', mechanism: 'Hepatic encephalopathy', significance: 'key' },
    { sign: 'AST:ALT ratio >2 with Mallory–Denk bodies', mechanism: 'Alcoholic hepatitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two consequences of cirrhosis', meaning: 'Portal hypertension and hepatocellular failure' },
    { clue: 'The reversible first stage of alcoholic/metabolic liver disease', meaning: 'Steatosis (fatty change)' },
    { clue: 'The four features of portal hypertension', meaning: 'Varices, ascites, splenomegaly, caput medusae' },
    { clue: 'The inherited iron- and copper-overload cirrhoses', meaning: 'Haemochromatosis (Fe/HFE) and Wilson disease (Cu)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Decompensated cirrhosis (varices, ascites/SBP, encephalopathy) is managed pharmacologically ([[pharmacology-in-liver-disease]]); removing the cause (alcohol, treating HBV/HCV — [[hepatitis-b-c-d-chronic]]) can slow progression. NAFLD ties to obesity/metabolic syndrome ([[obesity-pathophysiology]]). Cirrhosis of any cause → screen for [[hepatocellular-carcinoma-liver-tumors]]. Precursor injury patterns are in [[hepatitis-liver-injury-patterns]].' },
  ],

  mnemonics: [
    { hook: 'Portal HTN "VASC": Varices, Ascites, Splenomegaly, Caput medusae', expansion: ['Varices → haematemesis', 'Ascites = portal HTN + low albumin'] },
    { hook: 'Liver failure: "jaundice, low albumin, coagulopathy, encephalopathy, oestrogen excess"', expansion: ['Spider naevi/palmar erythema/gynaecomastia', 'Asterixis + ↑ammonia'] },
  ],

  traps: [
    {
      questionCategory: 'Reversibility of liver disease',
      wrongInstinct: 'Fatty liver and cirrhosis are equally reversible if the cause is removed',
      rightAnswer: 'Steatosis (fatty change) is REVERSIBLE if the insult is removed, but established CIRRHOSIS (diffuse fibrosis with regenerative nodules) is generally IRREVERSIBLE — the point of no return is the architectural distortion of cirrhosis',
      why: 'Recognising that early fatty change can be reversed motivates intervention (alcohol cessation, weight loss, antivirals) before fibrosis becomes the fixed, nodular architecture of cirrhosis.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The two fundamental consequences of cirrhosis that produce most of its clinical features are:',
      options: [
        { id: 'a', text: 'Portal hypertension and hepatocellular failure' },
        { id: 'b', text: 'Haemolysis and cholelithiasis' },
        { id: 'c', text: 'Pancreatitis and malabsorption' },
        { id: 'd', text: 'Acute tubular necrosis and hyperkalaemia' },
      ],
      answerId: 'a',
      explanation: 'Cirrhosis distorts hepatic architecture, raising portal pressure (varices, ascites, splenomegaly) and reducing hepatocyte function (jaundice, hypoalbuminaemia, coagulopathy, encephalopathy). These two axes generate the clinical picture.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which finding best supports alcoholic (rather than viral) hepatitis?',
      options: [
        { id: 'a', text: 'ALT much higher than AST' },
        { id: 'b', text: 'AST:ALT ratio greater than 2 with Mallory–Denk bodies' },
        { id: 'c', text: 'Positive anti-mitochondrial antibody' },
        { id: 'd', text: 'Kayser–Fleischer rings' },
      ],
      answerId: 'b',
      explanation: 'Alcoholic hepatitis classically shows an AST:ALT ratio greater than 2 with hepatocyte ballooning, neutrophils and Mallory–Denk bodies. Anti-mitochondrial antibody indicates PBC, and Kayser–Fleischer rings indicate Wilson disease.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Liver disease progression', svg: LIVER_DISEASE_PROGRESSION, caption: 'Steatosis → steatohepatitis → fibrosis → cirrhosis, with portal hypertension and hepatocellular failure.' },
  ],
};

export default cirrhosisFattyLiverPortalHypertension;
