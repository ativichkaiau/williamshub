import type { Lecture } from '../../lib/types';

export const ghpSomatosensoryCortexPosition: Lecture = {
  id: 'ghp-somatosensory-cortex-position',
  title: 'Somatosensory Cortex, the Homunculus and Position Sense',
  system: 'neuro',
  source: 'Ch 47 — Somatic Sensations I — Tactile & Position Senses',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 47 Tactile & Position Senses' },
    { kind: 'mechanism', label: 'VPL/VPM → layer IV → column' },
    { kind: 'exam', label: 'Astereognosis · neglect · Romberg' },
  ],

  highYield: [
    '**Everything somatic funnels through two thalamic nuclei, and that convergence is why lesion level changes the deficit pattern so sharply.** The **medial lemniscus and the spinothalamic tract both terminate in VPL** (body); the **trigeminothalamic tracts terminate in VPM** (face). Third-order axons run through the **posterior limb of the internal capsule** to the **postcentral gyrus**. Below the medulla the two systems can be dissociated; **at or above VPL they cannot** — a thalamic or capsular lesion takes **all modalities, contralaterally, face and body together**.',
    '**Primary somatosensory cortex (S1) is the postcentral gyrus, Brodmann areas 3, 1 and 2 — and each strip has a job.** **Area 3a** receives **muscle spindle** input (proprioception), **3b** the **cutaneous** receptors, **area 1** the **rapidly adapting** endings and **texture**, **area 2** **deep pressure, joint position, size and shape**. A second, cruder map (**S2**) lies in the parietal wall of the sylvian fissure; it localises poorly and its loss is barely noticed.',
    '**The homunculus is contralateral, upside down, and grossly out of proportion — and the proportions are the exam point.** **Foot and leg lie over the medial surface at the paracentral lobule; hand, then face, then tongue run down the lateral convexity.** Cortical area is proportional to **innervation density, not body size**: **lips, face, thumb and fingers occupy enormous territory while trunk and thigh are tiny**. This map is the anatomy behind the vascular split — **ACA territory takes the leg, MCA territory takes face and arm**.',
    '**The functional unit is not the neuron but the vertical column.** S1 is **six-layered**, and thalamocortical fibres deliver their input to **layer IV first**, from which excitation spreads both toward the surface and toward the depths. Neurons are grouped into **vertical columns about 0.3–0.5 mm across containing several thousand cells, each column dedicated to a single modality from a single small patch of skin** — one column for joint stretch, its neighbour for a Merkel-driven touch spot. Output is layered too: **II–III to other cortical areas and across the corpus callosum, V to brainstem and cord, VI back to the thalamus**.',
    '**Cortical lesions destroy discrimination, not sensation — and the association areas are where objects fall apart.** Removing **S1** costs the ability to **localise precisely, grade pressure, judge weight, and judge texture and shape**, but **crude touch, pain and temperature persist** at thalamic level and pain may even be **exaggerated**. Damage to the **somatosensory association cortex (areas 5 and 7, posterior parietal)** produces **amorphosynthesis**: the parts arrive but cannot be assembled, giving **astereognosis** — an object felt in the hand cannot be recognised despite intact primary sensation. If the lesion is in the **non-dominant (usually right) parietal lobe**, add **contralateral sensory neglect**: the patient washes and dresses one side only, and may **deny that the limb is his (anosognosia)**.',
    '**Position sense has two halves that use different receptors.** **Static position sense** — where the limb is right now — comes chiefly from **muscle spindles reporting muscle length**, the dominant sensor through the **mid-range** of joint angle, supported by **Ruffini endings and Merkel discs in skin around the joint** and by **joint capsule and ligament receptors**, which fire hardest at the **extremes** of angulation. **Rate-of-movement sense (kinaesthesia)** comes from **rapidly adapting receptors: Pacinian corpuscles and the primary spindle endings**. Both halves ascend in the **dorsal columns**, so posterior column disease gives **sensory ataxia, a positive Romberg sign, pseudoathetosis and a stamping gait** with normal strength.',
  ],

  mechanism: {
    title: 'From VPL to a recognised object: relay, column, assembly',
    steps: [
      { id: 's1', label: 'Medial lemniscus and spinothalamic axons converge on VPL; trigeminal input on VPM' },
      { id: 's2', label: 'Thalamocortical axons ascend in the posterior limb of the internal capsule', emphasis: 'key' },
      { id: 's3', label: 'Input arrives in layer IV of the postcentral gyrus and spreads up and down', emphasis: 'key' },
      { id: 's4', label: 'A 0.3–0.5 mm vertical column processes one modality from one skin spot', emphasis: 'key' },
      { id: 's5', label: 'Layers II–III relay to association areas 5 and 7 and across the corpus callosum', emphasis: 'key' },
      { id: 's6', label: 'Areas 5 and 7 assemble shape, weight and texture into a recognised object' },
    ],
  },

  examFindings: [
    { sign: 'A key placed in the hand cannot be identified with the eyes closed, although pinprick and light touch are normal', mechanism: 'Astereognosis — parietal association cortex cannot assemble intact primary signals into a form', significance: 'key' },
    { sign: 'The patient shaves only the right side of the face and insists the left arm belongs to someone else', mechanism: 'Non-dominant parietal lesion: contralateral sensory neglect with anosognosia', significance: 'key' },
    { sign: 'Contralateral sensory loss over face, arm and hand with the leg spared', mechanism: 'Lateral convexity homunculus in MCA territory — face and hand occupy most of it', significance: 'key' },
    { sign: 'Contralateral sensory loss confined to the foot and leg', mechanism: 'Paracentral lobule on the medial surface, ACA territory', significance: 'supportive' },
    { sign: 'Steady standing with eyes open but immediate swaying and falling when the eyes close', mechanism: 'Positive Romberg sign — dorsal column position sense lost, vision was doing the work', significance: 'key' },
    { sign: 'Slow writhing movements of outstretched fingers when the patient looks away', mechanism: 'Pseudoathetosis from loss of proprioceptive feedback, not a basal ganglia disorder', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'VPL versus VPM', meaning: 'Body (medial lemniscus plus spinothalamic) versus face (trigeminothalamic)' },
    { clue: 'Brodmann area 3a', meaning: 'Muscle spindle input to S1 — the proprioceptive strip' },
    { clue: 'Brodmann area 2', meaning: 'Deep pressure, joint position, and size and shape of objects' },
    { clue: 'A vertical unit 0.3–0.5 mm wide serving one modality from one skin spot', meaning: 'The cortical column, the functional unit of S1' },
    { clue: 'Cortical layer that receives thalamocortical fibres first', meaning: 'Layer IV; layers II–III export corticocortically, V to brainstem and cord, VI back to thalamus' },
    { clue: 'Lesion of areas 5 and 7 with intact pinprick and touch', meaning: 'Somatosensory association cortex — astereognosis, and neglect if non-dominant' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Cortical sensory testing is a different examination from primary sensory testing, and mixing them up is the commonest bedside error. Pinprick, temperature and light touch test the pathway up to the thalamus; stereognosis, graphaesthesia, two-point discrimination and double simultaneous stimulation test the cortex and are only interpretable when primary sensation is intact. Extinction on double simultaneous stimulation is the earliest sign of neglect. The thalamic relay in context: [[diencephalon-thalamus-hypothalamus]]. Where these fibres came from and why crossing level matters below the thalamus: [[ghp-dorsal-column-vs-anterolateral]].' },
    { logic: 'Where it is examined', detail: 'Two favourite stems: a homunculus question disguised as a stroke territory question, and a Romberg question disguised as a cerebellar one — a cerebellar patient is unsteady with the eyes open too. The columnar and laminar organisation generalises across the whole cortex: [[cerebral-cortex-organization]]. The spindle physiology behind static and dynamic position sense: [[proprioceptors-muscle-spindle-reflexes]].' },
  ],

  mnemonics: [
    { hook: 'Leg in the fold, face on the side', expansion: ['Foot and leg over the medial paracentral lobule, ACA territory', 'Hand, face and tongue down the lateral convexity, MCA territory', 'Area follows innervation density, not body size'] },
    { hook: 'Spindles in the middle, joints at the ends', expansion: ['Muscle spindles dominate static position sense through the mid-range', 'Joint capsule and ligament receptors fire hardest at extremes of angulation', 'Pacinian corpuscles and spindle primaries report rate of movement'] },
  ],

  traps: [
    {
      questionCategory: 'What a primary sensory cortex lesion actually abolishes',
      wrongInstinct: 'Destroying S1 abolishes pain sensation on the opposite side of the body',
      rightAnswer: 'It abolishes discrimination — localisation, weight, texture and shape — while crude touch, pain and temperature persist and pain may be exaggerated',
      why: 'Pain reaches consciousness at thalamic and reticular level; the cortex refines and localises it rather than creating it.',
    },
    {
      questionCategory: 'Unsteadiness with normal power',
      wrongInstinct: 'A patient who staggers and falls is cerebellar',
      rightAnswer: 'Falling only after the eyes close is a positive Romberg sign and means loss of dorsal column proprioception',
      why: 'Cerebellar ataxia is present with the eyes open; the Romberg test isolates the sensory ataxia that vision had been compensating for.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 68-year-old cannot recognise a coin placed in the right hand with the eyes closed, and does not respond to touch on the right when both hands are touched at once, yet pinprick, temperature and light touch tested individually are normal on both sides. Where is the lesion?',
      options: [
        { id: 'a', text: 'Right dorsal column at C5' },
        { id: 'b', text: 'Left posterior parietal somatosensory association cortex (areas 5 and 7)' },
        { id: 'c', text: 'Left ventral posterolateral nucleus of the thalamus' },
        { id: 'd', text: 'Right lateral spinothalamic tract' },
      ],
      answerId: 'b',
      explanation: 'Primary modalities are intact, so the pathway from receptor to primary cortex is working. What has failed is assembly: the patient cannot integrate intact tactile signals into the form of an object, which is astereognosis, and extinguishes one of two simultaneous stimuli, the earliest sign of sensory neglect. Both are functions of the posterior parietal association cortex contralateral to the affected side. A dorsal column or VPL lesion would degrade the primary modalities themselves, and a spinothalamic lesion would take pain and temperature.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'An infarct produces contralateral sensory loss restricted to the foot and lower leg, with the face and hand entirely spared. Which vessel and which cortical territory are involved?',
      options: [
        { id: 'a', text: 'Middle cerebral artery supplying the lateral convexity of the postcentral gyrus' },
        { id: 'b', text: 'Anterior cerebral artery supplying the paracentral lobule on the medial surface' },
        { id: 'c', text: 'Posterior cerebral artery supplying the calcarine cortex' },
        { id: 'd', text: 'Lenticulostriate branches supplying the posterior limb of the internal capsule' },
      ],
      answerId: 'b',
      explanation: 'The homunculus is inverted, with the leg and foot draped over the medial surface at the paracentral lobule, which is anterior cerebral artery territory. The face and hand occupy the lateral convexity supplied by the middle cerebral artery, which is why an MCA stroke gives a face-and-arm pattern that spares the leg. A capsular lesion would compress the whole homunculus into a small volume and produce a dense hemisensory loss involving face, arm and leg together, not an isolated leg.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which receptor contributes most to knowing the angle of the elbow when it is held in the middle of its range of motion?',
      options: [
        { id: 'a', text: 'Pacinian corpuscles in the joint capsule' },
        { id: 'b', text: 'Golgi tendon organs' },
        { id: 'c', text: 'Muscle spindles signalling muscle length' },
        { id: 'd', text: 'Joint ligament receptors' },
      ],
      answerId: 'c',
      explanation: 'Muscle spindles report muscle length, which maps directly onto joint angle, and they are the dominant source of static position sense through the mid-range. Joint capsule and ligament receptors fire strongly only near the extremes of angulation, so they cannot grade the middle of the range. Pacinian corpuscles are extremely rapidly adapting and signal rate of movement rather than a held position, and Golgi tendon organs report muscle tension, not length.',
      tests: 'lecture',
    },
  ],
};

export default ghpSomatosensoryCortexPosition;
