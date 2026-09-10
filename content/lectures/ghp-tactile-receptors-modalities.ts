import type { Lecture } from '../../lib/types';

export const ghpTactileReceptorsModalities: Lecture = {
  id: 'ghp-tactile-receptors-modalities',
  title: 'Tactile Receptors and Their Submodalities',
  system: 'neuro',
  source: 'Ch 47 — Somatic Sensations I — Tactile & Position Senses',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 47 Tactile & Position Senses' },
    { kind: 'mechanism', label: 'Adaptation rate = what is measured' },
    { kind: 'exam', label: 'Two-point · vibration · itch' },
  ],

  highYield: [
    '**Touch, pressure and vibration are not three modalities — they are three ways of reading the same mechanoreceptors.** **Touch** is deformation of the skin itself, **pressure** is deformation of the deeper tissue beneath it, and **vibration** is simply a **rapidly repetitive** touch signal. The receptor population is shared; what separates the three is **how deep the deformation reaches and how fast it repeats**.',
    '**Six tactile endings, and each is defined by two numbers: adaptation rate and receptive-field size.** **Free nerve endings** — everywhere, crude touch, no capsule. **Meissner corpuscle** — glabrous skin of fingertip and lip, **rapidly adapting**, tiny field, reads **moving light touch and low-frequency flutter (about 2–80 Hz)**. **Merkel disc** — **slowly adapting**, tiny field, reads **steady touch, texture and form**; grouped into the **Iggo dome receptor** in hairy skin. **Hair end-organ** — rapidly adapting, signals an object moving across the surface. **Ruffini ending** — **slowly adapting**, deep in dermis, capsule and ligament, reads **sustained heavy deformation and joint angle**. **Pacinian corpuscle** — the onion-layered giant, **adapts in milliseconds**, reads **high-frequency vibration, about 30–800 Hz**.',
    '**Adaptation rate tells you what the receptor is actually measuring.** A **slowly adapting (tonic)** ending reports a **state** — how hard, how bent, how long. A **rapidly adapting (phasic, rate) ending** reports a **change** — that something moved, and how fast. So **Merkel and Ruffini** answer "what is it and how hard", while **Meissner, hair and Pacinian** answer "something is moving". The lamellated Pacinian capsule is the clearest case: its **fluid-filled layers physically bleed off any steady pressure**, so the ending can only ever see the transient.',
    '**Fibre calibre tracks precision, and this is why the exam pairs receptors with speeds.** Every **encapsulated, discriminative** ending — Meissner, Merkel, Ruffini, Pacinian, hair — reports on **large myelinated type Aβ fibres at roughly 30–70 m/s**. The **free nerve endings** that carry crude touch use **small myelinated Aδ fibres at 5–30 m/s**, and tickle and itch use **unmyelinated C fibres at only 0.5–2 m/s**. Precision and speed travel together: the finer the discrimination, the fatter the axon.',
    '**Two-point discrimination is about 1–2 mm at the fingertip and lip but 30–70 mm over the back — a thirty-fold spread with no change in fibre type.** Three things set it: **receptor density**, the **size and overlap of receptive fields**, and the **amount of cortex** devoted to that patch of skin. Because two-point testing demands both fine spatial fidelity and intact relay, it is a **dorsal-column test** — it fails early in posterior column disease while crude touch survives.',
    '**Itch and tickle are a separate labelled line with a built-in motor answer.** They arise from **rapidly adapting free nerve endings confined to the most superficial layers of skin** — which is why itch can be provoked from skin but **never from deep tissue or viscera** — and travel on **unmyelinated C fibres in the anterolateral pathway**, alongside slow aching pain. Their purpose is to force removal of a surface irritant: the **scratch reflex**. **Scratching abolishes itch because the painful input it generates inhibits the itch signal at the dorsal horn**, not because it removes anything.',
  ],

  mechanism: {
    title: 'One skin indentation is split into a state signal and a change signal',
    steps: [
      { id: 's1', label: 'Object indents skin → mechanically gated channels in the ending deform' },
      { id: 's2', label: 'Receptor (generator) potential grows with depth of indentation', emphasis: 'key' },
      { id: 's3', label: 'Capsule filters: lamellae bleed off steady pressure, leaving only the transient', emphasis: 'key' },
      { id: 's4', label: 'Merkel and Ruffini keep firing → tonic report of force, texture, joint angle', emphasis: 'key' },
      { id: 's5', label: 'Meissner, hair and Pacinian fire only on change → movement and vibration', emphasis: 'key' },
      { id: 's6', label: 'Aβ fibres at 30–70 m/s carry the whole set into the dorsal column' },
    ],
  },

  examFindings: [
    { sign: 'Two-point threshold about 1–2 mm at the fingertip but 30–70 mm over the back', mechanism: 'Receptor density, receptive-field size and cortical map area — not fibre speed, which is Aβ throughout', significance: 'key' },
    { sign: 'A 128 Hz tuning fork is felt as buzzing at the malleolus', mechanism: 'Pacinian corpuscles are the only endings that follow 30–800 Hz, because they reset within milliseconds', significance: 'key' },
    { sign: 'Vibration sense at the great toe is lost before light touch in a diabetic patient', mechanism: 'Length-dependent large-fibre neuropathy strips the fattest Aβ axons first; crude touch on Aδ and C survives', significance: 'key' },
    { sign: 'A hand resting on a table stops being felt within seconds', mechanism: 'Rapidly adapting Meissner, hair and Pacinian endings fall silent; only Merkel and Ruffini hold a weak tonic signal', significance: 'key' },
    { sign: 'Itch can be provoked from skin but never from muscle, joint or viscera', mechanism: 'Itch-specific free nerve endings exist only in the superficial layers of the skin', significance: 'key' },
    { sign: 'Scratching abolishes an itch instantly', mechanism: 'The painful scratch input inhibits transmission of the C-fibre itch signal in the dorsal horn', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Onion-layered capsule, adapts within milliseconds, tuned to about 30–800 Hz', meaning: 'Pacinian corpuscle — high-frequency vibration and rate of movement' },
    { clue: 'Glabrous fingertip and lip, rapidly adapting, tiny receptive field, about 2–80 Hz', meaning: 'Meissner corpuscle — moving light touch and low-frequency flutter' },
    { clue: 'Slowly adapting, small receptive field, grouped into an Iggo dome in hairy skin', meaning: 'Merkel disc — steady touch, texture and fine form' },
    { clue: 'Slowly adapting, deep in dermis, joint capsule and ligament', meaning: 'Ruffini ending — sustained heavy deformation and joint angle' },
    { clue: 'Unmyelinated C fibre from a superficial skin ending, relieved by scratching', meaning: 'Itch and tickle — carried in the anterolateral system, not the dorsal column' },
    { clue: 'Conduction at 30–70 m/s versus 5–30 m/s versus 0.5–2 m/s', meaning: 'Aβ encapsulated tactile receptors versus Aδ crude touch versus C itch and slow pain' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Bedside sensory testing is receptor selection. A 128 Hz fork interrogates Pacinian corpuscles on the fattest Aβ axons; a monofilament interrogates Merkel and Meissner; a pinprick bypasses all of them and tests free nerve endings on Aδ. That is why vibration and two-point fail first in large-fibre neuropathy while pinprick is preserved, and why the reverse pattern points to small-fibre disease. The transduction step that turns indentation into a generator potential: [[sensory-receptors-transduction]]. Where these fibres go once they enter the cord: [[ghp-dorsal-column-vs-anterolateral]].' },
    { logic: 'Where it is examined', detail: 'The favourite stems pair a receptor with a frequency or an adaptation rate, and ask which one drops out. Itch and tickle are the classic trap because they look tactile but run with slow pain: [[pain-nociception-modulation]]. Two-point discrimination is really a cortical question as much as a skin one — the map that decides fingertip acuity is in [[ghp-somatosensory-cortex-position]].' },
  ],

  mnemonics: [
    { hook: 'Merkel and Ruffini Measure; Meissner, hair and Pacinian Move', expansion: ['Slowly adapting = state: force, texture, joint angle', 'Rapidly adapting = change: stroking, flutter, vibration', 'Both M-names are superficial and small-field; Ruffini and Pacinian are the deep pair'] },
    { hook: 'Meissner low, Pacinian high', expansion: ['Meissner about 2–80 Hz flutter, superficial glabrous skin', 'Pacinian about 30–800 Hz vibration, deep and fastest to adapt', 'A 128 Hz tuning fork is therefore a Pacinian test'] },
  ],

  traps: [
    {
      questionCategory: 'Which receptor a bedside test actually interrogates',
      wrongInstinct: 'A 128 Hz tuning fork tests Meissner corpuscles, since they are the fingertip touch receptor',
      rightAnswer: 'It tests Pacinian corpuscles',
      why: 'Meissner tops out near 80 Hz; only the Pacinian corpuscle, which resets in milliseconds, can follow a train at 128 Hz.',
    },
    {
      questionCategory: 'Why tactile acuity varies by body region',
      wrongInstinct: 'The back has a coarse two-point threshold because its sensory nerves are slower and longer',
      rightAnswer: 'Because its receptors are sparse, its receptive fields are large and overlapping, and its cortical representation is tiny',
      why: 'Conduction is Aβ at 30–70 m/s from fingertip and back alike; acuity is set by receptor density and cortical real estate, not by speed or distance.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A subject rests a fingertip on a small weight. Thirty seconds later, which receptors are still generating action potentials that report the presence of the weight?',
      options: [
        { id: 'a', text: 'Pacinian corpuscles and hair end-organs' },
        { id: 'b', text: 'Merkel discs and Ruffini endings' },
        { id: 'c', text: 'Meissner corpuscles alone' },
        { id: 'd', text: 'Unmyelinated C fibre free nerve endings' },
      ],
      answerId: 'b',
      explanation: 'Only slowly adapting (tonic) endings report a sustained state. Merkel discs give a continuing steady-state signal of skin indentation and Ruffini endings signal prolonged heavy deformation. Pacinian corpuscles, hair end-organs and Meissner corpuscles are rapidly adapting rate receptors: they fire at the onset and offset of the stimulus and then fall silent, so they cannot encode a constant load. C fibre free nerve endings carry crude touch, itch and slow pain, not graded pressure.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with early diabetic neuropathy has lost 128 Hz vibration sense at the great toe but still withdraws briskly from a pinprick there. Which statement best explains the dissociation?',
      options: [
        { id: 'a', text: 'Pain fibres regenerate faster than vibration fibres' },
        { id: 'b', text: 'Vibration is carried by the anterolateral system, which is damaged first' },
        { id: 'c', text: 'Vibration depends on large myelinated Aβ axons from Pacinian corpuscles, which fail earliest in length-dependent large-fibre neuropathy, while pinprick runs on small Aδ and C fibres' },
        { id: 'd', text: 'Pinprick is a cortical sensation and vibration is a spinal reflex' },
      ],
      answerId: 'c',
      explanation: 'Vibration at 128 Hz can only be followed by Pacinian corpuscles, whose signals travel on the largest, most heavily myelinated Aβ fibres at 30 to 70 m/s. These are the longest and metabolically most demanding axons and are picked off first in a length-dependent large-fibre neuropathy. Pinprick travels on thin Aδ and unmyelinated C fibres and is spared until small-fibre involvement appears. Vibration is a dorsal-column, not an anterolateral, modality.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Which feature distinguishes itch from the other tactile submodalities?',
      options: [
        { id: 'a', text: 'It is transmitted by encapsulated Meissner corpuscles' },
        { id: 'b', text: 'It arises only from receptors in the most superficial layers of the skin and travels on unmyelinated C fibres' },
        { id: 'c', text: 'It is carried in the dorsal column pathway with vibration' },
        { id: 'd', text: 'It is a slowly adapting sensation that persists unchanged for hours' },
      ],
      answerId: 'b',
      explanation: 'Itch and tickle come from rapidly adapting free nerve endings restricted to the superficial skin, which is why they can never be provoked from muscle, joint or viscera. They travel on unmyelinated C fibres in the anterolateral system, sharing a route with slow aching pain rather than with the dorsal-column discriminative modalities. Their biological purpose is to trigger the scratch reflex to remove a surface irritant, and scratching relieves itch because the pain it evokes inhibits the itch signal centrally.',
      tests: 'lecture',
    },
  ],
};

export default ghpTactileReceptorsModalities;
