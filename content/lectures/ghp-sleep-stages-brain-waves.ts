import type { Lecture } from '../../lib/types';

export const ghpSleepStagesBrainWaves: Lecture = {
  id: 'ghp-sleep-stages-brain-waves',
  title: 'Brain Waves, Sleep Stages and the Sleep-Wake Switch',
  system: 'neuro',
  source: 'Ch 59 — States of Brain Activity — Sleep, Brain Waves, Epilepsy, Psychoses',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 59 States of Brain Activity' },
    { kind: 'mechanism', label: 'VLPO versus arousal nuclei, stabilised by orexin' },
    { kind: 'exam', label: 'Alpha blocking · spindles · cataplexy' },
  ],

  highYield: [
    '**The EEG reports how synchronised the cortex is, not how hard it is working — and that one idea generates the whole ladder of rhythms.** The record is the sum of dendritic synaptic potentials in the superficial cortex, so when neurons work independently the trace is **fast and low in voltage**, and when they are driven into lockstep it becomes **slow and high in voltage**. Hence **beta above 14 Hz** in the alert, mentally engaged cortex; **alpha at 8–13 Hz and roughly 50 microvolts**, maximal over the occiput, in the awake adult who is relaxed with the eyes closed; **theta at 4–7 Hz** in children, in drowsiness and in some organic disease; and **delta below 3.5 Hz at the largest amplitude of all** in deep sleep, in infancy, and — in an awake adult — as a marker of **serious organic brain disease**. **Alpha blocking**, the vanishing of alpha the instant the eyes open or the patient does mental arithmetic, is that principle demonstrated at the bedside: attention desynchronises the cortex.',
    '**Delta is made by the cortex itself; every faster rhythm needs the thalamus.** Separate the cortex from its thalamic input and **delta continues while alpha and sleep spindles disappear**, because alpha and spindle oscillations are generated in **thalamocortical loops** and delta is an intrinsic cortical rhythm released when that drive is withdrawn. This is why delta is the common final appearance of **deep sleep, general anaesthesia, coma and metabolic encephalopathy** — very different causes with the same consequence, namely loss of ascending thalamocortical excitation. The corollary is the most useful EEG rule in medicine: **delta in a patient who is awake is never normal**.',
    '**Slow-wave and REM sleep are two distinct physiological states that happen to share the word sleep.** In **slow-wave (non-REM) sleep** the EEG is **synchronised, high-voltage and slow**, muscle tone is reduced but present, peripheral vascular tone falls, and **blood pressure, respiratory rate and basal metabolic rate all drop by about 10–30%**; dreaming occurs but is fragmentary and rarely remembered because it is not consolidated. In **REM sleep** the EEG becomes **desynchronised, fast and low-voltage — indistinguishable from the waking record**, which is why it is called **paradoxical sleep**. It adds **near-complete skeletal atonia** from powerful inhibition of spinal motor neurons (the diaphragm and extraocular muscles are spared), **vivid, narrative, recallable dreams**, an **irregular pulse, blood pressure and breathing pattern**, and suspended thermoregulation. **REM occupies about 20–25% of a night in bouts of 5–30 minutes recurring roughly every 90 minutes**, and although the sensory arousal threshold in REM is high, most spontaneous awakenings occur out of it.',
    '**Sleep architecture is asymmetric across the night, and that asymmetry is what the parasomnia questions are actually testing.** The descent runs **N1** (alpha dissolving into theta, hypnic jerks) to **N2** (**sleep spindles at 12–14 Hz plus K complexes**, and about half of total sleep time) to **N3**, the **delta-dominated slow-wave stage**, and a full cycle takes about **90 minutes**. But the cycles are not identical: **N3 is concentrated in the first third of the night and is essentially gone by the last third, while REM bouts lengthen towards morning**. So an arousal disorder that erupts out of N3 — **sleepwalking, sleep terrors, confusional arousals — happens early and leaves no memory**, whereas events that need REM — **nightmares with full recall, sleep paralysis, and REM sleep behaviour disorder** — cluster in the small hours. Time of night is a diagnostic sign.',
    '**Sleep is an active inhibitory process, not the passive failure of sensory input — the brain is switched off, not starved of stimulation.** The arousal side is the **ascending reticular activating system** of the upper pons and midbrain, exciting the cortex directly and through the **non-specific thalamic nuclei**, chemically coded as **histamine from the tuberomammillary nucleus, noradrenaline from the locus ceruleus, serotonin from the raphe nuclei, and acetylcholine from pons and basal forebrain**. The sleep side is the **ventrolateral preoptic nucleus (VLPO)** of the anterior hypothalamus, which releases **GABA and galanin onto every one of those arousal nuclei**. Because each side inhibits the other, the pair behaves as a **flip-flop switch** with sharp transitions and few in-between states. **Orexin (hypocretin) from the lateral hypothalamus is the finger holding the wake side down**; the pharmacology falls out of the same diagram — **sedating antihistamines remove the histamine arm, and caffeine wakes by blocking adenosine**, the metabolite that accumulates during waking as homeostatic sleep pressure.',
    '**Narcolepsy is the flip-flop switch with its stabiliser removed, and two clocks decide when it flips.** Loss of about **90% of the orexin neurons** leaves a switch that flips at random and lets REM intrude into wakefulness, giving the tetrad of **irresistible sleep attacks, cataplexy (sudden loss of tone triggered by emotion, with consciousness preserved — REM atonia without REM), sleep paralysis and hypnagogic hallucinations**, with **sleep-onset REM** on formal testing. Timing itself is set by two independent drives: **process C**, the **suprachiasmatic nucleus** entrained by light through the **retinohypothalamic tract** and driving **pineal melatonin release in darkness** through a sympathetic relay, and **process S**, the adenosine-based debt that builds with every waking hour. What that sleep buys is plural — **synaptic downscaling, memory consolidation (declarative with slow waves and spindles, procedural and emotional with REM), growth hormone pulses locked to the first N3 episode, and glymphatic clearance of metabolites** — which is why total deprivation is not merely tiring but, in animals, eventually lethal.',
  ],

  mechanism: {
    title: 'The sleep-wake flip-flop and the descent into delta',
    steps: [
      { id: 's1', label: 'Light through the retinohypothalamic tract sets the suprachiasmatic clock while adenosine builds sleep pressure' },
      { id: 's2', label: 'VLPO releases GABA and galanin onto the histamine, noradrenaline, serotonin and acetylcholine arousal nuclei', emphasis: 'key' },
      { id: 's3', label: 'Orexin normally holds the wake side down; without it the switch flips at random', emphasis: 'danger' },
      { id: 's4', label: 'Ascending thalamocortical drive is withdrawn and relay neurons switch to burst firing', emphasis: 'key' },
      { id: 's5', label: 'Cortex synchronises: spindles and K complexes in N2, then intrinsic high-voltage delta in N3', emphasis: 'key' },
      { id: 's6', label: 'Pontine cholinergic REM-on neurons desynchronise the cortex while paralysing spinal motor neurons', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'A rhythm at 8–13 Hz appears over the occiput when the eyes close and vanishes the moment they open', mechanism: 'Alpha blocking — attention desynchronises the cortex, so amplitude falls and frequency rises', significance: 'key' },
    { sign: 'A 17-year-old drops to the floor when laughing at a joke but hears and remembers everything said around him', mechanism: 'Cataplexy: REM motor atonia intruding into wakefulness after loss of orexin neurons', significance: 'key' },
    { sign: 'Diffuse high-voltage delta on the EEG of a confused but awake patient', mechanism: 'Loss of ascending thalamocortical drive releases the intrinsic cortical rhythm — encephalopathy until proved otherwise', significance: 'key' },
    { sign: 'A child screams inconsolably 90 minutes after falling asleep, is unresponsive to reassurance, and remembers nothing next morning', mechanism: 'Partial arousal out of N3 slow-wave sleep, which is concentrated in the first third of the night', significance: 'key' },
    { sign: 'An older man punches and kicks during sleep, later describing a dream that matches the movements exactly', mechanism: 'REM sleep behaviour disorder — failure of the brainstem inhibition that normally paralyses spinal motor neurons', significance: 'supportive' },
    { sign: 'Pulse and respiration become irregular and the eyes dart under closed lids while the EEG looks awake', mechanism: 'REM sleep — desynchronised cortex with autonomic instability, hence the label paradoxical sleep', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Alpha, 8–13 Hz, about 50 microvolts, maximal over the occiput', meaning: 'Awake adult, relaxed, eyes closed — abolished by opening the eyes or by mental effort' },
    { clue: 'Beta, above 14 Hz, low voltage, frontal and parietal', meaning: 'Activated cortex: alertness, mental work, and also the signature of benzodiazepine and barbiturate effect' },
    { clue: 'Theta, 4–7 Hz', meaning: 'Normal in children and in drowsiness; in an alert adult it suggests organic disease or emotional stress' },
    { clue: 'Delta, below 3.5 Hz, highest amplitude', meaning: 'N3, infancy, anaesthesia and coma; generated by cortex itself and so persists when the thalamus is disconnected' },
    { clue: 'Sleep spindles at 12–14 Hz with K complexes', meaning: 'The defining marker of N2, the stage that occupies about half of total sleep time' },
    { clue: 'EEG indistinguishable from wakefulness in a paralysed, dreaming, unrousable patient', meaning: 'REM sleep: about 20–25% of the night in 5–30 minute bouts roughly every 90 minutes' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Three clinical habits come straight out of this physiology. First, ask what time of night the event happened: the first third belongs to slow-wave arousals with amnesia, the last third to REM phenomena with recall. Second, treat an awake delta record as an emergency of cerebral function rather than an EEG curiosity. Third, remember that a drug acting on any single arousal transmitter will change sleep architecture — antihistamines sedate, and most hypnotics suppress the very slow-wave and REM stages the patient needs. Circadian control and the clinical sleep disorders in full: [[sleep-circadian-rhythms]]. When the problem is airway rather than switch, the architecture fragments in a characteristic way: [[obstructive-sleep-apnoea]].' },
    { logic: 'Where it is examined', detail: 'Two stems recur. A teenager with sleep attacks plus emotion-triggered collapse is orexin loss, and the trap is calling the collapse a seizure — cataplexy preserves consciousness. A child with staring spells needs the EEG frequency read carefully, because the same recording technique separates sleep stages from generalised epilepsy: [[ghp-epilepsy-seizures]]. The transmitter systems that make up the arousal side are worth learning as a set, since almost every psychoactive drug acts on one of them: [[cns-neurotransmitters]].' },
  ],

  mnemonics: [
    { hook: 'Beta, Alpha, Theta, Delta — fast and awake down to slow and deep', expansion: ['Beta above 14 Hz: alert and thinking', 'Alpha 8–13 Hz: awake, relaxed, eyes closed, occipital', 'Theta 4–7 Hz: drowsy, or a child', 'Delta below 3.5 Hz: N3, and never normal in an awake adult'] },
    { hook: 'First third deep, last third dreaming', expansion: ['N3 crowds into the first third — sleepwalking and night terrors, with amnesia', 'REM lengthens towards morning — nightmares with full recall, sleep paralysis, dream enactment', 'A 90 minute cycle repeated four or five times, not a uniform night'] },
  ],

  traps: [
    {
      questionCategory: 'How deep REM sleep actually is',
      wrongInstinct: 'REM is light sleep, because the EEG looks like wakefulness',
      rightAnswer: 'REM is difficult to interrupt with sensory stimuli — the fast EEG reflects an active, desynchronised cortex, not a shallow state',
      why: 'It is called paradoxical for exactly this reason: an aroused-looking brain in a paralysed, hard-to-wake body.',
    },
    {
      questionCategory: 'What actually produces sleep',
      wrongInstinct: 'Sleep happens when sensory input to the reticular formation falls below a threshold',
      rightAnswer: 'Sleep is produced actively, by VLPO neurons releasing GABA and galanin onto the arousal nuclei, with orexin stabilising the switch',
      why: 'Passive withdrawal cannot explain narcolepsy, in which a specific neuron loss makes the switch unstable while sensory input is entirely normal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 17-year-old describes irresistible daytime sleep attacks, brief episodes of complete limb weakness whenever he laughs, and terrifying dream-like images as he falls asleep, during which he cannot move. Formal testing shows REM sleep beginning within four minutes of sleep onset. What is the underlying lesion?',
      options: [
        { id: 'a', text: 'Loss of orexin-producing neurons in the lateral hypothalamus' },
        { id: 'b', text: 'Degeneration of the suprachiasmatic nucleus with loss of circadian entrainment' },
        { id: 'c', text: 'Excessive galanin release from the ventrolateral preoptic nucleus during the day' },
        { id: 'd', text: 'Failure of pineal melatonin secretion in response to darkness' },
      ],
      answerId: 'a',
      explanation: 'Orexin from the lateral hypothalamus stabilises the wake side of the sleep-wake flip-flop. Lose roughly 90% of those neurons and the switch flips unpredictably and lets REM components appear out of context: atonia without sleep is cataplexy, atonia at the boundary of waking is sleep paralysis, and dream imagery at the boundary is a hypnagogic hallucination. Sleep-onset REM confirms that REM is being released rather than reached normally. A suprachiasmatic lesion would misalign the timing of sleep, not fragment its content, and melatonin failure shifts phase rather than producing cataplexy.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Which EEG feature identifies stage N2 sleep?',
      options: [
        { id: 'a', text: 'Continuous delta at less than 3.5 Hz occupying more than half the epoch' },
        { id: 'b', text: 'Sleep spindles at 12–14 Hz together with K complexes' },
        { id: 'c', text: 'A low-voltage desynchronised record with rapid eye movements' },
        { id: 'd', text: 'Posterior alpha at 8–13 Hz abolished by eye opening' },
      ],
      answerId: 'b',
      explanation: 'Spindles and K complexes are the definition of N2, the stage that accounts for about half of total sleep time. Continuous high-voltage delta defines N3. A desynchronised record with rapid eye movements and atonia is REM. Posterior alpha abolished by eye opening is the relaxed waking state, not sleep at all. Note that spindles are generated in thalamocortical loops, which is why they disappear when the cortex is disconnected from the thalamus while delta persists.',
      tests: 'investigation',
    },
    {
      id: 'q3',
      stem: 'A 6-year-old sits up about 70 minutes after falling asleep, screams, sweats, appears terrified and does not respond to his parents; he settles after several minutes and has no memory of it in the morning. From which state did this arise, and why does the timing matter?',
      options: [
        { id: 'a', text: 'REM sleep, because vivid frightening imagery requires REM' },
        { id: 'b', text: 'N1 sleep, because the transition from wakefulness is unstable' },
        { id: 'c', text: 'N3 slow-wave sleep, which is concentrated in the first third of the night' },
        { id: 'd', text: 'Wakefulness, because he was sitting up with his eyes open' },
      ],
      answerId: 'c',
      explanation: 'Sleep terrors are partial arousals out of N3, and N3 is packed into the first third of the night, so an event about an hour after sleep onset with no recall fits it precisely. The absence of memory is the discriminator: dream content is not consolidated in slow-wave sleep, and the child is neither awake nor dreaming but caught between states. A nightmare is a REM event, which means it occurs in the last third of the night and is remembered in narrative detail on waking.',
      tests: 'exam',
    },
  ],
};

export default ghpSleepStagesBrainWaves;
