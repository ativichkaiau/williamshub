import type { Lecture } from '../../lib/types';
import { MUCOSAL_IMMUNITY } from '../../lib/figures';

export const mucosalImmuneSystem: Lecture = {
  id: 'mucosal-immune-system',
  title: 'The Mucosal Immune System & Secretory IgA',
  system: 'immune',
  source: 'L11 — Mucosal Immunology & Microbiota',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Immunology' },
    { kind: 'lecture', label: 'L11 Mucosal Immunology' },
    { kind: 'mechanism', label: 'MALT · sIgA' },
    { kind: 'exam', label: 'M cells · secretory IgA' },
  ],

  highYield: [
    '**Mucosal surfaces are the body\'s largest immune interface** (gut, respiratory, urogenital) and are guarded by **mucosa-associated lymphoid tissue (MALT)** — including **GALT** (gut: Peyer\'s patches, appendix, isolated follicles), tonsils, and bronchial BALT.',
    '**M (microfold) cells** overlie Peyer\'s patches and **sample luminal antigen**, transporting it to underlying **dendritic cells** → antigen presentation to T and B cells in the patch. (Some pathogens, e.g. Salmonella, exploit M cells to invade.)',
    '**Secretory IgA (sIgA) is the signature mucosal antibody** — the **most abundantly produced immunoglobulin in the body**. Plasma cells make **dimeric IgA (+ J chain)**; it is transcytosed across the epithelium by the **polymeric Ig receptor (pIgR)**, which leaves the **secretory component** attached (protecting IgA from gut proteases).',
    '**sIgA works by "immune exclusion":** it **neutralises** and traps microbes/toxins in the mucus **without triggering inflammation** (it does not activate complement well) — defending the barrier quietly. IgA class switching is promoted by **TGF-β, APRIL, and BAFF**.',
    '**Intraepithelial lymphocytes (IELs)** and innate lymphoid cells provide rapid local defence within the epithelium. The mucosal system is functionally **integrated** — antigen exposure at one mucosal site can generate protection (and IgA plasma cells) at distant mucosae (the "common mucosal immune system").',
  ],

  mechanism: {
    title: 'Sample antigen → make IgA → secrete it',
    steps: [
      { id: 's1', label: 'MALT/GALT (Peyer\'s patches) organise mucosal immunity', emphasis: 'key' },
      { id: 's2', label: 'M cells sample luminal antigen → dendritic cells', emphasis: 'key' },
      { id: 's3', label: 'B cells class-switch to IgA (TGF-β, APRIL/BAFF)' },
      { id: 's4', label: 'Dimeric IgA transcytosed via pIgR → secretory IgA', emphasis: 'key' },
      { id: 's5', label: 'sIgA = immune exclusion (neutralise, non-inflammatory)' },
    ],
  },

  examFindings: [
    { sign: 'Specialised epithelial cell sampling gut antigen', mechanism: 'M (microfold) cell over a Peyer\'s patch', significance: 'key' },
    { sign: 'Secretory component attached to luminal IgA', mechanism: 'pIgR-mediated transcytosis (protects from proteases)', significance: 'key' },
    { sign: 'Most abundantly produced antibody', mechanism: 'Secretory IgA at mucosal surfaces', significance: 'key' },
    { sign: 'Recurrent mucosal/GI infections in IgA deficiency', mechanism: 'Loss of secretory IgA barrier defence', significance: 'supportive' },
    { sign: 'Salmonella invading via Peyer\'s-patch epithelium', mechanism: 'Pathogen exploiting M cells', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Cell transporting antigen from gut lumen to lymphoid tissue', meaning: 'M cell' },
    { clue: 'Receptor transcytosing dimeric IgA across epithelium', meaning: 'Polymeric Ig receptor (pIgR)' },
    { clue: 'Antibody providing "immune exclusion" at mucosa', meaning: 'Secretory IgA' },
    { clue: 'Organised gut lymphoid tissue in the ileum', meaning: 'Peyer\'s patches (GALT)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Mucosal (oral/intranasal) vaccines aim to induce sIgA (e.g. oral polio, rotavirus); breast-milk sIgA protects newborns; IgA deficiency is the commonest PID ([[primary-immunodeficiency-antibody-t]]). Tolerance to commensals: [[oral-tolerance-microbiota]].' },
  ],

  mnemonics: [
    { hook: 'M cell = "Microfold, sampling Menu"; sIgA = "secretory, silent (no inflammation)"', expansion: ['pIgR adds the secretory component'] },
    { hook: 'IgA = most produced antibody (mucosa); secretory component resists proteases', expansion: ['Immune exclusion'] },
  ],

  traps: [
    {
      questionCategory: 'Which antibody dominates mucosal defence?',
      wrongInstinct: 'IgG is the main antibody protecting mucosal surfaces',
      rightAnswer: 'Secretory IgA (dimeric, with secretory component) is the dominant mucosal antibody — the most abundantly produced immunoglobulin',
      why: 'sIgA provides non-inflammatory immune exclusion at mucosae; IgG dominates serum/systemic immunity.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The specialised epithelial cell that samples luminal antigen and delivers it to dendritic cells in a Peyer\'s patch is the:',
      options: [
        { id: 'a', text: 'Goblet cell' },
        { id: 'b', text: 'M (microfold) cell' },
        { id: 'c', text: 'Paneth cell' },
        { id: 'd', text: 'Enterocyte' },
      ],
      answerId: 'b',
      explanation: 'M cells overlie Peyer\'s patches and transcytose luminal antigen to underlying immune cells; some pathogens (e.g. Salmonella) exploit them to invade.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Dimeric IgA is delivered into mucosal secretions by transcytosis across the epithelium via:',
      options: [
        { id: 'a', text: 'The neonatal Fc receptor (FcRn)' },
        { id: 'b', text: 'The polymeric Ig receptor (pIgR), leaving the secretory component' },
        { id: 'c', text: 'Complement receptor 1' },
        { id: 'd', text: 'CD16 (FcγRIII)' },
      ],
      answerId: 'b',
      explanation: 'pIgR transports dimeric IgA across the epithelium; cleavage leaves the secretory component bound, protecting sIgA from gut proteases. FcRn transports IgG across the placenta.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Mucosal immunity', svg: MUCOSAL_IMMUNITY, caption: 'M cells sample antigen → Peyer\'s patch → IgA class switch → dimeric IgA transcytosed (pIgR) → secretory IgA in the lumen.' },
  ],
};

export default mucosalImmuneSystem;
