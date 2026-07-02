import type { Lecture } from '../../lib/types';
import { ANTI_TB_DRUGS } from '../../lib/figures';

export const antiTuberculosisDrugs: Lecture = {
  id: 'anti-tuberculosis-drugs',
  title: 'Anti-Tuberculosis Drugs',
  system: 'respiratory',
  source: 'L16 — Anti-Tuberculosis Drugs',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L16 Anti-TB Drugs' },
    { kind: 'treatment', label: 'RIPE regimen' },
    { kind: 'mechanism', label: 'Isoniazid & rifampin' },
  ],

  highYield: [
    '**Active tuberculosis is treated with MULTIPLE drugs for a prolonged course to prevent resistance and kill slow/dormant organisms.** The standard regimen is **"RIPE" for 2 months (intensive), then rifampin + isoniazid for 4 months (continuation) — 6 months total.** Monotherapy breeds resistance, so combinations are mandatory.',
    '**Learn each first-line drug\'s mechanism and signature toxicity:** **Rifampin** — inhibits DNA-dependent RNA polymerase; **turns secretions orange**, hepatotoxic, and a **potent CYP450 INDUCER** (lowers levels of OCPs, warfarin, HIV drugs). **Isoniazid** — inhibits mycolic-acid synthesis; **hepatotoxic and causes peripheral neuropathy (give pyridoxine/B6)**, and drug-induced lupus.',
    '**Pyrazinamide** — active in the acidic phagolysosome; **hepatotoxic and causes hyperuricaemia (gout).** **Ethambutol** — inhibits arabinosyltransferase (cell-wall arabinogalactan); its signature toxicity is **optic neuritis (red–green colour vision and acuity loss)** — monitor vision. All except ethambutol are notably hepatotoxic, so **monitor liver function**.',
    '**Latent TB (positive tuberculin/IGRA, no active disease) is treated to prevent reactivation** — typically isoniazid (± rifapentine) for a shorter course. **Multidrug-resistant TB (MDR-TB) = resistance to at least isoniazid AND rifampin**, requiring second-line agents (fluoroquinolones, bedaquiline, linezolid) for much longer.',
    '**Adherence is the crux: directly observed therapy (DOT) improves completion and prevents resistance.** Remember the memory hooks — Rifampin = Red/inducer, Isoniazid = neuropathy (Injures nerves, give B6), Pyrazinamide = uric acid, Ethambutol = Eyes — and that all first-line drugs except ethambutol carry hepatotoxic risk.',
  ],

  mechanism: {
    title: 'RIPE combination, prolonged; each drug a distinct target + toxicity',
    steps: [
      { id: 's1', label: 'Regimen: 2 mo RIPE → 4 mo RI (6 mo total); combos prevent resistance', emphasis: 'key' },
      { id: 's2', label: 'Rifampin: RNA pol; orange fluids; CYP INDUCER; hepatotoxic', emphasis: 'key' },
      { id: 's3', label: 'Isoniazid: mycolic acid; neuropathy (give B6); hepatotoxic; lupus', emphasis: 'key' },
      { id: 's4', label: 'Pyrazinamide: acidic pH; hyperuricaemia; Ethambutol: optic neuritis', emphasis: 'danger' },
      { id: 's5', label: 'Latent → INH; MDR-TB (INH+RIF resistant) → second-line; DOT' },
    ],
  },

  examFindings: [
    { sign: 'Orange-red tears and urine on TB therapy', mechanism: 'Rifampin (harmless discolouration; also a CYP inducer)', significance: 'key' },
    { sign: 'Peripheral neuropathy on TB therapy', mechanism: 'Isoniazid (prevent with pyridoxine/B6)', significance: 'key' },
    { sign: 'Red–green colour vision loss on TB therapy', mechanism: 'Ethambutol optic neuritis', significance: 'key' },
    { sign: 'Acute gout/hyperuricaemia during TB therapy', mechanism: 'Pyrazinamide', significance: 'supportive' },
    { sign: 'Oral contraceptive failure while on TB therapy', mechanism: 'Rifampin CYP450 induction lowers hormone levels', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The standard first-line four-drug TB regimen', meaning: 'RIPE (rifampin, isoniazid, pyrazinamide, ethambutol)' },
    { clue: 'The anti-TB drug that is a potent CYP450 inducer', meaning: 'Rifampin' },
    { clue: 'The vitamin co-prescribed with isoniazid', meaning: 'Pyridoxine (vitamin B6) — prevents neuropathy' },
    { clue: 'The definition of MDR-TB', meaning: 'Resistance to at least isoniazid AND rifampin' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These drugs cure the disease whose pathology is in [[tuberculosis-pathology]]; combination therapy and DOT prevent MDR-TB, and toxicity monitoring (LFTs, vision, uric acid, B6 for neuropathy) is essential. Rifampin\'s enzyme induction is a classic interaction pitfall. Latent TB is treated to prevent reactivation, especially before immunosuppression (contrast [[sarcoidosis-granulomatous-lung]]).' },
  ],

  mnemonics: [
    { hook: 'RIPE toxicities: "Rifampin Red/inducer, Isoniazid nerves (B6), Pyrazinamide uric acid, Ethambutol Eyes"', expansion: ['All but ethambutol → hepatotoxic', 'Rifampin induces CYP450'] },
    { hook: 'Regimen "2 + 4": 2 months RIPE, 4 months RI (6 total)', expansion: ['Combos prevent resistance', 'DOT improves adherence'] },
  ],

  traps: [
    {
      questionCategory: 'Isoniazid-associated neuropathy',
      wrongInstinct: 'Peripheral neuropathy on TB therapy means the drug must be stopped immediately',
      rightAnswer: 'Isoniazid-induced peripheral neuropathy results from interference with pyridoxine (vitamin B6) metabolism and is PREVENTED/treated by co-administering pyridoxine — not necessarily by stopping the drug',
      why: 'Recognising the B6 mechanism lets you prevent the neuropathy prophylactically (especially in those at risk) rather than abandoning an effective drug; it is a classic, easily-managed adverse effect.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient starting standard anti-TB therapy is also taking a combined oral contraceptive. Which drug is most likely to cause contraceptive failure by inducing hepatic enzymes?',
      options: [
        { id: 'a', text: 'Isoniazid' },
        { id: 'b', text: 'Rifampin' },
        { id: 'c', text: 'Pyrazinamide' },
        { id: 'd', text: 'Ethambutol' },
      ],
      answerId: 'b',
      explanation: 'Rifampin is a potent inducer of cytochrome P450 enzymes, accelerating metabolism of many drugs including oral contraceptives, warfarin and HIV medications — a key interaction. It also harmlessly turns secretions orange.',
      tests: 'treatment',
    },
    {
      id: 'q2',
      stem: 'Which first-line anti-TB drug characteristically causes optic neuritis with red–green colour vision changes?',
      options: [
        { id: 'a', text: 'Ethambutol' },
        { id: 'b', text: 'Isoniazid' },
        { id: 'c', text: 'Rifampin' },
        { id: 'd', text: 'Pyrazinamide' },
      ],
      answerId: 'a',
      explanation: 'Ethambutol, which inhibits arabinosyltransferase in cell-wall synthesis, characteristically causes dose-related optic neuritis (loss of visual acuity and red–green discrimination), so vision should be monitored.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'First-line anti-TB drugs (RIPE)', svg: ANTI_TB_DRUGS, caption: 'Mechanisms and signature toxicities of rifampin, isoniazid, pyrazinamide and ethambutol, plus the 2+4-month regimen.' },
  ],
};

export default antiTuberculosisDrugs;
