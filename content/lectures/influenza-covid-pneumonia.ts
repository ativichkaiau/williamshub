import type { Lecture } from '../../lib/types';

export const influenzaCovidPneumonia: Lecture = {
  id: 'influenza-covid-pneumonia',
  title: 'Influenza & COVID-19',
  system: 'respiratory',
  source: 'L8 — Viral Respiratory Pathogens & Lung Infection',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L8 Respiratory Viruses' },
    { kind: 'disease', label: 'Influenza' },
    { kind: 'exam', label: 'Antigenic shift/drift' },
  ],

  highYield: [
    '**Influenza is an enveloped RNA orthomyxovirus with two key surface proteins: haemagglutinin (H, attachment/entry) and neuraminidase (N, viral release).** Its segmented genome lets it change antigenically in two ways — the basis of seasonal epidemics versus pandemics.',
    '**Antigenic DRIFT = small point mutations in H/N → seasonal epidemics** (why the vaccine is reformulated yearly). **Antigenic SHIFT = REASSORTMENT of genome segments between strains (e.g. human + avian/swine) → a novel H/N the population has no immunity to → PANDEMICS.** Only influenza A (with an animal reservoir) undergoes shift.',
    '**Influenza itself is usually self-limited, but its pneumonias are dangerous: primary influenza (viral) pneumonia and, classically, SECONDARY bacterial pneumonia** — especially **Staphylococcus aureus and Streptococcus pneumoniae** — appearing as the patient "improves then worsens." Aspirin in children with influenza/varicella risks **Reye syndrome** (avoid salicylates).',
    '**COVID-19 (SARS-CoV-2, an enveloped RNA coronavirus) enters cells via its spike protein binding ACE2.** Severe disease is **diffuse alveolar damage (DAD)/ARDS with a hyperinflammatory "cytokine" response and microthrombi**; imaging shows **bilateral peripheral ground-glass opacities**. Presentations range from asymptomatic to critical, with anosmia a characteristic early clue.',
    '**Prevention and diagnosis:** annual **influenza vaccination** (and pneumococcal vaccine to prevent secondary pneumonia); **COVID-19 vaccination**; diagnosis by antigen/PCR (RT-PCR). Specific antivirals (neuraminidase inhibitors for influenza; antivirals for COVID-19) are most useful early and are detailed in [[respiratory-antiviral-drugs]].',
  ],

  mechanism: {
    title: 'H/N drift → epidemics, shift → pandemics; viral + secondary bacterial pneumonia',
    steps: [
      { id: 's1', label: 'Influenza: H (entry) + N (release), segmented RNA genome', emphasis: 'key' },
      { id: 's2', label: 'Drift (point mutation) → seasonal epidemics; shift (reassortment) → pandemic', emphasis: 'key' },
      { id: 's3', label: 'Secondary bacterial pneumonia (S. aureus, pneumococcus) — "improve then worsen"', emphasis: 'danger' },
      { id: 's4', label: 'COVID-19: spike–ACE2 entry → DAD/ARDS, cytokine response, microthrombi', emphasis: 'key' },
      { id: 's5', label: 'Prevent by vaccination; diagnose by antigen/PCR; antivirals early' },
    ],
  },

  examFindings: [
    { sign: 'Pandemic influenza from a novel H/N subtype', mechanism: 'Antigenic shift (genome reassortment, animal reservoir)', significance: 'key' },
    { sign: 'Influenza patient improving then deteriorating with lobar pneumonia', mechanism: 'Secondary bacterial (S. aureus/pneumococcal) pneumonia', significance: 'key' },
    { sign: 'Bilateral peripheral ground-glass opacities + anosmia', mechanism: 'COVID-19 pneumonia (spike–ACE2)', significance: 'key' },
    { sign: 'Encephalopathy + hepatic failure in a child given aspirin', mechanism: 'Reye syndrome (avoid salicylates in viral illness)', significance: 'supportive' },
    { sign: 'ARDS with diffuse alveolar damage in severe COVID-19', mechanism: 'Hyperinflammatory injury + microthrombosis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The change producing influenza pandemics', meaning: 'Antigenic shift (reassortment of genome segments)' },
    { clue: 'The change requiring yearly vaccine reformulation', meaning: 'Antigenic drift (point mutations)' },
    { clue: 'The receptor SARS-CoV-2 uses to enter cells', meaning: 'ACE2 (via the spike protein)' },
    { clue: 'The classic complication as an influenza patient re-worsens', meaning: 'Secondary bacterial pneumonia (S. aureus, S. pneumoniae)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Vaccination prevents influenza and (via pneumococcal vaccine) its secondary pneumonia; antivirals work best early ([[respiratory-antiviral-drugs]]). Post-influenza Staph pneumonia can cavitate ([[hospital-aspiration-pneumonia-abscess]]); severe viral pneumonia causes the DAD/ARDS of [[ards-pulmonary-hypertension-atelectasis]]. Other respiratory viruses (RSV, croup, measles) are in [[other-respiratory-viruses]].' },
  ],

  mnemonics: [
    { hook: 'Drift vs Shift: "Drift = Drips (small, seasonal); Shift = Shocks (pandemic)"', expansion: ['Drift = point mutation', 'Shift = reassortment (influenza A, animal reservoir)'] },
    { hook: 'Influenza "improve then worsen" = secondary bacterial pneumonia', expansion: ['S. aureus (can cavitate) + S. pneumoniae', 'Reye if aspirin in kids'] },
  ],

  traps: [
    {
      questionCategory: 'Mechanism of influenza pandemics',
      wrongInstinct: 'Pandemics arise from the same gradual mutations that cause seasonal flu',
      rightAnswer: 'Seasonal epidemics come from antigenic DRIFT (small point mutations), but PANDEMICS require antigenic SHIFT — reassortment of genome segments (often between human and animal strains) creating a novel H/N to which the population has no immunity',
      why: 'Only the abrupt, large antigenic change of reassortment (possible because the genome is segmented, and only in influenza A with an animal reservoir) can outrun population immunity enough to cause a pandemic.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A new influenza A strain emerges carrying a haemagglutinin from an avian virus, and the human population has no pre-existing immunity. This abrupt change is due to:',
      options: [
        { id: 'a', text: 'Antigenic drift' },
        { id: 'b', text: 'Antigenic shift (genetic reassortment)' },
        { id: 'c', text: 'Neuraminidase inhibition' },
        { id: 'd', text: 'Latency reactivation' },
      ],
      answerId: 'b',
      explanation: 'The abrupt appearance of a novel haemagglutinin via exchange of genome segments between strains is antigenic shift (reassortment), the mechanism of influenza pandemics; drift refers to gradual point mutations causing seasonal epidemics.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An influenza patient improves after several days, then abruptly deteriorates with high fever and a new lobar consolidation. The most likely explanation is:',
      options: [
        { id: 'a', text: 'Secondary bacterial pneumonia (e.g. S. aureus or S. pneumoniae)' },
        { id: 'b', text: 'Pulmonary embolism' },
        { id: 'c', text: 'Antigenic drift' },
        { id: 'd', text: 'Reye syndrome' },
      ],
      answerId: 'a',
      explanation: 'The classic "improve then worsen" course after influenza indicates a secondary bacterial pneumonia — most notably Staphylococcus aureus (which may cavitate) or Streptococcus pneumoniae — as damaged airway defences are superinfected.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default influenzaCovidPneumonia;
