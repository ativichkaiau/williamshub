import type { Lecture } from '../../lib/types';
import { TB_PATHOGENESIS } from '../../lib/figures';

export const tuberculosisPathology: Lecture = {
  id: 'tuberculosis-pathology',
  title: 'Tuberculosis: Pathology',
  system: 'respiratory',
  source: 'L10 — Pathology of Pulmonary Infection',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L10 Pulmonary Infection Path' },
    { kind: 'disease', label: 'Tuberculosis' },
    { kind: 'exam', label: 'Caseating granuloma' },
  ],

  highYield: [
    '**Tuberculosis (Mycobacterium tuberculosis) causes disease through a type IV (delayed, cell-mediated) hypersensitivity, producing the CASEATING granuloma — its pathological hallmark.** The granuloma contains epithelioid macrophages, **Langhans giant cells** and lymphocytes around **central caseous (cheesy) necrosis**; the organism is an **acid-fast bacillus (Ziehl–Neelsen)**.',
    '**Primary TB (first exposure) typically affects the mid/lower lung zones**, forming a subpleural **Ghon focus** which, with its draining hilar node, is the **Ghon complex** (healed/calcified = **Ranke complex**). Most primary infections are contained and become **latent** (positive tuberculin/IGRA, no disease).',
    '**Secondary (reactivation) TB localises to the lung APICES (highest oxygen tension)** and tends to **cavitate**; it presents with fever, night sweats, weight loss, chronic cough and **haemoptysis**. Reactivation is triggered by waning immunity — HIV, ageing, diabetes, malnutrition, anti-TNF therapy.',
    '**Miliary TB is haematogenous dissemination producing countless tiny (millet-seed) granulomas** throughout the lungs and other organs — meninges (TB meningitis), vertebrae (**Pott disease**), kidneys, adrenals. Immunosuppression (especially HIV) predisposes to progressive primary and disseminated disease.',
    '**The single most examined point is caseating (TB) vs non-caseating (sarcoidosis) granuloma:** TB shows central caseous necrosis and AFB; sarcoid does not. This distinction — plus recognising that TB granulomas contain but do not eradicate the organism (latency) — underlies both diagnosis and the treatment separation from [[sarcoidosis-granulomatous-lung]].',
  ],

  mechanism: {
    title: 'Type IV hypersensitivity → caseating granuloma; primary→latent→reactivation',
    steps: [
      { id: 's1', label: 'Caseating granuloma: epithelioid + Langhans giant cells + central necrosis', emphasis: 'key' },
      { id: 's2', label: 'Primary TB: mid/lower zone Ghon focus + node = Ghon complex → latent', emphasis: 'key' },
      { id: 's3', label: 'Secondary (reactivation): APEX, cavitation, haemoptysis', emphasis: 'key' },
      { id: 's4', label: 'Miliary: haematogenous millet-seed foci (meninges, Pott, kidney, adrenal)', emphasis: 'danger' },
      { id: 's5', label: 'Caseating (TB, AFB+) vs non-caseating (sarcoid) — must distinguish' },
    ],
  },

  examFindings: [
    { sign: 'Caseating granuloma with Langhans giant cells + AFB', mechanism: 'Tuberculosis (type IV hypersensitivity)', significance: 'key' },
    { sign: 'Subpleural mid-zone focus + hilar node calcification', mechanism: 'Ghon/Ranke complex of primary TB', significance: 'key' },
    { sign: 'Apical cavitary lung disease with haemoptysis', mechanism: 'Secondary (reactivation) TB', significance: 'key' },
    { sign: 'Innumerable tiny nodules across lungs and organs', mechanism: 'Miliary (disseminated) TB', significance: 'supportive' },
    { sign: 'Vertebral destruction (gibbus deformity)', mechanism: 'Pott disease (spinal TB)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The pathological hallmark of tuberculosis', meaning: 'Caseating (necrotising) granuloma with acid-fast bacilli' },
    { clue: 'The primary-TB lesion plus its draining node', meaning: 'Ghon complex' },
    { clue: 'The lung region favoured by reactivation TB', meaning: 'The apices (highest oxygen tension)' },
    { clue: 'The stain that identifies M. tuberculosis', meaning: 'Ziehl–Neelsen (acid-fast) stain' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'TB is cured with prolonged multidrug therapy (RIPE — [[anti-tuberculosis-drugs]]); an old cavity can later host an aspergilloma ([[fungal-lung-infections]]) and TB can mimic (or be mimicked by) parasites ([[parasitic-lung-infections]]) and cancer. The caseating vs non-caseating distinction from [[sarcoidosis-granulomatous-lung]] is essential before immunosuppressing. Silicosis increases TB risk ([[pulmonary-fibrosis-pneumoconioses]]).' },
  ],

  mnemonics: [
    { hook: 'TB granuloma = "Caseous centre + Langhans giants + AFB" (type IV)', expansion: ['Non-caseating → sarcoid', 'Ziehl-Neelsen acid-fast'] },
    { hook: 'Primary = "Ghon, lower/mid"; Secondary = "apex, cavity, haemoptysis"', expansion: ['Ghon complex → Ranke (calcified)', 'Miliary = disseminated millet seeds'] },
  ],

  traps: [
    {
      questionCategory: 'Location of primary vs reactivation TB',
      wrongInstinct: 'Tuberculosis always affects the lung apices',
      rightAnswer: 'PRIMARY TB typically forms a mid/lower-zone Ghon focus, whereas SECONDARY (reactivation) TB localises to the APICES (highest oxygen tension) and cavitates — the location distinguishes the stage',
      why: 'Mixing up the two loses a key diagnostic clue: apical cavitary disease signals reactivation, while a calcified mid-zone Ghon complex signals healed primary infection.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A lung biopsy shows granulomas with epithelioid macrophages, Langhans giant cells and central caseous necrosis; acid-fast bacilli are seen. This is characteristic of:',
      options: [
        { id: 'a', text: 'Sarcoidosis' },
        { id: 'b', text: 'Tuberculosis' },
        { id: 'c', text: 'Hypersensitivity pneumonitis' },
        { id: 'd', text: 'Lobar pneumonia' },
      ],
      answerId: 'b',
      explanation: 'Central caseous (cheesy) necrosis within a granuloma plus acid-fast bacilli is the hallmark of tuberculosis (a type IV, cell-mediated hypersensitivity). Sarcoid granulomas are non-caseating and organism-negative.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Reactivation (secondary) tuberculosis characteristically involves the lung apices because:',
      options: [
        { id: 'a', text: 'The apices have the lowest oxygen tension' },
        { id: 'b', text: 'The apices have the highest oxygen tension, which favours the aerobic organism' },
        { id: 'c', text: 'Gravity pulls bacteria downward' },
        { id: 'd', text: 'The apices have the most lymphatics' },
      ],
      answerId: 'b',
      explanation: 'M. tuberculosis is a strict aerobe; the well-ventilated apices have the highest oxygen tension, favouring reactivation there, with a tendency to cavitate and cause haemoptysis.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Tuberculosis pathogenesis', svg: TB_PATHOGENESIS, caption: 'Primary (Ghon) → latent → reactivation (apical, cavitary) → miliary, and the caseating granuloma.' },
  ],
};

export default tuberculosisPathology;
