import type { Lecture } from '../../lib/types';
import { GLAND_TYPES } from '../../lib/figures';

export const glandsExocrineEndocrine: Lecture = {
  id: 'glands-exocrine-endocrine',
  title: 'Glands: Exocrine vs Endocrine & Modes of Secretion',
  system: 'histology',
  source: 'L4 — Glands & Connective Tissue',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L4 Glands & CT' },
    { kind: 'mechanism', label: 'Secretion modes' },
    { kind: 'exam', label: 'Merocrine/apocrine/holocrine' },
  ],

  highYield: [
    '**Glands are epithelial down-growths that secrete.** **Exocrine** glands keep a **duct** and release product onto a **surface/lumen**; **endocrine** glands **lose their duct** and secrete **hormones into the blood** (e.g. thyroid, islets, adrenal).',
    '**Exocrine glands are classified by duct + secretory-unit shape.** Duct: **simple** (unbranched) vs **compound** (branched). Secretory unit: **tubular, acinar/alveolar (rounded), or tubuloacinar**. (e.g. pancreas = compound tubuloacinar.)',
    '**Three modes of secretion — the classic exam triad.** **Merocrine (eccrine)** = **exocytosis, cell stays intact** (most glands: salivary, pancreas, eccrine sweat). **Apocrine** = **apical cytoplasm is pinched off** with the product (mammary, axillary sweat). **Holocrine** = **the whole cell disintegrates** to become the secretion (**sebaceous gland**).',
    '**Product type: serous vs mucous.** **Serous** cells are protein/enzyme-secreting → **basophilic, round nucleus, zymogen granules** (pancreatic acinus, parotid). **Mucous** cells secrete viscous **mucin** → pale/foamy cytoplasm, flattened basal nucleus (goblet cells). **Mixed** glands (submandibular) have **serous demilunes** capping mucous acini.',
    '**Unicellular vs multicellular.** The **goblet cell** is the classic unicellular exocrine gland (mucin, in gut/airway epithelium). Most glands are multicellular with a secretory portion + duct system.',
  ],

  mechanism: {
    title: 'Duct? → exocrine; how released? → mode',
    steps: [
      { id: 's1', label: 'Has a duct → exocrine (to surface); no duct → endocrine (to blood)', emphasis: 'key' },
      { id: 's2', label: 'Classify exocrine by duct (simple/compound) + unit (tubular/acinar)' },
      { id: 's3', label: 'Merocrine = exocytosis, cell intact (most)', emphasis: 'key' },
      { id: 's4', label: 'Apocrine = apex pinched; Holocrine = whole cell (sebaceous)', emphasis: 'key' },
      { id: 's5', label: 'Serous (protein, basophilic) vs mucous (mucin, pale)' },
    ],
  },

  examFindings: [
    { sign: 'Sebaceous gland secretion', mechanism: 'Holocrine — entire cell disintegrates into sebum', significance: 'key' },
    { sign: 'Salivary/pancreatic secretion', mechanism: 'Merocrine — exocytosis, cell preserved', significance: 'key' },
    { sign: 'Mammary/axillary sweat secretion', mechanism: 'Apocrine — apical cytoplasm shed', significance: 'supportive' },
    { sign: 'Basophilic acinar cells with apical zymogen granules', mechanism: 'Serous secretory cells (protein)', significance: 'key' },
    { sign: 'Pale foamy cells with basal flattened nuclei', mechanism: 'Mucous secretory cells (mucin)', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Gland whose cells die to release product', meaning: 'Holocrine (sebaceous)' },
    { clue: 'Ductless gland releasing hormone into blood', meaning: 'Endocrine' },
    { clue: 'A single mucin-secreting cell in the gut lining', meaning: 'Goblet cell (unicellular exocrine)' },
    { clue: 'Serous demilune capping a mucous acinus', meaning: 'Mixed gland (e.g. submandibular)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Secretion mode explains sebaceous vs sweat gland biology and where tumours arise. Endocrine histology (follicles, cords) underpins the endocrine-pathology courses. Serous/mucous distinction identifies salivary and GI glands on slides.' },
  ],

  mnemonics: [
    { hook: 'Holocrine = "whole cell" (sebaceous); Apocrine = "apex off"; Merocrine = "merely exocytosis"', expansion: ['Most glands are merocrine'] },
    { hook: 'Serous = protein + baSophilic; Mucous = Mucin + pale', expansion: ['Zymogen granules vs foamy cytoplasm'] },
  ],

  traps: [
    {
      questionCategory: 'Secretion mode of sebaceous glands',
      wrongInstinct: 'Sebaceous glands secrete sebum by apocrine (pinching off the apex)',
      rightAnswer: 'Sebaceous glands are HOLOCRINE — the entire cell disintegrates to form the secretion',
      why: 'Apocrine sheds only apical cytoplasm (mammary/axillary sweat); holocrine sacrifices the whole cell (sebaceous).',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A gland in which the entire secretory cell disintegrates and becomes the secretory product uses which mode?',
      options: [
        { id: 'a', text: 'Merocrine' },
        { id: 'b', text: 'Apocrine' },
        { id: 'c', text: 'Holocrine' },
        { id: 'd', text: 'Endocrine' },
      ],
      answerId: 'c',
      explanation: 'Holocrine secretion (sebaceous gland) sacrifices the whole cell. Merocrine = exocytosis with an intact cell; apocrine = apical cytoplasm pinched off.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Serous secretory cells (e.g. pancreatic acini) are recognised histologically by:',
      options: [
        { id: 'a', text: 'Pale, foamy cytoplasm with a flattened basal nucleus' },
        { id: 'b', text: 'Basophilic cytoplasm, a round nucleus, and apical zymogen granules' },
        { id: 'c', text: 'Absence of any organelles' },
        { id: 'd', text: 'A ciliated apical surface' },
      ],
      answerId: 'b',
      explanation: 'Serous (protein-secreting) cells have basophilic RER-rich cytoplasm, a round central nucleus, and apical zymogen granules. Pale foamy cells with basal nuclei are mucous cells.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Gland classification & secretion modes', svg: GLAND_TYPES, caption: 'Exocrine (duct) vs endocrine (ductless→blood); merocrine (exocytosis) / apocrine (apex shed) / holocrine (whole cell); serous vs mucous product.' },
  ],
};

export default glandsExocrineEndocrine;
