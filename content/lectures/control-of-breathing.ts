import type { Lecture } from '../../lib/types';
import { CONTROL_OF_BREATHING } from '../../lib/figures';

export const controlOfBreathing: Lecture = {
  id: 'control-of-breathing',
  title: 'Control of Breathing: Centres & Chemoreceptors',
  system: 'respiratory',
  source: 'L6 — Regulation of Respiration & ABG',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L6 Regulation & ABG' },
    { kind: 'mechanism', label: 'CO₂-driven feedback' },
    { kind: 'exam', label: 'Central vs peripheral chemoreceptors' },
  ],

  highYield: [
    '**Breathing rhythm is generated in the brainstem.** The **medulla** houses the **dorsal respiratory group (inspiration)** and **ventral respiratory group (active expiration/forceful breathing)**. The **pons** modulates the pattern (**pneumotaxic centre limits inspiration; apneustic centre prolongs it**) → a smooth automatic rhythm. The **cortex** allows voluntary override (talking, breath-holding).',
    '**Central chemoreceptors (in the medulla) are the main minute-to-minute drive.** They sense **H⁺ in the CSF**, which reflects **arterial CO₂** (CO₂ crosses the blood–brain barrier and forms H⁺). They provide **~80% of the ventilatory drive** and respond to **CO₂/pH, NOT directly to O₂**.',
    '**Peripheral chemoreceptors (carotid + aortic bodies) are the ONLY oxygen sensors.** They respond to a **low PaO₂ (mainly < 60 mmHg)**, and also to **↑CO₂ and ↑H⁺** — giving a faster response. The carotid bodies signal via CN IX (glossopharyngeal), the aortic via CN X (vagus).',
    '**CO₂ (via H⁺) is the PRIMARY stimulus to breathe — not oxygen.** A rise in PaCO₂ → ↑CSF H⁺ → central chemoreceptors → **↑ventilation → blows off CO₂** (a tight negative-feedback loop keeping PaCO₂ ~40). The **hypoxic drive** (peripheral, low O₂) becomes important mainly at **altitude** or in some **chronic CO₂ retainers (COPD)** whose central drive is blunted.',
    '**Mechanoreflexes fine-tune the pattern:** the **Hering–Breuer reflex** — pulmonary **stretch receptors** inhibit further inspiration when the lung is over-inflated (protective, mainly in infants/large breaths); plus **irritant, J (juxtacapillary), and proprioceptor** inputs.',
  ],

  mechanism: {
    title: 'Brainstem rhythm tuned by CO₂/H⁺ (mainly) + O₂',
    steps: [
      { id: 's1', label: 'Medulla (DRG inspire/VRG expire) + pons shape the rhythm', emphasis: 'key' },
      { id: 's2', label: 'Central chemoreceptors sense CSF H⁺/CO₂ (~80% drive)', emphasis: 'key' },
      { id: 's3', label: 'Peripheral (carotid/aortic) sense low PaO₂ (<60) — only O₂ sensors', emphasis: 'key' },
      { id: 's4', label: 'CO₂ (H⁺) = primary drive → ↑ventilation → blow off CO₂', emphasis: 'key' },
      { id: 's5', label: 'Hering–Breuer: stretch receptors inhibit over-inflation' },
    ],
  },

  examFindings: [
    { sign: 'PaCO₂ is the main minute-to-minute breathing stimulus', mechanism: 'Central chemoreceptors sense CSF H⁺ (from CO₂)', significance: 'key' },
    { sign: 'Only receptors sensing low PaO₂', mechanism: 'Peripheral chemoreceptors (carotid/aortic bodies)', significance: 'key' },
    { sign: 'Hypoxic drive dominant in some COPD/altitude', mechanism: 'Blunted central CO₂ response → rely on peripheral O₂', significance: 'supportive' },
    { sign: 'Lung over-inflation inhibits inspiration', mechanism: 'Hering–Breuer reflex (stretch receptors)', significance: 'supportive' },
    { sign: 'Voluntary breath-holding then involuntary breathing', mechanism: 'Cortex overrides, but rising CO₂ forces the medulla to resume', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'The primary chemical stimulus to breathe', meaning: 'CO₂ (via H⁺), sensed centrally' },
    { clue: 'Receptors that sense arterial O₂', meaning: 'Peripheral chemoreceptors (carotid/aortic bodies)' },
    { clue: 'Brain region generating the respiratory rhythm', meaning: 'Medulla (DRG/VRG), modulated by the pons' },
    { clue: 'Reflex preventing lung over-inflation', meaning: 'Hering–Breuer reflex' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Control physiology explains why CO₂ (not O₂) normally drives breathing, opioid respiratory depression (blunts central drive → ↑CO₂), and altitude acclimatisation. It feeds into ABG interpretation of respiratory compensation ([[abg-acid-base-interpretation]]); CO₂ carriage: [[co2-transport-blood]].' },
  ],

  mnemonics: [
    { hook: 'CENTRAL = CO₂/H⁺ (the main drive); PERIPHERAL = the O₂ sensors (carotid/aortic)', expansion: ['CO₂ is the primary stimulus, not O₂'] },
    { hook: 'Medulla makes the rhythm (DRG in, VRG out); pons polishes it', expansion: ['Hering–Breuer = over-inflation brake'] },
  ],

  traps: [
    {
      questionCategory: 'Primary stimulus to breathe',
      wrongInstinct: 'Low oxygen (PaO₂) is the main minute-to-minute stimulus that controls breathing',
      rightAnswer: 'CO₂ (via CSF H⁺, sensed by central chemoreceptors) is the PRIMARY drive; low PaO₂ only becomes a major driver below ~60 mmHg (peripheral chemoreceptors)',
      why: 'The tightly regulated variable is PaCO₂; the hypoxic drive is a backup that matters at altitude or in blunted-central-drive states.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The central chemoreceptors in the medulla primarily respond to:',
      options: [
        { id: 'a', text: 'A fall in arterial PO₂' },
        { id: 'b', text: 'H⁺ in the CSF, reflecting arterial CO₂' },
        { id: 'c', text: 'Blood pressure' },
        { id: 'd', text: 'Lung stretch' },
      ],
      answerId: 'b',
      explanation: 'Central chemoreceptors sense CSF H⁺, which mirrors arterial CO₂ (CO₂ crosses the BBB and generates H⁺). They provide the main drive and do NOT sense O₂ directly — that is the peripheral chemoreceptors\' job.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Which structures are the only receptors that sense a low arterial oxygen tension?',
      options: [
        { id: 'a', text: 'Central chemoreceptors in the medulla' },
        { id: 'b', text: 'Peripheral chemoreceptors in the carotid and aortic bodies' },
        { id: 'c', text: 'Pulmonary stretch receptors' },
        { id: 'd', text: 'The pneumotaxic centre' },
      ],
      answerId: 'b',
      explanation: 'The peripheral chemoreceptors (carotid and aortic bodies) are the only O₂ sensors, responding mainly to PaO₂ below ~60 mmHg (and also to ↑CO₂/↑H⁺). Central chemoreceptors sense only CO₂/H⁺.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Control of breathing', svg: CONTROL_OF_BREATHING, caption: 'Medulla (DRG/VRG) + pons generate rhythm; central chemoreceptors sense CO₂/H⁺ (main drive); peripheral (carotid/aortic) are the only O₂ sensors.' },
  ],
};

export default controlOfBreathing;
