import type { Lecture } from '../../lib/types';

export const ghpLanguageAphasia: Lecture = {
  id: 'ghp-language-aphasia',
  title: 'Language: Wernicke, Broca and Deriving the Aphasias',
  system: 'neuro',
  source: 'Ch 57 — Cerebral Cortex; Intellectual Functions, Learning & Memory',
  updated: '2026-09-10',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 57 Cerebral Cortex & Intellectual Function' },
    { kind: 'mechanism', label: 'Wernicke → arcuate fasciculus → Broca' },
    { kind: 'exam', label: 'Fluency · comprehension · repetition' },
  ],

  highYield: [
    '**Language is one loop with three parts, and every aphasia is just the loop broken at a different place.** **Wernicke area** in the **posterior superior temporal gyrus of the dominant hemisphere** holds **comprehension**; the **arcuate fasciculus** carries the coded message forward; **Broca area** in the **posterior inferior frontal gyrus (areas 44 and 45)** builds the **motor program for articulation** and hands it to the adjacent motor strip. Do not memorise a table of aphasias — **decide which of the three is damaged and the syndrome falls out**.',
    '**Repetition is the killer question because it needs all three parts at once.** To repeat a phrase, sound must be **understood (Wernicke)**, **transmitted (arcuate fasciculus)** and **re-uttered (Broca)**; a lesion anywhere in that **perisylvian arc abolishes repetition**. It follows that **preserved repetition places the lesion outside the arc** — the **transcortical aphasias**, typically **watershed infarcts** after hypotension or carbon monoxide, which can be so extreme that the patient is **echolalic**, parroting fluently what they cannot understand.',
    '**Damage Wernicke and the output is fluent and empty, and the patient does not know it.** Speech keeps **normal rate, rhythm and grammar** but fills with **paraphasias and neologisms**, **comprehension is lost**, **repetition is lost**, and there is **no insight or frustration**. Because the lesion sits in the **temporal lobe (inferior division of the middle cerebral artery)**, there is often **no hemiparesis at all** — which is precisely why a Wernicke stroke is repeatedly misread as **delirium, psychosis or dementia** in the emergency department.',
    '**Damage Broca and the output is sparse and effortful, and the patient knows exactly what is wrong.** Speech becomes **telegraphic and agrammatic** — content words with the small connecting words stripped out — with **preserved comprehension**, **impaired repetition** and **obvious frustration**. Because Broca area lies **immediately in front of the motor representation of face and hand**, an expressive aphasia usually arrives with **contralateral face and arm weakness**, while a Wernicke aphasia usually does not.',
    '**Cut only the cable and you get the pure dissociation: understands, speaks, cannot repeat.** A lesion of the **arcuate fasciculus** (deep to the supramarginal gyrus) leaves **comprehension intact and output fluent**, but **repetition fails out of all proportion** to everything else, with **phonemic paraphasias and repeated self-corrections closing in on the target word**; naming is impaired too. **Occlude the whole dominant middle cerebral artery stem** and all three components go together — **global aphasia** with dense **hemiplegia and gaze deviation toward the lesion**.',
    '**Reading and writing hang off the same hub, and dysarthria is not on this map at all.** Written words go **primary visual cortex → angular gyrus → Wernicke area**, so an **angular gyrus lesion gives alexia with agraphia** (with acalculia, finger agnosia and left-right disorientation making up **Gerstmann syndrome**), while a **left occipital infarct that also takes the splenium** disconnects the intact right visual cortex from the intact language areas and produces **alexia without agraphia** — the patient **writes a sentence and then cannot read it back**. **Dysarthria is a motor execution fault** (bulbar, cerebellar or upper motor neurone): **word choice and grammar are normal and so is writing**. Hand the patient a pen — **aphasia corrupts written language, dysarthria never does**.',
  ],

  mechanism: {
    title: 'The language loop, and what each break does to it',
    steps: [
      { id: 's1', label: 'Spoken words reach primary auditory cortex; written words reach primary visual cortex' },
      { id: 's2', label: 'Angular gyrus converts the visual word form and feeds it forward', emphasis: 'key' },
      { id: 's3', label: 'Wernicke area extracts meaning — comprehension lives here', emphasis: 'key' },
      { id: 's4', label: 'The arcuate fasciculus carries the coded message to the frontal lobe', emphasis: 'key' },
      { id: 's5', label: 'Broca area assembles the motor program for articulation', emphasis: 'key' },
      { id: 's6', label: 'Motor cortex drives lips, tongue, larynx and respiratory muscles' },
    ],
  },

  examFindings: [
    { sign: 'Fluent, well-articulated speech full of invented words, no comprehension of a spoken command, cannot repeat, and no distress about any of it', mechanism: 'Wernicke area destroyed — comprehension and self-monitoring are the same function', significance: 'key' },
    { sign: 'Effortful telegraphic output of a few content words, follows a three-step command correctly, visibly frustrated, with right facial droop and arm weakness', mechanism: 'Broca area lesion abutting the motor face and arm representation', significance: 'key' },
    { sign: 'Understands everything and speaks fluently, but cannot repeat a short phrase and gropes through several near-miss versions of it', mechanism: 'Arcuate fasciculus interruption — conduction aphasia, an isolated disconnection', significance: 'key' },
    { sign: 'After a cardiac arrest, the patient parrots back whole sentences fluently but cannot obey any of them or generate speech spontaneously', mechanism: 'Watershed infarction sparing the perisylvian arc — transcortical aphasia with preserved repetition and echolalia', significance: 'key' },
    { sign: 'Slurred, nasal, imprecise speech with entirely normal grammar and word choice, and a normally written note', mechanism: 'Dysarthria — a motor execution problem, not a language problem', significance: 'key' },
    { sign: 'Writes a fluent paragraph to dictation and then cannot read a word of it, with a right homonymous hemianopia', mechanism: 'Left occipital plus splenial infarct: alexia without agraphia, a visual-verbal disconnection', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Repetition', meaning: 'The one item that separates perisylvian aphasias (repetition lost) from transcortical or watershed ones (repetition preserved)' },
    { clue: 'Fluency', meaning: 'Non-fluent points anterior, to Broca; fluent points posterior, to Wernicke or the arcuate fasciculus' },
    { clue: 'Comprehension', meaning: 'Lost in Wernicke and global aphasia; preserved in Broca and conduction aphasia' },
    { clue: 'Hand the patient a pen', meaning: 'Writing is abnormal in every aphasia and normal in dysarthria and in aphonia' },
    { clue: 'Posterior inferior frontal gyrus, areas 44 and 45', meaning: 'Broca area, sitting just anterior to the motor face representation — hence the accompanying hemiparesis' },
    { clue: 'Agraphia, acalculia, finger agnosia and left-right disorientation together', meaning: 'Gerstmann syndrome from a dominant angular gyrus lesion' },
  ],

  treatment: [
    { logic: 'Three bedside questions, in order', detail: 'Ask them every time and the syndrome and the artery name themselves. Is the speech fluent? Non-fluent turns you anterior, fluent turns you posterior. Does the patient comprehend? Failure adds Wernicke to the lesion. Can the patient repeat? Failure keeps you inside the perisylvian arc, success throws you out to the watershed. Fluent plus comprehending plus unable to repeat leaves only the cable, which is conduction aphasia. All three failing with hemiplegia is a middle cerebral stem occlusion. The hub itself and the association cortex it belongs to: [[ghp-cortical-areas-association]]. Territory-by-territory cortical stroke patterns: [[cortex-and-stroke]].' },
    { logic: 'Where it is examined', detail: 'Two traps recur. The first is the fluent aphasic with no weakness who is admitted as an acute confusional state or a first episode of psychosis, losing the thrombolysis window; test comprehension in anyone who has suddenly started talking nonsense. The second is calling slurred speech aphasia — dysarthria leaves grammar, word choice and writing untouched. Fitting a language deficit into a whole-brain localisation scheme: [[neuro-localization-framework]]. Which vessel supplies which part of the loop: [[cerebral-blood-supply]].' },
  ],

  mnemonics: [
    { hook: 'Fluent, follows, repeats', expansion: ['Question one, fluency, sets anterior against posterior', 'Question two, comprehension, brings Wernicke in or leaves it out', 'Question three, repetition, decides perisylvian versus transcortical'] },
    { hook: 'Broca is broken speech, Wernicke is wordy nonsense', expansion: ['Broca: non-fluent, comprehends, frustrated, hemiparetic', 'Wernicke: fluent, comprehends nothing, unaware, usually no weakness', 'Neither can repeat; the one who can repeat has a watershed lesion'] },
  ],

  traps: [
    {
      questionCategory: 'The patient who talks a great deal',
      wrongInstinct: 'Speech is fluent and abundant, so language is intact and this is confusion, psychosis or dementia',
      rightAnswer: 'Fluent empty speech with neologisms and failed comprehension is Wernicke aphasia, an acute dominant temporal stroke',
      why: 'Wernicke lesions usually spare the motor strip, so there is no hemiparesis to announce the stroke and comprehension must be tested deliberately.',
    },
    {
      questionCategory: 'Speech that sounds abnormal',
      wrongInstinct: 'Slurred, hard to understand speech means aphasia',
      rightAnswer: 'Slurred but grammatically correct speech with normal writing is dysarthria — an execution failure of the articulators, not a language failure',
      why: 'Language is supramodal and therefore corrupts writing as well as speech; articulation is a motor act and leaves the written word untouched.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 61-year-old woman speaks fluently with normal grammar, follows three-step commands without error, and names most objects. Asked to repeat "no ifs, ands or buts" she produces a string of near-miss versions, correcting herself each time and never quite succeeding. Where is the lesion?',
      options: [
        { id: 'a', text: 'Wernicke area in the posterior superior temporal gyrus' },
        { id: 'b', text: 'Broca area in the posterior inferior frontal gyrus' },
        { id: 'c', text: 'Arcuate fasciculus deep to the supramarginal gyrus' },
        { id: 'd', text: 'Watershed cortex between the anterior and middle cerebral territories' },
      ],
      answerId: 'c',
      explanation: 'Comprehension is intact, so Wernicke area is working; output is fluent and well formed, so Broca area is working. The only remaining component of the loop is the cable between them, and repetition is the task that depends on the cable most heavily. This is conduction aphasia, with its characteristic phonemic groping toward the target word. A watershed lesion would spare repetition rather than destroy it, which is the whole point of the transcortical group.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Three days after a brainstem stroke a man speaks in a slurred, nasal, imprecise way that his family struggles to follow. Asked to write down what he wants, he produces a grammatically perfect, correctly spelled request for his glasses. What is the diagnosis?',
      options: [
        { id: 'a', text: 'Expressive (Broca) aphasia' },
        { id: 'b', text: 'Dysarthria' },
        { id: 'c', text: 'Conduction aphasia' },
        { id: 'd', text: 'Transcortical motor aphasia' },
      ],
      answerId: 'b',
      explanation: 'Language is supramodal: if the disorder were aphasia it would corrupt written output as well, because the fault would lie in generating or retrieving language rather than in uttering it. Normal writing with abnormal speech localises the problem to the articulatory apparatus and its control — bulbar or corticobulbar pathways or cerebellum — which is dysarthria. Handing the patient a pen is the single quickest way to separate the two at the bedside.',
      tests: 'exam',
    },
    {
      id: 'q3',
      stem: 'After prolonged hypotension during cardiac surgery, a patient produces almost no spontaneous speech and cannot obey commands, yet repeats long sentences said to him fluently and accurately, sometimes echoing them without being asked. Which lesion best explains this?',
      options: [
        { id: 'a', text: 'Occlusion of the dominant middle cerebral artery stem' },
        { id: 'b', text: 'Bilateral watershed infarction sparing the perisylvian language arc' },
        { id: 'c', text: 'Isolated destruction of Wernicke area' },
        { id: 'd', text: 'Section of the corpus callosum' },
      ],
      answerId: 'b',
      explanation: 'Repetition requires the whole perisylvian arc — Wernicke area, the arcuate fasciculus and Broca area — so preserved repetition proves that arc is intact and moves the lesion outside it. Global hypoperfusion damages the border zones between major arterial territories, isolating the intact language arc from the surrounding association cortex that normally feeds meaning in and initiative out. The result is a mixed transcortical aphasia: nothing generated, nothing understood, everything parroted. A middle cerebral stem occlusion would abolish repetition and add hemiplegia.',
      tests: 'lecture',
    },
  ],
};

export default ghpLanguageAphasia;
