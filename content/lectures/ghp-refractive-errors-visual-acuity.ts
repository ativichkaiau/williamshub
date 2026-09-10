import type { Lecture } from '../../lib/types';

export const ghpRefractiveErrorsVisualAcuity: Lecture = {
  id: 'ghp-refractive-errors-visual-acuity',
  title: 'Refractive Errors, Visual Acuity and the Aqueous Humour',
  system: 'neuro',
  source: 'Ch 49 — The Eye I — Optics of Vision',
  updated: '2026-09-09',
  tags: [
    { kind: 'system', label: 'Neuroscience' },
    { kind: 'lecture', label: 'Ch 49 Optics of Vision' },
    { kind: 'mechanism', label: 'Axial length vs refractive power → where the focus lands' },
    { kind: 'exam', label: 'Minus for myopia · plus for hyperopia · cylinder for astigmatism' },
    { kind: 'disease', label: 'Glaucoma as an outflow failure' },
  ],

  highYield: [
    '**Every refractive error is a mismatch between two numbers: the refractive power of the eye and the axial length of the globe.** In **emmetropia** the ciliary muscle is **relaxed** and parallel rays from a distant object land **exactly on the retina**. The eye can miss in only two ways — the **power is wrong for the length**, or the **length is wrong for the power** — and the two are interchangeable, which is why an **axial change of about 1 mm shifts the focus by roughly 3 dioptres** and why a cornea that is too steep produces the same blur as a globe that is too long. The master fact that organises the whole topic is that **accommodation can only ADD power, never subtract it**: it can rescue an eye whose focus falls **behind** the retina and can do **nothing whatever** for an eye whose focus already falls **in front** of it.',
    '**Myopia: the globe is too long for its power, the image forms in front of the retina, and only a diverging lens can fix it.** Most myopia is **axial** — the eye elongates during growth — though excessive corneal or lens power gives the same result. Because the focus is **anterior to the retina** and accommodation only pushes it further forward, **there is no way to sharpen distance vision by effort**; the myope has a **finite far point** and sees near objects clearly, hence the term short-sighted. Correction is a **concave (minus, diverging) lens** that spreads the rays before they enter the eye, moving the focal point back onto the retina, and the rule at the trial frame is to accept the **weakest concave lens** that gives best acuity, since a stronger minus lens simply forces the patient to accommodate. High axial myopia is not merely an optical nuisance: a stretched globe carries a raised lifetime risk of **retinal detachment, lattice degeneration, myopic maculopathy and open-angle glaucoma**.',
    '**Hyperopia: the globe is too short for its power, the image would form behind the retina, and accommodation hides the problem until it cannot.** The **convex (plus, converging) lens** is the correction, and it is chosen as the **strongest plus lens** the patient will accept, precisely because a weaker one leaves the ciliary muscle doing the work. Young hyperopes are the trap of this topic: **latent hyperopia** is masked by continuous accommodative effort, so **distance acuity may be a perfect 6/6** while the patient reports **frontal headache, eye ache and blurring after sustained near work**. Two consequences follow. First, **cycloplegic refraction is mandatory in children**, because only paralysing the ciliary muscle exposes the true error. Second, because **accommodation and convergence are yoked**, the accommodative effort drags the eyes inward and produces **accommodative esotropia** — a convergent squint that straightens in convex spectacles. A short eye is also a **crowded eye**, with a shallow anterior chamber and a narrow drainage angle, which is why **hyperopes are the population at risk of acute angle-closure glaucoma**.',
    '**Astigmatism is the error accommodation cannot touch, because the eye is not equally wrong in every direction.** The refracting surfaces — usually the **cornea** — are **toroidal rather than spherical**, so the **curvature differs between two principal meridians** that lie roughly at right angles. Rays in one meridian focus at a different distance from rays in the other, and instead of a point image the eye forms **two focal lines separated by the interval of Sturm**, with a blurred disc of least confusion in between. Vision is therefore **blurred at every distance**, and the giveaway is that **accommodation gives no relief**: rounding the lens adds power to **all meridians equally** and so can never abolish a **difference** between them. The correction is a **cylindrical lens set on the correct axis**, added to whatever spherical correction the eye needs. Marked or rapidly progressive irregular astigmatism in a young patient with corneal thinning and steepening is **keratoconus**.',
    '**Visual acuity is set by the fovea, and the fovea earns that role by geometry and by wiring, not by having more photopigment.** A normal eye resolves **two points about 25 seconds of arc apart**, which corresponds to an image separation of roughly **2 micrometres on the retina** — barely more than the **1.5 micrometre diameter of a foveal cone**, so the anatomy and the psychophysics agree. Four features make the **central fovea, about 0.35 mm across**, the limiting element: cones there are **slender and packed at maximum density**, the retina is **rod-free**, the **inner retinal layers and the retinal vessels are swept aside** into the foveal pit so that light reaches the photoreceptors almost unobstructed, and each foveal cone reports through a **near one-to-one midget bipolar and midget ganglion cell relay**. Move outward and the wiring reverses: **hundreds of rods converge on a single ganglion cell**, which buys exquisite sensitivity in the dark at the cost of resolution. Clinically, acuity is written as a fraction — **6/6 means the patient reads at 6 metres what a normal eye reads at 6 metres, and 6/60 means the patient must come to 6 metres to read what a normal eye reads at 60**.',
    '**Aqueous humour is made in one place, drains in another, and glaucoma is almost always a failure of the drain rather than the tap.** The **ciliary processes actively secrete sodium into the epithelial clefts**, with **chloride and bicarbonate following** and water dragged osmotically, producing about **2 to 3 microlitres per minute** — a rate that depends on **carbonic anhydrase**, which is exactly why **acetazolamide and dorzolamide lower pressure**. The fluid flows **from the posterior chamber, between lens and iris, through the pupil into the anterior chamber, out to the angle between iris and cornea, through the trabecular meshwork into the canal of Schlemm**, and then by aqueous veins into the **episcleral venous system** — a true venous drain, which is why blood can reflux into Schlemm canal. The vitreous, by contrast, is **gelatinous and does not flow**; it exchanges by diffusion. Normal intraocular pressure is about **12 to 20 mmHg, averaging near 15**. **Glaucoma is raised pressure from obstructed outflow** — sclerosed trabecular meshwork in the **chronic open-angle** form, or the peripheral iris blocking the angle in **acute angle closure**. The damage is mechanical and specific: pressure compresses the **axons leaving through the lamina cribrosa at the optic disc**, halting **axoplasmic transport**, so the disc **cups**, the **peripheral field is lost first in arcuate defects**, and **central acuity stays deceptively normal until very late**.',
  ],

  mechanism: {
    title: 'Where the focus lands: length, power, and the lens that corrects it',
    steps: [
      { id: 's1', label: 'Emmetropia: ciliary muscle relaxed, parallel rays land exactly on the retina' },
      { id: 's2', label: 'Globe too LONG for its power: focus falls in FRONT of the retina — myopia', emphasis: 'key' },
      { id: 's3', label: 'Globe too SHORT for its power: focus falls BEHIND the retina — hyperopia', emphasis: 'key' },
      { id: 's4', label: 'Accommodation only ADDS power, so it masks hyperopia and never helps myopia', emphasis: 'key' },
      { id: 's5', label: 'Unequal curvature of two meridians gives two focal lines — astigmatism', emphasis: 'key' },
      { id: 's6', label: 'Concave for myopia, convex for hyperopia, cylinder on axis for astigmatism' },
    ],
  },

  examFindings: [
    { sign: 'A 13-year-old cannot read the whiteboard but reads a book at 20 cm effortlessly; a concave lens restores 6/6', mechanism: 'Axial myopia — the elongated globe focuses distant rays in front of the retina, and near objects happen to fall on it', significance: 'key' },
    { sign: 'A 7-year-old has 6/6 distance acuity yet complains of frontal headache after homework, and one eye turns inward', mechanism: 'Latent hyperopia — sustained accommodation clears the image but drags convergence with it, producing accommodative esotropia', significance: 'key' },
    { sign: 'Blurring at every distance that no amount of squinting or effort improves, corrected only when a lens is rotated to one particular axis', mechanism: 'Astigmatism — accommodation adds power to all meridians equally and cannot abolish a difference between them', significance: 'key' },
    { sign: 'Sudden painful red eye with haloes around lights, nausea, a hazy cornea, a fixed mid-dilated oval pupil and a stony hard globe', mechanism: 'Acute angle closure — the peripheral iris seals the trabecular meshwork and pressure climbs within hours', significance: 'key' },
    { sign: 'Painless narrowing of the peripheral field noticed only when the patient bumps into door frames, with a cup-to-disc ratio of 0.8', mechanism: 'Chronic open-angle glaucoma — arcuate axon bundles at the disc poles die first while the foveal fibres survive', significance: 'key' },
    { sign: 'A patient blind in one eye still judges the distance to a cup accurately, especially when allowed to move the head', mechanism: 'Monocular depth cues — motion parallax, known size and interposition survive the loss of stereopsis', significance: 'supportive' },
  ],

  investigations: [
    { clue: 'Snellen acuity recorded as 6/60', meaning: 'The numerator is the testing distance in metres and the denominator the distance at which a normal eye reads that line — so smaller fractions mean worse vision' },
    { clue: 'Minimum angle of resolution of about 25 seconds of arc', meaning: 'Roughly 2 micrometres of separation on the retina, against a foveal cone diameter of about 1.5 micrometres — the fovea sets the ceiling' },
    { clue: 'Acuity improves when the patient looks through a pinhole', meaning: 'The defect is refractive rather than retinal or neural, because the pinhole cuts out the peripheral rays that blur the image' },
    { clue: 'Cycloplegic refraction in a squinting child', meaning: 'Paralysing the ciliary muscle unmasks latent hyperopia that vigorous accommodation was hiding' },
    { clue: 'Goldmann applanation tonometry reading of 15 mmHg', meaning: 'Normal — aqueous formation of 2 to 3 microlitres per minute is balanced by trabecular outflow into the canal of Schlemm' },
    { clue: 'Stereopsis on testing, plus intact motion parallax and relative size', meaning: 'Depth perception is layered: binocular disparity dominates within a few tens of metres, monocular cues carry the rest' },
  ],

  treatment: [
    { logic: 'Why it matters', detail: 'Reduce every stem to one question — where does the focus land relative to the retina? Focus **in front** means the eye has too much power for its length, so **subtract with a concave minus lens**. Focus **behind** means too little, so **add with a convex plus lens**. **Two focuses in two meridians** means a **cylinder on the right axis**. The same arithmetic explains why corneal surgery works at all: a few microns of tissue reshaped at the strongest refracting surface buys several dioptres. The optics that this module presupposes — the air-cornea interface, accommodation and presbyopia: [[ghp-optics-refraction-accommodation]]. What the sharply focused image is then converted into: [[visual-phototransduction]].' },
    { logic: 'Where it is examined', detail: 'Glaucoma questions almost always test **where the block is, not how much fluid is made**, so name the **trabecular meshwork and canal of Schlemm** and the treatment logic follows: **lower production** with carbonic anhydrase inhibitors, beta blockers or alpha-2 agonists, or **increase outflow** with prostaglandin analogues, pilocarpine, laser trabeculoplasty, and a **peripheral iridotomy** in angle closure. The bedside separation that carries the marks: a **painful red eye with haloes and a fixed mid-dilated pupil is an emergency**, whereas **painless peripheral field loss with a cupped disc is chronic**: [[fcp1-eye-red-eye]]. Why a cupped disc is the opposite of a swollen one: [[optic-nerve-disc-edema]].' },
  ],

  mnemonics: [
    { hook: 'MYopia takes MYnus', expansion: ['Myopic eye is too long, focus lands in front of the retina', 'Concave minus lens diverges the rays and pushes the focus back', 'Hyperopic eye is too short, so it takes plus'] },
    { hook: 'Made behind, drained in front', expansion: ['Ciliary processes secrete aqueous into the posterior chamber', 'Through the pupil into the anterior chamber and out to the angle', 'Trabecular meshwork to canal of Schlemm to episcleral veins — block it and pressure rises'] },
  ],

  traps: [
    {
      questionCategory: 'Whether accommodation can compensate for a given refractive error',
      wrongInstinct: 'A young patient with strong accommodation can simply focus harder and clear blurred distance vision',
      rightAnswer: 'Accommodation only adds power, so it compensates hyperopia and does absolutely nothing for myopia',
      why: 'Rounding the lens moves the focal point further forward, which is the correct direction for an eye focusing behind the retina and exactly the wrong direction for one already focusing in front of it.',
    },
    {
      questionCategory: 'What actually raises the pressure in glaucoma',
      wrongInstinct: 'The ciliary body is oversecreting aqueous humour',
      rightAnswer: 'Outflow is obstructed — at a sclerosed trabecular meshwork in open-angle disease, or by the peripheral iris sealing the angle in acute closure',
      why: 'Formation stays close to its usual 2 to 3 microlitres per minute in essentially all glaucoma, which is why most treatment is aimed at opening or bypassing the drainage route.',
    },
  ],

  quiz: [
    {
      id: 'q1',
      stem: 'A 16-year-old sees distant road signs as blurred smears but reads small print at 20 cm without difficulty. Acuity improves to 6/6 through a pinhole and is fully corrected by a -3.00 dioptre lens. Which statement best explains her condition?',
      options: [
        { id: 'a', text: 'The globe is too short, so the image would form behind the retina and a diverging lens moves it forward' },
        { id: 'b', text: 'The globe is too long for its refractive power, the image forms in front of the retina, and a diverging lens moves the focus back onto it' },
        { id: 'c', text: 'The ciliary muscle is in spasm, and the minus lens works by paralysing accommodation' },
        { id: 'd', text: 'The two corneal meridians differ in curvature, producing two focal lines that the spherical lens merges' },
      ],
      answerId: 'b',
      explanation: 'This is axial myopia. The eye has grown too long for the power supplied by its cornea and lens, so parallel rays from a distant object come to a focus in the vitreous, in front of the retina, and by the time they reach the photoreceptors they have diverged again into a blur circle. Near objects send diverging rays into the eye and therefore happen to focus correctly, which is why reading is unaffected. A concave minus lens diverges the incoming rays before they reach the cornea, shifting the focal point posteriorly onto the retina. A short globe describes hyperopia, and unequal meridians describe astigmatism, which a purely spherical lens cannot correct. Improvement through a pinhole simply confirms that the fault is refractive rather than retinal.',
      tests: 'mechanism',
    },
    {
      id: 'q2',
      stem: 'Visual acuity is highest when an image falls on the fovea. Which combination of features accounts for this?',
      options: [
        { id: 'a', text: 'Rod density is highest at the fovea, and rods have the smallest receptive fields in the retina' },
        { id: 'b', text: 'Convergence is greatest at the fovea, so many photoreceptors summate onto each ganglion cell' },
        { id: 'c', text: 'Slender densely packed cones, an absence of rods, inner retinal layers and vessels swept aside, and a near one-to-one relay from cone to midget bipolar to midget ganglion cell' },
        { id: 'd', text: 'The retina is thickest at the fovea, so more photopigment lies in the path of the light' },
      ],
      answerId: 'c',
      explanation: 'The limit of resolution is about 25 seconds of arc, which corresponds to roughly 2 micrometres on the retina, and a central foveal cone is about 1.5 micrometres wide — so the receptor mosaic itself is the bottleneck, and the fovea wins by having the finest mosaic. Three further features protect that advantage: the fovea is rod-free, so cone signals are not diluted; the ganglion cell and bipolar layers together with the retinal vessels are displaced radially into the foveal pit so that light reaches the cones almost unobstructed; and each cone reports through its own midget bipolar and midget ganglion cell instead of being pooled. High convergence is the peripheral arrangement, where hundreds of rods share a ganglion cell and trade resolution for sensitivity in dim light, and the fovea is the thinnest part of the retina, not the thickest.',
      tests: 'lecture',
    },
    {
      id: 'q3',
      stem: 'A 64-year-old hyperopic woman develops a severe right-sided headache, a painful red eye and haloes around lights after two hours in a dark cinema. The cornea is hazy, the pupil is mid-dilated and unreactive, the globe feels hard, and intraocular pressure is 52 mmHg. What is the immediate mechanism of the pressure rise?',
      options: [
        { id: 'a', text: 'The ciliary processes have increased aqueous secretion several-fold in response to pupillary dilation' },
        { id: 'b', text: 'The peripheral iris has been pushed against the trabecular meshwork, obstructing aqueous outflow at the angle' },
        { id: 'c', text: 'Thrombosis of the central retinal vein has raised episcleral venous pressure' },
        { id: 'd', text: 'The vitreous has expanded and is compressing the retina from behind' },
      ],
      answerId: 'b',
      explanation: 'Dim light dilates the pupil, which bunches the peripheral iris into the already shallow angle of a short hyperopic eye and seals off the trabecular meshwork. Aqueous continues to be secreted at its usual 2 to 3 microlitres per minute with nowhere to leave, so pressure climbs within hours to levels that cloud the cornea by forcing fluid into the stroma and that ischaemically fix the iris sphincter in mid-dilation. Glaucoma is essentially always a drainage problem rather than a secretion problem, which is why the definitive treatment is a peripheral iridotomy that reopens a route from posterior to anterior chamber, with carbonic anhydrase inhibitors and topical agents used to buy time. Untreated, the sustained pressure crushes the axons where they pass through the lamina cribrosa and blinds the eye.',
      tests: 'disease',
    },
  ],
};

export default ghpRefractiveErrorsVisualAcuity;
