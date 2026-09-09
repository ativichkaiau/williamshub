import type { Lecture } from '../../lib/types';

export const ghpMechanicsOfVentilation: Lecture = {
  id: 'ghp-mechanics-of-ventilation',
  title: 'Mechanics of Ventilation',
  system: 'respiratory',
  source: 'Ch 37 — Pulmonary Ventilation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 37 Pulmonary Ventilation' },
    { kind: 'mechanism', label: 'Pleural and alveolar pressures' },
    { kind: 'exam', label: 'Pneumothorax physiology' },
  ],

  highYield: [
    '**Quiet breathing is one muscle in, and no muscle out.** The **diaphragm** alone delivers roughly **75%** of a quiet tidal breath, descending about **1 cm** (up to **8 cm** in forced effort) with the **external intercostals** lifting the ribs into a **pump-handle** and **bucket-handle** swing that widens the chest anteroposteriorly by about **20%**. **Quiet expiration is entirely passive** — the muscles simply stop and stored elastic recoil of lung and chest wall does the work. That single fact explains why airflow obstruction hurts expiration first: inspiration has a motor, expiration has only a spring.',
    '**Forced breathing recruits two extra teams.** Forced **inspiration** adds the **sternocleidomastoids** (which lift the sternum), the **scalenes** (which lift the first two ribs) and the **serratus anterior** — visible clinically as accessory-muscle use and tracheal tug. Forced **expiration** is driven by the **abdominal wall** (rectus abdominis, obliques, transversus), which drives the diaphragm upward, assisted by the **internal intercostals** pulling the ribs down. Never say expiration is always passive: coughing, speech and exercise are all abdominal work.',
    '**Two pressures, and you must keep them apart. Pleural pressure** is the pressure in the fluid film between the pleurae: about **−5 cmH₂O** at end-expiration, falling to about **−7.5 cmH₂O** at end of a quiet inspiration. **Alveolar pressure** is the pressure inside the alveoli: **0 (atmospheric)** at both no-flow points, about **−1 cmH₂O** during inspiration and **+1 cmH₂O** during expiration — a swing of barely 2 cmH₂O moves 500 mL. Their difference is the **transpulmonary (transmural) pressure**, which equals the lung recoil pressure and is the true distending pressure of the lung.',
    '**Pleural pressure is negative because two elastic structures pull in opposite directions.** The lung recoils **inward** (elastic fibres plus surface tension), the chest wall recoils **outward**, and the fluid-filled, sealed pleural space couples them; the mismatch of the two recoils is registered as **subatmospheric pressure**. It is held subatmospheric by **continuous lymphatic suction** of pleural fluid, which keeps the pleural fluid pressure near **−7 mmHg** and holds the visceral and parietal layers apposed. **Functional residual capacity is precisely the volume at which the two recoils are equal and opposite.**',
    '**Open the pleural space and the coupling is destroyed — this is pneumothorax.** Air entering makes pleural pressure equal to atmospheric, so **transpulmonary pressure falls to zero**, the lung collapses toward its unstressed volume and the chest wall springs outward (the hemithorax looks larger, not smaller). **Tension pneumothorax** adds a one-way valve: pleural pressure becomes **positive**, shifting the mediastinum, kinking the great veins and killing by **obstructed venous return** rather than by hypoxia — which is why the treatment is a needle, not oxygen.',
    '**Airway resistance is greatest in the medium-sized bronchi, not the tiny ones.** Each generation is narrower but there are exponentially more of them, so **total cross-sectional area explodes distally**; resistance peaks around the **segmental bronchi (roughly generations 4 to 8)**, and all airways under **2 mm** together contribute under **20%** of total resistance. Hence the **silent zone**: small-airway disease can be extensive before spirometry moves. Resistance also falls as lung volume rises (radial traction on the airways) and rises with **turbulent** flow in the large airways, where flow depends on the square root of the driving pressure.',
  ],

  mechanism: {
    title: 'Muscle shortens, pleural pressure falls, alveolar pressure follows, air moves',
    steps: [
      { id: 's1', label: 'Diaphragm and external intercostals contract; thoracic volume rises', emphasis: 'key' },
      { id: 's2', label: 'Pleural pressure falls from about −5 to about −7.5 cmH₂O', emphasis: 'key' },
      { id: 's3', label: 'Transpulmonary pressure (alveolar minus pleural) rises, expanding alveoli' },
      { id: 's4', label: 'Alveolar pressure drops to about −1 cmH₂O; air flows in down the gradient', emphasis: 'key' },
      { id: 's5', label: 'Muscles relax; stored elastic recoil raises alveolar pressure to about +1 cmH₂O' },
      { id: 's6', label: 'Airflow ceases at FRC, where lung and chest-wall recoils are equal and opposite' },
    ],
  },

  examFindings: [
    { sign: 'Accessory muscle use, tracheal tug and intercostal recession', mechanism: 'Sternocleidomastoid and scalene recruitment once the diaphragm alone cannot generate the needed pleural swing', significance: 'key' },
    { sign: 'Hyperresonant, larger-looking hemithorax with absent breath sounds after chest trauma', mechanism: 'Pneumothorax abolishes transpulmonary pressure; the lung collapses inward while the chest wall springs outward', significance: 'key' },
    { sign: 'Tracheal deviation away from the affected side with distended neck veins and hypotension', mechanism: 'Tension pneumothorax makes pleural pressure positive and obstructs venous return', significance: 'key' },
    { sign: 'Prolonged expiratory phase with pursed-lip breathing and abdominal muscle recruitment', mechanism: 'Expiration has no motor of its own, so obstruction forces active abdominal effort and splints the airways open', significance: 'key' },
    { sign: 'Paradoxical inward abdominal movement on inspiration', mechanism: 'Diaphragmatic weakness or paralysis: the flaccid diaphragm is sucked upward by the falling pleural pressure', significance: 'supportive' },
    { sign: 'Normal spirometry despite extensive small-airway inflammation', mechanism: 'Airways under 2 mm contribute under 20% of total resistance — the silent zone', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Pleural pressure about −5 cmH₂O at end-expiration and −7.5 cmH₂O at end-inspiration', meaning: 'Normal quiet cycle — the swing that moves a 500 mL tidal volume' },
    { clue: 'Alveolar pressure of 0 cmH₂O with the glottis open', meaning: 'A no-flow point: end-inspiration or end-expiration, not a diseased lung' },
    { clue: 'Transpulmonary pressure of about 5 cmH₂O at FRC', meaning: 'The lung recoil pressure holding the alveoli open at the resting volume' },
    { clue: 'Pleural pressure that becomes positive during quiet breathing', meaning: 'Tension pneumothorax or large effusion — never a normal finding at rest' },
    { clue: 'Resistance maximal in medium bronchi rather than bronchioles', meaning: 'Total cross-sectional area rises faster than individual calibre falls' },
    { clue: 'Falling airway resistance as lung volume increases', meaning: 'Radial traction from expanding parenchyma tethers the airways open' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Every ventilatory intervention is a move on the same two pressures. Positive-pressure ventilation reverses the physiology — alveolar pressure becomes positive throughout the cycle, so intrathoracic pressure rises and venous return falls, the mirror image of the negative-pressure breathing you were taught. PEEP raises end-expiratory transpulmonary pressure to hold recruitable alveoli open, and the elastic properties that set how much volume that buys are in [[ghp-surfactant-compliance]]. The volume framework these pressures act on is in [[ghp-lung-volumes-dead-space]].' },
    { logic: 'Bedside payoff', detail: 'It tells you that a tension pneumothorax kills by obstructing venous return, so the treatment is immediate decompression rather than oxygen; that pursed-lip breathing in obstructive disease works by keeping airway pressure up and preventing dynamic collapse; and that bronchodilators act on the medium bronchi where most resistance actually sits. Anatomical detail of the space itself: [[pleura-pleural-cavity]]; the clinical syndromes: [[pleural-effusion-pneumothorax-mesothelioma]]; the compliance measurements: [[respiratory-mechanics-compliance]].' },
  ],

  mnemonics: [
    { hook: 'In has a motor, Out has a spring', expansion: ['Quiet inspiration = diaphragm plus external intercostals', 'Quiet expiration = passive elastic recoil, no muscle at all', 'So obstruction always attacks expiration first'] },
    { hook: 'Negative because they Pull Apart', expansion: ['Lung recoils inward, chest wall recoils outward', 'Lymphatics suck the pleural fluid away and keep the layers apposed', 'Let air in and the pull is lost: lung collapses, chest wall expands'] },
  ],

  traps: [
    {
      questionCategory: 'Pleural versus alveolar pressure',
      wrongInstinct: 'Alveolar pressure is negative throughout inspiration and reaches about −7 cmH₂O at its peak',
      rightAnswer: 'Alveolar pressure swings only about −1 to +1 cmH₂O; it is pleural pressure that reaches about −7.5 cmH₂O',
      why: 'Alveolar pressure must return to zero at both no-flow points, or air would still be moving.',
    },
    {
      questionCategory: 'Site of maximal airway resistance',
      wrongInstinct: 'The terminal bronchioles, because they are the narrowest airways in the tree',
      rightAnswer: 'The medium-sized bronchi, roughly generations 4 to 8',
      why: 'The bronchioles are narrow but arranged in enormous parallel numbers, so their combined conductance is huge.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A healthy adult is at the end of a quiet expiration with the glottis open. Which set of values best describes the alveolar and pleural pressures at this instant?',
      options: [
        { id: 'a', text: 'Alveolar 0 cmH₂O, pleural about −5 cmH₂O' },
        { id: 'b', text: 'Alveolar −1 cmH₂O, pleural about −7.5 cmH₂O' },
        { id: 'c', text: 'Alveolar 0 cmH₂O, pleural about +5 cmH₂O' },
        { id: 'd', text: 'Alveolar +1 cmH₂O, pleural 0 cmH₂O' },
      ],
      answerId: 'a',
      explanation: 'At end-expiration there is no airflow, so alveolar pressure must equal atmospheric, that is 0. Pleural pressure remains about −5 cmH₂O because the opposing recoils of lung and chest wall persist at FRC. Option b is the end-inspiratory pair mislabelled, and a positive resting pleural pressure as in option c would mean a tension pneumothorax.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A knife wound opens the right pleural space to the atmosphere. Which combination of changes occurs on that side?',
      options: [
        { id: 'a', text: 'Pleural pressure becomes more negative and the lung expands' },
        { id: 'b', text: 'Transpulmonary pressure falls to zero, the lung collapses and the chest wall springs outward' },
        { id: 'c', text: 'The chest wall collapses inward while the lung retains its volume' },
        { id: 'd', text: 'Both lung and chest wall recoil inward, so the hemithorax becomes visibly smaller' },
      ],
      answerId: 'b',
      explanation: 'Admitting air equalises pleural with atmospheric pressure, so the distending transpulmonary pressure disappears and the lung recoils to its unstressed volume while the unopposed chest wall springs out, making the hemithorax look larger. Options c and d reverse the direction of chest-wall recoil, which is outward at FRC.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A patient with early small-airway inflammation has near-normal spirometry. The physiological explanation is that:',
      options: [
        { id: 'a', text: 'Airways under 2 mm contribute less than 20% of total airway resistance' },
        { id: 'b', text: 'Small airways are lined by cartilage that prevents narrowing' },
        { id: 'c', text: 'Resistance rises with lung volume, masking the obstruction' },
        { id: 'd', text: 'Flow in the small airways is turbulent, so resistance is independent of radius' },
      ],
      answerId: 'a',
      explanation: 'The vast parallel cross-sectional area of the distal tree means small airways carry only a small share of total resistance, so considerable disease accumulates silently before spirometry changes. Option c is backwards: resistance falls as volume rises, and option d has it inverted, since flow in the small airways is laminar and strongly radius-dependent.',
      tests: 'investigation',
    },
  ],
};

export default ghpMechanicsOfVentilation;
