import type { Lecture } from '../../lib/types';

export const antimycobacterialDrugs: Lecture = {
  id: 'antimycobacterial-drugs',
  title: 'Antimycobacterial (TB) Drugs',
  system: 'pharmacology',
  source: 'L7 — Antibacterial Agents',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L7 TB Drugs' },
    { kind: 'mechanism', label: 'RIPE combination therapy' },
    { kind: 'exam', label: 'Isoniazid, rifampin toxicities' },
  ],

  highYield: [
    'Tuberculosis needs PROLONGED, COMBINATION therapy because M. tuberculosis grows slowly, hides intracellularly, and single drugs rapidly select resistance. Standard therapy = "RIPE": RIFAMPIN, ISONIAZID, PYRAZINAMIDE, ETHAMBUTOL for an intensive 2 months, then rifampin + isoniazid for 4 more months (6 months total).',
    'Mechanisms/toxicities: ISONIAZID (inhibits mycolic acid synthesis) → HEPATOTOXICITY and PERIPHERAL NEUROPATHY (give pyridoxine/B6; slow-acetylator pharmacogenetics); RIFAMPIN (inhibits RNA polymerase) → potent CYP450 INDUCER (interactions, e.g. contraceptive/warfarin failure), hepatotoxicity and harmless ORANGE secretions; PYRAZINAMIDE → hepatotoxicity and HYPERURICAEMIA (gout); ETHAMBUTOL → OPTIC NEURITIS (colour vision/acuity — monitor).',
    'Latent TB is treated to prevent reactivation (e.g. isoniazid ± rifampin/rifapentine) — important BEFORE immunosuppression (anti-TNF biologics reactivate latent TB → screen first). Directly observed therapy (DOT) supports adherence, which is essential to prevent resistance and relapse.',
    'DRUG-RESISTANT TB (MDR-TB = resistant to at least isoniazid + rifampin; XDR-TB more extensively) requires longer, multi-drug regimens with second-line agents (fluoroquinolones, injectables, bedaquiline, linezolid) — a major global health problem driven by non-adherence and transmission.',
    '**The take-home: TB = 6-month RIPE combination (2 mo RIPE → 4 mo RH); Isoniazid (neuropathy→B6, hepatotoxic), Rifampin (CYP inducer, orange, hepatotoxic), Pyrazinamide (hyperuricaemia, hepatotoxic), Ethambutol (optic neuritis); treat latent TB before anti-TNF; MDR-TB needs second-line drugs.** These extend the antibacterial classes ([[antibacterial-protein-synthesis-inhibitors]]); rifampin\'s induction drives interactions ([[drug-interactions-mechanisms]]); anti-TNF TB reactivation is in [[immunomodulating-agents]].',
  ],

  mechanism: {
    title: '6-month RIPE combination (prevents resistance); each drug\'s signature toxicity; latent TB before immunosuppression; MDR-TB → second-line',
    steps: [
      { id: 's1', label: 'RIPE combination × 2 months → rifampin + isoniazid × 4 months (6 total)', emphasis: 'key' },
      { id: 's2', label: 'Isoniazid: mycolic acid; hepatotoxic + peripheral neuropathy (give B6/pyridoxine)', emphasis: 'key' },
      { id: 's3', label: 'Rifampin: RNA polymerase; potent CYP INDUCER, orange secretions, hepatotoxic', emphasis: 'danger' },
      { id: 's4', label: 'Pyrazinamide (hyperuricaemia/hepatotoxic); ethambutol (optic neuritis — monitor vision)', emphasis: 'key' },
      { id: 's5', label: 'Treat latent TB before anti-TNF; MDR-TB (resist INH+RIF) → second-line agents', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Peripheral neuropathy prevented by pyridoxine during TB therapy', mechanism: 'Isoniazid (give vitamin B6)', significance: 'key' },
    { sign: 'Orange tears/urine and many drug interactions on TB therapy', mechanism: 'Rifampin (CYP450 inducer)', significance: 'key' },
    { sign: 'Reduced colour vision/acuity during TB treatment', mechanism: 'Ethambutol optic neuritis (monitor)', significance: 'key' },
    { sign: 'Gout flare / hyperuricaemia on TB therapy', mechanism: 'Pyrazinamide', significance: 'supportive' },
    { sign: 'Reactivation of latent TB after starting a biologic', mechanism: 'Anti-TNF therapy (screen/treat latent TB first)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The standard first-line TB regimen', meaning: 'RIPE (rifampin, isoniazid, pyrazinamide, ethambutol) for 6 months' },
    { clue: 'The vitamin given with isoniazid to prevent neuropathy', meaning: 'Pyridoxine (vitamin B6)' },
    { clue: 'The TB drug that potently induces CYP450', meaning: 'Rifampin' },
    { clue: 'The TB drug causing optic neuritis', meaning: 'Ethambutol' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'TB demands prolonged combination therapy to eradicate slow-growing intracellular bacilli and prevent resistance, and each drug carries a signature toxicity to monitor (isoniazid neuropathy/hepatotoxicity → B6; rifampin CYP induction/interactions — [[drug-interactions-mechanisms]]; pyrazinamide hyperuricaemia; ethambutol optic neuritis). Latent TB must be treated before immunosuppression (anti-TNF — [[immunomodulating-agents]]). MDR/XDR-TB needs second-line drugs. This extends the antibacterial classes of [[antibacterial-protein-synthesis-inhibitors]].' },
  ],

  mnemonics: [
    { hook: '"RIPE": Rifampin, Isoniazid, Pyrazinamide, Ethambutol', expansion: ['2 mo RIPE → 4 mo RH (6 total)', 'Combination prevents resistance'] },
    { hook: 'Toxicities: "Isoniazid=neuropathy(B6)/liver, Rifampin=orange/CYP, Pyrazinamide=urate, Ethambutol=Eyes"', expansion: ['Rifampin = CYP inducer', 'Treat latent TB before anti-TNF'] },
  ],

  traps: [
    {
      questionCategory: 'Why TB needs combination therapy',
      wrongInstinct: 'A single potent anti-TB drug for a short course should cure tuberculosis',
      rightAnswer: 'TB requires PROLONGED, MULTI-DRUG therapy (RIPE for months) because the slow-growing, partly intracellular/dormant bacilli and the rapid selection of resistance under single-drug pressure mean monotherapy fails and breeds resistance — combination therapy and adherence (DOT) are essential to cure and to prevent MDR-TB',
      why: 'The organism\'s biology (slow growth, persistence) and resistance risk make short single-drug courses ineffective; understanding this justifies the lengthy combination regimen and adherence support.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Pyridoxine (vitamin B6) is co-administered with which anti-TB drug to prevent peripheral neuropathy?',
      options: [
        { id: 'a', text: 'Rifampin' },
        { id: 'b', text: 'Isoniazid' },
        { id: 'c', text: 'Ethambutol' },
        { id: 'd', text: 'Pyrazinamide' },
      ],
      answerId: 'b',
      explanation: 'Isoniazid can cause peripheral neuropathy (via pyridoxine depletion), so vitamin B6 (pyridoxine) is given alongside it, especially in at-risk patients. Isoniazid also causes hepatotoxicity; ethambutol causes optic neuritis and rifampin induces CYP450.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which anti-TB drug is a potent CYP450 inducer that lowers the levels of many co-administered drugs?',
      options: [
        { id: 'a', text: 'Rifampin' },
        { id: 'b', text: 'Ethambutol' },
        { id: 'c', text: 'Pyrazinamide' },
        { id: 'd', text: 'Isoniazid' },
      ],
      answerId: 'a',
      explanation: 'Rifampin (which inhibits bacterial RNA polymerase) is a potent inducer of hepatic CYP450 enzymes, accelerating metabolism of many drugs (e.g. oral contraceptives, warfarin, protease inhibitors) and causing therapeutic failure; it also colours secretions orange.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default antimycobacterialDrugs;
