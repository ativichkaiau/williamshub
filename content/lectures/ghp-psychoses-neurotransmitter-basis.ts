import type { Lecture } from '../../lib/types';

export const ghpPsychosesNeurotransmitterBasis: Lecture = {
  id: 'ghp-psychoses-neurotransmitter-basis',
  title: 'Psychoses and Dementia: The Transmitter Hypotheses and Where They Fail',
  system: 'neuro',
  source: 'Ch 59 — States of Brain Activity — Sleep, Brain Waves, Epilepsy, Psychoses',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 59 States of Brain Activity' },
    { kind: 'mechanism', label: 'Monoamines · dopamine pathways · amyloid and tau' },
    { kind: 'disease', label: 'Depression · mania · schizophrenia · Alzheimer' },
  ],

  highYield: [
    '**The monoamine hypothesis says depression is deficient noradrenaline and serotonin signalling, and the evidence for it is pharmacological from both directions.** Deplete monoamines with **reserpine** and a proportion of patients become depressed; raise synaptic monoamines and mood eventually lifts, whether by **blocking their breakdown (MAO inhibitors), blocking reuptake of both amines (tricyclics) or blocking serotonin reuptake selectively (SSRIs)**. The anatomy is a good fit too: the **locus ceruleus** and the **raphe nuclei** project diffusely to limbic structures and prefrontal cortex, and depression disturbs exactly what those projections modulate — **mood, drive, sleep architecture, appetite and concentration**. Every effective class converges on the same synapses, which is a strong argument that monoamines are somewhere in the causal chain.',
    '**The hypothesis breaks at one specific joint: the drug acts in hours and the patient improves in weeks.** Synaptic serotonin rises after the **first dose**, yet mood does not move for **two to four weeks** — and depleting tryptophan in a healthy person does not make that person depressed. So the acute transmitter deficit cannot itself be the illness. What fits better is that the transmitter change is a **trigger for slower adaptation**: **presynaptic autoreceptor desensitisation letting firing rates recover, postsynaptic receptor downregulation, and BDNF-driven synaptic remodelling in hippocampus and prefrontal cortex** over the same two to four weeks. The clinical consequences are real — **the interval between starting a drug and gaining benefit is a period of risk, when energy may return before mood does**. Mania is the same axis pushed the other way: **excessive monoamine drive**, treated with **lithium, valproate or antipsychotics**, and the classic examination point is that **an antidepressant given alone to a patient with an unrecognised bipolar diathesis can precipitate a switch into mania**.',
    '**The dopamine hypothesis of schizophrenia rests on the single most quantitative fact in psychopharmacology: clinical potency tracks D2 receptor affinity.** Rank antipsychotics by the dose needed for effect and rank them by how tightly they bind **D2**, and the two lists match. Reinforcing it from the other side, **amphetamine, cocaine and high-dose levodopa raise dopamine and can produce a paranoid hallucinatory state clinically indistinguishable from acute schizophrenia**. The refinement that examinations test is **regional**: **positive symptoms — hallucinations, delusions, thought disorder — are attributed to excess dopamine signalling in the mesolimbic pathway from the ventral tegmental area to the nucleus accumbens**, while **negative and cognitive symptoms — flattening, avolition, poverty of speech, impaired working memory — are attributed to deficient dopamine signalling in the mesocortical projection to prefrontal cortex**.',
    '**Because the blocker cannot choose its pathway, the side effects are the mechanism restated.** A D2 antagonist reaches **all four dopamine pathways**: blocking the **mesolimbic** projection produces the benefit; blocking the **mesocortical** projection can **deepen the negative and cognitive symptoms** it was hoped to treat; blocking the **nigrostriatal** projection unmasks the same imbalance as parkinsonism, giving **acute dystonia, akathisia, drug-induced parkinsonism and, after long exposure, tardive dyskinesia**; and blocking the **tuberoinfundibular** projection removes the dopamine brake on lactotrophs, so **prolactin rises, giving galactorrhoea, amenorrhoea, gynaecomastia and loss of libido**. The same hypothesis has clear limits: **D2 occupancy is maximal within hours but the psychosis takes weeks to settle, negative and cognitive symptoms respond poorly, and clozapine — the most effective agent — is a comparatively weak D2 blocker**. That is why the **NMDA hypofunction model** has gained ground: **ketamine and phencyclidine block NMDA receptors and reproduce negative and cognitive symptoms, which amphetamine does not**.',
    '**Alzheimer disease is defined by two proteins in two different compartments, and only the third finding is what the drugs treat.** **Extracellular plaques** form when **amyloid precursor protein is cleaved by beta- and then gamma-secretase** to release **amyloid-beta 42**, which aggregates instead of being cleared. **Intracellular neurofibrillary tangles** are paired helical filaments of **hyperphosphorylated tau**, a microtubule-associated protein that, once phosphorylated, releases the microtubule and destabilises axonal transport. Degeneration begins in the **entorhinal cortex and hippocampus**, which is why the first deficit is **episodic memory with preserved motor function**, and spreads to temporoparietal association cortex. Genetics fits the amyloid arm: **APP, presenilin 1 and presenilin 2 mutations give autosomal dominant early-onset disease, APOE4 raises risk, and trisomy 21 carries a third copy of APP and produces the pathology decades early**.',
    '**The third finding is cholinergic, and it explains both why the drugs help and why they do not slow anything.** The **nucleus basalis of Meynert** in the basal forebrain supplies acetylcholine to the entire cortex, degenerates early, and takes **cortical choline acetyltransferase activity down with it**. **Cholinesterase inhibitors (donepezil, rivastigmine, galantamine)** raise acetylcholine in what synapses remain and give a **modest symptomatic gain**, while **memantine**, an **NMDA open-channel blocker**, damps chronic excitotoxic calcium entry. **Neither alters the underlying neuronal loss**, so decline continues. The deepest problem for the amyloid model is quantitative: **plaque burden correlates poorly with clinical severity, while tangle burden and synapse loss correlate well**, and antibodies that clear plaques efficiently have produced only small clinical effects at the cost of **amyloid-related imaging abnormalities**. The unifying lesson across all four disorders is the same — **transmitter chemistry names the drug target, but it does not name the disease**.',
  ],

  mechanism: {
    title: 'Why the receptor moves in hours and the patient moves in weeks',
    steps: [
      { id: 's1', label: 'A transmitter system shifts: mesolimbic dopamine up, cortical monoamines down, cortical acetylcholine lost' },
      { id: 's2', label: 'The first dose occupies or vacates its receptor within hours — measurable, but not yet therapeutic', emphasis: 'key' },
      { id: 's3', label: 'Presynaptic autoreceptors desensitise over days and neuronal firing rates reset', emphasis: 'key' },
      { id: 's4', label: 'Postsynaptic receptor density, second messengers and BDNF-driven synaptic remodelling follow', emphasis: 'key' },
      { id: 's5', label: 'Symptoms move only as that remodelling completes — the two to four week delay every class shares' },
      { id: 's6', label: 'Where the neurons themselves are gone, replacement is symptomatic only and degeneration continues', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A patient started on haloperidol develops a stiff, shuffling gait, reduced arm swing and a tremor within two weeks', mechanism: 'D2 blockade in the nigrostriatal pathway reproduces the striatal dopamine deficit of parkinsonism', significance: 'key' },
    { sign: 'Amenorrhoea and milk expression from the breasts in a woman taking an antipsychotic', mechanism: 'Tuberoinfundibular D2 blockade removes the tonic dopamine inhibition of prolactin release', significance: 'key' },
    { sign: 'A paranoid, hallucinating patient after several days of high-dose amphetamine, resolving as the drug clears', mechanism: 'Excess mesolimbic dopamine signalling reproduces the positive symptoms of schizophrenia', significance: 'key' },
    { sign: 'A depressed patient becomes elated, grandiose and sleepless two weeks after starting an antidepressant alone', mechanism: 'A monoamine-raising drug in unrecognised bipolar illness precipitates a switch into mania', significance: 'key' },
    { sign: 'Flattened affect, poverty of speech and avolition that do not improve on an effective antipsychotic', mechanism: 'Negative symptoms track mesocortical hypodopaminergia and NMDA hypofunction, which D2 blockade does not correct', significance: 'supportive' },
    { sign: 'Progressive loss of memory for recent events with entirely normal gait, power and reflexes early on', mechanism: 'Alzheimer pathology begins in entorhinal cortex and hippocampus and spares motor systems until late', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Clinical potency of antipsychotics ranked against their D2 receptor affinity', meaning: 'The two rankings match — the strongest single piece of evidence for the dopamine hypothesis' },
    { clue: 'Ketamine and phencyclidine given to healthy volunteers', meaning: 'Reproduce negative and cognitive symptoms as well as positive ones, supporting NMDA hypofunction where dopamine falls short' },
    { clue: 'Synaptic serotonin rises after the first SSRI dose but mood lifts at two to four weeks', meaning: 'The delay that breaks the simple monoamine hypothesis and points to downstream receptor and plasticity adaptation' },
    { clue: 'Extracellular deposits of amyloid-beta 42 with intracellular paired helical filaments of hyperphosphorylated tau', meaning: 'The two defining lesions of Alzheimer disease, in two different compartments' },
    { clue: 'Loss of neurons in the nucleus basalis of Meynert with reduced cortical choline acetyltransferase', meaning: 'The cholinergic deficit that cholinesterase inhibitors partially replace — symptomatic benefit only' },
    { clue: 'Plaque count compared with tangle burden and synapse loss as predictors of dementia severity', meaning: 'Tangles and synapse loss track severity far better than plaques, which is the amyloid hypothesis at its weakest' },
  ],

  treatment: [
    { logic: 'Four dopamine roads, and blocking D2 travels all of them', detail: 'Mesolimbic blockade gives the antipsychotic benefit. Mesocortical blockade can worsen the negative and cognitive symptoms. Nigrostriatal blockade produces acute dystonia, akathisia, drug-induced parkinsonism and eventually tardive dyskinesia. Tuberoinfundibular blockade raises prolactin, giving galactorrhoea, amenorrhoea and gynaecomastia. Every question about antipsychotic adverse effects is really asking which road the drug also went down, and the atypicals differ mainly in how much they spare the striatal one. The striatal circuitry that generates the movement disorder: [[basal-ganglia-circuitry]]. The mesolimbic projection viewed as a reward pathway, which is the same anatomy from the other side: [[ifh-addiction-neurobiology]].' },
    { logic: 'Where it is examined', detail: 'The recurring stem is not name the transmitter but explain what the transmitter model fails to explain. Learn three failures precisely: monoamines rise in hours while mood takes weeks; D2 occupancy is immediate while psychosis takes weeks and clozapine is a weak D2 blocker; plaque burden is a poor predictor of dementia severity while tangles and synapse loss are good ones. Each failure points to slower structural adaptation rather than acute chemistry. The aggregation biology behind plaques and tangles: [[protein-misfolding-amyloid]]. The receptor families these drug classes act on: [[ghp-neurotransmitters-receptors]].' },
  ],

  mnemonics: [
    { hook: 'Limbic too loud, cortex too quiet', expansion: ['Mesolimbic dopamine excess drives hallucinations, delusions and thought disorder', 'Mesocortical dopamine deficiency underlies flattening, avolition and poor working memory', 'A D2 blocker quietens the first and can deepen the second'] },
    { hook: 'Plaques outside, tangles inside, acetylcholine gone', expansion: ['Extracellular amyloid-beta 42 from beta- and gamma-secretase cleavage of APP', 'Intracellular hyperphosphorylated tau in paired helical filaments', 'Nucleus basalis of Meynert degeneration — the deficit the cholinesterase inhibitors treat symptomatically'] },
  ],

  traps: [
    {
      questionCategory: 'What cholinesterase inhibitors achieve in Alzheimer disease',
      wrongInstinct: 'Donepezil slows the progression of Alzheimer disease by protecting neurons',
      rightAnswer: 'It raises acetylcholine at surviving synapses for a modest symptomatic gain; neuronal loss and clinical decline continue unchanged',
      why: 'The drug replaces a transmitter, but the disease is the death of the neurons that made it — replacing output does not rescue the cell.',
    },
    {
      questionCategory: 'Timing of antidepressant response',
      wrongInstinct: 'Serotonin reuptake is blocked from the first dose, so benefit should appear within a day or two',
      rightAnswer: 'Response takes two to four weeks, because it depends on autoreceptor desensitisation, receptor downregulation and synaptic remodelling downstream of the acute rise',
      why: 'The interval is not pharmacokinetic but plastic — and it is a period of clinical risk, since drive can recover before mood does.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old woman treated with an antipsychotic for six weeks develops amenorrhoea and milky nipple discharge. Blocking dopamine receptors in which pathway explains this?',
      options: [
        { id: 'a', text: 'Mesolimbic, from the ventral tegmental area to the nucleus accumbens' },
        { id: 'b', text: 'Nigrostriatal, from substantia nigra pars compacta to the striatum' },
        { id: 'c', text: 'Tuberoinfundibular, from the arcuate nucleus to the anterior pituitary portal system' },
        { id: 'd', text: 'Mesocortical, from the ventral tegmental area to the prefrontal cortex' },
      ],
      answerId: 'c',
      explanation: 'Dopamine delivered from the arcuate nucleus through the hypophysial portal circulation is the tonic inhibitor of prolactin secretion, so it is the one hypothalamic factor that is predominantly inhibitory. Block D2 receptors on lactotrophs and that brake is released, prolactin rises, and the result is galactorrhoea with amenorrhoea, and gynaecomastia or reduced libido in men. Mesolimbic blockade produces the therapeutic effect, nigrostriatal blockade produces extrapyramidal features, and mesocortical blockade tends to worsen negative symptoms.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'An SSRI blocks the serotonin transporter within hours of the first dose, yet the depressive episode does not improve for two to four weeks. What best explains this delay?',
      options: [
        { id: 'a', text: 'The drug needs several weeks to accumulate to a therapeutic plasma concentration' },
        { id: 'b', text: 'Benefit requires slower adaptation downstream — autoreceptor desensitisation, receptor downregulation and synaptic remodelling' },
        { id: 'c', text: 'Serotonin must first be synthesised in larger amounts, which requires increased dietary tryptophan' },
        { id: 'd', text: 'The blood-brain barrier only becomes permeable to the drug after repeated dosing' },
      ],
      answerId: 'b',
      explanation: 'The acute rise in synaptic serotonin initially also stimulates presynaptic autoreceptors and suppresses raphe firing, so the net signal changes little at first. Over one to two weeks those autoreceptors desensitise, firing recovers, postsynaptic receptor density adjusts, and BDNF-driven remodelling occurs in hippocampus and prefrontal cortex — and mood tracks that structural adaptation rather than the transporter block itself. This is precisely why the simple monoamine deficiency model is incomplete, and it is also why the first weeks of treatment are a period of clinical risk.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'Which observation argues most directly against the idea that amyloid plaque deposition alone accounts for the severity of dementia in Alzheimer disease?',
      options: [
        { id: 'a', text: 'Presenilin 1 mutations cause autosomal dominant early-onset disease' },
        { id: 'b', text: 'People with trisomy 21 develop the pathology decades earlier than the general population' },
        { id: 'c', text: 'Neurofibrillary tangle burden and synapse loss correlate with cognitive severity far better than plaque count' },
        { id: 'd', text: 'Amyloid-beta 42 is produced by sequential beta- and gamma-secretase cleavage of APP' },
      ],
      answerId: 'c',
      explanation: 'A causal factor should scale with the outcome it causes, and plaque burden does not: patients can carry heavy plaque loads with modest impairment, while tangle distribution and synapse loss map closely onto clinical severity. That mismatch, together with the small clinical benefit of antibodies that clear plaques efficiently, is the main quantitative objection to a plaque-centred account. The presenilin and trisomy 21 findings support amyloid as an upstream initiator, and the secretase cleavage sequence simply describes how the peptide is produced — none of these three addresses the correlation with severity.',
      tests: 'disease',
    },
  ],
};

export default ghpPsychosesNeurotransmitterBasis;
