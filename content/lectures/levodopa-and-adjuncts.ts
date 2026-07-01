import type { Lecture } from '../../lib/types';
import { DOPAMINE_PATHWAY } from '../../lib/figures';

export const levodopaAndAdjuncts: Lecture = {
  id: 'levodopa-and-adjuncts',
  title: 'Levodopa & Dopamine-Boosting Adjuncts',
  system: 'neuro',
  source: 'L9 — Antiparkinson Agents',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L9 Antiparkinson Agents' },
    { kind: 'disease', label: "Parkinson's disease" },
    { kind: 'mechanism', label: 'Restore dopamine' },
    { kind: 'exam', label: 'Levodopa + carbidopa' },
  ],

  highYield: [
    "**Parkinson = loss of nigrostriatal dopamine → relative ACh overactivity** (bradykinesia, rigidity, resting tremor, postural instability). Treatment = **↑ dopamine production, ↑ dopamine activity, ↓ ACh**.",
    '**Levodopa (L-DOPA)** crosses the BBB (amino-acid transporter) then is decarboxylated to dopamine — best for **bradykinesia**. Only ~1–3% reaches the brain; efficacy wanes over **3–5 years** (doesn’t halt progression).',
    '**Carbidopa/benserazide** = peripheral **DOPA-decarboxylase inhibitors** → more L-DOPA reaches the brain and **less peripheral N/V/hypotension** (Sinemet).',
    '**COMT inhibitors (entacapone peripheral, tolcapone central+peripheral)** prolong L-DOPA and **reduce “wearing-off”** (tolcapone → hepatotoxicity). **MAO-B inhibitors (selegiline, rasagiline, safinamide)** raise dopamine, are neuroprotective, and reduce off-time.',
    'Long-term L-DOPA problems: **“wearing-off,” unpredictable “on-off,” and dyskinesias** (rescue an off-period with **apomorphine**). **Serotonin syndrome/hypertensive crisis** if MAO-B inhibitors combine with SSRIs/meperidine/tramadol/dextromethorphan or nonselective MAOIs.',
  ],

  mechanism: {
    title: 'Deliver & preserve dopamine at each metabolic step',
    steps: [
      { id: 's1', label: 'Give L-DOPA (crosses BBB)', emphasis: 'key' },
      { id: 's2', label: 'Carbidopa blocks peripheral decarboxylase → more to brain' },
      { id: 's3', label: 'COMT & MAO-B inhibitors slow dopamine breakdown' },
      { id: 's4', label: 'Chronic use → wearing-off / on-off / dyskinesia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Improvement of bradykinesia/rigidity on levodopa', mechanism: 'Central dopamine repletion', significance: 'key' },
    { sign: 'End-of-dose “wearing-off” and involuntary dyskinesias', mechanism: 'Fluctuating levodopa levels', significance: 'key' },
    { sign: 'Nausea / orthostatic hypotension early in therapy', mechanism: 'Peripheral dopamine (reduced by carbidopa)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Clinical response to levodopa', meaning: 'Supports idiopathic Parkinson diagnosis' },
    { clue: 'Medication + supplement review (pyridoxine, nonselective MAOI)', meaning: 'Interactions reducing efficacy / hypertensive crisis' },
    { clue: 'On/off diary', meaning: 'Guides adjuncts for fluctuations' },
  ],

  treatment: [
    { logic: 'Levodopa + carbidopa is the most effective symptomatic therapy', detail: 'Carbidopa cuts peripheral side effects.' },
    { logic: 'Add COMT/MAO-B inhibitor for wearing-off', detail: 'Entacapone (Stalevo); rasagiline.' },
    { logic: 'Apomorphine (SC) rescues sudden off-periods', detail: 'Avoid combining with ondansetron (hypotension).' },
  ],

  mnemonics: [
    { hook: 'Carbidopa keeps DOPA for the brain (blocks peripheral decarboxylase)', expansion: ['↓ N/V, ↓ hypotension'] },
    { hook: 'Entacapone/Tolcapone = COMT; Selegiline/Rasagiline = MAO-B', expansion: ['Both prolong levodopa'] },
  ],

  traps: [
    {
      questionCategory: 'Purpose of carbidopa',
      wrongInstinct: 'Carbidopa is added to help levodopa cross the blood-brain barrier',
      rightAnswer: 'Carbidopa inhibits PERIPHERAL DOPA-decarboxylase, so more levodopa survives to reach the brain and peripheral side effects fall — it does not itself enter the CNS',
      why: 'Carbidopa cannot cross the BBB; by blocking peripheral conversion of levodopa to dopamine, it increases central delivery and reduces nausea and hypotension.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Levodopa is combined with carbidopa in Parkinson disease primarily to:',
      options: [
        { id: 'a', text: 'Block central dopamine receptors' },
        { id: 'b', text: 'Inhibit peripheral DOPA-decarboxylase, increasing CNS delivery and reducing side effects' },
        { id: 'c', text: 'Directly stimulate D2 receptors' },
        { id: 'd', text: 'Inhibit MAO-B in the brain' },
      ],
      answerId: 'b',
      explanation: 'Carbidopa inhibits peripheral DOPA-decarboxylase, so more levodopa reaches the brain and there is less peripheral dopamine causing nausea and orthostatic hypotension.',
      tests: 'treatment',
    },
  ],

  figures: [
    { title: 'Dopamine pathway & drug block points', svg: DOPAMINE_PATHWAY, caption: 'L-DOPA is given; carbidopa blocks peripheral decarboxylase; entacapone (COMT) and selegiline (MAO-B) slow dopamine breakdown.' },
  ],
};

export default levodopaAndAdjuncts;
