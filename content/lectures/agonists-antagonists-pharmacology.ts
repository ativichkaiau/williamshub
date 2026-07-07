import type { Lecture } from '../../lib/types';

export const agonistsAntagonistsPharmacology: Lecture = {
  id: 'agonists-antagonists-pharmacology',
  title: 'Agonists, Antagonists & Efficacy',
  system: 'pharmacology',
  source: 'L3 — Pharmacodynamics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L3 Agonism' },
    { kind: 'mechanism', label: 'Full/partial/inverse; antagonism types' },
    { kind: 'exam', label: 'Partial agonist; spare receptors' },
  ],

  highYield: [
    'A drug\'s effect at a receptor depends on AFFINITY (binding) and EFFICACY (ability to activate). A FULL AGONIST produces the maximal response (high efficacy). A PARTIAL AGONIST binds well but produces only a SUB-maximal response even at full occupancy — and in the presence of a full agonist it acts as a PARTIAL ANTAGONIST (e.g. buprenorphine at opioid receptors).',
    'An INVERSE AGONIST binds a constitutively active receptor and produces the OPPOSITE effect (reduces baseline activity). An ANTAGONIST has affinity but ZERO efficacy — it simply blocks. Distinguish these by the maximal effect they produce (full > partial > 0 for antagonist; inverse < baseline).',
    'Antagonism types: COMPETITIVE (reversible) antagonists compete at the same site → shift the agonist curve RIGHT in parallel, SURMOUNTABLE (Emax preserved with more agonist); NON-COMPETITIVE/IRREVERSIBLE antagonists reduce Emax (INSURMOUNTABLE). Beyond the receptor: PHYSIOLOGICAL antagonism (opposite effects via different receptors) and CHEMICAL antagonism (one agent inactivates another, e.g. chelation).',
    '"SPARE RECEPTORS": for some agonists a maximal response occurs when only a FRACTION of receptors are occupied (receptor reserve) — so EC50 (potency) can be lower than Kd, and irreversible antagonists first reduce potency before reducing Emax. TACHYPHYLAXIS is rapid tolerance with repeated dosing (e.g. from receptor desensitisation or mediator depletion).',
    '**The take-home: FULL agonist (max effect), PARTIAL agonist (sub-max, blocks a full agonist), INVERSE agonist (opposite), ANTAGONIST (blocks, no effect); COMPETITIVE antagonism = surmountable right-shift, NON-COMPETITIVE = ↓Emax; spare receptors let a fraction give a maximal effect.** Receptor types and dose-response are in [[pharmacodynamics-receptors-dose-response]]; downstream signalling and desensitisation are in [[drug-receptor-signal-transduction]].',
  ],

  mechanism: {
    title: 'Full/partial/inverse agonist vs antagonist (efficacy); competitive (surmountable ↔) vs non-competitive (↓Emax); spare receptors',
    steps: [
      { id: 's1', label: 'Full agonist = max effect; partial = sub-max (blocks full agonist); inverse = opposite', emphasis: 'key' },
      { id: 's2', label: 'Antagonist = affinity, zero efficacy (blocks)', emphasis: 'key' },
      { id: 's3', label: 'Competitive antagonist → parallel right-shift (surmountable, Emax preserved)', emphasis: 'key' },
      { id: 's4', label: 'Non-competitive/irreversible antagonist → ↓Emax (insurmountable)', emphasis: 'key' },
      { id: 's5', label: 'Spare receptors (reserve): fraction occupied gives max effect; tachyphylaxis = rapid tolerance' },
    ],
  },

  examFindings: [
    { sign: 'A drug giving a sub-maximal response and blunting a full agonist', mechanism: 'Partial agonist (acts as partial antagonist)', significance: 'key' },
    { sign: 'Agonist curve shifted right, same maximum with more agonist', mechanism: 'Competitive (reversible) antagonism (surmountable)', significance: 'key' },
    { sign: 'A reduced maximal response that extra agonist cannot restore', mechanism: 'Non-competitive/irreversible antagonism', significance: 'key' },
    { sign: 'A drug reducing constitutive receptor activity below baseline', mechanism: 'Inverse agonist', significance: 'supportive' },
    { sign: 'Rapidly declining response with repeated dosing', mechanism: 'Tachyphylaxis (desensitisation/mediator depletion)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The agonist type that produces a sub-maximal ceiling', meaning: 'Partial agonist' },
    { clue: 'The drug with affinity but no efficacy', meaning: 'Antagonist' },
    { clue: 'The antagonism that lowers Emax', meaning: 'Non-competitive/irreversible antagonism' },
    { clue: 'The phenomenon where a fraction of receptors gives a maximal effect', meaning: 'Spare receptors (receptor reserve)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These distinctions predict drug behaviour clinically: partial agonists (buprenorphine, aripiprazole) give a ceiling effect and can precipitate withdrawal by displacing full agonists; competitive vs non-competitive antagonism predicts whether more agonist can overcome a blocker (e.g. atropine overdose); spare receptors and tachyphylaxis explain potency and tolerance. They build on the receptor/dose-response foundations of [[pharmacodynamics-receptors-dose-response]] and connect to signalling/desensitisation in [[drug-receptor-signal-transduction]].' },
  ],

  mnemonics: [
    { hook: 'Efficacy ladder: "Full > Partial > 0 (antagonist); Inverse < baseline"', expansion: ['Partial blocks a full agonist', 'Antagonist = affinity, no efficacy'] },
    { hook: '"Competitive = surmountable Right shift; Non-competitive = ↓ceiling"', expansion: ['Spare receptors → EC50 < Kd', 'Tachyphylaxis = fast tolerance'] },
  ],

  traps: [
    {
      questionCategory: 'Partial agonist in the presence of a full agonist',
      wrongInstinct: 'A partial agonist always increases receptor activity, so adding it to a full agonist boosts the response',
      rightAnswer: 'A PARTIAL agonist has a LOWER maximal effect, so when a FULL agonist is already present, the partial agonist COMPETES for receptors and pulls the response DOWN toward its own lower ceiling — behaving as a PARTIAL ANTAGONIST (e.g. buprenorphine can precipitate opioid withdrawal by displacing a full agonist)',
      why: 'The net effect of a partial agonist depends on context: alone it stimulates, but against a full agonist it reduces the response — a clinically critical point for drugs like buprenorphine and β-blockers with partial agonism.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A partial agonist administered together with a full agonist at the same receptor will:',
      options: [
        { id: 'a', text: 'Increase the maximal response above that of the full agonist' },
        { id: 'b', text: 'Reduce the response toward the partial agonist\'s lower ceiling (acting as a partial antagonist)' },
        { id: 'c', text: 'Have no effect at all' },
        { id: 'd', text: 'Convert the full agonist into an antagonist' },
      ],
      answerId: 'b',
      explanation: 'A partial agonist has lower intrinsic efficacy (a sub-maximal ceiling). In the presence of a full agonist it competes for receptors and lowers the overall response toward its own maximum — effectively acting as a partial antagonist (e.g. buprenorphine precipitating opioid withdrawal).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which describes an antagonist?',
      options: [
        { id: 'a', text: 'Affinity with high efficacy' },
        { id: 'b', text: 'Affinity with zero efficacy (binds without activating)' },
        { id: 'c', text: 'No affinity but high efficacy' },
        { id: 'd', text: 'It reduces baseline constitutive activity' },
      ],
      answerId: 'b',
      explanation: 'An antagonist binds the receptor (has affinity) but produces no activation (zero efficacy), thereby blocking agonist access. A drug reducing baseline constitutive activity is an inverse agonist, and one with affinity and efficacy is an agonist.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default agonistsAntagonistsPharmacology;
