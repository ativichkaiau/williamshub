import type { Lecture } from '../../lib/types';

export const mycoplasmaUreaplasma: Lecture = {
  id: 'mycoplasma-ureaplasma',
  title: 'Mycoplasma & Ureaplasma',
  system: 'microbiology',
  source: 'L19 — Spirochetes & Mycoplasma',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L19 Mycoplasma' },
    { kind: 'mechanism', label: 'No cell wall; sterol membrane' },
    { kind: 'exam', label: 'Atypical pneumonia; cold agglutinins' },
  ],

  highYield: [
    'Mycoplasmas are the SMALLEST free-living bacteria and, uniquely, have NO CELL WALL (their membrane contains sterols/cholesterol for stability). Consequences: they are PLEOMORPHIC, do NOT Gram-stain, and are INTRINSICALLY RESISTANT to all cell-wall-active drugs (β-LACTAMS, vancomycin) — so treatment uses MACROLIDES, TETRACYCLINES or FLUOROQUINOLONES. They grow slowly on special media ("fried-egg" colonies).',
    'MYCOPLASMA PNEUMONIAE causes ATYPICAL ("walking") PNEUMONIA — common in young adults/crowded settings (schools, military). It is insidious with prominent DRY COUGH, headache and malaise, and a chest X-ray that looks WORSE than the mild examination ("walking pneumonia"). Extrapulmonary features: COLD AGGLUTININS (IgM → autoimmune haemolysis), erythema multiforme/Stevens-Johnson-like rashes, and neurological complications.',
    'Diagnosis is largely clinical/serological or PCR (poor on Gram stain/routine culture); cold agglutinin titres may support it. UREAPLASMA UREALYTICUM (urease-positive, splits urea) and Mycoplasma genitalium/hominis are GENITAL mycoplasmas causing non-gonococcal URETHRITIS, and are implicated in pelvic infection and adverse pregnancy/neonatal outcomes.',
    'The unifying theme is the ABSENT CELL WALL — it explains the pleomorphism, failure to Gram-stain, and (critically) resistance to β-lactams, mandating macrolide/tetracycline therapy. Clinically: M. pneumoniae = atypical pneumonia (+ cold agglutinins); genital mycoplasmas/Ureaplasma = non-gonococcal urethritis.',
    '**The take-home: Mycoplasma = smallest bacteria, NO CELL WALL (sterol membrane) → not Gram-stainable, β-LACTAM-RESISTANT → treat MACROLIDE/TETRACYCLINE/fluoroquinolone. M. PNEUMONIAE = atypical "walking" pneumonia in young adults, DRY cough, COLD AGGLUTININS (IgM haemolysis). UREAPLASMA/M. genitalium = non-gonococcal urethritis.** Spirochetes are [[spirochetes-treponema-borrelia-leptospira]]; the wall-less concept links to [[bacterial-structure-cell-wall]].',
  ],

  mechanism: {
    title: 'No cell wall (sterol membrane) → not Gram-stainable, β-lactam-resistant → macrolide/tetracycline; M. pneumoniae = atypical "walking" pneumonia + cold agglutinins; Ureaplasma/M. genitalium = urethritis',
    steps: [
      { id: 's1', label: 'Smallest free-living bacteria; NO cell wall (membrane has sterols)', emphasis: 'key' },
      { id: 's2', label: 'No wall → pleomorphic, not Gram-stainable, β-lactam/vancomycin RESISTANT', emphasis: 'danger' },
      { id: 's3', label: 'Treat with macrolides/tetracyclines/fluoroquinolones', emphasis: 'key' },
      { id: 's4', label: 'M. pneumoniae: atypical "walking" pneumonia (young adults, dry cough, X-ray > exam)', emphasis: 'key' },
      { id: 's5', label: 'Cold agglutinins (IgM → haemolysis); Ureaplasma/M. genitalium → non-gonococcal urethritis', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Young adult with insidious dry cough, malaise and a chest X-ray worse than exam', mechanism: 'Mycoplasma pneumoniae (atypical pneumonia)', significance: 'key' },
    { sign: 'Autoimmune haemolysis with cold agglutinins during pneumonia', mechanism: 'M. pneumoniae IgM cold agglutinins', significance: 'key' },
    { sign: 'Pneumonia unresponsive to β-lactams', mechanism: 'No cell wall → β-lactam resistance (use macrolide)', significance: 'key' },
    { sign: 'Non-gonococcal urethritis with a urease-positive genital mycoplasma', mechanism: 'Ureaplasma urealyticum', significance: 'supportive' },
    { sign: '"Fried-egg" colonies on special media', mechanism: 'Mycoplasma growth morphology', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The structural feature mycoplasmas uniquely lack', meaning: 'A cell wall (peptidoglycan)' },
    { clue: 'Why β-lactams fail against mycoplasma', meaning: 'No cell-wall target' },
    { clue: 'The autoantibody complicating M. pneumoniae', meaning: 'Cold agglutinins (IgM)' },
    { clue: 'The drug classes that work', meaning: 'Macrolides, tetracyclines, fluoroquinolones' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The absence of a cell wall defines mycoplasmas: it makes them pleomorphic, un-Gram-stainable and — crucially — resistant to β-lactams and vancomycin, so infections are treated with macrolides, tetracyclines or fluoroquinolones. M. pneumoniae causes atypical "walking" pneumonia in young adults with a dry cough and can trigger cold-agglutinin haemolysis and mucocutaneous reactions, while Ureaplasma and M. genitalium cause non-gonococcal urethritis. Recognising a β-lactam-unresponsive atypical pneumonia points to this wall-less group. Spirochetes are [[spirochetes-treponema-borrelia-leptospira]]; cell-wall biology is [[bacterial-structure-cell-wall]].' },
  ],

  mnemonics: [
    { hook: '"No wall → No β-lactam" → use Macrolide/Tetracycline', expansion: ['Smallest bacteria, sterol membrane', 'Not Gram-stainable'] },
    { hook: '"M. pneumoniae = walking pneumonia + Cold agglutinins (IgM)"', expansion: ['Young adults/crowds', 'Ureaplasma = urethritis'] },
  ],

  traps: [
    {
      questionCategory: 'Antibiotic choice for Mycoplasma pneumonia',
      wrongInstinct: 'Community-acquired pneumonia can always be covered adequately with a β-lactam such as amoxicillin',
      rightAnswer: 'MYCOPLASMA PNEUMONIAE has NO CELL WALL, so β-LACTAMS (and vancomycin) are INEFFECTIVE — atypical pneumonia caused by it requires a MACROLIDE, TETRACYCLINE or FLUOROQUINOLONE; this is why "atypical" pathogens are specifically covered (e.g. adding a macrolide) in pneumonia regimens and why a young adult with atypical pneumonia failing amoxicillin should prompt atypical cover',
      why: 'Because mycoplasma lacks the β-lactam target, treating its pneumonia with a β-lactam alone fails; recognising the wall-less biology explains the need for macrolide/tetracycline cover in atypical pneumonia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why are Mycoplasma species inherently resistant to β-lactam antibiotics?',
      options: [
        { id: 'a', text: 'They lack a cell wall, so there is no peptidoglycan target' },
        { id: 'b', text: 'They produce large amounts of β-lactamase' },
        { id: 'c', text: 'They are obligate intracellular organisms' },
        { id: 'd', text: 'They have a thick waxy capsule' },
      ],
      answerId: 'a',
      explanation: 'Mycoplasmas uniquely lack a cell wall (their membrane contains sterols), so β-lactams — which inhibit peptidoglycan synthesis — have no target and are ineffective; treatment uses macrolides, tetracyclines or fluoroquinolones.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A university student has 2 weeks of malaise and a dry cough with a chest X-ray that looks worse than his mild symptoms; he develops cold-agglutinin haemolysis. The likely organism is:',
      options: [
        { id: 'a', text: 'Mycoplasma pneumoniae' },
        { id: 'b', text: 'Streptococcus pneumoniae' },
        { id: 'c', text: 'Klebsiella pneumoniae' },
        { id: 'd', text: 'Staphylococcus aureus' },
      ],
      answerId: 'a',
      explanation: 'Mycoplasma pneumoniae causes atypical "walking" pneumonia in young adults — insidious dry cough with radiographic findings out of proportion to examination — and can produce IgM cold agglutinins causing autoimmune haemolysis. It is treated with a macrolide or tetracycline, not a β-lactam.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default mycoplasmaUreaplasma;
