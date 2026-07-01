import type { Lecture } from '../../lib/types';
import { EPITHELIAL_TYPES } from '../../lib/figures';

export const epithelialClassification: Lecture = {
  id: 'epithelial-classification',
  title: 'Classification of Epithelium & Where to Find It',
  system: 'histology',
  source: 'L3 — Epithelium & Cell Adhesion',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Histology' },
    { kind: 'lecture', label: 'L3 Epithelium' },
    { kind: 'mechanism', label: 'Layers × shape' },
    { kind: 'exam', label: 'Identify the epithelium' },
  ],

  highYield: [
    '**Epithelium = avascular sheets of tightly-joined cells, sitting on a basement membrane, with apical–basal polarity.** Functions: **protection, permeability control, absorption, secretion, excretion, transport, and sensation**. It is nourished by diffusion from the underlying connective tissue.',
    '**Name it by TWO features: (1) number of layers, (2) shape of the SURFACE cell.** Layers: **simple** (one), **stratified** (many). Shapes: **squamous** (flat), **cuboidal** (cube), **columnar** (tall). Always classify by the *apical* layer\'s cell shape.',
    '**Simple epithelia (thin, for exchange/absorption).** Simple squamous → **endothelium** (vessels), **mesothelium** (pleura/peritoneum/pericardium), Bowman\'s capsule, alveoli (diffusion/filtration). Simple cuboidal → **thyroid follicles, kidney tubules, small ducts** (secretion/absorption). Simple columnar → **stomach–intestine, gallbladder, uterine tube** (absorption/secretion).',
    '**Stratified epithelia (thick, for protection).** Stratified squamous **keratinized** → **epidermis** (dry, dead surface, keratin); **non-keratinized** → **esophagus, oral cavity, vagina, cornea** (wet, nucleated surface). Stratified cuboidal/columnar → large gland ducts (rarer).',
    '**Two special types.** **Pseudostratified ciliated columnar** — ONE layer where all cells touch the BM but nuclei sit at different heights, so it *looks* layered → **respiratory tract** (with goblet cells). **Transitional (urothelium)** — stretchable, dome-shaped **umbrella cells** on the surface → **bladder, ureter** (accommodates urine volume).',
  ],

  mechanism: {
    title: 'Layers + surface shape → the name',
    steps: [
      { id: 's1', label: 'Count layers: simple (1) vs stratified (many)', emphasis: 'key' },
      { id: 's2', label: 'Read the SURFACE cell shape: squamous/cuboidal/columnar', emphasis: 'key' },
      { id: 's3', label: 'Simple → thin, exchange/absorption/secretion' },
      { id: 's4', label: 'Stratified squamous → protection (keratinized vs not)' },
      { id: 's5', label: 'Pseudostratified = airway; transitional = urinary' },
    ],
  },

  examFindings: [
    { sign: 'Flat single layer lining a blood vessel', mechanism: 'Simple squamous = endothelium', significance: 'key' },
    { sign: 'Cuboidal cells around a colloid-filled follicle', mechanism: 'Simple cuboidal = thyroid follicle', significance: 'key' },
    { sign: 'Tall cells with a surface brush border in the gut', mechanism: 'Simple columnar (absorptive)', significance: 'supportive' },
    { sign: 'Nuclei at many heights, all touching BM, with cilia + goblet cells', mechanism: 'Pseudostratified ciliated columnar (airway)', significance: 'key' },
    { sign: 'Dome-shaped umbrella cells over the bladder lumen', mechanism: 'Transitional epithelium (urothelium)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Skin surface with anucleate flattened keratin layer', meaning: 'Keratinized stratified squamous (epidermis)' },
    { clue: 'Esophagus lining, wet, nucleated surface cells', meaning: 'Non-keratinized stratified squamous' },
    { clue: 'Ciliated lining of the trachea with mucus cells', meaning: 'Pseudostratified ciliated columnar' },
    { clue: 'Lining that flattens as the bladder fills', meaning: 'Transitional (urothelium)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Identifying an epithelium locates the tissue and predicts its function/pathology (e.g. Barrett esophagus = squamous→columnar metaplasia; most cancers are carcinomas from epithelium). Surface specialisations and junctions are covered in [[epithelial-surface-basement-membrane]] and [[cell-junctions]].' },
  ],

  mnemonics: [
    { hook: '"Simple = 1 layer, Stratified = stacks"; name by the top cell', expansion: ['Squamous flat, cuboidal cube, columnar tall'] },
    { hook: 'Pseudostratified = airway; Transitional = urinary', expansion: ['Looks layered but isn\'t; stretches'] },
  ],

  traps: [
    {
      questionCategory: 'Pseudostratified vs stratified',
      wrongInstinct: 'Pseudostratified epithelium is a true multilayered (stratified) epithelium',
      rightAnswer: 'It is a SINGLE layer — every cell touches the basement membrane, but nuclei at different heights create a layered illusion',
      why: 'The defining feature is BM contact by all cells. Stratified epithelia have upper cells that do NOT touch the BM.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The epithelium lining the trachea, in which all cells contact the basement membrane but nuclei lie at different levels, is:',
      options: [
        { id: 'a', text: 'Stratified columnar' },
        { id: 'b', text: 'Simple columnar' },
        { id: 'c', text: 'Pseudostratified ciliated columnar' },
        { id: 'd', text: 'Transitional' },
      ],
      answerId: 'c',
      explanation: 'The respiratory tract is lined by pseudostratified ciliated columnar epithelium with goblet cells — one layer that only appears stratified because of staggered nuclei.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Simple squamous epithelium lining the pleural, peritoneal, and pericardial cavities is specifically called:',
      options: [
        { id: 'a', text: 'Endothelium' },
        { id: 'b', text: 'Mesothelium' },
        { id: 'c', text: 'Urothelium' },
        { id: 'd', text: 'Mesenchyme' },
      ],
      answerId: 'b',
      explanation: 'Mesothelium lines the serous body cavities; endothelium is the simple squamous lining of blood/lymphatic vessels. Urothelium is transitional epithelium of the urinary tract.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Types of epithelium', svg: EPITHELIAL_TYPES, caption: 'Simple/stratified × squamous/cuboidal/columnar, plus pseudostratified (airway) and transitional (urothelium), with typical locations.' },
  ],
};

export default epithelialClassification;
