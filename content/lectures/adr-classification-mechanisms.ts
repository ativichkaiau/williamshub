import type { Lecture } from '../../lib/types';

export const adrClassificationMechanisms: Lecture = {
  id: 'adr-classification-mechanisms',
  title: 'ADR Classification & Pharmacovigilance',
  system: 'pharmacology',
  source: 'L15 — Drug Allergy & Adverse Drug Reactions',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Pharmacology' },
    { kind: 'lecture', label: 'L15 ADR Classification' },
    { kind: 'mechanism', label: 'Type A–F; causality; reporting' },
    { kind: 'exam', label: 'Type A vs B; pharmacovigilance' },
  ],

  highYield: [
    'An ADVERSE DRUG REACTION (ADR) is a harmful, unintended response at normal therapeutic doses (distinct from overdose or medication error). The classic Rawlins-Thompson scheme divides ADRs into TYPE A ("Augmented") and TYPE B ("Bizarre"), extended to C–F.',
    'TYPE A (Augmented): DOSE-DEPENDENT, PREDICTABLE extensions of the drug\'s pharmacology — common, low mortality, usually managed by dose reduction (e.g. bleeding on warfarin, bradycardia on β-blockers, hypoglycaemia on insulin, postural hypotension on antihypertensives). TYPE B (Bizarre): DOSE-INDEPENDENT, UNPREDICTABLE, host-dependent (immunological allergy or idiosyncrasy) — rarer but higher mortality (anaphylaxis, SCARs, idiosyncratic hepatotoxicity).',
    'Extended types: C (Chronic — with prolonged use, e.g. steroid osteoporosis, analgesic nephropathy); D (Delayed — e.g. teratogenesis, secondary malignancy, tardive dyskinesia); E (End-of-use/withdrawal — rebound, e.g. β-blocker/steroid withdrawal); F (Failure of therapy — often from interactions/induction). Recognising the type guides prevention and management.',
    'PHARMACOVIGILANCE monitors drug safety after marketing (Phase IV — [[drug-development-bioequivalence]]): spontaneous ADR REPORTING (e.g. "Yellow Card"), signal detection, and CAUSALITY assessment (temporal relationship, dechallenge/rechallenge, alternative explanations, known mechanism). Reporting new/serious ADRs is a professional responsibility, since rare reactions only emerge in large populations.',
    '**The take-home: ADRs = Type A (Augmented — dose-dependent, predictable, common; manage by dose) vs Type B (Bizarre — idiosyncratic/allergic, unpredictable, severe), plus C (Chronic), D (Delayed), E (End-of-use), F (Failure); pharmacovigilance (spontaneous reporting + causality) detects rare ADRs post-marketing.** Drug allergy/hypersensitivity detail is in [[drug-hypersensitivity-scars]] and [[adverse-drug-reactions-allergy]]; interaction-driven failure links to [[drug-interactions-mechanisms]].',
  ],

  mechanism: {
    title: 'Type A (dose-dependent/predictable) vs B (idiosyncratic/allergic) + C-D-E-F; pharmacovigilance = reporting + causality',
    steps: [
      { id: 's1', label: 'ADR = harm at normal therapeutic dose (not overdose/error)', emphasis: 'key' },
      { id: 's2', label: 'Type A = augmented (dose-dependent, predictable, common; manage by dose)', emphasis: 'key' },
      { id: 's3', label: 'Type B = bizarre (idiosyncratic/allergic, unpredictable, severe)', emphasis: 'key' },
      { id: 's4', label: 'C chronic, D delayed (teratogen/malignancy), E end-of-use (withdrawal), F failure', emphasis: 'key' },
      { id: 's5', label: 'Pharmacovigilance: spontaneous reporting + causality (dechallenge/rechallenge)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Predictable, dose-related bleeding on warfarin', mechanism: 'Type A (augmented) ADR', significance: 'key' },
    { sign: 'Unpredictable anaphylaxis or SJS unrelated to dose', mechanism: 'Type B (bizarre) ADR', significance: 'key' },
    { sign: 'Osteoporosis from long-term corticosteroids', mechanism: 'Type C (chronic) ADR', significance: 'supportive' },
    { sign: 'Rebound hypertension after abruptly stopping a β-blocker', mechanism: 'Type E (end-of-use/withdrawal) ADR', significance: 'key' },
    { sign: 'A rare serious ADR detected via spontaneous reporting after marketing', mechanism: 'Pharmacovigilance (Phase IV)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The dose-dependent, predictable ADR type', meaning: 'Type A (augmented)' },
    { clue: 'The unpredictable, host-dependent ADR type', meaning: 'Type B (bizarre)' },
    { clue: 'The ADR type from abrupt withdrawal', meaning: 'Type E (end-of-use)' },
    { clue: 'The system detecting rare ADRs after marketing', meaning: 'Pharmacovigilance (spontaneous reporting/causality)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying an ADR guides management and prevention: Type A by dose adjustment/monitoring, Type B by recognition and avoidance, and C–F by anticipating chronic, delayed, withdrawal and failure effects (e.g. tapering steroids/β-blockers, teratogen avoidance). Pharmacovigilance (reporting, causality assessment) is how rare serious ADRs surface post-marketing ([[drug-development-bioequivalence]]). The allergic/hypersensitivity Type B reactions are detailed in [[drug-hypersensitivity-scars]] and [[adverse-drug-reactions-allergy]].' },
  ],

  mnemonics: [
    { hook: 'ADR types "ABCDEF": Augmented, Bizarre, Chronic, Delayed, End-of-use, Failure', expansion: ['A = dose/predictable', 'B = idiosyncratic/allergic'] },
    { hook: 'Causality: "temporal link, Dechallenge/Rechallenge, alternatives, known mechanism"', expansion: ['Report serious/new ADRs', 'Phase IV surveillance'] },
  ],

  traps: [
    {
      questionCategory: 'Type A vs Type B ADR',
      wrongInstinct: 'All adverse drug reactions are unpredictable idiosyncratic events',
      rightAnswer: 'MOST ADRs are TYPE A — dose-dependent, PREDICTABLE extensions of the drug\'s known pharmacology (common, low mortality, managed by dose reduction) — whereas TYPE B reactions are the unpredictable, host-dependent, idiosyncratic/allergic ones (rarer but often severe); assuming all ADRs are "bizarre" misses the large, preventable Type A burden',
      why: 'Because Type A reactions are predictable from pharmacology and dose, many are preventable by appropriate dosing/monitoring — distinguishing them from unpredictable Type B reactions changes both prevention and management.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Bradycardia from a β-blocker, hypoglycaemia from insulin and postural hypotension from an antihypertensive are all examples of which ADR type?',
      options: [
        { id: 'a', text: 'Type B (bizarre)' },
        { id: 'b', text: 'Type A (augmented)' },
        { id: 'c', text: 'Type D (delayed)' },
        { id: 'd', text: 'Type E (end-of-use)' },
      ],
      answerId: 'b',
      explanation: 'These are Type A ("augmented") ADRs — dose-dependent, predictable exaggerations of each drug\'s intended pharmacological effect. They are common, generally low-mortality, and managed by dose adjustment, unlike the unpredictable, idiosyncratic/allergic Type B reactions.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The post-marketing detection of rare, serious adverse drug reactions relies mainly on:',
      options: [
        { id: 'a', text: 'Preclinical animal studies' },
        { id: 'b', text: 'Pharmacovigilance (spontaneous ADR reporting and causality assessment)' },
        { id: 'c', text: 'Phase I trials' },
        { id: 'd', text: 'Bioequivalence studies' },
      ],
      answerId: 'b',
      explanation: 'Rare ADRs often appear only when a drug is used in large populations, so they are detected through pharmacovigilance — spontaneous reporting schemes, signal detection and causality assessment during Phase IV (post-marketing) surveillance.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default adrClassificationMechanisms;
