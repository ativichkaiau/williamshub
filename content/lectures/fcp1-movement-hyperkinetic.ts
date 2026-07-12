import type { Lecture } from '../../lib/types';

export const fcp1MovementHyperkinetic: Lecture = {
  id: 'fcp1-movement-hyperkinetic',
  title: 'Hyperkinetic Movement Disorders',
  system: 'clinical',
  source: 'L27 — Movement Disorders',
  updated: '2026-07-12',
  tags: [
    { kind: 'system', label: 'Clinical Practice' },
    { kind: 'lecture', label: 'L27 Movement Disorders' },
    { kind: 'disease', label: 'Tremor · chorea · dystonia · tics' },
    { kind: 'mechanism', label: 'Basal ganglia output' },
    { kind: 'exam', label: 'Phenomenology first' },
  ],

  highYield: [
    'Hyperkinetic disorders are **too much movement**. The whole approach is **phenomenology first**: describe the movement before naming a disease — is it **rhythmic?**, **sustained or brief?**, **suppressible?**, **stereotyped?**, and what **activates** it? Contrast this excess with the poverty of movement in [[fcp1-movement-hypokinetic-parkinsonism]].',
    '**Tremor** is the only **rhythmic** oscillation. Classify by when it appears: **rest** tremor (parkinsonian, re-emergent), **postural/action** tremor (physiological, **essential tremor** — bilateral, better with alcohol, family history), or **intention** tremor (cerebellar, worsens on approaching a target).',
    '**Chorea** is **brief, irregular, unpredictable, flowing** movement that flits between body parts (dance-like). Causes: **Huntington** disease (autosomal dominant, chorea + psychiatric change + dementia), **Sydenham** chorea (post-streptococcal, part of rheumatic fever), SLE, pregnancy and drugs. Large-amplitude proximal flinging is **ballism** — **hemiballismus** points to a contralateral **subthalamic nucleus** lesion.',
    '**Dystonia** is **sustained or intermittent co-contraction** producing **twisting, patterned, directional** postures, often eased by a **sensory trick (geste antagoniste)**; focal forms include cervical dystonia, blepharospasm and writer cramp. **Myoclonus** is a **sudden, brief, shock-like** jerk (or a lapse of tone — **asterixis** in metabolic encephalopathy).',
    '**Tics** are **stereotyped, repetitive, temporarily suppressible** movements or sounds preceded by an urge and relieved by performing them; motor + vocal tics before age 18 suggest **Tourette** syndrome. **Red flag:** an **acute dystonic reaction** to a dopamine antagonist (antipsychotic, metoclopramide) — treat urgently with an anticholinergic; and consider **Wilson** disease in any young person with a new movement disorder.',
  ],

  mechanism: {
    title: 'Describe the movement, then localise',
    steps: [
      { id: 's1', label: 'Rhythmic oscillation → tremor (then rest vs action vs intention)', emphasis: 'key' },
      { id: 's2', label: 'Brief, random, flowing, dance-like → chorea (± proximal flinging = ballism)', emphasis: 'key' },
      { id: 's3', label: 'Sustained twisting, patterned, sensory trick → dystonia', emphasis: 'normal' },
      { id: 's4', label: 'Sudden shock-like jerk → myoclonus; suppressible with urge → tic', emphasis: 'normal' },
      { id: 's5', label: 'Acute dystonia after a dopamine blocker → give anticholinergic now', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bilateral action tremor that eases with alcohol, positive family history', mechanism: 'Essential tremor — the classic action tremor', significance: 'key' },
    { sign: 'Brief, irregular, unpredictable movements flitting between limbs and face', mechanism: 'Chorea from altered basal-ganglia output', significance: 'key' },
    { sign: 'Twisting neck posture relieved by lightly touching the chin', mechanism: 'Cervical dystonia with a geste antagoniste (sensory trick)', significance: 'supportive' },
    { sign: 'A movement the patient can briefly suppress, building an inner urge', mechanism: 'Tic (suppressibility with premonitory urge is the discriminator)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Serum caeruloplasmin, 24-h urinary copper, slit-lamp for Kayser-Fleischer rings', meaning: 'Screens for Wilson disease in a young patient with a movement disorder' },
    { clue: 'Anti-streptococcal titres / throat swab in a child with chorea', meaning: 'Supports Sydenham chorea and prompts a rheumatic-fever work-up' },
    { clue: 'Genetic testing for the huntingtin CAG expansion', meaning: 'Confirms Huntington disease when chorea plus cognitive/psychiatric change and a dominant family history' },
    { clue: 'Medication review for dopamine antagonists', meaning: 'Identifies drug-induced dystonia, akathisia or tardive dyskinesia' },
  ],

  treatment: [
    { logic: 'Reverse an acute dystonic reaction immediately', detail: 'Stop the offending dopamine antagonist and give an anticholinergic (benztropine) or an antihistamine; it is distressing but rapidly reversible.' },
    { logic: 'Treat the phenomenology and its cause', detail: 'Essential tremor → propranolol; focal dystonia → botulinum toxin; Sydenham chorea → treat streptococcus and give rheumatic-fever prophylaxis; refer confirmed Huntington and Wilson for specialist care.' },
  ],

  mnemonics: [
    { hook: 'Rhythm, Random, Rigid-twist, Rapid-jerk, Repeat', expansion: ['Rhythmic = tremor', 'Random flowing = chorea', 'Rigid twisting = dystonia', 'Rapid shock = myoclonus', 'Repeat + urge = tic'] },
  ],

  traps: [
    {
      questionCategory: 'Drug-induced movement',
      wrongInstinct: 'A young patient arching the neck and eyes rolling up after an anti-emetic is having a seizure or being dramatic',
      rightAnswer: 'This is an acute dystonic reaction to a dopamine antagonist (e.g. metoclopramide) — stop the drug and give an anticholinergic',
      why: 'Oculogyric crisis and sustained abnormal posturing after a dopamine blocker are dystonia, which reverses quickly with anticholinergics.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 45-year-old has brief, irregular, unpredictable movements that flit from one hand to the face to a shoulder, together with worsening irritability and memory problems, and reports that his father had a similar illness. The movement is best described as:',
      options: [
        { id: 'a', text: 'Dystonia' },
        { id: 'b', text: 'Chorea' },
        { id: 'c', text: 'Rest tremor' },
        { id: 'd', text: 'Myoclonus' },
      ],
      answerId: 'b',
      explanation: 'Brief, irregular, unpredictable, flowing movements are chorea. With cognitive and psychiatric change and a dominant family history, this suggests Huntington disease. Dystonia is sustained and twisting, tremor is rhythmic, and myoclonus is a single shock-like jerk.',
      tests: 'disease',
    },
    {
      id: 'q2',
      stem: 'Thirty minutes after a dose of metoclopramide for nausea, a 20-year-old develops a forced upward deviation of the eyes and a sustained twisting of the neck. The most appropriate treatment is:',
      options: [
        { id: 'a', text: 'Intravenous benzodiazepine for a seizure' },
        { id: 'b', text: 'An anticholinergic such as benztropine' },
        { id: 'c', text: 'Levodopa' },
        { id: 'd', text: 'Reassurance only, as it will self-resolve' },
      ],
      answerId: 'b',
      explanation: 'Oculogyric crisis with sustained abnormal posturing shortly after a dopamine antagonist is an acute dystonic reaction. Stopping the drug and giving an anticholinergic (or antihistamine) reverses it quickly.',
      tests: 'treatment',
    },
  ],
};

export default fcp1MovementHyperkinetic;
