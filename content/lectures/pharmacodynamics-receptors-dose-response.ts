import type { Lecture } from '../../lib/types';

export const pharmacodynamicsReceptorsDoseResponse: Lecture = {
  id: 'pharmacodynamics-receptors-dose-response',
  title: 'Pharmacodynamics: Receptors & Dose–Response',
  system: 'pharmacology',
  source: 'L3 — Pharmacodynamics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L3 Pharmacodynamics' },
    { kind: 'mechanism', label: 'Receptors; affinity/efficacy/potency' },
    { kind: 'exam', label: 'Agonists, antagonists, therapeutic index' },
  ],

  highYield: [
    '**Pharmacodynamics is "what the DRUG does to the BODY." Most drugs act on a RECEPTOR of one of FIVE types: (1) LIGAND-GATED ION CHANNELS (fast — e.g. GABA-A/benzodiazepines → Cl⁻ influx); (2) G-PROTEIN-COUPLED RECEPTORS (e.g. β-adrenoceptor/salbutamol); (3) ENZYME/KINASE-LINKED (e.g. insulin receptor tyrosine kinase); (4) CYTOKINE receptors (JAK/STAT); (5) INTRACELLULAR/NUCLEAR receptors (lipid-soluble steroids, thyroid → gene transcription, slow, hours).**',
    '**Two properties define drug–receptor binding: AFFINITY (how tightly a drug binds — reflected by a LOW Kd, the concentration occupying 50% of receptors) and EFFICACY (the ability, once bound, to produce a response). An AGONIST has both affinity and efficacy; an ANTAGONIST has affinity but ZERO efficacy (it binds without activating).**',
    '**Agonist spectrum: FULL agonist (maximal response); PARTIAL agonist (submaximal even at full occupancy — and acts as a partial ANTAGONIST in the presence of a full agonist); INVERSE agonist (produces the opposite effect at a constitutively active receptor). POTENCY = the dose needed for effect (position on the x-axis, EC50 — a more potent drug works at lower dose); EFFICACY/Emax = the maximal achievable effect (ceiling).**',
    '**ANTAGONISM: COMPETITive (reversible) antagonists shift the agonist curve RIGHT in PARALLEL (surmountable — Emax preserved, potency ↓); NON-COMPETITIVE/irreversible antagonists LOWER the Emax (not surmountable). Also PHYSIOLOGICAL antagonism (opposite effects via different receptors) and CHEMICAL antagonism (one drug inactivates another). SYNERGISM/potentiation = combined effect greater than additive.**',
    '**Safety is quantified by the THERAPEUTIC INDEX (TI = TD50/ED50 from quantal dose–response curves): a HIGH TI = wide safety margin; a LOW TI (e.g. warfarin, digoxin, lithium, phenytoin) needs monitoring.** The take-home: 5 receptor types; affinity (Kd) vs efficacy; full/partial/inverse agonists; competitive (→ right shift, surmountable) vs non-competitive (→ ↓Emax) antagonism; potency (EC50) vs efficacy (Emax); TI = safety margin. Autonomic receptor pharmacology follows in [[cholinergic-drugs]] and [[adrenergic-drugs]].',
  ],

  mechanism: {
    title: '5 receptor types; affinity (Kd) vs efficacy; full/partial/inverse agonists; competitive (↔) vs non-competitive (↓Emax); TI',
    steps: [
      { id: 's1', label: '5 receptors: ion channel, GPCR, kinase-linked, cytokine, nuclear (slow)', emphasis: 'key' },
      { id: 's2', label: 'Affinity = tightness (low Kd); efficacy = ability to activate', emphasis: 'key' },
      { id: 's3', label: 'Agonist (affinity+efficacy) vs antagonist (affinity, zero efficacy); partial/inverse', emphasis: 'key' },
      { id: 's4', label: 'Competitive antagonist → right shift (surmountable); non-competitive → ↓Emax', emphasis: 'key' },
      { id: 's5', label: 'Potency = EC50 (dose); efficacy = Emax; Therapeutic Index = TD50/ED50', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A drug that binds receptors but produces no response', mechanism: 'Antagonist (affinity without efficacy)', significance: 'key' },
    { sign: 'Agonist curve shifted right in parallel, same maximum', mechanism: 'Competitive (reversible) antagonism (surmountable)', significance: 'key' },
    { sign: 'Reduced maximal response that extra agonist cannot overcome', mechanism: 'Non-competitive/irreversible antagonism', significance: 'key' },
    { sign: 'A drug effective at a lower dose than another (curve further left)', mechanism: 'Greater potency (lower EC50)', significance: 'supportive' },
    { sign: 'A drug needing plasma-level monitoring (warfarin, digoxin, lithium)', mechanism: 'Narrow (low) therapeutic index', significance: 'key' },
  ],

  investigations: [
    { clue: 'The property reflected by a low Kd', meaning: 'High affinity' },
    { clue: 'The difference between an agonist and an antagonist', meaning: 'Antagonists have affinity but no efficacy' },
    { clue: 'The effect of a competitive antagonist on the agonist curve', meaning: 'Parallel right shift (surmountable; Emax preserved)' },
    { clue: 'The ratio defining the therapeutic index', meaning: 'TD50 / ED50 (or LD50/ED50)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Pharmacodynamic principles explain every drug\'s action and safety: receptor type sets speed (ion channel fast, nuclear slow), affinity/efficacy classify agonists vs antagonists, competitive vs non-competitive antagonism predicts whether more agonist can overcome a blocker, and the therapeutic index flags drugs needing monitoring (warfarin, digoxin, lithium, phenytoin). These concepts drive the autonomic pharmacology of [[cholinergic-drugs]] and [[adrenergic-drugs]] and combine with the PK of [[pharmacokinetics-adme]]; drug combinations link to [[drug-interactions-mechanisms]].' },
  ],

  mnemonics: [
    { hook: '"Affinity = how tight (Kd); Efficacy = how effective; Potency = how little (dose)"', expansion: ['Agonist = affinity + efficacy', 'Antagonist = affinity, no efficacy'] },
    { hook: 'Antagonism: "Competitive → Right shift (surmountable); Non-competitive → ↓ceiling"', expansion: ['Partial agonist = submaximal + blocks full', 'Inverse agonist = opposite effect'] },
    { hook: 'Safety: "Therapeutic Index = TD50/ED50 — low TI = tightrope"', expansion: ['Low TI: warfarin, digoxin, lithium, phenytoin', 'High TI = wide margin'] },
  ],

  traps: [
    {
      questionCategory: 'Potency vs efficacy',
      wrongInstinct: 'A more potent drug is always the better/stronger drug',
      rightAnswer: 'POTENCY (position on the dose axis, EC50) only tells you the DOSE needed — a more potent drug works at a lower dose but may have the SAME or LOWER maximal effect; EFFICACY (Emax, the ceiling) is what determines the greatest achievable response. A low-potency, high-efficacy drug can outperform a high-potency, low-efficacy one',
      why: 'Confusing potency with efficacy misjudges drugs: potency is just a dose scaling (adjustable by giving more), whereas efficacy sets the maximum benefit — clinically, efficacy usually matters more than potency.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A competitive (reversible) antagonist added to an agonist will:',
      options: [
        { id: 'a', text: 'Lower the maximal response (Emax) that cannot be overcome' },
        { id: 'b', text: 'Shift the agonist dose–response curve to the right in parallel, with Emax preserved if enough agonist is given' },
        { id: 'c', text: 'Have no effect on the agonist' },
        { id: 'd', text: 'Increase the agonist\'s potency' },
      ],
      answerId: 'b',
      explanation: 'A competitive antagonist binds reversibly at the same site, so adding more agonist can outcompete it (surmountable): the curve shifts right in parallel with a reduced apparent potency but a preserved maximum. A non-competitive/irreversible antagonist instead lowers Emax and cannot be overcome by more agonist.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A narrow therapeutic index (e.g. warfarin, digoxin, lithium) means:',
      options: [
        { id: 'a', text: 'The drug is very safe with a wide margin' },
        { id: 'b', text: 'The toxic and effective doses are close, so small changes risk toxicity (monitoring needed)' },
        { id: 'c', text: 'The drug has no efficacy' },
        { id: 'd', text: 'The drug cannot cause toxicity' },
      ],
      answerId: 'b',
      explanation: 'The therapeutic index (TD50/ED50) measures the safety margin. A narrow (low) TI means the toxic and therapeutic doses are close together, so small dosing or pharmacokinetic changes can cause toxicity — hence drugs like warfarin, digoxin, lithium and phenytoin require plasma-level monitoring.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default pharmacodynamicsReceptorsDoseResponse;
