import type { Lecture } from '../../lib/types';
import { IMMUNITY_TO_MICROBES } from '../../lib/figures';

export const immunityBacteriaExtracellularIntracellular: Lecture = {
  id: 'immunity-bacteria-extracellular-intracellular',
  title: 'Immunity to Bacteria: Extracellular vs Intracellular',
  system: 'immune',
  source: 'L10 — Immunity to Microbes',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L10 Immunity to Microbes' },
    { kind: 'mechanism', label: 'Match defence to niche' },
    { kind: 'exam', label: 'Humoral vs cell-mediated' },
  ],

  highYield: [
    '**The location of the microbe dictates the defence.** **Extracellular bacteria → humoral immunity** (antibody, complement, neutrophils); **intracellular bacteria → cell-mediated immunity** (Th1 → macrophages, CTLs).',
    '**Extracellular bacteria.** Innate: **complement, neutrophils/phagocytosis, inflammation, Th17** (recruits neutrophils at mucosa). Adaptive: **antibody** — **neutralises toxins**, **opsonises** (C3b/IgG → phagocytosis), and **activates complement**. This is why **antibody/complement/spleen defects → encapsulated-bacteria infections**.',
    '**Intracellular bacteria (e.g. TB, Listeria, Salmonella)** hide inside cells (often within macrophages), evading antibody. Defence needs **Th1 cells → IFN-γ + CD40L → macrophage activation** (enhanced killing) and **CD8 CTLs**; persistent organisms are walled off in a **granuloma**. T-cell (IFN-γ axis) defects → disseminated mycobacterial disease.',
    '**Key effector antibody functions vs extracellular bugs:** **neutralisation** (block adhesion/toxin), **opsonisation**, **complement activation (MAC lysis, esp. Neisseria)** — the same functions from [[antibody-classes-functions]] and [[complement-functions-regulation]].',
    '**Immune damage can cause disease too:** exuberant responses (e.g. endotoxin/LPS → cytokine storm → septic shock) and hypersensitivity contribute to pathology beyond the microbe itself.',
  ],

  mechanism: {
    title: 'Where the bug lives → which arm fights it',
    steps: [
      { id: 's1', label: 'Extracellular → antibody + complement + neutrophils (+ Th17)', emphasis: 'key' },
      { id: 's2', label: 'Antibody: neutralise toxin, opsonise, fix complement', emphasis: 'key' },
      { id: 's3', label: 'Intracellular → Th1/IFN-γ → macrophage activation + CTL', emphasis: 'key' },
      { id: 's4', label: 'Granuloma walls off persistent intracellular bacteria' },
      { id: 's5', label: 'Immune-mediated damage (LPS → septic shock)' },
    ],
  },

  examFindings: [
    { sign: 'Antibody neutralising a bacterial exotoxin', mechanism: 'Humoral defence vs extracellular bacteria (e.g. tetanus antitoxin)', significance: 'key' },
    { sign: 'Granuloma with activated macrophages (TB)', mechanism: 'Th1/IFN-γ cell-mediated response to intracellular bacteria', significance: 'key' },
    { sign: 'Recurrent encapsulated-bacterial infection', mechanism: 'Antibody/complement/spleen defect', significance: 'supportive' },
    { sign: 'Disseminated mycobacterial infection', mechanism: 'IL-12/IFN-γ (Th1–macrophage) axis defect', significance: 'supportive' },
    { sign: 'Septic shock from Gram-negative sepsis', mechanism: 'LPS → TLR4 → cytokine storm (immune-mediated damage)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Arm of immunity against extracellular bacteria', meaning: 'Humoral (antibody, complement, neutrophils)' },
    { clue: 'Arm of immunity against intracellular bacteria', meaning: 'Cell-mediated (Th1 macrophage activation, CTL)' },
    { clue: 'Structure containing persistent intracellular bacteria', meaning: 'Granuloma' },
    { clue: 'Antibody action blocking a toxin', meaning: 'Neutralisation' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Matching defence to niche predicts the infection risk from each immunodeficiency ([[primary-immunodeficiency-antibody-t]], [[primary-immunodeficiency-phagocyte-complement]]) and explains why anti-TNF drugs reactivate TB (they impair granuloma maintenance). Viruses/fungi/parasites: [[immunity-viruses-fungi-parasites]].' },
  ],

  mnemonics: [
    { hook: 'Extracellular = "antibody + complement + neutrophils"; Intracellular = "Th1 + macrophage + CTL"', expansion: ['Humoral vs cell-mediated'] },
    { hook: 'Granuloma = intracellular bacteria walled off (IFN-γ)', expansion: ['TB, Listeria, Salmonella'] },
  ],

  traps: [
    {
      questionCategory: 'Defence against intracellular bacteria',
      wrongInstinct: 'Antibody is the main defence against intracellular bacteria like Mycobacterium tuberculosis',
      rightAnswer: 'Intracellular bacteria need CELL-MEDIATED immunity (Th1/IFN-γ macrophage activation, CTL) — antibody cannot reach them',
      why: 'Antibody works on extracellular targets; intracellular pathogens require T-cell-driven macrophage activation and cytotoxicity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The principal adaptive defence against an extracellular, toxin-producing bacterium is:',
      options: [
        { id: 'a', text: 'CD8 cytotoxic T cells' },
        { id: 'b', text: 'Antibody (neutralisation, opsonisation, complement activation)' },
        { id: 'c', text: 'Th1-mediated macrophage activation' },
        { id: 'd', text: 'NK-cell killing' },
      ],
      answerId: 'b',
      explanation: 'Extracellular bacteria are countered by humoral immunity — antibody neutralises toxins, opsonises for phagocytosis, and activates complement. Cell-mediated immunity handles intracellular organisms.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Granuloma formation in tuberculosis primarily reflects which type of immune response?',
      options: [
        { id: 'a', text: 'IgE-mediated (Th2)' },
        { id: 'b', text: 'Th1-mediated macrophage activation (cell-mediated)' },
        { id: 'c', text: 'Immune-complex deposition' },
        { id: 'd', text: 'Complement MAC lysis' },
      ],
      answerId: 'b',
      explanation: 'Th1 cells (IFN-γ, CD40L) activate macrophages to contain intracellular bacteria in granulomas. This cell-mediated axis is why anti-TNF therapy can reactivate latent TB.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Immunity to microbes', svg: IMMUNITY_TO_MICROBES, caption: 'Extracellular bacteria → antibody/complement/neutrophils; intracellular → Th1/macrophage/CTL; with evasion strategies.' },
  ],
};

export default immunityBacteriaExtracellularIntracellular;
