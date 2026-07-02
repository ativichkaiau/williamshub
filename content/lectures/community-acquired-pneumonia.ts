import type { Lecture } from '../../lib/types';
import { PNEUMONIA_PATTERNS } from '../../lib/figures';

export const communityAcquiredPneumonia: Lecture = {
  id: 'community-acquired-pneumonia',
  title: 'Community-Acquired Pneumonia: Typical & Atypical',
  system: 'respiratory',
  source: 'L6 — Bacterial Infection of the Lower Respiratory Tract',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L6 Lower Resp Bacteria' },
    { kind: 'disease', label: 'Pneumonia' },
    { kind: 'exam', label: 'Atypical organisms' },
  ],

  highYield: [
    '**Community-acquired pneumonia (CAP) is classically split into "typical" and "atypical" by presentation and organism.** **Typical CAP** (Streptococcus pneumoniae — the commonest cause overall) gives an **abrupt lobar illness: high fever, productive rusty sputum, pleuritic pain, and consolidation** (bronchial breathing, dullness, crackles).',
    '**"Atypical" pneumonia is subacute and interstitial ("walking pneumonia") with a dry cough and prominent extrapulmonary symptoms**, and a chest X-ray that looks worse than the patient. Key organisms: **Mycoplasma pneumoniae** (young adults, cold agglutinins, bullous myringitis), **Legionella** (water sources, hyponatraemia, diarrhoea, deranged LFTs), and **Chlamydophila pneumoniae/psittaci**.',
    '**Match the host to the organism:** **S. pneumoniae** overall; **Klebsiella** in alcoholics/aspiration (thick "currant-jelly" sputum, upper-lobe, cavitating); **Haemophilus influenzae/Moraxella** in COPD; **Staphylococcus aureus** after influenza (cavitating); **Pseudomonas** in cystic fibrosis/bronchiectasis; **Mycoplasma** in young/crowded settings.',
    '**Diagnosis and stratification:** chest X-ray (lobar or bronchopneumonic infiltrate), sputum Gram stain/culture, blood cultures, and urinary antigens (**pneumococcal and Legionella**). Severity is scored with **CURB-65 (Confusion, Urea >7, RR ≥30, BP low, age ≥65)** to decide outpatient vs admission vs ICU.',
    '**The typical/atypical split drives EMPIRIC therapy:** typical organisms respond to β-lactams (amoxicillin/ceftriaxone), but **atypicals lack a cell wall or are intracellular, so they need macrolides, doxycycline or respiratory fluoroquinolones** — which is why empiric CAP regimens combine a β-lactam with a macrolide (drug detail in [[respiratory-tract-antibiotics]]).',
  ],

  mechanism: {
    title: 'Typical (lobar, S. pneumoniae) vs atypical (interstitial, wall-less/intracellular)',
    steps: [
      { id: 's1', label: 'S. pneumoniae = commonest; abrupt lobar, rusty sputum', emphasis: 'key' },
      { id: 's2', label: 'Atypical (Mycoplasma/Legionella/Chlamydophila): dry cough, interstitial', emphasis: 'key' },
      { id: 's3', label: 'Host clues: Klebsiella (alcoholic), Staph (post-flu), Pseudomonas (CF)' },
      { id: 's4', label: 'Dx: CXR, sputum/blood culture, pneumococcal + Legionella urinary antigen' },
      { id: 's5', label: 'CURB-65 stratifies; empiric β-lactam + macrolide (covers atypicals)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Lobar consolidation with rusty sputum and pleuritic pain', mechanism: 'Typical pneumococcal pneumonia', significance: 'key' },
    { sign: 'Dry cough, malaise, cold agglutinins in a young adult', mechanism: 'Mycoplasma pneumoniae (atypical)', significance: 'key' },
    { sign: 'Pneumonia with hyponatraemia, diarrhoea and water exposure', mechanism: 'Legionella pneumophila', significance: 'key' },
    { sign: 'Upper-lobe cavitating pneumonia with currant-jelly sputum', mechanism: 'Klebsiella (alcoholic/aspiration)', significance: 'supportive' },
    { sign: 'Cavitating pneumonia following influenza', mechanism: 'Staphylococcus aureus superinfection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The commonest cause of community-acquired pneumonia', meaning: 'Streptococcus pneumoniae' },
    { clue: 'The severity score used in CAP', meaning: 'CURB-65' },
    { clue: 'The urinary antigens tested in pneumonia', meaning: 'Pneumococcal and Legionella antigens' },
    { clue: 'Why empiric CAP therapy adds a macrolide to a β-lactam', meaning: 'To cover atypicals (wall-less/intracellular, β-lactam-resistant)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The typical/atypical distinction dictates empiric antibiotics ([[respiratory-tract-antibiotics]]) and CURB-65 dictates the site of care. Hospital-acquired, aspiration and abscess forms are in [[hospital-aspiration-pneumonia-abscess]]; the morphological patterns (lobar vs bronchopneumonia) are detailed in [[pneumonia-pathology-patterns]]. Post-influenza pneumonia links to [[influenza-covid-pneumonia]].' },
  ],

  mnemonics: [
    { hook: 'Atypicals need "non-wall" drugs: Mycoplasma, Legionella, Chlamydophila → macrolide/doxy/FQ', expansion: ['No cell wall / intracellular → β-lactams fail', 'Walking pneumonia, dry cough'] },
    { hook: 'Host→bug: "alcoholic Klebsiella, post-flu Staph, CF Pseudomonas, COPD H. flu"', expansion: ['Klebsiella = currant-jelly, cavitating', 'Legionella = hyponatraemia + water'] },
  ],

  traps: [
    {
      questionCategory: 'Empiric coverage in CAP',
      wrongInstinct: 'A β-lactam such as amoxicillin alone reliably covers community-acquired pneumonia',
      rightAnswer: 'β-lactams do NOT cover atypical organisms (Mycoplasma, Legionella, Chlamydophila) because these lack a conventional cell wall or are intracellular — empiric CAP therapy adds a macrolide, doxycycline or uses a respiratory fluoroquinolone',
      why: 'Atypicals are common and β-lactam-resistant by mechanism; omitting atypical cover risks treatment failure, which is why guideline empiric regimens are combination therapy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A previously well 22-year-old has two weeks of dry cough, malaise and low-grade fever; chest X-ray shows patchy interstitial infiltrates and cold agglutinins are positive. The likely organism is:',
      options: [
        { id: 'a', text: 'Streptococcus pneumoniae' },
        { id: 'b', text: 'Mycoplasma pneumoniae' },
        { id: 'c', text: 'Klebsiella pneumoniae' },
        { id: 'd', text: 'Staphylococcus aureus' },
      ],
      answerId: 'b',
      explanation: 'A subacute "walking pneumonia" in a young adult with an interstitial pattern and cold agglutinins is classic for Mycoplasma pneumoniae, an atypical (cell-wall-lacking) organism requiring a macrolide or doxycycline.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A patient with pneumonia has hyponatraemia, diarrhoea, deranged liver enzymes and a history of exposure to a contaminated water/air-conditioning source. The likely pathogen is:',
      options: [
        { id: 'a', text: 'Legionella pneumophila' },
        { id: 'b', text: 'Streptococcus pneumoniae' },
        { id: 'c', text: 'Haemophilus influenzae' },
        { id: 'd', text: 'Pseudomonas aeruginosa' },
      ],
      answerId: 'a',
      explanation: 'Legionella pneumonia classically causes hyponatraemia, GI symptoms and hepatic derangement, is linked to water/air-conditioning sources, and is detected by urinary antigen; it is an atypical organism requiring a macrolide or fluoroquinolone.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Patterns of pneumonia', svg: PNEUMONIA_PATTERNS, caption: 'Lobar vs bronchopneumonia vs interstitial/atypical, with the organisms and complications of each.' },
  ],
};

export default communityAcquiredPneumonia;
