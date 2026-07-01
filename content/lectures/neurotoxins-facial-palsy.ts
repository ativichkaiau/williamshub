import type { Lecture } from '../../lib/types';

export const neurotoxinsFacialPalsy: Lecture = {
  id: 'neurotoxins-facial-palsy',
  title: 'Tetanus, Botulism & Bell’s Palsy',
  system: 'neuro',
  source: 'L18 — CNS Infections & Immune Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L18 CNS Infections' },
    { kind: 'disease', label: 'Neurotoxins / facial palsy' },
    { kind: 'mechanism', label: 'Toxin at the synapse' },
    { kind: 'exam', label: 'Rigid vs flaccid' },
  ],

  highYield: [
    '**Tetanus** (Clostridium tetani exotoxin **tetanospasmin**) **blocks release of inhibitory neurotransmitters (GABA/glycine)** from spinal interneurons → **disinhibition → rigidity and spasms**: **trismus (lockjaw), risus sardonicus, opisthotonus, autonomic instability**. Generalized form is most common.',
    'Tetanus treatment: **human tetanus immunoglobulin (neutralize toxin) + metronidazole/penicillin + benzodiazepines (spasms) + supportive/ICU care + wound care**; prevention = **vaccination/booster**.',
    '**Botulism** (C. botulinum toxin) **blocks acetylcholine release at the NMJ** → **symmetric DESCENDING flaccid paralysis** with **oculobulbar signs (ptosis, diplopia, dysphagia)**; **NO fever, alert, no sensory loss**. Sources: home-canned food, wounds (IV drug use), infants. Treat with **antitoxin + respiratory support**.',
    'So the two clostridial toxins are opposites: **tetanus = rigidity (blocks inhibition)**, **botulism = flaccid paralysis (blocks excitation/ACh)**.',
    '**Bell’s palsy** = acute idiopathic **peripheral (LMN) facial nerve palsy** (unilateral, involves the forehead), HSV-associated; treat with **corticosteroids (± antivirals) + eye protection**. **Ramsay Hunt** (VZV, geniculate ganglion) = facial palsy + **ear pain + vesicles** in the ear canal.',
  ],

  mechanism: {
    title: 'Toxin at the synapse → rigidity or paralysis',
    steps: [
      { id: 's1', label: 'Tetanospasmin blocks inhibitory (GABA/glycine) release', emphasis: 'key' },
      { id: 's2', label: '→ Disinhibition → spasms/rigidity (tetanus)' },
      { id: 's3', label: 'Botulinum toxin blocks ACh release at NMJ' },
      { id: 's4', label: '→ Descending flaccid paralysis (botulism)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Lockjaw, risus sardonicus, opisthotonus, spasms', mechanism: 'Tetanus (loss of inhibition)', significance: 'key' },
    { sign: 'Symmetric descending weakness + ptosis/diplopia, no fever, alert', mechanism: 'Botulism (blocked ACh)', significance: 'key' },
    { sign: 'Unilateral facial weakness including the forehead', mechanism: 'Bell’s palsy (LMN, peripheral CN VII)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Clinical diagnosis + wound/exposure history', meaning: 'Tetanus / botulism' },
    { clue: 'Forehead sparing? (UMN) vs forehead involved (LMN)', meaning: 'Central lesion vs Bell’s palsy' },
    { clue: 'Vesicles in ear canal', meaning: 'Ramsay Hunt (VZV) vs Bell’s palsy' },
  ],

  treatment: [
    { logic: 'Tetanus: TIG + antibiotics + benzodiazepines + ICU', detail: 'Neutralize toxin, control spasms.' },
    { logic: 'Botulism: antitoxin + respiratory support', detail: 'Wound botulism also needs debridement/antibiotics.' },
    { logic: 'Bell’s palsy: corticosteroids + eye care (± antivirals)', detail: 'Ramsay Hunt: add antivirals.' },
  ],

  mnemonics: [
    { hook: 'Tetanus = Tense (rigidity, blocks inhibition); Botulism = Bendy (flaccid, blocks ACh)', expansion: ['Opposite clostridial toxins'] },
    { hook: 'Bell’s palsy = LMN CN VII (forehead involved); UMN spares the forehead', expansion: ['Steroids + eye protection'] },
  ],

  traps: [
    {
      questionCategory: 'Forehead in facial weakness',
      wrongInstinct: 'Facial droop with a spared forehead is Bell’s palsy',
      rightAnswer: 'Bell’s palsy is a LOWER motor neuron lesion that involves the WHOLE half of the face including the forehead; forehead SPARING indicates an upper motor neuron (central) lesion such as a stroke',
      why: 'The upper face receives bilateral cortical input, so a central (UMN) lesion spares the forehead, whereas the peripheral CN VII lesion of Bell’s palsy weakens the entire ipsilateral face.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient develops symmetric descending weakness with ptosis, diplopia, and dysphagia after eating home-canned food; there is no fever and sensation is intact. The toxin responsible acts by:',
      options: [
        { id: 'a', text: 'Blocking GABA/glycine release (disinhibition)' },
        { id: 'b', text: 'Blocking acetylcholine release at the neuromuscular junction' },
        { id: 'c', text: 'Blocking sodium channels' },
        { id: 'd', text: 'Activating NMDA receptors' },
      ],
      answerId: 'b',
      explanation: 'Botulinum toxin blocks acetylcholine release at the NMJ, producing a symmetric descending flaccid paralysis with oculobulbar signs, no fever, and intact sensation — the opposite of tetanus.',
      tests: 'exam',
    },
  ],
};

export default neurotoxinsFacialPalsy;
