import type { Lecture } from '../../lib/types';
import { PHOTOTRANSDUCTION_FIG } from '../../lib/figures';

export const visualPhototransduction: Lecture = {
  id: 'visual-phototransduction',
  title: 'Vision: Phototransduction & Retina',
  system: 'neuro',
  source: 'L16 — Phototransduction',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L16 Phototransduction' },
    { kind: 'mechanism', label: 'Rods/cones & the cascade' },
    { kind: 'exam', label: 'Rods vs cones; hyperpolarisation' },
  ],

  highYield: [
    '**Vision begins in the RETINA\'s photoreceptors — RODS and CONES — which contain a visual pigment (RODS use RHODOPSIN: opsin + 11-cis-retinal, a vitamin-A derivative). Light ISOMERISES 11-cis-retinal to all-trans, activating the pigment and triggering the phototransduction cascade.** The retina is organised in layers; light passes through to reach the photoreceptors at the back.',
    '**PHOTOTRANSDUCTION CASCADE: activated rhodopsin → activates the G-protein TRANSDUCIN → activates PHOSPHODIESTERASE → hydrolyses cGMP → cGMP falls → cGMP-gated cation channels CLOSE → the photoreceptor HYPERPOLARISES.** This is the paradox of vision: light causes photoreceptors to HYPERPOLARISE (in the DARK they are depolarised, steadily releasing glutamate; light REDUCES that release).',
    '**RODS vs CONES divide the labour: RODS are highly sensitive, work in DIM light (SCOTOPIC), give no colour and are concentrated in the PERIPHERY; CONES need bright light (PHOTOPIC), give COLOUR (three types — red/green/blue) and high acuity, and are concentrated at the FOVEA (macula).** This is why we see colour and detail centrally but detect faint/moving stimuli better in the periphery at night.',
    '**Signals pass photoreceptor → BIPOLAR cell → GANGLION cell (whose axons form the OPTIC NERVE), modulated by horizontal and amacrine cells; the ganglion-cell axons carry the visual field to the brain. VITAMIN A deficiency impairs rhodopsin regeneration → NIGHT BLINDNESS (nyctalopia).** The blind spot is the optic disc (no photoreceptors).',
    '**The take-home: light isomerises retinal → rhodopsin → transducin → PDE → ↓cGMP → channels close → photoreceptor HYPERPOLARISES (light reduces glutamate); rods = dim/peripheral/no colour, cones = bright/foveal/colour; vitamin A deficiency → night blindness.** The visual PATHWAY from optic nerve to cortex (and field defects) is in [[visual-pathway-fields]] (HNS-2); receptor principles in [[sensory-receptors-transduction]].',
  ],

  mechanism: {
    title: 'Light → retinal isomerises → rhodopsin → transducin → PDE → ↓cGMP → channels close → HYPERPOLARISE',
    steps: [
      { id: 's1', label: 'Light isomerises 11-cis-retinal → all-trans → activates rhodopsin', emphasis: 'key' },
      { id: 's2', label: 'Rhodopsin → transducin (G-protein) → phosphodiesterase → ↓cGMP', emphasis: 'key' },
      { id: 's3', label: 'cGMP-gated cation channels CLOSE → photoreceptor HYPERPOLARISES', emphasis: 'key' },
      { id: 's4', label: 'Dark = depolarised/glutamate release; light REDUCES glutamate release', emphasis: 'key' },
      { id: 's5', label: 'Rods = dim/peripheral/no colour; cones = bright/foveal/colour', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Photoreceptors HYPERPOLARISE in response to light', mechanism: 'Cascade closes cGMP-gated cation channels (light reduces glutamate)', significance: 'key' },
    { sign: 'High-acuity colour vision at the centre of gaze', mechanism: 'Cones concentrated at the fovea (photopic)', significance: 'key' },
    { sign: 'Better dim-light/peripheral detection at night', mechanism: 'Rods (scotopic, high sensitivity, peripheral)', significance: 'key' },
    { sign: 'Night blindness (nyctalopia)', mechanism: 'Vitamin A deficiency impairing rhodopsin regeneration', significance: 'key' },
    { sign: 'A physiological blind spot in the field', mechanism: 'Optic disc — no photoreceptors', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The visual pigment of rods', meaning: 'Rhodopsin (opsin + 11-cis-retinal)' },
    { clue: 'The G-protein of the phototransduction cascade', meaning: 'Transducin' },
    { clue: 'The unusual electrical response of photoreceptors to light', meaning: 'Hyperpolarisation (reduced glutamate release)' },
    { clue: 'The photoreceptor for dim light and peripheral vision', meaning: 'The rod' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Phototransduction explains night blindness (vitamin A/rhodopsin), the division between rod (dim/peripheral) and cone (bright/foveal/colour) function that shapes visual testing, and the counter-intuitive hyperpolarising, glutamate-reducing response to light. It builds on general receptor coding ([[sensory-receptors-transduction]]) and vitamin A nutrition ([[fat-soluble-vitamins]]); the downstream visual pathway, optic tract and field defects are in HNS-2 ([[visual-pathway-fields]]).' },
  ],

  mnemonics: [
    { hook: 'Vision paradox: "light → HYPERpolarise" (dark current off)', expansion: ['Dark = depolarised + glutamate', 'Light closes cGMP channels'] },
    { hook: 'Rods vs cones: "Rods = dim/peripheral (night); Cones = colour/central (day)"', expansion: ['Rhodopsin needs vitamin A', 'Cones at the fovea'] },
  ],

  traps: [
    {
      questionCategory: 'Electrical response of photoreceptors to light',
      wrongInstinct: 'Light stimulates photoreceptors to depolarise and fire more, like other sensory receptors',
      rightAnswer: 'Photoreceptors do the OPPOSITE: in the DARK they are depolarised (a steady "dark current" of cGMP-gated cation influx) and release glutamate tonically; LIGHT triggers the cascade that CLOSES those channels, so the cell HYPERPOLARISES and REDUCES glutamate release — light turns the signal DOWN, not up',
      why: 'This inverted logic is a favourite exam point and underlies retinal signal processing; treating light as a simple excitatory stimulus misrepresents the entire phototransduction mechanism.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'When light strikes a rod photoreceptor, the immediate electrical response of the cell is to:',
      options: [
        { id: 'a', text: 'Depolarise and increase glutamate release' },
        { id: 'b', text: 'Hyperpolarise and decrease glutamate release' },
        { id: 'c', text: 'Fire a train of action potentials' },
        { id: 'd', text: 'Show no change until dark returns' },
      ],
      answerId: 'b',
      explanation: 'Light activates rhodopsin → transducin → phosphodiesterase, lowering cGMP and closing cGMP-gated cation channels. The photoreceptor therefore hyperpolarises (its dark depolarising current is switched off) and reduces its tonic glutamate release — light turns the signal down.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient reports difficulty seeing in dim light (night blindness). This most directly reflects dysfunction of the rods and a deficiency of:',
      options: [
        { id: 'a', text: 'Vitamin C' },
        { id: 'b', text: 'Vitamin A (needed to regenerate rhodopsin)' },
        { id: 'c', text: 'Vitamin K' },
        { id: 'd', text: 'Cones' },
      ],
      answerId: 'b',
      explanation: 'Rhodopsin uses 11-cis-retinal, a vitamin A derivative; vitamin A deficiency impairs its regeneration and causes night blindness (nyctalopia), since rods mediate dim-light (scotopic) vision. Cones handle bright-light colour vision and are unaffected in the same way.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Phototransduction', svg: PHOTOTRANSDUCTION_FIG, caption: 'Light isomerises retinal → rhodopsin → transducin → PDE → ↓cGMP → channel closure → hyperpolarisation, with the rod vs cone division of labour.' },
  ],
};

export default visualPhototransduction;
