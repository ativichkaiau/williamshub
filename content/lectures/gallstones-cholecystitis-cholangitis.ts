import type { Lecture } from '../../lib/types';
import { BILIARY_DISEASE } from '../../lib/figures';

export const gallstonesCholecystitisCholangitis: Lecture = {
  id: 'gallstones-cholecystitis-cholangitis',
  title: 'Gallstones, Cholecystitis & Cholangitis',
  system: 'gi',
  source: 'L3 — Pathology of the Liver',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L3 Hepatobiliary Pathology' },
    { kind: 'disease', label: 'Gallstones' },
    { kind: 'exam', label: 'Charcot triad' },
  ],

  highYield: [
    '**Gallstones (cholelithiasis) are common; their clinical syndromes depend on WHERE the stone lodges.** Two types: **cholesterol stones** (the classic risk factors are the "5 Fs": Fat, Female, Forty, Fertile, Family history) and **pigment stones** (chronic haemolysis → black stones; biliary infection → brown stones). Most stones are ASYMPTOMATIC.',
    '**Biliary colic = a stone transiently obstructing the cystic duct/neck → episodic RUQ or epigastric pain (often after a fatty meal), WITHOUT fever or inflammation.** It resolves when the stone falls back. **Acute cholecystitis = sustained cystic-duct obstruction + inflammation → constant RUQ pain, fever, and a positive MURPHY sign** (arrest of inspiration on RUQ palpation).',
    '**When a stone passes into the common bile duct (choledocholithiasis) it causes OBSTRUCTIVE (conjugated) JAUNDICE with pale stools and dark urine; if that obstructed duct becomes infected, ASCENDING CHOLANGITIS develops** — a surgical/endoscopic emergency. **Charcot triad = fever + jaundice + RUQ pain; Reynolds pentad adds hypotension + confusion (septic shock).**',
    '**Other complications: gallstone PANCREATITIS (a stone impacted at the ampulla — see [[acute-chronic-pancreatitis]]), gallbladder empyema, gallstone ileus, and gallbladder carcinoma (associated with a calcified "porcelain" gallbladder).** Ultrasound is the first-line test (stones, wall thickening, duct dilatation).',
    '**Management by syndrome: symptomatic gallstones/cholecystitis → cholecystectomy; a CBD stone/cholangitis → antibiotics + ERCP to drain and remove the stone.** Cholangitis (infected obstruction) must be decompressed urgently. This biliary disease is a major cause of obstructive jaundice ([[bilirubin-metabolism-jaundice]]) and RUQ pain, and connects to pancreatitis and cholangiocarcinoma ([[liver-flukes-cholangiocarcinoma]]).',
  ],

  mechanism: {
    title: 'Stone location sets the syndrome: cystic duct (cholecystitis) vs CBD (jaundice/cholangitis)',
    steps: [
      { id: 's1', label: 'Stones: cholesterol (5 Fs) or pigment (haemolysis/infection); often silent', emphasis: 'key' },
      { id: 's2', label: 'Biliary colic = transient cystic-duct block (pain, no fever)', emphasis: 'key' },
      { id: 's3', label: 'Cholecystitis = sustained cystic-duct block + inflammation (Murphy +)', emphasis: 'key' },
      { id: 's4', label: 'CBD stone → obstructive jaundice; infected → cholangitis (Charcot triad)', emphasis: 'danger' },
      { id: 's5', label: 'Cholecystectomy (stones); ERCP + antibiotics (CBD stone/cholangitis)' },
    ],
  },

  examFindings: [
    { sign: 'Episodic RUQ pain after fatty meals, no fever', mechanism: 'Biliary colic (transient cystic-duct obstruction)', significance: 'key' },
    { sign: 'Constant RUQ pain + fever + positive Murphy sign', mechanism: 'Acute cholecystitis', significance: 'key' },
    { sign: 'Fever + jaundice + RUQ pain (Charcot triad)', mechanism: 'Ascending cholangitis (infected obstructed duct)', significance: 'key' },
    { sign: 'Obstructive jaundice with pale stools and dark urine', mechanism: 'Common bile duct stone (choledocholithiasis)', significance: 'key' },
    { sign: 'Acute pancreatitis from an ampullary stone', mechanism: 'Gallstone pancreatitis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The sign of acute cholecystitis on examination', meaning: 'Positive Murphy sign' },
    { clue: 'The triad of ascending cholangitis', meaning: 'Charcot triad: fever + jaundice + RUQ pain' },
    { clue: 'The first-line imaging for gallstone disease', meaning: 'Abdominal ultrasound' },
    { clue: 'The procedure to relieve a CBD stone/cholangitis', meaning: 'ERCP (± antibiotics)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Biliary disease is a leading cause of RUQ pain and obstructive jaundice ([[bilirubin-metabolism-jaundice]]); cholangitis is an emergency needing urgent duct drainage (ERCP). Gallstone pancreatitis links to [[acute-chronic-pancreatitis]], and chronic biliary inflammation to cholangiocarcinoma ([[liver-flukes-cholangiocarcinoma]]). LFTs show a cholestatic pattern ([[liver-function-tests-interpretation]]).' },
  ],

  mnemonics: [
    { hook: 'Cholesterol stones = "5 Fs": Fat, Female, Forty, Fertile, Family', expansion: ['Pigment: haemolysis (black) / infection (brown)', 'Most stones silent'] },
    { hook: 'Cholangitis "Charcot triad": Fever + Jaundice + RUQ pain (Reynolds adds shock + confusion)', expansion: ['Emergency → drain the duct (ERCP)', 'Antibiotics + decompression'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing biliary colic, cholecystitis and cholangitis',
      wrongInstinct: 'RUQ pain from gallstones is all the same regardless of fever or jaundice',
      rightAnswer: 'They are distinct: biliary COLIC = transient pain, NO fever; CHOLECYSTITIS = sustained pain + fever + Murphy sign (cystic-duct level); CHOLANGITIS = fever + jaundice + RUQ pain (Charcot triad, CBD obstruction + infection) — an emergency needing duct drainage',
      why: 'The presence of fever and jaundice escalates the diagnosis from colic to cholecystitis to cholangitis, each with different urgency and management (analgesia vs cholecystectomy vs urgent ERCP).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with gallstones presents with fever, jaundice and right upper quadrant pain (Charcot triad). This indicates:',
      options: [
        { id: 'a', text: 'Biliary colic' },
        { id: 'b', text: 'Ascending cholangitis' },
        { id: 'c', text: 'Uncomplicated cholelithiasis' },
        { id: 'd', text: 'Gastritis' },
      ],
      answerId: 'b',
      explanation: 'Fever, jaundice and RUQ pain (Charcot triad) indicate ascending cholangitis — infection of an obstructed common bile duct. It is an emergency requiring antibiotics and urgent biliary drainage (ERCP); Reynolds pentad adds hypotension and confusion.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Acute cholecystitis is distinguished from simple biliary colic mainly by the presence of:',
      options: [
        { id: 'a', text: 'Pain after fatty meals' },
        { id: 'b', text: 'Sustained inflammation with fever and a positive Murphy sign' },
        { id: 'c', text: 'Gallstones on ultrasound' },
        { id: 'd', text: 'A family history of gallstones' },
      ],
      answerId: 'b',
      explanation: 'Biliary colic is transient pain from a stone temporarily obstructing the cystic duct, without inflammation. Sustained obstruction produces acute cholecystitis with fever, constant pain and a positive Murphy sign.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Gallstone disease', svg: BILIARY_DISEASE, caption: 'How the syndrome depends on where the stone lodges — colic, cholecystitis, choledocholithiasis, cholangitis, pancreatitis.' },
  ],
};

export default gallstonesCholecystitisCholangitis;
