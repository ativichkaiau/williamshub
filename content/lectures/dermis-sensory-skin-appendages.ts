import type { Lecture } from '../../lib/types';

export const dermisSensorySkinAppendages: Lecture = {
  id: 'dermis-sensory-skin-appendages',
  title: 'Dermis, Sensory Receptors & Skin Appendages',
  system: 'histology',
  source: 'L5 — Membrane & Integument',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L5 Membrane & Integument' },
    { kind: 'mechanism', label: 'Dermal receptors' },
    { kind: 'exam', label: 'Meissner vs Pacinian' },
  ],

  highYield: [
    '**The dermis = connective tissue below the epidermis, in two layers.** **Papillary dermis** (superficial) = **loose CT** forming dermal papillae that interlock with epidermal ridges (fingerprints, nutrient supply). **Reticular dermis** (deep) = **dense irregular CT** (type I collagen + elastic fibres) giving strength and elasticity. Below lies the **hypodermis** (subcutaneous fat — not skin proper).',
    '**Encapsulated cutaneous mechanoreceptors.** **Meissner corpuscles** (dermal papillae) → **light/fine touch** (glabrous skin). **Pacinian corpuscles** (deep dermis/hypodermis, "onion-ring" lamellae) → **deep pressure/vibration**. **Ruffini endings** → stretch. **Merkel disc** (epidermal) → sustained touch; **free nerve endings** → pain/temperature.',
    '**Hair follicle** = epidermal down-growth; the **bulb/matrix** at the base (over a dermal papilla) grows the hair. The **arrector pili** smooth muscle erects the hair ("goosebumps") and helps express sebum.',
    '**Sebaceous glands** — **holocrine**, secrete **sebum** into the hair follicle (pilosebaceous unit); oily, keeps skin/hair supple. Blocked/inflamed → acne.',
    '**Sweat glands.** **Eccrine** (merocrine) — widespread, watery sweat for **thermoregulation**, open directly onto skin. **Apocrine** — axilla/groin, open into hair follicles, activate at puberty, produce odour-forming secretion. **Nails** = keratinized plates from the nail matrix.',
  ],

  mechanism: {
    title: 'Support layer + sensors + appendages',
    steps: [
      { id: 's1', label: 'Papillary (loose) + reticular (dense irregular) dermis', emphasis: 'key' },
      { id: 's2', label: 'Meissner = light touch (papillae); Pacinian = vibration (deep)', emphasis: 'key' },
      { id: 's3', label: 'Hair follicle + arrector pili muscle' },
      { id: 's4', label: 'Sebaceous = holocrine sebum (pilosebaceous unit)' },
      { id: 's5', label: 'Eccrine sweat (thermoregulation) vs apocrine (axilla, puberty)' },
    ],
  },

  examFindings: [
    { sign: 'Onion-ring lamellated corpuscle in deep dermis', mechanism: 'Pacinian corpuscle (pressure/vibration)', significance: 'key' },
    { sign: 'Encapsulated receptor in a dermal papilla', mechanism: 'Meissner corpuscle (light touch)', significance: 'key' },
    { sign: 'Holocrine gland emptying into a hair follicle', mechanism: 'Sebaceous gland (sebum)', significance: 'supportive' },
    { sign: 'Coiled gland opening directly onto skin surface', mechanism: 'Eccrine (merocrine) sweat gland', significance: 'supportive' },
    { sign: 'Interlocking dermal papillae under epidermal ridges', mechanism: 'Papillary dermis (loose CT) → fingerprints', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Receptor for vibration/deep pressure with concentric lamellae', meaning: 'Pacinian corpuscle' },
    { clue: 'Receptor for fine touch in fingertip papillae', meaning: 'Meissner corpuscle' },
    { clue: 'Smooth muscle causing "goosebumps"', meaning: 'Arrector pili' },
    { clue: 'Sweat gland responsible for thermoregulation', meaning: 'Eccrine gland' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Dermal collagen/elastin loss = ageing/wrinkles; sebaceous obstruction = acne; the pilosebaceous unit and sweat glands are common tumour and infection sites. Sensory corpuscle types map to the somatosensory exam. Epidermis: [[membranes-and-epidermis]].' },
  ],

  mnemonics: [
    { hook: 'Meissner = "M for light touch in papillae"; Pacinian = "P for Pressure, onion-Peel lamellae"', expansion: ['Ruffini = stretch; free endings = pain/temp'] },
    { hook: 'Eccrine = Everywhere (thermoregulation); Apocrine = Axilla (puberty, odour)', expansion: ['Sebaceous = holocrine sebum'] },
  ],

  traps: [
    {
      questionCategory: 'Meissner vs Pacinian',
      wrongInstinct: 'Pacinian corpuscles detect fine light touch in the fingertips',
      rightAnswer: 'Pacinian = deep pressure/VIBRATION (deep dermis, lamellated); Meissner = light touch (dermal papillae)',
      why: 'Location and modality differ: superficial Meissner for fine touch vs deep onion-ring Pacinian for vibration.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A lamellated "onion-ring" mechanoreceptor in the deep dermis that senses vibration and deep pressure is a:',
      options: [
        { id: 'a', text: 'Meissner corpuscle' },
        { id: 'b', text: 'Pacinian corpuscle' },
        { id: 'c', text: 'Merkel disc' },
        { id: 'd', text: 'Free nerve ending' },
      ],
      answerId: 'b',
      explanation: 'The Pacinian corpuscle has concentric lamellae ("onion") and detects vibration/deep pressure. Meissner corpuscles in dermal papillae detect light touch.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The reticular layer of the dermis is composed predominantly of:',
      options: [
        { id: 'a', text: 'Loose areolar connective tissue' },
        { id: 'b', text: 'Dense irregular connective tissue' },
        { id: 'c', text: 'Adipose tissue' },
        { id: 'd', text: 'Keratinized stratified squamous epithelium' },
      ],
      answerId: 'b',
      explanation: 'The reticular dermis is dense irregular connective tissue (type I collagen + elastic fibres) providing strength. The papillary dermis is loose CT; the epidermis is epithelium.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default dermisSensorySkinAppendages;
