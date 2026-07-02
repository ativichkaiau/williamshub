import type { Lecture } from '../../lib/types';

export const inflammatoryInvasiveEnteritis: Lecture = {
  id: 'inflammatory-invasive-enteritis',
  title: 'Inflammatory (Invasive) Bacterial Diarrhoea',
  system: 'gi',
  source: 'L13 — Bacterial GI Infection I',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'GI' },
    { kind: 'lecture', label: 'L13 Bacterial GI I' },
    { kind: 'disease', label: 'Dysentery' },
    { kind: 'exam', label: 'EHEC / HUS' },
  ],

  highYield: [
    '**Inflammatory (invasive) diarrhoea is BLOODY/mucoid (dysentery) with FEVER and faecal leukocytes — bacteria invade or damage the colonic mucosa.** The classic organisms are **Shigella, Salmonella, Campylobacter, enterohaemorrhagic E. coli (EHEC), and Clostridioides difficile.** Antimotility agents are generally avoided.',
    '**Shigella (very low infectious dose, produces Shiga toxin) and Campylobacter jejuni (a curved/"gull-wing" Gram-negative rod, often from undercooked poultry) are leading causes of bacillary dysentery.** Campylobacter is notable for post-infectious sequelae: **Guillain–Barré syndrome and reactive arthritis.**',
    '**Non-typhoidal Salmonella causes invasive enterocolitis (poultry/eggs); Salmonella Typhi causes ENTERIC (TYPHOID) FEVER — a systemic illness with fever, relative bradycardia, rose spots, and constipation THEN diarrhoea, with risk of intestinal perforation.** Typhoid is treated with antibiotics (and there is a vaccine).',
    '**Enterohaemorrhagic E. coli (EHEC, especially O157:H7, from undercooked beef) produces Shiga-like toxin → bloody diarrhoea and HAEMOLYTIC-URAEMIC SYNDROME (HUS: microangiopathic haemolytic anaemia + thrombocytopenia + acute kidney injury).** Crucially, **do NOT give antibiotics or antimotility agents in EHEC** — they increase toxin release and HUS risk.',
    '**Clostridioides difficile causes ANTIBIOTIC-ASSOCIATED PSEUDOMEMBRANOUS COLITIS: after antibiotics disrupt the flora, C. difficile spores germinate and toxins A/B produce pseudomembranes.** Treat by STOPPING the offending antibiotic and giving oral **vancomycin or fidaxomicin** (recurrent disease may need faecal microbiota transplant). Recognising the bloody/febrile pattern and the EHEC antibiotic caveat are the highest-yield points.',
  ],

  mechanism: {
    title: 'Mucosal invasion/toxin → bloody, febrile diarrhoea (WBC+); avoid antimotility',
    steps: [
      { id: 's1', label: 'Invasive = bloody/mucoid, fever, faecal leukocytes (dysentery)', emphasis: 'key' },
      { id: 's2', label: 'Shigella (Shiga toxin, low dose); Campylobacter (poultry → GBS/reactive arthritis)', emphasis: 'key' },
      { id: 's3', label: 'Salmonella Typhi → enteric fever (rose spots, bradycardia, perforation)', emphasis: 'key' },
      { id: 's4', label: 'EHEC O157 → HUS; NO antibiotics/antimotility (↑toxin/HUS)', emphasis: 'danger' },
      { id: 's5', label: 'C. difficile: post-antibiotic pseudomembranous colitis → vancomycin/fidaxomicin' },
    ],
  },

  examFindings: [
    { sign: 'Bloody, mucoid diarrhoea with fever and faecal leukocytes', mechanism: 'Invasive bacterial dysentery', significance: 'key' },
    { sign: 'Bloody diarrhoea + HUS after undercooked beef', mechanism: 'EHEC O157:H7 (Shiga-like toxin) — avoid antibiotics', significance: 'key' },
    { sign: 'Diarrhoea then ascending paralysis (Guillain–Barré)', mechanism: 'Post-Campylobacter sequela', significance: 'key' },
    { sign: 'Fever, rose spots, relative bradycardia, constipation then diarrhoea', mechanism: 'Enteric (typhoid) fever (S. Typhi)', significance: 'supportive' },
    { sign: 'Pseudomembranous colitis after antibiotics', mechanism: 'Clostridioides difficile (toxins A/B)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The stool features of invasive diarrhoea', meaning: 'Blood/mucus, fever, faecal leukocytes' },
    { clue: 'The E. coli causing HUS (and its management caveat)', meaning: 'EHEC O157:H7 — do NOT give antibiotics/antimotility' },
    { clue: 'The dysentery organism with post-infectious Guillain–Barré', meaning: 'Campylobacter jejuni' },
    { clue: 'The cause of post-antibiotic pseudomembranous colitis', meaning: 'Clostridioides difficile' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The bloody/febrile pattern signals invasive disease — antimotility agents are dangerous ([[laxatives-antidiarrheals-ors]]), and EHEC must NOT receive antibiotics (HUS risk). C. difficile needs the culprit antibiotic stopped plus vancomycin/fidaxomicin. Contrast the watery, toxin-driven secretory diarrhoea of [[secretory-toxigenic-enteritis]] and viral gastroenteritis ([[viral-gastroenteritis]]); food-poisoning specifics in [[food-poisoning-post-infectious]].' },
  ],

  mnemonics: [
    { hook: 'Invasive dysentery bugs = "Shigella, Salmonella, Campylobacter, EHEC, C. diff" (bloody + fever)', expansion: ['Faecal leukocytes', 'Campylobacter → GBS/reactive arthritis'] },
    { hook: 'EHEC: "no antibiotics, no antimotility" (↑ HUS)', expansion: ['O157:H7, undercooked beef', 'HUS = anaemia + low platelets + AKI'] },
  ],

  traps: [
    {
      questionCategory: 'Antibiotics in EHEC (O157:H7) infection',
      wrongInstinct: 'Bloody diarrhoea from E. coli should be treated promptly with antibiotics',
      rightAnswer: 'In enterohaemorrhagic E. coli (O157:H7), antibiotics and antimotility agents are CONTRAINDICATED — they increase Shiga-like toxin release and the risk of haemolytic-uraemic syndrome; management is supportive',
      why: 'Killing EHEC or slowing transit raises toxin exposure, precipitating HUS (haemolysis, thrombocytopenia, kidney failure); the reflex to "treat bloody diarrhoea with antibiotics" is exactly wrong here.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child develops bloody diarrhoea after eating undercooked beef, then microangiopathic haemolytic anaemia, thrombocytopenia and acute kidney injury. The organism and the key management point are:',
      options: [
        { id: 'a', text: 'EHEC O157:H7 — avoid antibiotics and antimotility agents' },
        { id: 'b', text: 'Vibrio cholerae — give antibiotics urgently' },
        { id: 'c', text: 'Rotavirus — give antivirals' },
        { id: 'd', text: 'Giardia — give metronidazole' },
      ],
      answerId: 'a',
      explanation: 'This is haemolytic-uraemic syndrome from enterohaemorrhagic E. coli O157:H7 (Shiga-like toxin). Antibiotics and antimotility agents increase toxin release and HUS risk, so management is supportive.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which feature indicates an invasive (inflammatory) rather than a secretory bacterial diarrhoea?',
      options: [
        { id: 'a', text: 'Large-volume watery stool with no blood or fever' },
        { id: 'b', text: 'Bloody, mucoid stool with fever and faecal leukocytes' },
        { id: 'c', text: 'Rapid vomiting after eating' },
        { id: 'd', text: 'Rice-water stool' },
      ],
      answerId: 'b',
      explanation: 'Invasive organisms damage the colonic mucosa, producing bloody/mucoid diarrhoea with fever and faecal leukocytes (dysentery). Watery, non-bloody, afebrile diarrhoea indicates a secretory/toxigenic mechanism.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default inflammatoryInvasiveEnteritis;
