import type { Lecture } from '../../lib/types';

export const coagulaseNegativeStaphylococci: Lecture = {
  id: 'coagulase-negative-staphylococci',
  title: 'Coagulase-Negative Staphylococci',
  system: 'microbiology',
  source: 'L10 — Gram-Positive Cocci I (Staphylococci)',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Micro' },
    { kind: 'lecture', label: 'L10 CoNS' },
    { kind: 'mechanism', label: 'Biofilm; novobiocin test' },
    { kind: 'exam', label: 'S. epidermidis devices; S. saprophyticus UTI' },
  ],

  highYield: [
    'Coagulase-NEGATIVE staphylococci (CoNS) are catalase-positive, coagulase-NEGATIVE skin commensals — usually low-virulence, but important as OPPORTUNISTS and as common CONTAMINANTS of blood cultures. The two exam species are S. EPIDERMIDIS and S. SAPROPHYTICUS, separated by the NOVOBIOCIN test (epidermidis SENSITIVE, saprophyticus RESISTANT).',
    'STAPHYLOCOCCUS EPIDERMIDIS (novobiocin-SENSITIVE) produces a polysaccharide BIOFILM ("slime") that lets it adhere to and infect PROSTHETIC/indwelling DEVICES — prosthetic heart valves, IV catheters/lines, CSF shunts, prosthetic joints — and cause device-related bacteraemia. Because it is a skin commensal, a single positive blood culture is often CONTAMINATION; device infection usually needs device REMOVAL plus antibiotics (often vancomycin, as many are methicillin-resistant).',
    'STAPHYLOCOCCUS SAPROPHYTICUS (novobiocin-RESISTANT) is a leading cause of uncomplicated UTI/CYSTITIS in young, sexually active WOMEN — second only to E. coli. It is a genuine pathogen in this setting (not a contaminant), presenting with dysuria/frequency.',
    'So CoNS matter in two archetypes: DEVICE/prosthetic infection and blood-culture contamination (S. epidermidis, biofilm) and community UTI in young women (S. saprophyticus). The novobiocin test and clinical context distinguish contamination from true infection, guiding whether to treat and whether to remove hardware.',
    '**The take-home: coagulase-NEGATIVE staph = catalase+, coagulase−. S. EPIDERMIDIS (novobiocin-SENSITIVE) = BIOFILM on prosthetic DEVICES/lines/valves + common blood-culture contaminant → often remove device. S. SAPROPHYTICUS (novobiocin-RESISTANT) = UTI in young women. Context distinguishes contamination from infection.** The coagulase-positive species is [[staphylococcus-aureus]]; UTI biology is [[uti-pathogenesis-microbiology]].',
  ],

  mechanism: {
    title: 'CoNS (catalase+, coagulase−): S. epidermidis (novobiocin-sensitive, biofilm on devices/valves, blood-culture contaminant) vs S. saprophyticus (novobiocin-resistant, UTI in young women)',
    steps: [
      { id: 's1', label: 'CoNS = catalase+, coagulase−; skin commensals, opportunists/contaminants', emphasis: 'key' },
      { id: 's2', label: 'S. epidermidis = novobiocin-SENSITIVE; biofilm on prosthetic devices/lines/valves', emphasis: 'key' },
      { id: 's3', label: 'S. epidermidis = common blood-culture contaminant → interpret with context', emphasis: 'key' },
      { id: 's4', label: 'Device infection often needs device REMOVAL + antibiotics (often vancomycin)', emphasis: 'danger' },
      { id: 's5', label: 'S. saprophyticus = novobiocin-RESISTANT; UTI in young women (2nd to E. coli)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Prosthetic valve or IV-line infection with a biofilm-forming CoNS', mechanism: 'S. epidermidis (device biofilm)', significance: 'key' },
    { sign: 'A single blood culture growing S. epidermidis in a well patient', mechanism: 'Likely skin contamination', significance: 'key' },
    { sign: 'Dysuria and frequency in a young sexually active woman, novobiocin-resistant CoNS', mechanism: 'S. saprophyticus UTI', significance: 'key' },
    { sign: 'Novobiocin-sensitive coagulase-negative staph', mechanism: 'S. epidermidis', significance: 'supportive' },
    { sign: 'CSF shunt infection with coagulase-negative staph', mechanism: 'S. epidermidis biofilm', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The test separating S. epidermidis from S. saprophyticus', meaning: 'Novobiocin (epidermidis sensitive, saprophyticus resistant)' },
    { clue: 'The CoNS of prosthetic-device infection', meaning: 'S. epidermidis (biofilm)' },
    { clue: 'The CoNS causing UTI in young women', meaning: 'S. saprophyticus' },
    { clue: 'The usual key step in device-related CoNS infection', meaning: 'Remove the device (+ antibiotics)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'CoNS are usually low-virulence commensals, so the clinical skill is context: S. epidermidis is both a biofilm-forming device pathogen (prosthetic valves, lines, shunts, joints — often needing hardware removal plus vancomycin) and the classic blood-culture contaminant, while S. saprophyticus is a true UTI pathogen in young women. The novobiocin test and the clinical picture separate contamination from infection and guide treatment. The coagulase-positive species is [[staphylococcus-aureus]]; UTI microbiology is [[uti-pathogenesis-microbiology]].' },
  ],

  mnemonics: [
    { hook: '"epidermidiS = Sensitive to novobiocin, Sticks to devices (biofilm)"', expansion: ['Common blood-culture contaminant', 'Often remove the device'] },
    { hook: '"sapRophyticus = Resistant to novobiocin, uRinary (young women)"', expansion: ['2nd to E. coli for cystitis', 'A true pathogen, not contaminant'] },
  ],

  traps: [
    {
      questionCategory: 'Positive blood culture for S. epidermidis',
      wrongInstinct: 'Any blood culture growing Staphylococcus epidermidis must be treated as a true bloodstream infection',
      rightAnswer: 'Because S. epidermidis is a normal SKIN commensal, a single positive blood culture in a well patient is frequently a CONTAMINANT, not a true infection; genuine infection is suggested by MULTIPLE positive cultures, the presence of a PROSTHETIC DEVICE/line, and clinical signs — so interpretation requires clinical context, and true device infections often need the device REMOVED as well as antibiotics',
      why: 'Treating every S. epidermidis culture as real infection leads to unnecessary vancomycin, while the true device infections need hardware removal; distinguishing contamination from infection by context is the key judgement.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young, sexually active woman has dysuria and frequency; urine grows a coagulase-negative, novobiocin-resistant staphylococcus. The organism is:',
      options: [
        { id: 'a', text: 'Staphylococcus epidermidis' },
        { id: 'b', text: 'Staphylococcus saprophyticus' },
        { id: 'c', text: 'Staphylococcus aureus' },
        { id: 'd', text: 'Streptococcus agalactiae' },
      ],
      answerId: 'b',
      explanation: 'S. saprophyticus (coagulase-negative, novobiocin-resistant) is a leading cause of uncomplicated cystitis in young, sexually active women, second only to E. coli — a genuine uropathogen in this setting.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Staphylococcus epidermidis causes prosthetic-device and catheter infections mainly because it:',
      options: [
        { id: 'a', text: 'Produces a potent exotoxin' },
        { id: 'b', text: 'Forms a polysaccharide biofilm ("slime") that adheres to devices and resists clearance' },
        { id: 'c', text: 'Is coagulase positive' },
        { id: 'd', text: 'Is an obligate anaerobe' },
      ],
      answerId: 'b',
      explanation: 'S. epidermidis produces a polysaccharide biofilm that lets it adhere to prosthetic valves, catheters, shunts and joints and evade host defences and antibiotics, so device-related infections typically require removal of the hardware plus antibiotics (often vancomycin).',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default coagulaseNegativeStaphylococci;
