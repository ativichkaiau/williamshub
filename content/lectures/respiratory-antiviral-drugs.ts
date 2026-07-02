import type { Lecture } from '../../lib/types';

export const respiratoryAntiviralDrugs: Lecture = {
  id: 'respiratory-antiviral-drugs',
  title: 'Antiviral Drugs in Respiratory Infection',
  system: 'respiratory',
  source: 'L15 — Antiviral Drugs in Respiratory Infection',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L15 Respiratory Antivirals' },
    { kind: 'treatment', label: 'Neuraminidase inhibitors' },
    { kind: 'mechanism', label: 'Antiviral targets' },
  ],

  highYield: [
    '**Respiratory antivirals target specific steps of the viral life cycle, and most work best when started EARLY** (within ~48 h of symptom onset) — because they limit replication rather than reverse established damage. The main targets are influenza and SARS-CoV-2 (COVID-19).',
    '**For influenza, the mainstay is the neuraminidase inhibitors — oseltamivir (oral) and zanamivir (inhaled).** Neuraminidase cleaves sialic acid to RELEASE new virions; blocking it traps virus on the cell so it cannot spread. **Baloxavir** (a cap-dependent endonuclease inhibitor) blocks viral mRNA synthesis. The older **M2 blockers (amantadine/rimantadine) are no longer used** due to widespread resistance (and only ever covered influenza A).',
    '**For COVID-19, key antivirals are nirmatrelvir/ritonavir (an oral protease inhibitor — ritonavir boosts levels but causes many drug interactions), remdesivir (IV RNA-polymerase inhibitor), and molnupiravir (oral, introduces lethal mutations).** They benefit high-risk patients most when given early; severe disease also uses immunomodulators (dexamethasone, IL-6 blockade) that target the inflammatory phase rather than the virus.',
    '**Antivirals for other respiratory viruses are limited:** RSV has **ribavirin** (used selectively) and prevention with the monoclonal **palivizumab/nirsevimab** in high-risk infants; most colds (rhinovirus) have **no specific antiviral** and are treated symptomatically. This scarcity is why **vaccination and infection control** remain central.',
    '**The exam themes are: right target, right timing, right patient.** Start influenza/COVID antivirals early and prioritise high-risk groups; remember neuraminidase-inhibitor timing, ritonavir\'s interactions, and that immunomodulators (steroids) help the LATE inflammatory phase of severe viral pneumonia, not the early viral-replication phase.',
  ],

  mechanism: {
    title: 'Block a viral step, early; influenza (NA inhibitors) & COVID (protease/polymerase)',
    steps: [
      { id: 's1', label: 'Antivirals limit replication → start EARLY (~48 h)', emphasis: 'key' },
      { id: 's2', label: 'Influenza: oseltamivir/zanamivir (neuraminidase = viral release)', emphasis: 'key' },
      { id: 's3', label: 'Baloxavir = cap endonuclease; M2 blockers (amantadine) obsolete/resistant' },
      { id: 's4', label: 'COVID: nirmatrelvir/ritonavir (protease), remdesivir (polymerase), molnupiravir', emphasis: 'key' },
      { id: 's5', label: 'Severe COVID: steroids/IL-6 target the LATE inflammatory phase', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Oseltamivir started within 48 h of influenza onset', mechanism: 'Neuraminidase inhibition (blocks viral release)', significance: 'key' },
    { sign: 'Multiple drug interactions with an oral COVID antiviral', mechanism: 'Ritonavir boosting (CYP inhibition) of nirmatrelvir', significance: 'key' },
    { sign: 'Amantadine no longer recommended for influenza', mechanism: 'Widespread M2-channel resistance (and influenza A only)', significance: 'supportive' },
    { sign: 'Dexamethasone benefits severe but not mild COVID-19', mechanism: 'Targets the late hyperinflammatory phase', significance: 'key' },
    { sign: 'Palivizumab given to a premature infant in RSV season', mechanism: 'Monoclonal prophylaxis (anti-F protein)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The drug class treating influenza by blocking viral release', meaning: 'Neuraminidase inhibitors (oseltamivir, zanamivir)' },
    { clue: 'Why COVID protease inhibitor is co-formulated with ritonavir', meaning: 'Ritonavir boosts levels via CYP inhibition (causing interactions)' },
    { clue: 'The reason antivirals must be started early', meaning: 'They limit ongoing replication, not established tissue damage' },
    { clue: 'The therapy for the late inflammatory phase of severe COVID-19', meaning: 'Corticosteroids (dexamethasone) ± IL-6 blockade' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Timing and patient selection drive benefit — start antivirals early in high-risk influenza/COVID ([[influenza-covid-pneumonia]]); watch ritonavir interactions. Immunomodulators help the ARDS/inflammatory phase ([[ards-pulmonary-hypertension-atelectasis]]), not early replication. Most other respiratory viruses ([[other-respiratory-viruses]]) lack specific antivirals, underscoring vaccination and prevention.' },
  ],

  mnemonics: [
    { hook: 'Influenza "-vir at the end, Neuraminidase in the middle": oseltamiVIR/zanamiVIR', expansion: ['Block viral RELEASE', 'Start within 48 h', 'Amantadine obsolete'] },
    { hook: 'COVID antivirals: "Protease (nirmatrelvir), Polymerase (remdesivir), Mutagen (molnupiravir)"', expansion: ['Ritonavir boosts → interactions', 'Steroids for severe/late phase'] },
  ],

  traps: [
    {
      questionCategory: 'Corticosteroids in viral respiratory infection',
      wrongInstinct: 'Corticosteroids should be given early to all patients with viral respiratory infection to suppress the virus',
      rightAnswer: 'Corticosteroids (e.g. dexamethasone) benefit the LATE hyperinflammatory phase of SEVERE disease (e.g. COVID-19 needing oxygen); given early in mild disease they do not help and may impair viral clearance',
      why: 'Antivirals target early replication while steroids target late inflammation; using steroids in the wrong phase (mild/early disease) can be harmful, so phase and severity determine their role.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Oseltamivir treats influenza by inhibiting neuraminidase, which normally:',
      options: [
        { id: 'a', text: 'Allows the virus to attach to host cells' },
        { id: 'b', text: 'Cleaves sialic acid so newly made virions can be released and spread' },
        { id: 'c', text: 'Synthesises viral RNA' },
        { id: 'd', text: 'Forms the viral capsid' },
      ],
      answerId: 'b',
      explanation: 'Neuraminidase cleaves sialic acid residues to release progeny virions from infected cells; inhibiting it traps virus and limits spread. It is most effective when started within about 48 hours of symptom onset.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'The oral COVID-19 antiviral nirmatrelvir is combined with ritonavir because ritonavir:',
      options: [
        { id: 'a', text: 'Is itself a potent antiviral against SARS-CoV-2' },
        { id: 'b', text: 'Inhibits CYP3A4 to boost nirmatrelvir levels (causing many drug interactions)' },
        { id: 'c', text: 'Prevents QT prolongation' },
        { id: 'd', text: 'Blocks the spike protein' },
      ],
      answerId: 'b',
      explanation: 'Ritonavir is a CYP3A4 inhibitor used as a pharmacokinetic "booster" to raise nirmatrelvir concentrations; this boosting is also the source of its many clinically important drug–drug interactions.',
      tests: 'treatment',
    },
  ],

  figures: [],
};

export default respiratoryAntiviralDrugs;
