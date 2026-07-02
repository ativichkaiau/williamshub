import type { Lecture } from '../../lib/types';
import { RESPIRATORY_MEMBRANE } from '../../lib/figures';

export const alveoliPneumocytesRespiratoryMembrane: Lecture = {
  id: 'alveoli-pneumocytes-respiratory-membrane',
  title: 'Alveoli, Pneumocytes & the Respiratory Membrane',
  system: 'respiratory',
  source: 'L2 — Structure of the Respiratory System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Respiratory' },
    { kind: 'lecture', label: 'L2 Respiratory Structure' },
    { kind: 'mechanism', label: 'Blood–gas barrier' },
    { kind: 'exam', label: 'Type I vs II · surfactant' },
  ],

  highYield: [
    '**Alveoli are the gas-exchange units** — ~300 million, giving an enormous **surface area (~70 m²)**, each wrapped in pulmonary capillaries. Their lining has two cell types plus a resident immune cell.',
    '**Type I pneumocytes** = **extremely thin, flat squamous** cells covering **~95% of the alveolar surface** → the **gas-exchange surface** (thin = fast diffusion). They cannot divide.',
    '**Type II pneumocytes** = **cuboidal**, with **lamellar bodies**; two jobs: **(1) produce surfactant** and **(2) act as stem cells** — they proliferate and differentiate into type I cells to **repair** the epithelium after injury. **Alveolar macrophages ("dust cells")** patrol the alveolar surface, phagocytosing debris/microbes.',
    '**The respiratory (blood–gas) membrane** is what O₂/CO₂ must cross, and it is remarkably thin: **(1) alveolar epithelium (type I) + surfactant → (2) fused basement membranes → (3) capillary endothelium.** Its thinness maximises diffusion; **thickening (fibrosis, oedema, pneumonia) slows gas exchange** (a diffusion barrier).',
    '**Surfactant** (mainly **dipalmitoylphosphatidylcholine, DPPC**) lowers **alveolar surface tension**, which (1) **prevents alveolar collapse** at end-expiration, (2) **increases lung compliance** (less effort to inflate), and (3) by **Laplace\'s law**, stabilises alveoli of different sizes (stops small alveoli emptying into large ones). Deficiency → **RDS** ([[respiratory-congenital-anomalies]]).',
  ],

  mechanism: {
    title: 'Thin barrier + surfactant = efficient, stable exchange',
    steps: [
      { id: 's1', label: 'Type I pneumocyte: thin, 95% of surface → gas exchange', emphasis: 'key' },
      { id: 's2', label: 'Type II pneumocyte: surfactant + stem cell (repair)', emphasis: 'key' },
      { id: 's3', label: 'Alveolar macrophage clears debris/microbes' },
      { id: 's4', label: 'Respiratory membrane: epithelium + fused BM + endothelium (thin)', emphasis: 'key' },
      { id: 's5', label: 'Surfactant ↓surface tension → prevents collapse, ↑compliance', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Thin squamous cell covering most of the alveolus', mechanism: 'Type I pneumocyte (gas exchange)', significance: 'key' },
    { sign: 'Cuboidal cell with lamellar bodies making surfactant', mechanism: 'Type II pneumocyte (also stem cell)', significance: 'key' },
    { sign: 'Epithelium regenerates after alveolar injury', mechanism: 'Type II cells differentiate into type I', significance: 'supportive' },
    { sign: 'Thickened membrane (fibrosis/oedema) → ↓diffusion', mechanism: 'Diffusion-limited gas exchange', significance: 'key' },
    { sign: 'Alveoli stay open at end-expiration', mechanism: 'Surfactant lowers surface tension (anti-collapse)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cell forming the gas-exchange surface', meaning: 'Type I pneumocyte' },
    { clue: 'Cell making surfactant and repairing the alveolus', meaning: 'Type II pneumocyte' },
    { clue: 'The three layers of the respiratory membrane', meaning: 'Type I epithelium + fused basement membranes + capillary endothelium' },
    { clue: 'Main phospholipid of surfactant', meaning: 'Dipalmitoylphosphatidylcholine (DPPC)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Surfactant biology underlies neonatal RDS and ARDS; type II cells drive alveolar repair; membrane thickening causes diffusion-limited hypoxaemia (fibrosis). Surface tension/Laplace links to lung mechanics ([[respiratory-mechanics-compliance]]); diffusion physics: [[gas-exchange-diffusion]].' },
  ],

  mnemonics: [
    { hook: 'Type 1 = "thin, 1 job: exchange"; Type 2 = "surfactant + stem cell (repairs type 1)"', expansion: ['+ macrophage = dust cell'] },
    { hook: 'Membrane = "Epithelium, BM, Endothelium" (thin = fast diffusion)', expansion: ['Thick = slow (fibrosis/oedema)'] },
  ],

  traps: [
    {
      questionCategory: 'Which pneumocyte repairs the alveolus?',
      wrongInstinct: 'Type I pneumocytes divide to repair damaged alveolar epithelium',
      rightAnswer: 'Type II pneumocytes are the stem cells that proliferate and differentiate into type I cells to repair the alveolus; type I cells cannot divide',
      why: 'Type I are terminally differentiated (thin exchange cells); type II both make surfactant and regenerate the epithelium.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which alveolar cell produces surfactant and serves as a stem cell to regenerate the alveolar epithelium?',
      options: [
        { id: 'a', text: 'Type I pneumocyte' },
        { id: 'b', text: 'Type II pneumocyte' },
        { id: 'c', text: 'Alveolar macrophage' },
        { id: 'd', text: 'Goblet cell' },
      ],
      answerId: 'b',
      explanation: 'Type II pneumocytes contain lamellar bodies, secrete surfactant, and act as stem cells that differentiate into type I cells to repair injury. Type I cells are thin, non-dividing gas-exchange cells.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'By lowering alveolar surface tension, surfactant primarily:',
      options: [
        { id: 'a', text: 'Increases the work of breathing' },
        { id: 'b', text: 'Prevents alveolar collapse and increases lung compliance' },
        { id: 'c', text: 'Thickens the respiratory membrane' },
        { id: 'd', text: 'Decreases the alveolar surface area' },
      ],
      answerId: 'b',
      explanation: 'Surfactant reduces surface tension, preventing alveolar collapse at end-expiration, increasing compliance (easier inflation), and stabilising alveoli of different sizes (Laplace). Its lack causes RDS.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Alveolus & respiratory membrane', svg: RESPIRATORY_MEMBRANE, caption: 'Type I (thin, exchange) + type II (surfactant/stem) pneumocytes; blood–gas barrier = epithelium + fused BM + endothelium; surfactant lowers surface tension.' },
  ],
};

export default alveoliPneumocytesRespiratoryMembrane;
