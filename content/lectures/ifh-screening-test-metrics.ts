import type { Lecture } from '../../lib/types';

export const ifhScreeningTestMetrics: Lecture = {
  id: 'ifh-screening-test-metrics',
  title: 'Screening Test Performance',
  system: 'community',
  source: 'L6 — Health Screening & Prevention',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Family Health' },
    { kind: 'lecture', label: 'L6 Screening & Prevention' },
    { kind: 'investigation', label: 'Sensitivity · Specificity · PPV/NPV' },
    { kind: 'mechanism', label: 'Prevalence & PPV' },
    { kind: 'exam', label: 'Lead-time · Length-time bias' },
  ],

  highYield: [
    '**Sensitivity and specificity are properties of the test.** **Sensitivity** = TP/(TP+FN), the proportion of true cases caught — **SnNout** (a Sensitive test, if Negative, rules OUT). **Specificity** = TN/(TN+FP), the proportion of true non-cases cleared — **SpPin** (a Specific test, if Positive, rules IN).',
    '**A good screening test is highly sensitive** — you would rather over-call and confirm later than miss a real case (few false negatives). A highly **specific** confirmatory test then removes the false positives ([[ifh-screening-principles]]).',
    '**PPV and NPV depend on prevalence.** **PPV** = TP/(TP+FP) = probability a positive is truly diseased; **NPV** = TN/(TN+FN). Unlike sensitivity/specificity, these move with the **pre-test probability** of the population tested.',
    '**Low prevalence crushes PPV.** Screen a low-prevalence population and even a very specific test produces **many false positives per true positive** — the same test looks far less useful in the general population than in a high-risk clinic.',
    '**Judge screening by mortality, not survival**, because three biases flatter it: **lead-time bias** (diagnosis is merely moved earlier, so “survival from diagnosis” lengthens without postponing death), **length-time bias** (screening preferentially catches slow, indolent disease), and its extreme, **overdiagnosis** (finding disease that would never have harmed the patient → overtreatment, a [[ifh-prevention-levels]] quaternary concern).',
  ],

  mechanism: {
    title: '2×2 table → sensitivity/specificity → apply prevalence → PPV/NPV → beware biases',
    steps: [
      { id: 's1', label: 'Build the 2×2: TP, FP, FN, TN' },
      { id: 's2', label: 'Sensitivity & specificity — intrinsic to the test', emphasis: 'key' },
      { id: 's3', label: 'Apply the population’s prevalence', emphasis: 'key' },
      { id: 's4', label: 'PPV & NPV fall out — and shift with prevalence' },
      { id: 's5', label: 'Judge programmes by mortality to defeat lead/length-time bias', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Screening tests are chosen for high sensitivity (SnNout)', mechanism: 'Missing a true case is the costly error, so few false negatives is the priority', significance: 'key' },
    { sign: 'Sensitivity/specificity are test-intrinsic; PPV/NPV move with prevalence', mechanism: 'Predictive values combine test accuracy with pre-test probability', significance: 'key' },
    { sign: 'At low prevalence even a very specific test gives a low PPV', mechanism: 'Rare disease means false positives outnumber the few true positives', significance: 'key' },
    { sign: 'Lead-time and length-time bias inflate survival without extending life', mechanism: 'Earlier or indolent detection changes the clock, not the outcome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'A test’s PPV drops when moved from a high-risk clinic to the general public', meaning: 'Prevalence fell → more false positives per true positive → lower PPV (sensitivity is unchanged)' },
    { clue: 'Screen-detected patients “survive longer from diagnosis” but die at the same age', meaning: 'Lead-time bias — the diagnosis moved earlier, death did not move later' },
    { clue: 'Screen-detected cancers are more often slow-growing than symptomatic ones', meaning: 'Length-time bias; its extreme is overdiagnosis of disease that never would have mattered' },
    { clue: 'You want a first-pass test to safely rule disease OUT', meaning: 'Choose a highly sensitive test — a negative on a sensitive test rules out (SnNout)' },
  ],

  treatment: [
    { logic: 'Match the metric to the job', detail: 'Screen with a sensitive test (few false negatives), then confirm every positive with a specific test (few false positives).' },
    { logic: 'Interpret a positive in light of prevalence', detail: 'In low-prevalence settings expect many false positives; quote the PPV for that population, not just the sensitivity.' },
    { logic: 'Evaluate programmes by disease-specific mortality', detail: 'Randomised mortality endpoints neutralise lead-time, length-time bias and overdiagnosis, which all distort survival statistics.' },
  ],

  mnemonics: [
    { hook: 'SnNout & SpPin', expansion: ['High SeNsitivity + a Negative result → rules the disease OUT', 'High SPecificity + a Positive result → rules the disease IN'] },
    { hook: 'PPV rides on Prevalence; sensitivity/specificity do not', expansion: ['↓ prevalence → ↓ PPV (false positives swamp true positives)', 'Sensitivity & specificity stay ~constant across populations'] },
  ],

  traps: [
    {
      questionCategory: 'What actually changes with prevalence',
      wrongInstinct: 'Sensitivity and specificity fall when you screen a low-prevalence population',
      rightAnswer: 'Sensitivity and specificity are test-intrinsic; it is PPV (and NPV) that shift with prevalence',
      why: 'This is the classic mix-up — dropping the prevalence lowers the positive predictive value, not the sensitivity of the test.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A screening test with fixed sensitivity and specificity is rolled out from a high-risk clinic to a low-prevalence general population. What happens to its positive predictive value (PPV)?',
      options: [
        { id: 'a', text: 'It rises, because more people are tested' },
        { id: 'b', text: 'It falls, because false positives now outnumber true positives' },
        { id: 'c', text: 'It is unchanged, because PPV is a property of the test' },
        { id: 'd', text: 'It falls, because the sensitivity of the test decreases' },
      ],
      answerId: 'b',
      explanation: 'PPV depends on prevalence. In a low-prevalence population the small pool of true cases is swamped by false positives, so PPV falls even though the test’s sensitivity and specificity are unchanged.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'Patients whose cancer is found by screening appear to “survive longer from the time of diagnosis” than those diagnosed after symptoms, yet both groups die at the same age. Which bias best explains this?',
      options: [
        { id: 'a', text: 'Lead-time bias' },
        { id: 'b', text: 'Selection bias' },
        { id: 'c', text: 'Recall bias' },
        { id: 'd', text: 'Length-time bias' },
      ],
      answerId: 'a',
      explanation: 'Lead-time bias: screening advances the moment of diagnosis, so measured survival from diagnosis lengthens even though the date of death is unchanged. Mortality-based endpoints avoid this trap.',
      tests: 'investigation',
    },
  ],
};

export default ifhScreeningTestMetrics;
