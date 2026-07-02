import type { Lecture } from '../../lib/types';
import { BILIRUBIN_METABOLISM } from '../../lib/figures';

export const bilirubinMetabolismJaundice: Lecture = {
  id: 'bilirubin-metabolism-jaundice',
  title: 'Bilirubin Metabolism & Jaundice',
  system: 'gi',
  source: 'L3 — Pathology of the Liver',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L3 Hepatobiliary Pathology' },
    { kind: 'mechanism', label: 'Bilirubin pathway' },
    { kind: 'exam', label: 'Conjugated vs unconjugated' },
  ],

  highYield: [
    '**Bilirubin comes from the breakdown of haem (old red cells). Unconjugated bilirubin is fat-soluble, travels bound to albumin, and is NOT water-soluble (so it does NOT appear in urine).** The liver conjugates it (via UGT, glucuronyl transferase) to make water-soluble CONJUGATED bilirubin, which is excreted in bile → gut (urobilinogen/stercobilin) with some reabsorbed.',
    '**Jaundice (yellow skin/sclera, clinically visible when bilirubin >~2–3 mg/dL) is classified by which bilirubin fraction rises and by the level of the lesion: PRE-hepatic, HEPATIC, or POST-hepatic.** This framework, plus urine/stool colour, localises the problem — the single most useful clinical reasoning for jaundice.',
    '**PRE-hepatic (haemolytic) jaundice raises UNCONJUGATED bilirubin (excess production).** Because unconjugated bilirubin is not water-soluble, there is **no bilirubin in the urine (acholuric)**; stools may be dark. **Gilbert syndrome** (a common, benign mild reduction in UGT) also causes unconjugated hyperbilirubinaemia, worse with fasting/illness; Crigler–Najjar is the severe form.',
    '**POST-hepatic (obstructive) jaundice raises CONJUGATED bilirubin, which IS water-soluble → it spills into urine (DARK urine); reduced bile flow gives PALE stools and PRURITUS** (from a gallstone or tumour obstructing the duct — see [[gallstones-cholecystitis-cholangitis]]). Hepatic (hepatocellular) jaundice raises BOTH fractions (hepatitis, cirrhosis) with raised transaminases.',
    '**The urine/stool clue is high-yield: conjugated (water-soluble) bilirubin appears in urine, so dark urine + pale stools = obstruction; unconjugated hyperbilirubinaemia gives no bilirubinuria.** Neonatal jaundice is usually physiological but very high unconjugated bilirubin risks kernicterus. This underlies the cholestatic patterns seen on [[liver-function-tests-interpretation]] and [[hepatitis-liver-injury-patterns]].',
  ],

  mechanism: {
    title: 'Haem → unconjugated (fat-soluble) → UGT → conjugated (water-soluble) → bile; classify jaundice',
    steps: [
      { id: 's1', label: 'Unconjugated = fat-soluble, albumin-bound, NOT in urine; UGT conjugates it', emphasis: 'key' },
      { id: 's2', label: 'Pre-hepatic (haemolysis/Gilbert): ↑unconjugated, no bilirubinuria', emphasis: 'key' },
      { id: 's3', label: 'Hepatic (hepatitis/cirrhosis): mixed rise, ↑AST/ALT', emphasis: 'key' },
      { id: 's4', label: 'Post-hepatic (obstruction): ↑conjugated → dark urine + pale stool + pruritus', emphasis: 'key' },
      { id: 's5', label: 'Conjugated is water-soluble → appears in urine (the key clue)' },
    ],
  },

  examFindings: [
    { sign: 'Unconjugated hyperbilirubinaemia with no bilirubin in the urine', mechanism: 'Pre-hepatic (haemolysis) or Gilbert syndrome', significance: 'key' },
    { sign: 'Conjugated hyperbilirubinaemia + dark urine + pale stools + pruritus', mechanism: 'Post-hepatic (obstructive) jaundice', significance: 'key' },
    { sign: 'Both fractions raised with high AST/ALT', mechanism: 'Hepatocellular (hepatic) jaundice', significance: 'key' },
    { sign: 'Mild unconjugated jaundice worse with fasting/illness', mechanism: 'Gilbert syndrome (benign ↓UGT)', significance: 'supportive' },
    { sign: 'Severe neonatal unconjugated hyperbilirubinaemia', mechanism: 'Risk of kernicterus', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Why unconjugated bilirubin does not appear in urine', meaning: 'It is fat-soluble (albumin-bound), not water-soluble' },
    { clue: 'The bilirubin fraction raised in obstruction', meaning: 'Conjugated bilirubin (water-soluble → dark urine)' },
    { clue: 'The urine/stool pattern of biliary obstruction', meaning: 'Dark urine + pale stools (± pruritus)' },
    { clue: 'The benign cause of mild unconjugated hyperbilirubinaemia', meaning: 'Gilbert syndrome' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The pre/hepatic/post framework directs the work-up (haemolysis screen vs LFTs vs biliary imaging) — obstructive jaundice points to gallstones/tumour ([[gallstones-cholecystitis-cholangitis]], [[pancreatic-carcinoma]]), hepatocellular to hepatitis/cirrhosis ([[hepatitis-liver-injury-patterns]]). It is read alongside the LFT patterns of [[liver-function-tests-interpretation]]; the conjugated/urine clue is the highest-yield discriminator.' },
  ],

  mnemonics: [
    { hook: 'Conjugated = "Comes out in urine" (water-soluble → dark urine); unconjugated stays in blood', expansion: ['Obstruction: dark urine + pale stool', 'Haemolysis/Gilbert: no bilirubinuria'] },
    { hook: 'Three jaundices: "Pre (unconjugated), Hepatic (mixed), Post (conjugated/obstruct)"', expansion: ['Gilbert = benign ↓UGT', 'Dubin-Johnson = conjugated (benign)'] },
  ],

  traps: [
    {
      questionCategory: 'Bilirubin in the urine',
      wrongInstinct: 'Any jaundice will produce bilirubin in the urine',
      rightAnswer: 'Only CONJUGATED (water-soluble) bilirubin appears in urine; UNCONJUGATED hyperbilirubinaemia (haemolysis, Gilbert) is "acholuric" — no bilirubin in the urine — so bilirubinuria points specifically to a conjugated (hepatic/obstructive) cause',
      why: 'The solubility difference means the urine finding localises the jaundice: bilirubinuria excludes a pure pre-hepatic cause and points toward hepatocellular or obstructive disease.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with obstructive jaundice from a bile-duct stone would be expected to have:',
      options: [
        { id: 'a', text: 'Raised unconjugated bilirubin with no bilirubin in the urine' },
        { id: 'b', text: 'Raised conjugated bilirubin with dark urine and pale stools' },
        { id: 'c', text: 'Normal bilirubin' },
        { id: 'd', text: 'Raised unconjugated bilirubin with dark stools only' },
      ],
      answerId: 'b',
      explanation: 'Obstruction raises conjugated (water-soluble) bilirubin, which spills into the urine (dark urine), while reduced bile flow to the gut makes stools pale; pruritus is common. Unconjugated hyperbilirubinaemia does not cause bilirubinuria.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Unconjugated bilirubin does not appear in the urine because it is:',
      options: [
        { id: 'a', text: 'Too large to be filtered' },
        { id: 'b', text: 'Fat-soluble and tightly bound to albumin (not water-soluble)' },
        { id: 'c', text: 'Actively reabsorbed by the kidney' },
        { id: 'd', text: 'Destroyed in the bloodstream' },
      ],
      answerId: 'b',
      explanation: 'Unconjugated bilirubin is lipid-soluble and carried bound to albumin, so it is neither filtered nor excreted in urine; only conjugated (water-soluble) bilirubin appears in urine, which is why bilirubinuria indicates a conjugated cause.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Bilirubin metabolism & jaundice', svg: BILIRUBIN_METABOLISM, caption: 'Haem → unconjugated → conjugated → bile, and the pre-hepatic, hepatic and post-hepatic jaundice patterns.' },
  ],
};

export default bilirubinMetabolismJaundice;
