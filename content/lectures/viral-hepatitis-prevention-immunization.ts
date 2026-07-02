import type { Lecture } from '../../lib/types';

export const viralHepatitisPreventionImmunization: Lecture = {
  id: 'viral-hepatitis-prevention-immunization',
  title: 'Viral Hepatitis: Prevention & Immunisation',
  system: 'gi',
  source: 'L11 — Viral Hepatitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L11 Viral Hepatitis' },
    { kind: 'treatment', label: 'Vaccination & prophylaxis' },
    { kind: 'mechanism', label: 'Prevention by route' },
  ],

  highYield: [
    '**Preventing viral hepatitis follows the TRANSMISSION ROUTE: the enterically spread A and E are prevented by sanitation/safe food and water, while the blood-borne B, C and D are prevented by blood/sexual precautions — and, for hepatitis B, VACCINATION.** Prevention is high-yield because it interrupts the chain to cirrhosis and hepatocellular carcinoma.',
    '**Hepatitis A and E (faecal–oral) are controlled by clean water, food hygiene and hand-washing; an effective HEPATITIS A VACCINE exists (for travellers, at-risk groups) and, importantly, pregnant women should avoid HEV exposure** (risk of fulminant hepatitis — [[hepatitis-a-e-acute]]).',
    '**Hepatitis B is vaccine-preventable — the vaccine is recombinant HBsAg, and successful immunisation gives anti-HBs POSITIVE with anti-HBc NEGATIVE.** Universal infant vaccination (with a BIRTH DOSE) prevents the high-chronicity perinatal transmission; **infants of HBsAg-positive mothers also receive hepatitis B immunoglobulin (HBIG) plus vaccine at birth** (post-exposure prophylaxis).',
    '**Because hepatitis D requires HBsAg to replicate, the hepatitis B vaccine ALSO prevents hepatitis D.** There is **NO hepatitis C vaccine**, so HCV prevention relies on blood safety, harm reduction (safe injecting), and — as effective secondary prevention — SCREENING and CURING chronic HCV with direct-acting antivirals ([[hepatitis-b-c-d-chronic]]).',
    '**Post-exposure and screening measures: needlestick/perinatal HBV exposure → HBIG + vaccine; screen blood donors, pregnant women (HBsAg) and at-risk groups; treat chronic HBV/HCV to prevent cirrhosis/HCC** ([[hepatocellular-carcinoma-liver-tumors]]). The unifying message: vaccinate against B (and thereby D and its HCC risk), sanitation for A/E, and screen-and-treat for C.',
  ],

  mechanism: {
    title: 'Prevent by route: sanitation (A/E), vaccine (B → also D), screen/treat (C)',
    steps: [
      { id: 's1', label: 'A/E (faecal–oral): sanitation, safe food/water; hepatitis A vaccine', emphasis: 'key' },
      { id: 's2', label: 'B: recombinant HBsAg vaccine; anti-HBs+ / anti-HBc− = vaccinated', emphasis: 'key' },
      { id: 's3', label: 'Birth-dose vaccine (± HBIG) prevents high-chronicity perinatal HBV', emphasis: 'key' },
      { id: 's4', label: 'HBV vaccine also prevents HDV (needs HBsAg); NO HCV vaccine', emphasis: 'key' },
      { id: 's5', label: 'HCV: blood safety + harm reduction + screen-and-cure (DAAs)' },
    ],
  },

  examFindings: [
    { sign: 'Anti-HBs positive with anti-HBc negative', mechanism: 'Successful hepatitis B vaccination', significance: 'key' },
    { sign: 'HBIG + hepatitis B vaccine given to a newborn of an HBsAg+ mother', mechanism: 'Perinatal HBV post-exposure prophylaxis', significance: 'key' },
    { sign: 'Hepatitis B vaccination also protecting against hepatitis D', mechanism: 'HDV requires HBsAg to replicate', significance: 'key' },
    { sign: 'No vaccine available, prevention by blood safety/harm reduction', mechanism: 'Hepatitis C (screen-and-treat instead)', significance: 'supportive' },
    { sign: 'Hepatitis A vaccine advised before travel', mechanism: 'Prevention of faecal–oral HAV', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The hepatitis virus prevented by vaccination (also protecting against D)', meaning: 'Hepatitis B (HDV needs HBsAg)' },
    { clue: 'The serology of a vaccinated (vs naturally immune) person', meaning: 'Anti-HBs positive, anti-HBc negative' },
    { clue: 'The perinatal HBV prophylaxis for an at-risk newborn', meaning: 'Hepatitis B immunoglobulin (HBIG) + vaccine' },
    { clue: 'The prevention strategy for hepatitis C (no vaccine)', meaning: 'Blood safety, harm reduction, and screen-and-treat (DAAs)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Prevention interrupts the path to cirrhosis and HCC ([[hepatocellular-carcinoma-liver-tumors]]): the HBV vaccine (and birth dose/HBIG) prevents high-chronicity perinatal infection and, by preventing HBV, prevents HDV; HCV has no vaccine, so screen-and-cure ([[hepatitis-b-c-d-chronic]]) is the strategy. Sanitation prevents the faecal–oral A/E ([[hepatitis-a-e-acute]]); vaccination serology ties to the HBV panel.' },
  ],

  mnemonics: [
    { hook: 'Prevent by route: "A/E = sanitation (+HAV vaccine); B = vaccine (also stops D); C = screen & cure"', expansion: ['Vaccinated = anti-HBs+ / anti-HBc−', 'Birth dose ± HBIG for perinatal HBV'] },
    { hook: 'HBV vaccine "2-for-1": prevents B AND D (D needs HBsAg)', expansion: ['No HCV vaccine', 'DAAs cure HCV (secondary prevention)'] },
  ],

  traps: [
    {
      questionCategory: 'Preventing hepatitis D',
      wrongInstinct: 'A separate vaccine is needed to prevent hepatitis D',
      rightAnswer: 'There is NO separate hepatitis D vaccine — because HDV can only replicate in the presence of HBsAg, the HEPATITIS B vaccine also prevents hepatitis D by preventing HBV infection',
      why: 'HDV\'s dependence on HBV means blocking HBV blocks HDV; looking for a dedicated HDV vaccine misunderstands its defective, HBV-dependent biology.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Vaccination against hepatitis B also prevents hepatitis D infection because:',
      options: [
        { id: 'a', text: 'The vaccine contains hepatitis D antigen' },
        { id: 'b', text: 'Hepatitis D requires HBsAg (hepatitis B) to replicate' },
        { id: 'c', text: 'Hepatitis D is faecal–oral' },
        { id: 'd', text: 'Hepatitis D is not infectious' },
      ],
      answerId: 'b',
      explanation: 'Hepatitis D is a defective virus that can only replicate using hepatitis B surface antigen; preventing HBV infection with the hepatitis B vaccine therefore also prevents hepatitis D.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which statement about hepatitis prevention is correct?',
      options: [
        { id: 'a', text: 'There is an effective hepatitis C vaccine' },
        { id: 'b', text: 'Hepatitis B is vaccine-preventable, and infants of HBsAg-positive mothers receive HBIG plus vaccine at birth' },
        { id: 'c', text: 'Hepatitis A is prevented only by blood precautions' },
        { id: 'd', text: 'Vaccination has no role in preventing liver cancer' },
      ],
      answerId: 'b',
      explanation: 'Hepatitis B is vaccine-preventable; perinatal transmission (high chronicity) is prevented by a birth-dose vaccine plus hepatitis B immunoglobulin for infants of HBsAg-positive mothers. There is no hepatitis C vaccine, and preventing HBV reduces hepatocellular carcinoma.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default viralHepatitisPreventionImmunization;
