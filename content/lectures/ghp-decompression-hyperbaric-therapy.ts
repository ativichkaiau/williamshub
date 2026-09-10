import type { Lecture } from '../../lib/types';

export const ghpDecompressionHyperbaricTherapy: Lecture = {
  id: 'ghp-decompression-hyperbaric-therapy',
  title: 'Decompression Sickness & Hyperbaric Therapy',
  system: 'physiology',
  source: 'Ch 44 — Physiology of Deep-Sea Diving & Hyperbaric Conditions',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Physiology' },
    { kind: 'lecture', label: 'Ch 44 Hyperbaric Conditions' },
    { kind: 'disease', label: 'Decompression sickness' },
    { kind: 'treatment', label: 'Recompression & hyperbaric oxygen' },
  ],

  highYield: [
    '**Nitrogen is the villain precisely because nothing in the body uses it.** Oxygen at depth is consumed by metabolism, but nitrogen is inert, so it simply dissolves in proportion to its partial pressure until the tissue equilibrates. A body at sea level holds roughly **1 litre** of dissolved nitrogen; at **4 atm** sustained it holds about four times that. Nitrogen is around **five times more soluble in fat than in water**, so adipose tissue carries a disproportionate load — and the loading arithmetic follows directly from the partial pressures in [[ghp-diving-gas-partial-pressures]].',
    '**Tissues load and unload on their own clocks, which is what makes decompression a schedule rather than a rule.** Well-perfused fast tissues — blood, brain, spinal cord — equilibrate in **minutes**; poorly perfused fatty and periarticular slow tissues take **hours**. Full saturation of the whole body needs many hours, and washout is exponential: most nitrogen leaves in the first hour, but complete elimination takes far longer. Dive tables and computers are simply models of these tissue half-times.',
    '**Bubbles form when ambient pressure falls faster than nitrogen can be carried away.** On rapid ascent the dissolved nitrogen becomes **supersaturated** relative to the new ambient pressure and comes out of solution in tissue and venous blood. The damage is not only mechanical obstruction: bubble surfaces **activate complement, platelets and coagulation**, denature proteins and injure endothelium, producing capillary leak and haemoconcentration on top of the ischaemia.',
    '**Type I decompression sickness is pain, Type II is everything that matters more.** **Type I** is the classic **bends** — deep, boring, periarticular pain in shoulders, elbows and knees that makes the sufferer flex the joint, with itch and a mottled marbled rash. **Type II** is neurological and cardiorespiratory: the **spinal cord** (girdle pain, ascending numbness, leg weakness, urinary retention), the **inner ear** as staggers, and the lung as the **chokes** when a massive venous bubble load blocks pulmonary capillaries. A right-to-left shunt through a patent foramen ovale lets venous bubbles bypass the pulmonary filter and raises the risk of the serious forms.',
    '**Prevention is staged decompression, and the gas choice changes the schedule rather than abolishing it.** Ascent is slowed to roughly **9–10 metres per minute** with timed stops that keep supersaturation below the bubble threshold. **Helium-oxygen** removes narcosis and lowers gas density, but helium diffuses faster and is less soluble, so its decompression obligation is **different, not automatically shorter** — and helium conducts heat so well that the diver and the breathing gas must be heated. In saturation diving, once every tissue is full, bottom time no longer adds to the decompression, so crews live under pressure and decompress once.',
    '**A recompression chamber does three physical things at once, and that is the whole treatment.** Raised pressure **shrinks** existing bubbles and drives their gas back into solution; **100% oxygen** removes nitrogen from the inspired gas so the outward diffusion gradient is maximal; and the raised dissolved oxygen perfuses ischaemic tissue directly. At **3 atm** on pure oxygen, dissolved oxygen alone reaches roughly **6 mL/dL**, which exceeds normal resting extraction — the reason hyperbaric oxygen also works for the content problems that plain oxygen cannot fix in [[ghp-respiratory-insufficiency-hypoxia]].',
  ],

  mechanism: {
    title: 'Dissolve, supersaturate, bubble, recompress',
    steps: [
      { id: 's1', label: 'Inert nitrogen dissolves in proportion to its partial pressure at depth', emphasis: 'key' },
      { id: 's2', label: 'Fat holds about five times more than water; slow tissues load over hours', emphasis: 'key' },
      { id: 's3', label: 'Ascent drops ambient pressure faster than washout → supersaturation', emphasis: 'key' },
      { id: 's4', label: 'Bubbles form in tissue and venous blood; surfaces activate complement and platelets', emphasis: 'danger' },
      { id: 's5', label: 'Joint pain as Type I, or cord, inner ear and pulmonary involvement as Type II', emphasis: 'danger' },
      { id: 's6', label: 'Recompression shrinks and redissolves bubbles while oxygen maximises washout', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Deep boring shoulder or knee pain hours after a dive, unrelieved by position', mechanism: 'Bubble formation in slow periarticular tissue — Type I bends', significance: 'key' },
    { sign: 'Girdle pain with ascending numbness, leg weakness and urinary retention', mechanism: 'Spinal cord decompression sickness, characteristically low thoracic', significance: 'key' },
    { sign: 'Mottled marbled rash over the trunk with itching', mechanism: 'Cutaneous decompression sickness, associated with right-to-left shunting of bubbles', significance: 'supportive' },
    { sign: 'Substernal burning, cough and dyspnoea progressing to circulatory collapse', mechanism: 'Massive venous bubble load obstructing pulmonary capillaries — the chokes', significance: 'key' },
    { sign: 'Vertigo, nausea and unilateral hearing loss after a mixed-gas dive', mechanism: 'Inner ear decompression sickness — the staggers', significance: 'supportive' },
    { sign: 'Ear pain during chamber compression for hyperbaric treatment', mechanism: 'Middle-ear barotrauma, the commonest complication of hyperbaric oxygen therapy', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Symptoms beginning one to six hours after surfacing rather than within minutes', meaning: 'Decompression sickness rather than arterial gas embolism' },
    { clue: 'Dive computer log showing a missed stop or an excessive ascent rate', meaning: 'Omitted decompression with a predictable supersaturation load' },
    { clue: 'Bubble contrast echocardiography showing a patent foramen ovale after recurrent neurological hits', meaning: 'Paradoxical arterial bubbles bypassing the pulmonary filter' },
    { clue: 'Onset of joint pain after a flight taken a few hours post-dive', meaning: 'Residual nitrogen off-gassing further at reduced cabin pressure' },
    { clue: 'Femoral or humeral head sclerosis and collapse in a career diver', meaning: 'Dysbaric osteonecrosis from repeated bubble injury to marrow vasculature' },
    { clue: 'Raised carboxyhaemoglobin with a normal pulse oximetry reading', meaning: 'Carbon monoxide poisoning — an accepted hyperbaric oxygen indication' },
  ],

  treatment: [
    {
      logic: 'Give 100% oxygen immediately and get the patient to a chamber',
      detail: 'Surface **100% oxygen** is not merely supportive: removing nitrogen from inspired gas creates the steepest possible gradient for nitrogen to leave the tissues, so it starts shrinking bubbles before the chamber is reached. Add supine positioning and fluids for the capillary leak, then **recompression**, typically to about **2.8 atm** with oxygen periods and air breaks to limit oxygen toxicity. Recompression still helps when treatment is delayed by hours, so a late presentation is never a reason to withhold it.',
    },
    {
      logic: 'Know the mechanisms behind each hyperbaric indication, not just the list',
      detail: 'Four distinct mechanisms cover almost every accepted indication. **Bubble reduction** treats decompression sickness and arterial gas embolism. **Mass-action displacement** treats carbon monoxide poisoning, cutting the carboxyhaemoglobin half-life from hours to about twenty minutes. **Dissolved oxygen independent of haemoglobin** covers severe anaemia when transfusion is impossible and acute ischaemia. **Hyperoxic wound biology** — fibroblast proliferation, collagen deposition, angiogenesis, restored leukocyte oxidative killing and inhibition of clostridial toxin — covers gas gangrene, necrotising infection, crush injury, compromised flaps, refractory osteomyelitis and delayed radiation injury. The limits are ear barotrauma, oxygen seizures, reversible myopia and an untreated pneumothorax, which is an absolute contraindication until drained. Contrast this with when ordinary oxygen suffices in [[ghp-diving-gas-partial-pressures]].',
    },
  ],

  mnemonics: [
    { hook: 'Bends bend, chokes choke, staggers stagger', expansion: ['Bends — periarticular pain, Type I', 'Chokes — pulmonary bubble load, Type II', 'Staggers — inner ear vertigo, Type II', 'Cord signs — the one that disables'] },
    { hook: 'Pressure shrinks it, gradient removes it, oxygen feeds the tissue', expansion: ['Recompression collapses and redissolves the bubble', 'Nitrogen-free inspired gas maximises washout', 'Dissolved oxygen perfuses what the bubble blocked'] },
  ],

  traps: [
    {
      questionCategory: 'Joint pain three hours after a dive',
      wrongInstinct: 'Musculoskeletal strain from the equipment — give analgesia and observe',
      rightAnswer: 'Type I decompression sickness, referred for oxygen and recompression',
      why: 'Deep boring periarticular pain unrelated to position within 24 hours of a dive is decompression sickness until proven otherwise',
    },
    {
      questionCategory: 'Why helium-oxygen is used for deep diving',
      wrongInstinct: 'Helium is less soluble, so decompression is always faster and safer',
      rightAnswer: 'Helium is chosen for low narcotic potency and low density, and it changes the schedule rather than shortening it',
      why: 'Helium diffuses faster into and out of tissue, so it needs its own decompression model — and it steals body heat',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Why does adipose tissue carry a disproportionate share of the nitrogen load and release it slowly?',
      options: [
        { id: 'a', text: 'Fat metabolises nitrogen into inert compounds that accumulate' },
        { id: 'b', text: 'Nitrogen is about five times more soluble in fat than in water, and fat is poorly perfused' },
        { id: 'c', text: 'Adipose capillaries are impermeable to dissolved gases' },
        { id: 'd', text: 'Fat has a higher temperature, increasing gas solubility' },
      ],
      answerId: 'b',
      explanation: 'Nitrogen is not metabolised at all, so its distribution is decided purely by solubility and perfusion. High lipid solubility gives fat a large capacity, and low blood flow means it takes hours to fill and hours to empty. That combination makes fatty and periarticular tissue the classic slow compartment, and explains both the delay before bends appear and why decompression schedules are built from tissue half-times.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Forty-five minutes after surfacing, a diver develops girdle pain, numbness of both legs and difficulty passing urine. What is the correct immediate management?',
      options: [
        { id: 'a', text: 'Analgesia and observation, with imaging if symptoms persist' },
        { id: 'b', text: 'High-dose corticosteroids and admission for neurological monitoring' },
        { id: 'c', text: '100% oxygen, supine positioning and fluids, with urgent transfer for recompression' },
        { id: 'd', text: 'Return the patient to the water for in-water decompression' },
      ],
      answerId: 'c',
      explanation: 'This is spinal cord decompression sickness. Breathing 100% oxygen removes nitrogen from inspired gas and maximises the gradient for nitrogen to leave supersaturated tissue, beginning treatment before arrival. Definitive care is recompression, which shrinks bubbles and drives their gas back into solution while raising dissolved oxygen delivery to the ischaemic cord. Delay worsens outcome, and in-water recompression is unsafe.',
      tests: 'treatment',
    },
    {
      id: 'q3',
      stem: 'At 3 atmospheres breathing 100% oxygen, why can dissolved oxygen alone meet resting tissue demand?',
      options: [
        { id: 'a', text: 'Haemoglobin releases oxygen more readily at raised ambient pressure' },
        { id: 'b', text: 'Arterial PO₂ near 2,000 mmHg dissolves about 6 mL/dL, exceeding normal resting extraction' },
        { id: 'c', text: 'Tissue oxygen consumption falls under hyperbaric conditions' },
        { id: 'd', text: 'Plasma develops an oxygen-binding capacity at high partial pressure' },
      ],
      answerId: 'b',
      explanation: 'Dissolved oxygen follows partial pressure at roughly 0.003 mL/dL per mmHg. At 3 atm on pure oxygen the arterial PO₂ approaches 2,000 mmHg, giving about 6 mL/dL in solution, while resting arteriovenous extraction is around 5 mL/dL. Haemoglobin can therefore be bypassed entirely, which is exactly why hyperbaric oxygen helps in carbon monoxide poisoning and in severe anaemia when transfusion is not possible.',
      tests: 'mechanism',
    },
  ],
};

export default ghpDecompressionHyperbaricTherapy;
