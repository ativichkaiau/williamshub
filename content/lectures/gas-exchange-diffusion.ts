import type { Lecture } from '../../lib/types';

export const gasExchangeDiffusion: Lecture = {
  id: 'gas-exchange-diffusion',
  title: 'Gas Exchange: Diffusion & Partial Pressures',
  system: 'respiratory',
  source: 'L5 — Gas Exchange & Transport',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L5 Gas Exchange' },
    { kind: 'mechanism', label: 'Fick diffusion' },
    { kind: 'exam', label: 'Partial pressure · diffusion-limited' },
  ],

  highYield: [
    '**Gases diffuse down partial-pressure gradients across the respiratory membrane.** In the alveolus **PO₂ ≈ 100, PCO₂ ≈ 40 mmHg**; incoming venous blood has **PO₂ ≈ 40, PCO₂ ≈ 46** → **O₂ diffuses into blood, CO₂ diffuses out**, until equilibrium. Dry air is ~21% O₂; alveolar PO₂ is lower because inspired air is humidified and mixed with residual CO₂-rich gas.',
    '**Fick\'s law of diffusion:** rate ∝ (**surface area × partial-pressure gradient × gas solubility**) ÷ (**membrane thickness**). So exchange is **impaired by ↓area (emphysema), ↓gradient (altitude), or ↑thickness (fibrosis, oedema, pneumonia)**.',
    '**CO₂ diffuses ~20× more readily than O₂** (much higher solubility) despite its smaller gradient — so **diffusion problems affect oxygenation (hypoxaemia) before CO₂ (hypercapnia)**. Impaired diffusion characteristically causes **hypoxaemia**, worse on exertion.',
    '**Perfusion-limited vs diffusion-limited transfer.** Normally O₂ transfer is **perfusion-limited** — blood fully equilibrates with alveolar gas well before it leaves the capillary, so uptake is set by blood flow, not diffusion. It becomes **diffusion-limited** when the membrane is thickened/abnormal or transit time is short (exercise) — or normally for **CO** (avidly bound, never equilibrates).',
    '**Diffusing capacity (DLCO)** measures the membrane\'s ability to transfer gas (using CO). It is **reduced** in emphysema (↓area), fibrosis (↑thickness), and anaemia (↓Hb), and **increased** in situations with more blood in the capillaries (e.g. alveolar haemorrhage).',
  ],

  mechanism: {
    title: 'Gradient + thin membrane → fast diffusion',
    steps: [
      { id: 's1', label: 'O₂/CO₂ diffuse down partial-pressure gradients', emphasis: 'key' },
      { id: 's2', label: 'Fick: rate ∝ area × gradient × solubility ÷ thickness', emphasis: 'key' },
      { id: 's3', label: 'CO₂ ~20× more diffusible → hypoxaemia before hypercapnia' },
      { id: 's4', label: 'O₂ normally perfusion-limited; diffusion-limited if membrane abnormal', emphasis: 'key' },
      { id: 's5', label: 'DLCO = membrane transfer capacity (↓ fibrosis/emphysema/anaemia)' },
    ],
  },

  examFindings: [
    { sign: 'Alveolar PO₂ 100 / PCO₂ 40; venous 40 / 46', mechanism: 'Gradients drive O₂ in, CO₂ out', significance: 'key' },
    { sign: 'Thickened membrane (fibrosis) slows O₂ transfer', mechanism: 'Fick — increased diffusion distance', significance: 'key' },
    { sign: 'Diffusion defect → hypoxaemia (esp. on exertion)', mechanism: 'CO₂ still cleared (20× more diffusible)', significance: 'key' },
    { sign: 'Reduced DLCO in emphysema and fibrosis', mechanism: '↓surface area / ↑thickness respectively', significance: 'supportive' },
    { sign: 'CO uptake never equilibrates', mechanism: 'Diffusion-limited (avidly bound to Hb)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Law governing gas diffusion across the membrane', meaning: 'Fick\'s law (area × gradient × solubility ÷ thickness)' },
    { clue: 'Why hypoxaemia precedes hypercapnia in diffusion defects', meaning: 'CO₂ is ~20× more diffusible than O₂' },
    { clue: 'Normal limiting factor for O₂ transfer', meaning: 'Perfusion (perfusion-limited)' },
    { clue: 'Test of membrane gas-transfer capacity', meaning: 'DLCO (diffusing capacity for CO)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Diffusion physics explains hypoxaemia in interstitial lung disease, emphysema, and oedema, and the meaning of DLCO. Once O₂ crosses the membrane it must be carried by haemoglobin ([[oxygen-transport-dissociation-curve]]); the membrane itself: [[alveoli-pneumocytes-respiratory-membrane]].' },
  ],

  mnemonics: [
    { hook: 'Fick: "Area & gradient & solubility UP, thickness DOWN = more diffusion"', expansion: ['Thick membrane = slow'] },
    { hook: 'CO₂ diffuses 20× easier → "diffusion problems = low O₂ first"', expansion: ['Hypoxaemia before hypercapnia'] },
  ],

  traps: [
    {
      questionCategory: 'Which gas is affected first by a diffusion defect?',
      wrongInstinct: 'Impaired diffusion causes CO₂ retention (hypercapnia) before it lowers oxygen',
      rightAnswer: 'Diffusion defects cause HYPOXAEMIA first; CO₂ (≈20× more diffusible) is usually still cleared, so hypercapnia is a late/other-mechanism feature',
      why: 'CO₂\'s high solubility lets it cross even a thickened membrane, so oxygenation fails before CO₂ elimination does.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'According to Fick\'s law, the rate of gas diffusion across the respiratory membrane is DECREASED by:',
      options: [
        { id: 'a', text: 'A larger surface area' },
        { id: 'b', text: 'A steeper partial-pressure gradient' },
        { id: 'c', text: 'An increase in membrane thickness (e.g. fibrosis, oedema)' },
        { id: 'd', text: 'Higher gas solubility' },
      ],
      answerId: 'c',
      explanation: 'Diffusion rate is inversely proportional to membrane thickness, so fibrosis or oedema slows gas transfer. Larger area, steeper gradient, and higher solubility all increase diffusion.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Under normal resting conditions, oxygen transfer from alveolus to blood is:',
      options: [
        { id: 'a', text: 'Diffusion-limited (never equilibrates)' },
        { id: 'b', text: 'Perfusion-limited (blood equilibrates with alveolar gas before leaving the capillary)' },
        { id: 'c', text: 'Independent of blood flow' },
        { id: 'd', text: 'Limited by surfactant' },
      ],
      answerId: 'b',
      explanation: 'Normally O₂ equilibrates with alveolar gas about a third of the way along the capillary, so uptake depends on blood flow (perfusion-limited). A thickened membrane or very short transit time can make it diffusion-limited.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default gasExchangeDiffusion;
