import type { Lecture } from '../../lib/types';
import { BLOOD_VESSEL_WALLS } from '../../lib/figures';

export const bloodVesselHistology: Lecture = {
  id: 'blood-vessel-histology',
  title: 'Blood Vessel Histology: Wall Layers & Vessel Types',
  system: 'cardiovascular',
  source: 'L2 — Histology of the Cardiovascular System',
  updated: '2026-07-02',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'L2 CVS Histology' },
    { kind: 'mechanism', label: 'Three tunics' },
    { kind: 'exam', label: 'Elastic vs muscular artery' },
  ],

  highYield: [
    '**Vessel walls have three concentric tunics.** **Tunica intima** = **endothelium** + basement membrane + subendothelial connective tissue (innermost). **Tunica media** = **smooth muscle + elastic fibres** (the middle; thickest in arteries). **Tunica adventitia** = connective tissue anchoring the vessel (contains **vasa vasorum** — vessels supplying large vessel walls).',
    '**Elastic (conducting) arteries** (aorta, big branches) have a **media dominated by elastic laminae** → they stretch in systole and **recoil in diastole (the "Windkessel" effect)**, smoothing pulsatile flow into steady tissue perfusion.',
    '**Muscular (distributing) arteries** (e.g. coronary, radial) have a **thick smooth-muscle media** → distribute blood and regulate flow to organs. **Arterioles** have a small lumen with smooth muscle → the **main resistance vessels** that control blood pressure and regional flow.',
    '**Capillaries are just endothelium + basement membrane (one cell thick)** — the exchange vessels. Three types: **continuous** (tight, e.g. muscle, brain/BBB), **fenestrated** (pores, e.g. kidney glomerulus, gut, endocrine), and **sinusoidal/discontinuous** (large gaps, e.g. liver, spleen, bone marrow).',
    '**Veins have thin walls, large lumens, and low pressure**, so they are the **capacitance vessels holding ~65% of the blood volume**; many contain **valves** (especially in the limbs) to prevent backflow and aid venous return with the muscle pump. Compared to its companion artery, a vein has a bigger, more collapsed lumen and a thinner wall.',
  ],

  mechanism: {
    title: 'Same 3 tunics, tuned to the job',
    steps: [
      { id: 's1', label: 'Intima (endothelium) · media (muscle/elastic) · adventitia', emphasis: 'key' },
      { id: 's2', label: 'Elastic artery: elastic media → recoil (Windkessel)', emphasis: 'key' },
      { id: 's3', label: 'Muscular artery/arteriole: smooth-muscle media → resistance', emphasis: 'key' },
      { id: 's4', label: 'Capillary = endothelium only (continuous/fenestrated/sinusoid)' },
      { id: 's5', label: 'Vein: thin wall, big lumen, valves → capacitance' },
    ],
  },

  examFindings: [
    { sign: 'Media full of elastic laminae', mechanism: 'Elastic (conducting) artery — recoil in diastole', significance: 'key' },
    { sign: 'Thick smooth-muscle media, small lumen', mechanism: 'Muscular artery / arteriole (resistance)', significance: 'key' },
    { sign: 'Fenestrated capillary in the renal glomerulus', mechanism: 'Pores for filtration', significance: 'supportive' },
    { sign: 'Sinusoidal capillaries in the liver', mechanism: 'Large gaps for macromolecule/cell passage', significance: 'supportive' },
    { sign: 'Thin-walled vessel with a valve', mechanism: 'Vein (capacitance; prevents backflow)', significance: 'key' },
  ],

  investigations: [
    { clue: 'Innermost vessel tunic', meaning: 'Tunica intima (endothelium)' },
    { clue: 'Artery type with an elastic-fibre-rich media', meaning: 'Elastic (conducting) artery, e.g. aorta' },
    { clue: 'Capillary type in the blood–brain barrier', meaning: 'Continuous (tight)' },
    { clue: 'Vessels holding most of the blood volume', meaning: 'Veins (capacitance)' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Wall structure underlies atherosclerosis (intima), aneurysm (media/elastin loss), the Windkessel effect, and capillary exchange (Starling). Endothelial dysfunction starts vascular disease. Vessel function overview: [[systemic-pulmonary-circulation]]; capillary exchange: [[hemodynamics-preload-afterload-cardiac-output]].' },
  ],

  mnemonics: [
    { hook: 'Tunics: "I-M-A" — Intima (endothelium), Media (muscle/elastic), Adventitia', expansion: ['Media thickest in arteries'] },
    { hook: 'Capillaries: "Continuous, Fenestrated, Sinusoid" (tight → porous → leaky)', expansion: ['BBB, kidney, liver'] },
  ],

  traps: [
    {
      questionCategory: 'Elastic vs muscular artery',
      wrongInstinct: 'The aorta has a media dominated by smooth muscle like a muscular artery',
      rightAnswer: 'The aorta is an ELASTIC artery (media dominated by elastic laminae for recoil); muscular arteries have a smooth-muscle-dominated media',
      why: 'Elastic arteries store energy in systole and recoil in diastole (Windkessel); muscular arteries distribute/regulate flow. The wall composition differs.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'The elastic recoil of the aorta during diastole (the Windkessel effect) is possible because its tunica media is rich in:',
      options: [
        { id: 'a', text: 'Smooth muscle only' },
        { id: 'b', text: 'Elastic laminae/fibres' },
        { id: 'c', text: 'Endothelium' },
        { id: 'd', text: 'Collagen only' },
      ],
      answerId: 'b',
      explanation: 'Elastic (conducting) arteries like the aorta have a media dominated by elastic laminae that stretch in systole and recoil in diastole, smoothing pulsatile flow into continuous perfusion.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'A capillary consists of:',
      options: [
        { id: 'a', text: 'All three tunics with a thick muscular media' },
        { id: 'b', text: 'A single layer of endothelium on a basement membrane' },
        { id: 'c', text: 'Endothelium plus a thick elastic media' },
        { id: 'd', text: 'Only smooth muscle' },
      ],
      answerId: 'b',
      explanation: 'Capillaries are just endothelium and its basement membrane — a single-cell-thick wall optimised for exchange. Types (continuous, fenestrated, sinusoidal) differ in permeability.',
      tests: 'mechanism',
    },
  ],

  figures: [
    { title: 'Blood vessel walls', svg: BLOOD_VESSEL_WALLS, caption: 'Three tunics (intima/media/adventitia); elastic vs muscular arteries, arterioles (resistance), capillaries (exchange), veins (capacitance, valves).' },
  ],
};

export default bloodVesselHistology;
