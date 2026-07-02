import type { Lecture } from '../../lib/types';

export const respiratoryTractAntibiotics: Lecture = {
  id: 'respiratory-tract-antibiotics',
  title: 'Antibiotics for Respiratory Infections',
  system: 'respiratory',
  source: 'L14 — Antibiotics for Respiratory Diseases',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L14 Respiratory Antibiotics' },
    { kind: 'treatment', label: 'Empiric therapy' },
    { kind: 'mechanism', label: 'β-lactams & macrolides' },
  ],

  highYield: [
    '**Antibiotic choice for a respiratory infection follows the likely organism at that site.** For **otitis media, sinusitis and streptococcal pharyngitis, amoxicillin (± clavulanate) is first-line** — it covers S. pneumoniae, H. influenzae and Group A Streptococcus; **penicillin** is specifically used for confirmed GAS pharyngitis (to prevent rheumatic fever).',
    '**Community-acquired pneumonia (CAP) is treated empirically to cover both typical and atypical organisms:** a **β-lactam (amoxicillin/ceftriaxone) PLUS a macrolide (azithromycin), or a respiratory fluoroquinolone (levofloxacin/moxifloxacin) alone.** The macrolide/fluoroquinolone is essential because β-lactams do not cover atypicals (Mycoplasma, Legionella, Chlamydophila).',
    '**Know the mechanisms:** **β-lactams (penicillins, cephalosporins) inhibit cell-wall synthesis (bactericidal)**; **macrolides and doxycycline inhibit the ribosome (bacteriostatic)** and reach intracellular atypicals; **fluoroquinolones inhibit DNA gyrase/topoisomerase (bactericidal)** and cover atypicals plus many Gram-negatives.',
    '**Match tougher settings to broader drugs:** **hospital-acquired/ventilator pneumonia** needs anti-pseudomonal ± anti-MRSA cover (e.g. piperacillin-tazobactam/cefepime ± vancomycin); **aspiration/abscess** needs anaerobic cover (amoxicillin-clavulanate, clindamycin or metronidazole with a companion). De-escalate once cultures return.',
    '**Key adverse effects and cautions:** penicillin allergy/anaphylaxis; **macrolides and fluoroquinolones prolong the QT interval**; **fluoroquinolones cause tendinopathy and are avoided in children/pregnancy**; **doxycycline stains teeth (avoid in young children/pregnancy)**. Antibiotic stewardship — no antibiotics for viral URIs — limits resistance.',
  ],

  mechanism: {
    title: 'Site → likely organism → drug; cover atypicals in CAP',
    steps: [
      { id: 's1', label: 'Otitis/sinusitis/GAS: amoxicillin (± clavulanate); penicillin for GAS', emphasis: 'key' },
      { id: 's2', label: 'CAP: β-lactam + macrolide, OR respiratory fluoroquinolone', emphasis: 'key' },
      { id: 's3', label: 'β-lactam = cell wall; macrolide/doxy = ribosome; FQ = DNA gyrase', emphasis: 'key' },
      { id: 's4', label: 'HAP/VAP: anti-pseudomonal ± anti-MRSA; aspiration: add anaerobic cover' },
      { id: 's5', label: 'Cautions: QT (macrolide/FQ), tendons (FQ), teeth (doxy); no ABx for viral URI', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Amoxicillin (± clavulanate) as first-line for otitis/sinusitis', mechanism: 'Covers S. pneumoniae, H. influenzae, M. catarrhalis', significance: 'key' },
    { sign: 'β-lactam + macrolide chosen for CAP', mechanism: 'Adds atypical (Mycoplasma/Legionella/Chlamydophila) cover', significance: 'key' },
    { sign: 'QT prolongation on azithromycin or levofloxacin', mechanism: 'Macrolide/fluoroquinolone class effect', significance: 'supportive' },
    { sign: 'Tendon rupture risk with a fluoroquinolone', mechanism: 'Fluoroquinolone tendinopathy', significance: 'supportive' },
    { sign: 'Vancomycin added for suspected MRSA pneumonia', mechanism: 'Nosocomial/post-influenza staphylococcal cover', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The first-line oral antibiotic for otitis media/sinusitis', meaning: 'Amoxicillin (± clavulanate)' },
    { clue: 'Why CAP therapy combines a β-lactam with a macrolide', meaning: 'β-lactams miss atypicals; the macrolide covers them' },
    { clue: 'The antibiotic classes that prolong the QT interval', meaning: 'Macrolides and fluoroquinolones' },
    { clue: 'The single-agent alternative covering typical + atypical CAP', meaning: 'A respiratory fluoroquinolone (levofloxacin/moxifloxacin)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These choices operationalise the microbiology of [[community-acquired-pneumonia]], [[hospital-aspiration-pneumonia-abscess]] and [[otitis-media-sinusitis-epiglottitis]], and penicillin for GAS prevents the rheumatic fever noted in [[pharyngitis-tonsillitis-diphtheria]]. Anti-TB and antiviral/antifungal agents are covered separately ([[anti-tuberculosis-drugs]], [[respiratory-antiviral-drugs]]). Stewardship (no antibiotics for viral URIs) limits resistance.' },
  ],

  mnemonics: [
    { hook: 'CAP empiric = "β-lactam + macrolide" (or respiratory fluoroquinolone alone)', expansion: ['Macrolide covers atypicals', 'FQ covers typical + atypical'] },
    { hook: 'QT prolongers: "Macrolides + Fluoroquinolones"', expansion: ['FQ also: tendons, avoid in kids/pregnancy', 'Doxycycline: teeth'] },
  ],

  traps: [
    {
      questionCategory: 'Empiric therapy for community-acquired pneumonia',
      wrongInstinct: 'Amoxicillin alone is adequate empiric therapy for community-acquired pneumonia',
      rightAnswer: 'Empiric CAP therapy must also cover atypical organisms, so a β-lactam is combined with a macrolide (or a respiratory fluoroquinolone is used alone); β-lactam monotherapy misses Mycoplasma, Legionella and Chlamydophila',
      why: 'Atypicals are common and intrinsically β-lactam-resistant; omitting atypical cover is a frequent cause of treatment failure, which is why guideline regimens are combinations.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously well adult is admitted with community-acquired pneumonia. Which empiric regimen best covers both typical and atypical organisms?',
      options: [
        { id: 'a', text: 'Amoxicillin alone' },
        { id: 'b', text: 'A β-lactam (e.g. ceftriaxone) plus a macrolide (e.g. azithromycin)' },
        { id: 'c', text: 'Metronidazole alone' },
        { id: 'd', text: 'Vancomycin alone' },
      ],
      answerId: 'b',
      explanation: 'A β-lactam covers typical organisms (e.g. S. pneumoniae) but not atypicals; adding a macrolide (or using a respiratory fluoroquinolone alone) covers Mycoplasma, Legionella and Chlamydophila.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Macrolides such as azithromycin inhibit bacterial growth by:',
      options: [
        { id: 'a', text: 'Inhibiting cell-wall synthesis' },
        { id: 'b', text: 'Binding the 50S ribosomal subunit to inhibit protein synthesis' },
        { id: 'c', text: 'Inhibiting DNA gyrase' },
        { id: 'd', text: 'Disrupting folate synthesis' },
      ],
      answerId: 'b',
      explanation: 'Macrolides bind the 50S ribosomal subunit, inhibiting protein synthesis (bacteriostatic), and penetrate cells to reach atypical/intracellular organisms. β-lactams target the cell wall and fluoroquinolones target DNA gyrase.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default respiratoryTractAntibiotics;
