import type { Lecture } from '../../lib/types';

export const ghpDorsalColumnVsAnterolateral: Lecture = {
  id: 'ghp-dorsal-column-vs-anterolateral',
  title: 'Dorsal Column versus Anterolateral: The Crossing Level Decides Everything',
  system: 'neuro',
  source: 'Ch 47 — Somatic Sensations I — Tactile & Position Senses',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 47 Tactile & Position Senses' },
    { kind: 'mechanism', label: 'Where each system decussates' },
    { kind: 'exam', label: 'Dissociated sensory loss' },
  ],

  highYield: [
    '**Two ascending systems, and one question separates them: where does it cross?** The **dorsal column–medial lemniscal system crosses high and late — in the caudal medulla**, after climbing the whole cord uncrossed. The **anterolateral (spinothalamic) system crosses low and early — in the anterior white commissure, within 1–2 segments of entering the cord**. Every dissociated sensory syndrome in neurology is just this one difference read off at a particular level.',
    '**Dorsal column–medial lemniscal system: fast, fat and faithful.** Large myelinated **Aβ fibres, 30–110 m/s**, enter through the **medial division of the dorsal root**, turn upward and ascend **ipsilaterally without synapsing** — **fasciculus gracilis** carries the lower body (below about T6) and lies **medial**, **fasciculus cuneatus** carries the upper body and lies **lateral**. First synapse is in the **nucleus gracilis and cuneatus of the caudal medulla**; second-order axons sweep across as **internal arcuate fibres**, form the **medial lemniscus**, and reach **VPL of the thalamus**. Cargo: **fine discriminative touch, two-point discrimination, vibration, conscious proprioception, stereognosis and finely graded pressure**.',
    '**Anterolateral system: slow, thin and approximate.** Small **Aδ and C fibres, 8–40 m/s**, enter through the **lateral division of the dorsal root**, **synapse immediately in the dorsal horn**, and the **second-order axon crosses in the anterior white commissure** before ascending in the anterolateral column to **VPL, the intralaminar nuclei and the reticular formation**. Cargo: **pain, temperature, crude touch and pressure, tickle and itch, sexual sensation**.',
    '**Fidelity is the second discriminator, and it follows from fibre size.** The dorsal column system resolves **about 100 gradations of intensity**, localises to **millimetres**, and can **follow rapidly repetitive trains** — which is why **vibration is a dorsal-column modality**. The anterolateral system manages only **10–20 gradations**, localises to **roughly 10 cm or worse**, and **cannot track fast repetitive signals at all**. Rule of thumb: **anything requiring fine spatial or temporal precision is dorsal column**.',
    '**Cord hemisection (Brown-Séquard) splits the deficit down the midline, because the two systems cross on opposite sides of the lesion.** Below the level you get **ipsilateral loss of vibration, position sense and fine touch** (those fibres had not yet crossed) plus **ipsilateral spastic weakness** (corticospinal already crossed in the medulla), and **contralateral loss of pain and temperature** (those fibres crossed below the lesion). The contralateral pin-prick level characteristically sits **1–2 segments below** the lesion, because the second-order fibre ascends a segment or two before decussating. At the level itself there is an **ipsilateral band of complete sensory loss and flaccid segmental weakness**.',
    '**A central cord lesion catches the crossing fibres and nothing else.** A **syrinx** expanding from the central canal interrupts **decussating spinothalamic axons in the anterior white commissure**, giving **bilateral, suspended, cape-shaped loss of pain and temperature** — classically over shoulders and arms at C8–T1 — while **touch, vibration and proprioception are fully intact** because the dorsal columns lie posteriorly and never cross at cord level. The clinical signature is **painless burns and cuts on the hands**. Contrast the two dissociations: **Brown-Séquard is split by side; a syrinx is split by modality and bounded above and below by normal skin**.',
  ],

  mechanism: {
    title: 'Follow two fibres from dorsal root to thalamus — only the crossing point differs',
    steps: [
      { id: 's1', label: 'Aβ fibre enters the medial dorsal root and ascends the dorsal column without synapsing' },
      { id: 's2', label: 'Aδ/C fibre enters the lateral dorsal root and synapses at once in the dorsal horn', emphasis: 'key' },
      { id: 's3', label: 'Anterolateral second-order axon crosses the anterior white commissure 1–2 segments higher', emphasis: 'key' },
      { id: 's4', label: 'Dorsal column fibre finally synapses in nucleus gracilis/cuneatus, caudal medulla', emphasis: 'key' },
      { id: 's5', label: 'Internal arcuate fibres decussate → medial lemniscus ascends the brainstem', emphasis: 'key' },
      { id: 's6', label: 'Both converge on VPL → internal capsule → postcentral gyrus' },
    ],
  },

  examFindings: [
    { sign: 'Loss of vibration and joint position below a stab wound on the SAME side, with loss of pin-prick on the OPPOSITE side', mechanism: 'Dorsal column fibres cross above the lesion in the medulla; spinothalamic fibres crossed below it in the cord', significance: 'key' },
    { sign: 'The contralateral pin-prick level sits one to two segments below the motor and dorsal-column level', mechanism: 'Second-order anterolateral axons ascend a segment or two before decussating in the anterior white commissure', significance: 'key' },
    { sign: 'Bilateral cape-distribution loss of pain and temperature over shoulders and arms with normal light touch and vibration', mechanism: 'Central cavity interrupts only the crossing spinothalamic fibres; the dorsal columns lie posterior and uncrossed', significance: 'key' },
    { sign: 'Painless burns and unnoticed cuts on the fingers of a young adult', mechanism: 'Syringomyelia — selective loss of the protective pain and thermal afferents with intact touch', significance: 'key' },
    { sign: 'Ipsilateral spastic weakness with an extensor plantar below a hemicord lesion', mechanism: 'The lateral corticospinal tract decussated in the medulla, so it is already on the side it supplies', significance: 'supportive' },
    { sign: 'Contralateral loss of ALL sensory modalities over face and body together', mechanism: 'Lesion at or above the thalamus, where both systems have already crossed and converged on VPL/VPM', significance: 'key' },
  ],

  investigations: [
    { clue: 'Fasciculus gracilis', meaning: 'Lower body below about T6, lying medially in the dorsal column — the longest fibres sit closest to the midline' },
    { clue: 'Internal arcuate fibres', meaning: 'The dorsal column decussation, in the caudal medulla, forming the medial lemniscus' },
    { clue: 'Anterior white commissure', meaning: 'The anterolateral decussation, 1–2 segments above the level of entry' },
    { clue: 'Suspended, bilateral, modality-dissociated sensory loss with normal skin above and below', meaning: 'Central cord lesion — syringomyelia until proven otherwise' },
    { clue: 'Ipsilateral proprioceptive loss with contralateral pain and temperature loss', meaning: 'Cord hemisection (Brown-Séquard)' },
    { clue: 'Conduction 30–110 m/s versus 8–40 m/s', meaning: 'Dorsal column–medial lemniscal versus anterolateral — speed predicts fidelity' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Localisation in the cord is done almost entirely with this one contrast. Ask three questions in order: which modality is lost, which side, and is there an upper AND lower border. Modality split with a side split means hemisection; modality split that is bilateral and suspended means a central lesion; no modality split at all, with everything gone contralaterally, means the lesion is above the medulla. The full tract-by-tract anatomy: [[somatosensory-ascending-pathways]]. The named cord syndromes built on it: [[spinal-cord-syndromes]].' },
    { logic: 'Where it is examined', detail: 'Examiners love to give the sensory level one or two segments off and see whether you notice, and to hide a syrinx behind a burn on the hand. The receptors feeding the fast system: [[ghp-tactile-receptors-modalities]]. What happens to both streams once they leave VPL: [[ghp-somatosensory-cortex-position]].' },
  ],

  mnemonics: [
    { hook: 'Dorsal columns cross LATE and HIGH; spinothalamic crosses EARLY and LOW', expansion: ['Late and high = medulla, so a cord lesion gives IPSILATERAL loss', 'Early and low = anterior white commissure, so a cord lesion gives CONTRALATERAL loss', 'Pin-prick level lands 1–2 segments below the true lesion'] },
    { hook: 'A syrinx eats only what is crossing', expansion: ['Crossing fibres = pain and temperature → lost bilaterally in a cape', 'Non-crossing dorsal columns = touch, vibration, position → spared', 'Suspended level: normal above, normal below'] },
  ],

  traps: [
    {
      questionCategory: 'Which side loses which modality after hemisection',
      wrongInstinct: 'Everything below a cord hemisection is lost on the side opposite the lesion',
      rightAnswer: 'Vibration, position sense and fine touch go ipsilaterally; pain and temperature go contralaterally',
      why: 'The dorsal column has not crossed yet at cord level, so it is still on the side of the lesion; the spinothalamic tract already crossed below it.',
    },
    {
      questionCategory: 'Reading the sensory level',
      wrongInstinct: 'The upper edge of contralateral pin-prick loss marks the segmental level of the lesion',
      rightAnswer: 'It marks a level one to two segments BELOW the lesion',
      why: 'Second-order anterolateral fibres ascend one or two segments in Lissauer before crossing, so the pin-prick level always undershoots the true level.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old is stabbed in the back at T10 and has hemisection of the left side of the cord. Which deficit pattern is expected below the lesion?',
      options: [
        { id: 'a', text: 'Left loss of pain and temperature, right loss of vibration and position sense' },
        { id: 'b', text: 'Left loss of vibration and position sense with left spastic weakness, right loss of pain and temperature' },
        { id: 'c', text: 'Bilateral loss of all modalities' },
        { id: 'd', text: 'Right loss of all modalities with left weakness' },
      ],
      answerId: 'b',
      explanation: 'At T10 the dorsal column fibres from the left leg are still on the left, since they do not cross until the caudal medulla, so vibration and position sense are lost on the left. The lateral corticospinal tract crossed in the medulla and is therefore already on the side it supplies, giving left spastic weakness. Spinothalamic fibres from the right leg crossed within one or two segments of entering, so they are running on the left at T10 and their loss appears on the right, beginning one to two segments below the lesion.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A 30-year-old presents with several painless burns on both hands. Examination shows absent pain and temperature sensation over both shoulders, arms and upper chest, with entirely normal sensation on the face and legs, and normal vibration and joint position sense throughout. Where is the lesion?',
      options: [
        { id: 'a', text: 'Bilateral dorsal columns in the cervical cord' },
        { id: 'b', text: 'Left thalamic VPL nucleus' },
        { id: 'c', text: 'A central cavity in the lower cervical cord interrupting the anterior white commissure' },
        { id: 'd', text: 'Bilateral lateral spinothalamic tracts in the medulla' },
      ],
      answerId: 'c',
      explanation: 'The loss is bilateral, dissociated by modality, and suspended, with normal sensation both above and below it. Only fibres crossing the midline at those segments can be selectively caught, and those are the second-order spinothalamic axons passing through the anterior white commissure. The dorsal columns run posteriorly and never cross in the cord, so vibration and proprioception are untouched. A dorsal column lesion would spare pain and temperature and abolish vibration, the reverse of this picture; a thalamic lesion would be unilateral and would take all modalities; a medullary lesion would not produce a suspended cervical level.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'Why is vibration sense abolished by posterior column disease but preserved when the anterolateral system alone is destroyed?',
      options: [
        { id: 'a', text: 'The anterolateral system does not reach the thalamus' },
        { id: 'b', text: 'Vibration receptors project only to the cerebellum' },
        { id: 'c', text: 'Only the large fast dorsal column fibres can transmit rapidly repetitive signals with high temporal fidelity' },
        { id: 'd', text: 'Vibration is detected by free nerve endings, which are absent from the anterolateral pathway' },
      ],
      answerId: 'c',
      explanation: 'Vibration is a train of rapidly repeating touch signals, so the pathway carrying it must be able to follow high repetition rates without smearing them. The dorsal column system, built from large myelinated fibres conducting at 30 to 110 m/s with roughly a hundred gradations of intensity and millimetre localisation, can do this. The anterolateral system conducts at 8 to 40 m/s with only ten to twenty gradations and coarse localisation, and cannot track fast repetitive trains. The anterolateral system does reach the thalamus, and vibration is detected by Pacinian corpuscles, not free nerve endings.',
      tests: 'lecture',
    },
  ],
};

export default ghpDorsalColumnVsAnterolateral;
