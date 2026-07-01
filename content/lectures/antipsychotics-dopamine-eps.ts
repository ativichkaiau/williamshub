import type { Lecture } from '../../lib/types';
import { DOPAMINE_TRACTS } from '../../lib/figures';

export const antipsychoticsDopamineEps: Lecture = {
  id: 'antipsychotics-dopamine-eps',
  title: 'Antipsychotics — Dopamine Pathways & EPS',
  system: 'neuro',
  source: 'L16 — Antipsychotics',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L16 Antipsychotics' },
    { kind: 'disease', label: 'Psychosis' },
    { kind: 'mechanism', label: 'D2 vs 5-HT2A blockade' },
    { kind: 'exam', label: 'EPS / NMS' },
  ],

  highYield: [
    'Dopamine hypothesis: **↑ mesolimbic dopamine → positive symptoms** (delusions, hallucinations); **↓ mesocortical dopamine → negative symptoms** (flat affect, avolition).',
    '**Typical antipsychotics block D2**; **atypicals block 5-HT2A > D2** → better negative-symptom balance and fewer motor effects. Four pathways: **mesolimbic** (D2 block treats psychosis), **mesocortical** (worsens negative Sx), **nigrostriatal (→ EPS)**, **tuberoinfundibular (→ hyperprolactinemia)**.',
    'Off-target blockade (esp. low-potency typicals): **α1 → orthostatic hypotension, H1 → sedation/weight gain, M (muscarinic) → anticholinergic effects**. High-potency typicals (haloperidol) → more EPS, less sedation.',
    '**Extrapyramidal symptoms (EPS)** by onset: **acute dystonia** (hours–days; oculogyric crisis → anticholinergics), **akathisia** (days–weeks; restlessness → propranolol/benzo), **parkinsonism** (weeks–months → anticholinergics/amantadine), **tardive dyskinesia** (months–years; choreoathetoid mouth/tongue → stop/switch to clozapine).',
    '**Neuroleptic malignant syndrome (NMS)** = **fever + “lead-pipe” rigidity + autonomic instability + altered mental status + ↑ CK/rhabdomyolysis** — a medical emergency (stop the drug; dantrolene/bromocriptine).',
  ],

  mechanism: {
    title: 'Block D2 to treat psychosis — but hit other DA pathways',
    steps: [
      { id: 's1', label: 'Block mesolimbic D2 → ↓ positive symptoms', emphasis: 'key' },
      { id: 's2', label: 'Nigrostriatal D2 block → EPS' },
      { id: 's3', label: 'Tuberoinfundibular D2 block → hyperprolactinemia' },
      { id: 's4', label: 'Atypicals: 5-HT2A > D2 → fewer EPS; watch for NMS', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sustained muscle contraction / oculogyric crisis soon after starting', mechanism: 'Acute dystonia (EPS)', significance: 'key' },
    { sign: 'Involuntary lip-smacking/tongue movements after long use', mechanism: 'Tardive dyskinesia', significance: 'key' },
    { sign: 'Fever + rigidity + autonomic instability + ↑CK', mechanism: 'Neuroleptic malignant syndrome', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Timing of movement disorder onset', meaning: 'Classifies EPS type' },
    { clue: 'CK, temperature, autonomic signs', meaning: 'Detects NMS' },
    { clue: 'Prolactin level', meaning: 'Tuberoinfundibular D2 blockade' },
  ],

  treatment: [
    { logic: 'Acute dystonia/parkinsonism → anticholinergics (benztropine)', detail: 'Rebalance ACh–dopamine.' },
    { logic: 'Akathisia → propranolol/benzodiazepine; dose reduction', detail: 'Restlessness.' },
    { logic: 'NMS → stop drug + supportive care ± dantrolene/bromocriptine', detail: 'Emergency.' },
  ],

  mnemonics: [
    { hook: 'EPS timeline: Dystonia (hrs) → Akathisia (days) → Parkinsonism (wks) → Tardive dyskinesia (mo–yr)', expansion: ['Nigrostriatal D2 block'] },
    { hook: 'NMS = FEVER: Fever, Encephalopathy, Vitals unstable, Elevated CK, Rigidity', expansion: ['Lead-pipe rigidity'] },
  ],

  traps: [
    {
      questionCategory: 'NMS vs serotonin syndrome',
      wrongInstinct: 'Fever with rigidity on a psychiatric drug is always serotonin syndrome',
      rightAnswer: 'Fever + lead-pipe rigidity + ↑CK after a dopamine-blocking (antipsychotic) drug is neuroleptic malignant syndrome; serotonin syndrome (from serotonergic drugs) shows hyperreflexia and clonus instead',
      why: 'NMS follows dopamine antagonists and features rigidity with bradyreflexia, whereas serotonin syndrome follows serotonergic drugs and features neuromuscular hyperactivity (clonus, hyperreflexia).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two days after starting haloperidol, a young man develops sustained involuntary contraction of the neck muscles and an upward deviation of the eyes. This is:',
      options: [
        { id: 'a', text: 'Tardive dyskinesia' },
        { id: 'b', text: 'Acute dystonia' },
        { id: 'c', text: 'Neuroleptic malignant syndrome' },
        { id: 'd', text: 'Akathisia' },
      ],
      answerId: 'b',
      explanation: 'Acute dystonia (including oculogyric crisis) occurs within hours to days of starting a high-potency antipsychotic and is treated with anticholinergics such as benztropine or diphenhydramine.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Dopamine tracts & D2 blockade', svg: DOPAMINE_TRACTS, caption: 'Mesolimbic (treats psychosis), mesocortical (worsens negative Sx), nigrostriatal (EPS), tuberoinfundibular (hyperprolactinemia).' },
  ],
};

export default antipsychoticsDopamineEps;
