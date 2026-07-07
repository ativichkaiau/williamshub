import type { Lecture } from '../../lib/types';

export const streptococcusPneumoniaeEnterococci: Lecture = {
  id: 'streptococcus-pneumoniae-enterococci',
  title: 'Pneumococcus, Viridans Strep & Enterococci',
  system: 'microbiology',
  source: 'L11 — Gram-Positive Cocci II (Streptococci)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L11 Pneumococcus' },
    { kind: 'mechanism', label: 'α-haemolysis; optochin; capsule' },
    { kind: 'exam', label: 'Optochin/bile; viridans endocarditis; VRE' },
  ],

  highYield: [
    'STREPTOCOCCUS PNEUMONIAE (pneumococcus) is an α-HAEMOLYTIC (green), lancet-shaped diplococcus that is OPTOCHIN-SENSITIVE and BILE-SOLUBLE (distinguishing it from viridans strep). Its polysaccharide CAPSULE is the key virulence factor (anti-phagocytic) and the basis of VACCINES (PCV/PPSV). It is the leading cause of community-acquired PNEUMONIA, bacterial MENINGITIS (adults), OTITIS media and sinusitis; ASPLENIC patients are at high risk of fulminant pneumococcal sepsis.',
    'VIRIDANS streptococci (e.g. S. mitis, S. sanguinis, S. mutans) are α-haemolytic but OPTOCHIN-RESISTANT and bile-INSOLUBLE — normal mouth flora. S. MUTANS causes dental CARIES; viridans strep are a classic cause of SUBACUTE bacterial ENDOCARDITIS on previously abnormal valves (they adhere to vegetations via dextran, often after dental procedures). The optochin/bile tests separate pneumococcus from viridans.',
    'ENTEROCOCCI (E. FAECALIS, E. FAECIUM) are hardy gut commensals (grow in BILE and 6.5% NaCl; group D) causing UTIs, biliary/intra-abdominal infections, and ENDOCARDITIS (especially after GI/GU procedures). They are intrinsically resistant to many antibiotics, and VANCOMYCIN-RESISTANT ENTEROCOCCUS (VRE — D-Ala-D-Lac) is a major nosocomial, hard-to-treat pathogen (E. faecium worse).',
    'So among catalase-negative cocci: β-haemolytic = GAS/GBS (previous module); α-haemolytic splits into pneumococcus (OPTOCHIN-sensitive/bile-soluble, encapsulated, pneumonia/meningitis) vs viridans (optochin-resistant, caries/subacute endocarditis); and enterococci (grow in bile + salt, UTI/endocarditis, VRE). Simple tests (optochin, bile, NaCl growth) triage them.',
    '**The take-home: PNEUMOCOCCUS = α-haemolytic diplococcus, OPTOCHIN-SENSITIVE + BILE-SOLUBLE, encapsulated → pneumonia/meningitis/otitis (asplenia risk; vaccine). VIRIDANS = optochin-RESISTANT → dental caries (S. mutans) + SUBACUTE endocarditis. ENTEROCOCCI = grow in bile/6.5% NaCl → UTI/endocarditis; VRE (D-Ala-D-Lac) resistant.** GAS/GBS are [[streptococcus-pyogenes-agalactiae]]; VRE resistance is [[antibiotic-resistance-mechanisms]].',
  ],

  mechanism: {
    title: 'α-haemolytic split: pneumococcus (optochin-sensitive/bile-soluble, capsule → pneumonia/meningitis) vs viridans (optochin-resistant → caries/subacute endocarditis); enterococci (bile/6.5% NaCl, UTI/endocarditis, VRE)',
    steps: [
      { id: 's1', label: 'Pneumococcus: α-haemolytic diplococcus, OPTOCHIN-sensitive, BILE-SOLUBLE, encapsulated', emphasis: 'key' },
      { id: 's2', label: 'Pneumococcus → CAP, adult meningitis, otitis; asplenia = fulminant sepsis; vaccine', emphasis: 'danger' },
      { id: 's3', label: 'Viridans: optochin-RESISTANT; S. mutans caries; subacute endocarditis on abnormal valves', emphasis: 'key' },
      { id: 's4', label: 'Enterococci grow in bile + 6.5% NaCl; UTI, biliary, endocarditis', emphasis: 'key' },
      { id: 's5', label: 'VRE (E. faecium; D-Ala-D-Lac) = major resistant nosocomial pathogen', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'α-haemolytic, optochin-sensitive, bile-soluble diplococci in CAP', mechanism: 'Streptococcus pneumoniae', significance: 'key' },
    { sign: 'Fulminant sepsis after pneumococcus in an asplenic patient', mechanism: 'Loss of splenic clearance of encapsulated bacteria', significance: 'key' },
    { sign: 'Subacute endocarditis on an abnormal valve after a dental procedure', mechanism: 'Viridans streptococci', significance: 'key' },
    { sign: 'Dental caries associated with a viridans streptococcus', mechanism: 'S. mutans', significance: 'supportive' },
    { sign: 'Vancomycin-resistant enterococcus causing nosocomial infection', mechanism: 'VRE (D-Ala-D-Lac)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The tests identifying pneumococcus', meaning: 'Optochin-sensitive + bile-soluble' },
    { clue: 'The α-haemolytic strep of subacute endocarditis', meaning: 'Viridans streptococci' },
    { clue: 'The growth conditions identifying enterococci', meaning: 'Growth in bile and 6.5% NaCl' },
    { clue: 'The resistant enterococcal pathogen', meaning: 'Vancomycin-resistant enterococcus (VRE)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Among α-haemolytic streptococci, pneumococcus (optochin-sensitive, bile-soluble, encapsulated) is a top cause of pneumonia, meningitis and otitis — vaccine-preventable and especially dangerous in asplenia — while viridans streptococci (optochin-resistant) cause dental caries and subacute endocarditis on abnormal valves. Enterococci (bile/salt-tolerant) cause UTI, biliary and endocardial infection and include the resistant VRE. Simple tests triage them and guide therapy. GAS/GBS are [[streptococcus-pyogenes-agalactiae]]; VRE is in [[antibiotic-resistance-mechanisms]].' },
  ],

  mnemonics: [
    { hook: '"OVRPS": Optochin — pneumococcus Sensitive, Viridans Resistant', expansion: ['Pneumococcus bile-soluble + capsule', 'Asplenia → pneumococcal sepsis'] },
    { hook: '"Enterococci grow in Bile + Salt (6.5% NaCl); VRE = resistant"', expansion: ['Viridans = caries + subacute IE', 'E. faecium worse than faecalis'] },
  ],

  traps: [
    {
      questionCategory: 'Separating pneumococcus from viridans streptococci',
      wrongInstinct: 'All α-haemolytic streptococci are essentially the same organism',
      rightAnswer: 'α-haemolytic streptococci must be split: S. PNEUMONIAE is OPTOCHIN-SENSITIVE and BILE-SOLUBLE (encapsulated, lancet-shaped diplococcus → pneumonia/meningitis/otitis), whereas VIRIDANS streptococci are OPTOCHIN-RESISTANT and bile-INSOLUBLE (mouth flora → dental caries and subacute endocarditis) — the optochin and bile-solubility tests distinguish two clinically very different groups',
      why: 'Lumping α-haemolytic strep together confuses a vaccine-preventable, capsule-dependent invasive pathogen (pneumococcus) with low-virulence oral flora (viridans); the optochin/bile tests and clinical syndromes separate them.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An α-haemolytic, lancet-shaped diplococcus that is optochin-sensitive and bile-soluble is:',
      options: [
        { id: 'a', text: 'A viridans streptococcus' },
        { id: 'b', text: 'Streptococcus pneumoniae' },
        { id: 'c', text: 'Enterococcus faecalis' },
        { id: 'd', text: 'Streptococcus pyogenes' },
      ],
      answerId: 'b',
      explanation: 'Optochin sensitivity and bile solubility identify Streptococcus pneumoniae, an encapsulated α-haemolytic diplococcus causing pneumonia, meningitis and otitis; viridans streptococci are optochin-resistant and bile-insoluble.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which feature helps identify enterococci in the laboratory?',
      options: [
        { id: 'a', text: 'Growth in bile and 6.5% NaCl' },
        { id: 'b', text: 'Optochin sensitivity' },
        { id: 'c', text: 'Coagulase production' },
        { id: 'd', text: 'Obligate anaerobiosis' },
      ],
      answerId: 'a',
      explanation: 'Enterococci (group D) are hardy organisms that grow in bile and in 6.5% NaCl, distinguishing them from other streptococci; they cause UTIs, biliary/intra-abdominal infection and endocarditis, and include vancomycin-resistant enterococcus (VRE).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default streptococcusPneumoniaeEnterococci;
