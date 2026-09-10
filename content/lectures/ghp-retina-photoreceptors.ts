import type { Lecture } from '../../lib/types';

export const ghpRetinaPhotoreceptors: Lecture = {
  id: 'ghp-retina-photoreceptors',
  title: 'The Retina: Layers, Rods and Cones, Fovea and Pigment Epithelium',
  system: 'neuro',
  source: 'Ch 50 — The Eye II — Receptor & Neural Function of the Retina',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 50 Retina: Receptor Function' },
    { kind: 'mechanism', label: 'Inverted retina → rod/cone division of labour' },
    { kind: 'exam', label: 'Cherry-red spot · blind spot · detachment' },
  ],

  highYield: [
    '**The retina is built backwards: light crosses the entire neural retina before it reaches a single photoreceptor.** From the vitreous outward the order is **internal limiting membrane, nerve fibre layer, ganglion cell layer, inner plexiform, inner nuclear (bipolar, horizontal, amacrine), outer plexiform, outer nuclear (photoreceptor nuclei), external limiting membrane, the rod and cone segments, and finally the retinal pigment epithelium** against the choroid. Photons therefore pass through **roughly ten layers of transparent neurons and their axons** before striking the pigment they will bleach. Two consequences drop straight out of that arrangement: **acuity is best where those layers are swept aside (the fovea)**, and **any lesion that thickens or lifts the inner layers degrades vision before it damages the receptors themselves**.',
    '**Rods and cones are two receptor systems tuned to opposite problems, and every exam difference follows from sensitivity versus resolution.** Roughly **120 million rods and 6 million cones** share the retina. **Rods** hold far more visual pigment per cell, respond to as little as a **single photon**, are **achromatic**, respond **slowly**, and are **absent from the fovea while peaking about 20 degrees out**. **Cones** need **hundreds of photons**, come in **three pigment types that make colour possible**, respond **fast**, and are **packed into the fovea**. The decisive difference is wiring rather than chemistry: **rods converge heavily, up to about 200 onto a single ganglion cell in the far periphery, which pools photons and buys sensitivity at the cost of resolution**, while **foveal cones run essentially 1:1 through a midget bipolar to a ganglion cell**, which preserves detail and throws sensitivity away.',
    '**The fovea has the best acuity in the body because everything that could scatter or absorb light has been moved out of the way.** The **macula is about 1.5 mm across and the central fovea only about 0.35 mm**, and there the **ganglion, bipolar and inner nuclear layers are displaced radially outward** so light lands almost directly on the receptors. The **foveola is avascular** — no capillaries lie in the light path — and it is **rod-free and cone-only**, with cones **slimmed to about 1.5 micrometres in diameter and elongated into rod-like shapes so more of them fit per square millimetre**. Add the **1:1 private line to the optic nerve** and you get the anatomical basis for **6/6 vision in the central 1 to 2 degrees and a steep fall-off outside it**.',
    '**The optic disc has no photoreceptors, which creates a real blind spot that nobody ever notices.** The disc sits about **3 mm nasal to the fovea**, so its scotoma is projected **about 15 degrees temporal to fixation in the visual field** and measures roughly **5 to 7 degrees across**. It is invisible in life for three reasons: **the two eyes cover each other, eye movements sweep the gap around, and the cortex fills in the surrounding pattern**. Clinically it is a fixed landmark — **an enlarged blind spot on perimetry is one of the earliest objective signs of papilloedema**, before acuity ever falls.',
    '**The retinal pigment epithelium is a single cell layer doing five jobs that the photoreceptors cannot survive without.** It **absorbs stray light with melanin** (the reason albinism gives photophobia, poor acuity and nystagmus rather than merely pale eyes), **stores vitamin A and regenerates 11-cis retinal for the visual cycle**, **phagocytoses the tips of shed outer segment discs** that each receptor renews continuously, forms the **outer blood-retinal barrier**, and **pumps nutrients in and fluid out** from the choriocapillaris. Because the RPE is also the pathway by which the **avascular outer retina is fed**, separating the two is not a cosmetic problem: **in retinal detachment the neurosensory retina lifts off the RPE and the photoreceptors begin to die within days**, which is why a **macula-on detachment is an emergency and a macula-off detachment has already spent much of its visual capital**.',
    '**The retina has two blood supplies with a sharp watershed, and that split explains the classic fundus pictures.** The **central retinal artery supplies the inner retina down to the inner nuclear layer**; the **choriocapillaris supplies the outer retina — photoreceptors and RPE — by diffusion across Bruch membrane**. So a **central retinal artery occlusion infarcts the inner retina and turns it opaque white**, while the **fovea, where the inner layers are absent and the choroid shows straight through, stays red — the cherry-red spot**. The same logic explains why a **cilioretinal artery, present in about 20 per cent of eyes, can preserve a wedge of central vision**, and why **choroidal disease (age-related macular degeneration) attacks the photoreceptor side first**.',
  ],

  mechanism: {
    title: 'A photon crossing the retina: from vitreous to ganglion cell axon',
    steps: [
      { id: 's1', label: 'Light traverses the nerve fibre, ganglion and bipolar layers before any pigment' },
      { id: 's2', label: 'At the fovea those inner layers are displaced aside and the light path is clear', emphasis: 'key' },
      { id: 's3', label: 'Photons strike rod or cone outer segments lying against the pigment epithelium', emphasis: 'key' },
      { id: 's4', label: 'RPE melanin absorbs what passes through, preventing back-scatter and blurring' },
      { id: 's5', label: 'Rods pool up to 200 receptors per ganglion cell; foveal cones run 1:1', emphasis: 'key' },
      { id: 's6', label: 'Ganglion axons sweep across the inner surface and exit at the receptor-free optic disc' },
    ],
  },

  examFindings: [
    { sign: 'Sudden painless total loss of vision in one eye with a pale opaque fundus and a cherry-red spot at the macula', mechanism: 'Central retinal artery occlusion infarcts the inner retina; the fovea has no inner layers, so choroidal red still shows through', significance: 'key' },
    { sign: 'Flashes, a shower of new floaters, then a curtain rising or falling across the field', mechanism: 'Retinal detachment separating photoreceptors from the pigment epithelium and their choroidal nutrition', significance: 'key' },
    { sign: 'An enlarged blind spot on perimetry with normal central acuity', mechanism: 'Swollen disc tissue displaces adjacent retina, widening the physiological scotoma before vision is lost', significance: 'key' },
    { sign: 'Failing vision in dim light and a ring-shaped mid-peripheral field defect with bone-spicule pigmentation', mechanism: 'Rod-predominant degeneration in retinitis pigmentosa, striking the rod-rich mid-periphery first and sparing foveal cones until late', significance: 'key' },
    { sign: 'An astronomer looks slightly to the side of a faint star to see it, and it disappears when looked at directly', mechanism: 'Averted vision: the fovea is rod-free, so the most sensitive retina lies about 20 degrees off axis', significance: 'supportive' },
    { sign: 'Photophobia, pendular nystagmus and reduced acuity in a child with pale irides and a transilluminating fundus', mechanism: 'Absent RPE and iris melanin allows light scatter, and foveal development is arrested', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'About 120 million rods and 6 million cones', meaning: 'Rods dominate by number and cover the periphery; cones are few but concentrated centrally' },
    { clue: 'Convergence of up to 200 rods onto one ganglion cell versus 1:1 for foveal cones', meaning: 'The trade-off that sets sensitivity against acuity in each system' },
    { clue: 'Inner retinal layers displaced radially and no capillaries in the light path', meaning: 'The foveola — the structural reason central acuity is highest here' },
    { clue: 'Optic disc 3 mm nasal to the fovea', meaning: 'Blind spot projected about 15 degrees temporal to fixation, 5 to 7 degrees wide' },
    { clue: 'Melanin screening, vitamin A storage, outer segment phagocytosis, outer blood-retinal barrier', meaning: 'The four functions of the retinal pigment epithelium that photoreceptor survival depends on' },
    { clue: 'Inner retina from the central retinal artery, outer retina from the choriocapillaris', meaning: 'Dual supply with a watershed at the inner nuclear layer, explaining the cherry-red spot' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Almost every retinal disease presents as a predictable combination of these facts. **Rod territory fails first in retinitis pigmentosa and vitamin A deficiency, so night vision and mid-peripheral field go before acuity.** **Cone and RPE territory fails first in macular degeneration and macular oedema, so acuity and reading go before the field.** **Inner retinal territory fails in arterial and venous occlusion, so loss is sudden, painless and altitudinal or total.** Detachment is the one where the clock is running visibly: the receptors are alive but starving, and macula-on is the moment worth acting on. Vascular counterparts in detail: [[retinal-vascular-occlusions]]. The bedside approach to painless visual loss: [[fcp1-eye-vision-loss]].' },
    { logic: 'Where it is examined', detail: 'Three stems recur. A cherry-red spot question that is really asking why one small patch of a dead retina stays red. A blind spot question that is really asking whether the disc is swollen — see [[optic-nerve-disc-edema]]. And a rods-versus-cones question dressed as a scenario, where the discriminator is always convergence rather than pigment. The transduction chemistry that these receptors run on is the next module: [[ghp-phototransduction-dark-adaptation]]. The circuitry that reads their output is here: [[ghp-colour-vision-retinal-circuits]].' },
  ],

  mnemonics: [
    { hook: 'Rods for the Dark, Cones for the Detail', expansion: ['Rods: many, sensitive, achromatic, slow, peripheral, heavily converged', 'Cones: few, insensitive, three pigments, fast, foveal, private lines', 'Sensitivity and acuity are bought with the same currency — convergence'] },
    { hook: 'Light goes last to the cell that sees', expansion: ['Photons cross ganglion, bipolar and nuclear layers before any pigment', 'The fovea wins by moving those layers out of the way', 'The pigment epithelium sits behind everything and mops up the rest'] },
  ],

  traps: [
    {
      questionCategory: 'Which retina detects a very dim point of light best',
      wrongInstinct: 'The fovea, because it has the highest acuity and the best vision',
      rightAnswer: 'The rod-rich retina about 20 degrees from fixation, which is why a faint star vanishes when looked at directly',
      why: 'The fovea is rod-free and its cones run 1:1, so it has no photon pooling; sensitivity comes from convergence, and convergence is exactly what the fovea sacrificed.',
    },
    {
      questionCategory: 'What the cherry-red spot actually is',
      wrongInstinct: 'The macula is the part that has infarcted, and the red colour is haemorrhage into it',
      rightAnswer: 'The macula is the only part still looking normal — it is thin, lacks inner layers, and is fed by the choroid, so choroidal red shows through the surrounding white infarcted retina',
      why: 'The white is the dying tissue and the red is the survivor; the inner retina is central retinal artery territory, the outer retina and fovea are choroidal.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 24-year-old is asked to fixate a small cross while a 5-degree target is moved across the field 15 degrees temporal to fixation, and reports that the target disappears entirely at that point. He has no visual symptoms. What accounts for this?',
      options: [
        { id: 'a', text: 'An early arcuate scotoma from glaucomatous nerve fibre loss' },
        { id: 'b', text: 'The optic disc, which contains no photoreceptors and sits nasal to the fovea' },
        { id: 'c', text: 'A branch retinal artery occlusion in the temporal retina' },
        { id: 'd', text: 'The foveal avascular zone, which cannot resolve moving targets' },
      ],
      answerId: 'b',
      explanation: 'The optic disc is the exit point for ganglion cell axons and contains no rods or cones, so it is a true absolute scotoma. Because it lies about 3 mm nasal to the fovea, its projection into the visual field falls about 15 degrees on the temporal side, and it measures roughly 5 to 7 degrees across. It is asymptomatic because the fellow eye covers it, eye movements shift it, and the cortex fills in the surround. A pathological scotoma would be symptomatic or at least not fall exactly on the physiological landmark, and the foveal avascular zone is the region of best resolution, not a scotoma.',
      tests: 'exam',
    },
    {
      id: 'q2',
      stem: 'Sudden painless loss of vision in one eye is accompanied by diffuse retinal whitening with a small red spot at the centre of the macula. Which statement best explains the red spot?',
      options: [
        { id: 'a', text: 'Blood has leaked from the choriocapillaris into the fovea' },
        { id: 'b', text: 'The fovea is supplied by the cilioretinal artery in every eye' },
        { id: 'c', text: 'The fovea lacks inner retinal layers and is nourished by the choroid, so it stays clear while the ischaemic inner retina turns opaque' },
        { id: 'd', text: 'Foveal cones are more resistant to ischaemia than peripheral rods' },
      ],
      answerId: 'c',
      explanation: 'Central retinal artery occlusion infarcts the inner retina, which swells and becomes opaque and white. At the fovea the inner layers have been displaced away, so there is almost nothing there to become opaque, and the outer retina there is fed by the choriocapillaris rather than the central retinal artery. The intact choroidal circulation shows through the thin transparent fovea as a red spot framed by the white infarct. A cilioretinal artery is present in only about a fifth of eyes and when present spares a wedge of retina, not just the foveola, and no haemorrhage is involved.',
      tests: 'mechanism',
    },
    {
      id: 'q3',
      stem: 'Which single feature best explains why visual acuity is far higher at the fovea than 20 degrees into the periphery?',
      options: [
        { id: 'a', text: 'Foveal cones contain more visual pigment per cell than peripheral rods' },
        { id: 'b', text: 'Foveal receptors connect essentially one-to-one to ganglion cells, whereas peripheral receptors converge in large numbers onto each ganglion cell' },
        { id: 'c', text: 'The fovea is closer to the optic disc, shortening the axons' },
        { id: 'd', text: 'The pigment epithelium is thicker beneath the fovea' },
      ],
      answerId: 'b',
      explanation: 'Spatial resolution is limited by how finely the retina samples the image at the output stage, and that is set by convergence. A foveal cone has a private midget bipolar and ganglion cell, so each sampling point is one receptor wide. In the periphery up to about 200 rods feed a single ganglion cell, so the sampling grid is coarse even though the same photons arrive. Rods actually hold more pigment than cones, which is why they are more sensitive, and that is the trade being made: pooling buys sensitivity and spends acuity. The displacement of the inner layers and the absence of capillaries help by keeping the light path clear, but the wiring is the decisive factor.',
      tests: 'lecture',
    },
  ],
};

export default ghpRetinaPhotoreceptors;
