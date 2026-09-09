import type { Lecture } from '../../lib/types';

export const ghpRespiratoryInsufficiencyHypoxia: Lecture = {
  id: 'ghp-respiratory-insufficiency-hypoxia',
  title: 'Respiratory Insufficiency & Types of Hypoxia',
  system: 'respiratory',
  source: 'Ch 42 — Respiratory Insufficiency — Pathophysiology & Oxygen Therapy',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 42 Respiratory Insufficiency' },
    { kind: 'mechanism', label: 'Causes of hypoxaemia' },
    { kind: 'investigation', label: 'A-a gradient' },
  ],

  highYield: [
    '**There are four types of hypoxia, and each has one discriminating number.** **Hypoxic** hypoxia: arterial **PO₂ is low**. **Anaemic** hypoxia, including carbon monoxide poisoning: PO₂ and measured saturation look **normal** while oxygen **content** is low. **Stagnant** hypoxia: content is normal but **flow** is low, so the **arteriovenous oxygen difference widens**. **Histotoxic** hypoxia, classically cyanide: delivery is normal and the cell cannot use it, so **venous oxygen is high** and the difference **narrows**.',
    '**Venous oxygen separates the last two types better than anything else at the bedside.** In **stagnant** hypoxia, tissues extract more from each slow-moving unit of blood, so central venous saturation **falls** and the arteriovenous difference widens. In **histotoxic** hypoxia oxygen is delivered and returned unused, so venous blood is **arterialised** — a **high** central venous saturation together with a **severe lactic acidosis** is close to pathognomonic of cyanide or mitochondrial poisoning.',
    '**Hypoxaemia has five causes, and the alveolar-arterial gradient splits them into two groups immediately.** With a **normal** gradient the lung itself is innocent: either **low inspired PO₂** at altitude, or **hypoventilation**, in which case PaCO₂ is also raised. With a **widened** gradient the fault lies inside the lung: **diffusion impairment**, **V/Q mismatch** or **shunt**. Compute alveolar PO₂ from the alveolar gas equation and subtract the measured PaO₂; normal is about **5–15 mmHg** in a young adult and rises with age.',
    '**Only shunt resists 100% oxygen, and that is the single most useful discriminator in the chapter.** In V/Q mismatch and diffusion impairment, raising FiO₂ raises alveolar PO₂ in the underventilated units and PaO₂ climbs substantially. In a true shunt the blood **never meets alveolar gas at all**, so it dilutes the oxygenated stream no matter how high the FiO₂ goes. Refractory hypoxaemia on high-flow oxygen therefore means shunt — collapse, consolidation, ARDS, or a right-to-left cardiac connection.',
    '**V/Q mismatch is by far the commonest clinical cause, and it is two problems rather than one.** **Low** V/Q units, with perfusion in excess of ventilation and approaching shunt, produce **hypoxaemia**. **High** V/Q units, with ventilation in excess of perfusion and approaching dead space, waste ventilation and drive up the **work of breathing** and eventually PaCO₂. Hypoxaemia appears first because the dissociation curve is flat at the top: well-ventilated units cannot over-oxygenate to make up the deficit, the logic set out in [[ventilation-perfusion-matching]].',
    '**Cyanosis tracks absolute deoxygenated haemoglobin, not saturation — about 5 g/dL in capillary blood.** A polycythaemic patient turns blue at only mild desaturation, whereas a patient with a haemoglobin of **6 g/dL cannot accumulate 5 g/dL of deoxygenated haemoglobin even at a saturation of 20%**, so severe anaemic hypoxia is **never** cyanotic. Carbon monoxide poisoning is likewise pink rather than blue, and **peripheral** cyanosis from sluggish flow must be separated from **central** cyanosis by inspecting the tongue and mucous membranes.',
  ],

  mechanism: {
    title: 'Why blood leaves the lung under-oxygenated',
    steps: [
      { id: 's1', label: 'Alveolar PO₂ set by inspired PO₂ minus PaCO₂ divided by the respiratory quotient', emphasis: 'key' },
      { id: 's2', label: 'Low FiO₂ or hypoventilation lowers alveolar PO₂ with a normal A-a gradient', emphasis: 'key' },
      { id: 's3', label: 'Diffusion block, V/Q mismatch or shunt widens the A-a gradient instead', emphasis: 'key' },
      { id: 's4', label: '100% oxygen corrects every one of these except true shunt', emphasis: 'danger' },
      { id: 's5', label: 'Arterial content falls — or haemoglobin, flow or the mitochondrion fails instead' },
      { id: 's6', label: 'Cells switch to anaerobic metabolism and lactate rises before cyanosis appears', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Central cyanosis of the tongue and mucous membranes', mechanism: 'About 5 g/dL of deoxygenated haemoglobin present in capillary blood', significance: 'key' },
    { sign: 'No cyanosis despite a saturation of 70% in profound anaemia', mechanism: 'Total haemoglobin is too low to accumulate 5 g/dL in the deoxygenated form', significance: 'key' },
    { sign: 'Cold blue fingers with a warm pink tongue', mechanism: 'Peripheral cyanosis from slow flow and high local extraction, not arterial desaturation', significance: 'key' },
    { sign: 'Hypoxaemia that barely improves on a non-rebreather mask', mechanism: 'True shunt — blood bypasses ventilated alveoli entirely', significance: 'key' },
    { sign: 'Desaturation appearing only on exertion in interstitial lung disease', mechanism: 'Shortened capillary transit time unmasks a diffusion limitation', significance: 'supportive' },
    { sign: 'Pink skin and confusion with a normal-looking pulse oximeter reading', mechanism: 'Carboxyhaemoglobin absorbs light like oxyhaemoglobin and is reported as saturated', significance: 'key' },
  ],

  investigations: [
    { clue: 'PaO₂ 55, PaCO₂ 70, A-a gradient normal for age', meaning: 'Pure hypoventilation — the lung parenchyma is intact and the problem is the pump' },
    { clue: 'PaO₂ 55, PaCO₂ 32, A-a gradient 45 mmHg', meaning: 'Gas exchange failure inside the lung — mismatch, diffusion block or shunt' },
    { clue: 'PaO₂ rises only from 50 to 62 mmHg on 100% oxygen', meaning: 'Shunt physiology; V/Q mismatch would have corrected far more than this' },
    { clue: 'Normal PaO₂ and saturation with a lactate of 8 mmol/L', meaning: 'Non-hypoxaemic hypoxia — anaemic, stagnant or histotoxic rather than a lung problem' },
    { clue: 'Central venous saturation 85% with a severe metabolic acidosis', meaning: 'Oxygen delivered but not consumed — histotoxic hypoxia' },
    { clue: 'Central venous saturation 45% with a completely normal arterial gas', meaning: 'Low-output stagnant hypoxia with compensatory widening of extraction' },
  ],

  treatment: [
    {
      logic: 'Classify the hypoxia before escalating the oxygen',
      detail: 'Oxygen corrects a low **PaO₂**. It does very little for **anaemic**, **stagnant** or **histotoxic** hypoxia, where the answers are transfusion, restoring **flow**, and the specific antidote respectively. Naming the type first prevents an hour spent turning up a flow meter — the therapeutic detail is in [[ghp-oxygen-therapy-artificial-respiration]].',
    },
    {
      logic: 'Use the response to oxygen as a diagnostic manoeuvre',
      detail: 'Hypoxaemia that **corrects** readily is mismatch, hypoventilation or diffusion limitation. Hypoxaemia that **does not** correct is shunt, and shunt is treated by **recruitment** — PEEP, drainage of an effusion, re-expansion, or treating the consolidation — rather than by a higher FiO₂.',
    },
  ],

  mnemonics: [
    { hook: 'HASH the four hypoxias', expansion: ['Hypoxic: low PaO₂', 'Anaemic: low content, normal PaO₂', 'Stagnant: low flow, wide arteriovenous difference', 'Histotoxic: unused oxygen, narrow arteriovenous difference'] },
    { hook: 'Only shunt shrugs at oxygen', expansion: ['Low FiO₂ and hypoventilation: normal A-a, corrects', 'Diffusion and V/Q mismatch: wide A-a, corrects', 'Shunt: wide A-a, refractory'] },
  ],

  traps: [
    {
      questionCategory: 'Cyanosis as a marker of hypoxia',
      wrongInstinct: 'The absence of cyanosis means oxygenation is adequate',
      rightAnswer: 'Cyanosis needs about 5 g/dL of deoxygenated haemoglobin, a level an anaemic patient may never reach',
      why: 'It is an absolute concentration threshold, not a saturation threshold',
    },
    {
      questionCategory: 'Interpreting hypoxaemia with a raised PaCO₂',
      wrongInstinct: 'Hypercapnia proves the hypoxaemia is caused by hypoventilation',
      rightAnswer: 'Only if the A-a gradient is normal; a wide gradient means lung disease with coexisting ventilatory failure',
      why: 'The gradient, not the PaCO₂, tells you whether the lung itself is at fault',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A ventilated patient has a PaO₂ of 48 mmHg on FiO₂ 0.4. Raising FiO₂ to 1.0 moves the PaO₂ only to 61 mmHg. What does this indicate?',
      options: [
        { id: 'a', text: 'Diffusion impairment' },
        { id: 'b', text: 'Alveolar hypoventilation' },
        { id: 'c', text: 'A large right-to-left shunt' },
        { id: 'd', text: 'A low inspired oxygen concentration' },
      ],
      answerId: 'c',
      explanation: 'Every cause of hypoxaemia except shunt responds well to a high FiO₂, because the extra oxygen reaches the alveoli that are still ventilated. Shunted blood never contacts alveolar gas at all, so it continues to dilute the oxygenated stream and PaO₂ barely moves.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'After an industrial exposure, a patient has a normal PaO₂, a normal haemoglobin, a lactate of 12 mmol/L, and a central venous oxygen saturation of 88%. Which type of hypoxia is this?',
      options: [
        { id: 'a', text: 'Stagnant hypoxia' },
        { id: 'b', text: 'Anaemic hypoxia' },
        { id: 'c', text: 'Hypoxic hypoxia' },
        { id: 'd', text: 'Histotoxic hypoxia' },
      ],
      answerId: 'd',
      explanation: 'Delivery is intact, so the abnormality must be at the mitochondrion. Because the tissues cannot extract the oxygen delivered, venous blood returns nearly arterialised and the arteriovenous difference narrows, while anaerobic metabolism drives lactate up. Stagnant hypoxia would show the opposite venous picture.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'A patient with a haemoglobin of 5 g/dL and an arterial saturation of 72% shows no cyanosis. What is the best explanation?',
      options: [
        { id: 'a', text: 'Cyanosis requires about 5 g/dL of deoxygenated haemoglobin, which this patient cannot reach' },
        { id: 'b', text: 'Anaemia shifts the dissociation curve so that tissue oxygenation is preserved' },
        { id: 'c', text: 'Peripheral vasoconstriction masks the colour change' },
        { id: 'd', text: 'Pulse oximetry is inaccurate below a haemoglobin of 8 g/dL' },
      ],
      answerId: 'a',
      explanation: 'Cyanosis depends on the absolute concentration of deoxygenated haemoglobin in capillary blood, not on the percentage saturation. With a total haemoglobin of 5 g/dL, even 28% desaturation gives only about 1.4 g/dL of deoxygenated haemoglobin, well below the visible threshold.',
      tests: 'exam',
    },
  ],
};

export default ghpRespiratoryInsufficiencyHypoxia;
