import type { Lecture } from '../../lib/types';

export const gustatoryOlfactoryPathways: Lecture = {
  id: 'gustatory-olfactory-pathways',
  title: 'Gustatory & Olfactory Pathways',
  system: 'neuro',
  source: 'L14 — Auditory, Gustatory & Olfactory Pathways',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L14 Special Sense Pathways' },
    { kind: 'mechanism', label: 'Taste & smell' },
    { kind: 'exam', label: 'Olfaction bypasses thalamus' },
  ],

  highYield: [
    '**Taste (gustation) and smell (olfaction) are the chemical senses. Their pathways are worth contrasting because OLFACTION is the ONE sensory system that reaches the cortex WITHOUT a thalamic relay first** — a classic exam point.',
    '**TASTE is carried by three cranial nerves: CN VII (facial, via chorda tympani) for the ANTERIOR two-thirds of the tongue; CN IX (glossopharyngeal) for the POSTERIOR third; and CN X (vagus) for the epiglottis/pharynx.** All converge on the SOLITARY NUCLEUS (nucleus tractus solitarius) in the medulla → VPM of the THALAMUS → gustatory cortex (insula/frontal operculum).',
    '**OLFACTION: odorant receptors on olfactory neurons in the nasal epithelium → axons pass through the CRIBRIFORM PLATE (CN I) → OLFACTORY BULB → olfactory tract → directly to the primary olfactory (piriform) cortex and limbic areas — WITHOUT a thalamic relay.** This direct limbic connection is why smells evoke strong memory and emotion.',
    '**The olfactory neurons are unusual in being able to REGENERATE (turnover from basal stem cells).** Anosmia (loss of smell) can follow head trauma shearing the olfactory fibres at the cribriform plate, viral infection, or a frontal/olfactory-groove tumour; loss of smell also reduces flavour (much of "taste" is actually smell).',
    '**Key contrasts: taste → solitary nucleus → thalamus (VPM) → cortex (three CNs: VII, IX, X); smell → olfactory bulb → cortex DIRECTLY (bypasses the thalamus) with strong limbic links.** These pathways underlie the special-sense histology of [[taste-olfaction-receptors]] and the ear/eye anatomy of this block ([[auditory-pathway-anatomy]]).',
  ],

  mechanism: {
    title: 'Taste (VII/IX/X → solitary nucleus → thalamus → cortex); smell (CN I → bulb → cortex, no thalamus)',
    steps: [
      { id: 's1', label: 'Taste CNs: VII (ant ⅔), IX (post ⅓), X (epiglottis/pharynx)', emphasis: 'key' },
      { id: 's2', label: 'Taste → SOLITARY nucleus (medulla) → VPM thalamus → gustatory cortex (insula)', emphasis: 'key' },
      { id: 's3', label: 'Smell: receptors → cribriform plate (CN I) → olfactory bulb → tract', emphasis: 'key' },
      { id: 's4', label: 'Olfaction reaches cortex DIRECTLY — the only sense bypassing the thalamus', emphasis: 'danger' },
      { id: 's5', label: 'Olfactory neurons regenerate; strong limbic (memory/emotion) links' },
    ],
  },

  examFindings: [
    { sign: 'Taste from the anterior two-thirds of the tongue', mechanism: 'CN VII (facial, chorda tympani)', significance: 'key' },
    { sign: 'Taste from the posterior third of the tongue', mechanism: 'CN IX (glossopharyngeal)', significance: 'key' },
    { sign: 'Smell reaching cortex without a thalamic relay', mechanism: 'Olfaction bypasses the thalamus', significance: 'key' },
    { sign: 'Anosmia after head trauma (cribriform plate shear)', mechanism: 'Damage to CN I fibres', significance: 'supportive' },
    { sign: 'Smells evoking vivid memory/emotion', mechanism: 'Direct olfactory–limbic connections', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The three cranial nerves carrying taste', meaning: 'CN VII (anterior ⅔), IX (posterior ⅓), X (epiglottis/pharynx)' },
    { clue: 'The brainstem nucleus receiving taste afferents', meaning: 'The solitary nucleus (nucleus tractus solitarius)' },
    { clue: 'The sensory system that bypasses the thalamus', meaning: 'Olfaction (smell)' },
    { clue: 'The bony structure CN I fibres pass through', meaning: 'The cribriform plate of the ethmoid' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The taste (VII/IX/X → solitary nucleus → thalamus) and smell (CN I → bulb → cortex, no thalamus) pathways explain cranial-nerve testing and anosmia (trauma, tumour, viral). The direct olfactory–limbic link ties to the [[limbic-system-emotion-memory]]; receptor histology is in [[taste-olfaction-receptors]]. These complete the special-sense pathways alongside [[auditory-pathway-anatomy]].' },
  ],

  mnemonics: [
    { hook: 'Taste CNs "7-9-10": VII anterior ⅔, IX posterior ⅓, X epiglottis (all → solitary nucleus)', expansion: ['Solitary nucleus → VPM thalamus → insula', 'Facial via chorda tympani'] },
    { hook: 'Smell = "the only sense that skips the thalamus" (bulb → cortex directly)', expansion: ['Strong limbic/memory link', 'Olfactory neurons regenerate'] },
  ],

  traps: [
    {
      questionCategory: 'Thalamic relay of the senses',
      wrongInstinct: 'All sensory information must pass through the thalamus before reaching the cortex',
      rightAnswer: 'OLFACTION is the exception — smell signals travel from the olfactory bulb directly to the primary olfactory (piriform) cortex and limbic areas WITHOUT a thalamic relay; every other sensory modality relays through the thalamus',
      why: 'The "thalamus is the gateway to the cortex" rule holds for vision, hearing, taste and somatosensation but NOT for smell, whose direct cortical/limbic access explains its potent link to memory and emotion.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which sensory modality reaches the cerebral cortex WITHOUT first relaying in the thalamus?',
      options: [
        { id: 'a', text: 'Vision' },
        { id: 'b', text: 'Olfaction (smell)' },
        { id: 'c', text: 'Hearing' },
        { id: 'd', text: 'Taste' },
      ],
      answerId: 'b',
      explanation: 'Olfaction is unique in projecting from the olfactory bulb directly to the primary olfactory (piriform) cortex and limbic structures, bypassing the thalamus; all other modalities (vision, hearing, taste, somatosensation) relay through the thalamus.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Taste sensation from the anterior two-thirds of the tongue is carried by which cranial nerve?',
      options: [
        { id: 'a', text: 'CN VII (facial, via chorda tympani)' },
        { id: 'b', text: 'CN IX (glossopharyngeal)' },
        { id: 'c', text: 'CN X (vagus)' },
        { id: 'd', text: 'CN V (trigeminal)' },
      ],
      answerId: 'a',
      explanation: 'The facial nerve (CN VII), via the chorda tympani, carries taste from the anterior two-thirds of the tongue; CN IX serves the posterior third and CN X the epiglottis/pharynx. All converge on the solitary nucleus.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default gustatoryOlfactoryPathways;
