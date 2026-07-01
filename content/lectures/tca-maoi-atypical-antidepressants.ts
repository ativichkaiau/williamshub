import type { Lecture } from '../../lib/types';

export const tcaMaoiAtypicalAntidepressants: Lecture = {
  id: 'tca-maoi-atypical-antidepressants',
  title: 'TCAs, MAOIs & Atypical Antidepressants',
  system: 'neuro',
  source: 'L17 — Antidepressants',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L17 Antidepressants' },
    { kind: 'disease', label: 'Depression' },
    { kind: 'mechanism', label: 'Older & atypical agents' },
    { kind: 'exam', label: 'Tyramine / bupropion' },
  ],

  highYield: [
    '**Tricyclics (TCAs — amitriptyline, nortriptyline, clomipramine, imipramine)** block SERT + NET but also **antagonize muscarinic, H1, and α1** receptors → **anticholinergic effects, sedation/weight gain, orthostatic hypotension**, and dangerous **cardiotoxicity (QT prolongation, arrhythmia) in overdose**. Second-line; contraindicated with MAOIs and recent MI.',
    '**MAOIs (phenelzine, tranylcypromine, isocarboxazid)** inhibit monoamine oxidase → ↑ 5-HT/NE/DA. Two dangers: **tyramine-induced hypertensive crisis** (aged cheese, cured meats, red wine) and **serotonin syndrome** with serotonergic drugs (SSRIs, meperidine).',
    '**Bupropion** (NDRI — blocks DAT/NET): treats depression and aids **smoking cessation**; **fewer sexual side effects, less weight gain**; **lowers seizure threshold → avoid in seizure disorders and bulimia**.',
    '**Mirtazapine** (α2 antagonist → ↑ NE/5-HT; H1 block) → **sedation, weight gain, appetite** (useful in depression with insomnia/poor appetite). **Trazodone** (5-HT2/α1 block) is used for insomnia; **vortioxetine** is a multimodal serotonergic agent.',
    'Treatment-resistant depression: **augment with an atypical antipsychotic** (aripiprazole/quetiapine; olanzapine+fluoxetine), **esketamine** (NMDA antagonist nasal spray), or **brexanolone** (postpartum).',
  ],

  mechanism: {
    title: 'Older/atypical routes to raising monoamines',
    steps: [
      { id: 's1', label: 'TCA: SERT/NET block + M/H1/α1 antagonism', emphasis: 'key' },
      { id: 's2', label: 'MAOI: block monoamine breakdown' },
      { id: 's3', label: 'Bupropion (DA/NE), mirtazapine (α2), trazodone' },
      { id: 's4', label: 'Watch tyramine crisis & TCA overdose cardiotoxicity', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Dry mouth, urinary retention, sedation, QT on ECG', mechanism: 'TCA receptor blockade + cardiotoxicity', significance: 'key' },
    { sign: 'Severe hypertension after aged cheese on an MAOI', mechanism: 'Tyramine hypertensive crisis', significance: 'key' },
    { sign: 'Depression + insomnia + poor appetite improved by one drug', mechanism: 'Mirtazapine (sedation, appetite)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'ECG in TCA overdose', meaning: 'QRS widening / arrhythmia risk' },
    { clue: 'Dietary review on MAOIs', meaning: 'Tyramine avoidance' },
    { clue: 'Seizure history before bupropion', meaning: 'Contraindication' },
  ],

  treatment: [
    { logic: 'TCA overdose: sodium bicarbonate for cardiotoxicity', detail: 'Narrow therapeutic index — lethal in overdose.' },
    { logic: 'MAOI diet counseling + drug washout', detail: 'Avoid tyramine & serotonergics.' },
    { logic: 'Bupropion for depression + smoking cessation (not in seizure/bulimia)', detail: 'Fewer sexual side effects.' },
  ],

  mnemonics: [
    { hook: 'TCA overdose = 3 Cs: Cardiotoxicity, Convulsions, Coma', expansion: ['Anticholinergic + Na-channel effects'] },
    { hook: 'MAOI + tyramine = hypertensive crisis; MAOI + SSRI = serotonin syndrome', expansion: ['Two classic MAOI dangers'] },
  ],

  traps: [
    {
      questionCategory: 'Bupropion contraindication',
      wrongInstinct: 'Bupropion’s lack of sexual side effects makes it a good choice for any depressed patient',
      rightAnswer: 'Bupropion lowers the seizure threshold and is contraindicated in seizure disorders and in patients with bulimia/anorexia',
      why: 'Its dopaminergic/noradrenergic action increases seizure risk, so despite its favorable sexual/weight profile it must be avoided where seizure risk is already elevated.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient on phenelzine develops a severe headache and hypertensive crisis after eating aged cheese and cured meats. The mechanism is:',
      options: [
        { id: 'a', text: 'Serotonin syndrome' },
        { id: 'b', text: 'Tyramine-induced hypertensive crisis from MAO inhibition' },
        { id: 'c', text: 'Anticholinergic toxicity' },
        { id: 'd', text: 'Lithium toxicity' },
      ],
      answerId: 'b',
      explanation: 'MAOIs prevent breakdown of dietary tyramine (a sympathomimetic), so tyramine-rich foods trigger a hypertensive crisis — the reason MAOIs require strict dietary restriction.',
      tests: 'exam',
    },
  ],
};

export default tcaMaoiAtypicalAntidepressants;
