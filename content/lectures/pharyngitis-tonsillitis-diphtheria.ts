import type { Lecture } from '../../lib/types';

export const pharyngitisTonsillitisDiphtheria: Lecture = {
  id: 'pharyngitis-tonsillitis-diphtheria',
  title: 'Pharyngitis, Tonsillitis & Diphtheria',
  system: 'respiratory',
  source: 'L1 — Bacterial Infection of the Upper Respiratory Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L1 Upper Resp Bacteria' },
    { kind: 'disease', label: 'Strep throat' },
    { kind: 'exam', label: 'Rheumatic fever' },
  ],

  highYield: [
    '**Most sore throats are viral, but the one that must not be missed is Group A β-haemolytic Streptococcus (Streptococcus pyogenes, GAS).** GAS pharyngitis gives **tonsillar exudate, fever, tender anterior cervical nodes and NO cough** (the Centor criteria — the more present, the higher the likelihood, and cough favours a virus).',
    '**GAS matters because of its non-suppurative sequelae:** **acute rheumatic fever** (immune cross-reaction, ~2–4 weeks after pharyngitis — Jones criteria) and **post-streptococcal glomerulonephritis** (can follow pharyngitis or skin infection). **Treating with penicillin prevents rheumatic fever** — the reason to identify and treat GAS.',
    '**Scarlet fever** is GAS pharyngitis plus an **erythrogenic (pyrogenic) exotoxin** → a **sandpaper rash**, circumoral pallor, and a **strawberry tongue**. **Suppurative complications** include **peritonsillar abscess (quinsy** — "hot potato" voice, uvular deviation, trismus) and retropharyngeal abscess.',
    '**Diphtheria (Corynebacterium diphtheriae) forms a grey pseudomembrane** over the tonsils/pharynx that bleeds if scraped, with "bull neck" cervical swelling. Its **exotoxin (ADP-ribosylates elongation factor EF-2, halting protein synthesis)** causes **myocarditis and neuropathy**. It is **vaccine-preventable (DTP/Td)** and now rare where vaccination is high.',
    '**Beware EBV infectious mononucleosis** masquerading as bacterial tonsillitis (exudative pharyngitis, posterior nodes, splenomegaly, atypical lymphocytes) — **giving amoxicillin/ampicillin causes a florid maculopapular rash**. Confirm GAS with a rapid antigen test/throat culture before assuming bacterial cause.',
  ],

  mechanism: {
    title: 'GAS pharyngitis → suppurative + immune sequelae; diphtheria = toxin',
    steps: [
      { id: 's1', label: 'Centor: exudate + fever + tender nodes + NO cough → suspect GAS', emphasis: 'key' },
      { id: 's2', label: 'GAS toxin → scarlet fever (sandpaper rash, strawberry tongue)' },
      { id: 's3', label: 'Non-suppurative: rheumatic fever + PSGN (penicillin prevents RF)', emphasis: 'danger' },
      { id: 's4', label: 'Diphtheria: grey pseudomembrane + EF-2 toxin → myocarditis/neuropathy', emphasis: 'key' },
      { id: 's5', label: 'EBV mono mimics it — amoxicillin → rash; confirm with rapid strep/culture' },
    ],
  },

  examFindings: [
    { sign: 'Tonsillar exudate + tender cervical nodes + fever, no cough', mechanism: 'Group A streptococcal pharyngitis (Centor)', significance: 'key' },
    { sign: 'Sandpaper rash + strawberry tongue', mechanism: 'Scarlet fever — GAS erythrogenic exotoxin', significance: 'key' },
    { sign: 'Grey adherent pseudomembrane + bull neck', mechanism: 'Diphtheria (C. diphtheriae exotoxin)', significance: 'key' },
    { sign: '"Hot potato" voice + uvular deviation + trismus', mechanism: 'Peritonsillar abscess (quinsy)', significance: 'supportive' },
    { sign: 'Rash after amoxicillin in exudative pharyngitis', mechanism: 'EBV infectious mononucleosis (not true allergy)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The bacterial pharyngitis that can trigger rheumatic fever', meaning: 'Group A Streptococcus (S. pyogenes)' },
    { clue: 'The toxin mechanism of diphtheria', meaning: 'ADP-ribosylation of EF-2 (halts protein synthesis)' },
    { clue: 'The clinical rule favouring strep over a virus', meaning: 'Centor criteria (exudate, fever, nodes, absence of cough)' },
    { clue: 'The organism causing a strawberry tongue + sandpaper rash', meaning: 'GAS producing erythrogenic exotoxin (scarlet fever)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Penicillin/amoxicillin for GAS **prevents rheumatic fever** (antibiotic choice detailed in [[respiratory-tract-antibiotics]]); diphtheria needs **antitoxin + antibiotics** and is prevented by vaccination. Rheumatic fever can scar heart valves (mitral stenosis). Other upper-airway bacterial disease: [[otitis-media-sinusitis-epiglottitis]]; upper-tract tumours/inflammation: [[nasal-sinus-inflammatory-pathology]].' },
  ],

  mnemonics: [
    { hook: 'Centor: "Can\'t cough, Exudate, Nodes, Temperature, young age" → think strep', expansion: ['Cough present → favours virus', 'More criteria = higher GAS probability'] },
    { hook: 'Diphtheria = "grey membrane + EF-2 toxin" (heart + nerves)', expansion: ['Pseudomembrane bleeds if scraped', 'Myocarditis + neuropathy', 'Vaccine-preventable'] },
  ],

  traps: [
    {
      questionCategory: 'Why we treat streptococcal pharyngitis',
      wrongInstinct: 'Antibiotics are given mainly to shorten the sore throat',
      rightAnswer: 'The primary reason to identify and treat GAS pharyngitis with penicillin is to PREVENT acute rheumatic fever (and suppurative complications); the symptomatic benefit is modest',
      why: 'Rheumatic fever is an immune sequela preventable by eradicating the organism early; this public-health rationale — not symptom relief — drives testing and treatment of strep throat.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 10-year-old has tonsillar exudates, fever and tender cervical nodes but no cough. Prompt penicillin treatment is recommended primarily to:',
      options: [
        { id: 'a', text: 'Shorten the illness by several days' },
        { id: 'b', text: 'Prevent acute rheumatic fever' },
        { id: 'c', text: 'Prevent transmission only' },
        { id: 'd', text: 'Treat a likely viral cause' },
      ],
      answerId: 'b',
      explanation: 'These Centor features suggest Group A streptococcal pharyngitis; the key reason to treat is prevention of acute rheumatic fever (and suppurative complications), as the symptomatic benefit is small.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The exotoxin of Corynebacterium diphtheriae causes cell injury by:',
      options: [
        { id: 'a', text: 'Degrading IgA' },
        { id: 'b', text: 'ADP-ribosylating elongation factor EF-2, halting protein synthesis' },
        { id: 'c', text: 'Activating adenylate cyclase' },
        { id: 'd', text: 'Forming pores in membranes' },
      ],
      answerId: 'b',
      explanation: 'Diphtheria toxin ADP-ribosylates elongation factor EF-2, blocking protein synthesis; systemic spread produces myocarditis and neuropathy, while the local effect is the grey pharyngeal pseudomembrane.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default pharyngitisTonsillitisDiphtheria;
