import type { Lecture } from '../../lib/types';

export const mediastinalMasses: Lecture = {
  id: 'mediastinal-masses',
  title: 'Mediastinal Masses',
  system: 'respiratory',
  source: 'L17 — Pathology of the Mediastinum & Pleura',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L17 Pleura & Mediastinum' },
    { kind: 'disease', label: 'Thymoma' },
    { kind: 'exam', label: 'Anterior mediastinum' },
  ],

  highYield: [
    '**The mediastinum is divided into anterior, middle and posterior compartments, and the compartment predicts the likely mass** — the single most useful framework for a mediastinal shadow on imaging.',
    '**Anterior mediastinum — the "4 T\'s": Thymoma, Teratoma (germ-cell tumours), "Terrible" lymphoma, and Thyroid (retrosternal goitre).** **Thymoma is the classic association with myasthenia gravis** (and also pure red cell aplasia and hypogammaglobulinaemia); germ-cell tumours may raise AFP/β-hCG; lymphoma (Hodgkin/large B-cell) presents in young adults.',
    '**Middle mediastinum contains vascular and airway structures, so its masses are lymphadenopathy (lymphoma, sarcoid, metastasis, TB), bronchogenic and pericardial cysts, and vascular abnormalities** (aortic aneurysm). This is also where hilar adenopathy (sarcoid, TB, cancer) is seen.',
    '**Posterior mediastinum masses are predominantly NEUROGENIC tumours** arising from nerves/ganglia — schwannoma, neurofibroma and (in children) neuroblastoma — plus oesophageal lesions and descending aortic aneurysms. Neurogenic tumours may cause nerve-related pain or, in children, be metabolically active (catecholamines).',
    '**Mediastinal masses matter because of compression and specific associations:** they can cause **SVC obstruction, airway or oesophageal compression, and phrenic/recurrent laryngeal nerve palsy**; the standout clinical link is **thymoma ↔ myasthenia gravis**. Localising the mass to a compartment plus a few markers (AFP/β-hCG, calcium, autoantibodies) usually narrows the diagnosis.',
  ],

  mechanism: {
    title: 'Compartment predicts the mass; watch compression + specific links',
    steps: [
      { id: 's1', label: 'Divide into anterior / middle / posterior compartments', emphasis: 'key' },
      { id: 's2', label: 'Anterior "4 T\'s": Thymoma, Teratoma/germ cell, "Terrible" lymphoma, Thyroid', emphasis: 'key' },
      { id: 's3', label: 'Middle: lymphadenopathy, bronchogenic/pericardial cyst, vascular' },
      { id: 's4', label: 'Posterior: neurogenic tumours (schwannoma, neuroblastoma), oesophageal', emphasis: 'key' },
      { id: 's5', label: 'Complications: SVC obstruction, compression; thymoma ↔ myasthenia gravis', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Anterior mediastinal mass + myasthenia gravis', mechanism: 'Thymoma', significance: 'key' },
    { sign: 'Anterior mass with raised AFP/β-hCG in a young man', mechanism: 'Mediastinal germ-cell (teratoma) tumour', significance: 'key' },
    { sign: 'Bulky anterior/mediastinal mass in a young adult with B symptoms', mechanism: 'Lymphoma (Hodgkin/large B-cell)', significance: 'key' },
    { sign: 'Posterior mediastinal mass in a child secreting catecholamines', mechanism: 'Neuroblastoma (neurogenic tumour)', significance: 'supportive' },
    { sign: 'Facial plethora and distended neck veins', mechanism: 'SVC obstruction by a mediastinal mass', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The "4 T\'s" of the anterior mediastinum', meaning: 'Thymoma, Teratoma (germ cell), "Terrible" lymphoma, Thyroid' },
    { clue: 'The classic disease associated with thymoma', meaning: 'Myasthenia gravis' },
    { clue: 'The predominant tumour type of the posterior mediastinum', meaning: 'Neurogenic tumours' },
    { clue: 'The compartment framework\'s main clinical use', meaning: 'The location predicts the likely mass' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Compartment-based reasoning plus markers (AFP/β-hCG for germ cell, autoantibodies for thymoma-associated myasthenia) directs biopsy and therapy; masses threaten vital structures (SVC obstruction, airway compression). Lymphadenopathy overlaps sarcoid/TB ([[sarcoidosis-granulomatous-lung]], [[tuberculosis-pathology]]); pleural disease is in [[pleural-effusion-pneumothorax-mesothelioma]]. Thymoma-linked myasthenia connects to neuromuscular pathology.' },
  ],

  mnemonics: [
    { hook: 'Anterior "4 T\'s": Thymoma, Teratoma, Terrible lymphoma, Thyroid', expansion: ['Thymoma ↔ myasthenia gravis', 'Germ cell → AFP/β-hCG'] },
    { hook: 'Compartment map: "Anterior = T\'s, Middle = nodes/vessels, Posterior = Nerves"', expansion: ['Posterior = neurogenic', 'Middle = lymphadenopathy/cysts'] },
  ],

  traps: [
    {
      questionCategory: 'Localising a mediastinal mass',
      wrongInstinct: 'A neurogenic tumour is a typical anterior mediastinal mass',
      rightAnswer: 'Neurogenic tumours arise in the POSTERIOR mediastinum (from nerves/ganglia); the ANTERIOR compartment holds the "4 T\'s" (thymoma, teratoma/germ cell, lymphoma, thyroid) — the compartment is the key to the differential',
      why: 'Placing the mass in the wrong compartment derails the differential; each compartment has characteristic tumours, so localisation is the first and most powerful diagnostic step.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A young adult with fluctuating ptosis and fatigable weakness (myasthenia gravis) is found to have an anterior mediastinal mass. The most likely mass is:',
      options: [
        { id: 'a', text: 'Neuroblastoma' },
        { id: 'b', text: 'Thymoma' },
        { id: 'c', text: 'Bronchogenic cyst' },
        { id: 'd', text: 'Schwannoma' },
      ],
      answerId: 'b',
      explanation: 'Thymoma is a classic anterior mediastinal mass with a strong association with myasthenia gravis (and also pure red cell aplasia and hypogammaglobulinaemia). Neurogenic tumours instead occupy the posterior mediastinum.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A posterior mediastinal mass in an adult is most likely to be:',
      options: [
        { id: 'a', text: 'A neurogenic tumour (e.g. schwannoma)' },
        { id: 'b', text: 'A thymoma' },
        { id: 'c', text: 'A teratoma' },
        { id: 'd', text: 'A retrosternal thyroid' },
      ],
      answerId: 'a',
      explanation: 'The posterior mediastinum characteristically harbours neurogenic tumours arising from nerves and sympathetic ganglia (schwannoma, neurofibroma; neuroblastoma in children), whereas thymoma, teratoma and thyroid are anterior masses.',
      tests: 'mechanism',
    },
  ],

  figures: [],
};

export default mediastinalMasses;
