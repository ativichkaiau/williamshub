import type { Lecture } from '../../lib/types';
import { VISUAL_FIELD_DEFECTS } from '../../lib/figures';

export const visualPathwayFields: Lecture = {
  id: 'visual-pathway-fields',
  title: 'Visual Pathway & Field Defects',
  system: 'neuro',
  source: 'L4 — Common Eye Disorders',
  updated: '2026-07-01',
  tags: [
    { kind: 'system', label: 'Neuro' },
    { kind: 'lecture', label: 'L4 Common Eye Disorders' },
    { kind: 'disease', label: 'Field defects' },
    { kind: 'mechanism', label: 'Retina → occiput' },
    { kind: 'exam', label: 'Hemianopia' },
  ],

  highYield: [
    '**Pathway**: retina → optic **nerve** → **chiasm** → optic **tract** → **LGB** → optic **radiation** → **occipital (BA17)**. Nasal fibers (temporal fields) cross at the chiasm.',
    '**Prechiasmal (optic nerve) = monocular field loss** ± RAPD. **Chiasm = bitemporal (heteronymous) hemianopia** (e.g. pituitary tumor); a junctional lesion adds a contralateral superior scotoma.',
    '**Postchiasmal = contralateral homonymous defect**. Optic **tract → incongruous** homonymous hemianopia; the more **posterior** the lesion, the **more congruous** it becomes.',
    '**Optic radiation quadrantanopias**: **temporal lobe (Meyer’s loop) → superior** quadrantanopia (“pie in the sky”); **parietal lobe → inferior** quadrantanopia.',
    '**Occipital lobe → contralateral homonymous hemianopia with MACULAR SPARING** (dual MCA/PCA blood supply to the occipital pole).',
  ],

  mechanism: {
    title: 'Position along the pathway → shape of the defect',
    steps: [
      { id: 's1', label: 'Optic nerve → monocular loss' },
      { id: 's2', label: 'Chiasm → bitemporal hemianopia', emphasis: 'key' },
      { id: 's3', label: 'Tract/radiation → homonymous (incongruous → congruous)' },
      { id: 's4', label: 'Occipital → homonymous hemianopia, macular sparing' },
    ],
  },

  examFindings: [
    { sign: 'Bitemporal hemianopia', mechanism: 'Chiasmal compression (pituitary/craniopharyngioma)', significance: 'key' },
    { sign: 'Congruous homonymous hemianopia with macular sparing', mechanism: 'Occipital (PCA) lesion', significance: 'key' },
    { sign: 'Superior quadrantanopia (“pie in the sky”)', mechanism: 'Temporal-lobe (Meyer’s loop) radiation lesion', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Formal perimetry (visual fields)', meaning: 'Maps the defect precisely' },
    { clue: 'RAPD / color vision / acuity', meaning: 'Optic-nerve vs post-chiasmal disease' },
    { clue: 'MRI along the pathway', meaning: 'Localizes chiasm, tract, radiation, occiput' },
  ],

  treatment: [
    { logic: 'Treat the causative lesion', detail: 'e.g. resect a chiasm-compressing pituitary adenoma.' },
    { logic: 'Congruity + macular status refine localization', detail: 'Guides which segment to image.' },
  ],

  mnemonics: [
    { hook: 'Chiasm = bitemporal; behind it = homonymous', expansion: ['Crossing nasal fibers = temporal fields'] },
    { hook: 'Temporal loop = superior (“pie in the sky”); parietal = inferior', expansion: ['Meyer’s loop dips into the temporal lobe'] },
  ],

  traps: [
    {
      questionCategory: 'Bitemporal vs homonymous',
      wrongInstinct: 'Any hemianopia points to an occipital stroke',
      rightAnswer: 'Bitemporal (heteronymous) hemianopia localizes to the optic chiasm; a homonymous hemianopia is retrochiasmal',
      why: 'Only a chiasmal lesion splits the two temporal (crossing nasal) fibers to give a bitemporal pattern; any lesion behind the chiasm produces a same-sided (homonymous) defect in both eyes.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A patient with a pituitary macroadenoma is most likely to show which visual field defect?',
      options: [
        { id: 'a', text: 'Monocular blindness' },
        { id: 'b', text: 'Bitemporal hemianopia' },
        { id: 'c', text: 'Right homonymous hemianopia with macular sparing' },
        { id: 'd', text: 'Superior quadrantanopia' },
      ],
      answerId: 'b',
      explanation: 'A pituitary tumor compresses the optic chiasm, damaging the crossing nasal fibers and producing a bitemporal (heteronymous) hemianopia.',
      tests: 'exam',
    },
  ],

  figures: [
    { title: 'Visual field defects by lesion site', svg: VISUAL_FIELD_DEFECTS, caption: 'Optic nerve (monocular) → chiasm (bitemporal) → tract (homonymous) → temporal radiation (superior quadrant) → occiput (homonymous, macular sparing).' },
  ],
};

export default visualPathwayFields;
