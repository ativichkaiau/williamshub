import type { Lecture } from '../../lib/types';
import { CORTEX_AREAS } from '../../lib/figures';

export const corticalAreasLanguage: Lecture = {
  id: 'cortical-areas-language',
  title: 'Language Areas & Aphasia',
  system: 'neuro',
  source: 'L12 — Cerebral Cortex',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L12 Language' },
    { kind: 'mechanism', label: 'Broca, Wernicke, arcuate' },
    { kind: 'exam', label: 'Aphasia types' },
  ],

  highYield: [
    '**Language is LATERALISED to the DOMINANT hemisphere (LEFT in ~95% of right-handers and most left-handers). Two key cortical areas: BROCA\'s area (inferior frontal gyrus) = speech PRODUCTION/output; WERNICKE\'s area (superior temporal gyrus) = language COMPREHENSION.** They are connected by the ARCUATE FASCICULUS (a white-matter tract for repetition).',
    '**BROCA (expressive/motor) APHASIA: NON-fluent, effortful, telegraphic speech with PRESERVED comprehension — the patient knows what they want to say but cannot produce it, and is typically frustrated/aware.** Because Broca\'s area is near the motor cortex, it often accompanies a right-sided face/arm weakness. "Broca = Broken speech."',
    '**WERNICKE (receptive/sensory) APHASIA: FLUENT but nonsensical speech (neologisms, "word salad") with IMPAIRED comprehension — the patient speaks effortlessly but the content is meaningless and they are often UNAWARE of the deficit.** Because it is in the temporal lobe (away from motor cortex), there is usually no weakness. "Wernicke = Word salad."',
    '**CONDUCTION aphasia: damage to the ARCUATE FASCICULUS → fluent speech and intact comprehension but IMPAIRED REPETITION (the disconnection of Wernicke from Broca). GLOBAL aphasia = large lesion damaging both areas → non-fluent + poor comprehension.** Repetition is the discriminating test: intact in transcortical aphasias, impaired in Broca/Wernicke/conduction/global.',
    '**The take-home: dominant-hemisphere Broca (non-fluent, comprehension intact, ± weakness) vs Wernicke (fluent word salad, comprehension impaired, no weakness), linked by the arcuate fasciculus (conduction aphasia = poor repetition).** These map onto the MCA territory ([[cerebral-blood-supply]]); clinical stroke correlation is in HNS-2 ([[cortex-and-stroke]]); cortical organisation in [[cerebral-cortex-organization]].',
  ],

  mechanism: {
    title: 'Dominant hemisphere: Broca (production) ↔ arcuate fasciculus ↔ Wernicke (comprehension)',
    steps: [
      { id: 's1', label: 'Language lateralised to DOMINANT (usually left) hemisphere', emphasis: 'key' },
      { id: 's2', label: 'Broca (inferior frontal) = speech PRODUCTION; near motor cortex', emphasis: 'key' },
      { id: 's3', label: 'Wernicke (superior temporal) = COMPREHENSION', emphasis: 'key' },
      { id: 's4', label: 'Arcuate fasciculus connects them → repetition (lesion = conduction aphasia)', emphasis: 'key' },
      { id: 's5', label: 'Broca = non-fluent (comprehension intact); Wernicke = fluent word salad (poor comprehension)', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Non-fluent, effortful speech with intact comprehension', mechanism: 'Broca (expressive) aphasia — inferior frontal gyrus', significance: 'key' },
    { sign: 'Fluent but meaningless speech with impaired comprehension', mechanism: 'Wernicke (receptive) aphasia — superior temporal gyrus', significance: 'key' },
    { sign: 'Fluent speech, intact comprehension, impaired repetition', mechanism: 'Conduction aphasia (arcuate fasciculus)', significance: 'key' },
    { sign: 'Non-fluent speech with a right face/arm weakness', mechanism: 'Broca lesion adjacent to motor cortex (dominant MCA)', significance: 'supportive' },
    { sign: 'Patient unaware of nonsensical speech', mechanism: 'Wernicke aphasia (no monitoring of output)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The area for speech production', meaning: 'Broca\'s area (inferior frontal gyrus)' },
    { clue: 'The area for language comprehension', meaning: 'Wernicke\'s area (superior temporal gyrus)' },
    { clue: 'The tract whose lesion impairs repetition', meaning: 'The arcuate fasciculus (conduction aphasia)' },
    { clue: 'The bedside test that separates the aphasias', meaning: 'Fluency, comprehension and repetition' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Classifying aphasia by fluency, comprehension and repetition localises a dominant-hemisphere lesion — nearly always MCA-territory stroke ([[cerebral-blood-supply]], [[cortex-and-stroke]]). Broca lesions often carry a face/arm weakness (motor cortex adjacent), Wernicke lesions usually do not. Language sits within the broader cortical map of [[cerebral-cortex-organization]] and the white-matter tracts of [[cerebrum-lobes-white-matter]].' },
  ],

  mnemonics: [
    { hook: '"Broca = Broken (non-fluent) speech; Wernicke = Word salad (fluent, no sense)"', expansion: ['Broca comprehension intact', 'Wernicke comprehension impaired'] },
    { hook: 'Repetition: "Arcuate = repeat" — conduction aphasia = fluent + comprehends but can\'t repeat', expansion: ['Broca near motor cortex → weakness', 'Global = both areas'] },
  ],

  traps: [
    {
      questionCategory: 'Broca vs Wernicke aphasia',
      wrongInstinct: 'A patient who speaks fluently cannot have significant aphasia',
      rightAnswer: 'WERNICKE (receptive) aphasia is FLUENT — speech flows effortlessly but is full of neologisms/"word salad" and comprehension is impaired, and the patient is often unaware; fluency does NOT equal normal language. BROCA (expressive) aphasia is the non-fluent one, with preserved comprehension',
      why: 'Judging language by fluency alone misses Wernicke aphasia entirely; comprehension and repetition must be tested, because fluent speech can be meaningless while non-fluent speech can carry intact understanding.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient produces fluent but meaningless speech full of neologisms and cannot understand spoken commands. This is:',
      options: [
        { id: 'a', text: 'Broca (expressive) aphasia' },
        { id: 'b', text: 'Wernicke (receptive) aphasia' },
        { id: 'c', text: 'Conduction aphasia' },
        { id: 'd', text: 'Dysarthria' },
      ],
      answerId: 'b',
      explanation: 'Fluent, nonsensical ("word salad") speech with impaired comprehension is Wernicke (receptive) aphasia, from a lesion of the superior temporal gyrus of the dominant hemisphere. Broca aphasia is non-fluent with preserved comprehension; dysarthria is a motor articulation problem, not a language disorder.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Fluent speech with intact comprehension but a selective inability to repeat phrases suggests damage to the:',
      options: [
        { id: 'a', text: 'Broca\'s area' },
        { id: 'b', text: 'Arcuate fasciculus (conduction aphasia)' },
        { id: 'c', text: 'Primary auditory cortex' },
        { id: 'd', text: 'Cerebellum' },
      ],
      answerId: 'b',
      explanation: 'Conduction aphasia results from damage to the arcuate fasciculus connecting Wernicke\'s and Broca\'s areas: comprehension and fluency are preserved, but repetition is disproportionately impaired because the comprehension–production link is disconnected.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Language areas', svg: CORTEX_AREAS, caption: 'Broca (inferior frontal) and Wernicke (superior temporal) areas, connected by the arcuate fasciculus, in the dominant hemisphere.' },
  ],
};

export default corticalAreasLanguage;
