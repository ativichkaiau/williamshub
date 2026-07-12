import type { Lecture } from '../../lib/types';

export const fcp1JaundiceApproach: Lecture = {
  id: 'fcp1-jaundice-approach',
  title: 'Approach to Jaundice',
  system: 'clinical',
  source: 'L18 — Jaundice',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L18 Jaundice' },
    { kind: 'mechanism', label: 'Prehepatic · hepatic · posthepatic' },
    { kind: 'investigation', label: 'LFT pattern · ultrasound' },
    { kind: 'exam', label: 'Courvoisier sign' },
  ],

  highYield: [
    'Classify jaundice as **prehepatic** (unconjugated, haemolysis), **hepatic/hepatocellular** (mixed, raised transaminases), or **posthepatic/cholestatic** (conjugated, raised ALP and GGT). This split, built on [[fcp1-jaundice-bilirubin-metabolism]], drives the workup.',
    'The **LFT pattern** discriminates: **hepatocellular** injury raises **ALT and AST** far more than ALP (viral, alcohol, drugs, ischaemia); **cholestatic** disease raises **ALP and GGT** more than the transaminases (stones, stricture, tumour) — see [[fcp1-jaundice-cholestasis]].',
    '**History** matters: **dark urine + pale stools + pruritus** point to cholestasis; take an alcohol and drug history (including paracetamol) and viral risk factors, and note **painless vs painful** jaundice. Painless jaundice with weight loss is malignant until proven otherwise.',
    '**First tests**: LFTs with **split bilirubin**, FBC and reticulocytes, coagulation (**PT/INR** reflects synthetic function), and an **abdominal ultrasound** — dilated bile ducts mean obstruction and shift you toward [[fcp1-jaundice-cholestasis]] and [[fcp1-abdominal-mass-differential]].',
    '**Ascending cholangitis** — the **Charcot triad** of fever, right upper quadrant pain and jaundice — is an emergency needing antibiotics and biliary drainage; never sit on a febrile, jaundiced patient.',
  ],

  mechanism: {
    title: 'Split bilirubin, then the LFT pattern, then imaging',
    steps: [
      { id: 's1', label: 'Split bilirubin: prehepatic vs hepatic vs posthepatic', emphasis: 'key' },
      { id: 's2', label: 'LFT pattern: hepatocellular vs cholestatic', emphasis: 'key' },
      { id: 's3', label: 'History and exam: urine/stool colour, pain, drugs, alcohol', emphasis: 'key' },
      { id: 's4', label: 'Ultrasound: dilated ducts = obstruction', emphasis: 'key' },
      { id: 's5', label: 'Fever + RUQ pain + jaundice = cholangitis emergency', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Palpable, non-tender gallbladder with painless jaundice (Courvoisier sign)', mechanism: 'Malignant distal biliary obstruction', significance: 'key' },
    { sign: 'Dark urine, pale stools and scratch marks', mechanism: 'Cholestasis with pruritus from retained bile salts', significance: 'key' },
    { sign: 'Fever with right upper quadrant tenderness in a jaundiced patient', mechanism: 'Ascending cholangitis', significance: 'key' },
    { sign: 'Stigmata of chronic liver disease with splenomegaly', mechanism: 'Cirrhosis and portal hypertension (hepatocellular)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ALT and AST much higher than ALP', meaning: 'Hepatocellular pattern (viral, alcohol, drugs, ischaemia)' },
    { clue: 'ALP and GGT much higher than the transaminases', meaning: 'Cholestatic pattern → image the biliary tree' },
    { clue: 'Abdominal ultrasound showing dilated bile ducts', meaning: 'Mechanical obstruction; proceed to MRCP or ERCP' },
    { clue: 'Prolonged PT/INR', meaning: 'Impaired hepatic synthetic function in significant liver disease' },
  ],

  treatment: [
    { logic: 'Direct treatment by category', detail: 'Prehepatic → treat the haemolysis; hepatic → remove the insult and support; posthepatic → relieve the obstruction.' },
    { logic: 'Emergency drainage for cholangitis', detail: 'IV antibiotics plus urgent biliary decompression (ERCP) for a septic, obstructed biliary tree.' },
  ],

  mnemonics: [
    { hook: 'Split the bilirubin, read the LFT pattern, then ultrasound', expansion: ['ALT high = hepatocellular; ALP high = cholestatic', 'Fever + RUQ + jaundice = cholangitis'] },
  ],

  traps: [
    {
      questionCategory: 'Febrile jaundice',
      wrongInstinct: 'Treat fever with jaundice and RUQ pain as simple viral hepatitis',
      rightAnswer: 'Recognise the Charcot triad as ascending cholangitis needing antibiotics and urgent biliary drainage',
      why: 'Obstructed, infected bile is rapidly fatal without decompression.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A jaundiced patient has ALP and GGT markedly elevated with only a mildly raised ALT. This LFT pattern indicates:',
      options: [
        { id: 'a', text: 'A hepatocellular process' },
        { id: 'b', text: 'A cholestatic (obstructive) process' },
        { id: 'c', text: 'Pure haemolysis' },
        { id: 'd', text: 'Gilbert syndrome' },
      ],
      answerId: 'b',
      explanation: 'A disproportionate rise in ALP and GGT indicates cholestasis, prompting ultrasound of the biliary tree to look for obstruction.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'A 70-year-old presents with painless jaundice, weight loss, and a palpable non-tender gallbladder. This combination most strongly suggests:',
      options: [
        { id: 'a', text: 'Gallstones in the cystic duct' },
        { id: 'b', text: 'Malignant distal biliary obstruction' },
        { id: 'c', text: 'Viral hepatitis' },
        { id: 'd', text: 'Haemolytic anaemia' },
      ],
      answerId: 'b',
      explanation: 'The Courvoisier sign (painless jaundice with a palpable gallbladder) suggests malignant obstruction, classically pancreatic head cancer, rather than stones.',
      tests: 'exam',
    },
  ],
};

export default fcp1JaundiceApproach;
