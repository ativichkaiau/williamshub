import type { Lecture } from '../../lib/types';

export const drugReceptorSignalTransduction: Lecture = {
  id: 'drug-receptor-signal-transduction',
  title: 'Receptor Signal Transduction & Regulation',
  system: 'pharmacology',
  source: 'L3 — Pharmacodynamics',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L3 Signalling' },
    { kind: 'mechanism', label: 'Second messengers; desensitisation' },
    { kind: 'exam', label: 'GPCR pathways; tolerance' },
  ],

  highYield: [
    '**Once a drug binds its receptor, the signal is TRANSDUCED into a cellular response, with speed set by the receptor class. IONOTROPIC (ligand-gated channels) act in MILLISECONDS; G-PROTEIN-COUPLED receptors in SECONDS via second messengers; ENZYME/kinase-linked in MINUTES; NUCLEAR (intracellular) receptors in HOURS (gene transcription — a lag, and persistent effects).**',
    '**G-PROTEIN-COUPLED RECEPTOR (GPCR) pathways are high-yield: Gs → ↑adenylyl cyclase → ↑cAMP → PKA (e.g. β-adrenoceptors); Gi → ↓cAMP (e.g. M2, α2, opioid); Gq → phospholipase C → IP3 (Ca²⁺ release) + DAG (PKC) (e.g. α1, M1/M3, H1). Second messengers (cAMP, cGMP, IP3/DAG, Ca²⁺) AMPLIFY the signal.**',
    '**Receptor NUMBER and sensitivity are dynamically REGULATED: DESENSITISATION (receptor phosphorylation/internalisation) and DOWN-regulation reduce responsiveness with sustained agonism (a basis of TOLERANCE and tachyphylaxis); chronic ANTAGONISM causes UP-regulation → REBOUND/supersensitivity on abrupt withdrawal (e.g. β-blocker or clonidine rebound).**',
    '**These principles explain clinical phenomena: the LAG of glucocorticoids/steroids (nuclear receptors — not immediate in acute asthma), the persistence of steroid effects, tolerance to opioids/nitrates, and rebound hypertension/tachycardia on stopping β-blockers/clonidine abruptly. Signal amplification underlies why low occupancy can give large effects (spare receptors).**',
    '**The take-home: receptor class sets speed (ion channel ms → GPCR s → kinase min → nuclear hours); GPCRs signal via Gs(↑cAMP)/Gi(↓cAMP)/Gq(IP3-DAG-Ca²⁺); sustained agonism → desensitisation/down-regulation (tolerance), chronic antagonism → up-regulation (rebound on withdrawal).** This extends the receptor types of [[pharmacodynamics-receptors-dose-response]] and the agonist/antagonist behaviour of [[agonists-antagonists-pharmacology]]; autonomic GPCRs recur in [[adrenergic-drugs]].',
  ],

  mechanism: {
    title: 'Receptor class sets speed; GPCR via Gs/Gi/Gq (cAMP, IP3-DAG-Ca²⁺); desensitisation→tolerance, up-regulation→rebound',
    steps: [
      { id: 's1', label: 'Speed by class: ion channel (ms) → GPCR (s) → kinase (min) → nuclear (hours, lag)', emphasis: 'key' },
      { id: 's2', label: 'GPCR: Gs → ↑cAMP; Gi → ↓cAMP; Gq → PLC → IP3 (Ca²⁺) + DAG (PKC)', emphasis: 'key' },
      { id: 's3', label: 'Second messengers (cAMP/cGMP/IP3/DAG/Ca²⁺) amplify the signal', emphasis: 'key' },
      { id: 's4', label: 'Sustained agonism → desensitisation/down-regulation → tolerance/tachyphylaxis', emphasis: 'key' },
      { id: 's5', label: 'Chronic antagonism → up-regulation → rebound/supersensitivity on withdrawal', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'β-agonist raising intracellular cAMP', mechanism: 'Gs-coupled GPCR → adenylyl cyclase → cAMP', significance: 'key' },
    { sign: 'α1-agonist raising intracellular calcium', mechanism: 'Gq → phospholipase C → IP3 (Ca²⁺ release)', significance: 'key' },
    { sign: 'A 30-minute-plus lag before glucocorticoids act', mechanism: 'Nuclear receptor (gene transcription) signalling', significance: 'key' },
    { sign: 'Declining response to a continuously infused agonist', mechanism: 'Receptor desensitisation/down-regulation (tolerance)', significance: 'supportive' },
    { sign: 'Rebound tachycardia/hypertension on abrupt β-blocker/clonidine cessation', mechanism: 'Receptor up-regulation (supersensitivity)', significance: 'key' },
  ],

  investigations: [
    { clue: 'The receptor class with the fastest (ms) response', meaning: 'Ligand-gated ion channels (ionotropic)' },
    { clue: 'The second messenger raised by Gs signalling', meaning: 'cAMP' },
    { clue: 'The mechanism of tolerance to a continuously present agonist', meaning: 'Receptor desensitisation/down-regulation' },
    { clue: 'The reason for rebound on stopping a chronic antagonist', meaning: 'Receptor up-regulation (supersensitivity)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Signal transduction explains onset (nuclear-receptor lag of steroids), amplification (spare receptors), and — clinically vital — tolerance (desensitisation/down-regulation with opioids, nitrates) and rebound phenomena (taper β-blockers/clonidine rather than stopping abruptly). GPCR second-messenger pathways underlie autonomic drug effects ([[adrenergic-drugs]], [[cholinergic-drugs]]). It builds on the receptor classes and dose-response of [[pharmacodynamics-receptors-dose-response]] and [[agonists-antagonists-pharmacology]].' },
  ],

  mnemonics: [
    { hook: 'GPCR: "Gs up cAMP, Gi down cAMP, Gq → IP3/DAG/Ca²⁺"', expansion: ['Speed: channel ms → nuclear hours', 'Second messengers amplify'] },
    { hook: '"Agonist overuse → desensitise (tolerance); antagonist chronic → up-regulate (rebound)"', expansion: ['Steroids lag (nuclear)', 'Taper β-blockers/clonidine'] },
  ],

  traps: [
    {
      questionCategory: 'Rebound after chronic receptor antagonism',
      wrongInstinct: 'A receptor antagonist can be stopped abruptly at any time without consequence',
      rightAnswer: 'Chronic ANTAGONISM causes compensatory UP-REGULATION/supersensitivity of the receptor, so ABRUPT withdrawal unmasks an exaggerated response (REBOUND) — e.g. rebound hypertension/tachycardia on stopping β-blockers or clonidine suddenly; these should be TAPERED, not stopped abruptly',
      why: 'Receptor up-regulation during blockade means sudden cessation produces a dangerous rebound; recognising this changes practice (gradual tapering) for β-blockers, clonidine and similar agents.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A β-adrenoceptor agonist produces its effect largely by a Gs-coupled pathway that:',
      options: [
        { id: 'a', text: 'Decreases intracellular cAMP' },
        { id: 'b', text: 'Activates adenylyl cyclase to increase cAMP' },
        { id: 'c', text: 'Opens a ligand-gated chloride channel' },
        { id: 'd', text: 'Directly alters gene transcription in minutes' },
      ],
      answerId: 'b',
      explanation: 'β-adrenoceptors couple to Gs, which activates adenylyl cyclase to raise cAMP and activate protein kinase A. Gi-coupled receptors lower cAMP, and Gq-coupled receptors act via phospholipase C (IP3/DAG, calcium).',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Why should a chronically administered β-blocker be tapered rather than stopped abruptly?',
      options: [
        { id: 'a', text: 'It causes receptor down-regulation, so stopping does nothing' },
        { id: 'b', text: 'Chronic blockade up-regulates β-receptors, so abrupt cessation causes rebound tachycardia/hypertension' },
        { id: 'c', text: 'The drug has a very short half-life' },
        { id: 'd', text: 'It becomes an agonist when stopped' },
      ],
      answerId: 'b',
      explanation: 'Chronic antagonism causes compensatory up-regulation and supersensitivity of β-receptors. Stopping abruptly unmasks this with rebound tachycardia, hypertension and ischaemia risk, so β-blockers (and clonidine) are tapered gradually.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default drugReceptorSignalTransduction;
