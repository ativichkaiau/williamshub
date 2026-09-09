import type { Lecture } from '../../lib/types';

export const ghpPulmonaryOedemaPleuralFluid: Lecture = {
  id: 'ghp-pulmonary-oedema-pleural-fluid',
  title: 'Pulmonary Oedema & Pleural Fluid',
  system: 'respiratory',
  source: 'Ch 38 — Pulmonary Circulation, Pulmonary Edema & Pleural Fluid',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'Ch 38 Pulmonary Circulation' },
    { kind: 'mechanism', label: 'Starling forces in the lung' },
    { kind: 'disease', label: 'Cardiogenic versus permeability oedema' },
  ],

  highYield: [
    '**The lung runs its Starling equation with different numbers from the rest of the body.** Outward forces: **pulmonary capillary pressure ~7 mmHg**, **interstitial fluid colloid osmotic pressure ~14 mmHg** (high, because pulmonary capillaries leak protein more freely than systemic ones), and a **negative interstitial fluid pressure of about −8 mmHg**, which also pulls outward — total **~29 mmHg**. Inward: **plasma colloid osmotic pressure 28 mmHg**. **Net filtration pressure is only about +1 mmHg**, so there is a small continuous filtration that the lymphatics carry away.',
    '**That negative interstitial pressure is what keeps the alveoli dry.** The subatmospheric interstitium continuously **sucks fluid out of the alveolar spaces** through the epithelial junctions and into the lymphatics; the alveolar surface is kept as a thin film rather than a puddle. When the interstitium fills and its pressure turns **positive**, the suction reverses and fluid floods the alveoli — which is why **interstitial oedema always precedes alveolar oedema**, and why the chest film shows septal (Kerley B) lines and peribronchial cuffing before it shows consolidation.',
    '**The safety factor is about 21 mmHg — and knowing it makes the thresholds obvious.** Because the inward pull is 28 mmHg and the capillary starts at 7 mmHg, **pulmonary capillary pressure must climb to roughly 28 mmHg before net filtration overwhelms removal**. Since capillary pressure tracks left atrial pressure, acute **left atrial pressures above about 25 mmHg** produce oedema and pressures near **30 mmHg** can flood the lungs within half an hour. **Chronic elevation buys tolerance**: in long-standing mitral stenosis the pulmonary lymphatics hypertrophy up to **tenfold**, and patients stay dry at left atrial pressures of **40 to 45 mmHg**.',
    '**Cardiogenic versus permeability oedema is a two-term problem, and the fluid tells you which.** **Cardiogenic (hydrostatic)**: the Pc term is raised, the barrier is intact, so the fluid is a protein-poor **transudate** with an **oedema-fluid to plasma protein ratio below 0.6**, a **raised wedge pressure**, cardiomegaly, upper-lobe blood diversion, a perihilar bat-wing pattern and pleural effusions. **Increased permeability (ARDS)**: Kf and protein leak are raised, so the fluid is a protein-rich **exudate** with a ratio **above 0.7**, a **normal wedge pressure**, no cardiomegaly and patchy peripheral infiltrates. Only the first responds to diuretics and preload reduction.',
    '**Pleural fluid is a modified interstitial space, not a third compartment.** Only a **few millilitres** of protein-poor mucoid fluid separate the pleurae, enough to let them slide. It is filtered mainly from **parietal pleural capillaries** and removed by the **lymphatics of the mediastinal, diaphragmatic and lateral parietal pleura**, whose pumping keeps the **pleural fluid pressure at about −7 mmHg**. That continuous suction is what holds the visceral and parietal layers apposed and couples the lung to the chest wall — the mechanism that a pneumothorax destroys.',
    '**An effusion is oedema of the pleural cavity, and it fails by the same four routes.** **Raised capillary pressure** (heart failure), **fallen plasma colloid osmotic pressure** (nephrotic syndrome, cirrhosis), **raised permeability** (infection, malignancy, pulmonary infarction) or **blocked lymphatic drainage** (malignant node infiltration). The bedside translation is the **Light criteria**: an exudate if the **pleural to serum protein ratio exceeds 0.5**, the **pleural to serum LDH ratio exceeds 0.6**, or the **pleural LDH exceeds two-thirds of the upper limit of normal serum LDH**. Any one criterion is enough.',
  ],

  mechanism: {
    title: 'A +1 mmHg filtration held in check by lymphatics — until a Starling term breaks',
    steps: [
      { id: 's1', label: 'Low pulmonary capillary pressure of ~7 mmHg against a plasma oncotic pull of 28 mmHg' },
      { id: 's2', label: 'Leaky pulmonary capillaries give a high interstitial oncotic pressure of ~14 mmHg' },
      { id: 's3', label: 'Net filtration is only ~+1 mmHg; lymphatics remove it and keep interstitial pressure negative', emphasis: 'key' },
      { id: 's4', label: 'A safety factor of ~21 mmHg must be spent before oedema appears', emphasis: 'key' },
      { id: 's5', label: 'Interstitium fills first: pressure turns positive, septal lines and cuffing appear' },
      { id: 's6', label: 'Alveolar flooding follows — frothy sputum, shunt and refractory hypoxaemia', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Bilateral basal crepitations with a third heart sound and raised jugular venous pressure', mechanism: 'Raised left atrial and therefore pulmonary capillary pressure overwhelming the safety factor', significance: 'key' },
    { sign: 'Pink frothy sputum with orthopnoea and paroxysmal nocturnal dyspnoea', mechanism: 'Alveolar flooding once interstitial pressure turns positive; recumbency redistributes blood into the thorax', significance: 'key' },
    { sign: 'Diffuse infiltrates with refractory hypoxaemia and a normal wedge pressure after sepsis', mechanism: 'Increased-permeability oedema — the barrier fails while hydrostatic pressure is normal', significance: 'key' },
    { sign: 'Stony dull percussion note with absent breath sounds and reduced vocal resonance at a lung base', mechanism: 'Pleural fluid accumulating when formation outstrips lymphatic removal', significance: 'key' },
    { sign: 'A patient with long-standing mitral stenosis tolerating pressures that would flood a normal lung', mechanism: 'Chronic lymphatic hypertrophy raises the safety factor toward 40 to 45 mmHg', significance: 'supportive' },
    { sign: 'Hyperresonance with absent breath sounds and a tracheal shift away from the affected side', mechanism: 'Tension pneumothorax: pleural pressure becomes positive, collapsing the lung and obstructing venous return', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Net pulmonary filtration pressure of about +1 mmHg', meaning: 'The normal balance — slight continuous filtration cleared by lymphatics' },
    { clue: 'Interstitial fluid colloid osmotic pressure of about 14 mmHg in the lung', meaning: 'Pulmonary capillaries are relatively permeable to protein, unlike most systemic beds' },
    { clue: 'Kerley B lines and peribronchial cuffing without consolidation', meaning: 'Interstitial phase of oedema, before alveolar flooding' },
    { clue: 'Oedema fluid to plasma protein ratio below 0.6 with a raised wedge pressure', meaning: 'Cardiogenic hydrostatic oedema — a transudate' },
    { clue: 'Oedema fluid to plasma protein ratio above 0.7 with a normal wedge pressure', meaning: 'Increased-permeability oedema, the ARDS pattern' },
    { clue: 'Pleural to serum protein ratio above 0.5 or pleural to serum LDH ratio above 0.6', meaning: 'An exudate by the Light criteria — think infection, malignancy or infarction' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Naming the deranged Starling term chooses the treatment. Raised capillary pressure responds to preload reduction, nitrates, diuresis and treatment of the underlying left heart lesion; raised permeability does not, and is managed by treating the precipitant with lung-protective ventilation and PEEP while the barrier heals. The safety factor also explains why oedema is a threshold phenomenon rather than a gradual one, and why a chronically congested patient decompensates at pressures a naive lung could not survive. The circulation generating those pressures is in [[ghp-pulmonary-circulation-zones]].' },
    { logic: 'Bedside payoff', detail: 'It tells you why oxygenation fails so abruptly once the interstitium saturates, why positive-pressure ventilation helps by opposing transudation as well as recruiting alveoli, and why an effusion is analysed with the Light criteria rather than guessed at. The clinical syndromes sit in [[pulmonary-embolism-edema]] and [[ards-pulmonary-hypertension-atelectasis]]; the pleural anatomy in [[pleura-pleural-cavity]]; the effusion and pneumothorax differentials in [[pleural-effusion-pneumothorax-mesothelioma]].' },
  ],

  mnemonics: [
    { hook: 'Twenty-one to spend', expansion: ['Capillary starts at 7, plasma oncotic pull is 28', 'So about 21 mmHg of safety factor must be used up first', 'Chronic disease enlarges the lymphatics and raises the ceiling to 40 to 45'] },
    { hook: 'Protein tells the story', expansion: ['Low protein fluid with a high wedge pressure = cardiogenic transudate', 'High protein fluid with a normal wedge pressure = permeability oedema', 'In the pleura, the same question is answered by the Light criteria'] },
  ],

  traps: [
    {
      questionCategory: 'Direction of interstitial hydrostatic pressure in the lung',
      wrongInstinct: 'Pulmonary interstitial pressure is positive and therefore opposes filtration out of the capillary',
      rightAnswer: 'It is about −8 mmHg, so it adds to the outward forces and actively keeps alveoli dry by suction',
      why: 'When that pressure turns positive the suction is lost and alveolar flooding begins — the transition from interstitial to alveolar oedema.',
    },
    {
      questionCategory: 'Cardiogenic versus permeability oedema',
      wrongInstinct: 'Diffuse bilateral infiltrates with severe hypoxaemia mean heart failure, so give diuretics',
      rightAnswer: 'Check the wedge pressure and the oedema fluid protein: a normal wedge with protein-rich fluid is ARDS',
      why: 'Only the hydrostatic form responds to preload reduction; diuresing a permeability oedema simply causes hypovolaemia.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Using the standard pulmonary values — capillary pressure 7 mmHg, interstitial fluid pressure −8 mmHg, interstitial colloid osmotic pressure 14 mmHg and plasma colloid osmotic pressure 28 mmHg — the net filtration pressure is approximately:',
      options: [
        { id: 'a', text: '+1 mmHg, giving slight continuous filtration cleared by lymphatics' },
        { id: 'b', text: '−7 mmHg, giving continuous net reabsorption' },
        { id: 'c', text: '+15 mmHg, which is why the lung is normally wet' },
        { id: 'd', text: 'Zero, since the lung neither filters nor reabsorbs' },
      ],
      answerId: 'a',
      explanation: 'Outward forces are 7 plus 8 plus 14 = 29 mmHg and the only inward force is the 28 mmHg plasma colloid osmotic pressure, so net filtration is about +1 mmHg — a small continuous leak that the lymphatics remove. Note the negative interstitial pressure counts as an outward force, which is the step most often reversed in error.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'A patient with severe sepsis develops diffuse bilateral infiltrates and refractory hypoxaemia. The pulmonary artery wedge pressure is 10 mmHg and the oedema fluid to plasma protein ratio is 0.85. The diagnosis is:',
      options: [
        { id: 'a', text: 'Cardiogenic pulmonary oedema from septic cardiomyopathy' },
        { id: 'b', text: 'Increased-permeability pulmonary oedema (ARDS)' },
        { id: 'c', text: 'Pulmonary oedema from a fall in plasma colloid osmotic pressure alone' },
        { id: 'd', text: 'Bilateral pleural effusions from lymphatic obstruction' },
      ],
      answerId: 'b',
      explanation: 'A normal wedge pressure excludes a hydrostatic cause, and a protein ratio above 0.7 shows the barrier is leaking protein, which defines permeability oedema. Diuretics and preload reduction will not fix this; management is treating the precipitant with lung-protective ventilation.',
      tests: 'disease',
    },
    {
      id: 'q3',
      stem: 'A patient with mitral stenosis of many years has a left atrial pressure of 35 mmHg but no pulmonary oedema, while an acute anterior myocardial infarction with the same left atrial pressure floods the lungs. The best explanation is:',
      options: [
        { id: 'a', text: 'Plasma colloid osmotic pressure rises in chronic mitral stenosis' },
        { id: 'b', text: 'Pulmonary lymphatic hypertrophy raises the safety factor in chronic disease' },
        { id: 'c', text: 'Chronic mitral stenosis lowers the pulmonary capillary permeability to water' },
        { id: 'd', text: 'The right ventricle fails first, so the pulmonary capillaries are protected from the pressure' },
      ],
      answerId: 'b',
      explanation: 'Chronically elevated pressures enlarge the pulmonary lymphatics up to tenfold, so removal capacity rises and patients stay dry at left atrial pressures of 40 to 45 mmHg, whereas the acute lung has only its usual 21 mmHg of safety factor. Option d confuses a late consequence with a protective mechanism and does not explain the absence of oedema at a capillary pressure this high.',
      tests: 'mechanism',
    },
  ],
};

export default ghpPulmonaryOedemaPleuralFluid;
