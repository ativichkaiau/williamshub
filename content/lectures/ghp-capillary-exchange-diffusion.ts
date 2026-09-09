import type { Lecture } from '../../lib/types';

export const ghpCapillaryExchangeDiffusion: Lecture = {
  id: 'ghp-capillary-exchange-diffusion',
  title: 'Capillary Exchange: Diffusion & the Microcirculation',
  system: 'cardiovascular',
  source: 'Ch 16 — The Microcirculation & the Lymphatic System',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Cardiovascular' },
    { kind: 'lecture', label: 'Ch 16 Microcirculation' },
    { kind: 'mechanism', label: 'Diffusional exchange' },
    { kind: 'exam', label: 'Lipid-soluble vs water-soluble routes' },
  ],

  highYield: [
    '**Diffusion — not filtration — does essentially all of the exchange work.** Water diffuses back and forth across the capillary wall roughly **80× faster than plasma flows along the capillary**, so most solutes have fully equilibrated long before the red cell reaches the venule. Net **filtration is only ~2–4 L/day**; the two figures are orders of magnitude apart in the same vessel. **Nutrition is diffusive; fluid balance is filtrative.** Do not let an exam question blur them.',
    '**Two routes across the wall, and the route decides the speed.** **Lipid-soluble** molecules (**O₂, CO₂**, anaesthetic gases, ethanol) dissolve straight through the **endothelial cell membrane** and so use the **entire capillary surface** — their transfer is **perfusion (flow)-limited**, not permeability-limited. **Water-soluble, non-lipid-soluble** molecules (**Na⁺, Cl⁻, glucose, urea**) can pass only through **intercellular clefts ~6–7 nm wide** that occupy about **1/1000 of the wall area** — and even that suffices for near-complete equilibration in a normal transit time.',
    '**Permeability collapses as molecular size rises.** Taking water as 1.0: **NaCl ~0.96, urea ~0.8, glucose ~0.6, sucrose ~0.4, inulin ~0.2, myoglobin ~0.03, albumin ~0.001**. That last number is the whole of Starling physiology compressed into one figure — the pore **effectively excludes plasma protein**, which is precisely why a protein gradient can hold fluid inside the vessel.',
    '**Pore anatomy is organ-specific, and that is the examinable point.** **Brain** — continuous endothelium with tight junctions, essentially no cleft pathway (the blood–brain barrier: water, O₂, CO₂ and lipid-soluble drugs only). **Muscle and skin** — continuous, narrow clefts. **Gut, endocrine glands, glomerulus** — **fenestrated**, giving very high water and small-solute permeability while still retaining albumin. **Liver sinusoids** — **discontinuous, with gaps wide enough for protein**, which is why hepatic lymph is almost as protein-rich as plasma.',
    '**Vasomotion makes flow through any one capillary intermittent, and oxygen sets the rhythm.** **Metarterioles and precapillary sphincters** open and close cyclically; the dominant controller is **local tissue O₂** — a low tissue O₂ lengthens the open phase, so more sphincters are open for more of the time. Exchange therefore depends on the **time-averaged number of open capillaries**, never on what one capillary is doing at one instant.',
    '**The geometry is purpose-built for a passive process.** Wall thickness **one endothelial cell (~0.5 μm)**; lumen **4–9 μm**, so a red cell must deform to squeeze through (which conveniently smears its membrane against the wall); total exchange surface **~500–700 m²**; and almost no cell lies more than **20–50 μm** from a capillary. Tiny distance × enormous area = diffusion is more than sufficient.',
  ],

  mechanism: {
    title: 'Why a passive process is enough: short distance, vast area, steep gradient',
    steps: [
      { id: 's1', label: 'Arteriole → metarteriole → precapillary sphincter → true capillary → venule' },
      { id: 's2', label: 'Local tissue O2 sets sphincter tone — vasomotion opens and closes capillaries', emphasis: 'key' },
      { id: 's3', label: 'Wall is one cell thick (~0.5 μm); no cell sits more than ~50 μm away' },
      { id: 's4', label: 'Lipid-soluble O2 and CO2 cross the whole endothelial surface — transfer becomes flow-limited', emphasis: 'key' },
      { id: 's5', label: 'Water-soluble solutes cross only the 6–7 nm clefts (~1/1000 of the area)' },
      { id: 's6', label: 'Protein is effectively excluded — creating the gradient all Starling forces depend on', emphasis: 'key' },
    ],
  },

  examFindings: [
    { sign: 'Raising blood flow raises tissue oxygen uptake, while raising permeability does not', mechanism: 'Oxygen is perfusion-limited because lipid solubility lets it use the entire endothelial surface', significance: 'key' },
    { sign: 'Carbon dioxide leaves tissue far more readily than oxygen enters it', mechanism: 'CO2 is about 20 times more soluble, so it diffuses faster for the same partial-pressure gradient', significance: 'supportive' },
    { sign: 'Injected inulin distributes through extracellular fluid but does not enter cells', mechanism: 'It crosses the capillary cleft but not the cell membrane — the basis of ECF volume measurement', significance: 'key' },
    { sign: 'A polar antibiotic reaches muscle interstitium but not brain tissue', mechanism: 'Cerebral endothelial tight junctions abolish the cleft pathway', significance: 'key' },
    { sign: 'Intravital microscopy shows single capillaries flowing in bursts rather than continuously', mechanism: 'Vasomotion of metarterioles and precapillary sphincters, driven by local oxygen', significance: 'supportive' },
    { sign: 'Hepatic lymph protein concentration approaches that of plasma', mechanism: 'Discontinuous sinusoidal endothelium allows albumin to escape freely', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Water exchange across the wall about 80 times the plasma flow through the capillary', meaning: 'Diffusion, not bulk flow, is the exchange mechanism' },
    { clue: 'Transfer rises with blood flow but is unchanged by opening more capillaries', meaning: 'Perfusion (flow)-limited exchange — O2, CO2, nitrous oxide' },
    { clue: 'Transfer rises when capillary surface is recruited but not when flow rises', meaning: 'Diffusion-limited exchange — large or poorly permeable solutes' },
    { clue: 'Relative capillary permeability of albumin about 0.001', meaning: 'Effective protein exclusion — the origin of plasma colloid osmotic pressure' },
    { clue: 'Fenestrations of 20–100 nm with no protein leak', meaning: 'Glomerular or splanchnic capillary — high hydraulic conductivity, still size-selective' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Because exchange is diffusive, tissue oxygenation is a **flow** problem in health and a **distance** problem in disease — oedema and fibrosis widen the gap between capillary and cell and can starve a tissue at a perfectly normal blood flow. The same pore that excludes albumin is what makes the fluid balance in [[ghp-starling-forces-filtration]] work at all, and the protein that does escape can only go home via [[ghp-lymphatic-interstitial-fluid]].' },
    { logic: 'Where it is exploited clinically', detail: 'Pore heterogeneity explains why a lipid-soluble drug crosses the blood–brain barrier and a polar one does not, why contrast and inulin are extracellular markers, and why burns and sepsis flood tissues once the cleft becomes protein-permeable. The identical logic applied to the alveolar–capillary membrane is [[gas-exchange-diffusion]]; the underlying membrane physics sits in [[ghp-membrane-transport-overview]].' },
  ],

  mnemonics: [
    { hook: 'Fat goes THROUGH, water goes BETWEEN', expansion: ['Lipid-soluble (O2, CO2, anaesthetics) — straight through the endothelial membrane, whole surface, flow-limited', 'Water-soluble (Na, Cl, glucose) — only through the 6–7 nm intercellular clefts', 'Protein — effectively neither, and that exclusion is what holds fluid in the vessel'] },
    { hook: 'Tight, Continuous, Fenestrated, Discontinuous = Brain, Muscle, Gut/Glomerulus, Liver', expansion: ['Leakiness rises as you go down the list', 'Lymph protein concentration rises with it', 'Liver sinusoids therefore make the most protein-rich lymph in the body'] },
  ],

  traps: [
    {
      questionCategory: 'Which process actually feeds the tissue',
      wrongInstinct: 'Filtration at the arterial end delivers the nutrients and reabsorption at the venous end removes the waste',
      rightAnswer: 'Diffusion accounts for essentially all nutrient and gas exchange; filtration and reabsorption govern fluid volume distribution, not nutrition',
      why: 'Diffusional water exchange exceeds net filtration by several orders of magnitude in the same capillary.',
    },
    {
      questionCategory: 'Perfusion-limited versus diffusion-limited transfer',
      wrongInstinct: 'The way to raise oxygen delivery in a normal tissue is to open more capillaries with a vasodilator',
      rightAnswer: 'Oxygen is perfusion-limited in normal tissue, so delivery follows blood flow; recruitment matters chiefly when diffusion distance is increased, as in oedema or fibrosis',
      why: 'A flow-limited solute equilibrates within the first fraction of the capillary length, so extra surface adds little.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'Which substance crosses the capillary wall predominantly through the endothelial cell membrane itself rather than through intercellular clefts?',
      options: [
        { id: 'a', text: 'Sodium' },
        { id: 'b', text: 'Glucose' },
        { id: 'c', text: 'Oxygen' },
        { id: 'd', text: 'Inulin' },
      ],
      answerId: 'c',
      explanation: 'Oxygen is lipid soluble, so it dissolves through the entire endothelial surface and its transfer becomes perfusion-limited. Sodium, glucose and inulin are water soluble and restricted to the intercellular clefts, which make up only about a thousandth of the wall area.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Relative to water, the capillary permeability of albumin is roughly 0.001. What is the main physiological consequence?',
      options: [
        { id: 'a', text: 'Albumin cannot be used to measure plasma volume' },
        { id: 'b', text: 'A colloid osmotic gradient is maintained that opposes filtration' },
        { id: 'c', text: 'Oxygen delivery becomes diffusion-limited' },
        { id: 'd', text: 'Interstitial fluid becomes hyperosmolar to plasma' },
      ],
      answerId: 'b',
      explanation: 'Effective protein exclusion by the pore keeps plasma protein concentration far above interstitial, generating the ~28 mmHg colloid osmotic pressure that opposes hydrostatic filtration. Albumin retention is exactly why labelled albumin does measure plasma volume (a), and oxygen transfer is flow-limited, not diffusion-limited (c). Crystalloid osmolarity is essentially equal across the wall (d).',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Intermittent flow through individual capillaries (vasomotion) is controlled principally by:',
      options: [
        { id: 'a', text: 'Sympathetic innervation of the precapillary sphincters' },
        { id: 'b', text: 'Circulating angiotensin II' },
        { id: 'c', text: 'The local tissue oxygen concentration' },
        { id: 'd', text: 'Pulsatile arterial pressure transmitted to the capillary' },
      ],
      answerId: 'c',
      explanation: 'Metarteriolar and precapillary sphincter cycling is set mainly by local tissue oxygen: when oxygen falls, the open phase lengthens and more capillaries perfuse. Precapillary sphincters are largely without significant sympathetic innervation, and circulating hormones modulate rather than drive the cycle.',
      tests: 'mechanism',
    },
  ],
};

export default ghpCapillaryExchangeDiffusion;
