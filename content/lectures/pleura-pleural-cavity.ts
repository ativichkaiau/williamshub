import type { Lecture } from '../../lib/types';

export const pleuraPleuralCavity: Lecture = {
  id: 'pleura-pleural-cavity',
  title: 'Pleura & Pleural Cavity',
  system: 'respiratory',
  source: 'L8 — Thorax, Pleura, Trachea & Lungs',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Anatomy' },
    { kind: 'lecture', label: 'L8 Thorax, Pleura & Lung' },
    { kind: 'disease', label: 'Pleura' },
    { kind: 'mechanism', label: 'Parietal vs visceral' },
    { kind: 'exam', label: 'Thoracentesis / pneumothorax' },
  ],

  highYield: [
    'The pleura has two layers: **visceral** (covers the lung, follows the fissures) and **parietal** (lines the thoracic wall, diaphragm, mediastinum). Between them the **pleural cavity** holds a thin film of fluid; it is a **potential space** at negative pressure that keeps the lung expanded.',
    '**Innervation is the key clinical point**: **parietal pleura is somatically innervated (intercostal + phrenic nerves) and is PAIN-sensitive**; **visceral pleura has only autonomic (visceral afferent) supply and is insensitive to pain**. So pleuritic pain arises from the parietal layer.',
    '**Referred pain**: the **costal/peripheral diaphragmatic parietal pleura** refers to the **chest/abdominal wall (intercostal dermatomes)**, while the **central diaphragmatic pleura (phrenic nerve, C3–C5)** refers to the **shoulder tip (C3–C5 dermatomes)**.',
    '**Pleural recesses** are spaces the lung does not fully fill in quiet breathing: the **costodiaphragmatic recess** (deepest, posteroinferior) is where **pleural effusions collect** and where **thoracentesis** is performed; the **costomediastinal recess** is anterior (left is larger due to the cardiac notch).',
    '**Clinical**: **pneumothorax** = air in the pleural cavity → lung collapse; **pleuritis** → a **friction rub**. **Thoracentesis** is done **1–2 spaces below the fluid level but not below the 8th intercostal space** (to avoid the diaphragm/abdominal organs), entering above the rib.',
  ],

  mechanism: {
    title: 'Two layers, one potential space; only the parietal layer feels pain',
    steps: [
      { id: 's1', label: 'Visceral (lung) vs parietal (wall) pleura', emphasis: 'key' },
      { id: 's2', label: 'Parietal = intercostal/phrenic → PAIN; visceral = insensitive' },
      { id: 's3', label: 'Central diaphragm pleura → shoulder-tip referred pain (C3-5)' },
      { id: 's4', label: 'Effusion collects in the costodiaphragmatic recess', emphasis: 'danger' },
    ],
  },

  examFindings: [
    { sign: 'Sharp pain worse on inspiration + a pleural friction rub', mechanism: 'Parietal pleuritis (somatic innervation)', significance: 'key' },
    { sign: 'Shoulder-tip pain from diaphragmatic irritation', mechanism: 'Central diaphragmatic pleura (phrenic C3–C5)', significance: 'key' },
    { sign: 'Dullness at the lung base with a meniscus on X-ray', mechanism: 'Effusion in the costodiaphragmatic recess', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Chest radiograph / ultrasound of the base', meaning: 'Effusion in the costodiaphragmatic recess' },
    { clue: 'Character of pain (pleuritic) + rub', meaning: 'Parietal pleura involvement' },
  ],

  treatment: [
    { logic: 'Thoracentesis in the costodiaphragmatic recess, above the rib', detail: 'Not below the 8th intercostal space.' },
    { logic: 'Pneumothorax: needle/chest drain to re-expand the lung', detail: 'Tension pneumothorax is an emergency.' },
  ],

  mnemonics: [
    { hook: 'Parietal pleura = PAINful (somatic); visceral pleura = insensitive (autonomic)', expansion: ['Pleuritic pain is parietal'] },
    { hook: 'Central diaphragm irritation → shoulder-tip pain (phrenic C3-4-5)', expansion: ['"C3-4-5 keep the diaphragm alive"'] },
  ],

  traps: [
    {
      questionCategory: 'Source of pleuritic pain',
      wrongInstinct: 'Pleuritic chest pain comes from the visceral pleura on the lung surface',
      rightAnswer: 'Pain arises from the PARIETAL pleura (somatic intercostal/phrenic innervation); the visceral pleura is insensitive to pain',
      why: 'Only the parietal layer has somatic sensory fibers, so inflammation there produces the sharp, localized pleuritic pain.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Irritation of the central part of the diaphragmatic pleura typically refers pain to which region, and via which nerve?',
      options: [
        { id: 'a', text: 'The epigastrium via intercostal nerves' },
        { id: 'b', text: 'The shoulder tip via the phrenic nerve (C3–C5)' },
        { id: 'c', text: 'The back via the sympathetic trunk' },
        { id: 'd', text: 'It is painless (visceral pleura)' },
      ],
      answerId: 'b',
      explanation: 'The central diaphragmatic parietal pleura is supplied by the phrenic nerve (C3–C5), so its irritation refers pain to the shoulder tip (C3–C5 dermatomes); the peripheral pleura refers via intercostal nerves.',
      tests: 'exam',
    },
  ],
};

export default pleuraPleuralCavity;
