import type { Lecture } from '../../lib/types';
import { HEPATITIS_SEROLOGY } from '../../lib/figures';

export const hepatitisAeAcute: Lecture = {
  id: 'hepatitis-a-e-acute',
  title: 'Hepatitis A & E (Enterically Transmitted)',
  system: 'gi',
  source: 'L11 — Viral Hepatitis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L11 Viral Hepatitis' },
    { kind: 'disease', label: 'Hepatitis A / E' },
    { kind: 'exam', label: 'Faecal-oral' },
  ],

  highYield: [
    '**Hepatitis A and E are the enterically (FAECAL–ORAL) transmitted hepatitis viruses — "the vowels hit the bowels."** They cause **ACUTE, self-limited hepatitis and do NOT normally cause chronic infection or a carrier state** (a key contrast with the blood-borne B and C).',
    '**Hepatitis A (HAV, a picornavirus) is acquired from contaminated food/water (shellfish) and person-to-person, common in travellers and in areas of poor sanitation.** It causes a prodrome (fever, malaise, nausea, anorexia) then jaundice; **children are often asymptomatic**. Recovery is complete with lifelong immunity; an **effective vaccine** exists.',
    '**Hepatitis E (HEV) is also faecal–oral (waterborne outbreaks, and zoonotic from undercooked pork/game).** It is usually self-limited like HAV, but has two exam-critical twists: it is **notably severe/fulminant in PREGNANT women (high mortality)**, and it can become **chronic in immunocompromised patients** (the exception to "no chronicity").',
    '**Serology: acute infection is shown by IgM (anti-HAV IgM or anti-HEV IgM); IgG indicates past infection/immunity.** Because both are acute and self-limited, management is supportive; the focus is prevention (sanitation, safe food/water, HAV vaccination) and recognising the pregnancy risk of HEV.',
    '**The high-yield split: A and E = faecal–oral, acute, no chronicity (except HEV in the immunocompromised); B, C, D = blood-borne, can become chronic (→ cirrhosis/HCC).** HAV/HEV rarely cause fulminant failure except HEV in pregnancy — otherwise they resolve. Chronic viral hepatitis is covered in [[hepatitis-b-c-d-chronic]].',
  ],

  mechanism: {
    title: 'Faecal-oral, acute, self-limited; HEV danger in pregnancy',
    steps: [
      { id: 's1', label: 'A & E = faecal-oral ("vowels → bowels"); acute, no carrier state', emphasis: 'key' },
      { id: 's2', label: 'HAV: food/water/shellfish; kids asymptomatic; vaccine exists', emphasis: 'key' },
      { id: 's3', label: 'HEV: waterborne + zoonotic (pork); usually self-limited', emphasis: 'key' },
      { id: 's4', label: 'HEV: fulminant in PREGNANCY; chronic if immunocompromised', emphasis: 'danger' },
      { id: 's5', label: 'Serology: IgM = acute, IgG = immunity; supportive care' },
    ],
  },

  examFindings: [
    { sign: 'Acute hepatitis after travel/contaminated food, then full recovery', mechanism: 'Hepatitis A (faecal-oral, self-limited)', significance: 'key' },
    { sign: 'Fulminant hepatitis in a pregnant woman', mechanism: 'Hepatitis E (high mortality in pregnancy)', significance: 'key' },
    { sign: 'Positive anti-HAV IgM', mechanism: 'Acute hepatitis A infection', significance: 'key' },
    { sign: 'Chronic hepatitis E in a transplant/immunosuppressed patient', mechanism: 'HEV chronicity (the exception)', significance: 'supportive' },
    { sign: 'Asymptomatic hepatitis in a child', mechanism: 'Hepatitis A (often subclinical in children)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The transmission route of hepatitis A and E', meaning: 'Faecal–oral' },
    { clue: 'The hepatitis virus dangerous in pregnancy', meaning: 'Hepatitis E' },
    { clue: 'The marker of acute hepatitis A', meaning: 'Anti-HAV IgM' },
    { clue: 'The hepatitis viruses that do not usually cause chronic infection', meaning: 'A and E (except HEV in the immunocompromised)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'HAV/HEV are acute and self-limited (supportive care), so the emphasis is prevention (sanitation, HAV vaccine) and recognising HEV\'s danger in pregnancy. They contrast with the chronic, blood-borne B/C/D of [[hepatitis-b-c-d-chronic]] that cause cirrhosis/HCC ([[hepatocellular-carcinoma-liver-tumors]]). Their acute injury pattern is the hepatitis of [[hepatitis-liver-injury-patterns]].' },
  ],

  mnemonics: [
    { hook: '"The vowels (A, E) hit the bowels" (faecal-oral, acute)', expansion: ['No chronic carrier state', 'HAV vaccine exists'] },
    { hook: 'HEV = "Expectant mothers beware" (fulminant in pregnancy)', expansion: ['Waterborne + zoonotic (pork)', 'Chronic only if immunocompromised'] },
  ],

  traps: [
    {
      questionCategory: 'Chronicity of hepatitis A and E',
      wrongInstinct: 'All viral hepatitides can progress to chronic infection and cirrhosis',
      rightAnswer: 'Hepatitis A and E are enterically transmitted and ACUTE/self-limited — they do NOT cause chronic infection or cirrhosis (the sole exception is chronic HEV in immunocompromised patients); chronicity is a feature of the blood-borne B, C and D',
      why: 'Assuming HAV/HEV can chronically damage the liver misclassifies them; their acute-only nature (and HEV\'s pregnancy risk) is exactly what distinguishes them from the cirrhosis-causing blood-borne viruses.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which pair of hepatitis viruses is transmitted by the faecal–oral route and causes acute, self-limited infection without a chronic carrier state?',
      options: [
        { id: 'a', text: 'Hepatitis B and C' },
        { id: 'b', text: 'Hepatitis A and E' },
        { id: 'c', text: 'Hepatitis C and D' },
        { id: 'd', text: 'Hepatitis B and D' },
      ],
      answerId: 'b',
      explanation: 'Hepatitis A and E are enterically (faecal–oral) transmitted and cause acute, self-limited hepatitis without chronicity (except HEV in the immunocompromised). Hepatitis B, C and D are blood-borne and can become chronic.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Hepatitis E infection is particularly dangerous in which group?',
      options: [
        { id: 'a', text: 'Young children' },
        { id: 'b', text: 'Pregnant women (high risk of fulminant hepatitis)' },
        { id: 'c', text: 'Vaccinated adults' },
        { id: 'd', text: 'The elderly only' },
      ],
      answerId: 'b',
      explanation: 'Hepatitis E, although usually self-limited, carries a high risk of fulminant hepatic failure and mortality in pregnant women — a classic exam point distinguishing it from hepatitis A.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Viral hepatitis A–E', svg: HEPATITIS_SEROLOGY, caption: 'Routes, chronicity and notes for hepatitis A–E, with the hepatitis B serology panel.' },
  ],
};

export default hepatitisAeAcute;
