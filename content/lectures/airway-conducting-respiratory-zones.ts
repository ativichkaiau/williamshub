import type { Lecture } from '../../lib/types';
import { AIRWAY_ZONES } from '../../lib/figures';

export const airwayConductingRespiratoryZones: Lecture = {
  id: 'airway-conducting-respiratory-zones',
  title: 'Airways: Conducting vs Respiratory Zones',
  system: 'respiratory',
  source: 'L2 — Structure of the Respiratory System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L2 Respiratory Structure' },
    { kind: 'mechanism', label: 'Tracheobronchial tree' },
    { kind: 'exam', label: 'Dead space · epithelium' },
  ],

  highYield: [
    '**The airways divide into two functional zones.** The **conducting zone** moves and conditions air but does **NO gas exchange** = the **anatomical dead space (~150 mL)**: nose/pharynx/larynx → **trachea → primary (main) → secondary (lobar) → tertiary (segmental) bronchi → bronchioles → terminal bronchioles**. The **respiratory zone** does gas exchange: **respiratory bronchioles → alveolar ducts → alveolar sacs → alveoli**.',
    '**Epithelium changes down the tree.** Upper conducting airways = **pseudostratified ciliated columnar epithelium with goblet cells** (the "respiratory epithelium"); this thins to **simple columnar → simple cuboidal** in bronchioles, where goblet cells disappear and **club (Clara) cells** appear (secrete protective surfactant-like fluid, detoxify, act as stem cells).',
    '**Wall composition changes too:** as you descend, **cartilage decreases** (C-shaped rings in the trachea → irregular plates in bronchi → NONE in bronchioles) and **smooth muscle becomes relatively more prominent** — which is why **bronchioles (no cartilage to hold them open) collapse/constrict in asthma**.',
    '**The mucociliary escalator** clears the airways: **goblet cells + submucosal glands secrete mucus** that traps particles, and **cilia beat it upward** to the pharynx to be swallowed. **Smoking paralyses cilia** → impaired clearance and recurrent infection.',
    '**Anatomical vs physiological dead space.** Anatomical = the conducting-airway volume. **Physiological dead space = anatomical + alveolar dead space** (alveoli ventilated but not perfused). Only air reaching perfused alveoli participates in gas exchange, so **alveolar ventilation = (tidal volume − dead space) × rate**.',
  ],

  mechanism: {
    title: 'Conduct + condition, then exchange',
    steps: [
      { id: 's1', label: 'Conducting zone (to terminal bronchioles) = dead space, no exchange', emphasis: 'key' },
      { id: 's2', label: 'Respiratory zone (respiratory bronchiole → alveoli) = gas exchange', emphasis: 'key' },
      { id: 's3', label: 'Epithelium: pseudostratified ciliated + goblet → cuboidal + club cells' },
      { id: 's4', label: 'Cartilage ↓, smooth muscle relatively ↑ distally (asthma)', emphasis: 'key' },
      { id: 's5', label: 'Mucociliary escalator clears debris; smoking paralyses cilia' },
    ],
  },

  examFindings: [
    { sign: 'Pseudostratified ciliated columnar + goblet cells', mechanism: 'Respiratory epithelium (upper conducting airway)', significance: 'key' },
    { sign: 'Terminal bronchiole = last conducting airway', mechanism: 'Respiratory bronchiole is the first with alveoli', significance: 'key' },
    { sign: 'Bronchioles constrict in asthma', mechanism: 'No cartilage + smooth muscle → collapsible', significance: 'key' },
    { sign: 'Club (Clara) cells in bronchioles', mechanism: 'Secretory/detox/stem cells (no goblet cells here)', significance: 'supportive' },
    { sign: 'Anatomical dead space ~150 mL', mechanism: 'Conducting-zone volume (no exchange)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Airway volume that does no gas exchange', meaning: 'Anatomical dead space (conducting zone)' },
    { clue: 'First airway generation with alveoli', meaning: 'Respiratory bronchiole' },
    { clue: 'Cell replacing goblet cells in bronchioles', meaning: 'Club (Clara) cell' },
    { clue: 'Why smokers get recurrent airway infections', meaning: 'Cilia paralysed → impaired mucociliary clearance' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Airway structure explains asthma/COPD (bronchiolar constriction, mucus), the mucociliary defence, and dead-space ventilation. The gas-exchange surface at the end of the tree: [[alveoli-pneumocytes-respiratory-membrane]]; ventilation calculations: [[lung-volumes-ventilation]]. Overlaps BHCB epithelium.' },
  ],

  mnemonics: [
    { hook: 'Tree: "Trachea → main → lobar → segmental → bronchioles → terminal → RESPIRATORY bronchiole (exchange starts)"', expansion: ['Terminal = last conducting'] },
    { hook: 'Going down: Cartilage ↓, cilia/goblet →club, smooth muscle relatively ↑', expansion: ['Bronchioles collapsible = asthma'] },
  ],

  traps: [
    {
      questionCategory: 'Where does gas exchange begin?',
      wrongInstinct: 'Gas exchange occurs throughout the conducting airways including the terminal bronchioles',
      rightAnswer: 'Gas exchange begins at the RESPIRATORY bronchioles (first structures with alveoli); the terminal bronchiole is the LAST purely conducting airway',
      why: 'The conducting zone (to terminal bronchioles) is dead space — no alveoli, no exchange. Alveoli first appear on respiratory bronchioles.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which is the last, most distal airway of the CONDUCTING zone (no gas exchange)?',
      options: [
        { id: 'a', text: 'Respiratory bronchiole' },
        { id: 'b', text: 'Terminal bronchiole' },
        { id: 'c', text: 'Alveolar duct' },
        { id: 'd', text: 'Segmental bronchus' },
      ],
      answerId: 'b',
      explanation: 'The terminal bronchiole is the last conducting airway; the next generation, the respiratory bronchiole, is the first with alveoli and thus the start of the respiratory (gas-exchange) zone.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Why do the bronchioles (rather than the bronchi) narrow markedly in an asthma attack?',
      options: [
        { id: 'a', text: 'They have thick cartilage rings' },
        { id: 'b', text: 'They lack cartilage and have relatively prominent smooth muscle, so are collapsible/constrictable' },
        { id: 'c', text: 'They contain no epithelium' },
        { id: 'd', text: 'They are part of the respiratory zone' },
      ],
      answerId: 'b',
      explanation: 'Bronchioles have no cartilage to splint them open and relatively more smooth muscle, so bronchoconstriction (asthma) narrows them substantially, increasing airway resistance.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Conducting vs respiratory zones', svg: AIRWAY_ZONES, caption: 'Conducting zone (to terminal bronchioles) = dead space, no exchange; respiratory zone (respiratory bronchiole→alveoli) = gas exchange. Epithelium/cartilage change distally.' },
  ],
};

export default airwayConductingRespiratoryZones;
