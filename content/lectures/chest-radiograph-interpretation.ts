import type { Lecture } from '../../lib/types';

export const chestRadiographInterpretation: Lecture = {
  id: 'chest-radiograph-interpretation',
  title: 'Chest Radiograph Interpretation',
  system: 'respiratory',
  source: 'L18 — Chest Radiology',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L18 Chest Radiology' },
    { kind: 'investigation', label: 'CXR' },
    { kind: 'exam', label: 'Silhouette sign' },
  ],

  highYield: [
    '**The chest X-ray displays five basic radiographic densities from black to white: air (darkest), fat, soft tissue/water, bone, and metal/contrast (brightest).** Structures are visible where different densities meet; when two water-density structures touch, their border disappears — the basis of the silhouette sign.',
    '**Always check adequacy first (RIPE): Rotation (clavicles symmetric about the spinous process), Inspiration (≥6 anterior/10 posterior ribs), Penetration (vertebrae faintly visible behind the heart), and Exposure/field of view.** A poorly-inspired or rotated film mimics pathology (e.g. apparent cardiomegaly).',
    '**Use a systematic scheme (e.g. ABCDE): Airway (trachea central), Breathing (lungs — zones, symmetry, opacities, pneumothorax), Cardiac (heart size — cardiothoracic ratio <0.5 on PA), Diaphragm (costophrenic angles, air under the diaphragm), Everything else (bones, soft tissue, devices).** Compare left with right systematically.',
    '**The silhouette sign localises disease: loss of a normal border tells you which lobe is abnormal** — e.g. loss of the right heart border = right middle lobe; loss of the left heart border = lingula; loss of a hemidiaphragm = lower lobe. An **air bronchogram** (air-filled bronchi outlined by surrounding alveolar opacity) indicates airspace (alveolar) filling such as consolidation.',
    '**Recognise common patterns: consolidation (opacity + air bronchograms), pleural effusion (blunted costophrenic angle, meniscus), pneumothorax (lucency with a visible lung edge, no lung markings beyond it), collapse/atelectasis (volume loss + mediastinal shift toward), cardiomegaly, and masses.** A CXR is a screening tool — correlate with the clinical picture and use CT for detail.',
  ],

  mechanism: {
    title: 'Densities + adequacy (RIPE) + systematic scan (ABCDE) + silhouette sign',
    steps: [
      { id: 's1', label: 'Five densities: air < fat < soft tissue/water < bone < metal', emphasis: 'key' },
      { id: 's2', label: 'Adequacy first (RIPE): rotation, inspiration, penetration, exposure', emphasis: 'key' },
      { id: 's3', label: 'Systematic ABCDE: airway, breathing, cardiac, diaphragm, everything else' },
      { id: 's4', label: 'Silhouette sign: lost border localises the affected lobe', emphasis: 'key' },
      { id: 's5', label: 'Patterns: consolidation (air bronchogram), effusion, pneumothorax, collapse' },
    ],
  },

  examFindings: [
    { sign: 'Loss of the right heart border', mechanism: 'Right middle lobe consolidation/collapse (silhouette sign)', significance: 'key' },
    { sign: 'Air bronchograms within an opacity', mechanism: 'Airspace (alveolar) filling — consolidation', significance: 'key' },
    { sign: 'Blunted costophrenic angle with a meniscus', mechanism: 'Pleural effusion', significance: 'key' },
    { sign: 'Lucent hemithorax with a visible lung edge, no distal markings', mechanism: 'Pneumothorax', significance: 'supportive' },
    { sign: 'Apparent cardiomegaly on a poorly-inspired/AP film', mechanism: 'Technical (adequacy) artefact — check RIPE first', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The checklist for chest X-ray adequacy', meaning: 'RIPE (rotation, inspiration, penetration, exposure)' },
    { clue: 'The sign that a lost border localises a lobe', meaning: 'The silhouette sign' },
    { clue: 'The finding indicating alveolar (airspace) filling', meaning: 'Air bronchograms (consolidation)' },
    { clue: 'The cardiothoracic ratio threshold for cardiomegaly on PA film', meaning: '>0.5' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'The CXR ties the whole block together — consolidation ([[pneumonia-pathology-patterns]]), cavities (TB/abscess — [[tuberculosis-pathology]]), effusion/pneumothorax ([[pleural-effusion-pneumothorax-mesothelioma]]), masses ([[non-small-cell-lung-carcinoma]]) and collapse ([[ards-pulmonary-hypertension-atelectasis]]) all have signatures. Always judge adequacy first, then correlate clinically ([[respiratory-clinical-approach]]) and use CT for detail.' },
  ],

  mnemonics: [
    { hook: 'Adequacy = "RIPE"; scan = "ABCDE"', expansion: ['RIPE: Rotation, Inspiration, Penetration, Exposure', 'ABCDE: Airway, Breathing, Cardiac, Diaphragm, Everything'] },
    { hook: 'Silhouette sign: "lost border = adjacent lobe" (right heart = RML, diaphragm = lower lobe)', expansion: ['Air bronchogram = airspace filling', 'Meniscus + blunt angle = effusion'] },
  ],

  traps: [
    {
      questionCategory: 'Judging heart size on a chest X-ray',
      wrongInstinct: 'An enlarged cardiac shadow always means true cardiomegaly',
      rightAnswer: 'Assess adequacy (RIPE) first — a poorly-inspired, rotated or AP (portable) film magnifies the cardiac shadow and can falsely suggest cardiomegaly; the cardiothoracic ratio is only reliable on an adequate PA film',
      why: 'Technical factors distort apparent heart size; interpreting an inadequate film at face value leads to false-positive findings — checking adequacy prevents this classic error.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'On a chest X-ray, loss of the normal right heart border adjacent to an opacity indicates disease in the:',
      options: [
        { id: 'a', text: 'Right upper lobe' },
        { id: 'b', text: 'Right middle lobe' },
        { id: 'c', text: 'Right lower lobe' },
        { id: 'd', text: 'Left lower lobe' },
      ],
      answerId: 'b',
      explanation: 'The silhouette sign: the right middle lobe abuts the right heart border, so consolidation or collapse there erases that border. Loss of a hemidiaphragm outline instead localises to a lower lobe.',
      tests: 'investigation',
    },
    {
      id: 'q2',
      stem: 'An air bronchogram (air-filled bronchi outlined by surrounding opacity) on a chest X-ray indicates:',
      options: [
        { id: 'a', text: 'A pneumothorax' },
        { id: 'b', text: 'Airspace (alveolar) filling such as consolidation' },
        { id: 'c', text: 'A pleural effusion' },
        { id: 'd', text: 'Emphysema' },
      ],
      answerId: 'b',
      explanation: 'An air bronchogram appears when alveoli around a patent bronchus are filled (by pus, fluid, blood or cells), making the air-filled bronchus visible — the hallmark of airspace/alveolar disease like consolidation.',
      tests: 'exam',
    },
  ],

  figures: [],
};

export default chestRadiographInterpretation;
