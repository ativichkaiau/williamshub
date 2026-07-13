import type { Lecture } from '../../lib/types';

export const haemophilusBordetellaSmallGramNegativeRods: Lecture = {
  id: 'haemophilus-bordetella-small-gram-negative-rods',
  title: 'Haemophilus, Bordetella & Small Gram-Negative Rods',
  system: 'microbiology',
  source: 'L15 — Gram-Negative Cocci & Small Gram-Negative Rods',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L15 Coccobacilli' },
    { kind: 'mechanism', label: 'Fastidious coccobacilli; toxins' },
    { kind: 'exam', label: 'Hib epiglottitis; pertussis; zoonoses' },
  ],

  highYield: [
    'These are small, fastidious GRAM-NEGATIVE COCCOBACILLI. HAEMOPHILUS INFLUENZAE needs growth FACTORS V (NAD) and X (haemin) — hence "chocolate" agar, and SATELLITISM around *S. aureus*. The encapsulated type b (Hib) caused MENINGITIS, EPIGLOTTITIS ("cherry-red", drooling, tripod — a paediatric airway emergency), and septic arthritis — now rare due to the Hib CONJUGATE VACCINE; non-typeable strains cause otitis media/exacerbations of COPD.',
    'BORDETELLA PERTUSSIS causes WHOOPING COUGH (pertussis): PERTUSSIS TOXIN (ADP-ribosylates Gi → ↑cAMP) and other factors produce catarrhal → PAROXYSMAL coughing fits with an inspiratory "whoop", post-tussive vomiting, and marked LYMPHOCYTOSIS; dangerous in infants (apnoea). Vaccine-preventable (the "P" in DTaP); treat/prophylaxis with macrolides.',
    'Zoonotic small Gram-negative rods: BRUCELLA (undulant fever, hepatosplenomegaly — unpasteurised dairy/livestock; intracellular, relapsing); FRANCISELLA TULARENSIS (tularaemia — rabbits/ticks, very low infective dose); PASTEURELLA MULTOCIDA (cellulitis after CAT/dog BITES); BARTONELLA (cat-scratch disease). LEGIONELLA PNEUMOPHILA (from water systems/air-conditioning) causes atypical pneumonia with hyponatraemia/diarrhoea — needs charcoal-yeast (BCYE) agar and urinary antigen; treat macrolide/fluoroquinolone.',
    'Recognising these hinges on EXPOSURE and clues: Hib (unvaccinated child, epiglottitis), pertussis (paroxysmal cough + whoop + lymphocytosis), *Brucella* (dairy/animals, undulant fever), *Pasteurella* (animal bite), *Legionella* (water/AC, hyponatraemia). Special culture requirements (factors V/X, BCYE) and vaccines/antibiotics follow.',
    '**The take-home: fastidious Gram-negative COCCOBACILLI. HAEMOPHILUS INFLUENZAE (factors V+X) → Hib epiglottitis/meningitis (vaccine). BORDETELLA PERTUSSIS → whooping cough (pertussis toxin, lymphocytosis; vaccine/macrolides). Zoonoses: BRUCELLA (dairy, undulant), FRANCISELLA (tularaemia), PASTEURELLA (animal bites); LEGIONELLA (water/AC, hyponatraemia, atypical pneumonia).** *Neisseria* are [[neisseria-meningitidis-gonorrhoeae]]; the diphtheria vaccine partner is [[corynebacterium-listeria]].',
  ],

  mechanism: {
    title: 'Fastidious Gram-negative coccobacilli: H. influenzae (factors V+X → Hib epiglottitis/meningitis, vaccine); B. pertussis (pertussis toxin → whooping cough/lymphocytosis); zoonoses (Brucella/Francisella/Pasteurella); Legionella (water, atypical pneumonia)',
    steps: [
      { id: 's1', label: 'H. influenzae needs factors V (NAD) + X (haemin); Hib capsule = invasive', emphasis: 'key' },
      { id: 's2', label: 'Hib → epiglottitis (airway emergency)/meningitis — now rare (conjugate vaccine)', emphasis: 'danger' },
      { id: 's3', label: 'B. pertussis: pertussis toxin (↑cAMP) → paroxysmal cough + whoop + lymphocytosis', emphasis: 'key' },
      { id: 's4', label: 'Zoonoses: Brucella (dairy/undulant), Francisella (tularaemia), Pasteurella (animal bites)', emphasis: 'key' },
      { id: 's5', label: 'Legionella (water/AC): atypical pneumonia + hyponatraemia/diarrhoea; BCYE agar/urinary antigen', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Cherry-red swollen epiglottis with drooling and tripod posture in an unvaccinated child', mechanism: 'Hib epiglottitis (airway emergency)', significance: 'key' },
    { sign: 'Paroxysmal cough with inspiratory "whoop" and lymphocytosis', mechanism: 'Bordetella pertussis', significance: 'key' },
    { sign: 'Undulant fever and hepatosplenomegaly after unpasteurised dairy', mechanism: 'Brucellosis', significance: 'key' },
    { sign: 'Cellulitis developing hours after a cat bite', mechanism: 'Pasteurella multocida', significance: 'supportive' },
    { sign: 'Atypical pneumonia with hyponatraemia and diarrhoea after hotel/AC exposure', mechanism: 'Legionella pneumophila', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The two growth factors H. influenzae requires', meaning: 'Factor V (NAD) and factor X (haemin)' },
    { clue: 'The toxin/lab clue of pertussis', meaning: 'Pertussis toxin; marked lymphocytosis' },
    { clue: 'The organism after a cat or dog bite', meaning: 'Pasteurella multocida' },
    { clue: 'The special agar for Legionella', meaning: 'Buffered charcoal-yeast extract (BCYE)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These fastidious coccobacilli are recognised by exposure and characteristic syndromes: Hib (epiglottitis/meningitis in unvaccinated children — an airway emergency, now vaccine-rare), *Bordetella pertussis* (whooping cough with lymphocytosis — vaccine-preventable, macrolide-treated), and zoonoses tied to specific exposures (*Brucella* from dairy, *Francisella* tularaemia, *Pasteurella* from animal bites, *Legionella* from water systems with hyponatraemic atypical pneumonia). Their special culture needs (factors V/X, BCYE) and vaccines/antibiotics follow. *Neisseria* are [[neisseria-meningitidis-gonorrhoeae]].' },
  ],

  mnemonics: [
    { hook: 'H. influenzae needs "V + X" (chocolate agar); Hib = epiglottitis (vaccine)', expansion: ['Satellitism around S. aureus', 'Non-typeable → otitis/COPD'] },
    { hook: '"Pertussis = Paroxysms + whoop + lymphocytosis"; bites = Pasteurella; water = Legionella', expansion: ['Brucella = dairy/undulant', 'Legionella = hyponatraemia'] },
  ],

  traps: [
    {
      questionCategory: 'Epiglottitis as an airway emergency',
      wrongInstinct: 'A child with fever and sore throat who is drooling and sitting forward should have the throat examined immediately with a tongue depressor',
      rightAnswer: 'Suspected EPIGLOTTITIS (classically Hib: high fever, drooling, muffled voice, tripod/sniffing posture, stridor in an unvaccinated child) is an AIRWAY EMERGENCY — you must NOT agitate the child or examine the throat with a tongue depressor, as this can precipitate complete airway OBSTRUCTION; secure the airway in a controlled setting first',
      why: 'Provoking the child or instrumenting the pharynx in epiglottitis can trigger fatal laryngospasm/obstruction, so airway management takes priority over examination — a critical safety point.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A prolonged cough with severe paroxysms, an inspiratory "whoop", post-tussive vomiting and a strikingly high lymphocyte count suggests:',
      options: [
        { id: 'a', text: 'Bordetella pertussis (whooping cough)' },
        { id: 'b', text: 'Legionella pneumophila' },
        { id: 'c', text: 'Haemophilus influenzae type b' },
        { id: 'd', text: 'Brucella' },
      ],
      answerId: 'a',
      explanation: 'Bordetella pertussis causes whooping cough: after a catarrhal phase, paroxysmal coughing fits with an inspiratory whoop and post-tussive vomiting develop, with marked lymphocytosis (from pertussis toxin). It is vaccine-preventable and treated/prophylaxed with macrolides.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Haemophilus influenzae is cultured on chocolate agar because it requires:',
      options: [
        { id: 'a', text: 'Anaerobic conditions' },
        { id: 'b', text: 'Growth factors V (NAD) and X (haemin) released by lysed red cells' },
        { id: 'c', text: 'High salt concentration' },
        { id: 'd', text: 'A protein capsule for growth' },
      ],
      answerId: 'b',
      explanation: 'H. influenzae is fastidious, needing factor V (NAD) and factor X (haemin); chocolate (heated blood) agar releases both, and the organism shows satellitism around S. aureus colonies that supply factor V. The Hib capsule mediates invasiveness, not growth.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default haemophilusBordetellaSmallGramNegativeRods;
