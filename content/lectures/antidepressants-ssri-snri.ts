import type { Lecture } from '../../lib/types';

export const antidepressantsSsriSnri: Lecture = {
  id: 'antidepressants-ssri-snri',
  title: 'Antidepressants — SSRIs & SNRIs',
  system: 'neuro',
  source: 'L17 — Antidepressants',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L17 Antidepressants' },
    { kind: 'disease', label: 'Depression' },
    { kind: 'mechanism', label: 'Monoamine reuptake' },
    { kind: 'exam', label: 'Serotonin syndrome' },
  ],

  highYield: [
    'Depression relates to deficient monoamines (**5-HT, NE, DA**); most antidepressants raise them. **All antidepressants take ~2–4 weeks for full effect.**',
    '**SSRIs (fluoxetine, sertraline, paroxetine, citalopram, escitalopram, fluvoxamine)** block the **serotonin transporter (SERT)** — **first-line** for depression and anxiety (GAD, panic, OCD). Side effects: **nausea, sexual dysfunction, insomnia, headache**.',
    'SSRI specifics: **fluoxetine** = long half-life; **paroxetine** = most withdrawal + cardiac malformation risk in pregnancy; **citalopram** = dose-dependent **QTc**; **fluvoxamine** = OCD.',
    '**SNRIs (venlafaxine, duloxetine, milnacipran)** block **SERT + NET** → also useful for **neuropathic pain/fibromyalgia (duloxetine)**; NE effects = ↑BP, tachycardia, tremor.',
    '**Serotonin syndrome** = life-threatening excess serotonergic activity (**autonomic instability + neuromuscular hyperactivity — clonus, hyperreflexia + altered mental status**), typically from **combining serotonergic drugs** (SSRI/SNRI + MAOI, meperidine, tramadol, St John’s wort).',
  ],

  mechanism: {
    title: 'Block reuptake → more synaptic monoamine → (delayed) mood lift',
    steps: [
      { id: 's1', label: 'SSRI blocks SERT (± NET for SNRI)', emphasis: 'key' },
      { id: 's2', label: '↑ Synaptic serotonin (± noradrenaline)' },
      { id: 's3', label: 'Downstream adaptation over 2–4 weeks → response' },
      { id: 's4', label: 'Excess serotonergic drugs → serotonin syndrome', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Nausea and sexual dysfunction early in therapy', mechanism: 'Serotonergic (5-HT3) side effects', significance: 'key' },
    { sign: 'Clonus, hyperreflexia, agitation, fever', mechanism: 'Serotonin syndrome', significance: 'key' },
    { sign: 'Improved mood only after 2–4 weeks', mechanism: 'Delayed antidepressant onset', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Medication list for serotonergic combinations', meaning: 'Serotonin syndrome risk' },
    { clue: 'ECG on high-dose citalopram', meaning: 'QTc prolongation' },
    { clue: 'Pregnancy status (paroxetine)', meaning: 'Teratogenic caution' },
  ],

  treatment: [
    { logic: 'SSRI first-line for MDD and anxiety disorders', detail: 'Favorable safety/tolerability.' },
    { logic: 'SNRI (duloxetine) when neuropathic pain coexists', detail: 'Dual reuptake block.' },
    { logic: 'Serotonin syndrome: stop serotonergics, supportive care ± cyproheptadine', detail: 'Emergency.' },
  ],

  mnemonics: [
    { hook: 'SSRIs block SERT; first-line, 2–4 weeks, sexual/GI side effects', expansion: ['Also treat anxiety/OCD'] },
    { hook: 'Serotonin syndrome = clonus + hyperreflexia + fever (serotonergic combos)', expansion: ['MAOI + SSRI is classic'] },
  ],

  traps: [
    {
      questionCategory: 'Timing of antidepressant response',
      wrongInstinct: 'If an SSRI hasn’t improved mood within a few days it has failed and should be switched',
      rightAnswer: 'Antidepressants require ~2–4 weeks for full therapeutic effect — early lack of response does not mean failure',
      why: 'Although synaptic serotonin rises immediately, the mood benefit depends on slower downstream neuroadaptation, so adequate trials last several weeks before judging efficacy.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on an MAOI is given an SSRI and develops agitation, fever, tremor, hyperreflexia, and clonus. The diagnosis is:',
      options: [
        { id: 'a', text: 'Neuroleptic malignant syndrome' },
        { id: 'b', text: 'Serotonin syndrome' },
        { id: 'c', text: 'Anticholinergic toxicity' },
        { id: 'd', text: 'Lithium toxicity' },
      ],
      answerId: 'b',
      explanation: 'Combining serotonergic agents (here an MAOI + SSRI) can cause serotonin syndrome — autonomic instability plus neuromuscular hyperactivity (clonus, hyperreflexia) and altered mental status.',
      tests: 'exam',
    },
  ],
};

export default antidepressantsSsriSnri;
