import type { Lecture } from '../../lib/types';

export const ghpOxygenTransportHaemoglobin: Lecture = {
  id: 'ghp-oxygen-transport-haemoglobin',
  title: 'Oxygen Transport & Delivery',
  system: 'respiratory',
  source: 'Ch 40 — Transport of Oxygen & Carbon Dioxide in Blood',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 40 O₂ & CO₂ Transport' },
    { kind: 'mechanism', label: 'Content vs saturation vs PO₂' },
    { kind: 'exam', label: 'Delivery & extraction' },
  ],

  highYield: [
    '**Almost all oxygen travels bound to haemoglobin; dissolved oxygen is negligible and that is why haemoglobin exists.** Only about **0.3 mL/dL** dissolves, against roughly **20 mL/dL** carried bound — some **98–99%** of the total. Without haemoglobin, a resting cardiac output would have to rise implausibly to meet demand.',
    '**Keep content, saturation and partial pressure strictly separate — most errors here are category errors.** **PO₂** is the driving pressure of dissolved gas. **Saturation** is the percentage of binding sites occupied. **Content** is the actual quantity carried, and only content includes haemoglobin concentration: **CaO₂ ≈ (1.34 × Hb × SaO₂) + (0.003 × PaO₂)**. In anaemia PO₂ and saturation can both be perfectly normal while content is halved.',
    '**Delivery is content × cardiac output, so there are three independent ways to fail.** Roughly **1000 mL/min** is delivered at rest against about **250 mL/min** consumed — a fourfold reserve. Failure can come from low **saturation** (hypoxic), low **haemoglobin** (anaemic), or low **flow** (stagnant), and each is corrected differently.',
    '**Extraction is the second lever, and it explains why venous saturation is such a useful number.** At rest only about **25%** of delivered oxygen is extracted, leaving mixed venous saturation near **75%**. In exercise extraction rises toward **75–85%** and venous saturation falls. A **falling** mixed venous saturation therefore signals that delivery is no longer meeting demand.',
    '**Cooperativity is what makes the system work at both ends.** Binding at one haem site increases affinity at the next, producing the **sigmoid** curve. The **flat upper portion** protects loading — arterial saturation stays high even if PaO₂ falls substantially — while the **steep middle portion** allows large unloading in tissue for a small fall in PO₂. Myoglobin, being monomeric, has a hyperbolic curve and holds oxygen until PO₂ is very low.',
    '**The flat top is why saturation is a poor early warning of deteriorating gas exchange.** PaO₂ can fall from **100 to 60 mmHg** while saturation only drops from about **97% to 90%** — beyond that the curve steepens and saturation falls fast. Reading arterial gases alongside the pulse oximeter is what reveals the earlier deterioration, as handled in [[abg-acid-base-interpretation]].',
  ],

  mechanism: {
    title: 'Load in the lung, unload in the tissue',
    steps: [
      { id: 's1', label: 'Alveolar PO₂ ~104 drives oxygen into plasma, then onto haemoglobin', emphasis: 'key' },
      { id: 's2', label: 'Cooperative binding: each bound O₂ raises affinity at the next site', emphasis: 'key' },
      { id: 's3', label: 'Flat upper curve secures near-full loading despite PaO₂ variation' },
      { id: 's4', label: 'Content = (1.34 × Hb × SaO₂) + dissolved; delivery = content × cardiac output', emphasis: 'key' },
      { id: 's5', label: 'Tissue PO₂ ~40 sits on the steep portion → large unloading' },
      { id: 's6', label: 'Extraction rises from ~25% at rest toward ~75% in exercise' },
    ],
  },

  examFindings: [
    { sign: 'Normal saturation and PaO₂ with symptomatic anaemia', mechanism: 'Content is reduced although saturation and partial pressure are normal', significance: 'key' },
    { sign: 'Falling mixed venous oxygen saturation in shock', mechanism: 'Increased extraction as delivery fails to meet demand', significance: 'key' },
    { sign: 'Saturation still 90% with a PaO₂ of only 60 mmHg', mechanism: 'The flat upper portion of the sigmoid curve', significance: 'key' },
    { sign: 'Rapid desaturation once PaO₂ falls below 60 mmHg', mechanism: 'The curve steepens sharply below this point', significance: 'key' },
    { sign: 'Cyanosis appearing late in an anaemic patient', mechanism: 'Cyanosis depends on absolute deoxygenated haemoglobin, not on saturation', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Normal SaO₂ with a low haemoglobin', meaning: 'Anaemic hypoxia — content is the problem' },
    { clue: 'Low mixed venous saturation with a normal arterial value', meaning: 'Inadequate delivery relative to demand' },
    { clue: 'High mixed venous saturation in septic shock', meaning: 'Impaired peripheral extraction despite adequate delivery' },
    { clue: 'Pulse oximetry normal with a markedly abnormal arterial gas', meaning: 'The flat curve masking a substantial PaO₂ fall' },
    { clue: 'Calculated oxygen delivery low despite normal saturation', meaning: 'Low haemoglobin or low cardiac output' },
  ],

  treatment: [
    {
      logic: 'Identify which term of the delivery equation has failed',
      detail: 'Delivery is **content × flow**, and content depends on **haemoglobin and saturation**. Oxygen corrects saturation, transfusion corrects haemoglobin, and circulatory support corrects flow — giving oxygen to an anaemic patient with a normal saturation achieves almost nothing.',
    },
    {
      logic: 'Track mixed venous saturation as a measure of adequacy',
      detail: 'Because extraction rises when delivery falls short, a **falling** venous saturation is an early sign of inadequate delivery. A paradoxically **high** value with shock suggests impaired extraction rather than adequate perfusion.',
    },
  ],

  mnemonics: [
    { hook: 'Content carries, saturation only reports', expansion: ['PO₂ = driving pressure', 'SaO₂ = % sites filled', 'CaO₂ = the amount actually carried — includes Hb'] },
    { hook: 'Flat on top, steep in the middle', expansion: ['Flat: secure loading in the lung', 'Steep: generous unloading in tissue'] },
  ],

  traps: [
    {
      questionCategory: 'Anaemia and saturation',
      wrongInstinct: 'A normal oxygen saturation excludes inadequate oxygen carriage',
      rightAnswer: 'Saturation is a percentage of available sites; halving haemoglobin halves content at 100% saturation',
      why: 'Only content includes haemoglobin concentration',
    },
    {
      questionCategory: 'Oximetry as an early warning',
      wrongInstinct: 'A normal saturation means gas exchange is unimpaired',
      rightAnswer: 'PaO₂ can fall from 100 to 60 mmHg while saturation only falls to about 90%',
      why: 'The upper curve is flat, so saturation is a late and insensitive marker',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with haemoglobin 6 g/dL has SaO₂ 99% and PaO₂ 98 mmHg but is symptomatically hypoxic. Why?',
      options: [
        { id: 'a', text: 'The oxyhaemoglobin curve has shifted leftward' },
        { id: 'b', text: 'Oxygen content is roughly halved because content depends on haemoglobin concentration' },
        { id: 'c', text: 'Dissolved oxygen is inadequate' },
        { id: 'd', text: 'Peripheral extraction has failed' },
      ],
      answerId: 'b',
      explanation: 'Saturation reports the proportion of available binding sites occupied, not how many sites exist. With half the normal haemoglobin, content is roughly halved despite a perfect saturation — anaemic hypoxia, correctable by transfusion rather than oxygen.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Approximately what proportion of delivered oxygen is extracted by tissues at rest?',
      options: [
        { id: 'a', text: 'About 25%, leaving mixed venous saturation near 75%' },
        { id: 'b', text: 'About 70%, leaving mixed venous saturation near 30%' },
        { id: 'c', text: 'About 95%' },
        { id: 'd', text: 'About 5%' },
      ],
      answerId: 'a',
      explanation: 'Roughly 1000 mL/min is delivered against about 250 mL/min consumed, so extraction is around 25% and mixed venous saturation about 75%. That reserve is what exercise draws on, with extraction rising toward 75–85%.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Why is pulse oximetry an insensitive early marker of deteriorating gas exchange?',
      options: [
        { id: 'a', text: 'It cannot detect saturations above 90%' },
        { id: 'b', text: 'The upper part of the oxyhaemoglobin curve is flat, so large PaO₂ falls cause small saturation changes' },
        { id: 'c', text: 'It measures dissolved oxygen only' },
        { id: 'd', text: 'It is affected by carbon dioxide levels' },
      ],
      answerId: 'b',
      explanation: 'Because of the sigmoid shape, PaO₂ can fall from 100 to 60 mmHg while saturation drops only from about 97% to 90%. Below 60 mmHg the curve steepens and saturation then falls rapidly — so oximetry flags deterioration late.',
      tests: 'investigation',
    },
  ],
};

export default ghpOxygenTransportHaemoglobin;
