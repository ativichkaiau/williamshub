import type { Lecture } from '../../lib/types';

export const ghpCo2TransportHaldane: Lecture = {
  id: 'ghp-co2-transport-haldane',
  title: 'Carbon Dioxide Transport & the Haldane Effect',
  system: 'respiratory',
  source: 'Ch 40 — Transport of Oxygen & Carbon Dioxide in Blood',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 40 O₂ & CO₂ Transport' },
    { kind: 'mechanism', label: 'Three carriage forms' },
    { kind: 'exam', label: 'Bohr vs Haldane' },
  ],

  highYield: [
    '**Carbon dioxide travels in three forms, and the proportions are worth memorising exactly.** About **70%** as **bicarbonate**, roughly **23%** bound to protein as **carbamino** compounds (mostly carbaminohaemoglobin), and about **7%** **dissolved**. Note that dissolved CO₂ is a far larger fraction than dissolved oxygen — CO₂ is around **20× more soluble**.',
    '**Bicarbonate formation happens inside the red cell because that is where carbonic anhydrase is.** CO₂ diffuses in, **carbonic anhydrase** hydrates it to carbonic acid, which dissociates to **H⁺ and HCO₃⁻**. The reaction is essentially instantaneous in the cell and very slow in plasma, so the red cell is the engine of CO₂ carriage.',
    '**The chloride shift is the electrical bookkeeping that lets bicarbonate keep leaving.** As HCO₃⁻ exits the red cell down its gradient via the **band 3** anion exchanger, **Cl⁻ enters** to preserve electroneutrality. Venous red cells therefore contain more chloride than arterial ones, and they swell slightly — which is why venous haematocrit runs marginally higher.',
    '**Haemoglobin buffers the H⁺ generated, and deoxyhaemoglobin is the better buffer — this is the Haldane effect.** Unloading oxygen makes haemoglobin a **weaker acid** (a better proton acceptor) and improves carbamino binding, so **deoxygenated blood carries more CO₂ at any given PCO₂**. Oxygen unloading in tissue therefore actively promotes CO₂ uptake.',
    '**Bohr and Haldane are the same coupling read from opposite ends, and pairing them is the exam point.** **Bohr**: CO₂ and H⁺ reduce haemoglobin\u2019s oxygen affinity, promoting **oxygen release** in tissue. **Haldane**: oxygen release increases CO₂ carriage. Each gas facilitates the other\u2019s transport, in tissue and again in reverse in the lung — a single reciprocal system, not two unrelated facts.',
    '**The CO₂ dissociation curve is steeper and much more linear than the oxygen curve, and that has real consequences.** Because content changes almost proportionally with PCO₂ over the physiological range, CO₂ elimination responds directly to alveolar ventilation — **PaCO₂ is inversely proportional to alveolar ventilation**. It also means a region of high V/Q cannot compensate for a low-V/Q region as it partially can for oxygen, the asymmetry underlying [[ghp-ventilation-perfusion-matching]].',
  ],

  mechanism: {
    title: 'Into the red cell, out as bicarbonate',
    steps: [
      { id: 's1', label: 'Tissue CO₂ diffuses into plasma then into the red cell', emphasis: 'key' },
      { id: 's2', label: 'Carbonic anhydrase hydrates CO₂ → H₂CO₃ → H⁺ + HCO₃⁻', emphasis: 'key' },
      { id: 's3', label: 'HCO₃⁻ exits via band 3; Cl⁻ enters — the chloride shift', emphasis: 'key' },
      { id: 's4', label: 'Deoxyhaemoglobin buffers the H⁺ and binds carbamino CO₂ (Haldane)' },
      { id: 's5', label: 'CO₂ and H⁺ lower oxygen affinity, aiding unloading (Bohr)', emphasis: 'key' },
      { id: 's6', label: 'In the lung every step reverses as oxygen loads' },
    ],
  },

  examFindings: [
    { sign: 'Venous blood carrying more CO₂ than arterial at the same PCO₂', mechanism: 'Haldane effect — deoxyhaemoglobin carries CO₂ better', significance: 'key' },
    { sign: 'Improved oxygen unloading in metabolically active tissue', mechanism: 'Bohr effect from local CO₂ and H⁺', significance: 'key' },
    { sign: 'Slightly higher venous than arterial haematocrit', mechanism: 'Chloride shift drawing water into the red cell', significance: 'supportive' },
    { sign: 'PaCO₂ halving when alveolar ventilation doubles', mechanism: 'Inverse proportionality between PaCO₂ and alveolar ventilation', significance: 'key' },
    { sign: 'Rising PaCO₂ after oxygen therapy in some chronic retainers', mechanism: 'Partly the Haldane effect releasing CO₂ from oxygenated haemoglobin', significance: 'key' },
  ],

  investigations: [
    { clue: 'PaCO₂ tracking inversely with minute alveolar ventilation', meaning: 'Normal CO₂ handling — ventilation is the controlling variable' },
    { clue: 'Raised PaCO₂ with a normal A–a gradient', meaning: 'Hypoventilation rather than a gas exchange defect' },
    { clue: 'Venous-to-arterial CO₂ content difference greater than expected from PCO₂ alone', meaning: 'Haldane contribution to carriage' },
    { clue: 'Normal PaCO₂ in early interstitial lung disease with hypoxaemia', meaning: 'CO₂ clears readily; oxygen transfer fails first' },
    { clue: 'Rising PaCO₂ despite adequate oxygenation on therapy', meaning: 'Ventilatory failure needing support, not more oxygen' },
  ],

  treatment: [
    {
      logic: 'Control PaCO₂ by controlling alveolar ventilation',
      detail: 'Because the CO₂ curve is near-linear, **PaCO₂ is inversely proportional to alveolar ventilation** — so raising ventilation is the direct lever. Increasing FiO₂ does essentially nothing for CO₂, which is why hypercapnic failure needs ventilatory support.',
    },
    {
      logic: 'Titrate oxygen in chronic retainers rather than withholding it',
      detail: 'Rising CO₂ on oxygen reflects several mechanisms — worsened V/Q matching from released hypoxic vasoconstriction, the **Haldane** effect, and some reduction in drive. The answer is **controlled** oxygen to a target saturation, not depriving a hypoxaemic patient, as framed in [[ghp-chemoreceptor-control]].',
    },
  ],

  mnemonics: [
    { hook: '70-23-7', expansion: ['~70% bicarbonate', '~23% carbamino', '~7% dissolved'] },
    { hook: 'Bohr helps O₂ off, Haldane helps CO₂ on', expansion: ['Bohr: CO₂/H⁺ → oxygen released', 'Haldane: deoxygenation → more CO₂ carried', 'Each gas assists the other'] },
  ],

  traps: [
    {
      questionCategory: 'Distinguishing Bohr from Haldane',
      wrongInstinct: 'They are two names for the same effect on the oxygen curve',
      rightAnswer: 'Bohr describes CO₂/H⁺ altering oxygen binding; Haldane describes oxygenation altering CO₂ carriage',
      why: 'They are reciprocal halves of one coupling, but act on different gases',
    },
    {
      questionCategory: 'Correcting hypercapnia',
      wrongInstinct: 'Raising inspired oxygen will bring the CO₂ down',
      rightAnswer: 'PaCO₂ is set by alveolar ventilation, so it requires ventilatory support',
      why: 'Oxygen and carbon dioxide are handled by different limbs of the system',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'In what form is the majority of carbon dioxide transported in blood?',
      options: [
        { id: 'a', text: 'Dissolved in plasma' },
        { id: 'b', text: 'As bicarbonate, about 70%' },
        { id: 'c', text: 'Bound to haem iron' },
        { id: 'd', text: 'As carbonic acid in plasma' },
      ],
      answerId: 'b',
      explanation: 'About 70% travels as bicarbonate generated inside the red cell by carbonic anhydrase, roughly 23% as carbamino compounds bound to protein, and about 7% dissolved. CO₂ binds globin, not haem iron.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'What is the Haldane effect?',
      options: [
        { id: 'a', text: 'CO₂ and H⁺ reduce haemoglobin oxygen affinity' },
        { id: 'b', text: 'Deoxygenated haemoglobin carries more CO₂ at any given PCO₂' },
        { id: 'c', text: 'Bicarbonate exchanges for chloride across the red cell membrane' },
        { id: 'd', text: '2,3-BPG stabilises deoxyhaemoglobin' },
      ],
      answerId: 'b',
      explanation: 'Deoxygenation makes haemoglobin a better proton buffer and improves carbamino binding, so venous blood carries more CO₂ than arterial blood at the same PCO₂. Option (a) describes the Bohr effect — the reciprocal half of the same coupling.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why does bicarbonate leaving the red cell require chloride to enter?',
      options: [
        { id: 'a', text: 'To maintain electroneutrality across the membrane' },
        { id: 'b', text: 'To activate carbonic anhydrase' },
        { id: 'c', text: 'To buffer hydrogen ions' },
        { id: 'd', text: 'To prevent haemolysis' },
      ],
      answerId: 'a',
      explanation: 'The chloride shift. As the anion HCO₃⁻ exits via the band 3 exchanger, Cl⁻ must enter to preserve electroneutrality, which also draws in a little water and slightly raises venous haematocrit.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCo2TransportHaldane;
