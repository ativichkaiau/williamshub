import type { Lecture } from '../../lib/types';

export const hepatitisLiverInjuryPatterns: Lecture = {
  id: 'hepatitis-liver-injury-patterns',
  title: 'Patterns of Hepatic Injury & Hepatitis',
  system: 'gi',
  source: 'L3 — Pathology of the Liver',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L3 Liver Pathology' },
    { kind: 'disease', label: 'Hepatitis' },
    { kind: 'exam', label: 'Jaundice' },
  ],

  highYield: [
    '**The liver responds to injury in a limited number of patterns — degeneration/apoptosis (Councilman bodies), inflammation (hepatitis), fibrosis, and regeneration — and the clinical picture reflects hepatocellular injury and/or cholestasis.** Aminotransferases (AST/ALT) mark hepatocyte injury; ALP/GGT and bilirubin mark cholestasis.',
    '**Jaundice (raised bilirubin >~2–3 mg/dL) is classified by the bilirubin type: unconjugated (prehepatic — haemolysis; or defective conjugation — Gilbert/Crigler-Najjar) vs conjugated (hepatocellular or obstructive/cholestatic).** Conjugated hyperbilirubinaemia spills into urine (dark urine); obstruction gives pale stools and pruritus.',
    '**Acute hepatitis shows spotty hepatocyte necrosis, apoptotic (Councilman) bodies, and a lobular inflammatory infiltrate — usually self-limited.** Massive necrosis → **acute (fulminant) liver failure** (encephalopathy + coagulopathy within weeks); classic causes include **paracetamol overdose, viral hepatitis and drug reactions**.',
    '**Chronic hepatitis (>6 months) is defined by portal inflammation with INTERFACE HEPATITIS (inflammation spilling across the limiting plate) and progressive fibrosis — the pathway to cirrhosis.** Major causes: **chronic viral hepatitis (B, C), autoimmune hepatitis (ANA/anti-smooth-muscle, IgG↑, responds to steroids), and metabolic (NAFLD, Wilson, haemochromatosis, α1-antitrypsin).**',
    '**Grade (necroinflammatory activity) and stage (fibrosis) drive prognosis.** The key concept is that ongoing hepatocyte injury + inflammation drives fibrosis; interrupting the cause (antivirals, immunosuppression, removing toxins) can halt or reverse early disease, whereas established cirrhosis is usually irreversible ([[cirrhosis-fatty-liver-portal-hypertension]]).',
  ],

  mechanism: {
    title: 'Injury → inflammation → fibrosis; acute (self-limited/fulminant) vs chronic (interface)',
    steps: [
      { id: 's1', label: 'Injury markers: AST/ALT (hepatocyte) vs ALP/GGT/bilirubin (cholestasis)', emphasis: 'key' },
      { id: 's2', label: 'Jaundice: unconjugated (haemolysis/Gilbert) vs conjugated (hepatic/obstructive)', emphasis: 'key' },
      { id: 's3', label: 'Acute hepatitis: spotty necrosis, Councilman bodies; may become fulminant', emphasis: 'danger' },
      { id: 's4', label: 'Chronic (>6 mo): portal inflammation + INTERFACE hepatitis → fibrosis', emphasis: 'key' },
      { id: 's5', label: 'Causes: viral B/C, autoimmune, metabolic (NAFLD/Wilson/HFE/α1-AT)' },
    ],
  },

  examFindings: [
    { sign: 'Raised AST/ALT with apoptotic (Councilman) bodies', mechanism: 'Acute hepatocellular injury/hepatitis', significance: 'key' },
    { sign: 'Interface hepatitis with portal inflammation and fibrosis', mechanism: 'Chronic hepatitis progressing to cirrhosis', significance: 'key' },
    { sign: 'Conjugated hyperbilirubinaemia + dark urine + pale stools', mechanism: 'Cholestasis/biliary obstruction', significance: 'key' },
    { sign: 'Encephalopathy + coagulopathy within weeks of onset', mechanism: 'Acute (fulminant) liver failure', significance: 'key' },
    { sign: 'ANA/anti-smooth-muscle antibodies + high IgG, steroid-responsive', mechanism: 'Autoimmune hepatitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The enzymes indicating hepatocyte injury', meaning: 'AST and ALT (aminotransferases)' },
    { clue: 'The enzymes/marker indicating cholestasis', meaning: 'ALP, GGT and conjugated bilirubin' },
    { clue: 'The histological hallmark of chronic hepatitis progressing to cirrhosis', meaning: 'Interface hepatitis with fibrosis' },
    { clue: 'The commonest drug cause of fulminant hepatic failure', meaning: 'Paracetamol (acetaminophen) overdose' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Identifying and removing the cause (antivirals for HBV/HCV — [[hepatitis-b-c-d-chronic]], immunosuppression for autoimmune, N-acetylcysteine for paracetamol) can halt progression before cirrhosis. Persistent injury drives the fibrosis/cirrhosis of [[cirrhosis-fatty-liver-portal-hypertension]] and ultimately [[hepatocellular-carcinoma-liver-tumors]]. Cholestasis links to biliary/pancreatic obstruction ([[pancreatic-carcinoma]]).' },
  ],

  mnemonics: [
    { hook: 'Enzymes: "AST/ALT = hepatocytes; ALP/GGT = cholestasis"', expansion: ['AST:ALT >2 → alcohol', 'ALT > AST → viral/NAFLD'] },
    { hook: 'Chronic hepatitis hallmark = "interface hepatitis" (crossing the limiting plate)', expansion: ['Grade = inflammation, Stage = fibrosis', 'Councilman body = apoptotic hepatocyte'] },
  ],

  traps: [
    {
      questionCategory: 'Classifying jaundice',
      wrongInstinct: 'All jaundice reflects liver cell failure',
      rightAnswer: 'Jaundice must be split by bilirubin type: UNCONJUGATED (prehepatic haemolysis or impaired conjugation, e.g. Gilbert) vs CONJUGATED (hepatocellular injury or post-hepatic obstruction) — only some reflect hepatocyte failure',
      why: 'The conjugated/unconjugated distinction localises the lesion (before, in, or after the hepatocyte) and directs completely different work-ups — e.g. haemolysis screen vs biliary imaging.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The histological hallmark of chronic hepatitis that signals progression toward cirrhosis is:',
      options: [
        { id: 'a', text: 'Spotty lobular necrosis only' },
        { id: 'b', text: 'Interface hepatitis (inflammation crossing the limiting plate) with fibrosis' },
        { id: 'c', text: 'Macrovesicular steatosis' },
        { id: 'd', text: 'Mallory–Denk bodies' },
      ],
      answerId: 'b',
      explanation: 'Chronic hepatitis is characterised by portal inflammation that spills across the limiting plate (interface hepatitis) with progressive fibrosis — the pathway toward cirrhosis. Grade reflects inflammation and stage reflects fibrosis.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient has conjugated hyperbilirubinaemia with dark urine and pale stools. This pattern indicates:',
      options: [
        { id: 'a', text: 'Haemolysis (prehepatic, unconjugated)' },
        { id: 'b', text: 'Cholestasis/biliary obstruction' },
        { id: 'c', text: 'Gilbert syndrome' },
        { id: 'd', text: 'Normal physiology' },
      ],
      answerId: 'b',
      explanation: 'Conjugated bilirubin is water-soluble and appears in urine (dark urine); reduced bile flow into the gut produces pale stools — the pattern of cholestasis/obstruction. Unconjugated hyperbilirubinaemia (haemolysis, Gilbert) does not cause bilirubinuria.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hepatitisLiverInjuryPatterns;
