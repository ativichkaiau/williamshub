import type { Lecture } from '../../lib/types';

export const ghpSurfactantCompliance: Lecture = {
  id: 'ghp-surfactant-compliance',
  title: 'Surfactant, Surface Tension & Compliance',
  system: 'respiratory',
  source: 'Ch 37 — Pulmonary Ventilation',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 37 Pulmonary Ventilation' },
    { kind: 'mechanism', label: 'Laplace law and alveolar stability' },
    { kind: 'disease', label: 'Neonatal respiratory distress syndrome' },
  ],

  highYield: [
    '**Two-thirds of the recoil of the lung is surface tension, not elastic tissue.** Fill a lung with **saline** and abolish the air-liquid interface and it becomes roughly **three times more distensible**, and its pressure-volume loop loses most of its **hysteresis**. So the dominant force trying to collapse your alveoli at every moment is not the elastin and collagen of the parenchyma — it is a film of water lining 300 million alveoli, and the lung must neutralise it.',
    '**Laplace: P = 2T / r — and the r in the denominator is the problem.** For a given surface tension, a **small alveolus generates a higher collapsing pressure than a large one**. If tension were constant, small alveoli would empty into their larger neighbours and the lung would degenerate into a few giant sacs and widespread atelectasis. With pure water at ~**72 dynes/cm** the collapsing pressures would be unsurvivable; surface tension in the surfactant-lined alveolus is only about **5 to 30 dynes/cm**.',
    '**Surfactant defeats Laplace because its effect is concentration-dependent.** As an alveolus shrinks, the same number of surfactant molecules is packed into a smaller area, so the film becomes **denser and surface tension falls further** — offsetting the falling radius and keeping P = 2T/r roughly constant across alveoli of different sizes. This is the key that mere lubrication would not turn: **surfactant does not simply lower tension, it makes tension a function of alveolar size**, which is what stabilises small alveoli against large ones.',
    '**Composition and source are examinable facts.** Surfactant is secreted by **type II alveolar (granular) pneumocytes**, which occupy only about **10% of the alveolar surface area** but are the progenitors of type I cells and are relatively resistant to injury. It is stored in **lamellar bodies** and is roughly **90% lipid**, of which the surface-active component is **dipalmitoylphosphatidylcholine (DPPC)**, together with **surfactant apoproteins SP-A, SP-B, SP-C and SP-D** and **calcium ions**. **SP-B and SP-C** spread the film; **SP-A and SP-D** are collectins with an innate-immune role.',
    '**Compliance is ΔV/ΔP, and the numbers are worth holding.** The **lungs alone** in an adult have a compliance of about **200 mL/cmH₂O**; the **combined lung and thorax system** only about **110 mL/cmH₂O**, because the chest wall must be distended too. By raising compliance roughly **threefold** and lowering the elastic work of each breath, surfactant also **keeps the alveoli dry**: unopposed surface tension pulls fluid out of the capillaries into the alveolus, so surfactant deficiency causes both **atelectasis and transudation**.',
    '**Neonatal RDS is the natural experiment.** Type II cells begin secreting from about **week 24** with adequate amounts by **34 to 35 weeks**, so prematurity means stiff, low-compliance lungs, diffuse **atelectasis**, hyaline membranes, enormous work of breathing and right-to-left shunt. An **amniotic lecithin-to-sphingomyelin ratio of 2 or more** predicts maturity; **antenatal maternal glucocorticoids** accelerate it and **exogenous intratracheal surfactant** rescues it. Adult **ARDS** reproduces the same picture by inactivating surfactant with plasma proteins rather than by failing to make it.',
  ],

  mechanism: {
    title: 'Surface tension would collapse small alveoli — surfactant makes tension size-dependent',
    steps: [
      { id: 's1', label: 'A water film lines every alveolus and generates inward surface tension' },
      { id: 's2', label: 'Laplace: collapsing pressure = 2T/r, so smaller alveoli collapse harder', emphasis: 'key' },
      { id: 's3', label: 'Type II pneumocytes secrete DPPC-rich surfactant from lamellar bodies', emphasis: 'key' },
      { id: 's4', label: 'As the alveolus shrinks, the film packs denser and tension falls further', emphasis: 'key' },
      { id: 's5', label: 'P = 2T/r is equalised across alveolar sizes; small units stay open' },
      { id: 's6', label: 'Deficiency gives stiff lungs, atelectasis, transudation and huge work of breathing', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Preterm neonate with grunting, nasal flaring, retractions and a ground-glass chest film', mechanism: 'Surfactant deficiency: low compliance, diffuse atelectasis and hyaline membranes; grunting is self-generated PEEP', significance: 'key' },
    { sign: 'Barrel chest with quiet breath sounds and a hyperinflated film', mechanism: 'Emphysema destroys elastin, raising compliance and abolishing the recoil that drives expiration', significance: 'key' },
    { sign: 'Fine end-inspiratory Velcro crackles with small lung fields and rapid shallow breathing', mechanism: 'Fibrosis lowers compliance, so the cheapest breathing pattern is small tidal volumes at a high rate', significance: 'key' },
    { sign: 'A pressure-volume loop with a markedly reduced slope', mechanism: 'Reduced compliance — more pressure needed for the same volume change', significance: 'key' },
    { sign: 'Hysteresis abolished when the excised lung is inflated with saline', mechanism: 'Removing the air-liquid interface removes the surface-tension component of recoil', significance: 'supportive' },
    { sign: 'Refractory hypoxaemia with diffuse infiltrates after sepsis or aspiration', mechanism: 'ARDS: plasma proteins flooding the alveolus inactivate existing surfactant', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Amniotic fluid lecithin to sphingomyelin ratio of 2 or more', meaning: 'Surfactant production is mature; RDS is unlikely' },
    { clue: 'Lung compliance of about 200 mL/cmH₂O versus 110 mL/cmH₂O for lung plus thorax', meaning: 'The chest wall must be distended as well, so the combined system is stiffer' },
    { clue: 'Saline-filled lung about three times more distensible than air-filled', meaning: 'Roughly two-thirds of lung recoil is surface tension rather than tissue elasticity' },
    { clue: 'Raised compliance with reduced elastic recoil pressure', meaning: 'Emphysema — floppy lungs that inflate easily and empty poorly' },
    { clue: 'Reduced compliance with preserved or raised recoil pressure', meaning: 'Restrictive fibrotic disease — stiff lungs that need high pressures' },
    { clue: 'Ground-glass opacification with air bronchograms in a preterm infant', meaning: 'Diffuse microatelectasis from surfactant deficiency' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Compliance dictates how the patient chooses to breathe and how you should ventilate them. In fibrosis, elastic work dominates, so patients settle on rapid shallow breaths and need pressure-limited strategies; in emphysema, resistive work and dynamic collapse dominate, so slow deep breathing and prolonged expiratory times are the answer. Antenatal glucocorticoids and intratracheal surfactant work by restoring the size-dependent tension that keeps small alveoli open. The pressures that these compliances translate into volume are in [[ghp-mechanics-of-ventilation]].' },
    { logic: 'Bedside payoff', detail: 'It explains grunting as physiological PEEP in the neonate, why alveolar flooding accompanies rather than merely follows surfactant loss, and why the type II pneumocyte is the cell to name in any alveolar-injury question. The cellular anatomy is in [[alveoli-pneumocytes-respiratory-membrane]]; the fetal timing in [[respiratory-development-stages]]; the adult syndrome of surfactant inactivation and atelectasis in [[ards-pulmonary-hypertension-atelectasis]]; and the two extremes of compliance in [[copd-emphysema-chronic-bronchitis]] and [[pulmonary-fibrosis-pneumoconioses]].' },
  ],

  mnemonics: [
    { hook: 'Small alveoli Squeeze harder', expansion: ['P = 2T/r, so a small radius means a big collapsing pressure', 'Without surfactant the small would empty into the large', 'Surfactant packs denser as the alveolus shrinks, so T falls with r'] },
    { hook: 'Type II makes DPPC in Lamellar bodies', expansion: ['Type II granular pneumocyte, about 10% of surface area', 'Dipalmitoylphosphatidylcholine plus SP-A to SP-D and calcium', 'Adequate from about 34 to 35 weeks; L/S ratio of 2 or more'] },
  ],

  traps: [
    {
      questionCategory: 'How surfactant prevents alveolar collapse',
      wrongInstinct: 'Surfactant simply lowers surface tension uniformly throughout the lung',
      rightAnswer: 'It lowers tension more in smaller alveoli, because the film concentrates as surface area falls',
      why: 'A uniform reduction would leave the 1/r term intact and small alveoli would still empty into large ones.',
    },
    {
      questionCategory: 'Direction of compliance change',
      wrongInstinct: 'Emphysema stiffens the lung, so compliance falls',
      rightAnswer: 'Emphysema destroys elastic tissue and raises compliance; it is fibrosis that lowers it',
      why: 'High compliance means easy inflation but poor recoil, which is exactly the emphysematous problem with expiration.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Two alveoli of different radius are connected to the same airway and lined by a film of constant surface tension. According to the law of Laplace, what happens?',
      options: [
        { id: 'a', text: 'Both remain the same size, because they share a common pressure' },
        { id: 'b', text: 'The smaller alveolus empties into the larger one' },
        { id: 'c', text: 'The larger alveolus empties into the smaller one' },
        { id: 'd', text: 'Both collapse completely, because surface tension always exceeds airway pressure' },
      ],
      answerId: 'b',
      explanation: 'With P = 2T/r and T held constant, the smaller radius generates the higher pressure, so gas flows from the small alveolus into the large one. Surfactant prevents this in the real lung by making tension fall as the alveolus shrinks, which equalises the pressures rather than by lubricating the surface.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A neonate born at 28 weeks develops grunting, retractions and a ground-glass chest radiograph. Which cell has failed, and what is its principal secretory product?',
      options: [
        { id: 'a', text: 'Type I pneumocyte, secreting mucin' },
        { id: 'b', text: 'Alveolar macrophage, secreting elastase' },
        { id: 'c', text: 'Type II pneumocyte, secreting dipalmitoylphosphatidylcholine' },
        { id: 'd', text: 'Clara (club) cell, secreting SP-A only' },
      ],
      answerId: 'c',
      explanation: 'Surfactant is made by type II granular pneumocytes and stored in lamellar bodies, with DPPC as the surface-active phospholipid. Type I pneumocytes are the thin gas-exchange lining cells and secrete no surfactant, and grunting in this infant is an attempt to generate expiratory positive pressure against the collapsing tendency.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'Pulmonary function testing shows a raised total lung capacity, a raised residual volume and increased lung compliance with reduced elastic recoil pressure. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Idiopathic pulmonary fibrosis' },
        { id: 'b', text: 'Emphysema' },
        { id: 'c', text: 'Kyphoscoliosis' },
        { id: 'd', text: 'Neonatal respiratory distress syndrome' },
      ],
      answerId: 'b',
      explanation: 'Destruction of alveolar elastin raises compliance and lowers recoil, so the lungs inflate easily, hyperinflate and trap gas. Fibrosis and kyphoscoliosis both reduce compliance and total lung capacity, and surfactant deficiency likewise produces stiff, low-compliance lungs rather than floppy ones.',
      tests: 'investigation',
    },
  ],
};

export default ghpSurfactantCompliance;
