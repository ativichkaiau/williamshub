import type { Lecture } from '../../lib/types';

export const bacteroidesGramNegativeAnaerobes: Lecture = {
  id: 'bacteroides-gram-negative-anaerobes',
  title: 'Bacteroides & Non-Spore Anaerobes',
  system: 'microbiology',
  source: 'L16 — Anaerobes',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L16 Bacteroides' },
    { kind: 'mechanism', label: 'Obligate anaerobes; abscesses' },
    { kind: 'exam', label: 'Foul pus; metronidazole/clindamycin' },
  ],

  highYield: [
    'Beyond clostridia, the medically important anaerobes are mostly NON-spore-forming commensals of the mouth, gut and genital tract that cause ENDOGENOUS, often POLYMICROBIAL infections when mucosal barriers break down. Obligate anaerobes lack catalase/superoxide dismutase, so they are killed by oxygen and need anaerobic culture — infections are typically FOUL-SMELLING, produce GAS, and form ABSCESSES.',
    'BACTEROIDES FRAGILIS is the leading anaerobic pathogen: a Gram-negative rod that is BILE-resistant and part of colonic flora, causing INTRA-ABDOMINAL abscesses and peritonitis after gut perforation/surgery. Its capsule promotes abscess formation, and it commonly produces β-lactamase. FUSOBACTERIUM causes LEMIERRE syndrome (septic jugular thrombophlebitis after pharyngitis) and dental/pleuropulmonary infections; PREVOTELLA/PORPHYROMONAS cause oral, dental and aspiration infections; PEPTOSTREPTOCOCCUS (anaerobic Gram-positive cocci) and CUTIBACTERIUM (Propionibacterium) acnes (acne, prosthetic/shunt infection) round out the group.',
    'Anaerobic infections are suspected clinically: foul-smelling discharge, gas in tissues, abscess formation, infection near mucosal surfaces (abdomen, mouth, pelvis), and failure to grow on aerobic culture. Management combines SOURCE CONTROL (drain the abscess) with anaerobic-active antibiotics — METRONIDAZOLE, CLINDAMYCIN, β-lactam/β-lactamase-inhibitor combinations, or carbapenems (metronidazole covers Bacteroides well but not actinomyces/some Gram-positive anaerobes).',
    'Contrast with clostridia (spore-forming, toxin-mediated): these non-spore anaerobes cause suppurative, polymicrobial ABSCESS disease from displaced normal flora. The unifying themes are oxygen intolerance, endogenous origin near mucosa, abscess/foul pus, and treatment by drainage + metronidazole/clindamycin.',
    '**The take-home: non-spore anaerobes = endogenous mucosal flora → FOUL, gas-forming, POLYMICROBIAL ABSCESSES. BACTEROIDES FRAGILIS (bile-resistant, colonic → intra-abdominal abscess/peritonitis, β-lactamase). FUSOBACTERIUM → LEMIERRE; Prevotella/Peptostreptococcus → oral/aspiration. Treat: DRAIN + metronidazole/clindamycin. Obligate anaerobes are O2-killed (no catalase/SOD).** Spore-forming clostridia are [[clostridia-anaerobic-pathogens]]; oxygen classes are [[bacterial-physiology-growth-identification]].',
  ],

  mechanism: {
    title: 'Non-spore endogenous anaerobes (O2-killed, no catalase/SOD) → foul, polymicrobial abscesses: Bacteroides fragilis (colonic → intra-abdominal abscess), Fusobacterium (Lemierre), Prevotella/Peptostreptococcus; drain + metronidazole/clindamycin',
    steps: [
      { id: 's1', label: 'Obligate anaerobes lack catalase/SOD → O2-killed; endogenous mucosal flora', emphasis: 'key' },
      { id: 's2', label: 'Clues: foul-smelling, gas, abscess, near mucosa, no aerobic growth', emphasis: 'key' },
      { id: 's3', label: 'Bacteroides fragilis: bile-resistant colonic rod → intra-abdominal abscess/peritonitis', emphasis: 'key' },
      { id: 's4', label: 'Fusobacterium → Lemierre (jugular septic thrombophlebitis); Prevotella/Peptostreptococcus oral', emphasis: 'key' },
      { id: 's5', label: 'Treat: SOURCE CONTROL (drain) + metronidazole/clindamycin/β-lactam-inhibitor', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Foul-smelling pus and gas with an intra-abdominal abscess after bowel perforation', mechanism: 'Bacteroides fragilis (polymicrobial anaerobic)', significance: 'key' },
    { sign: 'Septic internal jugular thrombophlebitis after pharyngitis', mechanism: 'Lemierre syndrome (Fusobacterium)', significance: 'key' },
    { sign: 'Aspiration pneumonia/lung abscess with foul sputum', mechanism: 'Oral anaerobes (Prevotella/Peptostreptococcus)', significance: 'key' },
    { sign: 'Infection that will not grow on aerobic culture', mechanism: 'Obligate anaerobe (needs anaerobic culture)', significance: 'supportive' },
    { sign: 'Prosthetic/shunt infection with Cutibacterium acnes', mechanism: 'Skin anaerobe on devices', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The leading anaerobic pathogen of intra-abdominal abscess', meaning: 'Bacteroides fragilis' },
    { clue: 'The anaerobe of Lemierre syndrome', meaning: 'Fusobacterium necrophorum' },
    { clue: 'The clinical clues of anaerobic infection', meaning: 'Foul odour, gas, abscess, no aerobic growth' },
    { clue: 'The mainstays of anaerobic treatment', meaning: 'Drainage + metronidazole/clindamycin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Non-spore-forming anaerobes cause endogenous, polymicrobial, abscess-forming infections when mucosal barriers are breached, so the clinical skill is suspecting them (foul pus, gas, abscess near a mucosal surface, no aerobic growth) and treating with source control (drainage) plus anaerobic-active antibiotics — metronidazole and clindamycin, or β-lactam/β-lactamase-inhibitor combinations. Bacteroides fragilis (intra-abdominal) and Fusobacterium (Lemierre) are the exam anaerobes. Spore-forming, toxin-producing clostridia are [[clostridia-anaerobic-pathogens]]; oxygen tolerance is in [[bacterial-physiology-growth-identification]].' },
  ],

  mnemonics: [
    { hook: 'Anaerobe clues: "Foul, Gas, Abscess, no Aerobic growth"', expansion: ['Endogenous mucosal flora', 'Drain + metronidazole/clindamycin'] },
    { hook: '"Bacteroides fragilis = intra-abdominal abscess; Fusobacterium = Lemierre"', expansion: ['Bile-resistant, β-lactamase', 'O2-killed (no catalase/SOD)'] },
  ],

  traps: [
    {
      questionCategory: 'Treating anaerobic abscesses',
      wrongInstinct: 'An anaerobic intra-abdominal abscess can be cured with the right antibiotics alone',
      rightAnswer: 'Anaerobic ABSCESSES require SOURCE CONTROL — DRAINAGE of the collection — in ADDITION to anaerobic-active antibiotics (metronidazole, clindamycin, β-lactam/β-lactamase-inhibitor combinations); antibiotics penetrate an undrained abscess poorly, so relying on them alone typically fails, just as with any walled-off collection',
      why: 'Abscesses are relatively avascular and antibiotic-impermeable, so drainage is essential; treating anaerobic collections with antibiotics alone leads to persistence and relapse.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A foul-smelling intra-abdominal abscess following colonic perforation most likely involves which anaerobe, and requires what besides antibiotics?',
      options: [
        { id: 'a', text: 'Bacteroides fragilis; drainage (source control)' },
        { id: 'b', text: 'Clostridium tetani; antitoxin' },
        { id: 'c', text: 'Vibrio cholerae; rehydration' },
        { id: 'd', text: 'Legionella; a macrolide only' },
      ],
      answerId: 'a',
      explanation: 'Bacteroides fragilis, a bile-resistant colonic anaerobe, is the leading cause of anaerobic intra-abdominal abscesses; management requires drainage (source control) plus anaerobic-active antibiotics such as metronidazole, because antibiotics alone poorly penetrate an abscess.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which set of clinical clues best suggests an anaerobic infection?',
      options: [
        { id: 'a', text: 'Foul-smelling discharge, gas in tissues, abscess formation, and no growth on aerobic culture' },
        { id: 'b', text: 'Watery non-bloody diarrhoea only' },
        { id: 'c', text: 'A blanching macular rash' },
        { id: 'd', text: 'Rapid growth on standard aerobic plates' },
      ],
      answerId: 'a',
      explanation: 'Anaerobic infections classically present with foul-smelling discharge, gas production, abscess formation and location near mucosal surfaces, and fail to grow on routine aerobic culture (obligate anaerobes lack catalase/superoxide dismutase and are killed by oxygen).',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default bacteroidesGramNegativeAnaerobes;
