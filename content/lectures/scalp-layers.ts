import type { Lecture } from '../../lib/types';
import { SCALP_LAYERS } from '../../lib/figures';

export const scalpLayers: Lecture = {
  id: 'scalp-layers',
  title: 'Scalp: Layers, Bleeding & Danger Area',
  system: 'msk',
  source: 'L6 — Face, Scalp, Parotid & Temporal Regions',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L6 Face, Scalp & Parotid' },
    { kind: 'disease', label: 'Scalp layers' },
    { kind: 'mechanism', label: 'SCALP mnemonic' },
    { kind: 'exam', label: 'Danger area / bleeding' },
  ],

  highYield: [
    'The **5 layers of the scalp = "SCALP": Skin, dense Connective tissue, Aponeurosis (epicranial/galea aponeurotica), Loose areolar tissue, Pericranium** (periosteum).',
    'The **first three layers (S-C-A) are bound together and move as one unit** ("scalp proper"); this is the layer raised as a flap in craniotomy.',
    '**Scalp wounds bleed profusely** because the arteries lie in the **dense connective-tissue layer**, whose fibrous septa hold the vessels open (they cannot retract/vasoconstrict). Deep wounds **gape widely** only when the **epicranial aponeurosis is cut in the coronal plane** (frontal vs occipital belly pull in opposite directions).',
    'The **loose areolar layer is the "danger area"**: it allows blood/pus to spread freely and connects to the intracranial dural venous sinuses via **emissary veins** — so scalp infection can reach the cranium.',
    '**Blood supply** comes from BOTH carotids: external carotid (**superficial temporal, posterior auricular, occipital**) and internal carotid (**supraorbital, supratrochlear**), with rich anastomoses. Sensory supply = trigeminal (V1 supraorbital/supratrochlear, V2 zygomaticotemporal, V3 auriculotemporal) + occipital nerves (C2–C3).',
  ],

  mechanism: {
    title: 'Five layers; the vascular dense layer bleeds, the loose layer spreads infection',
    steps: [
      { id: 's1', label: 'S-C-A-L-P: skin → connective → aponeurosis → loose → pericranium', emphasis: 'key' },
      { id: 's2', label: 'Vessels in the dense layer → profuse bleeding' },
      { id: 's3', label: 'Aponeurosis cut → wound gapes' },
      { id: 's4', label: 'Loose layer = danger area (emissary veins → sinuses)', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'A scalp laceration bleeding heavily', mechanism: 'Vessels held open in the dense connective-tissue layer', significance: 'key' },
    { sign: 'A deep scalp wound that gapes widely', mechanism: 'Epicranial aponeurosis lacerated (opposing muscle pull)', significance: 'key' },
    { sign: 'Scalp infection tracking to intracranial sinuses', mechanism: 'Loose areolar "danger area" + emissary veins', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Depth of wound (does it gape?)', meaning: 'Whether the aponeurosis is cut' },
    { clue: 'Signs of intracranial spread', meaning: 'Danger-area infection' },
  ],

  treatment: [
    { logic: 'Control bleeding by pressure/suturing all layers', detail: 'Include the aponeurosis to close a gaping wound.' },
    { logic: 'Treat danger-area infection promptly', detail: 'Prevent intracranial spread.' },
  ],

  mnemonics: [
    { hook: 'SCALP = Skin, Connective, Aponeurosis, Loose, Pericranium', expansion: ['First 3 move as one'] },
    { hook: 'Loose layer = danger area (emissary veins → dural sinuses)', expansion: ['Infection spreads'] },
  ],

  traps: [
    {
      questionCategory: 'Why scalp wounds gape',
      wrongInstinct: 'A gaping scalp wound just means the skin was cut deeply',
      rightAnswer: 'A scalp wound gapes only when the epicranial APONEUROSIS is cut in the coronal plane — the frontal and occipital bellies then pull the edges apart',
      why: 'Intact aponeurosis holds the edges together; cutting it releases opposing muscle tension.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In which scalp layer do the arteries run, explaining why scalp lacerations bleed profusely, and which layer is the "danger area" for intracranial infection spread?',
      options: [
        { id: 'a', text: 'Skin; pericranium' },
        { id: 'b', text: 'Dense connective tissue (vessels); loose areolar tissue (danger area)' },
        { id: 'c', text: 'Aponeurosis; skin' },
        { id: 'd', text: 'Pericranium; aponeurosis' },
      ],
      answerId: 'b',
      explanation: 'Arteries lie in the dense connective-tissue layer whose septa hold them open (profuse bleeding); the loose areolar layer is the "danger area" that communicates with dural venous sinuses via emissary veins.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'The five layers of the scalp', svg: SCALP_LAYERS, caption: 'SCALP: skin, connective tissue (bleeds), aponeurosis (wound gapes), loose areolar (danger area), pericranium.' },
  ],
};

export default scalpLayers;
