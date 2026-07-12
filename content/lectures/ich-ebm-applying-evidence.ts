import type { Lecture } from '../../lib/types';

export const ichEbmApplyingEvidence: Lecture = {
  id: 'ich-ebm-applying-evidence',
  title: 'Applying Evidence to Patients',
  system: 'community',
  source: 'L12 — Practical Evidence-Based Medicine',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Community Health' },
    { kind: 'lecture', label: 'L12 Practical EBM' },
    { kind: 'mechanism', label: 'ARR · RRR · NNT · NNH' },
    { kind: 'treatment', label: 'Shared decision-making' },
  ],

  highYield: [
    '**Absolute beats relative at the bedside.** From the control event rate (**CER**) and experimental event rate (**EER**): **Relative Risk Reduction (RRR) = (CER − EER)/CER**, while **Absolute Risk Reduction (ARR) = CER − EER**. The RRR looks large and is nearly constant; the **ARR** carries the true, baseline-dependent benefit — the same lesson as [[ich-measures-of-association]].',
    '**NNT = 1/ARR** (round up) — the number needed to treat to prevent one event. For harm, **NNH = 1/ARI**, where **ARI = EER − CER** (absolute risk increase). Weigh **NNT against NNH** to judge the benefit–harm balance.',
    '**A given RRR yields more absolute benefit (a smaller NNT) at higher baseline risk.** This is why treating **high-risk** patients prevents more events than treating low-risk ones for the same relative effect — and why absolute numbers must be quoted.',
    '**EBM ends in integration, not dictation.** Combine the evidence with clinical expertise and the patient’s values (the three-legged stool from [[ich-ebm-five-steps]]); **shared decision-making** presents benefits and harms as absolute risks / NNT / NNH so the patient can weigh them against what matters to them.',
    '**Barriers to EBM** are real: limited time, access, and appraisal skills; information overload; conflicting guidelines; and evidence from trial populations that may not match the individual patient in front of you.',
  ],

  mechanism: {
    title: 'Apply: relative → absolute (ARR) → NNT → weigh harm (NNH) → decide together',
    steps: [
      { id: 's1', label: 'Get the event rates: CER and EER' },
      { id: 's2', label: 'Absolute risk reduction ARR = CER − EER', emphasis: 'key' },
      { id: 's3', label: 'NNT = 1/ARR (round up)', emphasis: 'key' },
      { id: 's4', label: 'Weigh benefit against harm: NNH = 1/ARI' },
      { id: 's5', label: 'Share the decision — integrate patient values', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'NNT = 1/ARR — use the ABSOLUTE reduction, never the relative', mechanism: 'A relative reduction ignores baseline risk and inflates apparent benefit', significance: 'key' },
    { sign: 'The same RRR gives a smaller NNT at higher baseline risk', mechanism: 'Absolute benefit scales with how much risk there is to remove', significance: 'key' },
    { sign: 'NNT and NNH together frame the benefit–harm trade-off', mechanism: 'Comparing “treat to help one” vs “treat to harm one” weighs the magnitudes', significance: 'supportive' },
    { sign: 'Evidence informs; patient values decide', mechanism: 'Shared decision-making integrates preferences with the numbers', significance: 'key' },
  ],

  investigations: [
    { clue: 'A drug lowers 1-year event risk from 20% to 10%', meaning: 'ARR = 10% → NNT = 1/0.10 = 10 patients treated to prevent one event' },
    { clue: 'A headline reports a “50% relative risk reduction”', meaning: 'Ask the baseline: 2%→1% is only ARR 1%, NNT 100 — a small absolute gain' },
    { clue: 'Drug with NNT 20 for benefit but NNH 100 for a serious harm', meaning: 'Benefit outweighs harm for most (help 1 in 20 vs harm 1 in 100)' },
    { clue: 'Patient values avoiding a side effect over a small mortality gain', meaning: 'Patient preference overrides — a valid shared decision to decline' },
  ],

  treatment: [
    { logic: 'Translate trials into absolute terms, then decide together', detail: 'Convert results to ARR, NNT, and NNH; present these absolute numbers to the patient, and reach a shared decision that fits their values.' },
  ],

  mnemonics: [
    { hook: 'NNT = 1 / ARR (Absolute, not relative)', expansion: ['ARR = CER − EER', 'Round the NNT up'] },
    { hook: 'Benefit NNT vs harm NNH', expansion: ['Compare the two numbers', 'Smaller NNT / larger NNH favours treating'] },
  ],

  traps: [
    {
      questionCategory: 'Relative vs absolute benefit',
      wrongInstinct: 'A 50% relative risk reduction always means a large clinical benefit',
      rightAnswer: 'It depends on baseline risk — on a 2% baseline a 50% RRR is only a 1% ARR (NNT 100)',
      why: 'Relative measures ignore baseline risk; only ARR and NNT reveal the true magnitude of benefit for this patient.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A treatment reduces the 1-year risk of an event from 20% (control) to 10% (treated). What is the number needed to treat (NNT)?',
      options: [
        { id: 'a', text: '2' },
        { id: 'b', text: '5' },
        { id: 'c', text: '10' },
        { id: 'd', text: '50' },
      ],
      answerId: 'c',
      explanation: 'ARR = CER − EER = 20% − 10% = 10% = 0.10. NNT = 1/ARR = 1/0.10 = 10 patients treated for one year to prevent one event.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'For a fixed relative risk reduction, the absolute benefit of treatment (and thus the lowest NNT) is greatest in patients with:',
      options: [
        { id: 'a', text: 'The lowest baseline risk' },
        { id: 'b', text: 'The highest baseline risk' },
        { id: 'c', text: 'A baseline risk of exactly 50%' },
        { id: 'd', text: 'Baseline risk has no effect on the NNT' },
      ],
      answerId: 'b',
      explanation: 'ARR = baseline risk × RRR, so for a fixed RRR the absolute reduction grows with baseline risk, making the NNT smallest in the highest-risk patients — the rationale for targeting high-risk groups.',
      tests: 'mechanism',
    },
  ],
};

export default ichEbmApplyingEvidence;
