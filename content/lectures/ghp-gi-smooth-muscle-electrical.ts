import type { Lecture } from '../../lib/types';

export const ghpGiSmoothMuscleElectrical: Lecture = {
  id: 'ghp-gi-smooth-muscle-electrical',
  title: 'GI Smooth Muscle: Slow Waves and Spike Potentials',
  system: 'gi',
  source: 'Ch 63 — General Principles of Gastrointestinal Function',
  updated: '2026-09-14',
  tags: [
    { kind: 'system', label: 'Gastrointestinal' },
    { kind: 'lecture', label: 'Ch 63 GI Electrical Activity' },
    { kind: 'mechanism', label: 'Slow wave sets rate · spikes set force' },
    { kind: 'exam', label: 'Stomach 3/min · duodenum 12/min · −40 mV' },
  ],

  highYield: [
    '**A slow wave is not an action potential, and that one sentence answers most of the questions in this chapter.** It is a rhythmic **oscillation of the resting membrane potential itself**, amplitude **5–15 mV**, drifting up and down around a baseline that averages about **−56 mV**. It is **subthreshold and does not by itself cause contraction** — the gastric body is the partial exception, where unusually strong waves can drive weak contraction. What a slow wave actually does is **decide when contraction is permitted**: it is a clock, not a command.',
    '**The clock does not live in the muscle — it lives in the interstitial cells of Cajal.** These pacemaker cells sit between the muscle layers and along the submucosal border, are **electrically coupled to smooth muscle by gap junctions**, and cycle their cation channels spontaneously to generate the **pacemaker current** that becomes the slow wave. Two clinical corollaries follow and both are examined: **loss of interstitial cells of Cajal** underlies **idiopathic gastroparesis and chronic intestinal pseudo-obstruction**, and because these cells express **c-Kit (CD117)** they are the cell of origin of the **gastrointestinal stromal tumour (GIST)**.',
    '**Spike potentials are what actually contract the gut, and they fire only once the slow wave lifts the membrane past about −40 mV.** Each spike lasts **10–40 ms**, roughly ten to forty times longer than a nerve action potential, because the channels carrying it are **slow calcium–sodium channels** rather than fast sodium channels — and it is the **Ca²⁺ admitted through them** that reaches calmodulin, activates myosin light chain kinase and produces force. Spikes fire at **1–10 per second** on the crest of a wave. So the rule is: **the slow wave sets the RATE, the number of spikes riding each crest sets the FORCE.**',
    '**Learn what shifts the baseline up and down, because the same short list explains every gut reflex, hormone and drug.** **Depolarising** (more excitable, more spikes clear threshold): **stretch of the muscle**, **acetylcholine**, **parasympathetic vagal and pelvic stimulation**, and excitatory gut hormones such as **gastrin and motilin**. **Hyperpolarising** (fewer spikes): **noradrenaline and adrenaline**, and **sympathetic stimulation**. Notice what is being changed — the baseline moves, so **more or fewer crests reach threshold**, while the **slow-wave frequency itself barely budges**.',
    '**Phasic and tonic contraction are two different economies running in the same organ.** **Phasic** contractions are the rhythmic ones locked to the slow wave: mixing and propulsion in the **gastric body, small intestine and colon**. **Tonic** contraction is **continuous, lasting minutes to hours, and is not locked to the electrical rhythm at all**; it arises from **continuous repetitive spike potentials**, from **hormones**, or from **continuous Ca²⁺ entry with no change in membrane potential whatever**. Tonic is the sphincter setting — **lower oesophageal, pyloric, ileocaecal and internal anal**.',
    '**Frequency falls down the tract, and it caps the contraction rate absolutely.** Gastric body about **3 per minute**, duodenum about **12 per minute**, terminal ileum about **8–9**, caecum and colon slower still. Because contraction can occur only on a wave crest, **the local slow-wave frequency is the maximum possible contraction frequency** — no hormone, nerve or drug can make the stomach contract faster than roughly 3 per minute; stimulation makes each contraction stronger instead. The **descending gradient below the duodenum** also biases net movement **aborally**, the faster proximal pacemaker driving the slower segment beneath it.',
  ],

  mechanism: {
    title: 'Cajal pacemaker → slow wave → threshold at −40 mV → spikes → Ca²⁺ → contraction',
    steps: [
      { id: 's1', label: 'Interstitial cells of Cajal cycle their cation channels — the pacemaker current', emphasis: 'key' },
      { id: 's2', label: 'Gap junctions spread it through the syncytium as a slow oscillation of resting potential' },
      { id: 's3', label: 'The slow wave alone is subthreshold: it sets rhythm, not force', emphasis: 'key' },
      { id: 's4', label: 'Depolarising input lifts the crest past about −40 mV and spike potentials fire', emphasis: 'key' },
      { id: 's5', label: 'Slow calcium–sodium channels admit Ca²⁺ during each 10–40 ms spike', emphasis: 'key' },
      { id: 's6', label: 'Ca²⁺-calmodulin-MLCK contracts; spikes per crest set the force' },
    ],
  },

  examFindings: [
    { sign: 'Gastric contractions never exceed about three per minute however strongly the stomach is driven', mechanism: 'The gastric slow-wave frequency is a ceiling — contraction can only ride a wave crest', significance: 'key' },
    { sign: 'A slow wave recorded with no contraction beneath it', mechanism: 'The oscillation stayed subthreshold, so no spike potentials fired and no Ca²⁺ entered', significance: 'key' },
    { sign: 'Contraction becomes much stronger while the rhythm is unchanged', mechanism: 'More spike potentials per crest; the Cajal pacemaker frequency is untouched', significance: 'key' },
    { sign: 'A loop of gut contracts when stretched even after every extrinsic nerve is divided', mechanism: 'Stretch depolarises the syncytium toward threshold independently of the CNS', significance: 'supportive' },
    { sign: 'Pyloric and internal anal sphincter tone held steadily between meals', mechanism: 'Tonic contraction from continuous spikes, hormones or steady Ca²⁺ entry, not from the rhythm', significance: 'supportive' },
    { sign: 'Circulating adrenaline quietens the whole tract', mechanism: 'Catecholamines hyperpolarise the fibre so fewer wave crests reach threshold', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Rhythmic subthreshold oscillation of the resting membrane potential', meaning: 'The slow wave — the basic electrical rhythm, a clock rather than a contraction signal' },
    { clue: 'Pacemaker cell coupled to gut smooth muscle by gap junctions', meaning: 'The interstitial cell of Cajal' },
    { clue: 'Membrane potential above which spike potentials begin to appear', meaning: 'About −40 mV, against a resting baseline averaging −56 mV' },
    { clue: 'Channel carrying the unusually long gut action potential', meaning: 'The slow calcium–sodium channel; the Ca²⁺ it admits is what causes contraction' },
    { clue: 'Slow-wave frequency in gastric body versus duodenum', meaning: 'About 3 per minute versus about 12 per minute' },
    { clue: 'c-Kit (CD117) positive tumour arising from the gut pacemaker cell', meaning: 'Gastrointestinal stromal tumour (GIST)' },
  ],

  treatment: [
    { logic: 'Why the distinction earns its place', detail: 'Every motility question resolves into two separate variables. **Rate** is fixed locally by the interstitial cells of Cajal and is almost unmodifiable; **force** is set by how many spike potentials clear threshold, and that is what nerves, hormones and drugs actually adjust. It is also why prokinetics strengthen rather than accelerate, and why a segment that has lost its pacemaker cells goes quiet without going fast. The neural layer that supplies most of that modulation: [[ghp-enteric-nervous-system]]. The same electrical machinery seen at work in the small bowel: [[small-intestinal-motility]].' },
    { logic: 'Reading a gut tracing in one pass', detail: 'Ask three questions in order. **How often are the waves coming?** — that identifies the segment (roughly 3 per minute is stomach, roughly 12 is duodenum). **Are there spikes on the crests?** — no spikes means no contraction, however handsome the wave. **How many spikes per crest?** — that is the force. Then check the baseline: a **hyperpolarised** trace means sympathetic or catecholamine influence, a **depolarised** one means stretch, acetylcholine or an excitatory hormone. The regional applications: [[gastric-accommodation-mixing]] and [[colonic-motility-defecation]].' },
  ],

  mnemonics: [
    { hook: 'Slow waves set the tempo; spike potentials set the volume', expansion: ['A crest with no spike on it produces no contraction at all', 'More spikes per crest means a stronger contraction at exactly the same rate'] },
    { hook: 'Stomach 3, duodenum 12, ileum 8 to 9 — the duodenum holds the fastest clock in the tract', expansion: ['Frequency falls steadily from duodenum to colon, which biases net flow aborally', 'Whatever the stimulus, no segment can beat faster than its own slow wave'] },
  ],

  traps: [
    {
      questionCategory: 'What a slow wave actually does',
      wrongInstinct: 'The slow wave is the gut action potential, so each one produces a contraction',
      rightAnswer: 'Slow waves are subthreshold oscillations of resting potential; contraction requires spike potentials riding on the crest',
      why: 'Slow waves gate the timing, but only Ca²⁺ entering during spikes reaches the contractile machinery.',
    },
    {
      questionCategory: 'What a nerve or hormone changes when it strengthens gut contraction',
      wrongInstinct: 'It speeds the slow-wave frequency so that contractions come more often',
      rightAnswer: 'It shifts the baseline membrane potential so more spikes clear threshold on each unchanged wave',
      why: 'The interstitial cells of Cajal hold frequency nearly fixed; neural and hormonal input alter force far more than rate.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An electrode in the duodenal circular muscle records regular oscillations of membrane potential at 12 per minute, but a simultaneous strain gauge shows no contraction. The most likely explanation is:',
      options: [
        { id: 'a', text: 'The interstitial cells of Cajal have been destroyed' },
        { id: 'b', text: 'The slow waves are failing to reach the threshold for spike potentials' },
        { id: 'c', text: 'Gap junctions between the muscle fibres have uncoupled' },
        { id: 'd', text: 'Myosin light chain phosphatase is inhibited' },
      ],
      answerId: 'b',
      explanation: 'The 12 per minute rhythm proves the pacemaker is intact and the syncytium is conducting, so options a and c are excluded. Slow waves are subthreshold oscillations of resting potential and do not themselves contract muscle; contraction needs spike potentials, which appear only when the crest passes about −40 mV. Inhibiting the phosphatase would impair relaxation, not contraction.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A prokinetic agent markedly increases the strength of gastric antral contractions in a healthy volunteer. The recorded contraction frequency will most likely be:',
      options: [
        { id: 'a', text: 'Unchanged at about 3 per minute, because the slow-wave frequency sets the ceiling' },
        { id: 'b', text: 'Increased to about 12 per minute, matching the duodenal rhythm' },
        { id: 'c', text: 'Increased in proportion to the rise in contraction strength' },
        { id: 'd', text: 'Reduced, since stronger contractions necessarily last longer' },
      ],
      answerId: 'a',
      explanation: 'Contractions can only occur on a slow-wave crest, so the local pacemaker frequency is an absolute ceiling on rate. Excitatory input works by depolarising the baseline so that more spike potentials clear threshold on each crest, which raises force while leaving rhythm at the gastric value of about 3 per minute. The duodenal 12 per minute rhythm belongs to a different pacemaker region and is not imposed on the stomach.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Sympathetic stimulation of the small intestine reduces contractile activity. At the level of the muscle membrane, the most direct explanation is that noradrenaline:',
      options: [
        { id: 'a', text: 'Abolishes the pacemaker current of the interstitial cells of Cajal' },
        { id: 'b', text: 'Blocks the slow calcium–sodium channels so spikes cannot propagate' },
        { id: 'c', text: 'Hyperpolarises the membrane so fewer slow-wave crests reach spike threshold' },
        { id: 'd', text: 'Shortens each spike potential to the duration of a nerve action potential' },
      ],
      answerId: 'c',
      explanation: 'Noradrenaline and adrenaline hyperpolarise gut smooth muscle, moving the baseline further from the roughly −40 mV threshold, so fewer spikes ride each crest and force falls while the underlying rhythm persists. The pacemaker oscillation itself continues, which is why slow waves remain recordable in a quiet gut; the long spike duration is a property of the slow calcium–sodium channel and is not what catecholamines alter.',
      tests: 'mechanism',
    },
  ],
};

export default ghpGiSmoothMuscleElectrical;
