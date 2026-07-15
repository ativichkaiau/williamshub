import type { Lecture } from '../../lib/types';

export const staphylococcusAureus: Lecture = {
  id: 'staphylococcus-aureus',
  title: 'Staphylococcus aureus',
  system: 'microbiology',
  source: 'L10 — Gram-Positive Cocci I (Staphylococci)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L10 S. aureus' },
    { kind: 'mechanism', label: 'Coagulase+, toxins, MRSA' },
    { kind: 'exam', label: 'TSST, exfoliatin, enterotoxin; MRSA' },
  ],

  highYield: [
    '*Staphylococcus aureus* is a GRAM-POSITIVE COCCUS in CLUSTERS, CATALASE-positive (distinguishes staph from strep) and — uniquely among staphylococci — COAGULASE-POSITIVE (clots plasma). It is β-haemolytic, golden, and ferments mannitol (yellow on mannitol salt agar). A common coloniser of skin/nares that turns invasive, it is a leading cause of skin/soft-tissue, bloodstream, bone/joint and device infections.',
    '**Virulence factors:** PROTEIN A (binds IgG Fc → blocks opsonisation), COAGULASE, and toxins. Toxin-mediated diseases are high-yield: TSST-1 → toxic shock syndrome (a superantigen → massive cytokine release, fever, rash, hypotension — classic with tampons/wounds); EXFOLIATIVE toxin → staphylococcal scalded skin syndrome (SSSS, sloughing in children); heat-stable ENTEROTOXINS → rapid-onset food poisoning (pre-formed toxin, vomiting 1–6 h); PVL → severe necrotising skin/pneumonia.',
    'Pyogenic (invasive) disease: FURUNCLES/carbuncles/abscesses, impetigo, cellulitis, surgical-wound infection; and deeper — bacteraemia/SEPSIS, right-sided (and prosthetic-valve) ENDOCARDITIS, OSTEOMYELITIS/septic arthritis (commonest cause), and device/prosthetic infections. It is the classic cause of acute infective endocarditis in IV drug users.',
    'MRSA (methicillin-resistant *S. aureus*) carries mecA → PBP2a → resistance to ALL standard β-lactams; treat with vancomycin/linezolid/daptomycin (community vs hospital MRSA differ). Distinguish toxin-mediated syndromes (TSS, SSSS, food poisoning — treat toxin/supportive) from pyogenic infection (drain + antibiotics). Diagnosis: Gram stain + culture, catalase, coagulase, and susceptibility testing.',
    '**The take-home: S. aureus = catalase+, COAGULASE-POSITIVE Gram-positive cocci in clusters. Toxin diseases: TSST-1 (toxic shock), exfoliatin (SSSS), enterotoxin (food poisoning), PVL (necrotising). Pyogenic: abscesses, endocarditis (IVDU/right-sided), commonest OSTEOMYELITIS. MRSA = mecA/PBP2a → vancomycin. Drain abscesses.** Coagulase-negative species are [[coagulase-negative-staphylococci]]; resistance is [[antibiotic-resistance-mechanisms]].',
  ],

  mechanism: {
    title: 'Coagulase-positive Gram-positive cocci in clusters; toxins (TSST superantigen, exfoliatin→SSSS, enterotoxin→food poisoning, PVL); pyogenic (abscess/endocarditis/osteomyelitis); MRSA=mecA/PBP2a',
    steps: [
      { id: 's1', label: 'Catalase+ (vs strep), COAGULASE+ (vs other staph); clusters, β-haemolytic', emphasis: 'key' },
      { id: 's2', label: 'TSST-1 superantigen → toxic shock; exfoliatin → SSSS (children)', emphasis: 'danger' },
      { id: 's3', label: 'Heat-stable enterotoxin → rapid pre-formed-toxin food poisoning (vomiting 1–6 h)', emphasis: 'key' },
      { id: 's4', label: 'Pyogenic: abscesses, endocarditis (IVDU/right-sided), commonest osteomyelitis', emphasis: 'key' },
      { id: 's5', label: 'MRSA = mecA → PBP2a → all β-lactams fail → vancomycin/linezolid', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Gram-positive cocci in clusters, catalase- and coagulase-positive', mechanism: 'Staphylococcus aureus', significance: 'key' },
    { sign: 'Fever, diffuse rash, hypotension and desquamation with tampon use', mechanism: 'TSST-1 toxic shock syndrome (superantigen)', significance: 'key' },
    { sign: 'Vomiting 1–6 h after eating (pre-formed toxin)', mechanism: 'Enterotoxin food poisoning', significance: 'key' },
    { sign: 'Superficial skin sloughing in a young child', mechanism: 'Exfoliative toxin (SSSS)', significance: 'supportive' },
    { sign: 'Acute right-sided endocarditis in an IV drug user', mechanism: 'S. aureus bacteraemia', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The test separating staphylococci from streptococci', meaning: 'Catalase (staph positive)' },
    { clue: 'The test separating S. aureus from other staphylococci', meaning: 'Coagulase (aureus positive)' },
    { clue: 'The superantigen toxin causing toxic shock', meaning: 'TSST-1' },
    { clue: 'The MRSA resistance gene/protein', meaning: 'mecA → PBP2a' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: '*S. aureus* is a versatile pathogen: toxin-mediated syndromes (TSS, SSSS, food poisoning) are recognised and managed supportively/by source control, while pyogenic infections (abscesses, endocarditis, the commonest osteomyelitis) require drainage plus antibiotics chosen by susceptibility — MRSA (mecA/PBP2a) needs vancomycin/linezolid/daptomycin rather than β-lactams. Catalase and coagulase tests anchor identification. Coagulase-negative staphylococci are [[coagulase-negative-staphylococci]]; resistance mechanisms are [[antibiotic-resistance-mechanisms]].' },
  ],

  mnemonics: [
    { hook: 'S. aureus toxins: "TSST (shock), Exfoliatin (SSSS), Enterotoxin (food), PVL (necrotising)"', expansion: ['Catalase+ + Coagulase+', 'Commonest osteomyelitis'] },
    { hook: '"MRSA = mecA → PBP2a → vancomycin"', expansion: ['Drain abscesses', 'IVDU → right-sided endocarditis'] },
  ],

  traps: [
    {
      questionCategory: 'Staphylococcal food poisoning timing',
      wrongInstinct: 'Staphylococcal food poisoning takes a day or two because the bacteria must grow in the gut',
      rightAnswer: 'Staphylococcal food poisoning is caused by a PRE-FORMED, HEAT-STABLE ENTEROTOXIN already in the food, so symptoms (prominent VOMITING) begin RAPIDLY — typically 1–6 HOURS after eating — without needing the organism to colonise the gut; this rapid, toxin-mediated onset distinguishes it from infectious enteritis (which takes longer)',
      why: 'Because the toxin is pre-formed and heat-stable (survives reheating), the illness is fast and vomiting-predominant; expecting a delayed, infection-type course misidentifies the mechanism and source.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which pair of tests identifies Staphylococcus aureus and separates it from streptococci and other staphylococci?',
      options: [
        { id: 'a', text: 'Oxidase positive, urease positive' },
        { id: 'b', text: 'Catalase positive (vs strep) and coagulase positive (vs other staph)' },
        { id: 'c', text: 'Optochin sensitive, bile soluble' },
        { id: 'd', text: 'Catalase negative, coagulase negative' },
      ],
      answerId: 'b',
      explanation: 'Staphylococci are catalase-positive (streptococci are catalase-negative), and S. aureus is coagulase-positive, distinguishing it from the coagulase-negative staphylococci (e.g. S. epidermidis, S. saprophyticus).',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Toxic shock syndrome caused by S. aureus TSST-1 occurs because the toxin acts as a:',
      options: [
        { id: 'a', text: 'Superantigen causing massive nonspecific T-cell activation and cytokine release' },
        { id: 'b', text: 'Neurotoxin blocking acetylcholine release' },
        { id: 'c', text: 'Pre-formed enterotoxin causing vomiting' },
        { id: 'd', text: 'β-lactamase' },
      ],
      answerId: 'a',
      explanation: 'TSST-1 is a superantigen that cross-links MHC II and T-cell receptors nonspecifically, triggering massive cytokine release (fever, rash, hypotension, multi-organ involvement) — the mechanism of staphylococcal toxic shock syndrome.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default staphylococcusAureus;
