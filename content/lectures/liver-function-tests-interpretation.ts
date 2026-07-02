import type { Lecture } from '../../lib/types';

export const liverFunctionTestsInterpretation: Lecture = {
  id: 'liver-function-tests-interpretation',
  title: 'Interpreting Liver Function Tests',
  system: 'gi',
  source: 'L3 — Pathology of the Liver',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L3 Hepatobiliary Pathology' },
    { kind: 'investigation', label: 'LFTs' },
    { kind: 'exam', label: 'Hepatocellular vs cholestatic' },
  ],

  highYield: [
    '**"Liver function tests" mix markers of hepatocyte INJURY, of CHOLESTASIS, and of true SYNTHETIC FUNCTION — and separating them is the key skill.** The pattern points to the type of liver disease, and the true-function markers indicate its severity.',
    '**Hepatocyte INJURY: the transaminases AST and ALT leak from damaged hepatocytes. A HEPATOCELLULAR pattern = predominantly raised AST/ALT.** An AST:ALT ratio >2 suggests ALCOHOLIC liver disease ("A Scotch and Tonic"); ALT > AST is more typical of viral hepatitis and NAFLD. Very high transaminases (thousands) suggest acute viral/toxic/ischaemic injury.',
    '**CHOLESTASIS: alkaline phosphatase (ALP) and gamma-glutamyl transferase (GGT) rise when bile flow is impaired. A CHOLESTATIC pattern = predominantly raised ALP/GGT (± conjugated bilirubin).** A raised ALP with a raised GGT confirms a hepatobiliary (not bony) source of the ALP; obstruction (stones, tumour) and intrahepatic cholestasis produce this pattern.',
    '**True SYNTHETIC FUNCTION is measured by ALBUMIN and the prothrombin time/INR (clotting factors) — plus bilirubin handling.** A LOW albumin (long half-life) reflects chronic disease; a PROLONGED PT/INR (short half-life factors) is an early, sensitive marker of impaired synthesis and of severity in acute liver failure. These, not the transaminases, tell you how well the liver is actually working.',
    '**So the approach is: (1) is the pattern hepatocellular (AST/ALT) or cholestatic (ALP/GGT)? (2) how severe — check albumin, INR and bilirubin (synthetic function).** This turns a panel of numbers into a diagnosis and a severity assessment, complementing the injury patterns of [[hepatitis-liver-injury-patterns]] and the jaundice framework of [[bilirubin-metabolism-jaundice]].',
  ],

  mechanism: {
    title: 'Injury (AST/ALT) vs cholestasis (ALP/GGT); severity from albumin/INR/bilirubin',
    steps: [
      { id: 's1', label: 'LFTs mix injury, cholestasis and true synthetic function', emphasis: 'key' },
      { id: 's2', label: 'Hepatocellular = ↑AST/ALT (AST:ALT >2 → alcohol; ALT>AST → viral/NAFLD)', emphasis: 'key' },
      { id: 's3', label: 'Cholestatic = ↑ALP/GGT (± conjugated bilirubin); GGT confirms hepatic ALP', emphasis: 'key' },
      { id: 's4', label: 'Synthetic function = ALBUMIN + PT/INR (+ bilirubin) = severity', emphasis: 'key' },
      { id: 's5', label: 'Approach: pattern first, then severity (albumin/INR)' },
    ],
  },

  examFindings: [
    { sign: 'Predominantly raised AST and ALT', mechanism: 'Hepatocellular injury pattern', significance: 'key' },
    { sign: 'AST:ALT ratio greater than 2', mechanism: 'Alcoholic liver disease', significance: 'key' },
    { sign: 'Predominantly raised ALP and GGT', mechanism: 'Cholestatic pattern (biliary obstruction/cholestasis)', significance: 'key' },
    { sign: 'Prolonged PT/INR and low albumin', mechanism: 'Impaired hepatic synthetic function (severity)', significance: 'key' },
    { sign: 'Raised ALP with a normal GGT', mechanism: 'Non-hepatic (e.g. bony) ALP source', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The markers of hepatocyte injury', meaning: 'AST and ALT (transaminases)' },
    { clue: 'The markers of cholestasis', meaning: 'ALP and GGT (± conjugated bilirubin)' },
    { clue: 'The true markers of hepatic synthetic function', meaning: 'Albumin and prothrombin time/INR' },
    { clue: 'The LFT pattern of alcoholic liver disease', meaning: 'AST:ALT ratio > 2' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Reading LFTs by pattern (hepatocellular vs cholestatic) plus synthetic function (albumin/INR) diagnoses and grades liver disease — hepatitis/cirrhosis ([[hepatitis-liver-injury-patterns]], [[cirrhosis-fatty-liver-portal-hypertension]]) vs obstruction ([[gallstones-cholecystitis-cholangitis]]). INR/albumin gauge severity and prognosis (and guide management in [[pharmacology-in-liver-disease]]); the bilirubin fraction ties to [[bilirubin-metabolism-jaundice]].' },
  ],

  mnemonics: [
    { hook: 'Patterns: "AST/ALT = hepatocellular (injury); ALP/GGT = cholestatic"', expansion: ['AST:ALT >2 = alcohol', 'GGT confirms hepatic ALP source'] },
    { hook: 'True function = "Albumin + INR" (not the transaminases)', expansion: ['INR = early/sensitive (short-lived factors)', 'Low albumin = chronic'] },
  ],

  traps: [
    {
      questionCategory: 'What "liver function tests" actually measure',
      wrongInstinct: 'A high AST/ALT means the liver is failing to function',
      rightAnswer: 'AST/ALT measure hepatocyte INJURY (enzyme leak), NOT synthetic FUNCTION — true liver function is reflected by ALBUMIN and the PT/INR (and bilirubin handling); a liver can have very high transaminases yet preserved function, or normal transaminases with failing synthesis',
      why: 'Confusing injury markers with function markers misjudges severity; a failing liver is identified by falling albumin and rising INR, not by how high the transaminases are.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which combination best reflects the liver\'s true synthetic function (and thus severity of liver failure)?',
      options: [
        { id: 'a', text: 'AST and ALT' },
        { id: 'b', text: 'Serum albumin and the prothrombin time/INR' },
        { id: 'c', text: 'ALP and GGT' },
        { id: 'd', text: 'Unconjugated bilirubin alone' },
      ],
      answerId: 'b',
      explanation: 'Albumin and the prothrombin time/INR reflect the liver\'s synthetic capacity; a low albumin (chronic) and prolonged INR (acute, sensitive) indicate impaired function. Transaminases measure injury and ALP/GGT measure cholestasis, not function.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Predominantly elevated alkaline phosphatase and GGT, with conjugated hyperbilirubinaemia, indicate which pattern of liver test abnormality?',
      options: [
        { id: 'a', text: 'Hepatocellular' },
        { id: 'b', text: 'Cholestatic' },
        { id: 'c', text: 'Synthetic failure' },
        { id: 'd', text: 'Normal' },
      ],
      answerId: 'b',
      explanation: 'A rise in ALP and GGT (with conjugated bilirubin) is a cholestatic pattern, indicating impaired bile flow (biliary obstruction or intrahepatic cholestasis); the raised GGT confirms the ALP is of hepatobiliary origin.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default liverFunctionTestsInterpretation;
