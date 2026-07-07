import type { Lecture } from '../../lib/types';

export const corynebacteriumListeria: Lecture = {
  id: 'corynebacterium-listeria',
  title: 'Corynebacterium & Listeria',
  system: 'microbiology',
  source: 'L12 — Gram-Positive Bacilli',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L12 Coryne/Listeria' },
    { kind: 'mechanism', label: 'Diphtheria toxin; intracellular Listeria' },
    { kind: 'exam', label: 'Pseudomembrane; tumbling motility' },
  ],

  highYield: [
    'CORYNEBACTERIUM DIPHTHERIAE is a non-spore-forming Gram-positive rod (club-shaped, "Chinese-letter" arrangement, metachromatic granules; grows on TELLURITE/Loeffler media). Its DIPHTHERIA TOXIN — encoded by a lysogenic PHAGE, acting by ADP-ribosylation of elongation factor EF-2 to halt protein synthesis — causes disease. Toxin production is detected by the ELEK test.',
    'DIPHTHERIA: a grey adherent PSEUDOMEMBRANE over the tonsils/pharynx (bleeds if scraped) that can obstruct the airway, plus systemic toxin effects — MYOCARDITIS and neuropathy. Managed with ANTITOXIN (neutralises circulating toxin — give early, do not wait) plus antibiotics (penicillin/erythromycin); PREVENTED by the toxoid vaccine (the "D" in DTP). It is now rare where vaccination is high.',
    'LISTERIA MONOCYTOGENES is a Gram-positive rod with characteristic TUMBLING MOTILITY (motile at 22–25°C) and the ability to grow at REFRIGERATOR temperatures (COLD ENRICHMENT) — hence outbreaks from unpasteurised dairy, soft cheeses and deli meats. It is a FACULTATIVE INTRACELLULAR pathogen that spreads cell-to-cell via ACTIN "rockets", evading humoral immunity.',
    'LISTERIOSIS targets specific hosts: PREGNANT women (mild maternal illness but amnionitis → fetal loss/neonatal sepsis — "granulomatosis infantiseptica"), NEONATES, the ELDERLY and IMMUNOCOMPROMISED — a leading cause of MENINGITIS in neonates, the elderly and immunosuppressed. Treatment is AMPICILLIN (± gentamicin) — note cephalosporins do NOT cover Listeria, so empiric meningitis regimens add ampicillin at the extremes of age.',
    '**The take-home: C. DIPHTHERIAE = phage-encoded diphtheria toxin (ADP-ribosylates EF-2) → grey PSEUDOMEMBRANE + myocarditis; treat with ANTITOXIN early; toxoid vaccine. LISTERIA = tumbling-motile, COLD-growing, intracellular (actin rockets) → meningitis/sepsis in PREGNANCY, neonates, elderly, immunocompromised; treat AMPICILLIN (cephalosporins miss it).** Spore-forming Bacillus is [[bacillus-anthracis-cereus]]; anaerobic clostridia are [[clostridia-anaerobic-pathogens]].',
  ],

  mechanism: {
    title: 'C. diphtheriae (phage toxin ADP-ribosylates EF-2 → pseudomembrane + myocarditis; antitoxin + toxoid) vs Listeria (tumbling-motile, cold-growing, intracellular actin rockets → meningitis in pregnancy/neonates/elderly; ampicillin)',
    steps: [
      { id: 's1', label: 'C. diphtheriae: phage-encoded toxin ADP-ribosylates EF-2 → stops protein synthesis', emphasis: 'key' },
      { id: 's2', label: 'Diphtheria: grey pseudomembrane (airway) + myocarditis/neuropathy → give ANTITOXIN early', emphasis: 'danger' },
      { id: 's3', label: 'Toxoid vaccine (D of DTP) prevents diphtheria', emphasis: 'key' },
      { id: 's4', label: 'Listeria: tumbling motility, grows cold; intracellular, actin-based cell-to-cell spread', emphasis: 'key' },
      { id: 's5', label: 'Listeriosis: meningitis/sepsis in pregnancy/neonates/elderly/immunocompromised → ampicillin (not cephalosporins)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Grey adherent pharyngeal pseudomembrane that bleeds when scraped', mechanism: 'Diphtheria toxin (C. diphtheriae)', significance: 'key' },
    { sign: 'Myocarditis and neuropathy complicating a throat infection', mechanism: 'Systemic diphtheria toxin', significance: 'key' },
    { sign: 'Neonatal or elderly meningitis, Gram-positive rod', mechanism: 'Listeria monocytogenes', significance: 'key' },
    { sign: 'Fetal loss after a pregnant woman eats soft cheese/deli meat', mechanism: 'Listeriosis (cold-growing, intracellular)', significance: 'key' },
    { sign: 'A motile Gram-positive rod showing tumbling motility at room temperature', mechanism: 'Listeria monocytogenes', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The toxin action of diphtheria', meaning: 'ADP-ribosylation of EF-2 (halts protein synthesis)' },
    { clue: 'The immediate treatment of diphtheria', meaning: 'Antitoxin (early) + antibiotics' },
    { clue: 'The antibiotic for Listeria (not covered by cephalosporins)', meaning: 'Ampicillin (± gentamicin)' },
    { clue: 'The hosts at risk from Listeria', meaning: 'Pregnant, neonates, elderly, immunocompromised' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These two non-spore-forming Gram-positive rods have distinctive, testable features: diphtheria (phage-encoded toxin ADP-ribosylating EF-2) causes an airway-threatening pseudomembrane and myocarditis and must be treated with antitoxin early (plus antibiotics) and is vaccine-preventable; Listeria (tumbling-motile, cold-growing, intracellular) causes meningitis and pregnancy-associated infection and requires ampicillin because cephalosporins miss it — a key reason empiric meningitis therapy adds ampicillin at the extremes of age. Bacillus is [[bacillus-anthracis-cereus]]; clostridia are [[clostridia-anaerobic-pathogens]].' },
  ],

  mnemonics: [
    { hook: '"Diphtheria = phage toxin ADP-ribosylates EF-2 → pseudomembrane; give ANTITOXIN"', expansion: ['Toxoid = D in DTP', 'Elek test for toxin'] },
    { hook: '"Listeria: tumbling, cold-grows, intracellular → aMPicillin (not cephalosporins)"', expansion: ['Pregnancy/neonate/elderly meningitis', 'Actin rockets = cell-to-cell'] },
  ],

  traps: [
    {
      questionCategory: 'Empiric meningitis cover for Listeria',
      wrongInstinct: 'A third-generation cephalosporin alone adequately covers bacterial meningitis in all age groups',
      rightAnswer: 'LISTERIA MONOCYTOGENES is NOT covered by cephalosporins, so empiric meningitis therapy in NEONATES, the ELDERLY and the IMMUNOCOMPROMISED must ADD AMPICILLIN (± gentamicin) to the cephalosporin; relying on a cephalosporin alone at the extremes of age risks missing Listeria, a leading cause of meningitis in exactly those groups',
      why: 'Cephalosporins have a well-known gap against Listeria, so omitting ampicillin in at-risk age groups leaves a treatable, dangerous cause of meningitis uncovered — a classic exam and clinical safety point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Diphtheria toxin causes disease by:',
      options: [
        { id: 'a', text: 'ADP-ribosylation of elongation factor EF-2, halting protein synthesis' },
        { id: 'b', text: 'Blocking acetylcholine release' },
        { id: 'c', text: 'Superantigen activation of T cells' },
        { id: 'd', text: 'Degrading peptidoglycan' },
      ],
      answerId: 'a',
      explanation: 'The phage-encoded diphtheria toxin ADP-ribosylates elongation factor EF-2, arresting host protein synthesis; locally this produces the pharyngeal pseudomembrane and systemically causes myocarditis and neuropathy. Early antitoxin neutralises circulating toxin.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Empiric antibiotics for meningitis in a neonate or an elderly patient should include ampicillin because cephalosporins do not cover:',
      options: [
        { id: 'a', text: 'Streptococcus pneumoniae' },
        { id: 'b', text: 'Listeria monocytogenes' },
        { id: 'c', text: 'Neisseria meningitidis' },
        { id: 'd', text: 'Haemophilus influenzae' },
      ],
      answerId: 'b',
      explanation: 'Listeria monocytogenes is intrinsically resistant to cephalosporins and is a leading cause of meningitis in neonates, the elderly and the immunocompromised, so ampicillin (± gentamicin) is added to empiric regimens at the extremes of age.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default corynebacteriumListeria;
