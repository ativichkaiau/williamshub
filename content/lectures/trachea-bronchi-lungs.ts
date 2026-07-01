import type { Lecture } from '../../lib/types';
import { LUNG_LOBES_FISSURES } from '../../lib/figures';

export const tracheaBronchiLungs: Lecture = {
  id: 'trachea-bronchi-lungs',
  title: 'Trachea, Bronchial Tree & Lungs',
  system: 'respiratory',
  source: 'L8 — Thorax, Pleura, Trachea & Lungs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L8 Thorax, Pleura & Lung' },
    { kind: 'disease', label: 'Airways & lungs' },
    { kind: 'mechanism', label: 'Lobes, fissures, segments' },
    { kind: 'exam', label: 'Right main bronchus / aspiration' },
  ],

  highYield: [
    'The **trachea** runs from the cricoid cartilage (C6) and **bifurcates at the carina** (≈ sternal angle, T4–T5) into the main bronchi. Its wall has **C-shaped hyaline cartilage rings** completed posteriorly by the **trachealis muscle**.',
    'The **right main bronchus is wider, shorter, and more vertical** than the left → **aspirated foreign bodies preferentially enter the right lung** (often the right lower lobe when upright).',
    '**Right lung = 3 lobes** (superior, middle, inferior) with a **horizontal and an oblique fissure**, **10 bronchopulmonary segments**. **Left lung = 2 lobes** (superior, inferior) with only an **oblique fissure**, ~**8 segments**, plus the **lingula** and an anterior **cardiac notch** (the heart bulges left).',
    'The **root of the lung** (at the hilum) transmits the **main bronchus, pulmonary artery, pulmonary veins, bronchial vessels, nerves, and lymphatics**. **Pulmonary arteries carry deoxygenated blood from the right ventricle**; the **four pulmonary veins carry oxygenated blood to the left atrium**; **bronchial arteries (from the thoracic aorta) nourish the lung tissue**.',
    '**Autonomic innervation via the pulmonary plexus**: **sympathetic → bronchodilation**; **parasympathetic (vagus) → bronchoconstriction** and secretion. Lymphatic drainage passes through pulmonary → bronchopulmonary (hilar) → tracheobronchial (carinal) nodes.',
  ],

  mechanism: {
    title: 'Airway branches asymmetrically; lobes/segments organize the lung',
    steps: [
      { id: 's1', label: 'Trachea bifurcates at the carina (sternal angle)', emphasis: 'key' },
      { id: 's2', label: 'Right main bronchus wider/vertical → aspiration' },
      { id: 's3', label: 'Right = 3 lobes/10 segments; left = 2 lobes/lingula' },
      { id: 's4', label: 'Sympathetic dilate, vagus constrict bronchi' },
    ],
  },

  examFindings: [
    { sign: 'Aspirated object lodging in the right lung', mechanism: 'Right main bronchus is wider, shorter, more vertical', significance: 'key' },
    { sign: 'Cardiac notch + lingula on the left lung', mechanism: 'Heart bulges into the left hemithorax', significance: 'supportive' },
    { sign: 'Segmental (bronchopulmonary) resection preserves other segments', mechanism: 'Each segment is a functional unit with its own bronchus/artery', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Bronchoscopy landmarks (carina)', meaning: 'Airway anatomy' },
    { clue: 'CT segments for surgical planning', meaning: 'Bronchopulmonary segment resection' },
  ],

  treatment: [
    { logic: 'Lobectomy / segmentectomy along anatomical planes', detail: 'Segments are independent functional units.' },
    { logic: 'Bronchodilators exploit sympathetic β2 effect', detail: 'Vagal tone constricts.' },
  ],

  mnemonics: [
    { hook: 'Right main bronchus = wider, shorter, more vertical → foreign bodies', expansion: ['Right lung 3 lobes; left 2 + lingula'] },
    { hook: 'Pulmonary artery = deoxygenated (from RV); pulmonary veins = oxygenated (to LA)', expansion: ['Opposite of systemic'] },
  ],

  traps: [
    {
      questionCategory: 'Side of aspiration',
      wrongInstinct: 'Aspirated material usually enters the left main bronchus',
      rightAnswer: 'It usually enters the RIGHT main bronchus, which is wider, shorter, and more vertical than the left',
      why: 'The steeper, larger right bronchus is the path of least resistance for aspirated objects.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'An unconscious patient aspirates a peanut. In which part of the airway is it most likely to lodge, and why?',
      options: [
        { id: 'a', text: 'Left main bronchus, because it is more vertical' },
        { id: 'b', text: 'Right main bronchus, because it is wider, shorter, and more vertical' },
        { id: 'c', text: 'Trachea, because of the carina' },
        { id: 'd', text: 'Left lower lobe, because of the cardiac notch' },
      ],
      answerId: 'b',
      explanation: 'The right main bronchus is wider, shorter, and more vertically oriented than the left, so aspirated material preferentially enters the right lung.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Lobes and fissures of the lungs', svg: LUNG_LOBES_FISSURES, caption: 'Right: 3 lobes (horizontal + oblique fissures), 10 segments. Left: 2 lobes (oblique), lingula, cardiac notch.' },
  ],
};

export default tracheaBronchiLungs;
