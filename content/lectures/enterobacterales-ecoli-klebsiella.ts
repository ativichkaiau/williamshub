import type { Lecture } from '../../lib/types';

export const enterobacteralesEcoliKlebsiella: Lecture = {
  id: 'enterobacterales-ecoli-klebsiella',
  title: 'Enterobacterales: E. coli & Klebsiella',
  system: 'microbiology',
  source: 'L13 — Gram-Negative Bacilli I (Enterobacterales)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L13 E. coli/Klebsiella' },
    { kind: 'mechanism', label: 'Lactose fermenters; E. coli pathotypes' },
    { kind: 'exam', label: 'EHEC O157/HUS; ESBL' },
  ],

  highYield: [
    'Enterobacterales are Gram-negative rods, FACULTATIVE anaerobes, OXIDASE-NEGATIVE, that ferment glucose and reduce nitrate; many are gut flora. A first division on MacConkey is LACTOSE fermentation: pink LACTOSE FERMENTERS (E. COLI, KLEBSIELLA, Enterobacter) vs colourless non-fermenters (Salmonella, Shigella — next module). Antigens O (somatic), H (flagellar), K (capsular) serotype them.',
    'E. COLI is the commonest cause of UTI and Gram-negative sepsis, and has DIARRHOEAL PATHOTYPES: ETEC (traveller\'s diarrhoea, heat-labile/stable toxins), EPEC (infantile), EIEC (dysentery-like), EAEC, and — high-yield — EHEC/STEC O157:H7 (Shiga-like toxin → bloody diarrhoea and HAEMOLYTIC-URAEMIC SYNDROME; does NOT ferment sorbitol; AVOID antibiotics, which increase HUS risk). Neonatal meningitis strains carry the K1 capsule.',
    'KLEBSIELLA PNEUMONIAE is a lactose-fermenter with a large mucoid CAPSULE causing pneumonia (classically in alcoholics/diabetics, with "CURRANT-JELLY" sputum and cavitation), UTIs and liver abscess; it is a major source of ESBL and CARBAPENEMASE (KPC) resistance. Enterobacter/Serratia (Serratia = red pigment) are opportunistic, often multidrug-resistant, nosocomial pathogens.',
    'Resistance is a defining theme: Enterobacterales are the main carriers of EXTENDED-SPECTRUM β-LACTAMASES (ESBLs, defeating cephalosporins) and CARBAPENEMASES (CRE) — key drivers of hospital multidrug resistance. So this family spans everyday infections (E. coli UTI/sepsis) and formidable resistant pathogens (Klebsiella/CRE).',
    '**The take-home: Enterobacterales = oxidase-NEGATIVE glucose fermenters; LACTOSE FERMENTERS (pink) = E. coli, Klebsiella, Enterobacter. E. COLI = UTI/sepsis + pathotypes (ETEC traveller\'s; EHEC O157 Shiga toxin → HUS, no antibiotics). KLEBSIELLA = capsule, currant-jelly pneumonia (alcoholics), ESBL/carbapenemase. Enterobacterales drive ESBL/CRE resistance.** Non-lactose fermenters are [[salmonella-shigella-yersinia]]; resistance is [[antibiotic-resistance-mechanisms]].',
  ],

  mechanism: {
    title: 'Enterobacterales (oxidase−, glucose fermenters); lactose fermenters = E. coli/Klebsiella/Enterobacter; E. coli pathotypes (ETEC, EHEC O157→HUS no antibiotics); Klebsiella capsule/currant-jelly/ESBL-CRE',
    steps: [
      { id: 's1', label: 'Enterobacterales: Gram− rods, facultative, oxidase-NEGATIVE, ferment glucose', emphasis: 'key' },
      { id: 's2', label: 'Lactose fermenters (pink on MacConkey) = E. coli, Klebsiella, Enterobacter', emphasis: 'key' },
      { id: 's3', label: 'E. coli: UTI/sepsis + diarrhoeal pathotypes (ETEC, EPEC, EIEC, EHEC)', emphasis: 'key' },
      { id: 's4', label: 'EHEC O157:H7: Shiga-like toxin → bloody diarrhoea + HUS; AVOID antibiotics', emphasis: 'danger' },
      { id: 's5', label: 'Klebsiella: capsule, currant-jelly pneumonia (alcoholics); ESBL/carbapenemase (CRE)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Pink (lactose-fermenting) Gram-negative rods on MacConkey', mechanism: 'E. coli / Klebsiella / Enterobacter', significance: 'key' },
    { sign: 'Bloody diarrhoea and haemolytic-uraemic syndrome after undercooked beef', mechanism: 'EHEC O157:H7 (Shiga toxin)', significance: 'key' },
    { sign: 'Watery traveller\'s diarrhoea', mechanism: 'ETEC (heat-labile/stable enterotoxins)', significance: 'key' },
    { sign: 'Cavitating pneumonia with "currant-jelly" sputum in an alcoholic', mechanism: 'Klebsiella pneumoniae (capsule)', significance: 'supportive' },
    { sign: 'Cephalosporin-resistant E. coli/Klebsiella from a plasmid enzyme', mechanism: 'Extended-spectrum β-lactamase (ESBL)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The MacConkey reaction of E. coli and Klebsiella', meaning: 'Pink (lactose fermenters)' },
    { clue: 'The E. coli pathotype causing HUS', meaning: 'EHEC/STEC O157:H7 (Shiga-like toxin)' },
    { clue: 'Why antibiotics are avoided in EHEC', meaning: 'They increase HUS risk (toxin release)' },
    { clue: 'The resistance enzymes typified by Enterobacterales', meaning: 'ESBLs and carbapenemases (CRE)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Enterobacterales span everyday and dangerous infections. E. coli causes most UTIs and Gram-negative sepsis and has diarrhoeal pathotypes — notably EHEC O157:H7, where recognising Shiga-toxin bloody diarrhoea matters because antibiotics increase HUS risk. Klebsiella (capsule) causes currant-jelly pneumonia and, with the family generally, drives ESBL and carbapenemase (CRE) resistance that dictates antibiotic choice. Lactose fermentation and oxidase-negativity anchor identification. Non-lactose fermenters (Salmonella/Shigella) are [[salmonella-shigella-yersinia]]; resistance is [[antibiotic-resistance-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'Lactose fermenters (pink) = "KEE": Klebsiella, E. coli, Enterobacter', expansion: ['Oxidase-negative', 'MacConkey pink vs colourless'] },
    { hook: '"EHEC O157 = Shiga toxin → HUS; NO antibiotics"', expansion: ['ETEC = traveller’s', 'Klebsiella = currant-jelly + ESBL/CRE'] },
  ],

  traps: [
    {
      questionCategory: 'Antibiotics in EHEC O157 infection',
      wrongInstinct: 'Bloody diarrhoea from E. coli O157:H7 should be treated promptly with antibiotics like any bacterial dysentery',
      rightAnswer: 'In EHEC/STEC (O157:H7) infection, ANTIBIOTICS are generally AVOIDED because they can INCREASE Shiga-toxin release and raise the risk of HAEMOLYTIC-URAEMIC SYNDROME; management is supportive (fluids, monitoring for HUS), unlike other bacterial dysenteries — so recognising bloody diarrhoea + potential HUS as EHEC changes the treatment decision',
      why: 'Treating EHEC like ordinary bacterial dysentery can precipitate HUS via increased toxin release; withholding antibiotics and giving supportive care is the correct, counter-intuitive management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A child develops bloody diarrhoea followed by acute kidney injury, anaemia and thrombocytopenia after eating undercooked beef. The organism and the key management point are:',
      options: [
        { id: 'a', text: 'EHEC O157:H7; avoid antibiotics (they increase HUS risk)' },
        { id: 'b', text: 'ETEC; give ciprofloxacin' },
        { id: 'c', text: 'Klebsiella; give carbapenem' },
        { id: 'd', text: 'Shigella; no treatment needed' },
      ],
      answerId: 'a',
      explanation: 'Enterohaemorrhagic E. coli O157:H7 produces Shiga-like toxin causing bloody diarrhoea and haemolytic-uraemic syndrome; antibiotics can increase toxin release and HUS risk, so management is supportive with monitoring for HUS.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'On MacConkey agar, E. coli and Klebsiella appear pink because they:',
      options: [
        { id: 'a', text: 'Ferment lactose, acidifying the medium' },
        { id: 'b', text: 'Are oxidase positive' },
        { id: 'c', text: 'Do not ferment lactose' },
        { id: 'd', text: 'Produce a red pigment' },
      ],
      answerId: 'a',
      explanation: 'E. coli, Klebsiella and Enterobacter are lactose fermenters, acidifying MacConkey agar and forming pink colonies, distinguishing them from non-lactose fermenters (Salmonella, Shigella) that remain colourless. (Serratia produces a red pigment but is a weak/late lactose fermenter.)',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default enterobacteralesEcoliKlebsiella;
