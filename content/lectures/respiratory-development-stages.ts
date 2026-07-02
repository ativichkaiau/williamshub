import type { Lecture } from '../../lib/types';
import { RESPIRATORY_DEVELOPMENT } from '../../lib/figures';

export const respiratoryDevelopmentStages: Lecture = {
  id: 'respiratory-development-stages',
  title: 'Development of the Respiratory System: The 5 Stages',
  system: 'respiratory',
  source: 'L1 — Development of the Respiratory System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L1 Respiratory Development' },
    { kind: 'mechanism', label: 'Lung bud → alveoli' },
    { kind: 'exam', label: 'Stages · surfactant timing' },
  ],

  highYield: [
    '**The lung begins as the respiratory diverticulum (lung bud)** — an outgrowth of the **foregut endoderm** (~week 4). The **endoderm** forms the **epithelial lining** of the airways and alveoli; the surrounding **splanchnic mesoderm** forms the **cartilage, smooth muscle, connective tissue, and blood vessels**.',
    '**The bud divides into two bronchial buds → the branching tree.** The **trachea and oesophagus separate** via the **tracheo-oesophageal septum**; the larynx derives from the **4th and 6th pharyngeal arches**.',
    '**Five stages (memorise the order): Embryonic → Pseudoglandular → Canalicular → Saccular → Alveolar.** **Pseudoglandular (wk 5–17):** all conducting airways to the terminal bronchioles form — **but no respiration is possible yet** (a fetus born now cannot survive). **Canalicular (wk 16–26):** respiratory bronchioles + vascularisation → **the barrier thins enough that gas exchange becomes possible near its end (~24 wk = viability threshold).**',
    '**Saccular (wk 26–birth):** terminal sacs form and **type II pneumocytes begin producing surfactant** (adequate amounts ~wk 35). **Alveolar (wk 32 → ~8 years):** true mature alveoli form and multiply — **most alveoli form AFTER birth**.',
    '**Surfactant is the key clinical milestone.** Produced by **type II pneumocytes**, it lowers alveolar surface tension. Premature birth before adequate surfactant → **neonatal respiratory distress syndrome (RDS)** — managed by antenatal corticosteroids (accelerate surfactant) and exogenous surfactant.',
  ],

  mechanism: {
    title: 'Endoderm bud → branch → thin → surfactant → alveoli',
    steps: [
      { id: 's1', label: 'Lung bud from foregut endoderm (wk 4); mesoderm = vessels/muscle', emphasis: 'key' },
      { id: 's2', label: 'Pseudoglandular: airways to terminal bronchioles (no respiration)', emphasis: 'key' },
      { id: 's3', label: 'Canalicular: respiratory bronchioles + vessels → viability ~24 wk', emphasis: 'key' },
      { id: 's4', label: 'Saccular: type II cells make surfactant (~24–35 wk)', emphasis: 'key' },
      { id: 's5', label: 'Alveolar: mature alveoli multiply (mostly after birth)' },
    ],
  },

  examFindings: [
    { sign: 'Airway epithelium from endoderm; cartilage/muscle from mesoderm', mechanism: 'Dual embryonic origin of the lung', significance: 'key' },
    { sign: 'Fetus at 20 weeks cannot breathe', mechanism: 'Pseudoglandular — no gas-exchange surface yet', significance: 'key' },
    { sign: 'Viability threshold ~24 weeks', mechanism: 'Canalicular — thin barrier + early surfactant', significance: 'key' },
    { sign: 'Preterm neonate with RDS', mechanism: 'Insufficient surfactant (type II pneumocytes)', significance: 'key' },
    { sign: 'Most alveoli form after birth', mechanism: 'Alveolar stage continues to ~8 years', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Germ layer forming the respiratory epithelium', meaning: 'Endoderm (foregut)' },
    { clue: 'Stage when conducting airways complete but no respiration', meaning: 'Pseudoglandular' },
    { clue: 'Cell producing surfactant', meaning: 'Type II pneumocyte' },
    { clue: 'Approximate age of viability', meaning: '~24 weeks (canalicular stage)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The timeline explains prematurity outcomes and RDS management (antenatal steroids, surfactant). Faulty foregut septation/branching → congenital anomalies ([[respiratory-congenital-anomalies]]). Alveolar histology: [[alveoli-pneumocytes-respiratory-membrane]].' },
  ],

  mnemonics: [
    { hook: 'Stages: "Every Pulmonologist Can See Alveoli" (Embryonic, Pseudoglandular, Canalicular, Saccular, Alveolar)', expansion: ['Surfactant appears in saccular'] },
    { hook: 'Endoderm = lining (epithelium); Mesoderm = the rest (vessels, cartilage, muscle)', expansion: ['Foregut origin'] },
  ],

  traps: [
    {
      questionCategory: 'When do most alveoli form?',
      wrongInstinct: 'The lungs contain their full adult complement of alveoli at birth',
      rightAnswer: 'Most alveoli form AFTER birth (the alveolar stage continues to ~8 years); a newborn has only a fraction of the adult number',
      why: 'Alveolarisation is largely postnatal, which is why early-life lung injury has lasting effects on alveolar number.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Surfactant, essential for extrauterine survival, is first produced in significant amounts during which stage of lung development?',
      options: [
        { id: 'a', text: 'Pseudoglandular' },
        { id: 'b', text: 'Embryonic' },
        { id: 'c', text: 'Saccular (terminal sac)' },
        { id: 'd', text: 'Canalicular (only)' },
      ],
      answerId: 'c',
      explanation: 'Type II pneumocytes begin producing surfactant in the saccular stage (~wk 26 onward), reaching adequate levels ~wk 35. Its deficiency in prematurity causes neonatal RDS.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'The epithelial lining of the trachea, bronchi, and alveoli is derived embryologically from:',
      options: [
        { id: 'a', text: 'Splanchnic mesoderm' },
        { id: 'b', text: 'Foregut endoderm' },
        { id: 'c', text: 'Neural crest' },
        { id: 'd', text: 'Ectoderm' },
      ],
      answerId: 'b',
      explanation: 'The respiratory epithelium arises from foregut endoderm (the lung bud); the surrounding cartilage, smooth muscle, connective tissue, and vessels come from splanchnic mesoderm.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Lung development stages', svg: RESPIRATORY_DEVELOPMENT, caption: 'Lung bud (foregut endoderm) → Embryonic/Pseudoglandular/Canalicular/Saccular/Alveolar; surfactant appears in the saccular stage; viability ~24 wk.' },
  ],
};

export default respiratoryDevelopmentStages;
