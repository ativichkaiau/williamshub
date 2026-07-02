import type { Lecture } from '../../lib/types';

export const respiratoryCongenitalAnomalies: Lecture = {
  id: 'respiratory-congenital-anomalies',
  title: 'Congenital Respiratory Anomalies',
  system: 'respiratory',
  source: 'L1 — Development of the Respiratory System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L1 Respiratory Development' },
    { kind: 'mechanism', label: 'Faulty septation/branching' },
    { kind: 'exam', label: 'TE fistula · CDH' },
  ],

  highYield: [
    '**Tracheo-oesophageal fistula (TEF) + oesophageal atresia** result from **faulty partitioning of the foregut** by the tracheo-oesophageal septum. The commonest type = **oesophageal atresia with a distal TEF**. Presents with **polyhydramnios** (fetus can\'t swallow), then **choking/drooling and coughing on feeds**, and inability to pass a nasogastric tube; associated with **VACTERL**.',
    '**Congenital diaphragmatic hernia (CDH)** = failure of the **pleuroperitoneal membranes** to close (usually left-sided, **foramen of Bochdalek**) → **abdominal viscera herniate into the thorax → pulmonary hypoplasia** (the lung is compressed and cannot develop). Presents with respiratory distress, a scaphoid abdomen, and bowel sounds in the chest.',
    '**Pulmonary hypoplasia** = an incompletely developed, small lung — from anything that limits lung growth/space or fluid: **CDH, oligohydramnios (Potter sequence), or space-occupying lesions**. Amniotic fluid and fetal breathing movements are needed for normal lung growth.',
    '**Other lesions:** **congenital lung (bronchogenic) cysts** and **congenital pulmonary airway malformation (CPAM)** from abnormal bronchial budding; **pulmonary sequestration** (non-functioning lung tissue with an anomalous systemic arterial supply, not connected to the airway).',
    '**Neonatal respiratory distress syndrome (RDS)** = **surfactant deficiency** (immature type II pneumocytes in prematurity) → high alveolar surface tension → **diffuse alveolar collapse (atelectasis)** → "ground-glass" CXR, grunting, retractions. Prevented/treated by **antenatal corticosteroids** and **exogenous surfactant**.',
  ],

  mechanism: {
    title: 'Where development goes wrong → the anomaly',
    steps: [
      { id: 's1', label: 'Faulty foregut septation → TE fistula + oesophageal atresia', emphasis: 'key' },
      { id: 's2', label: 'Pleuroperitoneal membrane fails → CDH (Bochdalek, left)', emphasis: 'key' },
      { id: 's3', label: 'CDH / oligohydramnios → pulmonary hypoplasia', emphasis: 'key' },
      { id: 's4', label: 'Abnormal budding → lung cyst / CPAM / sequestration' },
      { id: 's5', label: 'Surfactant deficiency (prematurity) → neonatal RDS', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Polyhydramnios + choking/coughing on first feed', mechanism: 'Oesophageal atresia ± tracheo-oesophageal fistula', significance: 'key' },
    { sign: 'Scaphoid abdomen + bowel sounds in the chest', mechanism: 'Congenital diaphragmatic hernia (Bochdalek)', significance: 'key' },
    { sign: 'Small underdeveloped lung', mechanism: 'Pulmonary hypoplasia (CDH, oligohydramnios)', significance: 'supportive' },
    { sign: 'Preterm neonate: grunting, ground-glass CXR', mechanism: 'RDS (surfactant deficiency)', significance: 'key' },
    { sign: 'Lung mass with systemic arterial supply', mechanism: 'Pulmonary sequestration', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cannot pass a nasogastric tube in a drooling neonate', meaning: 'Oesophageal atresia (± TEF)' },
    { clue: 'Left-sided diaphragm defect with gut in the chest', meaning: 'Congenital diaphragmatic hernia (Bochdalek)' },
    { clue: 'Cause of pulmonary hypoplasia from too little amniotic fluid', meaning: 'Oligohydramnios (Potter sequence)' },
    { clue: 'Ground-glass lungs in a premature infant', meaning: 'Neonatal RDS (surfactant deficiency)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'These are core neonatal emergencies: TEF/CDH need surgery (CDH also needs lung-hypoplasia support); RDS needs surfactant + steroids. They map onto the developmental stages in [[respiratory-development-stages]]; surfactant biology: [[alveoli-pneumocytes-respiratory-membrane]].' },
  ],

  mnemonics: [
    { hook: 'TEF = foregut septation fault; CDH = Bochdalek (Back, usually Left)', expansion: ['CDH → pulmonary hypoplasia'] },
    { hook: 'RDS = "Reduced surfactant" (premature type II cells)', expansion: ['Ground-glass, atelectasis'] },
  ],

  traps: [
    {
      questionCategory: 'Consequence of congenital diaphragmatic hernia',
      wrongInstinct: 'The main problem in CDH is simply the herniated bowel needing repositioning',
      rightAnswer: 'The life-threatening problem is PULMONARY HYPOPLASIA — the developing lung is compressed and underdeveloped, causing respiratory failure and pulmonary hypertension',
      why: 'Outcome depends on lung development, not just the hernia; the compressed lung can\'t grow, so hypoplasia (± pulmonary hypertension) dominates.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A neonate has a scaphoid abdomen, respiratory distress, and bowel sounds heard over the left chest. The most likely diagnosis is:',
      options: [
        { id: 'a', text: 'Tracheo-oesophageal fistula' },
        { id: 'b', text: 'Congenital diaphragmatic hernia' },
        { id: 'c', text: 'Neonatal RDS' },
        { id: 'd', text: 'Pulmonary sequestration' },
      ],
      answerId: 'b',
      explanation: 'A left-sided congenital diaphragmatic hernia (foramen of Bochdalek) lets abdominal viscera enter the chest → scaphoid abdomen, bowel sounds in the thorax, and pulmonary hypoplasia causing distress.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Neonatal respiratory distress syndrome in a premature infant is caused by:',
      options: [
        { id: 'a', text: 'A tracheo-oesophageal fistula' },
        { id: 'b', text: 'Deficiency of surfactant from immature type II pneumocytes' },
        { id: 'c', text: 'Diaphragmatic herniation' },
        { id: 'd', text: 'Excess amniotic fluid' },
      ],
      answerId: 'b',
      explanation: 'Prematurity means insufficient surfactant (type II pneumocytes), raising alveolar surface tension and causing diffuse atelectasis (RDS) — treated with antenatal steroids and exogenous surfactant.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default respiratoryCongenitalAnomalies;
