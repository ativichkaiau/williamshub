import type { Lecture } from '../../lib/types';

export const hepatitisBcdChronic: Lecture = {
  id: 'hepatitis-b-c-d-chronic',
  title: 'Hepatitis B, C & D (Blood-Borne, Chronic)',
  system: 'gi',
  source: 'L11 — Viral Hepatitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L11 Viral Hepatitis' },
    { kind: 'disease', label: 'Hepatitis B / C' },
    { kind: 'exam', label: 'HBV serology' },
  ],

  highYield: [
    '**Hepatitis B, C and D are BLOOD-BORNE (also sexual and vertical for HBV) and can become CHRONIC, leading to cirrhosis and hepatocellular carcinoma.** This chronic potential — absent in the enteric A/E — makes them the major viral causes of chronic liver disease worldwide.',
    '**Hepatitis B (HBV, a DNA hepadnavirus) transmission is blood, sexual and VERTICAL (mother-to-child, a key route in endemic areas).** Chronicity risk is INVERSELY related to age at infection — **~90% of neonatal infections become chronic vs <5% of adult infections** — which is why birth-dose vaccination matters. HBV can cause HCC even without cirrhosis (genome integration).',
    '**HBV serology is high-yield: HBsAg = active infection (chronic if >6 months); anti-HBs = immunity (recovery OR vaccination); anti-HBc IgM = acute/window; HBeAg and HBV DNA = high replication/infectivity.** A VACCINATED person has anti-HBs POSITIVE but anti-HBc NEGATIVE (no exposure to core antigen) — a classic distinguishing point.',
    '**Hepatitis C (HCV, an RNA flavivirus) is mainly blood-borne (injecting drug use, transfusion) and frequently becomes CHRONIC (majority), silently progressing to cirrhosis/HCC — but it is now CURABLE with direct-acting antivirals (DAAs).** There is no HCV vaccine, so screening and treatment are the strategy.',
    '**Hepatitis D (HDV) is a defective virus that requires HBsAg to replicate — it only infects those with HBV (co-infection or superinfection), worsening disease.** Prevention/treatment: **HBV VACCINE prevents B (and thereby D); HBV is treated with antivirals (tenofovir/entecavir) or interferon; HCV is cured with DAAs.** Chronic infection mandates surveillance for HCC ([[hepatocellular-carcinoma-liver-tumors]]).',
  ],

  mechanism: {
    title: 'Blood-borne, chronic → cirrhosis/HCC; HBV serology; HCV curable; HDV needs HBV',
    steps: [
      { id: 's1', label: 'B, C, D = blood-borne, can be chronic → cirrhosis/HCC', emphasis: 'key' },
      { id: 's2', label: 'HBV: blood/sexual/vertical; chronicity ↑ the younger the infection', emphasis: 'key' },
      { id: 's3', label: 'HBsAg = infection; anti-HBs = immunity; anti-HBc = exposure; HBeAg/DNA = infectivity', emphasis: 'key' },
      { id: 's4', label: 'HCV often chronic but CURABLE (DAAs); no vaccine', emphasis: 'key' },
      { id: 's5', label: 'HDV needs HBsAg; HBV vaccine prevents B (and D); surveil for HCC', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'HBsAg positive for more than 6 months', mechanism: 'Chronic hepatitis B infection', significance: 'key' },
    { sign: 'Anti-HBs positive but anti-HBc negative', mechanism: 'Vaccine-induced immunity (no core exposure)', significance: 'key' },
    { sign: 'HBeAg and high HBV DNA', mechanism: 'High viral replication/infectivity', significance: 'key' },
    { sign: 'Chronic hepatitis C cured with direct-acting antivirals', mechanism: 'HCV is curable (no vaccine)', significance: 'supportive' },
    { sign: 'Hepatitis D only in an HBsAg-positive patient', mechanism: 'HDV requires HBV to replicate', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The serological marker of active hepatitis B infection', meaning: 'HBsAg' },
    { clue: 'The marker distinguishing vaccination from past infection', meaning: 'Anti-HBc (negative if vaccinated; positive if infected)' },
    { clue: 'The blood-borne hepatitis now curable with antivirals', meaning: 'Hepatitis C (direct-acting antivirals)' },
    { clue: 'The hepatitis virus that requires HBV to replicate', meaning: 'Hepatitis D (needs HBsAg)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Chronic HBV/HCV are leading causes of cirrhosis ([[cirrhosis-fatty-liver-portal-hypertension]]) and hepatocellular carcinoma ([[hepatocellular-carcinoma-liver-tumors]]) — HBV is prevented by vaccination and suppressed by antivirals, and HCV is cured by DAAs. Serology interpretation guides diagnosis and immunity status. Contrast the acute, enteric A/E of [[hepatitis-a-e-acute]]; chronic injury drives the fibrosis of [[hepatitis-liver-injury-patterns]].' },
  ],

  mnemonics: [
    { hook: 'HBV serology: "HBsAg = Sick, anti-HBs = Safe, anti-HBc = Caught it (exposed), HBeAg = sprEading"', expansion: ['Vaccinated = anti-HBs + / anti-HBc −', 'IgM anti-HBc = acute/window'] },
    { hook: 'Chronicity of HBV "younger = higher": ~90% neonatal vs <5% adult', expansion: ['Vertical transmission key', 'Birth-dose vaccine'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing vaccination from natural infection (HBV serology)',
      wrongInstinct: 'A positive anti-HBs simply means the person had hepatitis B in the past',
      rightAnswer: 'Anti-HBs indicates immunity from EITHER recovery OR vaccination — the discriminator is anti-HBc: a VACCINATED person is anti-HBs positive but anti-HBc NEGATIVE, whereas someone who cleared a natural infection is positive for BOTH',
      why: 'Anti-HBc marks exposure to the actual virus (core antigen is not in the vaccine); using it alongside anti-HBs separates vaccine-induced immunity from resolved infection — a very common exam distinction.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy person\'s hepatitis B panel shows anti-HBs positive, anti-HBc negative and HBsAg negative. This indicates:',
      options: [
        { id: 'a', text: 'Acute hepatitis B infection' },
        { id: 'b', text: 'Immunity from vaccination' },
        { id: 'c', text: 'Chronic hepatitis B' },
        { id: 'd', text: 'Recovery from past natural infection' },
      ],
      answerId: 'b',
      explanation: 'Anti-HBs indicates immunity; the negative anti-HBc shows no exposure to viral core antigen, so this is vaccine-induced immunity. Recovery from natural infection would be anti-HBs AND anti-HBc positive.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The risk that hepatitis B infection becomes chronic is:',
      options: [
        { id: 'a', text: 'Highest when infection is acquired at birth (~90%) and lowest in adults (<5%)' },
        { id: 'b', text: 'The same at all ages' },
        { id: 'c', text: 'Highest in adults and lowest in neonates' },
        { id: 'd', text: 'Zero at all ages' },
      ],
      answerId: 'a',
      explanation: 'Chronicity of HBV is inversely related to age at infection: about 90% of perinatally infected neonates develop chronic infection versus under 5% of infected adults — the rationale for birth-dose vaccination.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default hepatitisBcdChronic;
