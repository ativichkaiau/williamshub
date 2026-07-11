import type { Lecture } from '../../lib/types';

export const ersDiagnosticTests: Lecture = {
  id: 'ers-diagnostic-tests',
  title: 'Diagnostic Test Evaluation',
  system: 'research',
  source: 'L5 — Diagnostic Test Evaluation',
  updated: '2026-07-11',
  tags: [
    { kind: 'system', label: 'Research' },
    { kind: 'lecture', label: 'L5 Diagnostic Tests' },
    { kind: 'mechanism', label: 'Sens / Spec / LR' },
    { kind: 'exam', label: 'SNout · SPin · 2×2' },
    { kind: 'investigation', label: 'ROC / cutoff' },
  ],

  highYield: [
    'Build the **2×2**: index test (rows) vs reference/gold standard (columns). **a**=TP, **b**=FP, **c**=FN, **d**=TN. **Sensitivity = a/(a+c)** (of the diseased, how many test +); **Specificity = d/(b+d)** (of the well, how many test −). These are the **“vertical” (nosologic)** indices.',
    '**Sens/Spec are properties of the test** — they do **not** change with prevalence. **PPV = a/(a+b)** and **NPV = d/(c+d)** are the **“horizontal” (predictive)** indices and **do vary with prevalence**: as prevalence rises, **PPV rises and NPV falls**.',
    '**SNout & SPin.** A highly **SeNsitive** test, when **Negative**, rules **OUT** (**SNout** — few false negatives). A highly **SPecific** test, when **Positive**, rules **IN** (**SPin** — few false positives). False negative = 1 − Sens; false positive = 1 − Spec.',
    '**Likelihood ratios** fold both into one prevalence-independent number: **LR+ = Sens/(1 − Spec)**, **LR− = (1 − Sens)/Spec**. **LR = 1** is useless; **LR > 1** raises post-test probability (rules in); **LR < 1** lowers it (rules out). **Pre-test odds × LR = post-test odds.**',
    '**Continuous tests** need a **cutoff** to become +/−; moving the cutoff trades Sens against Spec. The **ROC curve** plots Sens vs (1 − Spec) across cutoffs; **AUC** grades discrimination: 0.5 = none, 0.7–0.8 acceptable, 0.8–0.9 excellent, > 0.9 outstanding.',
  ],

  mechanism: {
    title: 'From a 2×2 to a post-test probability',
    steps: [
      { id: 's1', label: 'Define domain (who is tested), index test, and reference standard', emphasis: 'key' },
      { id: 's2', label: 'Cross-tabulate: a=TP, b=FP, c=FN, d=TN' },
      { id: 's3', label: 'Vertical: Sens = a/(a+c), Spec = d/(b+d) — prevalence-independent', emphasis: 'key' },
      { id: 's4', label: 'Horizontal: PPV = a/(a+b), NPV = d/(c+d) — prevalence-dependent' },
      { id: 's5', label: 'LR+ = Sens/(1−Spec); pre-test odds × LR = post-test odds', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'SNout: sensitive test + Negative → rules OUT', mechanism: 'High Sens ⇒ few false negatives, so a negative is trustworthy', significance: 'key' },
    { sign: 'SPin: specific test + Positive → rules IN', mechanism: 'High Spec ⇒ few false positives, so a positive is trustworthy', significance: 'key' },
    { sign: 'PPV rises and NPV falls as prevalence rises', mechanism: 'Predictive values depend on baseline (pre-test) risk', significance: 'key' },
    { sign: 'LR+ = Sens/(1−Spec); LR− = (1−Sens)/Spec', mechanism: 'Combines Sens and Spec into a prevalence-free strength', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Screening test needs to miss as few cases as possible', meaning: 'Prioritise high sensitivity (SNout) — a negative reliably excludes' },
    { clue: 'A positive result must justify a risky confirmatory procedure', meaning: 'Prioritise high specificity (SPin) — a positive reliably confirms' },
    { clue: 'The same test is applied in a high-prevalence referral clinic vs a low-risk screen', meaning: 'Sens/Spec unchanged, but PPV is higher in the high-prevalence setting' },
    { clue: 'A continuous marker (e.g. age, a lab value) is used to classify disease', meaning: 'Pick a cutoff, then read the ROC/AUC for overall discrimination' },
  ],

  treatment: [
    { logic: 'Choosing Sens vs Spec by purpose', detail: 'Early screen or “can’t-miss” disease → maximise sensitivity. Confirmation before harmful/definitive treatment → maximise specificity.' },
    { logic: 'Using LRs at the bedside', detail: 'Convert pre-test probability → odds, multiply by the LR, convert back. LR ≈ 10 (or ≈ 0.1) moves probability substantially; LR near 1 barely moves it.' },
  ],

  mnemonics: [
    { hook: 'SNout / SPin', expansion: ['SeNsitive, Negative → rule OUT', 'SPecific, Positive → rule IN'] },
    { hook: 'PPV/NPV are “predictive” → they PREdict from PREvalence', expansion: ['↑ prevalence → ↑ PPV, ↓ NPV', 'Sens/Spec stay put'] },
  ],

  traps: [
    {
      questionCategory: 'Does prevalence change the index?',
      wrongInstinct: 'A more prevalent disease raises the sensitivity of the test',
      rightAnswer: 'Sensitivity and specificity are prevalence-independent; only PPV and NPV move with prevalence',
      why: 'Sens/Spec are computed within the diseased / non-diseased columns, so the disease : non-disease ratio (prevalence) does not affect them.',
    },
    {
      questionCategory: 'Which index for which job?',
      wrongInstinct: 'Use a highly specific test to screen a population and avoid missing disease',
      rightAnswer: 'Screening wants high sensitivity (SNout); specificity is for confirmation (SPin)',
      why: 'Screening must minimise false negatives (missed cases); a highly sensitive test with a negative result rules disease out.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A new rapid test has sensitivity 99% and specificity 60%. It is best used to:',
      options: [
        { id: 'a', text: 'Confirm disease when positive' },
        { id: 'b', text: 'Rule out disease when negative' },
        { id: 'c', text: 'Replace the reference standard' },
        { id: 'd', text: 'Estimate disease prevalence' },
      ],
      answerId: 'b',
      explanation: 'High sensitivity with a negative result rules out disease (SNout) because false negatives are rare. The modest specificity means a positive result is not yet confirmatory.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The same test is moved from a specialist clinic (high prevalence) to a community screen (low prevalence). What happens?',
      options: [
        { id: 'a', text: 'Sensitivity falls' },
        { id: 'b', text: 'Specificity rises' },
        { id: 'c', text: 'Positive predictive value falls' },
        { id: 'd', text: 'Likelihood ratios change' },
      ],
      answerId: 'c',
      explanation: 'Lower prevalence lowers the PPV (more of the positives are false positives). Sensitivity, specificity and the likelihood ratios are properties of the test and stay the same.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A positive test gives a likelihood ratio (LR+) of 1.0. This means the test result:',
      options: [
        { id: 'a', text: 'Strongly rules in disease' },
        { id: 'b', text: 'Strongly rules out disease' },
        { id: 'c', text: 'Does not change the pre-test probability' },
        { id: 'd', text: 'Has perfect specificity' },
      ],
      answerId: 'c',
      explanation: 'LR = 1 means post-test odds equal pre-test odds — the result is uninformative. LR > 1 rules in and LR < 1 rules out.',
      tests: 'investigation',
    },
  ],
};

export default ersDiagnosticTests;
