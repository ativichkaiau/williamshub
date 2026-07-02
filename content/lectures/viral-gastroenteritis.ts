import type { Lecture } from '../../lib/types';

export const viralGastroenteritis: Lecture = {
  id: 'viral-gastroenteritis',
  title: 'Viral Gastroenteritis',
  system: 'gi',
  source: 'L12 — Viral Gastroenteritis',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L12 Viral GI Infection' },
    { kind: 'disease', label: 'Rotavirus / Norovirus' },
    { kind: 'exam', label: 'Watery diarrhoea' },
  ],

  highYield: [
    '**Viruses are the commonest cause of acute gastroenteritis worldwide, producing NON-inflammatory, WATERY diarrhoea (no blood, no faecal leukocytes) with vomiting.** They damage small-intestinal villous enterocytes, causing malabsorption and osmotic + secretory water loss; the main danger is DEHYDRATION.',
    '**Rotavirus is the leading cause of severe dehydrating diarrhoea in INFANTS/young children** (faecal–oral, winter). Its NSP4 protein acts as a viral enterotoxin. It is now **vaccine-preventable (live oral rotavirus vaccine)** — a major public-health success that has cut childhood diarrhoeal deaths.',
    '**Norovirus is the leading cause of gastroenteritis in ADULTS and of epidemic outbreaks (cruise ships, hospitals, schools)** — highly contagious with a very low infectious dose, causing acute vomiting and watery diarrhoea that is short-lived. Other agents: **enteric adenovirus and astrovirus** (mainly in children).',
    '**Diagnosis is usually clinical; management is REHYDRATION — oral rehydration solution first (or IV if severe)** — see [[laxatives-antidiarrheals-ors]]. Antibiotics are useless (viral), and the watery, non-bloody, afebrile-or-low-grade pattern helps distinguish viral from invasive bacterial diarrhoea ([[inflammatory-invasive-enteritis]]).',
    '**The pattern to recognise: sudden watery diarrhoea + vomiting, no blood/mucus, often in an outbreak or a young child → viral gastroenteritis → rehydrate.** Prevention rests on hygiene/sanitation and, for rotavirus, vaccination. The key complication to prevent is dehydration, especially in infants and the elderly.',
  ],

  mechanism: {
    title: 'Villous enterocyte damage → watery (non-inflammatory) diarrhoea → rehydrate',
    steps: [
      { id: 's1', label: 'Viral = watery, non-inflammatory (no blood/WBC); vomiting; dehydration risk', emphasis: 'key' },
      { id: 's2', label: 'Rotavirus: infants; NSP4 enterotoxin; vaccine-preventable', emphasis: 'key' },
      { id: 's3', label: 'Norovirus: adults + outbreaks; low infectious dose, highly contagious', emphasis: 'key' },
      { id: 's4', label: 'Also adenovirus/astrovirus (children); diagnosis usually clinical' },
      { id: 's5', label: 'Treat with ORS (or IV if severe); antibiotics useless', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Severe watery diarrhoea + dehydration in an infant', mechanism: 'Rotavirus gastroenteritis', significance: 'key' },
    { sign: 'Outbreak of acute vomiting/diarrhoea on a cruise ship', mechanism: 'Norovirus (highly contagious, low dose)', significance: 'key' },
    { sign: 'Watery stool with no blood, mucus or faecal leukocytes', mechanism: 'Non-inflammatory (viral) diarrhoea', significance: 'key' },
    { sign: 'Diarrhoeal illness improving with oral rehydration alone', mechanism: 'Self-limited viral gastroenteritis', significance: 'supportive' },
    { sign: 'Fall in childhood diarrhoeal deaths after vaccination', mechanism: 'Rotavirus vaccine', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The leading cause of severe dehydrating diarrhoea in infants', meaning: 'Rotavirus (vaccine-preventable)' },
    { clue: 'The leading cause of gastroenteritis outbreaks in adults', meaning: 'Norovirus' },
    { clue: 'The stool characteristics of viral gastroenteritis', meaning: 'Watery, non-inflammatory (no blood or faecal leukocytes)' },
    { clue: 'The mainstay of treatment', meaning: 'Rehydration (oral rehydration solution; IV if severe)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Viral gastroenteritis is self-limited; the priority is preventing/treating dehydration with ORS ([[laxatives-antidiarrheals-ors]]) and, for rotavirus, vaccination. Its watery, non-bloody pattern contrasts with the invasive bacterial diarrhoea of [[inflammatory-invasive-enteritis]] and the toxin-mediated secretory diarrhoea of [[secretory-toxigenic-enteritis]]. Antibiotics have no role.' },
  ],

  mnemonics: [
    { hook: 'Age split: "Rotavirus = Rugrats (infants, vaccine); Norovirus = crowds/adults (outbreaks)"', expansion: ['Both watery, non-inflammatory', 'Norovirus = very low infectious dose'] },
    { hook: 'Viral diarrhoea = "watery, no blood, rehydrate" (no antibiotics)', expansion: ['Villous enterocyte damage', 'Rotavirus NSP4 enterotoxin'] },
  ],

  traps: [
    {
      questionCategory: 'Treating viral gastroenteritis',
      wrongInstinct: 'Acute watery diarrhoea should be treated with antibiotics to be safe',
      rightAnswer: 'Viral gastroenteritis (watery, non-inflammatory diarrhoea) is treated with REHYDRATION, not antibiotics — antibiotics are ineffective against viruses and unnecessary; the priority is preventing dehydration',
      why: 'Reaching for antibiotics in viral diarrhoea offers no benefit and promotes resistance/adverse effects; recognising the non-inflammatory watery pattern directs you to rehydration instead.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The leading cause of severe, dehydrating gastroenteritis in infants and young children, now preventable by a live oral vaccine, is:',
      options: [
        { id: 'a', text: 'Norovirus' },
        { id: 'b', text: 'Rotavirus' },
        { id: 'c', text: 'Vibrio cholerae' },
        { id: 'd', text: 'Shigella' },
      ],
      answerId: 'b',
      explanation: 'Rotavirus is the leading cause of severe dehydrating diarrhoea in infants; its NSP4 acts as a viral enterotoxin, and a live oral vaccine has substantially reduced childhood diarrhoeal deaths.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Viral gastroenteritis characteristically causes:',
      options: [
        { id: 'a', text: 'Bloody, mucoid diarrhoea with fever and faecal leukocytes' },
        { id: 'b', text: 'Watery, non-inflammatory diarrhoea with vomiting and risk of dehydration' },
        { id: 'c', text: 'Chronic diarrhoea with weight loss' },
        { id: 'd', text: 'Constipation' },
      ],
      answerId: 'b',
      explanation: 'Viruses damage small-bowel villous enterocytes, producing watery, non-inflammatory diarrhoea (no blood or faecal leukocytes) with vomiting; the main hazard is dehydration, treated with rehydration.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default viralGastroenteritis;
